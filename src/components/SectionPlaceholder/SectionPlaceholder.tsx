import { Box, Typography, Stack, Chip } from '@mui/material';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { motion } from 'framer-motion';

import {
  FADE_UP_VARIANTS,
  DEFAULT_TRANSITION,
  VIEWPORT_CONFIG,
} from '@/shared/constants/animation.constants';
import { formatSectionNumber } from '@/shared/utils/format.utils';
import { COLOR_TOKENS } from '@/theme/themeTokens';
import type { SectionPlaceholderProps } from './types';
import { styles } from './sectionPlaceholderStyles';

const SectionPlaceholder = ({
  sectionNumber,
  title,
  description,
  children,
}: SectionPlaceholderProps) => {
  return (
    <Box
      component="section"
      data-testid={`section-placeholder-${sectionNumber}`}
      sx={styles.sectionWrapper}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_CONFIG}
        variants={FADE_UP_VARIANTS}
        transition={DEFAULT_TRANSITION}
      >
        <Stack spacing={3}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="caption" sx={styles.sectionNumber}>
              {formatSectionNumber(sectionNumber)}
            </Typography>
            <Typography variant="h3" component="h2">
              {title}
            </Typography>
            <Chip
              label="Placeholder"
              size="small"
              icon={<EditNoteOutlinedIcon sx={{ fontSize: '0.75rem !important' }} />}
              sx={styles.placeholderChip}
            />
          </Stack>

          <Typography variant="body2" sx={styles.description}>
            {description}
          </Typography>

          {children ?? (
            <Box sx={styles.placeholderBox}>
              <Typography variant="body2" sx={{ color: COLOR_TOKENS.textDisabled }}>
                Content for &ldquo;{title}&rdquo; goes here.
              </Typography>
            </Box>
          )}
        </Stack>
      </motion.div>
    </Box>
  );
};

export default SectionPlaceholder;
