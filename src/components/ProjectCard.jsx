import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, onSelect }) {
  return (
    <article
      onClick={() => onSelect?.(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect?.(project);
        }
      }}
      className="group flex flex-col justify-between rounded-2xl overflow-hidden bg-[#121212] border border-white/10 hover:border-[#C8A25D]/40 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C8A25D]"
    >
      <div className="block relative overflow-hidden aspect-[16/10] sm:aspect-[4/3] bg-[#1a1a1a]">
        <img
          src={project.thumbnail || project.heroImage}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-medium bg-black/80 backdrop-blur-md text-[#ECE5D8] border border-white/10">
            {project.category}
          </span>
        </div>

        {/* Hover Arrow Badge */}
        <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-black/80 text-[#ECE5D8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ArrowUpRight className="w-3.5 h-3.5 text-[#C8A25D]" />
        </div>
      </div>

      {/* Info Section */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div className="space-y-1.5">
          <h3 className="font-heading text-base sm:text-lg font-semibold text-[#ECE5D8] group-hover:text-[#C8A25D] transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#9CA3AF] line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between">
          <span className="text-[11px] font-mono text-[#6B7280]">
            {project.year || "2026"}
          </span>
          <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C8A25D] group-hover:text-[#DFB873] inline-flex items-center gap-1 transition-colors">
            <span>View Details</span>
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </article>
  );
}
