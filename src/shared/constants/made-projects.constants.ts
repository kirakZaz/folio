// =============================================================================
// SITES I'VE BUILT — live websites and web apps Kira designed and developed
// =============================================================================
// Shown on the /projects route. Each entry is a real, deployed site.
// `tech` may be empty when the stack is not confirmed — never guessed.

export interface MadeProjectLink {
  label: string;
  href: string;
}

export interface MadeProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  context: string;
  year: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  links?: MadeProjectLink[];
}

export const MADE_PROJECTS: MadeProject[] = [
  {
    id: 'kas',
    title: 'KAS',
    tagline: 'Showcase site for a gothic 3D platformer',
    description:
      'A showcase website for KAS — a gothic 3D platformer — with the Unity WebGL build embedded so visitors can play straight in the browser. Built solo as the team’s web integration.',
    context: 'RGP204 · Rapid Game Prototype',
    year: '2026',
    tech: ['React', 'TypeScript', 'Vite', 'MUI', 'Framer Motion', 'Unity WebGL'],
    image: '/images/projects/site_kas.png',
    liveUrl: 'https://kas-project.vercel.app',
    links: [{ label: 'itch.io', href: 'https://kirazaz.itch.io/kas' }],
  },
  {
    id: 'roach',
    title: 'Roach',
    tagline: 'Official site for a 2D pixel-art platformer',
    description:
      'The official website for Roach — a 2D pixel-art action platformer set in a post-apocalyptic underground world — linking to the playable build and the team’s project presentations.',
    context: 'GPF104 · Game Production Foundation',
    year: '2025',
    tech: [],
    image: '/images/projects/site_roach.png',
    liveUrl: 'https://roach-website.vercel.app',
  },
  {
    id: 'ship-it',
    title: 'Ship It',
    tagline: 'Interactive essay — the “good crunch” simulator',
    description:
      'An interactive academic artefact framed as an internal HR dashboard: you play a Senior Producer making a series of “routine” management decisions in the six weeks before a AAA game ships, surfacing the hidden cost of games-industry crunch. Takes about five minutes.',
    context: 'GST201 · Game Studies',
    year: '2026',
    tech: [],
    image: '/images/projects/site_shipit.png',
    liveUrl: 'https://interactive-artifact-psi.vercel.app/',
  },
  {
    id: 'unclutter',
    title: 'Unclutter',
    tagline: 'Community platform for sharing what you no longer need',
    description:
      'A neighbourhood platform where people give, share, and circulate unwanted items instead of binning them — built around belonging rather than transactions. Features community hubs, a give-and-receive flow, events, a hub map, and an impact dashboard tracking items circulated and CO₂ saved.',
    context: 'PBL202 · Problem Based Learning Studio',
    year: '2026',
    tech: ['React', 'TypeScript', 'Vite', 'MUI', 'Redux Toolkit', 'React Query'],
    image: '/images/projects/site_unclutter.png',
    liveUrl: 'https://unclutter-rho.vercel.app/',
  },
  {
    id: 'csm',
    title: 'CSM Stocktaking',
    tagline: 'Internal stocktaking app for a security distributor',
    description:
      'A stocktaking web app built for CSM Security Solutions during an industry placement, replacing their static NetSuite Excel export: product search by text or barcode scan, physical count entry with a staff-and-timestamp audit trail, multi-stage stocktake sessions with review-and-approve, a live progress dashboard with variance tracking, Excel export, and an admin panel for products, users, and imports.',
    context: 'WIL302 · Work Integrated Learning',
    year: '2026',
    tech: ['Next.js', 'React', 'MUI', 'Prisma', 'Supabase', 'PostgreSQL'],
    image: '/images/projects/site_csm.png',
  },
];
