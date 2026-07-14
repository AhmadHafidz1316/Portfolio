import { motion } from "motion/react";
import { Github, Linkedin, Sparkles, Send, Globe, Mail, Phone, MapPin, Code, Cpu, Smartphone, Server, Terminal, Layers } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

export default function ProfileCard() {
  const techLogos = [
    { name: "Laravel", icon: <Cpu size={14} className="text-red-500" /> },
    { name: "React.js", icon: <Code size={14} className="text-cyan-400" /> },
    { name: "Next.js", icon: <Layers size={14} className="text-white" /> },
    { name: "Flutter", icon: <Smartphone size={14} className="text-blue-400" /> },
    { name: "ExpressJS", icon: <Server size={14} className="text-emerald-400" /> },
    { name: "TypeScript", icon: <Code size={14} className="text-blue-500" /> },
    { name: ".NET", icon: <Terminal size={14} className="text-purple-500" /> },
  ];

  // Double tech logos array for seamless infinite marquee scroll
  const marqueeItems = [...techLogos, ...techLogos, ...techLogos];

  return (
    <div className="relative w-full max-w-[380px] bg-[#0a0a0a] border border-[#1a1a1a] rounded-[2.5rem] p-6 shadow-2xl overflow-hidden group">
      
      {/* Background Glows & Floating Code Loops */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/40 via-transparent to-neutral-900/60 pointer-events-none" />
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Animated Curly Braces Loop Graphics (inspired by screenshot) */}
      <motion.div
        className="absolute right-6 top-10 font-serif text-[120px] font-thin text-white/[0.02] select-none pointer-events-none"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        &#123;
      </motion.div>
      <motion.div
        className="absolute left-6 bottom-20 font-serif text-[120px] font-thin text-white/[0.02] select-none pointer-events-none"
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        &#125;
      </motion.div>

      {/* Card Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Top Header Label */}
        <div className="flex items-center gap-1.5 bg-[#121212] border border-[#1e1e1e] px-3.5 py-1.5 rounded-full mb-6">
          <Sparkles size={11} className="text-neutral-400 animate-pulse" />
          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-neutral-400 font-semibold">
            Featured Engineer
          </span>
        </div>

        {/* Profile Image with modern dual ring and gradient border */}
        <div className="relative w-44 h-44 mb-6 group-hover:scale-[1.02] transition-transform duration-500 ease-out">
          
          {/* Pulsing ring */}
          <div className="absolute inset-0 rounded-full bg-white/[0.02] border border-white/10 animate-pulse" />
          
          {/* Dashed outer spinner */}
          <motion.div
            className="absolute inset-2 rounded-full border border-dashed border-white/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />

          {/* Core photo canvas */}
          <div className="absolute inset-4 rounded-full overflow-hidden border border-[#222] bg-[#111]">
            <img
              src="/src/assets/images/ahmad_profile_1783998720745.png"
              alt={personalInfo.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-500 ease-out"
            />
          </div>

          {/* Glow indicator */}
          <span className="absolute bottom-5 right-5 flex h-3.5 w-3.5 rounded-full border-2 border-[#0a0a0a]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
        </div>

        {/* Name and Designation */}
        <div className="text-center mb-5">
          <h3 className="font-serif font-medium text-white text-xl tracking-tight mb-1">
            {personalInfo.name}
          </h3>
          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-400 font-semibold">
            {personalInfo.title}
          </p>
        </div>

        {/* Direct Contact Tags */}
        <div className="flex flex-col gap-2 w-full mb-6 border-y border-[#151515] py-4">
          <div className="flex items-center gap-2.5 px-3 text-neutral-400 font-sans text-xs">
            <MapPin size={13} className="text-neutral-500" />
            <span className="font-light text-[11px]">{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-2.5 px-3 text-neutral-400 font-sans text-xs">
            <Mail size={13} className="text-neutral-500" />
            <a href={`mailto:${personalInfo.email}`} className="font-light text-[11px] hover:text-white transition-colors truncate">
              {personalInfo.email}
            </a>
          </div>
        </div>

        {/* Infinite Loop Marquee (Selipan Logo Loop) */}

        {/* Social Actions Grid */}
        <div className="flex items-center gap-3 w-full">
          <a
            href="https://github.com/AhmadHafidz1316"
            target="_blank"
            rel="noreferrer"
            className="flex-1 bg-[#121212] hover:bg-[#181818] border border-[#1e1e1e] hover:border-[#2a2a2a] py-3 rounded-full flex items-center justify-center gap-2 text-neutral-400 hover:text-white transition-all duration-300 text-[10px] uppercase tracking-wider font-semibold cursor-pointer"
          >
            <Github size={13} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ahmad-hafidz-780988347/"
            target="_blank"
            rel="noreferrer"
            className="flex-1 bg-[#121212] hover:bg-[#181818] border border-[#1e1e1e] hover:border-[#2a2a2a] py-3 rounded-full flex items-center justify-center gap-2 text-neutral-400 hover:text-white transition-all duration-300 text-[10px] uppercase tracking-wider font-semibold cursor-pointer"
          >
            <Linkedin size={13} />
            LinkedIn
          </a>
        </div>

      </div>
    </div>
  );
}
