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

  pdfIframe: {
    width: '100%',
    aspectRatio: '1 / 1.414',
    border: 'none',
    display: 'block',
  },
};
