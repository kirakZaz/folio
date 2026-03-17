import { Box, Typography, Stack, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { COLOR_TOKENS } from '@/theme/themeTokens';
import type {
  UniversityProject,
  ProjectStatus,
  SubjectType,
} from '@/shared/constants/university-projects.constants';
import { styles } from './carouselCardsStyles';

const PROJECT_CARD_WIDTH = 260;
const PROJECT_CARD_HEIGHT = 190;

const STATUS_CONFIG: Record<ProjectStatus, { label: string; color: string; bg: string }> = {
  completed: { label: 'Done', color: COLOR_TOKENS.statusCompleted, bg: 'rgba(217,162,115,0.12)' },
  in_progress: {
    label: 'In Progress',
    color: COLOR_TOKENS.accentPrimary,
    bg: 'rgba(212,140,148,0.12)',
  },
  planned: { label: 'Planned', color: COLOR_TOKENS.textDisabled, bg: 'rgba(83,105,93,0.2)' },
};

const SUBJECT_TYPE_CONFIG: Record<SubjectType, { label: string; color: string }> = {
  core: { label: 'Core', color: COLOR_TOKENS.textSecondary },
  elective: { label: 'Elective', color: COLOR_TOKENS.accentPrimary },
};

const formatScore = (score: number | string | undefined): string => {
  if (score === undefined || score === '-') return '';
  return `Score: ${score}`;
};

interface UniversityProjectCardProps {
  project: UniversityProject;
  index: number;
}

const UniversityProjectCard = ({ project }: UniversityProjectCardProps) => {
  const navigate = useNavigate();
  const statusConfig = STATUS_CONFIG[project.status];
  const subjectConfig = SUBJECT_TYPE_CONFIG[project.subjectType];
  const isClickable = project.status !== 'planned';
  const scoreText = formatScore(project.finalScore);

  return (
    <Box
      role="listitem"
      aria-label={`${project.subject} — ${statusConfig.label}`}
      sx={{
        ...styles.projectCard(PROJECT_CARD_WIDTH, PROJECT_CARD_HEIGHT),
        cursor: isClickable ? 'pointer' : 'default',
        opacity: project.status === 'planned' ? 0.5 : 1,
      }}
      onClick={() => isClickable && navigate(`/university/${project.id}`)}
    >
      <Stack spacing={1.5} sx={{ p: 2.5, height: '100%', justifyContent: 'space-between' }}>
        {/* Top row: year · trimester + status chip */}
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography
            variant="caption"
            sx={{ color: COLOR_TOKENS.textDisabled, fontFamily: 'monospace' }}
          >
            Y{project.studyYear} · T{project.trimester} · {project.year}
          </Typography>
          <Chip
            label={statusConfig.label}
            size="small"
            sx={{
              height: 18,
              fontSize: '0.6rem',
              color: statusConfig.color,
              backgroundColor: statusConfig.bg,
            }}
          />
        </Stack>

        {/* Subject name */}
        <Typography
          variant="body2"
          sx={{ fontWeight: 500, color: COLOR_TOKENS.textPrimary, lineHeight: 1.4, flexGrow: 1 }}
        >
          {project.subject}
        </Typography>

        {/* Bottom row: core/elective + score */}
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Chip
            label={subjectConfig.label}
            size="small"
            sx={{
              height: 16,
              fontSize: '0.58rem',
              color: subjectConfig.color,
              backgroundColor: COLOR_TOKENS.backgroundSubtle,
              border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
            }}
          />
          {scoreText && (
            <Typography variant="caption" sx={{ color: COLOR_TOKENS.textSecondary }}>
              {scoreText}
            </Typography>
          )}
        </Stack>

        {/* Progress bar */}
        <Box
          sx={{
            width: '100%',
            height: 3,
            borderRadius: 2,
            backgroundColor:
              project.status === 'completed'
                ? COLOR_TOKENS.statusCompleted
                : COLOR_TOKENS.borderDefault,
            opacity: 0.5,
          }}
        />
      </Stack>
    </Box>
  );
};

export default UniversityProjectCard;
