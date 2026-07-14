import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Calendar, Star, Milestone, GraduationCap } from "lucide-react";
import { experiencesData, educationData } from "../../data/portfolioData";
import SplitText from "../animations/SplitText";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  return (
    <section
      id="experience"
      className="relative py-28 bg-[#050505] overflow-hidden border-t border-[#111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-[0.25em] bg-[#0b0b0b] border border-[#1a1a1a] px-4 py-1.5 rounded-full mb-4">
            My Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight mb-8">
            <SplitText text="Experience & Education" delay={0.1} />
          </h2>

          {/* Toggle Tabs */}
          <div className="flex gap-2 bg-[#0b0b0b] border border-[#1a1a1a] p-1 rounded-full">
            <button
              onClick={() => setActiveTab("work")}
              className={`relative px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.15em] font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === "work" ? "text-black font-bold" : "text-neutral-400 hover:text-white"
              }`}
            >
              {activeTab === "work" && (
                <motion.div
                  layoutId="activeJourneyTab"
                  className="absolute inset-0 bg-white rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <Briefcase size={12} />
              Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`relative px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.15em] font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === "education" ? "text-black font-bold" : "text-neutral-400 hover:text-white"
              }`}
            >
              {activeTab === "education" && (
                <motion.div
                  layoutId="activeJourneyTab"
                  className="absolute inset-0 bg-white rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <GraduationCap size={12} />
              Education
            </button>
          </div>
        </div>

        {/* Timeline Line & Node grid */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Track Line */}
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-[1px] bg-[#1a1a1a]" />

          {/* Timeline Cards */}
          <div className="space-y-12">
            <AnimatePresence mode="wait">
              {activeTab === "work" ? (
                <motion.div
                  key="work-timeline"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-12"
                >
                  {experiencesData.map((exp, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <div
                        key={exp.id}
                        className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                          isEven ? "sm:flex-row-reverse" : ""
                        }`}
                      >
                        {/* Glowing Node Marker */}
                        <div className="absolute left-4 sm:left-1/2 -translate-x-[9px] h-[18px] w-[18px] rounded-full bg-[#050505] border-2 border-white z-10 flex items-center justify-center">
                          <motion.div
                            className="h-2 w-2 rounded-full bg-white glow-dot"
                            animate={{ scale: [1, 1.4, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </div>

                        {/* Spacer / Container left */}
                        <div className="hidden sm:block w-1/2" />

                        {/* Experience Card */}
                        <motion.div
                          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-10% 0px" }}
                          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                          className="w-full sm:w-1/2 pl-12 sm:pl-8 sm:pr-8 text-left"
                        >
                          <div className="bg-[#0a0a0a]/40 border border-[#1a1a1a] rounded-2xl p-6 hover:border-neutral-700/60 transition-all duration-300">
                            
                            {/* Period timing tag */}
                            <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#888] font-semibold mb-3 uppercase tracking-widest">
                              <Calendar size={12} />
                              <span>{exp.period}</span>
                            </div>

                            {/* Role & Company */}
                            <h3 className="font-serif font-medium text-white text-lg">
                              {exp.role}
                            </h3>
                            <p className="font-sans text-neutral-400 text-sm font-light mb-4">
                              {exp.company}
                            </p>

                            {/* Narrative summary */}
                            <p className="text-neutral-400 font-sans font-light text-xs sm:text-sm leading-relaxed mb-4 border-b border-[#151515] pb-4">
                              {exp.description}
                            </p>

                            {/* Points / Achievements */}
                            <ul className="space-y-2.5">
                              {exp.points.map((point, pointIdx) => (
                                <li
                                  key={pointIdx}
                                  className="flex items-start gap-2 text-[#888] font-sans font-light text-[11px] sm:text-xs leading-relaxed"
                                >
                                  <Star size={12} className="text-white shrink-0 mt-0.5" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>

                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div
                  key="edu-timeline"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-12"
                >
                  {educationData.map((edu, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <div
                        key={edu.id}
                        className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                          isEven ? "sm:flex-row-reverse" : ""
                        }`}
                      >
                        {/* Glowing Node Marker */}
                        <div className="absolute left-4 sm:left-1/2 -translate-x-[9px] h-[18px] w-[18px] rounded-full bg-[#050505] border-2 border-white z-10 flex items-center justify-center">
                          <motion.div
                            className="h-2 w-2 rounded-full bg-white glow-dot"
                            animate={{ scale: [1, 1.4, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </div>

                        {/* Spacer / Container left */}
                        <div className="hidden sm:block w-1/2" />

                        {/* Education Card */}
                        <motion.div
                          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-10% 0px" }}
                          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                          className="w-full sm:w-1/2 pl-12 sm:pl-8 sm:pr-8 text-left"
                        >
                          <div className="bg-[#0a0a0a]/40 border border-[#1a1a1a] rounded-2xl p-6 hover:border-neutral-700/60 transition-all duration-300">
                            
                            {/* Period timing tag */}
                            <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#888] font-semibold mb-3 uppercase tracking-widest">
                              <Calendar size={12} />
                              <span>{edu.period}</span>
                            </div>

                            {/* Degree & School */}
                            <h3 className="font-serif font-medium text-white text-lg">
                              {edu.degree}
                            </h3>
                            <p className="font-sans text-neutral-400 text-sm font-light mb-4">
                              {edu.school}
                            </p>

                            {/* Narrative summary */}
                            <p className="text-neutral-400 font-sans font-light text-xs sm:text-sm leading-relaxed">
                              {edu.description}
                            </p>

                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Dynamic Milestone badge summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center flex flex-col items-center justify-center gap-3"
        >
          <div className="h-10 w-10 bg-[#0d0d0d] border border-[#1a1a1a] rounded-full flex items-center justify-center text-white">
            <Milestone size={16} />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 max-w-md">
            Dedicated to lifelong learning to solve complex software engineering and system architecture challenges.
          </span>
        </motion.div>

      </div>
    </section>
  );
}
