import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { STUDIO_INFO } from "../content/studio";

export default function ContactInvitation() {
  return (
    <section className="py-20 sm:py-28 bg-[#0d0d0d] text-[#ECE5D8] border-t border-white/10 relative">
      <div className="site-container text-center space-y-6">
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block">
          Initiate Collaboration
        </span>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#ECE5D8]">
          Let’s Create Something Extraordinary
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-[#9CA3AF] prose-readable mx-auto leading-relaxed">
          From commercial photography and fashion textiles to brand identity and spatial architecture, we bring clarity and craft to your vision.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C8A25D] hover:bg-[#DFB873] text-black font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all duration-200 active:scale-95 shadow-md"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href={`mailto:${STUDIO_INFO.contact.email}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#151515] hover:bg-[#1f1f1f] text-[#ECE5D8] border border-white/10 font-medium text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all duration-200"
          >
            <span>{STUDIO_INFO.contact.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

