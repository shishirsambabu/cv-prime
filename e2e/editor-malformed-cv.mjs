/**
 * Browser-level regression coverage for two ways the editor could leave a
 * user unable to save, with nothing on screen saying so:
 *
 * 1. A stored CV whose `data` JSON holds a null where a string belongs (or a
 *    sectionOrder that is short or names a section that does not exist). The
 *    app never writes such a row itself, but real databases hold them: rows
 *    from before a field existed, rows touched by hand. The editor used to
 *    crash on them, and where it did not, every autosave was rejected with a
 *    400 because the null was sent straight back to the server.
 * 2. Any autosave the server rejects for a reason retrying cannot fix. The
 *    badge sat on "Unsaved changes" forever with no explanation.
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

await fetch(`${MOCK}/__reset?seed=1`);
await fetch(`${MOCK}/__set_cv_data`, {
  method: 'POST',
  body: JSON.stringify({
    personal: {
      name: 'Asha Rao',
      title: null,
      email: 'asha@example.com',
      phone: 919000000000,
      location: 'Bengaluru, India',
      linkedin: null,
      website: null,
      summary: 'Backend engineer with eight years building payment systems at scale.',
    },
    experience: [
      { id: 'exp-1', company: 'Paytm', role: 'Senior Engineer', startDate: '2020-01', endDate: null, current: null, bullets: ['Built a ledger service handling 4k TPS.'] },
    ],
    education: [
      { id: 'edu-1', institution: 'IIT Bombay', degree: 'B.Tech', field: null, startDate: '2012', endDate: '2016', gpa: null },
    ],
    projects: [{ id: 'proj-1', name: 'Ledger', description: null, tech: ['Go'], url: null }],
    sectionOrder: ['personal', 'experience', 'hobbies', 'experience', 'skills'],
  }),
});

// --- 0. the public share page serves the same row instead of a 404 ---
// The editor and print page repair such a row; /share used to answer 404 for
// it, so a link the owner had shared stopped working.
await fetch(`${MOCK}/__set_public?v=1`);
const shareResponse = await page.goto(`${BASE}/share/${CV_ID}`, { waitUntil: 'domcontentloaded' });
check('the public share page serves a CV whose stored data has null fields', shareResponse?.status() === 200, `status ${shareResponse?.status()}`);
check(
  'the shared CV shows the stored content',
  (await page.getByText('Built a ledger service handling 4k TPS.').count()) > 0 && (await page.getByText('Asha Rao').count()) > 0,
);
check('the shared CV does not print the literal text "null"', !(await page.locator('main').innerText()).includes('null'));
await fetch(`${MOCK}/__set_public?v=0`);

// --- 1. a row with nulls and a broken section order opens and is editable ---
await page.goto(`${BASE}/editor/${CV_ID}`, { waitUntil: 'domcontentloaded' });
const opened = await page
  .waitForSelector('#personal-name', { timeout: 120_000 })
  .then(() => true)
  .catch(() => false);
check('the editor opens a CV whose stored data has null fields', opened, JSON.stringify(pageErrors).slice(0, 400));

if (opened) {
  check('a null text field is shown as an empty input', (await page.locator('#personal-title').inputValue()) === '');
  check('a section missing from the stored order is still offered', (await page.locator('#certifications-text').count()) === 1);
  check('each section appears once', (await page.getByRole('button', { name: 'Drag Work experience' }).count()) === 1);

  await page.locator('#personal-title').click();
  await page.keyboard.type('Staff Engineer', { delay: 15 });
  check('typing into the repaired field works', (await page.locator('#personal-title').inputValue()) === 'Staff Engineer');

  await hideTab();
  let body = null;
  for (let i = 0; i < 40 && !body; i += 1) {
    const all = await patches();
    body = all.length > 0 ? all[all.length - 1].body : null;
    if (!body) await page.waitForTimeout(250);
  }
  check('the edit is accepted by the save route', body !== null, 'no PATCH reached the database: the route rejected the payload');
  const savedData = body?.data ?? {};
  check('the saved row no longer holds nulls', body !== null && !JSON.stringify(savedData).includes('null'), JSON.stringify(savedData).slice(0, 300));
  check(
    'the saved section order lists every section exactly once',
    Array.isArray(savedData.sectionOrder) && savedData.sectionOrder.length === 7 && new Set(savedData.sectionOrder).size === 7,
    JSON.stringify(savedData.sectionOrder),
  );
}

// --- 2. a save the server refuses is reported, not left as a silent badge ---
await fetch(`${MOCK}/__reset?seed=1`);
await page.goto(`${BASE}/editor/${CV_ID}`, { waitUntil: 'domcontentloaded' });
await page.waitForSelector('#personal-name', { timeout: 120_000 });
await page.route(`**/api/cvs/${CV_ID}`, (route) =>
  route.request().method() === 'PATCH'
    ? route.fulfill({ status: 400, contentType: 'application/json', body: JSON.stringify({ error: 'rejected' }) })
    : route.continue(),
);
await page.locator('#personal-name').fill('Rejected Save');
await hideTab();
const warned = await page
  .getByText(/could not be saved/i)
  .first()
  .waitFor({ timeout: 15_000 })
  .then(() => true)
  .catch(() => false);
check('a rejected save tells the user their edits are not saved', warned);
await page.unroute(`**/api/cvs/${CV_ID}`);
await page.locator('#personal-name').fill('Accepted Save');
await hideTab();
const cleared = await page
  .getByText(/could not be saved/i)
  .first()
  .waitFor({ state: 'detached', timeout: 15_000 })
  .then(() => true)
  .catch(() => false);
check('the warning clears once a save goes through', cleared);

check('no uncaught errors during the whole run', pageErrors.length === 0, JSON.stringify(pageErrors).slice(0, 800));
const ownConsole = consoleErrors.filter((line) => !/status of 400/.test(line));
check('no React warnings or console errors during the whole run', ownConsole.length === 0, JSON.stringify(ownConsole).slice(0, 1200));

await browser.close();
const failed = results.filter((result) => !result.pass);
process.stdout.write(`\n${results.length - failed.length}/${results.length} checks passed\n`);
process.exit(failed.length === 0 ? 0 : 1);
