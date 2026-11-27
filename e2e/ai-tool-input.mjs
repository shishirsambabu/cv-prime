/**
 * AI inputs the routes refuse. A paste over the 15,000-character limit was
 * answered with a 400 that every AI page showed as "Something went wrong.
 * Please try again." — and retrying the same paste can never work. The tool
 * must say which box is too long; the editor's cover letter box caps the
 * paste like the ATS box does.
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


// Over the 15,000 characters the AI routes accept.
const LONG_JD = 'We are hiring a backend engineer to build payment systems in Go and Postgres. '.repeat(210);

await fetch(`${MOCK}/__reset?seed=1`);

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
const toolStatuses = [];
page.on('pageerror', (error) => pageErrors.push(String(error)));
page.on('response', (response) => {
  if (response.url().includes('/api/tools/jd-decoder')) toolStatuses.push(response.status());
});

async function waitForHydration(locator) {
  await locator.waitFor();
  await page.waitForFunction(
    (el) => Object.keys(el).some((key) => key.startsWith('__reactFiber')),
    await locator.elementHandle(),
    { timeout: 120_000 },
  );
}

// 1. A standalone AI tool page.
await page.goto(`${BASE}/tools/ai-jd-decoder`, { waitUntil: 'domcontentloaded' });
const jdBox = page.getByLabel('Job description');
await waitForHydration(jdBox);
await jdBox.fill(LONG_JD);
await page.getByRole('button', { name: /Decode this JD/ }).click();
await page
  .waitForFunction(() => /too long|Something went wrong/.test(document.body.innerText), undefined, { timeout: 60_000 })
  .catch(() => undefined);
let text = await page.evaluate(() => document.body.innerText);
check('the route refused the over-long paste', toolStatuses[0] === 400, JSON.stringify(toolStatuses));
check(
  'the tool says which box is too long and by how much',
  text.includes('The job description is too long. Keep it under 15,000 characters.'),
  text.slice(0, 400),
);
check('no generic failure shown', !/Something went wrong/.test(text));

// Shortening the paste clears the message and reaches the next step (no key on the mock account).
await jdBox.fill(LONG_JD.slice(0, 4000));
await page.getByRole('button', { name: /Decode this JD/ }).click();
await page
  .waitForFunction(() => /Connect your AI key/.test(document.body.innerText), undefined, { timeout: 60_000 })
  .catch(() => undefined);
text = await page.evaluate(() => document.body.innerText);
check('a shorter paste goes through to the key check', /Connect your AI key/.test(text) && !text.includes('too long'));

// 2. The editor's cover letter panel caps the paste instead of failing later.
await page.goto(`${BASE}/editor/${CV_ID}`, { waitUntil: 'domcontentloaded' });
await page.waitForSelector('#personal-name', { timeout: 120_000 });
const letterBox = page.getByLabel('Job description for the cover letter');
await waitForHydration(letterBox);
await letterBox.scrollIntoViewIfNeeded();
await letterBox.click();
await letterBox.fill(LONG_JD);
const kept = await letterBox.evaluate((el) => el.value.length);
check('the cover letter job description is capped at 15,000 characters', kept === 15000, String(kept));
check('typing into the capped box still works', await letterBox.isEditable());

check('no uncaught errors during the run', pageErrors.length === 0, JSON.stringify(pageErrors).slice(0, 800));

await browser.close();
await fetch(`${MOCK}/__reset?seed=1`);

const failed = results.filter((r) => !r.pass).length;
process.stdout.write(`\n${results.length - failed}/${results.length} ai-tool-input checks passed\n`);
process.exit(failed === 0 ? 0 : 1);
