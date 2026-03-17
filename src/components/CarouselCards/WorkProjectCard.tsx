import { useState } from 'react';
import { Box, Typography, Stack, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { COLOR_TOKENS } from '@/theme/themeTokens';
import type { WorkProject } from '@/shared/constants/work-projects.constants';
import { buildWorkProjectRoute } from '@/shared/constants/routes.constants';
import { styles } from './carouselCardsStyles';

const WORK_CARD_WIDTH = 260;
const WORK_CARD_HEIGHT = 300;

interface WorkProjectCardProps {
  project: WorkProject;
  index: number;
}

const WorkProjectCard = ({ project }: WorkProjectCardProps) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const yearRange =
    project.yearEnd === 'present'
      ? `${project.yearStart} – present`
      : `${project.yearStart} – ${project.yearEnd}`;

  const handleNavigateToProject = () => {
    navigate(buildWorkProjectRoute(project.id));
  };

  return (
    <Box
      role="listitem"
      aria-label={`${project.title} at ${project.company}`}
      sx={styles.imageCardContainer(WORK_CARD_WIDTH, WORK_CARD_HEIGHT)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleNavigateToProject}
    >
      {/* Background */}
      <Box
        sx={{ position: 'absolute', inset: 0, backgroundColor: COLOR_TOKENS.backgroundSubtle }}
      />

      {/* Logo — fills top area, shrinks and moves up on hover */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: isHovered ? '38%' : '65%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: isHovered ? 1.5 : 3,
          transition:
            'height 320ms cubic-bezier(0.4, 0, 0.2, 1), padding 320ms cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 1,
        }}
      >
        {project.coverImage ? (
          <Box
            component="img"
            src={project.coverImage}
            alt={`${project.company} logo`}
            loading="lazy"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              transition: 'opacity 320ms ease',
            }}
          />
        ) : (
          <Typography
            aria-hidden="true"
            sx={{
              color: COLOR_TOKENS.borderDefault,
              fontWeight: 300,
              fontSize: '5rem',
              userSelect: 'none',
              lineHeight: 1,
            }}
          >
            {project.title.charAt(0)}
          </Typography>
        )}
      </Box>

      {/* Slide-up content panel */}
      <Box
        sx={{
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
        }}
      >
        {/* Title + role — always visible */}
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.3, mb: 0.25 }}>
            {project.title}
          </Typography>
          <Typography variant="caption" sx={{ color: COLOR_TOKENS.textSecondary }}>
            {isHovered ? project.role : `${project.company} · ${yearRange}`}
          </Typography>
        </Box>

        {/* Extra content — visible only on hover */}
        <Box
          sx={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 240ms ease 80ms, transform 240ms ease 80ms',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: COLOR_TOKENS.textSecondary,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              lineHeight: 1.5,
              mb: 1,
            }}
          >
            {project.description}
          </Typography>

          {project.techStack && project.techStack.length > 0 && (
            <Stack direction="row" flexWrap="wrap" sx={{ gap: 0.5 }}>
              {project.techStack.slice(0, 4).map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    height: 16,
                    fontSize: '0.58rem',
                    color: COLOR_TOKENS.textSecondary,
                    backgroundColor: COLOR_TOKENS.backgroundElevated,
                    border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
                  }}
                />
              ))}
            </Stack>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default WorkProjectCard;
