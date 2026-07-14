import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ExternalLink,
  Github,
  Search,
  X,
  CheckCircle2,
  Award,
  Zap,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { projectsData } from "../../data/portfolioData";
import { Project } from "../../types";
import SplitText from "../animations/SplitText";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | "Web" | "Mobile"
  >("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const getImages = (project: Project) =>
    project.imageUrls && project.imageUrls.length > 0
      ? project.imageUrls
      : [project.imageUrl];

  const openProject = useCallback((project: Project) => {
    setModalImageIndex(0);
    setLightboxOpen(false);
    setSelectedProject(project);
  }, []);

  const categories: Array<"All" | "Web" | "Mobile"> = ["All", "Web", "Mobile"];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="projects"
      className="relative py-28 bg-[#050505] overflow-hidden border-t border-[#111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-[0.25em] bg-[#0b0b0b] border border-[#1a1a1a] px-4 py-1.5 rounded-full mb-4">
            My Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            <SplitText text="Featured Projects" delay={0.1} />
          </h2>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 bg-[#0a0a0a]/50 border border-[#1a1a1a] p-6 rounded-xl backdrop-blur-sm">
          {/* Categories Tab selector */}
          <div className="flex flex-wrap gap-1.5 order-2 md:order-1">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-4 py-2 text-[10px] uppercase tracking-[0.15em] font-semibold rounded-full border transition-all cursor-pointer ${
                    isActive
                      ? "text-black border-white font-bold"
                      : "text-neutral-400 border-[#1a1a1a] hover:text-white bg-[#050505]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjTab"
                      className="absolute inset-0 bg-white rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 25,
                      }}
                    />
                  )}
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72 order-1 md:order-2">
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500"
              size={14}
            />
            <input
              type="text"
              placeholder="Search projects or technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#050505] border border-[#1a1a1a] rounded-full py-2.5 pl-10 pr-4 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-[#0a0a0a]/20 border border-dashed border-[#1a1a1a] rounded-xl"
          >
            <p className="text-neutral-500 text-sm">
              No projects match your search criteria.
            </p>
          </motion.div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  onClick={() => openProject(project)}
                  className="group bg-[#0a0a0a]/30 border border-[#1a1a1a]/80 rounded-xl overflow-hidden hover:border-neutral-700 hover:bg-[#0a0a0a]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Project Thumbnail Image */}
                    <div className="relative overflow-hidden aspect-[16/9] bg-[#050505] border-b border-[#1a1a1a]">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-white text-black font-bold uppercase tracking-[0.15em] px-5 py-2.5 rounded-full text-[10px] shadow-lg flex items-center gap-1.5 transition-transform duration-300 scale-95 group-hover:scale-100">
                          View Project Details <Zap size={11} />
                        </span>
                      </div>

                      {/* Category Badge tag */}
                      <span className="absolute top-4 left-4 bg-[#050505]/95 backdrop-blur-md border border-[#1a1a1a] text-[9px] text-neutral-300 font-mono px-3 py-1 rounded-full uppercase tracking-wider">
                        {project.category}
                      </span>

                      {/* Multiple images indicator */}
                      {getImages(project).length > 1 && (
                        <span className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-[#2a2a2a] text-[9px] text-neutral-300 font-mono px-2.5 py-1 rounded-full flex items-center gap-1">
                          <ChevronRight size={9} />
                          {getImages(project).length} photos
                        </span>
                      )}
                    </div>

                    {/* Meta info block */}
                    <div className="p-6 text-left">
                      <h3 className="font-serif font-medium text-white text-lg sm:text-xl mb-2 group-hover:text-neutral-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[#888] font-sans font-light text-xs sm:text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Technology Tags footer */}
                  <div className="px-6 pb-6 pt-3 flex flex-wrap gap-1.5 border-t border-[#151515]">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#0b0b0b] border border-[#1c1c1c] text-neutral-400 font-mono text-[9px] px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[9px] text-neutral-500 font-mono flex items-center justify-center px-1">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Detailed Project Overlay Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Dark Overlay backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
              />

              {/* Modal Body Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl z-10 flex flex-col"
              >
                {/* Header Close Trigger button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full border border-[#1a1a1a] hover:border-[#222] bg-[#050505]/40 text-neutral-400 hover:text-white transition-colors cursor-pointer z-20"
                >
                  <X size={16} />
                </button>

                {/* Banner Thumbnail Carousel */}
                <div className="relative aspect-[16/7] w-full bg-[#050505] border-b border-[#1a1a1a] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={modalImageIndex}
                      src={getImages(selectedProject)[modalImageIndex]}
                      alt={`${selectedProject.title} – photo ${modalImageIndex + 1}`}
                      referrerPolicy="no-referrer"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.25 }}
                      onClick={() => setLightboxOpen(true)}
                      className="w-full h-full object-cover cursor-zoom-in"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

                  {/* Expand hint */}
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 border border-[#2a2a2a] text-white/70 hover:text-white transition-colors cursor-pointer z-10"
                  >
                    <Maximize2 size={12} />
                  </button>

                  {/* Prev / Next arrows – only when multiple images */}
                  {getImages(selectedProject).length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalImageIndex(
                            (i) =>
                              (i - 1 + getImages(selectedProject).length) %
                              getImages(selectedProject).length,
                          );
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 border border-[#2a2a2a] text-white hover:bg-black/80 transition-colors cursor-pointer z-10"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalImageIndex(
                            (i) => (i + 1) % getImages(selectedProject).length,
                          );
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 border border-[#2a2a2a] text-white hover:bg-black/80 transition-colors cursor-pointer z-10"
                      >
                        <ChevronRight size={16} />
                      </button>

                      {/* Dot indicators */}
                      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {getImages(selectedProject).map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setModalImageIndex(idx);
                            }}
                            className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${idx === modalImageIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"}`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  <span className="absolute bottom-4 left-6 bg-white text-black font-mono font-bold text-[9px] px-3.5 py-1 rounded-full uppercase tracking-widest z-10">
                    {selectedProject.category}
                  </span>

                  {/* Image counter */}
                  {getImages(selectedProject).length > 1 && (
                    <span className="absolute bottom-4 right-6 bg-black/60 border border-[#2a2a2a] text-neutral-300 font-mono text-[9px] px-2.5 py-1 rounded-full z-10">
                      {modalImageIndex + 1} /{" "}
                      {getImages(selectedProject).length}
                    </span>
                  )}
                </div>

                {/* Info and Specs Grid */}
                <div className="p-6 sm:p-8 flex-1 text-left">
                  {/* Title */}
                  <h3 className="font-serif font-light text-white text-2xl sm:text-3xl mb-4">
                    {selectedProject.title}
                  </h3>

                  {/* Tech stack row */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#050505] border border-[#1a1a1a] text-neutral-300 font-mono text-[9px] px-2.5 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Long narrative */}
                  <p className="text-neutral-400 font-sans font-light text-sm sm:text-base leading-relaxed mb-6">
                    {selectedProject.longDescription}
                  </p>

                  {/* Key features List */}
                  <div className="mb-8">
                    <h4 className="font-serif font-medium text-white text-base mb-4 flex items-center gap-2 border-b border-[#151515] pb-2">
                      <Award size={16} className="text-white" /> Key Project
                      Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {selectedProject.features.map((feat) => (
                        <div
                          key={feat}
                          className="flex items-start gap-2.5 text-neutral-400 text-xs sm:text-sm font-sans font-light"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-white shrink-0 mt-0.5"
                          />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* External CTA Links */}
                  <div className="flex flex-wrap gap-4 border-t border-[#151515] pt-6">
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-white hover:bg-[#e5e5e5] text-black font-bold px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.15em] transition-colors shadow-[0_4px_25px_rgba(255,255,255,0.1)] cursor-pointer"
                      >
                        Visit Live Demo <ExternalLink size={12} />
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-[#0b0b0b] hover:bg-[#151515] text-white font-semibold px-5 py-3 rounded-full text-[10px] uppercase tracking-[0.15em] border border-[#1a1a1a] transition-colors cursor-pointer"
                      >
                        View Code <Github size={12} />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="ml-auto text-[10px] uppercase tracking-wider text-neutral-500 hover:text-white transition-colors cursor-pointer"
                    >
                      Back to Gallery
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Lightbox – full-screen image viewer */}
        <AnimatePresence>
          {lightboxOpen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md"
              onClick={() => setLightboxOpen(false)}
            >
              {/* Close button */}
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full border border-[#2a2a2a] bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer z-10"
              >
                <X size={18} />
              </button>

              {/* Image */}
              <motion.img
                key={modalImageIndex}
                src={getImages(selectedProject)[modalImageIndex]}
                alt={`${selectedProject.title} – photo ${modalImageIndex + 1}`}
                referrerPolicy="no-referrer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-[92vw] max-h-[88vh] object-contain rounded-lg shadow-2xl"
              />

              {/* Prev / Next – only when multiple images */}
              {getImages(selectedProject).length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalImageIndex(
                        (i) =>
                          (i - 1 + getImages(selectedProject).length) %
                          getImages(selectedProject).length,
                      );
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-[#2a2a2a] text-white hover:bg-black/80 transition-colors cursor-pointer"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalImageIndex(
                        (i) => (i + 1) % getImages(selectedProject).length,
                      );
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-[#2a2a2a] text-white hover:bg-black/80 transition-colors cursor-pointer"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Counter */}
                  <span className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/60 border border-[#2a2a2a] text-neutral-300 font-mono text-[10px] px-3 py-1 rounded-full">
                    {modalImageIndex + 1} / {getImages(selectedProject).length}
                  </span>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
