/** Resolve a public-folder path for the current base URL (e.g. GitHub Pages). */
export function asset(path: string): string {
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL;
  return `${base.endsWith('/') ? base : `${base}/`}${normalized}`;
}
