import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import Magnet from "../animations/Magnet";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Journey" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          id="main-navigation"
          className={`flex items-center justify-between transition-all duration-500 rounded-full px-6 py-3 ${
            isScrolled
              ? "bg-neutral-950/70 backdrop-blur-xl border border-neutral-800/80 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Logo / Serif Brand */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate("home")}>
            <span className="font-serif font-bold text-2xl text-white tracking-tighter">
              AH<span className="text-[#777]">.</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`relative px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold transition-colors cursor-pointer rounded-full ${
                    isActive ? "text-white" : "text-[#888] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-[#161616] border border-[#262626] rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center">
            <Magnet range={60} strength={0.25}>
              <button
                onClick={() => onNavigate("contact")}
                className="flex items-center gap-1.5 bg-white hover:bg-[#e5e5e5] text-black font-bold px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.15em] transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.1)] cursor-pointer"
              >
                Contact Me <ArrowUpRight size={12} />
              </button>
            </Magnet>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white cursor-pointer"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full px-4 mt-2 md:hidden z-50"
          >
            <div className="bg-neutral-950/95 backdrop-blur-2xl border border-neutral-800/80 rounded-3xl p-6 shadow-2xl flex flex-col gap-4">
              {menuItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsOpen(false);
                    }}
                    className={`text-left py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "text-white bg-[#161616] border-l-2 border-white"
                        : "text-[#888] hover:text-white hover:bg-neutral-900/50"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                onClick={() => {
                  onNavigate("contact");
                  setIsOpen(false);
                }}
                className="w-full mt-2 flex items-center justify-center gap-2 bg-white text-black font-bold py-3 rounded-xl text-xs uppercase tracking-[0.2em] transition-all"
              >
                Contact Me <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
