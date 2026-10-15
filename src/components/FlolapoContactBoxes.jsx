import { Mail, Compass, Phone } from "lucide-react";
import { STUDIO_INFO } from "../content/studio";

export default function FlolapoContactBoxes() {
  return (
    <section className="py-16 sm:py-20 bg-[#0a0a0a] text-[#ECE5D8] border-t border-white/10">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          
          {/* Box 1: Email */}
          <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#C8A25D]/40 transition-colors flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#C8A25D]/10 text-[#C8A25D] flex items-center justify-center mx-auto md:mx-0 border border-[#C8A25D]/20">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#6B7280] block mb-1">Inquiries</span>
              <a
                href={`mailto:${STUDIO_INFO.contact.email}`}
                className="font-heading text-base sm:text-lg font-semibold text-[#ECE5D8] hover:text-[#C8A25D] transition-colors break-all"
              >
                {STUDIO_INFO.contact.email}
              </a>
            </div>
          </div>

          {/* Box 2: Location / Address */}
          <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#C8A25D]/40 transition-colors flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#C8A25D]/10 text-[#C8A25D] flex items-center justify-center mx-auto md:mx-0 border border-[#C8A25D]/20">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#6B7280] block mb-1">Studio Address</span>
              <a
                href={STUDIO_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-xs sm:text-sm font-medium text-[#ECE5D8] leading-relaxed hover:text-[#C8A25D] transition-colors block"
              >
                {STUDIO_INFO.location.address}
              </a>
            </div>
          </div>

          {/* Box 3: Phone */}
          <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#C8A25D]/40 transition-colors flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#C8A25D]/10 text-[#C8A25D] flex items-center justify-center mx-auto md:mx-0 border border-[#C8A25D]/20">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#6B7280] block mb-1">Direct Line</span>
              <a
                href={`tel:${STUDIO_INFO.contact.phone}`}
                className="font-heading text-base sm:text-lg font-semibold text-[#ECE5D8] hover:text-[#C8A25D] transition-colors"
              >
                +91 95247 80695
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

