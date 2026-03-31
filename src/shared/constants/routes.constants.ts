export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  EXPERIENCE: '/experience',
  JOURNEY: '/journey',
  ART: '/art',
  ASSESSMENT_1: '/assessment-1',
  ASSESSMENT_2: '/assessment-2',
  ASSESSMENT_3: '/assessment-3',
  UNIVERSITY_PROJECT: '/university/:projectId',
  WORK_PROJECT: '/work/:projectId',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];

export const buildWorkProjectRoute = (projectId: string): string => `/work/${projectId}`;
export const buildUniversityProjectRoute = (projectId: string): string => `/university/${projectId}`;
