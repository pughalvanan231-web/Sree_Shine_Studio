import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function PageHeader({ badge, title, subtitle, centered = false }) {
  return (
    <section className="pt-32 pb-14 bg-black border-b border-white/10/40 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div 
        className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-[#E5D5B3]/20 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`space-y-4 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-4xl"}`}
        >
          {badge && (
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-white/10 text-xs font-medium text-[#7A5B2F]`}>
              <Sparkles className="w-3 h-3 text-[#C4A47C]" />
              <span>{badge}</span>
            </div>
          )}

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#ECE5D8] leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
