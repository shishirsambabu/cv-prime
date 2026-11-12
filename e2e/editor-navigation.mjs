/**
 * Browser-level regression coverage for leaving and re-entering the editor
 * without a full page load. Two data-loss defects lived here, and neither is
 * reachable from jsdom because both depend on the real router:
 *
 * 1. Edit a field, then press Back within the autosave idle window. The editor
 *    unmounted, the pending save timer was cancelled, and the edit was never
 *    sent anywhere.
 * 2. Edit, let it save, go to the dashboard, press Back. The router restored
 *    the page with the CV it had fetched *before* the edit; the editor
 *    hydrated from that, showed the old text under a "Saved" badge, and the
 *    next keystroke autosaved the old copy over the new one.
 *
 * Run it with `npm run test:e2e` (see e2e/README.md).
 */

import { createRequire } from 'node:module';

// Resolved with require(), not `import`: a globally installed Playwright is
// found through NODE_PATH, which ESM `import` ignores. run.mjs already checks
// resolvability this way, so the specs must load it the same way.
const { chromium } = createRequire(import.meta.url)('playwright');

const BASE = process.env.E2E_BASE_URL ?? 'http://127.0.0.1:3002';
const MOCK = process.env.E2E_MOCK_URL ?? 'http://127.0.0.1:54321';
const CV_ID = '22222222-2222-4222-8222-222222222222';
const USER_ID = '11111111-1111-4111-8111-111111111111';

const results = [];
function check(name, pass, detail = '') {
  results.push({ name, pass, detail });
  process.stdout.write(`${pass ? 'ok  ' : 'FAIL'} ${name}${pass || !detail ? '' : `\n     ${detail}`}\n`);
}

/**
 * @supabase/ssr stores the session in a `sb-<first URL label>-auth-token`
 * cookie as `base64-` + base64url(JSON). Setting it by hand is what lets the
 * real, auth-gated editor page render against the stand-in backend.
 */
function sessionCookie(host) {
  const session = {
    access_token: 'mock-access-token',
    token_type: 'bearer',
    expires_in: 3600,
    expires_at: Math.floor(Date.now() / 1000) + 3600,
    refresh_token: 'mock-refresh-token',
    user: {
      id: USER_ID,
      aud: 'authenticated',
      role: 'authenticated',
      email: 'qa@cv-prime.test',
      app_metadata: { provider: 'email', providers: ['email'] },
      user_metadata: {},
      created_at: '2024-01-01T00:00:00Z',
    },
  };
  return {
    name: `sb-${new URL(MOCK).hostname.split('.')[0]}-auth-token`,
    value: 'base64-' + Buffer.from(JSON.stringify(session), 'utf8').toString('base64url'),
    domain: host,
    path: '/',
    httpOnly: false,
    secure: false,
    sameSite: 'Lax',
  };
}

const browser = await chromium.launch();
const context = await browser.newContext();
await context.addCookies([sessionCookie(new URL(BASE).hostname)]);
const page = await context.newPage();
page.setDefaultTimeout(60_000);
page.setDefaultNavigationTimeout(180_000);

// Keep the run hermetic: third-party scripts have no offline fallback and
// would otherwise hold navigations open. Answered empty rather than aborted,
// so a blocked third party does not look like a console error of our own.
const stubThirdParty = (route) =>
  route.request().url().startsWith(BASE) || route.request().url().startsWith(MOCK)
    ? route.continue()
    : route.fulfill({ status: 204, body: '' });
await context.route('**/*', stubThirdParty);

const pageErrors = [];
const consoleErrors = [];
page.on('pageerror', (error) => pageErrors.push(String(error)));
page.on('console', (message) => {
  if (message.type() !== 'error' && message.type() !== 'warning') return;
  // Third-party scripts are stubbed out above; ignore what they say about it.
  if (/cashfree|ERR_TUNNEL|ERR_INTERNET|ERR_FAILED/i.test(message.text())) return;
  consoleErrors.push(`${message.type()}: ${message.text().slice(0, 300)}`);
});

const patches = async () => (await fetch(`${MOCK}/__patches`)).json();
const saved = async (text) => JSON.stringify(await patches()).includes(text);
const editorLink = () => page.locator(`a[href="/editor/${CV_ID}"]`).first();

await fetch(`${MOCK}/__reset?seed=1`);
page.on('dialog', (dialog) => dialog.accept());

// --- 1. an edit made just before pressing Back is still saved --------------
await page.goto(`${BASE}/dashboard`, { waitUntil: 'domcontentloaded' });
await editorLink().click();
await page.waitForSelector('#personal-name', { timeout: 120_000 });
const original = await page.locator('#personal-name').inputValue();

await page.locator('#personal-name').fill('Edited Then Back');
await page.goBack();
await page.waitForURL('**/dashboard');
let flushed = false;
for (let i = 0; i < 20 && !flushed; i += 1) {
  flushed = await saved('Edited Then Back');
  if (!flushed) await page.waitForTimeout(250);
}
check('an edit made right before Back is saved, not dropped', flushed, `${(await patches()).length} PATCH requests`);

// --- 2. coming back shows what was saved, not the pre-edit copy ------------
await page.goForward();
await page.waitForSelector('#personal-name', { timeout: 120_000 });
check(
  'Forward into the editor shows the edit that was just saved',
  (await page.locator('#personal-name').inputValue()) === 'Edited Then Back',
  `${await page.locator('#personal-name').inputValue()} (the stale copy is "${original}")`,
);

await page.locator('#personal-name').fill('Second Edit');
await page.locator('a[href="/dashboard"]').first().click();
await page.waitForURL('**/dashboard');
await page.goBack();
await page.waitForSelector('#personal-name', { timeout: 120_000 });
check(
  'Back into the editor shows the latest edit',
  (await page.locator('#personal-name').inputValue()) === 'Second Edit',
  await page.locator('#personal-name').inputValue(),
);

// --- 3. and typing there cannot resurrect the stale copy -------------------
await page.locator('#personal-name').focus();
await page.keyboard.press('End');
await page.keyboard.type('!', { delay: 20 });
check('typing works after re-entry', (await page.locator('#personal-name').inputValue()) === 'Second Edit!');
await page.goBack();
await page.waitForURL('**/dashboard');
await page.waitForTimeout(1500);
const all = await patches();
const last = JSON.stringify(all[all.length - 1] ?? {});
check('the last save holds the latest text, not the stale CV', last.includes('Second Edit!') && !last.includes(`"name":"${original}"`), last.slice(0, 200));

check('no uncaught errors during the whole run', pageErrors.length === 0, JSON.stringify(pageErrors).slice(0, 800));
check('no React warnings or console errors during the whole run', consoleErrors.length === 0, JSON.stringify(consoleErrors).slice(0, 1200));

await browser.close();
const failed = results.filter((result) => !result.pass);
process.stdout.write(`\n${results.length - failed.length}/${results.length} checks passed\n`);
process.exit(failed.length === 0 ? 0 : 1);
