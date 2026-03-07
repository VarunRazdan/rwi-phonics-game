// ============================================================
// RWI PHONICS DATA — Set 1, Set 2, Set 3 Sounds
// Playful Brutalism Design System
// ============================================================

export interface PhonicsSound {
  letter: string;
  sound: string;        // phonetic representation
  mnemonic: string;     // RWI mnemonic phrase
  exampleWord: string;
  exampleImage: string; // emoji
  color: string;        // tile color (tailwind bg class)
  audioKey: string;     // key into AUDIO_MAP for ElevenLabs pronunciation
  wordAudioKey?: string; // key for example word audio
}

export interface WordBuildChallenge {
  word: string;
  letters: string[];
  hint: string;
  set: 1 | 2 | 3;
}

export type SoundSet = 1 | 2 | 3;

// ── RWI Set 1 sounds ─────────────────────────────────────────
export const SET1_SOUNDS: PhonicsSound[] = [
  { letter: "m",  sound: "mmm",    mnemonic: "Maisie, Maisie, mend it!",        exampleWord: "mat",  exampleImage: "🪆", color: "bg-teal-400",   audioKey: "m",  wordAudioKey: "word_mat"  },
  { letter: "a",  sound: "a",      mnemonic: "Ant, ant, a, a, a!",              exampleWord: "ant",  exampleImage: "🐜", color: "bg-yellow-300", audioKey: "a",  wordAudioKey: "word_ant"  },
  { letter: "s",  sound: "sss",    mnemonic: "Snake, snake, sss, sss!",         exampleWord: "sun",  exampleImage: "☀️", color: "bg-red-400",    audioKey: "s",  wordAudioKey: "word_sun"  },
  { letter: "d",  sound: "d",      mnemonic: "Dinosaur, dinosaur, d, d, d!",    exampleWord: "dog",  exampleImage: "🐕", color: "bg-teal-300",   audioKey: "d",  wordAudioKey: "word_dog"  },
  { letter: "t",  sound: "t",      mnemonic: "Tap, tap, t, t, t!",              exampleWord: "tap",  exampleImage: "🚰", color: "bg-yellow-400", audioKey: "t",  wordAudioKey: "word_tap"  },
  { letter: "i",  sound: "i",      mnemonic: "Incy Wincy, i, i, i!",            exampleWord: "in",   exampleImage: "🕷️", color: "bg-pink-300",   audioKey: "i",  wordAudioKey: "word_in"   },
  { letter: "n",  sound: "nnn",    mnemonic: "Naughty, naughty, nnn!",          exampleWord: "net",  exampleImage: "🥅", color: "bg-teal-400",   audioKey: "n",  wordAudioKey: "word_net"  },
  { letter: "p",  sound: "p",      mnemonic: "Pitter patter, p, p, p!",         exampleWord: "pin",  exampleImage: "📌", color: "bg-yellow-300", audioKey: "p",  wordAudioKey: "word_pin"  },
  { letter: "g",  sound: "g",      mnemonic: "Gigantic, g, g, g!",              exampleWord: "got",  exampleImage: "🦍", color: "bg-green-400",  audioKey: "g",  wordAudioKey: "word_got"  },
  { letter: "o",  sound: "o",      mnemonic: "Orange, orange, o, o, o!",        exampleWord: "on",   exampleImage: "🍊", color: "bg-orange-300", audioKey: "o",  wordAudioKey: "word_on"   },
  { letter: "c",  sound: "c/k",    mnemonic: "Caterpillar, c, c, c!",           exampleWord: "cat",  exampleImage: "🐛", color: "bg-teal-300",   audioKey: "c",  wordAudioKey: "word_cat"  },
  { letter: "k",  sound: "k",      mnemonic: "Kicking, k, k, k!",               exampleWord: "kit",  exampleImage: "⚽", color: "bg-yellow-400", audioKey: "k",  wordAudioKey: "word_kit"  },
  { letter: "u",  sound: "u",      mnemonic: "Up, up, u, u, u!",                exampleWord: "up",   exampleImage: "⬆️", color: "bg-pink-300",   audioKey: "u",  wordAudioKey: "word_up"   },
  { letter: "b",  sound: "b",      mnemonic: "Bouncy, bouncy, b, b, b!",        exampleWord: "bat",  exampleImage: "🦇", color: "bg-teal-400",   audioKey: "b",  wordAudioKey: "word_bat"  },
  { letter: "f",  sound: "fff",    mnemonic: "Funny, funny, fff!",              exampleWord: "fun",  exampleImage: "🎉", color: "bg-yellow-300", audioKey: "f",  wordAudioKey: "word_fun"  },
  { letter: "e",  sound: "e",      mnemonic: "Egg, egg, e, e, e!",              exampleWord: "egg",  exampleImage: "🥚", color: "bg-orange-300", audioKey: "e",  wordAudioKey: "word_egg"  },
  { letter: "l",  sound: "lll",    mnemonic: "Lemon, lemon, lll!",              exampleWord: "lip",  exampleImage: "🍋", color: "bg-green-300",  audioKey: "l",  wordAudioKey: "word_lip"  },
  { letter: "h",  sound: "h",      mnemonic: "Hat, hat, h, h, h!",              exampleWord: "hat",  exampleImage: "🎩", color: "bg-teal-300",   audioKey: "h",  wordAudioKey: "word_hat"  },
  { letter: "sh", sound: "sh",     mnemonic: "Shh! Shh! Sh, sh, sh!",          exampleWord: "ship", exampleImage: "🚢", color: "bg-purple-300", audioKey: "sh", wordAudioKey: "word_ship" },
  { letter: "r",  sound: "rrr",    mnemonic: "Robot, robot, rrr!",              exampleWord: "run",  exampleImage: "🤖", color: "bg-yellow-400", audioKey: "r",  wordAudioKey: "word_run"  },
  { letter: "j",  sound: "j",      mnemonic: "Jelly, jelly, j, j, j!",         exampleWord: "jam",  exampleImage: "🍇", color: "bg-pink-400",   audioKey: "j",  wordAudioKey: "word_jam"  },
  { letter: "v",  sound: "vvv",    mnemonic: "Vroom, vroom, vvv!",              exampleWord: "van",  exampleImage: "🚐", color: "bg-teal-400",   audioKey: "v",  wordAudioKey: "word_van"  },
  { letter: "y",  sound: "y",      mnemonic: "Yawn, yawn, y, y, y!",            exampleWord: "yes",  exampleImage: "😮", color: "bg-yellow-300", audioKey: "y",  wordAudioKey: "word_yes"  },
  { letter: "w",  sound: "w",      mnemonic: "Windy, windy, w, w, w!",          exampleWord: "wet",  exampleImage: "💨", color: "bg-blue-300",   audioKey: "w",  wordAudioKey: "word_wet"  },
  { letter: "th", sound: "th",     mnemonic: "This, this, th, th, th!",         exampleWord: "the",  exampleImage: "👆", color: "bg-purple-300", audioKey: "th", wordAudioKey: "word_the"  },
  { letter: "z",  sound: "zzz",    mnemonic: "Zig-zag, zzz!",                  exampleWord: "zip",  exampleImage: "⚡", color: "bg-yellow-400", audioKey: "z",  wordAudioKey: "word_zip"  },
  { letter: "x",  sound: "x",      mnemonic: "X-ray, x, x, x!",                exampleWord: "fox",  exampleImage: "🦊", color: "bg-orange-300", audioKey: "x",  wordAudioKey: "word_fox"  },
  { letter: "qu", sound: "qu",     mnemonic: "Quick, quick, qu, qu!",           exampleWord: "quiz", exampleImage: "❓", color: "bg-pink-300",   audioKey: "qu", wordAudioKey: "word_quiz" },
  { letter: "ch", sound: "ch",     mnemonic: "Choo choo, ch, ch, ch!",         exampleWord: "chip", exampleImage: "🚂", color: "bg-teal-300",   audioKey: "ch", wordAudioKey: "word_chip" },
  { letter: "ng", sound: "ng",     mnemonic: "Ring, ring, ng, ng!",             exampleWord: "ring", exampleImage: "💍", color: "bg-green-400",  audioKey: "ng", wordAudioKey: "word_ring" },
];

// ── RWI Set 2 sounds ─────────────────────────────────────────
export const SET2_SOUNDS: PhonicsSound[] = [
  { letter: "ay",  sound: "ay",       mnemonic: "May I play?",          exampleWord: "day",  exampleImage: "☀️", color: "bg-yellow-300", audioKey: "ay"       },
  { letter: "ee",  sound: "ee",       mnemonic: "What can I see?",      exampleWord: "see",  exampleImage: "👀", color: "bg-green-300",  audioKey: "ee"       },
  { letter: "igh", sound: "igh",      mnemonic: "Fly high!",            exampleWord: "high", exampleImage: "✈️", color: "bg-blue-300",   audioKey: "igh"      },
  { letter: "ow",  sound: "ow",       mnemonic: "Blow the snow!",       exampleWord: "snow", exampleImage: "❄️", color: "bg-blue-200",   audioKey: "ow"       },
  { letter: "oo",  sound: "oo",       mnemonic: "Poo at the zoo!",      exampleWord: "zoo",  exampleImage: "🦁", color: "bg-teal-300",   audioKey: "oo"       },
  { letter: "oo",  sound: "oo (short)", mnemonic: "Look at a book!",    exampleWord: "book", exampleImage: "📚", color: "bg-amber-300",  audioKey: "oo_short" },
  { letter: "ar",  sound: "ar",       mnemonic: "Start the car!",       exampleWord: "car",  exampleImage: "🚗", color: "bg-orange-300", audioKey: "ar"       },
  { letter: "or",  sound: "or",       mnemonic: "Shut the door!",       exampleWord: "door", exampleImage: "🚪", color: "bg-red-300",    audioKey: "or"       },
  { letter: "air", sound: "air",      mnemonic: "That's not fair!",     exampleWord: "fair", exampleImage: "🎡", color: "bg-sky-300",    audioKey: "air"      },
  { letter: "ir",  sound: "ir",       mnemonic: "Whirl and twirl!",     exampleWord: "bird", exampleImage: "🐦", color: "bg-pink-300",   audioKey: "ir"       },
  { letter: "ou",  sound: "ou",       mnemonic: "Shout it out!",        exampleWord: "out",  exampleImage: "📢", color: "bg-yellow-400", audioKey: "ou"       },
  { letter: "oy",  sound: "oy",       mnemonic: "Toy for a boy!",       exampleWord: "toy",  exampleImage: "🧸", color: "bg-purple-300", audioKey: "oy"       },
];

// ── RWI Set 3 sounds ─────────────────────────────────────────
export const SET3_SOUNDS: PhonicsSound[] = [
  { letter: "ea",  sound: "ea",    mnemonic: "Cup of tea!",           exampleWord: "tea",  exampleImage: "🍵", color: "bg-green-300",  audioKey: "ea"     },
  { letter: "oi",  sound: "oi",    mnemonic: "Spoil the boy!",        exampleWord: "oil",  exampleImage: "🛢️", color: "bg-yellow-300", audioKey: "oi"     },
  { letter: "a-e", sound: "a-e",   mnemonic: "Make a cake!",          exampleWord: "cake", exampleImage: "🎂", color: "bg-pink-300",   audioKey: "a-e"    },
  { letter: "i-e", sound: "i-e",   mnemonic: "Nice smile!",           exampleWord: "bike", exampleImage: "🚲", color: "bg-blue-300",   audioKey: "i-e"    },
  { letter: "o-e", sound: "o-e",   mnemonic: "Phone home!",           exampleWord: "home", exampleImage: "🏠", color: "bg-orange-300", audioKey: "o-e"    },
  { letter: "u-e", sound: "u-e",   mnemonic: "June tune!",            exampleWord: "tune", exampleImage: "🎵", color: "bg-purple-300", audioKey: "u-e"    },
  { letter: "aw",  sound: "aw",    mnemonic: "Yawn at dawn!",         exampleWord: "paw",  exampleImage: "🐾", color: "bg-teal-300",   audioKey: "aw"     },
  { letter: "are", sound: "are",   mnemonic: "Share and care!",       exampleWord: "care", exampleImage: "💝", color: "bg-red-300",    audioKey: "are"    },
  { letter: "ur",  sound: "ur",    mnemonic: "Nurse with a purse!",   exampleWord: "fur",  exampleImage: "🐻", color: "bg-amber-300",  audioKey: "ur"     },
  { letter: "er",  sound: "er",    mnemonic: "Better letter!",        exampleWord: "her",  exampleImage: "👩", color: "bg-green-300",  audioKey: "er"     },
  { letter: "ow",  sound: "ow",    mnemonic: "Brown cow!",            exampleWord: "cow",  exampleImage: "🐄", color: "bg-yellow-300", audioKey: "ow_cow" },
  { letter: "ai",  sound: "ai",    mnemonic: "Snail in the rain!",    exampleWord: "rain", exampleImage: "🌧️", color: "bg-blue-300",   audioKey: "ai"     },
  { letter: "oa",  sound: "oa",    mnemonic: "Goat in a boat!",       exampleWord: "boat", exampleImage: "⛵", color: "bg-teal-300",   audioKey: "oa"     },
  { letter: "ew",  sound: "ew",    mnemonic: "Chew the stew!",        exampleWord: "new",  exampleImage: "🌟", color: "bg-purple-300", audioKey: "ew"     },
  { letter: "ire", sound: "ire",   mnemonic: "Fire, fire!",           exampleWord: "fire", exampleImage: "🔥", color: "bg-orange-400", audioKey: "ire"    },
  { letter: "ear", sound: "ear",   mnemonic: "Hear with your ear!",   exampleWord: "ear",  exampleImage: "👂", color: "bg-pink-300",   audioKey: "ear"    },
  { letter: "ure", sound: "ure",   mnemonic: "Sure and pure!",        exampleWord: "pure", exampleImage: "💎", color: "bg-blue-200",   audioKey: "ure"    },
];

// ── All sounds combined ───────────────────────────────────────
export const ALL_SOUNDS: Record<SoundSet, PhonicsSound[]> = {
  1: SET1_SOUNDS,
  2: SET2_SOUNDS,
  3: SET3_SOUNDS,
};

// ── Word building challenges ──────────────────────────────────
export const WORD_BUILD_CHALLENGES: WordBuildChallenge[] = [
  // Set 1
  { word: "sat",  letters: ["s","a","t"],       hint: "You do this on a chair",      set: 1 },
  { word: "mat",  letters: ["m","a","t"],        hint: "You wipe your feet on it",    set: 1 },
  { word: "tip",  letters: ["t","i","p"],        hint: "The pointy end",              set: 1 },
  { word: "pin",  letters: ["p","i","n"],        hint: "A sharp pointy thing",        set: 1 },
  { word: "pan",  letters: ["p","a","n"],        hint: "You cook in it",              set: 1 },
  { word: "man",  letters: ["m","a","n"],        hint: "A grown-up male",             set: 1 },
  { word: "dog",  letters: ["d","o","g"],        hint: "A pet that barks",            set: 1 },
  { word: "top",  letters: ["t","o","p"],        hint: "The highest part",            set: 1 },
  { word: "cup",  letters: ["c","u","p"],        hint: "You drink from it",           set: 1 },
  { word: "bug",  letters: ["b","u","g"],        hint: "A small insect",              set: 1 },
  { word: "hen",  letters: ["h","e","n"],        hint: "A female chicken",            set: 1 },
  { word: "bed",  letters: ["b","e","d"],        hint: "You sleep in it",             set: 1 },
  { word: "ship", letters: ["sh","i","p"],       hint: "It sails on the sea",         set: 1 },
  { word: "chin", letters: ["ch","i","n"],       hint: "Below your mouth",            set: 1 },
  { word: "ring", letters: ["r","i","ng"],       hint: "You wear it on your finger",  set: 1 },
  // Set 2
  { word: "day",   letters: ["d","ay"],          hint: "Morning to night",            set: 2 },
  { word: "play",  letters: ["p","l","ay"],      hint: "What children love to do",    set: 2 },
  { word: "see",   letters: ["s","ee"],          hint: "What your eyes do",           set: 2 },
  { word: "tree",  letters: ["t","r","ee"],      hint: "It has leaves and branches",  set: 2 },
  { word: "high",  letters: ["h","igh"],         hint: "Up in the sky",               set: 2 },
  { word: "snow",  letters: ["s","n","ow"],      hint: "White and cold",              set: 2 },
  { word: "car",   letters: ["c","ar"],          hint: "You drive in it",             set: 2 },
  { word: "door",  letters: ["d","or"],          hint: "You open and close it",       set: 2 },
  { word: "out",   letters: ["ou","t"],          hint: "Not inside",                  set: 2 },
  { word: "toy",   letters: ["t","oy"],          hint: "Children play with these",    set: 2 },
  { word: "book",  letters: ["b","oo","k"],      hint: "You read it",                 set: 2 },
  // Set 3
  { word: "cake",  letters: ["c","a-e","k"],     hint: "A sweet birthday treat",      set: 3 },
  { word: "bike",  letters: ["b","i-e","k"],     hint: "You ride it with pedals",     set: 3 },
  { word: "home",  letters: ["h","o-e","m"],     hint: "Where you live",              set: 3 },
  { word: "rain",  letters: ["r","ai","n"],      hint: "Falls from clouds",           set: 3 },
  { word: "boat",  letters: ["b","oa","t"],      hint: "It floats on water",          set: 3 },
  { word: "tea",   letters: ["t","ea"],          hint: "A hot British drink",         set: 3 },
  { word: "paw",   letters: ["p","aw"],          hint: "An animal's foot",            set: 3 },
  { word: "cow",   letters: ["c","ow"],          hint: "A farm animal that moos",     set: 3 },
];

// ── Sound matching pairs ──────────────────────────────────────
export const MATCHING_PAIRS = SET1_SOUNDS.slice(0, 16).map(s => ({
  letter: s.letter,
  word: s.exampleWord,
  emoji: s.exampleImage,
  sound: s.sound,
  audioKey: s.audioKey,
}));

// ── Colour palette for tiles (cycling) ───────────────────────
export const TILE_COLORS = [
  { bg: "#0D9488", text: "#FFFFFF" },
  { bg: "#F87171", text: "#FFFFFF" },
  { bg: "#FDE047", text: "#1A1A2E" },
  { bg: "#34D399", text: "#1A1A2E" },
  { bg: "#FB923C", text: "#FFFFFF" },
  { bg: "#A78BFA", text: "#FFFFFF" },
  { bg: "#60A5FA", text: "#FFFFFF" },
  { bg: "#F472B6", text: "#FFFFFF" },
];

export function getTileColor(index: number) {
  return TILE_COLORS[index % TILE_COLORS.length];
}

export const SET_COLORS = {
  1: { bg: "#0D9488", text: "#FFFFFF", label: "Set 1", description: "30 core sounds" },
  2: { bg: "#F59E0B", text: "#1A1A2E", label: "Set 2", description: "12 vowel digraphs" },
  3: { bg: "#8B5CF6", text: "#FFFFFF", label: "Set 3", description: "17 complex sounds" },
};
