# Elementum — AI & Digital Product Studio

> A polished React/Vite product-studio landing page exploring modern AI, web-product, and interactive UI experiences.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=111827)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

## Overview

Elementum is a frontend-focused product-studio experience built with React and Vite. It presents an AI/digital-product brand through a dark, futuristic interface with interactive sections, portfolio exploration, project estimation, inquiry flows, FAQs, and motion-driven UI.

The project is intentionally self-contained: it can be cloned and run locally without a backend service.

## ✨ Highlights

- Responsive product-studio landing experience
- Dark glassmorphism visual language
- Animated and interactive hero experience
- Portfolio/project filtering and search
- Project scope and cost estimation flow
- Multi-step project inquiry experience
- FAQ search and filtering
- Theme/accent interactions
- Motion effects with Framer Motion
- Icon system using Lucide React and React Icons
- Confetti feedback using Canvas Confetti

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI and component architecture |
| Vite 8 | Development server and production bundling |
| Tailwind CSS 4 | Utility-first styling |
| Framer Motion | UI animation |
| Lucide React | Interface icons |
| React Icons | Additional iconography |
| Canvas Confetti | Interaction feedback |
| ESLint | Code-quality checks |

## 📁 Project Structure

```text
Elementum/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI pieces
│   ├── assets/          # Application assets
│   ├── App.jsx          # Main application
│   └── main.jsx         # React entrypoint
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
└── README.md
```

## 🚀 Getting Started

### Requirements

- Node.js 20+
- npm 10+

### Installation

```bash
git clone https://github.com/shivamsharmakr04/Elementum.git
cd Elementum
npm install
```

### Development

```bash
npm run dev
```

Open the local URL printed by Vite.

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## 🌐 Deployment

The repository contains deployment configuration for common static/frontend hosting platforms. For a clean deployment, build the project with:

```bash
npm run build
```

The generated production assets are placed in `dist/`.

## 🎯 Project Goals

Elementum focuses on demonstrating:

1. Strong visual hierarchy and branding
2. Reusable React components
3. Responsive frontend engineering
4. Interactive product storytelling
5. Modern motion and micro-interactions
6. A polished developer portfolio-quality frontend

## 🔧 Configuration

This is primarily a client-side application and does not require a backend database or API for its core experience.

If environment variables are introduced later, document them in an `.env.example` file and never commit real credentials.

## 🧪 Quality Checks

Before opening a pull request or deploying:

```bash
npm ci
npm run lint
npm run build
```

## 📌 Project Status

**Status:** Active frontend project / portfolio showcase.

## 👨‍💻 Author

**Shivam Kumar** — Full-Stack Developer

[GitHub](https://github.com/shivamsharmakr04) · [LinkedIn](https://linkedin.com/in/shivam-kumar-b0aab2209)

## 📄 License

No license file is currently declared in this repository. Add a license if you intend to distribute the project as open source.
