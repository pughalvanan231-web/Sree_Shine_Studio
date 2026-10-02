import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SeoMeta from "../components/SeoMeta";

export default function WelcomePage() {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const isNavigatingRef = useRef(false);

  const handleEnterWebsite = useCallback(
    (e) => {
      e?.preventDefault();
      if (isNavigatingRef.current) return;
      isNavigatingRef.current = true;
      setIsNavigating(true);
      navigate("/home");
    },
    [navigate]
  );

  return (
    <>
      <SeoMeta
        title="Welcome · Sree Shine Studio"
        description="Sree Shine Studio — Photography. Branding. Design. Digital experiences. Where creativity comes to life."
      />

      <div className="relative w-screen h-[100dvh] bg-black overflow-hidden flex items-center justify-center">
        {/* Video Canvas */}
        <video
          src="/assets/final%20logo.mp4"
          autoPlay
          muted
          playsInline
          onEnded={handleEnterWebsite}
          className="w-full h-full object-cover"
        />

        {/* Floating Skip / Enter Studio Button for Mobile, Tablet, Laptop */}
        <div className="absolute bottom-8 sm:bottom-12 z-20 flex justify-center w-full px-4">
          <button
            type="button"
            onClick={handleEnterWebsite}
            className="group px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-black/60 hover:bg-[#C8A25D] text-[#ECE5D8] hover:text-black border border-white/20 hover:border-[#C8A25D] backdrop-blur-md text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span>Enter Studio</span>
            <ArrowRight className="w-4 h-4 text-[#C8A25D] group-hover:text-black transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </>
  );
}
