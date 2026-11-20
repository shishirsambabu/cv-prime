/**
 * The editor's ATS score panel on a brand-new, empty CV — the first thing a
 * new user tries. /api/ats-score refuses CV text under 50 characters, and the
 * panel used to send an empty CV anyway and show the 400 as "Something went
 * wrong. Please try again." on every retry. It must now say what is missing,
 * and once the CV has content, reach the route and show its real answer
 * (here NO_KEY, since the mock account has no OpenRouter key).
 *
 * Run it with `npm run test:e2e` (see e2e/README.md).
 */

import { createRequire } from 'node:module';

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

const JOB =
  'We are hiring a senior backend engineer to build payment systems in Go, Kafka and Postgres on AWS, with on-call ownership.';

await fetch(`${MOCK}/__reset?seed=1`);
// A freshly created CV: every section empty.
await fetch(`${MOCK}/__set_cv_data`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    personal: { name: '', title: '', email: '', phone: '', location: '', linkedin: '', website: '', summary: '' },
    experience: [],
    education: [],
    skills: { technical: [], soft: [], languages: [] },
  }),
});

const browser = await chromium.launch();
const context = await browser.newContext();
await context.addCookies([sessionCookie(new URL(BASE).hostname)]);
const page = await context.newPage();
page.setDefaultTimeout(60_000);
page.setDefaultNavigationTimeout(180_000);
await context.route('**/*', (route) =>
  route.request().url().startsWith(BASE) || route.request().url().startsWith(MOCK)
    ? route.continue()
    : route.fulfill({ status: 204, body: '' }),
);

const pageErrors = [];
const scoreStatuses = [];
page.on('pageerror', (error) => pageErrors.push(String(error)));
page.on('response', (response) => {
  if (response.url().includes('/api/ats-score')) scoreStatuses.push(response.status());
});

await page.goto(`${BASE}/editor/${CV_ID}`, { waitUntil: 'domcontentloaded' });
await page.waitForSelector('#personal-name', { timeout: 120_000 });

const jd = page.getByLabel('Job description to score this CV against');
const scoreButton = page.getByRole('button', { name: 'Check ATS score' });
await jd.scrollIntoViewIfNeeded();
await jd.fill(JOB);

check('an empty CV cannot be sent for scoring', await scoreButton.isDisabled());
check(
  'the panel says what the CV is missing',
  await page.getByText('Add a summary or a role to your CV before scoring it').isVisible(),
);
check(
  'the job description box caps its length at what the routes accept',
  (await jd.getAttribute('maxlength')) === '15000',
  String(await jd.getAttribute('maxlength')),
);

const summary = page.locator('#personal-summary');
await summary.scrollIntoViewIfNeeded();
await summary.click();
await summary.type('Backend engineer with eight years building payment systems at scale.', { delay: 2 });
await page.waitForFunction(
  () => !document.body.innerText.includes('Add a summary or a role to your CV before scoring it'),
  undefined,
  { timeout: 10_000 },
).catch(() => undefined);

check('adding a summary enables scoring', !(await scoreButton.isDisabled()));
await scoreButton.click();
await page.waitForFunction(() => /OpenRouter/i.test(document.body.innerText) || /Something went wrong/.test(document.body.innerText), undefined, { timeout: 60_000 }).catch(() => undefined);
const text = await page.evaluate(() => document.body.innerText);
check('the route answered with a handled error code, not a validation failure', scoreStatuses.length === 1 && scoreStatuses[0] === 400 && !/Something went wrong/.test(text), JSON.stringify(scoreStatuses));
check('the user sees the add-a-key prompt', /OpenRouter/i.test(text));
check('no uncaught errors during the run', pageErrors.length === 0, JSON.stringify(pageErrors).slice(0, 800));

await browser.close();
await fetch(`${MOCK}/__reset?seed=1`);

const failed = results.filter((r) => !r.pass).length;
process.stdout.write(`\n${results.length - failed}/${results.length} ats-panel checks passed\n`);
process.exit(failed === 0 ? 0 : 1);
