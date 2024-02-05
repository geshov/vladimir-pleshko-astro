export function GET({ site }) {
  return new Response(`
User-agent: *
Allow: /

Sitemap: ${site}sitemap-index.xml
  `);
}
