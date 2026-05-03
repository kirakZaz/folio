import React from 'react';

import { Box, Typography } from '@mui/material';

import type { WorkProject } from '@/shared/constants/work-projects.constants';

import { styles } from './JobListItem.styles';

interface JobListItemProps {
  project: WorkProject;
  isActive: boolean;
  onClick: () => void;
}

const JobListItem = React.memo(function JobListItem({ project, isActive, onClick }: JobListItemProps) {
  const yearStart = String(project.yearStart).split('/').pop();

  const yearRange =
    project.yearEnd === 'present'
      ? `${project.yearStart}`
      : `${project.yearStart} – ${project.yearEnd}`;

  return (
    <Box
      role="button"
      aria-selected={isActive}
      aria-label={`${project.company} — ${project.role}`}
      onClick={onClick}
      sx={styles.item(isActive)}
    >
      <Box sx={styles.accentBar(isActive)} />

      {/* Mobile: logo + year */}
      <Box sx={styles.mobileContent}>
        {project.coverImage ? (
          <Box component="img" src={project.coverImage} alt={project.company} sx={styles.mobileLogo} />
        ) : (
          <Typography sx={styles.mobileLogoFallback}>{project.company.charAt(0)}</Typography>
        )}
        <Typography sx={styles.mobileYear(isActive)}>{yearStart}</Typography>
      </Box>

      {/* Desktop: full info */}
      <Typography sx={styles.company(isActive)}>{project.company}</Typography>
      <Typography sx={styles.role}>{project.role}</Typography>

      <Box sx={styles.period}>
        {project.yearEnd === 'present' && <Box component="span" sx={styles.presentDot} />}
        <Typography component="span" sx={{ fontSize: 'inherit', color: 'inherit', fontFamily: 'inherit', letterSpacing: 'inherit' }}>{yearRange}</Typography>
      </Box>
    </Box>
  );
});

export default JobListItem;
