// ============================================================
// useProgress — Persist and retrieve game history from localStorage
// ============================================================
import { useState, useCallback } from "react";

export interface GameSession {
  id: string;
  mode: "sound-quiz" | "word-builder" | "sound-match";
  score: number;
  total: number;
  stars: number;
  date: string; // ISO string
  durationMs?: number;
}

export interface ProgressData {
  sessions: GameSession[];
  totalStars: number;
  totalCorrect: number;
  totalAttempted: number;
  streakDays: number;
  lastPlayedDate: string;
}

const STORAGE_KEY = "rwi-progress";

function loadProgress(): ProgressData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as ProgressData;
  } catch {}
  return {
    sessions: [],
    totalStars: 0,
    totalCorrect: 0,
    totalAttempted: 0,
    streakDays: 0,
    lastPlayedDate: "",
  };
}

function saveProgress(data: ProgressData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>(loadProgress);

  const recordSession = useCallback((session: Omit<GameSession, "id" | "date">) => {
    setProgress(prev => {
      const newSession: GameSession = {
        ...session,
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        date: new Date().toISOString(),
      };

      const today = new Date().toDateString();
      const lastDay = prev.lastPlayedDate ? new Date(prev.lastPlayedDate).toDateString() : "";
      const yesterday = new Date(Date.now() - 86400000).toDateString();

      let streakDays = prev.streakDays;
      if (lastDay === today) {
        // Same day, no streak change
      } else if (lastDay === yesterday) {
        streakDays += 1;
      } else {
        streakDays = 1;
      }

      const updated: ProgressData = {
        sessions: [newSession, ...prev.sessions].slice(0, 100), // keep last 100
        totalStars: prev.totalStars + session.stars,
        totalCorrect: prev.totalCorrect + session.score,
        totalAttempted: prev.totalAttempted + session.total,
        streakDays,
        lastPlayedDate: new Date().toISOString(),
      };
      saveProgress(updated);
      return updated;
    });
  }, []);

  const clearProgress = useCallback(() => {
    const empty: ProgressData = {
      sessions: [],
      totalStars: 0,
      totalCorrect: 0,
      totalAttempted: 0,
      streakDays: 0,
      lastPlayedDate: "",
    };
    saveProgress(empty);
    setProgress(empty);
  }, []);

  // Per-mode stats
  const getModeSummary = useCallback((mode: GameSession["mode"]) => {
    const modeSessions = progress.sessions.filter(s => s.mode === mode);
    if (!modeSessions.length) return null;
    const avgScore = modeSessions.reduce((a, b) => a + (b.score / (b.total || 1)), 0) / modeSessions.length;
    const bestStars = Math.max(...modeSessions.map(s => s.stars));
    return {
      played: modeSessions.length,
      avgAccuracy: Math.round(avgScore * 100),
      bestStars,
      lastPlayed: modeSessions[0].date,
    };
  }, [progress]);

  return { progress, recordSession, clearProgress, getModeSummary };
}
