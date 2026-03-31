import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';

import { useNavigateBack } from '@/shared/hooks/useNavigateBack';

import { styles } from './BackButton.styles';
import type { BackButtonProps } from './BackButton.types';

const BackButton = ({ label = 'Back' }: BackButtonProps) => {
  const navigateBack = useNavigateBack();

  return (
    <Button startIcon={<ArrowBackIcon />} onClick={navigateBack} sx={styles.button}>
      {label}
    </Button>
  );
};

export default BackButton;
