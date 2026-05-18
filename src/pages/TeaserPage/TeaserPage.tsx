import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, ButtonBase, Typography } from '@mui/material';

import { ROUTES } from '@/shared/constants/routes.constants';

import BlueprintHero from '@/components/BlueprintHero/BlueprintHero.tsx';

import { styles } from './TeaserPage.styles';

const TeaserPage = () => {
  const navigate = useNavigate();
  const handleEnter = React.useCallback(() => navigate(ROUTES.EXPERIENCE), [navigate]);

  return (
    <Box sx={styles.root}>
      <Typography
        component="h1"
        sx={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)', clipPath: 'inset(50%)' }}
      >
        Kira Zakirova — Portfolio
      </Typography>
      <BlueprintHero />

      <Box sx={styles.ctaWrapper}>
        <ButtonBase onClick={handleEnter} sx={styles.ctaButton}>
          Enter Portfolio →
        </ButtonBase>
      </Box>
    </Box>
  );
};

export default TeaserPage;
