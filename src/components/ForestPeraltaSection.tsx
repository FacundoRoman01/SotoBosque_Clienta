import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Slide {
  id: number;
  tag: string;
  text: React.ReactNode;
  images: string[];
}

const slides: Slide[] = [
  {
    id: 1,
    tag: "CAMINATAS EN EL BOSQUE",
    text: (
      <>
        Recorré los senderos de la Reserva Forestal Bosque Peralta Ramos a pie, entre eucaliptos y aromos. Caminatas tranquilas para respirar aire puro, escuchar los pájaros y desconectar del ritmo de la ciudad.
      </>
    ),
    images: ["/img/experiencias/slide_1/bosque-peralta-ramos.webp"],
  },
  {
    id: 2,
    tag: "CABALGATAS",
    text: (
      <>
        Subirse a un caballo es dejar que el tiempo vaya más despacio. Cada recorrido por el Bosque Peralta Ramos permite disfrutar del paisaje con calma, sentir la conexión con la naturaleza y vivir una experiencia auténtica que combina aventura, tranquilidad y momentos difíciles de olvidar.
      </>
    ),
    images: [
      "/img/experiencias/slide_2/cabalgata.webp",
      "/img/experiencias/slide_2/cabalgata2.webp"
    ],
  },
  {
    id: 3,
    tag: "CASA DE TÉ",
    text: (
      <>
        El aroma del té, las tortas recién horneadas y un ambiente que combina piedra, madera y naturaleza crean una experiencia difícil de olvidar. Un rincón ideal para disfrutar de una merienda tranquila y descubrir uno de los lugares con más encanto del Bosque Peralta Ramos.
      </>
    ),
    images: [
      "/img/experiencias/slide_3/casadete1_1.webp",
      "/img/experiencias/slide_3/casadete2_2.webp",
      "/img/experiencias/slide_3/casadete3.webp",
      "/img/experiencias/slide_3/casadete4.webp",
      "/img/experiencias/slide_3/casadete5.webp",
    ],
  }
];

export default function ForestPeraltaSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [subImageIndex, setSubImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    setSubImageIndex(0);
  }, [currentIndex]);

  useEffect(() => {
    if (isHovered) return;

    const TIME_PER_IMAGE = 2500; 

    const timer = setInterval(() => {
      const currentSlide = slides[currentIndex];

      if (subImageIndex < currentSlide.images.length - 1) {
        setSubImageIndex((prev) => prev + 1);
      } else {
        handleNext();
      }
    }, TIME_PER_IMAGE);

    return () => clearInterval(timer);
  }, [currentIndex, subImageIndex, isHovered, handleNext]);

  const current = slides[currentIndex];

  return (
    <section 
      id="bosque" 
      className="bg-[#FAF8F5] text-[#2C3C2C] py-20 sm:py-28 px-6 md:px-12 lg:px-24 xl:px-32 relative overflow-hidden border-t border-[#435843]/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* TÍTULO AGREGADO AQUÍ */}
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#354631] tracking-tight">
            ¿Qué hacer en el Bosque Peralta Ramos?
          </h2>
          {/* Opcional: Una pequeña línea decorativa debajo del título */}
          <div className="w-16 h-[1px] bg-[#435843]/30 mt-4 mx-auto md:mx-0"></div>
        </div>
        {/* FIN DEL TÍTULO */}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-center">
          
          <div className="md:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-md bg-white">
              
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${current.id}-${subImageIndex}`}
                  src={current.images[subImageIndex] || current.images[0]}
                  alt={current.tag}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover rounded-[32px]"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-15 w-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#354631] text-[#F5F2EB] px-6 py-2.5 rounded-2xl shadow-lg border border-white/5 select-none"
                  >
                    <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] font-bold text-[#EBE7DF] uppercase whitespace-nowrap">
                      {current.tag}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

          <div className="md:col-span-7 flex flex-col justify-center gap-8 lg:gap-10">
            
            <div className="min-h-[180px] sm:min-h-[140px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={current.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="font-serif italic text-[18px] sm:text-[21px] md:text-[23px] lg:text-[25px] text-[#435843]/90 font-light leading-[1.65] md:leading-[1.7] tracking-tight text-left"
                >
                  {current.text}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-2.5">
              {slides.map((slide, index) => {
                const isActive = index === currentIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => handleDotClick(index)}
                    className="focus:outline-none cursor-pointer p-1"
                    aria-label={`Ir a diapositiva ${index + 1}`}
                  >
                    {isActive ? (
                      <motion.div
                        layoutId="minimalActivePill"
                        className="h-3.5 w-10 bg-[#354631] rounded-full border border-[#354631]/20"
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      />
                    ) : (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#2C3C2C]/20 transition-all duration-300 hover:bg-[#2C3C2C]/35" />
                    )}
                  </button>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}