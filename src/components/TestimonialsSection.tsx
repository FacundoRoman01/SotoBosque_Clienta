import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Testimonial {
  id: number;
  autor: string;
  comentario: string;
  origen: string;
  duracion: string;
  fecha: string;
  rating: number;
}

const testimonialsList: Testimonial[] = [
  {
    id: 1,
    autor: "Tais",
    comentario: "La estadía fue muy linda, Sil estuvo muy atenta a todo. Es una cabaña para volver.",
    origen: "SAN MARTÍN, ARGENTINA",
    duracion: "ESTADÍA RECIENTE",
    fecha: "HACE 3 SEMANAS",
    rating: 5,
  },
  {
    id: 2,
    autor: "Sandra",
    comentario: "Un hermoso lugar con una vista maravillosa, se descansa y disfruta ..!!! Súper recomendable y la anfitriona muy amable y siempre atenta. Gracias SIL hasta la próxima seguro volveré ..",
    origen: "ARGENTINA",
    duracion: "ESTADÍA EN CABAÑA",
    fecha: "HACE 2 MESES",
    rating: 5,
  },
  {
    id: 3,
    autor: "Brenda Berenice",
    comentario: "Hermoso lugar. Rodeado de un bosque muy lindo. Silvia muy agradable y la verdad que pudimos reservar de un momento a otro así que super recomendable.",
    origen: "SANTA ROSA, ARGENTINA",
    duracion: "ESCAPADA",
    fecha: "HACE 7 MESES",
    rating: 5,
  },
  {
    id: 4,
    autor: "Ricardo",
    comentario: "La cabaña es hermosa y tanto Sil como su esposo y su hijo están atentos a cualquier necesidad de los huéspedes.",
    origen: "BUENOS AIRES, ARGENTINA",
    duracion: "VACACIONES",
    fecha: "HACE 7 MESES",
    rating: 4,
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Smooth responsive sizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = testimonialsList.length - visibleCount;

  // Make sure activeIndex is always bounded when resizing screens
  useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(Math.max(0, maxIndex));
    }
  }, [visibleCount, activeIndex, maxIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <section 
      id="testimonios" 
      className="bg-[#FAF8F5] text-[#2C3C2C] py-20 sm:py-28 px-6 md:px-12 relative overflow-hidden border-t border-[#435843]/10"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header content matching the requested editorial concept */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16 pb-4 border-b border-[#435843]/15">
          <div className="max-w-2xl">
            <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-[#CBBF9F] uppercase font-bold block mb-2">
            LA EXPERIENCIA en Cabañas Sylviane
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2C3C2C] font-light tracking-tight leading-tight">
              Testimonios de <span className="text-italic-serif italic text-[#CBBF9F] font-normal">nuestros huéspedes</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-3 self-end">
            <button
              onClick={handlePrev}
              className="p-3 text-[#435843] hover:text-white bg-white hover:bg-[#2C3C2C] border border-[#435843]/10 rounded-full transition-all duration-300 focus:outline-none shadow-sm cursor-pointer"
              aria-label="Carrusel anterior"
            >
              <ChevronLeft className="w-5 h-5 pointer-events-none" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 text-[#435843] hover:text-white bg-white hover:bg-[#2C3C2C] border border-[#435843]/10 rounded-full transition-all duration-300 focus:outline-none shadow-sm cursor-pointer"
              aria-label="Siguiente carrusel"
            >
              <ChevronRight className="w-5 h-5 pointer-events-none" />
            </button>
          </div>
        </div>

        {/* Carousel slide viewport wrapper */}
        <div className="overflow-visible lg:overflow-hidden -mx-4 px-4 py-2">
          <div className="relative">
            <motion.div
              className="flex"
              animate={{ x: `-${activeIndex * (100 / visibleCount)}%` }}
              transition={{ type: "spring", stiffness: 180, damping: 25 }}
            >
              {testimonialsList.map((item) => (
                <div
                  key={item.id}
                  className="flex-none px-3 sm:px-4"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  {/* Cards component exactly with the requested elegant look */}
                  <div className="bg-white rounded-[24px] border border-[#435843]/8 p-7 sm:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full min-h-[300px] hover:border-[#CBBF9F]/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300">
                    <div>
                      {/* Dynamic stars based on real rating */}
                      <div className="flex gap-1 text-[#CBBF9F] mb-6 select-none">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3.5 h-3.5 ${i < item.rating ? "fill-current" : "fill-transparent border-[#CBBF9F] opacity-40"}`} 
                          />
                        ))}
                      </div>

                      {/* Italic font quote style */}
                      <p className="font-serif italic text-base sm:text-lg leading-relaxed text-[#435843]/90 font-light">
                        "{item.comentario}"
                      </p>
                    </div>

                    {/* Divider and clean bio credentials row */}
                    <div className="mt-8 pt-6 border-t border-[#435843]/10">
                      <h4 className="font-sans text-xs font-bold tracking-wider text-[#2C3C2C] uppercase">
                        {item.autor}
                      </h4>
                      <p className="font-sans text-[10px] text-[#435843]/60 tracking-wide mt-1">
                        {item.origen} · <span className="italic text-[#CBBF9F] font-semibold">{item.duracion}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Smart page indicators navigation */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {Array.from({ length: Math.max(1, testimonialsList.length - visibleCount + 1) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                idx === activeIndex ? "bg-[#CBBF9F] w-6" : "bg-[#435843]/25 hover:bg-[#435843]/45 w-1.5"
              }`}
              aria-label={`Mostrar grupo ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}