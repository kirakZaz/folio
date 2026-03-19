import { Box, Typography } from '@mui/material';

import { useActiveSection } from '@/shared/hooks/useActiveSection';
import { styles } from './homePageNavBarStyles';
import type { HomeSectionLink } from './types.ts';

const HOME_SECTION_LINKS: HomeSectionLink[] = [
  { id: 'section-web-projects', index: '01', label: 'Work experience' },
  { id: 'section-journey', index: '02', label: 'Journey' },
  { id: 'section-university-projects', index: '03', label: 'University Projects' },
  { id: 'section-bags', index: '04', label: 'Handmade Bags' },
  { id: 'section-drawings', index: '05', label: 'Drawings' },
];

const SECTION_IDS = HOME_SECTION_LINKS.map((sectionLink) => sectionLink.id);

const scrollToSection = (sectionId: string): void => {
  const sectionElement = document.getElementById(sectionId);

  if (!sectionElement) return;

  sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const HomePageNavBar = () => {
  const activeSectionId = useActiveSection({ sectionIds: SECTION_IDS });

  return (
    <Box component="nav" aria-label="Page sections" sx={styles.navBarContainer}>
      <Box sx={styles.navBarInner}>
        {HOME_SECTION_LINKS.map((sectionLink) => {
          const isActive = activeSectionId === sectionLink.id;

          return (
            <Box
              key={sectionLink.id}
              component="button"
              onClick={() => scrollToSection(sectionLink.id)}
              sx={styles.navItem(isActive)}
            >
              <Typography className="home-nav-index" sx={styles.navIndex(isActive)}>
                #{sectionLink.index}
              </Typography>

              <Typography className="home-nav-label" sx={styles.navLabel(isActive)}>
                {sectionLink.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default HomePageNavBar;
