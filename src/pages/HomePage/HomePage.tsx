import { Box,  } from '@mui/material';
import { motion } from 'framer-motion';

import Layout from '@/components/Layout';
import BlueprintHero from '@/components/BlueprintHero/BlueprintHero.tsx';
import WebProjectsSection from '@/components/WebProjectsSection/WebProjectsSection.tsx';
import HomePageNavBar from '@/components/HomePageNavBar/HomePageNavBar.tsx';
import HorizontalCarousel from '@/components/HorizontalCarousel';
import { BagCard, DrawingCard, UniversityProjectCard } from '@/components/CarouselCards';


import { BAGS_DATA } from '@/shared/constants/bags.constants';
import { DRAWINGS_DATA } from '@/shared/constants/drawings.constants';
import { UNIVERSITY_PROJECTS_DATA } from '@/shared/constants/university-projects.constants';
import {
  FADE_UP_VARIANTS,
  DEFAULT_TRANSITION,
  VIEWPORT_CONFIG,
} from '@/shared/constants/animation.constants';
import Journey from '@/pages/HomePage/components/Journey/Journey.tsx';
import SectionHeader from '@/pages/HomePage/components/SectionHeader/SectionHeader.tsx';
import SectionDivider from '@/pages/HomePage/components/SectionDivider/SectionDivider.tsx';
import { SECTION_SCROLL_OFFSET_PX } from '@/shared/constants/animation.constants';

// ─── Page ─────────────────────────────────────────────────────────────────────
const HomePage = () => {


  return (
    <Layout fullWidthSlot={<HomePageNavBar />}>
      {/* ── Blueprint Hero ────────────────────────────────────────────── */}
      <Box>
        <BlueprintHero />
      </Box>

      <SectionDivider />

      {/* ── 01 Web Projects ───────────────────────────────────────────── */}
      <Box id="section-web-projects" sx={{ scrollMarginTop: `${SECTION_SCROLL_OFFSET_PX}px` }}>
        <motion.div
          variants={FADE_UP_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          transition={DEFAULT_TRANSITION}
        >
          <WebProjectsSection />
        </motion.div>
      </Box>

      <SectionDivider />

      {/* ── 02 Journey ────────────────────────────────────────────────── */}
      <Journey />

      <SectionDivider />

      {/* ── 03 University Projects ────────────────────────────────────── */}
      <Box
        id="section-university-projects"
        sx={{ scrollMarginTop: `${SECTION_SCROLL_OFFSET_PX}px` }}
      >
        <motion.div
          variants={FADE_UP_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          transition={DEFAULT_TRANSITION}
        >
          <Box>
            <SectionHeader
              index="03"
              label="University Projects"
              count={
                UNIVERSITY_PROJECTS_DATA.filter((project) => project.status === 'completed').length
              }
            />

            <HorizontalCarousel sectionLabel="University Projects" hideLabel>
              {UNIVERSITY_PROJECTS_DATA.map((project, index) => (
                <UniversityProjectCard key={project.id} project={project} index={index} />
              ))}
            </HorizontalCarousel>
          </Box>
        </motion.div>
      </Box>

      <SectionDivider />

      {/* ── 04 Handmade Bags ──────────────────────────────────────────── */}
      <Box id="section-bags" sx={{ scrollMarginTop: `${SECTION_SCROLL_OFFSET_PX}px` }}>
        <motion.div
          variants={FADE_UP_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          transition={DEFAULT_TRANSITION}
        >
          <Box>
            <SectionHeader index="04" label="Handmade Bags" count={BAGS_DATA.length} />

            <HorizontalCarousel sectionLabel="Handmade Bags" hideLabel>
              {BAGS_DATA.map((bagItem, index) => (
                <BagCard key={bagItem.id} item={bagItem} index={index} />
              ))}
            </HorizontalCarousel>
          </Box>
        </motion.div>
      </Box>

      {/* ── 05 Drawings ───────────────────────────────────────────────── */}
      {DRAWINGS_DATA.length > 0 && (
        <>
          <SectionDivider />

          <Box id="section-drawings" sx={{ scrollMarginTop: `${SECTION_SCROLL_OFFSET_PX}px` }}>
            <motion.div
              variants={FADE_UP_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_CONFIG}
              transition={DEFAULT_TRANSITION}
            >
              <Box >
                <SectionHeader index="05" label="Drawings" count={DRAWINGS_DATA.length} />

                <HorizontalCarousel sectionLabel="Drawings" hideLabel>
                  {DRAWINGS_DATA.map((drawingItem, index) => (
                    <DrawingCard key={drawingItem.id} item={drawingItem} index={index} />
                  ))}
                </HorizontalCarousel>
              </Box>
            </motion.div>
          </Box>
        </>
      )}
    </Layout>
  );
};

export default HomePage;
