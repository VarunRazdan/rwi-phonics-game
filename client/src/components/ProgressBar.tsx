// ============================================================
// ProgressBar — Brutalist chunky progress indicator
// ============================================================
import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
  score: number;
}

export default function ProgressBar({ current, total, score }: ProgressBarProps) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="flex items-center gap-3 w-full">
      <span className="font-bold text-sm text-gray-700 whitespace-nowrap font-nunito">
        {current}/{total}
      </span>
      <div className="progress-track flex-1">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      <div
        className="brut-card px-3 py-1 flex items-center gap-1"
        style={{ background: "#FDE047" }}
      >
        <span className="text-lg">⭐</span>
        <span className="font-bold text-gray-900">{score}</span>
      </div>
    </div>
  );
}
