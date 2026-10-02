import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Services", path: "/our-services" },
    { name: "Our Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const categoryLinks = [
    { name: "Photography", path: "/work-category/photography" },
    { name: "Branding", path: "/work-category/branding" },
    { name: "Web Design", path: "/work-category/web-design" },
    { name: "Social Media", path: "/work-category/social-media" },
    { name: "Digital Marketing", path: "/work-category/digital-marketing" },
    { name: "Content Production", path: "/work-category/content-production" },
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
        className={`fixed top-0 left-0 right-0 z-40 h-18 sm:h-20 transition-all duration-300 flex items-center bg-[#0a0a0a]/90 backdrop-blur-md border-b ${
          isScrolled ? "border-white/10 shadow-lg shadow-black/60" : "border-transparent"
        }`}
      >
        <div className="site-container flex items-center justify-between">
          <BrandLogo variant="compact" size="md" asLink={true} linkTo="/home" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs lg:text-sm font-medium tracking-wide uppercase transition-colors py-1 ${
                    isActive ? "text-[#C8A25D] font-semibold" : "text-[#ECE5D8] hover:text-[#C8A25D]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-[#C8A25D] text-black hover:bg-[#DFB873] rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 active:scale-95 shadow-sm"
            >
              Reach Out
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-lg text-[#ECE5D8] hover:text-[#C8A25D] hover:bg-white/5 transition-colors focus:outline-none"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} className="text-[#C8A25D]" /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-[#0a0a0a] pt-20 flex flex-col justify-between overflow-y-auto">
          <nav className="site-container py-8 flex flex-col space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C8A25D] font-semibold mb-2">
              Menu Navigation
            </span>
            {navLinks.map((link, idx) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3.5 border-b border-white/5 text-xl sm:text-2xl font-heading font-semibold uppercase tracking-tight transition-colors ${
                    isActive ? "text-[#C8A25D] pl-2 border-l-2 border-l-[#C8A25D]" : "text-[#ECE5D8] hover:text-[#C8A25D]"
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="text-xs font-sans text-[#6B7280]">0{idx + 1}</span>
              </NavLink>
            ))}

            <div className="pt-4 border-t border-white/10">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#6B7280] font-semibold mb-3 block">
                Work Categories
              </span>
              <div className="grid grid-cols-2 gap-2">
                {categoryLinks.map((cat) => (
                  <NavLink
                    key={cat.path}
                    to={cat.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-xs py-2 px-3 rounded-lg border transition-colors ${
                        isActive
                          ? "bg-[#C8A25D]/10 text-[#C8A25D] border-[#C8A25D]/30"
                          : "text-[#9CA3AF] border-white/5 hover:text-[#ECE5D8] hover:border-white/20"
                      }`
                    }
                  >
                    {cat.name}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="w-full py-3.5 bg-[#C8A25D] text-black hover:bg-[#DFB873] rounded-full font-semibold transition-all text-center flex items-center justify-center gap-2 shadow-md text-xs uppercase tracking-wider"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>

          <div className="site-container py-6 border-t border-white/10 text-xs text-[#9CA3AF] flex flex-col sm:flex-row justify-between items-center gap-2">
            <span>Sree Shine Studio</span>
            <span>hello@sreeshinestudio.com</span>
          </div>
        </div>
      )}
    </>
  );
}

