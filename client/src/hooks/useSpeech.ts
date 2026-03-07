// ============================================================
// useSpeech — Web Speech API hook for phonics pronunciation
// Supports en-GB (British) and en-US (American) English
// ============================================================
import { useState, useCallback, useEffect, useRef } from "react";

export type AccentType = "en-GB" | "en-US";

export function useSpeech() {
  const [accent, setAccent] = useState<AccentType>(() => {
    return (localStorage.getItem("rwi-accent") as AccentType) || "en-GB";
  });
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

  const changeAccent = useCallback((newAccent: AccentType) => {
    setAccent(newAccent);
    localStorage.setItem("rwi-accent", newAccent);
  }, []);

  /**
   * Find the best matching voice for the selected accent.
   * Priority: exact lang match → partial match → any English → default
   */
  const getBestVoice = useCallback((targetLang: AccentType): SpeechSynthesisVoice | null => {
    const voices = voicesRef.current;
    if (!voices.length) return null;

    // 1. Exact match (e.g. "en-GB")
    const exact = voices.find(v => v.lang === targetLang);
    if (exact) return exact;

    // 2. Partial match (e.g. "en_GB", "en-GB-x-...")
    const partial = voices.find(v => v.lang.startsWith(targetLang.split("-")[0] + "-" + targetLang.split("-")[1]));
    if (partial) return partial;

    // 3. Any English
    const anyEn = voices.find(v => v.lang.startsWith("en"));
    if (anyEn) return anyEn;

    return null;
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
    utterance.lang = accent;
    utterance.rate = rate;
    utterance.pitch = pitch;

    const voice = getBestVoice(accent);
    if (voice) utterance.voice = voice;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }, [isSupported, accent, getBestVoice]);

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
    accent,
    changeAccent,
    speak,
    speakSound,
    speakWord,
    speakMnemonic,
    stop,
  };
}
