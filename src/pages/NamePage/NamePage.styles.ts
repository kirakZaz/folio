import { COLOR_TOKENS } from '@/theme/themeTokens';

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
    width: '100%',
    maxWidth: 700,
    px: 2,
  },

  svgLine1: {
    width: { xs: '50%', sm: '42%', md: '38%' },
  },

  svgLine2: {
    width: { xs: '82%', sm: '68%', md: '62%' },
    mt: { xs: -1, md: -2 },
  },

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
