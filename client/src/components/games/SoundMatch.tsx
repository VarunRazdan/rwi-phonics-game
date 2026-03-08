// ============================================================
// SoundMatch — Match the letter to its example word
// Supports Set 1, 2, 3 | ElevenLabs CDN audio
// Design: Playful Brutalism
// ============================================================
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ALL_SOUNDS, getTileColor, type SoundSet } from "@/lib/phonicsData";
import { playPhonicsAudio, AUDIO_MAP } from "@/lib/audioMap";
import OwlMascot from "@/components/OwlMascot";
import ProgressBar from "@/components/ProgressBar";
import SpeakButton from "@/components/SpeakButton";

interface SoundMatchProps {
  onScore: (correct: boolean) => void;
  onFinish: () => void;
  score: number;
  soundSet?: SoundSet;
}

const QUESTIONS_PER_ROUND = 10;

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

interface MatchQuestion {
  letter: string;
  audioKey: string;
  correctWord: string;
  correctEmoji: string;
  options: Array<{ word: string; emoji: string; letter: string; wordAudioKey?: string }>;
}

export default function SoundMatch({ onScore, onFinish, score, soundSet = 1 }: SoundMatchProps) {
  const sounds = ALL_SOUNDS[soundSet];
  const [questions] = useState<MatchQuestion[]>(() => {
    const pool = shuffle(sounds).slice(0, Math.min(QUESTIONS_PER_ROUND, sounds.length));
    return pool.map(q => {
      const wrong = shuffle(sounds.filter(s => s.letter !== q.letter)).slice(0, 3);
      const options = shuffle([
        { word: q.exampleWord, emoji: q.exampleImage, letter: q.letter, wordAudioKey: q.wordAudioKey },
        ...wrong.map(w => ({ word: w.exampleWord, emoji: w.exampleImage, letter: w.letter, wordAudioKey: w.wordAudioKey })),
      ]);
      return {
        letter: q.letter,
        audioKey: q.audioKey,
        correctWord: q.exampleWord,
        correctEmoji: q.exampleImage,
        options,
      };
    });
  });

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [owlState, setOwlState] = useState<"idle" | "correct" | "wrong" | "thinking">("thinking");
  const [owlMessage, setOwlMessage] = useState("Which word starts with this sound?");
  const [animKey, setAnimKey] = useState(0);

  const q = questions[current];

  useEffect(() => {
    setSelected(null);
    setOwlState("thinking");
    setOwlMessage("Which word starts with this sound?");
    setAnimKey(k => k + 1);
    // Auto-play the letter sound
    if (q) {
      const timer = setTimeout(() => {
        playPhonicsAudio(q.audioKey);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [current, q]);

  const handleAnswer = useCallback((optLetter: string, optWord: string, wordAudioKey?: string) => {
    if (selected) return;
    setSelected(optLetter);
    const correct = optLetter === q.letter;
    onScore(correct);

    // Play the word audio
    const wKey = wordAudioKey || `word_${optWord}`;
    setTimeout(() => {
      if (AUDIO_MAP[wKey]) {
        playPhonicsAudio(wKey);
      }
    }, 200);

    if (correct) {
      setOwlState("correct");
      setOwlMessage(`Yes! "${q.letter}" is in "${optWord}"! Great matching!`);
    } else {
      setOwlState("wrong");
      setOwlMessage(`Not quite! "${q.letter}" goes with "${q.correctWord}" ${q.correctEmoji}`);
    }

    setTimeout(() => {
      if (current + 1 >= questions.length) {
        onFinish();
      } else {
        setCurrent(c => c + 1);
      }
    }, 1800);
  }, [selected, q, current, questions.length, onScore, onFinish]);

  if (!q) return null;

  const tileColor = getTileColor(current + 4);

  return (
    <div className="flex flex-col gap-6 w-full max-w-lg mx-auto">
      <ProgressBar current={current} total={questions.length} score={score} />

      {/* Letter display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={animKey}
          initial={{ scale: 0.7, opacity: 0, rotate: -5 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0.7, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className="brut-card p-8 flex flex-col items-center gap-2"
          style={{ background: tileColor.bg }}
        >
          <p className="font-nunito font-bold text-sm uppercase tracking-widest opacity-70"
            style={{ color: tileColor.text }}>
            Which word starts with...
          </p>
          <div className="flex items-center gap-4">
            <span
              className="font-fredoka-one leading-none select-none"
              style={{
                fontSize: "clamp(5rem, 18vw, 8rem)",
                color: tileColor.text,
                textShadow: `3px 3px 0 rgba(0,0,0,0.2)`,
              }}
            >
              {q.letter}
            </span>
            <SpeakButton
              audioKey={q.audioKey}
              label={`Hear the sound ${q.letter}`}
              variant="white"
              size="lg"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Word options */}
      <div className="grid grid-cols-2 gap-3">
        {q.options.map((opt, i) => {
          const isSelected = selected === opt.letter;
          const isCorrect = opt.letter === q.letter;
          const showResult = selected !== null;

          let bgColor = "white";
          if (showResult && isSelected && isCorrect) bgColor = "#86EFAC";
          if (showResult && isSelected && !isCorrect) bgColor = "#FCA5A5";
          if (showResult && !isSelected && isCorrect) bgColor = "#86EFAC";

          return (
            <motion.button
              key={`${opt.letter}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              onClick={() => handleAnswer(opt.letter, opt.word, opt.wordAudioKey)}
              disabled={!!selected}
              className="brut-card p-5 flex flex-col items-center gap-2 text-center disabled:cursor-not-allowed"
              style={{ background: bgColor, boxShadow: "5px 5px 0 #1A1A2E" }}
              whileHover={!selected ? { y: -2, boxShadow: "7px 7px 0 #1A1A2E" } : {}}
              whileTap={!selected ? { y: 2, boxShadow: "2px 2px 0 #1A1A2E" } : {}}
            >
              <span className="text-4xl">{opt.emoji}</span>
              <span className="font-fredoka-one text-2xl text-gray-900">{opt.word}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Owl mascot */}
      <div className="flex justify-center mt-2">
        <OwlMascot state={owlState} message={owlMessage} size="sm" />
      </div>
    </div>
  );
}
