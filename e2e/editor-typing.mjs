/**
 * Browser-level regression coverage for the CV editor's text fields.
 *
 * This is the single most important regression class for this product: a
 * field the user cannot type into, a caret that jumps mid-word, text that
 * resets while typing, or focus that gets stolen by something else on the
 * page. Every defect of that shape has shipped here at least once, and none of
 * them is visible to a type check, a lint run, or a jsdom test — they only
 * appear when real keystrokes hit a real browser.
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

// `domcontentloaded`, not `networkidle`: the first request to a route in dev
// mode compiles it, which can take well over a networkidle timeout.
await page.goto(`${BASE}/editor/${CV_ID}`, { waitUntil: 'domcontentloaded' });
await page.waitForSelector('#personal-name', { timeout: 120_000 });

const name = page.locator('#personal-name');
const title = page.locator('#personal-title');
const summary = page.locator('#personal-summary');
const technical = page.locator('#skills-technical');
const bullets = page.locator('textarea[id^="experience-"][id$="-bullets"]').first();
const company = page.locator('input[id^="experience-"][id$="-company"]').first();

// --- typing ---------------------------------------------------------------
await name.click();
await name.fill('');
await name.type('Priya Krishnan', { delay: 20 });
check('name field accepts slow typing verbatim', (await name.inputValue()) === 'Priya Krishnan', await name.inputValue());
check('name field keeps focus while typing', await name.evaluate((el) => el === document.activeElement));

await name.fill('');
await name.type('Principal Platform Engineer, Payments & Ledger', { delay: 0 });
check(
  'name field survives a rapid burst with spaces and punctuation',
  (await name.inputValue()) === 'Principal Platform Engineer, Payments & Ledger',
  JSON.stringify(await name.inputValue()),
);

// caret stability: insert in the middle, then delete backwards
await name.fill('Priya Krishnan');
await name.click();
await name.press('Home');
for (let i = 0; i < 5; i += 1) await name.press('ArrowRight');
await name.type('XYZ', { delay: 15 });
check('caret stays put when inserting mid-string', (await name.inputValue()) === 'PriyaXYZ Krishnan', await name.inputValue());
await name.press('Backspace');
check('backspace deletes at the caret, not at the end', (await name.inputValue()) === 'PriyaXY Krishnan', await name.inputValue());

// --- awkward content ------------------------------------------------------
const awkward = 'Ünïcödé — "smart quotes", 50% ↑, <b>tags</b>, emoji 🚀🇮🇳';
await summary.click();
await summary.fill('');
await summary.type(awkward, { delay: 0 });
check('summary preserves unicode, emoji and markup-looking text', (await summary.inputValue()) === awkward, JSON.stringify(await summary.inputValue()));

const long = 'A'.repeat(5000);
await summary.fill(long);
await summary.type('END', { delay: 0 });
check('summary accepts more typing after a 5000-character value', (await summary.inputValue()) === `${long}END`);

// --- comma-separated skills ----------------------------------------------
// The skills inputs round-trip through the store as arrays. Trimming on the
// way in used to make a trailing ", " impossible to type.
await technical.click();
await technical.fill('');
await technical.type('Go, Postgres, ', { delay: 15 });
check('skills field keeps a trailing comma and space', (await technical.inputValue()) === 'Go, Postgres, ', JSON.stringify(await technical.inputValue()));
await technical.type('Kafka', { delay: 15 });
check('skills field can continue after a trailing comma', (await technical.inputValue()) === 'Go, Postgres, Kafka', JSON.stringify(await technical.inputValue()));

// --- multi-line bullets ---------------------------------------------------
// Empty lines are stripped on the way to the store, so the textarea must read
// from the form value, not the store, or Enter would never open a new line.
await bullets.click();
await bullets.fill('');
await bullets.type('First bullet', { delay: 10 });
await bullets.press('Enter');
await bullets.type('Second bullet', { delay: 10 });
check('Enter opens a new bullet line', (await bullets.inputValue()) === 'First bullet\nSecond bullet', JSON.stringify(await bullets.inputValue()));
await bullets.press('Enter');
await bullets.press('Enter');
await bullets.type('Third', { delay: 10 });
check('a blank line in the middle survives', (await bullets.inputValue()) === 'First bullet\nSecond bullet\n\nThird', JSON.stringify(await bullets.inputValue()));

await company.click();
await company.fill('');
await company.type('Razorpay Software Pvt Ltd', { delay: 10 });
check('experience company field accepts typing', (await company.inputValue()) === 'Razorpay Software Pvt Ltd', await company.inputValue());

// --- a keyboard drag must never eat the next keystroke --------------------
// The drag handle is a <button>, so Space is its natural activation key, and
// dnd-kit reads Space on a handle as "start a keyboard drag". That drag used
// to outlive the handle: clicking into a field and typing a sentence fed its
// first space to the sensor, which dropped the section somewhere else, stole
// focus back to the handle and lost the rest of the sentence.
const orderBefore = await page.evaluate(() =>
  Array.from(document.querySelectorAll('button[aria-label^="Drag "]')).map((b) => b.getAttribute('aria-label')),
);
await page.getByRole('button', { name: 'Drag Work experience' }).focus();
await page.keyboard.press('Space');
await page.waitForTimeout(250);
// focus() rather than click(): while a drag is live the dragged card floats
// over the page and swallows pointer events, so a click cannot land. Moving
// focus into the field is the part of "user clicks into a field" that matters
// here, and it is what the handle's blur-cancel keys off.
await title.focus();
await title.fill('');
await page.keyboard.type('Hello World Again', { delay: 20 });
await page.waitForTimeout(250);
check('an abandoned keyboard drag does not swallow typed spaces', (await title.inputValue()) === 'Hello World Again', JSON.stringify(await title.inputValue()));
check(
  'an abandoned keyboard drag does not steal focus back to the handle',
  await title.evaluate((el) => el === document.activeElement),
  await page.evaluate(() => document.activeElement?.getAttribute('aria-label') ?? document.activeElement?.id ?? ''),
);
const orderAfter = await page.evaluate(() =>
  Array.from(document.querySelectorAll('button[aria-label^="Drag "]')).map((b) => b.getAttribute('aria-label')),
);
check('an abandoned keyboard drag does not reorder the CV', JSON.stringify(orderBefore) === JSON.stringify(orderAfter), `${orderBefore}\n     -> ${orderAfter}`);

// --- a deliberate keyboard drag moves exactly one slot --------------------
const handle = page.getByRole('button', { name: 'Drag Work experience' });
await handle.scrollIntoViewIfNeeded();
await page.waitForTimeout(400);
const before = await page.evaluate(() =>
  Array.from(document.querySelectorAll('button[aria-label^="Drag "]')).map((b) => b.getAttribute('aria-label')),
);
await handle.focus();
await page.keyboard.press('Space');
await page.waitForTimeout(350);
await page.keyboard.press('ArrowDown');
await page.waitForTimeout(350);
await page.keyboard.press('Space');
await page.waitForTimeout(500);
const after = await page.evaluate(() =>
  Array.from(document.querySelectorAll('button[aria-label^="Drag "]')).map((b) => b.getAttribute('aria-label')),
);
const fromIndex = before.indexOf('Drag Work experience');
const toIndex = after.indexOf('Drag Work experience');
check('one ArrowDown during a keyboard drag moves the section exactly one slot', toIndex === fromIndex + 1, `${fromIndex} -> ${toIndex}\n     ${after}`);

// --- switching template must not touch content ---------------------------
const snapshot = {
  name: await name.inputValue(),
  summary: await summary.inputValue(),
  bullets: await bullets.inputValue(),
  technical: await technical.inputValue(),
};
for (const template of ['Modern', 'Minimal', 'Classic']) {
  await page.getByRole('button', { name: new RegExp(template) }).first().click({ force: true });
  await page.waitForTimeout(200);
}
check('switching template preserves the name', (await name.inputValue()) === snapshot.name);
check('switching template preserves the summary', (await summary.inputValue()) === snapshot.summary);
check('switching template preserves the bullets', (await bullets.inputValue()) === snapshot.bullets, JSON.stringify(await bullets.inputValue()));
check('switching template preserves the skills', (await technical.inputValue()) === snapshot.technical, JSON.stringify(await technical.inputValue()));

await name.click();
await name.press('End');
await name.type('!', { delay: 20 });
check('typing still works after a template switch', (await name.inputValue()) === `${snapshot.name}!`, await name.inputValue());

// --- autosave reaches the backend and survives a reload -------------------
await fetch(`${MOCK}/__reset`);
await name.fill('Autosave Survivor');
await page.waitForTimeout(32_000); // the editor's idle/ceiling autosave window
const patches = await (await fetch(`${MOCK}/__patches`)).json();
check('an idle pause autosaves to the backend', patches.length > 0, `${patches.length} PATCH requests`);
check(
  'the autosaved payload carries the typed value',
  patches.at(-1)?.body?.data?.personal?.name === 'Autosave Survivor',
  JSON.stringify(patches.at(-1)?.body?.data?.personal?.name),
);
await page.reload({ waitUntil: 'domcontentloaded' });
await page.waitForSelector('#personal-name');
check('the typed value survives a reload', (await page.locator('#personal-name').inputValue()) === 'Autosave Survivor', await page.locator('#personal-name').inputValue());

// --- mobile ---------------------------------------------------------------
const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });
await mobile.addCookies([sessionCookie(new URL(BASE).hostname)]);
const mobilePage = await mobile.newPage();
mobilePage.setDefaultTimeout(60_000);
await mobile.route('**/*', stubThirdParty);
await mobilePage.goto(`${BASE}/editor/${CV_ID}`, { waitUntil: 'domcontentloaded' });
await mobilePage.waitForSelector('#personal-name', { timeout: 120_000 });
const overflow = await mobilePage.evaluate(
  () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
);
check('the editor does not scroll horizontally at 390px', overflow === 0, `${overflow}px of overflow`);
const mobileName = mobilePage.locator('#personal-name');
await mobileName.scrollIntoViewIfNeeded();
await mobileName.click();
await mobileName.fill('');
await mobileName.type('Mobile Typing Works', { delay: 10 });
check('the editor accepts typing on a phone viewport', (await mobileName.inputValue()) === 'Mobile Typing Works', await mobileName.inputValue());
await mobile.close();

// --- console health -------------------------------------------------------
check('no uncaught errors during the whole run', pageErrors.length === 0, JSON.stringify(pageErrors).slice(0, 800));
check('no React warnings or console errors during the whole run', consoleErrors.length === 0, JSON.stringify(consoleErrors).slice(0, 1200));

await browser.close();

const failed = results.filter((r) => !r.pass);
process.stdout.write(`\n${results.length - failed.length}/${results.length} checks passed\n`);
process.exit(failed.length === 0 ? 0 : 1);
