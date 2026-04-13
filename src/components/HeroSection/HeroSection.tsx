import { motion } from 'framer-motion';

import { Avatar, Box, Divider, Stack, Typography } from '@mui/material';

import {
  DEFAULT_TRANSITION,
  FADE_UP_VARIANTS,
  STAGGER_CONTAINER_VARIANTS,
} from '@/shared/constants/animation.constants';

import { styles } from './heroSectionStyles';
import type { HeroSectionProps } from './types';

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
            sx={styles.stackHeader}
          >
            <Avatar src={photoSrc} alt="Kira" sx={styles.avatar}>
              K
            </Avatar>
            <Box>
              <Typography variant="caption" sx={styles.captionText}>
                Portfolio · CDM303A
              </Typography>
              <Typography variant="h1" component="h1" sx={styles.heading}>
                Hi, I&apos;m Kira.
              </Typography>
            </Box>
          </Stack>
        </motion.div>

        <motion.div variants={FADE_UP_VARIANTS} transition={{ ...DEFAULT_TRANSITION, delay: 0.15 }}>
          <Stack spacing={2} sx={styles.stackBody}>
            <Typography variant="h3" component="p" sx={styles.subheading}>
              Software Developer &amp; Game Design Student.
            </Typography>
            <Typography variant="body1" sx={styles.description}>
              This is a living document of my creative and academic degree — exploring who I am as
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
