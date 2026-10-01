import { Mail, Compass, Phone } from "lucide-react";

export default function FlolapoContactBoxes() {
  return (
    <section className="py-20 sm:py-28 bg-[#0c0c0c] text-[#ECE5D8] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 text-center">
          
          {/* Box 1: Email */}
          <div className="flex flex-col items-center space-y-4 p-8 rounded-2xl bg-[#121212]/50 border border-white/5 hover:border-[#C8A25D]/40 transition-colors">
            <div className="w-14 h-14 rounded-full bg-[#C8A25D]/10 border border-[#C8A25D]/30 flex items-center justify-center text-[#C8A25D]">
              <Mail className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#9CA3AF]">Inquiries & Collaboration</span>
              <h4 className="font-syne text-base sm:text-lg font-semibold text-[#ECE5D8]">
                <a
                  href="mailto:hello@sreeshinestudio.com"
                  className="hover:text-[#C8A25D] transition-colors"
                >
                  hello@sreeshinestudio.com
                </a>
              </h4>
            </div>
          </div>

          {/* Box 2: Address */}
          <div className="flex flex-col items-center space-y-4 p-8 rounded-2xl bg-[#121212]/50 border border-white/5 hover:border-[#C8A25D]/40 transition-colors">
            <div className="w-14 h-14 rounded-full bg-[#C8A25D]/10 border border-[#C8A25D]/30 flex items-center justify-center text-[#C8A25D]">
              <Compass className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#9CA3AF]">Studio Locations</span>
              <h4 className="font-syne text-sm sm:text-base font-medium text-[#ECE5D8] max-w-xs leading-relaxed">
                148, Sree Narayanaguru Road, Saibaba Colony, Coimbatore · Bengaluru Atelier
              </h4>
            </div>
          </div>

          {/* Box 3: Phone */}
          <div className="flex flex-col items-center space-y-4 p-8 rounded-2xl bg-[#121212]/50 border border-white/5 hover:border-[#C8A25D]/40 transition-colors">
            <div className="w-14 h-14 rounded-full bg-[#C8A25D]/10 border border-[#C8A25D]/30 flex items-center justify-center text-[#C8A25D]">
              <Phone className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#9CA3AF]">Direct Line</span>
              <h4 className="font-syne text-base sm:text-lg font-semibold text-[#ECE5D8]">
                <a
                  href="tel:+919626399990"
                  className="hover:text-[#C8A25D] transition-colors"
                >
                  +91 96263 99990
                </a>
              </h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
