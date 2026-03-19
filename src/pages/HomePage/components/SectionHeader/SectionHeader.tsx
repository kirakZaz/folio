import { Box, Typography } from '@mui/material';
import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens.ts';

interface SectionHeaderProps {
  index: string;
  label: string;
  count?: number | string;
}


const SectionHeader = ({ index, label, count }: SectionHeaderProps) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'baseline',
      gap: { xs: 1, md: 2 },
      py: 2,
    }}
  >
    <Typography
      sx={{
        fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
        fontSize: { xs: '12px', md: '16px' },
        color: COLOR_TOKENS.accentPrimary,
        letterSpacing: '0.14em',
        flexShrink: 0,
      }}
    >
      {index}
    </Typography>

    <Typography
      sx={{
        fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
        fontSize: { xs: '12px', md: '16px' },
        color: COLOR_TOKENS.textDisabled,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        flexShrink: 0,
      }}
    >
      {label}
    </Typography>

    <Box sx={{ flex: 1, height: '0.5px', backgroundColor: COLOR_TOKENS.borderSubtle }} />

    {count !== undefined && (
      <Typography
        sx={{
          fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
          fontSize: { xs: '10px', md: '12px' },
          color: COLOR_TOKENS.textDisabled,
          letterSpacing: '0.1em',
          flexShrink: 0,
        }}
      >
        {count}
      </Typography>
    )}
  </Box>
);
export default SectionHeader;