import type { SxProps, Theme } from '@mui/material';
import { COLOR_TOKENS } from '@/theme/themeTokens';
import type { StatusChipConfigMap } from './types';

export const STATUS_CHIP_CONFIG: StatusChipConfigMap = {
  available: {
    label:   'Available',
    color:   COLOR_TOKENS.statusAvailable,
    bgColor: 'rgba(74, 222, 128, 0.1)',
  },
  coming_soon: {
    label:   'Coming Soon',
    color:   COLOR_TOKENS.textSecondary,
    bgColor: 'rgba(255, 255, 255, 0.04)',
  },
  completed: {
    label:   'Completed',
    color:   COLOR_TOKENS.statusCompleted,
    bgColor: 'rgba(217, 162, 115, 0.12)',
  },
};

export const styles = {
  cardContainer: (isAvailable: boolean): SxProps<Theme> => ({
    height:     '100%',
    opacity:    isAvailable ? 1 : 0.55,
    transition: 'opacity 280ms ease, border-color 280ms ease, transform 280ms ease',
    '&:hover': isAvailable
      ? { borderColor: COLOR_TOKENS.borderDefault, transform: 'translateY(-3px)' }
      : {},
  }),

  cardContent: {
    p:             3,
    height:        '100%',
    display:       'flex',
    flexDirection: 'column',
  } as SxProps<Theme>,

  metaText: {
    color:         COLOR_TOKENS.textSecondary,
    letterSpacing: '0.08em',
  } as SxProps<Theme>,

  subtitle: {
    color:     COLOR_TOKENS.textSecondary,
    fontStyle: 'italic',
  } as SxProps<Theme>,

  description: {
    color:      COLOR_TOKENS.textSecondary,
    lineHeight: 1.7,
    flexGrow:   1,
  } as SxProps<Theme>,

  viewAction: {
    mt: 3,
  } as SxProps<Theme>,
};
