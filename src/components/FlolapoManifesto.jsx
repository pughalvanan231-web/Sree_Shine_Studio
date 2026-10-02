import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function FlolapoManifesto() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-[#0c0c0c] text-[#ECE5D8] border-t border-b border-white/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 sm:space-y-10">
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="text-base xs:text-lg sm:text-2xl md:text-3xl text-[#ECE5D8] font-normal leading-relaxed font-sans px-2"
        >
          At <span className="text-[#C8A25D] font-medium">Sree Shine Studio</span>, we understand the power of a strong visual and physical presence. Our team of talented designers, writers, photographers, videographers and strategists work collaboratively to create visually stunning and engaging content that not only captures attention but also converts visitors into loyal clients.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="pt-2"
        >
          <Link
            to="/contact"
            className="px-6 sm:px-8 py-3 sm:py-3.5 bg-[#C8A25D] text-black hover:bg-[#DFB873] rounded-full font-semibold transition-all inline-flex items-center justify-center text-xs sm:text-sm uppercase tracking-widest gap-2.5 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group"
          >
            <span>Reach Out!</span>
            <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
