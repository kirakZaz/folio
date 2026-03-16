// =============================================================================
// UNIVERSITY PROJECTS DATA  (Torrens University — Game Design)
// =============================================================================
// To add a project:
//   1. Add images to /public/images/projects/
//   2. Append an object to the array

export type ProjectStatus = 'completed' | 'in_progress' | 'planned';

export interface UniversityProject {
  id: string;
  year: string; // e.g. '2024', '2025', '2026'
  trimester: 1 | 2 | 3;
  subject: string;
  status: ProjectStatus;
  description: string;
  images: string[];
  finalScore?: number | string;
}

export const UNIVERSITY_PROJECTS_DATA: UniversityProject[] = [
  // ── Trimester 3, 2024 (Completed) ─────────────────────────────────────────
  {
    id: 'dso103',
    year: '2024',
    trimester: 3,
    subject: 'Brand Identity',
    status: 'completed',
    description: '',
    images: ['/images/projects/brand_identity.png'],
    finalScore: 78,
  },
  {
    id: 'gdp102',
    year: '2024',
    trimester: 3,
    subject: 'Game Design Principles',
    status: 'completed',
    description: '',
    images: [],
    finalScore: 72,
  },
  {
    id: 'ise102',
    year: '2024',
    trimester: 3,
    subject: 'Introduction to Software Engineering',
    status: 'completed',
    description: '',
    images: [],
    finalScore: 82,
  },

  // ── Trimester 1, 2025 (Completed) ─────────────────────────────────────────
  {
    id: 'acr101',
    year: '2025',
    trimester: 1,
    subject: '2D Asset Creation',
    status: 'completed',
    description: '',
    images: [],
    finalScore: 81,
  },
  {
    id: 'dcx101',
    year: '2025',
    trimester: 1,
    subject: 'Design Context',
    status: 'completed',
    description: '',
    images: [],
    finalScore: 76,
  },
  {
    id: 'dso102',
    year: '2025',
    trimester: 1,
    subject: 'Design Studio 1',
    status: 'completed',
    description: '',
    images: [],
    finalScore: 66,
  },

  // ── Trimester 2, 2025 (Completed) ─────────────────────────────────────────
  {
    id: 'acr103',
    year: '2025',
    trimester: 2,
    subject: '3D Asset Creation',
    status: 'completed',
    description: '',
    images: [],
    finalScore: 86,
  },
  {
    id: 'ddd203',
    year: '2025',
    trimester: 2,
    subject: 'Discover, Define, Develop, Deliver',
    status: 'completed',
    description: '',
    images: [],
    finalScore: 89,
  },

  // ── Trimester 3, 2025 (Completed) ─────────────────────────────────────────
  {
    id: 'gpf104',
    year: '2025',
    trimester: 3,
    subject: 'Game Production Foundation',
    status: 'completed',
    description: '',
    images: [],
    finalScore: 80,
  },
  {
    id: 'sen301',
    year: '2025',
    trimester: 3,
    subject: 'Social Enterprise',
    status: 'completed',
    description: '',
    images: [],
    finalScore: 94,
  },

  // ── Trimester 1, 2026 (In Progress) ───────────────────────────────────────
  {
    id: 'gst201',
    year: '2026',
    trimester: 1,
    subject: 'Game Studies',
    status: 'in_progress',
    description: '',
    images: [],
    finalScore: '-',
  },
  {
    id: 'cdm303a',
    year: '2026',
    trimester: 1,
    subject: 'Portfolio',
    status: 'in_progress',
    description: '',
    images: [],
    finalScore: '-',
  },
  {
    id: 'pbl202',
    year: '2026',
    trimester: 1,
    subject: 'Problem Based Learning Studio',
    status: 'in_progress',
    description: '',
    images: [],
    finalScore: '-',
  },

  // ── Planned ───────────────────────────────────────────────────────────────
  {
    id: 'ppr301',
    year: '2026',
    trimester: 2,
    subject: 'Pre-Production Capstone 1',
    status: 'planned',
    description: '',
    images: [],
    finalScore: '-',
  },
  {
    id: 'ani203',
    year: '2026',
    trimester: 2,
    subject: 'Animation',
    status: 'planned',
    description: '',
    images: [],
    finalScore: '-',
  },
  {
    id: 'aac202',
    year: '2026',
    trimester: 2,
    subject: 'Advanced 3D Asset Creation',
    status: 'planned',
    description: '',
    images: [],
    finalScore: '-',
  },
  {
    id: 'rgp204',
    year: '2026',
    trimester: 2,
    subject: 'Rapid Game Prototype',
    status: 'planned',
    description: '',
    images: [],
    finalScore: '-',
  },
  {
    id: 'gdp204',
    year: '2026',
    trimester: 2,
    subject: 'Game Development PlayStation',
    status: 'planned',
    description: '',
    images: [],
    finalScore: '-',
  },
  {
    id: 'wil302b',
    year: '2026',
    trimester: 3,
    subject: 'Work Integrated Learning (Industry Live Brief)',
    status: 'planned',
    description: '',
    images: [],
    finalScore: '-',
  },
  {
    id: 'wil302',
    year: '2026',
    trimester: 3,
    subject: 'Work Integrated Learning',
    status: 'planned',
    description: '',
    images: [],
    finalScore: '-',
  },
  {
    id: 'prd302',
    year: '2026',
    trimester: 3,
    subject: 'Production Capstone 2',
    status: 'planned',
    description: '',
    images: [],
    finalScore: '-',
  },
];
