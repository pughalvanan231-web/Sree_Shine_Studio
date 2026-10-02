import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const SHOWCASE_ITEMS = [
  {
    id: "photography",
    title: "Photography — Product & Wedding",
    category: "Product & Wedding Photography",
    year: "2026",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1600&auto=format&fit=crop",
    link: "/services/product-lifestyle-photography",
  },
  {
    id: "web-design",
    title: "Web Design",
    category: "UI/UX & Interactive Engineering",
    year: "2026",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop",
    link: "/services/website-app-development",
  },
  {
    id: "design",
    title: "Design",
    category: "Fashion, Textiles & Surface Art",
    year: "2026",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1600&auto=format&fit=crop",
    link: "/services/fashion-textile-design",
  },
  {
    id: "visual-merchandising",
    title: "Visual Merchandising",
    category: "Retail Spaces & Display Architecture",
    year: "2026",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
    link: "/services/visual-merchandising",
  },
  {
    id: "e-com",
    title: "E-Commerce",
    category: "Digital Storefronts & Conversion",
    year: "2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    link: "/services/website-app-development",
  },
  {
    id: "social-media",
    title: "Social Media",
    category: "Campaigns & Content Strategy",
    year: "2026",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1600&auto=format&fit=crop",
    link: "/services/social-media-creative",
  },
  {
    id: "branding",
    title: "Branding",
    category: "Identity Systems & Packaging",
    year: "2026",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1600&auto=format&fit=crop",
    link: "/services/branding-visual-identity",
  },
];

export default function FlolapoShowcaseGallery() {
  return (
    <section
      id="selected-works"
      className="py-20 sm:py-28 bg-[#0a0a0a] text-[#ECE5D8] border-t border-white/10"
    >
      <div className="site-container">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block mb-2">
              Portfolio Highlights
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#ECE5D8]">
              Selected Works
            </h2>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#ECE5D8] hover:text-[#C8A25D] transition-colors self-start sm:self-auto py-1"
          >
            <span>All Projects</span>
            <ArrowUpRight className="w-4 h-4 text-[#C8A25D]" />
          </Link>
        </div>

        {/* Clean Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SHOWCASE_ITEMS.map((item, index) => (
            <Link
              key={item.id}
              to={item.link}
              className={`group block rounded-2xl overflow-hidden bg-[#121212] border border-white/10 hover:border-[#C8A25D]/40 transition-all duration-300 shadow-sm hover:shadow-xl ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className={`overflow-hidden bg-[#181818] relative ${index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-black/85 backdrop-blur-md text-[#ECE5D8] border border-white/10">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#6B7280] block mb-1 font-mono">
                    0{index + 1} · {item.year}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#ECE5D8] group-hover:text-[#C8A25D] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C8A25D] group-hover:bg-[#C8A25D]/10 transition-all shrink-0 ml-4">
                  <ArrowUpRight className="w-4 h-4 text-[#C8A25D]" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}


