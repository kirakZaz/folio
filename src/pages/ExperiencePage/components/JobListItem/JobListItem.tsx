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
