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

  it('never has two saves in flight at once, even when typing continues past the max-wait window', async () => {
    // Regression: once MAX_UNSAVED_MS had elapsed, every further keystroke
    // recomputed delay=0 and re-armed an immediate timer. If the in-flight
    // save from the first firing was still pending (slow network), this
    // fired a second, overlapping PATCH request — and if it resolved before
    // the first, the first's stale response would land afterward and
    // overwrite the newer save.
    let inFlight = 0;
    let maxConcurrent = 0;
    const pendingResolvers: Array<() => void> = [];

    const fetchMock = jest.fn(async () => {
      inFlight += 1;
      maxConcurrent = Math.max(maxConcurrent, inFlight);
      await new Promise<void>((resolve) => {
        pendingResolvers.push(resolve);
      });
      inFlight -= 1;
      return { ok: true, json: async () => ({}) } as Response;
    }) as unknown as jest.MockedFunction<typeof fetch>;
    global.fetch = fetchMock;

    render(<Harness />);

    act(() => {
      const current = useCVStore.getState().data;
      useCVStore.getState().setData({
        ...current,
        personal: { ...current.personal, name: 'First edit' },
      });
    });

    // Advance to just past the 30s max-wait so the first save fires and
    // starts awaiting the (deliberately unresolved) fetch above.
    await act(async () => {
      jest.advanceTimersByTime(30_000);
      await Promise.resolve();
    });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(inFlight).toBe(1);

    // Keep typing while that save is still pending.
    act(() => {
      const current = useCVStore.getState().data;
      useCVStore.getState().setData({
        ...current,
        personal: { ...current.personal, name: 'Second edit while saving' },
      });
    });
    await act(async () => {
      jest.advanceTimersByTime(1_000);
      await Promise.resolve();
    });

    // The second edit must not have started a second, overlapping request.
    expect(maxConcurrent).toBe(1);

    // Drain every queued request (the first firing, plus the one the second
    // edit queued behind it) so this test doesn't leave a permanently-pending
    // promise sitting in saveCv's module-level per-CV queue for later tests.
    await act(async () => {
      while (pendingResolvers.length > 0) {
        pendingResolvers.shift()?.();
        await Promise.resolve();
      }
      await Promise.resolve();
    });
  });

  it('does not crash with an unhandled rejection when the network is unavailable', async () => {
    // Regression: saveCv's fetch() rejects (not a non-ok response) on a
    // network failure. The autosave timer awaited it with no try/catch, so
    // offline/DNS failures surfaced as an unhandled promise rejection
    // instead of failing gracefully and leaving the edit to retry.
    const fetchMock = jest.fn(async () => {
      throw new TypeError('Failed to fetch');
    }) as unknown as jest.MockedFunction<typeof fetch>;
    global.fetch = fetchMock;

    const onUnhandledRejection = jest.fn();
    process.on('unhandledRejection', onUnhandledRejection);

    // A CV id unique to this test, so it can never queue behind (or be
    // affected by) another test's pending saveCv() calls in the shared
    // module-level queue.
    useCVStore.setState({ cvId: 'cv-offline-regression' });
    render(<Harness />);

    act(() => {
      const current = useCVStore.getState().data;
      useCVStore.getState().setData({
        ...current,
        personal: { ...current.personal, name: 'Offline edit' },
      });
    });

    await act(async () => {
      jest.advanceTimersByTime(30_000);
      await Promise.resolve();
      await Promise.resolve();
      await Promise.resolve();
    });

    process.off('unhandledRejection', onUnhandledRejection);

    expect(fetchMock).toHaveBeenCalled();
    expect(onUnhandledRejection).not.toHaveBeenCalled();
    // The failed save must leave the edit marked dirty rather than silently
    // discarding it.
    expect(useCVStore.getState().isDirty).toBe(true);
  });

  it('keeps isDirty true if the user edits again while a save is still in flight', async () => {
    // Regression: markSaved() used to unconditionally clear isDirty whenever
    // *any* save resolved successfully, even one dispatched before the
    // user's latest keystroke. That falsely showed "Saved" and disarmed the
    // beforeunload warning while newer, still-unsaved content sat in the
    // store — if the tab closed in that window before the next autosave
    // fired, the newest edit could be lost silently.
    // lib/saveCv.ts keys its FIFO queue by cvId in a module-level map that
    // outlives any one test, so this uses a cvId no other test in this file
    // touches to avoid queuing behind another test's already-resolved chain.
    useCVStore.setState({ cvId: 'cv-race-test' });

    let resolveFirst: ((value: { ok: boolean; json: () => Promise<unknown> }) => void) | null =
      null;
    let callCount = 0;

    const fetchMock = jest.fn(async () => {
      callCount += 1;
      if (callCount === 1) {
        return new Promise((resolve) => {
          resolveFirst = resolve;
        });
      }
      return { ok: true, json: async () => ({}) };
    }) as unknown as jest.MockedFunction<typeof fetch>;
    global.fetch = fetchMock;

    render(<Harness />);

    act(() => {
      const current = useCVStore.getState().data;
      useCVStore.getState().setData({
        ...current,
        personal: { ...current.personal, name: 'First edit' },
      });
    });

    // Fire the first autosave; its request stays pending (slow network).
    await act(async () => {
      jest.advanceTimersByTime(30_000);
      await Promise.resolve();
    });
    expect(fetchMock).toHaveBeenCalledTimes(1);

    // The user keeps typing while that first save is still in flight.
    act(() => {
      const current = useCVStore.getState().data;
      useCVStore.getState().setData({
        ...current,
        personal: { ...current.personal, name: 'Second edit while saving' },
      });
    });
    expect(useCVStore.getState().isDirty).toBe(true);

    // The stale first request now resolves.
    await act(async () => {
      resolveFirst?.({ ok: true, json: async () => ({}) });
      await Promise.resolve();
      await Promise.resolve();
      await Promise.resolve();
    });

    // It must not have wiped out the fact that newer, unsaved edits exist.
    expect(useCVStore.getState().isDirty).toBe(true);
    expect(useCVStore.getState().data.personal.name).toBe('Second edit while saving');
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
