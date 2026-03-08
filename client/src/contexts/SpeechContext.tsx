// ============================================================
// SpeechContext — Share speech/TTS state across the whole app
// Uses ElevenLabs CDN audio (American English)
// ============================================================
import { createContext, useContext, type ReactNode } from "react";
import { useSpeech, type AccentType } from "@/hooks/useSpeech";

interface SpeechContextValue {
  isSupported: boolean;
  isSpeaking: boolean;
  accent: AccentType;
  speak: (text: string, rate?: number, pitch?: number) => void;
  speakSound: (sound: string) => void;
  speakWord: (word: string) => void;
  speakMnemonic: (phrase: string) => void;
  stop: () => void;
}

const SpeechContext = createContext<SpeechContextValue | null>(null);

export function SpeechProvider({ children }: { children: ReactNode }) {
  const speech = useSpeech();
  return (
    <SpeechContext.Provider value={speech}>
      {children}
    </SpeechContext.Provider>
  );
}

export function useSpeechContext() {
  const ctx = useContext(SpeechContext);
  if (!ctx) throw new Error("useSpeechContext must be used within SpeechProvider");
  return ctx;
}
