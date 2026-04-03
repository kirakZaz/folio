import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

export const styles = {
  header: {
    mb: 6,
  },

  metaCaption: {
    color: COLOR_TOKENS.textSecondary,
    fontWeight: 500,
    letterSpacing: '0.1em',
  },

  title: {
    mb: 1,
  },

  description: {
    color: COLOR_TOKENS.textSecondary,
    maxWidth: '800px',
  },

  screenshotImg: {
    width: '100%',
    height: 'auto',
    borderRadius: 2,
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    border: `1px solid ${COLOR_TOKENS.borderDefault}`,
    display: 'block',
  },

  pdfCard: {
    background: COLOR_TOKENS.backgroundPaper,
    borderRadius: 2,
    borderStyle: 'dashed',
  },

  pdfCardContent: {
    p: 4,
  },

  pdfIconWrapper: {
    p: 1.5,
    backgroundColor: COLOR_TOKENS.accentDangerSubtle,
    borderRadius: 1,
    display: 'flex',
  },

  pdfIcon: {
    color: COLOR_TOKENS.accentDanger,
    fontSize: 32,
  },

  pdfTitle: {
    mb: 1,
  },

  pdfFilename: {
    color: COLOR_TOKENS.textSecondary,
  },

  actionButtons: {
    width: { xs: '100%', sm: 'auto' },
  },

  viewButton: {
    borderColor: COLOR_TOKENS.borderDefault,
    color: COLOR_TOKENS.textPrimary,
  },

  downloadButton: {
    backgroundColor: COLOR_TOKENS.textPrimary,
    color: COLOR_TOKENS.backgroundPaper,
  },

  comingSoonBlock: {
    minHeight: 320,
    border: `1px dashed ${COLOR_TOKENS.borderDefault}`,
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1.5,
    backgroundColor: COLOR_TOKENS.backgroundPaper,
  },

  comingSoonLabel: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.65rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: COLOR_TOKENS.textDisabled,
  },

  comingSoonSub: {
    fontSize: '0.9rem',
    color: COLOR_TOKENS.textDisabled,
    fontWeight: 300,
  },
};
