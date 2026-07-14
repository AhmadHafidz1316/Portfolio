/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Terminal, Heart, Code2 } from "lucide-react";

import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import FloatingBlobs from "./components/animations/FloatingBlobs";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll handler to target section
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  // Set active nav items on manual scroll
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "experience", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -45% 0px", // Trigger when the item is close to center view
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-neutral-950 text-white font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
      
      {/* Background Animated Floating Blobs */}
      <FloatingBlobs />

      {/* Persistence Glassmorphic Header Capsule Navigation */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Sections Content container */}
      <main id="main-content">
        <Hero onNavigate={scrollToSection} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Elegant Modern Portfolio Footer */}
      <footer className="relative bg-neutral-950 border-t border-neutral-900/80 py-12 overflow-hidden z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#10b98108,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-neutral-900 pb-8 mb-8">
            
            {/* Left Brand info */}
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Terminal size={16} />
              </div>
              <span className="font-display font-bold text-base text-white tracking-tight">
                Ahmad Hafidz<span className="text-emerald-400">.dev</span>
              </span>
            </div>

            {/* Middle Nav Links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-neutral-500">
              <button onClick={() => scrollToSection("home")} className="hover:text-emerald-400 transition-colors cursor-pointer">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="hover:text-emerald-400 transition-colors cursor-pointer">
                About
              </button>
              <button onClick={() => scrollToSection("skills")} className="hover:text-emerald-400 transition-colors cursor-pointer">
                Skills
              </button>
              <button onClick={() => scrollToSection("projects")} className="hover:text-emerald-400 transition-colors cursor-pointer">
                Projects
              </button>
              <button onClick={() => scrollToSection("experience")} className="hover:text-emerald-400 transition-colors cursor-pointer">
                Journey
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-emerald-400 transition-colors cursor-pointer">
                Contact
              </button>
            </div>

          </div>

          {/* Copyright and signature details */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-neutral-500 font-mono text-[10px]">
            <span>
              &copy; {new Date().getFullYear()} Ahmad Hafidz. All rights reserved.
            </span>
            <span className="flex items-center gap-1.5 justify-center sm:justify-start">
              Crafted with <Heart size={10} className="text-rose-500 animate-pulse" /> and <Code2 size={10} className="text-emerald-500" /> using React & Tailwind
            </span>
          </div>

        </div>
      </footer>

    </div>
  );
}

