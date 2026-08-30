import { act, render } from '@testing-library/react';
import { useAutoSave } from '@/hooks/useAutoSave';
import { useCVStore } from '@/store/cvStore';
import { createDefaultCVData } from '@/lib/cv';

// Regression coverage: the autosave timer used to reset on every store
// change (i.e. every keystroke), so a user typing continuously without a
// 30s pause never triggered a save at all. Closing the tab right after
// finishing an edit silently lost the work.

function Harness(): null {
  useAutoSave();
  return null;
}

function mockFetchOk() {
  return jest.fn(async () => ({ ok: true, json: async () => ({}) })) as unknown as jest.MockedFunction<
    typeof fetch
  >;
}

describe('useAutoSave', () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    jest.useFakeTimers();
    useCVStore.setState({
      cvId: 'cv-1',
      data: createDefaultCVData(),
      templateId: 'classic',
      isDirty: false,
      lastSaved: null,
    });
  });

  afterEach(() => {
    jest.useRealTimers();
    global.fetch = originalFetch;
    jest.restoreAllMocks();
  });

  it('saves within 30s even when the user keeps typing continuously', async () => {
    const fetchMock = mockFetchOk();
    global.fetch = fetchMock;

    render(<Harness />);

    // A store update every 5s for 40s straight — well inside the old 30s
    // "wait for a pause" idle window, so the previous implementation would
    // never fire a save across this whole run.
    for (let elapsed = 0; elapsed < 40_000; elapsed += 5_000) {
      act(() => {
        const current = useCVStore.getState().data;
        useCVStore.getState().setData({
          ...current,
          personal: { ...current.personal, name: `Name at ${elapsed}` },
        });
      });

      await act(async () => {
        jest.advanceTimersByTime(5_000);
        await Promise.resolve();
      });
    }

    expect(fetchMock).toHaveBeenCalled();
    expect(fetchMock.mock.calls[0]?.[0]).toBe('/api/cvs/cv-1');
  });

  it('does not make a request while there are no unsaved changes', async () => {
    const fetchMock = mockFetchOk();
    global.fetch = fetchMock;

    render(<Harness />);

    await act(async () => {
      jest.advanceTimersByTime(60_000);
      await Promise.resolve();
    });

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('warns before closing the tab with unsaved changes, but not when clean', () => {
    render(<Harness />);

    const cleanEvent = new Event('beforeunload', { cancelable: true }) as BeforeUnloadEvent;
    window.dispatchEvent(cleanEvent);
    expect(cleanEvent.defaultPrevented).toBe(false);

    act(() => {
      const current = useCVStore.getState().data;
      useCVStore.getState().setData({
        ...current,
        personal: { ...current.personal, name: 'Dirty edit' },
      });
    });

    const dirtyEvent = new Event('beforeunload', { cancelable: true }) as BeforeUnloadEvent;
    window.dispatchEvent(dirtyEvent);
    expect(dirtyEvent.defaultPrevented).toBe(true);
  });
});
