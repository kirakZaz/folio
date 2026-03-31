export const ROW_HEIGHT = 160;

// Maps 1:1 to WORK_PROJECTS_DATA by index order
export const BENTO_CONFIG = [
  { colSpan: 2, rowSpan: 1 }, // AXO Tech
  { colSpan: 2, rowSpan: 1 }, // SharePass
  { colSpan: 1, rowSpan: 1 }, // Wowie
  { colSpan: 1, rowSpan: 1 }, // Just Eat
  { colSpan: 1, rowSpan: 1 }, // Roundtrip
  { colSpan: 1, rowSpan: 1 }, // XMPie
  { colSpan: 1, rowSpan: 1 }, // Beehive
  { colSpan: 1, rowSpan: 1 }, // e-shop
] as const;

export const CARD_ACCENTS = [
  { bg: '#EAEAED', accent: '#6B5CE7' }, // AXO         — purple
  { bg: '#EDECEA', accent: '#FF2F92' }, // SharePass   — magenta
  { bg: '#EAF0EA', accent: '#22C55E' }, // Wowie       — green
  { bg: '#F0EAE9', accent: '#FF7A18' }, // Just Eat    — orange
  { bg: '#EEEAE9', accent: '#E85D4A' }, // Roundtrip   — red
  { bg: '#EAF0EE', accent: '#0EA5E9' }, // XMPie       — blue
  { bg: '#ECEAE9', accent: '#9B8EA8' }, // Beehive     — mauve
  { bg: '#EAF0EC', accent: '#16A34A' }, // e-shop      — emerald
] as const;
