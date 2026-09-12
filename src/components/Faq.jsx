import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  ChevronDown,
  Search,
  MessageSquare,
  ArrowRight,
  Maximize2,
  Minimize2,
} from "lucide-react";

const faqCategories = ["All", "Process & Sprint", "Pricing & IP", "AI & Tech Stack"];

const faqData = [
  {
    category: "Process & Sprint",
    question: "How fast can Elementum launch our product?",
    answer:
      "Our standard studio sprints deliver production-ready v1 platforms in 4 to 6 weeks. For urgent market windows, our Rapid Sprint team can accelerate delivery to 2-3 weeks with dedicated sprint engineers.",
  },
  {
    category: "Pricing & IP",
    question: "Do we retain full ownership of all source code and IP?",
    answer:
      "Yes, 100%. Upon final milestone sign-off, full intellectual property rights, GitHub repository access, Figma design tokens, and cloud deployment pipelines are transferred directly to your organization.",
  },
  {
    category: "Pricing & IP",
    question: "How are project estimates structured?",
    answer:
      "We operate primarily on transparent fixed-scope milestone billing. You know the exact deliverables, sprint timeline, and cost before code writing begins — zero hidden fees.",
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
  {
    category: "AI & Tech Stack",
    question: "Which web frameworks and databases do you recommend?",
    answer:
      "We build primarily with React 19, Vite, Tailwind CSS v4, Node.js/FastAPI, PostgreSQL, and Pinecone/Qdrant vector databases for sub-50ms query response times.",
  },
];

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndexes, setOpenIndexes] = useState([0]); // First item open by default

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCat = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleIndex = (idx) => {
    if (openIndexes.includes(idx)) {
      setOpenIndexes(openIndexes.filter((i) => i !== idx));
    } else {
      setOpenIndexes([...openIndexes, idx]);
    }
  };

  const handleExpandAll = () => {
    if (openIndexes.length === filteredFaqs.length) {
      setOpenIndexes([]);
    } else {
      setOpenIndexes(filteredFaqs.map((_, i) => i));
    }
  };

  return (
    <section id="faq" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="ambient-glow-2 opacity-30" />

      <div className="relative max-w-4xl mx-auto z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-theme text-xs font-semibold uppercase tracking-wider font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight font-heading">
            Everything You Need To Know <br />
            <span className="gradient-text-theme">About Working With Us.</span>
          </h2>
        </div>

        {/* Search & Filter Controls */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-grow w-full">
              <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search questions (e.g. IP ownership, timeline, AI)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#0a0f1d]/90 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[var(--accent-color)] transition shadow-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-3.5 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Expand / Collapse All Toggle Button */}
            <button
              onClick={handleExpandAll}
              className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-semibold text-slate-300 shrink-0 transition shadow-md"
            >
              {openIndexes.length === filteredFaqs.length ? (
                <>
                  <Minimize2 className="w-4 h-4 text-[var(--accent-light)]" />
                  <span>Collapse All</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-4 h-4 text-[var(--accent-light)]" />
                  <span>Expand All</span>
                </>
              )}
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition ${
                  activeCategory === cat
                    ? "btn-theme-primary font-bold shadow-md"
                    : "bg-white/5 border border-white/10 text-slate-300 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndexes.includes(idx);
              return (
                <div
                  key={idx}
                  className={`rounded-3xl glass-card border transition-all ${
                    isOpen ? "border-[var(--accent-border)] bg-[#0d1424]/90 shadow-xl" : "border-white/10"
                  }`}
                >
                  <button
                    onClick={() => toggleIndex(idx)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="space-y-1 pr-4">
                      <span className="text-[10px] font-mono text-[var(--accent-light)] uppercase tracking-wider font-semibold">
                        {faq.category}
                      </span>
                      <h4 className="text-lg font-bold text-white font-heading">
                        {faq.question}
                      </h4>
                    </div>
                    <div
                      className={`p-2 rounded-full bg-white/5 text-slate-300 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-[var(--accent-light)] badge-theme" : ""
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
        ) : (
          /* Empty Search State */
          <div className="text-center py-12 p-6 rounded-3xl glass-panel space-y-3 shadow-xl">
            <HelpCircle className="w-8 h-8 text-slate-500 mx-auto" />
            <h4 className="text-base font-bold text-white font-heading">
              No matching questions found
            </h4>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="btn-theme-primary px-4 py-2 rounded-xl text-white font-bold text-xs shadow-md"
            >
              Reset FAQ Search
            </button>
          </div>
        )}

        {/* Custom Question CTA Box */}
        <div className="p-8 rounded-3xl glass-panel border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl badge-theme flex items-center justify-center text-[var(--accent-light)] shrink-0 shadow-md">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-heading">
                Have a unique requirement or custom question?
              </h4>
              <p className="text-xs text-slate-300">
                Our studio engineering lead will answer your technical questions within 12 hours.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="btn-theme-primary flex items-center gap-2 px-6 py-3 rounded-2xl text-white font-bold text-xs shrink-0 shadow-lg"
          >
            <span>Ask Studio Lead</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
