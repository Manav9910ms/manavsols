# 🌐 MANAV SOLS

**MANAV SOLS** is the personal technology brand and portfolio of **Manav Singh**, focused on practical digital solutions, modern websites and independent products.

## 🚀 What MANAV SOLS Does

- Web development
- AI & automation concepts
- Technical solutions
- Custom software projects
- Digital product development

## 🧩 Products

- **MANAV SOLS Website** — official brand website
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
index.html             Public homepage
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
site.webmanifest        Web app metadata
assets/icon/favicon.svg Lightweight site favicon
```

## 🔐 Security Notes

Admin access is enforced in Firestore rules using the verified admin email, while the browser also performs a matching UI check. User-supplied content is rendered with DOM APIs instead of unsafe HTML interpolation.

The rules in `firestore.rules` must also be deployed to the Firebase project for the server-side protections to take effect.

## 🌍 Deployment

The public website is designed for GitHub Pages with the custom domain:

`https://manavsols.com`

## 📌 Status

The repository is actively maintained and optimized for the current MANAV SOLS public website plus its request, tracking and account systems.
