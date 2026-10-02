import { Mail, Compass, Phone } from "lucide-react";

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
                href="mailto:hello@sreeshinestudio.com"
                className="font-heading text-base sm:text-lg font-semibold text-[#ECE5D8] hover:text-[#C8A25D] transition-colors break-all sm:break-normal"
              >
                hello@sreeshinestudio.com
              </a>
            </div>
          </div>

          {/* Box 2: Location */}
          <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#C8A25D]/40 transition-colors flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#C8A25D]/10 text-[#C8A25D] flex items-center justify-center mx-auto md:mx-0 border border-[#C8A25D]/20">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#6B7280] block mb-1">Studios</span>
              <p className="font-heading text-sm sm:text-base font-medium text-[#ECE5D8] leading-relaxed">
                Coimbatore Atelier & Bengaluru Studio
              </p>
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
                href="tel:+919626399990"
                className="font-heading text-base sm:text-lg font-semibold text-[#ECE5D8] hover:text-[#C8A25D] transition-colors"
              >
                +91 96263 99990
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

