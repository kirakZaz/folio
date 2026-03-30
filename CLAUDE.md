# AuditMate — Claude Code Reference

## Project Overview

AuditMate is a SaaS website audit platform. Users add websites, run AI-powered audits (crawling + Anthropic analysis), and view detailed reports with issue scoring. It supports billing tiers (Stripe), Google OAuth, and multilingual UI.

**Stack:** React + MUI + Vite (frontend) / Express + Mongoose + Bull (backend) / MongoDB + Redis

---

## Monorepo Structure

```
auditmate/
  apps/
    frontend/          # @auditmate/frontend — Vite + React + TypeScript
    backend/           # @auditmate/backend — Express + TypeScript
  packages/
    shared/            # @auditmate/shared — types and constants (NOT used at runtime)
  package.json         # npm workspaces root
  CLAUDE.md            # this file
```

### CRITICAL: Shared Package Workaround

`packages/shared` is **NOT** imported as a workspace dependency at runtime. Railway's Railpack builder runs `npm install --production`, which cannot resolve workspace packages that aren't published to the registry. Instead:

- `apps/backend/src/shared/` — inlined copy of shared types/constants
- `apps/frontend/src/shared/` — inlined copy of shared types/constants

**Rule:** When modifying shared types or constants, edit BOTH copies:
- `apps/backend/src/shared/`
- `apps/frontend/src/shared/`

Never import from `@auditmate/shared` in backend or frontend code. Use relative imports: `../shared` or `../../shared`.

---

## Commands

### Root (runs both apps)
```bash
npm run dev          # start frontend + backend concurrently
npm run build        # build shared → backend → frontend
npm run test         # run all tests
npm run lint         # lint all workspaces
```

### Backend only
```bash
npm run dev -w @auditmate/backend     # tsx watch src/index.ts (port 4000)
npm run build -w @auditmate/backend   # tsc → dist/
npm run start -w @auditmate/backend   # node dist/index.js
npm run test -w @auditmate/backend    # vitest run
```

### Frontend only
```bash
npm run dev -w @auditmate/frontend    # vite dev server (port 5173)
npm run build -w @auditmate/frontend  # tsc + vite build → dist/
npm run test -w @auditmate/frontend   # vitest run
```

---

## Environment Variables

### Backend (`apps/backend/.env`)

All validated at startup via Zod in `src/constants/envConstants.ts`. Server **exits** if any required var is missing.

| Variable | Required | Default | Notes |
|---|---|---|---|
| `NODE_ENV` | no | `development` | `development` / `production` / `test` |
| `PORT` | no | `4000` | HTTP port |
| `MONGODB_URI` | YES | — | MongoDB Atlas connection string |
| `JWT_ACCESS_SECRET` | YES | — | Min 32 chars |
| `JWT_REFRESH_SECRET` | YES | — | Min 32 chars, different from access |
| `JWT_ACCESS_EXPIRES_IN` | no | `15m` | Access token TTL |
| `JWT_REFRESH_EXPIRES_IN` | no | `7d` | Refresh token TTL |
| `GOOGLE_CLIENT_ID` | YES | — | From Google Cloud Console |
| `GOOGLE_CLIENT_SECRET` | YES | — | From Google Cloud Console |
| `GOOGLE_CALLBACK_URL` | YES | — | Must be exact URL registered in Google Console. In prod: `https://<railway-domain>/api/auth/google/callback` |
| `ANTHROPIC_API_KEY` | YES | — | Claude API key |
| `STRIPE_SECRET_KEY` | YES | — | `sk_live_...` or `sk_test_...` |
| `STRIPE_WEBHOOK_SECRET` | YES | — | From Stripe webhook dashboard |
| `STRIPE_STARTER_PRICE_ID` | YES | — | Stripe Price ID for Starter plan |
| `STRIPE_PRO_PRICE_ID` | YES | — | Stripe Price ID for Pro plan |
| `STRIPE_AGENCY_PRICE_ID` | YES | — | Stripe Price ID for Agency plan |
| `REDIS_URL` | no | `redis://localhost:6379` | Used by Bull queue |
| `SMTP_HOST` | YES | — | e.g. `smtp.gmail.com` |
| `SMTP_PORT` | no | `465` | |
| `SMTP_USER` | YES | — | |
| `SMTP_PASS` | YES | — | |
| `EMAIL_FROM` | YES | — | Must be a valid email address |
| `FRONTEND_URL` | YES | — | Exact Vercel URL, e.g. `https://auditmate.vercel.app`. Used for CORS `origin`. |

### Frontend (`apps/frontend/.env` or Vercel env vars)

| Variable | Required | Notes |
|---|---|---|
| `VITE_API_BASE_URL` | YES | Railway backend URL, e.g. `https://<service>.railway.app/api`. Must NOT end with slash. |

#### Backend dev-only vars (`apps/backend/.env`)

| Variable | Value | Notes |
|---|---|---|
| `LLM_PROVIDER` | `mock` | Skip Claude API calls during development — free, instant |

**Why not a proxy?** Vercel rewrites do not forward `Set-Cookie` headers, so the HTTP-only refresh token cookie would be lost. `VITE_API_BASE_URL` points directly to Railway.

---

## Deployment

### Backend — Railway
- **Builder:** Railpack (auto-detected). Ignores `Dockerfile` and `railway.toml`.
- **Start command:** `npm run start -w @auditmate/backend` (runs `node dist/index.js`)
- **Build command:** `npm run build -w @auditmate/shared && npm run build -w @auditmate/backend`
- **Filesystem:** Ephemeral. Do NOT store files on disk (no `/uploads` in production). Avatars are stored in MongoDB (`AvatarModel`).
- **Services needed:** MongoDB (Atlas), Redis (Railway Redis plugin)

### Frontend — Vercel
- **Framework preset:** Vite
- **Build command:** `npm run build -w @auditmate/frontend`
- **Output dir:** `apps/frontend/dist`
- **Root dir:** `.` (repo root, NOT `apps/frontend`)
- **Linux binaries:** `@rollup/rollup-linux-x64-gnu` and `@esbuild/linux-x64` are in `optionalDependencies` in `apps/frontend/package.json` — this is intentional to fix esbuild binary errors on Vercel.

---

## Architecture

### Auth Flow

1. **Register/Login** — POST `/api/auth/register` or `/api/auth/login`
2. Response: `{ accessToken }` in body + `refreshToken` as HTTP-only cookie (`SameSite=None; Secure`)
3. `axiosClient` attaches `Authorization: Bearer <accessToken>` on every request
4. On 401: interceptor calls `/api/auth/refresh` (sends cookie automatically), gets new `accessToken`, retries original request
5. On refresh failure: clears Redux store, clears localStorage/sessionStorage, redirects to `/login`
6. **Google OAuth:** GET `/api/auth/google` → Google → `/api/auth/google/callback` → 302 to `<FRONTEND_URL>/auth/google/callback?token=<accessToken>` → OAuthCallbackPage stores token + fetches `/me`
7. **Inactivity logout:** 20-minute timer using `localStorage.last_active_at` + `visibilitychange` event. Implemented in `useInactivityLogout` hook, mounted in `ThemedRoutes`.
8. **Account linking:** Google and email accounts with the same email are treated as the same user (linked by email in `authService`).

### LLM Provider

Controlled by `LLM_PROVIDER` env var in `apps/backend/.env`:

| Value | Behaviour |
|---|---|
| `claude` (default) | Real Anthropic API — costs money |
| `mock` | `MockProvider` — no API calls, returns rule-based issues for free |

**For local development:** set `LLM_PROVIDER=mock` in `apps/backend/.env`.
**For production:** omit the var or set `LLM_PROVIDER=claude`.

Mock provider checks: missing title, missing meta description, missing H1, images without alt, thin content (<300 words), slow page load (>3s). Returns realistic scores and issues.

Factory: `apps/backend/src/services/llm/llmProviderFactory.ts`
Mock: `apps/backend/src/services/llm/mockProvider.ts`

### Audit Pipeline

1. POST `/api/audits/websites/:websiteId/start` — creates `AuditModel` with status `queued`, adds job to Bull queue
2. `auditProcessor.ts` picks up job:
   - `queued` → `crawling`: `CrawlerFactory.create()` detects whether to use Puppeteer or Cheerio
   - Crawls all pages up to `PLAN_PAGE_LIMITS[user.plan]`
   - Saves raw `AuditPageModel` docs
   - `crawling` → `analyzing`: sends pages to `LlmProviderFactory.create()` (Claude)
   - Claude returns issues + score per page
   - Updates pages with issues, computes `overallScore`, `issuesSummary`
   - `analyzing` → `completed`
3. Frontend polls audit status via React Query (`useAudit` hook) every 3s while status is not `completed`/`failed`/`cancelled`

### Plan Limits (in `shared/constants/planConstants.ts`)

| Plan | Pages/audit | Websites |
|---|---|---|
| free | 10 | 1 |
| starter | 100 | 1 |
| pro | 500 | 3 |
| agency | 2000 | 10 |

### Avatar Storage

- Upload: POST `/api/auth/me/avatar` (multipart, field `avatar`) → `multer.memoryStorage()` → upsert `AvatarModel` (MongoDB Buffer, one doc per userId)
- Serve: GET `/api/auth/avatars/:userId` — public endpoint, no auth. Returns buffer with `Cross-Origin-Resource-Policy: cross-origin` (required because frontend on Vercel loads from Railway)
- Old `/uploads/` paths are stripped in `authService.toPublicUser` to prevent broken image requests

---

## Frontend Architecture

### State Management

- **Redux Toolkit + redux-persist** (`authSlice`) — persists `user` and `accessToken` to localStorage
- **React Query** (`@tanstack/react-query`) — all API data fetching, caching, and invalidation
- **UI state** (`uiSlice`) — notification toasts only

### Key Patterns

```typescript
// Always use React.useState, React.useEffect etc — NOT named imports
const [open, setOpen] = React.useState(false);

// Always use t() for user-visible strings — no hardcoded English
const { t } = useTranslation();
<Typography>{t('websiteDetail.avg_score')}</Typography>

// Date formatting — always undefined locale (respects browser/OS locale)
new Date(audit.createdAt).toLocaleDateString(undefined, { day: 'numeric', month: 'short' })

// Navigation
const navigate = useNavigate();
navigate(ROUTES.AUDIT_REPORT(audit._id));
```

### Theme

All colors come from `COLOR_TOKENS` (imported from `src/theme/themeTokens.ts`). Never hardcode hex colors in components. `COLOR_TOKENS` automatically uses dark or light values based on current theme context.

Key tokens: `bgPrimary`, `bgSecondary`, `bgCard`, `textPrimary`, `textSecondary`, `textMuted`, `accentPrimary`, `accentSuccess`, `accentWarning`, `accentDanger`, `borderDefault`.

### i18n

- Library: `react-i18next`
- Locale files: `apps/frontend/src/i18n/locales/en.json` and `ru.json`
- **Rule:** Every user-visible string must use `t('namespace.key')`. Never add hardcoded English text to JSX.
- When adding a new string: add to BOTH `en.json` AND `ru.json` simultaneously.
- Russian pluralization uses `_one`, `_few`, `_many`, `_other` suffixes. English uses `_one`, `_other`.

### Charts

All SVG charts are custom — no chart library. Examples:
- `ScoreRing` — SVG circle gauge (in `AuditReportPage`)
- `ScoreTrend` — SVG line chart with gradient fill (in `WebsiteDetailPage`, `DashboardPage`)
- `IssuesDonut` — SVG donut chart (in `DashboardPage`)
- `IssueStackBar` — proportional bar (in `AuditReportPage`)

### Routes (frontend)

| Path | Component | Notes |
|---|---|---|
| `/login` | LoginPage | Public |
| `/register` | RegisterPage | Public |
| `/auth/google/callback` | OAuthCallbackPage | Public, reads `?token=` |
| `/dashboard` | DashboardPage | Protected |
| `/websites` | WebsitesPage | Protected, shows 2 latest audits per card |
| `/websites/:websiteId` | WebsiteDetailPage | Protected, analytics + full audit history |
| `/audits/:auditId` | AuditReportPage | Protected, score ring + inline pages |
| `/audits/:auditId/pages` | AuditPagesPage | Protected |
| `/audits/:auditId/pages/:pageId` | AuditPageDetailPage | Protected |
| `/billing` | BillingPage | Protected |
| `/settings` | SettingsPage | Protected |

---

## Backend Architecture

### API Routes

All routes are under `/api/`:

| Prefix | File | Notes |
|---|---|---|
| `/api/auth` | `authRoutes.ts` | Register, login, logout, refresh, Google OAuth, profile, avatar |
| `/api/websites` | `websiteRoutes.ts` | CRUD for websites, all behind `authMiddleware` |
| `/api/audits` | `auditRoutes.ts` | Start, get, list, pages, cancel, delete, diff |
| `/api/subscriptions` | `subscriptionRoutes.ts` | Stripe checkout, portal, webhook |
| `/api/dashboard` | `dashboardRoutes.ts` | Aggregated stats for dashboard |
| `/api/dev` | `devRoutes.ts` | Plan switching for dev/test only |
| `/health` | inline | Health check, no auth |

### Middleware Order (important)

1. `helmet()` — security headers
2. `cors()` — must be before routes; `origin: ENV.FRONTEND_URL`, `credentials: true`
3. `globalRateLimit` — express-rate-limit
4. `/api/subscriptions/webhook` raw body — **must be before** `express.json()` for Stripe signature verification
5. `express.json()`
6. `cookieParser()`
7. `passport.initialize()`
8. Routes
9. `errorMiddleware` — last

### Models

| Model | Collection | Key fields |
|---|---|---|
| `UserModel` | `users` | email, passwordHash, googleId, plan, refreshTokens[], preferences |
| `WebsiteModel` | `websites` | userId, name, url |
| `AuditModel` | `audits` | websiteId, userId, status, overallScore, issuesSummary, progress |
| `AuditPageModel` | `auditpages` | auditId, websiteId, url, issues[], pageScore, aiPageSummary |
| `AvatarModel` | `avatars` | userId (unique), data (Buffer), contentType |

### Error Handling

Use `next(error)` pattern. `errorMiddleware` catches all and returns `{ success: false, error: { message, code } }`. Never `res.json({ error })` directly in controllers.

---

## File Organization

### Component folder structure

Every component (page, sub-component, or shared component) lives in its own folder with strict file separation:

```
src/pages/PageName/
  FirstAuditPopup.tsx                   # component JSX and logic only — no inline styles, no type definitions, no utility functions
  PageName.styles.ts          # all sx style objects for this component
  PageName.types.ts           # all TypeScript types and interfaces for this component
  PageName.utils.ts           # all computation functions and helpers for this component
  components/               # sub-component used only by this page — same structure
    FirstAuditPopup.tsx
    SubComponent.styles.ts
    SubComponent.types.ts
    SubComponent.utils.ts
```

Omit `.types.ts` or `.utils.ts` if empty — only create files that have content.

### Local vs global

| Used by | Where to put it |
|---|---|
| Exactly one component | sub-folder inside that component's folder |
| Two or more components | `src/components/ComponentName/` (global) |
| Helper function, one component | `ComponentName.utils.ts` in that component's folder |
| Helper function, 2+ components | `src/utils/utilName.ts` |
| Shared TypeScript types | `src/types/` |
| Shared styles/theme tokens | `src/styles/` or `src/theme/` |

### Styles (`ComponentName.styles.ts`)

- Export a single `styles` object: `export const styles = { container: {...}, header: {...} }`
- All `sx` values go here — never inline in JSX
- Import in component: `import { styles } from './ComponentName.styles'`

### Types (`ComponentName.types.ts`)

- All TypeScript interfaces and types for the component live here
- Props interface must be named `ComponentNameProps`
- Export all types — import them in `FirstAuditPopup.tsx`

### Utils (`ComponentName.utils.ts`)

- Pure functions only — no React imports, no hooks
- No business logic in JSX — extract all computations here
- No hardcoded values — use named constants

### Existing global components (in `src/components/`)

| Component | Props | Notes |
|---|---|---|
| `ScoreRing` | `score`, `size?: 'sm' \| 'lg'` | sm=60px (WebsitesPage cards), lg=110px (AuditReportPage) |
| `IssueStackBar` | `critical`, `warning`, `info` | proportional colored bar |
| `AuditStatusChip` | `status` | |
| `ScoreBadge` | — | |
| `IssueSeverityChip` | — | |
| `BackButton` | — | |

### Existing global utils (in `src/utils/`)

| File | Exports |
|---|---|
| `scoreUtils.ts` | `getScoreColor(score)` → color token string |
| `avatarUtils.ts` | `getAvatarSrc(url)`, `getInitials(name)` |

> **Migration note:** The existing codebase uses the older `ComponentName.tsx` / `pageNameStyles.ts` / `pageNameUtils.ts` naming. New components and pages must use the new folder + file separation structure above. Existing files are migrated incrementally.

---

## Code Conventions

### TypeScript

- Strict mode enabled in both apps
- No `any` — use proper types from `src/shared/types/` or component's `.types.ts`
- Controller functions typed as `RequestHandler` or explicit `(req, res, next) => void`
- Props must follow this pattern: `const Component = ({ prop1, prop2 }: ComponentProps) => {}`
- All types must be explicitly defined — never rely on inference for exported interfaces
- All variable names must be descriptive and self-explanatory — never use `x`, `y`, `i`, `tmp`, `res`, `btn` etc.

### React Components

- Functional components only
- `React.X` style for hooks (not destructured named imports): `React.useState`, `React.useEffect`, `React.useMemo`, `React.useCallback`
- Never define components inline inside other components — always extract to separate files
- Wrap all pure sub-components with `React.memo`
- Memoize expensive computations with `React.useMemo`
- Memoize callback functions passed as props with `React.useCallback`
- Export only the main page component as default from `FirstAuditPopup.tsx`
- All comments must be written in English only

### API Layer (frontend)

Pattern: `src/api/*.ts` contains thin wrappers over `axiosClient`. `src/hooks/use*.ts` wraps API calls with React Query. Pages import hooks, not API functions directly.

```typescript
// api/auditApi.ts
export const auditApi = {
  list: (websiteId, page, limit) => axiosClient.get(`/audits/websites/${websiteId}?page=${page}&limit=${limit}`),
  delete: (auditId) => axiosClient.delete(`/audits/${auditId}`),
};

// hooks/useAudits.ts
export const useDeleteAudit = () => useMutation({
  mutationFn: (auditId) => auditApi.delete(auditId),
  onSuccess: () => queryClient.invalidateQueries({ queryKey: ['audits'] }),
});
```

### Notifications

Use `dispatch(addNotification({ type: 'success' | 'error' | 'info', message: t('...') }))` from `uiSlice`. Never use `alert()` or browser confirm for errors — confirm dialogs are acceptable only for destructive actions.

---

## Performance Rules

- Lazy load all routes and heavy components using `React.lazy` and `Suspense`
- Never mutate state directly — always return new objects and arrays
- Avoid unnecessary re-renders — use `React.memo` for pure components, `React.useMemo` for expensive computations, `React.useCallback` for handlers passed as props
- No business logic inside JSX — extract to `.utils.ts` functions

---

## SEO Rules

- All pages must have unique and descriptive `<title>` and `<meta name="description">`
- All images must have descriptive `alt` attributes
- Use semantic HTML elements — never use `div` where `header`, `main`, `nav`, `section`, `article`, or `button` is appropriate
- Heading hierarchy must be correct — only one `h1` per page, followed by `h2`, `h3` in order

---

## Responsive Design Rules

The app must be fully responsive — no horizontal scrollbars, no fixed-width containers that overflow on small screens.

### Breakpoints (MUI defaults)
| Name | Width | Target |
|---|---|---|
| `xs` | 0–599px | Mobile portrait |
| `sm` | 600–899px | Mobile landscape / small tablet |
| `md` | 900–1199px | Tablet / small laptop |
| `lg` | 1200px+ | Desktop |

### Layout
- `AppLayout` sidebar collapses to a slide-out drawer on `md` and below (`isMobile = useMediaQuery(theme.breakpoints.down('md'))`)
- Page containers use `padding: { xs: 2, md: '40px 48px' }` — never hardcoded padding
- Never use `minWidth` on full-page containers — use `maxWidth` with `margin: '0 auto'` instead
- No `overflow: hidden` on the root — let content reflow naturally

### Typography & spacing
- Font sizes use `{ xs: '1.5rem', md: '2rem' }` responsive objects where text needs to scale
- Grid columns use `xs: 12, sm: 6, md: 4` etc. — never fixed column counts
- Use `flexWrap: 'wrap'` on flex rows that contain multiple cards or stat blocks

### Components
- Cards and stat blocks: full width on mobile (`xs: 12`), side-by-side on desktop
- Tables/lists: on mobile prefer stacked card layout over horizontal rows
- Buttons and inputs: `fullWidth` on mobile (`xs`), natural width on `sm+`
- Never hardcode pixel widths on interactive elements — use `%`, `flex`, or MUI grid

### What to avoid
- `minWidth: <fixed px>` on any container rendered inside the page
- `width: <fixed px>` that is larger than common mobile viewport widths (360–430px)
- Horizontal `overflow: scroll` as a solution to layout overflow — fix the layout instead

---

## Testing

- Framework: Vitest (both apps)
- Frontend tests: `@testing-library/react`
- Test files: co-located with source, e.g., `src/components/ScoreBadge/scoreBadge.test.tsx`
- Backend tests: `src/services/__tests__/*.test.ts`
- Run: `npm run test` from root

---

## Common Pitfalls

1. **Do NOT use `@auditmate/shared` imports** in `apps/backend` or `apps/frontend`. Use relative paths to the inlined `src/shared/` copies.

2. **Do NOT store files on disk in backend.** Railway filesystem is ephemeral — files are lost on redeploy. Use MongoDB for binary storage.

3. **Helmet blocks cross-origin image loads.** When serving binary assets from the backend that are loaded by the Vercel frontend, add: `res.set('Cross-Origin-Resource-Policy', 'cross-origin')`.

4. **Stripe webhook needs raw body.** The `/api/subscriptions/webhook` route uses `express.raw()` instead of `express.json()`. This middleware must be registered BEFORE `express.json()`.

5. **CORS credentials.** `axiosClient` always sends `withCredentials: true`. Backend must have `credentials: true` in cors config and `origin` must be an exact URL (not `*`).

6. **Google OAuth redirect_uri_mismatch.** `GOOGLE_CALLBACK_URL` in backend env must exactly match the authorized redirect URI in Google Cloud Console. In production: `https://<railway-domain>/api/auth/google/callback`.

7. **Adding i18n keys.** Always add to BOTH `en.json` and `ru.json`. Russian uses plural suffixes (`_one`, `_few`, `_many`, `_other`); English uses `_one` and `_other`.

8. **React import style.** This project uses `React.useState` etc., not `import { useState }`. Keep this consistent.

9. **Color tokens.** Never hardcode hex colors in components. Always use `COLOR_TOKENS.xxx` from `src/theme/themeTokens`.

10. **Audit page sort.** Pages in AuditReportPage are always sorted client-side: critical desc → warning desc → score asc. The backend returns pages in insertion order; sorting happens in the component.

11. **i18n plural key asymmetry.** English uses a single `audits_count` key (`"{{count}} audits"`) while Russian requires `audits_count_one/few/many/other`. This is correct i18next behaviour — do not "fix" it by adding `_one/_other` to `en.json` for keys that don't need pluralization in English.

12. **useAudits fetch limits by context.** The limit parameter is intentional and context-specific:
    - `useAudits(websiteId, 1, 2)` — WebsitesPage card (shows only 2 latest)
    - `useAudits(websiteId, 1, 50)` — WebsiteDetailPage full history
    - `useAuditPages(auditId, 1, 200)` — AuditReportPage fetches all pages at once for client-side sort/filter
    Do not change these limits without understanding the UX intent.

13. **WelcomePage.** Lives at `apps/frontend/src/pages/DashboardPage/WelcomePage.tsx`. DashboardPage renders it instead of the dashboard when the user has no websites. It has hardcoded English strings (intentional — it's a marketing-style landing, not a data page). Do not add it to the router as a separate route.

14. **confirm() for destructive actions.** `confirm()` is intentionally used for audit deletion (WebsiteDetailPage, WebsitesPage) and website deletion (WebsitesPage). This is the approved pattern for irreversible deletes. For non-destructive errors use `dispatch(addNotification(...))`.

15. **devRoutes are development-only.** `PATCH /api/dev/switch-plan` returns 404 in any environment where `NODE_ENV !== 'development'`. The route is registered in all environments but self-guards at the middleware level. Do not add production plan-switching logic here.
