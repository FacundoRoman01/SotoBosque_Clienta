import { motion } from "motion/react";
import CabinCard from "./CabinCard";
import { cabanasData, Cabin } from "../data/mockData";

interface CabinGridProps {
  onOpenDetails: (cabin: Cabin) => void;
}

export default function CabinGrid({ onOpenDetails }: CabinGridProps) {
  // Stagger container animation
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <section
      id="cabanas"
      className="bg-[#F7F4F0] py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-24 border-t border-[#435843]/15 z-10 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Title Group - Styled perfectly according to Image 3 */}
        <div className="max-w-3xl flex flex-col gap-4 text-left">
          <p className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-[#435843]/60 uppercase font-semibold">
            02 · LAS CUATRO CABAÑAS
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#435843] font-light leading-tight">
            Cada una con su{" "}
            <span className="text-italic-serif italic">propio nombre.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#435843]/85 max-w-xl font-light leading-relaxed">
            Diseñadas para distintos modos de descansar. Tocá cada tarjeta para ver fotos, comodidades y disponibilidad.
          </p>
        </div>

        {/* Dynamic Cascaded Card Grid using stagger children variants */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full"
        >
          {cabanasData.map((cabin) => (
            <div key={cabin.id} className="h-full">
              <CabinCard cabin={cabin} onOpenDetails={onOpenDetails} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
