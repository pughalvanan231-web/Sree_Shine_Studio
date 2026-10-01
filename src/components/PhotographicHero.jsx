import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, Sparkles, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PhotographicHero() {
  const sectionRef = useRef(null);
  const entranceWrapperRef = useRef(null);
  const scrollWrapperRef = useRef(null);
  const textGroupRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const actionsRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // 1. Hero Entrance Animation (< 1.0s, completely non-blocking)
      if (!isReduced) {
        // Background photo entrance: zoom from 1.06 to 1.0
        gsap.fromTo(
          entranceWrapperRef.current,
          { scale: 1.06, opacity: 0.85 },
          { scale: 1, opacity: 1, duration: 0.95, ease: "power2.out" }
        );

        // Content group staggered upward entrance (y: 18px -> 0)
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.75 } });
        tl.fromTo(labelRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, delay: 0.1 })
          .fromTo(headingRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.55")
          .fromTo(subtextRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.5")
          .fromTo(actionsRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.45")
          .fromTo(indicatorRef.current, { opacity: 0 }, { opacity: 0.75, duration: 0.5 }, "-=0.3");
      }

      // 2. Scroll-Linked Parallax Animation (Separated Wrapper)
      if (!isReduced) {
        // Enlarge from 1.0 to 1.12 with vertical parallax
        gsap.to(scrollWrapperRef.current, {
          scale: isMobile ? 1.06 : 1.12,
          yPercent: isMobile ? 6 : 10,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.35,
            invalidateOnRefresh: true,
          }
        });

        // Move headline group upward by 40px
        gsap.to(textGroupRef.current, {
          y: isMobile ? -25 : -40,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.3,
          }
        });

        // Fade text only as it approaches the top and leaves viewport
        gsap.to(textGroupRef.current, {
          opacity: 0,
          ease: "power1.in",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "45% top",
            end: "bottom top",
            scrub: 0.3,
          }
        });
      }
    }, sectionRef);

    // Refresh ScrollTrigger after initial paint
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert(); // Clean up GSAP timelines and ScrollTriggers on unmount
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[92vh] lg:min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#0B2B38] mt-[72px] sm:mt-[80px]"
    >
      {/* Background Image Container (Separate entrance and scroll wrappers to prevent overwrites) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Layer A: Entrance Zoom Wrapper (1.06 -> 1.0) */}
        <div ref={entranceWrapperRef} className="w-full h-full">
          {/* Layer B: Scroll-Linked Parallax Wrapper (1.0 -> 1.12, yPercent: 10) with 20% overscan */}
          <div
            ref={scrollWrapperRef}
            className="w-full h-[122%] -top-[11%] relative will-change-transform"
          >
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=85&w=2400&auto=format&fit=crop"
              alt="Sree Shine Studio — Architectural Exhibition and Design Space"
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Subtle Dark Vignette & Gradient Overlays for optimal text contrast */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-[#0B2B38]/90 via-[#0B2B38]/50 to-[#0B2B38]/65" 
          aria-hidden="true" 
        />
        <div 
          className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B2B38]/25 to-[#0B2B38]/75" 
          aria-hidden="true" 
        />
      </div>

      {/* Centered Hero Content Group */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <div
          ref={textGroupRef}
          className="space-y-6 sm:space-y-8 flex flex-col items-center will-change-transform"
        >
          {/* 1. Small introductory label */}
          <div
            ref={labelRef}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-[0.25em] text-[#F9E29D] uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C8A25D]" />
            <span>SREE SHINE STUDIO</span>
          </div>

          {/* 2. Main Headline */}
          <h1
            ref={headingRef}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-medium tracking-tight text-white leading-[1.08] max-w-4xl drop-shadow-md"
          >
            Creative Experiences.<br />
            <span className="italic font-normal text-[#F9E29D]">Lasting Impressions.</span>
          </h1>

          {/* 3. Supporting Text */}
          <p
            ref={subtextRef}
            className="text-base sm:text-lg md:text-xl text-[#F3EFE7]/90 max-w-2xl font-normal leading-relaxed drop-shadow-xs"
          >
            Photography, branding, and exhibition design that bring your vision to life.
          </p>

          {/* 4. Actions: Primary button & Secondary link */}
          <div
            ref={actionsRef}
            className="flex flex-wrap items-center justify-center gap-5 pt-4"
          >
            {/* Primary Button: Explore Our Work */}
            <Link
              to="/work"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#C8A25D] hover:bg-[#F9E29D] text-[#0B2B38] text-sm font-semibold rounded-full shadow-lg shadow-black/20 hover:shadow-xl transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Our Work</span>
            </Link>

            {/* Secondary Text Link: Let's Talk */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-4 text-sm font-medium text-white hover:text-[#F9E29D] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full group"
            >
              <span>Let’s Talk</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div
        ref={indicatorRef}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center pointer-events-none z-10 opacity-75"
      >
        <ChevronDown className="w-5 h-5 text-white/70 animate-bounce mx-auto" />
      </div>
    </section>
  );
}
