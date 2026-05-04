// =============================================================================
// THEME TOKENS — Phase 2: Painting & Forest
// =============================================================================

export const COLOR_TOKENS = {
  // Background scale — light canvas
  backgroundDefault: '#F6F7F4',
  backgroundPaper: '#FFFFFF',
  backgroundElevated: '#ECEDE7',
  backgroundSubtle: '#E2E4DD',
  // Text scale — strong contrast

  textPrimary: '#141414',
  textSecondary: '#4E5451',
  textDisabled: '#808780',
  textInverse: '#FFFFFF',
  // Brand accents — bold and expressive
  accentPrimary: '#EA5221', // burnt orange
  accentSecondary: '#FF2F92', // electric magenta
  accentMuted: '#F4A080', // soft tint
  // Status colors
  statusAvailable: '#22C55E',
  statusComingSoon: '#9BA19C',
  statusCompleted: '#EA5221',
  // Semantic tints — chip backgrounds and icon wrappers
  accentDanger: '#F44336',
  accentDangerSubtle: 'rgba(244, 67, 54, 0.1)',
  chipPeriodBg: 'rgba(95, 173, 122, 0.1)',
  chipPeriodBorder: 'rgba(95, 173, 122, 0.2)',
  chipScoreBg: 'rgba(217, 162, 115, 0.12)',
  // Borders
  borderSubtle: 'rgba(0,0,0,0.06)',
  borderDefault: 'rgba(0,0,0,0.14)',
  borderStrong: 'rgba(234,82,33,0.35)',
} as const;

export const TYPOGRAPHY_TOKENS = {
  fontFamilyPrimary: '"Inter", "Helvetica Neue", Arial, sans-serif',
  fontFamilyMono: '"JetBrains Mono", "Fira Code", monospace',
  fontFamilyScript: '"Apple Chancery", "Dancing Script", cursive',
} as const;

export const SHAPE_TOKENS = {
  borderRadiusSmall: 4,
  borderRadiusMedium: 8,
  borderRadiusLarge: 16,
  borderRadiusRound: 100,
} as const;

export const MOTION_TOKENS = {
  durationFast: '150ms',
  durationNormal: '280ms',
  durationSlow: '500ms',
  easingDefault: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easingDecelerate: 'cubic-bezier(0, 0, 0.2, 1)',
} as const;
