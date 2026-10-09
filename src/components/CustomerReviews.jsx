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
      "ஸ்ரீ ஷைன் ஸ்டுடியோ வடிவமைத்த கண்காட்சி அரங்கம் ஒட்டுமொத்த நிகழ்வின் மையமாக அமைந்தது. இவர்களின் உழைப்பு மற்றும் சிறப்பான வாடிக்கையாளர் சேவை மிகவும் அருமை.",
  },
];

export default function CustomerReviews() {
  return (
    <section
      id="customer-reviews"
      className="relative py-24 sm:py-32 bg-[#0a0a0a] text-[#ECE5D8] border-t border-white/10 overflow-hidden"
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

      <div className="site-container relative z-10 max-w-6xl mx-auto px-4">
        
        {/* Top Studio Brand Mark Header */}
        <div className="flex flex-col items-center justify-center mb-16 sm:mb-20 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[#C8A25D] text-lg font-bold">✦</span>
            <span className="font-heading text-sm sm:text-base tracking-[0.35em] text-[#ECE5D8] uppercase font-bold">
              SREE SHINE
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#C8A25D]">
            STUDIO
          </span>
          
          <div className="mt-8 text-center space-y-2">
            <span className="font-sans text-2xl sm:text-3xl text-[#ECE5D8] font-light block tracking-tight">
              Client
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-tight text-white">
              Feedback
            </h2>
          </div>
        </div>

        {/* 2-Column Grid for Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {REVIEWS.map((current, i) => (
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-full rounded-[24px] sm:rounded-[38px] bg-white/[0.03] backdrop-blur-md border border-white/10 p-4 sm:p-8 shadow-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
            >
              {/* 5 Prominent Gold Stars */}
              <div className="flex items-center gap-1 mb-5 sm:mb-7">
                {[...Array(5)].map((_, starIdx) => (
                  <Star
                    key={starIdx}
                    className="w-4 h-4 sm:w-6 sm:h-6 fill-[#FFCC00] text-[#FFCC00] drop-shadow-[0_2px_8px_rgba(255,204,0,0.4)]"
                  />
                ))}
              </div>

              {/* Dark Review Bubble */}
              <div className="rounded-[20px] bg-[#181818]/80 border border-white/5 p-4 sm:p-6 shadow-inner space-y-3 sm:space-y-4">
                {/* Reviewer Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#DFB873] to-[#A67C1E] text-black font-bold text-sm sm:text-base flex items-center justify-center shadow-md shrink-0">
                      {current.initial}
                    </div>
                    {/* Name & Subtitle */}
                    <div className="min-w-0">
                      <h3 className="font-heading text-xs sm:text-base font-bold text-[#ECE5D8] tracking-wide truncate">
                        {current.name}
                      </h3>
                      <span className="text-[10px] sm:text-[11px] text-[#9CA3AF] block font-sans truncate">
                        {current.subtitle}
                      </span>
                    </div>
                  </div>
                  <MoreVertical className="w-4 h-4 text-[#6B7280] shrink-0" />
                </div>

                {/* Stars & Time */}
                <div className="flex items-center gap-2 text-[10px] sm:text-xs">
                  <div className="flex text-[#FFCC00] gap-0.5">
                    {[...Array(current.stars)].map((_, starIdx) => (
                      <Star key={starIdx} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#FFCC00] text-[#FFCC00]" />
                    ))}
                  </div>
                  <span className="text-[#9CA3AF]">{current.timeAgo}</span>
                </div>

                {/* Review Body Text */}
                <p className="text-xs sm:text-base text-[#D1D5DB] leading-relaxed font-sans pt-1">
                  "{current.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Thank You Pill (Matching Reference) */}
        <div className="mt-20 sm:mt-24 text-center max-w-xl mx-auto px-4">
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
