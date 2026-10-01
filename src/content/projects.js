/**
 * Sree Shine Studio - Portfolio Projects Data
 * Clearly labeled sample projects demonstrating studio capabilities
 */

export const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "photography", label: "Photography" },
  { id: "branding", label: "Branding & Identity" },
  { id: "fashion", label: "Fashion & Textile" },
  { id: "digital", label: "Digital & Web" },
  { id: "exhibition", label: "Exhibition & Space" },
  { id: "events", label: "Events & Production" }
];

export const PROJECTS = [
  {
    id: "aura-botanicals",
    slug: "aura-botanicals-visual-identity",
    title: "Aura Botanicals",
    category: "Branding & Photography",
    categorySlug: "branding",
    featured: true,
    year: "2024",
    client: "Sample Concept Project · Organic Skincare",
    tagline: "Minimalist skincare identity and tactile product photography capturing raw organic serenity.",
    shortDescription: "End-to-end brand identity and serene product tabletop photography for a conscious skincare line.",
    heroImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop",
    brief: "Create an understated yet distinct brand presence for a clean botanical formulation line, accompanied by precision macro photography showcasing earthy glass textures and organic ingredients.",
    approach: "We drew inspiration from warm limestone, sun-dappled clay, and botanical stems. The typography features a refined editorial serif with ample tracking, paired with soft ivory and warm terracotta tones.",
    deliverables: [
      "Custom Wordmark & Monogram System",
      "Sustainable Glass Bottle & Box Packaging",
      "Studio Tabletop & Water-Macro Photography",
      "E-Commerce Visual Asset Kit"
    ],
    outcome: "A timeless brand language that highlights the purity of natural formulations through soft lighting and tactile packaging.",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1400&auto=format&fit=crop",
        alt: "Aura Botanicals glass dropper bottle bathed in morning sunlight",
        caption: "Natural sunlight highlighting the amber glass texture and warm ivory label."
      },
      {
        url: "https://images.unsplash.com/photo-1608248597359-2e061803cb2a?q=80&w=1400&auto=format&fit=crop",
        alt: "Aura Botanicals ceramic dishes and botanical cream textures",
        caption: "Tactile ingredient story with raw ceramic textures and natural cream emulsions."
      },
      {
        url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1400&auto=format&fit=crop",
        alt: "Editorial model holding Aura Botanicals serum",
        caption: "Soft lifestyle editorial capture emphasizing skin radiance and organic calm."
      },
      {
        url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1400&auto=format&fit=crop",
        alt: "Aura Botanicals minimal packaging box mockup",
        caption: "Debossed uncoated cotton paper packaging with gold foil micro-accents."
      }
    ]
  },
  {
    id: "lumina-atelier",
    slug: "lumina-textile-capsule",
    title: "Lumina Atelier",
    category: "Fashion & Textile",
    categorySlug: "fashion",
    featured: true,
    year: "2024",
    client: "Sample Concept Project · Luxury Apparel",
    tagline: "Hand-rendered botanical pattern repeats and editorial lookbook for an artisanal silk collection.",
    shortDescription: "Bespoke surface pattern designs and campaign lookbook direction for an autumn silk capsule.",
    heroImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop",
    brief: "Develop seamless textile patterns inspired by heritage Indian flora with a modern European silhouette, culminating in an editorial lookbook shot in natural architectural light.",
    approach: "We hand-painted botanical motifs with gouache and ink, digitizing them into multi-directional pattern repeats for Jacquard and digital silk printing. The lookbook art direction prioritized architectural shadows and effortless drape.",
    deliverables: [
      "3 Seamless Silk Surface Print Collections",
      "Pantone TCX Swatch Library & Print Repeats",
      "Lookbook Art Direction & On-Location Shoot",
      "Digital Campaign Asset Suite"
    ],
    outcome: "An evocative visual narrative celebrating fluid movement, rich natural fibers, and contemporary elegance.",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1400&auto=format&fit=crop",
        alt: "Model wearing Lumina draped silk dress in architectural sunlight",
        caption: "Dramatic chiaroscuro lighting capturing the drape and subtle sheen of raw silk."
      },
      {
        url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1400&auto=format&fit=crop",
        alt: "Editorial fashion portrait showcasing garment neckline and jewelry",
        caption: "Close-up portrait emphasizing seam precision and delicate neckline details."
      },
      {
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop",
        alt: "Color palette swatches and textured fabrics",
        caption: "Textile curation pairing warm champagne silks with deep charcoal structured wool."
      }
    ]
  },
  {
    id: "zenith-horology",
    slug: "zenith-timepieces-commercial-photography",
    title: "Zenith Horology",
    category: "Product Photography",
    categorySlug: "photography",
    featured: true,
    year: "2024",
    client: "Sample Concept Project · Luxury Timepieces",
    tagline: "High-precision macro photography capturing the micro-engineering and sapphire clarity of luxury watches.",
    shortDescription: "Controlled studio light painting and macro optics highlighting brushed titanium and bezel craftsmanship.",
    heroImage: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop",
    brief: "Capture the meticulous chamfering, sapphire crystal reflections, and automatic movements of high-end mechanical timepieces for print ads and flagship web banners.",
    approach: "Utilizing focus-stacking techniques across 35 individual exposures and multi-source polarized lighting grids to reveal brushed metal finishes without unwanted glares.",
    deliverables: [
      "12 Ultra-High Resolution Macro Composites",
      "Lifestyle Wrist Editorial Shots in Executive Settings",
      "360-Degree Rotation Web Sprites",
      "Print Billboard Master Files"
    ],
    outcome: "Crisp, luminous commercial images that communicate the weight, precision, and heritage of fine watchmaking.",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1400&auto=format&fit=crop",
        alt: "Close-up of luxury watch face with leather strap on dark background",
        caption: "Precision rim lighting highlighting the knurled bezel and sapphire face."
      },
      {
        url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop",
        alt: "Watch mechanism and lifestyle composition",
        caption: "Executive lifestyle pairing with fountain pen and fine stationery."
      },
      {
        url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop",
        alt: "Minimalist timepiece on warm textured surface",
        caption: "Editorial studio shoot featuring warm sandstone textures."
      }
    ]
  },
  {
    id: "strata-pavilion",
    slug: "strata-expo-pavilion-design",
    title: "Strata Pavilion",
    category: "Trade Fair & Exhibition",
    categorySlug: "exhibition",
    featured: true,
    year: "2024",
    client: "Sample Concept Project · Sustainable Architecture Expo",
    tagline: "An immersive 120m² modular exhibition booth built from rammed earth panels and warm ambient light.",
    shortDescription: "Architectural exhibition booth design and visitor journey for an international design summit.",
    heroImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop",
    brief: "Design a trade fair pavilion that breaks away from generic plastic partitions, providing an oasis of tactile calm, private consultation lounges, and interactive material demo stations.",
    approach: "We structured the floorplan around a central acoustic courtyard with fluted timber baffles, integrated warm LED coves, and floating stone plinths for physical sample displays.",
    deliverables: [
      "Complete 3D Spatial Renders & Virtual Walkthrough",
      "Structural Fabrication Blueprints & Electrical Plans",
      "Modular Dismantling & Reusability Manual",
      "Large-Format Directional Graphics & Interactive Kiosks"
    ],
    outcome: "An acclaimed booth experience that achieved 3x average visitor dwell time and was praised for sustainable acoustic innovation.",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1400&auto=format&fit=crop",
        alt: "Exhibition hall with contemporary lighting and architectural booths",
        caption: "Central acoustic pavilion view under architectural warm pendant lighting."
      },
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop",
        alt: "Private lounge meeting area inside exhibition pavilion",
        caption: "Intimate consultation nook with bespoke curved seating and acoustical felt."
      },
      {
        url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1400&auto=format&fit=crop",
        alt: "Material sample display station",
        caption: "Interactive touch display showcasing sustainable material finishes."
      }
    ]
  },
  {
    id: "verve-digital",
    slug: "verve-digital-commerce-platform",
    title: "Verve Modern Living",
    category: "Website & Digital Design",
    categorySlug: "digital",
    featured: false,
    year: "2024",
    client: "Sample Concept Project · Designer Furniture",
    tagline: "A serene, high-performance digital flagship store with interactive room configurators and fluid motion.",
    shortDescription: "Custom responsive web design, headless e-commerce architecture, and interactive product staging.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    brief: "Create an e-commerce platform that mirrors the quiet luxury of bespoke handcrafted furniture while maintaining under 1-second page loads.",
    approach: "Designed a clean typographic grid with custom micro-animations built using React and Framer Motion, integrated with high-resolution 3D object viewers.",
    deliverables: [
      "Figma UI/UX Design System (70+ Components)",
      "High-Performance React & Tailwind Web Application",
      "Interactive 3D Furniture Customizer",
      "Technical SEO & Core Web Vitals Optimization"
    ],
    outcome: "A digital flagship that provides a seamless shopping journey with lightning-fast navigation across desktop and mobile devices.",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop",
        alt: "Digital interface layout on screen",
        caption: "Clean responsive grid highlighting product dimensions and material choices."
      },
      {
        url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1400&auto=format&fit=crop",
        alt: "Mobile responsive view of digital storefront",
        caption: "Mobile-first navigation with buttery-smooth drawer transitions."
      }
    ]
  },
  {
    id: "solstice-gala",
    slug: "solstice-brand-gala-production",
    title: "The Solstice Gala",
    category: "Event Creative & Production",
    categorySlug: "events",
    featured: false,
    year: "2024",
    client: "Sample Concept Project · Luxury Gala Event",
    tagline: "Atmospheric scenography, custom light sculptures, and full event creative direction for 300 guests.",
    shortDescription: "Holistic event spatial design, physical invitation suites, and on-site media production.",
    heroImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop",
    brief: "Curate a multisensory evening celebrating a major milestone with amber lighting, custom stage backdrops, and memorable guest touchpoints.",
    approach: "Conceived a visual motif centered on celestial gradients and candlelight reflections. Produced tactile foil-stamped invitations and dynamic ambient lighting cues.",
    deliverables: [
      "Event Brand Identity & Foil Invitation Suite",
      "Stage Scenography & Light Sculpture Installations",
      "Interactive Photo Wall & Guest Journey Direction",
      "Real-Time Live Event Photography & Highlight Reel"
    ],
    outcome: "An enchanting evening that left guests captivated and generated substantial social media buzz.",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1400&auto=format&fit=crop",
        alt: "Gala dinner table setting with warm candlelight and champagne glasses",
        caption: "Bespoke tablescapes with custom linen, handmade ceramics, and amber candles."
      },
      {
        url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1400&auto=format&fit=crop",
        alt: "Stage lighting and ambient chandeliers",
        caption: "Warm golden glow illuminating the central ballroom stage."
      }
    ]
  }
];
