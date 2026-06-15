import { motion } from 'framer-motion';

import { Box, Typography } from '@mui/material';

import SectionHeader from '@/pages/HomePage/components/SectionHeader/SectionHeader.tsx';

import { DEFAULT_TRANSITION, FADE_UP_VARIANTS, STAGGER_CONTAINER_VARIANTS, VIEWPORT_CONFIG } from '@/shared/constants/animation.constants';
import { UNIVERSITY_PROJECTS_DATA } from '@/shared/constants/university-projects.constants';
import type { UniversityProject } from '@/shared/constants/university-projects.constants';

import PortfolioLayout from '@/components/PortfolioLayout';

import CourseCard from './components/CourseCard/CourseCard';
import { styles } from './JourneyPage.styles';

const COMPLETED_COUNT = UNIVERSITY_PROJECTS_DATA.filter((p) => p.status === 'completed').length;

interface PeriodGroup {
  label: string;
  projects: UniversityProject[];
}

const buildPeriodLabel = (project: UniversityProject): string =>
  `Year ${project.studyYear} · Trimester ${project.trimester}, ${project.year}`;

const groupByPeriodDescending = (projects: UniversityProject[]): PeriodGroup[] => {
  const active: Map<number, { label: string; projects: UniversityProject[] }> = new Map();
  const planned: UniversityProject[] = [];

  for (const project of projects) {
    if (project.status === 'planned') {
      planned.push(project);
      continue;
    }

    const existing = active.get(project.studyPeriod);
    if (existing) {
      existing.projects.push(project);
    } else {
      active.set(project.studyPeriod, { label: buildPeriodLabel(project), projects: [project] });
    }
  }

  const groups: PeriodGroup[] = Array.from(active.entries())
    .sort(([a], [b]) => b - a)
    .map(([, group]) => group);

  if (planned.length > 0) {
    groups.push({ label: 'Planned', projects: planned });
  }

  return groups;
};

const PERIOD_GROUPS = groupByPeriodDescending(UNIVERSITY_PROJECTS_DATA);

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

      <Box sx={styles.coursesSection}>
        <Box sx={styles.coursesHeader}>
          <Typography sx={styles.sectionCaption}>All Courses</Typography>
          <Typography sx={styles.coursesCount}>
            {UNIVERSITY_PROJECTS_DATA.length} subjects
          </Typography>
        </Box>

        {PERIOD_GROUPS.map((group) => (
          <Box key={group.label} sx={styles.periodGroup}>
            <Typography sx={styles.periodLabel}>{group.label}</Typography>

            <motion.div
              variants={STAGGER_CONTAINER_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_CONFIG}
            >
              <Box sx={styles.coursesGrid}>
                {group.projects.map((project, index) => (
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
        ))}
      </Box>
    </motion.div>
  </PortfolioLayout>
);

export default DegreePage;
