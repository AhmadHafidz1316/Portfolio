import { motion } from "motion/react";
import { Award, Briefcase, Users, Heart, BookOpen, Terminal, Code } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import SplitText from "../animations/SplitText";

export default function About() {
  const cards = [
    {
      icon: <Award className="text-white" size={20} />,
      title: "Pristine Code Quality",
      description: "Writing clean, modular, and maintainable code adhering to modern industry standards (SOLID, DRY).",
    },
    {
      icon: <BookOpen className="text-white" size={20} />,
      title: "Continuous Learning",
      description: "Constantly exploring new technologies, software patterns, and modern framework advances.",
    },
    {
      icon: <Heart className="text-white" size={20} />,
      title: "User-Centric Design",
      description: "Crafting pixel-perfect user interfaces to deliver the best possible user experience and fluid journeys.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 bg-[#050505] overflow-hidden border-t border-[#111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-[0.25em] bg-[#0b0b0b] border border-[#1a1a1a] px-4 py-1.5 rounded-full mb-4">
            Brief Bio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            <SplitText text="About Me" delay={0.1} />
          </h2>
        </div>

        {/* Narrative & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Narrative Paragraphs */}
          <div className="lg:col-span-7 text-left space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-serif font-light text-neutral-300 leading-snug italic"
            >
              Dedicating my career to crafting exceptional software with an artistic touch.
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#888] font-sans font-light leading-relaxed text-sm sm:text-base"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#888] font-sans font-light leading-relaxed text-sm sm:text-base"
            >
              As a software engineering professional with a deep passion for the intersection of visual aesthetics and structured system architecture, I strive to build high-performance systems that are as functionally resilient as they are visually engaging.
            </motion.p>
          </div>

          {/* Grid Stats Block */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personalInfo.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0a0a0a]/50 border border-[#1a1a1a] rounded-xl p-6 flex flex-col justify-center items-center text-center backdrop-blur-sm hover:border-neutral-500/30 transition-all duration-300 group"
              >
                <span className="font-serif font-light text-4xl sm:text-5xl text-white group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </span>
                <span className="font-mono text-[9px] text-[#888] font-semibold uppercase mt-3 tracking-[0.2em]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Bento Philosophy / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-[#0a0a0a]/30 border border-[#1a1a1a]/80 rounded-xl p-6 text-left hover:bg-[#0a0a0a]/60 hover:border-neutral-800 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="h-10 w-10 bg-[#0d0d0d] rounded-xl flex items-center justify-center border border-[#1a1a1a] mb-6 group-hover:scale-105 transition-transform duration-300">
                {card.icon}
              </div>
              <div>
                <h4 className="font-serif font-medium text-white text-lg mb-2">
                  {card.title}
                </h4>
                <p className="text-[#888] font-sans font-light text-xs sm:text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
