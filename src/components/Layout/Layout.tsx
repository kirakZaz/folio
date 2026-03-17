import { Box, Container } from '@mui/material';

import AppNavBar from '@/components/AppNavBar';
import type { LayoutProps } from './types';
import { styles } from './layoutStyles';

const Layout = ({ children, maxWidth = 'xl', showNavBar = false, fullWidthSlot }: LayoutProps) => {
  return (
    <Box component="main" sx={styles.pageWrapper}>
      {showNavBar && <AppNavBar />}

      {/* Full-width slot — renders outside Container, sticks to full viewport width */}
      {fullWidthSlot}

      <Container maxWidth={maxWidth} sx={styles.container}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
