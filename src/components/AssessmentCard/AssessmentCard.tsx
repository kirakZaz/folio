import { Card, CardContent, CardActionArea, Typography, Chip, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';

import type { AssessmentCardProps } from './types';
import { STATUS_CHIP_CONFIG, styles } from './assessmentCardStyles';

const AssessmentCard = ({ assessment }: AssessmentCardProps) => {
  const navigate = useNavigate();
  const isAvailable = assessment.status === 'available';
  const chipConfig = STATUS_CHIP_CONFIG[assessment.status];

  const handleCardClick = () => {
    if (isAvailable) navigate(assessment.route);
  };

  const cardContent = (
    <CardContent sx={styles.cardContent}>
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Typography variant="caption" sx={styles.metaText}>
            {assessment.weight} · {assessment.dueModule}
          </Typography>
          <Chip
            label={chipConfig.label}
            size="small"
            icon={
              !isAvailable ? (
                <LockOutlinedIcon sx={{ fontSize: '0.75rem !important' }} />
              ) : undefined
            }
            sx={{
              color: chipConfig.color,
              backgroundColor: chipConfig.bgColor,
              border: `1px solid ${chipConfig.color}33`,
              height: 22,
            }}
          />
        </Stack>

        <Stack spacing={0.5}>
          <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
            {assessment.title}
          </Typography>
          <Typography variant="body2" sx={styles.subtitle}>
            {assessment.subtitle}
          </Typography>
        </Stack>

        <Typography variant="body2" sx={styles.description}>
          {assessment.description}
        </Typography>
      </Stack>

      {isAvailable && (
        <Stack direction="row" alignItems="center" spacing={0.5} sx={styles.viewAction}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            View
          </Typography>
          <ArrowForwardIcon sx={{ fontSize: '1rem' }} />
        </Stack>
      )}
    </CardContent>
  );

  return (
    <Card data-testid={`assessment-card-${assessment.id}`} sx={styles.cardContainer(isAvailable)}>
      {isAvailable ? (
        <CardActionArea onClick={handleCardClick} sx={{ height: '100%', alignItems: 'flex-start' }}>
          {cardContent}
        </CardActionArea>
      ) : (
        cardContent
      )}
    </Card>
  );
};

export default AssessmentCard;
