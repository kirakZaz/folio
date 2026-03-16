import React from 'react';
import { Box, Container } from '@mui/material';

import AppNavBar from '@/components/AppNavBar';
import type { LayoutProps } from './types';
import { styles } from './layoutStyles';

const Layout = ({ children, maxWidth = 'lg', showNavBar = false }: LayoutProps) => {
  return (
    <Box component="main" sx={styles.pageWrapper}>
      {showNavBar && <AppNavBar />}
      <Container maxWidth={maxWidth} sx={styles.container}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
