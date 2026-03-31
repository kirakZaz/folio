import { monoUppercase } from '@/theme/commonStyles';
import { COLOR_TOKENS } from '@/theme/themeTokens';

export const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  },

  sidebar: {
    width: 220,
    flexShrink: 0,
    position: 'sticky',
    top: 0,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'start',
    gap: 5,
    px: 3,
    pt: 15,
  },

  brandBox: {
    ...monoUppercase,
    position: 'absolute',
    top: 28,
    left: 24,
    fontSize: '10px',
    letterSpacing: '0.15em',
    color: COLOR_TOKENS.textDisabled,
    border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    px: 1,
    py: 0.5,
    borderRadius: '4px',
  },

  content: {
    flex: 1,
    overflowY: 'auto',
    px: { xs: 3, md: 6 },
    py: 6,
    minHeight: '100vh',
  },
};
