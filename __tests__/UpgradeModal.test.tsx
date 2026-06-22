import { fireEvent, render, screen } from '@testing-library/react';
import { UpgradeModal } from '@/components/payments/UpgradeModal';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    refresh: jest.fn(),
  }),
}));

describe('UpgradeModal', () => {
  it('opens the upgrade details with lifetime Pro pricing', () => {
    render(<UpgradeModal triggerLabel="Upgrade now" />);

    fireEvent.click(screen.getByRole('button', { name: /Upgrade now/i }));

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Pay once. Use CV Prime Pro forever.')).toBeInTheDocument();
    expect(screen.getByText('₹999')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Get lifetime access/i })).toBeInTheDocument();
  });
});
