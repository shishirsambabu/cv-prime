import { fireEvent, render, screen } from '@testing-library/react';
import { UpgradeModal } from '@/components/payments/UpgradeModal';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    refresh: jest.fn(),
  }),
}));

describe('UpgradeModal', () => {
  it('opens the upgrade details with monthly subscription pricing', () => {
    render(<UpgradeModal triggerLabel="Upgrade now" />);

    fireEvent.click(screen.getByRole('button', { name: /Upgrade now/i }));

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Unlock clean exports and serious application volume.')).toBeInTheDocument();
    expect(screen.getByText('Rs 249')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Subscribe monthly' })).toBeInTheDocument();
  });
});
