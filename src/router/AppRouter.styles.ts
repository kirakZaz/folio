import { COLOR_TOKENS } from '@/theme/themeTokens';

export const styles = {
  // App shell — keeps the footer pinned to the bottom, never overlapping content
  appShell: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },

  appMain: {
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
  },

  pageLoaderWrapper: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pageLoaderSpinner: {
    color: COLOR_TOKENS.textSecondary,
  },
};
