import React from 'react';

const INTERSECTION_THRESHOLD = [0, 0.1, 0.25, 0.5, 0.75, 1.0];
const INTERSECTION_ROOT_MARGIN_DESKTOP = '-10% 0px -40% 0px';
const INTERSECTION_ROOT_MARGIN_MOBILE = '0px 0px -20% 0px';

interface UseActiveSectionOptions {
  sectionIds: string[];
}

const getIsMobile = (): boolean => window.innerWidth < 900;

export const useActiveSection = ({ sectionIds }: UseActiveSectionOptions): string => {
  const [activeSectionId, setActiveSectionId] = React.useState<string>(sectionIds[0] ?? '');

  React.useEffect(() => {
    if (sectionIds.length === 0) return;

    // Track latest ratio per section to pick the most visible one
    const intersectionRatioMap = new Map<string, number>(
      sectionIds.map((sectionId) => [sectionId, 0]),
    );

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        intersectionRatioMap.set(entry.target.id, entry.intersectionRatio);
      });

      // Pick section with highest visible ratio
      let highestRatio = 0;
      let mostVisibleId = '';

      intersectionRatioMap.forEach((ratio, sectionId) => {
        if (ratio > highestRatio) {
          highestRatio = ratio;
          mostVisibleId = sectionId;
        }
      });

      if (mostVisibleId && highestRatio > 0) {
        setActiveSectionId(mostVisibleId);
      }
    };

    const rootMargin = getIsMobile()
      ? INTERSECTION_ROOT_MARGIN_MOBILE
      : INTERSECTION_ROOT_MARGIN_DESKTOP;

    const observer = new IntersectionObserver(observerCallback, {
      threshold: INTERSECTION_THRESHOLD,
      rootMargin,
    });

    sectionIds.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSectionId;
};
