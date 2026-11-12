import { readFileSync } from 'fs';
import { join } from 'path';
import {
  aiScoreBands,
  keywordBands,
  strengthChecks,
  KEYWORD_MATCHER_MAX_KEYWORDS,
  STRENGTH_SCORE_TOTAL,
} from '@/lib/atsMethodology';

function source(path: string): string {
  return readFileSync(join(process.cwd(), path), 'utf8');
}

// The /ats-score-methodology page publishes these numbers as fact, so they
// must match what the scoring code actually does.
describe('published ATS score methodology matches the scoring code', () => {
  it('lists the same AI rubric bands the ats-score route sends to the model', () => {
    const route = source('app/api/ats-score/route.ts');

    for (const band of aiScoreBands) {
      expect(route).toContain(`${band.range} = ${band.label.toLowerCase()}`);
    }
    expect(route).toContain('temperature: 0.2');
    expect(route).toContain('.slice(-19)');
    expect(route).toContain('missingKeywords: z.array(z.string()).max(30)');
    expect(route).toContain('suggestions: z.array(z.string()).max(12)');
  });

  it('lists the same keyword matcher thresholds and keyword cap', () => {
    const matcher = source('components/tools/AtsKeywordMatcher.tsx');

    expect(matcher).toContain(`keywords.length >= ${KEYWORD_MATCHER_MAX_KEYWORDS}`);
    for (const band of keywordBands.filter((b) => b.min > 0)) {
      expect(matcher).toContain(`score >= ${band.min}) return { label: '${band.label}'`);
    }
    expect(matcher).toContain("label: 'Likely filtered out'");
    expect(keywordBands.map((b) => b.label)).toContain('Likely filtered out');
    expect(matcher).not.toContain('fetch(');
  });

  it('lists the same resume strength checks and point weights', () => {
    const analyzer = source('components/tools/ResumeStrengthAnalyzer.tsx');

    for (const check of strengthChecks) {
      expect(analyzer).toContain(`label: '${check.label}', status, detail, points, max: ${check.max}`);
    }
    expect(STRENGTH_SCORE_TOTAL).toBe(100);
    expect(analyzer).not.toContain('fetch(');
  });

  it('is discoverable: sitemap, robots allow-list, footer and llms.txt', () => {
    expect(source('app/sitemap.ts')).toContain('/ats-score-methodology');
    expect(source('app/robots.ts')).toContain("'/ats-score-methodology'");
    expect(source('components/marketing/MarketingFooter.tsx')).toContain('/ats-score-methodology');
    expect(source('public/llms.txt')).toContain('/ats-score-methodology');
  });
});
