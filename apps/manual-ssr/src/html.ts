const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

// For values interpolated into the template outside of React, which escapes on its own.
export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => ESCAPES[char]!);
}

interface PageOptions {
  title: string;
  /** Ready-made HTML (e.g. from renderToString) — inserted as is. */
  body: string;
}

export function renderPage({ title, body }: PageOptions): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)}</title>
    <link rel="stylesheet" href="/static/styles.css">
  </head>
  <body>
    ${body}
  </body>
</html>`;
}
