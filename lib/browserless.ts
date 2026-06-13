export async function renderPDF(html: string): Promise<Buffer> {
  const token = process.env.BROWSERLESS_TOKEN;

  if (!token) {
    throw new Error('BROWSERLESS_TOKEN is not configured');
  }

  // Browserless cloud v2 authenticates via the ?token= query param.
  const endpoint = `https://production-sfo.browserless.io/pdf?token=${encodeURIComponent(token)}`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      html,
      options: {
        format: 'A4',
        printBackground: true,
        margin: {
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
        },
      },
      waitFor: 500,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    throw new Error(`Browserless error: ${response.status} ${detail.slice(0, 300)}`);
  }

  return Buffer.from(await response.arrayBuffer());
}
