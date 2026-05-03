import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

import type { ProjectStatus } from '@/shared/constants/university-projects.constants';

const STATUS_COLOR: Record<ProjectStatus, string> = {
  completed: COLOR_TOKENS.statusAvailable,
  in_progress: COLOR_TOKENS.statusAvailable,
  planned: COLOR_TOKENS.textDisabled,
};

const STATUS_BG: Record<ProjectStatus, string> = {
  completed: 'rgba(34,197,94,0.1)',
  in_progress: 'rgba(34,197,94,0.06)',
  planned: 'rgba(0,0,0,0.06)',
};

const STATUS_LABEL: Record<ProjectStatus, string> = {
  completed: 'Done',
  in_progress: 'In Progress',
  planned: 'Planned',
};

export const styles = {
  card: (status: ProjectStatus, isClickable: boolean) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    p: 2,
    borderRadius: '10px',
    border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    backgroundColor: COLOR_TOKENS.backgroundPaper,
    cursor: isClickable ? 'pointer' : 'default',
    opacity: status === 'planned' ? 0.55 : 1,
    transition: 'border-color 280ms ease, transform 280ms ease',
    minHeight: 120,
    ...(isClickable && {
      '&:hover': {
        borderColor: COLOR_TOKENS.borderDefault,
        transform: 'translateY(-2px)',
      },
    }),
  }),

  topRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    mb: 1,
  },

  periodLabel: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.58rem',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.06em',
  },

  statusChip: (status: ProjectStatus) => ({
    height: 16,
    fontSize: '0.55rem',
    color: STATUS_COLOR[status],
    backgroundColor: STATUS_BG[status],
  }),

  subjectName: {
    fontSize: '0.8rem',
    fontWeight: 500,
    color: COLOR_TOKENS.textPrimary,
    lineHeight: 1.35,
    flexGrow: 1,
    mb: 1.5,
  },

  bottomRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  typeChip: (isElective: boolean) => ({
    height: 14,
    fontSize: '0.52rem',
    color: isElective ? COLOR_TOKENS.statusAvailable : COLOR_TOKENS.textDisabled,
    backgroundColor: 'transparent',
    border: `0.5px solid ${COLOR_TOKENS.borderSubtle}`,
  }),

  scoreText: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.6rem',
    color: COLOR_TOKENS.textSecondary,
  },

  progressBar: (status: ProjectStatus) => ({
    width: '100%',
    height: '2px',
    borderRadius: 2,
    mt: 1.5,
    backgroundColor: STATUS_COLOR[status],
    opacity: status === 'completed' ? 0.5 : 0.2,
  }),
};

export { STATUS_LABEL };
