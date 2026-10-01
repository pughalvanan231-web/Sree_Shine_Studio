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
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#FBF9F5] border border-[#DDD2BF]/80 hover:border-[#C8A25D] hover:bg-white hover:shadow-lg transition-all duration-300"
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#F4EFE6] group-hover:bg-[#C8A25D]/15 flex items-center justify-center text-[#A67C1E] transition-colors duration-200">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="font-serif text-sm font-medium text-[#C2B39A]">
            0{index + 1}
          </span>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#191B1E] group-hover:text-[#A67C1E] transition-colors">
          <Link to={`/services/${service.slug}`} className="focus-visible:outline-none">
            {service.title}
          </Link>
        </h3>

        <p className="mt-2.5 text-sm text-[#585C65] leading-relaxed line-clamp-2">
          {service.summary}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[#DDD2BF]/40 flex items-center justify-between">
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B2B38] group-hover:text-[#A67C1E] transition-colors"
        >
          <span>Explore Service</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
        <span className="text-[11px] text-[#848994]">
          {service.deliverables?.length || 4} Deliverables
        </span>
      </div>
    </motion.div>
  );
}
