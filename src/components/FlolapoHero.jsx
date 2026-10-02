import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FlolapoHero() {
  const sectionRef = useRef(null);
  const captionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      if (titleRef.current) gsap.set(titleRef.current, { opacity: 1, y: 0 });
      if (subtitleRef.current) gsap.set(subtitleRef.current, { opacity: 1, y: 0 });
      if (footerRef.current) gsap.set(footerRef.current, { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Entrance animation
      const tl = gsap.timeline();
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.95, ease: "power3.out" },
        0.05
      );
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.85, ease: "power3.out" },
        0.25
      );
      tl.fromTo(
        footerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        0.5
      );

      // 2. Scroll Parallax: Title moves upward and gradually fades as it leaves view
      gsap.to(captionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
        y: -70,
        opacity: 0.15,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToExplore = () => {
    const el = document.getElementById("showcase-gallery");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-36 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-14 bg-black text-[#ECE5D8] overflow-hidden"
    >
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop")' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 pointer-events-none" />

      {/* Main Hero Center Caption with Parallax Container */}
      <div
        ref={captionRef}
        className="relative z-10 my-auto flex flex-col items-center text-center max-w-6xl mx-auto w-full will-change-transform"
      >
        {/* Massive Agency Title */}
        <div ref={titleRef} className="w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading uppercase text-[#ECE5D8]">
            Sree Shine Studio
          </h1>
        </div>

        {/* Uppercase Cinematic Manifesto Subtitle */}
        <div ref={subtitleRef} className="mt-6 sm:mt-8 max-w-3xl px-2">
          <p className="text-xs sm:text-sm md:text-base text-[#9CA3AF] uppercase tracking-widest leading-relaxed font-light font-sans">
            WE ARE A CREATIVE STUDIO, SPECIALIZED IN STRATEGY, BRANDING DESIGN, COMMERCIAL PHOTOGRAPHY, AND DEVELOPMENT.
            <br className="hidden sm:inline" />
            <span className="block mt-2 text-[#C8A25D] font-medium tracking-wider">
              OUR WORK IS ALWAYS AT THE INTERSECTION OF ARTISTRY AND TECHNOLOGY.
            </span>
            <span className="block mt-3 text-xs sm:text-sm text-[#ECE5D8] tracking-[0.2em] font-normal">
              Where creativity comes to life · We take your Brand Flight!
            </span>
          </p>
        </div>
      </div>

      {/* Hero Footer Bar */}
      <div
        ref={footerRef}
        className="relative z-10 flex items-center justify-between w-full pt-8 border-t border-white/10 text-xs text-[#9CA3AF] uppercase tracking-wider font-sans"
      >
        {/* Left: Scroll to Explore Button */}
        <button
          type="button"
          onClick={handleScrollToExplore}
          className="group inline-flex items-center gap-3 cursor-pointer text-[#9CA3AF] hover:text-[#C8A25D] transition-colors focus-visible:outline-none"
          aria-label="Scroll to Explore Projects"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C8A25D] group-hover:bg-[#C8A25D]/10 transition-all">
            <ArrowDown className="w-3.5 h-3.5 text-[#C8A25D] transform group-hover:translate-y-0.5 transition-transform" />
          </div>
          <span className="font-medium tracking-widest">Scroll to Explore</span>
        </button>

        {/* Right: Info Tag */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C8A25D] animate-pulse" />
          <span className="text-[#ECE5D8] tracking-widest font-medium">Featured Disciplines</span>
        </div>
      </div>
    </section>
  );
}
