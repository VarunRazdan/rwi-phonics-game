// ============================================================
// audioMap.ts — Pre-generated ElevenLabs CDN audio URLs
// Voice: Alice (British English, Educational)
// All 89 sounds pre-generated and hosted on CDN for instant playback
//
// Audio strategy:
//   British English → ElevenLabs CDN (Alice voice, pre-generated)
//   American English → Web Speech API (en-US, browser built-in)
//
// CDN MIME type fix: CDN serves files as application/octet-stream.
// We fetch as blob and create a blob:// URL with audio/mpeg MIME type
// so all browsers (incl. Safari, iOS) can play them correctly.
// ============================================================

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg";

export const AUDIO_MAP: Record<string, string> = {
  // ── Set 1 — individual sounds ──────────────────────────────
  "m":         `${CDN}/m_0d4eceae.mp3`,
  "a":         `${CDN}/a_8f7d87a7.mp3`,
  "s":         `${CDN}/s_59dc5e82.mp3`,
  "d":         `${CDN}/d_9114deb2.mp3`,
  "t":         `${CDN}/t_0e22bc3c.mp3`,
  "i":         `${CDN}/i_98935f40.mp3`,
  "n":         `${CDN}/n_27facd37.mp3`,
  "p":         `${CDN}/p_23f2f989.mp3`,
  "g":         `${CDN}/g_94dc1921.mp3`,
  "o":         `${CDN}/o_62f70f46.mp3`,
  "c":         `${CDN}/c_ac6cf416.mp3`,
  "k":         `${CDN}/k_28e2e077.mp3`,
  "u":         `${CDN}/u_73e0b0d2.mp3`,
  "b":         `${CDN}/b_4bebb4f0.mp3`,
  "f":         `${CDN}/f_7f4b757c.mp3`,
  "e":         `${CDN}/e_69c8b45e.mp3`,
  "l":         `${CDN}/l_3bc0cafb.mp3`,
  "h":         `${CDN}/h_9f984c3b.mp3`,
  "sh":        `${CDN}/sh_2e68014b.mp3`,
  "r":         `${CDN}/r_17eea6b0.mp3`,
  "j":         `${CDN}/j_527de726.mp3`,
  "v":         `${CDN}/v_c0bd6bbb.mp3`,
  "y":         `${CDN}/y_7e983012.mp3`,
  "w":         `${CDN}/w_c23c1731.mp3`,
  "th":        `${CDN}/th_844e8f4f.mp3`,
  "z":         `${CDN}/z_86dceebb.mp3`,
  "x":         `${CDN}/x_599360e6.mp3`,
  "qu":        `${CDN}/qu_3080635a.mp3`,
  "ch":        `${CDN}/ch_42ffb735.mp3`,
  "ng":        `${CDN}/ng_2ae87ee3.mp3`,
  // ── Set 2 sounds ──────────────────────────────────────────
  "ay":        `${CDN}/ay_f834c3bf.mp3`,
  "ee":        `${CDN}/ee_26e76eba.mp3`,
  "igh":       `${CDN}/igh_1e4362ae.mp3`,
  "ow":        `${CDN}/ow_b159c23b.mp3`,
  "oo":        `${CDN}/oo_1dd27bc8.mp3`,
  "oo_short":  `${CDN}/oo_short_23ca5fa3.mp3`,
  "ar":        `${CDN}/ar_a0f1fcc3.mp3`,
  "or":        `${CDN}/or_ee77b41c.mp3`,
  "air":       `${CDN}/air_a278f90d.mp3`,
  "ir":        `${CDN}/ir_564285ad.mp3`,
  "ou":        `${CDN}/ou_b9466ced.mp3`,
  "oy":        `${CDN}/oy_96946042.mp3`,
  // ── Set 3 sounds ──────────────────────────────────────────
  "ea":        `${CDN}/ea_47151322.mp3`,
  "oi":        `${CDN}/oi_e8e355fa.mp3`,
  "a-e":       `${CDN}/a_e_05334ded.mp3`,
  "i-e":       `${CDN}/i_e_c2b1761a.mp3`,
  "o-e":       `${CDN}/o_e_16423090.mp3`,
  "u-e":       `${CDN}/u_e_e9cc2c77.mp3`,
  "aw":        `${CDN}/aw_859b423e.mp3`,
  "are":       `${CDN}/are_94e01ecd.mp3`,
  "ur":        `${CDN}/ur_79c6325f.mp3`,
  "er":        `${CDN}/er_750e2ba4.mp3`,
  "ow_cow":    `${CDN}/ow_cow_af017416.mp3`,
  "ai":        `${CDN}/ai_73cb23fe.mp3`,
  "oa":        `${CDN}/oa_a7218ee4.mp3`,
  "ew":        `${CDN}/ew_5ae35922.mp3`,
  "ire":       `${CDN}/ire_68dff532.mp3`,
  "ear":       `${CDN}/ear_4ffc218e.mp3`,
  "ure":       `${CDN}/ure_708ac953.mp3`,
  // ── Example words ─────────────────────────────────────────
  "word_mat":  `${CDN}/word_mat_156f7454.mp3`,
  "word_ant":  `${CDN}/word_ant_956765f4.mp3`,
  "word_sun":  `${CDN}/word_sun_ecfc81c0.mp3`,
  "word_dog":  `${CDN}/word_dog_02e7b45b.mp3`,
  "word_tap":  `${CDN}/word_tap_8c07f256.mp3`,
  "word_in":   `${CDN}/word_in_18f2f29e.mp3`,
  "word_net":  `${CDN}/word_net_68eb84f4.mp3`,
  "word_pin":  `${CDN}/word_pin_59f9a123.mp3`,
  "word_got":  `${CDN}/word_got_25362ec1.mp3`,
  "word_on":   `${CDN}/word_on_a4b8a135.mp3`,
  "word_cat":  `${CDN}/word_cat_408f0092.mp3`,
  "word_kit":  `${CDN}/word_kit_1d43ba96.mp3`,
  "word_up":   `${CDN}/word_up_18bd84d8.mp3`,
  "word_bat":  `${CDN}/word_bat_bec2ed8a.mp3`,
  "word_fun":  `${CDN}/word_fun_4b4618a1.mp3`,
  "word_egg":  `${CDN}/word_egg_7d0f7422.mp3`,
  "word_lip":  `${CDN}/word_lip_2f0ee33d.mp3`,
  "word_hat":  `${CDN}/word_hat_ba5a22da.mp3`,
  "word_ship": `${CDN}/word_ship_4e978c64.mp3`,
  "word_run":  `${CDN}/word_run_d71204ec.mp3`,
  "word_jam":  `${CDN}/word_jam_9911ed8c.mp3`,
  "word_van":  `${CDN}/word_van_31938fc6.mp3`,
  "word_yes":  `${CDN}/word_yes_519c7123.mp3`,
  "word_wet":  `${CDN}/word_wet_0c5da90d.mp3`,
  "word_the":  `${CDN}/word_the_bf23f6d9.mp3`,
  "word_zip":  `${CDN}/word_zip_7929a5b3.mp3`,
  "word_fox":  `${CDN}/word_fox_ba33ff0e.mp3`,
  "word_quiz": `${CDN}/word_quiz_88e9610c.mp3`,
  "word_chip": `${CDN}/word_chip_d0f5402b.mp3`,
  "word_ring": `${CDN}/word_ring_fe437da9.mp3`,
};

// ── Phonics sound text map for Web Speech API fallback ────────
// Maps audio keys to the phoneme text that should be spoken aloud
// (not the letter name, but the actual sound)
export const SOUND_TEXT_MAP: Record<string, string> = {
  "m": "mmm", "a": "ah", "s": "sss", "d": "duh", "t": "tuh",
  "i": "ih", "n": "nnn", "p": "puh", "g": "guh", "o": "oh",
  "c": "kuh", "k": "kuh", "u": "uh", "b": "buh", "f": "fff",
  "e": "eh", "l": "lll", "h": "huh", "sh": "shh", "r": "rrr",
  "j": "juh", "v": "vvv", "y": "yuh", "w": "wuh", "th": "thh",
  "z": "zzz", "x": "ks", "qu": "kwuh", "ch": "chuh", "ng": "ng",
  "ay": "ay", "ee": "ee", "igh": "igh", "ow": "oh", "oo": "oo",
  "oo_short": "oo", "ar": "ar", "or": "or", "air": "air",
  "ir": "er", "ou": "ow", "oy": "oy", "ea": "ee", "oi": "oy",
  "a-e": "ay", "i-e": "igh", "o-e": "oh", "u-e": "yoo",
  "aw": "aw", "are": "air", "ur": "er", "er": "er",
  "ow_cow": "ow", "ai": "ay", "oa": "oh", "ew": "yoo",
  "ire": "ire", "ear": "ear", "ure": "yoor",
  // Words — use the word itself
  "word_mat": "mat", "word_ant": "ant", "word_sun": "sun",
  "word_dog": "dog", "word_tap": "tap", "word_in": "in",
  "word_net": "net", "word_pin": "pin", "word_got": "got",
  "word_on": "on", "word_cat": "cat", "word_kit": "kit",
  "word_up": "up", "word_bat": "bat", "word_fun": "fun",
  "word_egg": "egg", "word_lip": "lip", "word_hat": "hat",
  "word_ship": "ship", "word_run": "run", "word_jam": "jam",
  "word_van": "van", "word_yes": "yes", "word_wet": "wet",
  "word_the": "the", "word_zip": "zip", "word_fox": "fox",
  "word_quiz": "quiz", "word_chip": "chip", "word_ring": "ring",
};

// ── Accent state (shared singleton) ──────────────────────────
// Updated by setAudioAccent() called from SpeechContext on accent change
let currentAccent: "en-GB" | "en-US" = 
  (typeof localStorage !== "undefined" 
    ? (localStorage.getItem("rwi-accent") as "en-GB" | "en-US") 
    : null) || "en-GB";

export function setAudioAccent(accent: "en-GB" | "en-US") {
  currentAccent = accent;
}

export function getAudioAccent(): "en-GB" | "en-US" {
  return currentAccent;
}

// ── Audio playback engine ─────────────────────────────────────
let currentAudio: HTMLAudioElement | null = null;

// Cache blob:// URLs so we only fetch each file once
const blobUrlCache = new Map<string, string>();
// Track in-flight fetches to avoid duplicate requests
const fetchInFlight = new Map<string, Promise<string>>();

/**
 * Fetch a CDN audio URL and return a blob:// URL with the correct audio/mpeg
 * MIME type. This is necessary because the CDN serves files as
 * application/octet-stream, which Safari and some mobile browsers refuse to
 * play as audio.
 */
async function getBlobUrl(cdnUrl: string, key: string): Promise<string> {
  if (blobUrlCache.has(key)) return blobUrlCache.get(key)!;
  if (fetchInFlight.has(key)) return fetchInFlight.get(key)!;

  const promise = fetch(cdnUrl)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.arrayBuffer();
    })
    .then(buf => {
      const blob = new Blob([buf], { type: "audio/mpeg" });
      const blobUrl = URL.createObjectURL(blob);
      blobUrlCache.set(key, blobUrl);
      fetchInFlight.delete(key);
      return blobUrl;
    })
    .catch(err => {
      fetchInFlight.delete(key);
      throw err;
    });

  fetchInFlight.set(key, promise);
  return promise;
}

/**
 * Speak a phonics key using the Web Speech API (American English or fallback).
 */
function speakWithWebSpeech(key: string, lang: "en-GB" | "en-US"): Promise<void> {
  return new Promise((resolve) => {
    if (!("speechSynthesis" in window)) { resolve(); return; }
    window.speechSynthesis.cancel();
    const text = SOUND_TEXT_MAP[key] || key;
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = lang;
    utt.rate = 0.75;
    utt.pitch = 1.1;
    // Try to find a matching voice
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang === lang)
      || voices.find(v => v.lang.startsWith(lang.split("-")[0]))
      || null;
    if (voice) utt.voice = voice;
    utt.onend = () => resolve();
    utt.onerror = () => resolve();
    window.speechSynthesis.speak(utt);
  });
}

/**
 * Play a pre-generated ElevenLabs phonics sound from CDN (British English),
 * OR use Web Speech API for American English.
 *
 * Strategy:
 *   en-GB → ElevenLabs CDN blob URL (Alice voice, fixes Safari MIME type)
 *   en-US → Web Speech API with en-US voice
 *
 * Stops any currently playing audio first.
 */
export async function playPhonicsAudio(key: string): Promise<void> {
  const accent = currentAccent;

  // Stop any currently playing audio
  if (currentAudio && !currentAudio.paused) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }

  // American English: use Web Speech API
  if (accent === "en-US") {
    await speakWithWebSpeech(key, "en-US");
    return;
  }

  // British English: use ElevenLabs CDN
  const url = AUDIO_MAP[key];
  if (!url) {
    // Key not in CDN map — fall back to Web Speech API with en-GB
    await speakWithWebSpeech(key, "en-GB");
    return;
  }

  try {
    const blobUrl = await getBlobUrl(url, key);
    const audio = new Audio(blobUrl);
    currentAudio = audio;
    await audio.play();
  } catch (blobErr) {
    // Blob approach failed — try direct CDN URL
    console.warn(`Blob fetch failed for "${key}", trying direct URL:`, blobErr);
    try {
      const audio = new Audio(url);
      currentAudio = audio;
      await audio.play();
    } catch (directErr) {
      // Both CDN approaches failed — fall back to Web Speech API
      console.warn(`CDN audio failed for "${key}", falling back to Web Speech:`, directErr);
      await speakWithWebSpeech(key, "en-GB");
    }
  }
}

/**
 * Preload a batch of audio keys — fetches and caches blob URLs in the
 * background so they are ready for instant playback.
 * Only preloads for British English (CDN); American English uses Web Speech API.
 */
export function preloadAudio(keys: string[]) {
  if (currentAccent === "en-US") return; // Web Speech API needs no preloading
  keys.forEach(key => {
    const url = AUDIO_MAP[key];
    if (url && !blobUrlCache.has(key) && !fetchInFlight.has(key)) {
      getBlobUrl(url, key).catch(() => { /* ignore preload errors */ });
    }
  });
}

/** Stop any currently playing audio */
export function stopAudio() {
  if (currentAudio && !currentAudio.paused) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentAudio = null;
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}
