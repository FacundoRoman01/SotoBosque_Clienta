import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    "Hola Cabañas Sylviane! Quería realizar una consulta sobre disponibilidad para hospedarse en el complejo."
  )}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <a
            id="floating-whatsapp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            // Usamos un verde oscuro elegante que contrasta perfecto con el blanco
            className="group relative flex items-center bg-[#435843] hover:bg-[#2C3C2C] rounded-full shadow-xl shadow-emerald-950/30 border border-white/20 transition-all duration-300"
            aria-label="Contactar por WhatsApp"
          >
            {/* Anillo expansivo sutil */}
            <span className="absolute inset-0 rounded-full border border-white/40 animate-[ping_3s_ease-in-out_infinite] opacity-30 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />

            {/* Contenedor que maneja el ancho expansivo */}
            <div className="flex items-center rounded-full overflow-hidden">
              
              {/* Contenedor del Icono (Siempre visible) */}
              <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 z-10">
                {/* Nuevo icono de WhatsApp más limpio y en BLANCO puro */}
                <svg
                  className="w-[26px] h-[26px] fill-current text-white transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>

              {/* Contenedor del Texto */}
              <div className="max-w-0 group-hover:max-w-[150px] transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap">
                {/* Texto en blanco puro */}
                <span className="font-sans text-[11px] font-bold tracking-[0.15em] text-white uppercase select-none pr-6 block">
                  Escribinos
                </span>
              </div>
              
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}