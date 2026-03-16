import type { Assessment, AssessmentStatus } from '@/shared/types/assessment.types';

export interface AssessmentCardProps {
  assessment: Assessment;
}

export interface StatusChipConfig {
  label:   string;
  color:   string;
  bgColor: string;
}

export type StatusChipConfigMap = Record<AssessmentStatus, StatusChipConfig>;
