import { ArrowUp, Share2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0a] text-[#ECE5D8] border-t border-white/10 py-10 sm:py-12">
      <div className="site-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2.5 text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-[#C8A25D] transition-colors focus:outline-none"
            aria-label="Scroll back to top"
          >
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C8A25D] group-hover:bg-[#C8A25D]/10 transition-all">
              <ArrowUp className="w-3.5 h-3.5 text-[#C8A25D] transform group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <span className="font-medium">Back to Top</span>
          </button>

          {/* Copyright */}
          <div className="text-xs text-[#9CA3AF] tracking-wide">
            © {currentYear} <span className="text-[#ECE5D8] font-medium">Sree Shine Studio</span>. All rights reserved.
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4 text-xs font-medium text-[#9CA3AF]">
            <span className="text-[#C8A25D] uppercase tracking-wider text-[11px]">Follow</span>
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="text-[#ECE5D8] hover:text-[#C8A25D] transition-colors py-1">Behance</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#ECE5D8] hover:text-[#C8A25D] transition-colors py-1">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#ECE5D8] hover:text-[#C8A25D] transition-colors py-1">Instagram</a>
          </div>

        </div>
      </div>
    </footer>
  );
}

