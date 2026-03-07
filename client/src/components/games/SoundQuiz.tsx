// ============================================================
// SoundQuiz — "What sound does this letter make?"
// Playful Brutalism Design System
// ============================================================
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SET1_SOUNDS, getTileColor, type PhonicsSound } from "@/lib/phonicsData";
import OwlMascot from "@/components/OwlMascot";
import ProgressBar from "@/components/ProgressBar";

interface SoundQuizProps {
  onScore: (correct: boolean) => void;
  onFinish: () => void;
  score: number;
}

const QUESTIONS_PER_ROUND = 10;

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function getOptions(correct: PhonicsSound, all: PhonicsSound[]): PhonicsSound[] {
  const wrong = shuffle(all.filter(s => s.letter !== correct.letter)).slice(0, 3);
  return shuffle([correct, ...wrong]);
}

export default function SoundQuiz({ onScore, onFinish, score }: SoundQuizProps) {
  const [questions] = useState(() => shuffle(SET1_SOUNDS).slice(0, QUESTIONS_PER_ROUND));
  const [current, setCurrent] = useState(0);
  const [options, setOptions] = useState<PhonicsSound[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [owlState, setOwlState] = useState<"idle" | "correct" | "wrong" | "thinking">("thinking");
  const [owlMessage, setOwlMessage] = useState<string>("What sound does this letter make?");
  const [animKey, setAnimKey] = useState(0);

  const q = questions[current];

  useEffect(() => {
    if (q) {
      setOptions(getOptions(q, SET1_SOUNDS));
      setSelected(null);
      setOwlState("thinking");
      setOwlMessage("What sound does this letter make?");
      setAnimKey(k => k + 1);
    }
  }, [current, q]);

  const handleAnswer = useCallback((option: PhonicsSound) => {
    if (selected) return;
    setSelected(option.letter);
    const correct = option.letter === q.letter;
    onScore(correct);

    if (correct) {
      setOwlState("correct");
      setOwlMessage(`Amazing! "${q.letter}" says "${q.sound}" — like in "${q.exampleWord}" ${q.exampleImage}`);
    } else {
      setOwlState("wrong");
      setOwlMessage(`Not quite! "${q.letter}" says "${q.sound}" — like in "${q.exampleWord}" ${q.exampleImage}`);
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

  const tileColor = getTileColor(current);

  return (
    <div className="flex flex-col gap-6 w-full max-w-lg mx-auto">
      <ProgressBar current={current} total={QUESTIONS_PER_ROUND} score={score} />

      {/* Main letter card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={animKey}
          initial={{ x: 60, opacity: 0, rotate: 3 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          exit={{ x: -60, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="brut-card p-8 flex flex-col items-center gap-3"
          style={{ background: tileColor.bg }}
        >
          <p className="font-nunito font-bold text-sm uppercase tracking-widest opacity-70"
            style={{ color: tileColor.text }}>
            What sound?
          </p>
          <span
            className="font-fredoka-one select-none leading-none"
            style={{
              fontSize: "clamp(6rem, 20vw, 9rem)",
              color: tileColor.text,
              textShadow: `3px 3px 0 rgba(0,0,0,0.2)`,
            }}
          >
            {q.letter}
          </span>
          <p className="font-nunito font-semibold text-sm opacity-60"
            style={{ color: tileColor.text }}>
            {q.mnemonic}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Answer options */}
      <div className="grid grid-cols-2 gap-3">
        {options.map((opt, i) => {
          const isSelected = selected === opt.letter;
          const isCorrect = opt.letter === q.letter;
          const showResult = selected !== null;

          let bgColor = "white";
          let borderColor = "#1A1A2E";
          if (showResult && isSelected && isCorrect) bgColor = "#86EFAC";
          if (showResult && isSelected && !isCorrect) bgColor = "#FCA5A5";
          if (showResult && !isSelected && isCorrect) bgColor = "#86EFAC";

          return (
            <motion.button
              key={opt.letter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              onClick={() => handleAnswer(opt)}
              disabled={!!selected}
              className="brut-card p-4 flex flex-col items-center gap-1 text-center disabled:cursor-not-allowed"
              style={{ background: bgColor, borderColor }}
              whileHover={!selected ? { y: -2, boxShadow: "7px 7px 0 #1A1A2E" } : {}}
              whileTap={!selected ? { y: 2, boxShadow: "2px 2px 0 #1A1A2E" } : {}}
            >
              <span className="font-fredoka-one text-3xl text-gray-900">{opt.letter}</span>
              <span className="font-nunito text-sm font-semibold text-gray-600">
                "{opt.sound}"
              </span>
              <span className="text-lg">{opt.exampleImage}</span>
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
