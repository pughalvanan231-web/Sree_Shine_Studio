import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Camera, 
  Sparkles, 
  Layers, 
  ShoppingBag, 
  Building2, 
  Code2, 
  Share2, 
  Calendar,
  ArrowRight 
} from "lucide-react";

const ICON_MAP = {
  Camera,
  Sparkles,
  Layers,
  ShoppingBag,
  Building2,
  Code2,
  Share2,
  Calendar
};

export default function ServiceCard({ service, index = 0 }) {
  const IconComponent = ICON_MAP[service.icon] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.09, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col justify-between p-5 sm:p-7 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#C8A25D]/40 hover:shadow-lg transition-all duration-300"
    >
      <div>
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#C8A25D]/10 group-hover:bg-[#C8A25D]/20 flex items-center justify-center text-[#C8A25D] transition-colors duration-200">
            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <span className="font-heading text-xs sm:text-sm font-medium text-[#848994]">
            0{index + 1}
          </span>
        </div>

        <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-[#ECE5D8] group-hover:text-[#C8A25D] transition-colors">
          <Link to={`/services/${service.slug}`} className="focus-visible:outline-none">
            {service.title}
          </Link>
        </h3>

        <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed line-clamp-2">
          {service.summary}
        </p>
      </div>

      <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between">
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ECE5D8] group-hover:text-[#C8A25D] transition-colors"
        >
          <span>Explore Service</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
        <span className="text-[10px] sm:text-[11px] text-[#848994]">
          {service.deliverables?.length || 4} Deliverables
        </span>
      </div>
    </motion.div>
  );
}
