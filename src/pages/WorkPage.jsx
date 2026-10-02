import { useState } from "react";
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
        badge="Portfolio"
        title="Our Work & Case Studies"
        subtitle="A curated showcase of commercial photography, tactile textiles, bespoke identities, and spatial installations."
      />

      {/* Filter Bar & Gallery */}
      <section className="py-16 sm:py-24 bg-[#0a0a0a]">
        <div className="site-container">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 sm:gap-3 mb-12 sm:mb-16 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn(
                    "px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0",
                    isActive
                      ? "bg-[#C8A25D] text-black font-semibold shadow-md"
                      : "bg-[#121212] text-[#9CA3AF] hover:text-[#ECE5D8] hover:bg-[#1a1a1a] border border-white/10"
                  )}
                  aria-pressed={isActive}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Clean 3-Column Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-[#6B7280] text-sm">
              No projects found in this discipline.
            </div>
          )}

        </div>
      </section>

      <ContactInvitation />
    </>
  );
}

