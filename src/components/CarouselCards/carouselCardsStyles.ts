import type { SxProps, Theme } from '@mui/material';
import { COLOR_TOKENS } from '@/theme/themeTokens';

export const styles = {
  // Every card wrapper must have flexShrink: 0 so flex row never wraps
  imageCardContainer: (width: number, height: number): SxProps<Theme> => ({
    width,
    height,
    flexShrink:      0,
    borderRadius:    2,
    overflow:        'hidden',
    border:          `1px solid ${COLOR_TOKENS.borderSubtle}`,
    position:        'relative',
    cursor:          'pointer',
    backgroundColor: COLOR_TOKENS.backgroundElevated,
    transition:      'border-color 280ms ease, transform 280ms ease',
    '&:hover': {
      borderColor: COLOR_TOKENS.borderDefault,
      transform:   'translateY(-2px)',
    },
  }),

  imageCardImg: {
    width:     '100%',
    height:    '100%',
    objectFit: 'cover',
    display:   'block',
  } as SxProps<Theme>,

  imageCardOverlay: {
    position:    'absolute',
    inset:       0,
    background:  `linear-gradient(to top, ${COLOR_TOKENS.backgroundDefault}CC 0%, transparent 55%)`,
    opacity:     0,
    transition:  'opacity 280ms ease',
    display:     'flex',
    alignItems:  'flex-end',
    p:           1.5,
    '&.visible': { opacity: 1 },
  } as SxProps<Theme>,

  projectCard: (width: number, height: number): SxProps<Theme> => ({
    width,
    height,
    flexShrink:      0,
    borderRadius:    2,
    border:          `1px solid ${COLOR_TOKENS.borderSubtle}`,
    backgroundColor: COLOR_TOKENS.backgroundPaper,
    overflow:        'hidden',
    position:        'relative',
    cursor:          'pointer',
    transition:      'border-color 280ms ease, transform 280ms ease',
    '&:hover': {
      borderColor: COLOR_TOKENS.borderDefault,
      transform:   'translateY(-2px)',
      '& .project-overlay': {
        opacity:   1,
        transform: 'translateY(0)',
      },
    },
  }),

  projectOverlay: {
    position:        'absolute',
    inset:           0,
    backgroundColor: `${COLOR_TOKENS.backgroundDefault}F0`,
    opacity:         0,
    transform:       'translateY(8px)',
    transition:      'opacity 280ms ease, transform 280ms ease',
    display:         'flex',
    flexDirection:   'column',
    justifyContent:  'center',
    p:               2.5,
  } as SxProps<Theme>,
};
