/**
 * Regression: the CV editor used to swallow the user's typing.
 *
 * Each section card's drag handle is a <button>, so pressing Space on it is
 * the normal way to "click" it — and dnd-kit's KeyboardSensor reads Space on a
 * drag handle as "start a keyboard drag". That drag then survived the user
 * clicking away, because the sensor keeps a keydown listener on the *document*
 * for as long as it is active. The next space character typed into any CV
 * field was therefore consumed as "drop the section here": the keystroke never
 * reached the field, focus was yanked back to the drag handle, and the section
 * was silently moved somewhere else in the CV.
 *
 * Observed in Chromium before the fix: typing "Hello World Again" into the job
 * title field stored only "Hello", and the Work experience section jumped to
 * the bottom of the CV.
 *
 * The fix cancels the drag when the handle loses focus, so a drag can never
 * outlive the handle the user is actually on.
 */

// Relative paths: jest.mock's resolver does not apply this project's tsconfig
// path mapping, so `jest.mock('@/...')` registers an orphaned mock.
jest.mock('../components/editor/sections/PersonalSection', () => ({
  PersonalSection: () => <input aria-label="personal name proxy" />,
}));
jest.mock('../components/editor/sections/ExperienceSection', () => ({
  ExperienceSection: () => null,
}));
jest.mock('../components/editor/sections/EducationSection', () => ({
  EducationSection: () => null,
}));
jest.mock('../components/editor/sections/SkillsSection', () => ({ SkillsSection: () => null }));
jest.mock('../components/editor/sections/ProjectsSection', () => ({ ProjectsSection: () => null }));
jest.mock('../components/editor/sections/CertificationsSection', () => ({
  CertificationsSection: () => null,
}));
jest.mock('../components/editor/sections/AwardsSection', () => ({ AwardsSection: () => null }));

import { act, fireEvent, render, screen } from '@testing-library/react';
import { SectionPanel } from '@/components/editor/SectionPanel';
import { useCVStore } from '@/store/cvStore';
import { createDefaultCVData, DEFAULT_SECTION_ORDER } from '@/lib/cv';

// jsdom implements neither of these, and dnd-kit calls both while a keyboard
// drag starts and ends.
beforeAll(() => {
  Element.prototype.scrollIntoView = jest.fn();
  if (!('PointerEvent' in window)) {
    (window as unknown as { PointerEvent: typeof MouseEvent }).PointerEvent = MouseEvent;
  }
});

function resetStore(): void {
  act(() => {
    useCVStore.setState({
      cvId: 'cv-1',
      data: createDefaultCVData(),
      templateId: 'classic',
      isDirty: false,
    });
  });
}

/** Space on the handle is what dnd-kit treats as "start dragging". */
function startKeyboardDrag(handle: HTMLElement): void {
  act(() => {
    fireEvent.keyDown(handle, { key: ' ', code: 'Space', keyCode: 32 });
    jest.advanceTimersByTime(50);
  });
}

/** What a user typing a space into a text field produces at the document level. */
function typeSpaceSomewhereElse(): void {
  act(() => {
    document.dispatchEvent(
      new KeyboardEvent('keydown', { key: ' ', code: 'Space', bubbles: true, cancelable: true }),
    );
  });
}

beforeEach(() => {
  jest.useFakeTimers();
  resetStore();
});

afterEach(() => {
  jest.useRealTimers();
});

describe('CV section drag handle', () => {
  it('gives every section a labelled drag handle', () => {
    render(<SectionPanel />);
    expect(screen.getByRole('button', { name: 'Drag Personal info' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Drag Work experience' })).toBeInTheDocument();
  });

  it('does not let a space typed elsewhere reorder the CV after the handle loses focus', () => {
    render(<SectionPanel />);
    const handle = screen.getByRole('button', { name: 'Drag Work experience' });

    startKeyboardDrag(handle);

    // The user clicks into a CV field, so the handle blurs.
    act(() => {
      fireEvent.blur(handle);
      jest.advanceTimersByTime(50);
    });

    // ...and then types a sentence containing spaces.
    typeSpaceSomewhereElse();
    typeSpaceSomewhereElse();
    act(() => {
      jest.advanceTimersByTime(50);
    });

    expect(useCVStore.getState().data.sectionOrder).toEqual(DEFAULT_SECTION_ORDER);
    expect(useCVStore.getState().isDirty).toBe(false);
  });

  it('leaves the CV untouched when a drag is abandoned without any drop', () => {
    render(<SectionPanel />);
    const handle = screen.getByRole('button', { name: 'Drag Education' });

    startKeyboardDrag(handle);
    act(() => {
      fireEvent.blur(handle);
      jest.advanceTimersByTime(200);
    });

    expect(useCVStore.getState().data.sectionOrder).toEqual(DEFAULT_SECTION_ORDER);
  });
});
