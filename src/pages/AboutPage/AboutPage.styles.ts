import { monoUppercase } from '@/theme/commonStyles';
import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  layout: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
    gap: { xs: 6, md: 0 },
    alignItems: 'start',
  },

  // ── Sidebar ───────────────────────────────────────────────────────────────

  sidebar: {
    pr: { xs: 0, md: 4 },
    position: { md: 'sticky' },
    top: { md: 40 },
    height: { md: 'calc(100vh - 80px)' },
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },

  sidebarTop: {
    flex: 1,
    overflowY: 'auto',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': { display: 'none' },
  },

  photoPlaceholder: {
    width: '100%',
    aspectRatio: '4 / 5',
    borderRadius: '12px',
    backgroundColor: COLOR_TOKENS.backgroundElevated,
    border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mb: 3,
  },

  photoLabel: {
    ...monoUppercase,
    color: COLOR_TOKENS.textDisabled,
    fontSize: '0.65rem',
  },

  name: {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: COLOR_TOKENS.textPrimary,
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
    mb: 0.5,
  },

  roleLabel: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.62rem',
    color: COLOR_TOKENS.accentPrimary,
    letterSpacing: '0.06em',
    mb: 0.5,
  },

  location: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.6rem',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.04em',
  },

  // ── Contacts (pinned bottom of sidebar) ──────────────────────────────────

  contactsBlock: {
    pt: 3,
    borderTop: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    mt: 'auto',
    flexShrink: 0,
  },

  contactsCaption: {
    ...monoUppercase,
    fontSize: '0.58rem',
    letterSpacing: '0.12em',
    color: COLOR_TOKENS.textDisabled,
    mb: 1.5,
    display: 'block',
  },

  contactLink: {
    display: 'flex',
    alignItems: 'center',
    gap: 0.75,
    mb: 0.75,
    textDecoration: 'none',
    '&:hover .link-label': {
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
    fontSize: '0.62rem',
    color: COLOR_TOKENS.textSecondary,
    letterSpacing: '0.04em',
    transition: 'color 200ms ease',
  },

  // ── Main content ──────────────────────────────────────────────────────────

  content: {
    borderLeft: { md: `1px solid ${COLOR_TOKENS.borderSubtle}` },
    pl: { xs: 0, md: 4 },
  },

  contentCaption: {
    ...monoUppercase,
    fontSize: '0.6rem',
    letterSpacing: '0.12em',
    color: COLOR_TOKENS.textDisabled,
    mb: 2,
    display: 'block',
  },

  bioPlaceholder: {
    minHeight: 200,
    borderRadius: '12px',
    border: `1px dashed ${COLOR_TOKENS.borderDefault}`,
    backgroundColor: COLOR_TOKENS.backgroundPaper,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mb: 4,
  },

  bioPlaceholderText: {
    ...monoUppercase,
    fontSize: '0.62rem',
    color: COLOR_TOKENS.textDisabled,
  },
};
