import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  layout: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '280px 1fr', lg: '280px 1fr 520px' },
    gap: { xs: 2, md: 0 },
    minHeight: '60vh',
    alignItems: 'start',
  },

  // On mobile: horizontal scrollable row of company chips.
  // On desktop: sticky vertical list.
  sidebar: {
    display: 'flex',
    flexDirection: { xs: 'row', md: 'column' },
    gap: { xs: 1, md: 0.5 },
    pr: { xs: 0, md: 3 },
    pb: { xs: 1, md: 0 },
    overflowX: { xs: 'auto', md: 'visible' },
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': { display: 'none' },
    borderBottom: { xs: `1px solid ${COLOR_TOKENS.borderSubtle}`, md: 'none' },
    position: { md: 'sticky' },
    top: { md: 40 },
  },

  // Label + years — hidden on mobile (no space in horizontal row)
  sidebarMeta: {
    display: { xs: 'none', md: 'contents' },
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
