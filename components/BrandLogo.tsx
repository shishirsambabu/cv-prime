interface BrandLogoProps {
  className?: string;
}

/**
 * Full CV Prime lockup — the crown-check mark plus the "CV PRIME" wordmark.
 * Uses the real logo file at public/logo.png. Best on light surfaces.
 */
export function BrandLogo({ className }: BrandLogoProps): JSX.Element {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo.png" alt="CV Prime" className={`w-auto object-contain ${className ?? ''}`} />
  );
}
