import { Box, Typography, Stack, Button, Grid, Card, CardContent, Link } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import Layout from '@/components/Layout';
import { useAppSelector } from '@/app/hooks';
import { selectAssessmentById } from '@/features/assessments/assessmentsSlice';
import { FADE_UP_VARIANTS, DEFAULT_TRANSITION } from '@/shared/constants/animation.constants';
import { COLOR_TOKENS } from '@/theme/themeTokens';
import { ROUTES } from '@/shared/constants/routes.constants';

import screenshotImg from '@/shared/assets/A1_screenshot.png';
import assessmentPdf from '@/shared/assets/CDM303A_Kira_Zakirov_assessmet1.pdf';

const Assessment1Page = () => {
  const navigate = useNavigate();
  const assessment = useAppSelector(selectAssessmentById(1));

  const handleBackToHome = () => navigate(ROUTES.HOME);

  return (
    <Layout maxWidth="lg" showNavBar>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={FADE_UP_VARIANTS}
        transition={DEFAULT_TRANSITION}
      >
        <Box sx={{ mb: 6 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={handleBackToHome}
            sx={{
              color: COLOR_TOKENS.textSecondary,
              mb: 4,
              pl: 0,
              '&:hover': { color: COLOR_TOKENS.textPrimary, backgroundColor: 'transparent' },
            }}
          >
            Back
          </Button>

          <Stack spacing={1.5}>
            <Typography
              variant="caption"
              sx={{ color: COLOR_TOKENS.textSecondary, fontWeight: 500, letterSpacing: '0.1em' }}
            >
              {assessment?.dueModule} · {assessment?.weight}
            </Typography>
            <Typography variant="h2" component="h1" sx={{ mb: 1 }}>
              Research & Personal Brand Positioning
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: COLOR_TOKENS.textSecondary, maxWidth: '800px' }}
            >
              This phase focuses on defining visual identity through extensive research of the
              creative industry, competitor analysis, and personal value proposition.
            </Typography>
          </Stack>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box
              component="img"
              src={screenshotImg}
              alt="Personal Visual Exploration"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: `1px solid ${COLOR_TOKENS.borderDefault}`,
                display: 'block',
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Card
              variant="outlined"
              sx={{
                background: COLOR_TOKENS.backgroundPaper,
                borderRadius: 2,
                borderStyle: 'dashed',
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  justifyContent="space-between"
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                  spacing={3}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        p: 1.5,
                        bgcolor: 'rgba(244, 67, 54, 0.1)',
                        borderRadius: 1,
                        display: 'flex',
                      }}
                    >
                      <PictureAsPdfIcon sx={{ color: '#f44336', fontSize: 32 }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ lineHeight: 1.2 }}>
                        Full Assessment Document
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        CDM303A_Kira_Zakirov_assessment1.pdf
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={2} sx={{ width: { xs: '100%', sm: 'auto' } }}>
                    <Button
                      variant="outlined"
                      component={Link}
                      href={assessmentPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      fullWidth
                      sx={{
                        borderColor: COLOR_TOKENS.borderDefault,
                        color: COLOR_TOKENS.textPrimary,
                      }}
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
                      sx={{
                        bgcolor: COLOR_TOKENS.textPrimary,
                        color: COLOR_TOKENS.backgroundPaper,
                      }}
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
