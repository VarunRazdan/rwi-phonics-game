// ============================================================
// audioMap.ts — ElevenLabs CDN audio URLs for all RWI phonics sounds
//
// AUDIO_MAP_GB: Alice (British English, educational) — default
// AUDIO_MAP_US: Jessica (American English, playful/bright)
//
// playPhonicsAudio(key) checks the current accent setting and
// fetches the correct CDN file as a Blob with audio/mpeg MIME type.
// This bypasses the CDN content-type: application/octet-stream issue
// that blocks playback in Safari and some mobile browsers.
// ============================================================

let _currentAccent: "en-GB" | "en-US" = "en-GB";

export function setAudioAccent(accent: "en-GB" | "en-US") {
  _currentAccent = accent;
}

export function getAudioAccent(): "en-GB" | "en-US" {
  return _currentAccent;
}

export const AUDIO_MAP_GB: Record<string, string> = {
  "a": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/a_1c073375.mp3",
  "a_e": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/a_e_3dbcb38a.mp3",
  "ai": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ai_8f805306.mp3",
  "air": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/air_c745b0a7.mp3",
  "ar": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ar_817434fe.mp3",
  "are": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/are_e16634a1.mp3",
  "au": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/au_3c667622.mp3",
  "aw": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/aw_4181eee4.mp3",
  "aw2": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/aw2_b6db5573.mp3",
  "ay": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ay_57606fbc.mp3",
  "b": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/b_42a04b23.mp3",
  "c": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/c_49bce3af.mp3",
  "ch": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ch_429cafbd.mp3",
  "d": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/d_283b361c.mp3",
  "e": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/e_de72b1b7.mp3",
  "ea": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ea_97eeb275.mp3",
  "ear": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ear_1d55cea4.mp3",
  "ee": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ee_1ad3d648.mp3",
  "er": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/er_825cce97.mp3",
  "ew": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ew_f4ae8ab9.mp3",
  "f": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/f_495dba44.mp3",
  "g": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/g_18c4e32f.mp3",
  "h": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/h_341bd94c.mp3",
  "i": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/i_b69b2b06.mp3",
  "i_e": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/i_e_7c3debdc.mp3",
  "igh": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/igh_66035a52.mp3",
  "ir": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ir_adf23f14.mp3",
  "ire": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ire_e39e985b.mp3",
  "j": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/j_8373b0d7.mp3",
  "k": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/k_0838ca6c.mp3",
  "l": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/l_48967c56.mp3",
  "le": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/le_c18ef8b2.mp3",
  "m": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/m_b774d684.mp3",
  "n": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/n_ce07ba2c.mp3",
  "ng": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ng_755f68ce.mp3",
  "o": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/o_4ed6fe8b.mp3",
  "o_e": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/o_e_ad0e8ea1.mp3",
  "oa": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/oa_2e95c604.mp3",
  "oi": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/oi_d72fe790.mp3",
  "oo_long": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/oo_long_dcbcd625.mp3",
  "oo_short": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/oo_short_f4b3a9f5.mp3",
  "or": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/or_10943620.mp3",
  "ou": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ou_70adcd52.mp3",
  "ous": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ous_42d5d9d4.mp3",
  "ow": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ow_b2b518aa.mp3",
  "ow_cow": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ow_cow_886e572c.mp3",
  "oy": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/oy_5f290b6d.mp3",
  "p": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/p_404db857.mp3",
  "ph": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ph_3f1cf2a4.mp3",
  "qu": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/qu_b1ceed0d.mp3",
  "r": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/r_fae839be.mp3",
  "s": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/s_80e93670.mp3",
  "sh": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/sh_1a6f944f.mp3",
  "sion": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/sion_39507148.mp3",
  "sure": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/sure_00e7c2ea.mp3",
  "t": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/t_f6cde567.mp3",
  "tch": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/tch_0902a4fd.mp3",
  "th": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/th_22b76671.mp3",
  "tion": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/tion_9a86552b.mp3",
  "ture": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ture_de76871c.mp3",
  "u": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/u_ce870096.mp3",
  "u_e": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/u_e_29ceb761.mp3",
  "ue": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ue_3b667edf.mp3",
  "ur": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ur_d2675a26.mp3",
  "ure": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ure_dda144b5.mp3",
  "v": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/v_60f4678f.mp3",
  "w": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/w_0790227f.mp3",
  "wh": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/wh_e0484b24.mp3",
  "word_author": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_author_15aecbb4.mp3",
  "word_bird": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_bird_1359807e.mp3",
  "word_blue": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_blue_662b0bdd.mp3",
  "word_boat": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_boat_9ed78d72.mp3",
  "word_book": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_book_4150875a.mp3",
  "word_bug": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_bug_96da59c5.mp3",
  "word_cake": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_cake_f5f2f3d7.mp3",
  "word_car": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_car_4394ad69.mp3",
  "word_care": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_care_bfecca4e.mp3",
  "word_catch": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_catch_ffb71dae.mp3",
  "word_chip": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_chip_b2475e7b.mp3",
  "word_claw": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_claw_c07609ba.mp3",
  "word_cod": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_cod_ec1537bc.mp3",
  "word_coin": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_coin_b91f081e.mp3",
  "word_cow": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_cow_277a467f.mp3",
  "word_cube": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_cube_49e90587.mp3",
  "word_cup": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_cup_32565cbd.mp3",
  "word_day": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_day_bf787978.mp3",
  "word_dig": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_dig_ef2dbf33.mp3",
  "word_eat": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_eat_99703700.mp3",
  "word_fair": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_fair_842fc9a4.mp3",
  "word_fed": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_fed_b3239881.mp3",
  "word_fire": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_fire_1f07ce84.mp3",
  "word_for": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_for_bdafe6ef.mp3",
  "word_fox": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_fox_bd3bdc8f.mp3",
  "word_got": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_got_76f0ebb6.mp3",
  "word_home": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_home_2e31cb67.mp3",
  "word_hot": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_hot_f7198cca.mp3",
  "word_jet": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_jet_b3fa2e1a.mp3",
  "word_kite": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_kite_d530861e.mp3",
  "word_leg": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_leg_f7b02289.mp3",
  "word_letter": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_letter_3d980391.mp3",
  "word_mat": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_mat_77889c62.mp3",
  "word_moon": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_moon_48311fb4.mp3",
  "word_nap": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_nap_9e09fd79.mp3",
  "word_near": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_near_cf657615.mp3",
  "word_new": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_new_257a4806.mp3",
  "word_night": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_night_a6c4873c.mp3",
  "word_out": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_out_53e2ba02.mp3",
  "word_pan": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_pan_e8127425.mp3",
  "word_phone": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_phone_6ed9e885.mp3",
  "word_pin": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_pin_86e7a06a.mp3",
  "word_pure": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_pure_eed10f1c.mp3",
  "word_quiz": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_quiz_61d8dcd8.mp3",
  "word_rain": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_rain_53014ce2.mp3",
  "word_ring": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_ring_c7ccdf8a.mp3",
  "word_run": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_run_517c4bf8.mp3",
  "word_sat": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_sat_cac57a8e.mp3",
  "word_saw": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_saw_1ea752f9.mp3",
  "word_ship": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_ship_ac5a4cb9.mp3",
  "word_snow": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_snow_0aff163c.mp3",
  "word_tap": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_tap_dd10553f.mp3",
  "word_thin": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_thin_f37f3063.mp3",
  "word_tin": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_tin_8f677962.mp3",
  "word_toy": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_toy_574f62a6.mp3",
  "word_tree": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_tree_7c83630a.mp3",
  "word_turn": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_turn_a9da677e.mp3",
  "word_van": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_van_2ddf4c0a.mp3",
  "word_web": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_web_3244afce.mp3",
  "word_when": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_when_50d40316.mp3",
  "word_yet": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_yet_7b23a811.mp3",
  "word_zip": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_zip_b88045e7.mp3",
  "x": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/x_1e390e3e.mp3",
  "y": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/y_f8499d13.mp3",
  "z": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/z_9ec07df0.mp3",
};

export const AUDIO_MAP_US: Record<string, string> = {
  "a": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/a_0e190fea.mp3",
  "a_e": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/a_e_3d34e1b3.mp3",
  "ai": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ai_64b54083.mp3",
  "air": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/air_6e8b731c.mp3",
  "ar": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ar_edf6cd12.mp3",
  "are": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/are_d0c7f341.mp3",
  "au": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/au_dd5382c1.mp3",
  "aw": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/aw_7ffe1cf9.mp3",
  "aw2": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/aw2_b0b9710e.mp3",
  "ay": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ay_71789cad.mp3",
  "b": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/b_1c4b9f7b.mp3",
  "c": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/c_f8fb3b45.mp3",
  "ch": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ch_f426fdcc.mp3",
  "d": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/d_f2c6af86.mp3",
  "e": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/e_e47fae22.mp3",
  "ea": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ea_1f0092d5.mp3",
  "ear": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ear_ac5fa089.mp3",
  "ee": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ee_a2af7cb9.mp3",
  "er": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/er_2e365142.mp3",
  "ew": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ew_0be04a37.mp3",
  "f": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/f_782abbc6.mp3",
  "g": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/g_d1024f41.mp3",
  "h": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/h_bbd12a51.mp3",
  "i": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/i_c4b83dcf.mp3",
  "i_e": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/i_e_5705b675.mp3",
  "igh": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/igh_379aec9d.mp3",
  "ir": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ir_ef8f69ee.mp3",
  "ire": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ire_b4d3d336.mp3",
  "j": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/j_7f8920b5.mp3",
  "k": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/k_644df928.mp3",
  "l": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/l_dcc4527d.mp3",
  "le": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/le_fc475df7.mp3",
  "m": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/m_d45f4347.mp3",
  "n": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/n_975ccdba.mp3",
  "ng": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ng_5554cb20.mp3",
  "o": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/o_9f37afd0.mp3",
  "o_e": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/o_e_ec99120c.mp3",
  "oa": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/oa_c3ac8970.mp3",
  "oi": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/oi_139d1f0d.mp3",
  "oo_long": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/oo_long_1bea2315.mp3",
  "oo_short": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/oo_short_d4235991.mp3",
  "or": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/or_b25ffc7c.mp3",
  "ou": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ou_d9656afa.mp3",
  "ous": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ous_9c84ff56.mp3",
  "ow": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ow_8341ace4.mp3",
  "ow_cow": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ow_cow_629f9573.mp3",
  "oy": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/oy_2e0b660d.mp3",
  "p": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/p_8948bf71.mp3",
  "ph": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ph_0483f83c.mp3",
  "qu": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/qu_bbfa0752.mp3",
  "r": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/r_dc131291.mp3",
  "s": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/s_fbbd0d56.mp3",
  "sh": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/sh_05b07a2d.mp3",
  "sion": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/sion_4a7bcc6d.mp3",
  "sure": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/sure_8c602d43.mp3",
  "t": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/t_5050db2e.mp3",
  "tch": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/tch_634fe450.mp3",
  "th": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/th_11313751.mp3",
  "tion": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/tion_452d6992.mp3",
  "ture": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ture_57a7b7ae.mp3",
  "u": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/u_25fdef09.mp3",
  "u_e": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/u_e_0c5498ed.mp3",
  "ue": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ue_46fefc98.mp3",
  "ur": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ur_c5eb3c19.mp3",
  "ure": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/ure_b9e40cd1.mp3",
  "v": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/v_1601bccd.mp3",
  "w": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/w_a152730f.mp3",
  "wh": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/wh_fd65819a.mp3",
  "word_author": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_author_92c602ca.mp3",
  "word_bird": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_bird_d13f1a4d.mp3",
  "word_blue": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_blue_4f6a1859.mp3",
  "word_boat": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_boat_b511a52f.mp3",
  "word_book": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_book_70b5b8be.mp3",
  "word_bug": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_bug_e2e43616.mp3",
  "word_cake": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_cake_d37bd88c.mp3",
  "word_car": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_car_c0623107.mp3",
  "word_care": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_care_b36930a3.mp3",
  "word_catch": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_catch_b9786021.mp3",
  "word_chip": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_chip_ca441924.mp3",
  "word_claw": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_claw_919b08e2.mp3",
  "word_cod": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_cod_a7db49a1.mp3",
  "word_coin": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_coin_617d14b5.mp3",
  "word_cow": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_cow_eb1dd73e.mp3",
  "word_cube": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_cube_26709cb9.mp3",
  "word_cup": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_cup_b60ac4a9.mp3",
  "word_day": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_day_3919614b.mp3",
  "word_dig": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_dig_78c9ae0c.mp3",
  "word_eat": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_eat_fe0b9898.mp3",
  "word_fair": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_fair_ae4d1763.mp3",
  "word_fed": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_fed_2c5388da.mp3",
  "word_fire": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_fire_5b42b3e1.mp3",
  "word_for": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_for_73b297b3.mp3",
  "word_fox": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_fox_3e7ee5d4.mp3",
  "word_got": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_got_01b415fc.mp3",
  "word_home": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_home_c41b9c13.mp3",
  "word_hot": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_hot_3ca89d0e.mp3",
  "word_jet": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_jet_c04350f9.mp3",
  "word_kite": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_kite_59876a10.mp3",
  "word_leg": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_leg_61428d04.mp3",
  "word_letter": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_letter_dab561ca.mp3",
  "word_mat": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_mat_2de9fd88.mp3",
  "word_moon": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_moon_4aee680b.mp3",
  "word_nap": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_nap_fee3cf08.mp3",
  "word_near": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_near_182284c1.mp3",
  "word_new": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_new_f37a0f9f.mp3",
  "word_night": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_night_a9db45aa.mp3",
  "word_out": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_out_b93b1217.mp3",
  "word_pan": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_pan_5d3202d0.mp3",
  "word_phone": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_phone_0580141a.mp3",
  "word_pin": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_pin_95c873b1.mp3",
  "word_pure": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_pure_8ab9f4b1.mp3",
  "word_quiz": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_quiz_92e23fff.mp3",
  "word_rain": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_rain_e8ccbba6.mp3",
  "word_ring": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_ring_d1d65088.mp3",
  "word_run": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_run_0a83154c.mp3",
  "word_sat": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_sat_8e7517b0.mp3",
  "word_saw": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_saw_a8a828cd.mp3",
  "word_ship": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_ship_7fcd81e7.mp3",
  "word_snow": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_snow_81c5aa7d.mp3",
  "word_tap": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_tap_0a819e9d.mp3",
  "word_thin": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_thin_78d181b8.mp3",
  "word_tin": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_tin_998dd2cd.mp3",
  "word_toy": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_toy_1154d7c1.mp3",
  "word_tree": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_tree_12b4bebf.mp3",
  "word_turn": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_turn_83e4b161.mp3",
  "word_van": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_van_934ce2c4.mp3",
  "word_web": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_web_e0c61814.mp3",
  "word_when": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_when_b78f2d65.mp3",
  "word_yet": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_yet_9f3eecba.mp3",
  "word_zip": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/word_zip_be609147.mp3",
  "x": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/x_2c06cc58.mp3",
  "y": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/y_762a4249.mp3",
  "z": "https://d2xsxph8kpxj0f.cloudfront.net/310419663027077078/hWFp5C696d56ZEubd2aADg/z_b9668dcf.mp3",
};

// Blob URL cache to avoid re-fetching the same file
const _blobCache: Record<string, string> = {};

/**
 * Play a phonics sound by key.
 * Fetches the CDN MP3 as a Blob with audio/mpeg MIME type (fixes Safari/iOS).
 * Uses the current accent setting to pick GB or US audio.
 */
export async function playPhonicsAudio(key: string): Promise<void> {
  const map = _currentAccent === "en-US" ? AUDIO_MAP_US : AUDIO_MAP_GB;
  const url = map[key];

  if (!url) {
    console.warn(`[audioMap] No audio found for key: "${key}" (accent: ${_currentAccent})`);
    return;
  }

  const cacheKey = `${_currentAccent}:${key}`;

  // Return cached blob URL if available
  if (_blobCache[cacheKey]) {
    const audio = new Audio(_blobCache[cacheKey]);
    audio.play().catch(() => {});
    return;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} fetching ${url}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    // Force audio/mpeg MIME type regardless of CDN content-type header
    const blob = new Blob([arrayBuffer], { type: "audio/mpeg" });
    const blobUrl = URL.createObjectURL(blob);
    _blobCache[cacheKey] = blobUrl;

    const audio = new Audio(blobUrl);
    audio.play().catch((err) => {
      console.warn(`[audioMap] Audio play failed for "${key}":`, err);
    });
  } catch (err) {
    console.error(`[audioMap] Failed to load audio for "${key}":`, err);
  }
}
