import React from 'react';

import { Box, Typography } from '@mui/material';

import Navigation from '@/components/Navigation/Navigation';

import { styles } from './PortfolioLayout.styles';
import type { PortfolioLayoutProps } from './PortfolioLayout.types';

const PortfolioLayout = ({ children }: PortfolioLayoutProps) => (
  <Box sx={styles.root}>
    <Box component="aside" sx={styles.sidebar}>
      <Typography sx={styles.brandBox}>Zakirov</Typography>

      <Navigation orientation="vertical" />
    </Box>

    <Box component="main" sx={styles.content}>
      {children}
    </Box>
  </Box>
);

export default React.memo(PortfolioLayout);
