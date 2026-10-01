import { Link } from "react-router-dom";
import PeacockOvalLogo from "./PeacockOvalLogo";

/**
 * BrandLogo - Unified Logo Component for Sree Shine Studio
 * Features:
 * - High-definition vector rendering of the user's authentic Peacock Oval Crest Logo
 * - Responsive arrangements:
 *   - "header" / "compact": Displayed in header navigation and footer (clear, crisp, and readable)
 *   - "full": Centered hero/showcase presentation
 *   - "icon": Peacock emblem icon for compact badges and favicon
 */
export default function BrandLogo({
  variant = "compact", // "full" | "compact" | "header" | "icon"
  animated = false,
  asLink = true,
  linkTo = "/home",
  className = "",
  size = "md", // "sm" | "md" | "lg" | "xl"
}) {
  const sizeClasses = {
    sm: "h-10 sm:h-12 w-auto",
    md: "h-14 sm:h-16 w-auto",
    lg: "h-24 sm:h-28 w-auto",
    xl: "h-36 sm:h-48 md:h-60 w-auto",
  };

  const currentSizeClass = sizeClasses[size] || sizeClasses.md;

  const content = (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* 1. ICON VARIANT */}
      {variant === "icon" && (
        <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
          <img
            src="/assets/sree-shine-logo.png"
            alt="Sree Shine Studio"
            className="h-full w-auto object-contain"
            loading="eager"
          />
        </div>
      )}

      {/* 2. HEADER & COMPACT VARIANT: The Complete Official Sree Shine Studio Logo */}
      {(variant === "compact" || variant === "header") && (
        <div className={`relative flex items-center ${currentSizeClass}`}>
          <img
            src="/assets/sree-shine-logo.png"
            alt="Sree Shine Studio"
            className="h-full w-auto object-contain max-h-[64px]"
            loading="eager"
          />
        </div>
      )}

      {/* 3. FULL VARIANT */}
      {variant === "full" && (
        <div className="relative w-full max-w-[650px] flex items-center justify-center">
          <img
            src="/assets/sree-shine-logo.png"
            alt="Sree Shine Studio Logo"
            className="w-full h-auto max-h-[380px] object-contain drop-shadow-sm"
            loading="eager"
          />
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link
        to={linkTo}
        className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A25D] rounded-md transition-opacity duration-200 hover:opacity-95"
        aria-label="Sree Shine Studio — Return to Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
