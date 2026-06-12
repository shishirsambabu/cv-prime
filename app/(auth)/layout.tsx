import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account access',
  description: 'Create or access your CV Prime workspace.',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return <>{children}</>;
}
