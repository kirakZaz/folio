import { Box } from '@mui/material';

import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import AssessmentCard from '@/components/AssessmentCard';
import HorizontalCarousel from '@/components/HorizontalCarousel';
import {
  BagCard,
  DrawingCard,
  UniversityProjectCard,
  WorkProjectCard,
} from '@/components/CarouselCards';
import avatar from '@/shared/assets/Kira_Avatar.png';

import { useAppSelector } from '@/app/hooks';
import { selectAllAssessments } from '@/features/assessments/assessmentsSlice';
import { BAGS_DATA } from '@/shared/constants/bags.constants';
import { DRAWINGS_DATA } from '@/shared/constants/drawings.constants';
import { UNIVERSITY_PROJECTS_DATA } from '@/shared/constants/university-projects.constants';
import { WORK_PROJECTS_DATA } from '@/shared/constants/work-projects.constants';

const ASSESSMENT_CARD_WIDTH = 300;

const HomePage = () => {
  const assessments = useAppSelector(selectAllAssessments);

  return (
    <Layout>
      <HeroSection photoSrc={avatar} />

      {/* ── Row 1: Assessments ─────────────────────────────────────── */}
      <HorizontalCarousel sectionLabel="Journey">
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

      {/*/!* ── Row 4: University Projects ─────────────────────────────── *!/*/}
      <HorizontalCarousel sectionLabel="University Projects">
        {UNIVERSITY_PROJECTS_DATA.map((project, index) => (
          <UniversityProjectCard key={project.id} project={project} index={index} />
        ))}
      </HorizontalCarousel>

      {/*/!* ── Row 5: Work Projects ───────────────────────────────────── *!/*/}
      {WORK_PROJECTS_DATA.length > 0 && (
        <HorizontalCarousel sectionLabel="Web Projects">
          {WORK_PROJECTS_DATA.map((project, index) => (
            <WorkProjectCard key={project.id} project={project} index={index} />
          ))}
        </HorizontalCarousel>
      )}

      {/* ── Row 2: Bags ────────────────────────────────────────────── */}
      <HorizontalCarousel sectionLabel="Handmade Bags">
        {BAGS_DATA.map((bagItem, index) => (
          <BagCard key={bagItem.id} item={bagItem} index={index} />
        ))}
      </HorizontalCarousel>

      {/* ── Row 3: Drawings ─ visible only once images are loaded ─── */}
      {DRAWINGS_DATA.length > 0 && (
        <HorizontalCarousel sectionLabel="Drawings">
          {DRAWINGS_DATA.map((drawingItem, index) => (
            <DrawingCard key={drawingItem.id} item={drawingItem} index={index} />
          ))}
        </HorizontalCarousel>
      )}
    </Layout>
  );
};

export default HomePage;
