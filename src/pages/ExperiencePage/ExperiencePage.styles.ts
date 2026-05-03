import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  layout: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 2.5fr' },
    gridTemplateRows: { xs: 'auto 1fr', md: 'auto' },
    gap: { xs: 1, md: 0 },
    mt: { md: 4, lg: 0 },
    height: { xs: 'calc(100vh - 120px)', md: 'auto' },
    minHeight: { md: '60vh' },
    alignItems: 'start',
    minWidth: 0,
    overflow: { xs: 'hidden', md: 'visible' },
  },
  // On mobile: horizontal scrollable row of company chips.
  // On desktop: sticky vertical list.
  sidebar: {
    display: 'flex',
    flexDirection: { xs: 'row', md: 'column' },
    gap: { xs: 1, md: 0.5 },
    pr: { xs: 0, md: 2 },
    pb: { xs: 1, md: 0 },
    overflowX: { xs: 'auto', md: 'visible' },
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': { display: 'none' },
    borderBottom: { xs: `1px solid ${COLOR_TOKENS.borderSubtle}`, md: 'none' },
    position: { md: 'relative', lg: 'sticky' },
    top: { lg: 40 },
    minWidth: 0,
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
