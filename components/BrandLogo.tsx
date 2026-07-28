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
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={white ? '/logo-white.png' : '/logo.png'}
      alt="CV Prime"
      width={600}
      height={361}
      className={`w-auto object-contain ${className ?? ''}`}
    />
  );
}
