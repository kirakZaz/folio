import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

// Monospace uppercase — brand boxes, section labels, nav indices
export const monoUppercase = {
  fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.12em',
  lineHeight: 1,
};

// Navbar glass surface — shared between AppNavBar and HomePageNavBar
export const navBarSurface = {
  backgroundColor: COLOR_TOKENS.backgroundDefault,
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  borderBottom: `1px solid ${COLOR_TOKENS.borderDefault}`,
  boxShadow: `0 2px 12px ${COLOR_TOKENS.borderDefault}`,
};

// Nav button base — resets browser button styles, flex row
export const navItemBase = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  flexShrink: 0,
  position: 'relative' as const,
  pb: '16px',
};

// Animated underline ::after for the active nav item
export const navUnderline = (isActive: boolean) => ({
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
});

// Nav index number (e.g. "01")
export const navIndex = (isActive: boolean) => ({
  ...monoUppercase,
  fontSize: '14px',
  color: COLOR_TOKENS.accentPrimary,
  opacity: isActive ? 1 : 0.35,
  transition: 'opacity 250ms ease',
  userSelect: 'none' as const,
});

// Nav label text (e.g. "Experience")
export const navLabel = (isActive: boolean) => ({
  ...monoUppercase,
  fontSize: '10px',
  fontWeight: isActive ? 500 : 400,
  color: isActive ? COLOR_TOKENS.textPrimary : COLOR_TOKENS.textSecondary,
  transition: 'color 250ms ease, font-weight 250ms ease',
  whiteSpace: 'nowrap' as const,
  userSelect: 'none' as const,
});

// Hide scrollbar cross-browser
export const hideScrollbar = {
  scrollbarWidth: 'none' as const,
  msOverflowStyle: 'none' as const,
  '&::-webkit-scrollbar': { display: 'none' },
};

// Card hover lift — subtle elevation on hover
export const cardHoverLift = {
  transition: 'border-color 280ms ease, transform 280ms ease',
  '&:hover': {
    transform: 'translateY(-2px)',
  },
};
