import type { SxProps, Theme } from '@mui/material';
import { COLOR_TOKENS } from '@/theme/themeTokens';

export const styles = {
  grid: {
    display:             'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap:                 2,
  } as SxProps<Theme>,

  card: {
    position:        'relative',
    overflow:        'hidden',
    borderRadius:    2,
    border:          `1px dashed ${COLOR_TOKENS.borderDefault}`,
    backgroundColor: COLOR_TOKENS.backgroundElevated,
    cursor:          'default',
  } as SxProps<Theme>,

  aspectRatioBox: (aspectRatio: 'square' | 'landscape' | 'portrait'): SxProps<Theme> => {
    const ratioMap = { square: '100%', landscape: '65%', portrait: '140%' };
    return { paddingTop: ratioMap[aspectRatio], position: 'relative', width: '100%' };
  },

  placeholderInner: {
    position:       'absolute',
    inset:          0,
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
  } as SxProps<Theme>,
};
