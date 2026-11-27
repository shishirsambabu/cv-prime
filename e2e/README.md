# Browser regression specs

These specs drive the **real** app in Chromium — the same editor, the same
React state, the same autosave — against a stand-in Supabase backend
(`mock-supabase.mjs`). No real project, no secrets, no network.

They exist because the defects that hurt this product most are invisible to
`tsc`, `eslint` and jsdom: a field you cannot type into, a caret that jumps
mid-word, text that resets while you type, focus stolen by something else on
the page. Those only show up when real keystrokes hit a real browser.

## Running them

```bash
npm run test:e2e
```

`run.mjs` starts the mock backend on :54321, starts `next dev` on :3002 pointed
at it, and runs every spec.

Playwright is deliberately **not** a dependency of this project — its install
step downloads several hundred megabytes of browsers on every `npm ci`,
including CI, where these specs do not run. Install it once, globally:

```bash
npm i -g playwright
npx playwright install chromium
```

If `playwright` is already on the machine (many CI images and agent sandboxes
ship it), `npm run test:e2e` will just work.

## Why these are not in `npm test` / CI

`npm test` (jest) must stay fast and hermetic. The browser specs need a dev
server, a browser binary, and ~40s of wall clock (the autosave check waits out
the editor's real 30s idle window). Run them before touching the editor,
`useAutoSave`, `cvStore`, or anything in `components/editor/`.

The jsdom-level regressions these specs inspired are pinned in `__tests__/`
(`SectionPanelKeyboardDrag.test.tsx`, `useAutoSave.test.tsx`, the per-section
tests), so CI still catches the logic even though it does not open a browser.

## Specs worth knowing about

- `editor-save-conflict.mjs` — two tabs on one CV: a stale tab's autosave
  must be refused (409 CONFLICT) instead of erasing the other tab's edits,
  the stale tab must say so, and both "Keep my version here" and "Load the
  latest version" must work. A single tab must never see a false conflict.

## The mock backend

`mock-supabase.mjs` answers the handful of GoTrue and PostgREST calls the app
makes: `GET|PUT /auth/v1/user`, `/auth/v1/token`, `/auth/v1/signup`,
`/auth/v1/otp`, `/auth/v1/recover`, `GET|PATCH /rest/v1/cvs`,
`GET|PATCH /rest/v1/cover_letters`, `/rest/v1/profiles`, and
`/rest/v1/rpc/get_my_plan`. It also exposes helpers for assertions:

- `GET /__set_template?id=...` — put the stored CV on a given template id,
  including one no template exists for
- `GET /__auth_calls` — every sign-in, sign-up, magic-link, reset and
  password-update call it has received
- `GET /__auth_mode?signup=session` — make sign-up return a session (email
  confirmation off) instead of the default confirm-your-email answer
- `GET /__cover_letter` — the cover letter row and the saves it received;
  `?fail=1` makes the next saves fail

- `POST /__set_cv_data` — merge a JSON body into the stored CV's `data`, to seed
  rows the app never writes itself (null fields, a broken `sectionOrder`)
- `GET /__patches` — every PATCH body it has received, in order
- `GET /__reset` — clear that log
- `GET /__reset?seed=1` — also restore the CV row to its seed, so a spec does
  not inherit what an earlier spec in the same run saved

Auth works by setting the `sb-127-auth-token` cookie by hand in the spec;
`@supabase/ssr` derives that cookie name from the first label of the Supabase
URL's hostname.
- `marketing-contrast.mjs` — renders the marketing pages that the dark-theme
  conversion left light-on-light (and `/pricing`, whose Free plan name and
  price were white on white) and fails on any text under 2:1 contrast against
  its composited background, plus the LinkedIn counter tab hover state and
  the CGPA formula option list. `__tests__/marketingDarkThemeContrast.test.ts`
  is the static guard that runs in CI.
