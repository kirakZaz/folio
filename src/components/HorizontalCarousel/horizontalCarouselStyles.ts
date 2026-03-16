// horizontalCarouselStyles.ts
import { COLOR_TOKENS } from '@/theme/themeTokens';

export const styles = {
  section: {
    py: { xs: 4, md: 6 },
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    mb: 3,
    px: { xs: 2, md: 4 },
  },

  sectionLabel: {
    color: COLOR_TOKENS.textSecondary,
    letterSpacing: '0.06em',
  },

  scrollWrapper: {
    position: 'relative',
  },

  scrollTrack: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    gap: 2,
    overflowX: 'auto',
    overflowY: 'visible',
    px: { xs: 2, md: 4 },
    pb: 1.5,
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': { display: 'none' },
    WebkitOverflowScrolling: 'touch',
    scrollBehavior: 'smooth',
    userSelect: 'none',
  },

  navButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2,
    width: 40,
    height: 40,
    minWidth: 0,
    borderRadius: '50%',
    bgcolor: 'background.paper',
    boxShadow: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: 'none',
    p: 0,
    '&:hover': { bgcolor: 'background.default' },
    '&:disabled': { opacity: 0, pointerEvents: 'none' },
    transition: 'opacity 0.2s ease',
  },

  navButtonPrev: {
    left: { xs: 4, md: 8 },
  },

  navButtonNext: {
    right: { xs: 4, md: 8 },
  },

  dotsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 1,
    mt: 2,
  },

  dot: (isActive: boolean) => ({
    width: isActive ? 20 : 8,
    height: 8,
    borderRadius: '4px',
    bgcolor: isActive ? 'primary.main' : 'primary.contrastText',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: 'none',
    p: 0,
    minWidth: 0,
  }),
};
