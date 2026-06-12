export async function renderPDF(html: string): Promise<Buffer> {
  const token = process.env.BROWSERLESS_TOKEN;

  if (!token) {
    throw new Error('BROWSERLESS_TOKEN is not configured');
  }

  const response = await fetch('https://production-sfo.browserless.io/pdf', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
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
    throw new Error(`Browserless error: ${response.status}`);
  }

  return Buffer.from(await response.arrayBuffer());
}
