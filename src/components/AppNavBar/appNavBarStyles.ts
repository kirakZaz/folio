import { hideScrollbar, monoUppercase, navBarSurface, navIndex, navItemBase, navLabel, navUnderline } from '@/theme/commonStyles';
import { COLOR_TOKENS } from '@/theme/themeTokens';

export const styles = {
  navBarContainer: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    width: '100%',
    ...navBarSurface,
  },

  navBarInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: { xs: 2, md: 4 },
    pt: 2,
    pb: 0,
  },

  logoButton: {
    ...monoUppercase,
    fontSize: '11px',
    fontWeight: 400,
    color: COLOR_TOKENS.textPrimary,
    p: 0,
    pb: '16px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'color 250ms ease',
    '&:hover': {
      color: COLOR_TOKENS.accentPrimary,
    },
  },

  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: { xs: 4, md: 6 },
    overflowX: 'auto',
    ...hideScrollbar,
  },

  navItem: (isActive: boolean) => ({
    ...navItemBase,
    ...navUnderline(isActive),
    '&:hover .app-nav-index': { opacity: 1 },
    '&:hover .app-nav-label': { color: COLOR_TOKENS.textPrimary },
  }),

  navItemDisabled: {
    ...navItemBase,
    cursor: 'default',
    opacity: 0.35,
    pointerEvents: 'none',
  },

  navIndex,
  navLabel,
};
