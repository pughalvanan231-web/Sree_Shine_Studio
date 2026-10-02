import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Mail, Phone } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
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

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-[68px] sm:h-[76px] transition-all duration-300 flex items-center bg-black/90 backdrop-blur-md border-b ${
          isScrolled ? "border-white/10 shadow-lg shadow-black/50" : "border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          <BrandLogo variant="compact" size="md" asLink={true} linkTo="/home" />

          {/* Desktop & Tablet Navigation */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs lg:text-sm font-medium tracking-wide uppercase transition-colors py-1.5 ${
                    isActive ? "text-[#C8A25D] font-semibold" : "text-[#ECE5D8] hover:text-[#C8A25D]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-4 lg:px-5 py-2 lg:py-2.5 bg-[#C8A25D] text-black hover:bg-[#DFB873] rounded-lg text-xs lg:text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              Reach Out
            </Link>
          </div>

          {/* Mobile Menu Toggle Button with 44px touch target */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-lg text-[#ECE5D8] hover:text-[#C8A25D] hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A25D]"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} className="text-[#C8A25D]" /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-black/98 backdrop-blur-2xl pt-[76px] flex flex-col justify-between overflow-y-auto animate-fadeIn">
          {/* Main Links */}
          <nav className="flex flex-col p-6 sm:p-8 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C8A25D] font-semibold mb-2">
              Menu Navigation
            </span>
            {navLinks.map((link, idx) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3 border-b border-white/5 text-2xl sm:text-3xl font-heading font-bold uppercase tracking-tight transition-colors ${
                    isActive ? "text-[#C8A25D] pl-2 border-l-2 border-l-[#C8A25D]" : "text-[#ECE5D8] hover:text-[#C8A25D]"
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="text-xs font-sans text-[#848994]">0{idx + 1}</span>
              </NavLink>
            ))}

            <div className="pt-6">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="w-full py-3.5 bg-[#C8A25D] text-black hover:bg-[#DFB873] rounded-xl font-semibold transition-all text-center flex items-center justify-center gap-2 shadow-lg text-sm uppercase tracking-wider"
              >
                <span>Start a Project · Reach Out</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>

          {/* Quick Direct Contacts in Mobile Drawer */}
          <div className="p-6 sm:p-8 bg-[#121212]/80 border-t border-white/10 space-y-3">
            <div className="text-xs text-[#9CA3AF] flex flex-col gap-2">
              <a href="mailto:hello@sreeshinestudio.com" className="flex items-center gap-2 hover:text-[#C8A25D] transition-colors py-1">
                <Mail className="w-4 h-4 text-[#C8A25D]" />
                <span>hello@sreeshinestudio.com</span>
              </a>
              <a href="tel:+919626399990" className="flex items-center gap-2 hover:text-[#C8A25D] transition-colors py-1">
                <Phone className="w-4 h-4 text-[#C8A25D]" />
                <span>+91 96263 99990</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
