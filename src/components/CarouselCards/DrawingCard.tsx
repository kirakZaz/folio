import React from 'react';

import { Box, Typography } from '@mui/material';

import { styles } from './carouselCardsStyles';
import type { DrawingCardProps } from './DrawingCard.types';

const DRAWING_CARD_HEIGHT = 650;

const DrawingCard = ({ item, index }: DrawingCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Box
      role="listitem"
      sx={styles.imageCardContainer('auto', DRAWING_CARD_HEIGHT)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered((prev) => !prev)}
    >
      <Box
        component="img"
        src={item.imageUrl}
        alt={item.label ?? `Drawing ${index + 1}`}
        loading="lazy"
        sx={styles.imageCardImg}
      />
      {item.label && (
        <Box className={isHovered ? 'visible' : ''} sx={styles.imageCardOverlay}>
          <Typography variant="caption" sx={styles.imageCardOverlayText}>
            {item.label}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default DrawingCard;
