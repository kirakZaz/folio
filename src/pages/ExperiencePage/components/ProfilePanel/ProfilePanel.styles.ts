import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  panel: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    minWidth: 0,
    overflow: 'hidden',
  },

  caption: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.58rem',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    display: 'block',
    mb: 1.5,
  },

  summaryText: {
    fontSize: '0.78rem',
    color: COLOR_TOKENS.textSecondary,
    lineHeight: 1.75,
  },

  skillRow: {
    display: 'flex',
    gap: 1,
    mb: 1,
    alignItems: 'flex-start',
  },

  skillLabel: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.55rem',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.06em',
    minWidth: 64,
    pt: '4px',
    flexShrink: 0,
  },

  skillIconsWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    alignItems: 'center',
  },

  skillIcon: {
    width: 22,
    height: 22,
    objectFit: 'contain',
    display: 'block',
    opacity: 0.75,
    transition: 'opacity 250ms ease, transform 250ms ease, filter 250ms ease',
    cursor: 'pointer',
    '&:hover': {
      opacity: 1,
      transform: 'scale(1.35)',
      filter: `drop-shadow(0 0 6px ${COLOR_TOKENS.accentPrimary}90)`,
    },
  },

  eduDegree: {
    fontSize: '0.78rem',
    fontWeight: 600,
    color: COLOR_TOKENS.textPrimary,
    mb: 0.25,
  },

  eduMeta: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.58rem',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.04em',
    mb: 1.5,
  },

  courseItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 0.75,
    mb: 0.5,
  },

  courseDot: {
    width: '3px',
    height: '3px',
    borderRadius: '50%',
    backgroundColor: COLOR_TOKENS.borderDefault,
    flexShrink: 0,
  },

  courseText: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.6rem',
    color: COLOR_TOKENS.textSecondary,
  },

  courseScore: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.58rem',
    color: COLOR_TOKENS.accentPrimary,
  },
};
