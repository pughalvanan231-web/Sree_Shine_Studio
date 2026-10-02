import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUpRight, ArrowRight, ChevronUp, X, Sparkles } from "lucide-react";
import SeoMeta from "../components/SeoMeta";
import { WORK_CATEGORIES } from "../content/workCategories";

export default function WorkCategoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  // Fallback to photography if invalid slug
  const currentCategory = WORK_CATEGORIES[slug] || WORK_CATEGORIES["photography"];

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  const handleScrollToExplore = () => {
    const nextSection = document.getElementById("category-content");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <SeoMeta
        title={`${currentCategory.shortTitle} | Sree Shine Studio`}
        description={currentCategory.tagline}
      />

      <div className="bg-[#0a0a0a] text-[#ECE5D8] min-h-screen selection:bg-[#C8A25D] selection:text-black">
        {/* 1. EDITORIAL HERO SECTION */}
        <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-40 pb-12 sm:pb-16 overflow-hidden">
          {/* Subtle Ambient Studio Background Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#C8A25D]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

          {/* Top Category Badge */}
          <div className="site-container">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-[#C8A25D]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#C8A25D] font-semibold">
                WORK CATEGORY · {currentCategory.shortTitle}
              </span>
            </motion.div>
          </div>

          {/* Giant Condensed Headline */}
          <div className="site-container my-auto py-12">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.2rem,11vw,9.5rem)] font-bold font-heading uppercase tracking-[-0.03em] leading-[0.88] text-[#ECE5D8]"
            >
              {currentCategory.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-xl text-[#9CA3AF] font-light leading-relaxed"
            >
              {currentCategory.tagline}
            </motion.p>
          </div>

          {/* Scroll To Explore Indicator */}
          <div className="site-container flex items-center justify-between border-t border-white/10 pt-6">
            <button
              type="button"
              onClick={handleScrollToExplore}
              className="group inline-flex items-center gap-3 text-xs tracking-[0.25em] text-[#ECE5D8]/70 hover:text-[#C8A25D] uppercase transition-colors cursor-pointer focus:outline-none"
            >
              <span>{currentCategory.scrollLabel}</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="w-7 h-7 rounded-full border border-white/20 group-hover:border-[#C8A25D] flex items-center justify-center transition-colors"
              >
                <ArrowDown className="w-3.5 h-3.5 text-[#C8A25D]" />
              </motion.div>
            </button>

            <span className="text-[11px] font-mono text-[#6B7280] tracking-widest hidden sm:inline-block">
              SREE SHINE STUDIO / 0{Object.keys(WORK_CATEGORIES).indexOf(slug) + 1 || 1}
            </span>
          </div>
        </section>

        {/* 2. FULL-WIDTH EDITORIAL HERO VISUAL */}
        <section id="category-content" className="py-12 sm:py-20">
          <div className="site-container">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#121212] group shadow-2xl"
            >
              <img
                src={currentCategory.heroImage}
                alt={currentCategory.title}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-[#ECE5D8]/80 font-medium">
                  Featured Case Narrative
                </span>
                <span className="text-xs font-mono text-[#C8A25D]">
                  Curated Studio Archive
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. STRATEGIC APPROACH / WHY CHOOSE US (Staggered Points) */}
        <section className="py-16 sm:py-28 border-t border-white/10">
          <div className="site-container">
            <div className="max-w-3xl mb-14 sm:mb-20 space-y-4">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block">
                Methodology & Principles
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold font-heading uppercase tracking-tight text-[#ECE5D8] leading-tight">
                {currentCategory.sectionTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                {currentCategory.sectionSubtitle}
              </p>
            </div>

            {/* 4-Point Staggered Editorial Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              {currentCategory.points.map((point, index) => (
                <motion.div
                  key={point.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="p-8 rounded-2xl bg-[#121212]/80 border border-white/5 hover:border-[#C8A25D]/40 transition-all duration-300 space-y-4 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono text-[#C8A25D] tracking-wider">
                      {point.number}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#C8A25D] transition-colors" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading uppercase tracking-tight text-[#ECE5D8] group-hover:text-[#C8A25D] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. LARGE STATEMENT SECTION */}
        <section className="py-20 sm:py-32 bg-[#0e0e0e] border-y border-white/10 relative overflow-hidden">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[14vw] font-black font-heading text-white/[0.02] select-none pointer-events-none uppercase">
            STORYTELLING
          </div>
          <div className="site-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl space-y-6"
            >
              <div className="flex items-center gap-2 text-[#C8A25D]">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold">Studio Manifesto</span>
              </div>
              <p className="text-2xl sm:text-4xl md:text-5xl font-heading font-medium tracking-tight text-[#ECE5D8] leading-snug sm:leading-tight">
                "{currentCategory.statement}"
              </p>
            </motion.div>
          </div>
        </section>

        {/* 5. EDITORIAL PHOTOGRAPHY GALLERY */}
        <section className="py-20 sm:py-32">
          <div className="site-container">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
              <div>
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block mb-2">
                  Visual Curation
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold font-heading uppercase tracking-tight text-[#ECE5D8]">
                  SELECTED WORKS
                </h2>
              </div>
              <span className="text-xs text-[#6B7280] tracking-wider uppercase font-mono">
                Click any image to expand
              </span>
            </div>

            {/* Asymmetrical Editorial Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
              {currentCategory.gallery.map((item, index) => {
                const isWide = index % 3 === 0;
                const colSpan = isWide ? "md:col-span-8" : index % 3 === 1 ? "md:col-span-4" : "md:col-span-6";
                const aspectClass = item.aspect === "landscape" ? "aspect-[16/10]" : item.aspect === "square" ? "aspect-square" : "aspect-[4/5]";

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className={`${colSpan} group cursor-pointer`}
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className={`relative ${aspectClass} w-full rounded-2xl overflow-hidden bg-[#141414] border border-white/10`}>
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="text-[11px] uppercase tracking-[0.2em] text-[#C8A25D] font-semibold">
                          {item.category}
                        </span>
                        <h4 className="text-lg font-heading font-semibold text-[#ECE5D8] tracking-tight">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. NEXT PROJECT FOOTER BAR */}
        <section className="py-20 sm:py-28 border-t border-white/10 bg-[#0d0d0d] relative overflow-hidden group">
          <div className="site-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#6B7280] font-semibold block mb-2">
                UP NEXT
              </span>
              <Link
                to={`/work-category/${currentCategory.nextProject.slug}`}
                className="group/link inline-flex items-center gap-4 text-3xl sm:text-5xl md:text-6xl font-bold font-heading uppercase tracking-tight text-[#ECE5D8] hover:text-[#C8A25D] transition-colors"
              >
                <span>{currentCategory.nextProject.title}</span>
                <ArrowRight className="w-8 h-8 text-[#C8A25D] transform group-hover/link:translate-x-3 transition-transform duration-300" />
              </Link>
              <p className="text-xs text-[#9CA3AF] mt-2">
                {currentCategory.nextProject.category}
              </p>
            </div>

            {/* Back to Top Smooth Trigger */}
            <button
              type="button"
              onClick={handleBackToTop}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-[#C8A25D] text-xs font-semibold uppercase tracking-wider text-[#ECE5D8] hover:text-[#C8A25D] transition-all cursor-pointer focus:outline-none"
            >
              <span>Back to top</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* 7. MINIMAL CONTACT CTA */}
        <section className="py-24 sm:py-32 border-t border-white/10 text-center bg-black">
          <div className="site-container max-w-3xl mx-auto space-y-8">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C8A25D] font-semibold block">
              COLLABORATION
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading uppercase tracking-tight text-[#ECE5D8] leading-none">
              {currentCategory.ctaHeadline}
            </h2>
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

      {/* Lightbox / Modal for Image Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl max-h-[85vh] flex flex-col items-center"
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl border border-white/10"
              />
              <div className="mt-4 text-center">
                <p className="text-base font-heading font-semibold text-[#ECE5D8] uppercase tracking-wide">
                  {selectedImage.title}
                </p>
                <p className="text-xs text-[#C8A25D] font-mono tracking-widest mt-1">
                  {selectedImage.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
