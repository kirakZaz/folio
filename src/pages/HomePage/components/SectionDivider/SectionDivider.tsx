import { Box } from '@mui/material';
import { COLOR_TOKENS } from '@/theme/themeTokens.ts';

const SectionDivider = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', py: 4, }}>
    <Box sx={{ flex: 1, height: '1px', backgroundColor: COLOR_TOKENS.borderStrong }} />

    <Box
      sx={{
        width: 8,
        height: 8,
        mx: 2,
        backgroundColor: COLOR_TOKENS.accentPrimary,
        transform: 'rotate(45deg)',
        flexShrink: 0,
      }}
    />

    <Box sx={{ flex: 1, height: '1px', backgroundColor: COLOR_TOKENS.borderStrong }} />
  </Box>
);


export default SectionDivider;