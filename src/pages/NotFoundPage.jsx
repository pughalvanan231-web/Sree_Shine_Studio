import { Link } from "react-router-dom";
import { ArrowLeft, Compass } from "lucide-react";
import SeoMeta from "../components/SeoMeta";

export default function NotFoundPage() {
  return (
    <>
      <SeoMeta
        title="404 — Page Not Found"
        description="The page you are looking for does not exist."
      />

      <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-4">
        <div className="max-w-lg mx-auto text-center space-y-6">
          <span className="font-serif text-8xl font-bold text-[#C4A47C]">404</span>
          
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#191B1E]">
            Page Not Found
          </h1>

          <p className="text-sm sm:text-base text-[#585C65] leading-relaxed">
            The creative canvas you are looking for may have moved or is no longer available.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <Link
              to="/home"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#191B1E] hover:bg-[#2C2F33] text-[#FBF9F5] text-sm font-medium rounded-full shadow transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#C4A47C]" />
              <span>Return Home</span>
            </Link>

            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F3EFE7] hover:bg-[#ECE5D8] text-[#191B1E] border border-[#DDD2BF] text-sm font-medium rounded-full transition-colors"
            >
              <Compass className="w-4 h-4 text-[#9C7741]" />
              <span>Explore Our Work</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
