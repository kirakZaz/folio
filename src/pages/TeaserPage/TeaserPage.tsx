import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, ButtonBase } from '@mui/material';

import { ROUTES } from '@/shared/constants/routes.constants';

import BlueprintHero from '@/components/BlueprintHero/BlueprintHero.tsx';

import { styles } from './TeaserPage.styles';

const TeaserPage = () => {
  const navigate = useNavigate();
  const handleEnter = React.useCallback(() => navigate(ROUTES.EXPERIENCE), [navigate]);

  return (
    <Box sx={styles.root}>
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
