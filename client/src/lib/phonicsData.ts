// ============================================================
// RWI PHONICS DATA — Set 1 Sounds
// Playful Brutalism Design System
// ============================================================

export interface PhonicsSound {
  letter: string;
  sound: string;        // phonetic representation
  mnemonic: string;     // RWI mnemonic phrase
  exampleWord: string;
  exampleImage: string; // emoji or description
  color: string;        // tile color (tailwind bg class)
}

export interface WordBuildChallenge {
  word: string;
  letters: string[];
  hint: string;
}

// RWI Set 1 sounds in order
export const SET1_SOUNDS: PhonicsSound[] = [
  { letter: "m", sound: "mmm", mnemonic: "Maisie, Maisie, mend it!", exampleWord: "mat", exampleImage: "🪆", color: "bg-teal-400" },
  { letter: "a", sound: "a", mnemonic: "Ant, ant, a, a, a!", exampleWord: "ant", exampleImage: "🐜", color: "bg-yellow-300" },
  { letter: "s", sound: "sss", mnemonic: "Snake, snake, sss, sss!", exampleWord: "sun", exampleImage: "☀️", color: "bg-coral-400" },
  { letter: "d", sound: "d", mnemonic: "Dinosaur, dinosaur, d, d, d!", exampleWord: "dog", exampleImage: "🐕", color: "bg-teal-300" },
  { letter: "t", sound: "t", mnemonic: "Tap, tap, t, t, t!", exampleWord: "tap", exampleImage: "🚰", color: "bg-yellow-400" },
  { letter: "i", sound: "i", mnemonic: "Incy Wincy, i, i, i!", exampleWord: "in", exampleImage: "🕷️", color: "bg-pink-300" },
  { letter: "n", sound: "nnn", mnemonic: "Naughty, naughty, nnn!", exampleWord: "net", exampleImage: "🥅", color: "bg-teal-400" },
  { letter: "p", sound: "p", mnemonic: "Pitter patter, p, p, p!", exampleWord: "pin", exampleImage: "📌", color: "bg-yellow-300" },
  { letter: "g", sound: "g", mnemonic: "Gigantic, g, g, g!", exampleWord: "got", exampleImage: "🦍", color: "bg-green-400" },
  { letter: "o", sound: "o", mnemonic: "Orange, orange, o, o, o!", exampleWord: "on", exampleImage: "🍊", color: "bg-orange-300" },
  { letter: "c", sound: "c/k", mnemonic: "Caterpillar, c, c, c!", exampleWord: "cat", exampleImage: "🐛", color: "bg-teal-300" },
  { letter: "k", sound: "k", mnemonic: "Kicking, k, k, k!", exampleWord: "kit", exampleImage: "⚽", color: "bg-yellow-400" },
  { letter: "u", sound: "u", mnemonic: "Up, up, u, u, u!", exampleWord: "up", exampleImage: "⬆️", color: "bg-pink-300" },
  { letter: "b", sound: "b", mnemonic: "Bouncy, bouncy, b, b, b!", exampleWord: "bat", exampleImage: "🦇", color: "bg-teal-400" },
  { letter: "f", sound: "fff", mnemonic: "Funny, funny, fff!", exampleWord: "fun", exampleImage: "🎉", color: "bg-yellow-300" },
  { letter: "e", sound: "e", mnemonic: "Egg, egg, e, e, e!", exampleWord: "egg", exampleImage: "🥚", color: "bg-orange-300" },
  { letter: "l", sound: "lll", mnemonic: "Lemon, lemon, lll!", exampleWord: "lip", exampleImage: "🍋", color: "bg-green-300" },
  { letter: "h", sound: "h", mnemonic: "Hat, hat, h, h, h!", exampleWord: "hat", exampleImage: "🎩", color: "bg-teal-300" },
  { letter: "sh", sound: "sh", mnemonic: "Shh! Shh! Sh, sh, sh!", exampleWord: "ship", exampleImage: "🚢", color: "bg-purple-300" },
  { letter: "r", sound: "rrr", mnemonic: "Robot, robot, rrr!", exampleWord: "run", exampleImage: "🤖", color: "bg-yellow-400" },
  { letter: "j", sound: "j", mnemonic: "Jelly, jelly, j, j, j!", exampleWord: "jam", exampleImage: "🍇", color: "bg-pink-400" },
  { letter: "v", sound: "vvv", mnemonic: "Vroom, vroom, vvv!", exampleWord: "van", exampleImage: "🚐", color: "bg-teal-400" },
  { letter: "y", sound: "y", mnemonic: "Yawn, yawn, y, y, y!", exampleWord: "yes", exampleImage: "😮", color: "bg-yellow-300" },
  { letter: "w", sound: "w", mnemonic: "Windy, windy, w, w, w!", exampleWord: "wet", exampleImage: "💨", color: "bg-blue-300" },
  { letter: "th", sound: "th", mnemonic: "This, this, th, th, th!", exampleWord: "the", exampleImage: "👆", color: "bg-purple-300" },
  { letter: "z", sound: "zzz", mnemonic: "Zig-zag, zzz!", exampleWord: "zip", exampleImage: "⚡", color: "bg-yellow-400" },
  { letter: "x", sound: "x", mnemonic: "X-ray, x, x, x!", exampleWord: "fox", exampleImage: "🦊", color: "bg-orange-300" },
  { letter: "qu", sound: "qu", mnemonic: "Quick, quick, qu, qu!", exampleWord: "quiz", exampleImage: "❓", color: "bg-pink-300" },
  { letter: "ch", sound: "ch", mnemonic: "Choo choo, ch, ch, ch!", exampleWord: "chip", exampleImage: "🚂", color: "bg-teal-300" },
  { letter: "ng", sound: "ng", mnemonic: "Ring, ring, ng, ng!", exampleWord: "ring", exampleImage: "💍", color: "bg-green-400" },
];

// Word building challenges using Set 1 sounds
export const WORD_BUILD_CHALLENGES: WordBuildChallenge[] = [
  { word: "sat", letters: ["s", "a", "t"], hint: "You do this on a chair" },
  { word: "mat", letters: ["m", "a", "t"], hint: "You wipe your feet on it" },
  { word: "tip", letters: ["t", "i", "p"], hint: "The pointy end" },
  { word: "nip", letters: ["n", "i", "p"], hint: "A small pinch" },
  { word: "pin", letters: ["p", "i", "n"], hint: "A sharp pointy thing" },
  { word: "pan", letters: ["p", "a", "n"], hint: "You cook in it" },
  { word: "tan", letters: ["t", "a", "n"], hint: "A brown colour" },
  { word: "man", letters: ["m", "a", "n"], hint: "A grown-up male" },
  { word: "dog", letters: ["d", "o", "g"], hint: "A pet that barks" },
  { word: "got", letters: ["g", "o", "t"], hint: "You have it" },
  { word: "top", letters: ["t", "o", "p"], hint: "The highest part" },
  { word: "pot", letters: ["p", "o", "t"], hint: "You put plants in it" },
  { word: "cup", letters: ["c", "u", "p"], hint: "You drink from it" },
  { word: "bug", letters: ["b", "u", "g"], hint: "A small insect" },
  { word: "fun", letters: ["f", "u", "n"], hint: "Having a great time" },
  { word: "hen", letters: ["h", "e", "n"], hint: "A female chicken" },
  { word: "leg", letters: ["l", "e", "g"], hint: "You walk on these" },
  { word: "bed", letters: ["b", "e", "d"], hint: "You sleep in it" },
];

// Sound matching pairs for the matching game
export const MATCHING_PAIRS = SET1_SOUNDS.slice(0, 16).map(s => ({
  letter: s.letter,
  word: s.exampleWord,
  emoji: s.exampleImage,
  sound: s.sound,
}));

// Colour palette for tiles (cycling)
export const TILE_COLORS = [
  { bg: "#0D9488", text: "#FFFFFF" },  // teal
  { bg: "#F87171", text: "#FFFFFF" },  // coral
  { bg: "#FDE047", text: "#1A1A2E" },  // yellow
  { bg: "#34D399", text: "#1A1A2E" },  // green
  { bg: "#FB923C", text: "#FFFFFF" },  // orange
  { bg: "#A78BFA", text: "#FFFFFF" },  // purple
  { bg: "#60A5FA", text: "#FFFFFF" },  // blue
  { bg: "#F472B6", text: "#FFFFFF" },  // pink
];

export function getTileColor(index: number) {
  return TILE_COLORS[index % TILE_COLORS.length];
}
