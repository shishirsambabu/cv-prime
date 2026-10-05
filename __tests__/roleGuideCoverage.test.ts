import { roleSlugs } from '@/lib/roleData';
import { atsGuideDataMap } from '@/lib/atsGuideData';
import { coverLetterMap } from '@/lib/coverLetterData';

describe('role guide coverage', () => {
  it('has an ATS guide for every role', () => {
    expect(roleSlugs.filter((slug) => !(slug in atsGuideDataMap))).toEqual([]);
  });

  it('has a cover letter example for every role', () => {
    expect(roleSlugs.filter((slug) => !(slug in coverLetterMap))).toEqual([]);
  });

  it('gives every ATS guide and cover letter FAQ content for schema', () => {
    for (const slug of roleSlugs) {
      const ats = atsGuideDataMap[slug];
      const letter = coverLetterMap[slug];
      expect(ats?.faqs.length).toBeGreaterThan(0);
      expect(ats?.atsKeywords.length).toBeGreaterThan(5);
      expect(letter?.faqs.length).toBeGreaterThan(0);
      expect(letter?.sampleBody.length).toBeGreaterThan(50);
    }
  });
});
