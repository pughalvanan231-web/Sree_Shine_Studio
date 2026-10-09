/**
 * Sree Shine Studio - Work Categories Data
 * Structured content for all 6 editorial category routes:
 * 1. social-media
 * 2. digital-marketing
 * 3. web-design
 * 4. branding
 * 5. photography
 * 6. content-production
 */
import BridalScentImg from "../assets/images/Bridal Scent.jpg";
import PremiumCreativeAgencyImg from "../assets/images/Premium Creative Agency Website Mockup _ Modern UI Presentation by Omnix Studio.jpg";

export const WORK_CATEGORIES = {
  "social-media": {
    slug: "social-media",
    title: "SOCIAL MEDIA",
    shortTitle: "Social Media",
    tagline: "High-impact visual narratives engineered for cultural resonance and active brand engagement.",
    heroImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=85&w=1800&auto=format&fit=crop",
    scrollLabel: "SCROLL TO EXPLORE",
    sectionTitle: "WHY CHOOSE US?",
    sectionSubtitle: "Crafting digital presence with intentional visual architecture and cohesive aesthetic rhythm.",
    points: [
      {
        number: "01",
        title: "AESTHETIC COHESION",
        description: "We sculpt feed architectures that reflect high editorial standards, ensuring every post, reel, and story aligns with your core brand identity."
      },
      {
        number: "02",
        title: "ORIGINAL VISUAL ASSETS",
        description: "Zero generic stock. We produce bespoke photography, cinematic motion snippets, and typography treatments bespoke to your seasonal campaigns."
      },
      {
        number: "03",
        title: "CULTURAL RELEVANCE",
        description: "We understand contemporary digital culture and craft content that sparks organic conversation, save-worthy curiosity, and brand loyalty."
      },
      {
        number: "04",
        title: "STRATEGIC ENGAGEMENT",
        description: "Every asset is engineered with clear narrative cadence, driving qualified audience attention directly into your sales and consultation funnels."
      }
    ],
    statement: "WE TRANSFORM PASSIVE BROWSERS INTO COMMITTED BRAND ADVOCATES THROUGH CINEMATIC VISUAL STORYTELLING.",
    gallery: [
      {
        url: BridalScentImg,
        title: "Editorial Campaign Feed",
        category: "Social Production",
        aspect: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=85&w=1200&auto=format&fit=crop",
        title: "Fashion Motion Snippet",
        category: "Reels & Shorts",
        aspect: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=85&w=1200&auto=format&fit=crop",
        title: "Lifestyle Grid Narrative",
        category: "Brand Curation",
        aspect: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=85&w=1200&auto=format&fit=crop",
        title: "Textile & Product Series",
        category: "Visual Architecture",
        aspect: "square"
      }
    ],
    ctaHeadline: "READY TO ELEVATE YOUR SOCIAL PRESENCE?",
    nextProject: {
      slug: "digital-marketing",
      title: "DIGITAL MARKETING",
      category: "Performance & Strategy"
    }
  },

  "digital-marketing": {
    slug: "digital-marketing",
    title: "DIGITAL MARKETING",
    shortTitle: "Digital Marketing",
    tagline: "Strategic data-informed campaign orchestration merging refined creative assets with measurable conversion funnels.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=85&w=1800&auto=format&fit=crop",
    scrollLabel: "SCROLL TO EXPLORE",
    sectionTitle: "OUR STRATEGIC APPROACH",
    sectionSubtitle: "Blending analytical precision with creative direction to scale premium brands.",
    points: [
      {
        number: "01",
        title: "AUDIENCE ARCHITECTURE",
        description: "Deep segmentation identifying high-intent demographic clusters and tailored psychographic messaging vectors."
      },
      {
        number: "02",
        title: "CREATIVE TESTING MATRIX",
        description: "Multi-variant creative deployment testing hooks, color palettes, and editorial copy variations for peak ROAS."
      },
      {
        number: "03",
        title: "OMNICHANNEL ACQUISITION",
        description: "Harmonized deployment across Meta, Google Search, programmatic displays, and curated partner networks."
      },
      {
        number: "04",
        title: "LIFETIME VALUE ACCELERATION",
        description: "Post-click funnel optimization and retargeting workflows that transform initial interest into enduring customer retention."
      }
    ],
    statement: "CREATIVITY BACKED BY DATA. SCALING REACH WITHOUT DILUTING BRAND PRESTIGE.",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=85&w=1200&auto=format&fit=crop",
        title: "Omnichannel Growth Strategy",
        category: "Digital Architecture",
        aspect: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=85&w=1200&auto=format&fit=crop",
        title: "Campaign Creative Assets",
        category: "Conversion Funnel",
        aspect: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=85&w=1200&auto=format&fit=crop",
        title: "Analytics & Performance",
        category: "Growth Scaling",
        aspect: "portrait"
      }
    ],
    ctaHeadline: "LET'S SCALE YOUR REVENUE AND VISIBILITY.",
    nextProject: {
      slug: "web-design",
      title: "WEB DESIGN",
      category: "Digital Experiences"
    }
  },

  "web-design": {
    slug: "web-design",
    title: "WEB DESIGN",
    shortTitle: "Web Design",
    tagline: "Bespoke digital flagships combining editorial typography, tactile interactions, and uncompromising web performance.",
    heroImage: PremiumCreativeAgencyImg,
    scrollLabel: "SCROLL TO EXPLORE",
    sectionTitle: "DIGITAL CRAFT & ART DIRECTION",
    sectionSubtitle: "Websites that feel like curated galleries rather than standard template software.",
    points: [
      {
        number: "01",
        title: "EDITORIAL TYPOGRAPHY",
        description: "Carefully calibrated type scales and bespoke font pairings that command attention and define your brand tone."
      },
      {
        number: "02",
        title: "TACTILE MICRO-INTERACTIONS",
        description: "Fluid page transitions, physics-inspired reveals, and subtle hover cues that make digital spaces feel alive."
      },
      {
        number: "03",
        title: "LIGHTNING PERFORMANCE",
        description: "Engineered with clean modern frameworks ensuring instantaneous load times, responsive fluid scaling, and high SEO scores."
      },
      {
        number: "04",
        title: "CONVERSION ARCHITECTURE",
        description: "Seamless navigation journeys guiding visitors effortlessly from initial discovery to inquiry and transaction."
      }
    ],
    statement: "A WEBSITE SHOULD BE AN IMMERSIVE MANIFESTO OF YOUR BRAND’S HIGHEST ASPIRATIONS.",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=85&w=1200&auto=format&fit=crop",
        title: "Minimalist E-Commerce Platform",
        category: "Web Flagship",
        aspect: "landscape"
      },
      {
        url: PremiumCreativeAgencyImg,
        title: "Editorial Portfolio Experience",
        category: "Interactive Design",
        aspect: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=85&w=1200&auto=format&fit=crop",
        title: "Design System Architecture",
        category: "Component Library",
        aspect: "portrait"
      }
    ],
    ctaHeadline: "BUILD YOUR BESPOKE DIGITAL FLAGSHIP.",
    nextProject: {
      slug: "branding",
      title: "BRANDING",
      category: "Visual Identity"
    }
  },

  "branding": {
    slug: "branding",
    title: "BRANDING",
    shortTitle: "Branding",
    tagline: "Enduring identity systems that convey distinction, purpose, and unmistakable presence.",
    heroImage: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=85&w=1800&auto=format&fit=crop",
    scrollLabel: "SCROLL TO EXPLORE",
    sectionTitle: "IDENTITY & DESIGN PHILOSOPHY",
    sectionSubtitle: "Formulating indelible marks, tactile packaging, and cohesive brand worlds.",
    points: [
      {
        number: "01",
        title: "TYPOGRAPHIC WORDMARKS",
        description: "Custom letterforms and timeless monograms designed with mathematical harmony and unforgettable character."
      },
      {
        number: "02",
        title: "HOLISTIC COLOR SYSTEMS",
        description: "Curated palettes built for emotional resonance across luxury print stocks, packaging finishes, and digital screens."
      },
      {
        number: "03",
        title: "TACTILE PACKAGING",
        description: "Bespoke structural packaging specs, debossing details, foil stamps, and sustainable material curation."
      },
      {
        number: "04",
        title: "BRAND GUIDELINE BIBLE",
        description: "Exhaustive documentation defining typographic hierarchy, spatial rules, and photography standards for infinite scale."
      }
    ],
    statement: "WE CRAFT VISUAL IDENTITIES THAT WITHSTAND TRENDS AND COMMAND UNQUESTIONED PRESTIGE.",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=85&w=1200&auto=format&fit=crop",
        title: "Debossed Stationery Suite",
        category: "Identity System",
        aspect: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=85&w=1200&auto=format&fit=crop",
        title: "Luxury Cosmetic Packaging",
        category: "Packaging Design",
        aspect: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=85&w=1200&auto=format&fit=crop",
        title: "Botanical Brand Identity",
        category: "Visual Identity",
        aspect: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1608248597359-2e061803cb2a?q=85&w=1200&auto=format&fit=crop",
        title: "Tactile Paper & Foil System",
        category: "Print Collateral",
        aspect: "square"
      }
    ],
    ctaHeadline: "CREATE AN ENDURING BRAND IDENTITY.",
    nextProject: {
      slug: "photography",
      title: "PHOTOGRAPHY",
      category: "Editorial & Commercial"
    }
  },

  "photography": {
    slug: "photography",
    title: "PHOTOGRAPHY",
    shortTitle: "Photography",
    tagline: "Luminous, high-fidelity visual storytelling where every frame is an intentional study in light, shadow, and texture.",
    heroImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=85&w=1800&auto=format&fit=crop",
    scrollLabel: "SCROLL TO EXPLORE",
    sectionTitle: "WHERE EVERY IMAGE TELLS A STORY",
    sectionSubtitle: "Precision studio lighting and evocative on-location captures crafted with editorial nuance.",
    points: [
      {
        number: "01",
        title: "STUDIO COMMERCIAL MACRO",
        description: "Sculpted lighting setups designed to capture micro-textures, liquid viscosities, jewelry reflections, and fine finishes."
      },
      {
        number: "02",
        title: "FASHION & EDITORIAL",
        description: "On-model high-fashion storytelling celebrating garment drape, raw organic silhouettes, and emotive portraits."
      },
      {
        number: "03",
        title: "ARCHITECTURAL & INTERIOR",
        description: "Balanced natural-light captures honoring spatial proportions, material craftsmanship, and structural depth."
      },
      {
        number: "04",
        title: "MASTER RETOUCHING & COLOR",
        description: "Non-destructive color grading preserving skin fidelity and authentic product color accuracy for global print & digital use."
      }
    ],
    statement: "LIGHT IS OUR MEDIUM. DETAIL IS OUR OBSESSION. EVERY FRAME IS PURPOSEFULLY COMPOSED.",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=85&w=1200&auto=format&fit=crop",
        title: "Silk Silhouette Editorial",
        category: "Fashion & Textile",
        aspect: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=85&w=1200&auto=format&fit=crop",
        title: "Sunlit Tabletop Bottles",
        category: "Commercial Studio",
        aspect: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=85&w=1200&auto=format&fit=crop",
        title: "Haute Couture Portrait",
        category: "Editorial Portrait",
        aspect: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1608248597359-2e061803cb2a?q=85&w=1200&auto=format&fit=crop",
        title: "Emulsion & Clay Macro",
        category: "Texture Study",
        aspect: "square"
      },
      {
        url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=85&w=1200&auto=format&fit=crop",
        title: "Radiant Skin & Lighting",
        category: "Beauty Story",
        aspect: "landscape"
      }
    ],
    ctaHeadline: "COMMISSION YOUR NEXT EDITORIAL CAMPAIGN.",
    nextProject: {
      slug: "content-production",
      title: "CONTENT PRODUCTION",
      category: "Cinematic Storytelling"
    }
  },

  "content-production": {
    slug: "content-production",
    title: "CONTENT PRODUCTION",
    shortTitle: "Content Production",
    tagline: "End-to-end creative direction, set design, film capture, and post-production for boundary-pushing campaigns.",
    heroImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=85&w=1800&auto=format&fit=crop",
    scrollLabel: "SCROLL TO EXPLORE",
    sectionTitle: "LET'S CREATE TOGETHER",
    sectionSubtitle: "Seamless multi-disciplinary production taking concepts from moodboard to final master delivery.",
    points: [
      {
        number: "01",
        title: "CONCEPT & SCRIPTING",
        description: "Treatment drafting, storyboarding, and emotional narrative arcs aligned with overarching brand positioning."
      },
      {
        number: "02",
        title: "SET DESIGN & LOCATION SCOUTING",
        description: "Curating architectural spaces, sourcing custom backdrops, and building bespoke physical studio sets."
      },
      {
        number: "03",
        title: "CINEMATOGRAPHY & LIGHTING",
        description: "Cinema-grade camera rigs, calibrated optical packages, and lighting crews delivering rich filmic textures."
      },
      {
        number: "04",
        title: "SOUND DESIGN & COLOR FINISHING",
        description: "Atmospheric sonic scoring, dialogue mastering, and bespoke film emulation LUT color grading."
      }
    ],
    statement: "WE BRING COMPLEX CREATIVE VISIONS TO LIFE WITH UNCOMPROMISING PRODUCTION STANDARDS.",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?q=85&w=1200&auto=format&fit=crop",
        title: "Campaign Film Direction",
        category: "Set Production",
        aspect: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=85&w=1200&auto=format&fit=crop",
        title: "Location Storytelling",
        category: "Cinematography",
        aspect: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=85&w=1200&auto=format&fit=crop",
        title: "Textile Movement Reel",
        category: "Motion Asset",
        aspect: "portrait"
      }
    ],
    ctaHeadline: "READY TO PRODUCE YOUR NEXT CAMPAIGN?",
    nextProject: {
      slug: "social-media",
      title: "SOCIAL MEDIA",
      category: "Social Engagement"
    }
  }
};
