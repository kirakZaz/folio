import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import {
  STAGGER_CONTAINER_VARIANTS,
  SCALE_IN_VARIANTS,
  DEFAULT_TRANSITION,
  VIEWPORT_CONFIG,
} from '@/shared/constants/animation.constants';
import { COLOR_TOKENS } from '@/theme/themeTokens';
import type { AnimatedMoodBoardProps, MoodBoardItem } from './types';
import { styles } from './animatedMoodBoardStyles';

const ASPECT_RATIOS: Array<MoodBoardItem['aspectRatio']> = [
  'landscape', 'portrait', 'square', 'landscape', 'square', 'portrait',
];

const DEFAULT_PLACEHOLDER_COUNT = 5;

const MoodBoardCard = ({ item, index }: { item: MoodBoardItem; index: number }) => {
  const aspectRatio = item.aspectRatio ?? ASPECT_RATIOS[index % ASPECT_RATIOS.length] ?? 'square';

  return (
    <motion.div
      variants={SCALE_IN_VARIANTS}
      transition={{ ...DEFAULT_TRANSITION, delay: index * 0.07 }}
    >
      <Box sx={styles.card}>
        <Box sx={styles.aspectRatioBox(aspectRatio)}>
          {item.imageUrl ? (
            <Box
              component="img"
              src={item.imageUrl}
              alt={item.label ?? `Mood board image ${index + 1}`}
              loading="lazy"
              sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <Box sx={styles.placeholderInner}>
              <Typography
                variant="caption"
                sx={{ color: COLOR_TOKENS.textDisabled, textAlign: 'center', px: 1 }}
              >
                {item.label ?? `Image ${index + 1}`}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </motion.div>
  );
};

const AnimatedMoodBoard = ({
  items,
  placeholderCount = DEFAULT_PLACEHOLDER_COUNT,
}: AnimatedMoodBoardProps) => {
  const displayItems: MoodBoardItem[] = items
    ?? Array.from({ length: placeholderCount }, (_, index) => ({
        id:          `placeholder-${index}`,
        aspectRatio: ASPECT_RATIOS[index % ASPECT_RATIOS.length],
      }));

  return (
    <motion.div
      variants={STAGGER_CONTAINER_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
    >
      <Box sx={styles.grid}>
        {displayItems.map((item, index) => (
          <MoodBoardCard key={item.id} item={item} index={index} />
        ))}
      </Box>
    </motion.div>
  );
};

export default AnimatedMoodBoard;
