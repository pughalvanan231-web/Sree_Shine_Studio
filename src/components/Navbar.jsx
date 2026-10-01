import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import BrandLogo from "./BrandLogo";

function TextRollLink({ to, children, isActive }) {
  return (
    <NavLink
      to={to}
      className={`group relative inline-block h-6 overflow-hidden text-xs uppercase tracking-widest font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A25D] ${
        isActive ? "text-[#C8A25D] font-semibold" : "text-[#9CA3AF] hover:text-[#ECE5D8]"
      }`}
      aria-label={typeof children === "string" ? children : undefined}
    >
      <div className="flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1/2">
        <span className="flex items-center h-6">{children}</span>
        <span className="flex items-center h-6 text-[#C8A25D]">{children}</span>
      </div>
      {isActive && (
        <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C8A25D] rounded-full" />
      )}
    </NavLink>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-[76px] sm:h-[84px] transition-all duration-300 flex items-center glass-header-dark border-b border-black/5 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between">
            
            {/* Logo on Left */}
            <div className="flex items-center">
              <BrandLogo variant="compact" size="md" asLink={true} linkTo="/home" />
            </div>

            {/* Desktop Navigation with Flolapo Text-Roll Effect */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <TextRollLink
                  key={link.path}
                  to={link.path}
                  isActive={location.pathname === link.path}
                >
                  {link.name}
                </TextRollLink>
              ))}

              <Link
                to="/contact"
                className="flolapo-pill-btn px-5 py-2 text-xs uppercase tracking-widest text-[#ECE5D8] font-medium ml-2 group"
              >
                <span>Reach Out!</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 text-[#C8A25D] group-hover:text-black transition-colors" />
              </Link>
            </nav>

            {/* Flolapo Menu Burger Button */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="lg:hidden flolapo-pill-btn px-3.5 py-1.5 text-[11px] uppercase tracking-wider text-[#ECE5D8]"
              >
                Reach Out!
              </Link>

              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="cursor-pointer inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-white/10 bg-[#121212]/80 hover:border-[#C8A25D] hover:text-[#C8A25D] text-[#ECE5D8] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A25D]"
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                <div className="w-4 h-3.5 flex flex-col justify-between items-end">
                  <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "w-4 transform rotate-45 translate-y-1.5" : "w-4"}`} />
                  <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : "w-3"}`} />
                  <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "w-4 transform -rotate-45 -translate-y-1.5" : "w-2"}`} />
                </div>
                <span className="text-xs uppercase tracking-widest font-medium">
                  {menuOpen ? "Close" : "Menu"}
                </span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Flolapo Signature Fullscreen Overlay Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 95% 5%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 95% 5%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 95% 5%)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#0a0a0a] text-[#ECE5D8] z-50 flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-y-auto"
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between w-full max-w-7xl mx-auto pb-6 border-b border-white/10">
              <BrandLogo variant="compact" size="sm" asLink={false} />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-[#C8A25D] hover:text-[#C8A25D] text-xs uppercase tracking-widest transition-all"
              >
                <X className="w-4 h-4" />
                <span>Close</span>
              </button>
            </div>

            {/* Center Massive Typography Links */}
            <div className="w-full max-w-7xl mx-auto py-10 my-auto">
              <nav className="flex flex-col space-y-4 sm:space-y-6">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * idx, duration: 0.5 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `group inline-flex items-baseline gap-4 font-sixcaps text-5xl sm:text-7xl md:text-8xl tracking-wide uppercase transition-all duration-300 ${
                          isActive
                            ? "text-[#C8A25D]"
                            : "text-[#9CA3AF] hover:text-[#ECE5D8] hover:translate-x-3"
                        }`
                      }
                    >
                      <span className="text-xs sm:text-sm font-sans tracking-widest text-[#C8A25D] opacity-60">
                        0{idx + 1}
                      </span>
                      <span>{link.name}</span>
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Bottom Info Bar inside Drawer */}
            <div className="w-full max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF] uppercase tracking-wider">
              <span>Coimbatore · Bengaluru · hello@sreeshinestudio.com</span>
              <div className="flex items-center gap-6">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#C8A25D] transition-colors">Instagram</a>
                <a href="https://behance.net" target="_blank" rel="noreferrer" className="hover:text-[#C8A25D] transition-colors">Behance</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#C8A25D] transition-colors">LinkedIn</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
