import { fireEvent, render, screen } from '@testing-library/react';
import { FlowHero } from '@/components/marketing/FlowHero';

describe('FlowHero', () => {
  it('shows navigation cues and lets users move through the demo', () => {
    render(<FlowHero />);

    expect(
      screen.getByText('Click any step to walk the live workflow — dashboard, AI wizard, then editor and export.', {
        exact: false,
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByText('Open dashboard').length).toBeGreaterThan(0);

    const dashboardStep = screen.getByRole('button', { name: /Open dashboard/ });
    expect(dashboardStep).toHaveAttribute('aria-pressed', 'true');

    fireEvent.click(screen.getByRole('button', { name: 'Previous step' }));
    expect(dashboardStep).toHaveAttribute('aria-pressed', 'true');

    const keyStep = screen.getByRole('button', { name: /Connect AI key/ });
    fireEvent.click(keyStep);
    expect(keyStep).toHaveAttribute('aria-pressed', 'true');
    expect(dashboardStep).toHaveAttribute('aria-pressed', 'false');
    expect(screen.getAllByText('Connect AI key').length).toBeGreaterThan(0);

    const uploadStep = screen.getByRole('button', { name: /Upload or paste CV/ });
    fireEvent.click(uploadStep);
    expect(uploadStep).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getAllByText('Upload or paste CV').length).toBeGreaterThan(0);
  });
});
