import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import Layout from '@/components/Layout';
import BlueprintHero from '@/components/BlueprintHero/BlueprintHero.tsx';
import WebProjectsSection from '@/components/WebProjectsSection/WebProjectsSection.tsx';
import AssessmentCard from '@/components/AssessmentCard';
import HomePageNavBar from '@/components/HomePageNavBar/HomePageNavBar.tsx';
import HorizontalCarousel from '@/components/HorizontalCarousel';
import { BagCard, DrawingCard, UniversityProjectCard } from '@/components/CarouselCards';

import { useAppSelector } from '@/app/hooks';
import { selectAllAssessments } from '@/features/assessments/assessmentsSlice';
import { BAGS_DATA } from '@/shared/constants/bags.constants';
import { DRAWINGS_DATA } from '@/shared/constants/drawings.constants';
import { UNIVERSITY_PROJECTS_DATA } from '@/shared/constants/university-projects.constants';
import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';
import {
  FADE_UP_VARIANTS,
  STAGGER_CONTAINER_VARIANTS,
  DEFAULT_TRANSITION,
  VIEWPORT_CONFIG,
} from '@/shared/constants/animation.constants';

// ─── Reusable section divider ─────────────────────────────────────────────────
const SectionDivider = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      px: { xs: 2, md: 4 },
      py: { xs: 2, md: 3 },
    }}
  >
    <Box sx={{ flex: 1, height: '0.5px', backgroundColor: COLOR_TOKENS.borderSubtle }} />
    <Box
      sx={{
        width: 4,
        height: 4,
        mx: 2,
        backgroundColor: COLOR_TOKENS.accentPrimary,
        transform: 'rotate(45deg)',
        flexShrink: 0,
      }}
    />
    <Box sx={{ flex: 1, height: '0.5px', backgroundColor: COLOR_TOKENS.borderSubtle }} />
  </Box>
);

// ─── Section header ───────────────────────────────────────────────────────────
interface SectionHeaderProps {
  index: string;
  label: string;
  count?: number;
}

const SectionHeader = ({ index, label, count }: SectionHeaderProps) => (
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
      sx={{
        fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
        fontSize: '10px',
        color: COLOR_TOKENS.accentPrimary,
        letterSpacing: '0.14em',
        flexShrink: 0,
      }}
    >
      {index}
    </Typography>
    <Typography
      sx={{
        fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
        fontSize: '10px',
        color: COLOR_TOKENS.textDisabled,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        flexShrink: 0,
      }}
    >
      {label}
    </Typography>
    <Box sx={{ flex: 1, height: '0.5px', backgroundColor: COLOR_TOKENS.borderSubtle }} />
    {count !== undefined && (
      <Typography
        sx={{
          fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
          fontSize: '9px',
          color: COLOR_TOKENS.textDisabled,
          letterSpacing: '0.1em',
          flexShrink: 0,
        }}
      >
        {count}
      </Typography>
    )}
  </Box>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
const HomePage = () => {
  const assessments = useAppSelector(selectAllAssessments);

  return (
    <Layout fullWidthSlot={<HomePageNavBar />}>
      {/* ── Blueprint Hero ────────────────────────────────────────────── */}
      <Box sx={{ px: { xs: 2, md: 4 }, pt: { xs: 4, md: 6 }, pb: 0 }}>
        <BlueprintHero />
      </Box>

      <SectionDivider />

      {/* ── 01 Journey ────────────────────────────────────────────────── */}
      <Box id="section-journey">
        <motion.div
          variants={FADE_UP_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          transition={DEFAULT_TRANSITION}
        >
          <Box sx={{ py: { xs: 4, md: 6 } }}>
            <SectionHeader index="01" label="Journey" count={assessments.length} />

            <motion.div
              variants={STAGGER_CONTAINER_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_CONFIG}
            >
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                  },
                  gap: '16px',
                  px: { xs: 2, md: 4 },
                }}
              >
                {assessments.map((assessment, index) => (
                  <motion.div
                    key={assessment.id}
                    variants={FADE_UP_VARIANTS}
                    transition={{ ...DEFAULT_TRANSITION, delay: index * 0.08 }}
                  >
                    <AssessmentCard assessment={assessment} />
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Box>

      <SectionDivider />

      {/* ── 02 Web Projects ───────────────────────────────────────────── */}
      <Box id="section-web-projects">
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

      {/* ── 03 University Projects ────────────────────────────────────── */}
      <Box id="section-university-projects">
        <motion.div
          variants={FADE_UP_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          transition={DEFAULT_TRANSITION}
        >
          <Box sx={{ py: { xs: 4, md: 6 } }}>
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
      <Box id="section-bags">
        <motion.div
          variants={FADE_UP_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          transition={DEFAULT_TRANSITION}
        >
          <Box sx={{ py: { xs: 4, md: 6 } }}>
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
          <Box id="section-drawings">
            <motion.div
              variants={FADE_UP_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_CONFIG}
              transition={DEFAULT_TRANSITION}
            >
              <Box sx={{ py: { xs: 4, md: 6 } }}>
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
