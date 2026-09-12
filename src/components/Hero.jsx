import React, { useState, useEffect } from "react";
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
  Terminal,
  Activity,
  CheckCircle,
} from "lucide-react";

const stats = [
  { value: "150+", label: "Products Delivered", icon: Zap },
  { value: "4.8x", label: "Avg Client Growth", icon: TrendingUp },
  { value: "99.99%", label: "System Uptime", icon: ShieldCheck },
  { value: "24/7", label: "AI & Cloud Ops", icon: Cpu },
];

const consoleTabs = [
  {
    id: "ai",
    label: "AI & Agents",
    cmd: "$ elementum.ai_agents()",
    logs: [
      "> Compiling RAG Vector Knowledge Graphs...",
      "> Optimization Score: 100/100 (Sub-50ms Latency)",
      "> Security: SOC2 Encrypted & Guardrailed",
    ],
    metric: "99.4% Accuracy",
  },
  {
    id: "spatial",
    label: "Spatial 3D",
    cmd: "$ elementum.spatial_webgpu()",
    logs: [
      "> Initializing WebGPU Shader Ray-Tracer...",
      "> Target Render Speed: 60 FPS Locked",
      "> Instant AR Quick-Look Camera Ready",
    ],
    metric: "60 FPS Render",
  },
  {
    id: "web",
    label: "Edge Scale",
    cmd: "$ elementum.edge_deploy()",
    logs: [
      "> Deploying React 19 Streaming Architecture...",
      "> Global Edge CDN Latency: 12ms",
      "> Zero Downtime Blue-Green Deployment Active",
    ],
    metric: "100/100 Lighthouse",
  },
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
  const [activeConsoleTab, setActiveConsoleTab] = useState(consoleTabs[0]);
  const [latencyTick, setLatencyTick] = useState(12);

  // Simulated live latency pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setLatencyTick(Math.floor(11 + Math.random() * 4));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden"
    >
      {/* Dynamic Ambient floating background glow accents */}
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
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full badge-theme text-xs font-semibold tracking-wide shadow-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
              <span>Available for Q3/Q4 Project Inquiries</span>
              <Sparkles className="w-3.5 h-3.5 ml-1" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-white font-heading">
              We Craft <br />
              <span className="gradient-text-theme">Next-Gen AI Apps</span> <br />
              &amp; Spatial Digital Products.
            </h1>

            {/* Subheading */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Elementum is an elite creative tech studio fusing cutting-edge AI pipelines, high-performance Web architecture, and immersive UI/UX design into category-defining digital experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="btn-theme-primary group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm shadow-2xl transition-all"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenEstimator}
                className="flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-semibold text-sm backdrop-blur-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
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
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              {/* Glow border backdrop */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 opacity-25 group-hover:opacity-45 blur-2xl transition duration-700" />

              {/* Main Card Console */}
              <div className="relative rounded-3xl glass-card p-6 sm:p-8 space-y-6 shadow-2xl">
                
                {/* Console Header & Tabs */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    <span>v2.5 Live Telemetry</span>
                  </div>
                </div>

                {/* Console Tab Switcher */}
                <div className="flex gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 font-mono text-xs">
                  {consoleTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveConsoleTab(tab)}
                      className={`flex-1 py-1.5 px-2 rounded-lg transition-all text-[11px] ${
                        activeConsoleTab.id === tab.id
                          ? "bg-white/15 text-white font-bold shadow-md"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Simulated Interactive Studio Code Console */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#060913] border border-white/10 space-y-3 font-mono text-xs shadow-inner">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-cyan-400 font-bold">{activeConsoleTab.cmd}</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Active
                      </span>
                    </div>
                    <div className="text-slate-300 leading-relaxed text-[11.5px] space-y-1">
                      {activeConsoleTab.logs.map((log, idx) => (
                        <div key={idx}>{log}</div>
                      ))}
                      <div className="pt-1 text-slate-400 flex items-center justify-between">
                        <span>Latency: <span className="text-cyan-300 font-bold">{latencyTick}ms</span></span>
                        <span className="text-purple-300 font-bold">{activeConsoleTab.metric}</span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Tech Badge List */}
                  <div>
                    <div className="text-[11px] uppercase font-bold text-slate-400 mb-3 tracking-wider font-heading flex items-center justify-between">
                      <span>Studio Core Stack</span>
                      <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {techStackLogos.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-white/10 transition-all cursor-default"
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
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl glass-panel shadow-2xl"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl badge-theme flex items-center justify-center shrink-0 shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-heading">
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