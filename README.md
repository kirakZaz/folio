# Kira — Portfolio

> CDM303A Portfolio · Torrens University Australia
> A living document of academic and creative journey across three assessments.

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 + TypeScript | UI framework |
| Vite | Build tool & dev server |
| MUI v5 | Component library |
| Redux Toolkit | Global state management |
| TanStack React Query | Server state & data fetching |
| React Router v6 | Client-side routing |
| Vitest + Testing Library | Unit testing |
| ESLint + Prettier | Code quality & formatting |

## Project Structure

```
src/
├── app/                    # Redux store, typed hooks, providers
│   ├── hooks.ts
│   ├── store.ts
│   └── providers/
│       └── AppProviders.tsx
├── components/             # Reusable UI components
│   ├── AssessmentCard/
│   ├── HeroSection/
│   ├── Layout/
│   └── SectionPlaceholder/
├── features/               # Redux slices by domain
│   └── assessments/
├── pages/                  # Route-level page components
│   ├── HomePage/
│   └── Assessment1Page/
├── router/                 # React Router configuration
│   └── AppRouter.tsx
├── theme/                  # MUI theme & design tokens
│   ├── theme.ts
│   └── themeTokens.ts      # ← Edit this in Assessment 2
└── test/                   # Test utilities & setup
    ├── setup.ts
    └── testUtils.tsx
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Lint
npm run lint

# Format
npm run format
```

## Assessment Progress

| Assessment | Status | Weight | Due |
|-----------|--------|--------|-----|
| A1 — Research & Personal Brand Positioning | 🟡 In Progress | 20% | Module 3 |
| A2 — Portfolio Teaser & Cover Letter | 🔒 Not Started | 30% | Module 6 |
| A3 — Portfolio & Resume | 🔒 Not Started | 50% | Module 9 |

## Updating the Theme (Assessment 2)

All design tokens live in **`src/theme/themeTokens.ts`**.
Update the values in that file only — the rest of the codebase references them automatically.

Key tokens to replace in Assessment 2:
- `accentPrimary` — brand colour
- `fontFamilyPrimary` — brand font
- Background and text scale as needed
