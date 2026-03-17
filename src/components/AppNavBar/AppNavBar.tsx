import { Box, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import { NAV_ASSESSMENT_LINKS, ROUTES } from '@/shared';
import type { AppNavBarProps } from './types';
import { styles } from './appNavBarStyles';

const AppNavBar = ({ links = NAV_ASSESSMENT_LINKS }: AppNavBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box component="header" sx={styles.navBarContainer} data-testid="app-nav-bar">
      <Box sx={styles.navBarInner}>
        {/* Logo */}
        <Box component="button" onClick={() => navigate(ROUTES.HOME)} sx={styles.logoButton}>
          kira zakirov
        </Box>

        {/* Nav links */}
        <Box component="nav" aria-label="Assessment navigation" sx={styles.navLinks}>
          {links.map((navLink, navIndex) => {
            const isActive = location.pathname === navLink.route;
            const isLocked = navLink.status === 'coming_soon';
            const indexLabel = String(navIndex + 1).padStart(2, '0');

            if (isLocked) {
              return (
                <Box key={navLink.id} sx={styles.navItemDisabled} aria-disabled="true">
                  <Typography className="app-nav-index" sx={styles.navIndex(false)}>
                    #{indexLabel}
                  </Typography>
                  <Typography className="app-nav-label" sx={styles.navLabel(false)}>
                    {navLink.label}
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
                  {navLink.label}
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
