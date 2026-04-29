// Shared profile data used by ExperiencePage (ProfilePanel) and potentially others.

import { SKILL_ICON_MAP } from './skill-icons.constants';

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  label: string;
  skills: SkillItem[];
}

const toSkill = (name: string): SkillItem => ({
  name,
  icon: SKILL_ICON_MAP[name] ?? '',
});

export const BIO_TEXT =
  'Senior Frontend Developer with 9+ years of experience building scalable, production-grade web applications. Proven track record of leading frontend architecture from greenfield — solo and in teams — across B2B SaaS, e-commerce, and enterprise platforms. Passionate about clean code, pixel-perfect design, and great UX. Currently expanding into game development at Torrens University.';

export const SKILL_CATEGORIES: SkillCategory[] = [
  { label: 'Core', skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'].map(toSkill) },
  { label: 'Libraries', skills: ['Redux Toolkit', 'React Query', 'React Router'].map(toSkill) },
  { label: 'UI', skills: ['Material UI', 'SASS/CSS', 'Styled Components'].map(toSkill) },
  { label: 'Testing', skills: ['Playwright', 'Jest', 'Testing Library', 'MSW', 'Vitest'].map(toSkill) },
  { label: 'Tools', skills: ['Vite', 'Webpack', 'Git', 'GitHub Actions', 'ESLint', 'Prettier', 'Husky'].map(toSkill) },
  { label: 'Mobile', skills: ['React Native', 'Expo'].map(toSkill) },
  { label: 'Backend', skills: ['Node.js', 'MongoDB', 'REST API', 'Firebase'].map(toSkill) },
  { label: 'Other', skills: ['Lexical', 'DnD Kit', 'AWS Cognito', 'OIDC', 'WebAuthn', 'ReactFlow'].map(toSkill) },
];

export const PROGRAMS: SkillCategory[] = [
  { label: 'Design', skills: ['Photoshop', 'Illustrator', 'After Effects'].map(toSkill) },
  { label: '3D', skills: ['Blender', 'Maya'].map(toSkill) },
  { label: 'Game', skills: ['Unity'].map(toSkill) },
  { label: 'Dev', skills: ['WebStorm', 'Visual Studio'].map(toSkill) },
];

export const EDUCATION_ITEMS = [
  {
    degree: 'Bachelor of Game Design and Development',
    institution: 'Torrens University Australia',
    period: '2024 – 2027',
    location: 'Melbourne, AU',
  },
] as const;

export const COURSES = [
  { name: 'Node.js Course', score: '198/200', year: '2021', provider: 'Robot Dreams' },
  { name: 'React Course', score: undefined, year: '2018', provider: 'Udemy' },
] as const;
