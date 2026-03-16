import React from 'react';
import { Box, Typography } from '@mui/material';

import { COLOR_TOKENS } from '@/theme/themeTokens';
import type { DrawingItem } from '@/shared/constants/drawings.constants';
import { styles } from './carouselCardsStyles';

const DRAWING_CARD_WIDTH  = 220;
const DRAWING_CARD_HEIGHT = 300;

interface DrawingCardProps {
  item:  DrawingItem;
  index: number;
}

const DrawingCard = ({ item, index }: DrawingCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Box
      role="listitem"
      sx={styles.imageCardContainer(DRAWING_CARD_WIDTH, DRAWING_CARD_HEIGHT)}
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
          <Typography variant="caption" sx={{ color: COLOR_TOKENS.textPrimary }}>
            {item.label}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default DrawingCard;
