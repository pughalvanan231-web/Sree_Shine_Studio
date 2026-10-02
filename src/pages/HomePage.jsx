import { useState, useRef, useEffect, useCallback } from "react";
import { FastForward } from "lucide-react";
import SeoMeta from "../components/SeoMeta";
import FlolapoHero from "../components/FlolapoHero";
import FlolapoShowcaseGallery from "../components/FlolapoShowcaseGallery";
import FlolapoManifesto from "../components/FlolapoManifesto";
import CustomerReviews from "../components/CustomerReviews";
import FlolapoMovingGallery from "../components/FlolapoMovingGallery";
import FlolapoContactBoxes from "../components/FlolapoContactBoxes";

export default function HomePage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoFading, setIsVideoFading] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = useCallback(() => {
    setIsVideoFading(true);
    setTimeout(() => {
      setIsVideoPlaying(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (isVideoPlaying && videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, [isVideoPlaying]);

  return (
    <>
      <SeoMeta
        title="Sree Shine Studio | Creative Studio & Agency"
        description="We are a creative agency specialized in strategy, branding design, commercial photography, and development. Where creativity comes to life."
      />

      {/* 0. Cinematic Brand Intro Video Overlay */}
      {isVideoPlaying && (
        <div 
          className={`fixed inset-0 z-50 bg-[#0a0a0a] flex items-center justify-center p-2 sm:p-0 transition-opacity duration-500 ease-in-out ${isVideoFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <video
            ref={videoRef}
            src="/videos/intro.mp4?v=2"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="w-full h-full max-w-[94vw] sm:max-w-none max-h-[85vh] sm:max-h-none object-contain md:object-cover md:scale-105"
          >
            <source src="/videos/intro.mp4?v=2" type="video/mp4" />
            <source src="/assets/intro.mp4?v=2" type="video/mp4" />
            <source src="/assets/final logo ind.mp4?v=2" type="video/mp4" />
          </video>

          {/* Floating Skip Intro Button */}
          <button
            type="button"
            onClick={handleVideoEnd}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50 px-4 py-2 rounded-full bg-black/70 hover:bg-[#C8A25D] text-white hover:text-black border border-white/20 hover:border-[#C8A25D] text-[11px] sm:text-xs uppercase tracking-widest font-semibold backdrop-blur-md transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-lg active:scale-95"
            style={{
              top: "max(16px, env(safe-area-inset-top, 16px))",
              right: "max(16px, env(safe-area-inset-right, 16px))",
            }}
            aria-label="Skip Introduction Video"
          >
            <span>Skip Intro</span>
            <FastForward className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* 1. Cinematic Giant Typography Hero */}
      <FlolapoHero />

      {/* 2. Overlapping Staggered Showcase Gallery */}
      <FlolapoShowcaseGallery />

      {/* 3. Agency Manifesto & Reach Out CTA */}
      <FlolapoManifesto />

      {/* 4. Customer Feedback & Client Reviews */}
      <CustomerReviews />

      {/* 5. 2-Row Infinite Moving Gallery Marquee Wall */}
      <FlolapoMovingGallery />

      {/* 6. 3-Column Minimalist Studio Contact Bar */}
      <FlolapoContactBoxes />
    </>
  );
}
