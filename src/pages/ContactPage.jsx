import { useSearchParams } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, ArrowUpRight, Sparkles } from "lucide-react";
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
        title="Let’s Create Something Worth Noticing"
        subtitle="Share your vision, project timeline, and required disciplines. Our creative directors will respond with a tailored proposal."
      />

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm initialService={initialService} />
            </div>

            {/* Studio Contact Info & Direct Links */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Studio Card */}
              <div className="bg-[#121212] p-8 rounded-2xl border border-white/10 space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C8A25D] font-semibold block mb-1">
                    Direct Contact
                  </span>
                  <h3 className="font-heading text-2xl font-semibold text-[#ECE5D8]">
                    Sree Shine Studio
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-[#ECE5D8]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#C4A47C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-xs uppercase tracking-wider text-[#848994]">Studio Location</span>
                      <p className="mt-0.5 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                        {STUDIO_INFO.location.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#C4A47C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-xs uppercase tracking-wider text-[#848994]">Email Inquiries</span>
                      <a
                        href={`mailto:${STUDIO_INFO.contact.email}`}
                        className="mt-0.5 text-xs sm:text-sm text-[#ECE5D8] font-medium hover:text-[#C8A25D] transition-colors"
                      >
                        {STUDIO_INFO.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#C4A47C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-xs uppercase tracking-wider text-[#848994]">Studio Line</span>
                      <a
                        href={`tel:${STUDIO_INFO.contact.phone.replace(/\s+/g, '')}`}
                        className="mt-0.5 text-xs sm:text-sm text-[#ECE5D8] font-medium hover:text-[#C8A25D] transition-colors"
                      >
                        {STUDIO_INFO.contact.formattedPhone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#C4A47C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-xs uppercase tracking-wider text-[#848994]">Studio Hours</span>
                      <p className="mt-0.5 text-xs sm:text-sm text-[#9CA3AF]">
                        {STUDIO_INFO.contact.hours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="pt-4 border-t border-white/10">
                  <span className="font-semibold block text-xs uppercase tracking-wider text-[#848994] mb-3">
                    Social & Portfolios
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {STUDIO_INFO.socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-[#121212] border border-white/10 text-xs font-medium text-[#ECE5D8] hover:border-[#C4A47C] hover:text-[#C8A25D] transition-colors inline-flex items-center gap-1 shadow-2xs"
                      >
                        <span>{social.name}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-60" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="bg-[#121212] p-7 rounded-2xl border border-white/10 shadow-sm space-y-3">
                <h4 className="font-heading text-lg font-semibold text-[#ECE5D8] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C4A47C]" />
                  <span>What to Expect Next</span>
                </h4>
                <ul className="text-xs text-[#9CA3AF] space-y-2 leading-relaxed">
                  <li>• Initial scope assessment within 24 business hours.</li>
                  <li>• Scheduling of a 30-minute creative alignment session.</li>
                  <li>• Delivery of a comprehensive proposal & timeline roadmap.</li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
