import { interviewMap, customInterviewSlugs, hasCustomInterviewData } from '@/lib/interviewData';

describe('interview data coverage', () => {
  it('has unique hand-written content for the new high-demand roles', () => {
    for (const slug of ['frontend-developer', 'backend-developer', 'data-scientist', 'devops-engineer', 'java-developer', 'python-developer', 'react-developer', 'full-stack-developer']) {
      expect(hasCustomInterviewData(slug)).toBe(true);
      expect(interviewMap[slug]?.questions.length).toBeGreaterThanOrEqual(6);
    }
  });

  it('does not index stub roles', () => {
    expect(hasCustomInterviewData('interior-designer')).toBe(false);
    expect(customInterviewSlugs).not.toContain('interior-designer');
    expect(customInterviewSlugs.length).toBe(17);
  });
});
