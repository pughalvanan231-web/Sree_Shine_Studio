import { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../assets/images/Logo.png";

export default function BrandLogo({
  variant = "compact", // "full" | "compact" | "header" | "icon"
  asLink = true,
  linkTo = "/home",
  className = "",
  size = "md",
}) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: "h-7 sm:h-8",
    md: "h-8 sm:h-10",
    lg: "h-14 sm:h-16",
    xl: "h-20 sm:h-24",
  };

  const currentSizeClass = sizeClasses[size] || sizeClasses.md;

  const content = (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {!imageError ? (
        <img
          src={LogoImage}
          alt="Sree Shine Studio"
          className={`${currentSizeClass} w-auto object-contain`}
          onError={() => setImageError(true)}
          loading="eager"
        />
      ) : (
        <div className="flex items-center gap-2">
          <span className="text-[#C8A25D] text-lg font-bold">✦</span>
          <span className="font-heading text-sm sm:text-base tracking-[0.25em] text-[#ECE5D8] uppercase font-bold">
            SREE SHINE <span className="text-[#C8A25D] font-light">STUDIO</span>
          </span>
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link
        to={linkTo}
        className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A25D] rounded-md transition-opacity duration-200 hover:opacity-90"
        aria-label="Sree Shine Studio — Return to Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
