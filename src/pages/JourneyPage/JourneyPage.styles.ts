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

  coursesSection: {
    // no extra styles needed
  },

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

  periodGroup: {
    mb: 5,
  },

  periodLabel: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.7rem',
    color: COLOR_TOKENS.textSecondary,
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
