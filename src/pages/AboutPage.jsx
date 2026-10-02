import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles, MapPin, Mail, Compass } from "lucide-react";
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
        description="Learn about Sree Shine Studio's creative approach, multidisciplines, and design philosophy based in Bengaluru."
      />

      <PageHeader
        badge="About Sree Shine Studio"
        title="Dedicated to the Art of Meaningful Visual Craft"
        subtitle="We are a multidisciplinary studio bringing together commercial photography, textile design, spatial exhibitions, and bespoke digital experiences."
      />

      {/* Main Story & Photography Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C8A25D] font-semibold">
                Our Foundation
              </span>
              <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl font-semibold text-[#ECE5D8] leading-snug">
                Where Clarity Meets Creative Exploration
              </h2>
              <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                {STUDIO_INFO.creativePhilosophy.intro}
              </p>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                Whether creating tactile surface patterns for apparel or framing high-precision macro photography for luxury timepieces, our team is unified by a passion for light, balance, and intentional design.
              </p>

              <div className="pt-2">
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#ECE5D8] mb-3 sm:mb-4">
                  Core Principles
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {STUDIO_INFO.creativePhilosophy.pillars.map((pillar, idx) => (
                    <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-[#121212] border border-white/10">
                      <h4 className="text-xs sm:text-sm font-semibold text-[#ECE5D8]">{pillar.title}</h4>
                      <p className="text-[11px] sm:text-xs text-[#9CA3AF] mt-1">{pillar.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-[#121212] p-6 sm:p-8 flex items-center justify-center">
                <img
                  src="/assets/sree-shine-logo.png"
                  alt="Sree Shine Studio Emblem"
                  className="w-full max-w-[320px] sm:max-w-[400px] h-auto object-contain"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-xl overflow-hidden border border-white/10 aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop"
                    alt="Exhibition and spatial lighting"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10 aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
                    alt="Product and lifestyle photography craft"
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

      {/* Studio FAQs Section */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 space-y-2 sm:space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C8A25D] font-semibold">
              Frequently Asked Questions
            </span>
            <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl font-semibold text-[#ECE5D8]">
              Working With Sree Shine Studio
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {STUDIO_INFO.studioFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#121212] border border-white/10 shadow-sm"
              >
                <h3 className="font-heading text-base sm:text-lg font-semibold text-[#ECE5D8] mb-1.5 sm:mb-2">
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
