import React from 'react';

import ReplayIcon from '@mui/icons-material/Replay';
import { Box, IconButton, Typography } from '@mui/material';

import PortfolioLayout from '@/components/PortfolioLayout';

import { styles } from './NamePage.styles';

const NamePage = () => {
  const [animKey, setAnimKey] = React.useState(0);

  return (
    <PortfolioLayout>
      <Box sx={styles.page}>
        <Box key={animKey} sx={styles.nameWrap}>
          {/* Kira */}
          <Box sx={styles.lineWrap}>
            <Typography sx={{ ...styles.line, ...styles.line1 }}>
              Kira
            </Typography>
            <Box sx={styles.pen(0.3, 1.6)} />
          </Box>

          {/* Zakirova */}
          <Box sx={styles.lineWrap}>
            <Typography sx={{ ...styles.line, ...styles.line2 }}>
              Zakirova
            </Typography>
            <Box sx={styles.pen(2.0, 2.4)} />
          </Box>
        </Box>

        <IconButton onClick={() => setAnimKey((prev) => prev + 1)} sx={styles.replayButton}>
          <ReplayIcon fontSize="small" />
        </IconButton>
      </Box>
    </PortfolioLayout>
  );
};

export default NamePage;
