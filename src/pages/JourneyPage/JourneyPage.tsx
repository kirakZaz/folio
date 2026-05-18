import { motion } from 'framer-motion';

import { Box, Divider, Grid, Typography } from '@mui/material';

import SectionHeader from '@/pages/HomePage/components/SectionHeader/SectionHeader.tsx';

import { DEFAULT_TRANSITION, FADE_UP_VARIANTS, STAGGER_CONTAINER_VARIANTS, VIEWPORT_CONFIG } from '@/shared/constants/animation.constants';
import { ASSESSMENTS_DATA } from '@/shared/constants/assessments.constants';
import { UNIVERSITY_PROJECTS_DATA } from '@/shared/constants/university-projects.constants';

import PortfolioLayout from '@/components/PortfolioLayout';

import AssessmentCard from './components/AssessmentCard/AssessmentCard';
import CourseCard from './components/CourseCard/CourseCard';
import { styles } from './JourneyPage.styles';

const COMPLETED_COUNT = UNIVERSITY_PROJECTS_DATA.filter((p) => p.status === 'completed').length;

const DegreePage = () => (
  <PortfolioLayout>
    <motion.div
      variants={FADE_UP_VARIANTS}
      initial="hidden"
      animate="visible"
      transition={DEFAULT_TRANSITION}
    >
      <SectionHeader
        index="02"
        label="Degree"
        count={`${COMPLETED_COUNT} completed`}
        headingLevel="h1"
      />

      {/* Assessments */}
      <Box sx={styles.assessmentsSection}>
        <Typography sx={styles.sectionCaption}>CDM303 Portfolio · Assessments</Typography>

        <Grid container spacing={2} sx={styles.assessmentsGrid}>
          {ASSESSMENTS_DATA.map((assessment) => (
            <Grid item xs={12} sm={4} key={assessment.id}>
              <AssessmentCard assessment={assessment} />
            </Grid>
          ))}
        </Grid>

        <Typography sx={styles.degreeDescription}>
          CDM303 is the portfolio course where I document and present my creative degree through
          the Bachelor of Design programme. Each assessment builds toward a complete professional
          identity — from personal brand research through to a polished portfolio and resume.
        </Typography>
      </Box>

      <Divider sx={styles.divider} />

      {/* All courses */}
      <Box sx={styles.coursesSection}>
        <Box sx={styles.coursesHeader}>
          <Typography sx={styles.sectionCaption}>All Courses</Typography>
          <Typography sx={styles.coursesCount}>
            {UNIVERSITY_PROJECTS_DATA.length} subjects
          </Typography>
        </Box>

        <motion.div
          variants={STAGGER_CONTAINER_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
        >
          <Box sx={styles.coursesGrid}>
            {UNIVERSITY_PROJECTS_DATA.map((project, index) => (
              <motion.div
                key={project.id}
                variants={FADE_UP_VARIANTS}
                transition={{ ...DEFAULT_TRANSITION, delay: index * 0.04 }}
              >
                <CourseCard project={project} />
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  </PortfolioLayout>
);

export default DegreePage;
