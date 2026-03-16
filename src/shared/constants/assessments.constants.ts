import { ROUTES } from './routes.constants';
import type { Assessment } from '@/shared/types/assessment.types';

export const ASSESSMENTS_DATA: Assessment[] = [
  {
    id:          1,
    title:       'Assessment 1',
    subtitle:    'Research & Personal Brand Positioning',
    description:
      'Exploring personal design philosophy, investigating professional opportunities, and crafting a personal brand message.',
    status:     'available',
    route:      ROUTES.ASSESSMENT_1,
    weight:     '20%',
    dueModule:  'Module 3',
  },
  {
    id:          2,
    title:       'Assessment 2',
    subtitle:    'Portfolio Teaser & Cover Letter',
    description:
      'Interim submission showcasing initial portfolio work and a tailored cover letter for a target organisation.',
    status:     'coming_soon',
    route:      ROUTES.ASSESSMENT_2,
    weight:     '30%',
    dueModule:  'Module 6',
  },
  {
    id:          3,
    title:       'Assessment 3',
    subtitle:    'Portfolio & Resume',
    description:
      'Final submission with a complete portfolio, professional resume, and refined personal brand identity.',
    status:     'coming_soon',
    route:      ROUTES.ASSESSMENT_3,
    weight:     '50%',
    dueModule:  'Module 9',
  },
];

export const NAV_ASSESSMENT_LINKS = ASSESSMENTS_DATA.map((assessment) => ({
  id:     assessment.id,
  label:  assessment.title,
  route:  assessment.route,
  status: assessment.status,
}));
