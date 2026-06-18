import { fireEvent, render, screen } from '@testing-library/react';
import { FlowHero } from '@/components/marketing/FlowHero';

describe('FlowHero', () => {
  it('shows navigation cues and lets users move through the demo', () => {
    render(<FlowHero />);

    expect(screen.getByText('Click the steps to walk through the product.')).toBeInTheDocument();
    expect(screen.getByText('Step 1/6')).toBeInTheDocument();
    expect(screen.getAllByText('Open dashboard')).toHaveLength(2);

    fireEvent.click(screen.getByRole('button', { name: /Next step/i }));
    expect(screen.getByText('Step 2/6')).toBeInTheDocument();
    expect(screen.getAllByText('Connect AI key')).toHaveLength(2);

    fireEvent.click(screen.getByRole('button', { name: /Upload or paste CV/i }));
    expect(screen.getByText('Step 4/6')).toBeInTheDocument();
    expect(screen.getAllByText('Upload or paste CV')).toHaveLength(2);
  });
});
