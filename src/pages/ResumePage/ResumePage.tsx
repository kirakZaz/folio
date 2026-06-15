import { motion } from 'framer-motion';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Box, Button } from '@mui/material';

import SectionHeader from '@/pages/HomePage/components/SectionHeader/SectionHeader.tsx';

import { DEFAULT_TRANSITION, FADE_UP_VARIANTS } from '@/shared/constants/animation.constants';

import PortfolioLayout from '@/components/PortfolioLayout';

import { styles } from './ResumePage.styles';

const CV_PATH = '/KiraZakirova_CV.pdf';

const ResumePage = () => (
  <PortfolioLayout>
    <motion.div
      variants={FADE_UP_VARIANTS}
      initial="hidden"
      animate="visible"
      transition={DEFAULT_TRANSITION}
    >
      <Box sx={styles.headerRow}>
        <SectionHeader index="05" label="Resume" headingLevel="h1" />
        <Button
          variant="contained"
          startIcon={<FileDownloadIcon />}
          component="a"
          href={CV_PATH}
          download
          size="small"
          sx={styles.downloadButton}
        >
          Download PDF
        </Button>
      </Box>

      <Box sx={styles.pdfWrapper}>
        <Box
          component="iframe"
          src={CV_PATH}
          title="Kira Zakirova — Resume"
          sx={styles.pdfIframe}
        />
      </Box>
    </motion.div>
  </PortfolioLayout>
);

export default ResumePage;
