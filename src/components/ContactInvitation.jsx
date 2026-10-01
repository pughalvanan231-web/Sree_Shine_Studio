import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { STUDIO_INFO } from "../content/studio";

export default function ContactInvitation() {
  return (
    <section className="py-24 bg-[#0B2B38] text-[#FBF9F5] relative overflow-hidden">
      {/* Background radial gold-emerald glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8A25D]/12 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E5E8A]/30 border border-[#C8A25D]/40 text-xs font-medium text-[#F9E29D]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C8A25D]" />
          <span>Ready to Collaborate?</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#FBF9F5]"
        >
          Let’s create something<br />
          <span className="italic text-[#C8A25D]">worth noticing.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-[#C1C4CC] max-w-xl mx-auto"
        >
          Whether you need precision commercial photography, an unmistakable brand identity, or a spatial exhibition, we are ready to spark your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A25D] hover:bg-[#F9E29D] text-[#0B2B38] font-semibold text-sm rounded-full shadow-lg shadow-[#C8A25D]/20 transition-all duration-200 active:scale-[0.98]"
          >
            <span>Start an Inquiry</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href={`mailto:${STUDIO_INFO.contact.email}`}
            className="inline-flex items-center gap-2 px-7 py-4 bg-[#071D26] hover:bg-[#0E5E8A]/40 text-[#ECE5D8] border border-[#0E5E8A]/40 font-medium text-sm rounded-full transition-all duration-200"
          >
            <Mail className="w-4 h-4 text-[#C8A25D]" />
            <span>{STUDIO_INFO.contact.email}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
