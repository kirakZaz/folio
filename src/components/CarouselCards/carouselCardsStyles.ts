import { cardHoverLift } from '@/theme/commonStyles';
import { COLOR_TOKENS } from '@/theme/themeTokens';

export const styles = {
  // Every card wrapper must have flexShrink: 0 so flex row never wraps
  imageCardContainer: (width: number | string, height: number) => ({
    width,
    height,
    flexShrink: 0,
    borderRadius: 2,
    overflow: 'hidden',
    border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    position: 'relative',
    cursor: 'pointer',
    backgroundColor: COLOR_TOKENS.backgroundElevated,
    ...cardHoverLift,
    '&:hover': {
      borderColor: COLOR_TOKENS.borderDefault,
      transform: 'translateY(-2px)',
    },
  }),

  imageCardImg: {
    width: 'auto',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    display: 'block',
  },

  imageCardOverlay: {
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(to top, ${COLOR_TOKENS.backgroundDefault}CC 0%, transparent 55%)`,
    opacity: 0,
    transition: 'opacity 280ms ease',
    display: 'flex',
    alignItems: 'flex-end',
    p: 1.5,
    '&.visible': { opacity: 1 },
  },

  projectCard: (width: number, height: number) => ({
    width,
    height,
    flexShrink: 0,
    borderRadius: 2,
    border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    backgroundColor: COLOR_TOKENS.backgroundPaper,
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    ...cardHoverLift,
    '&:hover': {
      borderColor: COLOR_TOKENS.borderDefault,
      transform: 'translateY(-2px)',
      '& .project-overlay': {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  }),

  projectOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: `${COLOR_TOKENS.backgroundDefault}F0`,
    opacity: 0,
    transform: 'translateY(8px)',
    transition: 'opacity 280ms ease, transform 280ms ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    p: 2.5,
  },

  imageCardOverlayText: {
    color: COLOR_TOKENS.textPrimary,
  },

  workCardBackground: {
    position: 'absolute',
    inset: 0,
    backgroundColor: COLOR_TOKENS.backgroundSubtle,
  },

  workCardLogoArea: (isHovered: boolean) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: isHovered ? '38%' : '65%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    p: isHovered ? 1.5 : 3,
    transition: 'height 320ms cubic-bezier(0.4, 0, 0.2, 1), padding 320ms cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 1,
  }),

  workCardLogoImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    transition: 'opacity 320ms ease',
  },

  workCardLogoFallbackText: {
    color: COLOR_TOKENS.borderDefault,
    fontWeight: 300,
    fontSize: '5rem',
    userSelect: 'none',
    lineHeight: 1,
  },

  workCardContentPanel: (isHovered: boolean) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: isHovered ? '65%' : '38%',
    backgroundColor: COLOR_TOKENS.backgroundPaper,
    borderTop: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    transition: 'height 320ms cubic-bezier(0.4, 0, 0.2, 1)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    p: 1.5,
    zIndex: 2,
  }),

  workCardTitle: {
    fontWeight: 600,
    lineHeight: 1.3,
    mb: 0.25,
  },

  workCardSubtitle: {
    color: COLOR_TOKENS.textSecondary,
  },

  workCardExtraContent: (isHovered: boolean) => ({
    opacity: isHovered ? 1 : 0,
    transform: isHovered ? 'translateY(0)' : 'translateY(8px)',
    transition: 'opacity 240ms ease 80ms, transform 240ms ease 80ms',
  }),

  workCardDescription: {
    color: COLOR_TOKENS.textSecondary,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    lineHeight: 1.5,
    mb: 1,
  },

  workCardChip: {
    height: 16,
    fontSize: '0.58rem',
    color: COLOR_TOKENS.textSecondary,
    backgroundColor: COLOR_TOKENS.backgroundElevated,
    border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
  },
};
