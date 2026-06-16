import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  twoColumnLayout: {
    display: 'flex',
    gap: 5,
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'flex-start',
  },

  leftColumn: {
    flex: 1,
    minWidth: 0,
  },

  rightColumn: {
    flex: 1,
    minWidth: 0,
    position: { md: 'sticky' as const },
    top: { md: 24 },
    alignSelf: { md: 'flex-start' },
  },

  summaryText: {
    fontSize: '0.9rem',
    lineHeight: 1.7,
    color: COLOR_TOKENS.textSecondary,
    mb: 1.5,
  },

  sectionHeading: {
    fontSize: '0.85rem',
    fontWeight: 600,
    color: COLOR_TOKENS.textPrimary,
    mt: 3,
    mb: 1.5,
    '&:first-of-type': {
      mt: 0,
    },
  },

  skillsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 1,
    mb: 2,
  },

  skillChip: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.7rem',
    color: COLOR_TOKENS.textSecondary,
    border: `1px solid ${COLOR_TOKENS.borderDefault}`,
    borderRadius: '4px',
    px: 1.5,
    py: 0.5,
  },

  highlightsList: {
    pl: 2.5,
    mb: 0,
    '& li': {
      fontSize: '0.85rem',
      lineHeight: 1.7,
      color: COLOR_TOKENS.textSecondary,
      mb: 0.5,
    },
  },

  pdfHeading: {
    fontSize: '0.85rem',
    fontWeight: 600,
    color: COLOR_TOKENS.textPrimary,
    mb: 1.5,
    display: { xs: 'block', md: 'none' },
  },

  pdfIframe: {
    width: '100%',
    aspectRatio: '1 / 1.414',
    border: 'none',
    display: 'block',
  },
};
