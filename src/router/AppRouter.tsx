import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Box, CircularProgress } from '@mui/material';

import { ROUTES } from '@/shared/constants/routes.constants';

import ScrollToTop from '@/components/ScrollToTop/ScrollToTop.tsx';

import { styles } from './AppRouter.styles';

const TeaserPage = lazy(() => import('@/pages/TeaserPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ExperiencePage = lazy(() => import('@/pages/ExperiencePage'));
const JourneyPage = lazy(() => import('@/pages/JourneyPage'));
const ArtPage = lazy(() => import('@/pages/ArtPage'));
const Assessment1Page = lazy(() => import('@/pages/Assessment1Page'));
const UniversityProjectPage = lazy(() => import('@/pages/UniversityProjectPage'));
const WorkProjectPage = lazy(() => import('@/pages/WorkProjectPage/WorkProjectPage'));

const PageLoader = () => (
  <Box sx={styles.pageLoaderWrapper}>
    <CircularProgress size={28} sx={styles.pageLoaderSpinner} />
  </Box>
);

const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <ScrollToTop />

    <Routes>
      <Route path={ROUTES.HOME} element={<TeaserPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.EXPERIENCE} element={<ExperiencePage />} />
      <Route path={ROUTES.JOURNEY} element={<JourneyPage />} />
      <Route path={ROUTES.ART} element={<ArtPage />} />
      <Route path={ROUTES.ASSESSMENT_1} element={<Assessment1Page />} />
      <Route path={ROUTES.UNIVERSITY_PROJECT} element={<UniversityProjectPage />} />
      <Route path={ROUTES.WORK_PROJECT} element={<WorkProjectPage />} />
    </Routes>
  </Suspense>
);

export default AppRouter;
