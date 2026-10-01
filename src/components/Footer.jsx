import { ArrowUp, Share2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0a] text-[#ECE5D8] border-t border-white/10 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group cursor-pointer inline-flex items-center gap-3 text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-[#C8A25D] transition-colors focus-visible:outline-none"
            aria-label="Scroll back to top"
          >
            <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C8A25D] group-hover:bg-[#C8A25D]/10 transition-all">
              <ArrowUp className="w-4 h-4 text-[#C8A25D] transform group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <span className="font-medium">Back Top</span>
          </button>

          {/* Copyright */}
          <div className="text-center text-xs text-[#9CA3AF] tracking-wide">
            © {currentYear} <span className="text-[#ECE5D8] font-medium">Sree Shine Studio — Creative Studio & Agency</span>. All rights reserved.
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-[#9CA3AF]">
            <div className="flex items-center gap-2 text-[#C8A25D]">
              <Share2 className="w-3.5 h-3.5" />
              <span>Follow Us</span>
            </div>
            <div className="flex items-center gap-4 text-[#ECE5D8]">
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#C8A25D] transition-colors"
              >
                Behance
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#C8A25D] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#C8A25D] transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
