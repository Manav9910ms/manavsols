export const site = {
  name: "MANAV SOLS",
  shortName: "MANAV",
  tagline: "Websites, software & digital solutions",
  description: "MANAV SOLS creates modern websites, digital products, automation and custom technology solutions for businesses, professionals and startups.",
  url: "https://manavsols.com",
  email: "manav@manavsols.com",
  phone: "+91 8376882879",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "Projects", href: "/projects/" },
    { label: "Pricing", href: "/pricing/" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ],
  social: [
    { label: "GitHub", href: "https://github.com/Manav9910ms" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/manav-singh-36948a344" },
    { label: "Instagram", href: "https://www.instagram.com/manavsols" },
    { label: "YouTube", href: "https://youtube.com/@manavsols" },
    { label: "WhatsApp Channel", href: "https://whatsapp.com/channel/0029Vb7ShMvCsU9KsGbjdP30" },
  ],
} as const;

export const services = [
  { slug: "web-development", number: "01", title: "Web Development", shortTitle: "Websites", description: "Fast, responsive websites built around business goals, trust, conversion and search visibility.", details: "From a simple business website to a scalable service platform, the build stays clean, responsive and easy to maintain.", features: ["Responsive design", "SEO-ready structure", "Performance optimization", "Vercel deployment"] },
  { slug: "ai-automation", number: "02", title: "AI & Automation", shortTitle: "AI + Automation", description: "Practical AI and automation workflows that reduce repetitive work and improve how a business operates.", details: "We focus on useful automation rather than AI for decoration: lead handling, content workflows, internal tools and integrations.", features: ["Workflow automation", "AI assistants", "API integrations", "Custom business workflows"] },
  { slug: "custom-software", number: "03", title: "Custom Software", shortTitle: "Software", description: "Purpose-built software for specific business requirements, products and internal operations.", details: "When an off-the-shelf tool does not fit, we can design a focused system around the way your business actually works.", features: ["Custom dashboards", "Client portals", "Authentication", "Database-backed systems"] },
  { slug: "technical-solutions", number: "04", title: "Technical Solutions", shortTitle: "Technical", description: "Integrations, internal tools and technical systems designed around real operational needs.", details: "Connect the pieces you already use or replace repetitive manual steps with a focused technical solution.", features: ["Third-party integrations", "Internal tools", "Technical consulting", "System improvements"] },
] as const;

export const projects = [
  { slug: "manav-sols", title: "MANAV SOLS", category: "Platform", year: "2026", description: "The official MANAV SOLS technology and services platform, rebuilt for scalable content, SEO and future client tools.", stack: ["Astro", "Vercel", "Firebase"] },
  { slug: "mcloud-offline", title: "mCloud Offline", category: "Product", year: "2026", description: "An offline-first local file-sharing concept designed around simple, direct device-to-device workflows.", stack: ["Web", "Networking", "Local-first"] },
  { slug: "ai-chan", title: "AI Chan", category: "AI", year: "2026", description: "A virtual desktop assistant concept focused on useful local actions and conversational interaction.", stack: ["AI", "Python", "Desktop"] },
] as const;

export const trustPoints = ["Mobile-first responsive builds", "SEO-friendly foundations", "Fast modern deployment", "Clear communication"] as const;
