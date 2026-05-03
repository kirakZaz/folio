import { monoUppercase } from '@/theme/commonStyles';
import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  root: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    minHeight: '100vh',
    maxWidth: '100vw',
    overflowX: 'hidden',
  },

  // ── Mobile top bar (xs only) ───────────────────────────────────────────────
  mobileTopBar: {
    display: { xs: 'flex', md: 'none' },
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 2,
    px: 2,
    py: 1,
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: `${COLOR_TOKENS.backgroundDefault}E8`,
    backdropFilter: 'blur(12px)',
    borderBottom: `1px solid ${COLOR_TOKENS.borderSubtle}`,
  },

  mobileLogo: {
    flexShrink: 0,
    cursor: 'pointer',
  },

  burgerButton: {
    color: COLOR_TOKENS.textPrimary,
    p: 0.5,
  },

  // ── Mobile dropdown menu ───────────────────────────────────────────────────
  mobileDropdown: {
    display: { xs: 'flex', md: 'none' },
    flexDirection: 'column',
    gap: 0.5,
    px: 2,
    py: 2,
    backgroundColor: `${COLOR_TOKENS.backgroundDefault}F5`,
    backdropFilter: 'blur(16px)',
    borderBottom: `1px solid ${COLOR_TOKENS.borderSubtle}`,
  },

  mobileNavItem: (isActive: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    borderLeft: `2px solid ${isActive ? COLOR_TOKENS.accentPrimary : 'transparent'}`,
    cursor: 'pointer',
    py: 1.25,
    px: 2,
    borderRadius: '0 8px 8px 0',
    transition: 'background-color 200ms ease',
    '&:hover': {
      backgroundColor: COLOR_TOKENS.backgroundElevated,
    },
  }),

  mobileNavLabel: (isActive: boolean) => ({
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.82rem',
    fontWeight: isActive ? 600 : 400,
    color: isActive ? COLOR_TOKENS.accentPrimary : COLOR_TOKENS.textSecondary,
    letterSpacing: '0.04em',
  }),

  mobileContactsRow: {
    display: 'flex',
    gap: 2,
    justifyContent: 'center',
    pt: 2,
    mt: 1,
    borderTop: `1px solid ${COLOR_TOKENS.borderSubtle}`,
  },

  mobileContactIcon: {
    width: 26,
    height: 26,
    display: 'block',
    objectFit: 'contain',
  },

  // ── Desktop sidebar (md+) ──────────────────────────────────────────────────
  sidebar: {
    display: { xs: 'none', md: 'flex' },
    width: 136,
    flexShrink: 0,
    position: 'sticky',
    top: 0,
    height: '100vh',
    flexDirection: 'column',
    alignItems: 'flex-start',
    px: 3,
    pt: 1,
    pb: 4,
    pr: 0,
  },

  desktopLogo: {
    cursor: 'pointer',
    mb: 6,
    mt: 2,
  },

  navBlock: {
    flex: 1,
  },

  // ── Contacts (bottom of desktop sidebar) ──────────────────────────────────
  contactsBlock: {
    mt: 'auto',
    backgroundColor: 'rgba(234, 82, 33, 0.1)',
    borderRadius: '8px',
    p: 1.5,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 1.5,
  },

  contactsCaption: {
    ...monoUppercase,
    fontSize: '0.7rem',
    letterSpacing: '0.12em',
    color: COLOR_TOKENS.textSecondary,
    mb: 0.5,
    display: 'block',
    textAlign: 'center',
    width: '100%',
  },

  contactLink: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    opacity: 0.6,
    transition: 'opacity 200ms ease',
    '&:hover': {
      opacity: 1,
    },
  },

  contactIcon: {
    width: 30,
    height: 30,
    display: 'block',
    objectFit: 'contain',
  },

  // ── Main content ───────────────────────────────────────────────────────────
  content: {
    flex: 1,
    px: { xs: 2, md: 3, lg: 5 },
    minWidth: 0,
    maxWidth: '100%',
    overflowX: 'hidden',
    minHeight: { md: '100vh' },
  },
};
