import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  assessmentsSection: {
    mb: 8,
  },

  sectionCaption: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.65rem',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    display: 'block',
    mb: 2.5,
  },

  assessmentsGrid: {
    mb: 3,
  },

  journeyDescription: {
    fontSize: '0.875rem',
    color: COLOR_TOKENS.textSecondary,
    lineHeight: 1.7,
    maxWidth: 560,
  },

  divider: {
    mb: 6,
    borderColor: COLOR_TOKENS.borderSubtle,
  },

  coursesSection: {
    // no extra styles needed
  },

  coursesHeader: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 1.5,
    mb: 2.5,
  },

  coursesCount: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.6rem',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.1em',
  },

  coursesGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(5, 1fr)' },
    gap: '12px',
  },
};
