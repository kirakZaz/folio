import type { SxProps, Theme } from '@mui/material';
import { COLOR_TOKENS } from '@/theme/themeTokens';

export const styles = {
  navBarContainer: {
    position:        'sticky',
    top:             0,
    zIndex:          100,
    backgroundColor: `${COLOR_TOKENS.backgroundDefault}E6`,
    backdropFilter:  'blur(12px)',
    borderBottom:    `1px solid ${COLOR_TOKENS.borderSubtle}`,
  } as SxProps<Theme>,

  navBarInner: {
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'space-between',
    py:             1.5,
    px:             { xs: 2, md: 4 },
  } as SxProps<Theme>,

  logoButton: {
    color:         COLOR_TOKENS.textPrimary,
    fontWeight:    600,
    letterSpacing: '-0.02em',
    fontSize:      '1rem',
    p:             0,
    '&:hover': {
      backgroundColor: 'transparent',
      color:           COLOR_TOKENS.accentPrimary,
    },
  } as SxProps<Theme>,

  navLink: (isActive: boolean): SxProps<Theme> => ({
    color:     isActive ? COLOR_TOKENS.accentPrimary : COLOR_TOKENS.textSecondary,
    fontWeight: isActive ? 500 : 400,
    fontSize:  '0.85rem',
    p:         0,
    minWidth:  0,
    '&:hover': {
      backgroundColor: 'transparent',
      color:           COLOR_TOKENS.textPrimary,
    },
  }),
};
