import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  navBarContainer: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: `${COLOR_TOKENS.backgroundDefault}E6`,
    backdropFilter: 'blur(12px)',
    borderBottom: `0.5px solid ${COLOR_TOKENS.borderSubtle}`,
  },

  navBarInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    py: 1.5,
    px: { xs: 2, md: 4 },
  },

  logoButton: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '11px',
    fontWeight: 400,
    letterSpacing: '0.08em',
    color: COLOR_TOKENS.textPrimary,
    p: 0,
    '&:hover': {
      backgroundColor: 'transparent',
      color: COLOR_TOKENS.accentPrimary,
    },
  },

  navLink: (isActive: boolean) => ({
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '10px',
    letterSpacing: '0.12em',
    fontWeight: 400,
    color: isActive ? COLOR_TOKENS.accentPrimary : COLOR_TOKENS.textDisabled,
    p: 0,
    minWidth: 0,
    position: 'relative' as const,
    '&::after': isActive
      ? {
          content: '""',
          position: 'absolute',
          bottom: -2,
          left: 0,
          right: 0,
          height: '1px',
          backgroundColor: COLOR_TOKENS.accentPrimary,
        }
      : {},
    '&:hover': {
      backgroundColor: 'transparent',
      color: COLOR_TOKENS.textPrimary,
    },
    '&.Mui-disabled': {
      color: COLOR_TOKENS.textDisabled,
      opacity: 0.4,
    },
  }),
};
