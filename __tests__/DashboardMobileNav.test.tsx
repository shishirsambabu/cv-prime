import { fireEvent, render, screen } from '@testing-library/react';
import { DashboardMobileNav } from '@/components/dashboard/DashboardMobileNav';

jest.mock('next/navigation', () => ({
  usePathname: () => '/dashboard',
}));

describe('DashboardMobileNav', () => {
  it('opens as a labeled dialog and exposes the nav links', () => {
    render(<DashboardMobileNav email="user@example.com" plan="free" />);

    fireEvent.click(screen.getByRole('button', { name: /Open menu/i }));

    const dialog = screen.getByRole('dialog', { name: /Dashboard navigation/i });
    expect(dialog).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Job tracker/i })).toBeInTheDocument();
  });

  // Every other overlay in the app (UpgradeModal, ATSScorePanel's fix dialog,
  // TailorForRoleModal) closes on Escape. This is the only way to reach any
  // dashboard section on mobile, so it must behave the same way instead of
  // trapping the user until they hit the small X button or tap the backdrop.
  it('closes on Escape, matching every other overlay in the app', () => {
    render(<DashboardMobileNav email="user@example.com" plan="free" />);

    fireEvent.click(screen.getByRole('button', { name: /Open menu/i }));
    expect(screen.getByRole('dialog', { name: /Dashboard navigation/i })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(screen.queryByRole('dialog', { name: /Dashboard navigation/i })).not.toBeInTheDocument();
  });

  it('closes when the backdrop or the close button is clicked', () => {
    render(<DashboardMobileNav email="user@example.com" plan="free" />);

    fireEvent.click(screen.getByRole('button', { name: /Open menu/i }));
    // Both the backdrop and the X button share the "Close menu" label.
    fireEvent.click(screen.getAllByRole('button', { name: /Close menu/i })[0]!);

    expect(screen.queryByRole('dialog', { name: /Dashboard navigation/i })).not.toBeInTheDocument();
  });
});
