export type AssessmentStatus = 'available' | 'coming_soon' | 'completed';

export interface Assessment {
  id:         number;
  title:      string;
  subtitle:   string;
  description: string;
  status:     AssessmentStatus;
  route:      string;
  weight:     string;
  dueModule:  string;
}

export interface NavAssessmentLink {
  id:     number;
  label:  string;
  route:  string;
  status: AssessmentStatus;
}
