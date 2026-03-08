/**
 * Audio Map - RWI Phonics Game
 *
 * Set 1 sounds (a-z, sh, ch, th, ng):
 *   Human-recorded phoneme sounds from Sound City Reading (North American English)
 *
 * Set 2/3 sounds (vowel teams, r-controlled vowels, magic-e):
 *   ElevenLabs Jessica (American English) - "sound as in word" format
 *
 * All CDN URLs verified from upload log (upload_human_log.txt).
 * Blob URL fetch used to fix CDN MIME type issues on Safari/mobile.
 */

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg";

export const AUDIO_MAP: Record<string, string> = {
  // ── Set 1: Single letter consonants & short vowels (human-recorded) ──
  "a":        `${CDN}/a_f063c13a.mp3`,
  "b":        `${CDN}/b_c0d827ee.mp3`,
  "c":        `${CDN}/c_69735496.mp3`,
  "d":        `${CDN}/d_5c007f63.mp3`,
  "e":        `${CDN}/e_cdcdb95e.mp3`,
  "f":        `${CDN}/f_357c060f.mp3`,
  "g":        `${CDN}/g_5409efe5.mp3`,
  "h":        `${CDN}/h_01a8ea74.mp3`,
  "i":        `${CDN}/i_e3d18420.mp3`,
  "j":        `${CDN}/j_52ae6cce.mp3`,
  "k":        `${CDN}/k_ad437009.mp3`,
  "l":        `${CDN}/l_951fb70d.mp3`,
  "m":        `${CDN}/m_1836bfe0.mp3`,
  "n":        `${CDN}/n_d1f26672.mp3`,
  "o":        `${CDN}/o_411fd650.mp3`,
  "p":        `${CDN}/p_b1ded0dd.mp3`,
  "qu":       `${CDN}/qu_7f570a10.mp3`,
  "r":        `${CDN}/r_e6bbfcd0.mp3`,
  "s":        `${CDN}/s_982ca7f0.mp3`,
  "t":        `${CDN}/t_d6de7b92.mp3`,
  "u":        `${CDN}/u_3ea0c08f.mp3`,
  "v":        `${CDN}/v_bad8a4ea.mp3`,
  "w":        `${CDN}/w_966ce737.mp3`,
  "x":        `${CDN}/x_8f183f93.mp3`,
  "y":        `${CDN}/y_1ca68516.mp3`,
  "z":        `${CDN}/z_d2aaec84.mp3`,

  // ── Set 1: Consonant digraphs (human-recorded) ──
  "sh":       `${CDN}/sh_9e8b01fa.mp3`,
  "ch":       `${CDN}/ch_9933a7e7.mp3`,
  "th":       `${CDN}/th_84d6027b.mp3`,
  "ng":       `${CDN}/ng_530db3f6.mp3`,

  // ── Set 2: Vowel teams & long vowels (ElevenLabs - "sound as in word") ──
  "ay":       `${CDN}/ay_22e8cdd2.mp3`,
  "ee":       `${CDN}/ee_b91c30d4.mp3`,
  "igh":      `${CDN}/igh_c3b2e4ee.mp3`,
  "ow":       `${CDN}/ow_14489189.mp3`,
  "ow_cow":   `${CDN}/ow_cow_af0b811a.mp3`,
  "oo":       `${CDN}/oo_02755d51.mp3`,
  "oo_short": `${CDN}/oo_short_6ce8ef5d.mp3`,
  "ar":       `${CDN}/ar_186e6e71.mp3`,
  "or":       `${CDN}/or_986c7d5d.mp3`,
  "air":      `${CDN}/air_9daaf4e7.mp3`,
  "ir":       `${CDN}/ir_fb4b4837.mp3`,
  "ou":       `${CDN}/ou_7740fe27.mp3`,
  "oy":       `${CDN}/oy_a871e12a.mp3`,

  // ── Set 3: More vowel sounds & magic-e (ElevenLabs) ──
  "ea":       `${CDN}/ea_57c26629.mp3`,
  "ear":      `${CDN}/ear_979e9455.mp3`,
  "ew":       `${CDN}/ew_e4067a2c.mp3`,
  "oa":       `${CDN}/oa_e084f409.mp3`,
  "oi":       `${CDN}/oi_4eb83da2.mp3`,
  "ai":       `${CDN}/ai_6456af9f.mp3`,
  "aw":       `${CDN}/aw_5c866b0d.mp3`,
  "a-e":      `${CDN}/a-e_d2624d76.mp3`,
  "e-e":      `${CDN}/e-e_4c0f8f39.mp3`,
  "i-e":      `${CDN}/i-e_a2aebcc1.mp3`,
  "o-e":      `${CDN}/o-e_38da32ce.mp3`,
  "u-e":      `${CDN}/u-e_4488a4fc.mp3`,
  "er":       `${CDN}/er_d925d46c.mp3`,
  "ur":       `${CDN}/ur_00470f59.mp3`,
  "ure":      `${CDN}/ure_1e949a1a.mp3`,
  "ire":      `${CDN}/ire_3ca73f02.mp3`,
  "are":      `${CDN}/are_49a28070.mp3`,
};

// Cache for blob URLs to avoid re-fetching
const blobCache: Record<string, string> = {};

/**
 * Play a phonics sound by its audio key.
 * Fetches the CDN MP3 as a Blob (fixes MIME type issues on Safari/mobile)
 * and plays it via HTMLAudioElement.
 */
export async function playPhonicsAudio(audioKey: string): Promise<void> {
  const url = AUDIO_MAP[audioKey];
  if (!url) {
    console.warn(`No audio found for key: ${audioKey}`);
    return;
  }

  try {
    let blobUrl = blobCache[audioKey];
    if (!blobUrl) {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const arrayBuffer = await response.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: "audio/mpeg" });
      blobUrl = URL.createObjectURL(blob);
      blobCache[audioKey] = blobUrl;
    }

    const audio = new Audio(blobUrl);
    audio.volume = 1.0;
    await audio.play();
  } catch (err) {
    console.error(`Failed to play audio for ${audioKey}:`, err);
  }
}
