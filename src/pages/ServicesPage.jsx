import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, ArrowUpRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SeoMeta from "../components/SeoMeta";
import { SERVICES } from "../content/services";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const circularContainerRef = useRef(null);
  const circularMaskRef = useRef(null);
  const whiteSectionRef = useRef(null);
  const whiteWrapperRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      if (circularMaskRef.current) gsap.set(circularMaskRef.current, { clipPath: "circle(100% at 50% 50%)" });
      if (whiteWrapperRef.current) gsap.set(whiteWrapperRef.current, { clipPath: "inset(0% 0% 0% 0% round 0px)" });
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Circular Media Expansion on Scroll
      gsap.fromTo(
        circularMaskRef.current,
        { clipPath: "circle(14% at 50% 50%)" },
        {
          clipPath: "circle(100% at 50% 50%)",
          ease: "none",
          scrollTrigger: {
            trigger: circularContainerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
          },
        }
      );

      // 2. White Services Section Inset Rounded Reveal
      gsap.fromTo(
        whiteWrapperRef.current,
        { clipPath: "inset(3% 5% 3% 5% round 28px)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          ease: "none",
          scrollTrigger: {
            trigger: whiteSectionRef.current,
            start: "top 80%",
            end: "top 10%",
            scrub: 0.5,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const toggleAccordion = (index) => {
    setActiveAccordion((prev) => (prev === index ? -1 : index));
  };

  return (
    <>
      <SeoMeta
        title="Services & Disciplines"
        description="Explore Sree Shine Studio's core creative disciplines across commercial photography, textile design, visual identity, exhibitions, and digital engineering."
      />

      <div className="bg-black text-[#ECE5D8] min-h-screen">
        
        {/* Header Intro Title */}
        <section className="pt-28 sm:pt-36 md:pt-44 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-14 max-w-7xl mx-auto">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#C8A25D] font-semibold block mb-3 sm:mb-4 font-sans">
            DISCIPLINES & CAPABILITIES
          </span>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold font-heading uppercase text-[#ECE5D8]">
            Our Services
          </h1>
          <p className="max-w-2xl text-xs sm:text-sm md:text-base text-[#9CA3AF] uppercase tracking-wider mt-3 sm:mt-4 font-light">
            Comprehensive creative solutions built with precision, artistry, and technical excellence.
          </p>
        </section>

        {/* 1. Circular Media Presentation Section (Sticky Scroll Container) */}
        <div
          ref={circularContainerRef}
          className="relative w-full h-[180vh] sm:h-[220vh] bg-black"
        >
          <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
            <div
              ref={circularMaskRef}
              className="w-full h-full will-change-transform flex items-center justify-center"
              style={{ clipPath: "circle(14% at 50% 50%)" }}
            >
              <div className="relative w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2000&auto=format&fit=crop"
                  alt="Sree Shine Studio Atelier"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center px-4">
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#C8A25D] font-semibold block mb-2 font-sans">
                      ATELIER OF CREATION
                    </span>
                    <h2 className="font-syne text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white">
                      Where Vision Takes Form
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. White Inset Rounded Services Accordion Section */}
        <section
          ref={whiteSectionRef}
          className="relative py-16 sm:py-24 md:py-32 bg-black"
        >
          <div
            ref={whiteWrapperRef}
            className="w-full bg-[#ffffff] text-[#111111] py-14 sm:py-20 md:py-28 px-4 sm:px-8 lg:px-16 will-change-transform shadow-lg"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              
              {/* Left Side Large Heading */}
              <div className="lg:col-span-4 lg:sticky lg:top-36 space-y-4 sm:space-y-6">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8C6144] font-semibold block font-sans">
                  WHAT WE DO
                </span>
                <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#111111] leading-tight sm:leading-none">
                  Tailored Disciplines
                </h2>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  Every project at Sree Shine Studio is tailored to bridge the gap between creative ambition and tangible commercial success.
                </p>
                <div className="pt-2 sm:pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#111111] text-white hover:bg-[#8C6144] text-xs uppercase tracking-widest font-semibold transition-all shadow-md hover:scale-105 active:scale-95 group"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C8A25D] group-hover:text-white transition-colors" />
                  </Link>
                </div>
              </div>

              {/* Right Side Expandable Accordion Rows */}
              <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                {SERVICES.map((service, index) => {
                  const isOpen = activeAccordion === index;

                  return (
                    <div
                      key={service.id}
                      className="border-b border-black/10 transition-colors pb-3 sm:pb-4"
                    >
                      {/* Accordion Trigger Button */}
                      <button
                        type="button"
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex items-center justify-between py-4 sm:py-6 text-left cursor-pointer group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8C6144]"
                        aria-expanded={isOpen}
                        aria-controls={`service-desc-${service.id}`}
                      >
                        <div className="flex items-baseline gap-3 sm:gap-6">
                          <span className="text-xs sm:text-sm font-sans tracking-widest text-[#8C6144] font-semibold">
                            0{index + 1}
                          </span>
                          <h3 className="font-syne text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#111111] group-hover:text-[#8C6144] transition-colors">
                            {service.title}
                          </h3>
                        </div>

                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/15 flex items-center justify-center group-hover:border-[#8C6144] group-hover:bg-[#8C6144]/10 transition-all shrink-0 ml-3 sm:ml-4">
                          {isOpen ? (
                            <Minus className="w-4 h-4 text-[#8C6144]" />
                          ) : (
                            <Plus className="w-4 h-4 text-black group-hover:text-[#8C6144]" />
                          )}
                        </div>
                      </button>

                      {/* Accordion Content Panel */}
                      {isOpen && (
                        <div
                          id={`service-desc-${service.id}`}
                          className="pt-2 pb-5 sm:pb-6 pl-6 sm:pl-12 space-y-4 sm:space-y-6 animate-fadeIn"
                        >
                          <p className="text-xs sm:text-sm md:text-base text-[#444444] leading-relaxed max-w-2xl">
                            {service.description || service.summary}
                          </p>

                          {/* Deliverables Pills */}
                          {service.deliverables && (
                            <div className="space-y-2 sm:space-y-3">
                              <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[#111111] block">
                                Key Deliverables:
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-xl">
                                {service.deliverables.map((item, dIdx) => (
                                  <div key={dIdx} className="flex items-center gap-2 text-xs text-[#555555]">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6144] shrink-0" />
                                    <span>{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="pt-2">
                            <Link
                              to={`/services/${service.slug}`}
                              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#8C6144] font-semibold hover:underline"
                            >
                              <span>Explore Full Case & Deliverables</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
}
