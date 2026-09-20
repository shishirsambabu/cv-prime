'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}): JSX.Element {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div
          style={{
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            padding: '2rem',
            textAlign: 'center',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Something went wrong</h1>
          <p style={{ maxWidth: '28rem', color: '#475569', fontSize: '0.875rem' }}>
            CV Prime hit an unexpected error. Your CV data is safe — please try again.
          </p>
          <button
            onClick={() => reset()}
            style={{
              borderRadius: '0.375rem',
              backgroundColor: '#0f172a',
              padding: '0.5rem 1rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#fff',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
