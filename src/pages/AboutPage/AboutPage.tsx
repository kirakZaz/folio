import { motion } from 'framer-motion';

import { Box, Typography } from '@mui/material';

import SectionHeader from '@/pages/HomePage/components/SectionHeader/SectionHeader.tsx';

import meImg from '@/shared/assets/me.png';
import { DEFAULT_TRANSITION, FADE_UP_VARIANTS } from '@/shared/constants/animation.constants';

import PortfolioLayout from '@/components/PortfolioLayout';

import { styles } from './AboutPage.styles';

const WHAT_YOU_GET = [
  "Code that doesn't fall apart a month later",
  "Interfaces that don't lag and don't frustrate",
  'Clean architecture — no chaos, no workarounds',
  "UX that's considered, not accidental",
  'Hands-on experience with modern tech, including AI and LLMs',
  'Fast onboarding with minimal friction',
  'Someone who thinks, not just executes',
];

const AboutPage = () => (
  <PortfolioLayout>
    <motion.div
      variants={FADE_UP_VARIANTS}
      initial="hidden"
      animate="visible"
      transition={DEFAULT_TRANSITION}
    >
      <SectionHeader index="03" label="About" />

      {/* Top: photo + bio */}
      <Box sx={styles.topSection}>
        <Box component="img" src={meImg} alt="Kira Zakirova" sx={styles.photo} />

        <Box>
          <Box sx={styles.textBlock}>
            <Typography sx={styles.name}>Hi, I&#39;m Kira.</Typography>

            <Typography sx={styles.bio}>
              I build frontend that you won&#39;t want to rewrite a week later.
            </Typography>

            <Typography sx={styles.bio}>
              I started out in design — because I loved visuals. Then I met CSS… and there was no
              going back. Turns out I care not just about how things look, but how they work. Since
              then, I don&#39;t choose between design and development — I bridge them.
            </Typography>

            <Typography sx={styles.bioBold}>
              10+ years in the industry taught me one thing: bad frontend isn&#39;t a bug — it&#39;s
              a systemic failure of thinking.
            </Typography>

            <Typography sx={styles.bio}>
              I don&#39;t do &#34;just make it work.&#34; I do fast, clear, stable, and no surprises
              in production.
            </Typography>

            <Typography sx={styles.bio}>
              I actively work with LLMs and AI tools — from product integrations to optimising
              development workflows. Not for the hype, but because this is already the new reality
              of interfaces.
            </Typography>

            <Typography sx={styles.bio}>
              Right now I&#39;m in Melbourne, studying game design and digging deeper into
              interactivity, user behaviour, and systems thinking. Born in Ukraine, lived in Israel,
              now here — which gave me a rare perspective: &#34;intuitive&#34; means something
              completely different depending on who you&#39;re designing for.
            </Typography>
          </Box>

          <Typography sx={styles.listHeading}>What you get working with me</Typography>

          <Box sx={styles.list}>
            {WHAT_YOU_GET.map((item) => (
              <Box key={item} sx={styles.listItem}>
                <Typography sx={styles.listDash}>—</Typography>
                <Typography sx={styles.listText}>{item}</Typography>
              </Box>
            ))}
          </Box>

          <Typography sx={styles.closing}>In short: I make sure users don&#39;t suffer.</Typography>
          <Typography sx={styles.closingAccent}>
            And that developers who come after me — don&#39;t either.
          </Typography>
        </Box>
      </Box>
    </motion.div>
  </PortfolioLayout>
);

export default AboutPage;
