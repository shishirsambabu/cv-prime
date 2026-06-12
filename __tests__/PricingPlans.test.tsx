import { fireEvent, render, screen } from '@testing-library/react';
import { PricingPlans } from '@/components/payments/PricingPlans';

describe('PricingPlans', () => {
  it('switches Pro pricing to the annual Razorpay plan', () => {
    render(<PricingPlans showCheckout={false} />);

    expect(screen.getByText('Rs 249')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Annual - save 33%' }));

    expect(screen.getByText('Rs 1,999')).toBeInTheDocument();
    expect(screen.getByText('per year')).toBeInTheDocument();
  });
});
