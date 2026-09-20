import { SITE, CATEGORIES, PROJECTS } from '../data/site';

const body = `# ${SITE.name}

> ${SITE.role} at ${SITE.company}.

${SITE.name} runs ${SITE.legal}, a consulting practice offering fractional CTO and
technical cofounder work. Contact: ${SITE.email}

## Pages

- [Home](${SITE.origin}/): name, role, and how to make contact.
- [Services](${SITE.origin}/services): six categories of work, each broken into specific services.
- [Projects](${SITE.origin}/projects): companies built, launched, partnered with, and acquired.
- [About](${SITE.origin}/about): background and experience.
- [Contact](${SITE.origin}/contact): contact form and scheduling link.
- [Fulfillment](${SITE.origin}/fulfillment): how engagements are scoped, delivered, and billed.
- [Privacy](${SITE.origin}/privacy): what is collected and what is not.

## Services

${CATEGORIES.map(c => `### ${c.title}\n\n${c.blurb}\n\n${c.items.map(([n, d]) => `- **${n}**: ${d}`).join('\n')}`).join('\n\n')}

## Projects

${PROJECTS.map(p => `- **${p.name}** (${p.status}): ${p.blurb} ${p.url}`).join('\n')}
`;

export const GET = () => new Response(body, {
  headers: { 'content-type': 'text/plain; charset=utf-8' }
});
