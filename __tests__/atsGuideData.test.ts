import { atsGuideDataMap } from '@/lib/atsGuideData';
import { atsGuideDataExtra } from '@/lib/atsGuideDataExtra';
import { roleSlugs } from '@/lib/roleData';

describe('atsGuideDataMap', () => {
  it('has an entry for every role', () => {
    const missing = roleSlugs.filter((slug) => !(slug in atsGuideDataMap));
    expect(missing).toEqual([]);
  });

  it('has non-empty lists for every role', () => {
    for (const slug of roleSlugs) {
      const g = atsGuideDataMap[slug]!;
      expect(g.atsKeywords.length).toBeGreaterThan(0);
      expect(g.mustHaveSections.length).toBeGreaterThan(0);
      expect(g.formattingRules.length).toBeGreaterThan(0);
      expect(g.commonAtsFailures.length).toBeGreaterThan(0);
      expect(g.keywordTips.length).toBeGreaterThan(0);
      expect(g.faqs.length).toBeGreaterThan(0);
    }
  });

  it('has fully populated hand-written entries for the gap roles', () => {
    expect(Object.keys(atsGuideDataExtra)).toHaveLength(15);
    for (const g of Object.values(atsGuideDataExtra)) {
      expect(g.atsKeywords.length).toBeGreaterThanOrEqual(15);
      expect(g.formattingRules.length).toBeGreaterThanOrEqual(5);
      expect(g.commonAtsFailures.length).toBeGreaterThanOrEqual(5);
      expect(g.keywordTips.length).toBeGreaterThanOrEqual(5);
      expect(g.faqs).toHaveLength(3);
    }
  });
});
