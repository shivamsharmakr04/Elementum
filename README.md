# Elementum | Next-Gen AI & Digital Product Studio

Elementum is a modern, high-performance web platform for an elite creative tech studio specializing in AI pipelines, spatial 3D web interfaces, and high-velocity product engineering.

---

## ✨ Features & Highlights

- **Sleek Glassmorphic Design System**: Dark glassmorphic aesthetics with ambient background mesh gradients, dynamic typography (Plus Jakarta Sans & Outfit), and micro-animations via Framer Motion.
- **Accent Theme Switcher**: Customizable color themes (Cyan Spark, Cyber Violet, Emerald Pulse, Sunset Rose) accessible right from the header.
- **Interactive Work / Portfolio Showcase**: Filterable portfolio grid (AI & LLMs, Spatial & Web, FinTech & Web3, Mobile Apps) with in-depth case study modals detailing technical highlights and client impact metrics.
- **Live Interactive Scope & Cost Estimator**: Real-time project budget and timeline calculator where clients can select project category, features/addons, and launch velocity to get an instant scope estimate.
- **Multi-Step Interactive Inquiry Configurator**: Seamless 3-step project wizard with form validation, pre-filled estimate sync, and celebratory confetti submission.
- **Capabilities Accordion**: Studio service offerings with feature breakdowns and quick-link triggers.
- **Client Case Studies & Testimonials**: Review carousel with star ratings, metric badges, and simulated video story playback modal.
- **Searchable FAQ Accordion**: Real-time search filter for quick resolution of project, pricing, and IP questions.
- **System Telemetry Footer**: Live studio status indicator, dispatch subscription, sitemap, and smooth scroll-to-top control.

---

## 🛠️ Tech Stack

- **Core**: React 19, JavaScript (ES2026)
- **Styling**: Tailwind CSS v4, Custom CSS Design Tokens & Glassmorphism
- **Animations**: Framer Motion 12, Canvas Confetti
- **Icons**: Lucide React
- **Build Tool**: Vite 8

---

## 🚀 Local Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/himanshu9771/Elementum.git
cd Elementum

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

---

## 📦 Deployment Guide

### Deploy to Vercel (Recommended)
1. Push your code to your GitHub / GitLab repository.
2. Log into [Vercel](https://vercel.com) and click **"New Project"**.
3. Import your `Elementum` repository.
4. Vercel automatically detects Vite framework settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. The included `vercel.json` ensures full SPA routing support.

### Deploy to Netlify
1. Log into [Netlify](https://netlify.com) and import the repository.
2. Netlify will read the included `netlify.toml` file automatically:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
3. Click **Deploy Site**.

### Build Locally
To test the production bundle locally:

```bash
npm run build
npm run preview
```
