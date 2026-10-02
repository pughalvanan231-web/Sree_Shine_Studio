import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SHOWCASE_ITEMS = [
  {
    id: "social-media",
    title: "Social Media",
    category: "Campaigns & Content Strategy",
    date: "2026",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop",
    link: "/services/website-app-development",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "Creative Performance & Ads",
    date: "2026",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
    link: "/services/branding-visual-identity",
  },
  {
    id: "web-design",
    title: "Web Design",
    category: "Interactive Platforms & UI/UX",
    date: "2026",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop",
    link: "/services/website-app-development",
  },
  {
    id: "branding",
    title: "Branding",
    category: "Identity Systems & Packaging",
    date: "2026",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1600&auto=format&fit=crop",
    link: "/services/branding-visual-identity",
  },
  {
    id: "photography",
    title: "Photography",
    category: "Product, Fashion & Spatial Art",
    date: "2026",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1600&auto=format&fit=crop",
    link: "/services/product-lifestyle-photography",
  },
  {
    id: "content-production",
    title: "Content Production",
    category: "Cinematography & Visual Stories",
    date: "2026",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1600&auto=format&fit=crop",
    link: "/services/fashion-textile-design",
  },
];

export default function FlolapoShowcaseGallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".stack-card");

      // For each card (except the last), animate scale down and blur as the next card covers it
      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          const nextCard = cards[i + 1];
          const innerContent = card.querySelector(".stack-card-inner");

          gsap.to(innerContent, {
            scrollTrigger: {
              trigger: nextCard,
              start: "top 80%",
              end: "top 20%",
              scrub: 0.5,
            },
            scale: 0.90,
            filter: "blur(5px)",
            opacity: 0.45,
            y: -25,
            ease: "none",
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="showcase-gallery"
      className="relative py-20 sm:py-32 bg-black text-[#ECE5D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block mb-2 font-sans">
              Portfolio Showcase
            </span>
            <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#ECE5D8]">
              Selected Works
            </h2>
          </div>
          <Link
            to="/work"
            className="px-6 py-2.5 bg-[#C8A25D] text-black hover:bg-[#DFB873] rounded font-semibold transition-colors inline-flex items-center justify-center[#ECE5D8] font-medium self-start md:self-auto group"
          >
            <span>All Projects</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-2 text-[#C8A25D] group-hover:text-black transition-colors" />
          </Link>
        </div>

        {/* Overlapping Stacking Cards Container */}
        <div className="relative space-y-12 sm:space-y-16">
          {SHOWCASE_ITEMS.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className="stack-card sticky top-24 sm:top-28 z-[calc(10+index)] pb-8"
                style={{ zIndex: 10 + index }}
              >
                {/* Inner Transform Wrapper (Separate from Pinning) */}
                <div className="stack-card-inner will-change-transform origin-top transform transition-all duration-300">
                  <Link
                    to={item.link}
                    className="block relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-[#121212] border border-white/10 hover:border-[#C8A25D]/50 shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-500 group"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center p-4 sm:p-6 lg:p-8">
                      
                      {/* Image Frame */}
                      <div
                        className={`lg:col-span-8 overflow-hidden rounded-2xl aspect-[16/10] sm:aspect-[16/9] bg-[#1a1a1a] ${
                          isEven ? "lg:order-1" : "lg:order-2"
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      {/* Text Details */}
                      <div
                        className={`lg:col-span-4 p-4 sm:p-6 lg:p-8 flex flex-col justify-between h-full ${
                          isEven ? "lg:order-2" : "lg:order-1"
                        }`}
                      >
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#9CA3AF]">
                            <span>{item.date}</span>
                            <span>·</span>
                            <span className="text-[#C8A25D] font-medium">{item.category}</span>
                          </div>

                          <h3 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#ECE5D8] group-hover:text-[#C8A25D] transition-colors leading-tight">
                            {item.title}
                          </h3>
                        </div>

                        <div className="pt-8 sm:pt-12 flex items-center gap-2 text-xs uppercase tracking-widest text-[#9CA3AF] group-hover:text-[#ECE5D8] transition-colors">
                          <span className="font-medium">Explore Discipline</span>
                          <ArrowUpRight className="w-4 h-4 text-[#C8A25D] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                      </div>

                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
