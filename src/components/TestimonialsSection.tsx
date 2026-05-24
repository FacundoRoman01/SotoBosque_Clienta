import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Testimonial {
  id: number;
  autor: string;
  comentario: string;
  origen: string;
  duracion: string;
  fecha: string;
  imagen: string;
  rating: number;
}

const testimonialsList: Testimonial[] = [
  {
    id: 1,
    autor: "Lucía & Martín",
    comentario: '"Nunca habíamos descansado tanto en tan pocos días. El ofuro al atardecer, el silencio del bosque, los desayunos en la galería. Volvemos en invierno sí o sí."',
    origen: "BUENOS AIRES",
    duracion: "3 NOCHES EN AROMO",
    fecha: "ABRIL 2026",
    imagen: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
    rating: 5,
  },
  {
    id: 2,
    autor: "Gonzalo & Sofía",
    comentario: '"Un refugio de paz inexplicable. Despertar y ver las copas de los árboles meciéndose desde el ventanal doble de Roble es una experiencia mágica. Volveremos siempre y recomendaremos sin dudar."',
    origen: "MONTEVIDEO",
    duracion: "4 NOCHES EN ROBLE",
    fecha: "MAYO 2026",
    imagen: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200",
    rating: 5,
  },
  {
    id: 3,
    autor: "Clara & Tomás",
    comentario: '"El diseño de las cabañas es impecable, rústico pero sofisticado. La tina de agua caliente bajo el cielo estrellado de la sierra es sin dudas lo mejor. Nos sentimos realmente mimados."',
    origen: "BARILOCHE",
    duracion: "2 NOCHES EN COIHUE",
    fecha: "MARZO 2026",
    imagen: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1200",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const current = testimonialsList[activeIndex];

  return (
    <section id="testimonios" className="bg-[#F7F4F0] py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Subtle details */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#435843]/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Image with overladen badge matching mockup exactly */}
          <div className="lg:col-span-5 relative w-full aspect-[4/5] sm:aspect-[4/5] rounded-[28px] sm:rounded-[40px] overflow-hidden shadow-lg border border-[#435843]/10">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={current.imagen}
                alt={`Testimonio de ${current.autor}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Subtle premium dark vignette bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

            {/* Overlaid Badge Bottom Left - Solid Elegant and Beautiful */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#323D32]/95 backdrop-blur-sm px-6 py-4 rounded-[20px] border border-white/10 shadow-lg text-[#F7F4F0]">
              <div className="flex flex-col gap-1.5 select-none">
                <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] font-semibold text-[#FAF8F5]/85 uppercase">
                  RESEÑA DESTACADA · {activeIndex + 1}/{testimonialsList.length}
                </span>
                
                {/* 5 Filled Golden Stars */}
                <div className="flex gap-1 text-yellow-400 mt-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <span key={i} className="text-sm md:text-base leading-none">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Big Quote and details */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full py-2 min-h-[380px] lg:min-h-[460px]">
            <div>
              {/* Steps/Section label */}
              <p className="font-sans text-[10px] sm:text-xs tracking-[0.25em] text-[#435843]/60 uppercase font-semibold">
                05 · LO QUE NOS DEJAN
              </p>

              {/* Huge Elegant Serif Quote */}
              <div className="mt-8 lg:mt-10 min-h-[160px] sm:min-h-[180px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full"
                  >
                    <p className="font-serif italic font-light text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.3] text-[#435843]/90">
                      {current.comentario}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Elegant Thin Rule Divider */}
              <div className="w-full h-[1px] bg-[#435843]/15 my-8 lg:my-10" />

              {/* Reviewer Details Author */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-1.5"
                >
                  <h4 className="font-serif text-lg sm:text-xl font-medium text-[#435843]">
                    {current.autor}
                  </h4>
                  <p className="font-sans text-[10px] sm:text-xs tracking-[0.18em] text-[#435843]/50 font-semibold uppercase">
                    {current.origen} · {current.duracion} · {current.fecha}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Indicator with capsule and rounded dots */}
            <div className="flex items-center gap-2.5 mt-8 lg:mt-12">
              {testimonialsList.map((_, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`cursor-pointer h-2 rounded-full transition-all duration-300 ${
                      isActive 
                        ? "bg-[#435843] w-9" 
                        : "bg-[#435843]/20 hover:bg-[#435843]/45 w-2"
                    }`}
                    aria-label={`Ir al testimonio ${index + 1}`}
                  />
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
