import { STUDIO_INFO } from "../content/studio";
import { Search, Compass, Palette, CheckCircle2 } from "lucide-react";

const STEP_ICONS = [Search, Compass, Palette, CheckCircle2];

export default function ProcessSection() {
  const steps = STUDIO_INFO.processSteps;

  return (
    <section className="py-16 sm:py-24 bg-[#0d0d0d] border-y border-white/10">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block">
            Our Method
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-[#ECE5D8]">
            How We Bring Ideas to Life
          </h2>
          <p className="text-[#9CA3AF] text-xs sm:text-sm md:text-base leading-relaxed">
            A disciplined four-step creative workflow from discovery to final delivery.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = STEP_ICONS[idx] || Search;
            return (
              <div
                key={item.step}
                className="bg-[#121212] p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-[#C8A25D]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#C8A25D]/10 text-[#C8A25D] flex items-center justify-center border border-[#C8A25D]/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-sm font-semibold text-[#C8A25D]">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-[#ECE5D8] mb-1">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs font-medium text-[#C8A25D] mb-2">
                    {item.headline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10">
                  <span className="text-[11px] text-[#6B7280] block font-mono">
                    Output: {item.deliverable}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

