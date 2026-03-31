---
name: no_hardcoded_strings
description: Never write hardcoded strings inline in components — always extract to constants files
type: feedback
---

Never write literal strings directly in JSX or component logic. Always extract to a constants file.

**Rule:**
- String used in ONE place → put it in a local `ComponentName.constants.ts` next to the component
- String used in TWO or more places → put it in the relevant global constants file under `src/shared/constants/`
- Route paths always go in `src/shared/constants/routes.constants.ts` — never inline strings like `"/university/:projectId"`
- This applies to: route paths, labels, keys, CSS class names, API endpoints, magic numbers, config values

**Why:** User explicitly caught a hardcoded `"/university/:projectId"` string in `AppRouter.tsx` when `ROUTES` constant file already existed. Inline strings make refactoring fragile and components unreadable.

**How to apply:** Before writing any string literal in a component, ask: does a constants file for this already exist? If yes, add it there. If not, create `ComponentName.constants.ts` locally or add to the appropriate global file.

**Goal:** Components should be maximally clean — no magic strings, no magic numbers, fully dynamic and reusable.
