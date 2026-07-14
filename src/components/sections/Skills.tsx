import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as Icons from "lucide-react";
import { skillsData } from "../../data/portfolioData";
import { Skill } from "../../types";
import SplitText from "../animations/SplitText";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | "Frontend" | "Backend" | "Tools & Devops" | "Soft Skills"
  >("All");

  const categories: Array<"All" | "Frontend" | "Backend" | "Tools & Devops" | "Soft Skills"> = [
    "All",
    "Frontend",
    "Backend",
    "Tools & Devops",
    "Soft Skills",
  ];

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  // Helper component to render corresponding Lucide Icons dynamically
  const renderIcon = (iconName: string) => {
    // Look up in Lucide icon pack
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent size={18} className="text-white" />;
    }
    return <Icons.Code size={18} className="text-white" />;
  };

  const getProficiencyText = (level: number) => {
    if (level < 50) return "Basic";
    if (level < 80) return "Intermediate";
    return "Advanced";
  };

  return (
    <section
      id="skills"
      className="relative py-28 bg-[#050505] overflow-hidden border-t border-[#111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-[0.25em] bg-[#0b0b0b] border border-[#1a1a1a] px-4 py-1.5 rounded-full mb-4">
            Technical Expertise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            <SplitText text="Skills & Technologies" delay={0.1} />
          </h2>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-5 py-2 text-[10px] uppercase tracking-[0.15em] font-medium transition-colors rounded-full border cursor-pointer ${
                  isActive
                    ? "text-black border-white font-bold"
                    : "text-neutral-400 border-[#1a1a1a] hover:text-white hover:border-[#262626] bg-[#0a0a0a]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-white rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                {category === "Tools & Devops" ? "Tools & DevOps" : category}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="bg-[#0a0a0a]/40 border border-[#1a1a1a] rounded-xl p-6 hover:border-neutral-700/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-9 w-9 bg-[#111] rounded-xl border border-[#222] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {renderIcon(skill.iconName)}
                  </div>
                  <div className="text-left">
                    <h4 className="font-serif font-medium text-white text-base">
                      {skill.name}
                    </h4>
                    <span className="font-mono text-[9px] text-[#888] uppercase tracking-widest">
                      {skill.category === "Tools & Devops" ? "DevOps" : skill.category}
                    </span>
                  </div>
                </div>

                {/* Progress Visualizer */}
                <div className="w-full">
                  <div className="flex justify-between font-mono text-[9px] text-neutral-400 mb-1.5 uppercase tracking-wider">
                    <span>Proficiency</span>
                    <span>{getProficiencyText(skill.level)}</span>
                  </div>
                  <div className="w-full bg-[#121212] h-1 rounded-full overflow-hidden border border-[#1c1c1c]">
                    <motion.div
                      className="bg-white h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.05 }}
                    />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Abstract design element / Bento Tech Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 bg-[#0a0a0a]/50 border border-[#1a1a1a] rounded-xl p-8 flex flex-col md:flex-row items-center gap-6 justify-between text-left"
        >
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-[#161616] border border-[#222] flex items-center justify-center text-white shrink-0">
              <Icons.Cpu size={20} />
            </div>
            <div>
              <p className="font-serif font-medium text-white text-base">
                Building with Modern Architecture
              </p>
              <p className="text-xs text-[#888] font-sans font-light mt-1 max-w-xl">
                I align technologies to address concrete business objectives. Combining modular design, serverless pipelines, and clean code ensures scaling efficiency.
              </p>
            </div>
          </div>
          <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest bg-[#060606] border border-[#1a1a1a] px-4 py-2 rounded-full shrink-0">
            ES6+ / NODE_ENV=production
          </span>
        </motion.div>

      </div>
    </section>
  );
}
