/**
 * Lightweight pre-renderer — no browser required.
 * Injects unique meta tags, JSON-LD, and static content into each route's HTML.
 * Works on Vercel, Netlify, or any static host — zero external dependencies.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DIST = resolve(__dirname, '..', 'dist');
const SITE = 'https://folio-kiraz.vercel.app';

// ── Route definitions ────────────────────────────────────────────────────────

const ROUTES = [
  {
    path: '/',
    title: 'Kira Zakirova — Frontend Developer Portfolio',
    h1: 'Frontend Developer Portfolio — Kira Zakirova',
    description:
      'Kira Zakirova — founder of Koru and senior full-stack engineer with 10+ years of experience. Builds products end to end: frontend, backend, and AI. Explore projects, experience, and more.',
    content: `
      <h2>Senior Front End Engineer and React TypeScript Developer</h2>
      <p>
        Welcome to the portfolio of Kira Zakirova — a frontend expert with over ten years of
        professional experience building modern web applications. Specialising in React, TypeScript,
        and frontend architecture design systems, Kira has delivered production-grade products at
        eight companies across B2B SaaS, e-commerce, fintech, and enterprise security.
      </p>
      <p>
        Kira builds products end to end — frontend, backend, and AI. She is the founder of Koru, an
        AI-powered search-visibility platform, and a senior front end engineer who cares about clean
        code, scalable architecture, and thoughtful UX. She also studies Game Design and Development
        at Torrens University Australia in Melbourne.
      </p>
      <h2>Explore</h2>
      <ul>
        <li><a href="/experience">Work experience</a> — 10+ years across 8 companies</li>
        <li><a href="/about">About me</a> — skills, background, and what I bring to a team</li>
        <li><a href="/degree">Degree</a> — Game Design and Development at Torrens University</li>
        <li><a href="/art">Art</a> — drawings and handmade leather bags</li>
        <li><a href="/resume">Resume</a> — download or view my CV</li>
      </ul>
    `,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        name: 'Kira Zakirova',
        jobTitle: 'Founder & Senior Frontend Engineer',
        url: SITE,
        description: 'Founder of Koru and senior full-stack engineer with 10+ years of experience, building products end to end — frontend, backend, and AI.',
        knowsAbout: ['AI', 'LLM', 'AI Search Visibility', 'SEO', 'React', 'TypeScript', 'JavaScript', 'Node.js', 'Full-Stack Development', 'Frontend Architecture', 'Design Systems'],
        worksFor: { '@type': 'Organization', name: 'Koru' },
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'Torrens University Australia' },
        address: { '@type': 'PostalAddress', addressLocality: 'Melbourne', addressCountry: 'AU' },
      },
    },
  },
  {
    path: '/experience',
    title: 'Work Experience — Kira Zakirova | Senior Frontend Engineer',
    h1: 'Work Experience — 10+ Years in Frontend Development',
    description:
      'Kira Zakirova has worked as a front end engineer at 8 companies over 10+ years. React, TypeScript, frontend architecture design systems, and Node.js.',
    content: `
      <h2>Companies and Roles</h2>
      <p>
        Over the past decade Kira has worked as a react typescript developer and front end engineer
        at companies ranging from early-stage startups to established platforms. Her focus areas
        include frontend architecture design systems, component libraries, and testing infrastructure.
      </p>
      <ul>
        <li><strong>Co-Founder & CEO — Koru</strong> (2026–Present). Founder of KORU, a search-visibility platform that unifies classic SEO (site audits, keyword research, rank tracking including Google AI Mode) with AI-engine citation tracking across ChatGPT, Gemini, Claude, Grok, and Perplexity.</li>
        <li><strong>Lead Frontend Developer — AXO Tech Inc</strong> (2024–2026). B2B SaaS platform for cloud channel partners. Built the entire frontend architecture solo. React, TypeScript, Redux, ReactFlow, Lexical, Playwright, Vitest.</li>
        <li><strong>Lead Frontend Developer — SharePass</strong> (2025–2026). Enterprise secure secret-sharing platform. Rebuilt the frontend from scratch with client-side encryption, MFA, and a custom design system.</li>
        <li><strong>Senior Frontend Developer — Beehive</strong> (2022–2024). React Native mobile app and complex dashboard interfaces for a startup platform.</li>
        <li><strong>Frontend Developer — WellDone</strong> (2021–2022). Dashboard and analytics interfaces.</li>
        <li><strong>Frontend Developer — JustEat</strong> (2019–2021). High-traffic food ordering platform processing thousands of daily orders.</li>
        <li><strong>Frontend Developer — RoundTrip</strong> (2017–2019). Travel and booking platform.</li>
        <li><strong>Frontend Developer — XMPie</strong> (2015–2017). Cross-media marketing automation platform.</li>
        <li><strong>Frontend Developer — E-Shop Ltd</strong> (2014–2015). E-commerce platform development.</li>
      </ul>
    `,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Work Experience — Kira Zakirova',
      description: 'Professional experience of senior frontend engineer Kira Zakirova.',
      numberOfItems: 9,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Co-Founder & CEO at Koru' },
        { '@type': 'ListItem', position: 2, name: 'Lead Frontend Developer at AXO Tech Inc' },
        { '@type': 'ListItem', position: 3, name: 'Lead Frontend Developer at SharePass' },
        { '@type': 'ListItem', position: 4, name: 'Senior Frontend Developer at Beehive' },
        { '@type': 'ListItem', position: 5, name: 'Frontend Developer at WellDone' },
        { '@type': 'ListItem', position: 6, name: 'Frontend Developer at JustEat' },
        { '@type': 'ListItem', position: 7, name: 'Frontend Developer at RoundTrip' },
        { '@type': 'ListItem', position: 8, name: 'Frontend Developer at XMPie' },
        { '@type': 'ListItem', position: 9, name: 'Frontend Developer at E-Shop Ltd' },
      ],
    },
  },
  {
    path: '/projects',
    title: 'Projects — Kira Zakirova | Websites & Web Apps',
    h1: 'Projects — Websites and Web Apps',
    description:
      'Live websites and web apps built by Kira Zakirova — React and TypeScript game showcase sites and interactive artefacts, playable in the browser.',
    content: `
      <h2>Sites I've built</h2>
      <p>
        A selection of websites and web apps Kira Zakirova designed and developed from scratch —
        each one is live, and most are playable directly in the browser.
      </p>
      <ul>
        <li><strong>KAS</strong> — a showcase site for a gothic 3D platformer, with the Unity WebGL build embedded. Built with React, TypeScript, Vite, and Material UI. <a href="https://kas-project.vercel.app">Visit site</a>.</li>
        <li><strong>Roach</strong> — the official website for a 2D pixel-art action platformer set in a post-apocalyptic underground world. <a href="https://roach-website.vercel.app">Visit site</a>.</li>
        <li><strong>Ship It</strong> — an interactive academic artefact simulating the "good crunch" of games-industry labour, played as a studio Senior Producer. <a href="https://interactive-artifact-psi.vercel.app/">Visit site</a>.</li>
        <li><strong>Unclutter</strong> — a community platform where neighbours give, share, and circulate unwanted items instead of binning them. Built with React, TypeScript, Vite, Material UI, Redux Toolkit, and React Query. <a href="https://unclutter-rho.vercel.app/">Visit site</a>.</li>
        <li><strong>CSM Stocktaking</strong> — an internal stocktaking web app built for CSM Security Solutions during an industry placement, with barcode scanning, staff audit trails, and a live progress dashboard. Built with Next.js, React, Material UI, Prisma, and Supabase.</li>
      </ul>
      <p>
        See also Kira's <a href="/experience">work experience</a>, <a href="/about">about page</a>,
        and <a href="/degree">degree</a>.
      </p>
    `,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Projects — Kira Zakirova',
      description: 'Live websites and web apps designed and developed by Kira Zakirova.',
      url: `${SITE}/projects`,
    },
  },
  {
    path: '/about',
    title: 'About Kira Zakirova — Senior Frontend Engineer',
    h1: 'About Kira Zakirova',
    description:
      'Kira Zakirova is a frontend expert and senior front end engineer with 10+ years of experience. React, TypeScript, Node.js, frontend architecture design systems.',
    content: `
      <h2>Who I am</h2>
      <p>
        I started out in design, then discovered web development and realised I care just as much
        about how things work as how they look. Over the past decade I have worked as a front end
        engineer and software developer at eight companies — from early-stage startups to large
        platforms.
      </p>
      <p>
        As a react typescript developer, my main tools are React and TypeScript. I also work with
        Node.js backend services, Redux, Material UI, Playwright, and Vitest. I enjoy building
        frontend architecture design systems that scale well and stay easy to maintain — that is
        what makes me a frontend expert who cares about long-term code quality.
      </p>
      <p>
        I also use AI and LLM tools — both in products and in my daily workflow. Right now I am
        based in Melbourne, Australia, studying Game Design and Development at Torrens University.
        Outside of code, I draw and make leather bags by hand.
      </p>
      <h2>What you get when working with me</h2>
      <ul>
        <li>Code that stays solid over time</li>
        <li>Interfaces that feel smooth and responsive</li>
        <li>Clean structure without unnecessary complexity</li>
        <li>Thoughtful UX based on real decisions, not guesses</li>
        <li>Experience with modern tools, including AI and LLMs</li>
        <li>Easy collaboration and quick onboarding for new team members</li>
        <li>Someone who thinks through problems, not just runs tasks</li>
        <li>Pixel-perfect attention to design details</li>
      </ul>
      <p>
        Want to learn more? Check out my <a href="/experience">work experience</a>,
        browse my <a href="/resume">resume</a>, or see my <a href="/art">creative projects</a>.
      </p>
    `,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Kira Zakirova',
      jobTitle: 'Senior Frontend Engineer',
      url: `${SITE}/about`,
      description: 'Frontend expert and react typescript developer with 10+ years of experience building web applications.',
      knowsAbout: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Frontend Architecture', 'Design Systems', 'Redux', 'Material UI', 'AI', 'LLM'],
      worksFor: { '@type': 'Organization', name: 'AXO Tech Inc' },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Torrens University Australia' },
      address: { '@type': 'PostalAddress', addressLocality: 'Melbourne', addressCountry: 'AU' },
    },
  },
  {
    path: '/degree',
    title: 'Degree — Kira Zakirova | Game Design at Torrens Uni',
    h1: 'Game Design and Development Degree',
    description:
      "Kira Zakirova's Bachelor of Game Design and Development at Torrens University Australia. Browse completed and planned subjects across multiple trimesters.",
    content: `
      <h2>Bachelor of Game Design and Development</h2>
      <p>
        I am studying a Bachelor of Game Design and Development at Torrens University Australia.
        The programme covers game mechanics, 3D modelling, level design, programming patterns,
        and interactive storytelling. Each trimester builds on the last — from basic design
        principles to advanced prototyping and team capstone projects.
      </p>
      <h2>All Courses</h2>
      <p>
        Browse completed and planned subjects across multiple trimesters and study years.
        Courses include design fundamentals, 3D art, game programming, software engineering,
        and portfolio development.
      </p>
      <p>
        See also: <a href="/about">about me</a>, <a href="/experience">work experience</a>,
        or <a href="/resume">my resume</a>.
      </p>
    `,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Bachelor of Game Design and Development',
      provider: { '@type': 'CollegeOrUniversity', name: 'Torrens University Australia', url: 'https://www.torrens.edu.au' },
      description: 'Undergraduate degree covering game design, 3D modelling, programming, and interactive storytelling.',
    },
  },
  {
    path: '/art',
    title: 'Art — Kira Zakirova | Drawings & Handmade Bags',
    h1: 'Art and Creative Projects',
    description:
      'A gallery of original drawings and handmade leather bags by Kira Zakirova. Pencil, ink, and colour artwork plus handcrafted clutches and crossbody bags.',
    content: `
      <h2>Drawings Gallery</h2>
      <p>
        A collection of original pencil, ink, and colour drawings by Kira Zakirova.
        Subjects include portraits, character designs, and still life studies created
        over several years.
      </p>
      <h2>Handmade Leather Bags</h2>
      <p>
        Handcrafted leather bags designed and sewn by hand — envelope clutches, mini crossbody
        bags, and suede accessories. Each piece is a one-of-a-kind creation.
      </p>
      <p>
        Beyond art, Kira is a <a href="/about">senior frontend engineer</a> with
        <a href="/experience">10+ years of experience</a>. View her <a href="/resume">resume</a>
        or explore her <a href="/degree">university coursework</a>.
      </p>
    `,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      name: 'Art by Kira Zakirova',
      description: 'Original drawings and handmade leather bags.',
      url: `${SITE}/art`,
    },
  },
  {
    path: '/resume',
    title: 'Resume — Kira Zakirova | Software Engineer Resume & CV',
    h1: 'Software Engineer Resume',
    description:
      "Download or view Kira Zakirova's software engineer resume. Senior front end engineer with 10+ years building React and TypeScript web applications.",
    content: `
      <h2>Professional Summary</h2>
      <p>
        Senior front end engineer and react typescript developer with over ten years of hands-on
        experience building web applications for startups and established companies. A frontend
        expert who focuses on frontend architecture design systems, component libraries, and
        connecting backend to frontend through REST APIs and Node.js.
      </p>
      <p>
        Proven track record of leading frontend teams and owning entire codebases from scratch.
        Ships production-ready products with solid testing. Works remotely across time zones.
        Based in Melbourne, studying Game Design and Development at Torrens University.
      </p>
      <h2>Technical Skills</h2>
      <p>
        React, TypeScript, JavaScript, Node.js, Redux Toolkit, Material UI, Styled Components,
        REST API, MongoDB, AWS, Vite, Webpack, Vitest, Playwright, Git, Figma, CI/CD,
        Agile and Scrum.
      </p>
      <h2>Career Highlights</h2>
      <ul>
        <li>Led frontend development at AXO Tech — designed the full architecture solo from day one</li>
        <li>Rebuilt the entire SharePass frontend from scratch as a solo developer, including dark and light themes</li>
        <li>Built React Native mobile app and complex dashboard interfaces at Beehive and WellDone</li>
        <li>Delivered UI for a high-traffic food ordering platform processing thousands of daily orders at JustEat</li>
        <li>Worked across B2B SaaS, e-commerce, fintech, and enterprise security domains</li>
      </ul>
      <h2>Download</h2>
      <p>
        <a href="/KiraZakirova_CV.pdf">Download PDF resume</a>.
        Also see my <a href="/experience">detailed work experience</a> and
        <a href="/about">about page</a>.
      </p>
    `,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Kira Zakirova',
      jobTitle: 'Senior Frontend Engineer',
      url: `${SITE}/resume`,
      description: 'Senior front end engineer and react typescript developer with 10+ years of experience.',
      knowsAbout: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Redux', 'Material UI', 'AWS', 'Frontend Architecture', 'Design Systems'],
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Torrens University Australia' },
    },
  },
];

// ── Internal nav links block (same for every page) ───────────────────────────

const NAV_LINKS = `
  <nav aria-label="Main navigation">
    <a href="/">Home</a> ·
    <a href="/experience">Experience</a> ·
    <a href="/projects">Projects</a> ·
    <a href="/about">About</a> ·
    <a href="/degree">Degree</a> ·
    <a href="/art">Art</a> ·
    <a href="/resume">Resume</a>
  </nav>
`;

// ── Build ────────────────────────────────────────────────────────────────────

const template = readFileSync(join(DIST, 'index.html'), 'utf-8');

console.log('\n  Pre-rendering routes (no browser)...\n');

for (const route of ROUTES) {
  const canonical = `${SITE}${route.path === '/' ? '' : route.path}`;
  let html = template;

  // 1. Replace <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`);

  // 2. Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${route.description}"`,
  );

  // 3. Replace canonical
  html = html.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${canonical}"`);

  // 4. Replace OG tags
  html = html.replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${canonical}"`);
  html = html.replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${route.title}"`);
  html = html.replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${route.description}"`);

  // 5. Inject JSON-LD before </head>
  html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(route.jsonLd)}</script>\n</head>`);

  // 6. Inject real content INSIDE <div id="root">
  const staticContent = `
    <main>
      <h1>${route.h1}</h1>
      ${route.content}
      ${NAV_LINKS}
    </main>
  `;
  html = html.replace('<div id="root"></div>', `<div id="root">${staticContent}</div>`);

  // 7. Write file
  if (route.path === '/') {
    writeFileSync(join(DIST, 'index.html'), html);
  } else {
    const dir = join(DIST, route.path);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html);
  }

  console.log(`  ✓ ${route.path}`);
}

console.log(`\n  Pre-rendered ${ROUTES.length} routes.\n`);
