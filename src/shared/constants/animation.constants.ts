import type { Variants, Transition } from 'framer-motion';

export const FADE_UP_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export const FADE_IN_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const SCALE_IN_VARIANTS: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

export const STAGGER_CONTAINER_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const DEFAULT_TRANSITION: Transition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
};

export const VIEWPORT_CONFIG = {
  once: true,
  margin: '-60px',
} as const;

export const SECTION_SCROLL_OFFSET_PX = 120;