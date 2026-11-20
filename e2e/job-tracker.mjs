/**
 * Browser-level regression coverage for the job tracker board.
 *
 * 1. Stage changes for one job were sent in parallel. When an older request
 *    failed after a newer one succeeded, the card jumped back to the stage
 *    it started in, matching neither the user's choice nor the server; an
 *    older request landing last could also leave the server on the old stage.
 * 2. A failed delete restored the whole board from a snapshot taken when it
 *    started, bringing back jobs deleted successfully in the meantime.
 * 3. Typing in the add-job form and keyboard use of the stage select must not
 *    be swallowed by the drag-and-drop layer.
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
await context.route('**/*', (route) =>
  route.request().url().startsWith(BASE) || route.request().url().startsWith(MOCK)
    ? route.continue()
    : route.fulfill({ status: 204, body: '' }),
);

const pageErrors = [];
const consoleErrors = [];
page.on('pageerror', (error) => pageErrors.push(String(error)));
page.on('console', (message) => {
  if (message.type() !== 'error' && message.type() !== 'warning') return;
  if (/cashfree|ERR_TUNNEL|ERR_INTERNET|ERR_FAILED/i.test(message.text())) return;
  // The deliberately failed writes below are logged by the browser as 500s.
  if (/status of 500/.test(message.text())) return;
  consoleErrors.push(`${message.type()}: ${message.text().slice(0, 300)}`);
});

const jobs = async (query = '') => (await fetch(`${MOCK}/__jobs${query}`)).json();
const stage = () => page.getByLabel('Stage for Product manager at Acme');
const openBoard = async () => {
  await page.goto(`${BASE}/job-tracker`, { waitUntil: 'domcontentloaded' });
  await stage().waitFor({ timeout: 120_000 });
  // The select is server-rendered; a change made before React hydrates it
  // has no handler attached and never reaches the server.
  await stage().evaluate(
    (element) =>
      new Promise((resolve) => {
        const ready = () => Object.keys(element).some((key) => key.startsWith('__reactFiber'));
        const tick = () => (ready() ? resolve(true) : setTimeout(tick, 50));
        tick();
      }),
  );
};

// --- 1. an older failed move must not undo a newer one ---
await jobs('?seed=1');
await openBoard();
await jobs('?fail=1&delay=1500');
await stage().selectOption('applied');
await stage().selectOption('interview');
// Poll rather than sleep: the first call compiles the route under next dev.
let state = await jobs();
for (let i = 0; i < 120 && state.writes.filter((write) => write.method === 'PATCH').length < 2; i += 1) {
  await page.waitForTimeout(500);
  state = await jobs();
}
await page.waitForTimeout(500);
state = await jobs();
const acme = state.rows.find((row) => row.company === 'Acme');
check('the card stays on the stage picked last', (await stage().inputValue()) === 'interview', await stage().inputValue());
check('the server ends on the stage picked last', acme?.status === 'interview', JSON.stringify(acme));
const acmeWrites = state.writes.filter((write) => write.method === 'PATCH');
check(
  'stage writes for one job are sent one after another',
  acmeWrites.length === 2 && acmeWrites[1].at >= acmeWrites[0].at + 1400,
  JSON.stringify(acmeWrites),
);
await openBoard();
check('the stage survives a reload', (await stage().inputValue()) === 'interview');

// --- 2. a failed delete brings back only that job ---
await jobs('?seed=1');
await openBoard();
page.on('dialog', (dialog) => void dialog.accept());
await jobs('?fail=1&delay=1500');
await page.getByRole('button', { name: 'Delete Product manager at Acme', exact: true }).click();
await page.getByRole('button', { name: 'Delete Growth manager at Nova', exact: true }).click();
await page.getByText('Could not delete this job.').waitFor({ timeout: 10_000 }).catch(() => {});
check('the job whose delete failed is back on the board', (await page.getByText('Product manager', { exact: true }).count()) === 1);
check('a job deleted in the meantime stays deleted', (await page.getByText('Growth manager', { exact: true }).count()) === 0);
state = await jobs();
check('the server agrees with the board', state.rows.length === 1 && state.rows[0].company === 'Acme', JSON.stringify(state.rows));

// --- 3. keyboard input reaches the form and the stage select ---
await jobs('?seed=1');
await openBoard();
const typed = "L'Oréal — Senior PM (Growth) 🚀";
for (const [label, value] of [['Company', typed], ['Role', 'Head of Product'], ['Notes', 'Line one\nLine two']]) {
  const field = page.getByLabel(label, { exact: true });
  await field.click();
  await page.keyboard.type(value, { delay: 5 });
  check(`typing into ${label} keeps every character`, (await field.inputValue()) === value, await field.inputValue());
}
await stage().focus();
await page.keyboard.press('ArrowDown');
await page.waitForTimeout(800);
check('arrow keys on the stage select change the stage', (await stage().inputValue()) === 'applied', await stage().inputValue());

check('no uncaught errors during the run', pageErrors.length === 0, pageErrors.join('\n'));
check('no React warnings or console errors during the run', consoleErrors.length === 0, consoleErrors.join('\n'));

await browser.close();
const failed = results.filter((result) => !result.pass);
process.stdout.write(`\n${results.length - failed.length}/${results.length} job-tracker checks passed\n`);
process.exit(failed.length === 0 ? 0 : 1);
