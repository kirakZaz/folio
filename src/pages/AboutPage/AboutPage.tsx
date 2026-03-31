import { Box, Typography } from '@mui/material';

import ContentWrapper from '@/components/ContentWrapper';
import Navigation from '@/components/Navigation/Navigation';

import { styles } from './AboutPage.styles';

const LANGUAGES = [
  { code: 'EN', label: 'English' },
  { code: 'UK', label: 'Ukrainian' },
  { code: 'RU', label: 'Russian' },
  { code: 'HE', label: 'Hebrew' },
] as const;

const LOREM_BIO = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

const AboutPage = () => (
  <Box sx={styles.root}>
    <ContentWrapper>
      {/* Hero: text left, photo right */}
      <Box sx={styles.heroSection}>
        <Box sx={styles.photoPlaceholder}>
          <Typography sx={styles.photoPlaceholderLabel}>Photo</Typography>
        </Box>

        <Box sx={styles.textBlock}>
          <Typography component="h1" sx={styles.nameHeading}>
            Kira Zakirov
          </Typography>

          <Typography sx={styles.bioText}>{LOREM_BIO}</Typography>
        </Box>
      </Box>

      {/* Languages */}
      <Box sx={styles.languagesSection}>
        <Typography sx={styles.sectionLabel}>Languages</Typography>
        <Box sx={styles.languagesRow}>
          {LANGUAGES.map((lang) => (
            <Box key={lang.code} sx={styles.languageChip}>
              {lang.code} · {lang.label}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Horizontal nav */}
      <Box sx={styles.navSection}>
        <Typography sx={styles.brandBox}>Zakirov</Typography>

        <Navigation orientation="horizontal" />
      </Box>
    </ContentWrapper>
  </Box>
);

export default AboutPage;
