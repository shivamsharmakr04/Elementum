# Elementum | Next-Gen AI & Digital Product Studio

Elementum is an ultra-modern, high-performance web platform for an elite creative tech studio specializing in autonomous AI agent pipelines, spatial 3D WebGPU interfaces, and high-velocity product engineering.

---

## ✨ Features & Highlights

- **Ultra-Sleek Obsidian Glassmorphic System**: Deep luxury dark obsidian aesthetics (`#050811`) with floating animated radial mesh background gradients (`@keyframes floatGlow1`, `@keyframes floatGlow2`), dynamic typography (Outfit, Plus Jakarta Sans, and JetBrains Mono), and physics-based Framer Motion micro-animations.
- **Dynamic 5-Accent Palette Theme Switcher**: Full application-wide theme switcher supporting 5 curated studio palettes (**Cyan Spark**, **Cyber Violet**, **Emerald Pulse**, **Sunset Rose**, and **Titanium Gold**). All buttons, card borders, active indicators, badges, and glows dynamically adapt across every section instantly.
- **Live Interactive Telemetry Console**: Hero section preview featuring a live interactive console with tabbed architecture switching (*AI & Agents*, *Spatial 3D*, *Edge Scale*) and a real-time edge latency pulse ticker.
- **Interactive Work / Portfolio Showcase**: Searchable and filterable portfolio grid (AI & LLMs, Spatial & Web, FinTech & Web3, Mobile Apps) with in-depth case study modals featuring interactive live sandbox demo simulations, metric highlights, and shareable link copy feedback.
- **Live Interactive Scope & Cost Estimator**: Real-time project budget and timeline calculator where clients can select project category, target platform, feature addons, and launch velocity to get instant estimates and team composition breakdowns.
- **Multi-Step Interactive Inquiry Configurator**: Seamless 3-step project wizard with form validation, pre-filled estimate sync, celebratory confetti submission, and confirmation summary card.
- **Capabilities Accordion**: Studio service offerings with feature breakdowns, deliverable chips, and quick-link triggers.
- **Client Case Studies & Testimonials**: Review carousel with star ratings, metric badges, verified client badges, and a simulated video story playback modal.
- **Searchable FAQ Accordion**: Real-time question search, expand/collapse all toggle control, and category filters for instant resolution of project, pricing, and IP questions.
- **System Telemetry Footer**: Live operational status indicator, monthly dispatch email subscription, sitemap links, and smooth scroll-to-top control.

---

## 🛠️ Tech Stack

- **Core**: React 19, JavaScript (ES2026)
- **Styling**: Tailwind CSS v4, Custom CSS Tokens & Glassmorphism Design Tokens
- **Typography**: Outfit (Headings), Plus Jakarta Sans (Body), JetBrains Mono (Telemetry/Code)
- **Animations**: Framer Motion 12, Canvas Confetti
- **Icons**: Lucide React, React Icons
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
