// ============================================================
// Home — RWI Phonics Game Hub
// Design: Playful Brutalism for Kids
// Colors: Cream #FFFBEB | Teal #0D9488 | Coral #F87171 | Yellow #FDE047
// Font: Fredoka One (display) + Nunito (body)
// Signature: 3px black borders, 4-5px offset box-shadows, oversized targets
// ============================================================
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { BarChart2 } from "lucide-react";
import { useGameState, type GameMode } from "@/hooks/useGameState";
import { useProgress } from "@/hooks/useProgress";
import { SET1_SOUNDS, SET2_SOUNDS, SET3_SOUNDS, getTileColor, SET_COLORS, type SoundSet } from "@/lib/phonicsData";
import SoundQuiz from "@/components/games/SoundQuiz";
import WordBuilder from "@/components/games/WordBuilder";
import SoundMatch from "@/components/games/SoundMatch";
import ResultsScreen from "@/components/ResultsScreen";
import SpeakButton from "@/components/SpeakButton";
import AccentSelector from "@/components/AccentSelector";

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
  { id: "sound-quiz", title: "Sound Quiz", description: "See a letter — pick the right sound!", emoji: "A?", bg: "#0D9488", textColor: "#FFFFFF" },
  { id: "word-builder", title: "Word Builder", description: "Tap letters to spell the word!", emoji: "abc", bg: "#FDE047", textColor: "#1A1A2E" },
  { id: "sound-match", title: "Sound Match", description: "Match the letter to its picture word!", emoji: "cat", bg: "#F87171", textColor: "#FFFFFF" },
];

export default function Home() {
   const { state, startGame, recordAnswer, finishGame, setMode } = useGameState();
  const { recordSession } = useProgress();
  const [activeSet, setActiveSet] = useState<SoundSet>(1);
  const [gameSet, setGameSet] = useState<SoundSet>(1);

  const handlePlayAgain = () => setMode("home");

  const handleStartGame = (mode: GameMode) => {
    setGameSet(activeSet);
    startGame(mode);
  };

  const handleFinishGame = () => {
    finishGame();
  };

  const currentSounds = activeSet === 1 ? SET1_SOUNDS : activeSet === 2 ? SET2_SOUNDS : SET3_SOUNDS;

  return (
    <div className="min-h-screen" style={{ background: "#FFFBEB" }}>
      <AnimatePresence mode="wait">

        {/* ── HOME SCREEN ── */}
        {state.mode === "home" && (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col min-h-screen">

            {/* Hero banner */}
            <div className="relative overflow-hidden" style={{ borderBottom: "3px solid #1A1A2E" }}>
              <img src={HERO_BANNER} alt="Read Write Inc. Phonics Game" className="w-full object-cover" style={{ maxHeight: "280px", objectPosition: "center top" }} />
              <div className="absolute inset-0 flex flex-col justify-end p-5" style={{ background: "linear-gradient(to top, rgba(26,26,46,0.75) 0%, transparent 60%)" }}>
                <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                  className="font-fredoka-one text-white leading-tight" style={{ fontSize: "clamp(1.8rem, 6vw, 3rem)", textShadow: "3px 3px 0 rgba(0,0,0,0.4)" }}>
                  Read Write Inc.<br /><span style={{ color: "#FDE047" }}>Phonics Game</span>
                </motion.h1>
                <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35 }}
                  className="font-nunito font-semibold text-white text-sm mt-1 opacity-90">
                  Sets 1–3 · Learn, Play, Grow!
                </motion.p>
              </div>
              {/* Dashboard link */}
              <Link href="/dashboard">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 rounded-xl font-nunito font-bold text-sm cursor-pointer"
                  style={{ background: "#1A1A2E", color: "#FDE047", border: "2px solid #FDE047", boxShadow: "3px 3px 0 rgba(0,0,0,0.4)" }}>
                  <BarChart2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Dashboard</span>
                </motion.div>
              </Link>
            </div>

            <div className="flex-1 p-5 flex flex-col gap-4">
              {/* Accent selector */}
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="flex items-center justify-between">
                <span className="font-nunito font-bold text-sm text-gray-600">Voice accent:</span>
                <AccentSelector />
              </motion.div>

              {/* Game mode cards */}
              <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                className="font-fredoka-one text-2xl text-gray-900">Choose a game:</motion.h2>

              {GAME_CARDS.map((card, i) => (
                <motion.button key={card.id}
                  initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => handleStartGame(card.id)}
                  className="brut-card p-5 flex items-center gap-4 text-left w-full"
                  style={{ background: card.bg }}
                  whileHover={{ x: 4, boxShadow: "8px 8px 0 #1A1A2E" }}
                  whileTap={{ x: 2, y: 2, boxShadow: "2px 2px 0 #1A1A2E" }}>
                  <span className="font-fredoka-one text-2xl font-bold flex items-center justify-center w-14 h-14 rounded-xl"
                    style={{ background: "rgba(0,0,0,0.15)", color: card.textColor, border: "2px solid rgba(0,0,0,0.2)" }}>
                    {card.emoji}
                  </span>
                  <div>
                    <h3 className="font-fredoka-one text-2xl leading-tight" style={{ color: card.textColor }}>{card.title}</h3>
                    <p className="font-nunito font-semibold text-sm mt-0.5 opacity-80" style={{ color: card.textColor }}>{card.description}</p>
                  </div>
                  <span className="ml-auto font-fredoka-one text-2xl opacity-60" style={{ color: card.textColor }}>→</span>
                </motion.button>
              ))}

              {/* Info strip */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
                className="brut-card p-4" style={{ background: "white" }}>
                <p className="font-nunito font-semibold text-sm text-gray-700 text-center">
                  59 sounds across 3 sets · 3 game modes · Instant feedback · Audio pronunciation
                </p>
              </motion.div>

              {/* Sounds Explorer */}
              <SoundsExplorer activeSet={activeSet} setActiveSet={setActiveSet} sounds={currentSounds} />
            </div>
          </motion.div>
        )}

        {/* ── SOUND QUIZ ── */}
        {state.mode === "sound-quiz" && (
          <motion.div key="sound-quiz" initial={{ x: "100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-100%", opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="min-h-screen flex flex-col">
            <GameHeader title="Sound Quiz" onBack={() => setMode("home")} color="#0D9488" />
            <div className="flex-1 p-5">
              <SoundQuiz onScore={recordAnswer} onFinish={handleFinishGame} score={state.score} soundSet={gameSet} />
            </div>
          </motion.div>
        )}

        {/* ── WORD BUILDER ── */}
        {state.mode === "word-builder" && (
          <motion.div key="word-builder" initial={{ x: "100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-100%", opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="min-h-screen flex flex-col">
            <GameHeader title="Word Builder" onBack={() => setMode("home")} color="#D97706" />
            <div className="flex-1 p-5">
              <WordBuilder onScore={recordAnswer} onFinish={handleFinishGame} score={state.score} soundSet={gameSet} />
            </div>
          </motion.div>
        )}

        {/* ── SOUND MATCH ── */}
        {state.mode === "sound-match" && (
          <motion.div key="sound-match" initial={{ x: "100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-100%", opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="min-h-screen flex flex-col">
            <GameHeader title="Sound Match" onBack={() => setMode("home")} color="#DC2626" />
            <div className="flex-1 p-5">
              <SoundMatch onScore={recordAnswer} onFinish={handleFinishGame} score={state.score} soundSet={gameSet} />
            </div>
          </motion.div>
        )}

        {/* ── RESULTS ── */}
        {state.mode === "results" && (
          <motion.div key="results" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} className="min-h-screen flex flex-col">
            <GameHeader title="Results" onBack={() => setMode("home")} color="#7C3AED" />
            <div className="flex-1 p-5">
              <ResultsScreen state={state} onPlayAgain={handlePlayAgain} onHome={() => setMode("home")} onRecordSession={recordSession} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Game Header ──────────────────────────────────────────────
function GameHeader({ title, onBack, color }: { title: string; onBack: () => void; color: string }) {
  return (
    <div className="flex items-center gap-3 px-5 py-4" style={{ background: color, borderBottom: "3px solid #1A1A2E" }}>
      <button onClick={onBack} className="brut-btn" style={{ background: "white", color: "#1A1A2E", padding: "0.4rem 0.8rem", fontSize: "1rem" }}>
        ← Back
      </button>
      <h2 className="font-fredoka-one text-2xl text-white" style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.3)" }}>{title}</h2>
    </div>
  );
}

// ── Sounds Explorer ──────────────────────────────────────────
function SoundsExplorer({
  activeSet,
  setActiveSet,
  sounds,
}: {
  activeSet: SoundSet;
  setActiveSet: (s: SoundSet) => void;
  sounds: typeof SET1_SOUNDS;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedSound = sounds.find(s => s.letter === selected);
  const selectedIdx = sounds.findIndex(s => s.letter === selected);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }} className="brut-card p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-fredoka-one text-xl text-gray-900">Explore Sounds</h3>
        {/* Set tabs */}
        <div className="flex gap-1">
          {([1, 2, 3] as SoundSet[]).map(set => {
            const sc = SET_COLORS[set];
            const isActive = activeSet === set;
            return (
              <button key={set} onClick={() => { setActiveSet(set); setSelected(null); }}
                className="font-fredoka-one text-sm px-3 py-1 rounded-lg transition-all"
                style={{ background: isActive ? sc.bg : "white", color: isActive ? sc.text : "#1A1A2E", border: "2px solid #1A1A2E", boxShadow: isActive ? "3px 3px 0 #1A1A2E" : "2px 2px 0 #1A1A2E" }}>
                {sc.label}
              </button>
            );
          })}
        </div>
      </div>

      <p className="font-nunito text-xs text-gray-500 mb-2">{SET_COLORS[activeSet].description}</p>

      <div className="flex flex-wrap gap-2 mb-3">
        {sounds.map((s, i) => {
          const color = getTileColor(i);
          const isSelected = selected === s.letter;
          return (
            <button key={`${s.letter}-${i}`}
              onClick={() => setSelected(isSelected ? null : s.letter)}
              className="font-fredoka-one text-lg px-3 py-1 rounded-lg transition-all"
              style={{ background: isSelected ? color.bg : "white", color: isSelected ? color.text : "#1A1A2E", border: "2px solid #1A1A2E", boxShadow: isSelected ? "3px 3px 0 #1A1A2E" : "2px 2px 0 #1A1A2E", transform: isSelected ? "translate(-1px, -1px)" : "none" }}>
              {s.letter}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedSound && (
          <motion.div key={selectedSound.letter} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
            <div className="rounded-xl p-4 flex items-center gap-4"
              style={{ background: getTileColor(selectedIdx).bg, border: "2px solid #1A1A2E" }}>
              <div className="flex flex-col items-center gap-2">
                <span className="font-fredoka-one text-5xl" style={{ color: getTileColor(selectedIdx).text }}>
                  {selectedSound.letter}
                </span>
                <SpeakButton
                  audioKey={selectedSound.audioKey}
                  text={selectedSound.sound}
                  label={`Hear the sound ${selectedSound.letter}`}
                  variant="white"
                  size="md"
                />
              </div>
              <div>
                <p className="font-fredoka-one text-xl" style={{ color: getTileColor(selectedIdx).text }}>
                  says "{selectedSound.sound}"
                </p>
                <p className="font-nunito text-sm font-semibold opacity-80" style={{ color: getTileColor(selectedIdx).text }}>
                  {selectedSound.mnemonic}
                </p>
                <p className="font-nunito text-sm opacity-70" style={{ color: getTileColor(selectedIdx).text }}>
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
