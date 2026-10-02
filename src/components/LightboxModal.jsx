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
        className="fixed inset-0 z-50 bg-[#121315]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
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
            className="p-2.5 rounded-full bg-[#22252A] text-[#FBF9F5] hover:bg-[#C4A47C] hover:text-[#121315] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C4A47C]"
            aria-label="Close image viewer (Press Escape)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center Stage & Image */}
        <div className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full my-4">
          {/* Previous Button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={onPrev}
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-[#191B1E]/80 border border-[#33383F] text-[#FBF9F5] hover:bg-[#C4A47C] hover:text-[#121315] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C4A47C]"
              aria-label="Previous image (Left arrow key)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Main Image Container */}
          <div className="max-h-[75vh] max-w-full flex items-center justify-center overflow-hidden">
            <motion.img
              key={activeIndex}
              src={currentImg.url}
              alt={currentImg.alt || `Gallery preview image ${activeIndex + 1}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* Next Button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={onNext}
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-[#191B1E]/80 border border-[#33383F] text-[#FBF9F5] hover:bg-[#C4A47C] hover:text-[#121315] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C4A47C]"
              aria-label="Next image (Right arrow key)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Bottom Caption */}
        <div className="max-w-3xl mx-auto text-center z-10 w-full">
          {currentImg.caption && (
            <p className="text-sm text-[#C1C4CC] font-sans">
              {currentImg.caption}
            </p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
