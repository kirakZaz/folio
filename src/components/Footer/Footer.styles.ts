import { monoUppercase } from '@/theme/commonStyles';
import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  footer: (hidden: boolean) => ({
    visibility: hidden ? ('hidden' as const) : ('visible' as const),
    width: '100%',
    borderTop: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    backgroundColor: COLOR_TOKENS.backgroundDefault,
    py: { xs: 3, md: 4 },
    px: { xs: 2, md: 4 },
  }),

  inner: {
    maxWidth: 960,
    mx: 'auto',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: { xs: 'center', md: 'center' },
    justifyContent: 'space-between',
    gap: { xs: 2.5, md: 0 },
  },

  nav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: { xs: 1.5, md: 3 },
  },

  navLink: (isActive: boolean) => ({
    ...monoUppercase,
    fontSize: '0.75rem',
    fontWeight: isActive ? 600 : 400,
    color: isActive ? COLOR_TOKENS.accentPrimary : COLOR_TOKENS.textSecondary,
    textDecoration: 'none',
    transition: 'color 200ms ease',
    '&:hover': {
      color: COLOR_TOKENS.accentPrimary,
    },
  }),

  copyright: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.7rem',
    color: COLOR_TOKENS.textDisabled,
    textAlign: { xs: 'center', md: 'right' } as const,
    whiteSpace: 'nowrap' as const,
  },
};