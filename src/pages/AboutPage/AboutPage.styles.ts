import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  // ── Page — centered, one screen ─────────────────────────────────────────
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: { md: 'calc(100vh - 100px)' },
    minHeight: 0,
    maxWidth: 960,
    mx: 'auto',
    gap: { xs: 5, md: 0 },
  },

  // ── Hero: photo center-left + name + tagline ───────────────────────────
  hero: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '200px 1fr' },
    gap: { xs: 3, md: 5 },
    alignItems: 'center',
  },

  // ── Photo with animated ring ───────────────────────────────────────────
  photoArea: {
    display: 'flex',
    justifyContent: { xs: 'flex-start', md: 'center' },
  },

  photoOuter: {
    position: 'relative',
    width: { xs: 140, md: 180 },
    height: { xs: 140, md: 180 },
  },

  photoRing: {
    position: 'absolute',
    inset: -6,
    borderRadius: '50%',
    border: `1.5px solid ${COLOR_TOKENS.accentPrimary}30`,
  },

  photoInner: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    overflow: 'hidden',
    cursor: 'pointer',
  },

  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 500ms ease',
    '&:hover': {
      transform: 'scale(1.08)',
    },
  },

  // ── Name + intro ──────────────────────────────────────────────────────
  introBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1.5,
  },

  nameLine1: {
    fontSize: { xs: '1.1rem', md: '1.3rem' },
    fontWeight: 300,
    color: COLOR_TOKENS.textDisabled,
    lineHeight: 1.2,
    overflow: 'hidden',
  },

  nameLine2: {
    fontSize: { xs: '2.8rem', md: '4rem' },
    fontWeight: 200,
    letterSpacing: '-0.04em',
    color: COLOR_TOKENS.textPrimary,
    lineHeight: 0.95,
    overflow: 'hidden',
  },

  nameAccent: {
    color: COLOR_TOKENS.accentPrimary,
    fontWeight: 300,
  },

  tagline: {
    fontSize: { xs: '0.85rem', md: '0.92rem' },
    fontWeight: 300,
    color: COLOR_TOKENS.textSecondary,
    lineHeight: 1.7,
    maxWidth: 440,
  },

  statsRow: {
    display: 'flex',
    gap: { xs: 3, md: 4 },
    mt: 1,
  },

  statItem: {
    textAlign: 'center' as const,
  },

  statNumber: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: { xs: '1.3rem', md: '1.6rem' },
    fontWeight: 600,
    color: COLOR_TOKENS.textPrimary,
    lineHeight: 1,
  },

  statNumberAccent: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: { xs: '1.3rem', md: '1.6rem' },
    fontWeight: 600,
    color: COLOR_TOKENS.accentPrimary,
    lineHeight: 1,
  },

  statLabel: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.46rem',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    mt: 0.5,
  },

  // ── Middle: bio columns + quote ────────────────────────────────────────
  middle: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
    gap: { xs: 2, md: 5 },
    py: { xs: 0, md: 1 },
    borderTop: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    borderBottom: `1px solid ${COLOR_TOKENS.borderSubtle}`,
  },

  bioText: {
    fontSize: '0.82rem',
    fontWeight: 300,
    color: COLOR_TOKENS.textSecondary,
    lineHeight: 1.75,
    mb: 1.5,
    '&:last-of-type': { mb: 0 },
  },

  quoteWrap: {
    position: 'relative',
    pl: 2.5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  quoteBar: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '2px',
    height: '100%',
    backgroundColor: COLOR_TOKENS.accentPrimary,
    borderRadius: '2px',
    transformOrigin: 'top',
  },

  quoteText: {
    fontSize: { xs: '0.85rem', md: '0.92rem' },
    fontWeight: 400,
    fontStyle: 'italic',
    color: COLOR_TOKENS.textPrimary,
    lineHeight: 1.7,
  },

  // ── Bottom: "what you get" — cards ─────────────────────────────────────
  bottom: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1.5,
  },

  bottomHeading: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.52rem',
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: COLOR_TOKENS.textDisabled,
  },

  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' },
    gap: '8px',
  },

  card: {
    backgroundColor: COLOR_TOKENS.backgroundElevated,
    borderRadius: '10px',
    borderLeft: '2px solid transparent',
    p: { xs: 1.5, md: 2 },
    display: 'flex',
    gap: 1.25,
    alignItems: 'flex-start',
    cursor: 'default',
    transition: 'background-color 300ms ease, transform 350ms cubic-bezier(0.22, 1, 0.36, 1), border-color 300ms ease, box-shadow 300ms ease',
    '&:hover': {
      backgroundColor: COLOR_TOKENS.backgroundSubtle,
      transform: 'translateY(-4px)',
      borderLeftColor: COLOR_TOKENS.accentPrimary,
      boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
    },
  },

  cardIndex: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.48rem',
    color: COLOR_TOKENS.accentPrimary,
    opacity: 0.6,
    mt: '2px',
    flexShrink: 0,
  },

  cardText: {
    fontSize: '0.72rem',
    fontWeight: 400,
    color: COLOR_TOKENS.textPrimary,
    lineHeight: 1.5,
  },
};