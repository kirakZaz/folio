import React from 'react';

import { motion } from 'framer-motion';

import { Box, Typography } from '@mui/material';

import SectionHeader from '@/pages/HomePage/components/SectionHeader/SectionHeader.tsx';

import { DEFAULT_TRANSITION, FADE_UP_VARIANTS } from '@/shared/constants/animation.constants';
import { WORK_PROJECTS_DATA } from '@/shared/constants/work-projects.constants';

import PortfolioLayout from '@/components/PortfolioLayout';
import SeoHead from '@/components/SeoHead/SeoHead';

import JobDetail from './components/JobDetail/JobDetail';
import JobListItem from './components/JobListItem/JobListItem';
import { styles } from './ExperiencePage.styles';

const ExperiencePage = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const selectedProject = WORK_PROJECTS_DATA[selectedIndex];

  const handlePrev = React.useCallback(() => {
    setSelectedIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = React.useCallback(() => {
    setSelectedIndex((prev) => Math.min(WORK_PROJECTS_DATA.length - 1, prev + 1));
  }, []);

  return (
    <PortfolioLayout>
      <SeoHead
        title="Work Experience — Kira Zakirova | Senior Frontend Engineer"
        description="10+ years of frontend development experience across 8 companies. Senior frontend engineer specialising in React, TypeScript, and frontend architecture design systems."
        path="/experience"
      />
      <motion.div
        variants={FADE_UP_VARIANTS}
        initial="hidden"
        animate="visible"
        transition={DEFAULT_TRANSITION}
      >
        <SectionHeader index="01" label="Experience" count={`${WORK_PROJECTS_DATA.length} roles`} headingLevel="h1" />

        <Box sx={styles.layout}>
          <Box sx={styles.sidebar}>
            <Box sx={styles.sidebarMeta}>
              <Typography component="h2" sx={styles.sidebarLabel}>Companies</Typography>
              <Typography sx={styles.totalYears}>10+ years</Typography>
            </Box>

            {WORK_PROJECTS_DATA.map((project, index) => (
              <JobListItem
                key={project.id}
                project={project}
                isActive={index === selectedIndex}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </Box>

          {selectedProject && (
            <Box sx={styles.detailWrap}>
              <JobDetail
                project={selectedProject}
                index={selectedIndex}
                total={WORK_PROJECTS_DATA.length}
                onPrev={handlePrev}
                onNext={handleNext}
              />
            </Box>
          )}
        </Box>
      </motion.div>
    </PortfolioLayout>
  );
};

export default ExperiencePage;