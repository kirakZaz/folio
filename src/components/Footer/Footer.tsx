import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { NAV_ITEMS } from '@/shared/constants/navigation.constants';

import { styles } from './Footer.styles';
import { COPYRIGHT_OWNER, CURRENT_YEAR } from './Footer.constants';
import type { FooterProps } from './Footer.types';

const Footer = ({ hidden = false }: FooterProps) => {
  const location = useLocation();

  return (
    <Box component="footer" sx={styles.footer(hidden)}>
      <Box sx={styles.inner}>
        <Box component="nav" aria-label="Footer navigation" sx={styles.nav}>
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.route;

            return (
              <Box
                key={item.route}
                component={Link}
                to={item.route}
                sx={styles.navLink(isActive)}
              >
                {item.label}
              </Box>
            );
          })}
        </Box>

        <Typography sx={styles.copyright}>
          {CURRENT_YEAR} {COPYRIGHT_OWNER}
        </Typography>
      </Box>
    </Box>
  );
};

export default React.memo(Footer);
