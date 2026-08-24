import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  intro: {
    mt: { xs: 2, md: 3 },
    mb: { xs: 4, md: 5 },
    maxWidth: 640,
    color: COLOR_TOKENS.textSecondary,
    fontWeight: 300,
    fontSize: { xs: '0.95rem', md: '1.05rem' },
    lineHeight: 1.7,
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
    gap: { xs: 3, md: 3.5 },
    pb: { xs: 4, md: 6 },
    width: '100%',
  },

  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: COLOR_TOKENS.backgroundPaper,
    border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    borderRadius: '14px',
    overflow: 'hidden',
    transition:
      'transform 350ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 300ms ease, border-color 300ms ease',
    '&:hover': {
      transform: 'translateY(-6px)',
      boxShadow: '0 14px 34px rgba(0, 0, 0, 0.10)',
      borderColor: COLOR_TOKENS.borderDefault,
    },
    '&:hover .project-thumb': {
      transform: 'scale(1.04)',
    },
  },

  thumbWrap: {
    position: 'relative',
    width: '100%',
    aspectRatio: '16 / 9',
    overflow: 'hidden',
    borderBottom: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    backgroundColor: COLOR_TOKENS.backgroundElevated,
  },

  thumb: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top center',
    display: 'block',
    transition: 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)',
  },

  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1.25,
    p: { xs: 2, md: 2.5 },
    flex: 1,
  },

  context: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.62rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: COLOR_TOKENS.accentPrimary,
  },

  titleRow: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: 1,
  },

  title: {
    fontSize: '1.15rem',
    fontWeight: 500,
    color: COLOR_TOKENS.textPrimary,
    lineHeight: 1.1,
  },

  year: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.7rem',
    color: COLOR_TOKENS.textDisabled,
    flexShrink: 0,
  },

  tagline: {
    fontSize: '0.9rem',
    fontWeight: 500,
    color: COLOR_TOKENS.textPrimary,
  },

  description: {
    fontSize: '0.82rem',
    fontWeight: 300,
    color: COLOR_TOKENS.textSecondary,
    lineHeight: 1.6,
  },

  techRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 0.75,
  },

  techChip: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.62rem',
    color: COLOR_TOKENS.textSecondary,
    backgroundColor: COLOR_TOKENS.backgroundElevated,
    borderRadius: '6px',
    px: 0.9,
    py: 0.3,
  },

  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 1,
    mt: 'auto',
    pt: 1.5,
    borderTop: `1px solid ${COLOR_TOKENS.borderSubtle}`,
  },

  liveButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 0.5,
    textDecoration: 'none',
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.72rem',
    fontWeight: 600,
    letterSpacing: '0.04em',
    color: COLOR_TOKENS.textInverse,
    backgroundColor: COLOR_TOKENS.accentPrimary,
    borderRadius: '8px',
    px: 1.5,
    py: 0.75,
    transition: 'opacity 200ms ease, transform 200ms ease',
    '&:hover': { opacity: 0.9, transform: 'translateY(-1px)' },
  },

  internalTag: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 0.5,
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.72rem',
    fontWeight: 500,
    color: COLOR_TOKENS.textDisabled,
    backgroundColor: COLOR_TOKENS.backgroundElevated,
    borderRadius: '8px',
    px: 1.5,
    py: 0.75,
  },

  secondaryLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 0.5,
    textDecoration: 'none',
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.72rem',
    fontWeight: 500,
    color: COLOR_TOKENS.textSecondary,
    border: `1px solid ${COLOR_TOKENS.borderDefault}`,
    borderRadius: '8px',
    px: 1.5,
    py: 0.75,
    transition: 'color 200ms ease, border-color 200ms ease',
    '&:hover': { color: COLOR_TOKENS.textPrimary, borderColor: COLOR_TOKENS.textPrimary },
  },
};
