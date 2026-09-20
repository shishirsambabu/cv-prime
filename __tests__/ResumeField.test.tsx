import { render, screen } from '@testing-library/react';
import { ResumeField } from '@/components/tools/ai/ResumeField';

// Regression coverage: unlike <ToolTextarea>/<ToolInput> (which wrap their
// control in a real <label>, giving it an accessible name even with no
// for/id), ResumeField's "label" was a plain <span> above a <div>-based
// dropzone. The textarea and the hidden file input both had no id,
// aria-label, or aria-labelledby, so a screen reader tabbing to either
// announced no accessible name at all.
describe('ResumeField accessibility', () => {
  it('exposes the textarea via an accessible name matching the label prop', () => {
    render(
      <ResumeField label="Your resume" value="" onChange={() => {}} />
    );

    // getByLabelText only succeeds when the control has a real accessible
    // name (label association, aria-label, or aria-labelledby) — it fails
    // on a merely-adjacent, unassociated <span>.
    const textarea = screen.getByLabelText('Your resume');
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  it('exposes the hidden file input via its own accessible name', () => {
    render(
      <ResumeField label="Your resume" value="" onChange={() => {}} />
    );

    const fileInput = screen.getByLabelText(/upload a file for your resume/i);
    expect(fileInput).toHaveAttribute('type', 'file');
  });

  it('keeps each field uniquely labeled when the label prop changes', () => {
    render(<ResumeField label="Target resume" value="" onChange={() => {}} />);

    expect(screen.getByLabelText('Target resume').tagName).toBe('TEXTAREA');
  });
});
