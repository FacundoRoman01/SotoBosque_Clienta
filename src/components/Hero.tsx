import React, { useState, useRef } from "react";
import { motion } from "framer-motion"; // Cambiado a framer-motion por convención, ajusta según tu import
// import { Volume2, VolumeX } from "lucide-react"; // Descomentar si usas el audio

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleVerCabanas = (e: React.MouseEvent) => {
    e.preventDefault();
    const cabinsSection = document.querySelector("#cabanas");
    if (cabinsSection) {
      cabinsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end bg-[#435843] text-[#F7F4F0] overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none opacity-30 z-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_20px)]" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-screen z-10">
        
        {/* Left column - Ajuste crítico de Padding Top (pt-28 sm:pt-32) para evitar colisión con el header fijo */}
        <div className="lg:col-span-6 flex flex-col justify-between px-6 sm:px-12 lg:pl-16 xl:pl-24 pt-28 sm:pt-32 pb-12 lg:py-20">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="my-auto max-w-xl flex flex-col gap-6 sm:gap-8 active:outline-none"
          >
            <motion.p
              variants={itemVariants}
              className="font-sans text-[7px] sm:text-xs tracking-[0.25em] font-semibold text-[#F7F4F0]/75 uppercase"
            >
              CABAÑAS PREMIUM · MAR DEL PLATA
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-serif text-[40px] sm:text-[60px] md:text-[70px] lg:text-[75px] leading-[1.08] tracking-tight text-white font-light"
            >
              Cabañas Sylviane <br />
              te recibe <br />
              donde el silencio  <span className="text-italic-serif italic font-light text-[#CBBF9F] tracking-wide">empieza.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-sans text-xs sm:text-sm md:text-base leading-relaxed text-[#F7F4F0]/85 font-light max-w-md"
            >
              Cinco lugares para quedarse en Mar del Plata. Tres cabañas escondidas en el bosque, una casa en la sierra y un refugio cerca del mar.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* <button
                onClick={onOpenBooking}
                className="cursor-pointer px-8 py-3.5 bg-[#FAF8F5] hover:bg-white text-[#435843] hover:scale-105 active:scale-95 rounded-full font-sans text-xs tracking-[0.18em] font-bold uppercase transition-all duration-300 shadow-md"
              >
                RESERVAR AHORA
              </button> */}

              <button
                onClick={handleVerCabanas}
                className="cursor-pointer px-8 py-3.5 border border-white/25 hover:border-white text-white hover:bg-white/10 hover:scale-105 active:scale-95 rounded-full font-sans text-xs tracking-[0.18em] font-semibold uppercase transition-all duration-300"
              >
                VER CABAÑAS
              </button>
            </motion.div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 border-t border-[#F7F4F0]/15 pt-8 mt-12 lg:mt-6"
          >
            <div>
              <p className="font-serif text-2xl sm:text-4xl font-light text-[#F7F4F0]">
                4.97<span className="text-[10px] sm:text-sm text-[#F7F4F0]/65 font-sans ml-0.5">/5</span>
              </p>
              <p className="font-sans text-[8px] sm:text-[10px] tracking-[0.18em] text-[#F7F4F0]/60 uppercase font-medium mt-1.5">
                148 RESEÑAS
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl sm:text-4xl font-light text-[#F7F4F0]">
                12 ha
              </p>
              <p className="font-sans text-[8px] sm:text-[10px] tracking-[0.18em] text-[#F7F4F0]/60 uppercase font-medium mt-1.5">
                BOSQUE
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl sm:text-4xl font-light text-[#F7F4F0]">
                30 min
              </p>
              <p className="font-sans text-[8px] sm:text-[10px] tracking-[0.18em] text-[#F7F4F0]/60 uppercase font-medium mt-1.5">
                AL MAR
              </p>
            </div>
          </motion.div> */}
        </div>

        {/* Right column - (Igual) */}
        <div className="lg:col-span-6 relative min-h-[450px] lg:min-h-0 w-full overflow-hidden self-stretch flex items-center justify-center mt-8 lg:mt-0">
          <img
            src="/img/foto_cabana_1_webP/imagen-silvia-1.webp"
            alt="Cabina Cabañas Sylviane"
            className="absolute inset-0 w-full h-full object-cover scale-100 transition-transform duration-[6000ms] hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#435843] via-[#435843]/50 to-transparent lg:block hidden z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#435843] via-[#435843]/50 to-transparent lg:hidden block z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-black/10 pointer-events-none z-10" />
        </div>

      </div>
    </section>
  );
}