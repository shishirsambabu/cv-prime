import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { PersonalSection } from '@/components/editor/sections/PersonalSection';
import { useCVStore } from '@/store/cvStore';
import { createDefaultCVData } from '@/lib/cv';

// Regression coverage for the keystroke-glitch bug (fixed in 3d6d143) applied
// to the Personal section specifically: name/title/summary are on every CV,
// so a typing regression here is maximally user-visible.

function typeCharsInto(element: HTMLInputElement | HTMLTextAreaElement, text: string) {
  let value = element.value;
  for (const char of text) {
    value += char;
    fireEvent.change(element, { target: { value } });
  }
}

describe('PersonalSection typing', () => {
  beforeEach(() => {
    useCVStore.setState({ data: createDefaultCVData(), isDirty: false });
  });

  it('keeps every keystroke in the name field without resetting or losing focus', () => {
    render(<PersonalSection />);

    const name = screen.getByLabelText('Name') as HTMLInputElement;
    name.focus();
    typeCharsInto(name, 'Priya Sharma');

    expect(name.value).toBe('Priya Sharma');
    expect(document.activeElement).toBe(name);
  });

  it('does not strip a trailing space while typing the summary', async () => {
    render(<PersonalSection />);

    const summary = screen.getByLabelText('Summary') as HTMLTextAreaElement;
    typeCharsInto(summary, 'Product manager with 6 years of experience ');
    expect(summary.value).toBe('Product manager with 6 years of experience ');

    typeCharsInto(summary, 'shipping B2B SaaS.');
    expect(summary.value).toBe(
      'Product manager with 6 years of experience shipping B2B SaaS.'
    );

    await waitFor(() => {
      expect(useCVStore.getState().data.personal.summary).toBe(
        'Product manager with 6 years of experience shipping B2B SaaS.'
      );
    });
    // The store round-trip must not blow away what is still on screen.
    expect(summary.value).toBe(
      'Product manager with 6 years of experience shipping B2B SaaS.'
    );
  });
});
