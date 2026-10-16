import { interviewMap, hasRealInterviewData } from '@/lib/interviewData';
import { interviewDataMore } from '@/lib/interviewDataMore';
import { roleSlugs } from '@/lib/roleData';

describe('interview data', () => {
  it('every role in interviewDataMore is a real role with its own slug and enough content', () => {
    for (const [slug, d] of Object.entries(interviewDataMore)) {
      expect(roleSlugs).toContain(slug);
      expect(d.slug).toBe(slug);
      expect(d.questions.length).toBeGreaterThanOrEqual(6);
      expect(d.tips.length).toBeGreaterThanOrEqual(5);
    }
  });

  it('flags hand-written roles as real and generic stubs as not real', () => {
    expect(hasRealInterviewData('frontend-developer')).toBe(true);
    expect(hasRealInterviewData('software-engineer')).toBe(true);
    expect(hasRealInterviewData('pharmacist')).toBe(false);
    expect(interviewMap['pharmacist']).toBeDefined();
  });
});
