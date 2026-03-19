import { useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface LocationState {
  scrollToSection?: string;
}

export const useScrollToSectionOnMount = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const state = location.state as LocationState | null;
    const sectionId = state?.scrollToSection;

    if (!sectionId) return;

    // Clear state so refresh doesn't re-trigger
    navigate(location.pathname, { replace: true, state: null });

    // rAF ensures DOM is painted before we try to find the element
    const frameId = requestAnimationFrame(() => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    });

    return () => cancelAnimationFrame(frameId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // mount only — intentional
};
