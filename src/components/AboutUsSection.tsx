import React from "react";
import { motion, Variants } from "framer-motion";

export default function AboutUsSection() {
  // Tipamos explícitamente como 'Variants' para que TypeScript entienda las propiedades de Framer Motion
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const },
    },
  };

  return (
    <section
      id="nosotros"
      className="bg-[#F7F4F0] py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-24 relative overflow-hidden"
    >
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none bg-[#435843]/5 translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Columna Izquierda: Contenido y Texto */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 flex flex-col gap-8 relative z-10"
          >
            <div>
              <motion.p
                variants={itemVariants}
                className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-[#435843]/60 uppercase font-semibold"
              >
                04 · NUESTRA HISTORIA
              </motion.p>

              <motion.h2
                variants={itemVariants}
                className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#435843] font-light mt-4 leading-[1.1]"
              >
                Detrás de cada estadía, <br className="hidden sm:block" />
                <span className="text-italic-serif italic text-[#C7B299]">
                  hay una familia.
                </span>
              </motion.h2>
            </div>

            {/* Separador decorativo */}
            <motion.div variants={itemVariants} className="w-12 h-[1px] bg-[#435843]/20" />

            <motion.div variants={itemVariants} className="flex flex-col gap-5">
              <p className="font-sans text-sm md:text-base text-[#435843]/85 font-light leading-relaxed">
                Detrás de este proyecto hay una familia que encontró en este rincón
                de Mar del Plata un lugar especial para disfrutar, descansar y crear
                recuerdos.
              </p>
              <p className="font-sans text-sm md:text-base text-[#435843]/85 font-light leading-relaxed">
                Lo que comenzó como un espacio para compartir entre nosotros, con el
                tiempo se transformó en un lugar abierto para recibir a otras familias
                que buscan la misma tranquilidad, naturaleza y conexión que nos
                enamoró desde el primer día.
              </p>
              <p className="font-sans text-sm md:text-base text-[#435843]/85 font-light leading-relaxed">
                Hoy seguimos cuidando cada detalle de manera cercana y personal,
                convencidos de que las mejores estadías nacen cuando quienes reciben
                y quienes visitan se sienten como en casa.
              </p>
            </motion.div>

            {/* Pull Quote Final */}
            <motion.div
              variants={itemVariants}
              className="mt-6 pl-6 border-l-2 border-[#C7B299]"
            >
              <p className="font-serif italic text-2xl md:text-3xl text-[#435843] font-light leading-tight">
                "Lo que comenzó como nuestro lugar favorito,
                hoy es un lugar para compartir."
              </p>
            </motion.div>
          </motion.div>

          {/* Columna Derecha: Imagen con diseño editorial */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-6 relative w-full max-w-lg mx-auto lg:max-w-none"
          >
            {/* Marco decorativo desfasado */}
            <div className="absolute inset-0 border border-[#435843]/15 rounded-[32px] translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6" />
            
            <div className="relative aspect-[4/5] w-full rounded-[32px] overflow-hidden shadow-2xl group">
              <img
                src="https://images.openai.com/static-rsc-4/BBm1tBDQXnbTA3j3ybus22mxXlaqiVSeBaiVfmigTp9XkdwQR0cDlA6_C8z-YxLHHPgHeQpHEF8xckCnkfiLyzzaXQ34Np7vYvJnoz65yIWlxzhRs-WepI-lUt59QriSyQpwKKKU4cmcL6seqjC5bWkCIBQq9E9gN9guOyDLC_h2fBsfHp3IlgRToK70rH77?purpose=inline"
                alt="Familia anfitriona Cabañas Sylviane"
                className="w-full h-full object-cover transition-transform duration-[7000ms] group-hover:scale-105"
              />
              {/* Overlay sutil para mejorar el contraste visual */}
              <div className="absolute inset-0 bg-[#435843]/10 mix-blend-multiply pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}