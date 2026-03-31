import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  layout: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '280px 1fr', lg: '280px 1fr 460px' },
    gap: { xs: 4, md: 0 },
    minHeight: '60vh',
    alignItems: 'start',
  },

  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0.5,
    pr: { xs: 0, md: 3 },
    position: { md: 'sticky' },
    top: { md: 40 },
  },

  sidebarLabel: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.6rem',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    mb: 1.5,
    display: 'block',
  },

  totalYears: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.58rem',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.08em',
    mb: 2,
  },
};
