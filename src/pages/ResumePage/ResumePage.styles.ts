import { COLOR_TOKENS } from '@/theme/themeTokens';

export const styles = {
  headerRow: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 2,
  },

  downloadButton: {
    mt: 0.5,
    backgroundColor: COLOR_TOKENS.textPrimary,
    color: COLOR_TOKENS.backgroundPaper,
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },

  pdfWrapper: {
    width: '100%',
    aspectRatio: '1 / 1.414',
    borderRadius: 2,
    border: `1px solid ${COLOR_TOKENS.borderDefault}`,
    overflow: 'hidden',
  },

  pdfIframe: {
    width: '100%',
    height: '100%',
    border: 'none',
    display: 'block',
  },
};
