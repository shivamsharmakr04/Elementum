import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Menu,
  X,
  ChevronRight,
  Calculator,
  Palette,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "Studio", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

const colorThemes = [
  { id: "cyan", name: "Cyan Spark", color: "bg-cyan-500", text: "text-cyan-400" },
  { id: "violet", name: "Cyber Violet", color: "bg-purple-500", text: "text-purple-400" },
  { id: "emerald", name: "Emerald Pulse", color: "bg-emerald-500", text: "text-emerald-400" },
  { id: "rose", name: "Sunset Rose", color: "bg-rose-500", text: "text-rose-400" },
];

export default function Navbar({ onOpenEstimator, activeTheme, setActiveTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showThemePicker, setShowThemePicker] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0f19]/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl shadow-cyan-950/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 p-[1px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white font-heading">
                ELEMENTUM<span className="text-cyan-400">.</span>
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-slate-400 font-mono">
                AI & Digital Studio
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-5 py-2 backdrop-blur-md">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Action Controls & CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Picker Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowThemePicker(!showThemePicker)}
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                title="Change Accent Theme"
              >
                <Palette className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {showThemePicker && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-3 w-48 p-2 rounded-2xl bg-[#131b2e] border border-white/10 shadow-2xl z-50"
                  >
                    <div className="text-[11px] font-semibold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                      Accent Theme
                    </div>
                    {colorThemes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          setActiveTheme(t.id);
                          setShowThemePicker(false);
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-xl transition-colors ${
                          activeTheme === t.id
                            ? "bg-white/10 text-white"
                            : "text-slate-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span className={`w-3 h-3 rounded-full ${t.color}`} />
                        {t.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Scope Estimator Button */}
            <button
              onClick={onOpenEstimator}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-all hover:scale-[1.02]"
            >
              <Calculator className="w-3.5 h-3.5 text-cyan-400" />
              <span>Cost Calculator</span>
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all hover:scale-[1.03] active:scale-95"
            >
              <span>Get In Touch</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenEstimator}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-cyan-400"
            >
              <Calculator className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0b0f19]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                  Navigation
                </span>
                <div className="flex gap-2">
                  {colorThemes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setActiveTheme(t.id)}
                      className={`w-5 h-5 rounded-full ${t.color} ${
                        activeTheme === t.id ? "ring-2 ring-white" : "opacity-60"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-white/10 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEstimator();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-slate-200"
                >
                  <Calculator className="w-4 h-4 text-cyan-400" />
                  <span>Interactive Cost Estimator</span>
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-sm font-bold text-white shadow-lg"
                >
                  <span>Start a Project</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}