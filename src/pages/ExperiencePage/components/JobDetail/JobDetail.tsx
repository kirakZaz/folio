import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Box, Button, Chip, Stack, Tooltip, Typography } from '@mui/material';

import { DUAL_ICONS, SKILL_BRAND_COLORS, SKILL_ICON_MAP } from '@/shared/constants/skill-icons.constants';
import type { WorkProject } from '@/shared/constants/work-projects.constants';

import { styles } from './JobDetail.styles';

interface JobDetailProps {
  project: WorkProject;
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

const DETAIL_VARIANTS = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const JobDetail = React.memo(function JobDetail({
  project,
  index,
  total,
  onPrev,
  onNext,
}: JobDetailProps) {
  const periodLabel =
    project.yearEnd === 'present'
      ? `${project.yearStart} — Present`
      : `${project.yearStart} — ${project.yearEnd}`;

  return (
    <Box sx={styles.panel}>
      <Box sx={styles.scrollArea}>
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={DETAIL_VARIANTS}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {/* Header */}
            <Box sx={styles.header}>
              <Box sx={styles.topRow}>
                <Box sx={styles.logoWrapper}>
                  {project.coverImage ? (
                    <Box
                      component="img"
                      src={project.coverImage}
                      alt={`${project.company} logo`}
                      loading="lazy"
                      sx={styles.logoImg}
                    />
                  ) : (
                    <Typography sx={styles.logoFallbackText}>
                      {project.company.charAt(0)}
                    </Typography>
                  )}
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end', gap: 3 }}>
                  <Chip label={periodLabel} size="small" sx={styles.periodChip} />

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
                </Box>
              </Box>

              <Typography sx={styles.company}>{project.company}</Typography>

              <Typography sx={styles.role}>{project.role}</Typography>

              <Box sx={styles.metaRow}>
                {project.teamSize && (
                  <Typography sx={styles.metaText}>Team of {project.teamSize}</Typography>
                )}
              </Box>

              <Typography sx={styles.description}>{project.description}</Typography>
            </Box>

            {/* Tech stack */}
            {project.techStack && project.techStack.length > 0 && (
              <Box sx={styles.sectionBlock}>
                <Typography sx={styles.sectionCaption}>Tech Stack</Typography>
                <Box sx={styles.techStack}>
                  {project.techStack.map((tech) => {
                    const iconSrc = SKILL_ICON_MAP[tech];
                    const dual = DUAL_ICONS[tech];

                    if (dual) {
                      return (
                        <Tooltip key={tech} title={tech} arrow placement="top">
                          <Box sx={styles.dualIconWrap}>
                            <Box component="img" src={dual.mono} alt={tech} sx={{ ...styles.dualIconLayer, opacity: 0.75 }} />
                            <Box component="img" src={dual.hover} alt="" sx={{ ...styles.dualIconLayer, opacity: 0 }} />
                          </Box>
                        </Tooltip>
                      );
                    }

                    return iconSrc ? (
                      <Tooltip key={tech} title={tech} arrow placement="top">
                        <Box
                          role="img"
                          aria-label={tech}
                          sx={styles.techIcon(iconSrc, SKILL_BRAND_COLORS[tech])}
                        />
                      </Tooltip>
                    ) : (
                      <Chip key={tech} label={tech} size="small" sx={styles.techChip} />
                    );
                  })}
                </Box>
              </Box>
            )}

            {/* Achievements */}
            {project.achievements && project.achievements.length > 0 && (
              <Box sx={styles.sectionBlock}>
                <Typography sx={styles.sectionCaption}>Key Achievements</Typography>
                {project.achievements.map((achievement, achievementIndex) => (
                  <Box key={achievementIndex} sx={styles.listItem}>
                    <CheckCircleOutlineIcon sx={styles.listBullet(true)} />
                    <Typography sx={styles.listText}>{achievement}</Typography>
                  </Box>
                ))}
              </Box>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <Box sx={styles.sectionBlock}>
                <Typography sx={styles.sectionCaption}>Challenges & Solutions</Typography>
                {project.challenges.map((challenge, challengeIndex) => (
                  <Box key={challengeIndex} sx={styles.listItem}>
                    <LightbulbOutlinedIcon sx={styles.listBullet(false)} />
                    <Typography sx={styles.listText}>{challenge}</Typography>
                  </Box>
                ))}
              </Box>
            )}
          </motion.div>
        </AnimatePresence>
      </Box>

      {/* Navigation */}
      <Box sx={styles.nav}>
        <Box component="button" onClick={onPrev} sx={styles.navButton(index === 0)}>
          <NavigateBeforeIcon sx={{ fontSize: 16, color: 'inherit' }} />
          <Typography sx={styles.navButtonLabel}>Prev</Typography>
        </Box>

        <Typography sx={styles.navCounter}>
          {index + 1} / {total}
        </Typography>

        <Box component="button" onClick={onNext} sx={styles.navButton(index === total - 1)}>
          <Typography sx={styles.navButtonLabel}>Next</Typography>
          <NavigateNextIcon sx={{ fontSize: 16, color: 'inherit' }} />
        </Box>
      </Box>
    </Box>
  );
});

export default JobDetail;
