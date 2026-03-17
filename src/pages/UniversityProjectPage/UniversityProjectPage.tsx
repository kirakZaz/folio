import { Box, Typography, Stack, Button, Chip, ImageList, ImageListItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import Layout from '@/components/Layout';
import { UNIVERSITY_PROJECTS_DATA } from '@/shared/constants/university-projects.constants';
import { FADE_UP_VARIANTS, DEFAULT_TRANSITION } from '@/shared/constants/animation.constants';
import { COLOR_TOKENS } from '@/theme/themeTokens';
import { ROUTES } from '@/shared/constants/routes.constants';

const isPdfFile = (filePath: string): boolean => filePath.toLowerCase().endsWith('.pdf');

const UniversityProjectPage = () => {
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId: string }>();
  const project = UNIVERSITY_PROJECTS_DATA.find((item) => item.id === projectId);

  const handleBackToHome = () => navigate(ROUTES.HOME);

  if (!project) {
    return (
      <Layout showNavBar>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={handleBackToHome}
          sx={{ color: COLOR_TOKENS.textSecondary, mb: 4, pl: 0 }}
        >
          Back
        </Button>
        <Typography variant="h3">Project not found.</Typography>
      </Layout>
    );
  }

  const scoreDisplay =
    project.finalScore !== undefined && project.finalScore !== '-' ? `${project.finalScore}` : null;

  const hasPdfPresentation = !!project.presentationFile && isPdfFile(project.presentationFile);
  const hasPptxPresentation = !!project.presentationFile && !isPdfFile(project.presentationFile);

  return (
    <Layout maxWidth="lg" showNavBar>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={FADE_UP_VARIANTS}
        transition={DEFAULT_TRANSITION}
      >
        {/* ── Back button ─────────────────────────────────────── */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={handleBackToHome}
          sx={{
            color: COLOR_TOKENS.textSecondary,
            mb: 4,
            pl: 0,
            '&:hover': { backgroundColor: 'transparent', color: COLOR_TOKENS.textPrimary },
          }}
        >
          Back
        </Button>

        {/* ── Header ──────────────────────────────────────────── */}
        <Stack spacing={2} sx={{ mb: 6 }}>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip
              label={`Year ${project.studyYear}`}
              size="small"
              sx={{
                color: COLOR_TOKENS.accentPrimary,
                backgroundColor: 'rgba(95,173,122,0.1)',
                border: '1px solid rgba(95,173,122,0.2)',
              }}
            />
            <Chip
              label={`Trimester ${project.trimester}`}
              size="small"
              sx={{
                color: COLOR_TOKENS.textSecondary,
                backgroundColor: COLOR_TOKENS.backgroundSubtle,
              }}
            />
            <Chip
              label={project.subjectType === 'core' ? 'Core' : 'Elective'}
              size="small"
              sx={{
                color:
                  project.subjectType === 'elective'
                    ? COLOR_TOKENS.accentPrimary
                    : COLOR_TOKENS.textSecondary,
                backgroundColor: COLOR_TOKENS.backgroundSubtle,
                border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
              }}
            />
            {scoreDisplay && (
              <Chip
                label={`Score: ${scoreDisplay}`}
                size="small"
                sx={{
                  color: COLOR_TOKENS.statusCompleted,
                  backgroundColor: 'rgba(217,162,115,0.12)',
                }}
              />
            )}
          </Stack>

          <Typography variant="h2" component="h1">
            {project.subject}
          </Typography>

          <Typography
            variant="caption"
            sx={{ color: COLOR_TOKENS.textDisabled, fontFamily: 'monospace' }}
          >
            {project.year} · Trimester {project.trimester}
          </Typography>

          {project.description && (
            <Typography variant="body1" sx={{ color: COLOR_TOKENS.textSecondary, maxWidth: 680 }}>
              {project.description}
            </Typography>
          )}

          {/* Action buttons */}
          <Stack direction="row" spacing={1.5} flexWrap="wrap">
            {project.link && (
              <Button
                component="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<OpenInNewIcon sx={{ fontSize: 14 }} />}
                size="small"
                variant="outlined"
                sx={{
                  color: COLOR_TOKENS.textSecondary,
                  borderColor: COLOR_TOKENS.borderDefault,
                  '&:hover': {
                    borderColor: COLOR_TOKENS.textPrimary,
                    color: COLOR_TOKENS.textPrimary,
                  },
                }}
              >
                View project
              </Button>
            )}
            {hasPptxPresentation && (
              <Button
                component="a"
                href={project.presentationFile}
                download
                startIcon={<DownloadIcon sx={{ fontSize: 14 }} />}
                size="small"
                variant="outlined"
                sx={{
                  color: COLOR_TOKENS.textSecondary,
                  borderColor: COLOR_TOKENS.borderDefault,
                  '&:hover': {
                    borderColor: COLOR_TOKENS.textPrimary,
                    color: COLOR_TOKENS.textPrimary,
                  },
                }}
              >
                Download presentation
              </Button>
            )}
          </Stack>
        </Stack>

        {/* ── Presentation viewer (PDF inline / PPTX via Google Docs) ── */}
        {(hasPdfPresentation || hasPptxPresentation) && (
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="caption"
              sx={{
                color: COLOR_TOKENS.textSecondary,
                letterSpacing: '0.08em',
                mb: 2,
                display: 'block',
              }}
            >
              PRESENTATION
            </Typography>
            <Box
              component="iframe"
              src={
                hasPdfPresentation
                  ? project.presentationFile
                  : `https://docs.google.com/gviewer?embedded=true&url=${encodeURIComponent(
                      `${window.location.origin}${project.presentationFile}`,
                    )}`
              }
              title={`${project.subject} presentation`}
              sx={{
                width: '100%',
                height: '70vh',
                border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
                borderRadius: 2,
                display: 'block',
              }}
            />
          </Box>
        )}

        {/* ── Images / gallery ────────────────────────────────── */}
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
          !hasPdfPresentation &&
          !hasPptxPresentation && (
            <Box
              sx={{
                minHeight: 240,
                border: `1px dashed ${COLOR_TOKENS.borderDefault}`,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLOR_TOKENS.backgroundPaper,
              }}
            >
              <Typography variant="body2" sx={{ color: COLOR_TOKENS.textDisabled }}>
                Project images will appear here.
              </Typography>
            </Box>
          )
        )}
      </motion.div>
    </Layout>
  );
};

export default UniversityProjectPage;
