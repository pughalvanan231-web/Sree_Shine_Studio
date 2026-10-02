import { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SeoMeta from "../components/SeoMeta";

export default function WelcomePage() {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const isNavigatingRef = useRef(false);
  const videoRef = useRef(null);

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

  // Autoplay handler
  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay fallback
        });
      }
    }
  }, []);

  return (
    <>
      <SeoMeta
        title="Welcome · Sree Shine Studio"
        description="Sree Shine Studio — Commercial Photography, Branding, Fashion & Spatial Design."
      />

      <div className="relative w-screen h-[100dvh] bg-black overflow-hidden flex flex-col items-center justify-between p-6 sm:p-10 select-none">
        {/* Top Studio Label */}
        <div className="z-20 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold">
          Sree Shine Studio
        </div>

        {/* Video Canvas Container - Blended with Screen mode & Edge Vignette */}
        <div 
          onClick={handleEnterWebsite}
          className="relative z-10 w-full max-w-4xl flex items-center justify-center my-auto cursor-pointer"
        >
          <video
            ref={videoRef}
            src="/assets/final%20logo.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            webkit-playsinline="true"
            onEnded={handleEnterWebsite}
            style={{ mixBlendMode: "screen" }}
            className="w-full max-h-[75vh] object-contain [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)] contrast-110"
          />
        </div>

        {/* Enter Studio CTA */}
        <div className="z-20 flex flex-col items-center gap-2">
          <button
            type="button"
            onClick={handleEnterWebsite}
            className="px-8 py-3.5 rounded-full bg-[#C8A25D] hover:bg-[#DFB873] text-black text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 shadow-lg active:scale-95 flex items-center gap-2"
          >
            <span>Enter Studio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}

