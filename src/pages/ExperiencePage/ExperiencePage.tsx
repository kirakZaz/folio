import { motion } from 'framer-motion';

import { FADE_UP_VARIANTS, DEFAULT_TRANSITION } from '@/shared/constants/animation.constants';

import PortfolioLayout from '@/components/PortfolioLayout';
import WebProjectsSection from '@/components/WebProjectsSection/WebProjectsSection.tsx';

const ExperiencePage = () => (
  <PortfolioLayout>
    <motion.div
      variants={FADE_UP_VARIANTS}
      initial="hidden"
      animate="visible"
      transition={DEFAULT_TRANSITION}
    >
      <WebProjectsSection />
    </motion.div>
  </PortfolioLayout>
);

export default ExperiencePage;
