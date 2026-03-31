import { COLOR_TOKENS } from '@/theme/themeTokens';

export const styles = {
  button: {
    color: COLOR_TOKENS.textSecondary,
    mb: 4,
    pl: 0,
    '&:hover': {
      backgroundColor: 'transparent',
      color: COLOR_TOKENS.textPrimary,
    },
  },
};
