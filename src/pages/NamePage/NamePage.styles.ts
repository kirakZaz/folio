import { keyframes } from '@mui/system';

import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

const writeReveal = keyframes`
  from { clip-path: inset(0 100% 0 0); }
  to   { clip-path: inset(0 -5% 0 0); }
`;

const penSlide = (duration: number) => keyframes`
  0%   { left: -2px; opacity: 1; }
  90%  { left: 100%; opacity: 1; }
  100% { left: 100%; opacity: 0; }
`;

export const styles = {
  page: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: { xs: 'calc(100vh - 60px)', md: '100vh' },
    position: 'relative',
  },

  nameWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: { xs: -1, md: -2 },
    userSelect: 'none',
  },

  lineWrap: {
    position: 'relative',
    display: 'inline-block',
  },

  line: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyScript,
    fontWeight: 400,
    lineHeight: 1.15,
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },

  line1: {
    fontSize: { xs: '5rem', sm: '7.5rem', md: '10rem', lg: '13rem' },
    color: COLOR_TOKENS.textPrimary,
    animation: `${writeReveal} 1.6s cubic-bezier(0.25, 0.1, 0.25, 1) 0.3s both`,
  },

  line2: {
    fontSize: { xs: '3.8rem', sm: '5.7rem', md: '7.6rem', lg: '10rem' },
    color: COLOR_TOKENS.accentPrimary,
    animation: `${writeReveal} 2.4s cubic-bezier(0.25, 0.1, 0.25, 1) 2.0s both`,
  },

  pen: (startDelay: number, duration: number) => ({
    position: 'absolute',
    top: '15%',
    height: '70%',
    width: '2px',
    background: `linear-gradient(to bottom, transparent 0%, ${COLOR_TOKENS.accentPrimary} 30%, ${COLOR_TOKENS.accentPrimary} 70%, transparent 100%)`,
    borderRadius: '1px',
    pointerEvents: 'none',
    opacity: 0,
    animation: `${penSlide(duration)} ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${startDelay}s both`,
  }),

  replayButton: {
    position: 'absolute',
    bottom: { xs: 24, md: 40 },
    color: COLOR_TOKENS.textDisabled,
    border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    transition: 'color 200ms ease, border-color 200ms ease',
    '&:hover': {
      color: COLOR_TOKENS.accentPrimary,
      borderColor: COLOR_TOKENS.accentPrimary,
    },
  },
};
