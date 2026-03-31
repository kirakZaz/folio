import { hideScrollbar, navBarSurface, navIndex, navItemBase, navLabel, navUnderline } from '@/theme/commonStyles';
import { COLOR_TOKENS } from '@/theme/themeTokens';

export const styles = {
  navBarContainer: {
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 99,
    width: '100%',
    ...navBarSurface,
  },

  navBarInner: {
    maxWidth: { md: '1200px', lg: '1680px' },
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: { xs: 4, md: 6 },
    px: { xs: 2, md: 4 },
    pt: 2,
    overflowX: 'auto',
    ...hideScrollbar,
  },

  navItem: (isActive: boolean) => ({
    ...navItemBase,
    ...navUnderline(isActive),
    '&:hover .home-nav-index': { color: COLOR_TOKENS.accentPrimary, opacity: 1 },
    '&:hover .home-nav-label': { color: COLOR_TOKENS.textPrimary },
  }),

  navIndex,
  navLabel,
};
