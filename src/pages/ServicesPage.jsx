import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SeoMeta from "../components/SeoMeta";

const CORE_SERVICES = [
  {
    id: "photography",
    slug: "product-lifestyle-photography",
    title: "Photography & Videography",
    description: "High-fidelity commercial imagery and lifestyle narratives capturing texture, light, and form.",
  },
  {
    id: "branding",
    slug: "branding-visual-identity",
    title: "Brand & Visual Identity",
    description: "Enduring identity systems, typography, and visual guidelines built for distinction.",
  },
  {
    id: "digital",
    slug: "website-app-development",
    title: "Web & Digital Experiences",
    description: "Bespoke digital platforms combining editorial typography with buttery-smooth interactions.",
  },
  {
    id: "merchandising",
    slug: "visual-merchandising",
    title: "Visual Merchandising & Spatial",
    description: "Immersive retail environments, window displays, and exhibition pavilions that engage audiences.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SeoMeta
        title="Services"
        description="Core creative disciplines at Sree Shine Studio — Photography, Brand Identity, Web Design, and Spatial Environments."
      />

      <div className="bg-[#0a0a0a] text-[#ECE5D8] min-h-screen">
        {/* Simple Page Header */}
        <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 border-b border-white/10">
          <div className="site-container">
            <div className="max-w-2xl space-y-3">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block">
                Services
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-heading uppercase tracking-tight text-[#ECE5D8] leading-tight">
                What we do.
              </h1>
              <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                Strategic creative solutions built with clarity, craft, and purpose.
              </p>
            </div>
          </div>
        </section>

        {/* Minimal 3–4 Service Cards Grid */}
        <section className="py-16 sm:py-24">
          <div className="site-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CORE_SERVICES.map((service, index) => (
                <div
                  key={service.id}
                  className="p-6 sm:p-7 rounded-2xl bg-[#121212] border border-white/10 flex flex-col justify-between hover:border-[#C8A25D]/40 transition-all duration-200 group"
                >
                  <div className="space-y-4">
                    <span className="text-xs font-mono text-[#C8A25D]">
                      0{index + 1}
                    </span>
                    <h2 className="font-heading text-xl sm:text-2xl font-semibold text-[#ECE5D8] leading-snug group-hover:text-[#C8A25D] transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-white/5">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C8A25D] hover:text-[#DFB873] transition-colors"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Minimal Bottom CTA */}
        <section className="py-16 sm:py-20 border-t border-white/10 bg-[#0d0d0d]">
          <div className="site-container text-center max-w-xl mx-auto space-y-5">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#ECE5D8]">
              Ready to start a project?
            </h2>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              Tell us about your brand and let’s bring your vision to life.
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
