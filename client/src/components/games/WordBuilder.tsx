// ============================================================
// WordBuilder — Tap letters to build words
// Supports Set 1, 2, 3 | ElevenLabs CDN audio
// Design: Playful Brutalism
// ============================================================
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WORD_BUILD_CHALLENGES, getTileColor, type SoundSet } from "@/lib/phonicsData";
import { playPhonicsAudio, AUDIO_MAP } from "@/lib/audioMap";
import OwlMascot from "@/components/OwlMascot";
import ProgressBar from "@/components/ProgressBar";

interface WordBuilderProps {
  onScore: (correct: boolean) => void;
  onFinish: () => void;
  score: number;
  soundSet?: SoundSet;
}

const QUESTIONS_PER_ROUND = 8;

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function WordBuilder({ onScore, onFinish, score, soundSet = 1 }: WordBuilderProps) {
  const setChallenges = WORD_BUILD_CHALLENGES.filter(c => c.set === soundSet);
  const allChallenges = setChallenges.length >= 4 ? setChallenges : WORD_BUILD_CHALLENGES.filter(c => c.set <= soundSet);
  const [challenges] = useState(() => shuffle(allChallenges).slice(0, Math.min(QUESTIONS_PER_ROUND, allChallenges.length)));
  const [current, setCurrent] = useState(0);
  const [shuffledLetters, setShuffledLetters] = useState<string[]>([]);
  const [placed, setPlaced] = useState<(string | null)[]>([]);
  const [usedIndices, setUsedIndices] = useState<Set<number>>(new Set());
  const [owlState, setOwlState] = useState<"idle" | "correct" | "wrong" | "thinking">("thinking");
  const [owlMessage, setOwlMessage] = useState("Tap the letters to build the word!");
  const [checking, setChecking] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const challenge = challenges[current];

  useEffect(() => {
    if (challenge) {
      // Add 2 distractor letters
      const distractors = "abcdefghijklmnoprstuw"
        .split("")
        .filter(l => !challenge.letters.includes(l));
      const extras = shuffle(distractors).slice(0, 2);
      setShuffledLetters(shuffle([...challenge.letters, ...extras]));
      setPlaced(new Array(challenge.letters.length).fill(null));
      setUsedIndices(new Set());
      setOwlState("thinking");
      setOwlMessage(`Hint: ${challenge.hint}`);
      setChecking(false);
      setAnimKey(k => k + 1);
    }
  }, [current, challenge]);

  const handleLetterTap = useCallback((letter: string, srcIdx: number) => {
    if (checking || usedIndices.has(srcIdx)) return;
    const firstEmpty = placed.findIndex(p => p === null);
    if (firstEmpty === -1) return;

    // Play the letter sound
    playPhonicsAudio(letter);

    const newPlaced = [...placed];
    newPlaced[firstEmpty] = letter;
    const newUsed = new Set(usedIndices);
    newUsed.add(srcIdx);
    setPlaced(newPlaced);
    setUsedIndices(newUsed);

    // Auto-check when all slots filled
    if (newPlaced.every(p => p !== null)) {
      const built = newPlaced.join("");
      const correct = built === challenge.word;
      setChecking(true);
      onScore(correct);

      // Play the word audio
      const wordKey = `word_${challenge.word}`;
      setTimeout(() => {
        if (AUDIO_MAP[wordKey]) {
          playPhonicsAudio(wordKey);
        }
      }, 300);

      if (correct) {
        setOwlState("correct");
        setOwlMessage(`Brilliant! You spelled "${challenge.word}"! 🎉`);
      } else {
        setOwlState("wrong");
        setOwlMessage(`Good try! The word is "${challenge.word}". Let's keep going!`);
      }

      setTimeout(() => {
        if (current + 1 >= challenges.length) {
          onFinish();
        } else {
          setCurrent(c => c + 1);
        }
      }, 2000);
    }
  }, [checking, usedIndices, placed, challenge, current, challenges.length, onScore, onFinish]);

  const handleRemoveLetter = useCallback((slotIdx: number) => {
    if (checking || placed[slotIdx] === null) return;
    const letter = placed[slotIdx]!;

    // Find which source index had this letter
    const srcIdx = shuffledLetters.findIndex((l, i) => l === letter && usedIndices.has(i));
    if (srcIdx === -1) return;

    const newPlaced = [...placed];
    newPlaced[slotIdx] = null;
    const newUsed = new Set(usedIndices);
    newUsed.delete(srcIdx);
    setPlaced(newPlaced);
    setUsedIndices(newUsed);
  }, [checking, placed, shuffledLetters, usedIndices]);

  if (!challenge) return null;

  const tileColor = getTileColor(current + 2);

  return (
    <div className="flex flex-col gap-6 w-full max-w-lg mx-auto">
      <ProgressBar current={current} total={challenges.length} score={score} />

      {/* Hint card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={animKey}
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -60, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="brut-card p-5 flex flex-col items-center gap-2"
          style={{ background: tileColor.bg }}
        >
          <p className="font-fredoka-one text-2xl" style={{ color: tileColor.text }}>
            Build the word!
          </p>
          <p className="font-nunito font-semibold text-sm opacity-80" style={{ color: tileColor.text }}>
            {challenge.hint}
          </p>
          <p className="font-nunito text-xs opacity-60" style={{ color: tileColor.text }}>
            {challenge.letters.length} letter{challenge.letters.length !== 1 ? "s" : ""}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Answer slots */}
      <div className="flex justify-center gap-3 flex-wrap">
        {placed.map((letter, i) => {
          const isCorrectSlot = checking && letter === challenge.letters[i];
          const isWrongSlot = checking && letter !== null && letter !== challenge.letters[i];

          return (
            <motion.button
              key={i}
              onClick={() => handleRemoveLetter(i)}
              className="letter-tile"
              style={{
                background: isCorrectSlot ? "#86EFAC" : isWrongSlot ? "#FCA5A5" : letter ? "#FDE047" : "white",
                minWidth: "4rem",
              }}
              whileHover={letter && !checking ? { y: -3 } : {}}
              whileTap={letter && !checking ? { y: 1 } : {}}
            >
              {letter || ""}
            </motion.button>
          );
        })}
      </div>

      {/* Available letters */}
      <div className="flex justify-center gap-3 flex-wrap">
        {shuffledLetters.map((letter, i) => (
          <motion.button
            key={i}
            onClick={() => handleLetterTap(letter, i)}
            disabled={usedIndices.has(i) || checking}
            className="letter-tile"
            style={{
              background: usedIndices.has(i) ? "#E5E7EB" : "#0D9488",
              color: usedIndices.has(i) ? "#9CA3AF" : "white",
              opacity: usedIndices.has(i) ? 0.5 : 1,
            }}
            whileHover={!usedIndices.has(i) && !checking ? { y: -3, scale: 1.05 } : {}}
            whileTap={!usedIndices.has(i) && !checking ? { scale: 0.95 } : {}}
          >
            {letter}
          </motion.button>
        ))}
      </div>

      {/* Clear button */}
      {placed.some(p => p !== null) && !checking && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="brut-btn mx-auto"
          style={{ background: "#F3F4F6" }}
          onClick={() => {
            setPlaced(new Array(challenge.letters.length).fill(null));
            setUsedIndices(new Set());
          }}
        >
          Clear ✕
        </motion.button>
      )}

      {/* Owl mascot */}
      <div className="flex justify-center">
        <OwlMascot state={owlState} message={owlMessage} size="sm" />
      </div>
    </div>
  );
}
