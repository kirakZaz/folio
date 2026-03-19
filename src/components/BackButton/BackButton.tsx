import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useNavigateBack } from '@/shared/hooks/useNavigateBack';
import { COLOR_TOKENS } from '@/theme/themeTokens';

interface BackButtonProps {
  label?: string;
}

const BackButton = ({ label = 'Back' }: BackButtonProps) => {
  const navigateBack = useNavigateBack();

  return (
    <Button
      startIcon={<ArrowBackIcon />}
      onClick={navigateBack}
      sx={{
        color: COLOR_TOKENS.textSecondary,
        mb: 4,
        pl: 0,
        '&:hover': {
          backgroundColor: 'transparent',
          color: COLOR_TOKENS.textPrimary,
        },
      }}
    >
      {label}
    </Button>
  );
};

export default BackButton;
