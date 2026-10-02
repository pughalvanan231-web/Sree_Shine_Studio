import PageHeader from "../components/PageHeader";
import ProcessSection from "../components/ProcessSection";
import ContactInvitation from "../components/ContactInvitation";
import SeoMeta from "../components/SeoMeta";
import { STUDIO_INFO } from "../content/studio";

export default function AboutPage() {
  return (
    <>
      <SeoMeta
        title="About Us"
        description="Learn about Sree Shine Studio's creative approach, multidisciplines, and design philosophy based in Bengaluru & Coimbatore."
      />

      <PageHeader
        badge="About The Studio"
        title="Crafting Visual Significance"
        subtitle="We are a multidisciplinary studio bringing together commercial photography, textile design, spatial exhibitions, and bespoke digital experiences."
      />

      {/* Foundation & Principles */}
      <section className="py-20 sm:py-28 bg-[#0a0a0a]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block">
                Our Foundation
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-[#ECE5D8] leading-tight">
                Where Clarity Meets Purposeful Design
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#9CA3AF] leading-relaxed">
                {STUDIO_INFO.creativePhilosophy.intro}
              </p>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                Whether creating tactile surface patterns for apparel or framing high-precision photography, our team is unified by a dedication to craft, light, and balance.
              </p>

              {/* Core Principles 2x2 Grid */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {STUDIO_INFO.creativePhilosophy.pillars.map((pillar, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#121212] border border-white/10">
                    <h4 className="text-xs sm:text-sm font-semibold text-[#ECE5D8] mb-1 font-heading">{pillar.title}</h4>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Studio Emblem & Gallery */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#121212] p-8 flex items-center justify-center aspect-[16/10]">
                <img
                  src="/assets/sree-shine-logo.png"
                  alt="Sree Shine Studio Emblem"
                  className="w-full max-w-[340px] h-auto object-contain"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-white/10 aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop"
                    alt="Exhibition and spatial craft"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10 aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
                    alt="Commercial photography craft"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Concise Studio FAQs Section */}
      <section className="py-20 sm:py-28 bg-[#0a0a0a]">
        <div className="site-container max-w-3xl">
          <div className="text-center mb-12 sm:mb-16 space-y-3">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block">
              Inquiries & Process
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-[#ECE5D8]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {STUDIO_INFO.studioFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#121212] border border-white/10"
              >
                <h3 className="font-heading text-base sm:text-lg font-semibold text-[#ECE5D8] mb-2">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <ContactInvitation />
    </>
  );
}

