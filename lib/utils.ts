export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").substring(0, 150) + "...";
}
