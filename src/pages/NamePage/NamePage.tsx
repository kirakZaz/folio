import { Box, Typography } from '@mui/material';

import PortfolioLayout from '@/components/PortfolioLayout';

import { styles } from './NamePage.styles';

const NamePage = () => (
  <PortfolioLayout>
    <style>{`
      @keyframes writeReveal {
        from { clip-path: inset(0 100% 0 0); }
        to { clip-path: inset(0 0% 0 0); }
      }
      @keyframes cursorBlink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      @keyframes cursorSlide {
        from { left: 0%; }
        to { left: 100%; }
      }
    `}</style>

    <Box sx={styles.page}>
      <Box sx={styles.nameWrap}>
        {/* Kira */}
        <Box sx={styles.lineWrap}>
          <Typography sx={{ ...styles.line, ...styles.line1 }}>
            Kira
          </Typography>
          <Box sx={styles.cursor(0.3, 1.4)} />
        </Box>

        {/* Zakirova */}
        <Box sx={styles.lineWrap}>
          <Typography sx={{ ...styles.line, ...styles.line2 }}>
            Zakirova
          </Typography>
          <Box sx={styles.cursor(1.8, 2.2)} />
        </Box>
      </Box>
    </Box>
  </PortfolioLayout>
);

export default NamePage;