import { motion } from "framer-motion";

/**
 * PeacockVelLogo - Precise vector SVG recreation of the sacred Peacock & Golden Vel emblem
 * Organized into:
 * 1. Vel Outline and Shaft (#vel-shaft-and-spear)
 * 2. Peacock Body and Neck (#peacock-body-and-neck)
 * 3. Tail Feathers (#tail-feathers)
 * 4. Gold Ornaments & Gemstones (#gold-ornaments)
 * 5. Wordmark (#company-wordmark)
 */

export default function PeacockVelLogo({
  variant = "full", // "full" | "compact" | "icon"
  animated = false,
  className = "",
  width,
  height,
}) {
  const isReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const shouldAnimate = animated && !isReduced;

  // Animation timeline configurations
  const velVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const peacockVariants = {
    hidden: { opacity: 0, scale: 0.94, y: 8 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const featherStagger = {
    hidden: { opacity: 0, scale: 0.85, y: 12 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.55 + i * 0.08, ease: "easeOut" }
    })
  };

  const ornamentVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, delay: 0.8, ease: "easeOut" }
    }
  };

  const wordmarkVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const shimmerSweep = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: "200%",
      opacity: [0, 0.7, 0],
      transition: { duration: 1.2, delay: 1.4, ease: "easeInOut" }
    }
  };

  // SVG dimensions based on variant
  const viewBox = variant === "icon" 
    ? "40 0 160 360" 
    : variant === "compact" 
    ? "0 0 600 220" 
    : "0 0 320 460";

  return (
    <div className={`relative inline-block select-none ${className}`}>
      <svg
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible drop-shadow-sm"
        style={{ width: width || undefined, height: height || undefined }}
        aria-label="Sree Shine Studio - Peacock and Golden Vel Emblem"
        role="img"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9E29D" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#B38738" />
            <stop offset="100%" stopColor="#875E1E" />
          </linearGradient>

          <linearGradient id="goldLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF2C2" />
            <stop offset="100%" stopColor="#D8AE43" />
          </linearGradient>

          <linearGradient id="velFlame" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#C44D12" />
            <stop offset="60%" stopColor="#E58A18" />
            <stop offset="100%" stopColor="#F9DF68" />
          </linearGradient>

          <linearGradient id="peacockBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E7EB3" />
            <stop offset="50%" stopColor="#0F5A88" />
            <stop offset="100%" stopColor="#083654" />
          </linearGradient>

          <linearGradient id="emeraldFeather" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#25A584" />
            <stop offset="50%" stopColor="#0E7057" />
            <stop offset="100%" stopColor="#064233" />
          </linearGradient>

          <linearGradient id="rubyGem" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E63956" />
            <stop offset="50%" stopColor="#A81832" />
            <stop offset="100%" stopColor="#5E0818" />
          </linearGradient>

          <radialGradient id="eyespotGold" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1E7EB3" />
            <stop offset="35%" stopColor="#0D3847" />
            <stop offset="65%" stopColor="#F5B83D" />
            <stop offset="100%" stopColor="#0E7057" />
          </radialGradient>

          {/* Shimmer clip mask */}
          <clipPath id="shimmerClip">
            <rect x="0" y="0" width="320" height="460" />
          </clipPath>
        </defs>

        {/* ========================================================================= */}
        {/* GROUP 1: VEL OUTLINE, SPEARHEAD & ORNAMENTAL SHAFT */}
        {/* ========================================================================= */}
        <g id="vel-shaft-and-spear">
          {/* Main Upright Turned Gold Shaft */}
          <motion.g
            initial={shouldAnimate ? "hidden" : "visible"}
            animate="visible"
            variants={velVariants}
          >
            {/* Shaft Pillar Body */}
            <path
              d="M120 145 L120 280 M124 145 L124 280"
              stroke="url(#goldGradient)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Decorative Shaft Turnings & Rings */}
            <rect x="114" y="148" width="16" height="8" rx="3" fill="url(#goldGradient)" stroke="#875E1E" strokeWidth="0.8" />
            <rect x="116" y="162" width="12" height="6" rx="2" fill="url(#goldLight)" />
            <circle cx="122" cy="188" r="4.5" fill="url(#goldGradient)" stroke="#875E1E" strokeWidth="0.8" />
            <circle cx="122" cy="225" r="4" fill="url(#goldGradient)" />
            <rect x="115" y="274" width="14" height="6" rx="2" fill="url(#goldGradient)" />

            {/* Spearhead Base Capital / Pedestal */}
            <path
              d="M102 142 C106 132 114 128 122 128 C130 128 138 132 142 142 C134 145 110 145 102 142 Z"
              fill="url(#goldGradient)"
              stroke="#875E1E"
              strokeWidth="1"
            />
            {/* Base side scrolls */}
            <path
              d="M98 138 C94 135 94 144 100 144 M146 138 C150 135 150 144 144 144"
              stroke="url(#goldGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            
            {/* The Divine Golden Vel Leaf Spearhead */}
            {/* Outer Leaf Contour */}
            <path
              d="M122 15 C146 52 165 88 156 122 C150 134 135 140 122 140 C109 140 94 134 88 122 C79 88 98 52 122 15 Z"
              fill="#FAF6EE"
              stroke="url(#goldGradient)"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />

            {/* Inner Gold Foil Border */}
            <path
              d="M122 24 C141 56 156 86 148 116 C143 125 132 130 122 130 C112 130 101 125 96 116 C88 86 103 56 122 24 Z"
              fill="none"
              stroke="url(#goldLight)"
              strokeWidth="1.8"
            />

            {/* Triangular Golden Flame Apex Inside Vel */}
            <path
              d="M122 36 L144 95 L100 95 Z"
              fill="url(#velFlame)"
              stroke="url(#goldGradient)"
              strokeWidth="1.5"
            />

            {/* Sacred Tri-line Vibhuti & Ruby Kumkum Dot */}
            <path d="M104 102 L140 102" stroke="#FAF6EE" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M102 107 L142 107" stroke="#FAF6EE" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M104 112 L140 112" stroke="#FAF6EE" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="122" cy="107" r="3.2" fill="url(#rubyGem)" stroke="#FFF" strokeWidth="0.7" />

            {/* Lotus/Jewel ornament at spearhead base */}
            <path
              d="M116 124 C118 118 122 116 122 116 C122 116 126 118 128 124 Z"
              fill="url(#peacockBlue)"
            />
          </motion.g>
        </g>

        {/* ========================================================================= */}
        {/* GROUP 2: PEACOCK BODY, CREST & CURVING NECK */}
        {/* ========================================================================= */}
        <g id="peacock-body-and-neck">
          <motion.g
            initial={shouldAnimate ? "hidden" : "visible"}
            animate="visible"
            variants={peacockVariants}
          >
            {/* Peacock Head Crest (Kalgi plumes) */}
            <g id="crest-feathers">
              <path d="M164 122 L157 106 M166 121 L163 103 M169 121 L171 103 M171 122 L178 106 M173 124 L183 111" stroke="url(#goldGradient)" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="157" cy="105" r="2.2" fill="url(#peacockBlue)" stroke="url(#goldGradient)" strokeWidth="0.8" />
              <circle cx="163" cy="102" r="2.5" fill="url(#peacockBlue)" stroke="url(#goldGradient)" strokeWidth="0.8" />
              <circle cx="171" cy="102" r="2.5" fill="url(#peacockBlue)" stroke="url(#goldGradient)" strokeWidth="0.8" />
              <circle cx="178" cy="105" r="2.2" fill="url(#peacockBlue)" stroke="url(#goldGradient)" strokeWidth="0.8" />
              <circle cx="183" cy="110" r="2" fill="url(#peacockBlue)" stroke="url(#goldGradient)" strokeWidth="0.8" />
            </g>

            {/* Graceful S-Curved Peacock Neck & Body */}
            <path
              d="M165 125 
                 C175 125 186 132 186 142 
                 C186 156 172 172 170 190 
                 C168 206 176 220 178 238 
                 C179 248 174 256 164 260 
                 C152 264 140 258 136 248 
                 C132 236 138 220 144 205 
                 C150 188 156 174 156 158 
                 C156 148 152 140 156 132 
                 C158 127 161 125 165 125 Z"
              fill="url(#peacockBlue)"
              stroke="#083654"
              strokeWidth="1.2"
            />

            {/* Shimmer Highlight on Neck Curve */}
            <path
              d="M167 132 C175 142 174 165 168 185 C164 198 162 210 166 228"
              fill="none"
              stroke="#58B0E0"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.6"
            />

            {/* Golden Beak */}
            <path
              d="M184 135 L196 140 L184 144 Z"
              fill="url(#goldGradient)"
              stroke="#875E1E"
              strokeWidth="0.8"
            />

            {/* Eye Surround & Eye */}
            <ellipse cx="176" cy="135" rx="4.5" ry="3.5" fill="#FAF6EE" />
            <circle cx="177" cy="135" r="2" fill="#121315" />
            <circle cx="178" cy="134" r="0.6" fill="#FFF" />

            {/* Breast Scallop Highlights */}
            <path
              d="M148 224 C153 226 158 225 162 222 M144 235 C150 238 158 237 164 233 M142 246 C148 250 156 248 162 244"
              stroke="url(#goldLight)"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.75"
            />
          </motion.g>
        </g>

        {/* ========================================================================= */}
        {/* GROUP 3: CASCADING EMERALD & PEACOCK BLUE TAIL FEATHERS */}
        {/* ========================================================================= */}
        <g id="tail-feathers">
          {/* Layer 1: Upper Golden Plumage Mantle */}
          <motion.g
            custom={0}
            initial={shouldAnimate ? "hidden" : "visible"}
            animate="visible"
            variants={featherStagger}
          >
            <path
              d="M136 215 C124 205 106 208 94 220 C82 232 80 248 85 264 C90 278 102 288 116 288 C132 288 142 274 144 258 Z"
              fill="url(#goldGradient)"
              stroke="#875E1E"
              strokeWidth="1"
            />
            {/* Jewel inserts on mantle */}
            <circle cx="112" cy="235" r="6" fill="url(#rubyGem)" stroke="url(#goldLight)" strokeWidth="1.2" />
            <circle cx="130" cy="242" r="5" fill="url(#rubyGem)" stroke="url(#goldLight)" strokeWidth="1.2" />
            <circle cx="98" cy="254" r="4.5" fill="url(#emeraldFeather)" stroke="url(#goldLight)" strokeWidth="1" />
          </motion.g>

          {/* Layer 2: Middle Cascading Eyespot Feathers */}
          <motion.g
            custom={1}
            initial={shouldAnimate ? "hidden" : "visible"}
            animate="visible"
            variants={featherStagger}
          >
            {/* Feather A (Left-Mid) */}
            <path
              d="M102 265 C82 278 68 305 74 330 C78 348 94 358 108 350 C122 342 124 318 120 295 Z"
              fill="url(#emeraldFeather)"
              stroke="#064233"
              strokeWidth="1.2"
            />
            <ellipse cx="94" cy="318" rx="10" ry="14" fill="url(#eyespotGold)" transform="rotate(-15 94 318)" />
            <ellipse cx="94" cy="318" rx="4.5" ry="7" fill="url(#peacockBlue)" transform="rotate(-15 94 318)" />
            <circle cx="94" cy="318" r="2" fill="#FAF6EE" opacity="0.8" />
          </motion.g>

          <motion.g
            custom={2}
            initial={shouldAnimate ? "hidden" : "visible"}
            animate="visible"
            variants={featherStagger}
          >
            {/* Feather B (Center-Mid) */}
            <path
              d="M125 285 C118 310 115 340 128 365 C136 380 152 384 162 372 C172 360 168 335 158 310 Z"
              fill="url(#emeraldFeather)"
              stroke="#064233"
              strokeWidth="1.2"
            />
            <ellipse cx="142" cy="342" rx="11" ry="15" fill="url(#eyespotGold)" transform="rotate(10 142 342)" />
            <ellipse cx="142" cy="342" rx="5" ry="7.5" fill="url(#peacockBlue)" transform="rotate(10 142 342)" />
            <circle cx="142" cy="342" r="2" fill="#FAF6EE" opacity="0.8" />
          </motion.g>

          {/* Layer 3: Lower Cascading Train Plumes */}
          <motion.g
            custom={3}
            initial={shouldAnimate ? "hidden" : "visible"}
            animate="visible"
            variants={featherStagger}
          >
            {/* Feather C (Right Lower) */}
            <path
              d="M148 335 C152 360 162 390 180 410 C192 422 208 418 212 402 C216 384 200 365 186 348 Z"
              fill="url(#emeraldFeather)"
              stroke="#064233"
              strokeWidth="1.2"
            />
            <ellipse cx="188" cy="386" rx="9" ry="13" fill="url(#eyespotGold)" transform="rotate(25 188 386)" />
            <ellipse cx="188" cy="386" rx="4" ry="6" fill="url(#peacockBlue)" transform="rotate(25 188 386)" />
          </motion.g>

          <motion.g
            custom={4}
            initial={shouldAnimate ? "hidden" : "visible"}
            animate="visible"
            variants={featherStagger}
          >
            {/* Feather D (Bottom Tip S-curve) */}
            <path
              d="M130 375 C124 398 120 422 134 442 C142 454 156 452 162 438 C168 424 162 405 154 390 Z"
              fill="url(#emeraldFeather)"
              stroke="#064233"
              strokeWidth="1.2"
            />
            <ellipse cx="144" cy="422" rx="8" ry="11" fill="url(#eyespotGold)" />
            <ellipse cx="144" cy="422" rx="3.5" ry="5.5" fill="url(#peacockBlue)" />
          </motion.g>
        </g>

        {/* ========================================================================= */}
        {/* GROUP 4: TRADITIONAL GOLD ORNAMENTAL SCROLLS & FILIGREE */}
        {/* ========================================================================= */}
        <g id="gold-ornaments">
          <motion.g
            initial={shouldAnimate ? "hidden" : "visible"}
            animate="visible"
            variants={ornamentVariants}
          >
            {/* Upper Right Back Filigree Scroll */}
            <path
              d="M172 175 C186 170 196 178 194 192 C192 204 180 208 174 202 C168 196 172 186 182 186"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />

            {/* Mid Right Ornamental Tendril */}
            <path
              d="M178 220 C202 215 220 230 216 250 C212 268 194 274 182 265 C172 256 176 242 190 240 C200 238 206 248 200 256"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2.8"
              strokeLinecap="round"
            />

            {/* Lower Right Graceful Flourish */}
            <path
              d="M188 285 C218 280 236 308 224 335 C214 355 192 355 186 338 C182 324 194 315 204 322"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* Left Mantle Golden Feather Frills */}
            <path
              d="M82 230 C64 245 62 270 72 292 C65 285 64 265 74 250"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M74 290 C56 312 60 340 78 360 C68 348 68 328 82 312"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Gemstone Embellishment Beads */}
            <circle cx="194" cy="192" r="3.5" fill="url(#rubyGem)" stroke="url(#goldLight)" strokeWidth="0.8" />
            <circle cx="216" cy="250" r="4.5" fill="url(#rubyGem)" stroke="url(#goldLight)" strokeWidth="0.8" />
            <circle cx="224" cy="335" r="3.8" fill="url(#rubyGem)" stroke="url(#goldLight)" strokeWidth="0.8" />
            <circle cx="72" cy="292" r="3" fill="url(#goldLight)" />
          </motion.g>
        </g>

        {/* ========================================================================= */}
        {/* GROUP 5: COMPANY WORDMARK (WHEN FULL OR COMPACT VARIANT) */}
        {/* ========================================================================= */}
        {variant === "compact" && (
          <g id="company-wordmark-compact">
            <motion.g
              initial={shouldAnimate ? "hidden" : "visible"}
              animate="visible"
              variants={wordmarkVariants}
            >
              <text
                x="250"
                y="110"
                fontFamily="'Cormorant Garamond', Georgia, serif"
                fontSize="52"
                fontWeight="600"
                fill="#191B1E"
                letterSpacing="-0.02em"
              >
                Sree Shine Studio
              </text>
              <text
                x="254"
                y="145"
                fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
                fontSize="16"
                fontWeight="500"
                fill="#C8A25D"
                letterSpacing="0.32em"
              >
                CREATIVE STUDIO
              </text>
            </motion.g>
          </g>
        )}

        {/* Soft Golden Shimmer Highlight Sweep Across Emblem */}
        {shouldAnimate && (
          <g clipPath="url(#shimmerClip)">
            <motion.rect
              x="0"
              y="0"
              width="90"
              height="460"
              fill="url(#goldLight)"
              opacity="0.35"
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
