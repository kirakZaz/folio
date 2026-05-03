import React from 'react';

import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';

import { Box, Typography } from '@mui/material';

import SectionHeader from '@/pages/HomePage/components/SectionHeader/SectionHeader.tsx';

import meImg from '@/shared/assets/Me.png';
import { DEFAULT_TRANSITION, FADE_UP_VARIANTS } from '@/shared/constants/animation.constants';

import PortfolioLayout from '@/components/PortfolioLayout';

import { styles } from './AboutPage.styles';

// ── Data ──────────────────────────────────────────────────────────────────

const WHAT_YOU_GET = [
  'Code that stays solid over time',
  'Interfaces that feel smooth and responsive',
  'Clean structure, without unnecessary complexity',
  'Thoughtful UX, not accidental decisions',
  'Experience with modern tools, including AI and LLMs',
  'Easy collaboration and quick onboarding',
  'Someone who thinks through problems, not just executes tasks',
  'Pixel-perfect attention to design details',
];

// ── Animated counter ─────────────────────────────────────────────────────

const AnimatedCounter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;
    const duration = 1400;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// ── Constants ────────────────────────────────────────────────────────────

const SPRING = { stiffness: 50, damping: 18, mass: 0.6 };
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

// ── Page ──────────────────────────────────────────────────────────────────

const AboutPage = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, SPRING);
  const springY = useSpring(mouseY, SPRING);

  const handleMouseMove = React.useCallback(
    (event: React.MouseEvent) => {
      const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((event.clientX - centerX) * 0.06);
      mouseY.set((event.clientY - centerY) * 0.06);
    },
    [mouseX, mouseY],
  );

  const handleMouseLeave = React.useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <PortfolioLayout>
      <motion.div
        variants={FADE_UP_VARIANTS}
        initial="hidden"
        animate="visible"
        transition={DEFAULT_TRANSITION}
      >
        <SectionHeader index="03" label="About" />

        <Box sx={styles.page} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          {/* ── Hero ───────────────────────────────────────────────── */}
          <Box sx={styles.hero}>
            {/* Photo with ring + parallax */}
            <Box sx={styles.photoArea}>
              <motion.div
                style={{ x: springX, y: springY }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease }}
              >
                <Box sx={styles.photoOuter}>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    style={{ position: 'absolute', inset: -6 }}
                  >
                    <Box
                      sx={{
                        ...styles.photoRing,
                        borderStyle: 'dashed',
                        borderWidth: '1px',
                      }}
                    />
                  </motion.div>
                  <Box sx={styles.photoInner}>
                    <Box component="img" src={meImg} alt="Kira Zakirova" sx={styles.photo} />
                  </Box>
                </Box>
              </motion.div>
            </Box>

            {/* Name + tagline + stats */}
            <Box sx={styles.introBlock}>
              <Typography sx={styles.nameLine1}>
                <motion.span
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.25, ease }}
                  style={{ display: 'inline-block' }}
                >
                  Hi, I&#39;m
                </motion.span>
              </Typography>

              <Typography sx={styles.nameLine2}>
                <motion.span
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, ease }}
                  style={{ display: 'inline-block' }}
                >
                  <Box component="span" sx={styles.nameAccent}>Kira</Box>
                  <Box component="span" sx={{ color: '#EA5221' }}>.</Box>
                </motion.span>
              </Typography>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65, ease }}
              >
                <Typography sx={styles.tagline}>
                  I build frontend that people actually enjoy using — and developers don&#39;t hate
                  maintaining later.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8, ease }}
              >
                <Box sx={styles.statsRow}>
                  <Box sx={styles.statItem}>
                    <Typography sx={styles.statNumberAccent}>
                      <AnimatedCounter target={10} suffix="+" />
                    </Typography>
                    <Typography sx={styles.statLabel}>years</Typography>
                  </Box>
                  <Box sx={styles.statItem}>
                    <Typography sx={styles.statNumber}>
                      <AnimatedCounter target={8} />
                    </Typography>
                    <Typography sx={styles.statLabel}>companies</Typography>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Box>

          {/* ── Middle: bio + quote ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Box sx={styles.middle}>
              <Box>
                <Typography sx={styles.bioText}>
                  I started out in design, because I&#39;ve always been drawn to creativity. At some
                  point I met Web Development… and that was it. I realised I care just as much about how
                  things work as how they look. Since then, I&#39;ve been sitting right in between
                  design and development — connecting the two.
                </Typography>
                <Typography sx={styles.bioText}>
                  I also work a lot with AI and LLM tools — both in products and in my own workflow.
                  Right now I&#39;m based in Melbourne, studying game design and development at Torrens
                  University.
                </Typography>
              </Box>

              <Box sx={styles.quoteWrap}>
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.7, delay: 1.1, ease }}
                  style={{ position: 'absolute', left: 0, top: 0, width: 2, height: '100%', transformOrigin: 'top' }}
                >
                  <Box sx={styles.quoteBar} />
                </motion.div>
                <Typography sx={styles.quoteText}>
                  After 10+ years in the industry, I&#39;ve learned that messy frontend usually
                  isn&#39;t about bugs — it&#39;s about decisions. So I try to get those right from
                  the start.
                </Typography>
              </Box>
            </Box>
          </motion.div>

          {/* ── Bottom: what you get — cards ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2, ease }}
          >
            <Box sx={styles.bottom}>
              <Typography sx={styles.bottomHeading}>What it&#39;s like to work with me</Typography>
              <Box sx={styles.cardsGrid}>
                {WHAT_YOU_GET.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.3 + index * 0.07, ease }}
                  >
                    <Box sx={styles.card}>
                      <Typography sx={styles.cardIndex}>
                        {String(index + 1).padStart(2, '0')}
                      </Typography>
                      <Typography sx={styles.cardText}>{item}</Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </PortfolioLayout>
  );
};

export default AboutPage;
