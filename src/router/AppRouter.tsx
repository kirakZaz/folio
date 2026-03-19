import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';

import { ROUTES } from '@/shared/constants/routes.constants';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop.tsx';

const HomePage = lazy(() => import('@/pages/HomePage'));
const Assessment1Page = lazy(() => import('@/pages/Assessment1Page'));
const UniversityProjectPage = lazy(() => import('@/pages/UniversityProjectPage'));
const WorkProjectPage = lazy(() => import('@/pages/WorkProjectPage/WorkProjectPage'));

const PageLoader = () => (
  <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <CircularProgress size={28} sx={{ color: 'text.secondary' }} />
  </Box>
);

const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <ScrollToTop />

    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.ASSESSMENT_1} element={<Assessment1Page />} />
      <Route path="/university/:projectId" element={<UniversityProjectPage />} />
      <Route path={ROUTES.WORK_PROJECT} element={<WorkProjectPage />} />
    </Routes>
  </Suspense>
);

export default AppRouter;
