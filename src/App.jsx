import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import CostEstimator from "./components/CostEstimator";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import ContactWizard from "./components/ContactWizard";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [prefilledEstimate, setPrefilledEstimate] = useState(null);
  const [activeTheme, setActiveTheme] = useState("cyan");

  const handleSelectEstimate = (estimateDetails) => {
    setPrefilledEstimate(estimateDetails);
    // Smooth scroll to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-cyan-500 selection:text-black theme-${activeTheme}`}>
      {/* Glassmorphic Navbar */}
      <Navbar
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        activeTheme={activeTheme}
        setActiveTheme={setActiveTheme}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenEstimator={() => setIsEstimatorOpen(true)} />
        <Portfolio />
        <Services onOpenEstimator={() => setIsEstimatorOpen(true)} />
        <About />
        <Testimonials />
        <ContactWizard prefilledEstimate={prefilledEstimate} />
        <Faq />
      </main>

      {/* Interactive Scope & Cost Estimator Modal */}
      <CostEstimator
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onSelectEstimate={handleSelectEstimate}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;