import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES_LIST = [
  { id: "photography", title: "Photography — Product & Wedding Photography" },
  { id: "web-design", title: "Web Design" },
  { id: "design", title: "Design" },
  { id: "visual-merchandising", title: "Visual Merchandising" },
  { id: "e-com", title: "E-Commerce" },
  { id: "social-media", title: "Social Media" },
  { id: "branding", title: "Branding" },
];

export default function FlolapoSkillsRotator() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const items = itemsRef.current.filter(Boolean);
      const totalItems = items.length;
      if (totalItems === 0) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });

      const isMobile = window.innerWidth < 640;
      const stepDistance = isMobile ? 60 : 80;
      const totalDistance = (totalItems - 1) * stepDistance;

      tl.to(
        trackRef.current,
        {
          y: -totalDistance,
          ease: "none",
          duration: 1,
        },
        0
      );

      items.forEach((item, i) => {
        const itemCenter = i / (totalItems - 1);
        const itemStart = Math.max(0, itemCenter - 0.14);
        const itemEnd = Math.min(1, itemCenter + 0.14);

        tl.fromTo(
          item,
          { opacity: 0.18, scale: 0.92, color: "#6B7280" },
          {
            opacity: 1,
            scale: 1.04,
            color: "#ECE5D8",
            duration: 0.14,
            ease: "power1.inOut",
          },
          itemStart
        );

        if (i < totalItems - 1) {
          tl.to(
            item,
            {
              opacity: 0.18,
              scale: 0.92,
              color: "#6B7280",
              duration: 0.14,
              ease: "power1.inOut",
            },
            itemEnd
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[220vh] sm:h-[260vh] bg-black text-[#ECE5D8] border-t border-white/10"
    >
      {/* Sticky Viewport-Height Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4">
        {/* Top & Bottom Gradient Fades */}
        <div className="absolute top-0 left-0 right-0 h-28 sm:h-40 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

        {/* Section Label */}
        <div className="absolute top-10 sm:top-16 z-20 text-center px-4">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#C8A25D] font-semibold">
            OUR SKILLS COVER
          </span>
        </div>

        {/* Center Viewport Stage for Vertically Moving Typography */}
        <div className="relative w-full max-w-5xl mx-auto text-center overflow-visible">
          <div
            ref={trackRef}
            className="flex flex-col items-center justify-center space-y-6 sm:space-y-10 py-8 will-change-transform"
          >
            {SERVICES_LIST.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => (itemsRef.current[index] = el)}
                className="font-heading text-lg xs:text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight transition-all duration-200 select-none px-4 max-w-4xl"
                style={{ opacity: index === 0 ? 1 : 0.18 }}
              >
                <span className="text-[#C8A25D] mr-2 sm:mr-3 inline-block text-xs sm:text-lg">✦</span>
                <span className="break-words">{service.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle Scroll Hint */}
        <div className="absolute bottom-8 z-20 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#6B7280] text-center px-4">
          Scroll to Traverse Capabilities
        </div>
      </div>
    </div>
  );
}



