/**
 * Lightweight pre-renderer — no browser required.
 *
 * For each route it takes the Vite-built index.html and:
 *  1. Replaces <title> with a page-specific one
 *  2. Replaces <meta name="description"> with a unique description
 *  3. Replaces <link rel="canonical"> with the correct URL
 *  4. Injects OG / Twitter meta tags
 *  5. Injects JSON-LD structured data
 *  6. Injects a <noscript> block with real text content + internal links
 *     so crawlers that don't run JS still see keywords, headings, and links
 *
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
    description:
      'Senior frontend engineer with 10+ years of experience. Explore React, TypeScript, and Node.js projects across 8 companies.',
    h1: 'Kira Zakirova — Frontend Developer Portfolio',
    content: `
      <h2>Senior Front End Engineer &amp; React TypeScript Developer</h2>
      <p>
        Frontend expert with 10+ years of experience in frontend architecture and design systems.
        Explore projects built with React, TypeScript, Node.js, and modern web technologies
        across 8 companies. Currently based in Melbourne, Australia.
      </p>
    `,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        name: 'Kira Zakirova',
        jobTitle: 'Senior Frontend Engineer',
        url: SITE,
        knowsAbout: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Frontend Architecture', 'Design Systems'],
      },
    },
  },
  {
    path: '/experience',
    title: 'Work Experience — Kira Zakirova | Senior Frontend Engineer',
    description:
      '10+ years of front end development across 8 companies. React, TypeScript, and frontend architecture design systems.',
    h1: 'Work Experience',
    content: `
      <h2>Companies</h2>
      <ul>
        <li>Lead Frontend Developer — AXO Tech Inc (2024–Present). B2B SaaS platform. React, TypeScript, Redux, ReactFlow, Lexical, Playwright.</li>
        <li>Lead Frontend Developer — SharePass (2025–2026). Enterprise secure secret-sharing. React, TypeScript, Redux, OIDC, client-side encryption.</li>
        <li>Senior Frontend Developer — Beehive (2022–2024). React Native mobile app and dashboard interfaces.</li>
        <li>Frontend Developer — WellDone (2021–2022). Dashboard and analytics interfaces.</li>
        <li>Frontend Developer — JustEat (2019–2021). High-traffic food ordering platform.</li>
        <li>Frontend Developer — RoundTrip (2017–2019). Travel and booking platform.</li>
        <li>Frontend Developer — XMPie (2015–2017). Cross-media marketing automation.</li>
        <li>Frontend Developer — E-Shop Ltd (2014–2015). E-commerce platform.</li>
      </ul>
    `,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Work Experience — Kira Zakirova',
      numberOfItems: 8,
    },
  },
  {
    path: '/about',
    title: 'About Kira Zakirova — Senior Frontend Engineer',
    description:
      'Kira Zakirova — senior frontend engineer with 10+ years at 8 companies. React, TypeScript, Node.js, and design systems.',
    h1: 'About',
    content: `
      <h2>Who I am</h2>
      <p>
        I started out in design, then met Web Development and realised I care just as much about how
        things work as how they look. Over the past decade I've worked as a front end engineer and
        software developer at eight companies — from early-stage startups to established platforms.
      </p>
      <p>
        As a react typescript developer, my core stack is React and TypeScript, but I've also spent
        a lot of time with Node.js backend services, Redux, Material UI, and tools like Playwright
        and Vitest. I enjoy building frontend architecture and design systems that scale — it's what
        makes me a frontend expert who cares about long-term code health.
      </p>
      <p>
        I also work a lot with AI and LLM tools — both in products and in my own workflow. Right now
        I'm based in Melbourne, studying game design and development at Torrens University.
      </p>
      <h2>What it's like to work with me</h2>
      <ul>
        <li>Code that stays solid over time</li>
        <li>Interfaces that feel smooth and responsive</li>
        <li>Clean structure, without unnecessary complexity</li>
        <li>Thoughtful UX, not accidental decisions</li>
        <li>Experience with modern tools, including AI and LLMs</li>
        <li>Easy collaboration and quick onboarding</li>
        <li>Someone who thinks through problems, not just executes tasks</li>
        <li>Pixel-perfect attention to design details</li>
      </ul>
    `,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Kira Zakirova',
      jobTitle: 'Senior Frontend Engineer',
      url: `${SITE}/about`,
      knowsAbout: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Frontend Architecture', 'Design Systems'],
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Torrens University Australia' },
      address: { '@type': 'PostalAddress', addressLocality: 'Melbourne', addressCountry: 'AU' },
    },
  },
  {
    path: '/degree',
    title: 'Degree — Kira Zakirova | Game Design at Torrens Uni',
    description:
      "Game Design and Development degree at Torrens University. Browse completed and planned subjects in Kira Zakirova's academic journey.",
    h1: 'Degree',
    content: `
      <h2>Bachelor of Game Design and Development</h2>
      <p>
        I'm currently pursuing a Bachelor of Game Design and Development at Torrens University
        Australia. The programme blends creative design thinking with hands-on software engineering —
        covering game mechanics, 3D modelling, level design, programming patterns, and interactive
        storytelling. Each trimester builds on the previous one, moving from foundational design
        principles through to advanced prototyping and team-based capstone projects.
      </p>
      <h2>All Courses</h2>
      <p>Browse completed and planned subjects across multiple trimesters and study years.</p>
    `,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Bachelor of Game Design and Development',
      provider: { '@type': 'CollegeOrUniversity', name: 'Torrens University Australia' },
    },
  },
  {
    path: '/art',
    title: 'Art — Kira Zakirova | Drawings & Handmade Bags',
    description:
      'Original drawings and handmade leather bags by Kira Zakirova. A gallery of personal art projects.',
    h1: 'Art',
    content: `
      <h2>Drawings Gallery</h2>
      <p>Original pencil, ink, and colour drawings by Kira Zakirova.</p>
      <h2>Handmade Bags</h2>
      <p>Handcrafted leather bags — envelope clutches, crossbody bags, and more.</p>
    `,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      name: 'Art by Kira Zakirova',
      url: `${SITE}/art`,
    },
  },
  {
    path: '/resume',
    title: 'Resume — Kira Zakirova | Software Engineer Resume & CV',
    description:
      "Download or view Kira Zakirova's software engineer resume. 10+ years in React, TypeScript, and full stack engineering.",
    h1: 'Resume',
    content: `
      <h2>Professional Summary</h2>
      <p>
        Senior front end engineer and react typescript developer with over ten years of hands-on
        experience building web apps. A frontend expert who focuses on frontend architecture,
        design systems, and connecting backend to frontend through REST APIs and Node.js.
      </p>
      <h2>Technical Skills</h2>
      <p>React, TypeScript, JavaScript, Node.js, Redux Toolkit, Material UI, Styled Components, REST API, MongoDB, AWS, Vite, Webpack, Vitest, Playwright, Git, Figma, CI/CD, Agile / Scrum.</p>
      <h2>Career Highlights</h2>
      <ul>
        <li>Led frontend development at AXO Tech — designed the full architecture solo from day one</li>
        <li>Rebuilt the entire SharePass frontend from scratch as a solo developer</li>
        <li>Built React Native mobile app and complex dashboard interfaces at Beehive and WellDone</li>
        <li>Delivered UI for a high-traffic food ordering platform at JustEat</li>
        <li>Worked across B2B SaaS, e-commerce, fintech, and enterprise security domains</li>
      </ul>
    `,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Kira Zakirova',
      jobTitle: 'Senior Frontend Engineer',
      url: `${SITE}/resume`,
      knowsAbout: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Redux', 'Material UI', 'AWS'],
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Torrens University Australia' },
    },
  },
];

// ── Internal nav links block (same for every page) ───────────────────────────

const NAV_LINKS = ROUTES
  .map((r) => `<a href="${r.path}">${r.h1}</a>`)
  .join(' · ');

// ── Build ────────────────────────────────────────────────────────────────────

const template = readFileSync(join(DIST, 'index.html'), 'utf-8');

console.log('\n  Pre-rendering routes (no browser)...\n');

for (const route of ROUTES) {
  const canonical = `${SITE}${route.path === '/' ? '' : route.path}`;
  let html = template;

  // 1. Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${route.title}</title>`,
  );

  // 2. Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${route.description}"`,
  );

  // 3. Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${canonical}"`,
  );

  // 4. Replace OG tags
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${canonical}"`,
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${route.title}"`,
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${route.description}"`,
  );

  // 5. Inject JSON-LD before </head>
  html = html.replace(
    '</head>',
    `<script type="application/ld+json">${JSON.stringify(route.jsonLd)}</script>\n</head>`,
  );

  // 6. Inject real content INSIDE <div id="root"> (React overwrites on hydration)
  const staticContent = `
      <h1>${route.h1}</h1>
      ${route.content}
      <nav>${NAV_LINKS}</nav>
  `;
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${staticContent}</div>`,
  );

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
