import React from 'react';
import { Box, Typography, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';
import { WORK_PROJECTS_DATA } from '@/shared/constants/work-projects.constants';
import { buildWorkProjectRoute } from '@/shared/constants/routes.constants';
import {
  FADE_UP_VARIANTS,
  STAGGER_CONTAINER_VARIANTS,
  DEFAULT_TRANSITION,
  VIEWPORT_CONFIG,
} from '@/shared/constants/animation.constants';
import SectionHeader from '@/pages/HomePage/components/SectionHeader/SectionHeader.tsx';

// ─── Bento layout config ──────────────────────────────────────────────────────
// Each entry maps 1:1 to WORK_PROJECTS_DATA by index order.
// colSpan / rowSpan refer to a 4-column CSS grid (desktop only).
const BENTO_CONFIG = [
  { colSpan: 2, rowSpan: 1 }, // AXO Tech      — wide, single row
  { colSpan: 2, rowSpan: 1 }, // SharePass     — wide, single row
  { colSpan: 1, rowSpan: 1 }, // Wowie
  { colSpan: 1, rowSpan: 1 }, // Just Eat
  { colSpan: 1, rowSpan: 1 }, // Roundtrip
  { colSpan: 1, rowSpan: 1 }, // XMPie
  { colSpan: 1, rowSpan: 1 }, // Beehive
  { colSpan: 1, rowSpan: 1 }, // e-shop
] as const;

const ROW_HEIGHT = 160;

const CARD_ACCENTS = [
  { bg: '#EAEAED', accent: '#6B5CE7' }, // AXO         — purple
  { bg: '#EDECEA', accent: '#FF2F92' }, // SharePass   — magenta
  { bg: '#EAF0EA', accent: '#22C55E' }, // Wowie       — green
  { bg: '#F0EAE9', accent: '#FF7A18' }, // Just Eat    — orange
  { bg: '#EEEAE9', accent: '#E85D4A' }, // Roundtrip   — red
  { bg: '#EAF0EE', accent: '#0EA5E9' }, // XMPie       — blue
  { bg: '#ECEAE9', accent: '#9B8EA8' }, // Beehive     — mauve
  { bg: '#EAF0EC', accent: '#16A34A' }, // e-shop      — emerald
];

// ─── Types ────────────────────────────────────────────────────────────────────
interface BentoCardProps {
  projectIndex: number;
  colSpan: number;
  rowSpan: number;
  animIndex: number;
}

// MotionBox — bridges framer-motion and MUI sx so grid children get responsive colSpan/rowSpan
const MotionBox = motion(Box);

// ─── BentoCard ────────────────────────────────────────────────────────────────
const BentoCard = ({ projectIndex, colSpan, rowSpan, animIndex }: BentoCardProps) => {
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

  return (
    <MotionBox
      variants={FADE_UP_VARIANTS}
      transition={{ ...DEFAULT_TRANSITION, delay: animIndex * 0.06 }}
      sx={{
        // Mobile: always single column/row — colSpan ignored
        // Desktop: respect BENTO_CONFIG colSpan/rowSpan
        gridColumn: { xs: 'span 1', md: `span ${colSpan}` },
        gridRow: { xs: 'span 1', md: `span ${rowSpan}` },
      }}
    >
      <Box
        role="article"
        aria-label={`${project.title} at ${project.company}`}
        onClick={() => navigate(buildWorkProjectRoute(project.id))}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          minHeight: { xs: 140, md: ROW_HEIGHT * rowSpan + (rowSpan - 1) * 16 },
          borderRadius: '12px',
          overflow: 'hidden',
          cursor: 'pointer',
          backgroundColor: colors.bg,
          border: `1px solid ${isHovered ? colors.accent + '40' : COLOR_TOKENS.borderSubtle}`,
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
          boxShadow: isHovered
            ? `0 12px 40px ${colors.accent}18, 0 2px 8px rgba(0,0,0,0.06)`
            : '0 1px 3px rgba(0,0,0,0.04)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: isFeatured ? 2.5 : 2,
        }}
      >
        {/* Top row: logo + year badge */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          {project.coverImage ? (
            <Box
              component="img"
              src={project.coverImage}
              alt={`${project.company} logo`}
              loading="lazy"
              sx={{
                height: isFeatured ? 36 : 28,
                maxWidth: isFeatured ? 100 : 80,
                objectFit: 'contain',
                transition: 'opacity 200ms ease',
                opacity: isHovered ? 0.7 : 1,
              }}
            />
          ) : (
            <Box
              sx={{
                width: isFeatured ? 40 : 32,
                height: isFeatured ? 40 : 32,
                borderRadius: '8px',
                backgroundColor: colors.accent + '20',
                border: `1px solid ${colors.accent}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                sx={{
                  fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
                  fontSize: isFeatured ? '16px' : '13px',
                  color: colors.accent,
                  fontWeight: 600,
                }}
              >
                {project.title.charAt(0)}
              </Typography>
            </Box>
          )}

          {/* Year / status badge */}
          <Box
            sx={{
              px: 1,
              py: '3px',
              borderRadius: '4px',
              backgroundColor:
                project.yearEnd === 'present' ? colors.accent + '15' : 'rgba(0,0,0,0.05)',
              border: `0.5px solid ${
                project.yearEnd === 'present' ? colors.accent + '35' : 'rgba(0,0,0,0.1)'
              }`,
            }}
          >
            <Typography
              sx={{
                fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
                fontSize: '8px',
                color: project.yearEnd === 'present' ? colors.accent : COLOR_TOKENS.textDisabled,
                letterSpacing: '0.1em',
              }}
            >
              {yearRange}
            </Typography>
          </Box>
        </Box>

        {/* Middle title block — only for featured (2x2) cards */}
        {isFeatured && (
          <Box>
            <Typography
              sx={{
                fontSize: '1.6rem',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: COLOR_TOKENS.textPrimary,
                mb: 0.5,
              }}
            >
              {project.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
                fontSize: '9px',
                color: colors.accent,
                letterSpacing: '0.1em',
              }}
            >
              {project.role}
            </Typography>
          </Box>
        )}

        {/* Bottom info block */}
        <Box>
          {!isFeatured && (
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                lineHeight: 1.3,
                mb: '2px',
                color: COLOR_TOKENS.textPrimary,
              }}
            >
              {project.title}
            </Typography>
          )}

          <Typography
            sx={{
              fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
              fontSize: '9px',
              color: COLOR_TOKENS.textSecondary,
              letterSpacing: '0.06em',
              mb: isHovered ? 1 : 0,
              transition: 'margin 200ms ease',
            }}
          >
            {project.company}
          </Typography>

          {/* Hover extras — visible for ALL card sizes */}
          {isHovered && (
            <Box sx={{ opacity: 1, transition: 'opacity 200ms ease' }}>
              {project.description && (
                <Typography
                  sx={{
                    textTransform: 'none',
                    fontSize: isSmall ? '0.65rem' : '0.7rem',
                    color: COLOR_TOKENS.textSecondary,
                    display: '-webkit-box',
                    WebkitLineClamp: isSmall ? 2 : isFeatured ? 2 : 1,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    lineHeight: 1.5,
                    mb: 0.75,
                  }}
                >
                  {project.description}
                </Typography>
              )}

              {project.techStack && project.techStack.length > 0 && (
                <Stack direction="row" flexWrap="wrap" sx={{ gap: 0.5, mt: 0.5 }}>
                  {project.techStack.slice(0, isFeatured ? 4 : isWide ? 3 : 2).map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        height: 15,
                        fontSize: '0.58rem',
                        color: colors.accent,
                        backgroundColor: colors.accent + '10',
                        border: `0.5px solid ${colors.accent}30`,
                        '& .MuiChip-label': { px: '6px' },
                      }}
                    />
                  ))}
                </Stack>
              )}
            </Box>
          )}
        </Box>

        {/* Accent line — bottom left, expands on hover */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: isHovered ? '100%' : '40%',
            height: '2px',
            backgroundColor: colors.accent,
            opacity: isHovered ? 0.5 : 0.25,
            transition: 'width 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease',
            borderRadius: '0 0 0 12px',
          }}
        />
      </Box>
    </MotionBox>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────
const WebProjectsSection = () => (
  <Box component="section" aria-label="Web Projects" sx={{ minHeight: '80vh' }}>
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
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
          gridAutoRows: { xs: 'auto', md: `${ROW_HEIGHT}px` },
          gap: '16px',
        }}
      >
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
