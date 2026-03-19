import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import {
  DEFAULT_TRANSITION,
  FADE_UP_VARIANTS,
  STAGGER_CONTAINER_VARIANTS,
  VIEWPORT_CONFIG,
} from '@/shared';

import AssessmentCard from '@/components/AssessmentCard';
import type { Assessment } from '@/shared/types/assessment.types';

interface JourneyProps {
  assessments: Assessment[];
}

const Journey = ({ assessments }: JourneyProps) => {
  return (
    <motion.div
      variants={STAGGER_CONTAINER_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: '16px',
        }}
      >
        {assessments.map((assessment, index) => (
          <motion.div
            key={assessment.id}
            variants={FADE_UP_VARIANTS}
            transition={{ ...DEFAULT_TRANSITION, delay: index * 0.08 }}
          >
            <AssessmentCard assessment={assessment} />
          </motion.div>
        ))}
      </Box>
    </motion.div>
  );
};

export default Journey;
