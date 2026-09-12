import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  X,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Clock,
  DollarSign,
  Monitor,
  Smartphone,
  Globe,
  Layers,
} from "lucide-react";

const projectTypes = [
  { id: "ai", name: "AI & LLM Platform", basePrice: 12000, baseWeeks: 4, team: ["1 Lead AI Architect", "2 Senior React Engineers", "1 UX Designer"] },
  { id: "web", name: "High-Perf Web App", basePrice: 8000, baseWeeks: 3, team: ["1 Lead Full-Stack Engineer", "1 UI/UX Designer"] },
  { id: "spatial", name: "Spatial 3D / WebGPU", basePrice: 14000, baseWeeks: 5, team: ["1 3D Graphics Engineer", "1 React Developer", "1 Spatial Designer"] },
  { id: "mobile", name: "Mobile App (iOS/Android)", basePrice: 10000, baseWeeks: 4, team: ["2 Mobile Engineers", "1 Product Designer"] },
  { id: "design", name: "Design System & Branding", basePrice: 6000, baseWeeks: 2, team: ["2 Lead Product Designers"] },
];

const platformTargets = [
  { id: "web", name: "Web Browser", multiplier: 1.0, icon: Monitor },
  { id: "mobile", name: "Native Mobile", multiplier: 1.15, icon: Smartphone },
  { id: "cross", name: "Cross-Platform", multiplier: 1.3, icon: Globe },
];

const featureAddons = [
  { id: "rag", name: "Custom RAG / AI Vector Search", price: 3500 },
  { id: "auth", name: "Enterprise Auth & Biometrics", price: 1500 },
  { id: "dashboard", name: "Real-time Telemetry Dashboard", price: 2500 },
  { id: "payments", name: "Stripe & Crypto Payment Gateway", price: 2000 },
  { id: "admin", name: "Headless CMS & Admin Portal", price: 2200 },
  { id: "i18n", name: "Multi-language & Globalization", price: 1200 },
];

const timelineSpeed = [
  { id: "rapid", name: "Rapid Sprint (Accelerated)", multiplier: 1.25, label: "25% Priority Boost" },
  { id: "standard", name: "Standard Studio Pace", multiplier: 1.0, label: "Recommended" },
  { id: "relaxed", name: "Flexible Timeline", multiplier: 0.9, label: "Best Value" },
];

export default function CostEstimator({ isOpen, onClose, onSelectEstimate }) {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [selectedPlatform, setSelectedPlatform] = useState(platformTargets[0]);
  const [selectedAddons, setSelectedAddons] = useState(["rag", "dashboard"]);
  const [selectedSpeed, setSelectedSpeed] = useState(timelineSpeed[1]);

  if (!isOpen) return null;

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Dynamic calculations
  const addonsTotal = selectedAddons.reduce((acc, addonId) => {
    const addon = featureAddons.find((a) => a.id === addonId);
    return acc + (addon ? addon.price : 0);
  }, 0);

  const rawPrice = (selectedType.basePrice + addonsTotal) * selectedPlatform.multiplier * selectedSpeed.multiplier;
  const estimatedPriceMin = Math.round(rawPrice * 0.95);
  const estimatedPriceMax = Math.round(rawPrice * 1.15);

  const estimatedWeeks = Math.max(
    2,
    Math.round(selectedType.baseWeeks * (selectedSpeed.id === "rapid" ? 0.75 : 1))
  );

  const handleApplyEstimate = () => {
    const estimateDetails = {
      projectType: `${selectedType.name} (${selectedPlatform.name})`,
      features: selectedAddons.map(
        (id) => featureAddons.find((a) => a.id === id)?.name
      ),
      estimatedBudget: `$${estimatedPriceMin.toLocaleString()} – $${estimatedPriceMax.toLocaleString()}`,
      estimatedWeeks: `${estimatedWeeks} Weeks`,
    };
    onSelectEstimate(estimateDetails);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="relative w-full max-w-3xl bg-[#090d18] border border-white/15 rounded-3xl overflow-hidden shadow-2xl space-y-0"
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#0e1526] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl badge-theme flex items-center justify-center shadow-md">
              <Calculator className="w-5 h-5 text-[var(--accent-light)]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-heading">
                Interactive Scope &amp; Cost Estimator
              </h3>
              <p className="text-xs text-slate-300">
                Customize your project parameters for real-time cost and timeline estimates.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[65vh] overflow-y-auto">
          
          {/* Step 1: Project Category */}
          <div className="space-y-3">
            <label className="text-xs uppercase font-bold text-slate-400 tracking-wider font-heading flex items-center gap-2">
              <Layers className="w-4 h-4 text-[var(--accent-light)]" />
              <span>1. Select Project Category</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type)}
                  className={`p-3.5 rounded-2xl text-left border text-xs transition-all ${
                    selectedType.id === type.id
                      ? "badge-theme font-bold shadow-lg"
                      : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <div className="font-semibold">{type.name}</div>
                  <div className="text-[10px] text-[var(--accent-light)] font-mono mt-1">
                    From ${type.basePrice.toLocaleString()}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Target Platform */}
          <div className="space-y-3">
            <label className="text-xs uppercase font-bold text-slate-400 tracking-wider font-heading flex items-center gap-2">
              <Monitor className="w-4 h-4 text-[var(--accent-light)]" />
              <span>2. Target Deployment Platform</span>
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {platformTargets.map((plat) => {
                const Icon = plat.icon;
                return (
                  <button
                    key={plat.id}
                    onClick={() => setSelectedPlatform(plat)}
                    className={`flex items-center gap-2 p-3 rounded-2xl border text-xs font-semibold transition-all ${
                      selectedPlatform.id === plat.id
                        ? "bg-purple-500/20 border-purple-500 text-white shadow-md font-bold"
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{plat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Feature Modules */}
          <div className="space-y-3">
            <label className="text-xs uppercase font-bold text-slate-400 tracking-wider font-heading flex items-center gap-2">
              <Zap className="w-4 h-4 text-[var(--accent-light)]" />
              <span>3. Add Advanced Feature Modules</span>
            </label>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {featureAddons.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border text-xs text-left transition-all ${
                      isSelected
                        ? "bg-purple-500/15 border-purple-500 text-white font-semibold"
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                          isSelected
                            ? "bg-purple-500 border-purple-400 text-white"
                            : "border-slate-500"
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-3 h-3" />}
                      </div>
                      <span>{addon.name}</span>
                    </div>
                    <span className="text-[11px] font-mono text-purple-300 font-bold">
                      +${addon.price}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4: Velocity */}
          <div className="space-y-3">
            <label className="text-xs uppercase font-bold text-slate-400 tracking-wider font-heading flex items-center gap-2">
              <Clock className="w-4 h-4 text-[var(--accent-light)]" />
              <span>4. Target Launch Velocity</span>
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {timelineSpeed.map((speed) => (
                <button
                  key={speed.id}
                  onClick={() => setSelectedSpeed(speed)}
                  className={`p-3 rounded-2xl border text-center text-xs transition-all ${
                    selectedSpeed.id === speed.id
                      ? "bg-emerald-500/15 border-emerald-500 text-white font-bold"
                      : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <div className="font-semibold">{speed.name}</div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">{speed.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Recommended Team Composition Preview */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
            <div className="text-slate-400 font-mono flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-[var(--accent-light)]" />
              <span>Recommended Studio Team:</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {selectedType.team.map((member, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-[#050811] border border-white/10 text-slate-200 font-mono text-[11px]"
                >
                  {member}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Dynamic Calculation Footer */}
        <div className="p-6 bg-[#050811] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div>
              <div className="text-[11px] text-slate-400 font-mono uppercase tracking-wider">
                Estimated Budget
              </div>
              <div className="text-2xl font-black text-white font-heading gradient-text-theme">
                ${estimatedPriceMin.toLocaleString()} – ${estimatedPriceMax.toLocaleString()}
              </div>
            </div>
            <div className="border-l border-white/10 pl-6 hidden sm:block">
              <div className="text-[11px] text-slate-400 font-mono uppercase tracking-wider">
                Est. Timeline
              </div>
              <div className="text-lg font-bold text-emerald-400 font-heading">
                ~{estimatedWeeks} Weeks
              </div>
            </div>
          </div>

          <button
            onClick={handleApplyEstimate}
            className="w-full sm:w-auto btn-theme-primary flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-white font-bold text-xs shadow-xl"
          >
            <span>Lock Estimate &amp; Apply</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </motion.div>
    </div>
  );
}
