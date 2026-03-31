import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  item: (isActive: boolean) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    px: 2,
    py: 1.5,
    borderRadius: '8px',
    cursor: 'pointer',
    border: `1px solid ${isActive ? COLOR_TOKENS.accentPrimary + '30' : 'transparent'}`,
    backgroundColor: isActive ? COLOR_TOKENS.accentPrimary + '08' : 'transparent',
    transition: 'background-color 200ms ease, border-color 200ms ease',
    '&:hover': {
      backgroundColor: isActive ? COLOR_TOKENS.accentPrimary + '08' : COLOR_TOKENS.backgroundElevated,
    },
  }),

  accentBar: (isActive: boolean) => ({
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

  company: (isActive: boolean) => ({
    fontSize: '0.82rem',
    fontWeight: isActive ? 600 : 400,
    color: isActive ? COLOR_TOKENS.textPrimary : COLOR_TOKENS.textSecondary,
    lineHeight: 1.3,
    transition: 'color 200ms ease, font-weight 200ms ease',
  }),

  role: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.6rem',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.06em',
  },

  period: {
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
