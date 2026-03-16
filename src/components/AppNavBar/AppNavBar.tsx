import React from 'react';
import { Box, Button, Stack } from '@mui/material';
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
        <Button onClick={() => navigate(ROUTES.HOME)} disableRipple sx={styles.logoButton}>
          Kira
        </Button>

        <Stack component="nav" direction="row" spacing={3} aria-label="Assessment navigation">
          {links.map((navLink) => {
            const isActive = location.pathname === navLink.route;
            const isLocked = navLink.status === 'coming_soon';

            return (
              <Button
                key={navLink.id}
                onClick={() => !isLocked && navigate(navLink.route)}
                disableRipple
                disabled={isLocked}
                sx={styles.navLink(isActive)}
              >
                {navLink.label}
              </Button>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default AppNavBar;
