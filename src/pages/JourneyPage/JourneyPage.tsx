import React from 'react';

import { motion } from 'framer-motion';

import SectionHeader from '@/pages/HomePage/components/SectionHeader/SectionHeader.tsx';

import { FADE_UP_VARIANTS, DEFAULT_TRANSITION } from '@/shared/constants/animation.constants';
import { UNIVERSITY_PROJECTS_DATA } from '@/shared/constants/university-projects.constants';

import { UniversityProjectCard } from '@/components/CarouselCards';
import HorizontalCarousel from '@/components/HorizontalCarousel';
import PortfolioLayout from '@/components/PortfolioLayout';



const JourneyPage = () => (
  <PortfolioLayout>
    <motion.div
      variants={FADE_UP_VARIANTS}
      initial="hidden"
      animate="visible"
      transition={DEFAULT_TRANSITION}
    >
      <SectionHeader
        index="01"
        label="University Projects"
        count={UNIVERSITY_PROJECTS_DATA.filter((project) => project.status === 'completed').length}
      />
      <HorizontalCarousel sectionLabel="University Projects" hideLabel>
        {UNIVERSITY_PROJECTS_DATA.map((project, index) => (
          <UniversityProjectCard key={project.id} project={project} index={index} />
        ))}
      </HorizontalCarousel>
    </motion.div>
  </PortfolioLayout>
);

export default JourneyPage;
