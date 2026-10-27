/**
 * Regression: the editor used to accept keystrokes it was about to throw away.
 *
 * `CVEditor` fills the Zustand store from `initialCV` in an effect, which runs
 * after the first paint. Every section form seeds its `defaultValues` from
 * that store, so the markup the browser painted first had the CV fields
 * present, focusable and blank. Anyone who opened the editor and started
 * typing right away — the normal thing to do when you already know what you
 * want to change — had their text mangled the moment hydrate() landed: the
 * store→form sync reset the field to the stored CV and the rest of the
 * keystrokes appended to it. Typing "Priya Krishnan" into a CV belonging to
 * Asha Rao produced "Asha Raoriya Krishnan". Measured window against a dev
 * server: ~930ms, and longer on a slow phone.
 *
 * The editing surface must therefore not exist at all until the store holds
 * this CV.
 */

// Relative paths: jest.mock's resolver does not apply this project's tsconfig
// path mapping, so `jest.mock('@/...')` registers an orphaned mock.
jest.mock('../components/editor/LivePreview', () => ({ LivePreview: () => null }));
jest.mock('../components/editor/ATSScorePanel', () => ({ ATSScorePanel: () => null }));
jest.mock('../components/editor/AIAssistPanel', () => ({ AIAssistPanel: () => null }));
jest.mock('../components/editor/CoverLetterPanel', () => ({ CoverLetterPanel: () => null }));
jest.mock('../components/editor/ExportPDFButton', () => ({ ExportPDFButton: () => null }));
jest.mock('../components/templates/TemplatePreview', () => ({ TemplatePreview: () => null }));

import { render, screen } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { CVEditor } from '@/components/editor/CVEditor';
import { useCVStore } from '@/store/cvStore';
import { createDefaultCVData } from '@/lib/cv';
import type { Database } from '@/types/database.types';
import type { CVData } from '@/types/cv.types';

type CVRow = Database['public']['Tables']['cvs']['Row'];

const storedCV: CVData = {
  ...createDefaultCVData(),
  personal: {
    ...createDefaultCVData().personal,
    name: 'Asha Rao',
    title: 'Senior Backend Engineer',
  },
};

function makeCV(): CVRow {
  return {
    id: 'cv-hydration',
    user_id: 'user-1',
    title: 'Asha Rao CV',
    template_id: 'classic',
    data: storedCV as unknown as CVRow['data'],
    ats_score: null,
    ats_score_history: [],
    is_public: false,
    last_edited: new Date().toISOString(),
    created_at: new Date().toISOString(),
  };
}

beforeEach(() => {
  useCVStore.setState({
    cvId: null,
    data: createDefaultCVData(),
    templateId: 'classic',
    isDirty: false,
    lastSaved: null,
  });
});

describe('CVEditor hydration gate', () => {
  // renderToString runs no effects, so it is exactly the markup the browser
  // paints — and can interact with — before hydrate() has filled the store.
  it('paints no editable CV field before hydration', () => {
    const html = renderToString(<CVEditor initialCV={makeCV()} plan="free" />);

    expect(html).toContain('aria-busy="true"');
    expect(html).not.toContain('<input');
    expect(html).not.toContain('<textarea');
    expect(html).not.toContain('id="personal-name"');
  });

  it('still shows the CV title while loading, so the page is never blank', () => {
    const html = renderToString(<CVEditor initialCV={makeCV()} plan="free" />);

    expect(html).toContain('Asha Rao CV');
  });

  it('does not show another CV\'s content while this one loads', () => {
    // A client-side navigation from one /editor/[cvId] to another reuses the
    // module-level store, so the previous CV is still in it.
    useCVStore.setState({ cvId: 'previous-cv', data: storedCV });
    const html = renderToString(
      <CVEditor initialCV={{ ...makeCV(), id: 'a-different-cv' }} plan="free" />,
    );

    expect(html).toContain('aria-busy="true"');
    expect(html).not.toContain('Asha Rao<');
    expect(html).not.toContain('Senior Backend Engineer');
  });

  it('renders the populated fields once hydration has run', () => {
    render(<CVEditor initialCV={makeCV()} plan="free" />);

    expect(useCVStore.getState().cvId).toBe('cv-hydration');
    expect((screen.getByLabelText('Name') as HTMLInputElement).value).toBe('Asha Rao');
    expect((screen.getByLabelText('Title') as HTMLInputElement).value).toBe(
      'Senior Backend Engineer',
    );
  });
});
