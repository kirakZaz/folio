export const ROUTES = {
  HOME:               '/',
  ABOUT:              '/about',
  EXPERIENCE:         '/experience',
  JOURNEY:            '/degree',
  ART:                '/art',
  RESUME:             '/resume',
  ASSESSMENT:         '/assessment/:id',
  UNIVERSITY_PROJECT: '/university/:projectId',
  WORK_PROJECT:       '/work/:projectId',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];

export const buildAssessmentRoute = (id: number): string => `/assessment/${id}`;
export const buildWorkProjectRoute = (projectId: string): string => `/work/${projectId}`;
export const buildUniversityProjectRoute = (projectId: string): string => `/university/${projectId}`;
