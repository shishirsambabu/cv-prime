/**
 * Browser-level regression coverage for what ends up on the exported CV.
 *
 * These are checked against real computed styles and real print layout,
 * because none of it is visible to jsdom:
 *
 * 1. Sidebar templates (Modern is free and is the fallback template) drew
 *    sidebar text in the main column's colours: the degree line was #0f172a
 *    on a #0f172a sidebar, i.e. invisible in the preview and in the PDF.
 * 2. The export printed the editor's hints for empty fields ("Add a focused
 *    3 to 4 line summary…", "Role title") on the CV itself.
 * 3. A long CV lost its page padding from page 2 on: text started at the very
 *    top edge of the sheet.
 * 4. Section order was ignored inside the sidebar.
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

const LONG_EXPERIENCE = Array.from({ length: 6 }, (_, i) => ({
  id: `exp-${i}`,
  company: `Company ${i}`,
  // One role left blank: its hint must not be printed.
  role: i === 2 ? '' : `Senior Engineer ${i}`,
  startDate: '2015',
  endDate: '2018',
  current: false,
  bullets: Array.from(
    { length: 5 },
    (_, j) => `Delivered measurable outcome ${j} across a large distributed platform serving millions of customers daily.`,
  ),
}));

async function seed(sectionOrder) {
  await fetch(`${MOCK}/__reset?seed=1`);
  await fetch(`${MOCK}/__set_cv_data`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      experience: LONG_EXPERIENCE,
      certifications: ['AWS Solutions Architect'],
      personal: {
        name: 'Asha Rao',
        title: 'Senior Backend Engineer',
        email: 'asha@example.com',
        phone: '+91 90000 00000',
        location: 'Bengaluru',
        linkedin: '',
        website: '',
        summary: '',
      },
      sectionOrder,
    }),
  });
  await fetch(`${MOCK}/__set_template?id=modern`);
}

/** Every text-bearing element in the sidebar whose colour is too close to the sidebar's background. */
/**
 * The editor also renders small sample CVs in the template picker, so the
 * user's own CV is located by a marker from the seeded data.
 */
async function unreadableSidebarText(page) {
  return page.evaluate((marker) => {
    const parse = (value) => (value.match(/[\d.]+/g) ?? []).slice(0, 3).map(Number);
    const luminance = ([r, g, b]) => {
      const channel = (v) => {
        const s = v / 255;
        return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
      };
      return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
    };
    const contrast = (a, b) => {
      const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
      return (hi + 0.05) / (lo + 0.05);
    };
    const article = Array.from(document.querySelectorAll('article')).find(
      (el) => el.querySelector('aside') && (el.textContent ?? '').includes(marker),
    );
    const aside = article?.querySelector('aside');
    if (!aside) return ['no sidebar found'];
    const background = parse(getComputedStyle(aside).backgroundColor);
    const bad = [];
    for (const el of aside.querySelectorAll('h1, h2, p, li')) {
      const text = (el.textContent ?? '').trim();
      if (!text) continue;
      const ratio = contrast(parse(getComputedStyle(el).color), background);
      if (ratio < 3) bad.push(`${text.slice(0, 30)} (${ratio.toFixed(2)}:1)`);
    }
    return bad;
  }, 'Company 0');
}

const DEFAULT_ORDER = ['personal', 'experience', 'education', 'skills', 'projects', 'certifications', 'awards'];
const SKILLS_FIRST = ['personal', 'skills', 'experience', 'education', 'projects', 'certifications', 'awards'];

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1366, height: 900 } });
await context.addCookies([sessionCookie(new URL(BASE).hostname)]);
const page = await context.newPage();
const pageErrors = [];
page.on('pageerror', (error) => pageErrors.push(error.message));

try {
  // ---- the exported page ----
  await seed(DEFAULT_ORDER);
  await page.goto(`${BASE}/print/${CV_ID}?token=e2e`, { waitUntil: 'networkidle' });
  const printed = await page.evaluate(() => document.querySelector('.print-page')?.textContent ?? '');
  check('the print page renders the CV', printed.includes('Asha Rao') && printed.includes('Company 0'));
  check('export has no summary hint for an empty summary', !/Add a focused/.test(printed));
  check('export has no "Role title" hint for an empty role', !printed.includes('Role title'));
  check('export still shows the company of the role with no title', printed.includes('Company 2'));

  const badPrint = await unreadableSidebarText(page);
  check('every line of sidebar text is readable on the exported page', badPrint.length === 0, badPrint.join(', '));

  const sidebarTitles = () =>
    page.evaluate(() => Array.from(document.querySelectorAll('article aside h2')).map((h) => h.textContent));
  const defaultTitles = await sidebarTitles();
  check('sidebar shows Education before Skills in the default order', defaultTitles[0] === 'Education', String(defaultTitles));

  // Page 2 keeps its padding: with the padding applied once, the second
  // sheet started with text at the top edge.
  await page.emulateMedia({ media: 'print' });
  const decoration = await page.evaluate(() => {
    const article = document.querySelector('.print-page article');
    const style = article ? getComputedStyle(article) : null;
    return style ? style.boxDecorationBreak || style.webkitBoxDecorationBreak : '';
  });
  check('page padding repeats on every printed page', decoration === 'clone', `box-decoration-break: ${decoration}`);
  const pdf = await page.pdf({ format: 'A4', printBackground: true, preferCSSPageSize: true });
  const pdfPages = (pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) ?? []).length;
  check('the long CV exports as more than one page', pdfPages >= 2, `pages: ${pdfPages}`);
  await page.emulateMedia({ media: 'screen' });

  // ---- section order inside the sidebar ----
  await seed(SKILLS_FIRST);
  await page.goto(`${BASE}/print/${CV_ID}?token=e2e`, { waitUntil: 'networkidle' });
  const reordered = await sidebarTitles();
  check('moving Skills above Education reorders the sidebar', reordered[0] === 'Skills', String(reordered));

  // ---- the editor preview ----
  await seed(DEFAULT_ORDER);
  await page.goto(`${BASE}/editor/${CV_ID}`, { waitUntil: 'networkidle' });
  await page.waitForSelector('article aside');
  const badPreview = await unreadableSidebarText(page);
  check('every line of sidebar text is readable in the editor preview', badPreview.length === 0, badPreview.join(', '));
  const previewText = await page.evaluate(
    () =>
      Array.from(document.querySelectorAll('article')).find((el) => (el.textContent ?? '').includes('Company 0'))
        ?.textContent ?? '',
  );
  check('the editor preview still shows the summary hint', /Add a focused/.test(previewText));

  check('no uncaught errors during the run', pageErrors.length === 0, pageErrors.join(' | '));
} finally {
  await fetch(`${MOCK}/__reset?seed=1`).catch(() => {});
  await browser.close();
}

const failed = results.filter((r) => !r.pass);
process.stdout.write(`\n${results.length - failed.length}/${results.length} template-export checks passed\n`);
process.exit(failed.length === 0 ? 0 : 1);
