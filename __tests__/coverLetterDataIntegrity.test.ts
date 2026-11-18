import { roleSlugs } from '@/lib/roleData';
import { coverLetterMap } from '@/lib/coverLetterData';
import { atsGuideDataMap } from '@/lib/atsGuideData';

/**
 * /cover-letter-examples/[role] only builds for roles in coverLetterMap, and
 * related-resource links on the resume-builder, resume-example and ATS-guide
 * pages are gated on the same map. These checks keep the cluster complete and
 * stop thin or orphaned pages from shipping.
 */
describe('cover letter data integrity', () => {
  it('has a cover letter guide for every role page', () => {
    const missing = roleSlugs.filter((slug) => !(slug in coverLetterMap));
    expect(missing).toEqual([]);
  });

  it('has no cover letter entries for roles that do not exist', () => {
    const orphaned = Object.keys(coverLetterMap).filter((slug) => !roleSlugs.includes(slug));
    expect(orphaned).toEqual([]);
  });

  it('keeps every guide substantive enough to index', () => {
    const thin = Object.entries(coverLetterMap)
      .filter(
        ([, data]) =>
          data.dos.length < 4 ||
          data.donts.length < 4 ||
          data.keyPoints.length < 3 ||
          data.faqs.length < 2 ||
          data.sampleOpening.length < 120 ||
          data.sampleBody.length < 300 ||
          data.sampleClosing.length < 80,
      )
      .map(([slug]) => slug);
    expect(thin).toEqual([]);
  });

  it('gives every role an ATS guide (the ATS guide links to the cover letter page)', () => {
    const missing = roleSlugs.filter((slug) => !(slug in atsGuideDataMap));
    expect(missing).toEqual([]);
  });
});
