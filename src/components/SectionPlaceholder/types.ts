import type React from 'react';

export interface SectionPlaceholderProps {
  sectionNumber: number;
  title:         string;
  description:   string;
  children?:     React.ReactNode;
}
