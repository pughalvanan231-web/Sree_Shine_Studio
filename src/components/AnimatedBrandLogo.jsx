import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * AnimatedBrandLogo
 * 
 * Renders the authentic Sree Shine Studio artwork using genuine transparent
 * isolated layers in a unified 1536x1024 coordinate system.
 * 
 * Animation Sequence (2.5s):
 * 0.0–0.8s: Gold arch & ornaments reveal progressively from lower edges toward top
 * 0.3–1.0s: Peacock body reveals smoothly from head toward body
 * 0.5–1.2s: Peacock tail feathers reveal naturally
 * 0.7–1.5s: Right-side feather and gold curls reveal along vertical direction
 * 1.0–1.9s: "Sree Shine" reveals from left to right through a clean mask with subtle upward motion
 * 1.5–2.1s: "STUDIO" and lower decoration appear
 * 1.9–2.4s: Restrained golden gleam highlight over gold accents
 * 2.5s+: Crisp, stationary settled composition
 */
export default function AnimatedBrandLogo({ className = "", onComplete }) {
  const containerRef = useRef(null);
  const goldArchRef = useRef(null);
  const peacockBodyRef = useRef(null);
  const peacockTailRef = useRef(null);
  const rightFeatherRef = useRef(null);
  const textSreeRef = useRef(null);
  const textStudioRef = useRef(null);
  const goldShimmerRef = useRef(null);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Settle immediately
      if (goldArchRef.current) gsap.set(goldArchRef.current, { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" });
      if (peacockBodyRef.current) gsap.set(peacockBodyRef.current, { opacity: 1, y: 0 });
      if (peacockTailRef.current) gsap.set(peacockTailRef.current, { opacity: 1, y: 0 });
      if (rightFeatherRef.current) gsap.set(rightFeatherRef.current, { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" });
      if (textSreeRef.current) gsap.set(textSreeRef.current, { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" });
      if (textStudioRef.current) gsap.set(textStudioRef.current, { opacity: 1, y: 0, scale: 1 });
      if (onComplete) onComplete();
      return;
    }

    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(goldArchRef.current, {
        opacity: 0,
        clipPath: "inset(100% 0% 0% 0%)",
      });

      gsap.set(peacockBodyRef.current, {
        opacity: 0,
        y: -14,
        clipPath: "inset(0% 0% 100% 0%)",
      });

      gsap.set(peacockTailRef.current, {
        opacity: 0,
        y: 12,
        scale: 0.97,
      });

      gsap.set(rightFeatherRef.current, {
        opacity: 0,
        y: -16,
        clipPath: "inset(0% 0% 100% 0%)",
      });

      gsap.set(textSreeRef.current, {
        opacity: 0,
        y: 8,
        clipPath: "inset(0% 100% 0% 0%)",
      });

      gsap.set(textStudioRef.current, {
        opacity: 0,
        y: 6,
        scale: 0.98,
      });

      gsap.set(goldShimmerRef.current, {
        opacity: 0,
        x: "-100%",
      });

      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      // 1. 0.0–0.8s: Gold Arch reveals upward from base
      tl.to(
        goldArchRef.current,
        {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.85,
          ease: "power2.out",
        },
        0.0
      );

      // 2. 0.3–1.0s: Peacock Body reveals from head downward
      tl.to(
        peacockBodyRef.current,
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.75,
          ease: "power2.out",
        },
        0.3
      );

      // 3. 0.5–1.2s: Peacock Tail plumage fans in
      tl.to(
        peacockTailRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        0.5
      );

      // 4. 0.7–1.5s: Right-side feather & gold curls reveal along vertical curve
      tl.to(
        rightFeatherRef.current,
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.8,
          ease: "power2.out",
        },
        0.7
      );

      // 5. 1.0–1.9s: "Sree Shine" lettering reveals left-to-right with slight upward settle
      tl.to(
        textSreeRef.current,
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.9,
          ease: "power2.out",
        },
        1.0
      );

      // 6. 1.5–2.1s: "STUDIO" and lower decoration appear
      tl.to(
        textStudioRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          ease: "power2.out",
        },
        1.5
      );

      // 7. 1.9–2.4s: Restrained golden gleam highlight over the gold arch
      tl.to(
        goldShimmerRef.current,
        {
          opacity: 0.45,
          x: "100%",
          duration: 0.65,
          ease: "power1.inOut",
        },
        1.9
      );
      tl.to(
        goldShimmerRef.current,
        {
          opacity: 0,
          duration: 0.2,
        },
        2.35
      );
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-[1536/1024] select-none pointer-events-none ${className}`}
      role="img"
      aria-label="Sree Shine Studio"
    >
      {/* Layer 1: Gold Arch & Top/Side Framing Ornaments */}
      <img
        ref={goldArchRef}
        src="/assets/layers/layer-1-gold-arch.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain"
        loading="eager"
      />

      {/* Layer 2: Peacock Body (Head, Crest, Neck, Vel) */}
      <img
        ref={peacockBodyRef}
        src="/assets/layers/layer-2-peacock-body.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain"
        loading="eager"
      />

      {/* Layer 3: Peacock Tail (Cascading Emerald Plumes & Feathers) */}
      <img
        ref={peacockTailRef}
        src="/assets/layers/layer-3-peacock-tail.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain"
        loading="eager"
      />

      {/* Layer 4: Right-Side Feather & Gold Curls */}
      <img
        ref={rightFeatherRef}
        src="/assets/layers/layer-4-right-feather.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain"
        loading="eager"
      />

      {/* Layer 5: "Sree Shine" Lettering */}
      <img
        ref={textSreeRef}
        src="/assets/layers/layer-5-text-sreeshine.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain"
        loading="eager"
      />

      {/* Layer 6: "STUDIO" Lettering & Lower Gold Decoration */}
      <img
        ref={textStudioRef}
        src="/assets/layers/layer-6-text-studio.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain"
        loading="eager"
      />

      {/* Restrained Golden Shimmer Sweep */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-screen opacity-0"
      >
        <div
          ref={goldShimmerRef}
          className="w-full h-full bg-gradient-to-r from-transparent via-[#FDE68A]/35 to-transparent transform -skew-x-12"
        />
      </div>
    </div>
  );
}
