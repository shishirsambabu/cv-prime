import Image from 'next/image';

interface BrandLogoProps {
  className?: string;
  /** Use the white lockup for dark surfaces. */
  white?: boolean;
  /** Set true for the single above-the-fold instance (e.g. the header) so it's an LCP candidate, not lazy-loaded. */
  priority?: boolean;
}

/**
 * Full CV Prime lockup — the crown-check mark plus the "CV PRIME" wordmark.
 * Indigo on light surfaces, white on dark surfaces. Uses the real logo files
 * at public/logo.png and public/logo-white.png, served through next/image so
 * every one of the ~10 places this renders (header, footer, auth, dashboard)
 * gets an automatically resized, WebP/AVIF-optimized asset instead of the
 * full 1120x674 source PNG.
 */
export function BrandLogo({ className, white, priority }: BrandLogoProps): JSX.Element {
  return (
    <Image
      src={white ? '/logo-white.png' : '/logo.png'}
      alt="CV Prime"
      width={300}
      height={181}
      priority={priority}
      className={`w-auto object-contain ${className ?? ''}`}
    />
  );
}
