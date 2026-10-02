import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const CAPABILITIES = [
  {
    number: "01",
    title: "Photography — Product & Wedding Photography",
    description: "High-precision studio product lighting, macro details, and timeless wedding & editorial captures.",
    link: "/services/product-lifestyle-photography",
  },
  {
    number: "02",
    title: "Web Design",
    description: "Bespoke digital experiences, editorial UI/UX, and high-performance modern web platforms.",
    link: "/services/website-app-development",
  },
  {
    number: "03",
    title: "Design",
    description: "Fashion prints, tactile textile surface patterns, and multidisciplinary graphic craft.",
    link: "/services/fashion-textile-design",
  },
  {
    number: "04",
    title: "Visual Merchandising",
    description: "Immersive retail window displays, spatial floor layouts, and architectural brand installations.",
    link: "/services/visual-merchandising",
  },
  {
    number: "05",
    title: "E-Commerce",
    description: "Conversion-led online storefronts, catalog architecture, and frictionless checkout flows.",
    link: "/services/website-app-development",
  },
  {
    number: "06",
    title: "Social Media",
    description: "Curated monthly grid narratives, short-form motion reels, and high-impact visual campaigns.",
    link: "/services/social-media-creative",
  },
  {
    number: "07",
    title: "Branding",
    description: "Enduring identity systems, bespoke typographic wordmarks, color tokens, and packaging.",
    link: "/services/branding-visual-identity",
  },
];

export default function FlolapoSkillsRotator() {
  return (
    <section className="py-20 sm:py-28 bg-[#0d0d0d] text-[#ECE5D8] border-t border-white/10">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 space-y-3">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block">
            Core Expertise
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#ECE5D8]">
            Disciplines We Deliver
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#9CA3AF] leading-relaxed">
            Every discipline is built with uncompromising attention to craft, visual balance, and commercial impact.
          </p>
        </div>

        {/* Clean Capability List */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {CAPABILITIES.map((cap) => (
            <Link
              key={cap.number}
              to={cap.link}
              className="group py-6 sm:py-7 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors hover:bg-white/[0.02] px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-xl"
            >
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span className="text-xs font-mono text-[#C8A25D] font-semibold">
                  {cap.number}
                </span>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-medium text-[#ECE5D8] group-hover:text-[#C8A25D] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6B7280] group-hover:text-[#C8A25D] transition-colors shrink-0 self-start md:self-center">
                <span>Explore Discipline</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}


