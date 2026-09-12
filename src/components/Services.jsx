import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Code2,
  Boxes,
  Sparkles,
  Smartphone,
  ShieldAlert,
  ArrowUpRight,
  Calculator,
  CheckCircle,
} from "lucide-react";

const servicesList = [
  {
    id: "ai-engineering",
    icon: Bot,
    number: "01",
    title: "AI Engineering & LLM Systems",
    subtitle: "Transform raw LLM models into secure, autonomous enterprise agents.",
    description:
      "We design custom Retrieval-Augmented Generation (RAG) pipelines, intelligent agents, and fine-tuned AI workflows that seamlessly integrate into existing business software.",
    deliverables: [
      "Custom RAG Vector Search & Knowledge Graphs",
      "Autonomous AI Agent Workflows",
      "LLM Guardrails & Latency Optimization",
      "Multi-modal Vision & Speech Interfaces",
    ],
    accent: "from-cyan-500 to-blue-600",
  },
  {
    id: "web-arch",
    icon: Code2,
    number: "02",
    title: "High-Performance Web Apps",
    subtitle: "Blazing fast, bulletproof web applications built for extreme scale.",
    description:
      "Using React 19, Vite, and modern serverless architectures, we build web apps with instantaneous load times, 100/100 Lighthouse scores, and zero downtime resilience.",
    deliverables: [
      "React 19 & Next.js/Vite Architecture",
      "Real-time WebSockets & Streaming UI",
      "Micro-frontend Architecture",
      "Sub-50ms API Telemetry & Caching",
    ],
    accent: "from-purple-500 to-indigo-600",
  },
  {
    id: "spatial-3d",
    icon: Boxes,
    number: "03",
    title: "Spatial UI & 3D Web Experiences",
    subtitle: "Bring physical elegance to the browser with WebGPU & Three.js.",
    description:
      "Stand out from competitors with ray-traced 3D product configurators, interactive WebGL animations, and WebXR immersive spatial environments.",
    deliverables: [
      "Custom WebGPU Shader Development",
      "3D Product Visualizers & AR Mode",
      "Interactive Canvas Physics Engine",
      "Cross-device 60 FPS Optimization",
    ],
    accent: "from-emerald-500 to-teal-600",
  },
  {
    id: "design-systems",
    icon: Sparkles,
    number: "04",
    title: "Design Systems & Product Design",
    subtitle: "Consistent, reusable, and accessible design tokens for growing teams.",
    description:
      "We forge cohesive UI/UX design systems with pixel-perfect component libraries, dark/light theme tokens, and comprehensive Figma component kits.",
    deliverables: [
      "Full Figma Component System",
      "WCAG 2.1 AAA Accessibility Standards",
      "Dark & Glassmorphic Aesthetic Tokens",
      "Micro-interaction Motion Guidelines",
    ],
    accent: "from-rose-500 to-orange-500",
  },
  {
    id: "mobile-ecosystems",
    icon: Smartphone,
    number: "05",
    title: "Cross-Platform Mobile Ecosystems",
    subtitle: "Native-grade iOS & Android applications with offline-first synchronization.",
    description:
      "Deliver smooth mobile experiences with React Native, biometrics, hardware sensor integrations, and seamless cloud syncing.",
    deliverables: [
      "iOS & Android React Native Apps",
      "Offline-first Local Database Syncing",
      "Push Notification & Telemetry Engines",
      "App Store & Play Store Deployment",
    ],
    accent: "from-amber-500 to-yellow-600",
  },
];

export default function Services({ onOpenEstimator }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow-2 opacity-50" />

      <div className="relative max-w-7xl mx-auto z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-theme text-xs font-semibold uppercase tracking-wider font-mono">
              <Bot className="w-3.5 h-3.5" />
              <span>Studio Capabilities</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight font-heading">
              Engineering Excellence <br />
              <span className="gradient-text-theme">For Modern Digital Products.</span>
            </h2>
          </div>

          {/* Interactive Calculator CTA Box */}
          <div className="p-6 rounded-3xl glass-panel flex flex-col sm:flex-row items-center gap-4 max-w-lg shadow-xl">
            <div>
              <h4 className="text-base font-bold text-white font-heading">
                Not sure about your scope?
              </h4>
              <p className="text-xs text-slate-300">
                Use our real-time interactive scope &amp; budget calculator to get instant estimates.
              </p>
            </div>
            <button
              onClick={onOpenEstimator}
              className="btn-theme-primary flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs shrink-0 shadow-lg"
            >
              <Calculator className="w-4 h-4" />
              <span>Launch Calculator</span>
            </button>
          </div>
        </div>

        {/* Services Accordion Cards List */}
        <div className="space-y-6">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className={`group relative rounded-3xl glass-card p-6 sm:p-8 transition-all duration-300 border ${
                  isHovered
                    ? "border-[var(--accent-border)] bg-[#0d1424]/90 shadow-2xl"
                    : "border-white/10"
                }`}
              >
                <div className="grid lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Service Number & Icon */}
                  <div className="lg:col-span-1 flex items-center gap-3">
                    <span className="text-sm font-mono text-[var(--accent-light)] font-bold">
                      {service.number}
                    </span>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${service.accent} p-[1px]`}>
                      <div className="w-full h-full bg-[#050811] rounded-[11px] flex items-center justify-center text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="lg:col-span-4 space-y-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[var(--accent-light)] transition-colors font-heading">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Deliverables Pills */}
                  <div className="lg:col-span-6">
                    <div className="grid sm:grid-cols-2 gap-2">
                      {service.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 px-3 py-1.5 rounded-xl border border-white/5"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-[var(--accent-light)] shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Arrow */}
                  <div className="lg:col-span-1 flex justify-end">
                    <button
                      onClick={onOpenEstimator}
                      className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 group-hover:text-white group-hover:bg-[var(--accent-color)] group-hover:border-[var(--accent-light)] transition-all duration-300 group-hover:rotate-45 shadow-md"
                      title="Calculate project estimate for this service"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}