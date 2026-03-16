import type { SxProps, Theme } from '@mui/material';
import { COLOR_TOKENS } from '@/theme/themeTokens';

export const styles = {
  sectionWrapper: {
    py: { xs: 5, md: 7 },
    borderTop: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    '&:last-of-type': {
      borderBottom: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    },
  } as SxProps<Theme>,

  sectionNumber: {
    color:      COLOR_TOKENS.textDisabled,
    fontFamily: '"JetBrains Mono", monospace',
    fontSize:   '0.7rem',
  } as SxProps<Theme>,

  placeholderChip: {
    color:           COLOR_TOKENS.textDisabled,
    backgroundColor: 'transparent',
    border:          `1px dashed ${COLOR_TOKENS.borderDefault}`,
    height:          22,
    fontSize:        '0.65rem',
    letterSpacing:   '0.05em',
  } as SxProps<Theme>,

  placeholderBox: {
    minHeight:       200,
    border:          `1px dashed ${COLOR_TOKENS.borderDefault}`,
    borderRadius:    2,
    display:         'flex',
    alignItems:      'center',
    justifyContent:  'center',
    backgroundColor: COLOR_TOKENS.backgroundPaper,
    p:               4,
  } as SxProps<Theme>,

  description: {
    color: 'text.secondary',
  } as SxProps<Theme>,
};
