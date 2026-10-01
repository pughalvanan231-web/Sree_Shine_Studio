import { motion } from "framer-motion";

/**
 * PeacockOvalLogo - Vector SVG Recreation of the Sree Shine Studio Peacock Crest Logo
 * Elements:
 * 1. Regal Blue Peacock with cascading emerald & gold eyespot plumage on the left
 * 2. Elegant double-line golden oval frame with ornate fleur-de-lis crown at the top & bottom flourish
 * 3. Delicate peacock feather with golden filigree flourishes on the right
 * 4. Central serif wordmark "Sree Shine" with "S T U D I O" subline flanked by gold diamond stars
 */

export default function PeacockOvalLogo({
  variant = "full", // "full" | "compact" | "icon"
  animated = false,
  className = "",
  width,
  height,
}) {
  const isReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const shouldAnimate = animated && !isReduced;

  // Staged entrance animation variants
  const archVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const peacockVariants = {
    hidden: { opacity: 0, scale: 0.94, x: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const rightFeatherVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.85, delay: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const typographyVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const shimmerSweep = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: "200%",
      opacity: [0, 0.6, 0],
      transition: { duration: 1.2, delay: 1.3, ease: "easeInOut" }
    }
  };

  // ViewBoxes based on variant
  const viewBox = variant === "icon" 
    ? "20 60 280 440" 
    : variant === "compact" 
    ? "0 40 850 460" 
    : "0 0 920 580";

  return (
    <div className={`relative inline-block select-none ${className}`}>
      <svg
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible drop-shadow-sm"
        style={{ width: width || undefined, height: height || undefined }}
        aria-label="Sree Shine Studio — Peacock Crest Logo"
        role="img"
      >
        <defs>
          {/* Rich Antique Gold Gradient */}
          <linearGradient id="ovalGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9E29D" />
            <stop offset="30%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#B38738" />
            <stop offset="100%" stopColor="#875E1E" />
          </linearGradient>

          {/* Bright Gold Highlight */}
          <linearGradient id="ovalGoldLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF2C2" />
            <stop offset="100%" stopColor="#D8AE43" />
          </linearGradient>

          {/* Royal Peacock Blue */}
          <linearGradient id="royalPeacockBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E7EB3" />
            <stop offset="45%" stopColor="#0E5E8A" />
            <stop offset="100%" stopColor="#083654" />
          </linearGradient>

          {/* Emerald Plumage Gradient */}
          <linearGradient id="emeraldPlume" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#25A584" />
            <stop offset="50%" stopColor="#0F6B56" />
            <stop offset="100%" stopColor="#064233" />
          </linearGradient>

          {/* Eyespot Radial Gradient */}
          <radialGradient id="eyespotCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1E7EB3" />
            <stop offset="40%" stopColor="#083654" />
            <stop offset="70%" stopColor="#F5B83D" />
            <stop offset="100%" stopColor="#0F6B56" />
          </radialGradient>

          {/* Shimmer clip */}
          <clipPath id="ovalShimmerClip">
            <rect x="0" y="0" width="920" height="580" />
          </clipPath>
        </defs>

        {/* ========================================================================= */}
        {/* GROUP 1: ORNAMENTAL GOLDEN OVAL ARCH & FLEUR-DE-LIS CROWN */}
        {/* ========================================================================= */}
        {variant !== "icon" && (
          <g id="oval-gold-frame">
            <motion.g
              initial={shouldAnimate ? "hidden" : "visible"}
              animate="visible"
              variants={archVariants}
            >
              {/* Outer Golden Oval Arc */}
              <path
                d="M 270 180 C 320 80, 620 70, 720 220 C 760 280, 740 370, 680 430"
                stroke="url(#ovalGold)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              {/* Inner Parallel Delicate Golden Line */}
              <path
                d="M 285 190 C 330 100, 605 90, 705 230 C 740 285, 725 360, 675 415"
                stroke="url(#ovalGoldLight)"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />

              {/* Top Ornate Fleur-de-Lis Crest Motif */}
              <g transform="translate(470, 75)">
                {/* Center spear petal */}
                <path d="M0 -32 C-6 -20 -10 -8 0 0 C10 -8 6 -20 0 -32 Z" fill="url(#ovalGold)" stroke="#875E1E" strokeWidth="0.8" />
                {/* Left curled petal */}
                <path d="M-4 -6 C-18 -18 -26 -2 -14 6 C-6 10 0 2 -4 -6 Z" fill="url(#ovalGold)" stroke="#875E1E" strokeWidth="0.8" />
                {/* Right curled petal */}
                <path d="M4 -6 C18 -18 26 -2 14 6 C6 10 0 2 4 -6 Z" fill="url(#ovalGold)" stroke="#875E1E" strokeWidth="0.8" />
                {/* Base tie band */}
                <rect x="-14" y="2" width="28" height="4" rx="2" fill="url(#ovalGoldLight)" />
                {/* Base lower drops */}
                <circle cx="-16" cy="10" r="2.5" fill="url(#ovalGold)" />
                <circle cx="0" cy="12" r="3" fill="url(#ovalGold)" />
                <circle cx="16" cy="10" r="2.5" fill="url(#ovalGold)" />
              </g>

              {/* Bottom Subtle Golden Flourish */}
              <g transform="translate(500, 465)">
                <path d="M0 -14 C-4 -8 -6 -3 0 0 C6 -3 4 -8 0 -14 Z" fill="url(#ovalGold)" />
                <path d="M-3 -2 C-10 -7 -14 0 -8 4 C-3 6 0 2 -3 -2 Z" fill="url(#ovalGold)" />
                <path d="M3 -2 C10 -7 14 0 8 4 C3 6 0 2 3 -2 Z" fill="url(#ovalGold)" />
                <circle cx="-25" cy="0" r="2" fill="url(#ovalGold)" />
                <path d="M-50 0 L-25 0 M25 0 L50 0" stroke="url(#ovalGold)" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="25" cy="0" r="2" fill="url(#ovalGold)" />
              </g>
            </motion.g>
          </g>
        )}

        {/* ========================================================================= */}
        {/* GROUP 2: PEACOCK ON THE LEFT (BODY, CREST, SCALLOPED WINGS, CASCADING PLUMAGE) */}
        {/* ========================================================================= */}
        <g id="peacock-left">
          <motion.g
            initial={shouldAnimate ? "hidden" : "visible"}
            animate="visible"
            variants={peacockVariants}
          >
            {/* Peacock Head Crest (Kalgi) */}
            <g id="left-peacock-crest">
              <path d="M228 92 L206 65 M231 90 L218 58 M234 89 L232 55 M237 90 L246 58 M239 92 L258 66" stroke="url(#ovalGold)" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="206" cy="63" r="3.8" fill="url(#royalPeacockBlue)" stroke="url(#ovalGold)" strokeWidth="1.2" />
              <circle cx="218" cy="56" r="4.2" fill="url(#royalPeacockBlue)" stroke="url(#ovalGold)" strokeWidth="1.2" />
              <circle cx="232" cy="53" r="4.5" fill="url(#royalPeacockBlue)" stroke="url(#ovalGold)" strokeWidth="1.2" />
              <circle cx="246" cy="56" r="4.2" fill="url(#royalPeacockBlue)" stroke="url(#ovalGold)" strokeWidth="1.2" />
              <circle cx="258" cy="64" r="3.8" fill="url(#royalPeacockBlue)" stroke="url(#ovalGold)" strokeWidth="1.2" />
            </g>

            {/* Graceful Peacock S-Neck & Regal Head */}
            <path
              d="M228 95 
                 C242 95 258 106 258 120 
                 C258 138 238 160 234 185 
                 C230 208 240 226 244 250 
                 C246 265 238 276 224 282 
                 C208 288 190 280 184 266 
                 C178 250 188 230 196 210 
                 C204 186 214 168 214 146 
                 C214 132 208 120 214 108 
                 C218 100 222 95 228 95 Z"
              fill="url(#royalPeacockBlue)"
              stroke="#083654"
              strokeWidth="1.6"
            />

            {/* Golden Beak */}
            <path d="M255 110 L274 116 L255 122 Z" fill="url(#ovalGold)" stroke="#875E1E" strokeWidth="1" />

            {/* White Eye Patch & Eye */}
            <ellipse cx="244" cy="110" rx="6" ry="4.5" fill="#FAF6EE" />
            <circle cx="245" cy="110" r="2.8" fill="#191B1E" />
            <circle cx="246" cy="109" r="0.9" fill="#FFF" />

            {/* Wing / Shoulder Texture with Scalloped Golden Highlights */}
            <path
              d="M184 220 C170 210 145 215 130 230 C115 246 112 268 120 290 C128 310 144 322 162 322 C184 322 196 304 198 282 Z"
              fill="url(#royalPeacockBlue)"
              stroke="url(#ovalGold)"
              strokeWidth="1.2"
            />
            {/* Scallop Golden Edges on Wing */}
            <path d="M140 240 C146 244 154 243 160 238 M132 255 C140 260 152 258 160 252 M126 270 C136 276 150 274 160 267 M128 286 C138 292 152 290 162 284" stroke="url(#ovalGoldLight)" strokeWidth="1.4" strokeLinecap="round" />

            {/* Cascading Emerald & Blue Plumage (S-Curve to Bottom Left) */}
            {/* Plume 1 */}
            <path
              d="M140 280 C115 295 95 328 104 360 C110 382 130 395 150 385 C170 375 172 345 166 315 Z"
              fill="url(#emeraldPlume)"
              stroke="#064233"
              strokeWidth="1.5"
            />
            <ellipse cx="132" cy="345" rx="14" ry="20" fill="url(#eyespotCore)" transform="rotate(-15 132 345)" />
            <ellipse cx="132" cy="345" rx="6" ry="10" fill="url(#royalPeacockBlue)" transform="rotate(-15 132 345)" />
            <circle cx="132" cy="345" r="2.5" fill="#FAF6EE" opacity="0.9" />

            {/* Plume 2 */}
            <path
              d="M100 340 C75 362 55 400 66 435 C74 460 100 472 120 458 C140 444 142 410 132 376 Z"
              fill="url(#emeraldPlume)"
              stroke="#064233"
              strokeWidth="1.5"
            />
            <ellipse cx="94" cy="415" rx="16" ry="22" fill="url(#eyespotCore)" transform="rotate(-20 94 415)" />
            <ellipse cx="94" cy="415" rx="7" ry="11" fill="url(#royalPeacockBlue)" transform="rotate(-20 94 415)" />
            <circle cx="94" cy="415" r="3" fill="#FAF6EE" opacity="0.9" />

            {/* Plume 3 (Bottom Sweep) */}
            <path
              d="M68 420 C42 446 26 488 42 525 C54 550 82 560 106 544 C128 528 126 490 112 455 Z"
              fill="url(#emeraldPlume)"
              stroke="#064233"
              strokeWidth="1.5"
            />
            <ellipse cx="74" cy="495" rx="15" ry="20" fill="url(#eyespotCore)" transform="rotate(-15 74 495)" />
            <ellipse cx="74" cy="495" rx="6" ry="9" fill="url(#royalPeacockBlue)" transform="rotate(-15 74 495)" />
            <circle cx="74" cy="495" r="2.5" fill="#FAF6EE" opacity="0.9" />

            {/* Plume 4 (Bottom Curl Feathers) */}
            <path
              d="M90 490 C80 520 85 550 115 565 C140 575 168 560 180 535 C190 510 175 485 150 475 Z"
              fill="url(#emeraldPlume)"
              stroke="#064233"
              strokeWidth="1.5"
            />
            <ellipse cx="138" cy="530" rx="13" ry="18" fill="url(#eyespotCore)" transform="rotate(20 138 530)" />
            <ellipse cx="138" cy="530" rx="5.5" ry="8" fill="url(#royalPeacockBlue)" transform="rotate(20 138 530)" />

            {/* Plume 5 (Lowest Tail Flare) */}
            <path
              d="M155 515 C160 540 180 560 210 562 C238 562 258 544 260 520 C262 498 240 480 215 480 Z"
              fill="url(#emeraldPlume)"
              stroke="#064233"
              strokeWidth="1.5"
            />
            <ellipse cx="210" cy="530" rx="12" ry="16" fill="url(#eyespotCore)" />
            <ellipse cx="210" cy="530" rx="5" ry="7" fill="url(#royalPeacockBlue)" />
          </motion.g>
        </g>

        {/* ========================================================================= */}
        {/* GROUP 3: RIGHT ACCENT FEATHER & GOLDEN FILIGREE FLOURISHES */}
        {/* ========================================================================= */}
        {variant !== "icon" && (
          <g id="right-feather-and-filigree">
            <motion.g
              initial={shouldAnimate ? "hidden" : "visible"}
              animate="visible"
              variants={rightFeatherVariants}
            >
              {/* Upright Radiant Peacock Feather on the Right */}
              <g transform="translate(790, 290) rotate(15)">
                {/* Emerald Feather Blade */}
                <path
                  d="M0 -90 C-32 -60 -40 -10 -15 35 C-5 52 0 75 0 75 C0 75 5 52 15 35 C40 -10 32 -60 0 -90 Z"
                  fill="url(#emeraldPlume)"
                  stroke="#064233"
                  strokeWidth="1.5"
                />
                {/* Central Shaft */}
                <path d="M0 -95 L0 80" stroke="url(#ovalGold)" strokeWidth="2.5" strokeLinecap="round" />
                
                {/* Large Eyespot */}
                <ellipse cx="0" cy="-20" rx="18" ry="26" fill="url(#eyespotCore)" />
                <ellipse cx="0" cy="-20" rx="8" ry="13" fill="url(#royalPeacockBlue)" />
                <circle cx="0" cy="-20" r="3.5" fill="#FAF6EE" opacity="0.9" />

                {/* Feather Barbs Gold Accents */}
                <path d="M-12 -55 L-24 -68 M12 -55 L24 -68 M-15 -35 L-30 -42 M15 -35 L30 -42 M-12 0 L-26 5 M12 0 L26 5 M-8 25 L-18 35 M8 25 L18 35" stroke="url(#ovalGoldLight)" strokeWidth="1.2" strokeLinecap="round" />
              </g>

              {/* Ornate Gold Filigree & Leaves Embracing Right Side */}
              <g id="right-gold-filigree">
                {/* Upper Leaf & Swirl */}
                <path
                  d="M 680 230 C 720 200, 740 220, 725 245 C 715 260, 695 255, 690 240 C 685 225, 710 215, 725 225"
                  stroke="url(#ovalGold)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Leaf Shapes */}
                <path d="M720 205 C735 190 745 200 735 215 C725 225 715 218 720 205 Z" fill="url(#ovalGold)" />
                <path d="M740 235 C760 230 765 245 750 255 C738 262 732 250 740 235 Z" fill="url(#ovalGold)" />

                {/* Lower Filigree S-Curves */}
                <path
                  d="M 675 415 C 720 440, 760 400, 780 440 C 795 470, 770 510, 730 500 C 695 490, 715 450, 745 460 C 770 470, 755 495, 735 485"
                  stroke="url(#ovalGold)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="780" cy="440" r="3.5" fill="url(#ovalGold)" />
                <circle cx="730" cy="500" r="3" fill="url(#ovalGold)" />
              </g>
            </motion.g>
          </g>
        )}

        {/* ========================================================================= */}
        {/* GROUP 4: BESPOKE TYPOGRAPHY "Sree Shine" & "S T U D I O" */}
        {/* ========================================================================= */}
        {variant !== "icon" && (
          <g id="typography-sree-shine">
            <motion.g
              initial={shouldAnimate ? "hidden" : "visible"}
              animate="visible"
              variants={typographyVariants}
            >
              {/* Main "Sree Shine" Serif Wordmark with Flowing Swash Styling */}
              <text
                x="525"
                y="350"
                textAnchor="middle"
                fontFamily="'Cormorant Garamond', Georgia, serif"
                fontSize="108"
                fontWeight="700"
                fill="#191B1E"
                letterSpacing="-0.02em"
              >
                Sree Shine
              </text>

              {/* Dividing Line & Subtitle "S T U D I O" */}
              {/* Left Accent Rule */}
              <path d="M 330 405 L 410 405" stroke="url(#ovalGold)" strokeWidth="1.8" strokeLinecap="round" />
              {/* Left Gold Diamond Star */}
              <polygon points="420,405 425,400 430,405 425,410" fill="url(#ovalGold)" />

              {/* Subtitle "S T U D I O" */}
              <text
                x="525"
                y="412"
                textAnchor="middle"
                fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
                fontSize="24"
                fontWeight="600"
                fill="#875E1E"
                letterSpacing="0.45em"
              >
                STUDIO
              </text>

              {/* Right Gold Diamond Star */}
              <polygon points="620,405 625,400 630,405 625,410" fill="url(#ovalGold)" />
              {/* Right Accent Rule */}
              <path d="M 640 405 L 720 405" stroke="url(#ovalGold)" strokeWidth="1.8" strokeLinecap="round" />
            </motion.g>
          </g>
        )}

        {/* Soft Golden Shimmer Highlight Sweep */}
        {shouldAnimate && (
          <g clipPath="url(#ovalShimmerClip)">
            <motion.rect
              x="0"
              y="0"
              width="140"
              height="580"
              fill="url(#ovalGoldLight)"
              opacity="0.3"
              transform="skewX(-25)"
              initial="hidden"
              animate="visible"
              variants={shimmerSweep}
            />
          </g>
        )}
      </svg>
    </div>
  );
}
