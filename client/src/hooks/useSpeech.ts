// ============================================================
// useSpeech — Phonics audio hook
// Uses ElevenLabs CDN audio (American English - Jessica voice)
// Web Speech API kept as fallback for mnemonic phrases
// ============================================================
import { useState, useCallback, useEffect, useRef } from "react";

export type AccentType = "en-US";

export function useSpeech() {
  const [isSupported, setIsSupported] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setIsSupported(true);

      const loadVoices = () => {
        voicesRef.current = window.speechSynthesis.getVoices();
      };

      loadVoices();
      window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
      return () => {
        window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
      };
    }
  }, []);

  const getBestVoice = useCallback((): SpeechSynthesisVoice | null => {
    const voices = voicesRef.current;
    if (!voices.length) return null;
    const usVoice = voices.find(v => v.lang === "en-US");
    if (usVoice) return usVoice;
    return voices.find(v => v.lang.startsWith("en")) || null;
  }, []);

  /**
   * Speak a phonics sound or word.
   * @param text — the text to speak
   * @param rate — speech rate (0.5–2.0, default 0.85 for clarity)
   * @param pitch — pitch (0–2, default 1.1 for child-friendly)
   */
  const speak = useCallback((text: string, rate = 0.85, pitch = 1.1) => {
    if (!isSupported) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = rate;
    utterance.pitch = pitch;

    const voice = getBestVoice();
    if (voice) utterance.voice = voice;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }, [isSupported, getBestVoice]);

  /**
   * Speak a phonics sound with a slow, clear rate for children
   */
  const speakSound = useCallback((sound: string) => {
    speak(sound, 0.7, 1.1);
  }, [speak]);

  /**
   * Speak a word clearly
   */
  const speakWord = useCallback((word: string) => {
    speak(word, 0.8, 1.0);
  }, [speak]);

  /**
   * Speak a mnemonic phrase
   */
  const speakMnemonic = useCallback((phrase: string) => {
    speak(phrase, 0.9, 1.05);
  }, [speak]);

  const stop = useCallback(() => {
    if (isSupported) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [isSupported]);

  return {
    isSupported,
    isSpeaking,
    accent: "en-US" as AccentType,
    speak,
    speakSound,
    speakWord,
    speakMnemonic,
    stop,
  };
}
