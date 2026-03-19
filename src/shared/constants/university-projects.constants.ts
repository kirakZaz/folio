// =============================================================================
// UNIVERSITY PROJECTS DATA  (Torrens University — Game Design)
// =============================================================================
// To add a project:
//   1. Add images to /public/images/projects/
//   2. Put presentation file in /public/images/projects/finalProjects/
//   3. Append an object to the array
//
// studyYear       = year of study (1, 2, 3) — not calendar year
// trimester       = actual trimester as enrolled (may differ from standard)
// subjectType     = 'core' | 'elective'
// presentationFile = path relative to /public — PDF renders via iframe in browser

export type ProjectStatus = 'completed' | 'in_progress' | 'planned';
export type SubjectType = 'core' | 'elective';

export interface UniversityProject {
  id: string;
  studyYear: 1 | 2 | 3;
  studyPeriod: number;
  year: string;
  trimester: 1 | 2 | 3;
  subjectType: SubjectType;
  subject: string;
  status: ProjectStatus;
  description: string;
  images: string[];
  finalScore?: number | string;
  link?: string;
  presentationFile?: string;
}

export const UNIVERSITY_PROJECTS_DATA: UniversityProject[] = [
  // ── Study Year 1 · Trimester 3, 2024 ──────────────────────────────────────
  {
    id: 'dso103',
    studyPeriod: 1,
    studyYear: 1,
    year: '2024',
    trimester: 3,
    subjectType: 'elective',
    subject: 'Brand Identity',
    status: 'completed',
    description:
      'Developed a full brand identity for k-Bag — a handcrafted sustainable bag brand built around slow fashion and eco-conscious values. Deliverables included logo design, brand positioning, competitor analysis, social media strategy, and a website concept. Materials research focused on Piñatex (pineapple-based vegan leather) as an alternative to traditional leather.',
    images: ['/images/projects/brand_identity.png'],
    finalScore: 78,
    presentationFile: '/images/projects/finalProjects/DSO103_Zakirov_K_Assessment_3.pdf',
  },
  {
    id: 'gdp102',
    studyPeriod: 1,
    studyYear: 1,
    year: '2024',
    trimester: 3,
    subjectType: 'core',
    subject: 'Game Design Principles',
    status: 'completed',
    description:
      'Designed "Outback Dash" — an endless runner set in the Australian outback where players ride kangaroos, emus, and wombats to stop poachers and recover stolen artifacts. Covered full game design workflow: concept sketches, character and environment design, wireframes, gameplay mechanics, and playtesting. First hands-on experience with Unity and Blender.',
    images: [],
    finalScore: 72,
    presentationFile:
      '/images/projects/finalProjects/Kira_Zakirov_GDP102_Assessment_3_Presentantion.pdf',
  },
  {
    id: 'ise102',
    studyPeriod: 1,
    studyYear: 1,
    year: '2024',
    trimester: 3,
    subjectType: 'elective',
    subject: 'Introduction to Software Engineering',
    status: 'completed',
    description:
      'Built a secure console-based banking application in C# (.NET 8) from scratch. Implemented user signup and login with input validation and brute-force protection (3 attempt limit), deposit and withdrawal with balance management, and profile update functionality. Designed UML use case and class diagrams before coding. Tested all edge cases including invalid inputs and insufficient funds.',
    images: [],
    finalScore: 82,
    presentationFile: '/images/projects/finalProjects/Presentation1.pdf',
  },

  // ── Study Year 1 · Trimester 1, 2025 ──────────────────────────────────────
  {
    id: 'acr101',
    studyPeriod: 2,
    studyYear: 1,
    year: '2025',
    trimester: 1,
    subjectType: 'core',
    subject: '2D Asset Creation',
    status: 'completed',
    description:
      'Process journal documenting a full trimester of 2D art development. Created "Axolotl Warrior" — a fantasy cyber-ninja character inspired by axolotl anatomy, with silhouette studies, turnaround sheet, and character lore. Then designed "Shadow Post" — a meditative puzzle-platformer environment with level layout, lighting concept, and environmental storytelling through architecture and runic puzzles. Weekly exercises covered silhouette work, pixel art master copies, reference drawing, colour theory, and level diagrams.',
    images: [],
    finalScore: 81,
    presentationFile: '/images/projects/finalProjects/ACR101_Kira_Zakirov_Assessment3_Journal.pdf',
  },
  {
    id: 'dcx101',
    studyPeriod: 2,
    studyYear: 1,
    year: '2025',
    trimester: 1,
    subjectType: 'core',
    subject: 'Design Context',
    status: 'completed',
    description:
      'Visual research project exploring how context shapes identity and history. Investigated Adolf Hitler\'s early childhood — trauma, rejection, unmet needs — through psychological and historical sources. Final work combined Photoshop image manipulation, GIF animation, and layered newspaper collage to pose the question: "What if he had been heard?" Explored how visual storytelling can challenge audiences to engage with difficult historical narratives through empathy rather than judgment.',
    images: [],
    finalScore: 76,
    presentationFile: '/images/projects/finalProjects/DCX101_Zakirov_Kira_Assessment3.pdf',
  },
  {
    id: 'dso102',
    studyPeriod: 2,
    studyYear: 1,
    year: '2025',
    trimester: 1,
    subjectType: 'core',
    subject: 'Design Studio 1',
    status: 'completed',
    description:
      'Handcrafted a mixed-media insect sculpture titled "Big Small World" — a dragonfly-like creature built from clay, wire armature, a real succulent branch for the tail, and satin ribbon wings. First experience with clay as a sculptural medium. Navigated challenges of structural stability, moisture management, and combining incompatible materials. The process journal documents the full build from head to wings to tail.',
    images: [],
    finalScore: 66,
    presentationFile: '/images/projects/finalProjects/DSO102_Kira_Zakirov_Final_Journal.pdf',
  },

  // ── Study Year 1 · Trimester 2, 2025 ──────────────────────────────────────
  {
    id: 'acr103',
    studyPeriod: 3,
    studyYear: 1,
    year: '2025',
    trimester: 2,
    subjectType: 'core',
    subject: '3D Asset Creation',
    status: 'completed',
    description:
      'Three-assessment progression through 3D production pipeline. Built a low-poly stylized prop (rustic table with torn fabric) in Maya — rebuilt 4 times after crashes and file loss, learning UV mapping, Arnold rendering, and shading. Then designed a multi-level wooden dock environment with 17 annotated prop elements. Final assessment focused on texturing a "Dinodog" creature — a squat teal dinosaur-dog hybrid — using Substance Painter with full PBR material workflow, exported as FBX.',
    images: ['/images/projects/acr103_dinodog.png'],
    finalScore: 86,
  },
  {
    id: 'ddd203',
    studyPeriod: 3,
    studyYear: 1,
    year: '2025',
    trimester: 2,
    subjectType: 'core',
    subject: 'Discover, Define, Develop, Deliver',
    status: 'completed',
    description:
      'Cross-disciplinary team project (Game Design, Interior Design ×2, Fashion Marketing) applying the Double Diamond methodology to Australia\'s housing affordability crisis. Developed "Kinspace" — a modular Urban Community Village concept for young adults (18–35) with private pods, communal kitchens, co-working lounges, and landscaped courtyards. Research included a survey of 40 participants and empathy mapping. Delivered full 3D architectural renders and materials board. Kira\'s role: project recap, Double Diamond journey documentation, evidence base, and references.',
    images: [],
    finalScore: 89,
    presentationFile:
      '/images/projects/finalProjects/DDD203_KiraZakirov_Assessment3-compressed.pdf',
  },

  // ── Study Year 2 · Trimester 3, 2025 ──────────────────────────────────────
  {
    id: 'gpf104',
    studyPeriod: 4,
    studyYear: 2,
    year: '2025',
    trimester: 3,
    subjectType: 'core',
    subject: 'Game Production Foundation',
    status: 'completed',
    description:
      'Team game project with EchoForge studio — developed "Roach", a 2D pixel-art action platformer set in a post-apocalyptic underground world. Players control a survival-driven insect navigating toxic tunnels with a companion creature, the Grubdog Witchetty. Kira\'s role: Lead Developer & Web Integration — game programming in Unity, UI design, character art assets, and building + deploying the official game website. Released publicly on 23 November 2025, playable in-browser.',
    images: [],
    finalScore: 80,
    link: 'https://roach-website.vercel.app',
    presentationFile: '/images/projects/finalProjects/GPF104_KiraZakirov_Presentation_A4.pdf',
  },
  {
    id: 'sen301',
    studyPeriod: 4,
    studyYear: 2,
    year: '2025',
    trimester: 3,
    subjectType: 'core',
    subject: 'Social Enterprise',
    status: 'completed',
    description:
      'Solo social enterprise proposal — "PoopLoop Melbourne": a circular waste management system addressing unmanaged dog waste in Melbourne suburbs. Designed smart eco-stations with free biodegradable bags, QR tracking, and real-time fill-level monitoring for councils. Built a full business model with AUD 600K pilot budget, funding strategy (eco-grants, Aristopet sponsorship), and 3-year ROI plan. Pitched to Bayside & Monash councils with 30-station rollout. Created 3D station model and app UI mockup.',
    images: [],
    finalScore: 94,
    presentationFile: '/images/projects/finalProjects/SEN301_KiraZakirov_A3.pdf',
  },

  // ── Study Year 2 · Trimester 1, 2026 (In Progress) ────────────────────────
  {
    id: 'gst201',
    studyPeriod: 5,
    studyYear: 2,
    year: '2026',
    trimester: 1,
    subjectType: 'core',
    subject: 'Game Studies',
    status: 'in_progress',
    description: '',
    images: [],
    finalScore: '-',
  },
  {
    id: 'cdm303a',
    studyPeriod: 5,
    studyYear: 2,
    year: '2026',
    trimester: 1,
    subjectType: 'elective',
    subject: 'Portfolio',
    status: 'in_progress',
    description: '',
    images: [],
    finalScore: '-',
  },
  {
    id: 'pbl202',
    studyPeriod: 5,
    studyYear: 2,
    year: '2026',
    trimester: 1,
    subjectType: 'core',
    subject: 'Problem Based Learning Studio',
    status: 'in_progress',
    description: '',
    images: [],
    finalScore: '-',
  },

  // ── Study Year 2 · Trimester 2, 2026 (Planned) ────────────────────────────
  {
    id: 'ani203',
    studyPeriod: 6,
    studyYear: 2,
    year: '2026',
    trimester: 2,
    subjectType: 'core',
    subject: 'Animation',
    status: 'planned',
    description: '',
    images: [],
    finalScore: '-',
  },
  {
    id: 'aac202',
    studyPeriod: 6,
    studyYear: 2,
    year: '2026',
    trimester: 2,
    subjectType: 'core',
    subject: 'Advanced 3D Asset Creation',
    status: 'planned',
    description: '',
    images: [],
    finalScore: '-',
  },
  {
    id: 'ppr301',
    studyPeriod: 6,
    studyYear: 2,
    year: '2026',
    trimester: 2,
    subjectType: 'core',
    subject: 'Pre-Production Capstone 1',
    status: 'planned',
    description: '',
    images: [],
    finalScore: '-',
  },

  // ── Study Year 3 · Trimester 1, 2026 (Planned) ────────────────────────────
  {
    id: 'rgp204',
    studyPeriod: 7,
    studyYear: 3,
    year: '2026',
    trimester: 1,
    subjectType: 'core',
    subject: 'Rapid Game Prototype',
    status: 'planned',
    description: '',
    images: [],
    finalScore: '-',
  },
  {
    id: 'gdp204',
    studyPeriod: 7,
    studyYear: 3,
    year: '2026',
    trimester: 1,
    subjectType: 'core',
    subject: 'Game Development PlayStation',
    status: 'planned',
    description: '',
    images: [],
    finalScore: '-',
  },

  // ── Study Year 3 · Trimester 2, 2026 (Planned) ────────────────────────────
  {
    id: 'wil302b',
    studyPeriod: 8,
    studyYear: 3,
    year: '2026',
    trimester: 2,
    subjectType: 'core',
    subject: 'Work Integrated Learning (Industry Live Brief)',
    status: 'planned',
    description: '',
    images: [],
    finalScore: '-',
  },
  {
    id: 'wil302',
    studyPeriod: 8,
    studyYear: 3,
    year: '2026',
    trimester: 2,
    subjectType: 'core',
    subject: 'Work Integrated Learning',
    status: 'planned',
    description: '',
    images: [],
    finalScore: '-',
  },

  // ── Study Year 3 · Trimester 3, 2027 (Planned) ────────────────────────────
  {
    id: 'prd302',
    studyPeriod: 8,
    studyYear: 3,
    year: '2027',
    trimester: 3,
    subjectType: 'core',
    subject: 'Production Capstone 2',
    status: 'planned',
    description: '',
    images: [],
    finalScore: '-',
  },
];
