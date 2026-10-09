import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import SeoMeta from "../components/SeoMeta";
import { STUDIO_INFO } from "../content/studio";

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: initialService,
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SeoMeta
        title="Contact · Let’s Talk | Sree Shine Studio"
        description="Initiate a creative collaboration with Sree Shine Studio. Commercial photography, branding, digital design, and campaign production."
      />

      <div className="bg-[#0a0a0a] text-[#ECE5D8] min-h-screen selection:bg-[#C8A25D] selection:text-black">
        {/* 1. EDITORIAL HEADER */}
        <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 overflow-hidden">
          <div className="site-container">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#C8A25D]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#C8A25D] font-semibold">
                INQUIRIES & COMMISSIONS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.5rem,14vw,12rem)] font-bold font-heading uppercase tracking-[-0.03em] leading-[0.85] text-[#ECE5D8]"
            >
              LET’S TALK.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-8 max-w-xl text-base sm:text-xl text-[#9CA3AF] font-light leading-relaxed"
            >
              Have a visionary project in mind? We partner with ambitious brands to sculpt unforgettable visual stories.
            </motion.p>
          </div>
        </section>

        {/* 2. MINIMAL FORM & STUDIO COORDINATES */}
        <section className="py-12 sm:py-20 border-t border-white/10">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Minimal Editorial Form */}
              <div className="lg:col-span-7">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 sm:p-12 rounded-2xl bg-[#121212] border border-[#C8A25D]/40 space-y-4 text-center"
                  >
                    <CheckCircle2 className="w-12 h-12 text-[#C8A25D] mx-auto" />
                    <h3 className="text-2xl sm:text-3xl font-bold font-heading uppercase text-[#ECE5D8]">
                      Message Received
                    </h3>
                    <p className="text-sm text-[#9CA3AF] max-w-md mx-auto">
                      Thank you for reaching out. Our creative director will review your project brief and get in touch within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-wider text-[#ECE5D8] hover:border-[#C8A25D] hover:text-[#C8A25D] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] text-[#6B7280] font-semibold block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Maya Chen"
                        className="w-full bg-transparent border-b border-white/20 focus:border-[#C8A25D] py-3 text-base sm:text-lg text-[#ECE5D8] placeholder-[#4B5563] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] text-[#6B7280] font-semibold block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full bg-transparent border-b border-white/20 focus:border-[#C8A25D] py-3 text-base sm:text-lg text-[#ECE5D8] placeholder-[#4B5563] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] text-[#6B7280] font-semibold block">
                        Service of Interest
                      </label>
                      <input
                        type="text"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        placeholder="Photography, Branding, Web Design, Campaign..."
                        className="w-full bg-transparent border-b border-white/20 focus:border-[#C8A25D] py-3 text-base sm:text-lg text-[#ECE5D8] placeholder-[#4B5563] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] text-[#6B7280] font-semibold block">
                        Project Brief & Vision *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your brand, objectives, timelines, and deliverables..."
                        className="w-full bg-transparent border-b border-white/20 focus:border-[#C8A25D] py-3 text-base sm:text-lg text-[#ECE5D8] placeholder-[#4B5563] focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A25D] hover:bg-[#DFB873] text-black font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all duration-300 shadow-lg active:scale-95 cursor-pointer"
                      >
                        <span>Send Proposal Request</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Direct Studio Coordinates */}
              <div className="lg:col-span-5 space-y-8 lg:pl-8 border-t lg:border-t-0 lg:border-l border-white/10 pt-10 lg:pt-0">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block mb-2">
                    Studio Coordinates
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading uppercase text-[#ECE5D8]">
                    Sree Shine Studio
                  </h3>
                </div>

                <div className="space-y-6 text-sm text-[#ECE5D8]">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold block">Location</span>
                    <a
                      href={STUDIO_INFO.location.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-[#9CA3AF] leading-relaxed hover:text-[#C8A25D] transition-colors"
                    >
                      {STUDIO_INFO.location.address}
                    </a>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold block">Email</span>
                    <a
                      href={`mailto:${STUDIO_INFO.contact.email}`}
                      className="mt-1 block text-[#ECE5D8] font-medium hover:text-[#C8A25D] transition-colors"
                    >
                      {STUDIO_INFO.contact.email}
                    </a>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold block">Direct Line</span>
                    <a
                      href={`tel:${STUDIO_INFO.contact.phone.replace(/\s+/g, '')}`}
                      className="mt-1 block text-[#ECE5D8] font-medium hover:text-[#C8A25D] transition-colors"
                    >
                      {STUDIO_INFO.contact.formattedPhone}
                    </a>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold block">Operating Hours</span>
                    <p className="mt-1 text-[#9CA3AF]">
                      {STUDIO_INFO.contact.hours}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold block mb-3">
                    Follow Our Visuals
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {STUDIO_INFO.socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full border border-white/10 text-xs font-medium text-[#ECE5D8] hover:border-[#C8A25D] hover:text-[#C8A25D] transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>{social.name}</span>
                        <ArrowUpRight className="w-3 h-3 text-[#C8A25D]" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
