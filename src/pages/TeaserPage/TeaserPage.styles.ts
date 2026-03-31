import { COLOR_TOKENS } from '@/theme/themeTokens';

export const styles = {
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: COLOR_TOKENS.backgroundDefault,
  },

  ctaWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    py: 5,
    flexDirection: 'column',
    gap: 2,
  },

  ctaButton: {
    borderRadius: '100px',
    position: 'fixed',
    bottom: 22,
    px: 4,
    py: 1.5,
    backgroundColor: COLOR_TOKENS.accentPrimary,
    color: COLOR_TOKENS.textInverse,
    fontSize: '1rem',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 200ms ease, box-shadow 200ms ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: `0 8px 32px ${COLOR_TOKENS.accentPrimary}40`,
    },
    textTransform: 'none',
    letterSpacing: '0.02em',
  }
};
