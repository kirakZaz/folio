import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  twoColumnLayout: {
    display: 'flex',
    gap: 5,
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'flex-start',
  },

  leftColumn: {
    flex: '0 0 28%',
    minWidth: 0,
    maxWidth: { xs: '100%', md: '28%' },
  },

  rightColumn: {
    flex: 1,
    minWidth: 0,
  },

  summaryText: {
    fontSize: '0.82rem',
    lineHeight: 1.65,
    color: COLOR_TOKENS.textSecondary,
    mb: 1,
  },

  sectionHeading: {
    fontSize: '0.8rem',
    fontWeight: 600,
    color: COLOR_TOKENS.textPrimary,
    mt: 2.5,
    mb: 1,
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
    fontSize: '0.65rem',
    color: COLOR_TOKENS.textSecondary,
    border: `1px solid ${COLOR_TOKENS.borderDefault}`,
    borderRadius: '4px',
    px: 1,
    py: 0.3,
  },

  highlightsList: {
    pl: 2,
    mb: 0,
    '& li': {
      fontSize: '0.8rem',
      lineHeight: 1.6,
      color: COLOR_TOKENS.textSecondary,
      mb: 0.3,
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
    height: { xs: '70vh', md: '80vh' },
    border: 'none',
    display: 'block',
  },
};
