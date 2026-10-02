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

const CLIENT_ROW_4 = [
  { name: "SAFFRON COUTURE", category: "Bridal Wear" },
  { name: "NEXUS DIGIT", category: "Web Applications" },
  { name: "HARMONY GOODS", category: "Retail Merchandising" },
  { name: "STUDIO VEL", category: "Brand Identity" },
  { name: "PARAMOUNT", category: "Commercial Shoots" },
  { name: "ALTIUS", category: "Industrial Exhibits" },
];

export default function FlolapoMovingGallery() {
  const sectionRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);
  const row4Ref = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Row 1: Moves Left on Scroll
      gsap.fromTo(
        row1Ref.current,
        { x: "0%" },
        {
          x: "-20%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        }
      );

      // Row 2: Moves Right on Scroll
      gsap.fromTo(
        row2Ref.current,
        { x: "-20%" },
        {
          x: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        }
      );

      // Row 3: Moves Left on Scroll
      gsap.fromTo(
        row3Ref.current,
        { x: "0%" },
        {
          x: "-20%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        }
      );

      // Row 4: Moves Right on Scroll
      gsap.fromTo(
        row4Ref.current,
        { x: "-20%" },
        {
          x: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderRowItems = (items) => {
    const combined = [...items, ...items, ...items];
    return combined.map((item, idx) => (
      <div
        key={idx}
        className="px-6 sm:px-8 py-4 sm:py-5 mx-2 rounded-xl bg-[#121212] text-[#ECE5D8] border border-white/5 shrink-0 flex items-center justify-between gap-5 min-w-[220px] sm:min-w-[280px] hover:border-[#C8A25D]/40 transition-colors group cursor-default"
      >
        <div>
          <h4 className="font-heading text-sm sm:text-base font-bold uppercase tracking-wider text-[#ECE5D8] group-hover:text-[#C8A25D] transition-colors">
            {item.name}
          </h4>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#9CA3AF] block mt-0.5">
            {item.category}
          </span>
        </div>
        <span className="text-[#C8A25D] text-xs opacity-50 group-hover:opacity-100 transition-opacity">
          ✦
        </span>
      </div>
    ));
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#0a0a0a] text-[#ECE5D8] border-t border-white/10 overflow-hidden"
    >
      <div className="site-container mb-12 text-center">
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#C8A25D] font-semibold block mb-2">
          TRUSTED COLLABORATIONS
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#ECE5D8]">
          Brands We’ve Empowered
        </h2>
      </div>

      {/* 4 Alternating Scroll-Linked Rows */}
      <div className="space-y-3.5 will-change-transform">
        <div className="w-full overflow-hidden">
          <div ref={row1Ref} className="flex w-max will-change-transform">
            {renderRowItems(CLIENT_ROW_1)}
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div ref={row2Ref} className="flex w-max will-change-transform">
            {renderRowItems(CLIENT_ROW_2)}
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div ref={row3Ref} className="flex w-max will-change-transform">
            {renderRowItems(CLIENT_ROW_3)}
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div ref={row4Ref} className="flex w-max will-change-transform">
            {renderRowItems(CLIENT_ROW_4)}
          </div>
        </div>
      </div>
    </section>
  );
}
