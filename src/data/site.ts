export const SITE = {
  name: 'Kevin Colten',
  company: 'Austin Devs',
  legal: 'Austin Devs LLC',
  role: 'Technical Cofounder and Fractional CTO',
  email: 'kevin@austindevs.com',
  linkedin: 'https://www.linkedin.com/in/kevincolten/',
  schedule: 'https://app.reclaim.ai/m/austindevs',
  origin: 'https://austindevs.com'
};

export const NAV = [
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about',    label: 'About' },
  { href: '/contact',  label: 'Contact' }
];

export const ROUTES = ['/', '/services', '/projects', '/about', '/contact'];

export const FOOTER = [
  { href: '/fulfillment', label: 'Fulfillment' },
  { href: '/privacy',     label: 'Privacy' }
];

export const CATEGORIES = [
  {
    slug: 'leadership',
    title: 'Technical Leadership',
    blurb: 'Standing in as the senior technical voice, permanently or for a stretch.',
    items: [
      ['Fractional CTO', 'Technology strategy, roadmaps, and the judgement calls that need an experienced owner.'],
      ['Technical Due Diligence', 'Assessing a codebase, a team, and a roadmap ahead of an investment or an acquisition.'],
      ['Mentoring and Hiring', 'Building engineering teams, running technical interviews, growing the people already there.'],
      ['Managing Offshore Teams', 'Building, managing, and scaling distributed development teams across time zones.'],
      ['Prototyping and MVPs', 'Rapid development of minimum viable products to validate an idea or secure funding.']
    ]
  },
  {
    slug: 'ai',
    title: 'Applied AI',
    blurb: 'AI aimed at a real business problem, with an eye on what it costs to run.',
    items: [
      ['Practical AI Solutions', 'Custom integrations, workflow automation, intelligent assistants, and data-driven insights.'],
      ['Custom MCP Development', 'Model Context Protocol servers connecting AI assistants to your data, APIs, and internal systems.'],
      ['AI Development Workflows', 'Agentic coding setups, prompt and context engineering, and CI automation that lets teams ship faster.'],
      ['AI Cost Reduction', 'Auditing where the tokens go, matching each job to the cheapest model that can do it, caching and batching, consolidating overlapping vendor subscriptions, and running open-weight models on your own hardware or private cloud where that pencils out.'],
      ['RAG and Knowledge Systems', 'Retrieval-augmented generation and AI-powered knowledge management platforms.']
    ]
  },
  {
    slug: 'product',
    title: 'Product Engineering',
    blurb: 'The parts customers actually touch.',
    items: [
      ['Web Development', 'Full-stack web applications on modern frameworks. Ecommerce, SaaS, corporate sites, portals.'],
      ['Mobile Development', 'Native and cross-platform apps for iOS and Android.'],
      ['Customer Dashboards', 'Interactive dashboards and reporting so customers can see their own numbers.'],
      ['Browser Extensions', 'Custom extensions for Chrome, Firefox, and the rest.'],
      ['Browser Automation', 'Automated testing, data extraction, and workflow automation.']
    ]
  },
  {
    slug: 'platform',
    title: 'Platform and Infrastructure',
    blurb: 'What everything else is standing on.',
    items: [
      ['SaaS Infrastructure', 'Scalable multi-tenant platforms with real authentication, billing, and monitoring.'],
      ['DevOps and Internal Systems', 'Infrastructure automation, CI/CD pipelines, and internal tooling.'],
      ['Business Intelligence', 'Analytics, visualization, and reporting that makes decisions easier to defend.'],
      ['IoT Development', 'Embedded firmware, device connectivity, real-time data pipelines, and cloud dashboards.'],
      ['Open Source Development', 'Contributing to and maintaining open source projects.']
    ]
  },
  {
    slug: 'revenue',
    title: 'Revenue Operations',
    blurb: 'The systems between a lead and money in the bank.',
    items: [
      ['Sales Ops and CRMs', 'Implementing and optimizing sales tooling, marketing technology, and CRM systems.'],
      ['HubSpot Development', 'Custom integrations, workflows, and CMS work for marketing and sales teams.'],
      ['Custom Payment Plans', 'Usage-based billing, subscriptions, and pricing models that do not fit off the shelf.'],
      ['Self-Financing Solutions', 'Building the features and systems that pay for themselves through efficiency gains.']
    ]
  },
  {
    slug: 'sectors',
    title: 'Sector Experience',
    blurb: 'Places where the domain is already learned.',
    items: [
      ['EdTech and LMS', 'Learning platforms and management systems for schools and training programs.'],
      ['Prop-tech and AVMs', 'Property valuation algorithms and real estate market analysis tools.'],
      ['Tech-Enabling Services', 'Digital transformation for traditional service companies.']
    ]
  }
];

export const PROJECTS = [
  { name: 'Austin Coding Academy', status: 'Acquired 2019', url: 'https://austincodingacademy.com/',
    blurb: 'Software development courses offered in person and online.' },
  { name: 'Zollege', status: 'Acquired 2021', url: 'https://zollege.com/',
    blurb: 'Dental and medical assistant schools operating across the US.' },
  { name: 'CMAsnap', status: 'Launched 2022', url: 'https://cmasnap.com/',
    blurb: 'Branded, accurate comparative market analyses for realtors, from any device.' },
  { name: 'Paycove', status: 'Partnered 2023', url: 'https://paycove.io',
    blurb: 'Automated quoting, invoicing, and payments wired into CRM and accounting software.' },
  { name: 'LP First Capital', status: 'Partnered 2024 to 2026', url: 'https://lpfirstcapital.com',
    blurb: 'Private investment firm focused on commercial, consumer, education, and healthcare services.' },
  { name: 'DineUp', status: 'Acquired 2026', url: 'https://dineup.com',
    blurb: 'Onboard dining for air travelers.' }
];
