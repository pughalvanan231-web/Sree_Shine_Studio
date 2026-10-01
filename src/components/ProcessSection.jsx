import { motion } from "framer-motion";
import { STUDIO_INFO } from "../content/studio";
import { Search, Compass, Palette, CheckCircle2 } from "lucide-react";

const STEP_ICONS = [Search, Compass, Palette, CheckCircle2];

export default function ProcessSection() {
  const steps = STUDIO_INFO.processSteps;

  return (
    <section className="py-24 bg-[#F4EFE6] relative overflow-hidden border-y border-[#DDD2BF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <span className="text-xs uppercase tracking-widest text-[#A67C1E] font-semibold">
            Our Approach
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#191B1E]">
            How We Bring Ideas to Light
          </h2>
          <p className="text-[#585C65] text-sm sm:text-base">
            Four disciplined steps from initial inspiration to flawless launch.
          </p>
        </motion.div>

        {/* Process Steps Grid */}
        <div className="relative">
          {/* Desktop progressive connecting line */}
          <div 
            className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] -translate-y-8 h-[2px] bg-[#DDD2BF]"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = STEP_ICONS[idx] || Search;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.65, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#FBF9F5] p-6 sm:p-7 rounded-2xl border border-[#DDD2BF]/80 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#F4EFE6] text-[#A67C1E] flex items-center justify-center border border-[#DDD2BF]/60">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-serif text-lg font-bold text-[#C8A25D]">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-semibold text-[#191B1E] mb-1">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs font-semibold text-[#A67C1E] mb-2.5">
                      {item.headline}
                    </p>

                    <p className="text-sm text-[#585C65] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#F4EFE6]">
                    <span className="text-[11px] text-[#848994] block">
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
