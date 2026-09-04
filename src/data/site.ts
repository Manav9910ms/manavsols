export const site = {
  name: "MANAV SOLS",
  shortName: "MANAV",
  tagline: "Web Solutions & Software",
  description: "MANAV SOLS builds professional websites, web apps, software and digital solutions that help businesses grow.",
  url: "https://manavsols.com",
  email: "manav@manavsols.com",
  phone: "+91 8376882879",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
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

export const packages = [
  { slug: "landing-page", name: "Landing Page", subtitle: "Perfect for campaigns & promotions", price: "₹4,999", note: "ONE TIME", tone: "green", features: ["1 Page Website", "Mobile Responsive", "Contact / WhatsApp Integration", "Basic SEO", "Fast Delivery"] },
  { slug: "starter", name: "Starter", subtitle: "Great for startups, coaches & local businesses", price: "₹9,999", note: "ONE TIME", tone: "blue", features: ["Up to 5 Pages", "Mobile Responsive", "WhatsApp / Contact Form", "Google Maps Integration", "Basic SEO", "Fast Loading", "1 Revision Round"] },
  { slug: "business", name: "Business", subtitle: "Everything you need to grow online", price: "₹14,999", note: "ONE TIME", tone: "purple", badge: "MOST POPULAR", features: ["Up to 10 Pages", "Premium Design", "Advanced SEO Setup", "Contact / Lead Forms", "Google Analytics Setup", "Search Console Setup", "Social Media Integration", "2 Revision Rounds"] },
  { slug: "professional", name: "Professional", subtitle: "For businesses that want a strong online presence", price: "₹24,999", note: "ONE TIME", tone: "orange", features: ["10+ Pages", "Custom Design", "Advanced SEO", "Lead Generation Features", "Speed Optimization", "Analytics & Reporting Setup", "Priority Support", "3 Revision Rounds"] },
  { slug: "ecommerce", name: "E-Commerce", subtitle: "Sell online. Grow faster.", price: "₹24,999+", note: "ONE TIME", tone: "navy", features: ["E-commerce Functionality", "Product Management", "Payment Gateway Integration", "Order Management", "Shipping Options", "Discounts & Coupons", "Basic SEO", "2 Revision Rounds"] },
] as const;

export const carePlans = [
  { name: "Basic Care", subtitle: "Best for small websites", price: "₹999", tone: "green", features: ["Hosting & SSL", "Regular Backups", "Website Monitoring", "Minor Text / Image Changes", "Basic Technical Support"] },
  { name: "Pro Care", subtitle: "Best for growing businesses", price: "₹1,999", tone: "blue", badge: "MOST POPULAR", features: ["Everything in Basic", "Up to 5 Small Changes", "Performance Monitoring", "Security Updates", "Priority Support"] },
  { name: "Premium Care", subtitle: "Best for high performance", price: "₹3,999", tone: "purple", features: ["Everything in Pro", "Unlimited Small Changes", "Advanced Security", "Speed Optimization", "Monthly Report & Insights"] },
] as const;

export const services = [
  { slug: "websites", number: "01", title: "Websites", shortTitle: "Websites", description: "Professional websites designed to build trust, explain your offer and turn visitors into customers.", details: "From local business websites to landing pages and multi-page company sites, we build responsive experiences around your brand and business goals.", features: ["Business websites", "Portfolio websites", "Coaching / institute sites", "Restaurant / hotel sites", "Landing pages", "Blog websites"] },
  { slug: "web-apps-software", number: "02", title: "Web Apps & Software", shortTitle: "Web Apps", description: "Custom digital products for workflows, operations and the way your business actually works.", details: "Build focused web applications and business software for internal operations, customers and repeatable workflows.", features: ["Custom web apps", "Admin dashboards", "CRM systems", "Inventory systems", "Booking systems", "Billing / invoicing", "SaaS applications"] },
  { slug: "seo", number: "03", title: "SEO & Online Visibility", shortTitle: "SEO", description: "Practical search optimization that helps the right people find your business online.", details: "We improve technical foundations, on-page structure and local visibility so your website can compete for relevant searches.", features: ["On-page SEO", "Technical SEO", "Local SEO", "Search Console & Analytics", "Keyword optimization", "SEO maintenance", "Monthly reports"] },
  { slug: "hosting-technical", number: "04", title: "Hosting & Technical", shortTitle: "Hosting", description: "Fast, secure and reliable infrastructure for websites and business systems.", details: "Get your domain, hosting, SSL, deployment and technical foundation configured correctly and maintained as your site evolves.", features: ["Domain & hosting", "SSL & security", "Website deployment", "Backup & security", "Performance optimization", "Website migration", "Business email setup"] },
  { slug: "maintenance-support", number: "05", title: "Maintenance & Support", shortTitle: "Support", description: "Keep your website updated, monitored and running smoothly while you focus on business.", details: "Ongoing care covers updates, content changes, fixes, backups, uptime monitoring and practical technical support.", features: ["Website updates", "Content changes", "Bug fixes", "Regular backups", "Uptime monitoring", "Technical support"] },
  { slug: "integrations", number: "06", title: "Integrations", shortTitle: "Integrations", description: "Connect the tools your business already uses and automate the gaps between them.", details: "We integrate payments, messaging, maps, email, third-party APIs and authentication into one useful workflow.", features: ["WhatsApp integration", "Payment gateways", "Google Maps", "Email integration", "Third-party APIs", "Login / authentication"] },
] as const;

export const trustPoints = ["Trusted by businesses", "Tailored solutions", "On-time delivery", "Long-term support"] as const;
