import Image from 'next/image';

interface BrandLogoProps {
  className?: string;
  /** Use the white lockup for dark surfaces. */
  white?: boolean;
  /** Mark as high-priority when this is the above-the-fold logo (e.g. site header). */
  priority?: boolean;
}

/**
 * Full CV Prime lockup — the crown-check mark plus the "CV PRIME" wordmark.
 * Indigo on light surfaces, white on dark surfaces. Uses the real logo files
 * at public/logo.png and public/logo-white.png (600x361 source — the lockup
 * never renders wider than ~200px, so a larger source only cost bytes).
 */
export function BrandLogo({ className, white, priority }: BrandLogoProps): JSX.Element {
  return (
    <Image
      src={white ? '/logo-white.png' : '/logo.png'}
      alt="CV Prime"
      width={600}
      height={361}
      priority={priority}
      className={`w-auto object-contain ${className ?? ''}`}
    />
  );
}
