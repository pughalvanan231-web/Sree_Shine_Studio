import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function FlolapoHero() {
  const handleScrollToExplore = () => {
    const el = document.getElementById("selected-works");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90svh] sm:min-h-screen w-full flex flex-col justify-between pt-32 sm:pt-40 pb-10 sm:pb-12 bg-[#0a0a0a] text-[#ECE5D8] overflow-hidden">
      {/* Subtle Background Ambience */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-25 filter grayscale"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop")' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a] pointer-events-none" />

      {/* Main Hero Content */}
      <div className="site-container relative z-10 my-auto flex flex-col items-center text-center">
        
        {/* Label */}
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block mb-4 sm:mb-6">
          Creative Studio & Agency
        </span>

        {/* Big Short Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading uppercase text-[#ECE5D8] tracking-tight leading-[1.05] max-w-5xl">
          Crafting Visual Significance.
        </h1>

        {/* 1-2 Short Lines of Supporting Text */}
        <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-[#9CA3AF] prose-hero mx-auto leading-relaxed">
          We partner with ambitious brands to create commercial photography, tactile textiles, distinct identities, and digital experiences.
        </p>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C8A25D] hover:bg-[#DFB873] text-black font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-md transition-all duration-200 active:scale-95"
          >
            <span>Explore Work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#151515] hover:bg-[#202020] text-[#ECE5D8] border border-white/10 font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all duration-200"
          >
            <span>Disciplines</span>
          </Link>
        </div>

      </div>

      {/* Hero Footer Bar */}
      <div className="site-container relative z-10 flex items-center justify-between pt-6 border-t border-white/10 text-xs text-[#9CA3AF]">
        <button
          type="button"
          onClick={handleScrollToExplore}
          className="inline-flex items-center gap-2 uppercase tracking-widest text-[#9CA3AF] hover:text-[#C8A25D] transition-colors focus:outline-none"
          aria-label="Scroll to Explore"
        >
          <ArrowDown className="w-3.5 h-3.5 text-[#C8A25D]" />
          <span>Scroll to Explore</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C8A25D]" />
          <span className="text-[11px] uppercase tracking-wider text-[#ECE5D8]">Bengaluru · Coimbatore</span>
        </div>
      </div>
    </section>
  );
}

