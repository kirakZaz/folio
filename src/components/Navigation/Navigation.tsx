import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Box, ButtonBase } from '@mui/material';

import { ROUTES } from '@/shared/constants/routes.constants';

import { styles } from './Navigation.styles.ts';
import type { NavigationProps } from './Navigation.types.ts';

const NAV_ITEMS = [
  { label: 'Welcome', route: ROUTES.HOME },
  { label: 'Experience', route: ROUTES.EXPERIENCE },
  { label: 'Resume', route: ROUTES.RESUME },
  { label: 'About me', route: ROUTES.ABOUT },
  { label: 'Degree', route: ROUTES.JOURNEY },
  { label: 'Art', route: ROUTES.ART },
] as const;

const Navigation = ({ orientation = 'vertical' }: NavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box sx={styles.container(orientation)}>
      {NAV_ITEMS.map((navItem) => {
        const isActive = location.pathname === navItem.route;

        return (
          <ButtonBase
            key={navItem.route}
            onClick={() => navigate(navItem.route)}
            sx={styles.button(isActive)}
          >
            {navItem.label}
          </ButtonBase>
        );
      })}
    </Box>
  );
};

export default React.memo(Navigation);
