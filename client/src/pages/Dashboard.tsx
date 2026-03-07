// ============================================================
// Dashboard — Parent/Teacher Progress Dashboard
// Design: Playful Brutalism — same design system as game
// ============================================================
import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart2, Star, Trophy, Flame, Target, Trash2, ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { useProgress, type GameSession } from "@/hooks/useProgress";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const MODE_LABELS: Record<GameSession["mode"], string> = {
  "sound-quiz": "Sound Quiz",
  "word-builder": "Word Builder",
  "sound-match": "Sound Match",
};

const MODE_COLORS: Record<GameSession["mode"], string> = {
  "sound-quiz": "#0D9488",
  "word-builder": "#D97706",
  "sound-match": "#DC2626",
};

function StarRating({ stars, max = 3 }: { stars: number; max?: number }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <Star key={i} className="w-4 h-4" fill={i < stars ? "#FDE047" : "none"} stroke={i < stars ? "#D97706" : "#9CA3AF"} />
      ))}
    </span>
  );
}

function StatCard({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string | number; color: string }) {
  return (
    <motion.div whileHover={{ y: -2 }} className="brut-card p-4 flex flex-col gap-2" style={{ background: color }}>
      <div className="flex items-center gap-2 text-white opacity-80">{icon}<span className="font-nunito text-xs font-bold uppercase tracking-wide">{label}</span></div>
      <p className="font-fredoka-one text-3xl text-white">{value}</p>
    </motion.div>
  );
}

export default function Dashboard() {
  const { progress, clearProgress, getModeSummary } = useProgress();
  const [confirmClear, setConfirmClear] = useState(false);

  const accuracy = progress.totalAttempted > 0
    ? Math.round((progress.totalCorrect / progress.totalAttempted) * 100)
    : 0;

  // Build chart data — last 10 sessions grouped by day
  const chartData = (() => {
    const byDay: Record<string, { correct: number; total: number }> = {};
    [...progress.sessions].reverse().slice(-14).forEach(s => {
      const day = new Date(s.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
      if (!byDay[day]) byDay[day] = { correct: 0, total: 0 };
      byDay[day].correct += s.score;
      byDay[day].total += s.total;
    });
    return Object.entries(byDay).map(([day, d]) => ({
      day,
      accuracy: d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0,
      questions: d.total,
    }));
  })();

  const modes: GameSession["mode"][] = ["sound-quiz", "word-builder", "sound-match"];

  return (
    <div className="min-h-screen" style={{ background: "#FFFBEB" }}>
      {/* Header */}
      <div className="flex items-center gap-4 px-5 py-4" style={{ background: "#1A1A2E", borderBottom: "3px solid #FDE047" }}>
        <Link href="/">
          <motion.div whileTap={{ scale: 0.95 }} className="flex items-center gap-2 px-3 py-2 rounded-xl font-nunito font-bold text-sm cursor-pointer"
            style={{ background: "#FDE047", color: "#1A1A2E", border: "2px solid #FDE047" }}>
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </motion.div>
        </Link>
        <div className="flex items-center gap-2">
          <BarChart2 className="w-6 h-6 text-yellow-300" />
          <h1 className="font-fredoka-one text-2xl" style={{ color: "#FDE047" }}>Progress Dashboard</h1>
        </div>
        <span className="ml-auto font-nunito text-xs text-gray-400">Parent / Teacher view</span>
      </div>

      <div className="p-5 flex flex-col gap-6 max-w-2xl mx-auto">

        {progress.sessions.length === 0 ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="brut-card p-10 flex flex-col items-center gap-4 text-center" style={{ background: "white" }}>
            <BarChart2 className="w-16 h-16 text-gray-300" />
            <h2 className="font-fredoka-one text-2xl text-gray-700">No games played yet!</h2>
            <p className="font-nunito text-gray-500">Play a game to start tracking progress.</p>
            <Link href="/">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="brut-btn cursor-pointer" style={{ background: "#0D9488", color: "white" }}>
                Start Playing
              </motion.div>
            </Link>
          </motion.div>
        ) : (
          <>
            {/* Summary stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h2 className="font-fredoka-one text-xl text-gray-900 mb-3">Overall Summary</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <StatCard icon={<Trophy className="w-4 h-4" />} label="Total Stars" value={progress.totalStars} color="#D97706" />
                <StatCard icon={<Target className="w-4 h-4" />} label="Accuracy" value={`${accuracy}%`} color="#0D9488" />
                <StatCard icon={<Flame className="w-4 h-4" />} label="Day Streak" value={progress.streakDays} color="#DC2626" />
                <StatCard icon={<BarChart2 className="w-4 h-4" />} label="Games Played" value={progress.sessions.length} color="#7C3AED" />
              </div>
            </motion.div>

            {/* Accuracy chart */}
            {chartData.length > 1 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="brut-card p-4" style={{ background: "white" }}>
                <h2 className="font-fredoka-one text-xl text-gray-900 mb-4">Accuracy Over Time</h2>
                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={chartData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="day" tick={{ fontFamily: "Nunito", fontSize: 11 }} />
                    <YAxis domain={[0, 100]} tick={{ fontFamily: "Nunito", fontSize: 11 }} />
                    <Tooltip
                      formatter={(v: number) => [`${v}%`, "Accuracy"]}
                      contentStyle={{ fontFamily: "Nunito", border: "2px solid #1A1A2E", borderRadius: "8px" }}
                    />
                    <Bar dataKey="accuracy" fill="#0D9488" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
            )}

            {/* Per-mode breakdown */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h2 className="font-fredoka-one text-xl text-gray-900 mb-3">Game Mode Breakdown</h2>
              <div className="flex flex-col gap-3">
                {modes.map(mode => {
                  const summary = getModeSummary(mode);
                  return (
                    <div key={mode} className="brut-card p-4 flex items-center gap-4" style={{ background: "white" }}>
                      <div className="w-3 h-12 rounded-full" style={{ background: MODE_COLORS[mode] }} />
                      <div className="flex-1">
                        <p className="font-fredoka-one text-lg text-gray-900">{MODE_LABELS[mode]}</p>
                        {summary ? (
                          <div className="flex items-center gap-3 mt-1 flex-wrap">
                            <span className="font-nunito text-sm text-gray-600">{summary.played} games</span>
                            <span className="font-nunito text-sm font-bold" style={{ color: MODE_COLORS[mode] }}>{summary.avgAccuracy}% avg</span>
                            <StarRating stars={summary.bestStars} />
                          </div>
                        ) : (
                          <p className="font-nunito text-sm text-gray-400 mt-1">Not played yet</p>
                        )}
                      </div>
                      {summary && (
                        <div className="text-right">
                          <p className="font-nunito text-xs text-gray-400">Last played</p>
                          <p className="font-nunito text-xs font-semibold text-gray-600">
                            {new Date(summary.lastPlayed).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Recent sessions */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h2 className="font-fredoka-one text-xl text-gray-900 mb-3">Recent Sessions</h2>
              <div className="flex flex-col gap-2">
                {progress.sessions.slice(0, 10).map(session => {
                  const pct = session.total > 0 ? Math.round((session.score / session.total) * 100) : 0;
                  return (
                    <div key={session.id} className="brut-card p-3 flex items-center gap-3" style={{ background: "white" }}>
                      <div className="w-2 h-10 rounded-full" style={{ background: MODE_COLORS[session.mode] }} />
                      <div className="flex-1">
                        <p className="font-nunito font-bold text-sm text-gray-900">{MODE_LABELS[session.mode]}</p>
                        <p className="font-nunito text-xs text-gray-500">
                          {new Date(session.date).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {pct >= 60 ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-red-400" />}
                        <span className="font-fredoka-one text-lg" style={{ color: MODE_COLORS[session.mode] }}>{session.score}/{session.total}</span>
                        <StarRating stars={session.stars} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Clear data */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex justify-center pb-6">
              <AnimatePresence mode="wait">
                {!confirmClear ? (
                  <motion.button key="clear-btn" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onClick={() => setConfirmClear(true)}
                    className="flex items-center gap-2 font-nunito text-sm text-gray-400 hover:text-red-500 transition-colors px-4 py-2 rounded-xl"
                    style={{ border: "2px solid #E5E7EB" }}>
                    <Trash2 className="w-4 h-4" />
                    Clear all progress data
                  </motion.button>
                ) : (
                  <motion.div key="confirm" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    className="brut-card p-4 flex flex-col items-center gap-3" style={{ background: "white" }}>
                    <p className="font-nunito font-bold text-sm text-gray-700">Are you sure? This cannot be undone.</p>
                    <div className="flex gap-3">
                      <button onClick={() => { clearProgress(); setConfirmClear(false); }}
                        className="brut-btn text-sm" style={{ background: "#DC2626", color: "white" }}>Yes, clear</button>
                      <button onClick={() => setConfirmClear(false)}
                        className="brut-btn text-sm" style={{ background: "white", color: "#1A1A2E" }}>Cancel</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
