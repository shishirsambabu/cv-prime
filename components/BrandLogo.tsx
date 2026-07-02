import Image from 'next/image';

interface BrandLogoProps {
  className?: string;
  /** Use the white lockup for dark surfaces. */
  white?: boolean;
}

/**
 * Full CV Prime lockup — the crown-check mark plus the "CV PRIME" wordmark.
 * Indigo on light surfaces, white on dark surfaces. Uses the real logo files
 * at public/logo.png and public/logo-white.png.
 */
export function BrandLogo({ className, white }: BrandLogoProps): JSX.Element {
  return (
    <Image
      src={white ? '/logo-white.png' : '/logo.png'}
      alt="CV Prime"
      width={1120}
      height={674}
      priority
      className={`w-auto object-contain ${className ?? ''}`}
    />
  );
}
