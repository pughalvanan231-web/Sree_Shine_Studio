import { motion } from "framer-motion";
import { STUDIO_INFO } from "../content/studio";
import { Search, Compass, Palette, CheckCircle2 } from "lucide-react";

const STEP_ICONS = [Search, Compass, Palette, CheckCircle2];

export default function ProcessSection() {
  const steps = STUDIO_INFO.processSteps;

  return (
    <section className="py-16 sm:py-24 bg-[#0c0c0c] relative overflow-hidden border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2 sm:space-y-3"
        >
          <span className="text-xs uppercase tracking-widest text-[#C8A25D] font-semibold">
            Our Approach
          </span>
          <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold text-[#ECE5D8]">
            How We Bring Ideas to Light
          </h2>
          <p className="text-[#9CA3AF] text-xs sm:text-sm md:text-base">
            Four disciplined steps from initial inspiration to flawless launch.
          </p>
        </motion.div>

        {/* Process Steps Grid */}
        <div className="relative">
          {/* Desktop progressive connecting line */}
          <div 
            className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] -translate-y-8 h-[2px] bg-white/10"
            aria-hidden="true"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-[#C8A25D] origin-left"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = STEP_ICONS[idx] || Search;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.65, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#121212] p-5 sm:p-7 rounded-2xl border border-white/10 shadow-sm flex flex-col justify-between hover:border-[#C8A25D]/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#C8A25D]/10 text-[#C8A25D] flex items-center justify-center border border-[#C8A25D]/20">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-heading text-base sm:text-lg font-bold text-[#C8A25D]">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#ECE5D8] mb-1">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs font-semibold text-[#C8A25D] mb-2">
                      {item.headline}
                    </p>

                    <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 sm:mt-6 pt-3 border-t border-white/10">
                    <span className="text-[10px] sm:text-[11px] text-[#848994] block">
                      Outcome: {item.deliverable}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
