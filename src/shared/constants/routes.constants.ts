export const ROUTES = {
  HOME: '/',
  ASSESSMENT_1: '/assessment-1',
  ASSESSMENT_2: '/assessment-2',
  ASSESSMENT_3: '/assessment-3',
  WORK_PROJECT: '/work/:projectId',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];

export const buildWorkProjectRoute = (projectId: string): string => `/work/${projectId}`;
