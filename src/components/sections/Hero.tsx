import { motion } from "motion/react";
import { ArrowDown, FileText, Send, Github, Linkedin, Twitter, Globe, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import BlurText from "../animations/BlurText";
import SplitText from "../animations/SplitText";
import ShinyText from "../animations/ShinyText";
import Magnet from "../animations/Magnet";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#050505]"
    >
      {/* Decorative Grid Overlay with very subtle lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#0b0b0b] border border-[#1a1a1a] px-3.5 py-1.5 rounded-full mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 glow-dot-green"></span>
              </span>
              <span className="font-mono text-[9px] text-neutral-400 font-medium uppercase tracking-[0.2em]">
                Tersedia untuk Proyek Baru
              </span>
            </motion.div>

            {/* Main Animated Title using Playfair Display for dramatic serif contrast */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-[1.05] mb-6">
              <span className="italic font-light text-neutral-400">Halo, Saya</span> <br />
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="font-bold block mt-2 text-white"
              >
                {personalInfo.name}
              </motion.span>
            </h1>

            {/* Subheading / Role */}
            <h2 className="font-mono text-xs sm:text-sm text-neutral-400 font-medium tracking-[0.3em] uppercase mb-6">
              <BlurText text={personalInfo.title} delay={0.9} duration={0.8} />
            </h2>

            {/* Brief Bio */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="text-[#888] font-sans text-sm sm:text-base max-w-xl leading-relaxed mb-8"
            >
              {personalInfo.subTitle}
            </motion.p>

            {/* Call to Actions - Ultra Minimal Modern Monochrome */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="flex flex-wrap gap-4 items-center mb-10 w-full sm:w-auto"
            >
              <Magnet range={50} strength={0.3}>
                <button
                  onClick={() => onNavigate("contact")}
                  className="flex items-center justify-center gap-2 bg-white hover:bg-[#e5e5e5] text-black font-bold px-8 py-4 rounded-full text-[10px] uppercase tracking-[0.15em] transition-all duration-300 shadow-[0_4px_25px_rgba(255,255,255,0.1)] cursor-pointer"
                >
                  Mulai Kolaborasi <Send size={12} />
                </button>
              </Magnet>

              <Magnet range={50} strength={0.2}>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("projects");
                  }}
                  className="flex items-center justify-center gap-2 bg-[#0b0b0b] hover:bg-[#151515] text-white font-semibold px-7 py-4 rounded-full text-[10px] uppercase tracking-[0.15em] border border-[#222] transition-all duration-300 cursor-pointer"
                >
                  Lihat Karya <ArrowDown size={12} />
                </a>
              </Magnet>
            </motion.div>

            {/* Social & Info Dock */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="flex flex-wrap gap-x-6 gap-y-3 items-center border-t border-[#111] pt-6 w-full"
            >
              <div className="flex items-center gap-1.5 text-neutral-500 font-mono text-[10px] uppercase tracking-wider">
                <Globe size={12} className="text-white/60" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="hidden sm:block h-1 w-1 rounded-full bg-[#222]" />
              <div className="flex items-center gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-500 hover:text-white transition-colors duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github size={16} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-500 hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-500 hover:text-white transition-colors duration-200"
                  aria-label="Twitter Profile"
                >
                  <Twitter size={16} />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Hero Right Content - Sophisticated Monochrome Tech Box */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100, damping: 20 }}
              className="relative w-72 h-72 sm:w-96 sm:h-96"
            >
              {/* Outer rotating minimal white dashed ring */}
              <motion.div
                className="absolute inset-0 rounded-3xl border border-dashed border-white/5"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />

              {/* Inner glowing core */}
              <div className="absolute inset-4 rounded-2xl bg-[#0a0a0a] border border-[#1a1a1a] shadow-2xl overflow-hidden flex flex-col p-6 justify-between">
                
                {/* Header elements mock */}
                <div className="flex items-center justify-between w-full border-b border-[#151515] pb-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                  </div>
                  <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
                    bash - guest@hafidz.dev
                  </span>
                </div>

                {/* Simulated interactive display */}
                <div className="my-auto py-4 flex flex-col items-start gap-4">
                  <div className="flex items-center gap-2 text-white font-mono text-xs">
                    <span className="text-neutral-600">&gt;</span>
                    <span>npm run compile:skills</span>
                  </div>
                  
                  <div className="flex flex-col gap-1.5 w-full">
                    <div className="flex justify-between font-mono text-[9px] tracking-wider uppercase text-neutral-400">
                      <span>Frontend (React/TS)</span>
                      <span className="text-white">95%</span>
                    </div>
                    <div className="w-full bg-[#121212] h-1 rounded-full overflow-hidden border border-[#1c1c1c]">
                      <motion.div
                        className="bg-white h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "95%" }}
                        transition={{ delay: 1.4, duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 w-full">
                    <div className="flex justify-between font-mono text-[9px] tracking-wider uppercase text-neutral-400">
                      <span>Backend (Node/SQL)</span>
                      <span className="text-neutral-300">90%</span>
                    </div>
                    <div className="w-full bg-[#121212] h-1 rounded-full overflow-hidden border border-[#1c1c1c]">
                      <motion.div
                        className="bg-neutral-400 h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "90%" }}
                        transition={{ delay: 1.6, duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 w-full">
                    <div className="flex justify-between font-mono text-[9px] tracking-wider uppercase text-neutral-400">
                      <span>Generative AI (Gemini SDK)</span>
                      <span className="text-neutral-400">88%</span>
                    </div>
                    <div className="w-full bg-[#121212] h-1 rounded-full overflow-hidden border border-[#1c1c1c]">
                      <motion.div
                        className="bg-neutral-600 h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "88%" }}
                        transition={{ delay: 1.8, duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Footer mock metadata */}
                <div className="flex items-center justify-between border-t border-[#151515] pt-4">
                  <div className="flex flex-col items-start">
                    <span className="font-mono text-[8px] text-neutral-600 uppercase tracking-widest">
                      Local Time
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400">
                      WIB (UTC+7)
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-mono text-[8px] text-neutral-600 uppercase tracking-widest">
                      Status
                    </span>
                    <span className="font-mono text-[10px] text-white flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-white glow-dot" />
                      Online
                    </span>
                  </div>
                </div>

              </div>

              {/* Decorative Floating Card Accent */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-[#0b0b0b] border border-[#1c1c1c] shadow-2xl rounded-2xl p-4 flex items-center gap-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="h-10 w-10 bg-[#161616] border border-[#262626] rounded-xl flex items-center justify-center text-white">
                  <FileText size={18} />
                </div>
                <div className="flex flex-col text-left">
                  <ShinyText text="Curriculum Vitae" speed={4} className="text-xs font-semibold text-white" />
                  <span className="text-[10px] text-neutral-500">PDF - Ready to DL</span>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
