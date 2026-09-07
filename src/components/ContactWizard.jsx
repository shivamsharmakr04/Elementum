import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Mail,
  User,
  Building,
  FileText,
  DollarSign,
  Clock,
  ShieldCheck,
} from "lucide-react";
import confetti from "canvas-confetti";

const serviceOptions = [
  "AI & LLM Integration",
  "High-Performance Web App",
  "Spatial 3D & WebGPU",
  "Mobile App (iOS/Android)",
  "Design System & Branding",
  "DevOps & Cloud Scale",
];

const budgetRanges = [
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
];

const timelineOptions = [
  "ASAP (Rapid Sprint)",
  "Within 1 Month",
  "Within 3 Months",
  "Exploring Options",
];

export default function ContactWizard({ prefilledEstimate }) {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([
    "AI & LLM Integration",
    "High-Performance Web App",
  ]);
  const [selectedBudget, setSelectedBudget] = useState(budgetRanges[1]);
  const [selectedTimeline, setSelectedTimeline] = useState(timelineOptions[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Sync prefilled estimate if provided from cost calculator
  useEffect(() => {
    if (prefilledEstimate) {
      if (prefilledEstimate.projectType) {
        setSelectedServices([prefilledEstimate.projectType]);
      }
      if (prefilledEstimate.estimatedBudget) {
        setSelectedBudget(prefilledEstimate.estimatedBudget);
      }
    }
  }, [prefilledEstimate]);

  const toggleService = (srv) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Fire celebratory confetti!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="ambient-glow-1 opacity-50" />

      <div className="relative max-w-5xl mx-auto z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Interactive Project Configurator</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready To Build Something <br />
            <span className="gradient-text-cyan">Extraordinary Together?</span>
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Configure your project parameters below. Our studio team responds within 12 hours with a detailed scope proposal.
          </p>
        </div>

        {/* Multi-step Form Container */}
        <div className="relative rounded-3xl glass-card border border-white/15 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-8">
          
          {!submitted ? (
            <>
              {/* Wizard Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>Step 0{step} of 03</span>
                  <span className="text-cyan-400 font-semibold">
                    {step === 1 && "Select Services"}
                    {step === 2 && "Scope & Budget"}
                    {step === 3 && "Contact Details"}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500"
                    animate={{ width: `${(step / 3) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Wizard Step Content */}
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-white font-heading">
                        Which capabilities do you need?
                      </h3>
                      <p className="text-xs text-slate-400">
                        Select all services relevant to your vision.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {serviceOptions.map((service) => {
                        const isSelected = selectedServices.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className={`flex items-center justify-between p-4 rounded-2xl border text-xs text-left transition-all ${
                              isSelected
                                ? "bg-cyan-500/15 border-cyan-500 text-white font-semibold shadow-lg shadow-cyan-950/40"
                                : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                            }`}
                          >
                            <span>{service}</span>
                            {isSelected && <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 ml-2" />}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    {/* Budget Selection */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white font-heading">
                        Estimated Budget Range
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {budgetRanges.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setSelectedBudget(b)}
                            className={`p-4 rounded-2xl border text-xs font-semibold text-center transition-all ${
                              selectedBudget === b
                                ? "bg-purple-500/20 border-purple-500 text-white shadow-lg"
                                : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Timeline Selection */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white font-heading">
                        Desired Launch Timeline
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {timelineOptions.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSelectedTimeline(t)}
                            className={`p-4 rounded-2xl border text-xs font-semibold text-center transition-all ${
                              selectedTimeline === t
                                ? "bg-emerald-500/20 border-emerald-500 text-white shadow-lg"
                                : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-white font-heading">
                        Your Contact Information
                      </h3>
                      <p className="text-xs text-slate-400">
                        Where should we send your custom project scope proposal?
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5 text-cyan-400" /> Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Sarah Jenkins"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5 text-cyan-400" /> Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="sarah@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                          <Building className="w-3.5 h-3.5 text-cyan-400" /> Organization / Company Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Synthetix Inc."
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-cyan-400" /> Project Brief Overview
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about your product goals, target audience, or specific tech requirements..."
                          value={formData.details}
                          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:scale-[1.01] transition"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Project Inquiry</span>
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Actions */}
              {step < 3 && (
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={step === 1}
                    className={`flex items-center gap-2 text-xs font-semibold transition ${
                      step === 1
                        ? "opacity-30 cursor-not-allowed text-slate-500"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-black font-bold text-xs hover:bg-cyan-400 transition"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Submission Confirmation Card */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-6"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center text-cyan-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-extrabold text-white font-heading">
                  Inquiry Submitted Successfully!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <span className="text-cyan-400 font-semibold">{formData.name || "Partner"}</span>. Our lead studio architect is reviewing your configuration and will follow up at <span className="text-cyan-400 font-semibold">{formData.email || "your email"}</span> within 12 hours.
                </p>
              </div>

              {/* Summary Pill */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto text-left text-xs space-y-2 font-mono text-slate-300">
                <div>Selected Services: <span className="text-white">{selectedServices.join(", ")}</span></div>
                <div>Budget Range: <span className="text-purple-300">{selectedBudget}</span></div>
                <div>Launch Speed: <span className="text-emerald-400">{selectedTimeline}</span></div>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                }}
                className="px-6 py-2.5 rounded-xl bg-white/10 text-xs font-semibold text-white hover:bg-white/20 transition"
              >
                Submit Another Request
              </button>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
