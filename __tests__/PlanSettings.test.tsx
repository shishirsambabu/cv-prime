import { render, screen } from '@testing-library/react';
import { PlanSettings } from '@/components/payments/PlanSettings';

describe('PlanSettings', () => {
  it('shows unlimited drafts and only gates PDF exports on free', () => {
    render(<PlanSettings plan="free" pdfExportsUsed={0} />);

    expect(screen.getByText('Resume drafts')).toBeInTheDocument();
    expect(screen.getByText('Unlimited')).toBeInTheDocument();
    expect(screen.getByText('0/3')).toBeInTheDocument();
  });

  it('shows lifetime Pro as unlocked without an upgrade gate', () => {
    render(<PlanSettings plan="pro" pdfExportsUsed={3} />);

    expect(screen.getByText('Lifetime Pro unlocked')).toBeInTheDocument();
    expect(screen.getByText('Unlocked')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Upgrade/i })).not.toBeInTheDocument();
  });
});
