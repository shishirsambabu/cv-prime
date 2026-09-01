import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { createDefaultCVData } from '@/lib/cv';
import { useCVStore } from '@/store/cvStore';

jest.mock(
  '@/components/payments/UpgradeModal',
  () => ({
    UpgradeModal: () => <button type="button">Upgrade now</button>,
  }),
  { virtual: true },
);

jest.mock(
  '@/lib/clientAnalytics',
  () => ({
    captureClientEvent: jest.fn(),
  }),
  { virtual: true },
);

import { ExportPDFButton } from '@/components/editor/ExportPDFButton';

// Regression: exporting used to unconditionally call markSaved() after its
// pre-export save resolved, even though it always sends a *snapshot* of the
// store's data taken when the export button was clicked. If the user edited
// the CV again while that PATCH was in flight (a slow network, a big resume),
// markSaved() cleared isDirty for the whole store — hiding the fact that the
// newest keystrokes were never part of that request — until another edit
// happened to re-dirty it. In that window, closing the tab lost the newest
// edit silently because beforeunload only warns when isDirty is true.
describe('ExportPDFButton autosave race (uses the real cvStore, no cvId prop)', () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    useCVStore.setState({
      cvId: 'cv-export-race',
      data: createDefaultCVData(),
      templateId: 'classic',
      isDirty: true,
      lastSaved: null,
    });
  });

  afterEach(() => {
    global.fetch = originalFetch;
    jest.restoreAllMocks();
  });

  it('keeps isDirty true if the store changes again while the pre-export save is in flight', async () => {
    let resolveSave: ((value: Response) => void) | null = null;

    const fetchMock = jest.fn((url: RequestInfo | URL) => {
      if (typeof url === 'string' && url.startsWith('/api/cvs/')) {
        return new Promise<Response>((resolve) => {
          resolveSave = resolve;
        });
      }
      // /api/export-pdf/check — never reached in this test since the save
      // never resolves before the assertions run.
      return Promise.resolve({ ok: true, json: async () => ({ token: 't' }) } as Response);
    }) as unknown as jest.MockedFunction<typeof fetch>;
    global.fetch = fetchMock;

    jest.spyOn(window, 'open').mockReturnValue({
      close: jest.fn(),
      location: { href: '' },
    } as unknown as Window);

    render(<ExportPDFButton />);
    fireEvent.click(screen.getByRole('button', { name: 'Export PDF' }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        '/api/cvs/cv-export-race',
        expect.objectContaining({ method: 'PATCH' }),
      );
    });

    // The user edits the CV again while the export's save is still pending.
    act(() => {
      const current = useCVStore.getState().data;
      useCVStore.getState().setData({
        ...current,
        personal: { ...current.personal, name: 'Edited during export save' },
      });
    });
    expect(useCVStore.getState().isDirty).toBe(true);

    // The stale pre-export save now resolves.
    await act(async () => {
      resolveSave?.({ ok: true, json: async () => ({}) } as Response);
      await Promise.resolve();
      await Promise.resolve();
    });

    expect(useCVStore.getState().isDirty).toBe(true);
    expect(useCVStore.getState().data.personal.name).toBe('Edited during export save');
  });
});
