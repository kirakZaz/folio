import { useNavigate, useLocation } from 'react-router-dom';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

import { NAV_ASSESSMENT_LINKS, ROUTES } from '@/shared';

import Logo from '@/components/Logo/Logo.tsx';

import { styles } from './appNavBarStyles';
import type { AppNavBarProps } from './types';

const AppNavBar = ({ links = NAV_ASSESSMENT_LINKS }: AppNavBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box component="header" sx={styles.navBarContainer} data-testid="app-nav-bar">
      <Box sx={styles.navBarInner}>
        {/* Logo */}
        <Box component="div" onClick={() => navigate(ROUTES.ABOUT)} sx={styles.logoButton}>
          <Logo />
        </Box>
        {/* Nav links */}
        <Box component="nav" aria-label="Assessment navigation" sx={styles.navLinks}>
          {links.map((navLink, navIndex) => {
            const isActive = location.pathname === navLink.route;
            const isLocked = navLink.status === 'coming_soon';
            const indexLabel = String(navIndex + 1).padStart(2, '0');

            const displayLabel = isMobile ? navLink.shortLabel : navLink.label;

            if (isLocked) {
              return (
                <Box key={navLink.id} sx={styles.navItemDisabled} aria-disabled="true">
                  <Typography className="app-nav-index" sx={styles.navIndex(false)}>
                    #{indexLabel}
                  </Typography>
                  <Typography className="app-nav-label" sx={styles.navLabel(false)}>
                    {displayLabel}
                  </Typography>
                </Box>
              );
            }

            return (
              <Box
                key={navLink.id}
                component="button"
                onClick={() => navigate(navLink.route)}
                sx={styles.navItem(isActive)}
              >
                <Typography className="app-nav-index" sx={styles.navIndex(isActive)}>
                  #{indexLabel}
                </Typography>
                <Typography className="app-nav-label" sx={styles.navLabel(isActive)}>
                  {displayLabel}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default AppNavBar;
