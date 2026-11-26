import fs from 'node:fs';
import path from 'node:path';

/**
 * The marketing site was converted to a dark theme by swapping text colours
 * to light shades (text-white, text-slate-200/300) but leaving many pastel
 * backgrounds (bg-red-50, bg-green-50, bg-slate-100, bg-white/90 navs, ...)
 * in place. The result was light text on light cards: unreadable "before /
 * after" examples, invisible headings, and on /pricing a Free plan whose
 * name and price were white on white.
 *
 * Guard: on a dark marketing page (anything that does not render its own
 * light <main>), a class string may only use a light background if the same
 * string also sets a dark text colour, so the element brings its own
 * readable foreground instead of inheriting the page's light text.
 *
 * e2e/marketing-contrast.mjs measures the rendered contrast in a browser.
 */

const ROOT = path.resolve(__dirname, '..');
const SCAN_DIRS = ['app/(marketing)', 'components/tools', 'components/marketing'];

// Components that deliberately draw light surfaces (CV paper mock-ups, the
// light variant of the hero, a white pill on an orange banner) and always set
// dark text on their children.
const LIGHT_BY_DESIGN = new Set([
  'components/marketing/FlowHero.tsx',
  'components/marketing/FestiveBanner.tsx',
  'components/marketing/HeroShowcase.tsx',
]);

const COLORS =
  'red|rose|pink|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia';
const LIGHT_BG = new RegExp(
  `(?:^|\\s)(?:[a-z-]+:)*bg-(?:slate-(?:50|100|200)|(?:${COLORS})-(?:50|100|200)|white/(?:60|70|80|85|90|95))(?:/\\d+)?(?=\\s|$)`
);
const DARK_TEXT = new RegExp(
  `(?:^|\\s)text-(?:(?:slate|gray|zinc|neutral|stone)-(?:[6-9]00|950)|black|(?:${COLORS})-[6-9]00|brand)(?=\\s|$)`
);

function listFiles(dir: string): string[] {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) return [];
  return fs.readdirSync(abs, { withFileTypes: true }).flatMap((entry) => {
    const rel = path.join(dir, entry.name);
    if (entry.isDirectory()) return listFiles(rel);
    return entry.name.endsWith('.tsx') ? [rel] : [];
  });
}

function isLightPage(source: string): boolean {
  return /<main className="min-h-screen bg-white(?: text-slate-9[05]0)?"/.test(source);
}

function classStrings(source: string): string[] {
  const out: string[] = [];
  const re = /(["'`])((?:(?!\1)[^\\\n]|\\.)*)\1/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(source))) {
    if (match[2]?.includes('bg-')) out.push(match[2]);
  }
  return out;
}

const darkFiles = SCAN_DIRS.flatMap(listFiles).filter((file) => {
  if (LIGHT_BY_DESIGN.has(file.split(path.sep).join('/'))) return false;
  return !isLightPage(fs.readFileSync(path.join(ROOT, file), 'utf8'));
});

describe('dark marketing pages do not put light backgrounds behind inherited light text', () => {
  it('scans a meaningful number of files', () => {
    expect(darkFiles.length).toBeGreaterThan(50);
  });

  it.each(darkFiles)('%s', (file) => {
    const source = fs.readFileSync(path.join(ROOT, file), 'utf8');
    const offenders = classStrings(source).filter((cls) => LIGHT_BG.test(cls) && !DARK_TEXT.test(cls));
    expect(offenders).toEqual([]);
  });

  it('the Free plan card on /pricing sets its own dark text on its white surface', () => {
    const source = fs.readFileSync(path.join(ROOT, 'components/payments/PricingPlans.tsx'), 'utf8');
    const freeCard = source.match(/<article className="([^"]*)">\s*<div className="relative">\s*<h2[^>]*>Free</);
    expect(freeCard).not.toBeNull();
    expect(freeCard?.[1]).toMatch(/\bbg-white\b/);
    expect(freeCard?.[1]).toMatch(/\btext-slate-9[05]0\b/);
  });
});
