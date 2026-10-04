import { getCoverLetterData } from '@/lib/coverLetterData';
import { roleSlugs } from '@/lib/roleData';

describe('getCoverLetterData', () => {
  it('returns content for every role, including ones without curated data', () => {
    for (const slug of roleSlugs) {
      const data = getCoverLetterData(slug);
      expect(data).toBeDefined();
      expect(data?.dos.length).toBeGreaterThanOrEqual(4);
      expect(data?.faqs.length).toBeGreaterThanOrEqual(2);
    }
  });

  it('returns undefined for unknown roles', () => {
    expect(getCoverLetterData('not-a-role')).toBeUndefined();
  });

  it('builds role-specific stub content without fabricated statistics', () => {
    const data = getCoverLetterData('scrum-master');
    expect(data?.sampleOpening).toContain('Scrum Framework');
    expect(data?.sampleOpening).toContain('[X years]');
  });
});
