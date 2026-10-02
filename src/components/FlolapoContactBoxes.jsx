import { Mail, Compass, Phone } from "lucide-react";

export default function FlolapoContactBoxes() {
  return (
    <section className="py-16 sm:py-24 md:py-28 bg-[#0c0c0c] text-[#ECE5D8] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 text-center">
          
          {/* Box 1: Email */}
          <div className="flex flex-col items-center space-y-3 sm:space-y-4 p-6 sm:p-8 rounded-2xl bg-[#121212]/70 border border-white/5 hover:border-[#C8A25D]/40 transition-colors">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#C8A25D]/10 border border-[#C8A25D]/30 flex items-center justify-center text-[#C8A25D]">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#9CA3AF]">Inquiries & Collaboration</span>
              <h4 className="font-syne text-sm sm:text-base md:text-lg font-semibold text-[#ECE5D8]">
                <a
                  href="mailto:hello@sreeshinestudio.com"
                  className="hover:text-[#C8A25D] transition-colors break-all sm:break-normal"
                >
                  hello@sreeshinestudio.com
                </a>
              </h4>
            </div>
          </div>

          {/* Box 2: Address */}
          <div className="flex flex-col items-center space-y-3 sm:space-y-4 p-6 sm:p-8 rounded-2xl bg-[#121212]/70 border border-white/5 hover:border-[#C8A25D]/40 transition-colors">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#C8A25D]/10 border border-[#C8A25D]/30 flex items-center justify-center text-[#C8A25D]">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#9CA3AF]">Studio Locations</span>
              <h4 className="font-syne text-xs sm:text-sm md:text-base font-medium text-[#ECE5D8] max-w-xs leading-relaxed">
                148, Sree Narayanaguru Road, Saibaba Colony, Coimbatore · Bengaluru Atelier
              </h4>
            </div>
          </div>

          {/* Box 3: Phone */}
          <div className="flex flex-col items-center space-y-3 sm:space-y-4 p-6 sm:p-8 rounded-2xl bg-[#121212]/70 border border-white/5 hover:border-[#C8A25D]/40 transition-colors">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#C8A25D]/10 border border-[#C8A25D]/30 flex items-center justify-center text-[#C8A25D]">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#9CA3AF]">Direct Line</span>
              <h4 className="font-syne text-sm sm:text-base md:text-lg font-semibold text-[#ECE5D8]">
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
