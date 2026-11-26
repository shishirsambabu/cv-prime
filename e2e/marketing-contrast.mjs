/**
 * Browser-level regression coverage for unreadable marketing pages.
 *
 * The site-wide dark-theme conversion swapped text colours to light shades but
 * left pastel backgrounds behind (bg-red-50, bg-green-50, bg-slate-100,
 * bg-white/90 navs), so whole blocks rendered light-on-light: the Free plan's
 * name and price on /pricing were white on white, the "before / after"
 * examples on /ai-resume-rewriter were near-invisible, and tab buttons on the
 * LinkedIn counter lost their label on hover.
 *
 * This spec renders each page in Chromium, composites every text element's
 * background up the tree, and fails on any text below a 2:1 contrast ratio
 * (far under WCAG's 4.5:1 — it only catches "can't read it at all").
 * Deliberately faint decorative text (alpha < 0.5, e.g. text-brand/30 step
 * numbers) is skipped. __tests__/marketingDarkThemeContrast.test.ts guards the
 * same thing statically in CI.
 *
 * Run it with `npm run test:e2e` (see e2e/README.md).
 */

import { createRequire } from 'node:module';

const { chromium } = createRequire(import.meta.url)('playwright');

const BASE = process.env.E2E_BASE_URL ?? 'http://127.0.0.1:3002';
const MOCK = process.env.E2E_MOCK_URL ?? 'http://127.0.0.1:54321';
const MIN_RATIO = 2;

const PAGES = [
  '/pricing',
  '/ai-resume-rewriter',
  '/ats-friendly-cv',
  '/ats-report-2026',
  '/career-glossary',
  '/career-change-resume',
  '/campus-placement-resume',
  '/internship-resume',
  '/best-ai-resume-builder-india-2026',
  '/resume-checker',
  '/resume-format',
  '/fresher-resume',
  '/resume-tips/how-to-write-a-resume',
  '/cv-prime-vs-canva',
  '/tools/linkedin-character-counter',
  '/tools/cgpa-to-percentage',
  '/biodata-format',
];

const results = [];
function check(name, pass, detail = '') {
  results.push({ name, pass, detail });
  process.stdout.write(`${pass ? 'ok  ' : 'FAIL'} ${name}${pass || !detail ? '' : `\n     ${detail}`}\n`);
}

/** Runs in the page: contrast of `el`'s own text against its composited background. */
function contrastOf(el) {
  const parse = (c) => {
    const m = c.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const p = m[1].split(/[ ,/]+/).filter(Boolean).map(Number);
    return [p[0], p[1], p[2], p[3] === undefined ? 1 : p[3]];
  };
  const lum = ([r, g, b]) => {
    const f = (v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
    };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const layers = [];
  for (let e = el; e; e = e.parentElement) {
    const cs = getComputedStyle(e);
    // Gradients and images can't be composited reliably; don't guess.
    if (cs.backgroundImage && cs.backgroundImage !== 'none') return null;
    const c = parse(cs.backgroundColor);
    if (c && c[3] > 0) layers.push(c);
    if (c && c[3] >= 1) break;
  }
  let bg = [255, 255, 255];
  for (let i = layers.length - 1; i >= 0; i -= 1) {
    const [r, g, b, a] = layers[i];
    bg = [r * a + bg[0] * (1 - a), g * a + bg[1] * (1 - a), b * a + bg[2] * (1 - a)];
  }
  const fg = parse(getComputedStyle(el).color);
  if (!fg || fg[3] < 0.5) return null;
  const mixed = [0, 1, 2].map((i) => fg[i] * fg[3] + bg[i] * (1 - fg[3]));
  const l1 = lum(mixed);
  const l2 = lum(bg);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

function lowContrastText(minRatio, contrastSrc) {
  const contrast = new Function(`return (${contrastSrc})`)();
  const out = [];
  for (const el of document.querySelectorAll('main *, nav *')) {
    if (!(el instanceof HTMLElement)) continue;
    if (el.closest('[aria-hidden="true"]')) continue;
    const ownText = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
    if (!ownText) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none' || Number(cs.opacity) === 0) continue;
    const box = el.getBoundingClientRect();
    if (!box.width || !box.height) continue;
    const ratio = contrast(el);
    if (ratio !== null && ratio < minRatio) {
      out.push(`${ratio.toFixed(2)}:1 "${el.textContent.trim().slice(0, 50)}"`);
    }
  }
  return out;
}

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
await context.route('**/*', (route) =>
  route.request().url().startsWith(BASE) || route.request().url().startsWith(MOCK)
    ? route.continue()
    : route.fulfill({ status: 204, body: '' })
);
const page = await context.newPage();
page.setDefaultTimeout(60_000);
page.setDefaultNavigationTimeout(180_000);
const pageErrors = [];
page.on('pageerror', (error) => pageErrors.push(String(error)));

for (const route of PAGES) {
  await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle' });
  const bad = await page.evaluate(
    ({ min, src, fn }) => new Function(`return (${fn})`)()(min, src),
    { min: MIN_RATIO, src: contrastOf.toString(), fn: lowContrastText.toString() }
  );
  check(`${route}: all text readable`, bad.length === 0, bad.slice(0, 5).join(' | '));
}

// Hover states: the LinkedIn counter's field tabs turned light-on-light.
await page.goto(`${BASE}/tools/linkedin-character-counter`, { waitUntil: 'networkidle' });
const tab = page.getByRole('button', { name: /About \/ Summary/ });
await tab.hover();
await page.waitForTimeout(300);
const hoverRatio = await tab.evaluate(
  (el, src) => new Function(`return (${src})`)()(el),
  contrastOf.toString()
);
check(
  'a hovered LinkedIn counter tab keeps a readable label',
  hoverRatio !== null && hoverRatio >= 3,
  `contrast ${hoverRatio?.toFixed(2)}:1`
);

// The CGPA formula picker: native option lists ignore transparent select
// backgrounds on Windows, so the options themselves must carry a dark surface.
const optionStyles = await (async () => {
  await page.goto(`${BASE}/tools/cgpa-to-percentage`, { waitUntil: 'networkidle' });
  return page.locator('#cgpa-formula option').evaluateAll((opts) =>
    opts.map((o) => {
      const cs = getComputedStyle(o);
      return { bg: cs.backgroundColor, color: cs.color };
    })
  );
})();
check(
  'CGPA formula options have an opaque dark background',
  optionStyles.length > 0 &&
    optionStyles.every((s) => /^rgb\(/.test(s.bg) && !/^rgb\(255, 255, 255\)/.test(s.bg)),
  JSON.stringify(optionStyles[0])
);

check('no uncaught errors during the run', pageErrors.length === 0, pageErrors.slice(0, 3).join(' | '));

await browser.close();
const failed = results.filter((r) => !r.pass).length;
process.stdout.write(`\n${results.length - failed}/${results.length} marketing-contrast checks passed\n`);
process.exit(failed === 0 ? 0 : 1);
