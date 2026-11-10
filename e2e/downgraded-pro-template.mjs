/**
 * Browser-level regression: a free-plan user whose CV is already on a Pro
 * template (they picked it while on Pro, then were downgraded by a billing
 * cancellation or the reconcile-entitlements cron) must still be able to save
 * text edits.
 *
 * Every autosave re-sends the CV's current templateId, and PATCH
 * /api/cvs/[cvId] used to 403 any free-plan request naming a Pro template —
 * so every edit to such a CV was silently rejected and the editor sat on
 * "Unsaved changes" forever.
 *
 * Run it with `npm run test:e2e` (see e2e/README.md).
 */

import { chromium } from 'playwright';

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

// The mock account is on the free plan; put its CV on a Pro template.
await fetch(`${MOCK}/__set_template?id=executive`);
await fetch(`${MOCK}/__reset`);

const browser = await chromium.launch();
const context = await browser.newContext();
await context.addCookies([sessionCookie(new URL(BASE).hostname)]);
await context.route('**/*', (route) =>
  route.request().url().startsWith(BASE) || route.request().url().startsWith(MOCK)
    ? route.continue()
    : route.fulfill({ status: 204, body: '' })
);
const page = await context.newPage();
page.setDefaultTimeout(60_000);
page.setDefaultNavigationTimeout(180_000);

const saveStatuses = [];
page.on('response', (response) => {
  if (response.url().includes(`/api/cvs/${CV_ID}`) && response.request().method() === 'PATCH') {
    saveStatuses.push(response.status());
  }
});

try {
  await page.goto(`${BASE}/editor/${CV_ID}`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#personal-name', { timeout: 120_000 });
  const name = page.locator('#personal-name');
  await name.fill('Downgraded But Editing');
  await page.waitForTimeout(32_000); // the editor's idle/ceiling autosave window

  const patches = await (await fetch(`${MOCK}/__patches`)).json();
  check(
    'autosave of a CV already on a Pro template is accepted for a free user',
    saveStatuses.length > 0 && saveStatuses.every((status) => status === 200),
    `PATCH statuses: ${JSON.stringify(saveStatuses)}`
  );
  check(
    'the edit reached the backend',
    patches.at(-1)?.body?.data?.personal?.name === 'Downgraded But Editing',
    JSON.stringify(patches.at(-1)?.body?.data?.personal?.name)
  );
} finally {
  await browser.close();
  await fetch(`${MOCK}/__set_template?id=classic`);
}

const failed = results.filter((result) => !result.pass);
process.stdout.write(`\n${results.length - failed.length}/${results.length} checks passed\n`);
process.exit(failed.length === 0 ? 0 : 1);
