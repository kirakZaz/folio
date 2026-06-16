import { useParams } from 'react-router-dom';

import { motion } from 'framer-motion';

import DownloadIcon from '@mui/icons-material/Download';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Box, Button, Chip, ImageList, ImageListItem, Stack, Typography } from '@mui/material';

import { DEFAULT_TRANSITION, FADE_UP_VARIANTS } from '@/shared/constants/animation.constants';
import { UNIVERSITY_PROJECTS_DATA } from '@/shared/constants/university-projects.constants';

import BackButton from '@/components/BackButton/BackButton.tsx';
import Layout from '@/components/Layout';
import SeoHead from '@/components/SeoHead/SeoHead';

import { styles } from './UniversityProjectPage.styles';

const isPdfFile = (filePath: string): boolean => filePath.toLowerCase().endsWith('.pdf');

const UniversityProjectPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = UNIVERSITY_PROJECTS_DATA.find((item) => item.id === projectId);

  if (!project) {
    return (
      <Layout showNavBar>
        <BackButton />
        <Typography variant="h3">Project not found.</Typography>
      </Layout>
    );
  }

  const scoreDisplay =
    project.finalScore !== undefined && project.finalScore !== '-' ? `${project.finalScore}` : null;

  const hasPdfPresentation = !!project.presentationFile && isPdfFile(project.presentationFile);
  const hasPptxPresentation = !!project.presentationFile && !isPdfFile(project.presentationFile);

  return (
    <Layout maxWidth="xl" showNavBar>
      <SeoHead
        title={`${project.subject} — University Project | Kira Zakirova`}
        description={project.description || `${project.subject} — a university course project from Kira Zakirova's software engineering degree at Torrens University.`}
        path={`/university/${project.id}`}
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={FADE_UP_VARIANTS}
        transition={DEFAULT_TRANSITION}
      >
        <BackButton />

        <Stack spacing={2} sx={styles.header}>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip label={`Year ${project.studyYear}`} size="small" sx={styles.chipPeriod} />
            <Chip label={`Trimester ${project.trimester}`} size="small" sx={styles.chipTrimester} />
            <Chip
              label={project.subjectType === 'core' ? 'Core' : 'Elective'}
              size="small"
              sx={styles.chipSubjectType(project.subjectType === 'elective')}
            />
            {scoreDisplay && (
              <Chip label={`Score: ${scoreDisplay}`} size="small" sx={styles.chipScore} />
            )}
          </Stack>

          <Typography variant="h2" component="h1">
            {project.subject}
          </Typography>

          <Typography variant="caption" sx={styles.captionMeta}>
            {project.year} · Trimester {project.trimester}
          </Typography>

          {project.description && (
            <Typography variant="body1" sx={styles.description}>
              {project.description}
            </Typography>
          )}

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
                sx={styles.outlinedButton}
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
                sx={styles.outlinedButton}
              >
                Download presentation
              </Button>
            )}
          </Stack>
        </Stack>

        {(hasPdfPresentation || hasPptxPresentation) && (
          <Box sx={styles.presentationWrapper}>
            <Typography variant="caption" sx={styles.presentationLabel}>
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
              sx={styles.iframe}
            />
          </Box>
        )}

        {project.images.length > 0 ? (
          <ImageList variant="masonry" cols={3} gap={16}>
            {project.images.map((imageUrl, imageIndex) => (
              <ImageListItem key={imageIndex}>
                <Box
                  component="img"
                  src={imageUrl}
                  alt={`${project.subject} image ${imageIndex + 1}`}
                  loading="lazy"
                  sx={styles.galleryImg}
                />
              </ImageListItem>
            ))}
          </ImageList>
        ) : (
          !hasPdfPresentation &&
          !hasPptxPresentation && (
            <Box sx={styles.emptyState}>
              <Typography variant="body2" sx={styles.emptyStateText}>
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
