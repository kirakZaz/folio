import type { SxProps, Theme } from '@mui/material';
import { COLOR_TOKENS } from '@/theme/themeTokens';

export const styles = {
  heroWrapper: {
    display:       'flex',
    flexDirection: 'column',
    alignItems:    'flex-start',
    gap:           { xs: 4, md: 5 },
    pb:            { xs: 6, md: 8 },
  } as SxProps<Theme>,

  avatar: {
    width:           { xs: 80, md: 104 },
    height:          { xs: 80, md: 104 },
    fontSize:        '2rem',
    fontWeight:      600,
    backgroundColor: COLOR_TOKENS.backgroundElevated,
    border:          `1px solid ${COLOR_TOKENS.borderDefault}`,
    color:           COLOR_TOKENS.accentPrimary,
    flexShrink:      0,
  } as SxProps<Theme>,

  subheading: {
    color:      COLOR_TOKENS.textSecondary,
    fontWeight: 400,
  } as SxProps<Theme>,

  description: {
    color: COLOR_TOKENS.textSecondary,
  } as SxProps<Theme>,

  divider: {
    width:       '100%',
    borderColor: COLOR_TOKENS.borderSubtle,
  } as SxProps<Theme>,
};
