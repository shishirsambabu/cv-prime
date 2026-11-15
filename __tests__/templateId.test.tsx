import { render, screen } from '@testing-library/react';
import { CVCard } from '@/components/dashboard/CVCard';
import { FALLBACK_TEMPLATE_ID, TEMPLATE_IDS, normalizeTemplateId } from '@/lib/templateId';
import { templateMap } from '@/components/templates';
import { PRO_TEMPLATES } from '@/lib/constants';
import type { TemplateId } from '@/types/cv.types';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ refresh: jest.fn(), push: jest.fn() }),
}));

describe('normalizeTemplateId', () => {
  it('keeps every template this build renders', () => {
    for (const id of TEMPLATE_IDS) expect(normalizeTemplateId(id)).toBe(id);
    expect([...TEMPLATE_IDS].sort()).toEqual(Object.keys(templateMap).sort());
  });

  it.each([null, undefined, '', ' ', 'retro-2019', 'Modern', 42, {}, 'constructor', 'toString'])(
    'falls back for %j',
    (value) => {
      expect(normalizeTemplateId(value)).toBe(FALLBACK_TEMPLATE_ID);
    }
  );

  it('falls back to a free template, so a bad row is never put behind the Pro gate', () => {
    expect(PRO_TEMPLATES).not.toContain(FALLBACK_TEMPLATE_ID);
  });
});

// Regression: the dashboard passed the raw `template_id` column straight to
// CVCard, which indexed its template table with it. One row with a value no
// template exists for threw during render and replaced the whole dashboard
// (every CV, not just that one) with the error page.
describe('CVCard with a template id it does not know', () => {
  it('renders instead of throwing', () => {
    render(
      <CVCard
        id="cv-1"
        title="Legacy CV"
        templateId={'retro-2019' as unknown as TemplateId}
        lastEdited={null}
        atsScore={null}
        isPublic={false}
        plan="free"
      />
    );
    expect(screen.getByRole('button', { name: 'Legacy CV' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /edit/i })).toHaveAttribute('href', '/editor/cv-1');
  });
});
