import React from 'react';
import { Box, Typography } from '@mui/material';

import { COLOR_TOKENS } from '@/theme/themeTokens';
import type { BagItem } from '@/shared/constants/bags.constants';
import { styles } from './carouselCardsStyles';

const BAG_CARD_WIDTH  = 600;
const BAG_CARD_HEIGHT = 600;

interface BagCardProps {
  item:  BagItem;
  index: number;
}

const BagCard = ({ item, index }: BagCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Box
      role="listitem"
      sx={styles.imageCardContainer(BAG_CARD_WIDTH, BAG_CARD_HEIGHT)}
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
          <Typography variant="caption" sx={{ color: COLOR_TOKENS.textPrimary }}>
            {item.label}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default BagCard;
