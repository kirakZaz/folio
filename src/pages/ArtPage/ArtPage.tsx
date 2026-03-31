import React from 'react';

import { motion } from 'framer-motion';

import SectionDivider from '@/pages/HomePage/components/SectionDivider/SectionDivider.tsx';
import SectionHeader from '@/pages/HomePage/components/SectionHeader/SectionHeader.tsx';

import { FADE_UP_VARIANTS, DEFAULT_TRANSITION } from '@/shared/constants/animation.constants';
import { BAGS_DATA } from '@/shared/constants/bags.constants';
import { DRAWINGS_DATA } from '@/shared/constants/drawings.constants';

import { BagCard, DrawingCard } from '@/components/CarouselCards';
import HorizontalCarousel from '@/components/HorizontalCarousel';
import PortfolioLayout from '@/components/PortfolioLayout';



const ArtPage = () => (
  <PortfolioLayout>
    <motion.div
      variants={FADE_UP_VARIANTS}
      initial="hidden"
      animate="visible"
      transition={DEFAULT_TRANSITION}
    >
      <SectionHeader index="01" label="Handmade Bags" count={BAGS_DATA.length} />
      <HorizontalCarousel sectionLabel="Handmade Bags" hideLabel>
        {BAGS_DATA.map((bagItem, index) => (
          <BagCard key={bagItem.id} item={bagItem} index={index} />
        ))}
      </HorizontalCarousel>

      {DRAWINGS_DATA.length > 0 && (
        <>
          <SectionDivider />
          <SectionHeader index="02" label="Drawings" count={DRAWINGS_DATA.length} />
          <HorizontalCarousel sectionLabel="Drawings" hideLabel>
            {DRAWINGS_DATA.map((drawingItem, index) => (
              <DrawingCard key={drawingItem.id} item={drawingItem} index={index} />
            ))}
          </HorizontalCarousel>
        </>
      )}
    </motion.div>
  </PortfolioLayout>
);

export default ArtPage;
