import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Calculator,
  ShieldCheck,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  Globe2,
} from "lucide-react";

const stats = [
  { value: "150+", label: "Products Launched", icon: Zap },
  { value: "4.8x", label: "Avg Client Growth", icon: TrendingUp },
  { value: "99.9%", label: "System Uptime", icon: ShieldCheck },
  { value: "24/7", label: "AI & Cloud Ops", icon: Cpu },
];

const techStackLogos = [
  { name: "React 19", tag: "Frontend Engine" },
  { name: "Vite 8", tag: "Lightning Build" },
  { name: "Tailwind v4", tag: "Modern Styling" },
  { name: "Framer Motion", tag: "Interactive UX" },
  { name: "AI Pipelines", tag: "LLM Integration" },
  { name: "GraphQL & REST", tag: "Data Layer" },
];

export default function Hero({ onOpenEstimator }) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden"
    >
      {/* Ambient background glow accents */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Main Hero Content Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold tracking-wide">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span>Available for Q3/Q4 Project Inquiries</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 ml-1" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
              We Craft <br />
              <span className="gradient-text-cyan">Next-Gen AI Apps</span> <br />
              & Spatial Digital Experiences.
            </h1>

            {/* Subheading */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Elementum is an elite creative tech studio fusing cutting-edge AI pipelines, high-performance Web architecture, and immersive UI/UX design into category-defining digital products.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenEstimator}
                className="flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/60 text-slate-200 font-semibold text-sm backdrop-blur-xl transition-all hover:scale-[1.02] active:scale-95"
              >
                <Calculator className="w-4 h-4 text-cyan-400" />
                <span>Estimate Project Cost</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-emerald-400" />
                <span>Global Remote Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>Full-Stack Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Rapid 4-Week Delivery</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual Card / Interactive Preview Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              {/* Glow border gradient backdrop */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-indigo-500 opacity-30 group-hover:opacity-50 blur-xl transition duration-500" />

              {/* Main Card Console */}
              <div className="relative rounded-3xl bg-[#0f172a]/90 border border-white/15 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl space-y-6">
                
                {/* Console Bar Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-800/40 px-2.5 py-0.5 rounded-full">
                    v2.4 Live Studio Engine
                  </span>
                </div>

                {/* Simulated Interactive Studio Code / Metric Panel */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#080d1a] border border-white/5 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-cyan-400">$ elementum.deploy()</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Active
                      </span>
                    </div>
                    <div className="text-slate-300 leading-relaxed">
                      &gt; Compiling AI Agents &amp; Spatial Web Interfaces...<br />
                      &gt; Optimization Score: <span className="text-emerald-400 font-bold">100/100</span><br />
                      &gt; Latency: <span className="text-cyan-300">12ms</span> | Security: <span className="text-purple-300">Encrypted</span>
                    </div>
                  </div>

                  {/* Interactive Tech Badge List */}
                  <div>
                    <div className="text-xs uppercase font-bold text-slate-400 mb-3 tracking-wider font-heading">
                      Studio Core Stack
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {techStackLogos.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-white/10 transition-all cursor-default"
                        >
                          <div className="text-xs font-bold text-white">{item.name}</div>
                          <div className="text-[10px] text-slate-400">{item.tag}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metric Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-center">
                    <div className="text-2xl font-black text-cyan-400 font-heading">99.8%</div>
                    <div className="text-[10px] text-slate-300 font-medium">On-Time Sprint Delivery</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-center">
                    <div className="text-2xl font-black text-purple-400 font-heading">10M+</div>
                    <div className="text-[10px] text-slate-300 font-medium">End Users Impacted</div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Global Key Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}