import { COLOR_TOKENS } from '@/theme/themeTokens';

export const styles = {
  pageWrapper: {
    minHeight: '100vh',
    backgroundColor: COLOR_TOKENS.backgroundDefault,
    position: 'relative',

    // Blueprint grid background — subtle, persistent across whole site
    '&::before': {
      content: '""',
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
      backgroundImage: `
        linear-gradient(${COLOR_TOKENS.borderSubtle} 1px, transparent 1px),
        linear-gradient(90deg, ${COLOR_TOKENS.borderSubtle} 1px, transparent 1px),
        radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px)
      `,
      backgroundSize: '32px 32px, 32px 32px, 32px 32px',
      backgroundPosition: '0 0, 0 0, 0 0',
      opacity: 0.6,
    },
  },

  container: {
    position: 'relative',
    zIndex: 1,
    py: { xs: 4, md: 8 },
  },
};
