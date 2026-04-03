import { COLOR_TOKENS } from '@/theme/themeTokens';

export const styles = {
  header: {
    mb: 5,
  },

  titleLink: {
    display: 'flex',
    alignItems: 'center',
    color: COLOR_TOKENS.textDisabled,
    transition: 'color 150ms ease',
    '&:hover': { color: COLOR_TOKENS.accentPrimary },
    mt: '6px',
  },

  chipPeriod: {
    color: COLOR_TOKENS.accentPrimary,
    backgroundColor: COLOR_TOKENS.chipPeriodBg,
    border: `1px solid ${COLOR_TOKENS.chipPeriodBorder}`,
  },

  chipTeam: {
    color: COLOR_TOKENS.textSecondary,
    backgroundColor: COLOR_TOKENS.backgroundSubtle,
  },

  metaText: {
    color: COLOR_TOKENS.textSecondary,
  },

  metaMuted: {
    color: COLOR_TOKENS.textDisabled,
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

  divider: {
    mb: 5,
    borderColor: COLOR_TOKENS.borderSubtle,
  },

  grid: {
    mb: 6,
  },

  sectionCaption: {
    color: COLOR_TOKENS.textSecondary,
    letterSpacing: '0.08em',
    mb: 2,
    display: 'block',
  },

  techChip: {
    color: COLOR_TOKENS.textSecondary,
    backgroundColor: COLOR_TOKENS.backgroundSubtle,
    border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
  },

  listIcon: (isPrimary: boolean) => ({
    fontSize: 16,
    color: isPrimary ? COLOR_TOKENS.accentPrimary : COLOR_TOKENS.textSecondary,
    mt: '2px',
    flexShrink: 0,
  }),

  listText: {
    color: COLOR_TOKENS.textSecondary,
    lineHeight: 1.6,
  },

  screenshotsCaption: {
    color: COLOR_TOKENS.textSecondary,
    letterSpacing: '0.08em',
    mb: 3,
    display: 'block',
  },

  galleryImg: {
    borderRadius: 2,
    width: '100%',
    display: 'block',
  },

  emptyState: {
    minHeight: 180,
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
