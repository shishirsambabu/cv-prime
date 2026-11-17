import fs from 'node:fs';
import path from 'node:path';
import { render, screen } from '@testing-library/react';
import NotFound from '@/app/not-found';
import { notFoundLinks } from '@/lib/notFoundLinks';

// Relative paths, not the `@/` alias: jest.mock's resolver does not apply it.

jest.mock('../components/marketing/MarketingHeader', () => ({
  MarketingHeader: (): JSX.Element => <header data-testid="marketing-header" />,
}));
jest.mock('../components/marketing/MarketingFooter', () => ({
  MarketingFooter: (): JSX.Element => <footer data-testid="marketing-footer" />,
}));

describe('NotFound (site-wide 404)', () => {
  it('renders the heading, shared chrome and primary CTAs', () => {
    render(<NotFound />);

    expect(screen.getByRole('heading', { level: 1, name: /couldn.t find that page/i })).toBeInTheDocument();
    expect(screen.getByTestId('marketing-header')).toBeInTheDocument();
    expect(screen.getByTestId('marketing-footer')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /build my resume free/i })).toHaveAttribute(
      'href',
      '/signup?next=/dashboard',
    );
    expect(screen.getByRole('link', { name: /go to homepage/i })).toHaveAttribute('href', '/');
  });

  it('links to every popular page', () => {
    render(<NotFound />);

    for (const link of notFoundLinks) {
      expect(screen.getByRole('link', { name: new RegExp(link.title, 'i') })).toHaveAttribute('href', link.href);
    }
  });

  it('only links to routes that exist, so the 404 page never leads to another 404', () => {
    const marketingDir = path.join(process.cwd(), 'app', '(marketing)');

    for (const link of notFoundLinks) {
      const pageFile = path.join(marketingDir, link.href, 'page.tsx');
      expect({ href: link.href, exists: fs.existsSync(pageFile) }).toEqual({ href: link.href, exists: true });
    }
  });
});
