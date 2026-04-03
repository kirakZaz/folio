import { useParams } from 'react-router-dom';

import { motion } from 'framer-motion';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Box, Button, Chip, Divider, Grid, ImageList, ImageListItem, Stack, Typography } from '@mui/material';

import { DEFAULT_TRANSITION, FADE_UP_VARIANTS } from '@/shared/constants/animation.constants';
import { WORK_PROJECTS_DATA } from '@/shared/constants/work-projects.constants';

import BackButton from '@/components/BackButton/BackButton.tsx';
import Layout from '@/components/Layout';

import { styles } from './WorkProjectPage.styles';

const WorkProjectPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = WORK_PROJECTS_DATA.find((workProject) => workProject.id === projectId);

  const yearRange =
    project?.yearEnd === 'present'
      ? `${project.yearStart} – Present`
      : `${project?.yearStart} – ${project?.yearEnd}`;

  if (!project) {
    return (
      <Layout showNavBar>
        <BackButton />
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
        <BackButton />

        <Stack spacing={2} sx={styles.header}>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip label={yearRange} size="small" sx={styles.chipPeriod} />
            {project.teamSize && (
              <Chip label={`Team of ${project.teamSize}`} size="small" sx={styles.chipTeam} />
            )}
          </Stack>

          <Stack direction="row" spacing={1.5} alignItems="center">
            <Typography variant="h2" component="h1">
              {project.title}
            </Typography>
            {project.link && (
              <Box
                component="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={styles.titleLink}
              >
                <OpenInNewIcon sx={{ fontSize: 20 }} />
              </Box>
            )}
          </Stack>

          <Stack direction="row" spacing={0.5} alignItems="center">
            <Typography variant="body1" sx={styles.metaText}>{project.role}</Typography>
            <Typography variant="body1" sx={styles.metaMuted}>·</Typography>
            <Typography variant="body1" sx={styles.metaText}>{project.company}</Typography>
          </Stack>

          <Typography variant="body1" sx={styles.description}>
            {project.description}
          </Typography>

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
                Live site
              </Button>
            )}
            {project.githubUrl && (
              <Button
                component="a"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHubIcon sx={{ fontSize: 16 }} />}
                size="small"
                variant="outlined"
                sx={styles.outlinedButton}
              >
                GitHub
              </Button>
            )}
          </Stack>
        </Stack>

        <Divider sx={styles.divider} />

        <Grid container spacing={5} sx={styles.grid}>
          {project.techStack && project.techStack.length > 0 && (
            <Grid item xs={12} md={4}>
              <Typography variant="caption" sx={styles.sectionCaption}>
                TECH STACK
              </Typography>
              <Stack direction="row" flexWrap="wrap" sx={{ gap: 1 }}>
                {project.techStack.map((tech) => (
                  <Chip key={tech} label={tech} size="small" sx={styles.techChip} />
                ))}
              </Stack>
            </Grid>
          )}

          {project.achievements && project.achievements.length > 0 && (
            <Grid item xs={12} md={4}>
              <Typography variant="caption" sx={styles.sectionCaption}>
                KEY ACHIEVEMENTS
              </Typography>
              <Stack spacing={1.5}>
                {project.achievements.map((achievement, achievementIndex) => (
                  <Stack key={achievementIndex} direction="row" spacing={1} alignItems="flex-start">
                    <CheckCircleOutlineIcon sx={styles.listIcon(true)} />
                    <Typography variant="body2" sx={styles.listText}>
                      {achievement}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <Grid item xs={12} md={4}>
              <Typography variant="caption" sx={styles.sectionCaption}>
                CHALLENGES & SOLUTIONS
              </Typography>
              <Stack spacing={1.5}>
                {project.challenges.map((challenge, challengeIndex) => (
                  <Stack key={challengeIndex} direction="row" spacing={1} alignItems="flex-start">
                    <LightbulbOutlinedIcon sx={styles.listIcon(false)} />
                    <Typography variant="body2" sx={styles.listText}>
                      {challenge}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          )}
        </Grid>

        {project.screenshots && project.screenshots.length > 0 ? (
          <>
            <Typography variant="caption" sx={styles.screenshotsCaption}>
              SCREENSHOTS
            </Typography>
            <ImageList variant="masonry" cols={2} gap={16}>
              {project.screenshots.map((screenshotUrl, screenshotIndex) => (
                <ImageListItem key={screenshotIndex}>
                  <Box
                    component="img"
                    src={screenshotUrl}
                    alt={`${project.title} screenshot ${screenshotIndex + 1}`}
                    loading="lazy"
                    sx={styles.galleryImg}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </>
        ) : (
          <Box sx={styles.emptyState}>
            <Typography variant="body2" sx={styles.emptyStateText}>
              Screenshots will appear here.
            </Typography>
          </Box>
        )}
      </motion.div>
    </Layout>
  );
};

export default WorkProjectPage;
