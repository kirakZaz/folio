import { monoUppercase } from '@/theme/commonStyles';
import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  root: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    minHeight: '100vh',
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

  mobileNavScroll: {
    display: 'flex',
    overflowX: 'auto',
    gap: 0.75,
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': { display: 'none' },
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
    pt: 3,
    borderTop: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 1.5,
  },

  contactsCaption: {
    ...monoUppercase,
    fontSize: '0.55rem',
    letterSpacing: '0.12em',
    color: COLOR_TOKENS.textDisabled,
    mb: 1.25,
    display: 'block',
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
    width: 18,
    height: 18,
    display: 'block',
    objectFit: 'contain',
  },

  // ── Main content ───────────────────────────────────────────────────────────
  content: {
    px: { xs: 2, md: 3, lg: 5 },
    minWidth: 0,
    minHeight: { md: '100vh' },
  },
};
