import type { SxProps, Theme } from '@mui/material';

import { COLOR_TOKENS } from '@/theme/themeTokens';

export const styles = {
  container: (orientation: 'vertical' | 'horizontal'): SxProps<Theme> => ({
    display: 'flex',
    flexDirection: orientation === 'vertical' ? 'column' : 'row',
    gap: 1.5,
    '@keyframes float': {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-8px)' },
    },
    animation: 'float 3.5s ease-in-out infinite',
  }),

  button: (isActive: boolean): SxProps<Theme> => ({
    borderRadius: '100px',
    px: 2.5,
    py: 0.75,
    border: `1px solid ${isActive ? COLOR_TOKENS.accentPrimary : COLOR_TOKENS.borderDefault}`,
    backgroundColor: isActive ? COLOR_TOKENS.accentPrimary : 'transparent',
    color: isActive ? '#FFFFFF' : COLOR_TOKENS.textSecondary,
    fontSize: '0.82rem',
    fontWeight: isActive ? 600 : 500,
    transition: 'all 200ms ease',
    textTransform: 'none',
    whiteSpace: 'nowrap',
    minWidth: 0,
    cursor: 'pointer',
    display: 'block',
    '&:hover': {
      backgroundColor: isActive ? COLOR_TOKENS.accentPrimary : COLOR_TOKENS.backgroundElevated,
      transform: 'scale(1.08)',
    },
  }),
};
