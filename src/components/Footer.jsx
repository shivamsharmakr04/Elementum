import React, { useState } from "react";
import {
  Sparkles,
  ArrowUp,
  Send,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="relative bg-[#03050c] border-t border-white/10 pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden text-slate-400">
      
      <div className="relative max-w-7xl mx-auto z-10 space-y-16">
        
        {/* Top Newsletter & Live Status Bar */}
        <div className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-center">
          
          <div className="lg:col-span-6 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All Studio Systems Operational • 99.99% Edge Latency</span>
            </div>
            <h3 className="text-2xl font-bold text-white font-heading">
              Subscribe to the Elementum Dispatch
            </h3>
            <p className="text-xs text-slate-400">
              Get monthly insights on AI product architecture, WebGPU spatial UI trends, and studio case studies. Zero spam.
            </p>
          </div>

          <div className="lg:col-span-6">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your executive email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[var(--accent-color)] transition"
                />
                <button
                  type="submit"
                  className="btn-theme-primary px-6 py-3 rounded-2xl text-white font-bold text-xs shrink-0 shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>Thank you! You're subscribed to our monthly dispatch.</span>
              </div>
            )}
          </div>

        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-xs">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg badge-theme flex items-center justify-center shadow-md">
                <Sparkles className="w-4 h-4 text-[var(--accent-light)]" />
              </div>
              <span className="text-lg font-black text-white font-heading tracking-tight">
                ELEMENTUM<span className="text-[var(--accent-light)]">.</span>
              </span>
            </a>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Elementum is an elite AI &amp; Digital Product Studio engineering high-performance web applications, spatial 3D interfaces, and autonomous agent systems.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:text-white hover:bg-white/10 transition">
                <FiTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:text-white hover:bg-white/10 transition">
                <FiGithub className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:text-white hover:bg-white/10 transition">
                <FiLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider font-heading">
              Capabilities
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-[var(--accent-light)] transition">AI Engineering</a></li>
              <li><a href="#services" className="hover:text-[var(--accent-light)] transition">Web Architecture</a></li>
              <li><a href="#services" className="hover:text-[var(--accent-light)] transition">Spatial 3D &amp; WebGPU</a></li>
              <li><a href="#services" className="hover:text-[var(--accent-light)] transition">Design Systems</a></li>
              <li><a href="#services" className="hover:text-[var(--accent-light)] transition">Mobile Ecosystems</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider font-heading">
              Selected Works
            </h4>
            <ul className="space-y-2">
              <li><a href="#portfolio" className="hover:text-[var(--accent-light)] transition">Synthetix AI Copilot</a></li>
              <li><a href="#portfolio" className="hover:text-[var(--accent-light)] transition">Nexus 3D Commerce</a></li>
              <li><a href="#portfolio" className="hover:text-[var(--accent-light)] transition">Aura Vault Protocol</a></li>
              <li><a href="#portfolio" className="hover:text-[var(--accent-light)] transition">Pulse Health OS</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider font-heading">
              Studio
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-[var(--accent-light)] transition">Manifesto &amp; Team</a></li>
              <li><a href="#testimonials" className="hover:text-[var(--accent-light)] transition">Client Case Studies</a></li>
              <li><a href="#faq" className="hover:text-[var(--accent-light)] transition">FAQ &amp; Pricing</a></li>
              <li><a href="#contact" className="hover:text-[var(--accent-light)] transition">Project Calculator</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} Elementum Digital Studio. All rights reserved. Built with React 19 &amp; Tailwind.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Security &amp; SOC2</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition flex items-center gap-1"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}