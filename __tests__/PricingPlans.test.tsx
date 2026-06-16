import { render, screen } from '@testing-library/react';
import { PricingPlans } from '@/components/payments/PricingPlans';

describe('PricingPlans', () => {
  it('shows monthly-only Pro pricing and free usage limits', () => {
    render(<PricingPlans showCheckout={false} />);

    expect(screen.getByText('Rs 249')).toBeInTheDocument();
    expect(screen.getByText('per month')).toBeInTheDocument();
    expect(screen.getByText('3 resume drafts')).toBeInTheDocument();
    expect(screen.getByText('Unlimited resumes')).toBeInTheDocument();
    expect(screen.queryByText(/Annual/i)).not.toBeInTheDocument();
  });
});
