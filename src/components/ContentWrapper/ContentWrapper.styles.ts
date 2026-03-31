import type { SxProps, Theme } from '@mui/material';

const CONTENT_MAX_WIDTH = 1280;

export const styles = {
  base: {
    width: '100%',
    px: { xs: 3, md: 8 },
    py: { xs: 6, md: 10 },
  } as SxProps<Theme>,

  centered: {
    maxWidth: CONTENT_MAX_WIDTH,
    mx: 'auto',
  } as SxProps<Theme>,
};
