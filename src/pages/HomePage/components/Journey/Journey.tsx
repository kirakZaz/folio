
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import {
  DEFAULT_TRANSITION,
  FADE_UP_VARIANTS,
  STAGGER_CONTAINER_VARIANTS,

  VIEWPORT_CONFIG,
} from '@/shared';

import SectionHeader from '@/pages/HomePage/components/SectionHeader/SectionHeader.tsx';

import { useAppSelector } from '@/app/hooks.ts';
import { selectAllAssessments } from '@/features/assessments/assessmentsSlice.ts';
import AssessmentCard from '@/components/AssessmentCard';
import { SECTION_SCROLL_OFFSET_PX } from '@/shared/constants/animation.constants';


const Journey = () => {
  const assessments = useAppSelector(selectAllAssessments);

  return (
    <Box
      id="section-journey"
      sx={{ scrollMarginTop: `${SECTION_SCROLL_OFFSET_PX}px` }}

    >
      <motion.div
        variants={FADE_UP_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_CONFIG}
        transition={DEFAULT_TRANSITION}
      >
        <Box>
          <SectionHeader
            index="02"
            label="Portfolio Development: Design, Code, and Iteration"
            count={assessments.length}
          />

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
        </Box>
      </motion.div>
    </Box>
  );
};

export default Journey;