import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  panel: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderLeft: { xs: 'none', md: `1px solid ${COLOR_TOKENS.borderSubtle}` },
    backgroundColor: { lg: 'rgba(255,255,255,0.5)' },
    borderRadius: { lg: '12px' },
    pl: { xs: 0, md: 3 },
    pr: { xs: 0, md: 2 },
    py: { lg: 2.5 },
    minWidth: 0,
    overflow: 'hidden',
  },
  outlinedButton: {
    p: 1,
    height: 24,
    mt: 4,
  },

  scrollArea: {
    flex: 1,
    overflowY: 'auto',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': { display: 'none' },
    pb: 3,
  },

  header: {
    mb: 3,
  },

  topRow: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 2,
    mb: 1,
    flexWrap: { xs: 'wrap', md: 'nowrap' },
  },

  logoWrapper: {
    width: 48,
    height: 48,
    borderRadius: '10px',
    border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    backgroundColor: COLOR_TOKENS.backgroundElevated,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flexShrink: 0,
  },

  logoImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },

  logoFallbackText: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '1.1rem',
    fontWeight: 700,
    color: COLOR_TOKENS.accentPrimary,
  },

  periodChip: {
    height: 22,
    fontSize: '0.62rem',
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    color: COLOR_TOKENS.accentPrimary,
    backgroundColor: COLOR_TOKENS.accentPrimary + '10',
    border: `0.5px solid ${COLOR_TOKENS.accentPrimary}30`,
    letterSpacing: '0.04em',
  },

  company: {
    fontSize: { xs: '0.95rem', md: '1.1rem' },
    fontWeight: 700,
    color: COLOR_TOKENS.textPrimary,
    lineHeight: 1.2,
    mb: 0.5,
  },

  role: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.7rem',
    color: COLOR_TOKENS.accentPrimary,
    letterSpacing: '0.08em',
    mb: 0.5,
  },

  metaRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    flexWrap: 'wrap',
    mb: 2.5,
  },

  metaText: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.62rem',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.04em',
  },

  metaDot: {
    fontSize: '0.5rem',
    color: COLOR_TOKENS.borderDefault,
  },

  description: {
    fontSize: { xs: '0.8rem', md: '0.875rem' },
    color: COLOR_TOKENS.textSecondary,
    lineHeight: 1.7,
    mb: 3,
  },

  sectionCaption: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.6rem',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    display: 'block',
    mb: 1.5,
  },

  techStack: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    alignItems: 'center',
    mb: 3,
  },

  dualIconWrap: {
    position: 'relative',
    width: 24,
    height: 24,
    cursor: 'pointer',
    transition: 'transform 250ms ease',
    '&:hover': { transform: 'scale(1.35)' },
    '&:hover > :first-of-type': { opacity: 0 },
    '&:hover > :last-of-type': { opacity: 1 },
  },

  dualIconLayer: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    transition: 'opacity 250ms ease',
  },

  techIcon: (iconUrl: string, brandColor?: string) => ({
    width: 24,
    height: 24,
    display: 'block',
    cursor: 'pointer',
    backgroundColor: COLOR_TOKENS.textPrimary,
    WebkitMaskImage: `url(${iconUrl})`,
    maskImage: `url(${iconUrl})`,
    WebkitMaskSize: 'contain',
    maskSize: 'contain',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center',
    maskPosition: 'center',
    opacity: 0.75,
    transition: 'opacity 250ms ease, transform 250ms ease, background-color 250ms ease',
    '&:hover': {
      opacity: 1,
      transform: 'scale(1.35)',
      backgroundColor: brandColor ?? COLOR_TOKENS.accentPrimary,
    },
  }),

  techChip: {
    height: 20,
    fontSize: '0.62rem',
    color: COLOR_TOKENS.textSecondary,
    backgroundColor: COLOR_TOKENS.backgroundElevated,
    border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
  },

  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 1,
    mb: 1,
  },

  listBullet: (isAchievement: boolean) => ({
    fontSize: '0.65rem',
    color: isAchievement ? COLOR_TOKENS.accentPrimary : COLOR_TOKENS.textDisabled,
    mt: '3px',
    flexShrink: 0,
  }),

  listText: {
    fontSize: '0.8rem',
    color: COLOR_TOKENS.textSecondary,
    lineHeight: 1.6,
  },

  sectionBlock: {
    mb: 3,
  },

  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    pt: 3,
    mt: 'auto',
    borderTop: `1px solid ${COLOR_TOKENS.borderSubtle}`,
  },

  navButton: (disabled: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 0.75,
    px: { xs: 1.5, md: 2 },
    py: { xs: 0.75, md: 1 },
    borderRadius: '8px',
    border: `1px solid ${disabled ? 'transparent' : COLOR_TOKENS.borderSubtle}`,
    backgroundColor: 'transparent',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    transition: 'border-color 200ms ease, background-color 200ms ease',
    '&:hover': {
      borderColor: COLOR_TOKENS.borderDefault,
      backgroundColor: COLOR_TOKENS.backgroundElevated,
    },
  }),

  navButtonLabel: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.62rem',
    color: COLOR_TOKENS.textSecondary,
    letterSpacing: '0.06em',
  },

  navCounter: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.6rem',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.08em',
  },
};
