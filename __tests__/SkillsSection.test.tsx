import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SkillsSection } from '@/components/editor/sections/SkillsSection';
import { useCVStore } from '@/store/cvStore';
import { createDefaultCVData } from '@/lib/cv';

// Regression coverage for the keystroke-glitch bug (fixed in 3d6d143): the CSV
// skills fields used to trim/split on every keystroke, so you couldn't type a
// comma or trailing space to start the next skill.

function typeCharsInto(element: HTMLInputElement, text: string) {
  let value = element.value;
  for (const char of text) {
    value += char;
    fireEvent.change(element, { target: { value } });
  }
}

describe('SkillsSection typing', () => {
  beforeEach(() => {
    useCVStore.setState({ data: createDefaultCVData(), isDirty: false });
  });

  it('does not strip a trailing comma+space while typing technical skills', async () => {
    render(<SkillsSection />);

    const technical = screen.getByLabelText('Technical skills') as HTMLInputElement;
    typeCharsInto(technical, 'React, ');
    expect(technical.value).toBe('React, ');

    typeCharsInto(technical, 'TypeScript');
    expect(technical.value).toBe('React, TypeScript');

    await waitFor(() => {
      expect(useCVStore.getState().data.skills.technical).toEqual(['React', 'TypeScript']);
    });
    expect(technical.value).toBe('React, TypeScript');
  });

  it('keeps every keystroke in soft skills and languages independently', () => {
    render(<SkillsSection />);

    const soft = screen.getByLabelText('Soft skills') as HTMLInputElement;
    const languages = screen.getByLabelText('Languages') as HTMLInputElement;

    typeCharsInto(soft, 'Leadership');
    typeCharsInto(languages, 'English, Hindi');

    expect(soft.value).toBe('Leadership');
    expect(languages.value).toBe('English, Hindi');
  });
});
