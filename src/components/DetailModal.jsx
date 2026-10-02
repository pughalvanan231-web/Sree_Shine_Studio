import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function DetailModal({ isOpen, onClose, item, type = "service" }) {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);
  const triggerElementRef = useRef(null);

  // Capture trigger element and manage focus + ESC key + scroll lock
  useEffect(() => {
    if (isOpen) {
      triggerElementRef.current = document.activeElement;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);

      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
        triggerElementRef.current?.focus?.();
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const isService = type === "service";

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-modal-title"
      >
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal Container Card */}
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="relative z-10 w-full max-w-2xl bg-[#121212] border border-white/10 rounded-t-[28px] sm:rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] max-h-[90vh] sm:max-h-[85vh] flex flex-col overflow-hidden text-[#ECE5D8]"
        >
          {/* Header Bar */}
          <div className="p-6 sm:p-8 pb-4 flex items-start justify-between gap-4 border-b border-white/5">
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block">
                {isService ? "Service Discipline" : (item.category || "Selected Project")}
              </span>
              <h2
                id="detail-modal-title"
                className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold uppercase tracking-tight text-[#ECE5D8] leading-snug"
              >
                {item.title}
              </h2>
            </div>

            {/* Accessible Close Button */}
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1c1c1c] hover:bg-[#C8A25D] hover:text-black text-[#ECE5D8] flex items-center justify-center transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-[#C8A25D]"
              aria-label="Close details (Press Escape)"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto overscroll-contain">
            {/* Visual Image Banner */}
            {(item.heroImage || item.coverImage || item.thumbnail || item.image) && (
              <div className="rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/9] bg-[#181818] border border-white/5 relative">
                <img
                  src={item.coverImage || item.heroImage || item.thumbnail || item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-wider text-[#9CA3AF] font-mono">
                Overview
              </h3>
              <p className="text-sm sm:text-base text-[#ECE5D8] leading-relaxed">
                {item.tagline || item.summary || item.description || item.shortDescription || item.brief}
              </p>
            </div>

            {/* Deliverables / Scope / Details */}
            {item.deliverables && item.deliverables.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="text-xs uppercase tracking-wider text-[#9CA3AF] font-mono">
                  {isService ? "What We Deliver" : "Scope & Deliverables"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {item.deliverables.map((del, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-black/40 border border-white/5 text-xs sm:text-sm text-[#ECE5D8]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A25D] shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Project/Service Metadata */}
            {item.client && (
              <div className="pt-2 flex items-center justify-between text-xs text-[#9CA3AF] font-mono border-t border-white/5">
                <span>Client / Focus: {item.client}</span>
                {item.year && <span>Year: {item.year}</span>}
              </div>
            )}
          </div>

          {/* Bottom Action Footer */}
          <div className="p-6 sm:p-8 pt-4 border-t border-white/10 bg-[#0d0d0d] flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={onClose}
              className="text-xs uppercase tracking-wider text-[#9CA3AF] hover:text-[#ECE5D8] transition-colors py-2"
            >
              Close
            </button>

            <Link
              to="/contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8A25D] hover:bg-[#DFB873] text-black font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all shadow-md active:scale-95"
            >
              <span>{isService ? "Inquire About This Service" : "Start a Similar Project"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
