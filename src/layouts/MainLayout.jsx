import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import MagicCursor from "../components/MagicCursor";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-[#ECE5D8] selection:bg-[#C8A25D]/30 selection:text-white">
      <MagicCursor />
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
