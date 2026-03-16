import React from 'react';
import { Box, Typography, Stack, Chip } from '@mui/material';

import { COLOR_TOKENS } from '@/theme/themeTokens';
import type { WorkProject } from '@/shared/constants/work-projects.constants';
import { styles } from './carouselCardsStyles';

const WORK_CARD_WIDTH = 300;
const WORK_CARD_HEIGHT = 220;

interface WorkProjectCardProps {
  project: WorkProject;
  index: number;
}

const WorkProjectCard = ({ project }: WorkProjectCardProps) => {
  const [isTouched, setIsTouched] = React.useState(false);

  const yearRange =
    project.yearEnd === 'present'
      ? `${project.yearStart} – present`
      : `${project.yearStart} – ${project.yearEnd}`;

  return (
    <Box
      role="listitem"
      sx={styles.projectCard(WORK_CARD_WIDTH, WORK_CARD_HEIGHT)}
      onClick={() => setIsTouched((prev) => !prev)}
    >
      {project.coverImage ? (
        <Box
          component="img"
          src={project.coverImage}
          alt={project.title}
          loading="lazy"
          sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <Box
          sx={{ position: 'absolute', inset: 0, backgroundColor: COLOR_TOKENS.backgroundSubtle }}
        />
      )}

      {/* Static meta — always visible */}
      <Stack
        spacing={0.5}
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          p: 2,
          zIndex: 1,
          background: `linear-gradient(to top, ${COLOR_TOKENS.backgroundDefault}CC 0%, transparent 100%)`,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          {project.title}
        </Typography>
        <Typography variant="caption" sx={{ color: COLOR_TOKENS.textSecondary }}>
          {project.company} · {yearRange}
        </Typography>
      </Stack>

      {/* Hover overlay (desktop) / tap overlay (mobile) */}
      <Box
        className="project-overlay"
        sx={{
          ...styles.projectOverlay,
          ...(isTouched && { opacity: 1, transform: 'translateY(0)' }),
        }}
      >
        <Stack spacing={1.5}>
          {project.techStack && project.techStack.length > 0 && (
            <Stack direction="row" flexWrap="wrap" sx={{ gap: 0.5 }}>
              {project.techStack.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    height: 18,
                    fontSize: '0.6rem',
                    color: COLOR_TOKENS.textSecondary,
                    backgroundColor: COLOR_TOKENS.backgroundElevated,
                  }}
                />
              ))}
            </Stack>
          )}
          <Typography variant="body2" sx={{ color: COLOR_TOKENS.textPrimary, lineHeight: 1.6 }}>
            {project.description}
          </Typography>
          <Typography variant="caption" sx={{ color: COLOR_TOKENS.textSecondary }}>
            {yearRange}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default WorkProjectCard;
