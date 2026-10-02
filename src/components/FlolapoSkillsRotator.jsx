import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES_LIST = [
  { id: "photography", title: "Photography — Product Photography & Wedding Photography" },
  { id: "web-design", title: "Web Design" },
  { id: "design", title: "Design" },
  { id: "visual-merchandising", title: "Visual Merchandising" },
  { id: "e-com", title: "E-Commerce" },
  { id: "social-media", title: "Social Media" },
  { id: "branding", title: "Branding" },
];

export default function FlolapoSkillsRotator() {
  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const trackRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Small delay to ensure all parent layouts and fonts are rendered
    const timeoutId = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    const ctx = gsap.context(() => {
      const items = itemsRef.current.filter(Boolean);
      const totalItems = items.length;
      if (totalItems === 0 || !trackRef.current || !containerRef.current) return;

      // Calculate total vertical distance to scroll through all items
      const firstItem = items[0];
      const lastItem = items[totalItems - 1];
      const totalScrollDistance = lastItem.offsetTop - firstItem.offsetTop;

      // Master ScrollTrigger timeline pinned to the outer container
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      // Move track so each item aligns perfectly with the center
      tl.to(
        trackRef.current,
        {
          y: -totalScrollDistance,
          ease: "none",
          duration: 1,
        },
        0
      );

      // Highlight each item as it reaches the center of the viewport
      items.forEach((item, i) => {
        const itemCenter = i / (totalItems - 1);
        const range = 0.16;
        const itemStart = Math.max(0, itemCenter - range);
        const itemEnd = Math.min(1, itemCenter + range);

        // Highlight active centered item
        tl.fromTo(
          item,
          { opacity: 0.2, scale: 0.92, color: "#6B7280" },
          {
            opacity: 1,
            scale: 1.06,
            color: "#ECE5D8",
            duration: range,
            ease: "power1.inOut",
          },
          itemStart
        );

        // Dim when leaving center (except the last item when scrolled to bottom)
        if (i < totalItems - 1) {
          tl.to(
            item,
            {
              opacity: 0.2,
              scale: 0.92,
              color: "#6B7280",
              duration: range,
              ease: "power1.inOut",
            },
            itemEnd
          );
        }
      });
    }, containerRef);

    return () => {
      clearTimeout(timeoutId);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[280vh] bg-black text-[#ECE5D8] border-t border-white/10"
      aria-label="Capabilities and Skills Showcase"
    >
      {/* Sticky Viewport Stage */}
      <div
        ref={stageRef}
        className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4"
      >
        {/* Top & Bottom Depth Vignettes */}
        <div className="absolute top-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />

        {/* Section Label */}
        <div className="absolute top-10 sm:top-16 z-20 text-center px-4">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#C8A25D] font-semibold">
            OUR SKILLS COVER
          </span>
        </div>

        {/* Center Viewport Stage for Vertically Moving Typography */}
        <div className="relative w-full max-w-5xl mx-auto text-center overflow-visible">
          <div
            ref={trackRef}
            className="flex flex-col items-center justify-center space-y-8 sm:space-y-12 py-10 will-change-transform"
          >
            {SERVICES_LIST.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => (itemsRef.current[index] = el)}
                className="font-heading text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight transition-all duration-200 select-none px-3 sm:px-6 max-w-4xl"
                style={{ opacity: index === 0 ? 1 : 0.2 }}
              >
                <span className="text-[#C8A25D] mr-2.5 sm:mr-4 inline-block text-sm sm:text-xl md:text-2xl">
                  ✦
                </span>
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
    </section>
  );
}
