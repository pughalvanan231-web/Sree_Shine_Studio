import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import SeoMeta from "../components/SeoMeta";
import ContactInvitation from "../components/ContactInvitation";
import { SERVICES } from "../content/services";

export default function ServicesPage() {
  return (
    <>
      <SeoMeta
        title="Services & Disciplines"
        description="Explore Sree Shine Studio's core creative disciplines across commercial photography, textile design, visual identity, exhibitions, and digital engineering."
      />

      <div className="bg-[#0a0a0a] text-[#ECE5D8] min-h-screen">
        
        {/* Minimal Hero Section */}
        <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 border-b border-white/10">
          <div className="site-container">
            <div className="max-w-3xl space-y-4">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block">
                Disciplines
              </span>
              
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold font-heading uppercase tracking-tight text-[#ECE5D8] leading-tight">
                Crafted for Distinction.
              </h1>
              
              <p className="text-sm sm:text-base text-[#9CA3AF] prose-hero leading-relaxed">
                Strategic creative solutions built to bridge the gap between aesthetic ambition and commercial success.
              </p>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C8A25D] hover:bg-[#DFB873] text-black font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-md transition-all duration-200 active:scale-95"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Spacious Disciplines List */}
        <section className="py-20 sm:py-28">
          <div className="site-container space-y-8 sm:space-y-12">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="p-6 sm:p-10 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#C8A25D]/40 transition-all duration-300 shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                  
                  {/* Left Column: Number & Title */}
                  <div className="lg:col-span-5 space-y-2">
                    <span className="text-xs font-mono text-[#C8A25D] font-semibold">
                      0{index + 1}
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#ECE5D8] leading-snug">
                      {service.title}
                    </h2>
                  </div>

                  {/* Right Column: Description, Key Deliverables & Link */}
                  <div className="lg:col-span-7 space-y-5">
                    <p className="text-xs sm:text-sm md:text-base text-[#9CA3AF] leading-relaxed">
                      {service.summary || service.description}
                    </p>

                    {service.deliverables && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {service.deliverables.slice(0, 4).map((item, dIdx) => (
                          <span
                            key={dIdx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] sm:text-xs text-[#ECE5D8]"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#C8A25D]" />
                            <span>{item}</span>
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="pt-2">
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#C8A25D] hover:underline"
                      >
                        <span>View Discipline Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Clean Bottom Invitation */}
        <ContactInvitation />

      </div>
    </>
  );
}

