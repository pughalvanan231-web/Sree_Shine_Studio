import { motion } from "framer-motion";

export default function PageHeader({ badge, title, subtitle, centered = false }) {
  return (
    <section className="pt-28 sm:pt-36 pb-10 sm:pb-14 bg-[#0a0a0a] border-b border-white/10 relative">
      <div className="site-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`space-y-3 sm:space-y-4 ${centered ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}`}
        >
          {badge && (
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block">
              {badge}
            </span>
          )}

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#ECE5D8] leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-xs sm:text-sm md:text-base text-[#9CA3AF] leading-relaxed prose-hero">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

