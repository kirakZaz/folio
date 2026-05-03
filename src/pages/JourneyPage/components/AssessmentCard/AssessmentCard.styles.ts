import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

import type { AssessmentStatus } from '@/shared/types/assessment.types';

const STATUS_ACCENT: Record<AssessmentStatus, string> = {
  available: COLOR_TOKENS.accentPrimary,
  coming_soon: COLOR_TOKENS.textDisabled,
  completed: COLOR_TOKENS.statusAvailable,
};

const STATUS_BG: Record<AssessmentStatus, string> = {
  available: 'rgba(234,82,33,0.06)',
  coming_soon: 'rgba(0,0,0,0.03)',
  completed: 'rgba(34,197,94,0.08)',
};

export const styles = {
  card: (status: AssessmentStatus, isClickable: boolean) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    minHeight: 200,
    p: 3,
    borderRadius: '12px',
    border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    backgroundColor: STATUS_BG[status],
    cursor: isClickable ? 'pointer' : 'default',
    overflow: 'hidden',
    transition: 'border-color 280ms ease, transform 280ms ease, box-shadow 280ms ease',
    ...(isClickable && {
      '&:hover': {
        borderColor: STATUS_ACCENT[status] + '60',
        transform: 'translateY(-3px)',
        boxShadow: `0 8px 32px ${STATUS_ACCENT[status]}18`,
      },
    }),
  }),

  accentLine: (status: AssessmentStatus) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    backgroundColor: STATUS_ACCENT[status],
    opacity: status === 'coming_soon' ? 0.3 : 0.8,
    borderRadius: '12px 12px 0 0',
  }),

  indexLabel: (status: AssessmentStatus) => ({
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '2.4rem',
    fontWeight: 700,
    lineHeight: 1,
    color: STATUS_ACCENT[status],
    opacity: status === 'coming_soon' ? 0.3 : 1,
    letterSpacing: '-0.04em',
    mb: 0.5,
  }),

  title: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.65rem',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    mb: 1.5,
  },

  subtitle: (status: AssessmentStatus) => ({
    fontSize: '0.9rem',
    fontWeight: 500,
    color: status === 'coming_soon' ? COLOR_TOKENS.textDisabled : COLOR_TOKENS.textPrimary,
    lineHeight: 1.4,
    flexGrow: 1,
    mb: 2,
  }),

  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  meta: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.6rem',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.08em',
  },

  statusChip: (status: AssessmentStatus) => ({
    height: 18,
    fontSize: '0.58rem',
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    color: STATUS_ACCENT[status],
    backgroundColor: STATUS_ACCENT[status] + '15',
    border: `0.5px solid ${STATUS_ACCENT[status]}40`,
  }),
};

export { STATUS_ACCENT };
