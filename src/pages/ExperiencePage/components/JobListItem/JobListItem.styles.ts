import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  item: (isActive: boolean) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    // Mobile: compact pill chip. Desktop: full row.
    px: { xs: 1.5, md: 2 },
    py: { xs: 0.75, md: 1.5 },
    borderRadius: '8px',
    cursor: 'pointer',
    flexShrink: 0, // prevent shrinking in horizontal scroll
    border: `1px solid ${isActive ? COLOR_TOKENS.accentPrimary + '40' : COLOR_TOKENS.borderSubtle}`,
    backgroundColor: isActive ? COLOR_TOKENS.accentPrimary + '0A' : COLOR_TOKENS.backgroundPaper,
    transition: 'background-color 200ms ease, border-color 200ms ease',
    '&:hover': {
      backgroundColor: isActive
        ? COLOR_TOKENS.accentPrimary + '0A'
        : COLOR_TOKENS.backgroundElevated,
    },
  }),

  // Left accent bar — only meaningful in vertical (desktop) mode
  accentBar: (isActive: boolean) => ({
    display: { xs: 'none', md: 'block' },
    position: 'absolute',
    left: 0,
    top: '20%',
    bottom: '20%',
    width: '3px',
    borderRadius: '0 2px 2px 0',
    backgroundColor: COLOR_TOKENS.accentPrimary,
    opacity: isActive ? 1 : 0,
    transition: 'opacity 200ms ease',
  }),

  // Mobile: logo + year row
  mobileContent: {
    display: { xs: 'flex', md: 'none' },
    alignItems: 'center',
    gap: 1,
  },

  mobileLogo: {
    width: 24,
    height: 24,
    objectFit: 'contain',
    borderRadius: '4px',
  },

  mobileLogoFallback: {
    width: 24,
    height: 24,
    fontSize: '0.7rem',
    fontWeight: 700,
    color: COLOR_TOKENS.accentPrimary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mobileYear: (isActive: boolean) => ({
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.6rem',
    color: isActive ? COLOR_TOKENS.textPrimary : COLOR_TOKENS.textDisabled,
    letterSpacing: '0.04em',
  }),

  company: (isActive: boolean) => ({
    display: { xs: 'none', md: 'block' },
    fontSize: { xs: '0.72rem', md: '0.82rem' },
    fontWeight: isActive ? 600 : 400,
    color: isActive ? COLOR_TOKENS.textPrimary : COLOR_TOKENS.textSecondary,
    lineHeight: 1.3,
    transition: 'color 200ms ease, font-weight 200ms ease',
  }),

  // Hide role and period on mobile — no space in horizontal chip mode
  role: {
    display: { xs: 'none', md: 'block' },
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.6rem',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.06em',
  },

  period: {
    display: { xs: 'none', md: 'flex' },
    alignItems: 'center',
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.58rem',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.04em',
  },

  presentDot: {
    display: 'inline-block',
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    backgroundColor: COLOR_TOKENS.accentPrimary,
    mb: '1px',
    mr: '3px',
    verticalAlign: 'middle',
  },
};
