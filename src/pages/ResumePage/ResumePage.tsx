import { motion } from 'framer-motion';

import { Box, Typography } from '@mui/material';

import SectionHeader from '@/pages/HomePage/components/SectionHeader/SectionHeader.tsx';

import { DEFAULT_TRANSITION, FADE_UP_VARIANTS } from '@/shared/constants/animation.constants';

import PortfolioLayout from '@/components/PortfolioLayout';
import SeoHead from '@/components/SeoHead/SeoHead';

import { styles } from './ResumePage.styles';

const CV_PATH = '/KiraZakirova_CV.pdf';

const SKILLS = [
  'React', 'TypeScript', 'JavaScript', 'Node.js', 'Redux Toolkit',
  'Material UI', 'Styled Components', 'REST API', 'MongoDB',
  'AWS', 'Vite', 'Webpack', 'Vitest', 'Playwright', 'Git',
  'Figma', 'CI/CD', 'Agile / Scrum',
];

const RESUME_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kira Zakirova',
  jobTitle: 'Senior Frontend Engineer',
  url: 'https://folio-kiraz.vercel.app/resume',
  knowsAbout: SKILLS,
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Torrens University Australia',
  },
};

const ResumePage = () => (
  <PortfolioLayout>
    <SeoHead
      title="Resume — Kira Zakirova | Software Engineer Resume & CV"
      description="Download or view Kira Zakirova's software engineer resume. 10+ years in React, TypeScript, and full stack engineering."
      path="/resume"
      jsonLd={RESUME_JSONLD}
    />
    <motion.div
      variants={FADE_UP_VARIANTS}
      initial="hidden"
      animate="visible"
      transition={DEFAULT_TRANSITION}
    >
      <SectionHeader index="05" label="Resume" headingLevel="h1" />

      <Box sx={styles.twoColumnLayout}>
        {/* Left — text content */}
        <Box sx={styles.leftColumn}>
          <Typography component="h2" sx={styles.sectionHeading}>
            Professional Summary
          </Typography>
          <Typography sx={styles.summaryText}>
            Senior front end developer and software engineer with over ten years of professional
            experience building web applications for startups and established companies. Specialising
            in React and TypeScript, with deep expertise in frontend architecture, design systems,
            and connecting backend to frontend through REST APIs and Node.js services.
          </Typography>
          <Typography sx={styles.summaryText}>
            Track record of leading frontend teams, owning entire codebases from greenfield, and
            delivering production-grade products with comprehensive testing. Comfortable working
            remotely and collaborating across time zones. Currently based in Melbourne, Australia,
            studying Game Design and Development at Torrens University.
          </Typography>

          <Typography component="h2" sx={styles.sectionHeading}>
            Technical Skills
          </Typography>
          <Box sx={styles.skillsGrid}>
            {SKILLS.map((skill) => (
              <Box key={skill} sx={styles.skillChip}>{skill}</Box>
            ))}
          </Box>

          <Typography component="h2" sx={styles.sectionHeading}>
            Career Highlights
          </Typography>
          <Box component="ul" sx={styles.highlightsList}>
            <li>Led frontend development at AXO Tech — designed the full architecture solo from day one</li>
            <li>Rebuilt the entire SharePass frontend from scratch as a solo developer, including dark/light themes</li>
            <li>Built React Native mobile app and complex dashboard interfaces at Beehive and WellDone</li>
            <li>Delivered UI for a high-traffic food ordering platform processing thousands of daily orders at JustEat</li>
            <li>Worked across B2B SaaS, e-commerce, fintech, and enterprise security domains</li>
          </Box>
        </Box>

        {/* Right — PDF resume */}
        <Box sx={styles.rightColumn}>
          <Typography component="h2" sx={styles.pdfHeading}>
            Full Resume (PDF)
          </Typography>
          <Box
            component="iframe"
            src={CV_PATH}
            title="Kira Zakirova — Resume"
            sx={styles.pdfIframe}
          />
        </Box>
      </Box>
    </motion.div>
  </PortfolioLayout>
);

export default ResumePage;
