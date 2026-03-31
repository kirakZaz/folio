import React from 'react';
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';

import { Box, Chip, Stack, Typography } from '@mui/material';

import SectionHeader from '@/pages/HomePage/components/SectionHeader/SectionHeader.tsx';

import {
  DEFAULT_TRANSITION,
  FADE_UP_VARIANTS,
  STAGGER_CONTAINER_VARIANTS,
  VIEWPORT_CONFIG,
} from '@/shared/constants/animation.constants';
import { buildWorkProjectRoute } from '@/shared/constants/routes.constants';
import { WORK_PROJECTS_DATA } from '@/shared/constants/work-projects.constants';

import { BENTO_CONFIG, CARD_ACCENTS } from './WebProjectsSection.constants';
import { styles } from './WebProjectsSection.styles';
import type { BentoCardProps } from './WebProjectsSection.types';

// MotionBox — bridges framer-motion and MUI sx so grid children get responsive colSpan/rowSpan
const MotionBox = motion(Box);

// ─── BentoCard ────────────────────────────────────────────────────────────────
const BentoCard = React.memo(function BentoCard({ projectIndex, colSpan, rowSpan, animIndex }: BentoCardProps) {
  const navigate = useNavigate();
  const project = WORK_PROJECTS_DATA[projectIndex];
  const [isHovered, setIsHovered] = React.useState(false);

  if (!project) return null;

  const isFeatured = colSpan >= 2 && rowSpan >= 2;
  const isWide = colSpan >= 2 && rowSpan === 1;
  const isSmall = colSpan === 1 && rowSpan === 1;
  const colors = CARD_ACCENTS[projectIndex % CARD_ACCENTS.length];

  const yearRange =
    project.yearEnd === 'present'
      ? `${project.yearStart} – present`
      : `${project.yearStart} – ${project.yearEnd}`;

  const techSliceCount = isFeatured ? 4 : isWide ? 3 : 2;

  return (
    <MotionBox
      variants={FADE_UP_VARIANTS}
      transition={{ ...DEFAULT_TRANSITION, delay: animIndex * 0.06 }}
      sx={styles.gridMotionBox(colSpan, rowSpan)}
    >
      <Box
        role="article"
        aria-label={`${project.title} at ${project.company}`}
        onClick={() => navigate(buildWorkProjectRoute(project.id))}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={styles.cardWrapper(isHovered, isFeatured, rowSpan, colors.bg, colors.accent)}
      >
        {/* Top row: logo + year badge */}
        <Box sx={styles.topRow}>
          {project.coverImage ? (
            <Box
              component="img"
              src={project.coverImage}
              alt={`${project.company} logo`}
              loading="lazy"
              sx={styles.logoImg(isFeatured, isHovered)}
            />
          ) : (
            <Box sx={styles.logoFallback(isFeatured, colors.accent)}>
              <Typography sx={styles.logoFallbackText(isFeatured, colors.accent)}>
                {project.title.charAt(0)}
              </Typography>
            </Box>
          )}

          {/* Year / status badge */}
          <Box sx={styles.yearBadge(project.yearEnd === 'present', colors.accent)}>
            <Typography sx={styles.yearBadgeText(project.yearEnd === 'present', colors.accent)}>
              {yearRange}
            </Typography>
          </Box>
        </Box>

        {/* Middle title block — only for featured (2x2) cards */}
        {isFeatured && (
          <Box>
            <Typography sx={styles.featuredTitle}>{project.title}</Typography>
            <Typography sx={styles.featuredRole(colors.accent)}>{project.role}</Typography>
          </Box>
        )}

        {/* Bottom info block */}
        <Box>
          {!isFeatured && (
            <Typography variant="body2" sx={styles.cardTitle}>
              {project.title}
            </Typography>
          )}

          <Typography sx={styles.companyText(isHovered)}>{project.company}</Typography>

          {/* Hover extras — visible for ALL card sizes */}
          {isHovered && (
            <Box sx={styles.hoverExtras}>
              {project.description && (
                <Typography sx={styles.descriptionText(isSmall, isFeatured)}>
                  {project.description}
                </Typography>
              )}

              {project.techStack && project.techStack.length > 0 && (
                <Stack direction="row" flexWrap="wrap" sx={styles.techStack}>
                  {project.techStack.slice(0, techSliceCount).map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={styles.techChip(colors.accent)}
                    />
                  ))}
                </Stack>
              )}
            </Box>
          )}
        </Box>

        {/* Accent line — bottom left, expands on hover */}
        <Box sx={styles.accentLine(isHovered, colors.accent)} />
      </Box>
    </MotionBox>
  );
});

// ─── Section ──────────────────────────────────────────────────────────────────
const WebProjectsSection = () => (
  <Box component="section" aria-label="Web Projects" sx={styles.section}>
    <SectionHeader
      index="01"
      label="Work experience"
      count={`${WORK_PROJECTS_DATA.length} projects`}
    />

    <motion.div
      variants={STAGGER_CONTAINER_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
    >
      <Box sx={styles.grid}>
        {BENTO_CONFIG.map((config, index) => (
          <BentoCard
            key={WORK_PROJECTS_DATA[index]?.id ?? index}
            projectIndex={index}
            colSpan={config.colSpan}
            rowSpan={config.rowSpan}
            animIndex={index}
          />
        ))}
      </Box>
    </motion.div>
  </Box>
);

export default WebProjectsSection;
