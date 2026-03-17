import type { ReactNode } from 'react';
import type { ContainerProps } from '@mui/material';

export interface LayoutProps {
  children: ReactNode;
  maxWidth?: ContainerProps['maxWidth'];
  showNavBar?: boolean;
  fullWidthSlot?: ReactNode;
}
