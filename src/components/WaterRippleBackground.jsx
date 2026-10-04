import React, { useState, useEffect } from 'react';
import ReactWaterWave from 'react-water-wave';

const WaterWave = ReactWaterWave.default || ReactWaterWave;

/**
 * WaterRippleBackground
 * 
 * A premium, interactive WebGL-based liquid ripple effect for background images.
 * Uses real GPU/WebGL displacement physics (Navier-Stokes wave equations).
 * 
 * Features:
 * - Mouse movement / touch generates smooth ripples.
 * - Clicks generate larger splash ripples.
 * - Realistic damping, refraction, and overlapping waves.
 * - Graceful degradation for prefers-reduced-motion.
 */
export default function WaterRippleBackground({
  imageUrl,
  children,
  dropRadius = 15,
  perturbance = 0.02,
  resolution = 256,
  interactive = true,
  className = "",
  style = {}
}) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Fallback to a static background image if reduced motion is preferred
  if (prefersReducedMotion) {
    return (
      <div 
        className={`relative w-full h-full bg-cover bg-center ${className}`}
        style={{ backgroundImage: `url(${imageUrl})`, ...style }}
      >
        {children && children()}
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`} style={style}>
      <WaterWave
        imageUrl={imageUrl}
        dropRadius={dropRadius}
        perturbance={perturbance}
        resolution={resolution}
        interactive={interactive}
        style={{ width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {(methods) => (
          <div className="absolute inset-0 pointer-events-none">
            {children ? children(methods) : null}
          </div>
        )}
      </WaterWave>
    </div>
  );
}
