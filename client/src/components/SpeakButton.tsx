// ============================================================
// SpeakButton — ElevenLabs CDN audio pronunciation button
//
// Uses playPhonicsAudio() which:
//   - British English: fetches CDN audio as blob with audio/mpeg MIME type
//     (fixes Safari/iOS where application/octet-stream blocks playback)
//   - American English: uses Web Speech API with en-US voice
//
// Falls back to Web Speech API if audioKey not found in AUDIO_MAP.
// ============================================================
import { Volume2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { playPhonicsAudio } from "@/lib/audioMap";

interface SpeakButtonProps {
  /** Key into AUDIO_MAP (e.g. "m", "sh", "word_cat") */
  audioKey?: string;
  /** Fallback text for Web Speech API if audioKey is not provided */
  text?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "teal" | "yellow" | "white" | "ghost";
  className?: string;
}

export default function SpeakButton({
  audioKey,
  text,
  label,
  size = "md",
  variant = "teal",
  className = "",
}: SpeakButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) return;

    const key = audioKey || "";

    if (key) {
      // playPhonicsAudio handles both British (CDN blob) and American (Web Speech)
      setIsPlaying(true);
      try {
        await playPhonicsAudio(key);
      } finally {
        // Keep button active for a short visual feedback window
        setTimeout(() => setIsPlaying(false), 600);
      }
      return;
    }

    // No audioKey — use Web Speech API with fallback text
    const speakText = text || "";
    if (speakText && "speechSynthesis" in window) {
      setIsPlaying(true);
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(speakText);
      utt.lang = "en-GB";
      utt.rate = 0.75;
      utt.pitch = 1.1;
      utt.onend = () => setIsPlaying(false);
      utt.onerror = () => setIsPlaying(false);
      window.speechSynthesis.speak(utt);
    }
  };

  const sizeClasses = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-12 h-12",
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    teal:   { background: "#0D9488", color: "#fff",    border: "2px solid #1A1A2E", boxShadow: "2px 2px 0 #1A1A2E" },
    yellow: { background: "#FDE047", color: "#1A1A2E", border: "2px solid #1A1A2E", boxShadow: "2px 2px 0 #1A1A2E" },
    white:  { background: "#fff",    color: "#1A1A2E", border: "2px solid #1A1A2E", boxShadow: "2px 2px 0 #1A1A2E" },
    ghost:  { background: "transparent", color: "#1A1A2E", border: "2px solid #1A1A2E", boxShadow: "none" },
  };

  return (
    <motion.button
      whileTap={{ scale: 0.88 }}
      whileHover={{ scale: 1.1 }}
      onClick={handleClick}
      aria-label={label || "Hear the sound"}
      title={label || "Hear the sound"}
      className={`rounded-lg flex items-center justify-center transition-all ${sizeClasses[size]} ${className}`}
      style={{
        ...variantStyles[variant],
        opacity: isPlaying ? 0.7 : 1,
      }}
    >
      <Volume2
        className={size === "lg" ? "w-5 h-5" : "w-4 h-4"}
        style={{ animation: isPlaying ? "pulse 0.6s ease-in-out infinite" : "none" }}
      />
    </motion.button>
  );
}
