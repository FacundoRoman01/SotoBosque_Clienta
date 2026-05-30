import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button after scrolling 300px down
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/5492235755054?text=${encodeURIComponent(
    "Hola Sotobosque! Quería realizar una consulta sobre disponibilidad para hospedarse en el complejo."
  )}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          id="floating-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.7, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 30 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-[#435843] hover:bg-[#2C3C2C] text-white rounded-full shadow-2xl shadow-emerald-950/40 border border-[#FAF8F5]/10 group transition-colors duration-300"
        >
          {/* Pulsing ring indicator */}
          <span className="absolute inset-0 rounded-full bg-emerald-700/20 animate-ping pointer-events-none duration-1000" />

          {/* Clean minimal inline SVG for WhatsApp */}
          <svg
            className="w-5 h-5 fill-current text-[#CBBF9F] group-hover:text-white transition-colors duration-300"
            viewBox="0 0 24 24"
            aria-label="WhatsApp"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.1 1.454 4.82 1.455 5.51-.001 9.99-4.485 9.993-10.001 0-2.672-1.039-5.186-2.926-7.076-1.887-1.89-4.396-2.93-7.073-2.93-5.511 0-9.99 4.484-9.994 10s1.453 3.23 2.404 4.83l-.997 3.645 3.738-.981zM18.156 14.85c-.328-.163-1.937-.954-2.235-1.063-.297-.109-.514-.163-.73.163-.217.327-.84.1.06-.217-.11-.29-.163-.514-.298-.445-1.13-.53-2.21-.93-3.13-1.75-.72-.64-1.09-1.42-1.09-2.22 0-.25.07-.49.19-.71.12-.22.51-.81.65-.96.14-.15.28-.22.38-.28.1-.06.2-.06.3 0 .1.06.41.98.45 1.07.04.1.06.21 0 .32-.06.11-.12.22-.22.32-.09.11-.24.25-.34.36-.11.12-.22.25-.09.47.13.22.58.95 1.24 1.54.85.76 1.57 1 1.8.11.23-.11.49-.49.62-.64.13-.15.26-.13.44-.07.18.06 1.13.53 1.33.63.19.1.32.15.37.24.05.09.05.53-.11.69z" />
          </svg>

          {/* Hover dynamic label styled with fine-grained tracking */}
          <span className="font-sans text-[11px] font-bold tracking-[0.15em] text-white uppercase select-none">
            Escribinos
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
