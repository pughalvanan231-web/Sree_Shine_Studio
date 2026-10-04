import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight } from "lucide-react";
import HeroBg from "../../download (1).jpg";
import WaterRippleBackground from "./WaterRippleBackground";

export default function FlolapoHero() {
  const handleScrollToExplore = () => {
    const el = document.getElementById("selected-works");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92svh] sm:min-h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-10 bg-[#0a0a0a] text-white overflow-hidden select-none">


      {/* Premium Water Ripple Background */}
      <div className="absolute inset-0 z-0">
        <WaterRippleBackground
          imageUrl={HeroBg}
          dropRadius={10}
          perturbance={0.01}
          resolution={128}
        >
          {() => (
            <>
              {/* Dark overlay so text stays readable */}
              <div className="absolute inset-0 bg-black/60 pointer-events-none" />
              {/* Subtle gold vignette at bottom */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 50% 100%, rgba(200,162,93,0.08) 0%, transparent 65%)",
                }}
              />
            </>
          )}
        </WaterRippleBackground>
      </div>

      {/* Frosted Glass Blur Layer — between bg and frames */}
      <div className="absolute inset-0 z-[1] pointer-events-none backdrop-blur-sm bg-black/00" />

      {/* Main Photographic Collage Stage */}
      <div className="site-container relative z-10 my-auto flex flex-col items-center justify-center py-4 sm:py-8 pointer-events-none">

        {/* Collage Wrapper */}
        <div className="relative w-full max-w-3xl sm:max-w-4xl mx-auto flex flex-col items-center">

          {/* Top Row: 3 Framed Photos */}
          <div className="relative w-full flex items-center justify-center gap-2.5 sm:gap-6 md:gap-8 mb-[-32px] sm:mb-[-54px] z-10">

            {/* Left Photo: Traditional Indian Bride in Saree */}
            <div className="w-20 xs:w-24 sm:w-36 md:w-44 aspect-[3/4] bg-black border-2 sm:border-4 border-white rounded-xs overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 pointer-events-auto">
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop"
                alt="Traditional Indian Wedding Photography"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Center Photo: Gold Jewelry Earrings on Podium */}
            <div className="w-20 xs:w-24 sm:w-36 md:w-44 aspect-[3/4] bg-black border-2 sm:border-4 border-white rounded-xs overflow-hidden shadow-2xl -mt-4 sm:-mt-10 hover:scale-105 transition-transform duration-300 pointer-events-auto">
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop"
                alt="Product and Jewelry Photography"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Photo: Fashion Model in Green Studio */}
            <div className="w-20 xs:w-24 sm:w-36 md:w-44 aspect-[3/4] bg-black border-2 sm:border-4 border-white rounded-xs overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 pointer-events-auto">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop"
                alt="Editorial Fashion Model Photography"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Main Feature Photo: Black & White Editorial Woman Portrait */}
          <div className="relative z-20 w-56 xs:w-64 sm:w-96 md:w-[480px] aspect-[16/10] bg-black border-[3px] sm:border-[5px] border-white rounded-xs overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.75)] hover:scale-102 transition-transform duration-300 pointer-events-auto">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=85&w=1200&auto=format&fit=crop"
              alt="Editorial Portrait Photography"
              className="w-full h-full object-cover filter grayscale contrast-110"
            />
          </div>

          {/* Bottom Peeking Photo: Silk Drape Saree */}
          <div className="relative z-10 w-20 xs:w-24 sm:w-32 md:w-36 aspect-[3/4] bg-black border-2 sm:border-4 border-white rounded-xs overflow-hidden shadow-xl -mt-4 sm:-mt-10 hover:scale-105 transition-transform duration-300 pointer-events-auto">
            <img
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop"
              alt="Silk and Product Photography"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Sized "PHOTOGRAPHY" Title Overlay (100% Contained on all Viewports) */}
          <div className="relative z-30 -mt-6 sm:-mt-12 md:-mt-16 text-center pointer-events-none w-full max-w-full px-1">
            <h1
              className="font-bold uppercase text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.75)] leading-none select-none tracking-normal sm:tracking-[0.04em]"
              style={{
                fontFamily: "'Bebas Neue', 'Oswald', 'Six Caps', sans-serif",
                fontSize: "clamp(2.3rem, 13vw, 10.5rem)",
              }}
            >
              PHOTOGRAPHY
            </h1>
          </div>

        </div>

      </div>

      {/* Hero Bottom Bar */}
      <div className="site-container relative z-20 flex items-center justify-between pt-4 border-t border-white/20 text-xs text-white/80 pointer-events-none">
        <button
          type="button"
          onClick={handleScrollToExplore}
          className="inline-flex items-center gap-2 uppercase tracking-widest text-white/90 hover:text-white transition-colors cursor-pointer pointer-events-auto"
          aria-label="Scroll to Explore"
        >
          <ArrowDown className="w-3.5 h-3.5 text-white animate-bounce" />
          <span>Scroll to Explore</span>
        </button>

        <div className="flex items-center gap-4">
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-black/40 hover:bg-black text-white text-xs uppercase tracking-wider font-semibold transition-all border border-white/20 pointer-events-auto"
          >
            <span>Explore Work</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </section>
  );
}
