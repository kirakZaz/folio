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

  // ── Study Year 2 · Trimester 1, 2026 ──────────────────────────────────────
  {
    id: 'gst201',
    studyPeriod: 5,
    studyYear: 2,
    year: '2026',
    trimester: 1,
    subjectType: 'core',
    subject: 'Game Studies',
    status: 'completed',
    description:
      'Built "Ship It" — a browser-based interactive artefact simulating an internal HR dashboard of a fictional AAA studio, "Lumen Interactive". The user plays a Senior Producer making seven management decisions in the six weeks before a flagship release, each enacting what Cote and Harris (2021) call the "cruel optimism of good crunch". The accompanying critical essay analyses how the game industry sustains exploitative labour practices not through open coercion but through positive discourse — the language of passion, family, and the "dream job". The artefact places the user on the management side to provoke a shift of perspective: the problem is structural, not individual.',
    images: [],
    finalScore: 92,
    link: 'https://interactive-artifact-psi.vercel.app/',
    presentationFile: '/images/projects/finalProjects/GST201_KiraZakirov_A3_Essay.pdf',
  },
  {
    id: 'cdm303a',
    studyPeriod: 5,
    studyYear: 2,
    year: '2026',
    trimester: 1,
    subjectType: 'elective',
    subject: 'Portfolio',
    status: 'completed',
    description:
      'Designed and developed a personal portfolio website from scratch using React, TypeScript, Material UI, and Framer Motion. The portfolio documents the full creative degree journey through the Bachelor of Design programme — showcasing university projects, work experience, and professional identity. Each assessment built toward the final product: personal brand research, logo and visual identity design, and a polished responsive website with custom SVG animations, dark theme, and project case studies.',
    images: [],
    finalScore: 90,
    presentationFile: '/images/projects/finalProjects/CDM303A_KiraZakirov_A3.pdf',
  },
  {
    id: 'pbl202',
    studyPeriod: 5,
    studyYear: 2,
    year: '2026',
    trimester: 1,
    subjectType: 'core',
    subject: 'Problem Based Learning Studio',
    status: 'completed',
    description:
      'Cross-disciplinary team project (Game Design, Interior Design, Fashion Marketing) applying systems thinking and the Double Diamond methodology to household clutter accumulation in Melbourne. Developed "Unclutter" — a community-first platform connecting neighbours through sharing and giving, built on belonging rather than transactions. Research included semi-structured interviews (n=6), system and stakeholder mapping, and six scrappy prototypes tested iteratively. Kira\'s role: research synthesis, report writing, and strategic direction. The project reframed clutter from an individual problem to a symptom of community disconnection and missing redistribution infrastructure.',
    images: [],
    finalScore: 77,
    presentationFile: '/images/projects/finalProjects/PBL202_KiraZakirov_A3_Report.pdf',
  },

  // ── Study Year 2 · Trimester 2, 2026 ──────────────────────────────────────
  {
    id: 'rgp204',
    studyPeriod: 6,
    studyYear: 2,
    year: '2026',
    trimester: 2,
    subjectType: 'core',
    subject: 'Rapid Game Prototype',
    status: 'completed',
    description:
      'Three-member team project (Team KAS) — developed "KAS", a gothic 3D platformer built in Unity 6 where players control Kas, a winged bard navigating a dark, mechanised fairy-tale world of lamp-post platforms, blade traps, and turrets. The project ran across three rapid-prototyping sprints: a first playable prototype with three core mechanics (double jump, glide, and invincibility i-frames), then crafting, inventory, and rune-puzzle systems, and finally a polished vertical slice combining the strongest parts of both into a cave finale. Kira\'s role was Lead Developer & Integrator — all C# gameplay programming (glide, double jump, i-frame shields, HP feathers, turrets, jump buffering, coyote time), integrating every teammate\'s model, texture, sound, and animation into Unity, plus VFX, UI, the final WebGL build, and setting up and running the team\'s Jira board. She also designed and built a separate React + TypeScript showcase website with the Unity WebGL build embedded, deployed on Vercel and published on itch.io. Released publicly and playable in-browser.',
    images: [
      '/images/projects/rgp204_kas_1.png',
      '/images/projects/rgp204_kas_2.png',
      '/images/projects/rgp204_kas_3.png',
    ],
    finalScore: '-',
    link: 'https://kas-project.vercel.app',
    presentationFile: '/images/projects/finalProjects/RGP204_KiraZakirov_A3_Postmortem.pdf',
  },
  {
    id: 'dgdvl100',
    studyPeriod: 6,
    studyYear: 2,
    year: '2026',
    trimester: 2,
    subjectType: 'elective',
    subject: 'Visual Language of Design',
    status: 'completed',
    description:
      'Across three linked assessments, Kira developed a cohesive body of work under the concept "Unfold — A Celebration of Design through Time", framed as a travelling pop-up exhibition on the history of design. For Elements of Design she produced two handmade postcards exploring opposing "faces of time" — a "Moment" piece using line and emphasis (frayed twine torn at the rule-of-thirds) and a "Movement" piece using shape and motion (a lemon peeled into one continuous spiral), photographed on coloured paper rather than edited digitally. For Periods of Design she studied typographers Herb Lubalin and Alan Fletcher and translated their principles into original tote-bag designs built entirely from the word UNFOLD. For Design Interpretation she designed a paired poster series comparing Kyiv and Melbourne as two far-apart but kindred tram-and-river cities — using flat silhouettes, redrawn transit maps in real route colours, and city emblems to demonstrate emphasis and balance. All finals were hand-drawn and rebuilt as original vector art in a restrained one-to-three-colour palette, using Illustrator, Photoshop, and InDesign — no tracing, stock, or AI.',
    images: [
      '/images/projects/dgdvl100_kyiv_1.png',
      '/images/projects/dgdvl100_melbourne_1.png',
      '/images/projects/dgdvl100_kyiv_2.png',
      '/images/projects/dgdvl100_melbourne_2.png',
    ],
    finalScore: '-',
  },
  {
    id: 'wil302',
    studyPeriod: 6,
    studyYear: 2,
    year: '2026',
    trimester: 2,
    subjectType: 'core',
    subject: 'Work Integrated Learning',
    status: 'completed',
    description:
      'Industry placement as a remote software developer at CSM Security Solutions — a national trade-only electronic security distributor based in Marleston, South Australia. Working with CSM\'s National Marketing Manager, Kira took full ownership of a real business product: an internal stocktaking web application to replace the static Excel spreadsheet exported from NetSuite that warehouse teams relied on, which lacked multi-user access, an audit trail, and real-time tracking. She ran the project end to end — scoping it with the client and producing a formal Technical Response analysing the ~1,829-product source data, then choosing her own stack and building the app: product search by text or barcode scan, physical count entry with staff and timestamp audit trail, discrete stocktake sessions, a live progress dashboard with variance views, session history, Excel export, and an admin panel for managing products, users, and NetSuite imports. Built with Next.js, React, Material UI, Prisma, and Supabase (PostgreSQL and Auth), deployed on Vercel. She completed the required ~90 placement hours across three supervisor-signed timesheets, applying client-facing scoping, full-stack development, and self-directed decision-making under ambiguity.',
    images: [
      '/images/projects/wil302_app_home.png',
      '/images/projects/wil302_app_search.png',
      '/images/projects/wil302_app_admin.png',
    ],
    finalScore: '-',
  },

  // ── Planned (remaining subjects) ─────────────────────────────────────────
  {
    id: 'gdp204',
    studyPeriod: 7,
    studyYear: 3,
    year: '2026',
    trimester: 3,
    subjectType: 'core',
    subject: 'Game Development PlayStation',
    status: 'planned',
    description: '',
    images: [],
    finalScore: '-',
  },
  {
    id: 'ppr301',
    studyPeriod: 7,
    studyYear: 3,
    year: '2026',
    trimester: 3,
    subjectType: 'core',
    subject: 'Pre-Production Capstone 1',
    status: 'planned',
    description: '',
    images: [],
    finalScore: '-',
  },
  {
    id: 'wil302b',
    studyPeriod: 7,
    studyYear: 3,
    year: '2026',
    trimester: 3,
    subjectType: 'core',
    subject: 'Work Integrated Learning (Industry Live Brief)',
    status: 'planned',
    description: '',
    images: [],
    finalScore: '-',
  },
  {
    id: 'aac202',
    studyPeriod: 7,
    studyYear: 3,
    year: '2026',
    trimester: 3,
    subjectType: 'core',
    subject: 'Advanced 3D Asset Creation',
    status: 'planned',
    description: '',
    images: [],
    finalScore: '-',
  },
  {
    id: 'prd302',
    studyPeriod: 7,
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
  {
    id: 'ani203',
    studyPeriod: 7,
    studyYear: 3,
    year: '2026',
    trimester: 3,
    subjectType: 'core',
    subject: 'Animation',
    status: 'planned',
    description: '',
    images: [],
    finalScore: '-',
  },
];
