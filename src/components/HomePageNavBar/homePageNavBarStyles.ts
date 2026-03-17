import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  navBarContainer: {
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 99,
    width: '100%',
    backgroundColor: COLOR_TOKENS.backgroundDefault,
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderBottom: `1px solid ${COLOR_TOKENS.borderDefault}`,
    boxShadow: `0 2px 12px ${COLOR_TOKENS.borderDefault}`,
  },

  navBarInner: {
    maxWidth: { md: '1200px', lg: '1680px' },
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: { xs: 4, md: 6 },
    px: { xs: 2, md: 4 },
    // py: 1.25,
    pt: 2,
    overflowX: 'auto',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': { display: 'none' },
  },

  navItem: (isActive: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    flexShrink: 0,
    position: 'relative',
    pb: '16px',

    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '1.5px',
      backgroundColor: COLOR_TOKENS.accentPrimary,
      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
      opacity: isActive ? 1 : 0,
      transition: 'transform 250ms ease, opacity 250ms ease',
      transformOrigin: 'left',
    },

    '&:hover .home-nav-index': {
      color: COLOR_TOKENS.accentPrimary,
      opacity: 1,
    },
    '&:hover .home-nav-label': {
      color: COLOR_TOKENS.textPrimary,
    },
  }),

  navIndex: (isActive: boolean) => ({
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '14px',
    letterSpacing: '0.12em',
    color: COLOR_TOKENS.accentPrimary,
    opacity: isActive ? 1 : 0.35,
    transition: 'opacity 250ms ease',
    lineHeight: 1,
    userSelect: 'none',
  }),

  navLabel: (isActive: boolean) => ({
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '10px',
    letterSpacing: '0.12em',
    fontWeight: isActive ? 500 : 400,
    color: isActive ? COLOR_TOKENS.textPrimary : COLOR_TOKENS.textSecondary,
    transition: 'color 250ms ease, font-weight 250ms ease',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    userSelect: 'none',
  }),
};
