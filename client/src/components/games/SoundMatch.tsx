// ============================================================
// SoundMatch — Match the letter to its example word
// Playful Brutalism Design System
// ============================================================
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SET1_SOUNDS, getTileColor } from "@/lib/phonicsData";
import OwlMascot from "@/components/OwlMascot";
import ProgressBar from "@/components/ProgressBar";

interface SoundMatchProps {
  onScore: (correct: boolean) => void;
  onFinish: () => void;
  score: number;
}

const QUESTIONS_PER_ROUND = 10;

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

interface MatchQuestion {
  letter: string;
  correctWord: string;
  correctEmoji: string;
  options: Array<{ word: string; emoji: string; letter: string }>;
}

export default function SoundMatch({ onScore, onFinish, score }: SoundMatchProps) {
  const [questions] = useState<MatchQuestion[]>(() => {
    const pool = shuffle(SET1_SOUNDS).slice(0, QUESTIONS_PER_ROUND);
    return pool.map(q => {
      const wrong = shuffle(SET1_SOUNDS.filter(s => s.letter !== q.letter)).slice(0, 3);
      const options = shuffle([
        { word: q.exampleWord, emoji: q.exampleImage, letter: q.letter },
        ...wrong.map(w => ({ word: w.exampleWord, emoji: w.exampleImage, letter: w.letter })),
      ]);
      return {
        letter: q.letter,
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
  }, [current]);

  const handleAnswer = useCallback((optLetter: string, optWord: string) => {
    if (selected) return;
    setSelected(optLetter);
    const correct = optLetter === q.letter;
    onScore(correct);

    if (correct) {
      setOwlState("correct");
      setOwlMessage(`Yes! "${q.letter}" is in "${optWord}"! Great matching!`);
    } else {
      setOwlState("wrong");
      setOwlMessage(`Not quite! "${q.letter}" goes with "${q.correctWord}" ${q.correctEmoji}`);
    }

    setTimeout(() => {
      if (current + 1 >= QUESTIONS_PER_ROUND) {
        onFinish();
      } else {
        setCurrent(c => c + 1);
      }
    }, 1800);
  }, [selected, q, current, onScore, onFinish]);

  if (!q) return null;

  const tileColor = getTileColor(current + 4);

  return (
    <div className="flex flex-col gap-6 w-full max-w-lg mx-auto">
      <ProgressBar current={current} total={QUESTIONS_PER_ROUND} score={score} />

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
              key={opt.letter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              onClick={() => handleAnswer(opt.letter, opt.word)}
              disabled={!!selected}
              className="brut-card p-5 flex flex-col items-center gap-2 text-center disabled:cursor-not-allowed"
              style={{ background: bgColor }}
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
