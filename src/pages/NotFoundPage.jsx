import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SeoMeta from "../components/SeoMeta";

export default function NotFoundPage() {
  return (
    <>
      <SeoMeta
        title="404 — Page Not Found"
        description="The page you are looking for does not exist."
      />

      <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-16 bg-[#0a0a0a]">
        <div className="site-container max-w-lg text-center space-y-6">
          <span className="font-heading text-7xl sm:text-8xl font-bold text-[#C8A25D] block">404</span>
          
          <h1 className="font-heading text-2xl sm:text-3xl font-semibold text-[#ECE5D8]">
            Page Not Found
          </h1>

          <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
            The page you are looking for may have been moved, updated, or is no longer available.
          </p>

          <div className="pt-2 flex justify-center">
            <Link
              to="/home"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C8A25D] hover:bg-[#DFB873] text-black text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full shadow-md transition-all active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return Home</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

