import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Chip, Typography } from '@mui/material';

import type { Assessment } from '@/shared/types/assessment.types';

import { styles } from './AssessmentCard.styles';

interface AssessmentCardProps {
  assessment: Assessment;
}

const STATUS_LABEL: Record<string, string> = {
  available: 'Available',
  coming_soon: 'Coming soon',
  completed: 'Completed',
};

const AssessmentCard = React.memo(function AssessmentCard({ assessment }: AssessmentCardProps) {
  const navigate = useNavigate();
  const isClickable = assessment.status !== 'coming_soon';

  const handleClick = () => {
    if (isClickable) navigate(assessment.route);
  };

  return (
    <Box
      role="article"
      aria-label={`${assessment.title}: ${assessment.subtitle}`}
      onClick={handleClick}
      sx={styles.card(assessment.status, isClickable)}
    >
      <Box sx={styles.accentLine(assessment.status)} />

      <Box>
        <Typography sx={styles.indexLabel(assessment.status)}>
          A{assessment.id}
        </Typography>
        <Typography sx={styles.title}>{assessment.title}</Typography>
        <Typography sx={styles.subtitle(assessment.status)}>
          {assessment.subtitle}
        </Typography>
      </Box>

      <Box sx={styles.footer}>
        <Typography sx={styles.meta}>
          {assessment.weight} · {assessment.dueModule}
        </Typography>
        <Chip
          label={STATUS_LABEL[assessment.status]}
          size="small"
          sx={styles.statusChip(assessment.status)}
        />
      </Box>
    </Box>
  );
});

export default AssessmentCard;
