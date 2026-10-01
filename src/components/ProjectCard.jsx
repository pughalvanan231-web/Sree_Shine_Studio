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
        "group relative flex flex-col justify-between rounded-2xl overflow-hidden bg-white border border-[#DDD2BF]/80 shadow-sm hover:shadow-xl transition-shadow duration-300",
        isLarge ? "md:col-span-2 md:row-span-2" : ""
      )}
    >
      {/* Image with Bottom-to-Top Clipping Mask Reveal & Scale Settle */}
      <Link 
        to={`/work/${project.slug}`}
        className="block relative overflow-hidden bg-[#ECE5D8] aspect-[4/3] focus-visible:outline-none"
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
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-[#0B2B38]/0 group-hover:bg-[#0B2B38]/20 transition-colors duration-300" />
        
        {/* Category Pill */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#FBF9F5]/92 backdrop-blur-md text-[#0B2B38] border border-[#DDD2BF] shadow-xs">
            {project.category}
          </span>
        </div>

        {/* Hover Arrow Badge */}
        <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#FBF9F5] text-[#0B2B38] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 shadow-md">
          <ArrowUpRight className="w-4 h-4 text-[#A67C1E]" />
        </div>
      </Link>

      {/* Info Section */}
      <div className="p-6 flex flex-col justify-between flex-1 bg-white">
        <div>
          <div className="flex items-center justify-between text-xs text-[#848994] mb-1.5">
            <span>{project.client}</span>
            <span>{project.year}</span>
          </div>
          
          <h3 className="font-serif text-2xl font-semibold text-[#191B1E] group-hover:text-[#A67C1E] transition-colors leading-snug">
            <Link to={`/work/${project.slug}`} className="focus-visible:outline-none">
              {project.title}
            </Link>
          </h3>
          
          <p className="mt-2 text-sm text-[#585C65] line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-[#F4EFE6] flex items-center justify-between">
          <Link
            to={`/work/${project.slug}`}
            className="text-xs font-semibold text-[#0B2B38] group-hover:text-[#A67C1E] inline-flex items-center gap-1 transition-colors"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <span className="text-[11px] uppercase tracking-wider text-[#848994]">
            {project.deliverables?.length || 4} Deliverables
          </span>
        </div>
      </div>
    </motion.article>
  );
}
