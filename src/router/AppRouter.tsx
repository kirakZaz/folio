import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { Box, CircularProgress } from '@mui/material';

import { ROUTES } from '@/shared/constants/routes.constants';

import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop.tsx';

import { styles } from './AppRouter.styles';

const TeaserPage = lazy(() => import('@/pages/TeaserPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ExperiencePage = lazy(() => import('@/pages/ExperiencePage'));
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'));
const DegreePage = lazy(() => import('@/pages/JourneyPage'));
const ArtPage = lazy(() => import('@/pages/ArtPage'));
const ResumePage = lazy(() => import('@/pages/ResumePage'));
const AssessmentPage = lazy(() => import('@/pages/AssessmentPage'));
const UniversityProjectPage = lazy(() => import('@/pages/UniversityProjectPage'));
const WorkProjectPage = lazy(() => import('@/pages/WorkProjectPage/WorkProjectPage'));
const PageLoader = () => (
  <Box sx={styles.pageLoaderWrapper}>
    <CircularProgress size={28} sx={styles.pageLoaderSpinner} />
  </Box>
);

const AppRouter = () => {
  const location = useLocation();
  const isHomePage = location.pathname === ROUTES.HOME;

  return (
    <Box sx={styles.appShell}>
      <Box sx={styles.appMain}>
        <Suspense fallback={<PageLoader />}>
          <ScrollToTop />

          <Routes>
            <Route path={ROUTES.HOME} element={<TeaserPage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.EXPERIENCE} element={<ExperiencePage />} />
            <Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
            <Route path={ROUTES.JOURNEY} element={<DegreePage />} />
            <Route path={ROUTES.ART} element={<ArtPage />} />
            <Route path={ROUTES.RESUME} element={<ResumePage />} />
            <Route path={ROUTES.ASSESSMENT} element={<AssessmentPage />} />
            <Route path={ROUTES.UNIVERSITY_PROJECT} element={<UniversityProjectPage />} />
            <Route path={ROUTES.WORK_PROJECT} element={<WorkProjectPage />} />

            {/* Unknown URL — always fall back to the welcome page */}
            <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
          </Routes>
        </Suspense>
      </Box>

      <Footer hidden={isHomePage} />
    </Box>
  );
};

export default AppRouter;
