# 🚀 StaffOne Portal

**StaffOne Portal** is a high-performance marketing website and workforce management gateway built with **Astro 6**. It features a modern, responsive design optimized for zero-cold-start delivery on **Cloudflare Pages**.

---

## ✨ Features

- **⚡ Blazing Fast**: Built with Astro 6 for optimal performance and minimal JavaScript.
- **📱 Fully Responsive**: A premium glassmorphic UI that looks stunning on every device.
- **☁️ Cloudflare Optimized**: Native integration with Cloudflare Workers and Pages for global delivery.
- **🏗️ Component-Based**: Modular architecture with reusable Astro components.
- **SEO & Performance**: Optimized meta tags, semantic HTML, and high Core Web Vitals.

---

## 🛠️ Technology Stack

- **Framework**: [Astro 6](https://astro.build/)
- **Styling**: Vanilla CSS (Custom Design System)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)

---

## 📂 Project Structure

```text
/
├── public/          # Static assets (images, icons, robots.txt)
├── src/
│   ├── components/  # Reusable UI components (Hero, Features, Pricing, etc.)
│   ├── layouts/     # Page layouts (BaseLayout)
│   ├── pages/       # Project routes (Home, About, Contact, etc.)
│   └── styles/      # Global CSS and variables
├── wrangler.json    # Cloudflare configuration
└── package.json     # Project dependencies and scripts
```

---

## ⌨️ Local Development

### Prerequisites
- Node.js (v18.14.1 or higher)
- npm

### Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## 🧞 Commands

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Builds your production site to `./dist/client` |
| `npm run preview` | Preview your build locally |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

---

## 🚀 Deployment

This project is deployed on **Cloudflare Pages**.

- **Build Command**: `npm run build`
- **Output Directory**: `dist/client`
- **Compatibility Date**: `2026-04-10`

The project includes a `postbuild` script for automatic cleanup of internal configuration files to ensure smooth deployment.

---

## 👨‍💻 Author

**SHAIKH MOHAMMED USMAN**
