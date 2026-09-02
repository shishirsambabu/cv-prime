import { confirmLeaveIfDirty } from '@/lib/confirmLeaveIfDirty';
import { useCVStore } from '@/store/cvStore';
import { createDefaultCVData } from '@/lib/cv';
import type { MouseEvent } from 'react';

// Regression: Next.js App Router <Link> navigation never fires
// `beforeunload` (no full document unload happens), so clicking a sidebar
// nav link while the CV editor's 30s autosave hadn't fired yet used to
// discard the in-flight edit with no warning at all.

function mockClickEvent(): MouseEvent<HTMLAnchorElement> {
  return { preventDefault: jest.fn() } as unknown as MouseEvent<HTMLAnchorElement>;
}

describe('confirmLeaveIfDirty', () => {
  const originalConfirm = window.confirm;

  afterEach(() => {
    window.confirm = originalConfirm;
    useCVStore.setState({ isDirty: false });
  });

  it('lets navigation proceed silently when there is nothing unsaved', () => {
    useCVStore.setState({ isDirty: false });
    window.confirm = jest.fn(() => false);
    const event = mockClickEvent();

    confirmLeaveIfDirty(event);

    expect(window.confirm).not.toHaveBeenCalled();
    expect(event.preventDefault).not.toHaveBeenCalled();
  });

  it('blocks navigation when the user cancels the confirm on unsaved changes', () => {
    useCVStore.setState({ isDirty: true, data: createDefaultCVData() });
    window.confirm = jest.fn(() => false);
    const event = mockClickEvent();

    confirmLeaveIfDirty(event);

    expect(window.confirm).toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('lets navigation proceed when the user confirms leaving with unsaved changes', () => {
    useCVStore.setState({ isDirty: true, data: createDefaultCVData() });
    window.confirm = jest.fn(() => true);
    const event = mockClickEvent();

    confirmLeaveIfDirty(event);

    expect(window.confirm).toHaveBeenCalled();
    expect(event.preventDefault).not.toHaveBeenCalled();
  });
});
