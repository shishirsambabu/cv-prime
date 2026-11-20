import { mergeAtsFix } from '@/lib/atsFixMerge';
import { sanitizeCVData } from '@/lib/cv';
import type { CVData } from '@/types/cv.types';

// Regression: /api/ats-fix returned whatever CV the model sent back, and the
// editor wrote it over the user's CV after only a shape check. Anything the
// model dropped or altered outside the bullets and summary was lost without a
// trace in the before/after view.

function original(): CVData {
  return sanitizeCVData({
    personal: { name: 'Asha Rao', title: 'Engineer', email: 'asha@example.com', summary: 'Original summary.' },
    experience: [
      { id: 'e1', company: 'Paytm', role: 'Senior Engineer', startDate: '2020', endDate: '2024', bullets: ['Built a ledger.'] },
      { id: 'e2', company: 'Flipkart', role: 'Engineer', startDate: '2016', endDate: '2020', bullets: ['Ran checkout.'] },
    ],
    education: [{ id: 'd1', institution: 'IIT Bombay', degree: 'B.Tech', field: 'CS', gpa: '8.7' }],
    skills: { technical: ['Go'], soft: ['Mentoring'], languages: ['English'] },
    projects: [{ id: 'p1', name: 'Ledger', description: 'A ledger.', tech: ['Go'], url: 'https://x.test' }],
    certifications: ['AWS SA'],
    awards: ['Star performer'],
  });
}

describe('mergeAtsFix', () => {
  it('takes rewritten bullets, summary, skills and project descriptions', () => {
    const rewritten = original();
    rewritten.personal.summary = 'Sharper summary.';
    rewritten.experience[0]!.bullets = ['Built a ledger handling 4k TPS.', '  '];
    rewritten.skills.technical = ['Go', 'Kafka'];
    rewritten.projects[0]!.description = 'A double-entry ledger.';

    const merged = mergeAtsFix(original(), rewritten);

    expect(merged.personal.summary).toBe('Sharper summary.');
    expect(merged.experience[0]?.bullets).toEqual(['Built a ledger handling 4k TPS.']);
    expect(merged.skills.technical).toEqual(['Go', 'Kafka']);
    expect(merged.projects[0]?.description).toBe('A double-entry ledger.');
  });

  it('keeps every entry and fact the model dropped or changed', () => {
    const rewritten = original();
    rewritten.personal.name = 'A. Rao';
    rewritten.personal.email = '';
    rewritten.personal.summary = '';
    rewritten.experience = [{ ...rewritten.experience[0]!, company: 'Paytm Payments Bank', startDate: '2019', bullets: [] }];
    rewritten.education = [];
    rewritten.projects = [];
    rewritten.certifications = [];
    rewritten.awards = [];
    rewritten.skills = { technical: [], soft: [], languages: [] };
    rewritten.sectionOrder = ['personal'];

    expect(mergeAtsFix(original(), rewritten)).toEqual(original());
  });

  it('never moves text between roles when the model drops one and renumbers the rest', () => {
    const rewritten = original();
    rewritten.experience = [{ ...rewritten.experience[1]!, id: 'x', bullets: ['Rewritten checkout bullet.'] }];

    const merged = mergeAtsFix(original(), rewritten);

    expect(merged.experience.map((item) => item.bullets)).toEqual([['Built a ledger.'], ['Ran checkout.']]);
  });

  it('matches by position when ids were renumbered but nothing was added or removed', () => {
    const rewritten = original();
    rewritten.experience = rewritten.experience.map((item, index) => ({
      ...item,
      id: `new-${index}`,
      bullets: [`Rewritten ${index}`],
    }));

    const merged = mergeAtsFix(original(), rewritten);

    expect(merged.experience.map((item) => [item.id, item.bullets[0]])).toEqual([
      ['e1', 'Rewritten 0'],
      ['e2', 'Rewritten 1'],
    ]);
  });
});
