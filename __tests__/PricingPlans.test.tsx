import { render, screen } from '@testing-library/react';
import { PricingPlans } from '@/components/payments/PricingPlans';

describe('PricingPlans', () => {
  it('shows lifetime Pro pricing and free usage limits', () => {
    render(<PricingPlans showCheckout={false} />);

    expect(screen.getByText('Lifetime Pro')).toBeInTheDocument();
    expect(screen.getByText('₹999')).toBeInTheDocument();
    expect(screen.getByText('one time')).toBeInTheDocument();
    expect(screen.getByText('Unlimited resume drafts')).toBeInTheDocument();
    expect(screen.getByText('Unlimited clean PDF exports — forever')).toBeInTheDocument();
    expect(screen.queryByText(/Annual/i)).not.toBeInTheDocument();
  });
});
