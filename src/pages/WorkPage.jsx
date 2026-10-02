import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import ContactInvitation from "../components/ContactInvitation";
import SeoMeta from "../components/SeoMeta";
import { PROJECTS, CATEGORIES } from "../content/projects";
import { cn } from "../utils/cn";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.categorySlug === selectedCategory);

  return (
    <>
      <SeoMeta
        title="Our Work"
        description="Explore the multidisciplinary portfolio of Sree Shine Studio spanning commercial photography, fashion textiles, spatial exhibitions, and digital design."
      />

      <PageHeader
        badge="Portfolio Gallery"
        title="Our Work & Creative Case Studies"
        subtitle="A curated showcase of commercial photography, tactile textiles, bespoke identities, and spatial installations."
      />

      {/* Filter Bar & Gallery */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn(
                    "relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A47C]",
                    isActive
                      ? "bg-[#191B1E] text-[#FBF9F5] shadow-md"
                      : "bg-[#121212] text-[#9CA3AF] hover:text-[#ECE5D8] hover:bg-[#ECE5D8] border border-white/10"
                  )}
                  aria-pressed={isActive}
                >
                  {cat.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterBg"
                      className="absolute inset-0 bg-[#191B1E] rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Filtered Grid with Layout Animation */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 text-[#848994]">
              No projects found in this discipline.
            </div>
          )}

          {/* Disclaimer Note */}
          <div className="mt-16 text-center text-xs text-[#848994] max-w-xl mx-auto">
            All sample projects are clearly cataloged for demonstration of Sree Shine Studio capabilities and are centrally configurable in the project repository.
          </div>

        </div>
      </section>

      <ContactInvitation />
    </>
  );
}
