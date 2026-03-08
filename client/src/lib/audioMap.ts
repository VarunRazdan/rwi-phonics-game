/**
 * RWI Phonics Audio Map
 *
 * All phoneme sounds generated using eSpeak-NG with correct X-SAMPA phoneme notation
 * based on the official Read Write Inc. pronunciation guide:
 *
 * - Stretchy sounds (m, s, n, f, l, r, v, th, ng, nk, z, sh) are elongated
 * - Bouncy sounds (t, p, k, c, ch, x, d, g, b, j, y, w, qu, h) are short with no 'uh' added
 * - Short vowels (a, e, i, o, u) are short and sharp
 * - Set 2 & 3 long vowels use correct diphthong IPA notation
 *
 * CDN URLs verified from upload log.
 */

const BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg";

export const AUDIO_MAP: Record<string, string> = {
  // ── Set 1: Stretchy sounds (elongated, pure phoneme) ──────────────────────
  'm':    `${BASE}/m_e60e95e5.mp3`,
  's':    `${BASE}/s_7d847ea5.mp3`,
  'n':    `${BASE}/n_4e63d519.mp3`,
  'f':    `${BASE}/f_a2395d34.mp3`,
  'l':    `${BASE}/l_970d47f3.mp3`,
  'r':    `${BASE}/r_0386e957.mp3`,
  'v':    `${BASE}/v_2ec23850.mp3`,
  'th':   `${BASE}/th_ecbaa679.mp3`,
  'ng':   `${BASE}/ng_0ed51ccf.mp3`,
  'nk':   `${BASE}/nk_28261bac.mp3`,
  'z':    `${BASE}/z_5c60f467.mp3`,
  'sh':   `${BASE}/sh_ed87eaf3.mp3`,

  // ── Set 1: Bouncy sounds (short, no 'uh' at end) ─────────────────────────
  't':    `${BASE}/t_3238f474.mp3`,
  'p':    `${BASE}/p_7d2c8fcc.mp3`,
  'k':    `${BASE}/k_7822d993.mp3`,
  'c':    `${BASE}/c_5e45c360.mp3`,
  'ch':   `${BASE}/ch_17474dd0.mp3`,
  'x':    `${BASE}/x_4a3d1010.mp3`,
  'd':    `${BASE}/d_3c661cb2.mp3`,
  'g':    `${BASE}/g_d744a9f8.mp3`,
  'b':    `${BASE}/b_da937eaf.mp3`,
  'j':    `${BASE}/j_229bd4be.mp3`,
  'y':    `${BASE}/y_33e08cb8.mp3`,
  'w':    `${BASE}/w_689bb78f.mp3`,
  'qu':   `${BASE}/qu_715263e3.mp3`,
  'h':    `${BASE}/h_cd03c6ae.mp3`,

  // ── Set 1: Short vowels (short and sharp) ────────────────────────────────
  'a':    `${BASE}/a_816a58bd.mp3`,
  'e':    `${BASE}/e_48ba630f.mp3`,
  'i':    `${BASE}/i_8734cbe8.mp3`,
  'o':    `${BASE}/o_f85d777f.mp3`,
  'u':    `${BASE}/u_4c3f1d47.mp3`,

  // ── Set 2: Long vowel sounds ──────────────────────────────────────────────
  'ay':   `${BASE}/ay_258b9a40.mp3`,
  'ee':   `${BASE}/ee_aa5ac410.mp3`,
  'igh':  `${BASE}/igh_02a2aa5d.mp3`,
  'ow':   `${BASE}/ow_64158287.mp3`,
  'oo':   `${BASE}/oo_3eaa8e6b.mp3`,
  'oo2':  `${BASE}/oo2_4128f5eb.mp3`,
  'ar':   `${BASE}/ar_15f6a862.mp3`,
  'or':   `${BASE}/or_bf740cfa.mp3`,
  'air':  `${BASE}/air_e3523f7f.mp3`,
  'ir':   `${BASE}/ir_d8b94cad.mp3`,
  'ou':   `${BASE}/ou_08abe01b.mp3`,
  'oy':   `${BASE}/oy_66de93f5.mp3`,

  // ── Set 3: Alternative spellings ─────────────────────────────────────────
  'ea':   `${BASE}/ea_9801fc67.mp3`,
  'oi':   `${BASE}/oi_64671cb8.mp3`,
  'a-e':  `${BASE}/a-e_5e1e9418.mp3`,
  'i-e':  `${BASE}/i-e_d6a85f2b.mp3`,
  'o-e':  `${BASE}/o-e_88dbfd29.mp3`,
  'u-e':  `${BASE}/u-e_2fd97fa0.mp3`,
  'aw':   `${BASE}/aw_c24a673a.mp3`,
  'are':  `${BASE}/are_fcbcc05f.mp3`,
  'ur':   `${BASE}/ur_b8c48870.mp3`,
  'er':   `${BASE}/er_e25d1a46.mp3`,
  'ow2':  `${BASE}/ow2_5cf01ca5.mp3`,
  'ai':   `${BASE}/ai_1374cd9e.mp3`,
  'oa':   `${BASE}/oa_99b31d13.mp3`,
  'ew':   `${BASE}/ew_b485d809.mp3`,
  'ire':  `${BASE}/ire_8f72dded.mp3`,
  'ear':  `${BASE}/ear_b9d3285c.mp3`,
  'ure':  `${BASE}/ure_75215860.mp3`,
};

// Cache for blob URLs (avoids re-fetching on repeat plays)
const blobCache: Record<string, string> = {};
let currentAudio: HTMLAudioElement | null = null;

/**
 * Play a phonics sound by its audio key.
 * Fetches the CDN MP3 as a blob with correct audio/mpeg MIME type
 * to ensure cross-browser compatibility (Safari, iOS, etc.)
 */
export async function playPhonicsAudio(audioKey: string): Promise<void> {
  const url = AUDIO_MAP[audioKey];
  if (!url) {
    console.warn(`No audio found for key: ${audioKey}`);
    return;
  }

  // Stop any currently playing audio
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }

  try {
    // Use cached blob URL if available
    let blobUrl = blobCache[audioKey];

    if (!blobUrl) {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const arrayBuffer = await response.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: 'audio/mpeg' });
      blobUrl = URL.createObjectURL(blob);
      blobCache[audioKey] = blobUrl;
    }

    const audio = new Audio(blobUrl);
    currentAudio = audio;
    await audio.play();
  } catch (err) {
    console.error(`Failed to play audio for ${audioKey}:`, err);
  }
}
