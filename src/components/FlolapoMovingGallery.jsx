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
          x: "-22%",
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
        { x: "-22%" },
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
          x: "-22%",
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
        { x: "-22%" },
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
    // Quadruple items to prevent blank edges during scroll
    const combined = [...items, ...items, ...items, ...items];
    return combined.map((item, idx) => (
      <div
        key={idx}
        className="px-6 sm:px-10 py-5 sm:py-7 mx-2.5 rounded-2xl bg-black text-[#ECE5D8] border border-white/10 shadow-sm shrink-0 flex items-center justify-between gap-6 min-w-[240px] sm:min-w-[300px] hover:border-[#C8A25D] transition-colors group cursor-default"
      >
        <div>
          <h4 className="font-syne text-base sm:text-lg font-bold uppercase tracking-wider text-[#ECE5D8] group-hover:text-[#C8A25D] transition-colors">
            {item.name}
          </h4>
          <span className="text-[11px] uppercase tracking-widest text-[#9CA3AF] block mt-0.5 font-sans">
            {item.category}
          </span>
        </div>
        <span className="text-[#C8A25D] text-xs font-semibold opacity-60 group-hover:opacity-100 transition-opacity">
          ✦
        </span>
      </div>
    ));
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-36 bg-[#ffffff] text-[#111111] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[#8C6144] font-semibold block mb-3 font-sans">
          TRUSTED COLLABORATIONS & ATELIER PARTNERS
        </span>
        <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#111111]">
          Brands We’ve Empowered
        </h2>
      </div>

      {/* 4 Alternating Scroll-Linked Rows */}
      <div className="space-y-4 will-change-transform">
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

        {/* Row 4: Right */}
        <div className="w-full overflow-hidden">
          <div ref={row4Ref} className="flex w-max will-change-transform">
            {renderRowItems(CLIENT_ROW_4)}
          </div>
        </div>
      </div>
    </section>
  );
}
