import React from 'react';
import { Box, Typography, Stack, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { buildWorkProjectRoute } from '@/shared/constants/routes.constants';
import { styles } from './carouselCardsStyles';
import type { WorkProjectCardProps } from './WorkProjectCard.types';

const WORK_CARD_WIDTH = 260;
const WORK_CARD_HEIGHT = 300;

const WorkProjectCard = ({ project }: WorkProjectCardProps) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = React.useState(false);

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
      <Box sx={styles.workCardBackground} />

      {/* Logo — fills top area, shrinks and moves up on hover */}
      <Box sx={styles.workCardLogoArea(isHovered)}>
        {project.coverImage ? (
          <Box
            component="img"
            src={project.coverImage}
            alt={`${project.company} logo`}
            loading="lazy"
            sx={styles.workCardLogoImg}
          />
        ) : (
          <Typography aria-hidden="true" sx={styles.workCardLogoFallbackText}>
            {project.title.charAt(0)}
          </Typography>
        )}
      </Box>

      {/* Slide-up content panel */}
      <Box sx={styles.workCardContentPanel(isHovered)}>
        {/* Title + role — always visible */}
        <Box>
          <Typography variant="body2" sx={styles.workCardTitle}>
            {project.title}
          </Typography>
          <Typography variant="caption" sx={styles.workCardSubtitle}>
            {isHovered ? project.role : `${project.company} · ${yearRange}`}
          </Typography>
        </Box>

        {/* Extra content — visible only on hover */}
        <Box sx={styles.workCardExtraContent(isHovered)}>
          <Typography variant="caption" sx={styles.workCardDescription}>
            {project.description}
          </Typography>

          {project.techStack && project.techStack.length > 0 && (
            <Stack direction="row" flexWrap="wrap" sx={{ gap: 0.5 }}>
              {project.techStack.slice(0, 4).map((tech) => (
                <Chip key={tech} label={tech} size="small" sx={styles.workCardChip} />
              ))}
            </Stack>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default WorkProjectCard;
