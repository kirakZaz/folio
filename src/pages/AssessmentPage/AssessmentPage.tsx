import { useParams } from 'react-router-dom';

import { motion } from 'framer-motion';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Box, Button, Card, CardContent, Grid, Link, Stack, Typography } from '@mui/material';

import { DEFAULT_TRANSITION, FADE_UP_VARIANTS } from '@/shared/constants/animation.constants';
import { ASSESSMENT_PAGE_DATA, ASSESSMENTS_DATA } from '@/shared/constants/assessments.constants';

import BackButton from '@/components/BackButton/BackButton.tsx';
import Layout from '@/components/Layout';
import SeoHead from '@/components/SeoHead/SeoHead';

import { styles } from './AssessmentPage.styles';

const AssessmentPage = () => {
  const { id } = useParams<{ id: string }>();
  const assessmentId = Number(id);

  const meta = ASSESSMENTS_DATA.find((a) => a.id === assessmentId);
  const pageData = ASSESSMENT_PAGE_DATA[assessmentId];
  const isComingSoon = meta?.status === 'coming_soon';

  if (!meta) return null;

  return (
    <Layout maxWidth="lg" showNavBar>
      <SeoHead
        title={`${meta.subtitle} — Assessment | Kira Zakirova`}
        description={meta.description || `Assessment ${meta.subtitle} from ${meta.dueModule}. Part of Kira Zakirova's academic portfolio at Torrens University.`}
        path={`/assessment/${assessmentId}`}
      />
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
              {meta.dueModule} · {meta.weight}
            </Typography>
            <Typography variant="h2" component="h1" sx={styles.title}>
              {meta.subtitle}
            </Typography>
            <Typography variant="body1" sx={styles.description}>
              {meta.description}
            </Typography>
          </Stack>
        </Box>

        {isComingSoon ? (
          <Box sx={styles.comingSoonBlock}>
            <Typography sx={styles.comingSoonLabel}>Coming Soon</Typography>
            <Typography sx={styles.comingSoonSub}>
              This assessment will be available in {meta.dueModule}
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box
                component="img"
                src={pageData.screenshot}
                alt={`Screenshot of ${meta.subtitle} assessment`}
                loading="lazy"
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
                        <Typography variant="h6" sx={styles.pdfTitle}>
                          Full Assessment Document
                        </Typography>
                        <Typography variant="body2" sx={styles.pdfFilename}>
                          {pageData.pdfFilename}
                        </Typography>
                      </Box>
                    </Stack>

                    <Stack direction="row" spacing={2} sx={styles.actionButtons}>
                      <Button
                        variant="outlined"
                        component={Link}
                        href={pageData.pdfFile}
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
                        href={pageData.pdfFile}
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
        )}
      </motion.div>
    </Layout>
  );
};

export default AssessmentPage;
