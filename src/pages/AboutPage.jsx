import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SeoMeta from "../components/SeoMeta";

const PILLARS = [
  {
    title: "What We Do",
    description:
      "We produce commercial photography, distinctive brand identities, digital platforms, and spatial environments that elevate how brands are perceived.",
  },
  {
    title: "How We Work",
    description:
      "We work collaboratively as direct creative partners. Every project is approached with thorough research, intentional design, and meticulous craftsmanship.",
  },
  {
    title: "What We Care About",
    description:
      "Simplicity, visual balance, and longevity. We believe the most powerful work comes from stripping away excess and focusing on pure craft.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SeoMeta
        title="About Us"
        description="Sree Shine Studio is a creative studio dedicated to craft, aesthetics, and clarity across photography, design, and digital experiences."
      />

      <div className="bg-[#0a0a0a] text-[#ECE5D8] min-h-screen">
        {/* Simple Page Header */}
        <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 border-b border-white/10">
          <div className="site-container">
            <div className="max-w-2xl space-y-3">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block">
                About
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-heading uppercase tracking-tight text-[#ECE5D8] leading-tight">
                Who we are.
              </h1>
              <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                Sree Shine Studio is an independent creative studio based in Bengaluru and Coimbatore. We partner with forward-thinking brands to craft memorable visual identities, photography, and digital products.
              </p>
            </div>
          </div>
        </section>

        {/* Studio Image & Core Narrative */}
        <section className="py-14 sm:py-20">
          <div className="site-container space-y-12 sm:space-y-16">
            {/* Visual Feature Image */}
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] sm:aspect-[21/9] bg-[#121212] relative">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=85&w=1800&auto=format&fit=crop"
                alt="Sree Shine Studio Craft and Atmosphere"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* 3 Pillars: What we do, How we work, What we care about */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {PILLARS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-[#121212] border border-white/10 space-y-3"
                >
                  <span className="text-xs font-mono text-[#C8A25D]">
                    0{idx + 1}
                  </span>
                  <h2 className="font-heading text-lg sm:text-xl font-semibold text-[#ECE5D8]">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Minimal Bottom CTA */}
        <section className="py-16 sm:py-20 border-t border-white/10 bg-[#0d0d0d]">
          <div className="site-container text-center max-w-xl mx-auto space-y-5">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#ECE5D8]">
              Let’s work together.
            </h2>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              Have an idea or need creative direction? Reach out and let’s talk.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C8A25D] hover:bg-[#DFB873] text-black font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all duration-200 shadow-md"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
