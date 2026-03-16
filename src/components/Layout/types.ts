import type React from 'react';

export interface LayoutProps {
  children:    React.ReactNode;
  maxWidth?:   'sm' | 'md' | 'lg' | 'xl' | false;
  showNavBar?: boolean;
}
