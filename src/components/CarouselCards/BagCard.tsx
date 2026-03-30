import React from 'react';
import { Box, Typography } from '@mui/material';

import type { BagCardProps } from './BagCard.types';
import { styles } from './carouselCardsStyles';

const BAG_CARD_HEIGHT = 600;

const BagCard = ({ item, index }: BagCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Box
      role="listitem"
      sx={styles.imageCardContainer('auto', BAG_CARD_HEIGHT)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered((prev) => !prev)}
    >
      <Box
        component="img"
        src={item.imageUrl}
        alt={item.label ?? `Handmade bag ${index + 1}`}
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

export default BagCard;
