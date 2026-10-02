import { atsGuideDataMap } from '@/lib/atsGuideData';
import { roleSlugs } from '@/lib/roleData';

describe('atsGuideDataMap', () => {
  it('has complete entries for every role', () => {
    const missing = roleSlugs.filter((slug) => !(slug in atsGuideDataMap));
    expect(missing).toEqual([]);
  });

  it('has fully populated guides', () => {
    for (const slug of roleSlugs) {
      const g = atsGuideDataMap[slug]!;
      expect(g.atsKeywords.length).toBeGreaterThanOrEqual(15);
      expect(g.mustHaveSections.length).toBeGreaterThanOrEqual(4);
      expect(g.formattingRules.length).toBeGreaterThanOrEqual(5);
      expect(g.commonAtsFailures.length).toBeGreaterThanOrEqual(4);
      expect(g.keywordTips.length).toBeGreaterThanOrEqual(4);
      expect(g.faqs.length).toBeGreaterThanOrEqual(2);
    }
  });
});
