import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/shared/constants/routes.constants';

export const useNavigateBack = () => {
  const navigate = useNavigate();

  return useCallback(() => {
    // window.history.state.idx is set by React Router v6 and tracks
    // the current position in the browser history stack.
    // If idx > 0 there is a previous entry to go back to.
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate(ROUTES.HOME);
    }
  }, [navigate]);
};
