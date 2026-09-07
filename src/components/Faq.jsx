import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Search } from "lucide-react";

const faqData = [
  {
    category: "Process & Sprint",
    question: "How fast can Elementum launch our product?",
    answer:
      "Our standard studio sprints deliver production-ready v1 platforms in 4 to 6 weeks. For urgent market windows, our Rapid Sprint team can accelerate delivery to 2-3 weeks.",
  },
  {
    category: "AI & Tech Stack",
    question: "Do we retain full ownership of all source code and IP?",
    answer:
      "Yes, 100%. Upon final project sign-off, full intellectual property rights, repository access, design tokens, and cloud deployment pipelines are transferred directly to your organization.",
  },
  {
    category: "Pricing & IP",
    question: "How are project estimates structured?",
    answer:
      "We operate primarily on transparent fixed-scope milestone billing. You know the exact deliverables, timeline, and cost before code writing begins — zero surprise fees.",
  },
  {
    category: "AI & Tech Stack",
    question: "Can you integrate AI agents into our existing codebase?",
    answer:
      "Absolutely. We frequently integrate RAG vector search engines, OpenAI/Claude APIs, and fine-tuned LLM microservices into existing React, Node, Python, or legacy backends without disrupting uptime.",
  },
  {
    category: "Process & Sprint",
    question: "What happens after product launch?",
    answer:
      "Every project includes 30 days of post-launch hypercare monitoring, telemetry tuning, and bug fixes. We also offer ongoing monthly SLA maintenance and continuous AI feature expansion plans.",
  },
];

export default function Faq() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="ambient-glow-2 opacity-30" />

      <div className="relative max-w-4xl mx-auto z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Everything You Need To Know <br />
            <span className="gradient-text-cyan">About Working With Us.</span>
          </h2>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search questions (e.g. IP ownership, timeline, AI)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900/80 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition shadow-xl"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-3xl glass-card border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                      {faq.category}
                    </span>
                    <h4 className="text-lg font-bold text-white font-heading">
                      {faq.question}
                    </h4>
                  </div>
                  <div
                    className={`p-2 rounded-full bg-white/5 text-slate-300 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-cyan-400 bg-cyan-500/10" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
