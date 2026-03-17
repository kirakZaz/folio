import React from 'react';

const INTERSECTION_THRESHOLD = 0.3;
const INTERSECTION_ROOT_MARGIN = '-10% 0px -60% 0px';

interface UseActiveSectionOptions {
  sectionIds: string[];
}

export const useActiveSection = ({ sectionIds }: UseActiveSectionOptions): string => {
  const [activeSectionId, setActiveSectionId] = React.useState<string>(sectionIds[0] ?? '');

  React.useEffect(() => {
    if (sectionIds.length === 0) return;

    const observerCallback: IntersectionObserverCallback = (entries) => {
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry) {
        setActiveSectionId(visibleEntry.target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: INTERSECTION_THRESHOLD,
      rootMargin: INTERSECTION_ROOT_MARGIN,
    });

    sectionIds.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSectionId;
};
