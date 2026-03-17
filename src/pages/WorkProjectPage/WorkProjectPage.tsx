import {
  Box,
  Typography,
  Stack,
  Button,
  Chip,
  Grid,
  ImageList,
  ImageListItem,
  Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import Layout from '@/components/Layout';
import { WORK_PROJECTS_DATA } from '@/shared/constants/work-projects.constants';
import { FADE_UP_VARIANTS, DEFAULT_TRANSITION } from '@/shared/constants/animation.constants';
import { COLOR_TOKENS } from '@/theme/themeTokens';
import { ROUTES } from '@/shared/constants/routes.constants';

const WorkProjectPage = () => {
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId: string }>();
  const project = WORK_PROJECTS_DATA.find((workProject) => workProject.id === projectId);

  const handleBackToHome = () => navigate(ROUTES.HOME);

  const yearRange =
    project?.yearEnd === 'present'
      ? `${project.yearStart} – Present`
      : `${project?.yearStart} – ${project?.yearEnd}`;

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

  return (
    <Layout maxWidth="lg" showNavBar>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={FADE_UP_VARIANTS}
        transition={DEFAULT_TRANSITION}
      >
        {/* ── Back button ─────────────────────────────────────────── */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={handleBackToHome}
          sx={{
            color: COLOR_TOKENS.textSecondary,
            mb: 4,
            pl: 0,
            '&:hover': {
              backgroundColor: 'transparent',
              color: COLOR_TOKENS.textPrimary,
            },
          }}
        >
          Back
        </Button>

        {/* ── Header ──────────────────────────────────────────────── */}
        <Stack spacing={2} sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip
              label={yearRange}
              size="small"
              sx={{
                color: COLOR_TOKENS.accentPrimary,
                backgroundColor: 'rgba(95,173,122,0.1)',
                border: '1px solid rgba(95,173,122,0.2)',
              }}
            />
            {project.teamSize && (
              <Chip
                label={`Team of ${project.teamSize}`}
                size="small"
                sx={{
                  color: COLOR_TOKENS.textSecondary,
                  backgroundColor: COLOR_TOKENS.backgroundSubtle,
                }}
              />
            )}
          </Stack>

          <Typography variant="h2" component="h1">
            {project.title}
          </Typography>

          <Stack direction="row" spacing={0.5} alignItems="center">
            <Typography variant="body1" sx={{ color: COLOR_TOKENS.textSecondary }}>
              {project.role}
            </Typography>
            <Typography variant="body1" sx={{ color: COLOR_TOKENS.textDisabled }}>
              ·
            </Typography>
            <Typography variant="body1" sx={{ color: COLOR_TOKENS.textSecondary }}>
              {project.company}
            </Typography>
          </Stack>

          <Typography variant="body1" sx={{ color: COLOR_TOKENS.textSecondary, maxWidth: 680 }}>
            {project.description}
          </Typography>

          {/* External links */}
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
                sx={{
                  color: COLOR_TOKENS.textSecondary,
                  borderColor: COLOR_TOKENS.borderDefault,
                  '&:hover': {
                    borderColor: COLOR_TOKENS.textPrimary,
                    color: COLOR_TOKENS.textPrimary,
                  },
                }}
              >
                GitHub
              </Button>
            )}
          </Stack>
        </Stack>

        <Divider sx={{ mb: 5, borderColor: COLOR_TOKENS.borderSubtle }} />

        {/* ── Tech stack + achievements + challenges ───────────────── */}
        <Grid container spacing={5} sx={{ mb: 6 }}>
          {/* Tech stack */}
          {project.techStack && project.techStack.length > 0 && (
            <Grid item xs={12} md={4}>
              <Typography
                variant="caption"
                sx={{
                  color: COLOR_TOKENS.textSecondary,
                  letterSpacing: '0.08em',
                  mb: 2,
                  display: 'block',
                }}
              >
                TECH STACK
              </Typography>
              <Stack direction="row" flexWrap="wrap" sx={{ gap: 1 }}>
                {project.techStack.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{
                      color: COLOR_TOKENS.textSecondary,
                      backgroundColor: COLOR_TOKENS.backgroundSubtle,
                      border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
                    }}
                  />
                ))}
              </Stack>
            </Grid>
          )}

          {/* Achievements */}
          {project.achievements && project.achievements.length > 0 && (
            <Grid item xs={12} md={4}>
              <Typography
                variant="caption"
                sx={{
                  color: COLOR_TOKENS.textSecondary,
                  letterSpacing: '0.08em',
                  mb: 2,
                  display: 'block',
                }}
              >
                KEY ACHIEVEMENTS
              </Typography>
              <Stack spacing={1.5}>
                {project.achievements.map((achievement, achievementIndex) => (
                  <Stack key={achievementIndex} direction="row" spacing={1} alignItems="flex-start">
                    <CheckCircleOutlineIcon
                      sx={{
                        fontSize: 16,
                        color: COLOR_TOKENS.accentPrimary,
                        mt: '2px',
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: COLOR_TOKENS.textSecondary, lineHeight: 1.6 }}
                    >
                      {achievement}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          )}

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <Grid item xs={12} md={4}>
              <Typography
                variant="caption"
                sx={{
                  color: COLOR_TOKENS.textSecondary,
                  letterSpacing: '0.08em',
                  mb: 2,
                  display: 'block',
                }}
              >
                CHALLENGES & SOLUTIONS
              </Typography>
              <Stack spacing={1.5}>
                {project.challenges.map((challenge, challengeIndex) => (
                  <Stack key={challengeIndex} direction="row" spacing={1} alignItems="flex-start">
                    <LightbulbOutlinedIcon
                      sx={{
                        fontSize: 16,
                        color: COLOR_TOKENS.textSecondary,
                        mt: '2px',
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: COLOR_TOKENS.textSecondary, lineHeight: 1.6 }}
                    >
                      {challenge}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          )}
        </Grid>

        {/* ── Screenshots / gallery ───────────────────────────────── */}
        {project.screenshots && project.screenshots.length > 0 ? (
          <>
            <Typography
              variant="caption"
              sx={{
                color: COLOR_TOKENS.textSecondary,
                letterSpacing: '0.08em',
                mb: 3,
                display: 'block',
              }}
            >
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
                    sx={{ borderRadius: 2, width: '100%', display: 'block' }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </>
        ) : (
          <Box
            sx={{
              minHeight: 180,
              border: `1px dashed ${COLOR_TOKENS.borderDefault}`,
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLOR_TOKENS.backgroundPaper,
            }}
          >
            <Typography variant="body2" sx={{ color: COLOR_TOKENS.textDisabled }}>
              Screenshots will appear here.
            </Typography>
          </Box>
        )}
      </motion.div>
    </Layout>
  );
};

export default WorkProjectPage;
