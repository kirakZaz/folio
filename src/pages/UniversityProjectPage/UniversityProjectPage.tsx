import React from 'react';
import { Box, Typography, Stack, Button, Chip, ImageList, ImageListItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import Layout from '@/components/Layout';
import { UNIVERSITY_PROJECTS_DATA } from '@/shared/constants/university-projects.constants';
import { FADE_UP_VARIANTS, DEFAULT_TRANSITION } from '@/shared/constants/animation.constants';
import { COLOR_TOKENS } from '@/theme/themeTokens';
import { ROUTES } from '@/shared/constants/routes.constants';

const UniversityProjectPage = () => {
  const navigate           = useNavigate();
  const { projectId }      = useParams<{ projectId: string }>();
  const project            = UNIVERSITY_PROJECTS_DATA.find((item) => item.id === projectId);

  const handleBackToHome = () => navigate(ROUTES.HOME);

  if (!project) {
    return (
      <Layout showNavBar>
        <Button startIcon={<ArrowBackIcon />} onClick={handleBackToHome} sx={{ color: COLOR_TOKENS.textSecondary, mb: 4, pl: 0 }}>
          Back
        </Button>
        <Typography variant="h3">Project not found.</Typography>
      </Layout>
    );
  }

  return (
    <Layout maxWidth="lg" showNavBar>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={FADE_UP_VARIANTS}
        transition={DEFAULT_TRANSITION}
      >
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={handleBackToHome}
          sx={{ color: COLOR_TOKENS.textSecondary, mb: 4, pl: 0, '&:hover': { backgroundColor: 'transparent', color: COLOR_TOKENS.textPrimary } }}
        >
          Back
        </Button>

        <Stack spacing={1.5} sx={{ mb: 6 }}>
          <Stack direction="row" spacing={1}>
            <Chip
              label={`Year ${project.year}`}
              size="small"
              sx={{ color: COLOR_TOKENS.accentPrimary, backgroundColor: 'rgba(95,173,122,0.1)', border: `1px solid rgba(95,173,122,0.2)` }}
            />
            <Chip
              label={`Trimester ${project.trimester}`}
              size="small"
              sx={{ color: COLOR_TOKENS.textSecondary, backgroundColor: COLOR_TOKENS.backgroundSubtle }}
            />
          </Stack>

          <Typography variant="h2" component="h1">
            {project.subject}
          </Typography>

          {project.description && (
            <Typography variant="body1" sx={{ color: COLOR_TOKENS.textSecondary, maxWidth: 680 }}>
              {project.description}
            </Typography>
          )}
        </Stack>

        {/* Project images */}
        {project.images.length > 0 ? (
          <ImageList variant="masonry" cols={3} gap={16}>
            {project.images.map((imageUrl, imageIndex) => (
              <ImageListItem key={imageIndex}>
                <Box
                  component="img"
                  src={imageUrl}
                  alt={`${project.subject} image ${imageIndex + 1}`}
                  loading="lazy"
                  sx={{ borderRadius: 2, width: '100%', display: 'block' }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        ) : (
          <Box sx={{
            minHeight:       240,
            border:          `1px dashed ${COLOR_TOKENS.borderDefault}`,
            borderRadius:    2,
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            backgroundColor: COLOR_TOKENS.backgroundPaper,
          }}>
            <Typography variant="body2" sx={{ color: COLOR_TOKENS.textDisabled }}>
              Project images will appear here.
            </Typography>
          </Box>
        )}
      </motion.div>
    </Layout>
  );
};

export default UniversityProjectPage;
