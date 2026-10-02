import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function FlolapoHero() {
  const handleScrollToExplore = () => {
    const el = document.getElementById("selected-works");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92svh] sm:min-h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-10 bg-[#b67352] text-white overflow-hidden select-none">
      
      {/* Terracotta Clay Background with Organic Palm Leaf Shadows */}
      <div
        className="absolute inset-0 z-0 bg-[#b67352] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 35%, rgba(205, 130, 95, 0.4) 0%, rgba(155, 85, 55, 0.85) 100%)
          `,
        }}
      />

      {/* Palm Leaf Shadow Graphic Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-25 pointer-events-none mix-blend-multiply bg-cover bg-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=2000&auto=format&fit=crop")`,
        }}
      />

      {/* Main Photographic Collage Stage (Exact Match to Image 2) */}
      <div className="site-container relative z-10 my-auto flex flex-col items-center justify-center py-4 sm:py-8">
        
        {/* Collage Wrapper */}
        <div className="relative w-full max-w-3xl sm:max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Top Row: 3 Framed Photos */}
          <div className="relative w-full flex items-center justify-center gap-3 sm:gap-6 md:gap-8 mb-[-36px] sm:mb-[-54px] z-10">
            
            {/* Left Photo: Traditional Indian Bride in Saree */}
            <div className="w-24 sm:w-36 md:w-44 aspect-[3/4] bg-black border-[3px] sm:border-4 border-black rounded-xs overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop"
                alt="Traditional Indian Wedding Photography"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Center Photo: Gold Jewelry Earrings on Podium */}
            <div className="w-24 sm:w-36 md:w-44 aspect-[3/4] bg-black border-[3px] sm:border-4 border-black rounded-xs overflow-hidden shadow-2xl -mt-6 sm:-mt-10 hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop"
                alt="Product and Jewelry Photography"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Photo: Fashion Model in Green Studio */}
            <div className="w-24 sm:w-36 md:w-44 aspect-[3/4] bg-black border-[3px] sm:border-4 border-black rounded-xs overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop"
                alt="Editorial Fashion Model Photography"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Main Feature Photo: Black & White Editorial Woman Portrait */}
          <div className="relative z-20 w-64 sm:w-96 md:w-[480px] aspect-[16/10] bg-black border-4 sm:border-[5px] border-black rounded-xs overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.75)] hover:scale-102 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=85&w=1200&auto=format&fit=crop"
              alt="Editorial Portrait Photography"
              className="w-full h-full object-cover filter grayscale contrast-110"
            />
          </div>

          {/* Bottom Peeking Photo: Silk Drape Saree */}
          <div className="relative z-10 w-24 sm:w-32 md:w-36 aspect-[3/4] bg-black border-[3px] sm:border-4 border-black rounded-xs overflow-hidden shadow-xl -mt-6 sm:-mt-10 hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop"
              alt="Silk and Textile Photography"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Giant Condensed "PHOTOGRAPHY" Title Overlay (Exact Match to Image 2) */}
          <div className="relative z-30 -mt-10 sm:-mt-16 md:-mt-20 text-center pointer-events-none">
            <h1 className="font-sixcaps text-7xl xs:text-8xl sm:text-9xl md:text-[140px] lg:text-[170px] xl:text-[200px] font-normal uppercase tracking-wider text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)] leading-none">
              PHOTOGRAPHY
            </h1>
          </div>

        </div>

      </div>

      {/* Hero Bottom Bar */}
      <div className="site-container relative z-20 flex items-center justify-between pt-4 border-t border-white/20 text-xs text-white/80">
        <button
          type="button"
          onClick={handleScrollToExplore}
          className="inline-flex items-center gap-2 uppercase tracking-widest text-white/90 hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll to Explore"
        >
          <ArrowDown className="w-3.5 h-3.5 text-white animate-bounce" />
          <span>Scroll to Explore</span>
        </button>

        <div className="flex items-center gap-4">
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-black/40 hover:bg-black text-white text-xs uppercase tracking-wider font-semibold transition-all border border-white/20"
          >
            <span>Explore Work</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </section>
  );
}
