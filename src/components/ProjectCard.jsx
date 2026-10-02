import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl overflow-hidden bg-[#121212] border border-white/10 hover:border-[#C8A25D]/40 transition-all duration-300 shadow-sm hover:shadow-lg">
      <Link 
        to={`/work/${project.slug}`}
        className="block relative overflow-hidden aspect-[4/3] bg-[#1a1a1a]"
        aria-label={`View project details for ${project.title}`}
      >
        <img
          src={project.thumbnail || project.heroImage}
          alt={`${project.title} - ${project.category}`}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />
        
        {/* Category Pill */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-medium bg-black/85 backdrop-blur-md text-[#ECE5D8] border border-white/10">
            {project.category}
          </span>
        </div>

        {/* Hover Arrow Badge */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 rounded-full bg-black/85 text-[#ECE5D8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ArrowUpRight className="w-4 h-4 text-[#C8A25D]" />
        </div>
      </Link>

      {/* Info Section */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-[#121212]">
        <div>
          <div className="flex items-center justify-between text-xs text-[#6B7280] mb-2 font-mono">
            <span>{project.client}</span>
            <span>{project.year}</span>
          </div>
          
          <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#ECE5D8] group-hover:text-[#C8A25D] transition-colors leading-snug">
            <Link to={`/work/${project.slug}`}>
              {project.title}
            </Link>
          </h3>
          
          <p className="mt-2 text-xs sm:text-sm text-[#9CA3AF] line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
          <Link
            to={`/work/${project.slug}`}
            className="text-xs font-semibold uppercase tracking-wider text-[#ECE5D8] group-hover:text-[#C8A25D] inline-flex items-center gap-1 transition-colors"
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C8A25D]" />
          </Link>
          <span className="text-[11px] text-[#6B7280]">
            {project.deliverables?.length || 3} Deliverables
          </span>
        </div>
      </div>
    </article>
  );
}

