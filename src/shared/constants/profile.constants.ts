// Shared profile data used by ExperiencePage (ProfilePanel) and potentially others.

export const BIO_TEXT =
  'Senior Frontend Developer with 9+ years of experience building scalable, production-grade web applications. Proven track record of leading frontend architecture from greenfield — solo and in teams — across B2B SaaS, e-commerce, and enterprise platforms. Passionate about clean code, pixel-perfect design, and great UX. Currently expanding into game development at Torrens University.';

export const SKILL_CATEGORIES = [
  { label: 'Core', skills: ['React', 'TypeScript', 'JavaScript (ES2024)', 'HTML5', 'CSS3'] },
  { label: 'Frameworks', skills: ['Vite', 'Redux Toolkit', 'React Query', 'React Router'] },
  { label: 'UI', skills: ['Material UI', 'SASS/CSS', 'Styled Components'] },
  { label: 'Testing', skills: ['Playwright', 'Jest', 'Testing Library', 'MSW', 'Vitest'] },
  { label: 'Tools', skills: ['Git', 'GitHub Actions', 'Webpack', 'ESLint', 'Prettier', 'Husky'] },
  { label: 'Mobile', skills: ['React Native', 'Expo'] },
  { label: 'Backend', skills: ['Node.js', 'MongoDB', 'REST API', 'Firebase'] },
  {
    label: 'Other',
    skills: ['Lexical', 'DnD Kit', 'AWS Cognito', 'OIDC', 'WebAuthn', 'ReactFlow'],
  },
] as const;

export const PROGRAMS = [
  { label: 'Design', skills: ['Photoshop', 'Illustrator', 'After Effects'] },
  { label: '3D', skills: ['Blender', 'Maya'] },
  { label: 'Game', skills: ['Unity'] },
  { label: 'Dev', skills: ['WebStorm', 'Visual Studio'] },
] as const;

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
