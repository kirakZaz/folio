import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  layout: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 2fr', lg: '1fr 2.5fr 1.5fr' },
    gap: { xs: 2, md: 0 },
    mt: { md: 4, lg: 0 },
    minHeight: '60vh',
    alignItems: 'start',
    minWidth: 0,
  },
  general: {
    gridColumn: { md: '1 / -1', lg: 'auto' },
    borderTop: { md: `1px solid ${COLOR_TOKENS.borderSubtle}`, lg: 'none' },
    pt: { md: 4, lg: 0 },
    backgroundColor: { lg: COLOR_TOKENS.backgroundPaper },
    borderRadius: { lg: '12px' },
    p: { lg: 2.5 },
    ml: { lg: 1 },
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
