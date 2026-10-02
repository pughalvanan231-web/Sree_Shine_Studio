import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DetailModal from "./DetailModal";

gsap.registerPlugin(ScrollTrigger);

const SHOWCASE_ITEMS = [
  {
    id: "photography",
    title: "PHOTOGRAPHY",
    subtitle: "PRODUCT & WEDDING PHOTOGRAPHY",
    category: "Product & Wedding Photography",
    date: "2026",
    bgGradient: "from-[#241914] via-[#1a120e] to-[#120d0a]",
    accentBorder: "border-[#b56c4d]/30",
    mainImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=85&w=1200&auto=format&fit=crop",
    subImage1: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop",
    subImage2: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
    summary: "Precision commercial photography and evocative wedding narratives crafted to accentuate natural light, textures, and genuine emotions.",
    deliverables: [
      "Commercial Tabletop & Macro Sets",
      "Editorial Fashion & Wedding Stories",
      "Color-Calibrated High-Resolution Retouching",
      "Full Commercial & Digital Licensing"
    ]
  },
  {
    id: "web-design",
    title: "WEB DESIGN",
    subtitle: "INTERACTIVE PLATFORMS & UI/UX",
    category: "Interactive Platforms & UI/UX",
    date: "2026",
    bgGradient: "from-[#141e26] via-[#0e161c] to-[#090f13]",
    accentBorder: "border-[#38bdf8]/20",
    mainImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=85&w=1200&auto=format&fit=crop",
    subImage1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    subImage2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    summary: "Bespoke digital platforms, immersive portfolios, and web applications built with editorial typography, buttery-smooth interactions, and top-tier SEO performance.",
    deliverables: [
      "Custom Responsive UI/UX Systems",
      "High-Performance Frontend Engineering",
      "Micro-Animations & Interaction Design",
      "Search Engine Optimization (SEO)"
    ]
  },
  {
    id: "design",
    title: "DESIGN",
    subtitle: "FASHION, TEXTILES & SURFACE ART",
    category: "Fashion, Textiles & Surface Art",
    date: "2026",
    bgGradient: "from-[#221c2b] via-[#17131e] to-[#0f0c14]",
    accentBorder: "border-[#c084fc]/20",
    mainImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=85&w=1200&auto=format&fit=crop",
    subImage1: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop",
    subImage2: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
    summary: "From intricate surface pattern repeats to conceptual collection styling, we merge artisanal sensibilities with contemporary fashion aesthetics.",
    deliverables: [
      "Seamless Surface Pattern Collections",
      "Seasonal Color Palette Directions",
      "Apparel Capsule Moodboards & Tech Specs",
      "Editorial Lookbook Art Direction"
    ]
  },
  {
    id: "visual-merchandising",
    title: "VISUAL MERCHANDISING",
    subtitle: "RETAIL SPACES & DISPLAY ARCHITECTURE",
    category: "Retail Spaces & Display Architecture",
    date: "2026",
    bgGradient: "from-[#241f19] via-[#181410] to-[#0f0d0a]",
    accentBorder: "border-[#fbbf24]/20",
    mainImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=85&w=1200&auto=format&fit=crop",
    subImage1: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop",
    summary: "Transforming physical retail spaces and storefront windows into captivating storytelling journeys that boost footfall and shopper engagement.",
    deliverables: [
      "Seasonal Window Display Concepts",
      "Customer Flow & Floorplan Mapping",
      "Custom Display Fixture Renderings",
      "Retail Execution Guidelines"
    ]
  },
  {
    id: "e-com",
    title: "E-COMMERCE",
    subtitle: "DIGITAL STOREFRONTS & CONVERSION",
    category: "Digital Storefronts & Conversion",
    date: "2026",
    bgGradient: "from-[#182420] via-[#101815] to-[#0a100e]",
    accentBorder: "border-[#34d399]/20",
    mainImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=85&w=1200&auto=format&fit=crop",
    subImage1: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600&auto=format&fit=crop",
    summary: "End-to-end digital commerce architecture designed to convert high-intent shoppers through seamless user journeys and brand storytelling.",
    deliverables: [
      "Headless Storefront Implementations",
      "Frictionless Checkout Flows",
      "Product Catalog Architecture",
      "Analytics & Conversion Optimization"
    ]
  },
  {
    id: "social-media",
    title: "SOCIAL MEDIA",
    subtitle: "CAMPAIGNS & CONTENT STRATEGY",
    category: "Campaigns & Content Strategy",
    date: "2026",
    bgGradient: "from-[#261820] via-[#1a1015] to-[#100a0d]",
    accentBorder: "border-[#f472b6]/20",
    mainImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=85&w=1200&auto=format&fit=crop",
    subImage1: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=600&auto=format&fit=crop",
    summary: "Strategic, visually cohesive social grids, motion reels, and campaign creative designed to stop the scroll and elevate brand resonance.",
    deliverables: [
      "Curated Monthly Grid Visual Systems",
      "Motion Reels & Editorial Snippets",
      "Typography & Carousel Toolkits",
      "Publishing Strategy & Rhythm Guidance"
    ]
  },
  {
    id: "branding",
    title: "BRANDING",
    subtitle: "IDENTITY SYSTEMS & PACKAGING",
    category: "Identity Systems & Packaging",
    date: "2026",
    bgGradient: "from-[#241f19] via-[#191511] to-[#100d0a]",
    accentBorder: "border-[#C8A25D]/30",
    mainImage: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=85&w=1200&auto=format&fit=crop",
    subImage1: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600&auto=format&fit=crop",
    summary: "Thoughtful typographic wordmarks, visual marks, color systems, and comprehensive brand guidelines that scale across every customer touchpoint.",
    deliverables: [
      "Core Logo System & Monograms",
      "Complete Brand Standards Manual",
      "Packaging & Print Collateral",
      "Digital Brand Asset Kits"
    ]
  },
];

export default function FlolapoShowcaseGallery() {
  const containerRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const timeoutId = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".editorial-showcase-canvas");

      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          const nextCard = cards[i + 1];
          const innerContent = card.querySelector(".editorial-canvas-inner");

          if (innerContent && nextCard) {
            gsap.to(innerContent, {
              scrollTrigger: {
                trigger: nextCard,
                start: "top 80%",
                end: "top 20%",
                scrub: 0.5,
              },
              scale: 0.94,
              filter: "blur(4px)",
              opacity: 0.5,
              y: -15,
              ease: "none",
            });
          }
        }
      });
    }, containerRef);

    return () => {
      clearTimeout(timeoutId);
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        id="selected-works"
        className="relative py-20 sm:py-28 bg-[#0a0a0a] text-[#ECE5D8] border-t border-white/10 select-none"
        aria-label="Selected Works Showcase"
      >
        <div className="site-container">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-20 pb-6 border-b border-white/10">
            <div>
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block mb-2 font-sans">
                Portfolio Showcase
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#ECE5D8]">
                Selected Works
              </h2>
            </div>
            <Link
              to="/work"
              className="px-6 py-2.5 rounded-full border border-white/20 text-xs uppercase tracking-widest text-[#ECE5D8] hover:text-black hover:bg-[#C8A25D] hover:border-[#C8A25D] font-medium self-start sm:self-auto transition-all duration-200 inline-flex items-center gap-2 group cursor-pointer"
            >
              <span>All Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C8A25D] group-hover:text-black transition-colors" />
            </Link>
          </div>

          {/* Editorial Canvas Stacking Stack */}
          <div className="relative space-y-16 sm:space-y-24">
            {SHOWCASE_ITEMS.map((item, index) => (
              <div
                key={item.id}
                className="editorial-showcase-canvas sticky top-20 sm:top-24 pb-6 sm:pb-8"
                style={{ zIndex: 10 + index }}
              >
                {/* Inner Transform Wrapper (Stacking Scroll Depth Animation) */}
                <div className="editorial-canvas-inner will-change-transform origin-top transform transition-all duration-300">
                  <div
                    onClick={() => setSelectedItem(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedItem(item);
                      }
                    }}
                    className={`block relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 ${item.accentBorder} shadow-[0_25px_60px_rgba(0,0,0,0.85)] bg-gradient-to-b ${item.bgGradient} p-5 sm:p-8 lg:p-10 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C8A25D] flex flex-col justify-between`}
                  >
                    {/* Subtle Organic Shadow Background Texture */}
                    <div className="absolute inset-0 bg-black/30 pointer-events-none" />

                    {/* Top Metadata & Action Bar (Aligned Baseline) */}
                    <div className="relative z-20 flex items-center justify-between w-full pb-4 sm:pb-6 border-b border-white/10">
                      <div className="flex items-center gap-2 sm:gap-2.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C8A25D] font-mono">
                        <span className="font-bold">0{index + 1}</span>
                        <span className="text-white/30">·</span>
                        <span>{item.date}</span>
                        <span className="text-white/30">·</span>
                        <span className="text-[#ECE5D8] hidden xs:inline">{item.category}</span>
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-widest text-[#C8A25D] group-hover:text-white font-semibold transition-colors">
                        <span>EXPLORE DISCIPLINE</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#C8A25D] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>

                    {/* Center Layered Photographic Collage & Title Composition */}
                    <div className="relative z-10 my-auto w-full max-w-4xl mx-auto flex flex-col items-center justify-center py-6 sm:py-8">
                      
                      {/* Photographic Collage Arrangement */}
                      <div className="relative w-full flex items-center justify-center my-2">
                        
                        {/* Left Supporting Photo */}
                        {item.subImage1 && (
                          <div className="absolute left-2 sm:left-6 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 w-20 sm:w-32 md:w-40 aspect-[3/4] bg-black border-2 sm:border-[3px] border-black rounded-xs overflow-hidden shadow-xl transform -rotate-3 group-hover:-rotate-1 group-hover:scale-105 transition-all duration-500 z-10">
                            <img
                              src={item.subImage1}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}

                        {/* Main Center Dominant Photo (Visual Anchor) */}
                        <div className="relative z-20 w-52 sm:w-72 md:w-88 lg:w-[420px] aspect-[16/10] bg-black border-[3px] sm:border-4 border-black rounded-xs overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] group-hover:scale-[1.02] transition-transform duration-500">
                          <img
                            src={item.mainImage}
                            alt={item.title}
                            className="w-full h-full object-cover filter contrast-105"
                          />
                        </div>

                        {/* Right Supporting Photo */}
                        {item.subImage2 && (
                          <div className="absolute right-2 sm:right-6 md:right-12 lg:right-16 top-1/2 -translate-y-1/2 w-20 sm:w-32 md:w-40 aspect-[3/4] bg-black border-2 sm:border-[3px] border-black rounded-xs overflow-hidden shadow-xl transform rotate-3 group-hover:rotate-1 group-hover:scale-105 transition-all duration-500 z-10">
                            <img
                              src={item.subImage2}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}

                      </div>

                      {/* Condensed Editorial Typography Title (Properly Sized, 100% Guaranteed No Overflow) */}
                      <div className="relative z-30 mt-4 sm:mt-6 text-center pointer-events-none w-full max-w-full px-4 overflow-visible">
                        <h3
                          className="font-bold uppercase text-[#F3EDE2] drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)] leading-none select-none tracking-[0.06em] sm:tracking-[0.1em]"
                          style={{
                            fontFamily: "'Bebas Neue', 'Oswald', 'Six Caps', sans-serif",
                            fontSize: "clamp(2.2rem, 5.5vw, 4.8rem)",
                          }}
                        >
                          {item.title}
                        </h3>

                        {/* Subtitle Line */}
                        <p className="font-heading text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#DFB873] font-semibold mt-1.5 sm:mt-2.5 drop-shadow-md">
                          {item.subtitle}
                        </p>
                      </div>

                    </div>

                    {/* Bottom Metadata & Action Bar */}
                    <div className="relative z-20 flex items-center justify-between w-full pt-4 sm:pt-5 border-t border-white/10 text-[11px] sm:text-xs text-white/70">
                      <span className="uppercase tracking-widest font-mono text-white/50">
                        Sree Shine Studio · Multidiscipline
                      </span>

                      <div className="inline-flex items-center gap-1 text-[11px] sm:text-xs uppercase tracking-widest text-[#DFB873] font-semibold group-hover:text-white transition-colors">
                        <span>VIEW DETAILS</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Smooth Detail Popup Modal */}
      <DetailModal
        isOpen={Boolean(selectedItem)}
        onClose={() => setSelectedItem(null)}
        item={selectedItem}
        type="service"
      />
    </>
  );
}
