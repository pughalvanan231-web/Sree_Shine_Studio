import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function LightboxModal({ images, activeIndex, isOpen, onClose, onPrev, onNext }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImg = images[activeIndex];

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Image Gallery Lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6"
      >
        {/* Top bar controls */}
        <div className="flex items-center justify-between z-10 w-full max-w-7xl mx-auto">
          <div className="text-xs text-[#ECE5D8] font-mono tracking-wider">
            {activeIndex + 1} / {images.length}
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#121212] text-[#ECE5D8] hover:bg-[#C8A25D] hover:text-black transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#C8A25D]"
            aria-label="Close image viewer (Press Escape)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center Stage & Image */}
        <div className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full my-2 sm:my-4">
          {/* Previous Button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={onPrev}
              className="absolute left-1 sm:left-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/80 border border-white/20 text-[#ECE5D8] hover:bg-[#C8A25D] hover:text-black transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#C8A25D]"
              aria-label="Previous image (Left arrow key)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Main Image Container */}
          <div className="max-h-[70vh] sm:max-h-[80vh] max-w-full flex items-center justify-center overflow-hidden px-2 sm:px-0">
            <motion.img
              key={activeIndex}
              src={currentImg.url}
              alt={currentImg.alt || `Gallery preview image ${activeIndex + 1}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-h-[70vh] sm:max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Next Button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={onNext}
              className="absolute right-1 sm:right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/80 border border-white/20 text-[#ECE5D8] hover:bg-[#C8A25D] hover:text-black transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#C8A25D]"
              aria-label="Next image (Right arrow key)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Bottom Caption */}
        <div className="max-w-3xl mx-auto text-center z-10 w-full px-4">
          {currentImg.caption && (
            <p className="text-xs sm:text-sm text-[#9CA3AF] font-sans">
              {currentImg.caption}
            </p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
