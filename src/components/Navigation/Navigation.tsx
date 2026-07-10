import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Box, ButtonBase } from '@mui/material';

import { NAV_ITEMS } from '@/shared/constants/navigation.constants';

import { styles } from './Navigation.styles.ts';
import type { NavigationProps } from './Navigation.types.ts';

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
