import { ArrowUp, Share2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-[#ECE5D8] border-t border-white/10 py-10 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
          
          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group cursor-pointer inline-flex items-center gap-2.5 sm:gap-3 text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-[#C8A25D] transition-colors focus-visible:outline-none"
            aria-label="Scroll back to top"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C8A25D] group-hover:bg-[#C8A25D]/10 transition-all">
              <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C8A25D] transform group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <span className="font-medium">Back to Top</span>
          </button>

          {/* Copyright */}
          <div className="text-xs sm:text-sm text-[#9CA3AF] tracking-wide max-w-md">
            © {currentYear} <span className="text-[#ECE5D8] font-medium">Sree Shine Studio</span>. Creative Studio & Agency. All rights reserved.
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium text-[#9CA3AF]">
            <div className="flex items-center gap-1.5 text-[#C8A25D]">
              <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Follow:</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 text-[#ECE5D8]">
              <a href="https://behance.net" target="_blank" rel="noreferrer" className="hover:text-[#C8A25D] transition-colors py-1">Behance</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#C8A25D] transition-colors py-1">LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#C8A25D] transition-colors py-1">Instagram</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
