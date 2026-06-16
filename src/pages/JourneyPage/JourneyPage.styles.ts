import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  sectionCaption: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.65rem',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    display: 'block',
    mb: 2.5,
  },

  degreeDescription: {
    maxWidth: 720,
    mb: 5,
    fontSize: '0.9rem',
    lineHeight: 1.7,
    color: COLOR_TOKENS.textSecondary,
  },

  coursesSection: {},

  coursesHeader: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 1.5,
    mb: 3,
  },

  coursesCount: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.6rem',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.1em',
  },

  yearGroup: {
    mb: 6,
  },

  yearLabel: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: COLOR_TOKENS.textPrimary,
    mb: 2,
  },

  trimesterGroup: {
    mb: 3,
  },

  trimesterLabel: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.65rem',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    mb: 1.5,
  },

  coursesGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(5, 1fr)' },
    gap: '12px',
  },
};
