import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight, Compass, RotateCcw, FastForward } from "lucide-react";
import gsap from "gsap";
import SeoMeta from "../components/SeoMeta";
import BrandLogo from "../components/BrandLogo";
import LogoImage from "../../Logo.png";

export default function WelcomePage() {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoFading, setIsVideoFading] = useState(false);
  const isNavigatingRef = useRef(false);

  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const peacockRef = useRef(null);
  const charsRef = useRef([]);
  const studioRef = useRef(null);
  const lineRef = useRef(null);
  const subtitleRef = useRef(null);
  const actionsRef = useRef(null);
  const replayBtnRef = useRef(null);
  const timelineRef = useRef(null);

  const titleWords = [
    { word: "SREE", letters: ["S", "R", "E", "E"] },
    { word: "SHINE", letters: ["S", "H", "I", "N", "E"] },
  ];

  const playEntranceAnimation = useCallback(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      if (peacockRef.current) gsap.set(peacockRef.current, { opacity: 1, y: 0 });
      if (charsRef.current) gsap.set(charsRef.current, { y: "0%", opacity: 1 });
      if (studioRef.current) gsap.set(studioRef.current, { opacity: 1, y: 0 });
      if (lineRef.current) gsap.set(lineRef.current, { scaleX: 1, opacity: 1 });
      if (subtitleRef.current) gsap.set(subtitleRef.current, { opacity: 1, y: 0 });
      if (actionsRef.current) gsap.set(actionsRef.current, { opacity: 1, y: 0 });
      if (replayBtnRef.current) gsap.set(replayBtnRef.current, { opacity: 1 });
      return;
    }

    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Set initial states
    gsap.set(peacockRef.current, { opacity: 0, y: -16, scale: 0.94 });
    gsap.set(charsRef.current, { y: "108%", opacity: 1 });
    gsap.set(studioRef.current, { opacity: 0, y: 14 });
    gsap.set(lineRef.current, { scaleX: 0, opacity: 0 });
    gsap.set(subtitleRef.current, { opacity: 0, y: 12 });
    gsap.set(actionsRef.current, { opacity: 0, y: 14 });
    gsap.set(replayBtnRef.current, { opacity: 0 });

    const tl = gsap.timeline();
    timelineRef.current = tl;

    // 0.0s – 0.6s: Transparent Peacock Mark Subtle Entrance
    tl.to(
      peacockRef.current,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "power2.out",
      },
      0.0
    );

    // 0.15s – 0.95s: SREE SHINE Character-by-Character Stagger from below clip
    tl.to(
      charsRef.current,
      {
        y: "0%",
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.048,
      },
      0.15
    );

    // 0.75s – 1.25s: STUDIO Lettering upward reveal
    tl.to(
      studioRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power2.out",
      },
      0.75
    );

    // 0.95s – 1.45s: Fine gold accent line draws
    tl.to(
      lineRef.current,
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power2.inOut",
      },
      0.95
    );

    // 1.15s – 1.65s: Supporting sentence reveals
    tl.to(
      subtitleRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power2.out",
      },
      1.15
    );

    // 1.35s – 1.85s: Entry actions settle into place
    tl.to(
      actionsRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power2.out",
      },
      1.35
    );

    // 1.8s+: Subtle replay button fade
    tl.to(
      replayBtnRef.current,
      {
        opacity: 0.7,
        duration: 0.4,
      },
      1.75
    );
  }, []);

  const handleVideoEnd = useCallback(() => {
    setIsVideoFading(true);
    setTimeout(() => {
      setIsVideoPlaying(false);
    }, 500); // smooth fade transition
  }, []);

  // Ensure video plays automatically upon mounting or replaying
  useEffect(() => {
    if (isVideoPlaying && videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Video autoplay notice:", err);
        });
      }
    }
  }, [isVideoPlaying]);

  useEffect(() => {
    if (!isVideoPlaying) {
      playEntranceAnimation();
    }
    return () => {
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, [playEntranceAnimation, isVideoPlaying]);

  const handleEnterWebsite = useCallback(
    (e) => {
      e?.preventDefault();
      if (isNavigatingRef.current) return;
      isNavigatingRef.current = true;
      setIsNavigating(true);

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        navigate("/home");
      } else {
        if (containerRef.current) {
          gsap.to(containerRef.current, {
            opacity: 0,
            y: -10,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
              navigate("/home");
            },
          });
        } else {
          setTimeout(() => navigate("/home"), 300);
        }
      }
    },
    [navigate]
  );

  return (
    <>
      <SeoMeta
        title="Welcome"
        description="Sree Shine Studio — Photography. Branding. Design. Digital experiences. Where creativity comes to life."
      />

      {/* 1. Cinematic Intro Video Overlay */}
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

          {/* Floating Skip Intro Button with Safe Area Awareness */}
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

      {/* 2. Main Central Welcome Landing Stage */}
      <div
        ref={containerRef}
        className="relative min-h-[100dvh] w-full bg-[#0a0a0a] text-[#ECE5D8] flex flex-col justify-between p-6 sm:p-10 md:p-14 overflow-x-hidden select-none"
      >
        {/* Background Ambient Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 45%, rgba(200, 162, 93, 0.08) 0%, rgba(10, 10, 10, 0) 70%)",
          }}
        />

        {/* Top Minimal Bar */}
        <header className="relative z-20 w-full max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandLogo variant="compact" size="sm" asLink={false} />
          </div>

          <button
            type="button"
            onClick={handleEnterWebsite}
            className="px-5 py-2.5 rounded-full border border-white/20 text-xs uppercase tracking-widest text-[#ECE5D8] hover:text-black hover:bg-[#C8A25D] hover:border-[#C8A25D] transition-all cursor-pointer inline-flex items-center gap-2 font-medium shadow-sm active:scale-95"
            aria-label="Enter Sree Shine Studio Website"
          >
            <span>Enter Website</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C8A25D]" />
          </button>
        </header>

        {/* Main Central Typographic Composition */}
        <main
          id="main-welcome-content"
          className="relative z-10 my-auto w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center py-6 sm:py-12"
        >
          {/* Transparent Brand Emblem */}
          <div
            ref={peacockRef}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-6 sm:mb-8 flex items-center justify-center pointer-events-none"
          >
            <img
              src={LogoImage}
              alt="Sree Shine Studio"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(200,162,93,0.35)]"
            />
          </div>

          {/* Screen Reader Title */}
          <h1 className="sr-only">
            Sree Shine Studio
          </h1>

          {/* Large Typographic Title: SREE SHINE */}
          <div
            aria-hidden="true"
            className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 text-center leading-none"
          >
            {titleWords.map((group, groupIdx) => (
              <div key={group.word} className="inline-flex items-center overflow-hidden py-1">
                {group.letters.map((letter, letterIdx) => {
                  const flatIdx = groupIdx === 0 ? letterIdx : 4 + letterIdx;
                  return (
                    <span
                      key={`${group.word}-${letterIdx}`}
                      className="inline-block overflow-hidden"
                    >
                      <span
                        ref={(el) => (charsRef.current[flatIdx] = el)}
                        className="inline-block font-sixcaps text-7xl xs:text-8xl sm:text-9xl md:text-[140px] lg:text-[180px] xl:text-[210px] tracking-wider text-[#ECE5D8] font-normal uppercase transform will-change-transform select-none"
                      >
                        {letter}
                      </span>
                    </span>
                  );
                })}
              </div>
            ))}
          </div>

          {/* STUDIO Spaced Lettering */}
          <div
            ref={studioRef}
            className="mt-2 sm:mt-4 overflow-hidden"
            aria-hidden="true"
          >
            <span className="font-syne text-sm sm:text-lg md:text-xl font-bold uppercase tracking-[0.45em] sm:tracking-[0.6em] text-[#C8A25D] block pl-[0.45em] sm:pl-[0.6em]">
              STUDIO
            </span>
          </div>

          {/* Fine Gold Accent Divider Line */}
          <div
            ref={lineRef}
            className="w-24 sm:w-36 h-[1.5px] bg-gradient-to-r from-transparent via-[#C8A25D] to-transparent my-6 sm:my-8 transform origin-center"
            aria-hidden="true"
          />

          {/* Supporting Statement */}
          <div ref={subtitleRef} className="max-w-xl px-4 space-y-2">
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#9CA3AF] uppercase tracking-[0.2em] font-normal leading-relaxed">
              Photography · Branding · Design · Digital Experiences
            </p>
          </div>

          {/* Entry Actions */}
          <div
            ref={actionsRef}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4"
          >
            <button
              type="button"
              id="enter-website-main-btn"
              onClick={handleEnterWebsite}
              disabled={isNavigating}
              className="w-full sm:w-auto min-h-[50px] px-9 py-3.5 bg-[#C8A25D] text-black hover:bg-[#DFB873] border border-[#C8A25D] font-syne font-bold text-xs sm:text-sm uppercase tracking-widest cursor-pointer shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2.5 rounded-full active:scale-95"
              aria-label="Enter Website — Opens Main Homepage"
            >
              <span>Enter Website</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>

            <Link
              to="/work"
              id="view-our-work-btn"
              className="w-full sm:w-auto min-h-[50px] px-8 py-3.5 text-[#ECE5D8] hover:text-black hover:bg-white/10 rounded-full border border-white/20 text-xs sm:text-sm uppercase tracking-widest font-medium cursor-pointer transition-all inline-flex items-center justify-center gap-2"
              aria-label="View Portfolio & Case Studies"
            >
              <Compass className="w-4 h-4 text-[#C8A25D]" />
              <span>View Our Work</span>
            </Link>
          </div>
        </main>

        {/* Bottom Minimal Bar & Replay Control */}
        <footer className="relative z-20 w-full max-w-7xl mx-auto flex items-center justify-between text-xs text-[#6B7280] uppercase tracking-wider pt-4 border-t border-white/5">
          <span>© {new Date().getFullYear()} Sree Shine Studio</span>

          <button
            ref={replayBtnRef}
            type="button"
            onClick={() => {
              setIsVideoFading(false);
              setIsVideoPlaying(true);
            }}
            className="cursor-pointer inline-flex items-center gap-1.5 text-[11px] text-[#9CA3AF] hover:text-[#C8A25D] transition-colors focus-visible:outline-none"
            aria-label="Replay Brand Introduction Video & Animation"
          >
            <RotateCcw className="w-3 h-3 text-[#C8A25D]" />
            <span>Replay Intro</span>
          </button>
        </footer>
      </div>
    </>
  );
}
