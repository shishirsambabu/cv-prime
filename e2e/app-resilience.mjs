/**
 * Browser-level regression coverage for defects that took a whole screen away
 * from the user rather than one field:
 *
 * 1. A CV row whose `template_id` names no template (null, blank, a template
 *    since removed, a value written by hand). The dashboard indexed its
 *    template table with the raw value and threw, replacing EVERY CV with the
 *    error page; the editor rendered `undefined` as a component and did the
 *    same. Both now fall back to one template, and the first save repairs
 *    the row.
 * 2. `/login?next=/.//other.example` sent a signed-in visitor to another
 *    site: the `next` value was only checked before URL normalisation.
 * 3. The exit-intent sale dialog was mounted for every route, so moving the
 *    pointer to the tab bar covered the editor and dashboard with a purchase
 *    prompt, for paying customers too.
 * 4. Session storage that throws (site data blocked) crashed marketing pages
 *    from inside an effect.
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
const hideTab = () =>
  page.evaluate(() => {
    Object.defineProperty(document, 'visibilityState', { value: 'hidden', configurable: true });
    document.dispatchEvent(new Event('visibilitychange'));
    Object.defineProperty(document, 'visibilityState', { value: 'visible', configurable: true });
  });
const errorPageShown = async () => (await page.getByText('Something went wrong').count()) > 0;
const leaveTopOfWindow = () =>
  page.evaluate(() => {
    document.dispatchEvent(new MouseEvent('mouseleave', { clientY: 0, bubbles: false }));
  });
const saleDialogShown = async () => (await page.getByRole('dialog', { name: 'Before you go' }).count()) > 0;

// --- 1. unknown template ids ---
for (const [label, templateId] of [
  ['a removed template', 'retro-2019'],
  ['a blank template id', ' '],
]) {
  await fetch(`${MOCK}/__reset?seed=1`);
  await fetch(`${MOCK}/__set_template?id=${encodeURIComponent(templateId)}`);

  const dashboard = await page.goto(`${BASE}/dashboard`, { waitUntil: 'domcontentloaded' });
  await page.getByRole('link', { name: /^Edit/ }).first().waitFor({ timeout: 60_000 }).catch(() => {});
  check(`dashboard loads with a CV on ${label}`, dashboard.status() === 200 && !(await errorPageShown()), `status ${dashboard.status()}`);
  check(
    `the CV on ${label} can still be opened from the dashboard`,
    (await page.locator(`a[href="/editor/${CV_ID}"]`).count()) > 0,
  );

  await page.goto(`${BASE}/editor/${CV_ID}`, { waitUntil: 'domcontentloaded' });
  const nameField = page.locator('#personal-name');
  const editorUp = await nameField.waitFor({ timeout: 60_000 }).then(() => true).catch(() => false);
  check(`editor loads with a CV on ${label}`, editorUp && !(await errorPageShown()));
  if (!editorUp) continue;

  await page.waitForFunction(() => Boolean(document.querySelector('button[aria-pressed="true"]')), null, { timeout: 30_000 }).catch(() => {});
  check(
    `exactly one template is shown as selected for ${label}`,
    (await page.locator('button[aria-pressed="true"]').count()) === 1,
  );

  await nameField.click();
  await nameField.fill('');
  await page.keyboard.type('Typed After Fallback', { delay: 15 });
  check(`typing works in the editor for ${label}`, (await nameField.inputValue()) === 'Typed After Fallback');
  const previewHasText = await page
    .getByText('Typed After Fallback')
    .first()
    .waitFor({ timeout: 10_000 })
    .then(() => true)
    .catch(() => false);
  check(`the live preview renders the typed text for ${label}`, previewHasText);

  await hideTab();
  await page.waitForTimeout(1500);
  const saved = (await patches()).at(-1)?.body;
  check(
    `the save for ${label} writes a real template id and the edit`,
    saved?.template_id === 'modern' && saved?.data?.personal?.name === 'Typed After Fallback',
    JSON.stringify({ template_id: saved?.template_id, name: saved?.data?.personal?.name }),
  );
}
await fetch(`${MOCK}/__reset?seed=1`);

// --- 2. open redirect through ?next= ---
for (const next of ['/.//example.org/phish', '/%2e//example.org', '/x/..//example.org', '/\\example.org']) {
  await page.goto(`${BASE}/login?next=${encodeURIComponent(next)}`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);
  const landed = new URL(page.url());
  check(
    `signed-in /login?next=${next} stays on this site`,
    landed.origin === new URL(BASE).origin && landed.pathname === '/dashboard',
    page.url(),
  );
}
await page.goto(`${BASE}/login?next=${encodeURIComponent('/job-tracker')}`, { waitUntil: 'domcontentloaded' });
await page.waitForURL(/\/job-tracker$/, { timeout: 30_000 }).catch(() => {});
check('a genuine in-app next path is still honoured', new URL(page.url()).pathname === '/job-tracker', page.url());

// --- 3. sale dialog stays off the app ---
for (const path of ['/dashboard', `/editor/${CV_ID}`, '/settings', '/ai-cv', '/job-tracker']) {
  await page.evaluate(() => window.sessionStorage.clear()).catch(() => {});
  await page.goto(`${BASE}${path}`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1200);
  await leaveTopOfWindow();
  await page.waitForTimeout(300);
  check(`no sale dialog over ${path.replace(CV_ID, ':id')}`, !(await saleDialogShown()));
}
await page.evaluate(() => window.sessionStorage.clear()).catch(() => {});
await page.goto(`${BASE}/pricing`, { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(1500);
await leaveTopOfWindow();
check(
  'the exit-intent dialog still works on a marketing page',
  await page.getByRole('dialog', { name: 'Before you go' }).waitFor({ timeout: 5000 }).then(() => true).catch(() => false),
);

// --- 4. blocked session storage ---
const blocked = await browser.newContext();
await blocked.route('**/*', stubThirdParty);
await blocked.addInitScript(() => {
  const refuse = () => {
    throw new DOMException('The operation is insecure.', 'SecurityError');
  };
  Object.defineProperty(window, 'sessionStorage', {
    configurable: true,
    get: () => ({ getItem: refuse, setItem: refuse, removeItem: refuse, clear: refuse, key: refuse, length: 0 }),
  });
});
const blockedPage = await blocked.newPage();
blockedPage.setDefaultNavigationTimeout(180_000);
const blockedErrors = [];
blockedPage.on('pageerror', (error) => blockedErrors.push(String(error)));
for (const path of ['/', '/pricing', '/resume-tips']) {
  await blockedPage.goto(`${BASE}${path}`, { waitUntil: 'domcontentloaded' });
  await blockedPage.waitForTimeout(1500);
  await blockedPage.mouse.wheel(0, 1500);
  await blockedPage.waitForTimeout(500);
  const crashed = (await blockedPage.getByText('Something went wrong').count()) > 0;
  check(`${path} renders with session storage blocked`, !crashed && (await blockedPage.locator('h1').count()) > 0);
}
check('no uncaught errors with session storage blocked', blockedErrors.length === 0, JSON.stringify(blockedErrors).slice(0, 600));
await blocked.close();

check('no uncaught errors during the whole run', pageErrors.length === 0, JSON.stringify(pageErrors).slice(0, 800));
check('no React warnings or console errors during the whole run', consoleErrors.length === 0, JSON.stringify(consoleErrors).slice(0, 1200));

await browser.close();
const failed = results.filter((result) => !result.pass);
process.stdout.write(`\n${results.length - failed.length}/${results.length} app-resilience checks passed\n`);
process.exit(failed.length === 0 ? 0 : 1);
