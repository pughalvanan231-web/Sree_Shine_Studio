import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../utils/cn";

export default function ProjectCard({ project, index = 0, isLarge = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl overflow-hidden bg-[#121212] border border-white/10 shadow-sm hover:border-[#C8A25D]/40 hover:shadow-xl transition-all duration-300",
        isLarge ? "md:col-span-2 md:row-span-2" : ""
      )}
    >
      {/* Image with Bottom-to-Top Clipping Mask Reveal & Scale Settle */}
      <Link 
        to={`/work/${project.slug}`}
        className="block relative overflow-hidden bg-[#1a1a1a] aspect-[4/3] focus-visible:outline-none"
        aria-label={`View project details for ${project.title}`}
      >
        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0%)", scale: 1.08 }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.8, delay: (index % 3) * 0.1 + 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img
            src={project.thumbnail || project.heroImage}
            alt={`${project.title} - ${project.category}`}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        
        {/* Category Pill */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
          <span className="inline-block px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-black/90 backdrop-blur-md text-[#ECE5D8] border border-white/10 shadow-xs">
            {project.category}
          </span>
        </div>

        {/* Hover Arrow Badge */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/90 text-[#ECE5D8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 shadow-md">
          <ArrowUpRight className="w-4 h-4 text-[#C8A25D]" />
        </div>
      </Link>

      {/* Info Section */}
      <div className="p-4 sm:p-6 flex flex-col justify-between flex-1 bg-[#121212]">
        <div>
          <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#848994] mb-1.5">
            <span>{project.client}</span>
            <span>{project.year}</span>
          </div>
          
          <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#ECE5D8] group-hover:text-[#C8A25D] transition-colors leading-snug">
            <Link to={`/work/${project.slug}`} className="focus-visible:outline-none">
              {project.title}
            </Link>
          </h3>
          
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#9CA3AF] line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between">
          <Link
            to={`/work/${project.slug}`}
            className="text-xs font-semibold text-[#ECE5D8] group-hover:text-[#C8A25D] inline-flex items-center gap-1 transition-colors"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#848994]">
            {project.deliverables?.length || 4} Deliverables
          </span>
        </div>
      </div>
    </motion.article>
  );
}
