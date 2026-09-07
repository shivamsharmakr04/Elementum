import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Layers,
  Sparkles,
  X,
  TrendingUp,
  Award,
  CheckCircle2,
  Maximize2,
  Search,
  Copy,
  Check,
  Play,
  ArrowRight,
} from "lucide-react";

const categories = [
  "All",
  "AI & LLMs",
  "Spatial & Web",
  "FinTech & Web3",
  "Mobile Apps",
];

const projects = [
  {
    id: "synth-ai",
    title: "Synthetix AI Copilot",
    category: "AI & LLMs",
    subtitle: "Enterprise LLM Assistant for Financial Intelligence & Analytics",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    impact: "+410% Query Speed",
    client: "Synthetix Capital",
    year: "2026",
    tags: ["React 19", "Python / FastAPI", "OpenAI GPT-4o", "TailwindCSS"],
    description:
      "Engineered an enterprise-grade AI copilot capable of synthesizing millions of financial documents into actionable real-time market insights with sub-second retrieval.",
    deliverables: [
      "Sub-second RAG Vector Search architecture",
      "Custom UI Design System for high-density financial charts",
      "Role-Based Access Control (RBAC) & SOC2 compliance integration",
    ],
    metrics: [
      { label: "Active Enterprise Users", value: "85,000+" },
      { label: "Document Processing Speed", value: "2.4M pgs/min" },
      { label: "Accuracy Rating", value: "99.4%" },
    ],
  },
  {
    id: "nexus-spatial",
    title: "Nexus 3D Web Commerce",
    category: "Spatial & Web",
    subtitle: "Immersive WebGPU Product Configurator for Luxury Brands",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    impact: "3.2x Conversion Rate",
    client: "Nexus Couture",
    year: "2025",
    tags: ["Three.js", "WebGPU", "React", "Framer Motion"],
    description:
      "Transformed luxury fashion e-commerce with real-time 3D cloth simulation, ray-traced materials, and instant AR fitting preview directly in the browser without plugins.",
    deliverables: [
      "WebGPU shaders with real-time ray-traced lighting",
      "Instant AR quick-look camera integration",
      "Seamless Shopify Plus custom headless integration",
    ],
    metrics: [
      { label: "Conversion Lift", value: "+220%" },
      { label: "Avg Session Time", value: "6.8 mins" },
      { label: "Mobile Render Speed", value: "60 FPS" },
    ],
  },
  {
    id: "vault-pay",
    title: "Aura Decentralized Vault",
    category: "FinTech & Web3",
    subtitle: "Zero-Knowledge Asset Security & Yield Management Dashboard",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    impact: "$1.4B TVL Managed",
    client: "Aura Labs",
    year: "2025",
    tags: ["Solidity", "Ethers.js", "React", "Tailwind v4"],
    description:
      "A high-security Web3 financial protocol dashboard offering biometric authentication, multi-signature vault orchestration, and real-time yield analytics.",
    deliverables: [
      "Zero-Knowledge Proof biometric authentication flow",
      "Real-time WebSocket market telemetry charts",
      "Audited Smart Contract integration frontend",
    ],
    metrics: [
      { label: "Total Value Locked", value: "$1.4 Billion" },
      { label: "Security Audit Score", value: "100/100" },
      { label: "Transaction Latency", value: "<1.2s" },
    ],
  },
  {
    id: "pulse-health",
    title: "Pulse Health OS",
    category: "Mobile Apps",
    subtitle: "AI-Powered Wearable Diagnostics & Patient Monitoring App",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    impact: "1.2M Downloads",
    client: "PulseMed Group",
    year: "2026",
    tags: ["React Native", "AI Diagnostics", "CoreML", "Node.js"],
    description:
      "Next-generation telehealth companion connecting biometric sensors to predictive machine learning algorithms for early cardiac and sleep anomaly detection.",
    deliverables: [
      "Cross-platform iOS/Android native telemetry pipeline",
      "HIPAA-compliant encrypted data syncing",
      "Interactive health score visualizer and doctor export PDF generator",
    ],
    metrics: [
      { label: "App Store Rating", value: "4.9 ★" },
      { label: "Early Risk Detection", value: "94.2%" },
      { label: "Daily Active Users", value: "450,000" },
    ],
  },
  {
    id: "apex-cloud",
    title: "Apex Cloud Orchestrator",
    category: "AI & LLMs",
    subtitle: "Autonomous DevOps & Infrastructure Optimization Control Center",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    impact: "-45% Cloud Spend",
    client: "Apex Enterprise",
    year: "2025",
    tags: ["Kubernetes", "React", "GraphQL", "TailwindCSS"],
    description:
      "Autonomous cloud server orchestration platform using machine learning to dynamically scale cluster nodes and predict infrastructure bottlenecks before downtime.",
    deliverables: [
      "Real-time microservices architecture node map",
      "AI incident prevention auto-remediation triggers",
      "Multi-cloud telemetry dashboard (AWS, GCP, Azure)",
    ],
    metrics: [
      { label: "Average Cost Reduction", value: "45%" },
      { label: "System Downtime Prevented", value: "99.99%" },
      { label: "Cluster Scale Time", value: "1.8 sec" },
    ],
  },
  {
    id: "zenith-motion",
    title: "Zenith Spatial Studio",
    category: "Spatial & Web",
    subtitle: "Interactive Architectural Design Visualizer & AR Playground",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    impact: "Best UI Award 2025",
    client: "Zenith Studio",
    year: "2025",
    tags: ["WebXR", "Three.js", "React", "Vite"],
    description:
      "Architectural walkthrough experience enabling real-time daylight simulation, material swaps, and collaborative spatial design reviews inside web browsers.",
    deliverables: [
      "Photorealistic real-time lighting engine",
      "Multi-user multiplayer cursor and voice room",
      "Instant CAD file import pipeline",
    ],
    metrics: [
      { label: "Architect Adoption", value: "12,000+" },
      { label: "Client Satisfaction", value: "99.1%" },
      { label: "Render Overhead", value: "3x Faster" },
    ],
  },
];

export default function Portfolio({ onSelectEstimate }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedToast, setCopiedToast] = useState(false);
  const [simulatingPreview, setSimulatingPreview] = useState(false);

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryCount = (cat) => {
    if (cat === "All") return projects.length;
    return projects.filter((p) => p.category === cat).length;
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2500);
  };

  const handleRequestSimilar = (proj) => {
    const estimateObj = {
      projectType: proj.category,
      estimatedBudget: "$25,000 – $50,000",
      estimatedWeeks: "4-6 Weeks",
    };
    setSelectedProject(null);
    if (onSelectEstimate) {
      onSelectEstimate(estimateObj);
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="ambient-glow-1 opacity-60" />

      <div className="relative max-w-7xl mx-auto z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Products We’ve Built For <br />
              <span className="gradient-text-cyan">Industry Pioneers.</span>
            </h2>
          </div>

          {/* Real-time Project Search Bar */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects by tech (e.g. React, LLM, WebGPU)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#0f172a]/90 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition shadow-xl"
            />
          </div>
        </div>

        {/* Category Filter Pills with Count Badges */}
        <div className="flex flex-wrap gap-2.5 pb-2 border-b border-white/10">
          {categories.map((category) => {
            const count = getCategoryCount(category);
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                    activeCategory === category
                      ? "bg-white/20 text-white"
                      : "bg-white/10 text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group relative rounded-3xl glass-card overflow-hidden cursor-pointer flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
                >
                  {/* Thumbnail Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-[#0d1424]/30 to-transparent" />

                    {/* Metric Impact Tag */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b0f19]/90 backdrop-blur-md border border-white/15 text-emerald-400 text-xs font-bold shadow-md">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{project.impact}</span>
                    </div>

                    <div className="absolute top-4 right-4 p-2 rounded-full bg-[#0b0f19]/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-cyan-400 font-mono">
                        <span>{project.category}</span>
                        <span>{project.year}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors font-heading">
                        {project.title}
                      </h3>

                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                      {project.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty Search Results State */
          <div className="text-center py-16 p-8 rounded-3xl bg-slate-900/60 border border-white/10 space-y-4 max-w-md mx-auto">
            <Layers className="w-10 h-10 text-slate-500 mx-auto" />
            <h4 className="text-lg font-bold text-white font-heading">
              No matching projects found
            </h4>
            <p className="text-xs text-slate-400">
              Try searching for terms like "React", "LLM", or reset your search filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-bold text-xs hover:bg-cyan-400 transition"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Interactive Case Study Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-4xl bg-[#0f172a] border border-white/15 rounded-3xl overflow-hidden shadow-2xl space-y-0"
              >
                {/* Header Image Banner */}
                <div className="relative h-72 sm:h-96 w-full">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent" />

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-3 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Title Info */}
                  <div className="absolute bottom-6 left-6 right-6 space-y-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
                      {selectedProject.client} • Case Study
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                      {selectedProject.title}
                    </h2>
                    <p className="text-sm text-slate-300">{selectedProject.subtitle}</p>
                  </div>
                </div>

                {/* Modal Content Body */}
                <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                    {selectedProject.metrics.map((m, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-heading">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-slate-400 font-medium">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Live Sandbox Simulation Toggle */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider font-heading">
                        Interactive Live Preview Simulation
                      </h4>
                      <button
                        onClick={() => setSimulatingPreview(!simulatingPreview)}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold hover:bg-cyan-500/20 transition"
                      >
                        <Play className="w-3.5 h-3.5 fill-cyan-400" />
                        <span>{simulatingPreview ? "Hide Preview" : "Launch Interactive Demo"}</span>
                      </button>
                    </div>

                    {simulatingPreview && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-6 rounded-2xl bg-[#080d1a] border border-cyan-500/30 space-y-4 text-center font-mono"
                      >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span>Simulated Sandbox Environment Running</span>
                        </div>
                        <p className="text-xs text-slate-300 max-w-md mx-auto">
                          [{selectedProject.title}] v2.4 initialized. All vector embeddings loaded into memory latency test.
                        </p>
                        <div className="p-3 bg-slate-900 rounded-xl text-cyan-300 text-[11px] text-left">
                          &gt; GET /api/v2/metrics: 200 OK (14ms)<br />
                          &gt; WebGL Shaders compiled: 60 FPS target locked
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Overview */}
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider font-heading">
                      Executive Overview
                    </h4>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider font-heading">
                      Engineering &amp; Design Highlights
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedProject.deliverables.map((d, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <button
                      onClick={handleCopyLink}
                      className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition"
                    >
                      {copiedToast ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">Copied Share Link!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Case Study Link</span>
                        </>
                      )}
                    </button>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="px-5 py-2.5 rounded-xl bg-white/10 text-slate-200 text-xs font-semibold hover:bg-white/15 transition"
                      >
                        Close
                      </button>
                      <button
                        onClick={() => handleRequestSimilar(selectedProject)}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-bold shadow-lg hover:scale-105 transition"
                      >
                        <span>Request Similar Project</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
