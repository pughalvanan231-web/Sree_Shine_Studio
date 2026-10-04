import { useState, useEffect } from "react";
import { Star, MoreVertical, ChevronLeft, ChevronRight, Hand } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const REVIEWS = [
  {
    id: 1,
    initial: "A",
    name: "AURA BOTANICALS",
    subtitle: "Organic Skincare & Lifestyle",
    timeAgo: "2 months ago",
    stars: 5,
    quote:
      "They made our brand identity and product photography so seamless, precision craft, affordable timeline, and a creative team that genuinely cares!",
  },
  {
    id: 2,
    initial: "L",
    name: "LUMINA ATELIER",
    subtitle: "Luxury Apparel & Fashion",
    timeAgo: "4 months ago",
    stars: 5,
    quote:
      "Their multidisciplinary approach made our campaign flawless. From surface textile prints to editorial visuals, the attention to detail was unmatched.",
  },
  {
    id: 3,
    initial: "P",
    name: "PRAVAAS HERITAGE",
    subtitle: "Textile Architecture & Craft",
    timeAgo: "6 months ago",
    stars: 5,
    quote:
      "Exceptional spatial booth design and digital presence. Sree Shine Studio knows how to elevate prestige across every customer touchpoint.",
  },
  {
    id: 4,
    initial: "Z",
    name: "ZENITH EXPO",
    subtitle: "Trade Fair & Spatial Architecture",
    timeAgo: "7 months ago",
    stars: 5,
    quote:
      "The exhibition pavilion designed by Sree Shine Studio became the centerpiece of the entire summit. Incredible execution and responsive support.",
  },
];

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const prevReview = () => {
    setHasInteracted(true);
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setHasInteracted(true);
    setDirection(1);
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  // Optional subtle auto-cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = REVIEWS[currentIndex];
  const prevItem = REVIEWS[(currentIndex - 1 + REVIEWS.length) % REVIEWS.length];
  const nextItem = REVIEWS[(currentIndex + 1) % REVIEWS.length];

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 150 : -150,
        opacity: 0,
        scale: 0.95
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 150 : -150,
        opacity: 0,
        scale: 0.95
      };
    }
  };

  return (
    <section
      id="customer-reviews"
      className="relative py-24 sm:py-32 bg-[#0a0a0a] text-[#ECE5D8] border-t border-white/10 overflow-hidden select-none"
      aria-label="Client Feedback Showcase"
    >
      {/* Ambient Gold Glow Rings in Background (Matching Reference) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] pointer-events-none rounded-full border border-[#C8A25D]/10 bg-radial-gradient from-[#C8A25D]/5 via-transparent to-transparent -z-0 blur-2xl" />
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border-2 border-[#C8A25D]/15 pointer-events-none -z-0 opacity-60" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border-2 border-[#C8A25D]/15 pointer-events-none -z-0 opacity-60" />

      {/* Dotted Corner Accents */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 grid grid-cols-4 gap-1.5 opacity-20 pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-[#C8A25D]" />
        ))}
      </div>

      <div className="site-container relative z-10">
        
        {/* Top Studio Brand Mark Header */}
        <div className="flex flex-col items-center justify-center mb-10 sm:mb-14 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[#C8A25D] text-lg font-bold">✦</span>
            <span className="font-heading text-sm sm:text-base tracking-[0.35em] text-[#ECE5D8] uppercase font-bold">
              SREE SHINE
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#C8A25D]">
            STUDIO
          </span>
        </div>

        {/* Stacked Swipe Cards Container */}
        <div className="relative max-w-lg mx-auto flex justify-center min-h-[480px] sm:min-h-[520px]">
          <AnimatePresence custom={direction}>
            {[...Array(3)].map((_, i) => {
              const reviewIndex = (currentIndex + i) % REVIEWS.length;
              const current = REVIEWS[reviewIndex];
              const isTop = i === 0;

              // Calculate stack offsets based on position in stack (0 is top, 1 is middle, 2 is back)
              const scale = 1 - i * 0.06;
              const yOffset = i * -24; // Push back cards up slightly
              const zIndex = REVIEWS.length - i;
              const opacity = 1 - i * 0.25;

              return (
                <motion.div
                  key={current.id}
                  custom={direction}
                  initial={{ scale: 0.8, y: -50, opacity: 0, x: 0, rotate: 0 }}
                  animate={{
                    scale,
                    y: yOffset,
                    zIndex,
                    opacity,
                    x: 0,
                    rotate: 0,
                  }}
                  exit={(dir) => ({
                    x: dir > 0 ? -300 : 300,
                    y: 100, // swoop down slightly
                    rotate: dir > 0 ? -15 : 15,
                    opacity: 0,
                    scale: 0.9,
                    zIndex: REVIEWS.length + 1, // Stay on top while exiting
                  })}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  drag={isTop ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.8}
                  onDragEnd={(e, { offset }) => {
                    setHasInteracted(true);
                    const swipe = offset.x;
                    if (swipe < -100) {
                      setDirection(1);
                      nextReview();
                    } else if (swipe > 100) {
                      setDirection(-1);
                      prevReview();
                    }
                  }}
                  className={`absolute top-0 w-full rounded-[32px] sm:rounded-[38px] bg-white/[0.05] backdrop-blur-xl border border-white/20 p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.85)] ${
                    isTop ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"
                  }`}
                >
                  {/* Title: Client (Light) / Feedback (Bold) */}
                  <div className="space-y-0.5 mb-6">
                    <span className="font-sans text-2xl sm:text-3xl text-[#ECE5D8] font-light block tracking-tight">
                      Client
                    </span>
                    <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
                      Feedback
                    </h2>
                  </div>

                  {/* 5 Prominent Gold Stars */}
                  <div className="flex items-center gap-1.5 mb-7">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        className="w-5 h-5 sm:w-6 sm:h-6 fill-[#FFCC00] text-[#FFCC00] drop-shadow-[0_2px_8px_rgba(255,204,0,0.4)]"
                      />
                    ))}
                  </div>

                  {/* Dark Review Bubble */}
                  <div className="rounded-2xl bg-[#181818]/95 border border-white/10 p-5 sm:p-6 shadow-inner space-y-4">
                    {/* Reviewer Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#DFB873] to-[#A67C1E] text-black font-bold text-base flex items-center justify-center shadow-md">
                          {current.initial}
                        </div>
                        {/* Name & Subtitle */}
                        <div>
                          <h3 className="font-heading text-sm sm:text-base font-bold text-[#ECE5D8] tracking-wide">
                            {current.name}
                          </h3>
                          <span className="text-[11px] text-[#9CA3AF] block font-sans">
                            {current.subtitle}
                          </span>
                        </div>
                      </div>
                      <MoreVertical className="w-4 h-4 text-[#6B7280]" />
                    </div>

                    {/* Stars & Time */}
                    <div className="flex items-center gap-2 text-xs">
                      <div className="flex text-[#FFCC00] gap-0.5">
                        {[...Array(current.stars)].map((_, starIdx) => (
                          <Star key={starIdx} className="w-3.5 h-3.5 fill-[#FFCC00] text-[#FFCC00]" />
                        ))}
                      </div>
                      <span className="text-[#9CA3AF] text-[11px]">{current.timeAgo}</span>
                    </div>

                    {/* Review Body Text */}
                    <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed font-sans pt-1">
                      "{current.quote}"
                    </p>
                  </div>
                  
                  {/* Desktop Only: Drag Hint */}
                  {isTop && !hasInteracted && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0, 1, 1, 0],
                        x: [0, -30, 30, 0]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3, 
                        ease: "easeInOut" 
                      }}
                      className="absolute inset-0 m-auto w-24 h-24 flex flex-col items-center justify-center text-white bg-black/60 rounded-full backdrop-blur-sm z-50 pointer-events-none shadow-2xl"
                    >
                      <Hand className="w-8 h-8 mb-1 animate-pulse" />
                      <span className="text-[9px] uppercase tracking-widest font-bold">Swipe</span>
                    </motion.div>
                  )}
                </motion.div>
              );
            }).reverse()}
          </AnimatePresence>
        </div>

        {/* Mobile Swipe Hint and Nav Dots */}
        <div className="relative max-w-lg mx-auto flex flex-col items-center mt-12 sm:mt-8 z-20">
          <div className="flex items-center justify-between w-full px-6">
            <button
              type="button"
              onClick={() => {
                setDirection(-1);
                prevReview();
              }}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C8A25D] hover:text-black transition-colors flex items-center justify-center text-[#ECE5D8]"
              aria-label="Previous client review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot Indicators */}
            <div className="flex items-center gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-6 bg-[#C8A25D]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                setDirection(1);
                nextReview();
              }}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C8A25D] hover:text-black transition-colors flex items-center justify-center text-[#ECE5D8]"
              aria-label="Next client review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <span className="sm:hidden text-[10px] text-white/30 uppercase tracking-widest mt-6 block">
            Swipe cards to navigate
          </span>
        </div>

        {/* Bottom Thank You Pill (Matching Reference) */}
        <div className="mt-12 sm:mt-16 text-center max-w-xl mx-auto px-4">
          <div className="inline-block px-6 sm:px-10 py-3.5 rounded-full border border-[#C8A25D]/40 bg-black/60 backdrop-blur-md shadow-lg">
            <p className="text-xs sm:text-sm text-[#ECE5D8] italic font-serif leading-relaxed">
              Thank you so much for your valuable feedback! We're thrilled you had a great experience and truly appreciate your support.
            </p>
          </div>

          {/* Studio URL footer */}
          <div className="mt-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C6144] font-mono">
              www.sreeshinestudio.com
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
