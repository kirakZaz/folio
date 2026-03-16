import React from 'react';
import { Box, Typography, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';

import {
  STAGGER_CONTAINER_VARIANTS,
  FADE_UP_VARIANTS,
  DEFAULT_TRANSITION,
  VIEWPORT_CONFIG,
} from '@/shared/constants/animation.constants';
import { COLOR_TOKENS } from '@/theme/themeTokens';
import type { WorksSectionProps, WorkItem } from './WorksSection.types';
import {
  worksGridSx,
  workCardSx,
  workCardImageAreaSx,
  workCardPlaceholderSx,
  workCardDetailsSx,
  workCardMetaSx,
} from './WorksSection.styles';

// Placeholder data — replace with real work items when ready
const PLACEHOLDER_WORKS: WorkItem[] = [
  { id: 'work-1', title: 'Project Title', category: 'Game Design',  year: '2024', tags: ['Unity', 'C#'] },
  { id: 'work-2', title: 'Project Title', category: 'Web Dev',      year: '2024', tags: ['React', 'TypeScript'] },
  { id: 'work-3', title: 'Project Title', category: 'UI/UX',        year: '2023', tags: ['Figma'] },
];

const WorkCard = ({ item, index }: { item: WorkItem; index: number }) => (
  <motion.div
    variants={FADE_UP_VARIANTS}
    transition={{ ...DEFAULT_TRANSITION, delay: index * 0.1 }}
  >
    <Box sx={workCardSx}>
      <Box sx={workCardImageAreaSx}>
        {item.imageUrl ? (
          <Box
            component="img"
            src={item.imageUrl}
            alt={item.title}
            loading="lazy"
            sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <Box sx={workCardPlaceholderSx}>
            <Typography variant="caption" sx={{ color: COLOR_TOKENS.textDisabled }}>
              Cover image
            </Typography>
          </Box>
        )}

        <Box className="work-card-details" sx={workCardDetailsSx}>
          {item.description && (
            <Typography variant="body2" sx={{ color: COLOR_TOKENS.textPrimary, mb: 1 }}>
              {item.description}
            </Typography>
          )}
        </Box>
      </Box>

      <Box sx={workCardMetaSx}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.25 }}>
              {item.title}
            </Typography>
            <Typography variant="caption" sx={{ color: COLOR_TOKENS.textSecondary }}>
              {item.category}{item.year ? ` · ${item.year}` : ''}
            </Typography>
          </Box>
        </Stack>

        {item.tags && item.tags.length > 0 && (
          <Stack direction="row" spacing={0.5} flexWrap="wrap" sx={{ mt: 1.5, gap: 0.5 }}>
            {item.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  height:          20,
                  fontSize:        '0.65rem',
                  color:           COLOR_TOKENS.textSecondary,
                  backgroundColor: COLOR_TOKENS.backgroundSubtle,
                  border:          `1px solid ${COLOR_TOKENS.borderSubtle}`,
                }}
              />
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  </motion.div>
);

const WorksSection = ({ items = PLACEHOLDER_WORKS }: WorksSectionProps) => {
  return (
    <Box component="section" aria-label="Selected works">
      <motion.div
        variants={STAGGER_CONTAINER_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_CONFIG}
      >
        <Box sx={worksGridSx}>
          {items.map((workItem, index) => (
            <WorkCard key={workItem.id} item={workItem} index={index} />
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export default WorksSection;
