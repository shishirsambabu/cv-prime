import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ExperienceSection } from '@/components/editor/sections/ExperienceSection';
import { useCVStore } from '@/store/cvStore';
import { createDefaultCVData, createEmptyExperience } from '@/lib/cv';

// Regression coverage for the keystroke-glitch/tab-crash bug (fixed in 3d6d143):
// a user could not type a space to start the next word in a bullet field, and
// the store->form sync loop could reset a field mid-keystroke. These tests
// simulate real incremental typing (one fireEvent.change per keystroke) so a
// reintroduced trim-per-keystroke or reset-per-keystroke bug fails loudly.

function seedOneExperience() {
  const experience = createEmptyExperience();
  useCVStore.setState({
    data: { ...createDefaultCVData(), experience: [experience] },
    isDirty: false,
  });
}

function typeCharsInto(element: HTMLInputElement | HTMLTextAreaElement, text: string) {
  let value = element.value;
  for (const char of text) {
    value += char;
    fireEvent.change(element, { target: { value } });
  }
}

describe('ExperienceSection typing', () => {
  beforeEach(() => {
    seedOneExperience();
  });

  it('does not strip a trailing space while the user is still typing a bullet', () => {
    render(<ExperienceSection />);

    const bullets = screen.getByLabelText('Bullets') as HTMLTextAreaElement;
    typeCharsInto(bullets, 'Led a team ');

    // The exact regression: trimming on every keystroke ate the space that
    // starts the next word, so the caret-visible value silently reverted to
    // "Led a team" and the next letter typed stuck to the previous word.
    expect(bullets.value).toBe('Led a team ');

    typeCharsInto(bullets, 'of 5 engineers');
    expect(bullets.value).toBe('Led a team of 5 engineers');
  });

  it('keeps every keystroke in the company field without resetting or losing focus', () => {
    render(<ExperienceSection />);

    const company = screen.getByLabelText('Company') as HTMLInputElement;
    company.focus();
    typeCharsInto(company, 'Acme Corp');

    expect(company.value).toBe('Acme Corp');
    expect(document.activeElement).toBe(company);
  });

  it('normalizes bullets in the store only after sync, never mid-keystroke', async () => {
    render(<ExperienceSection />);

    const bullets = screen.getByLabelText('Bullets') as HTMLTextAreaElement;
    typeCharsInto(bullets, 'Shipped the redesign ');

    // While actively typing, the live field must still show the untrimmed text.
    expect(bullets.value).toBe('Shipped the redesign ');

    await waitFor(() => {
      expect(useCVStore.getState().data.experience[0]?.bullets).toEqual([
        'Shipped the redesign',
      ]);
    });

    // The store round-trip (normalized/trimmed value flowing back through
    // props) must not blow away what is still on screen or steal focus.
    expect(bullets.value).toBe('Shipped the redesign ');
  });

  it('does not crash or drop the field when typing rapidly across all text inputs in a role', () => {
    render(<ExperienceSection />);

    const company = screen.getByLabelText('Company') as HTMLInputElement;
    const role = screen.getByLabelText('Role') as HTMLInputElement;
    const startDate = screen.getByLabelText('Start date') as HTMLInputElement;

    typeCharsInto(company, 'Globex');
    typeCharsInto(role, 'Staff Engineer');
    typeCharsInto(startDate, '2022-01');

    expect(company.value).toBe('Globex');
    expect(role.value).toBe('Staff Engineer');
    expect(startDate.value).toBe('2022-01');
  });
});
