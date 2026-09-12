import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  CheckCircle,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    role: "Chief Product Officer",
    company: "Synthetix Capital",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    metric: "+410% Query Velocity",
    content:
      "Elementum redesigned our entire AI document intelligence platform from scratch in 5 weeks. Their engineering speed and attention to spatial UI design blew our board away.",
    project: "Synthetix AI Copilot",
  },
  {
    id: 2,
    name: "David K. Vance",
    role: "VP of Digital Innovation",
    company: "Nexus Couture",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    metric: "3.2x Mobile Conversions",
    content:
      "The WebGPU 3D product configurator Elementum built for us set a new benchmark in luxury e-commerce. Our conversion rates jumped 220% within the first month of launch.",
    project: "Nexus 3D Web Commerce",
  },
  {
    id: 3,
    name: "Amina Al-Mansoor",
    role: "Co-Founder & CTO",
    company: "Aura Labs",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    metric: "$1.4B TVL Secured",
    content:
      "Security and zero-latency UI were mandatory for our ZK protocol dashboard. Elementum delivered bulletproof code and an intuitive UX that users love.",
    project: "Aura Decentralized Vault",
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIdx];

  return (
    <section id="testimonials" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="ambient-glow-2 opacity-40" />

      <div className="relative max-w-7xl mx-auto z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-theme text-xs font-semibold uppercase tracking-wider font-mono">
            <Quote className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight font-heading">
            Trusted By Visionary Leaders <br />
            <span className="gradient-text-theme">Across Global Markets.</span>
          </h2>
        </div>

        {/* Carousel Showcase Card */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-12 rounded-3xl glass-panel space-y-8 shadow-2xl border border-white/15"
          >
            {/* Top Bar Rating & Metric */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold font-mono">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{current.metric}</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-xl sm:text-2xl font-light text-slate-100 leading-relaxed italic">
              "{current.content}"
            </blockquote>

            {/* Client Info & Video Concept Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4">
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-[var(--accent-border)] shadow-md"
                />
                <div>
                  <div className="text-base font-bold text-white font-heading flex items-center gap-2">
                    <span>{current.name}</span>
                    <CheckCircle className="w-4 h-4 text-[var(--accent-light)]" title="Verified Client" />
                  </div>
                  <div className="text-xs text-slate-400">
                    {current.role} • <span className="text-[var(--accent-light)] font-semibold">{current.company}</span>
                  </div>
                  <div className="text-[11px] text-slate-300 font-mono mt-0.5">
                    Project: {current.project}
                  </div>
                </div>
              </div>

              {/* Video Case Study Button */}
              <button
                onClick={() => setShowVideoModal(true)}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--accent-border)] text-xs font-semibold text-slate-200 transition shadow-md"
              >
                <div className="w-6 h-6 rounded-full btn-theme-primary flex items-center justify-center text-white">
                  <Play className="w-3 h-3 fill-white ml-0.5" />
                </div>
                <span>Watch Story Video</span>
              </button>
            </div>

          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="text-xs font-mono text-slate-400">
              0{activeIdx + 1} / 0{testimonials.length}
            </div>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Modal Simulation */}
        {showVideoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-3xl bg-[#090d18] border border-white/20 rounded-3xl p-6 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-sm font-bold text-white font-heading">
                  Video Case Study: {current.company}
                </span>
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="p-2 rounded-full bg-white/10 text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player Placeholder */}
              <div className="relative aspect-video rounded-2xl bg-[#050811] border border-white/10 flex flex-col items-center justify-center space-y-3 overflow-hidden">
                <div className="w-16 h-16 rounded-full btn-theme-primary flex items-center justify-center text-white shadow-xl animate-pulse">
                  <Play className="w-8 h-8 fill-white ml-1" />
                </div>
                <div className="text-xs font-mono text-[var(--accent-light)] font-bold">
                  Simulated HD Case Study Interview Playback
                </div>
                <div className="text-[11px] text-slate-400 text-center max-w-sm">
                  "Elementum transformed our product trajectory and helped us raise our Series B."
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}