import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES_LIST = [
  { id: "photography", title: "Commercial Photography & Videography" },
  { id: "fashion", title: "Fashion & Textile Print Design" },
  { id: "branding", title: "Branding & Packaging Systems" },
  { id: "spatial", title: "Spatial & Exhibition Booth Architecture" },
  { id: "digital", title: "Web Design & Digital Engineering" },
  { id: "content", title: "Content Production & Social Media" },
  { id: "strategy", title: "Creative Direction & Brand Strategy" },
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

      // ScrollTrigger timeline scrubbed against the tall container height
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // Calculate exactly how far to move the track so the last item ends near the center
      const trackHeight = trackRef.current.scrollHeight;
      const totalDistance = trackHeight - window.innerHeight;

      tl.to(
        trackRef.current,
        {
          y: -totalDistance,
          ease: "none",
          duration: 1,
        },
        0
      );

      // Highlight the active centered item across the scroll timeline
      const windowHalf = window.innerHeight / 2;
      
      items.forEach((item, i) => {
        // Calculate the exact scroll progress where this item is in the middle of the screen
        const itemCenterOffset = item.offsetTop + item.offsetHeight / 2;
        const itemCenterProgress = (itemCenterOffset - windowHalf) / totalDistance;
        
        // Create a window around this progress for the highlight
        const itemStart = Math.max(0, itemCenterProgress - 0.15);
        const itemEnd = Math.min(1, itemCenterProgress + 0.15);

        tl.fromTo(
          item,
          { opacity: 0.18, scale: 0.92, color: "#6B7280" },
          {
            opacity: 1,
            scale: 1.06,
            color: "#ECE5D8",
            duration: 0.15,
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
              duration: 0.15,
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
    // Outer scroll container that creates the scroll duration (e.g. 260vh)
    <div
      ref={containerRef}
      className="relative w-full h-[280vh] bg-[#0a0a0a] text-[#ECE5D8] border-t border-white/5"
    >
      {/* Sticky Viewport-Height Stage (Zero React DOM mutations) */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        {/* Top & Bottom Fade Overlays */}
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        {/* Small Section Label */}
        <div className="absolute top-12 sm:top-16 z-20 text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-[#C8A25D] font-semibold font-sans">
            OUR SKILLS COVER
          </span>
        </div>

        {/* Center Viewport Stage for Vertically Moving Typography */}
        <div className="relative w-full max-w-6xl mx-auto px-4 text-center overflow-visible">
          <div
            ref={trackRef}
            className="relative flex flex-col items-center justify-start space-y-8 sm:space-y-12 will-change-transform pt-[50vh] pb-[50vh]"
          >
            {SERVICES_LIST.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => (itemsRef.current[index] = el)}
                className="font-syne text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight transition-all duration-200 select-none px-4"
                style={{ opacity: index === 0 ? 1 : 0.18 }}
              >
                <span className="text-[#C8A25D] mr-3 inline-block">✦</span>
                <span>{service.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle Scroll Hint */}
        <div className="absolute bottom-8 z-20 text-[11px] uppercase tracking-[0.25em] text-[#6B7280]">
          Scroll to Traverse Capabilities
        </div>
      </div>
    </div>
  );
}
