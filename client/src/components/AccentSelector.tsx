// ============================================================
// AccentSelector — Toggle between British and American English
// ============================================================
import { useSpeechContext } from "@/contexts/SpeechContext";
import type { AccentType } from "@/hooks/useSpeech";
import { motion } from "framer-motion";

const ACCENTS: { value: AccentType; flag: string; label: string; sublabel: string }[] = [
  { value: "en-GB", flag: "🇬🇧", label: "British English", sublabel: "en-GB" },
  { value: "en-US", flag: "🇺🇸", label: "American English", sublabel: "en-US" },
];

export default function AccentSelector() {
  const { accent, changeAccent, isSupported } = useSpeechContext();

  if (!isSupported) return null;

  return (
    <div className="flex items-center gap-2">
      {ACCENTS.map((a) => {
        const isActive = accent === a.value;
        return (
          <motion.button
            key={a.value}
            whileTap={{ scale: 0.95 }}
            onClick={() => changeAccent(a.value)}
            className="flex items-center gap-2 px-3 py-2 rounded-xl font-nunito text-sm font-semibold transition-all"
            style={{
              background: isActive ? "#1A1A2E" : "#fff",
              color: isActive ? "#FDE047" : "#1A1A2E",
              border: "2px solid #1A1A2E",
              boxShadow: isActive ? "3px 3px 0 #0D9488" : "2px 2px 0 #1A1A2E",
            }}
          >
            <span className="text-lg">{a.flag}</span>
            <span className="hidden sm:inline">{a.label}</span>
            <span className="sm:hidden">{a.sublabel}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
