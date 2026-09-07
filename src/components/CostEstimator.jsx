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
} from "lucide-react";

const projectTypes = [
  { id: "ai", name: "AI & LLM Platform", basePrice: 12000, baseWeeks: 4 },
  { id: "web", name: "High-Perf Web App", basePrice: 8000, baseWeeks: 3 },
  { id: "spatial", name: "Spatial 3D / WebGPU", basePrice: 14000, baseWeeks: 5 },
  { id: "mobile", name: "Mobile App (iOS/Android)", basePrice: 10000, baseWeeks: 4 },
  { id: "design", name: "Design System & Branding", basePrice: 6000, baseWeeks: 2 },
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
  { id: "rapid", name: "Rapid Sprint (Priority)", multiplier: 1.25, label: "25% Acceleration" },
  { id: "standard", name: "Standard Studio Pace", multiplier: 1.0, label: "Recommended" },
  { id: "relaxed", name: "Flexible Timeline", multiplier: 0.9, label: "Best Value" },
];

export default function CostEstimator({ isOpen, onClose, onSelectEstimate }) {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
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

  // Calculate dynamic totals
  const addonsTotal = selectedAddons.reduce((acc, addonId) => {
    const addon = featureAddons.find((a) => a.id === addonId);
    return acc + (addon ? addon.price : 0);
  }, 0);

  const rawPrice = (selectedType.basePrice + addonsTotal) * selectedSpeed.multiplier;
  const estimatedPriceMin = Math.round(rawPrice * 0.95);
  const estimatedPriceMax = Math.round(rawPrice * 1.15);

  const estimatedWeeks = Math.max(
    2,
    Math.round(selectedType.baseWeeks * (selectedSpeed.id === "rapid" ? 0.75 : 1))
  );

  const handleProceedWithEstimate = () => {
    const estimateDetails = {
      projectType: selectedType.name,
      features: selectedAddons.map(
        (id) => featureAddons.find((a) => a.id === id)?.name
      ),
      estimatedBudget: `$${estimatedPriceMin.toLocaleString()} - $${estimatedPriceMax.toLocaleString()}`,
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
        className="relative w-full max-w-3xl bg-[#0f172a] border border-white/15 rounded-3xl overflow-hidden shadow-2xl space-y-0"
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#131d33] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-heading">
                Interactive Scope &amp; Cost Estimator
              </h3>
              <p className="text-xs text-slate-300">
                Configure your project requirements for a real-time budget breakdown.
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

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[65vh] overflow-y-auto">
          
          {/* Step 1: Project Type */}
          <div className="space-y-3">
            <label className="text-xs uppercase font-bold text-slate-400 tracking-wider font-heading">
              1. Select Primary Project Category
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type)}
                  className={`p-3.5 rounded-2xl text-left border text-xs transition-all ${
                    selectedType.id === type.id
                      ? "bg-cyan-500/15 border-cyan-500 text-white font-bold shadow-lg shadow-cyan-950/40"
                      : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <div className="font-semibold">{type.name}</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-1">
                    From ${type.basePrice.toLocaleString()}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Feature Addons */}
          <div className="space-y-3">
            <label className="text-xs uppercase font-bold text-slate-400 tracking-wider font-heading">
              2. Add Advanced Modules &amp; Integrations
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
                        ? "bg-purple-500/15 border-purple-500 text-white font-medium"
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected
                            ? "bg-purple-500 border-purple-400 text-white"
                            : "border-slate-500"
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-3 h-3" />}
                      </div>
                      <span>{addon.name}</span>
                    </div>
                    <span className="text-[11px] font-mono text-purple-300">
                      +${addon.price}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Speed & Acceleration */}
          <div className="space-y-3">
            <label className="text-xs uppercase font-bold text-slate-400 tracking-wider font-heading">
              3. Desired Launch Velocity
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

        </div>

        {/* Calculation Summary Bar Footer */}
        <div className="p-6 bg-[#090d16] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div>
              <div className="text-[11px] text-slate-400 font-mono uppercase tracking-wider">
                Estimated Scope Range
              </div>
              <div className="text-2xl font-extrabold text-white font-heading gradient-text-cyan">
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
            onClick={handleProceedWithEstimate}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white font-bold text-xs shadow-xl hover:scale-105 transition"
          >
            <span>Lock Estimate &amp; Apply</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </motion.div>
    </div>
  );
}
