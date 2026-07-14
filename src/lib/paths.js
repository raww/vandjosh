// Prefix a site-relative path with the configured base path
// (GitHub project pages serve from /vandjosh/). Safe for '' and '/'.
export function withBase(path) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${String(path).replace(/^\//, '')}`;
}

// Meta descriptions: single line, hard cap for SERP/OG display.
export function truncate(text, max = 155) {
  const t = String(text || '').replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).replace(/[ ,;:.]+\S*$/, '')}…`;
}
