import SeoMeta from "../components/SeoMeta";
import FlolapoHero from "../components/FlolapoHero";
import FlolapoShowcaseGallery from "../components/FlolapoShowcaseGallery";
import FlolapoManifesto from "../components/FlolapoManifesto";
import FlolapoSkillsRotator from "../components/FlolapoSkillsRotator";
import FlolapoMovingGallery from "../components/FlolapoMovingGallery";
import FlolapoContactBoxes from "../components/FlolapoContactBoxes";

export default function HomePage() {
  return (
    <>
      <SeoMeta
        title="Sree Shine Studio | Creative Studio & Agency"
        description="We are a creative agency specialized in strategy, branding design, commercial photography, and development. Where creativity comes to life."
      />

      {/* 1. Cinematic Giant Typography Hero */}
      <FlolapoHero />

      {/* 2. Overlapping Staggered Showcase Gallery */}
      <FlolapoShowcaseGallery />

      {/* 3. Agency Manifesto & Reach Out CTA */}
      <FlolapoManifesto />

      {/* 4. "OUR SKILLS COVER" Animated List Rotator */}
      <FlolapoSkillsRotator />

      {/* 5. 4-Row Infinite Moving Gallery Marquee Wall */}
      <FlolapoMovingGallery />

      {/* 6. 3-Column Minimalist Studio Contact Bar */}
      <FlolapoContactBoxes />
    </>
  );
}
