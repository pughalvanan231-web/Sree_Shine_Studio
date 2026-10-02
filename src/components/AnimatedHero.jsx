import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Compass, Sparkles, ChevronDown } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function AnimatedHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Restrained upward parallax for desktop emblem as hero leaves view
  const emblemY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const auraOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[96vh] flex flex-col justify-between pt-28 sm:pt-32 pb-12 bg-black overflow-hidden"
    >
      {/* Radiant Background Aura and Ornamental Gold Arc */}
      <motion.div
        style={{ opacity: auraOpacity }}
        className="absolute top-1/2 right-10 lg:right-32 -translate-y-1/2 w-[340px] sm:w-[500px] lg:w-[620px] h-[340px] sm:h-[500px] lg:h-[620px] emblem-aura rounded-full pointer-events-none -z-0"
        aria-hidden="true"
      />

      {/* Decorative Golden Arch / Feather Line behind Emblem */}
      <svg
        className="absolute top-1/2 right-4 lg:right-24 -translate-y-1/2 w-[360px] sm:w-[540px] lg:w-[680px] h-[360px] sm:h-[540px] lg:h-[680px] pointer-events-none opacity-40 -z-0"
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="300"
          cy="300"
          r="260"
          stroke="#C8A25D"
          strokeWidth="1.2"
          strokeDasharray="6 8"
        />
        <circle
          cx="300"
          cy="300"
          r="285"
          stroke="#0F6B56"
          strokeWidth="0.8"
          strokeDasharray="4 12"
          opacity="0.5"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8 text-left order-2 lg:order-1"
          >
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4EFE6] border border-white/10 text-xs font-semibold text-[#0B2B38]">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A25D]" />
              <span>Sree Shine Studio · Creative Excellence</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] leading-[1.04] tracking-tight text-[#ECE5D8] font-medium">
                Your vision.<br />
                <span className="italic font-normal text-[#C8A25D]">Our creative</span> spark.
              </h1>

              <p className="text-lg sm:text-xl text-[#9CA3AF] max-w-xl font-normal leading-relaxed">
                Photography, branding, and digital experiences crafted to make your business shine.
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/work"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#0B2B38] hover:bg-[#0E5E8A] text-[#FBF9F5] text-sm font-medium rounded-full shadow-lg shadow-[#0B2B38]/15 hover:shadow-xl transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A25D]"
              >
                <Compass className="w-4 h-4 text-[#C8A25D]" />
                <span>Explore Our Work</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#F4EFE6] hover:bg-[#ECE5D8] text-[#ECE5D8] text-sm font-medium border border-white/10 rounded-full transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A25D]"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 text-[#A67C1E]" />
              </Link>
            </div>

            {/* Key Studio Pillars Mini Grid */}
            <div className="pt-8 border-t border-white/10/60 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <span className="block font-heading text-2xl font-semibold text-[#0B2B38]">8+</span>
                <span className="text-xs text-[#848994]">Disciplines in-house</span>
              </div>
              <div>
                <span className="block font-heading text-2xl font-semibold text-[#0B2B38]">100%</span>
                <span className="text-xs text-[#848994]">Tailored craft</span>
              </div>
              <div>
                <span className="block font-heading text-2xl font-semibold text-[#0B2B38]">Bengaluru</span>
                <span className="text-xs text-[#848994]">Creative studio</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Signature Peacock & Vel Animated Emblem Visual */}
          <motion.div
            style={{ y: emblemY }}
            className="lg:col-span-6 flex flex-col items-center justify-center relative order-1 lg:order-2 py-4 lg:py-0"
          >
            <div className="relative flex items-center justify-center p-4">
              <BrandLogo
                variant="full"
                animated={true}
                asLink={false}
                size="xl"
                className="transform scale-100 sm:scale-105"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="w-full text-center relative z-10 pt-6"
      >
        <a
          href="#selected-projects"
          className="inline-flex flex-col items-center gap-1.5 text-xs text-[#848994] hover:text-[#0B2B38] transition-colors focus-visible:outline-none"
          aria-label="Scroll to selected work"
        >
          <span className="uppercase tracking-widest text-[10px] font-semibold text-[#A67C1E]">
            Scroll to Explore
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#C8A25D]" />
        </a>
      </motion.div>
    </section>
  );
}
