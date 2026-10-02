import { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
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

  // Ensure autoplay triggers reliably across mobile devices
  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented by browser policy (user can tap Enter Studio)
        });
      }
    }
  }, []);

  return (
    <>
      <SeoMeta
        title="Welcome · Sree Shine Studio"
        description="Sree Shine Studio — Commercial Photography, Branding, Fashion & Spatial Design. Where creativity comes to life."
      />

      <div 
        onClick={handleEnterWebsite}
        className="relative w-screen h-[100dvh] bg-black overflow-hidden flex flex-col items-center justify-center cursor-pointer select-none"
      >
        {/* Ambient Luxury Radial Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] md:w-[700px] h-[320px] sm:h-[500px] md:h-[700px] bg-[#C8A25D]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Video Canvas - Contained so logo is never cropped on mobile portrait screens */}
        <div className="relative z-10 w-full h-full max-w-5xl flex items-center justify-center p-4 sm:p-8">
          <video
            ref={videoRef}
            src="/assets/final%20logo.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            webkit-playsinline="true"
            onEnded={handleEnterWebsite}
            className="w-full max-h-[82vh] object-contain drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
          />
        </div>

        {/* Top Hint on Mobile */}
        <div className="absolute top-6 sm:top-8 z-20 flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#848994] opacity-70">
          <Sparkles className="w-3 h-3 text-[#C8A25D]" />
          <span>Sree Shine Studio</span>
        </div>

        {/* Floating Skip / Enter Studio Button for Mobile, Tablet, Laptop */}
        <div className="absolute bottom-6 sm:bottom-10 z-20 flex flex-col items-center gap-2 w-full px-4">
          <button
            type="button"
            onClick={handleEnterWebsite}
            className="group px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#121212]/90 hover:bg-[#C8A25D] text-[#ECE5D8] hover:text-black border border-[#C8A25D]/40 hover:border-[#C8A25D] backdrop-blur-md text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-2.5"
          >
            <span>Enter Studio</span>
            <ArrowRight className="w-4 h-4 text-[#C8A25D] group-hover:text-black transform group-hover:translate-x-1 transition-transform" />
          </button>
          
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#848994]/60">
            Tap anywhere to enter
          </span>
        </div>
      </div>
    </>
  );
}
