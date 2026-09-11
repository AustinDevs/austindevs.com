import { SITE } from '../data/site';
export const GET = () => new Response(
`User-agent: *
Allow: /

Sitemap: ${SITE.origin}/sitemap-index.xml
`, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
