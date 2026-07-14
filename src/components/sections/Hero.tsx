import { motion } from "motion/react";
import { ArrowDown, Send, Github, Linkedin, Twitter, Globe, Cpu, Code, Smartphone, Server, Terminal, Layers } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import BlurText from "../animations/BlurText";
import Magnet from "../animations/Magnet";
import ProfileCard from "../ui/ProfileCard";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const techLogos = [
    { name: "Laravel", icon: <Cpu size={14} className="text-red-500" /> },
    { name: "React.js", icon: <Code size={14} className="text-cyan-400" /> },
    { name: "Next.js", icon: <Layers size={14} className="text-white" /> },
    { name: "Flutter", icon: <Smartphone size={14} className="text-blue-400" /> },
    { name: "Express.js", icon: <Server size={14} className="text-emerald-400" /> },
    { name: "TypeScript", icon: <Code size={14} className="text-blue-500" /> },
    { name: ".NET", icon: <Terminal size={14} className="text-purple-500" /> },
  ];

  // Repeat items for seamless horizontal scroll
  const marqueeItems = [...techLogos, ...techLogos, ...techLogos, ...techLogos];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-[#050505]"
    >
      {/* Decorative Grid Overlay with very subtle lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
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
                Available for New Projects
              </span>
            </motion.div>
 
            {/* Main Animated Title using Playfair Display for dramatic serif contrast */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-[1.05] mb-6">
              <span className="italic font-light text-neutral-400">Hello, I am</span> <br />
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
                  Start Collaboration <Send size={12} />
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
                  View Works <ArrowDown size={12} />
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
 
          {/* Hero Right Content - Profile Card with Custom Photos & Glow */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 80, damping: 20 }}
            >
              <ProfileCard />
            </motion.div>
          </div>
 
        </div>
      </div>

      {/* Full-width sliding infinite logo loop at the bottom of the section */}
      <div className="relative w-full border-t border-b border-[#111] bg-[#070707]/60 py-6 mt-12 overflow-hidden z-20">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10" />
        
        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: [0, -640] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {marqueeItems.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 shrink-0"
            >
              <div className="h-8 w-8 bg-[#111] border border-[#222] rounded-lg flex items-center justify-center text-white">
                {tech.icon}
              </div>
              <span className="font-serif font-light text-sm tracking-wide text-neutral-400">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
