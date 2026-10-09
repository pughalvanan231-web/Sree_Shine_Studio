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
            <a href="https://www.behance.net/gokuldesigner1" target="_blank" rel="noreferrer" className="text-[#ECE5D8] hover:text-[#C8A25D] transition-colors py-1 flex items-center gap-1.5" title="Behance">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7h6a3 3 0 0 1 0 6H2.5z"/><path d="M2.5 13h6.5a3.5 3.5 0 0 1 0 7H2.5z"/><path d="M2.5 7v13"/><path d="M14 13h7.5"/><path d="M14 13a4.5 4.5 0 0 1 8.5-1.5 4.5 4.5 0 0 1-8.5 1.5"/><path d="M17 7h4"/></svg>
              <span className="sr-only">Behance</span>
            </a>
            <a href="https://www.linkedin.com/in/sree-shine-studio-276570438?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" className="text-[#ECE5D8] hover:text-[#C8A25D] transition-colors py-1 flex items-center gap-1.5" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/sree_shine_studio?utm_source=qr" target="_blank" rel="noreferrer" className="text-[#ECE5D8] hover:text-[#C8A25D] transition-colors py-1 flex items-center gap-1.5" title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <span className="sr-only">Instagram</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

