import { buildAssessmentRoute } from '@/shared';

import a1Screenshot from '@/shared/assets/A1_screenshot.png';
import a2Screenshot from '@/shared/assets/A2_screenshot.png';
import a1Pdf from '@/shared/assets/CDM303A_Kira_Zakirov_assessmet1.pdf';
import a2Pdf from '@/shared/assets/CDM303A_Kira_Zakirov_Assessmet2.pdf';
import type { Assessment, AssessmentPageData } from '@/shared/types/assessment.types';

export const ASSESSMENTS_DATA: Assessment[] = [
  {
    id: 1,
    title: 'Assessment 1',
    subtitle: 'Research & Personal Brand Positioning',
    description:
      'Exploring personal design philosophy, investigating professional opportunities, and crafting a personal brand message.',
    status: 'available',
    route: buildAssessmentRoute(1),
    weight: '20%',
    dueModule: 'Module 3',
  },
  {
    id: 2,
    title: 'Assessment 2',
    subtitle: 'Portfolio Teaser & Cover Letter',
    description:
      'Interim submission showcasing initial portfolio work and a tailored cover letter for a target organisation.',
    status: 'available',
    route: buildAssessmentRoute(2),
    weight: '30%',
    dueModule: 'Module 6',
  },
  {
    id: 3,
    title: 'Assessment 3',
    subtitle: 'Portfolio & Resume',
    description:
      'Final submission with a complete portfolio, professional resume, and refined personal brand identity.',
    status: 'coming_soon',
    route: buildAssessmentRoute(3),
    weight: '50%',
    dueModule: 'Module 9',
  },
];

export const NAV_ASSESSMENT_LINKS = ASSESSMENTS_DATA.map((assessment) => ({
  id: assessment.id,
  label: assessment.title,
  shortLabel: `A${assessment.id}`,
  route: assessment.route,
  status: assessment.status,
}));

export const ASSESSMENT_PAGE_DATA: Record<number, AssessmentPageData> = {
  1: {
    ...ASSESSMENTS_DATA[0],
    screenshot: a1Screenshot,
    pdfFile: a1Pdf,
    pdfFilename: 'CDM303A_Kira_Zakirov_assessment1.pdf',
  },
  2: {
    ...ASSESSMENTS_DATA[1],
    screenshot: a2Screenshot,
    pdfFile: a2Pdf,
    pdfFilename: 'CDM303A_Kira_Zakirov_assessment2.pdf',
  },
};
