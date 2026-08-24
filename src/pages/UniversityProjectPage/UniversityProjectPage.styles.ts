import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  header: {
    mb: 6,
  },

  chipPeriod: {
    color: COLOR_TOKENS.accentPrimary,
    backgroundColor: COLOR_TOKENS.chipPeriodBg,
    border: `1px solid ${COLOR_TOKENS.chipPeriodBorder}`,
  },

  chipTrimester: {
    color: COLOR_TOKENS.textSecondary,
    backgroundColor: COLOR_TOKENS.backgroundSubtle,
  },

  chipSubjectType: (isElective: boolean) => ({
    color: isElective ? COLOR_TOKENS.accentPrimary : COLOR_TOKENS.textSecondary,
    backgroundColor: COLOR_TOKENS.backgroundSubtle,
    border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
  }),

  chipScore: {
    color: COLOR_TOKENS.statusCompleted,
    backgroundColor: COLOR_TOKENS.chipScoreBg,
  },

  captionMeta: {
    color: COLOR_TOKENS.textDisabled,
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
  },

  description: {
    color: COLOR_TOKENS.textSecondary,
    maxWidth: 680,
  },

  outlinedButton: {
    color: COLOR_TOKENS.textSecondary,
    borderColor: COLOR_TOKENS.borderDefault,
    '&:hover': {
      borderColor: COLOR_TOKENS.textPrimary,
      color: COLOR_TOKENS.textPrimary,
    },
  },

  presentationLabel: {
    color: COLOR_TOKENS.textSecondary,
    letterSpacing: '0.08em',
    mb: 2,
    display: 'block',
  },

  presentationWrapper: {
    mb: 6,
  },

  iframe: {
    width: '100%',
    height: '95vh',
    border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    borderRadius: 2,
    display: 'block',
  },

  gallery: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
    gap: 2,
  },

  galleryImg: {
    borderRadius: 2,
    width: '100%',
    height: { xs: 320, md: 420 },
    objectFit: 'contain',
    display: 'block',
    boxSizing: 'border-box',
    p: { xs: 2, md: 3 },
    border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    backgroundColor: COLOR_TOKENS.backgroundPaper,
  },

  emptyState: {
    minHeight: 240,
    border: `1px dashed ${COLOR_TOKENS.borderDefault}`,
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_TOKENS.backgroundPaper,
  },

  emptyStateText: {
    color: COLOR_TOKENS.textDisabled,
  },
};
