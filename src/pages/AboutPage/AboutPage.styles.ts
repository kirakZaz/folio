import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  // ── Top two-column section ────────────────────────────────────────────────
  topSection: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: { xs: 4, md: 6 },
    alignItems: 'flex-start',
    mb: { xs: 6, md: 8 },
  },

  photo: {
    width: { xs: '100%', md: '34%' },
    aspectRatio: '1 / 1.5',
    objectFit: 'cover',
    flexShrink: 0,
    display: 'block',
  },

  textBlock: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    pt: { xs: 0, md: 1 },
  },

  name: {
    fontSize: { xs: '1.4rem', md: '1.7rem' },
    fontWeight: 400,
    letterSpacing: '-0.02em',
    color: COLOR_TOKENS.textPrimary,
    lineHeight: 1.15,
    mb: 3,
  },

  bio: {
    fontSize: { xs: '0.92rem', md: '0.95rem' },
    fontWeight: 300,
    color: COLOR_TOKENS.textSecondary,
    lineHeight: 1.75,
    mb: 2,
  },

  bioBold: {
    fontSize: { xs: '0.92rem', md: '0.95rem' },
    fontWeight: 500,
    color: COLOR_TOKENS.textPrimary,
    lineHeight: 1.75,
    mb: 2,
    fontStyle: 'italic',
  },

  // ── Bottom full-width section ─────────────────────────────────────────────
  bottomSection: {
    borderTop: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    pt: { xs: 4, md: 5 },
  },

  listHeading: {
    fontSize: { xs: '0.78rem', md: '0.8rem' },
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: COLOR_TOKENS.textDisabled,
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    mb: 2,
    mt: 2.5,
  },

  list: {
    mb: 4,
  },

  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 1.5,
    mb: 0.5,
  },

  listDash: {
    color: COLOR_TOKENS.accentPrimary,
    fontWeight: 500,
    flexShrink: 0,
    lineHeight: 1.75,
    fontSize: '0.95rem',
  },

  listText: {
    fontSize: { xs: '0.92rem', md: '0.95rem' },
    fontWeight: 300,
    color: COLOR_TOKENS.textSecondary,
    lineHeight: 1.75,
  },

  closing: {
    fontSize: { xs: '0.92rem', md: '0.95rem' },
    fontWeight: 300,
    color: COLOR_TOKENS.textSecondary,
    lineHeight: 1.75,
    mb: 1,
  },

  closingAccent: {
    fontSize: { xs: '0.92rem', md: '0.95rem' },
    fontWeight: 400,
    color: COLOR_TOKENS.textPrimary,
    lineHeight: 1.75,
    mb: 0,
  },
};
