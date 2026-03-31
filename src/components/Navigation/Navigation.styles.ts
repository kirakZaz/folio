import { COLOR_TOKENS } from '@/theme/themeTokens';

export const styles = {
  container: (orientation: 'vertical' | 'horizontal') => ({
    display: 'flex',
    flexDirection: orientation === 'vertical' ? 'column' : 'row',
    gap: orientation === 'vertical' ? 1.5 : 0.75,
    ...(orientation === 'vertical' && {
      '@keyframes float': {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-8px)' },
      },
      animation: 'float 3.5s ease-in-out infinite',
    }),
  }),

  button: (isActive: boolean) => ({
    borderRadius: '100px',
    px: { xs: 1.5, md: 2.5 },
    py: { xs: 0.5, md: 0.75 },
    border: `1px solid ${isActive ? COLOR_TOKENS.accentPrimary : COLOR_TOKENS.borderDefault}`,
    backgroundColor: isActive ? COLOR_TOKENS.accentPrimary : 'transparent',
    color: isActive ? COLOR_TOKENS.textInverse : COLOR_TOKENS.textSecondary,
    fontSize: { xs: '0.72rem', md: '0.82rem' },
    fontWeight: isActive ? 600 : 500,
    transition: 'all 200ms ease',
    textTransform: 'none',
    whiteSpace: 'nowrap',
    minWidth: 0,
    cursor: 'pointer',
    display: 'block',
    flexShrink: 0,
    '&:hover': {
      backgroundColor: isActive ? COLOR_TOKENS.accentPrimary : COLOR_TOKENS.backgroundElevated,
      transform: 'scale(1.08)',
    },
  }),
};
