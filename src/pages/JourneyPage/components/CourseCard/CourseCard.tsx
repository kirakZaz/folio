import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Chip, Typography } from '@mui/material';

import { buildUniversityProjectRoute } from '@/shared/constants/routes.constants';
import type { UniversityProject } from '@/shared/constants/university-projects.constants';

import { styles, STATUS_LABEL } from './CourseCard.styles';

interface CourseCardProps {
  project: UniversityProject;
}

const CourseCard = React.memo(function CourseCard({ project }: CourseCardProps) {
  const navigate = useNavigate();
  const isClickable = project.status !== 'planned';
  const isElective = project.subjectType === 'elective';
  const scoreText =
    project.finalScore !== undefined && project.finalScore !== '-'
      ? `${project.finalScore}`
      : null;

  const handleClick = () => {
    if (isClickable) navigate(buildUniversityProjectRoute(project.id));
  };

  return (
    <Box
      role="article"
      aria-label={`${project.subject} — ${STATUS_LABEL[project.status]}`}
      onClick={handleClick}
      sx={styles.card(project.status, isClickable)}
    >
      <Box>
        <Box sx={styles.topRow}>
          <Typography sx={styles.periodLabel}>
            Y{project.studyYear} · T{project.trimester} · {project.year}
          </Typography>
          <Chip
            label={STATUS_LABEL[project.status]}
            size="small"
            sx={styles.statusChip(project.status)}
          />
        </Box>

        <Typography sx={styles.subjectName}>{project.subject}</Typography>
      </Box>

      <Box>
        <Box sx={styles.bottomRow}>
          <Chip
            label={isElective ? 'Elective' : 'Core'}
            size="small"
            sx={styles.typeChip(isElective)}
          />
          {scoreText && <Typography sx={styles.scoreText}>{scoreText}</Typography>}
        </Box>

        <Box sx={styles.progressBar(project.status)} />
      </Box>
    </Box>
  );
});

export default CourseCard;
