import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ROUTES } from '@/shared/constants/routes.constants';

// Maps route patterns to the home page section they belong to
const ROUTE_TO_SECTION_MAP: Array<{ pattern: RegExp; sectionId: string }> = [
  { pattern: /^\/work\//, sectionId: 'section-web-projects' },
  { pattern: /^\/university\//, sectionId: 'section-university-projects' },
  { pattern: /^\/assessment-/, sectionId: 'section-journey' },
];

const resolveSectionId = (pathname: string): string | null => {
  const match = ROUTE_TO_SECTION_MAP.find(({ pattern }) => pattern.test(pathname));
  return match?.sectionId ?? null;
};

export const useNavigateBack = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(() => {
    const sectionId = resolveSectionId(location.pathname);

    navigate(ROUTES.HOME, {
      state: { scrollToSection: sectionId },
    });
  }, [navigate, location.pathname]);
};
