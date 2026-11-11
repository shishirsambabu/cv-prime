import { render } from '@testing-library/react';
import ATSGuideRolePage from '@/app/(marketing)/ats-guide/[role]/page';
import { atsGuideDataMap } from '@/lib/atsGuideData';
import { salaryDataMap } from '@/lib/salaryData';

/**
 * The ATS guides were extended to roles that have no salary guide, but the
 * "Related resources" block still linked every role to /salary/[role] — a
 * 404 on each of those pages. Every per-role salary link an ATS guide renders
 * must point at a salary page that is actually generated.
 */
describe('ATS guide → salary guide cross-link', () => {
  const roles = Object.keys(atsGuideDataMap);

  it('exercises roles that do have a salary guide', () => {
    expect(roles.some((slug) => slug in salaryDataMap)).toBe(true);
  });

  it.each(roles)('%s only links to a salary page that exists', (slug) => {
    const { container, unmount } = render(ATSGuideRolePage({ params: { role: slug } }));
    const salaryLinks = Array.from(container.querySelectorAll('a[href^="/salary"]')).map((a) =>
      a.getAttribute('href')
    );

    expect(salaryLinks.length).toBeGreaterThan(0);
    for (const href of salaryLinks) {
      const target = href === '/salary' ? null : href?.replace('/salary/', '');
      if (target !== null && target !== undefined) {
        expect(Object.keys(salaryDataMap)).toContain(target);
      }
    }
    unmount();
  });
});
