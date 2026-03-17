import { COLOR_TOKENS } from '@/theme/themeTokens';
import type { StatusChipConfigMap } from './types';

export const STATUS_CHIP_CONFIG: StatusChipConfigMap = {
  available: {
    label: 'Available',
    color: COLOR_TOKENS.statusAvailable,
    bgColor: 'rgba(74, 222, 128, 0.12)',
  },
  coming_soon: {
    label: 'Coming Soon',
    color: COLOR_TOKENS.textSecondary,
    bgColor: 'rgba(0, 0, 0, 0.04)',
  },
  completed: {
    label: 'Completed',
    color: COLOR_TOKENS.statusCompleted,
    bgColor: 'rgba(217, 162, 115, 0.12)',
  },
};

// Accent colors per assessment status for the glow / border effect
const GLASS_ACCENT_BY_STATUS: Record<string, string> = {
  available: '#22c55e',
  coming_soon: 'rgba(0,0,0,0.12)',
  completed: '#d9a273',
};

export const styles = {
  cardContainer: (isAvailable: boolean, status: string) => ({
    // Frosted glass base
    background: 'rgba(255, 255, 255, 0.55)',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',

    border: `1px solid ${GLASS_ACCENT_BY_STATUS[status] ?? 'rgba(255,255,255,0.6)'}`,
    borderRadius: '16px',
    boxShadow: isAvailable
      ? '0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)'
      : '0 2px 12px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.7)',

    height: '100%',
    opacity: isAvailable ? 1 : 0.5,
    transition:
      'opacity 280ms ease, border-color 280ms ease, transform 280ms ease, box-shadow 280ms ease',

    // Subtle inner highlight at the top (glass shine)
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '10%',
      right: '10%',
      height: '1px',
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)',
      borderRadius: '50%',
    },

    position: 'relative',
    overflow: 'hidden',

    '&:hover': isAvailable
      ? {
          transform: 'translateY(-4px)',
          boxShadow:
            '0 16px 48px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)',
          borderColor: `${GLASS_ACCENT_BY_STATUS[status]}99`,
        }
      : {},
  }),

  cardContent: {
    p: '28px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  metaText: {
    color: COLOR_TOKENS.textSecondary,
    letterSpacing: '0.08em',
    fontSize: '0.7rem',
  },

  subtitle: {
    color: COLOR_TOKENS.textSecondary,
    fontStyle: 'italic',
    fontSize: '0.85rem',
    lineHeight: 1.4,
  },

  description: {
    color: COLOR_TOKENS.textSecondary,
    lineHeight: 1.75,
    flexGrow: 1,
    fontSize: '0.875rem',
  },

  viewAction: {
    mt: 3,
  },
};
