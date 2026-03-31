import { motion } from 'framer-motion';

import { Box, Typography } from '@mui/material';

import SectionHeader from '@/pages/HomePage/components/SectionHeader/SectionHeader.tsx';

import { DEFAULT_TRANSITION, FADE_UP_VARIANTS } from '@/shared/constants/animation.constants';

import PortfolioLayout from '@/components/PortfolioLayout';

import { styles } from './AboutPage.styles';

const AboutPage = () => (
  <PortfolioLayout>
    <motion.div
      variants={FADE_UP_VARIANTS}
      initial="hidden"
      animate="visible"
      transition={DEFAULT_TRANSITION}
    >
      <SectionHeader index="03" label="About" />

      <Box sx={styles.layout}>
        {/* Sidebar */}
        <Box sx={styles.sidebar}>
          <Box sx={styles.sidebarTop}>
            <Box sx={styles.photoPlaceholder}>
              <Typography sx={styles.photoLabel}>Photo</Typography>
            </Box>

            <Typography sx={styles.name}>Kira Zakirova</Typography>
            <Typography sx={styles.roleLabel}>Senior Frontend Developer</Typography>
            <Typography sx={styles.location}>Melbourne, VIC · Australia</Typography>
          </Box>
        </Box>

        {/* Main content */}
        <Box sx={styles.content}>
          <Typography sx={styles.contentCaption}>About me</Typography>

          <Box sx={styles.bioPlaceholder}>
            <Typography sx={styles.bioPlaceholderText}>Text coming soon</Typography>
          </Box>
        </Box>
      </Box>
    </motion.div>
  </PortfolioLayout>
);

export default AboutPage;
