import { motion } from 'framer-motion';

import { Box, Typography } from '@mui/material';

import SectionHeader from '@/pages/HomePage/components/SectionHeader/SectionHeader.tsx';

import meImg from '@/shared/assets/Me.png';
import { DEFAULT_TRANSITION, FADE_UP_VARIANTS } from '@/shared/constants/animation.constants';

import PortfolioLayout from '@/components/PortfolioLayout';

import { styles } from './AboutPage.styles';

const WHAT_YOU_GET = [
  'Code that stays solid over time',
  'Interfaces that feel smooth and responsive',
  'Clean structure, without unnecessary complexity',
  'Thoughtful UX, not accidental decisions',
  'Experience with modern tools, including AI and LLMs',
  'Easy collaboration and quick onboarding',
  'Someone who thinks through problems, not just executes tasks',
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
              I build frontend that people actually enjoy using — and developers don&#39;t hate
              maintaining later.
            </Typography>

            <Typography sx={styles.bio}>
              I started out in design, because I&#39;ve always been drawn to creativity. At some
              point I met Web Development… and that was it. I realised I care just as much about how
              things work as how they look. Since then, I&#39;ve been sitting right in between
              design and development — connecting the two.
            </Typography>

            <Typography sx={styles.bioBold}>
              I already over 10+ years in the industry, I&#39;ve learned that messy frontend usually
              isn&#39;t about bugs — it&#39;s about decisions. So I try to get those right from the
              start.
            </Typography>

            <Typography sx={styles.bio}>
              I&#39;m not into &#34;just make it work.&#34; I care about things being fast, clear,
              and stable — the kind of work that doesn&#39;t come back to haunt you later.
            </Typography>

            <Typography sx={styles.bio}>
              I also work a lot with AI and LLM tools — both in products and in my own workflow. Not
              because it&#39;s trendy, but because it genuinely changes how interfaces are built and
              used.
            </Typography>

            <Typography sx={styles.bio}>
              Right now I&#39;m based in Melbourne, studying game design and development in Torrens
              University and exploring interaction, behaviour, and systems on a deeper level.
            </Typography>

            <Typography sx={styles.bio}>
              I was born in Ukraine, lived in Israel, and now in Australia — which taught me
              something important: &#34;intuitive&#34; isn&#39;t universal. Different people expect
              different things, and good products respect that.
            </Typography>
          </Box>

          <Typography sx={styles.listHeading}>What it&#39;s like to work with me</Typography>

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
