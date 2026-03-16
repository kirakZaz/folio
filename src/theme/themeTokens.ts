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
  textDisabled: '#9BA19C',
  textInverse: '#FFFFFF',
  // Brand accents — bold and expressive
  accentPrimary: '#FF2F92', // electric magenta
  accentSecondary: '#FF7A18', // acid orange
  accentMuted: '#FF9BC5', // soft neon tint
  // Status colors
  statusAvailable: '#22C55E',
  statusComingSoon: '#9BA19C',
  statusCompleted: '#FF7A18',
  // Borders
  borderSubtle: 'rgba(0,0,0,0.06)',
  borderDefault: 'rgba(0,0,0,0.14)',
  borderStrong: 'rgba(255,47,146,0.35)',
} as const;

export const TYPOGRAPHY_TOKENS = {
  fontFamilyPrimary: '"Inter", "Helvetica Neue", Arial, sans-serif',
  fontFamilyMono: '"JetBrains Mono", "Fira Code", monospace',
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
