import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Shield,
  Zap,
  Target,
  Sparkles,
  Cpu,
  Layers,
  Award,
} from "lucide-react";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const principles = [
  {
    icon: Target,
    title: "Uncompromising Precision",
    description: "Every pixel, animation frame, and API endpoint is micro-tuned for high-velocity user response.",
  },
  {
    icon: Cpu,
    title: "AI-Native Thinking",
    description: "We don't just add AI as a gimmick — we architect LLM & vector workflows into the core application state.",
  },
  {
    icon: Zap,
    title: "Sub-Second Latency",
    description: "Speed is a core feature. We optimize bundle size, network waterfalls, and database index strategies.",
  },
  {
    icon: Shield,
    title: "Enterprise Grade Security",
    description: "Built-in SOC2 compliance standards, encrypted data tunnels, and robust authentication layers.",
  },
];

const techStack = [
  { name: "React 19", category: "Frameworks", icon: "⚛️" },
  { name: "TypeScript", category: "Languages", icon: "📘" },
  { name: "Python / PyTorch", category: "AI & Cloud", icon: "🐍" },
  { name: "Tailwind CSS v4", category: "Frameworks", icon: "🎨" },
  { name: "Vite 8", category: "Frameworks", icon: "⚡" },
  { name: "OpenAI / Claude API", category: "AI & Cloud", icon: "🤖" },
  { name: "Three.js / WebGPU", category: "Frameworks", icon: "📐" },
  { name: "PostgreSQL & Pinecone", category: "AI & Cloud", icon: "🗄️" },
  { name: "Figma Tokens", category: "Design Tools", icon: "❖" },
  { name: "Framer Motion", category: "Frameworks", icon: "✨" },
  { name: "Docker & K8s", category: "AI & Cloud", icon: "🐳" },
  { name: "GraphQL & REST", category: "Languages", icon: "🌐" },
];

const teamMembers = [
  {
    name: "Alex Vance",
    role: "Founder & Lead Architect",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    bio: "Ex-Google Principal Engineer with 12+ years building spatial UI & AI systems.",
  },
  {
    name: "Elena Rostova",
    role: "Head of Product Design",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    bio: "Award-winning designer specializing in high-density data dashboards and spatial UX.",
  },
  {
    name: "Marcus Sterling",
    role: "Principal AI Scientist",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "PhD in Machine Learning. Author of scalable agentic vector retrieval systems.",
  },
  {
    name: "Maya Lin",
    role: "Senior Full-Stack Engineer",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "React 19 & WebGPU contributor focused on 60fps browser rendering.",
  },
];

export default function About() {
  const [techCategory, setTechCategory] = useState("All");

  const filteredTech =
    techCategory === "All"
      ? techStack
      : techStack.filter((t) => t.category === techCategory);

  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Glow */}
      <div className="ambient-glow-1 opacity-40" />

      <div className="relative max-w-7xl mx-auto z-10 space-y-24">
        
        {/* Header & Story */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-theme text-xs font-semibold uppercase tracking-wider font-mono">
              <Compass className="w-3.5 h-3.5" />
              <span>Inside Elementum Studio</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight font-heading">
              We Believe Progress Happens <br />
              <span className="gradient-text-theme">When You Refuse To Play Safe.</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Elementum was founded on a singular conviction: the next decade of software belongs to teams that fuse deep AI capability with uncompromising artistic craft.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              We aren't a traditional agency billing hours for static templates. We function as your embedded elite product laboratory — shipping production-ready web apps, spatial 3D interfaces, and autonomous AI agents in weeks.
            </p>

            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-white/10 text-center">
              <div>
                <div className="text-3xl font-black text-white font-heading">5+</div>
                <div className="text-[11px] text-slate-400">Years Studio Experience</div>
              </div>
              <div>
                <div className="text-3xl font-black text-[var(--accent-light)] font-heading">150+</div>
                <div className="text-[11px] text-slate-400">Global Deployments</div>
              </div>
              <div>
                <div className="text-3xl font-black text-purple-400 font-heading">12</div>
                <div className="text-[11px] text-slate-400">Design &amp; Code Awards</div>
              </div>
            </div>
          </div>

          {/* Core Principles Grid Right Column */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl glass-card border border-white/10 space-y-3 hover:border-[var(--accent-border)] transition-all"
                >
                  <div className="w-10 h-10 rounded-xl badge-theme flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5 text-[var(--accent-light)]" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-heading">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Studio Tech Stack Matrix */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel space-y-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white font-heading">
                Our Technology Stack
              </h3>
              <p className="text-xs text-slate-400">
                Battle-tested tools and frameworks powering our client platforms.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {["All", "Frameworks", "AI & Cloud", "Languages", "Design Tools"].map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => setTechCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${
                      techCategory === cat
                        ? "btn-theme-primary shadow-md font-bold text-white"
                        : "bg-white/5 text-slate-300 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {filteredTech.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--accent-border)] transition cursor-default shadow-sm"
              >
                <span className="text-xl">{tech.icon}</span>
                <div>
                  <div className="text-xs font-bold text-white">{tech.name}</div>
                  <div className="text-[10px] text-slate-400 font-mono">{tech.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Spotlights */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="text-3xl font-black text-white font-heading">
              Meet The Thinkers &amp; Doers
            </h3>
            <p className="text-xs text-slate-300">
              Cross-functional architects, designers, and engineers dedicated to your product success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-3xl glass-card-interactive border border-white/10 space-y-4 text-center hover:border-[var(--accent-border)] transition-all"
              >
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-[var(--accent-border)] group-hover:scale-105 transition-transform shadow-lg">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white font-heading">
                    {member.name}
                  </h4>
                  <p className="text-xs text-[var(--accent-light)] font-mono font-semibold">{member.role}</p>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}