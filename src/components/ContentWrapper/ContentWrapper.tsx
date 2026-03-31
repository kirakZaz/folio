import React from 'react';

import { Box } from '@mui/material';

import { styles } from './ContentWrapper.styles';
import type { ContentWrapperProps } from './ContentWrapper.types';

const ContentWrapper = ({ children, withSidebar = false }: ContentWrapperProps) => (
  <Box sx={[styles.base, !withSidebar && styles.centered]}>{children}</Box>
);

export default React.memo(ContentWrapper);
