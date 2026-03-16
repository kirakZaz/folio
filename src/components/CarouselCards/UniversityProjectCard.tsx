import { Box, Typography, Stack, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { COLOR_TOKENS } from '@/theme/themeTokens';
import type {
  UniversityProject,
  ProjectStatus,
} from '@/shared/constants/university-projects.constants';
import { styles } from './carouselCardsStyles';

const PROJECT_CARD_WIDTH = 260;
const PROJECT_CARD_HEIGHT = 180;

const STATUS_CONFIG: Record<ProjectStatus, { label: string; color: string; bg: string }> = {
  completed: { label: 'Done', color: COLOR_TOKENS.statusCompleted, bg: 'rgba(217,162,115,0.12)' },
  in_progress: {
    label: 'In Progress',
    color: COLOR_TOKENS.accentPrimary,
    bg: 'rgba(212,140,148,0.12)',
  },
  planned: { label: 'Planned', color: COLOR_TOKENS.textDisabled, bg: 'rgba(83,105,93,0.2)' },
};

interface UniversityProjectCardProps {
  project: UniversityProject;
  index: number;
}

const UniversityProjectCard = ({ project }: UniversityProjectCardProps) => {
  const navigate = useNavigate();
  const statusCfg = STATUS_CONFIG[project.status];
  const isClickable = project.status !== 'planned';

  return (
    <Box
      role="listitem"
      sx={{
        ...styles.projectCard(PROJECT_CARD_WIDTH, PROJECT_CARD_HEIGHT),
        cursor: isClickable ? 'pointer' : 'default',
        opacity: project.status === 'planned' ? 0.5 : 1,
      }}
      onClick={() => isClickable && navigate(`/university/${project.id}`)}
      aria-label={`${project.subject} — ${statusCfg.label}`}
    >
      <Stack spacing={1.5} sx={{ p: 2.5, height: '100%', justifyContent: 'space-between' }}>
        <Stack direction="row" alignItems="center" sx={{ gap: 0.5 }}>
          <Typography
            variant="caption"
            sx={{ color: COLOR_TOKENS.textDisabled, fontFamily: 'monospace' }}
          >
            {project.year} · T{project.trimester}
          </Typography>
          <Chip
            label={statusCfg.label}
            size="small"
            sx={{
              height: 18,
              fontSize: '0.6rem',
              ml: 'auto',
              color: statusCfg.color,
              backgroundColor: statusCfg.bg,
            }}
          />
        </Stack>

        <Typography
          variant="body2"
          sx={{ fontWeight: 500, color: COLOR_TOKENS.textPrimary, lineHeight: 1.4 }}
        >
          {project.subject}
        </Typography>

        <Typography
          variant="body2"
          sx={{ fontWeight: 400, color: COLOR_TOKENS.textPrimary, lineHeight: 1.4 }}
        >
          {project.finalScore !== null
            ? `Final Score: ${project.finalScore}`
            : 'Details coming soon'}
        </Typography>

        <Box
          sx={{
            width: '100%',
            height: 4,
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
