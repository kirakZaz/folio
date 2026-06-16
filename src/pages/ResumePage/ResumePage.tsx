import { motion } from 'framer-motion';

import { Box } from '@mui/material';

import SectionHeader from '@/pages/HomePage/components/SectionHeader/SectionHeader.tsx';

import { DEFAULT_TRANSITION, FADE_UP_VARIANTS } from '@/shared/constants/animation.constants';

import PortfolioLayout from '@/components/PortfolioLayout';
import SeoHead from '@/components/SeoHead/SeoHead';

import { styles } from './ResumePage.styles';

const CV_PATH = '/KiraZakirova_CV.pdf';

const ResumePage = () => (
  <PortfolioLayout>
    <SeoHead
      title="Resume — Kira Zakirova | Software Engineer Resume & CV"
      description="Download or view Kira Zakirova's resume. Senior frontend engineer with 10+ years of experience in React, TypeScript, and full stack engineering across 8 companies."
      path="/resume"
    />
    <motion.div
      variants={FADE_UP_VARIANTS}
      initial="hidden"
      animate="visible"
      transition={DEFAULT_TRANSITION}
    >
      <SectionHeader index="05" label="Resume" headingLevel="h1" />

      <Box
        component="iframe"
        src={CV_PATH}
        title="Kira Zakirova — Resume"
        sx={styles.pdfIframe}
      />
    </motion.div>
  </PortfolioLayout>
);

export default ResumePage;
