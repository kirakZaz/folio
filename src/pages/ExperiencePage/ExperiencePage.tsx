import React from 'react';

import { motion } from 'framer-motion';

import { Box, Typography } from '@mui/material';

import SectionHeader from '@/pages/HomePage/components/SectionHeader/SectionHeader.tsx';
import { COLOR_TOKENS } from '@/theme/themeTokens';

import { DEFAULT_TRANSITION, FADE_UP_VARIANTS } from '@/shared/constants/animation.constants';
import { WORK_PROJECTS_DATA } from '@/shared/constants/work-projects.constants';

import PortfolioLayout from '@/components/PortfolioLayout';

import JobDetail from './components/JobDetail/JobDetail';
import JobListItem from './components/JobListItem/JobListItem';
import ProfilePanel from './components/ProfilePanel/ProfilePanel';
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
      <motion.div
        variants={FADE_UP_VARIANTS}
        initial="hidden"
        animate="visible"
        transition={DEFAULT_TRANSITION}
      >
        <SectionHeader index="01" label="Experience" count={`${WORK_PROJECTS_DATA.length} roles`} />

        <Box sx={styles.layout}>
          {/* Left: job list (vertical on desktop, horizontal scroll on mobile) */}
          <Box sx={styles.sidebar}>
            <Box sx={styles.sidebarMeta}>
              <Typography sx={styles.sidebarLabel}>Companies</Typography>
              <Typography sx={styles.totalYears}>9+ years</Typography>
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

          {/* Middle: job detail */}
          {selectedProject && (
            <JobDetail
              project={selectedProject}
              index={selectedIndex}
              total={WORK_PROJECTS_DATA.length}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          )}

          {/* Right: profile summary, skills, education */}
          <Box sx={styles.general}>
            <ProfilePanel />
          </Box>
        </Box>
      </motion.div>
    </PortfolioLayout>
  );
};

export default ExperiencePage;
