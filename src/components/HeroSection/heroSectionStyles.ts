import { COLOR_TOKENS } from '@/theme/themeTokens';

export const styles = {
  heroWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: { xs: 4, md: 5 },
    pb: { xs: 6, md: 8 },
  },

  avatar: {
    width: { xs: 80, md: 104 },
    height: { xs: 80, md: 104 },
    fontSize: '2rem',
    fontWeight: 600,
    backgroundColor: COLOR_TOKENS.backgroundElevated,
    border: `1px solid ${COLOR_TOKENS.borderDefault}`,
    color: COLOR_TOKENS.accentPrimary,
    flexShrink: 0,
  },

  stackHeader: {
    mb: 4,
  },

  captionText: {
    color: COLOR_TOKENS.textSecondary,
    display: 'block',
    mb: 1,
  },

  heading: {
    color: COLOR_TOKENS.accentPrimary,
  },

  subheading: {
    color: COLOR_TOKENS.textSecondary,
    fontWeight: 400,
  },

  description: {
    color: COLOR_TOKENS.textSecondary,
  },

  stackBody: {
    mb: 4,
  },

  divider: {
    width: '100%',
    borderColor: COLOR_TOKENS.borderSubtle,
  },
};
