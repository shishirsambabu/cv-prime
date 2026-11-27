/**
 * Browser regression: a stale editor tab must not overwrite newer edits.
 *
 * Autosave sends the whole CV. With the CV open in two tabs (or on a phone
 * and a laptop), tab B's saved edits were silently erased by tab A's next
 * save, because tab A still held the copy it loaded before B's edits.
 * Reproduced before the fix: B saved " FROM-TAB-B" into the summary, A typed
 * one character in the name, and A's save put the old summary back.
 *
 * Now the save from the stale tab is refused (409 CONFLICT), nothing is
 * overwritten, and tab A says so and lets the user choose a version.
 *
 * Run with `npm run test:e2e` (see e2e/README.md).
 */

import { createRequire } from 'node:module';

const { chromium } = createRequire(import.meta.url)('playwright');

const BASE = process.env.E2E_BASE_URL ?? 'http://127.0.0.1:3002';
const MOCK = process.env.E2E_MOCK_URL ?? 'http://127.0.0.1:54321';
const CV_ID = '22222222-2222-4222-8222-222222222222';
const USER_ID = '11111111-1111-4111-8111-111111111111';
const EDITOR = `${BASE}/editor/${CV_ID}`;

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

const browser = await chromium.launch();
const context = await browser.newContext();
await context.addCookies([sessionCookie(new URL(BASE).hostname)]);
await context.route('**/*', (route) =>
  route.request().url().startsWith(BASE) || route.request().url().startsWith(MOCK)
    ? route.continue()
    : route.fulfill({ status: 204, body: '' }),
);

const pageErrors = [];
function watch(page) {
  page.setDefaultTimeout(60_000);
  page.setDefaultNavigationTimeout(180_000);
  page.on('pageerror', (error) => pageErrors.push(String(error)));
}

async function storedRow() {
  const response = await fetch(`${MOCK}/rest/v1/cvs?id=eq.${CV_ID}`, {
    headers: { accept: 'application/vnd.pgrst.object+json' },
  });
  return response.json();
}

async function openEditor(page) {
  await page.goto(EDITOR, { waitUntil: 'networkidle' });
  await page.locator('#personal-summary').waitFor();
}

async function appendTo(page, selector, text) {
  await page.locator(selector).click();
  await page.keyboard.press('End');
  await page.keyboard.type(text);
}

// Leaving the editor flushes unsaved edits (useAutoSave's unmount flush), so
// no spec has to wait out the 30 s autosave window.
async function leaveEditor(page) {
  await page.goto(`${BASE}/dashboard`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
}

try {
  // --- 1. A stale tab cannot overwrite, and is told why ---------------------
  await fetch(`${MOCK}/__reset?seed=1`);
  const tabA = await context.newPage();
  const tabB = await context.newPage();
  watch(tabA);
  watch(tabB);
  await openEditor(tabA);
  await openEditor(tabB);

  await appendTo(tabB, '#personal-summary', ' FROM-TAB-B');
  await leaveEditor(tabB);
  const afterB = await storedRow();
  check('tab B saves its edit', afterB.data.personal.summary.endsWith(' FROM-TAB-B'), afterB.data.personal.summary);

  // Tab A still shows the copy from before B's edit. Hiding it fires the
  // same flush a real tab switch does.
  await appendTo(tabA, '#personal-name', ' A');
  await tabA.evaluate(() => {
    Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'hidden' });
    document.dispatchEvent(new Event('visibilitychange'));
  });
  await tabA.waitForTimeout(1500);
  await tabA.evaluate(() => {
    Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'visible' });
  });

  const afterA = await storedRow();
  check(
    "the stale tab's save does not erase tab B's edit",
    afterA.data.personal.summary.endsWith(' FROM-TAB-B'),
    `summary now: ${JSON.stringify(afterA.data.personal.summary.slice(-30))}`,
  );
  check("and does not store the stale tab's copy either", afterA.data.personal.name === 'Asha Rao', afterA.data.personal.name);

  const banner = tabA.getByRole('alert').filter({ hasText: 'changed in another tab' });
  check('the stale tab shows the conflict notice', await banner.isVisible().catch(() => false));
  check(
    'the stale tab does not claim its edits are saved',
    (await tabA.getByText('Unsaved changes').count()) > 0,
  );
  check('the edit is still on screen in the stale tab', (await tabA.locator('#personal-name').inputValue()) === 'Asha Rao A');

  // The fields keep working while the notice is up.
  await appendTo(tabA, '#personal-name', 'B');
  check('typing still works while the notice is shown', (await tabA.locator('#personal-name').inputValue()) === 'Asha Rao AB');

  // --- 2. "Keep my version" saves this tab's copy on purpose ----------------
  await tabA.getByRole('button', { name: 'Keep my version here' }).click();
  await tabA.waitForTimeout(1500);
  const kept = await storedRow();
  check('"Keep my version here" stores this tab\'s copy', kept.data.personal.name === 'Asha Rao AB', kept.data.personal.name);
  check('the notice goes away after choosing', !(await banner.isVisible().catch(() => false)));

  // Saving keeps working afterwards without a new conflict.
  await appendTo(tabA, '#personal-name', 'C');
  await leaveEditor(tabA);
  const later = await storedRow();
  check('later saves from the same tab go through', later.data.personal.name === 'Asha Rao ABC', later.data.personal.name);

  // --- 3. "Load the latest version" replaces this copy with the stored one --
  await fetch(`${MOCK}/__reset?seed=1`);
  await openEditor(tabA);
  await openEditor(tabB);
  await appendTo(tabB, '#personal-summary', ' NEWER');
  await leaveEditor(tabB);
  await appendTo(tabA, '#personal-name', ' STALE');
  await leaveEditor(tabA);
  // tabA navigated away; reopen a fresh view of the stale scenario instead:
  // the flush on leaving was refused, so nothing of tab A's reached the row.
  const afterLeave = await storedRow();
  check(
    'leaving a stale editor does not overwrite either',
    afterLeave.data.personal.summary.endsWith(' NEWER') && afterLeave.data.personal.name === 'Asha Rao',
    JSON.stringify({ name: afterLeave.data.personal.name, summary: afterLeave.data.personal.summary.slice(-20) }),
  );

  await fetch(`${MOCK}/__reset?seed=1`);
  await openEditor(tabA);
  await openEditor(tabB);
  await appendTo(tabB, '#personal-summary', ' NEWER');
  await leaveEditor(tabB);
  await appendTo(tabA, '#personal-name', ' STALE');
  await tabA.evaluate(() => {
    Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'hidden' });
    document.dispatchEvent(new Event('visibilitychange'));
  });
  await tabA.waitForTimeout(1500);
  await tabA.getByRole('button', { name: 'Load the latest version' }).click();
  await tabA.waitForLoadState('networkidle');
  await tabA.locator('#personal-summary').waitFor();
  check(
    '"Load the latest version" shows the newer copy',
    (await tabA.locator('#personal-summary').inputValue()).endsWith(' NEWER'),
  );
  check('and no beforeunload prompt or flush got in the way', (await storedRow()).data.personal.name === 'Asha Rao');

  // --- 4. One tab on its own never sees a false conflict --------------------
  await fetch(`${MOCK}/__reset?seed=1`);
  const solo = await context.newPage();
  watch(solo);
  await openEditor(solo);
  for (const word of [' one', ' two', ' three']) {
    await appendTo(solo, '#personal-title', word);
    await solo.evaluate(() => {
      Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'hidden' });
      document.dispatchEvent(new Event('visibilitychange'));
    });
    await solo.waitForTimeout(800);
    await solo.evaluate(() => {
      Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'visible' });
    });
  }
  // Switch template too: still the same tab's own writes.
  await solo.getByRole('button', { name: /Minimal/ }).first().click();
  await leaveEditor(solo);
  const soloRow = await storedRow();
  check('repeated saves from one tab all land', soloRow.data.personal.title.endsWith(' one two three'), soloRow.data.personal.title);
  check('a template switch from the same tab lands', soloRow.template_id === 'minimal', String(soloRow.template_id));
  await openEditor(solo);
  check(
    'no conflict notice for a single tab',
    (await solo.getByRole('alert').filter({ hasText: 'changed in another tab' }).count()) === 0,
  );

  check('no uncaught page errors', pageErrors.length === 0, pageErrors.join('\n'));
} catch (error) {
  check('spec ran to completion', false, String(error?.stack ?? error));
} finally {
  await browser.close();
}

const failed = results.filter((r) => !r.pass);
process.stdout.write(`\n${results.length - failed.length}/${results.length} save-conflict checks passed\n`);
process.exit(failed.length === 0 ? 0 : 1);
