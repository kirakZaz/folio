import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, join } from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DIST_DIR = resolve(__dirname, '..', 'dist');
const PORT = 4199;

const ROUTES = [
  '/',
  '/experience',
  '/about',
  '/degree',
  '/art',
  '/resume',
];

function startServer() {
  const indexHtml = readFileSync(join(DIST_DIR, 'index.html'), 'utf-8');

  const server = createServer((req, res) => {
    const url = req.url.split('?')[0];
    const filePath = join(DIST_DIR, url);

    if (existsSync(filePath) && !filePath.endsWith('/') && filePath !== DIST_DIR) {
      try {
        const content = readFileSync(filePath);
        const ext = filePath.split('.').pop();
        const mimeTypes = {
          js: 'application/javascript',
          css: 'text/css',
          png: 'image/png',
          jpg: 'image/jpeg',
          svg: 'image/svg+xml',
          pdf: 'application/pdf',
          json: 'application/json',
          woff2: 'font/woff2',
          woff: 'font/woff',
          ttf: 'font/ttf',
        };
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
        res.end(content);
        return;
      } catch {
        // fall through to index.html
      }
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(indexHtml);
  });

  return new Promise((resolvePromise) => {
    server.listen(PORT, () => {
      console.log(`  Static server running on http://localhost:${PORT}`);
      resolvePromise(server);
    });
  });
}

async function prerender() {
  console.log('\n  Pre-rendering routes...\n');

  const server = await startServer();
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

  for (const route of ROUTES) {
    const page = await browser.newPage();
    const url = `http://localhost:${PORT}${route}`;

    console.log(`  Rendering: ${route}`);
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });

    // Wait for React to finish rendering
    await page.waitForSelector('#root > *', { timeout: 10000 });
    // Extra wait for animations / lazy content
    await new Promise((r) => setTimeout(r, 1500));

    let html = await page.content();

    // Remove the original static meta/title/canonical/og from index.html
    // that are duplicated by react-helmet-async (data-rh="true" versions).
    // Keep the Helmet versions (they have page-specific content).
    html = html.replace(
      /<meta name="description" content="[^"]*">\s*(?=[\s\S]*<meta name="description"[^>]*data-rh="true")/,
      '',
    );
    html = html.replace(
      /<link rel="canonical" href="[^"]*">\s*(?=[\s\S]*<link rel="canonical"[^>]*data-rh="true")/,
      '',
    );
    html = html.replace(
      /<meta property="og:type" content="[^"]*">\s*(?=[\s\S]*<meta property="og:type"[^>]*data-rh="true")/,
      '',
    );
    html = html.replace(
      /<meta property="og:url" content="[^"]*">\s*(?=[\s\S]*<meta property="og:url"[^>]*data-rh="true")/,
      '',
    );
    html = html.replace(
      /<meta property="og:title" content="[^"]*">\s*(?=[\s\S]*<meta property="og:title"[^>]*data-rh="true")/,
      '',
    );
    html = html.replace(
      /<meta property="og:description" content="[^"]*">\s*(?=[\s\S]*<meta property="og:description"[^>]*data-rh="true")/,
      '',
    );
    html = html.replace(
      /<meta property="og:image" content="[^"]*">\s*(?=[\s\S]*<meta property="og:image"[^>]*data-rh="true")/,
      '',
    );
    html = html.replace(
      /<meta name="twitter:card" content="[^"]*">\s*(?=[\s\S]*<meta name="twitter:card"[^>]*data-rh="true")/,
      '',
    );

    // Remove the original <title> if Helmet injected a page-specific one
    const helmetTitleMatch = html.match(/<title data-rh="true">([^<]*)<\/title>/);
    if (helmetTitleMatch) {
      // Remove the static title tag (without data-rh)
      html = html.replace(/<title>Kira Zakirova — Frontend Developer Portfolio<\/title>\s*/, '');
    }

    if (!html.startsWith('<!DOCTYPE') && !html.startsWith('<!doctype')) {
      html = '<!doctype html>' + html;
    }

    // Write to dist
    if (route === '/') {
      writeFileSync(join(DIST_DIR, 'index.html'), html);
    } else {
      const dir = join(DIST_DIR, route);
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, 'index.html'), html);
    }

    await page.close();
    console.log(`  ✓ ${route}`);
  }

  await browser.close();
  server.close();
  console.log(`\n  Pre-rendered ${ROUTES.length} routes.\n`);
}

prerender().catch((err) => {
  console.error('  Pre-render failed (non-fatal, site will work as SPA):', err.message);
  // Don't exit with error — the site still works without prerendering
});
