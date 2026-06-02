import { useState } from "react";
import { motion, } from "motion/react";
// import { Users, Maximize, BedDouble, ChevronRight, Sparkles } from "lucide-react";
import { Cabin } from "../data/mockData";

interface CabinCardProps {
  cabin: Cabin;
  onOpenDetails: (cabin: Cabin) => void;
}


//hacer mas grandes las fotos con un modal

export default function CabinCard({ cabin, onOpenDetails }: CabinCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants representing card entry
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 60, damping: 15 },
    },
  };
  const formattedNum = cabin.numero.replace(/[^0-9]/g, "");

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-[#FAF8F5] rounded-[32px] overflow-hidden border border-[#435843]/10 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 flex flex-col justify-between group h-full"
    >
      {/* Top Image & Price Container */}
      <div 
        className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200 cursor-pointer" 
        onClick={() => onOpenDetails(cabin)}
      >
        <img
          src={cabin.imagen}
          alt={cabin.nombre}
          className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
        />

        {/* Ambient top dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-70" />

        {/* Top left indicator matching mockup exactly (— 01) */}
        <div className="absolute top-6 left-6 flex items-center gap-2 select-none z-10 font-sans">
          <span className="w-5 h-[1.5px] bg-[#F7F4F0]/60" />
          <span className="font-serif text-[#F7F4F0]/95 text-xs italic font-medium tracking-widest">{formattedNum}</span>
        </div>

        {/* Bottom left carousel pagination representation: --- • • • */}
        <div className="absolute bottom-5 left-6 flex items-center gap-1.5 select-none z-10">
          <div className="w-8 h-[3px] bg-white rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#F7F4F0]/50 rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#F7F4F0]/50 rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#F7F4F0]/50 rounded-full" />
        </div>

        {/* Price Tag Overlay - Exactly as in the mockup bottom-right */}
        {/* <div className="absolute bottom-4 right-4 bg-[#1a231a]/85 backdrop-blur-sm text-[#F7F4F0] text-[10px] sm:text-xs font-sans tracking-[0.15em] font-bold px-4 py-2 rounded-xl uppercase border border-[#F7F4F0]/10 shadow-md">
          DESDE {cabin.precio}
        </div> */}
      </div>

      {/* Details Area with generous layout matching mockup perfectly */}
      <div className="p-8 sm:p-10 flex flex-col flex-grow justify-between">
        <div className="flex flex-col">
          {/* Tagline */}
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] text-[#435843]/60 uppercase font-semibold">
            {cabin.tagline}
          </span>

          {/* Cabin Name - elegant serif */}
          <h3 className="font-serif text-4xl sm:text-5xl font-light text-[#435843] group-hover:text-[#2C3C2C] transition-colors leading-tight mt-3">
            {cabin.nombre}
          </h3>

          {/* Clean spec row with dot separators, no icons, followed by thin horizontal rule */}
          <div className="flex items-center text-xs sm:text-sm text-[#435843]/70 font-light tracking-wide gap-2.5 pb-6 border-b border-[#435843]/10 mt-4 mb-5">
            <span>{cabin.huespedes} huéspedes</span>
            <span className="text-[#435843]/45 select-none font-sans text-[8px] sm:text-[10px]">·</span>
            <span>{cabin.ambientes} Ambientes</span>
            <span className="text-[#435843]/45 select-none font-sans text-[8px] sm:text-[10px]">·</span>
            <span>{cabin.dormitorios} dorm.</span>
          </div>

          {/* Description text exactly matching size inside card */}
          <p className="font-sans text-xs sm:text-sm text-[#435843]/80 leading-relaxed font-light mb-6">
            {cabin.descripcion}
          </p>

          {/* Highlights Capsular Tags */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {cabin.distintivo.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="border border-[#435843]/15 bg-[#435843]/5 text-[#435843]/85 rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-sans tracking-wide font-normal"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Double Actions Bottom Row */}
        <div className="flex items-center justify-between border-t border-[#435843]/5 pt-5 mt-auto">
          <button
            onClick={() => onOpenDetails(cabin)}
            className="cursor-pointer px-6 sm:px-7 py-3 bg-[#435843] hover:bg-[#2C3C2C] text-white hover:scale-[1.03] active:scale-[0.97] rounded-full text-[10px] sm:text-xs font-bold font-sans tracking-[0.18em] uppercase transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md shadow-[#435843]/10"
          >
            VER DETALLE →
          </button>

          <a
            href={`https://wa.me/542239876543?text=${encodeURIComponent(
              `Hola Cabañas Sylviane! Quería consultar disponibilidad para la Cabaña ${cabin.nombre}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-[#435843]/90 hover:text-[#2C3C2C] font-semibold font-sans text-[10px] sm:text-xs tracking-[0.2em] transition-colors focus:outline-none uppercase hover:underline underline-offset-4"
          >
            WHATSAPP
          </a>
        </div>
      </div>
    </motion.div>
  );
}
