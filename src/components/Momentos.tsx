import React from 'react';
import { motion } from 'framer-motion';

interface MomentosProps {
  momentosFotos: string[];
}

export const Momentos: React.FC<MomentosProps> = ({ momentosFotos }) => {
  // Función para crear el patrón asimétrico (estilo Bento)
  const getBentoClass = (index: number) => {
    // Este arreglo define cómo se verá cada foto según su orden.
    // Al usar el módulo (%), el patrón se repite si tienes más fotos.
    const patterns = [
      "col-span-1 row-span-2", // 0: Vertical alto (como la chica comiendo pizza)
      "col-span-1 row-span-1", // 1: Cuadrado pequeño
      "col-span-1 row-span-2", // 2: Vertical alto
      "col-span-1 row-span-1", // 3: Cuadrado pequeño
      "col-span-2 row-span-2", // 4: Cuadro grande destacado (como la sonrisa gigante)
      "col-span-1 row-span-1", // 5: Cuadrado pequeño
      "col-span-1 row-span-2", // 6: Vertical alto
      "col-span-1 row-span-1", // 7: Cuadrado pequeño
    ];
    return patterns[index % patterns.length];
  };

  return (
    <section 
      id="momentos" 
      className="text-[#435843] py-24 md:py-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none bg-[#435843]/5" />
      
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Encabezado */}
        <div className="max-w-2xl">
          <p className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-[#435843]/70 uppercase font-semibold">
            03 · MOMENTOS
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#435843] font-light mt-4">
            La calma del <span className="text-italic-serif italic">silencio.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#435843]/80 mt-4 font-light leading-relaxed max-w-xl">
            Imágenes del bosque que rodea a Cabañas Sylviane. Un susurro de las hojas de tilo, el crujir de las piñas bajo el calzado y la bruma matinal que abraza los troncos.
          </p>
        </div>

        {/* Bento Grid Gallery */}
        {/* Usamos grid-flow-row-dense para que Tailwind acomode las piezas como un Tetris */}
{/* Gallery */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[220px] grid-flow-dense">
  {momentosFotos.map((foto, index) => {
    const patterns = [
      "md:col-span-2 md:row-span-2",
      "md:col-span-1 md:row-span-1",
      "md:col-span-1 md:row-span-1",
      "md:col-span-1 md:row-span-2",
      "md:col-span-1 md:row-span-1",
      "md:col-span-2 md:row-span-1",
      "md:col-span-1 md:row-span-1",
      "md:col-span-1 md:row-span-1",
    ];

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: index * 0.05,
        }}
        className={`
          group
          relative
          overflow-hidden
          rounded-xl md:rounded-2xl
          bg-[#D9D4CC]
          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          ${patterns[index % patterns.length]}
        `}
      >
        {/* Imagen */}
        <img
          src={foto}
          alt={`Momento ${index + 1}`}
          loading="lazy"
          className="
            w-full
            h-full
            object-cover
            transition-all
            duration-700
            ease-out
            group-hover:scale-[1.04]
            saturate-[0.92]
            contrast-[1.02]
            brightness-[0.98]
          "
        />

        {/* Overlay cinematográfico */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/30
            via-black/5
            to-transparent
            opacity-70
            group-hover:opacity-40
            transition-all
            duration-500
          "
        />

        {/* Glow cálido */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-700
            bg-[#C7B299]/10
          "
        />
      </motion.div>
    );
  })}
</div>

      </div>
    </section>
  );
};

export default Momentos;