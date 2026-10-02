import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function FlolapoManifesto() {
  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a] text-[#ECE5D8] border-t border-white/10">
      <div className="site-container text-center space-y-6">
        <p className="text-xl sm:text-2xl md:text-3xl text-[#ECE5D8] font-light leading-relaxed prose-readable mx-auto">
          We combine <span className="text-[#C8A25D] font-normal">visual artistry</span> with precision engineering to create work that commands attention and endures.
        </p>

        <div className="pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C8A25D] hover:bg-[#DFB873] text-black font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-md transition-all duration-200 active:scale-95"
          >
            <span>Reach Out</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

