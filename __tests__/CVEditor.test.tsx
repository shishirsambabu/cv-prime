// Regression: navigating client-side from /editor/[cvId] of one CV straight
// into another (e.g. clicking a different CV in the dashboard list, no full
// page reload) reuses this component and the module-level Zustand store.
// The hydrate effect used to merge the *previous* CV's still-resident store
// data into the newly loaded CV's data (`{...currentData, ...initialCV.data}`)
// — so any field missing from the new CV's stored row silently kept the old
// CV's value instead of the schema default, and edits then autosaved that
// contamination into the wrong CV record.
//
// These use relative paths, not the `@/...` alias: jest.mock's own resolver
// doesn't apply this project's tsconfig path mapping (only the SWC/Next
// transform used for real imports does), so `jest.mock('@/components/...')`
// silently registers an orphaned mock that nothing consumes — the real
// module still gets required underneath it, with no error to signal the
// mismatch. (Several existing test files have this exact bug; see the fix
// alongside this one that repoints them at relative paths too.)
jest.mock('../components/editor/SectionPanel', () => ({ SectionPanel: () => null }));
jest.mock('../components/editor/LivePreview', () => ({ LivePreview: () => null }));
jest.mock('../components/editor/ATSScorePanel', () => ({ ATSScorePanel: () => null }));
jest.mock('../components/editor/AIAssistPanel', () => ({ AIAssistPanel: () => null }));
jest.mock('../components/editor/CoverLetterPanel', () => ({ CoverLetterPanel: () => null }));
jest.mock('../components/editor/ExportPDFButton', () => ({ ExportPDFButton: () => null }));
jest.mock('../components/templates/TemplatePreview', () => ({ TemplatePreview: () => null }));

import { act, render } from '@testing-library/react';
import { CVEditor } from '@/components/editor/CVEditor';
import { useCVStore } from '@/store/cvStore';
import { createDefaultCVData } from '@/lib/cv';
import type { Database } from '@/types/database.types';

type CVRow = Database['public']['Tables']['cvs']['Row'];

function makeCV(overrides: Partial<CVRow>): CVRow {
  return {
    id: 'cv-a',
    user_id: 'user-1',
    title: 'Untitled CV',
    template_id: 'classic',
    data: createDefaultCVData() as unknown as CVRow['data'],
    is_public: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    ...overrides,
  } as CVRow;
}

describe('CVEditor cross-CV hydrate', () => {
  it('never lets a field missing from the new CV keep the previous CV data', () => {
    const cvA = makeCV({
      id: 'cv-a',
      data: {
        ...createDefaultCVData(),
        personal: { ...createDefaultCVData().personal, name: 'CV A Name' },
      } as unknown as CVRow['data'],
    });

    // CV B's stored row is missing the `personal` field entirely (e.g. an
    // older/partial row) — hydrate must fall back to the schema default,
    // never to whatever CV A left in the shared store.
    const cvBData: Partial<ReturnType<typeof createDefaultCVData>> = {
      ...createDefaultCVData(),
    };
    delete cvBData.personal;
    const cvB = makeCV({
      id: 'cv-b',
      data: cvBData as unknown as CVRow['data'],
    });

    const { rerender } = render(<CVEditor key={cvA.id} initialCV={cvA} plan="free" />);
    expect(useCVStore.getState().data.personal.name).toBe('CV A Name');

    // Simulate the App Router reusing this component for a same-layout
    // client-side navigation to a different CV: rendering a different `key`
    // into the same root makes React unmount the CV A instance and mount a
    // fresh CV B one, exactly like the app's `key={cv.id}` fix does on a
    // real route change — verify that remount path is clean.
    rerender(<CVEditor key={cvB.id} initialCV={cvB} plan="free" />);

    expect(useCVStore.getState().cvId).toBe('cv-b');
    expect(useCVStore.getState().data.personal.name).not.toBe('CV A Name');
    expect(useCVStore.getState().data.personal.name).toBe(createDefaultCVData().personal.name);
  });

  it('resets undo/redo history so a previous CV cannot be restored into a new one', () => {
    const cvA = makeCV({ id: 'cv-a' });
    const cvB = makeCV({ id: 'cv-b' });

    const { rerender } = render(<CVEditor key={cvA.id} initialCV={cvA} plan="free" />);
    act(() => {
      useCVStore.getState().updateField('personal.name', 'Edited in CV A');
    });
    expect(useCVStore.temporal.getState().pastStates.length).toBeGreaterThan(0);

    rerender(<CVEditor key={cvB.id} initialCV={cvB} plan="free" />);

    expect(useCVStore.temporal.getState().pastStates.length).toBe(0);
  });
});
