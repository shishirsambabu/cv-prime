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

## The mock backend

`mock-supabase.mjs` answers the handful of GoTrue and PostgREST calls the app
makes: `GET /auth/v1/user`, `GET|PATCH /rest/v1/cvs`, `/rest/v1/profiles`, and
`/rest/v1/rpc/get_my_plan`. It also exposes two helpers for assertions:

- `GET /__patches` — every PATCH body it has received, in order
- `GET /__reset` — clear that log

Auth works by setting the `sb-127-auth-token` cookie by hand in the spec;
`@supabase/ssr` derives that cookie name from the first label of the Supabase
URL's hostname.
