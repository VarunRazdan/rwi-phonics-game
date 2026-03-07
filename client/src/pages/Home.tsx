// ============================================================
// Home — RWI Phonics Game Hub
// Design: Playful Brutalism for Kids
// Colors: Cream #FFFBEB | Teal #0D9488 | Coral #F87171 | Yellow #FDE047
// Font: Fredoka One (display) + Nunito (body)
// Signature: 3px black borders, 4-5px offset box-shadows, oversized targets
// ============================================================
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGameState, type GameMode } from "@/hooks/useGameState";
import { SET1_SOUNDS, getTileColor } from "@/lib/phonicsData";
import SoundQuiz from "@/components/games/SoundQuiz";
import WordBuilder from "@/components/games/WordBuilder";
import SoundMatch from "@/components/games/SoundMatch";
import ResultsScreen from "@/components/ResultsScreen";

const HERO_BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/rwi-hero-banner-L9VUCr5D7K3jzU5CVUo8Bg.webp";

interface GameCard {
  id: GameMode;
  title: string;
  description: string;
  emoji: string;
  bg: string;
  textColor: string;
}

const GAME_CARDS: GameCard[] = [
  {
    id: "sound-quiz",
    title: "Sound Quiz",
    description: "See a letter — pick the right sound!",
    emoji: "A?",
    bg: "#0D9488",
    textColor: "#FFFFFF",
  },
  {
    id: "word-builder",
    title: "Word Builder",
    description: "Tap letters to spell the word!",
    emoji: "abc",
    bg: "#FDE047",
    textColor: "#1A1A2E",
  },
  {
    id: "sound-match",
    title: "Sound Match",
    description: "Match the letter to its picture word!",
    emoji: "cat",
    bg: "#F87171",
    textColor: "#FFFFFF",
  },
];

export default function Home() {
  const { state, startGame, recordAnswer, finishGame, setMode } = useGameState();

  const handlePlayAgain = () => {
    // Go back to home to pick a game
    setMode("home");
  };

  return (
    <div className="min-h-screen" style={{ background: "#FFFBEB" }}>
      <AnimatePresence mode="wait">
        {/* ── HOME SCREEN ── */}
        {state.mode === "home" && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col min-h-screen"
          >
            {/* Hero banner */}
            <div className="relative overflow-hidden" style={{ borderBottom: "3px solid #1A1A2E" }}>
              <img
                src={HERO_BANNER}
                alt="Read Write Inc. Phonics Game"
                className="w-full object-cover"
                style={{ maxHeight: "280px", objectPosition: "center top" }}
              />
              <div
                className="absolute inset-0 flex flex-col justify-end p-6"
                style={{ background: "linear-gradient(to top, rgba(26,26,46,0.7) 0%, transparent 60%)" }}
              >
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="font-fredoka-one text-white leading-tight"
                  style={{ fontSize: "clamp(1.8rem, 6vw, 3rem)", textShadow: "3px 3px 0 rgba(0,0,0,0.4)" }}
                >
                  Read Write Inc.
                  <br />
                  <span style={{ color: "#FDE047" }}>Phonics Game</span>
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="font-nunito font-semibold text-white text-sm mt-1 opacity-90"
                >
                  Set 1 Sounds — Learn, Play, Grow!
                </motion.p>
              </div>
            </div>

            {/* Game mode cards */}
            <div className="flex-1 p-5 flex flex-col gap-4">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="font-fredoka-one text-2xl text-gray-900"
              >
                Choose a game:
              </motion.h2>

              {GAME_CARDS.map((card, i) => (
                <motion.button
                  key={card.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => startGame(card.id)}
                  className="brut-card p-5 flex items-center gap-4 text-left w-full"
                  style={{ background: card.bg }}
                  whileHover={{ x: 4, boxShadow: "8px 8px 0 #1A1A2E" }}
                  whileTap={{ x: 2, y: 2, boxShadow: "2px 2px 0 #1A1A2E" }}
                >
                  <span
                    className="font-fredoka-one text-2xl font-bold flex items-center justify-center w-14 h-14 rounded-xl"
                    style={{ background: "rgba(0,0,0,0.15)", color: card.textColor, border: "2px solid rgba(0,0,0,0.2)" }}
                  >
                    {card.emoji}
                  </span>
                  <div>
                    <h3
                      className="font-fredoka-one text-2xl leading-tight"
                      style={{ color: card.textColor }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="font-nunito font-semibold text-sm mt-0.5 opacity-80"
                      style={{ color: card.textColor }}
                    >
                      {card.description}
                    </p>
                  </div>
                  <span
                    className="ml-auto font-fredoka-one text-2xl opacity-60"
                    style={{ color: card.textColor }}
                  >
                    →
                  </span>
                </motion.button>
              ))}

              {/* Info strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="brut-card p-4 mt-2"
                style={{ background: "white" }}
              >
                <p className="font-nunito font-semibold text-sm text-gray-700 text-center">
                  30 Set 1 sounds · 3 game modes · Instant feedback
                </p>
              </motion.div>

              {/* Sounds Explorer */}
              <SoundsExplorer />
            </div>
          </motion.div>
        )}

        {/* ── SOUND QUIZ ── */}
        {state.mode === "sound-quiz" && (
          <motion.div
            key="sound-quiz"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="min-h-screen flex flex-col"
          >
            <GameHeader title="Sound Quiz" onBack={() => setMode("home")} color="#0D9488" />
            <div className="flex-1 p-5">
              <SoundQuiz
                onScore={recordAnswer}
                onFinish={finishGame}
                score={state.score}
              />
            </div>
          </motion.div>
        )}

        {/* ── WORD BUILDER ── */}
        {state.mode === "word-builder" && (
          <motion.div
            key="word-builder"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="min-h-screen flex flex-col"
          >
            <GameHeader title="Word Builder" onBack={() => setMode("home")} color="#D97706" />
            <div className="flex-1 p-5">
              <WordBuilder
                onScore={recordAnswer}
                onFinish={finishGame}
                score={state.score}
              />
            </div>
          </motion.div>
        )}

        {/* ── SOUND MATCH ── */}
        {state.mode === "sound-match" && (
          <motion.div
            key="sound-match"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="min-h-screen flex flex-col"
          >
            <GameHeader title="Sound Match" onBack={() => setMode("home")} color="#DC2626" />
            <div className="flex-1 p-5">
              <SoundMatch
                onScore={recordAnswer}
                onFinish={finishGame}
                score={state.score}
              />
            </div>
          </motion.div>
        )}

        {/* ── RESULTS ── */}
        {state.mode === "results" && (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="min-h-screen flex flex-col"
          >
            <GameHeader title="Results" onBack={() => setMode("home")} color="#7C3AED" />
            <div className="flex-1 p-5">
              <ResultsScreen
                state={state}
                onPlayAgain={handlePlayAgain}
                onHome={() => setMode("home")}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Game Header ──
function GameHeader({
  title,
  onBack,
  color,
}: {
  title: string;
  onBack: () => void;
  color: string;
}) {
  return (
    <div
      className="flex items-center gap-3 px-5 py-4"
      style={{
        background: color,
        borderBottom: "3px solid #1A1A2E",
      }}
    >
      <button
        onClick={onBack}
        className="brut-btn"
        style={{ background: "white", color: "#1A1A2E", padding: "0.4rem 0.8rem", fontSize: "1rem" }}
      >
        ← Back
      </button>
      <h2 className="font-fredoka-one text-2xl text-white" style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.3)" }}>
        {title}
      </h2>
    </div>
  );
}

// ── Sounds Explorer ──
function SoundsExplorer() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedSound = SET1_SOUNDS.find(s => s.letter === selected);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0 }}
      className="brut-card p-4"
    >
      <h3 className="font-fredoka-one text-xl text-gray-900 mb-3">
        Explore Set 1 Sounds
      </h3>
      <div className="flex flex-wrap gap-2 mb-3">
        {SET1_SOUNDS.map((s, i) => {
          const color = getTileColor(i);
          const isSelected = selected === s.letter;
          return (
            <button
              key={s.letter}
              onClick={() => setSelected(isSelected ? null : s.letter)}
              className="font-fredoka-one text-lg px-3 py-1 rounded-lg transition-all"
              style={{
                background: isSelected ? color.bg : "white",
                color: isSelected ? color.text : "#1A1A2E",
                border: `2px solid #1A1A2E`,
                boxShadow: isSelected ? `3px 3px 0 #1A1A2E` : `2px 2px 0 #1A1A2E`,
                transform: isSelected ? "translate(-1px, -1px)" : "none",
              }}
            >
              {s.letter}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedSound && (
          <motion.div
            key={selectedSound.letter}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div
              className="rounded-xl p-4 flex items-center gap-4"
              style={{
                background: getTileColor(SET1_SOUNDS.findIndex(s => s.letter === selectedSound.letter)).bg,
                border: "2px solid #1A1A2E",
              }}
            >
              <span
                className="font-fredoka-one text-5xl"
                style={{ color: getTileColor(SET1_SOUNDS.findIndex(s => s.letter === selectedSound.letter)).text }}
              >
                {selectedSound.letter}
              </span>
              <div>
                <p
                  className="font-fredoka-one text-xl"
                  style={{ color: getTileColor(SET1_SOUNDS.findIndex(s => s.letter === selectedSound.letter)).text }}
                >
                  says "{selectedSound.sound}"
                </p>
                <p
                  className="font-nunito text-sm font-semibold opacity-80"
                  style={{ color: getTileColor(SET1_SOUNDS.findIndex(s => s.letter === selectedSound.letter)).text }}
                >
                  {selectedSound.mnemonic}
                </p>
                <p
                  className="font-nunito text-sm opacity-70"
                  style={{ color: getTileColor(SET1_SOUNDS.findIndex(s => s.letter === selectedSound.letter)).text }}
                >
                  e.g. "{selectedSound.exampleWord}" {selectedSound.exampleImage}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
