import React from 'react';

import { motion } from 'framer-motion';

import { Box, Typography } from '@mui/material';

import SectionHeader from '@/pages/HomePage/components/SectionHeader/SectionHeader.tsx';

import { DEFAULT_TRANSITION, FADE_UP_VARIANTS } from '@/shared/constants/animation.constants';
import { WORK_PROJECTS_DATA } from '@/shared/constants/work-projects.constants';

import PortfolioLayout from '@/components/PortfolioLayout';

import JobDetail from './components/JobDetail/JobDetail';
import JobListItem from './components/JobListItem/JobListItem';
import ProfilePanel from './components/ProfilePanel/ProfilePanel';
import { styles } from './ExperiencePage.styles';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

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
          {/* Left: job list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
          >
            <Box sx={styles.sidebar}>
              <Box sx={styles.sidebarMeta}>
                <Typography sx={styles.sidebarLabel}>Companies</Typography>
                <Typography sx={styles.totalYears}>10+ years</Typography>
              </Box>

              {WORK_PROJECTS_DATA.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.06, ease }}
                >
                  <JobListItem
                    project={project}
                    isActive={index === selectedIndex}
                    onClick={() => setSelectedIndex(index)}
                  />
                </motion.div>
              ))}
            </Box>
          </motion.div>

          {/* Middle: job detail */}
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease }}
            >
              <JobDetail
                project={selectedProject}
                index={selectedIndex}
                total={WORK_PROJECTS_DATA.length}
                onPrev={handlePrev}
                onNext={handleNext}
              />
            </motion.div>
          )}

          {/* Right: profile summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
          >
            <Box sx={styles.general}>
              <ProfilePanel />
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </PortfolioLayout>
  );
};

export default ExperiencePage;
