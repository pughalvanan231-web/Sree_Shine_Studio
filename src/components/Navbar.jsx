import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
      setIsScrolled(window.scrollY > 20);
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
        className={`fixed top-0 left-0 right-0 z-40 h-[72px] transition-all duration-300 flex items-center bg-black/90 backdrop-blur-md border-b ${
          isScrolled ? "border-white/10 shadow-sm" : "border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          <BrandLogo variant="compact" size="md" asLink={true} linkTo="/home" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? "text-[#C8A25D]" : "text-[#ECE5D8] hover:text-[#C8A25D]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-[#C8A25D] text-black hover:bg-[#DFB873] rounded text-sm font-semibold transition-colors"
            >
              Reach Out
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[#ECE5D8] hover:text-[#C8A25D] transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-black pt-[72px] flex flex-col">
          <nav className="flex flex-col p-6 space-y-4 overflow-y-auto">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-2xl font-semibold transition-colors ${
                    isActive ? "text-[#C8A25D]" : "text-[#ECE5D8] hover:text-[#C8A25D]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-6 mt-6 border-t border-white/10">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="inline-block px-6 py-3 bg-[#C8A25D] text-black hover:bg-[#DFB873] rounded font-semibold transition-colors text-center w-full"
              >
                Reach Out
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
