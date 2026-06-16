import { motion } from 'framer-motion';

import { Box, Typography } from '@mui/material';

import SectionHeader from '@/pages/HomePage/components/SectionHeader/SectionHeader.tsx';

import { DEFAULT_TRANSITION, FADE_UP_VARIANTS, STAGGER_CONTAINER_VARIANTS, VIEWPORT_CONFIG } from '@/shared/constants/animation.constants';
import { UNIVERSITY_PROJECTS_DATA } from '@/shared/constants/university-projects.constants';
import type { UniversityProject } from '@/shared/constants/university-projects.constants';

import PortfolioLayout from '@/components/PortfolioLayout';
import SeoHead from '@/components/SeoHead/SeoHead';

import CourseCard from './components/CourseCard/CourseCard';
import { styles } from './JourneyPage.styles';

const COMPLETED_COUNT = UNIVERSITY_PROJECTS_DATA.filter((p) => p.status === 'completed').length;

/* ── grouping helpers ──────────────────────────────────────────────────────── */

interface TrimesterGroup {
  label: string;
  projects: UniversityProject[];
}

interface YearGroup {
  yearLabel: string;
  trimesters: TrimesterGroup[];
}

const studyTrimester = (period: number): number => ((period - 1) % 3) + 1;

const buildTrimesterLabel = (project: UniversityProject): string => {
  const tri = studyTrimester(project.studyPeriod);
  return `Trimester ${tri} — T${project.trimester} HE, ${project.year}`;
};

const buildGroups = (projects: UniversityProject[]): { years: YearGroup[]; planned: UniversityProject[] } => {
  const yearMap = new Map<number, Map<number, TrimesterGroup>>();
  const planned: UniversityProject[] = [];

  for (const project of projects) {
    if (project.status === 'planned') {
      planned.push(project);
      continue;
    }

    let triMap = yearMap.get(project.studyYear);
    if (!triMap) {
      triMap = new Map();
      yearMap.set(project.studyYear, triMap);
    }

    const existing = triMap.get(project.studyPeriod);
    if (existing) {
      existing.projects.push(project);
    } else {
      triMap.set(project.studyPeriod, {
        label: buildTrimesterLabel(project),
        projects: [project],
      });
    }
  }

  const years: YearGroup[] = Array.from(yearMap.entries())
    .sort(([a], [b]) => b - a)
    .map(([year, triMap]) => ({
      yearLabel: `Year ${year}`,
      trimesters: Array.from(triMap.entries())
        .sort(([a], [b]) => b - a)
        .map(([, group]) => group),
    }));

  return { years, planned };
};

const { years: YEAR_GROUPS, planned: PLANNED_PROJECTS } = buildGroups(UNIVERSITY_PROJECTS_DATA);

/* ── component ─────────────────────────────────────────────────────────────── */

const DegreePage = () => (
  <PortfolioLayout>
    <SeoHead
      title="Degree — Kira Zakirova | Game Design at Torrens Uni"
      description="Game Design and Development degree at Torrens University. Browse completed and planned subjects in Kira Zakirova's academic journey."
      path="/degree"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'Bachelor of Game Design and Development',
        provider: { '@type': 'CollegeOrUniversity', name: 'Torrens University Australia', url: 'https://www.torrens.edu.au' },
        description: 'Undergraduate degree covering game design, 3D modelling, programming, and interactive storytelling.',
      }}
    />
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

      <Typography sx={styles.degreeDescription}>
        I&#39;m currently pursuing a <strong>Bachelor of Game Design and Development</strong> at Torrens
        University Australia. The programme blends creative design thinking with hands-on software
        engineering — covering game mechanics, 3D modelling, level design, programming patterns, and
        interactive storytelling. Each trimester builds on the previous one, moving from foundational
        design principles through to advanced prototyping and team-based capstone projects. Below is
        every subject I&#39;ve completed so far, along with those still ahead.
      </Typography>

      <Box sx={styles.coursesSection}>
        <Box sx={styles.coursesHeader}>
          <Typography component="h2" sx={styles.sectionCaption}>All Courses</Typography>
          <Typography sx={styles.coursesCount}>
            {UNIVERSITY_PROJECTS_DATA.length} subjects
          </Typography>
        </Box>

        {YEAR_GROUPS.map((yearGroup) => (
          <Box key={yearGroup.yearLabel} sx={styles.yearGroup}>
            <Typography sx={styles.yearLabel}>{yearGroup.yearLabel}</Typography>

            {yearGroup.trimesters.map((triGroup) => (
              <Box key={triGroup.label} sx={styles.trimesterGroup}>
                <Typography sx={styles.trimesterLabel}>{triGroup.label}</Typography>

                <motion.div
                  variants={STAGGER_CONTAINER_VARIANTS}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT_CONFIG}
                >
                  <Box sx={styles.coursesGrid}>
                    {triGroup.projects.map((project, index) => (
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
        ))}

        {PLANNED_PROJECTS.length > 0 && (
          <Box sx={styles.yearGroup}>
            <Typography sx={styles.yearLabel}>Planned</Typography>

            <motion.div
              variants={STAGGER_CONTAINER_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_CONFIG}
            >
              <Box sx={styles.coursesGrid}>
                {PLANNED_PROJECTS.map((project, index) => (
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
        )}
      </Box>
    </motion.div>
  </PortfolioLayout>
);

export default DegreePage;
