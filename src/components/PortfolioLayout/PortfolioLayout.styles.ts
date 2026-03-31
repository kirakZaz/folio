import type { SxProps, Theme } from '@mui/material';

import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: COLOR_TOKENS.backgroundDefault,
  } as SxProps<Theme>,

  sidebar: {
    width: 220,
    flexShrink: 0,
    position: 'sticky',
    top: 0,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 5,
    px: 3,
    py: 4,
    borderRight: `1px solid ${COLOR_TOKENS.borderSubtle}`,
  } as SxProps<Theme>,

  brandBox: {
    position: 'absolute',
    top: 28,
    left: 24,
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '10px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: COLOR_TOKENS.textDisabled,
    border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    px: 1,
    py: 0.5,
    borderRadius: '4px',
  } as SxProps<Theme>,

  content: {
    flex: 1,
    overflowY: 'auto',
    px: { xs: 3, md: 6 },
    py: 6,
    minHeight: '100vh',
  } as SxProps<Theme>,
};
