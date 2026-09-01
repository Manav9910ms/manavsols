# 🌐 MANAV SOLS

**MANAV SOLS** is an independent **digital solutions brand and technology services platform** founded by **Manav Singh**. It provides practical web development, software, automation and custom technology solutions for businesses, professionals, startups and other real-world needs.

## 🚀 What MANAV SOLS Does

- Web development and website design
- AI & automation solutions
- Technical systems and integrations
- Custom software projects
- Digital product development

## 🧩 Products & Projects

- **MANAV SOLS Website** — official digital solutions and technology services platform
- **MS Connect** — multi-user real-time chat system
- **mCloud Offline** — offline local file-sharing concept
- **AI Chan** — virtual desktop assistant concept

## 🛠️ Stack

- HTML, CSS, JavaScript
- Firebase Authentication
- Cloud Firestore
- GitHub Pages
- Google Analytics

## 📁 Repository Structure

```text
index.html             Public homepage and organization entity markup
style.css              Shared design system
script.js              Shared navigation logic
request/               Service-request page and Firestore submission logic
track/                 Request-tracking page and lookup logic
login/                 Customer login
register/              Customer registration
dashboard/             Authenticated customer dashboard
admin.html             Admin request panel
admin.js               Protected admin logic
firebase.js            Firebase client configuration
firestore.rules        Firestore security rules
robots.txt              Crawler policy
sitemap.xml             Public-page sitemap
404.html                GitHub Pages error page
site.webmanifest        Web app and brand metadata
assets/icon/favicon.svg Brand favicon and logo asset
```

## 🔐 Security Notes

Admin access is enforced in Firestore rules using the verified admin email, while the browser also performs a matching UI check. User-supplied content is rendered with DOM APIs instead of unsafe HTML interpolation.

The rules in `firestore.rules` must also be deployed to the Firebase project for the server-side protections to take effect.

## 🌍 Deployment

The public website is designed for GitHub Pages with the custom domain:

`https://manavsols.com`

## 📌 Brand Positioning

**MANAV SOLS** operates as an independent technology services brand and digital solutions platform. The website is the primary public entity page, with structured organization data connecting the brand to its founder and official social profiles.

## 📈 Status

The repository is actively maintained and optimized for the MANAV SOLS public website, service offerings, digital products and customer systems.
