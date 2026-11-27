/**
 * Browser-level coverage for every editor field editor-typing.mjs does not
 * reach: the rest of the personal block, role/education/project entries
 * (including adding and removing them), certifications and awards — followed
 * by a check that what was typed is exactly what autosave sends and what a
 * reload brings back.
 *
 * Run it with `npm run test:e2e` (see e2e/README.md).
 */

import { createRequire } from 'node:module';

// Resolved with require(), not `import`: a globally installed Playwright is
// found through NODE_PATH, which ESM `import` ignores.
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
const consoleErrors = [];
const saveStatuses = [];
page.on('pageerror', (error) => pageErrors.push(String(error)));
page.on('console', (message) => {
  if (message.type() !== 'error' && message.type() !== 'warning') return;
  if (/cashfree|ERR_TUNNEL|ERR_INTERNET|ERR_FAILED/i.test(message.text())) return;
  consoleErrors.push(`${message.type()}: ${message.text().slice(0, 300)}`);
});
page.on('response', (response) => {
  if (response.request().method() === 'PATCH' && response.url().includes(`/api/cvs/${CV_ID}`)) {
    saveStatuses.push(response.status());
  }
});

await page.goto(`${BASE}/editor/${CV_ID}`, { waitUntil: 'domcontentloaded' });
await page.waitForSelector('#personal-name', { timeout: 120_000 });

/** Types into a field the way a person does and reports what ended up in it. */
async function typeInto(locator, text) {
  await locator.scrollIntoViewIfNeeded();
  await locator.click();
  await locator.fill('');
  await locator.type(text, { delay: 5 });
  return locator.inputValue();
}

async function expectTyped(label, locator, text) {
  const value = await typeInto(locator, text);
  check(`${label} accepts typing`, value === text, JSON.stringify(value));
  check(
    `${label} keeps focus`,
    await locator.evaluate((el) => el === document.activeElement),
    await page.evaluate(() => document.activeElement?.id ?? document.activeElement?.tagName ?? ''),
  );
}

// --- the rest of the personal block --------------------------------------
await expectTyped('personal email', page.locator('#personal-email'), 'priya.k+jobs@example.co.in');
await expectTyped('personal phone', page.locator('#personal-phone'), '+91 98765 43210');
await expectTyped('personal location', page.locator('#personal-location'), "Hyderabad — Telangana, India");
await expectTyped('personal linkedin', page.locator('#personal-linkedin'), 'https://www.linkedin.com/in/priya-k');
await expectTyped('personal website', page.locator('#personal-website'), 'https://priya.dev/?ref=cv&x=1');

// Tab / Shift+Tab move between fields without losing what was typed.
await page.locator('#personal-name').focus();
await page.keyboard.press('Tab');
check('Tab moves from name to title', (await page.evaluate(() => document.activeElement?.id)) === 'personal-title');
await page.keyboard.press('Shift+Tab');
check('Shift+Tab moves back to name', (await page.evaluate(() => document.activeElement?.id)) === 'personal-name');

// --- skills: the two fields the typing spec does not touch ----------------
await expectTyped('soft skills', page.locator('#skills-soft'), 'Mentoring, Stakeholder management, ');
await expectTyped('languages', page.locator('#skills-languages'), 'English, हिन्दी, தமிழ்');

// --- experience: every field, then add and remove entries -----------------
const exp = (suffix, nth = 0) => page.locator(`[id^="experience-"][id$="-${suffix}"]`).nth(nth);
await expectTyped('role 1 role', exp('role'), 'Staff Engineer (Payments)');
await expectTyped('role 1 start date', exp('startDate'), 'Jan 2020');
await expectTyped('role 1 end date', exp('endDate'), 'Present');
const current = page.locator('input[type="checkbox"]').first();
await current.check();
check('current-role checkbox can be ticked', await current.isChecked());
check('ticking the checkbox leaves the end date alone', (await exp('endDate').inputValue()) === 'Present', await exp('endDate').inputValue());

await page.getByRole('button', { name: 'Add role' }).click();
check('Add role appends a second entry', (await page.locator('[id^="experience-"][id$="-company"]').count()) === 2);
await expectTyped('role 2 company', exp('company', 1), "O'Reilly & Sons \"Fintech\"");
await expectTyped('role 2 role', exp('role', 1), 'Engineering Manager');
const bullets2 = exp('bullets', 1);
await bullets2.click();
await bullets2.type('Led a team of 12', { delay: 5 });
await bullets2.press('Enter');
await bullets2.type('• Cut p99 latency 40% → 120ms', { delay: 5 });
check('role 2 bullets accept multi-line text', (await bullets2.inputValue()) === 'Led a team of 12\n• Cut p99 latency 40% → 120ms', JSON.stringify(await bullets2.inputValue()));
check('typing in role 2 does not disturb role 1', (await exp('role', 0).inputValue()) === 'Staff Engineer (Payments)', await exp('role', 0).inputValue());

// Removing the FIRST entry must leave the second one's text in the fields
// that are now first — an index-keyed form would show the wrong entry.
await page.locator('h3:has-text("Role 1")').locator('..').getByRole('button', { name: 'Remove' }).click();
check('Remove drops exactly one role', (await page.locator('[id^="experience-"][id$="-company"]').count()) === 1);
check('the surviving role keeps its company', (await exp('company').inputValue()) === "O'Reilly & Sons \"Fintech\"", await exp('company').inputValue());
check('the surviving role keeps its bullets', (await exp('bullets').inputValue()) === 'Led a team of 12\n• Cut p99 latency 40% → 120ms', JSON.stringify(await exp('bullets').inputValue()));
const survivorCompany = await typeInto(exp('company'), 'Zerodha');
check('the surviving role is still editable after a removal', survivorCompany === 'Zerodha', survivorCompany);

// --- education -------------------------------------------------------------
const edu = (suffix, nth = 0) => page.locator(`[id^="education-"][id$="-${suffix}"]`).nth(nth);
await expectTyped('education institution', edu('institution'), 'Indian Institute of Technology, Madras');
await expectTyped('education degree', edu('degree'), 'M.Tech');
await expectTyped('education field', edu('field'), 'Computer Science & Engineering');
await expectTyped('education start date', edu('startDate'), '2016');
await expectTyped('education end date', edu('endDate'), '2018');
await expectTyped('education GPA', edu('gpa'), '9.1/10');
await page.getByRole('button', { name: 'Add education' }).click();
await expectTyped('education 2 institution', edu('institution', 1), 'Anna University');
await page.locator('h3:has-text("Education 2")').locator('..').getByRole('button', { name: 'Remove' }).click();
check('removing education 2 leaves education 1 intact', (await edu('institution').inputValue()) === 'Indian Institute of Technology, Madras', await edu('institution').inputValue());

// --- projects --------------------------------------------------------------
await page.getByRole('button', { name: 'Add project' }).click();
const proj = (suffix, nth = 0) => page.locator(`[id^="project-"][id$="-${suffix}"]`).nth(nth);
await expectTyped('project name', proj('name'), 'UPI Reconciliation Engine');
await expectTyped('project description', proj('description'), 'Reconciles 2M+ transactions/day.\nSecond line with <tags> & "quotes".');
await expectTyped('project tech stack', proj('tech'), 'Go, Kafka, ClickHouse');
await expectTyped('project URL', proj('url'), 'https://github.com/priya/upi-recon');

// --- certifications and awards --------------------------------------------
await expectTyped('certifications', page.locator('#certifications-text'), 'AWS Solutions Architect\nCKA — Kubernetes Administrator');
await expectTyped('awards', page.locator('#awards-text'), 'Employee of the Year 2023\n\nHackathon winner');

// --- the live preview reflects what was typed ------------------------------
const previewText = await page.evaluate(() => document.body.innerText);
check('the preview shows the edited company', previewText.includes('Zerodha'));
check('the preview shows the project', previewText.includes('UPI Reconciliation Engine'));
check('the preview shows the removed role nowhere', !previewText.includes('Staff Engineer (Payments)'));

// --- autosave sends exactly this, and the server accepts it ----------------
await fetch(`${MOCK}/__reset`);
saveStatuses.length = 0;
// One more keystroke so the idle window starts now.
await page.locator('#personal-name').click();
await page.locator('#personal-name').press('End');
await page.locator('#personal-name').type(' Jr', { delay: 5 });
await page.waitForTimeout(33_000);

const patches = await (await fetch(`${MOCK}/__patches`)).json();
const saved = patches.at(-1)?.body?.data;
check('autosave was accepted by the API', saveStatuses.length > 0 && saveStatuses.every((status) => status === 200), JSON.stringify(saveStatuses));
check('the save reached the backend', Boolean(saved), `${patches.length} PATCH requests`);
check('saved: one role, the survivor', saved?.experience?.length === 1 && saved.experience[0].company === 'Zerodha', JSON.stringify(saved?.experience));
check('saved: role bullets as separate lines', JSON.stringify(saved?.experience?.[0]?.bullets) === JSON.stringify(['Led a team of 12', '• Cut p99 latency 40% → 120ms']), JSON.stringify(saved?.experience?.[0]?.bullets));
check('saved: education', saved?.education?.length === 1 && saved.education[0].gpa === '9.1/10' && saved.education[0].degree === 'M.Tech', JSON.stringify(saved?.education));
check('saved: project', saved?.projects?.[0]?.name === 'UPI Reconciliation Engine' && JSON.stringify(saved.projects[0].tech) === JSON.stringify(['Go', 'Kafka', 'ClickHouse']), JSON.stringify(saved?.projects));
check('saved: certifications', JSON.stringify(saved?.certifications) === JSON.stringify(['AWS Solutions Architect', 'CKA — Kubernetes Administrator']), JSON.stringify(saved?.certifications));
check('saved: awards without the blank line', JSON.stringify(saved?.awards) === JSON.stringify(['Employee of the Year 2023', 'Hackathon winner']), JSON.stringify(saved?.awards));
check('saved: languages in non-Latin scripts', JSON.stringify(saved?.skills?.languages) === JSON.stringify(['English', 'हिन्दी', 'தமிழ்']), JSON.stringify(saved?.skills?.languages));
check('saved: contact details', saved?.personal?.email === 'priya.k+jobs@example.co.in' && saved?.personal?.website === 'https://priya.dev/?ref=cv&x=1', JSON.stringify(saved?.personal));
check('the badge reports the CV as saved', /Saved/.test(await page.evaluate(() => document.body.innerText)) && !/Unsaved changes/.test(await page.evaluate(() => document.body.innerText)));

// --- and a reload brings all of it back ------------------------------------
await page.reload({ waitUntil: 'domcontentloaded' });
await page.waitForSelector('#personal-name');
check('reload: company', (await exp('company').inputValue()) === 'Zerodha', await exp('company').inputValue());
check('reload: bullets', (await exp('bullets').inputValue()) === 'Led a team of 12\n• Cut p99 latency 40% → 120ms', JSON.stringify(await exp('bullets').inputValue()));
check('reload: project tech', (await proj('tech').inputValue()).replace(/\s/g, '') === 'Go,Kafka,ClickHouse', await proj('tech').inputValue());
check('reload: certifications', (await page.locator('#certifications-text').inputValue()) === 'AWS Solutions Architect\nCKA — Kubernetes Administrator');
check('reload: current-role checkbox', (await page.locator('input[type="checkbox"]').first().isChecked()) === false);

check('no uncaught errors during the whole run', pageErrors.length === 0, JSON.stringify(pageErrors).slice(0, 800));
check('no React warnings or console errors during the whole run', consoleErrors.length === 0, JSON.stringify(consoleErrors).slice(0, 1200));

await browser.close();

const failed = results.filter((result) => !result.pass);
process.stdout.write(`\n${results.length - failed.length}/${results.length} checks passed\n`);
process.exit(failed.length === 0 ? 0 : 1);
