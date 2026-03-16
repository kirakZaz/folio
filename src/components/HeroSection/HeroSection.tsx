import { Box, Typography, Avatar, Stack, Divider } from '@mui/material';
import { motion } from 'framer-motion';

import {
  FADE_UP_VARIANTS,
  STAGGER_CONTAINER_VARIANTS,
  DEFAULT_TRANSITION,
} from '@/shared/constants/animation.constants';
import type { HeroSectionProps } from './types';
import { styles } from './heroSectionStyles';

const HeroSection = ({ photoSrc }: HeroSectionProps) => {
  return (
    <Box component="section" aria-label="Introduction" sx={styles.heroWrapper}>
      <motion.div
        variants={STAGGER_CONTAINER_VARIANTS}
        initial="hidden"
        animate="visible"
        style={{ width: '100%' }}
      >
        <motion.div variants={FADE_UP_VARIANTS} transition={DEFAULT_TRANSITION}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={4}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            sx={{ mb: 4 }}
          >
            <Avatar src={photoSrc} alt="Kira" sx={styles.avatar}>
              K
            </Avatar>
            <Box>
              <Typography
                variant="caption"
                sx={{ color: 'text.secondary', display: 'block', mb: 1 }}
              >
                Portfolio · CDM303A
              </Typography>
              <Typography variant="h1" component="h1" color="primary.main">
                Hi, I&apos;m Kira.
              </Typography>
            </Box>
          </Stack>
        </motion.div>

        <motion.div variants={FADE_UP_VARIANTS} transition={{ ...DEFAULT_TRANSITION, delay: 0.15 }}>
          <Stack spacing={2} sx={{ mb: 4 }}>
            <Typography variant="h3" component="p" sx={styles.subheading}>
              Software Developer &amp; Game Design Student.
            </Typography>
            <Typography variant="body1" sx={styles.description}>
              This is a living document of my creative and academic journey — exploring who I am as
              a developer, a designer, and a storyteller.
            </Typography>
            <Typography variant="body1" sx={styles.description}>
              Each section builds on the last.
            </Typography>
          </Stack>
        </motion.div>
      </motion.div>

      <Divider sx={styles.divider} />
    </Box>
  );
};

export default HeroSection;
