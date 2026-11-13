import { render, screen } from '@testing-library/react';
import { templateMap } from '@/components/templates';
import { TemplatePreview } from '@/components/templates/TemplatePreview';

describe('TemplatePreview', () => {
  it('keeps the sample CV out of the accessible name of a button that wraps it', () => {
    render(
      <button type="button">
        <TemplatePreview Template={templateMap.classic} scale={0.15} />
        <span>Classic</span>
      </button>,
    );

    // Before the fix the name was the entire sample CV followed by "Classic".
    expect(screen.getByRole('button', { name: 'Classic' })).toBeInTheDocument();
  });

  it('does not add the sample CV headings to the page outline', () => {
    render(<TemplatePreview Template={templateMap.modern} scale={0.15} />);

    expect(screen.queryAllByRole('heading')).toHaveLength(0);
  });
});
