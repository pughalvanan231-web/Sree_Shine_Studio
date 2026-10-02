import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// High-fidelity client logo components matching the user's reference image
function AnnapoornaLogo() {
  return (
    <div className="flex items-center justify-center h-16 sm:h-20 px-4">
      <span className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#ECE5D8] group-hover:text-[#4A86E8] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <span className="text-3xl sm:text-4xl text-[#38761D] inline-block mr-0.5">A</span>
        <span className="font-semibold text-[#1E40AF]">nnapoorna</span>
      </span>
    </div>
  );
}

function GreenfieldHousingLogo() {
  return (
    <div className="flex flex-col items-center justify-center h-16 sm:h-20 px-4 text-center">
      {/* Green Leaf Icon */}
      <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#2E7D32] mb-1 group-hover:scale-110 transition-transform" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 3C10 3 4 8 4 16c0 6.5 4.5 12 11 13 1-.5 1-1.5 1-2.5 0-3-2-5.5-5-6.5 4-.5 7.5-2.5 9.5-6 2-3.5 2.5-8 1.5-11.5-.5-.5-1-.5-2-.5z" />
        <path d="M17 14c3 0 6 2 7 5 3-2 4-5.5 4-9 0-4-3-6.5-6-7-.5 4-2 8-5 11z" fill="#4CAF50" />
      </svg>
      <span className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider text-[#ECE5D8]">
        GREENFIELD
      </span>
      <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#9CA3AF] -mt-0.5">
        HOUSING
      </span>
      <span className="text-[9px] italic text-[#C8A25D] font-serif tracking-wide">
        Land of Happiness
      </span>
    </div>
  );
}

function SriGanapathySilksLogo() {
  return (
    <div className="flex flex-col items-center justify-center h-16 sm:h-20 px-4 text-center">
      {/* Ornate G Emblem */}
      <div className="w-8 h-8 rounded-full border-2 border-[#2E7D32] flex items-center justify-center text-[#2E7D32] font-bold text-xs mb-1 group-hover:border-[#C8A25D] group-hover:text-[#C8A25D] transition-colors">
        G
      </div>
      <div className="border border-[#2E7D32] rounded px-2.5 py-0.5 bg-[#0f1f14]">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#4ADE80]">
          SRI GANAPATHY SILKS
        </span>
      </div>
      <span className="text-[8px] uppercase tracking-wider text-[#9CA3AF] mt-0.5">
        Quality. For Generations...
      </span>
    </div>
  );
}

function TuskersHillLogo() {
  return (
    <div className="flex flex-col items-center justify-center h-16 sm:h-20 px-4 text-center">
      {/* Elephant with T arch */}
      <div className="flex items-center justify-center mb-1">
        <span className="font-serif text-2xl font-bold text-[#ECE5D8] group-hover:text-[#C8A25D] transition-colors">
          🐘 T
        </span>
      </div>
      <span className="font-serif text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#ECE5D8]">
        TUSKERS HILL
      </span>
      <span className="text-[8px] uppercase tracking-[0.2em] text-[#9CA3AF]">
        Resort & Banquets · Anaikatti
      </span>
    </div>
  );
}

function GemsGoldLogo() {
  return (
    <div className="flex flex-col items-center justify-center h-16 sm:h-20 px-4 text-center">
      <span className="font-serif text-xl sm:text-2xl font-bold text-[#DC2626] group-hover:text-[#C8A25D] transition-colors tracking-tight">
        Gem's
      </span>
      <span className="font-serif text-lg sm:text-xl font-bold text-[#DC2626] -mt-1 group-hover:text-[#C8A25D] transition-colors">
        gold
      </span>
      <span className="text-[8px] uppercase tracking-widest text-[#9CA3AF]">
        -SINCE 1966-
      </span>
    </div>
  );
}

function PadmakshiLogo() {
  return (
    <div className="flex flex-col items-center justify-center h-16 sm:h-20 px-4 text-center">
      {/* Lotus Eye Golden Icon */}
      <svg className="w-8 h-8 text-[#C8A25D] mb-1 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3c-2 3-5 5-8 6 3 3 5 7 8 12 3-5 5-9 8-12-3-1-6-3-8-6z" opacity="0.8" />
        <circle cx="12" cy="11" r="2.5" fill="#0a0a0a" />
      </svg>
      <span className="font-serif text-base sm:text-lg text-[#C8A25D] tracking-wide">
        Padmakshi
      </span>
    </div>
  );
}

function OceanSapphireLogo() {
  return (
    <div className="flex flex-col items-center justify-center h-16 sm:h-20 px-4 text-center">
      <div className="flex items-center gap-1.5">
        <span className="font-sans text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] text-[#ECE5D8]">
          OCEAN
        </span>
        {/* Diamond Icon */}
        <span className="text-[#C8A25D] text-sm group-hover:scale-125 transition-transform">
          💎
        </span>
        <span className="font-sans text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] text-[#ECE5D8]">
          SAPPHIRE
        </span>
      </div>
      <span className="text-[8px] uppercase tracking-[0.35em] text-[#C8A25D] mt-0.5">
        DIAMONDS
      </span>
    </div>
  );
}

function CenneysGatewayLogo() {
  return (
    <div className="flex flex-col items-center justify-center h-16 sm:h-20 px-4 text-center">
      {/* Octagon Sun / Crown Icon */}
      <svg className="w-8 h-8 text-[#C8A25D] mb-1 group-hover:rotate-45 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9" />
        <circle cx="12" cy="12" r="3" fill="#C8A25D" />
      </svg>
      <span className="font-serif text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#ECE5D8]">
        CENNEYS
      </span>
      <span className="font-serif text-[9px] uppercase tracking-[0.25em] text-[#9CA3AF] -mt-0.5">
        GATEWAY
      </span>
    </div>
  );
}

const BRAND_COMPONENTS_ROW_1 = [
  { id: "annapoorna", Component: AnnapoornaLogo },
  { id: "greenfield", Component: GreenfieldHousingLogo },
  { id: "ganapathy", Component: SriGanapathySilksLogo },
  { id: "tuskers", Component: TuskersHillLogo },
];

const BRAND_COMPONENTS_ROW_2 = [
  { id: "gems", Component: GemsGoldLogo },
  { id: "padmakshi", Component: PadmakshiLogo },
  { id: "ocean", Component: OceanSapphireLogo },
  { id: "cenneys", Component: CenneysGatewayLogo },
];

export default function FlolapoMovingGallery() {
  const sectionRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Row 1: Ultra Slow Left Glide on Scroll
      gsap.fromTo(
        row1Ref.current,
        { x: "0%" },
        {
          x: "-12%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );

      // Row 2: Ultra Slow Right Glide on Scroll
      gsap.fromTo(
        row2Ref.current,
        { x: "-12%" },
        {
          x: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderLogoRow = (items) => {
    const repeated = [...items, ...items, ...items, ...items];
    return repeated.map((item, idx) => {
      const LogoComp = item.Component;
      return (
        <div
          key={idx}
          className="px-8 sm:px-12 py-6 sm:py-8 mx-3 sm:mx-5 rounded-2xl sm:rounded-3xl bg-[#121212] border border-white/10 hover:border-[#C8A25D]/50 hover:bg-[#161616] shrink-0 flex items-center justify-center min-w-[240px] sm:min-w-[300px] h-32 sm:h-36 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group cursor-default"
        >
          <LogoComp />
        </div>
      );
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-36 bg-[#0a0a0a] text-[#ECE5D8] border-t border-white/10 overflow-hidden relative select-none"
      aria-label="Client Brand Logos"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#C8A25D]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="site-container mb-14 sm:mb-20 text-center relative z-10">
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#C8A25D] font-semibold block mb-3">
          TRUSTED COLLABORATIONS
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#ECE5D8]">
          Brands We’ve Empowered
        </h2>
      </div>

      {/* 2 Spacious Logo Rows with Ultra-Slow Subtle Motion */}
      <div className="space-y-6 sm:space-y-8 will-change-transform relative z-10">
        {/* Row 1: Left */}
        <div className="w-full overflow-hidden">
          <div ref={row1Ref} className="flex w-max will-change-transform">
            {renderLogoRow(BRAND_COMPONENTS_ROW_1)}
          </div>
        </div>

        {/* Row 2: Right */}
        <div className="w-full overflow-hidden">
          <div ref={row2Ref} className="flex w-max will-change-transform">
            {renderLogoRow(BRAND_COMPONENTS_ROW_2)}
          </div>
        </div>
      </div>
    </section>
  );
}
