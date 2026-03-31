import type { SxProps, Theme } from '@mui/material';

import { COLOR_TOKENS } from '@/theme/themeTokens';

import { MAGENTA } from './blueprintHero.constants';

const sx = (style: SxProps<Theme>): SxProps<Theme> => style;

export const styles = {
  stage: sx({
    position: 'relative',
    width: '100%',
    height: { xs: 380, sm: 460, md: '90vh' },
    borderRadius: 2,
    overflow: 'hidden',
    cursor: 'none',
    userSelect: 'none',
    border: '0.5px solid rgba(0,0,0,0.08)',

  }),

  replayButton: (isVisible: boolean) =>
    sx({
      position: 'absolute',
      top: 22,
      left: 26,
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.4s ease, color 0.2s, border-color 0.2s',
      border: `0.5px solid ${COLOR_TOKENS.borderDefault}`,
      borderRadius: '4px',
      px: 1.25,
      py: 0.625,
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: '9px',
      color: COLOR_TOKENS.textDisabled,
      letterSpacing: '0.12em',
      minWidth: 0,
      lineHeight: 1,
      cursor: 'none',
      pointerEvents: isVisible ? 'all' : 'none',
      '&:hover': {
        color: MAGENTA,
        borderColor: COLOR_TOKENS.borderStrong,
        backgroundColor: 'transparent',
      },
    }),

  specBlock: (isVisible: boolean) =>
    sx({
      position: 'absolute',
      top: 24,
      right: 26,
      textAlign: 'right',
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.6s ease',
      pointerEvents: 'none',
    }),

  specLine: sx({
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: '9px',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.1em',
    lineHeight: 2,
  }),

  specLineAccent: sx({
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: '9px',
    color: MAGENTA,
    fontWeight: 500,
    letterSpacing: '0.1em',
    lineHeight: 2,
  }),

  bottomLeft: (isVisible: boolean) =>
    sx({
      position: 'absolute',
      bottom: 24,
      left: 26,
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.6s ease',
      pointerEvents: 'none',
    }),

  bottomLeftLabel: sx({
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: '9px',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    mb: '3px',
  }),

  bottomLeftTitle: sx({
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: '10px',
    color: COLOR_TOKENS.textSecondary,
    letterSpacing: '0.08em',
  }),

  hint: (isVisible: boolean) =>
    sx({
      position: 'absolute',
      bottom: '50%',
      left: '50%',
      transform: 'translate(-50%, 50%)',
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: '9px',
      color: COLOR_TOKENS.textDisabled,
      letterSpacing: '0.14em',
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.8s',
      pointerEvents: 'none',
    }),

  cornerBracket: (corner: 'tl' | 'tr' | 'bl' | 'br', isVisible: boolean) =>
    sx({
      position: 'absolute',
      width: 16,
      height: 16,
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.5s ease',
      top: corner.startsWith('t') ? 20 : 'auto',
      bottom: corner.startsWith('b') ? 20 : 'auto',
      left: corner.endsWith('l') ? 20 : 'auto',
      right: corner.endsWith('r') ? 20 : 'auto',
      transform:
        corner === 'tr'
          ? 'scaleX(-1)'
          : corner === 'bl'
            ? 'scaleY(-1)'
            : corner === 'br'
              ? 'scale(-1)'
              : 'none',
      '&::before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '0.5px',
        top: 0,
        left: 0,
        background: 'rgba(0,0,0,0.22)',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        width: '0.5px',
        height: '100%',
        top: 0,
        left: 0,
        background: 'rgba(0,0,0,0.22)',
      },
    }),
};
