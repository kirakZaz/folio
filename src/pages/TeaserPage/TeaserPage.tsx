import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, ButtonBase, Typography } from '@mui/material';

import { ROUTES } from '@/shared/constants/routes.constants';

import BlueprintHero from '@/components/BlueprintHero/BlueprintHero.tsx';
import SeoHead from '@/components/SeoHead/SeoHead';

import { styles } from './TeaserPage.styles';

const PERSON_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Kira Zakirova',
    jobTitle: 'Senior Frontend Engineer',
    description: 'Senior frontend engineer and React TypeScript developer with 10+ years of experience. Currently studying game design and development at Torrens University Australia.',
    url: 'https://folio-kiraz.vercel.app',
    knowsAbout: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Frontend Architecture', 'Design Systems', 'Redux', 'Material UI'],
  },
};

const TeaserPage = () => {
  const navigate = useNavigate();
  const handleEnter = React.useCallback(() => navigate(ROUTES.EXPERIENCE), [navigate]);

  return (
    <Box sx={styles.root}>
      <SeoHead
        title="Kira Zakirova — Frontend Developer Portfolio"
        description="Senior frontend engineer with 10+ years of experience. Explore React, TypeScript, and Node.js projects across 8 companies."
        path="/"
        jsonLd={PERSON_JSONLD}
      />
      <Typography
        component="h1"
        sx={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)', clipPath: 'inset(50%)' }}
      >
        Kira Zakirova — Frontend Developer Portfolio
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
