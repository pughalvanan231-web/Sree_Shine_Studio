import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SeoMeta from "../components/SeoMeta";

export default function WelcomePage() {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const isNavigatingRef = useRef(false);

  const handleEnterWebsite = useCallback(
    (e) => {
      e?.preventDefault();
      if (isNavigatingRef.current) return;
      isNavigatingRef.current = true;
      setIsNavigating(true);
      navigate("/home");
    },
    [navigate]
  );

  return (
    <>
      <SeoMeta
        title="Welcome"
        description="Sree Shine Studio — Photography. Branding. Design. Digital experiences. Where creativity comes to life."
      />

      <div className="relative w-screen h-[100dvh] bg-black overflow-hidden flex items-center justify-center">
        <video
          src="/assets/final%20logo.mp4"
          autoPlay
          muted
          playsInline
          onEnded={handleEnterWebsite}
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
}
