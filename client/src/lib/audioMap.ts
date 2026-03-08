/**
 * Audio map for RWI phonics sounds.
 * Generated using ElevenLabs Pronunciation Dictionary API with IPA phoneme rules.
 * Dictionary ID: CZqsWjD1NNOw8EBA7DoP (version: fdapGLKULsPt7NirzRO6)
 * Voice: Jessica (American English, Playful, Bright)
 * All CDN URLs verified from upload log.
 */

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg";

export const AUDIO_MAP: Record<string, string> = {
  // Set 1 - consonants and short vowels
  "m":        `${CDN}/m_e1e8b1ec.mp3`,
  "a":        `${CDN}/a_abf2c4c8.mp3`,
  "s":        `${CDN}/s_35607b27.mp3`,
  "d":        `${CDN}/d_c8b62b50.mp3`,
  "t":        `${CDN}/t_a8ec6293.mp3`,
  "i":        `${CDN}/i_edb2cf0f.mp3`,
  "n":        `${CDN}/n_526ad57e.mp3`,
  "p":        `${CDN}/p_411796c0.mp3`,
  "g":        `${CDN}/g_eec943d4.mp3`,
  "o":        `${CDN}/o_8d1ac76b.mp3`,
  "c":        `${CDN}/c_e0cc5c10.mp3`,
  "k":        `${CDN}/k_a35b1c3f.mp3`,
  "u":        `${CDN}/u_497870f1.mp3`,
  "b":        `${CDN}/b_4b762b10.mp3`,
  "f":        `${CDN}/f_9e6a9940.mp3`,
  "e":        `${CDN}/e_43bc03d1.mp3`,
  "l":        `${CDN}/l_2129aaf5.mp3`,
  "h":        `${CDN}/h_d15780f6.mp3`,
  "sh":       `${CDN}/sh_5d78387e.mp3`,
  "r":        `${CDN}/r_a487c0ca.mp3`,
  "j":        `${CDN}/j_45192bea.mp3`,
  "v":        `${CDN}/v_82a4f0f0.mp3`,
  "y":        `${CDN}/y_5aa6e594.mp3`,
  "w":        `${CDN}/w_8f861a83.mp3`,
  "th":       `${CDN}/th_3c3f10ae.mp3`,
  "z":        `${CDN}/z_665582b1.mp3`,
  "x":        `${CDN}/x_20823be2.mp3`,
  "qu":       `${CDN}/qu_bbf50a97.mp3`,
  "ch":       `${CDN}/ch_5c32fbff.mp3`,
  "ng":       `${CDN}/ng_3d96bac8.mp3`,
  // Set 2 - vowel digraphs and long vowels
  "ay":       `${CDN}/ay_a9cd3206.mp3`,
  "ee":       `${CDN}/ee_60cf7443.mp3`,
  "igh":      `${CDN}/igh_dbacc85d.mp3`,
  "ow":       `${CDN}/ow_6eeefde6.mp3`,
  "oo":       `${CDN}/oo_ae61a376.mp3`,
  "oo_short": `${CDN}/oo_short_07a9babe.mp3`,
  "ar":       `${CDN}/ar_a821a3bd.mp3`,
  "or":       `${CDN}/or_f76d6d7d.mp3`,
  "air":      `${CDN}/air_4d117302.mp3`,
  "ir":       `${CDN}/ir_a0e8941a.mp3`,
  "ou":       `${CDN}/ou_74cc5f42.mp3`,
  "oy":       `${CDN}/oy_b9569a32.mp3`,
  // Set 3 - additional sounds
  "ea":       `${CDN}/ea_8d159b82.mp3`,
  "oi":       `${CDN}/oi_0d03d45c.mp3`,
  "a_e":      `${CDN}/a_e_ef303e54.mp3`,
  "i_e":      `${CDN}/i_e_9bf16387.mp3`,
  "o_e":      `${CDN}/o_e_80d325a9.mp3`,
  "u_e":      `${CDN}/u_e_c248f36b.mp3`,
  "aw":       `${CDN}/aw_7c353f57.mp3`,
  "are":      `${CDN}/are_ebfbc32d.mp3`,
  "ur":       `${CDN}/ur_86d758db.mp3`,
  "er":       `${CDN}/er_14ef7d80.mp3`,
  "ow2":      `${CDN}/ow2_e8fc3664.mp3`,
  "ai":       `${CDN}/ai_977c139d.mp3`,
  "oa":       `${CDN}/oa_b4cdd11a.mp3`,
  "ew":       `${CDN}/ew_a948ab38.mp3`,
  "ire":      `${CDN}/ire_2d2203ec.mp3`,
  "ear":      `${CDN}/ear_7fac538f.mp3`,
  "ure":      `${CDN}/ure_537b89d1.mp3`,
  "wh":       `${CDN}/wh_bc87f6b7.mp3`,
  "ph":       `${CDN}/ph_5710ba67.mp3`,
  "tion":     `${CDN}/tion_e69f8ee0.mp3`,
};

// Cache for blob URLs to avoid re-fetching
const blobCache: Record<string, string> = {};

/**
 * Play a phonics sound by its audio key.
 * Fetches the CDN audio as a blob (to fix MIME type issues) and plays it.
 */
export async function playPhonicsAudio(audioKey: string): Promise<void> {
  const url = AUDIO_MAP[audioKey];
  if (!url) {
    console.warn(`No audio found for key: ${audioKey}`);
    return;
  }

  try {
    // Use cached blob URL if available
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
