import { motion } from 'framer-motion';

import { Box, Typography } from '@mui/material';

import { useAppSelector } from '@/app/hooks.ts';
import Degree from '@/pages/HomePage/components/Journey/Journey.tsx';
import SectionDivider from '@/pages/HomePage/components/SectionDivider/SectionDivider.tsx';
import SectionHeader from '@/pages/HomePage/components/SectionHeader/SectionHeader.tsx';

import {
  DEFAULT_TRANSITION,
  FADE_UP_VARIANTS,
  SECTION_SCROLL_OFFSET_PX,
  VIEWPORT_CONFIG,
} from '@/shared/constants/animation.constants';
import { BAGS_DATA } from '@/shared/constants/bags.constants';
import { DRAWINGS_DATA } from '@/shared/constants/drawings.constants';
import { UNIVERSITY_PROJECTS_DATA } from '@/shared/constants/university-projects.constants';
import { useScrollToSectionOnMount } from '@/shared/hooks/useScrollToSectionOnMount.ts';

import BlueprintHero from '@/components/BlueprintHero/BlueprintHero.tsx';
import { BagCard, DrawingCard, UniversityProjectCard } from '@/components/CarouselCards';
import HomePageNavBar from '@/components/HomePageNavBar/HomePageNavBar.tsx';
import HorizontalCarousel from '@/components/HorizontalCarousel';
import Layout from '@/components/Layout';
import WebProjectsSection from '@/components/WebProjectsSection/WebProjectsSection.tsx';

import { selectAllAssessments } from '@/features/assessments/assessmentsSlice.ts';

// ─── Page ─────────────────────────────────────────────────────────────────────
const HomePage = () => {
  const assessments = useAppSelector(selectAllAssessments);
  useScrollToSectionOnMount();

  return (
    <Layout fullWidthSlot={<HomePageNavBar />}>
      <Typography
        component="h1"
        sx={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)', clipPath: 'inset(50%)' }}
      >
        Kira Zakirova — Frontend Engineer Portfolio
      </Typography>

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

      {/* ── 02 Degree ─────────────────────────────────────────────────── */}
      <Box id="section-journey" sx={{ scrollMarginTop: `${SECTION_SCROLL_OFFSET_PX}px` }}>
        <motion.div
          variants={FADE_UP_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          transition={DEFAULT_TRANSITION}
        >
          <Box>
            <SectionHeader
              index="02"
              label="Portfolio Development Degree"
              count={assessments.length}
            />
            <Degree assessments={assessments} />
          </Box>
        </motion.div>
      </Box>

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
              <Box>
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
