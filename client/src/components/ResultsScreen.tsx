// ============================================================
// ResultsScreen — End-of-game celebration screen
// Playful Brutalism Design System
// ============================================================
import { motion } from "framer-motion";
import { useEffect } from "react";
import type { GameState } from "@/hooks/useGameState";
import type { GameSession } from "@/hooks/useProgress";

interface ResultsScreenProps {
  state: GameState;
  onPlayAgain: () => void;
  onHome: () => void;
  onRecordSession?: (session: Omit<GameSession, "id" | "date">) => void;
}

const OWL_CORRECT = "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/rwi-owl-correct-D6EfGvH3GYuyzqurCxtWEq.webp";
const OWL_THINKING = "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/rwi-owl-thinking-CRTebQGQLHVggfRDQno9aW.webp";

const MESSAGES = [
  { min: 0, max: 0.4, text: "Keep practising! You're getting there!", img: OWL_THINKING },
  { min: 0.4, max: 0.7, text: "Good effort! Keep it up!", img: OWL_THINKING },
  { min: 0.7, max: 0.9, text: "Well done! You're a phonics star!", img: OWL_CORRECT },
  { min: 0.9, max: 1.1, text: "AMAZING! Perfect phonics champion!", img: OWL_CORRECT },
];

export default function ResultsScreen({ state, onPlayAgain, onHome, onRecordSession }: ResultsScreenProps) {
  const pct = state.total > 0 ? state.score / state.total : 0;
  const msg = MESSAGES.find(m => pct >= m.min && pct < m.max) || MESSAGES[3];
  const stars = state.stars;

  useEffect(() => {
    if (onRecordSession && state.mode === "results" && state.total > 0) {
      const modeMap: Record<string, GameSession["mode"]> = {
        "sound-quiz": "sound-quiz",
        "word-builder": "word-builder",
        "sound-match": "sound-match",
      };
      onRecordSession({
        mode: (modeMap[state.prevMode] || "sound-quiz") as GameSession["mode"],
        score: state.score,
        total: state.total,
        stars,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const confettiColors = ["#0D9488", "#F87171", "#FDE047", "#34D399", "#A78BFA"];

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto py-4">
      {/* Confetti dots */}
      <div className="relative w-full h-16 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              background: confettiColors[i % confettiColors.length],
              border: "2px solid #1A1A2E",
            }}
            initial={{ y: -20, opacity: 0, rotate: 0 }}
            animate={{ y: 80, opacity: [0, 1, 0], rotate: 360 }}
            transition={{ delay: i * 0.08, duration: 1.2, ease: "easeIn" }}
          />
        ))}
      </div>

      {/* Owl */}
      <motion.img
        src={msg.img}
        alt="Owl"
        className="w-32 h-32 object-contain"
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
      />

      {/* Stars */}
      <motion.div
        className="flex gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {[1, 2, 3].map(s => (
          <motion.span
            key={s}
            className="text-5xl"
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: s <= stars ? 1 : 0.5, rotate: 0, opacity: s <= stars ? 1 : 0.3 }}
            transition={{ delay: 0.5 + s * 0.15, type: "spring", stiffness: 400 }}
          >
            ⭐
          </motion.span>
        ))}
      </motion.div>

      {/* Score card */}
      <motion.div
        className="brut-card p-6 w-full text-center"
        style={{ background: "#FDE047" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
      >
        <h2 className="font-fredoka-one text-3xl text-gray-900 mb-1">{msg.text}</h2>
        <p className="font-nunito font-bold text-xl text-gray-800">
          {state.score} / {state.total} correct
        </p>
        {state.bestStreak > 1 && (
          <p className="font-nunito text-sm text-gray-700 mt-1">
            Best streak: {state.bestStreak} in a row!
          </p>
        )}
      </motion.div>

      {/* Score breakdown */}
      <motion.div
        className="brut-card p-4 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex justify-around text-center">
          <div>
            <p className="font-fredoka-one text-3xl text-teal-600">{state.score}</p>
            <p className="font-nunito text-xs font-semibold text-gray-600">Correct</p>
          </div>
          <div className="w-px bg-gray-200" />
          <div>
            <p className="font-fredoka-one text-3xl text-coral-500" style={{ color: "#F87171" }}>
              {state.total - state.score}
            </p>
            <p className="font-nunito text-xs font-semibold text-gray-600">To practise</p>
          </div>
          <div className="w-px bg-gray-200" />
          <div>
            <p className="font-fredoka-one text-3xl text-yellow-500">{state.bestStreak}</p>
            <p className="font-nunito text-xs font-semibold text-gray-600">Best streak</p>
          </div>
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="flex gap-4 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <button
          className="brut-btn flex-1"
          style={{ background: "#0D9488", color: "white" }}
          onClick={onPlayAgain}
        >
          Play Again
        </button>
        <button
          className="brut-btn flex-1"
          style={{ background: "white" }}
          onClick={onHome}
        >
          Home
        </button>
      </motion.div>
    </div>
  );
}
