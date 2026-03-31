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
    height: 28,
    width: 'auto',
    objectFit: 'contain',
    flexShrink: 0,
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
    width: 130,
    flexShrink: 0,
    position: 'sticky',
    top: 0,
    height: '100vh',
    flexDirection: 'column',
    alignItems: 'flex-start',
    px: 3,
    pt: 4,
    pb: 4,
    pr: 0,
  },

  desktopLogo: {
    width: '100%',
    maxWidth: 100,
    height: 'auto',
    objectFit: 'contain',
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
    display: 'flex',
    alignItems: 'center',
    gap: 0.75,
    mb: 0.75,
    textDecoration: 'none',
    '&:hover .contact-label': {
      color: COLOR_TOKENS.accentPrimary,
    },
  },

  contactDot: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    backgroundColor: COLOR_TOKENS.accentPrimary,
    flexShrink: 0,
  },

  contactLabel: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.6rem',
    color: COLOR_TOKENS.textSecondary,
    letterSpacing: '0.02em',
    transition: 'color 200ms ease',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  // ── Main content ───────────────────────────────────────────────────────────
  content: {
    flex: 1,
    overflowY: 'auto',
    px: { xs: 2, md: 6 },
    py: { xs: 3, md: 6 },
    minHeight: { md: '100vh' },
  },
};
