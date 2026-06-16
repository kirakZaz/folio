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
      <Box
        component="header"
        sx={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)', clipPath: 'inset(50%)' }}
      >
        <Typography component="h1">
          Kira Zakirova — Frontend Developer Portfolio
        </Typography>
        <Typography component="h2">
          Senior Front End Engineer &amp; React TypeScript Developer
        </Typography>
        <Typography component="p">
          Frontend expert with 10+ years of experience in frontend architecture and design systems.
          Explore projects built with React, TypeScript, Node.js, and modern web technologies
          across 8 companies. Currently based in Melbourne, Australia.
        </Typography>
      </Box>
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
