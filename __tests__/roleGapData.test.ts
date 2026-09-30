import { roleSlugs } from '@/lib/roleData';
import { atsGuideDataMap } from '@/lib/atsGuideData';
import { coverLetterMap } from '@/lib/coverLetterData';

describe('role-page data coverage', () => {
  it('has ATS guide data for every role', () => {
    expect(roleSlugs.filter((s) => !(s in atsGuideDataMap))).toEqual([]);
  });
  it('has cover letter data for every role', () => {
    expect(roleSlugs.filter((s) => !(s in coverLetterMap))).toEqual([]);
  });
  it('has complete, non-empty entries', () => {
    for (const s of roleSlugs) {
      const a = atsGuideDataMap[s];
      const c = coverLetterMap[s];
      expect(a.atsKeywords.length).toBeGreaterThanOrEqual(15);
      expect(a.faqs.length).toBeGreaterThanOrEqual(2);
      expect(c.dos.length).toBeGreaterThanOrEqual(5);
      expect(c.sampleOpening.length).toBeGreaterThan(50);
      expect(c.faqs.length).toBeGreaterThanOrEqual(2);
    }
  });
});
