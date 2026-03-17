// =============================================================================
// WORK WEB PROJECTS DATA
// =============================================================================
// To add a project:
//   1. Put cover image in /public/images/projects/
//   2. Put screenshots in /public/images/projects/<id>/
//   3. Add an object to WORK_PROJECTS_DATA below.

export interface WorkProject {
  id: string;
  title: string;
  company: string;
  role: string;
  yearStart: number;
  yearEnd: number | 'present';
  description: string;
  coverImage?: string;
  techStack?: string[];
  link?: string;
  githubUrl?: string;
  teamSize?: number;
  achievements?: string[];
  challenges?: string[];
  screenshots?: string[];
}

export const WORK_PROJECTS_DATA: WorkProject[] = [
  {
    id: 'work-sharepass',
    title: 'SharePass',
    company: 'SharePass Pty Ltd',
    role: 'Lead Frontend Developer',
    yearStart: 2024,
    yearEnd: 'present',
    description:
      'Enterprise-grade secure secret-sharing platform. Rebuilt the entire frontend from scratch — solo, part-time — delivering a production-ready app with client-side encryption, MFA, and a fully custom design system in both light and dark modes.',
    coverImage: '/images/companies/sharepass.png',
    techStack: [
      'React',
      'TypeScript',
      'Vite',
      'Redux Toolkit',
      'Material UI',
      'OIDC',
      'Vitest',
      'SJCL',
      'QR / WebAuthn',
    ],
    link: 'https://sharepass.com',
    githubUrl: undefined,
    teamSize: 3,
    achievements: [
      'Rebuilt the entire frontend from scratch — solo, part-time (1 day/week) over 4 months',
      'Implemented client-side encryption using SJCL and @noble/hashes for secure secret handling',
      'Built MFA flow including TOTP and QR-based security key UI',
      'Resolved token refresh race conditions using async-mutex for concurrent request safety',
      'Designed and implemented the full UI/UX in both light and dark mode without a designer',
      'Set up production-grade code quality pipeline: Husky, lint-staged, Prettier, ESLint, jscpd',
      'Configured bundle analysis and performance optimisation with rollup-plugin-visualizer',
    ],
    challenges: [
      'Designing a UX that feels simple and intuitive while handling complex encryption flows under the hood',
      'Delivering a production-quality product solo and part-time — required strict architectural discipline to keep the codebase maintainable',
    ],
    screenshots: [],
  },
  {
    id: 'work-axo',
    title: 'AXO Tech Platform',
    company: 'AXO Tech Inc',
    role: 'Lead Frontend Developer',
    yearStart: 2024,
    yearEnd: 'present',
    description:
      'B2B SaaS platform that helps cloud channel partners turn siloed client data into revenue growth. Connects vendor portals, CRMs, and spreadsheets into a unified engine with automated playbooks and deal intelligence.',
    coverImage: '/images/companies/axo.png',
    techStack: [
      'React',
      'TypeScript',
      'Vite',
      'Redux Toolkit',
      'Material UI',
      'ReactFlow',
      'Lexical',
      'DnD Kit',
      'AWS Cognito',
      'Playwright',
      'Vitest',
      'MSW',
    ],
    link: undefined,
    githubUrl: undefined,
    teamSize: 5,
    achievements: [
      'Designed and owned the entire frontend architecture from greenfield — solo for the first year',
      'Built a visual workflow editor using ReactFlow and Dagre for automated sales playbooks',
      'Implemented a rich text editor with Lexical for playbook content creation',
      'Set up the full testing infrastructure: unit tests with Vitest, E2E with Playwright, API mocking with MSW',
      'Onboarded and mentored a second frontend developer as the team scaled',
      'Configured CI pipeline: lint, unit tests, and E2E tests running on every push',
    ],
    challenges: [
      'Architecting a scalable frontend alone for a fast-moving product with complex data relationships',
      'Building a performant graph editor that handles dynamic layouts with Dagre auto-positioning',
    ],
    screenshots: [],
  },
  {
    id: 'work-wowie',
    title: 'Wowie',
    company: 'Wowie (Startup)',
    role: 'Frontend Developer',
    yearStart: 2023,
    yearEnd: 2024,
    description:
      'AI-powered mobile app for personalised grocery shopping — scanning product packaging to identify ingredients and filtering results by allergies and dietary preferences. First mobile project; built with React Native and Expo.',
    coverImage: '/images/companies/wowie.png',
    techStack: ['React Native', 'Expo', 'TensorFlow', 'Firebase'],
    link: undefined,
    githubUrl: undefined,
    teamSize: 3,
    achievements: [
      'Developed core mobile features including AI-powered product scanning and ingredient analysis',
      'Integrated TensorFlow for on-device ingredient recognition from product packaging',
      'Used Firebase for real-time product database and user preference management',
      'First React Native project — delivered production-ready mobile UI from scratch',
    ],
    challenges: [
      'Optimising TensorFlow model inference to run smoothly on lower-end mobile devices',
      'Project discontinued due to funding constraints — not a reflection of technical delivery',
    ],
    screenshots: [],
  },
  {
    id: 'work-justeat',
    title: 'Just Eat Takeaway',
    company: 'Just Eat Takeaway.com (via Welldone-Solutions)',
    role: 'Frontend Developer',
    yearStart: 2021,
    yearEnd: 2023,
    description:
      'B2B2C platform enabling business clients to manage credit card usage and settings in real-time. Joined near project inception and contributed across the full delivery lifecycle — setup, localisation, Adyen payment integration, and QA.',
    coverImage: '/images/companies/justeat.png',
    techStack: ['React', 'TypeScript', 'Redux', 'Adyen Payment System'],
    link: 'https://www.justeattakeaway.com',
    githubUrl: undefined,
    teamSize: 8,
    achievements: [
      'Joined the project near inception and contributed to initial architecture and environment setup',
      'Delivered end-to-end Adyen payment integration — from API to UI',
      'Implemented multi-language localisation across the platform',
      'Collaborated with QA team throughout the testing cycle for bug resolution and quality assurance',
    ],
    challenges: [
      'Coordinating Adyen integration across multiple teams with different release cycles',
      'Handling real-time credit card state updates reliably without full page reloads',
    ],
    screenshots: [],
  },
  {
    id: 'work-roundtrip',
    title: 'Roundtrip',
    company: 'Roundtrip Technologies',
    role: 'Full Stack Developer',
    yearStart: 2019,
    yearEnd: 2021,
    description:
      'Tourism website builder — like Wix but for travel businesses. Enabled clients to create custom sites with flight, hotel, and activity booking. Joined as an early employee (2nd developer), contributed across the full stack, and grew into an informal tech lead and bridge between product and engineering.',
    coverImage: '/images/companies/roundtrip.png',
    techStack: ['React', 'Node.js', 'MongoDB', 'Material UI', 'REST API'],
    link: undefined,
    githubUrl: undefined,
    teamSize: 8,
    achievements: [
      'Joined as the second developer on the team — helped establish early architecture and patterns',
      'Built and maintained full stack features across React frontend and Node.js/MongoDB backend',
      'Informally mentored junior developers and reviewed their pull requests',
      'Acted as a communication bridge between the product manager and the technical team',
      'Grew significantly as an engineer within a fast-scaling startup environment',
    ],
    challenges: [
      'Balancing frontend and backend responsibilities simultaneously as an early-stage generalist',
      'Translating non-technical product requirements into engineering tasks for a team of mixed seniority',
    ],
    screenshots: [],
  },
  {
    id: 'work-xmpie',
    title: 'XMPie',
    company: 'XMPie / Xerox (via Welldone-Solutions)',
    role: 'Frontend Developer',
    yearStart: 2021,
    yearEnd: 2023,
    description:
      'Enterprise CRM platform for XMPie, a Xerox subsidiary specialising in personalised communications technology. Focused on building reusable components and improving frontend code structure within a large legacy codebase.',
    coverImage: '/images/companies/xmpie.png',
    techStack: ['React', 'JavaScript', 'Webpack', 'SASS'],
    link: 'https://www.xmpie.com',
    githubUrl: undefined,
    teamSize: 6,
    achievements: [
      'Developed and maintained reusable UI components across a complex enterprise platform',
      'Worked to introduce cleaner code patterns and better structure within an existing large codebase',
      'Collaborated with backend teams, designers, and product managers in an Agile/Scrum environment',
    ],
    challenges: [
      'Navigating a large, established codebase with limited flexibility for refactoring',
      'Delivering consistently within constraints of a highly structured enterprise organisation',
    ],
    screenshots: [],
  },
  {
    id: 'work-beehive',
    title: 'Beehive BI',
    company: 'Beehive BI (Playtech project)',
    role: 'Frontend Developer',
    yearStart: 2018,
    yearEnd: 2019,
    description:
      'Business intelligence platform built for Playtech, a global leader in gambling technology. First professional React project — learned production React, Redux, and OOP patterns in a real enterprise environment.',
    coverImage: '/images/companies/beehive.png',
    techStack: ['React', 'Redux', 'JavaScript', 'SASS'],
    link: undefined,
    githubUrl: undefined,
    teamSize: 4,
    achievements: [
      'Delivered UI components for a sophisticated BI dashboard used by Playtech',
      'Gained foundational expertise in React, Redux, and component-driven development',
      'Worked within Agile/Scrum practices from the start of my career',
    ],
    challenges: [
      'Ramping up quickly on production React and Redux as a junior developer in an enterprise environment',
    ],
    screenshots: [],
  },
];
