import React from "react";
import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";

interface BookingCallToActionProps {
  onOpenBooking: () => void;
}

export default function BookingCallToAction({ onOpenBooking }: BookingCallToActionProps) {
  const whatsappUrl = `https://wa.me/5492235755054?text=${encodeURIComponent(
    "Hola Cabañas Sylviane! Quiero consultar disponibilidad para mi próxima escapada al bosque."
  )}`;

  return (
    <section className="relative w-full aspect-[21/9] min-h-[480px] md:min-h-[600px] flex items-center justify-center overflow-hidden z-10">
      
      {/* Background Image of a dark, misty, gorgeous forest */}
      <img
        src="/img/fondo_collage_cabanas.webp"
        alt="Bosque SotoBosque"
        className="absolute inset-0 w-full h-full object-cover scale-105 brightness-[0.65]"
      />

      {/* Gradient Dark Vignette Overlay for premium readable text */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 pointer-events-none" />
      <div className="absolute inset-0 bg-black/35 pointer-events-none" />

      {/* Main text & layouts content area */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-7">
        
        {/* Step label / upper details indicator */}
        <p className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-[#CBBF9F] uppercase font-bold animate-fade-in-up">
          07 · RESERVÁ TU FECHA
        </p>

        {/* Hero typography title */}
        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-light tracking-wide leading-tight md:leading-[1.1]">
          Tu próxima <br className="sm:hidden" />
          <span className="text-italic-serif italic text-[#CBBF9F] sm:text-white">escapada</span> <br />
          empieza acá.
        </h2>

        {/* Responsive Dual Action CTA Buttons bar matching image layout perfectly */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full justify-center">
          
          {/* <button
            onClick={onOpenBooking}
            className="cursor-pointer w-full sm:w-auto px-8 py-4 bg-[#FAF8F5] hover:bg-white text-[#2C3C2C] hover:scale-105 active:scale-95 rounded-full text-xs font-bold font-sans tracking-[0.2em] uppercase transition-all duration-300 shadow-xl"
          >
            CONSULTAR DISPONIBILIDAD
          </button> */}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center cursor-pointer px-8 py-3.5 border border-white/30 hover:border-white text-white hover:bg-white/10 hover:scale-105 active:scale-95 rounded-full text-xs font-bold font-sans tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            WHATSAPP DIRECTO
          </a>

        </div>

      </div>

    </section>
  );
}
