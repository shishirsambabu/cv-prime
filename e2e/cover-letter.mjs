/**
 * Browser-level regression coverage for the cover letter page.
 *
 * The page headed its draft "Editable draft" and rendered it in a bare
 * textarea. It could be typed into, but there was no save and no copy: every
 * edit vanished on reload without a warning. These checks type into the real
 * page and follow the text to the backend and back.
 *
 * Run it with `npm run test:e2e` (see e2e/README.md).
 */

import { createRequire } from 'node:module';

const { chromium } = createRequire(import.meta.url)('playwright');

const BASE = process.env.E2E_BASE_URL ?? 'http://127.0.0.1:3002';
const MOCK = process.env.E2E_MOCK_URL ?? 'http://127.0.0.1:54321';
const USER_ID = '11111111-1111-4111-8111-111111111111';
const LETTER_ID = '44444444-4444-4444-8444-444444444444';
const SEED = 'Dear Hiring Manager,\n\nI am writing to apply for the Senior Backend Engineer role.';
const ADDED = ' I led the ledger rewrite - "4k TPS", café-grade uptime ☕.';

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

const backend = async (query = '') => (await fetch(`${MOCK}/__cover_letter${query}`)).json();

await fetch(`${MOCK}/__reset?seed=1`);
const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1280, height: 900 },
  permissions: ['clipboard-read', 'clipboard-write'],
});
await context.addCookies([sessionCookie(new URL(BASE).hostname)]);
const page = await context.newPage();
page.setDefaultTimeout(30_000);

const consoleErrors = [];
const pageErrors = [];
page.on('console', (message) => {
  if (message.type() === 'error') consoleErrors.push(message.text());
});
page.on('pageerror', (error) => pageErrors.push(error.message));
// Reloading with unsaved text raises the "leave site?" prompt; accept it.
page.on('dialog', (dialog) => dialog.accept());

try {
  await page.goto(`${BASE}/cover-letter/${LETTER_ID}`);
  const draft = page.getByLabel('Editable draft');
  const save = page.getByRole('button', { name: 'Save changes' });
  await draft.waitFor();

  check('the saved letter is shown', (await draft.inputValue()) === SEED);
  check('there is nothing to save before an edit', await save.isDisabled());

  await draft.click();
  await page.keyboard.press('Control+End');
  await page.keyboard.type(ADDED, { delay: 5 });
  check('typing at the end of the draft lands in the field', (await draft.inputValue()) === SEED + ADDED);

  // Insert mid-string: the caret must stay where the user put it.
  await page.keyboard.press('Control+Home');
  for (let i = 0; i < 'Dear'.length; i += 1) await page.keyboard.press('ArrowRight');
  await page.keyboard.type('est', { delay: 5 });
  const edited = SEED.replace('Dear', 'Dearest') + ADDED;
  check('typing in the middle of the draft keeps the caret in place', (await draft.inputValue()) === edited);
  check('the edit is flagged as unsaved', (await page.getByRole('status').first().innerText()) === 'Unsaved changes');

  // A failed save must keep the text and say so.
  await backend('?fail=1');
  await save.click();
  await page.getByRole('alert').filter({ hasText: /could not save/i }).waitFor();
  check(
    'a failed save keeps the text, reports the failure and can be retried',
    (await draft.inputValue()) === edited && (await save.isEnabled()),
  );

  await backend('?fail=0');
  await save.click();
  await page.getByText('Saved', { exact: true }).waitFor();
  check('saving sends the edited text to the backend', (await backend()).row.content === edited);
  check('the failure message is cleared after a successful save', (await page.getByRole('alert').filter({ hasText: /could not save/i }).count()) === 0);

  await page.reload();
  await draft.waitFor();
  check('the edit survives a reload', (await draft.inputValue()) === edited);

  await page.getByRole('button', { name: 'Copy text' }).click();
  await page.getByRole('button', { name: 'Copied' }).waitFor();
  check('Copy text puts the letter on the clipboard', (await page.evaluate(() => navigator.clipboard.readText())) === edited);

  // Phone width: the controls must stay reachable and nothing may overflow.
  await page.setViewportSize({ width: 375, height: 740 });
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  check('no horizontal overflow at phone width', overflow <= 1, `overflow=${overflow}px`);
  check('Save and Copy stay visible at phone width', (await save.isVisible()) && (await page.getByRole('button', { name: /copy text|copied/i }).isVisible()));

  check('no uncaught errors', pageErrors.length === 0, pageErrors.join(' | '));
  // The deliberate 500 above is logged by the browser as a failed resource.
  const unexpected = consoleErrors.filter((text) => !/status of 500/.test(text));
  check('no unexpected console errors', unexpected.length === 0, unexpected.join(' | '));
} finally {
  await browser.close();
}

const failed = results.filter((result) => !result.pass);
process.stdout.write(`\n${results.length - failed.length}/${results.length} cover-letter checks passed\n`);
process.exit(failed.length === 0 ? 0 : 1);
