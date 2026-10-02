import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
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
        title="Selected Work"
        description="A curated showcase of commercial photography, visual identity, web experiences, and spatial environments by Sree Shine Studio."
      />

      <div className="bg-[#0a0a0a] text-[#ECE5D8] min-h-screen">
        {/* Simple Page Header */}
        <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 border-b border-white/10">
          <div className="site-container">
            <div className="max-w-2xl space-y-3">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block">
                Work
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-heading uppercase tracking-tight text-[#ECE5D8] leading-tight">
                Selected Work.
              </h1>
              <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                A collection of our favorite projects across photography, branding, and digital design.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-14 sm:py-20">
          <div className="site-container">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 sm:gap-2.5 mb-10 overflow-x-auto pb-2 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      "px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 shrink-0",
                      isActive
                        ? "bg-[#C8A25D] text-black font-semibold shadow-sm"
                        : "bg-[#121212] text-[#9CA3AF] hover:text-[#ECE5D8] border border-white/10"
                    )}
                    aria-pressed={isActive}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Clean Responsive 3-Column Portfolio Grid */}
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
                No projects found in this category.
              </div>
            )}
          </div>
        </section>

        {/* Minimal Bottom CTA */}
        <section className="py-16 sm:py-20 border-t border-white/10 bg-[#0d0d0d]">
          <div className="site-container text-center max-w-xl mx-auto space-y-5">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#ECE5D8]">
              Have a project in mind?
            </h2>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              We’d love to collaborate on your next campaign, brand identity, or digital experience.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C8A25D] hover:bg-[#DFB873] text-black font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all duration-200 shadow-md"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
