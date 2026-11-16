import { render, screen } from '@testing-library/react';
import { templateMap } from '@/components/templates';
import { getDefaultCVData } from '@/lib/cv';
import type { CVData } from '@/types/cv.types';

function cv(overrides: Partial<CVData> = {}): CVData {
  const base = getDefaultCVData();
  return {
    ...base,
    personal: { ...base.personal, name: 'Asha Rao', title: 'Backend Engineer', summary: '' },
    experience: [
      { id: 'e1', company: 'Paytm', role: '', startDate: '2020', endDate: '2024', current: false, bullets: ['Built a ledger.'] },
    ],
    education: [
      { id: 'd1', institution: 'IIT Bombay', degree: 'B.Tech', field: 'CS', startDate: '2012', endDate: '2016', gpa: '' },
    ],
    skills: { technical: ['Go'], soft: [], languages: [] },
    certifications: ['AWS SA'],
    ...overrides,
  };
}

const HINTS = [/Add a focused 3 to 4 line summary/, 'Role title', 'Company name', 'Target role', 'Your name', 'Degree', 'Project name'];

describe('templates', () => {
  // The exported PDF and the public share page printed the editor's hints for
  // empty fields: a fresher who left Summary blank sent recruiters a CV that
  // read "Add a focused 3 to 4 line summary that explains your target role…".
  it.each(Object.keys(templateMap) as Array<keyof typeof templateMap>)(
    '%s: an export never contains editing hints for empty fields',
    (id) => {
      const Template = templateMap[id];
      const { container } = render(
        <Template data={cv({ personal: { ...cv().personal, name: '', title: '', summary: '' } })} forExport />
      );
      const text = container.textContent ?? '';
      for (const hint of HINTS) {
        if (typeof hint === 'string') expect(text).not.toContain(hint);
        else expect(text).not.toMatch(hint);
      }
      // Real content is still there.
      expect(text).toContain('Paytm');
      expect(text).toContain('Built a ledger.');
    }
  );

  it('the editor preview still shows the hints', () => {
    const Template = templateMap.classic;
    render(<Template data={cv()} />);
    expect(screen.getByText(/Add a focused 3 to 4 line summary/)).toBeInTheDocument();
    expect(screen.getByText('Role title')).toBeInTheDocument();
  });

  // Sidebar templates reused the main column's colours on the coloured
  // sidebar: Modern printed the degree in #0f172a on a #0f172a sidebar.
  it.each([
    ['modern', '#0f172a'],
    ['creative', '#be123c'],
    ['premium', '#f5c542'],
  ] as const)('%s: no sidebar text uses the sidebar background colour', (id, background) => {
    const Template = templateMap[id];
    const { container } = render(<Template data={cv()} />);
    const aside = container.querySelector('aside');
    expect(aside).not.toBeNull();
    expect(aside?.className).toContain(`bg-[${background}]`);
    const sameColour = Array.from(aside?.querySelectorAll('*') ?? []).filter((el) =>
      String(el.getAttribute('class') ?? '').includes(`text-[${background}]`)
    );
    expect(sameColour.map((el) => el.textContent)).toEqual([]);
  });

  // The sidebar listed its sections in a fixed order, so dragging Education
  // above Skills was saved but changed nothing in the preview or the PDF.
  it('sidebar templates follow the saved section order', () => {
    const Template = templateMap.modern;
    const order = (sectionOrder: CVData['sectionOrder']): string[] => {
      const { container, unmount } = render(<Template data={cv({ sectionOrder })} />);
      const titles = Array.from(container.querySelectorAll('aside h2')).map((h) => h.textContent ?? '');
      unmount();
      return titles;
    };

    const skillsFirst = order(['personal', 'skills', 'education', 'certifications', 'experience', 'projects', 'awards']);
    const educationFirst = order(['personal', 'education', 'skills', 'certifications', 'experience', 'projects', 'awards']);
    expect(skillsFirst.slice(0, 2)).toEqual([educationFirst[1], educationFirst[0]]);
  });
});
