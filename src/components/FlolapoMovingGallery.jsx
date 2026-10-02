const CLIENTS = [
  "AURA LUXE",
  "KAVERI BOTANICALS",
  "VANYA SILKS",
  "ZENITH EXPO",
  "ELEGANTE",
  "SOMA STUDIO",
  "LUMINA CO.",
  "PRAVAAS TEXTILES",
  "NOVA FORM",
  "ATELIER 26",
  "VEDA LIVING",
  "MAISON SHINE",
];

export default function FlolapoMovingGallery() {
  const displayClients = [...CLIENTS, ...CLIENTS];

  return (
    <section className="py-16 sm:py-20 bg-[#0d0d0d] text-[#ECE5D8] border-t border-white/10 overflow-hidden">
      <div className="site-container mb-8 text-center">
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block">
          Trusted Collaborations
        </span>
      </div>

      {/* Single Calm Scrolling Row */}
      <div className="w-full overflow-hidden flex">
        <div className="flex shrink-0 items-center gap-8 sm:gap-12 animate-[marquee_35s_linear_infinite]">
          {displayClients.map((client, idx) => (
            <div key={idx} className="flex items-center gap-8 sm:gap-12 shrink-0">
              <span className="font-heading text-sm sm:text-base md:text-lg font-medium tracking-wider text-[#9CA3AF] hover:text-[#ECE5D8] transition-colors whitespace-nowrap">
                {client}
              </span>
              <span className="text-[#C8A25D] text-xs opacity-40">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

