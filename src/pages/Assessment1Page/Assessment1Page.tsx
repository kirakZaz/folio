import { motion } from 'framer-motion';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Box, Button, Card, CardContent, Grid, Link, Stack, Typography } from '@mui/material';

import { useAppSelector } from '@/app/hooks';

import screenshotImg from '@/shared/assets/A1_screenshot.png';
import assessmentPdf from '@/shared/assets/CDM303A_Kira_Zakirov_assessmet1.pdf';
import { DEFAULT_TRANSITION, FADE_UP_VARIANTS } from '@/shared/constants/animation.constants';

import BackButton from '@/components/BackButton/BackButton.tsx';
import Layout from '@/components/Layout';

import { selectAssessmentById } from '@/features/assessments/assessmentsSlice';

import { styles } from './Assessment1Page.styles';

const Assessment1Page = () => {
  const assessment = useAppSelector(selectAssessmentById(1));

  return (
    <Layout maxWidth="lg" showNavBar>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={FADE_UP_VARIANTS}
        transition={DEFAULT_TRANSITION}
      >
        <Box sx={styles.header}>
          <BackButton />

          <Stack spacing={1.5}>
            <Typography variant="caption" sx={styles.metaCaption}>
              {assessment?.dueModule} · {assessment?.weight}
            </Typography>
            <Typography variant="h2" component="h1" sx={styles.titleMargin}>
              {assessment?.subtitle}
            </Typography>
            <Typography variant="body1" sx={styles.pageDescription}>
              {assessment?.description}
            </Typography>
          </Stack>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box
              component="img"
              src={screenshotImg}
              alt="Personal Visual Exploration"
              sx={styles.screenshotImg}
            />
          </Grid>

          <Grid item xs={12}>
            <Card variant="outlined" sx={styles.pdfCard}>
              <CardContent sx={styles.pdfCardContent}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  justifyContent="space-between"
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                  spacing={3}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={styles.pdfIconWrapper}>
                      <PictureAsPdfIcon sx={styles.pdfIcon} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={styles.titleMargin}>
                        Full Assessment Document
                      </Typography>
                      <Typography variant="body2" sx={styles.pdfFilename}>
                        CDM303A_Kira_Zakirov_assessment1.pdf
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={2} sx={styles.actionButtons}>
                    <Button
                      variant="outlined"
                      component={Link}
                      href={assessmentPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      fullWidth
                      sx={styles.viewButton}
                    >
                      View Online
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<FileDownloadIcon />}
                      component="a"
                      href={assessmentPdf}
                      download
                      fullWidth
                      sx={styles.downloadButton}
                    >
                      Download
                    </Button>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </motion.div>
    </Layout>
  );
};

export default Assessment1Page;
