// ============================================================
// useGameState — Central game state management
// ============================================================
import { useState, useCallback } from "react";

export type GameMode = "home" | "sound-quiz" | "word-builder" | "sound-match" | "results";

export interface GameState {
  mode: GameMode;
  score: number;
  total: number;
  streak: number;
  bestStreak: number;
  stars: number;
}

export function useGameState() {
  const [state, setState] = useState<GameState>({
    mode: "home",
    score: 0,
    total: 0,
    streak: 0,
    bestStreak: 0,
    stars: 0,
  });

  const setMode = useCallback((mode: GameMode) => {
    setState(prev => ({ ...prev, mode }));
  }, []);

  const startGame = useCallback((mode: GameMode) => {
    setState(prev => ({
      ...prev,
      mode,
      score: 0,
      total: 0,
      streak: 0,
    }));
  }, []);

  const recordAnswer = useCallback((correct: boolean) => {
    setState(prev => {
      const newStreak = correct ? prev.streak + 1 : 0;
      const newScore = correct ? prev.score + 1 : prev.score;
      const newBestStreak = Math.max(prev.bestStreak, newStreak);
      return {
        ...prev,
        score: newScore,
        total: prev.total + 1,
        streak: newStreak,
        bestStreak: newBestStreak,
      };
    });
  }, []);

  const finishGame = useCallback(() => {
    setState(prev => {
      const pct = prev.total > 0 ? prev.score / prev.total : 0;
      const stars = pct >= 0.9 ? 3 : pct >= 0.6 ? 2 : 1;
      return { ...prev, mode: "results", stars };
    });
  }, []);

  return { state, setMode, startGame, recordAnswer, finishGame };
}
