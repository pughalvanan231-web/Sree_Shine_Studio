import { useSearchParams } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import SeoMeta from "../components/SeoMeta";
import { STUDIO_INFO } from "../content/studio";

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get("service") || "";

  return (
    <>
      <SeoMeta
        title="Contact Us · Let’s Talk"
        description="Initiate a creative project with Sree Shine Studio. Commercial photography, branding, textiles, spatial design, and digital experiences."
      />

      <PageHeader
        badge="Inquiries & Collaborations"
        title="Start a Conversation"
        subtitle="Share your vision, required disciplines, and timeline. Our creative team will respond with a tailored proposal."
      />

      <section className="py-16 sm:py-24 bg-[#0a0a0a]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm initialService={initialService} />
            </div>

            {/* Studio Info Column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Studio Details Card */}
              <div className="bg-[#121212] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6 shadow-sm">
                <div>
                  <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#C8A25D] font-semibold block mb-1">
                    Direct Contact
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#ECE5D8]">
                    Sree Shine Studio
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#ECE5D8]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#C8A25D] shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold block text-xs uppercase tracking-wider text-[#6B7280]">Studio Location</span>
                      <p className="mt-0.5 text-[#9CA3AF] leading-relaxed">
                        {STUDIO_INFO.location.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#C8A25D] shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold block text-xs uppercase tracking-wider text-[#6B7280]">Email</span>
                      <a
                        href={`mailto:${STUDIO_INFO.contact.email}`}
                        className="mt-0.5 block text-[#ECE5D8] font-medium hover:text-[#C8A25D] transition-colors break-all"
                      >
                        {STUDIO_INFO.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#C8A25D] shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold block text-xs uppercase tracking-wider text-[#6B7280]">Phone</span>
                      <a
                        href={`tel:${STUDIO_INFO.contact.phone.replace(/\s+/g, '')}`}
                        className="mt-0.5 block text-[#ECE5D8] font-medium hover:text-[#C8A25D] transition-colors"
                      >
                        {STUDIO_INFO.contact.formattedPhone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#C8A25D] shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold block text-xs uppercase tracking-wider text-[#6B7280]">Hours</span>
                      <p className="mt-0.5 text-[#9CA3AF]">
                        {STUDIO_INFO.contact.hours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="pt-4 border-t border-white/10">
                  <span className="font-semibold block text-xs uppercase tracking-wider text-[#6B7280] mb-3">
                    Social & Portfolios
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {STUDIO_INFO.socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-xs font-medium text-[#ECE5D8] hover:border-[#C8A25D] hover:text-[#C8A25D] transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>{social.name}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-60" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}

