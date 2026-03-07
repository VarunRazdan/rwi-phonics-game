// ============================================================
// OwlMascot — Animated owl guide character
// Playful Brutalism Design System
// ============================================================
import { motion, AnimatePresence } from "framer-motion";

interface OwlMascotProps {
  state: "idle" | "correct" | "wrong" | "thinking";
  message?: string;
  size?: "sm" | "md" | "lg";
}

const OWL_CORRECT = "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/rwi-owl-correct-D6EfGvH3GYuyzqurCxtWEq.webp";
const OWL_THINKING = "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/rwi-owl-thinking-CRTebQGQLHVggfRDQno9aW.webp";

const sizeMap = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
};

export default function OwlMascot({ state, message, size = "md" }: OwlMascotProps) {
  const imgSrc = state === "correct" ? OWL_CORRECT : OWL_THINKING;

  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div
        key={state}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className={`${sizeMap[size]} relative`}
      >
        <img
          src={imgSrc}
          alt={`Owl ${state}`}
          className="w-full h-full object-contain"
        />
        {state === "correct" && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.5, 0] }}
            transition={{ duration: 0.6, times: [0, 0.5, 1] }}
            className="absolute -top-2 -right-2 text-2xl"
          >
            ⭐
          </motion.div>
        )}
        {state === "wrong" && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.4 }}
            className="absolute -top-2 -right-2 text-2xl"
          >
            💭
          </motion.div>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {message && (
          <motion.div
            key={message}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="brut-card px-4 py-2 text-center max-w-xs"
            style={{ background: state === "correct" ? "#FDE047" : state === "wrong" ? "#FEE2E2" : "white" }}
          >
            <p className="font-bold text-sm text-gray-900">{message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
