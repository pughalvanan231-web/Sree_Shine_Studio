import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CLIENT_ROW_1 = [
  { name: "AURA LUXE", category: "Apparel & Haute Couture" },
  { name: "KAVERI BOTANICALS", category: "Organic Skincare" },
  { name: "VANYA SILKS", category: "Handloom Heritage" },
  { name: "ZENITH EXPO", category: "Spatial & Trade Booths" },
  { name: "ELEGANTE", category: "Jewellery & Lifestyle" },
  { name: "SOMA STUDIO", category: "Architectural Design" },
];

const CLIENT_ROW_2 = [
  { name: "LUMINA CO.", category: "Lighting & Space" },
  { name: "PRAVAAS TEXTILES", category: "Textile Craft" },
  { name: "NOVA FORM", category: "Digital Interface" },
  { name: "ATELIER 26", category: "Editorial Photography" },
  { name: "VEDA LIVING", category: "Home & Ceramics" },
  { name: "MAISON SHINE", category: "Fashion & Identity" },
];

const CLIENT_ROW_3 = [
  { name: "ORION COMMERCE", category: "Packaging Systems" },
  { name: "CHROMA LAB", category: "Visual Direction" },
  { name: "INDUS CRAFT", category: "Artisanal Goods" },
  { name: "VERVE SPACES", category: "Exhibition Pavilions" },
  { name: "SOLARIS", category: "Clean Beauty" },
  { name: "TERRA FIRMA", category: "Spatial Architecture" },
];

export default function FlolapoMovingGallery() {
  const sectionRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Row 1: Continuous Slow Left
      gsap.to(row1Ref.current, {
        x: "-50%",
        ease: "none",
        duration: 38,
        repeat: -1,
      });

      // Row 2: Continuous Slow Right
      gsap.fromTo(
        row2Ref.current,
        { x: "-50%" },
        {
          x: "0%",
          ease: "none",
          duration: 42,
          repeat: -1,
        }
      );

      // Row 3: Continuous Slow Left
      gsap.to(row3Ref.current, {
        x: "-50%",
        ease: "none",
        duration: 40,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderRowItems = (items) => {
    // Quadruple items to prevent blank edges during continuous scroll
    const combined = [...items, ...items, ...items, ...items, ...items, ...items];
    return combined.map((item, idx) => (
      <div
        key={idx}
        className="px-4 xs:px-6 sm:px-8 py-3.5 xs:py-5 sm:py-6 mx-2 sm:mx-4 rounded-xl sm:rounded-2xl bg-[#121212] text-[#ECE5D8] border border-white/10 shadow-sm shrink-0 flex items-center justify-between gap-4 sm:gap-6 min-w-[200px] xs:min-w-[240px] sm:min-w-[280px] lg:min-w-[320px] hover:border-[#C8A25D] transition-colors group cursor-default"
      >
        <div>
          <h4 className="font-syne text-sm xs:text-base sm:text-lg font-bold uppercase tracking-wider text-[#ECE5D8] group-hover:text-[#C8A25D] transition-colors">
            {item.name}
          </h4>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#9CA3AF] block mt-0.5 font-sans">
            {item.category}
          </span>
        </div>
        <span className="text-[#C8A25D] text-xs font-semibold opacity-60 group-hover:opacity-100 transition-opacity shrink-0">
          ✦
        </span>
      </div>
    ));
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 md:py-32 bg-black text-[#ECE5D8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20 text-center">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#C8A25D] font-semibold block mb-2 sm:mb-3 font-sans">
          TRUSTED COLLABORATIONS & ATELIER PARTNERS
        </span>
        <h2 className="font-syne text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#ECE5D8]">
          Brands We’ve Empowered
        </h2>
      </div>

      {/* 3 Continuous Slow-Motion Rows */}
      <div className="space-y-4 sm:space-y-8 md:space-y-10 will-change-transform">
        {/* Row 1: Left */}
        <div className="w-full overflow-hidden">
          <div ref={row1Ref} className="flex w-max will-change-transform">
            {renderRowItems(CLIENT_ROW_1)}
          </div>
        </div>

        {/* Row 2: Right */}
        <div className="w-full overflow-hidden">
          <div ref={row2Ref} className="flex w-max will-change-transform">
            {renderRowItems(CLIENT_ROW_2)}
          </div>
        </div>

        {/* Row 3: Left */}
        <div className="w-full overflow-hidden">
          <div ref={row3Ref} className="flex w-max will-change-transform">
            {renderRowItems(CLIENT_ROW_3)}
          </div>
        </div>
      </div>
    </section>
  );
}
