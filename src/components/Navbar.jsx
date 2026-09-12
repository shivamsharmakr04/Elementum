import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Menu,
  X,
  ChevronRight,
  Calculator,
  Palette,
  Check,
  Zap,
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
  { id: "cyan", name: "Cyan Spark", color: "bg-cyan-500", border: "border-cyan-400", text: "text-cyan-400" },
  { id: "violet", name: "Cyber Violet", color: "bg-purple-500", border: "border-purple-400", text: "text-purple-400" },
  { id: "emerald", name: "Emerald Pulse", color: "bg-emerald-500", border: "border-emerald-400", text: "text-emerald-400" },
  { id: "rose", name: "Sunset Rose", color: "bg-rose-500", border: "border-rose-400", text: "text-rose-400" },
  { id: "gold", name: "Titanium Gold", color: "bg-amber-400", border: "border-amber-300", text: "text-amber-400" },
];

export default function Navbar({ onOpenEstimator, activeTheme, setActiveTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showThemePicker, setShowThemePicker] = useState(false);
  const [themeToast, setThemeToast] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelectTheme = (t) => {
    setActiveTheme(t.id);
    setShowThemePicker(false);
    setThemeToast(`Accent Palette: ${t.name}`);
    setTimeout(() => setThemeToast(null), 3000);
  };

  const activeThemeObj = colorThemes.find((t) => t.id === activeTheme) || colorThemes[0];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050811]/90 backdrop-blur-2xl border-b border-white/10 py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl badge-theme p-[1px] transition-transform duration-300 group-hover:scale-105 flex items-center justify-center shadow-lg">
              <div className="w-full h-full bg-[#070b14] rounded-[11px] flex items-center justify-center">
                <Sparkles className={`w-5 h-5 ${activeThemeObj.text} group-hover:rotate-12 transition-transform`} />
              </div>
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white font-heading">
                ELEMENTUM<span className={activeThemeObj.text}>.</span>
              </span>
              <span className="block text-[9.5px] uppercase tracking-widest text-slate-400 font-mono">
                AI &amp; Digital Studio
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-5 py-1.5 backdrop-blur-xl shadow-inner">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Action Controls & Color Theme Switcher */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Color Theme Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowThemePicker(!showThemePicker)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all text-xs font-semibold shadow-md"
                title="Select Color Palette Theme"
              >
                <div className={`w-3.5 h-3.5 rounded-full ${activeThemeObj.color} shadow-sm`} />
                <span className="hidden lg:inline">{activeThemeObj.name}</span>
                <Palette className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <AnimatePresence>
                {showThemePicker && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="absolute right-0 mt-3 w-56 p-2.5 rounded-2xl bg-[#0a0f1d] border border-white/15 shadow-2xl z-50 space-y-1 backdrop-blur-2xl"
                  >
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5 font-mono flex items-center justify-between border-b border-white/10 mb-1">
                      <span>Studio Palette</span>
                      <Zap className="w-3 h-3 text-amber-400" />
                    </div>
                    {colorThemes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => handleSelectTheme(t)}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-xl transition-all ${
                          activeTheme === t.id
                            ? "bg-white/15 text-white font-bold"
                            : "text-slate-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={`w-3.5 h-3.5 rounded-full ${t.color} shadow-sm`} />
                          <span>{t.name}</span>
                        </div>
                        {activeTheme === t.id && (
                          <Check className={`w-4 h-4 ${t.text}`} />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Scope Cost Estimator Button */}
            <button
              onClick={onOpenEstimator}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-all hover:scale-[1.02] active:scale-95 shadow-md"
            >
              <Calculator className={`w-3.5 h-3.5 ${activeThemeObj.text}`} />
              <span>Cost Calculator</span>
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="btn-theme-primary flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold shadow-lg"
            >
              <span>Start Project</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenEstimator}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200"
              title="Cost Calculator"
            >
              <Calculator className={`w-5 h-5 ${activeThemeObj.text}`} />
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

      {/* Theme Switched Toast Feedback */}
      <AnimatePresence>
        {themeToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-20 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#0a0f1d] border badge-theme text-xs font-semibold text-white shadow-2xl backdrop-blur-2xl"
          >
            <Palette className={`w-4 h-4 ${activeThemeObj.text}`} />
            <span>{themeToast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050811]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              
              {/* Color Theme Selector in Mobile Menu */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs uppercase font-bold text-slate-400 font-mono">
                  Accent Palette
                </span>
                <div className="flex gap-2">
                  {colorThemes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => handleSelectTheme(t)}
                      className={`w-6 h-6 rounded-full ${t.color} flex items-center justify-center transition-transform ${
                        activeTheme === t.id ? "ring-2 ring-white scale-110 shadow-md" : "opacity-60"
                      }`}
                    >
                      {activeTheme === t.id && <Check className="w-3 h-3 text-white" />}
                    </button>
                  ))}
                </div>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-semibold text-slate-300 hover:text-white transition-colors"
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
                  <Calculator className={`w-4 h-4 ${activeThemeObj.text}`} />
                  <span>Cost Calculator</span>
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-theme-primary w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white shadow-lg"
                >
                  <span>Start Project Inquiry</span>
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