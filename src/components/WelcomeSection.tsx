import { motion } from "motion/react";

export default function WelcomeSection() {
  return (
    <section
      id="bienvenida"
      className="bg-[#F7F4F0] py-24 md:py-36 px-6 md:px-12 flex flex-col items-center justify-center text-center relative z-10"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-emerald-100/10 filter blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl flex flex-col items-center gap-6 md:gap-8 relative z-15"
      >
        {/* Section number & label */}
        {/* <p className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-[#435843]/60 uppercase font-semibold">
          01 · BIENVENIDA
        </p> */}

        {/* Large quote in Serif Italic */}
        <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.25] text-[#435843] font-light italic px-4 md:px-8">
          Que la única decisión del día sea qué silencio elegir
        </blockquote>

        {/* Thick elegant spacer line */}
        <div className="w-16 h-[1px] bg-[#435843]/30 my-2" />

        {/* Small descriptive text below */}
        <p className="font-sans text-xs sm:text-sm md:text-base text-[#435843]/80 leading-relaxed max-w-xl font-light">
         Hace más de 20 años que recibimos gente en Mar del Plata. Cada lugar pensado para que llegues, dejes la mochila y te olvides de mirar la hora.
        </p>
      </motion.div>
    </section>
  );
}
