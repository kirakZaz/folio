import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

import { ROW_HEIGHT } from './WebProjectsSection.constants';

export const styles = {
  section: {
    minHeight: '80vh',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
    gridAutoRows: { xs: 'auto', md: `${ROW_HEIGHT}px` },
    gap: '16px',
  },

  gridMotionBox: (colSpan: number, rowSpan: number) => ({
    gridColumn: { xs: 'span 1', md: `span ${colSpan}` },
    gridRow: { xs: 'span 1', md: `span ${rowSpan}` },
  }),

  cardWrapper: (
    isHovered: boolean,
    isFeatured: boolean,
    rowSpan: number,
    bgColor: string,
    accentColor: string,
  ) => ({
    position: 'relative',
    width: '100%',
    height: '100%',
    minHeight: { xs: 140, md: ROW_HEIGHT * rowSpan + (rowSpan - 1) * 16 },
    borderRadius: '12px',
    overflow: 'hidden',
    cursor: 'pointer',
    backgroundColor: bgColor,
    border: `1px solid ${isHovered ? accentColor + '40' : COLOR_TOKENS.borderSubtle}`,
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
    boxShadow: isHovered
      ? `0 12px 40px ${accentColor}18, 0 2px 8px rgba(0,0,0,0.06)`
      : '0 1px 3px rgba(0,0,0,0.04)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    p: isFeatured ? 2.5 : 2,
  }),

  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  logoImg: (isFeatured: boolean, isHovered: boolean) => ({
    height: isFeatured ? 36 : 28,
    maxWidth: isFeatured ? 100 : 80,
    objectFit: 'contain',
    transition: 'opacity 200ms ease',
    opacity: isHovered ? 0.7 : 1,
  }),

  logoFallback: (isFeatured: boolean, accentColor: string) => ({
    width: isFeatured ? 40 : 32,
    height: isFeatured ? 40 : 32,
    borderRadius: '8px',
    backgroundColor: accentColor + '20',
    border: `1px solid ${accentColor}30`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),

  logoFallbackText: (isFeatured: boolean, accentColor: string) => ({
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: isFeatured ? '16px' : '13px',
    color: accentColor,
    fontWeight: 600,
  }),

  yearBadge: (isPresent: boolean, accentColor: string) => ({
    px: 1,
    py: '3px',
    borderRadius: '4px',
    backgroundColor: isPresent ? accentColor + '15' : 'rgba(0,0,0,0.05)',
    border: `0.5px solid ${isPresent ? accentColor + '35' : 'rgba(0,0,0,0.1)'}`,
  }),

  yearBadgeText: (isPresent: boolean, accentColor: string) => ({
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '8px',
    color: isPresent ? accentColor : COLOR_TOKENS.textDisabled,
    letterSpacing: '0.1em',
  }),

  featuredTitle: {
    fontSize: '1.6rem',
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    color: COLOR_TOKENS.textPrimary,
    mb: 0.5,
  },

  featuredRole: (accentColor: string) => ({
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '9px',
    color: accentColor,
    letterSpacing: '0.1em',
  }),

  cardTitle: {
    fontWeight: 600,
    lineHeight: 1.3,
    mb: '2px',
    color: COLOR_TOKENS.textPrimary,
  },

  companyText: (isHovered: boolean) => ({
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '9px',
    color: COLOR_TOKENS.textSecondary,
    letterSpacing: '0.06em',
    mb: isHovered ? 1 : 0,
    transition: 'margin 200ms ease',
  }),

  hoverExtras: {
    opacity: 1,
    transition: 'opacity 200ms ease',
  },

  descriptionText: (isSmall: boolean, isFeatured: boolean) => ({
    textTransform: 'none',
    fontSize: isSmall ? '0.65rem' : '0.7rem',
    color: COLOR_TOKENS.textSecondary,
    display: '-webkit-box',
    WebkitLineClamp: isSmall ? 2 : isFeatured ? 2 : 1,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    lineHeight: 1.5,
    mb: 0.75,
  }),

  techStack: {
    gap: 0.5,
    mt: 0.5,
  },

  techChip: (accentColor: string) => ({
    height: 15,
    fontSize: '0.58rem',
    color: accentColor,
    backgroundColor: accentColor + '10',
    border: `0.5px solid ${accentColor}30`,
    '& .MuiChip-label': { px: '6px' },
  }),

  accentLine: (isHovered: boolean, accentColor: string) => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: isHovered ? '100%' : '40%',
    height: '2px',
    backgroundColor: accentColor,
    opacity: isHovered ? 0.5 : 0.25,
    transition: 'width 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease',
    borderRadius: '0 0 0 12px',
  }),
};
