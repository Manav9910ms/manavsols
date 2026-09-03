export const site = {
  name: "MANAV SOLS",
  tagline: "Digital Solutions & Technology Services",
  description:
    "Modern websites, digital products, automation and custom technology solutions for businesses, professionals and startups.",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "Projects", href: "/projects/" },
    { label: "Pricing", href: "/pricing/" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" }
  ]
} as const;

export const services = [
  {
    slug: "web-development",
    title: "Web Development",
    description: "Fast, responsive websites built around business goals, conversions and search visibility."
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    description: "Practical automation and AI-powered workflows that reduce repetitive work."
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    description: "Purpose-built software for specific business requirements and digital products."
  },
  {
    slug: "technical-solutions",
    title: "Technical Solutions",
    description: "Integrations, internal tools and technical systems designed around real operational needs."
  }
] as const;

export const projects = [
  {
    slug: "manav-sols",
    title: "MANAV SOLS",
    category: "Platform",
    description: "The official MANAV SOLS technology and services platform."
  },
  {
    slug: "mcloud-offline",
    title: "mCloud Offline",
    category: "Product",
    description: "An offline local file-sharing concept."
  },
  {
    slug: "ai-chan",
    title: "AI Chan",
    category: "AI",
    description: "A virtual desktop assistant concept."
  }
] as const;
