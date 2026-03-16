// =============================================================================
// WORK WEB PROJECTS DATA
// =============================================================================
// To add a project: put cover image in /public/images/projects/ and add object here.

export interface WorkProject {
  id:          string;
  title:       string;
  company:     string;
  yearStart:   number;
  yearEnd:     number | 'present';
  description: string;            // shown on hover / tap
  coverImage?: string;            // path relative to /public
  techStack?:  string[];
}

// Populate with your real work history — just add objects.
export const WORK_PROJECTS_DATA: WorkProject[] = [
  {
    id:          'work-01',
    title:       'Project Title',
    company:     'Company Name',
    yearStart:   2022,
    yearEnd:     2023,
    description: 'Brief description of what you built and your role here.',
    coverImage:  undefined,
    techStack:   ['React', 'TypeScript'],
  },
  {
    id:          'work-02',
    title:       'Project Title',
    company:     'Company Name',
    yearStart:   2023,
    yearEnd:     'present',
    description: 'Brief description of what you built and your role here.',
    coverImage:  undefined,
    techStack:   ['React', 'Node.js'],
  },
];
