import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import Layout from '@/components/Layout';
import BlueprintHero from '@/components/BlueprintHero/BlueprintHero.tsx';
import AssessmentCard from '@/components/AssessmentCard';
import HorizontalCarousel from '@/components/HorizontalCarousel';
import {
  BagCard,
  DrawingCard,
  UniversityProjectCard,
  WorkProjectCard,
} from '@/components/CarouselCards';

import { useAppSelector } from '@/app/hooks';
import { selectAllAssessments } from '@/features/assessments/assessmentsSlice';
import { BAGS_DATA } from '@/shared/constants/bags.constants';
import { DRAWINGS_DATA } from '@/shared/constants/drawings.constants';
import { UNIVERSITY_PROJECTS_DATA } from '@/shared/constants/university-projects.constants';
import { WORK_PROJECTS_DATA } from '@/shared/constants/work-projects.constants';
import { COLOR_TOKENS } from '@/theme/themeTokens';
import {
  FADE_UP_VARIANTS,
  DEFAULT_TRANSITION,
  VIEWPORT_CONFIG,
} from '@/shared/constants/animation.constants';

const ASSESSMENT_CARD_WIDTH = 300;

// ─── Section label component ──────────────────────────────────────────────────
const SectionMeta = ({ index, label }: { index: string; label: string }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'baseline',
      gap: 2,
      mb: 3,
      px: { xs: 2, md: 4 },
    }}
  >
    <Typography
      component="span"
      sx={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: '10px',
        color: COLOR_TOKENS.accentPrimary,
        letterSpacing: '0.14em',
        lineHeight: 1,
        flexShrink: 0,
      }}
    >
      {index}
    </Typography>
    <Typography
      component="span"
      sx={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: '10px',
        color: COLOR_TOKENS.textDisabled,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        lineHeight: 1,
      }}
    >
      {label}
    </Typography>
  </Box>
);

// ─── Thin divider with index ──────────────────────────────────────────────────
const SectionDivider = ({ index }: { index: string }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      px: { xs: 2, md: 4 },
      py: { xs: 4, md: 6 },
    }}
  >
    <Box sx={{ flex: 1, height: '0.5px', backgroundColor: COLOR_TOKENS.borderSubtle }} />
    <Typography
      sx={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: '9px',
        color: COLOR_TOKENS.textDisabled,
        letterSpacing: '0.16em',
        flexShrink: 0,
      }}
    >
      {index}
    </Typography>
    <Box
      sx={{
        width: 4,
        height: 4,
        backgroundColor: COLOR_TOKENS.accentPrimary,
        transform: 'rotate(45deg)',
        flexShrink: 0,
      }}
    />
  </Box>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
const HomePage = () => {
  const assessments = useAppSelector(selectAllAssessments);

  return (
    <Layout>
      {/* ── Blueprint Hero ──────────────────────────────────────────────── */}
      <BlueprintHero />

      {/* ── Journey / Assessments ───────────────────────────────────────── */}
      <motion.div
        variants={FADE_UP_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_CONFIG}
        transition={DEFAULT_TRANSITION}
      >
        <SectionMeta index="01" label="Journey" />
        <HorizontalCarousel sectionLabel="Journey" hideLabel>
          {assessments.map((assessment) => (
            <Box
              key={assessment.id}
              role="listitem"
              sx={{ width: ASSESSMENT_CARD_WIDTH, flexShrink: 0 }}
            >
              <AssessmentCard assessment={assessment} />
            </Box>
          ))}
        </HorizontalCarousel>
      </motion.div>

      <SectionDivider index="——" />

      {/* ── Web Projects ────────────────────────────────────────────────── */}
      {WORK_PROJECTS_DATA.length > 0 && (
        <motion.div
          id="web-projects"
          variants={FADE_UP_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          transition={DEFAULT_TRANSITION}
        >
          <SectionMeta index="02" label="Web Projects" />
          <HorizontalCarousel sectionLabel="Web Projects" hideLabel>
            {WORK_PROJECTS_DATA.map((project, index) => (
              <WorkProjectCard key={project.id} project={project} index={index} />
            ))}
          </HorizontalCarousel>
        </motion.div>
      )}

      <SectionDivider index="——" />

      {/* ── University Projects ─────────────────────────────────────────── */}
      <motion.div
        variants={FADE_UP_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_CONFIG}
        transition={DEFAULT_TRANSITION}
      >
        <SectionMeta index="03" label="University Projects" />
        <HorizontalCarousel sectionLabel="University Projects" hideLabel>
          {UNIVERSITY_PROJECTS_DATA.map((project, index) => (
            <UniversityProjectCard key={project.id} project={project} index={index} />
          ))}
        </HorizontalCarousel>
      </motion.div>

      <SectionDivider index="——" />

      {/* ── Handmade Bags ───────────────────────────────────────────────── */}
      <motion.div
        variants={FADE_UP_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_CONFIG}
        transition={DEFAULT_TRANSITION}
      >
        <SectionMeta index="04" label="Handmade Bags" />
        <HorizontalCarousel sectionLabel="Handmade Bags" hideLabel>
          {BAGS_DATA.map((bagItem, index) => (
            <BagCard key={bagItem.id} item={bagItem} index={index} />
          ))}
        </HorizontalCarousel>
      </motion.div>

      {/* ── Drawings ────────────────────────────────────────────────────── */}
      {DRAWINGS_DATA.length > 0 && (
        <>
          <SectionDivider index="——" />
          <motion.div
            variants={FADE_UP_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_CONFIG}
            transition={DEFAULT_TRANSITION}
          >
            <SectionMeta index="05" label="Drawings" />
            <HorizontalCarousel sectionLabel="Drawings" hideLabel>
              {DRAWINGS_DATA.map((drawingItem, index) => (
                <DrawingCard key={drawingItem.id} item={drawingItem} index={index} />
              ))}
            </HorizontalCarousel>
          </motion.div>
        </>
      )}
    </Layout>
  );
};

export default HomePage;
