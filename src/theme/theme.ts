import { createTheme } from '@mui/material/styles';
import { COLOR_TOKENS, TYPOGRAPHY_TOKENS, SHAPE_TOKENS } from './themeTokens';

export const appTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: COLOR_TOKENS.backgroundDefault,
      paper:   COLOR_TOKENS.backgroundPaper,
    },
    primary: {
      main:         COLOR_TOKENS.accentPrimary,
      contrastText: COLOR_TOKENS.textInverse,
    },
    secondary: {
      main: COLOR_TOKENS.accentSecondary,
    },
    text: {
      primary:   COLOR_TOKENS.textPrimary,
      secondary: COLOR_TOKENS.textSecondary,
      disabled:  COLOR_TOKENS.textDisabled,
    },
    divider: COLOR_TOKENS.borderSubtle,
    success: { main: COLOR_TOKENS.statusAvailable },
  },
  typography: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyPrimary,
    h1: {
      fontWeight:    700,
      fontSize:      'clamp(2.5rem, 6vw, 5rem)',
      letterSpacing: '-0.03em',
      lineHeight:    1.1,
    },
    h2: {
      fontWeight:    600,
      fontSize:      'clamp(1.75rem, 4vw, 2.5rem)',
      letterSpacing: '-0.02em',
      lineHeight:    1.2,
    },
    h3: {
      fontWeight:    600,
      fontSize:      'clamp(1.25rem, 2.5vw, 1.75rem)',
      letterSpacing: '-0.01em',
    },
    h4: { fontWeight: 500, letterSpacing: '-0.01em' },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
    body1: { lineHeight: 1.75, fontSize: '1rem' },
    body2: { lineHeight: 1.65, fontSize: '0.875rem' },
    caption: {
      fontSize:      '0.75rem',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
    },
    overline: { letterSpacing: '0.1em', fontWeight: 500 },
  },
  shape: { borderRadius: SHAPE_TOKENS.borderRadiusMedium },
  spacing: 8,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*':   { boxSizing: 'border-box' },
        body:  { scrollBehavior: 'smooth', WebkitFontSmoothing: 'antialiased' },
        '::selection': { backgroundColor: COLOR_TOKENS.borderStrong },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 500, letterSpacing: '0' },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage:  'none',
          border:           `1px solid ${COLOR_TOKENS.borderSubtle}`,
          backgroundColor:  COLOR_TOKENS.backgroundPaper,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 500, fontSize: '0.7rem', letterSpacing: '0.05em' },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: COLOR_TOKENS.borderSubtle },
      },
    },
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: 'none' } },
    },
  },
});

export default appTheme;
