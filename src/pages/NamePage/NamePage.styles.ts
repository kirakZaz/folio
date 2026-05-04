import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  page: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: { xs: 'calc(100vh - 60px)', md: '100vh' },
    minHeight: 0,
  },

  nameWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: { xs: 0.5, md: 1 },
    userSelect: 'none',
  },

  lineWrap: {
    position: 'relative',
    display: 'inline-block',
  },

  line: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyScript,
    fontWeight: 700,
    lineHeight: 1.1,
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },

  line1: {
    fontSize: { xs: '4.5rem', sm: '7rem', md: '9rem', lg: '11rem' },
    color: COLOR_TOKENS.textPrimary,
    animation: 'writeReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both',
  },

  line2: {
    fontSize: { xs: '3.5rem', sm: '5.5rem', md: '7rem', lg: '8.5rem' },
    color: COLOR_TOKENS.accentPrimary,
    animation: 'writeReveal 1.8s cubic-bezier(0.22, 1, 0.36, 1) 1.8s both',
  },

  cursor: (startDelay: number, duration: number) => ({
    position: 'absolute',
    top: '10%',
    height: '80%',
    width: '2px',
    backgroundColor: COLOR_TOKENS.accentPrimary,
    borderRadius: '1px',
    animation: `cursorSlide ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${startDelay}s both, cursorBlink 0.6s step-end ${startDelay + duration}s infinite`,
  }),
};