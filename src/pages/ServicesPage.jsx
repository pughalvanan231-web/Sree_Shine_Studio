import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";
import SeoMeta from "../components/SeoMeta";
import DetailModal from "../components/DetailModal";
import { SERVICES } from "../content/services";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleScrollToExplore = () => {
    const nextSection = document.getElementById("services-list");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SeoMeta
        title="Our Services | Sree Shine Studio"
        description="Comprehensive creative capabilities at Sree Shine Studio — Photography, Creative Direction, Brand Identity, Web Design, and Spatial Environments."
      />

      <div className="bg-[#0a0a0a] text-[#ECE5D8] min-h-screen selection:bg-[#C8A25D] selection:text-black">
        {/* 1. EDITORIAL HERO */}
        <section className="relative min-h-[85vh] flex flex-col justify-between pt-32 sm:pt-40 pb-12 sm:pb-16 overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#C8A25D]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

          {/* Top Label */}
          <div className="site-container">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-[#C8A25D]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#C8A25D] font-semibold">
                OUR CAPABILITIES · DISCIPLINES
              </span>
            </motion.div>
          </div>

          {/* Giant Condensed Headline */}
          <div className="site-container my-auto py-10">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.5rem,13vw,11rem)] font-bold font-heading uppercase tracking-[-0.03em] leading-[0.85] text-[#ECE5D8]"
            >
              OUR SERVICES
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-xl text-[#9CA3AF] font-light leading-relaxed"
            >
              From luminous commercial photography to cohesive brand architecture, we craft holistic visual worlds with intentional art direction.
            </motion.p>
          </div>

          {/* Scroll To Explore Indicator */}
          <div className="site-container flex items-center justify-between border-t border-white/10 pt-6">
            <button
              type="button"
              onClick={handleScrollToExplore}
              className="group inline-flex items-center gap-3 text-xs tracking-[0.25em] text-[#ECE5D8]/70 hover:text-[#C8A25D] uppercase transition-colors cursor-pointer focus:outline-none"
            >
              <span>SCROLL TO EXPLORE</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="w-7 h-7 rounded-full border border-white/20 group-hover:border-[#C8A25D] flex items-center justify-center transition-colors"
              >
                <ArrowDown className="w-3.5 h-3.5 text-[#C8A25D]" />
              </motion.div>
            </button>

            <span className="text-[11px] font-mono text-[#6B7280] tracking-widest hidden sm:inline-block">
              08 CORE DISCIPLINES
            </span>
          </div>
        </section>

        {/* 2. LARGE EDITORIAL SHOWCASE VISUAL */}
        <section className="py-10 sm:py-16">
          <div className="site-container">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#121212] group shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=85&w=1800&auto=format&fit=crop"
                alt="Studio Craft & Photography"
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-[#ECE5D8]/80 font-medium">
                  Tactile Craft & Art Direction
                </span>
                <span className="text-xs font-mono text-[#C8A25D]">
                  Sree Shine Studio
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. EDITORIAL HORIZONTAL SERVICES LIST (Flólapo Style) */}
        <section id="services-list" className="py-20 sm:py-32 border-t border-white/10">
          <div className="site-container">
            <div className="mb-14 sm:mb-20 space-y-3">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block">
                Disciplines Index
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold font-heading uppercase tracking-tight text-[#ECE5D8]">
                CORE CAPABILITIES
              </h2>
            </div>

            {/* Horizontal Row List */}
            <div className="divide-y divide-white/10 border-y border-white/10">
              {SERVICES.map((service, index) => {
                const isHovered = hoveredIndex === index;
                const formattedNum = index < 9 ? `0${index + 1}` : `${index + 1}`;

                return (
                  <motion.div
                    key={service.id}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setSelectedService(service)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedService(service);
                      }
                    }}
                    className="group py-8 sm:py-12 px-2 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors cursor-pointer relative"
                  >
                    {/* Left: Number + Title */}
                    <div className="flex items-start md:items-center gap-6 sm:gap-10">
                      <span className="text-base sm:text-lg font-mono text-[#6B7280] group-hover:text-[#C8A25D] transition-colors pt-1 md:pt-0">
                        {formattedNum}
                      </span>
                      <div className="space-y-1">
                        <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading uppercase tracking-tight text-[#ECE5D8] group-hover:text-[#C8A25D] group-hover:translate-x-2 transition-all duration-300">
                          {service.shortTitle || service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-xl line-clamp-2">
                          {service.summary || service.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Right: Hover Image Peek & Action Arrow */}
                    <div className="flex items-center gap-6 self-end md:self-center">
                      {/* Optional Floating Image Preview Thumbnail */}
                      <div className="hidden lg:block w-28 h-16 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10">
                        <img
                          src={service.coverImage || service.heroImage}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C8A25D] group-hover:text-[#DFB873]">
                        <span className="hidden sm:inline">Explore Details</span>
                        <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-[#C8A25D] group-hover:bg-[#C8A25D] group-hover:text-black flex items-center justify-center transition-all duration-300">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. LARGE CONTACT CTA */}
        <section className="py-24 sm:py-36 border-t border-white/10 text-center bg-[#0d0d0d]">
          <div className="site-container max-w-3xl mx-auto space-y-8">
            <div className="flex items-center justify-center gap-2 text-[#C8A25D]">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold">COMMISSION AN INQUIRY</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading uppercase tracking-tight text-[#ECE5D8] leading-none">
              LET’S CREATE SOMETHING REMARKABLE.
            </h2>
            <p className="text-sm sm:text-base text-[#9CA3AF] max-w-lg mx-auto">
              Whether you require a flagship brand identity or an expansive editorial campaign, our studio is ready.
            </p>
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A25D] hover:bg-[#DFB873] text-black font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all duration-300 shadow-xl active:scale-95"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Smooth In-Place Reusable Detail Popup Modal */}
      <DetailModal
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
        item={selectedService}
        type="service"
      />
    </>
  );
}
