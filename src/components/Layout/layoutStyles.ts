import type { SxProps, Theme } from '@mui/material';
import { COLOR_TOKENS } from '@/theme/themeTokens';

export const styles = {
  pageWrapper: {
    minHeight:       '100vh',
    backgroundColor: COLOR_TOKENS.backgroundDefault,
  } as SxProps<Theme>,

  container: {
    py: { xs: 4, md: 8 },
  } as SxProps<Theme>,
};
