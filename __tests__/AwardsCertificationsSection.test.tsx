import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { AwardsSection } from '@/components/editor/sections/AwardsSection';
import { CertificationsSection } from '@/components/editor/sections/CertificationsSection';
import { useCVStore } from '@/store/cvStore';
import { createDefaultCVData } from '@/lib/cv';

// Regression coverage for the keystroke-glitch bug (fixed in 3d6d143): the
// awards/certifications textareas used to trim+split into an array on every
// keystroke, so a trailing space or a blank line to start the next entry
// was stripped before the next character could be typed.

function typeCharsInto(element: HTMLTextAreaElement, text: string) {
  let value = element.value;
  for (const char of text) {
    value += char;
    fireEvent.change(element, { target: { value } });
  }
}

describe('AwardsSection typing', () => {
  beforeEach(() => {
    useCVStore.setState({ data: createDefaultCVData(), isDirty: false });
  });

  it('does not strip a trailing newline while starting a second award', async () => {
    render(<AwardsSection />);

    const awards = screen.getByLabelText('Awards') as HTMLTextAreaElement;
    typeCharsInto(awards, 'Employee of the Year 2024\n');
    expect(awards.value).toBe('Employee of the Year 2024\n');

    typeCharsInto(awards, 'Hackathon Winner 2023');
    expect(awards.value).toBe('Employee of the Year 2024\nHackathon Winner 2023');

    await waitFor(() => {
      expect(useCVStore.getState().data.awards).toEqual([
        'Employee of the Year 2024',
        'Hackathon Winner 2023',
      ]);
    });
    expect(awards.value).toBe('Employee of the Year 2024\nHackathon Winner 2023');
  });
});

describe('CertificationsSection typing', () => {
  beforeEach(() => {
    useCVStore.setState({ data: createDefaultCVData(), isDirty: false });
  });

  it('does not strip a trailing space while typing a certification', async () => {
    render(<CertificationsSection />);

    const certs = screen.getByLabelText('Certifications') as HTMLTextAreaElement;
    typeCharsInto(certs, 'AWS Certified Solutions Architect ');
    expect(certs.value).toBe('AWS Certified Solutions Architect ');

    typeCharsInto(certs, '- Associate');
    expect(certs.value).toBe('AWS Certified Solutions Architect - Associate');

    await waitFor(() => {
      expect(useCVStore.getState().data.certifications).toEqual([
        'AWS Certified Solutions Architect - Associate',
      ]);
    });
    expect(certs.value).toBe('AWS Certified Solutions Architect - Associate');
  });
});
