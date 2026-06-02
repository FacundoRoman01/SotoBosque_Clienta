import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
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
        
        {/* Left column - Ajustado con el padding perfecto para notebooks (lg) y monitores (xl) */}
        <div className="lg:col-span-6 flex flex-col justify-between px-6 sm:px-12 lg:pl-16 xl:pl-24 pt-28 sm:pt-32 lg:pt-32 xl:pt-40 pb-12 lg:pb-16 xl:pb-20">
          
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

            {/* Título optimizado con breakpoints fluidos para que no rompa en la notebook */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-[40px] sm:text-[50px] md:text-[60px] lg:text-[60px] xl:text-[75px] leading-[1.08] tracking-tight text-white font-light"
            >
              Que la única decisión del día <br />
              sea respirar profundo y <br />
              <span className="text-italic-serif italic font-light text-[#CBBF9F] tracking-wide">dejarte llevar.</span>
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
              {/* Etiqueta <a> semántica para mejor SEO y navegación nativa */}
              <a
                href="#cabanas"
                className="inline-flex items-center justify-center cursor-pointer px-8 py-3.5 border border-white/25 hover:border-white text-white hover:bg-white/10 hover:scale-105 active:scale-95 rounded-full font-sans text-xs tracking-[0.18em] font-semibold uppercase transition-all duration-300"
              >
                VER CABAÑAS
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-6 relative min-h-[450px] lg:min-h-0 w-full overflow-hidden self-stretch flex items-center justify-center mt-8 lg:mt-0">
          <img
            src="/img/foto_cabana_1_webP/foto_cabanaUno_afuera.webp"
            alt="Exclusiva cabaña de madera en Mar del Plata, ideal para descansar en la naturaleza"
            fetchPriority="high"
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