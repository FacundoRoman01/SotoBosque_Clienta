import React from "react";
import { motion } from "motion/react";
import { ShoppingBag, Store } from "lucide-react";

export default function ForestPeraltaSection() {
  const activities = [
    {
      id: "01",
      icon: <ShoppingBag className="w-5 h-5 text-[#435843]" />,
      title: "Picnic en el bosque",
      description: "Canasta lista para abrir en cualquier rincón verde del predio. Nuestra propuesta más romántica a pasos de tu cabaña."
    },
    {
      id: "02",
      icon: <Store className="w-5 h-5 text-[#435843]" />,
      title: "Circuito cultural",
      description: "La Casita de Té, Color Humano y la Plaza de los Artesanos: lo que hay para descubrir caminando tranquilamente."
    }
  ];

  return (
    <section className="bg-[#F7F4F0] py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* TOP INTRODUCTORY SECTION FOR FOREST PERALTA RAMOS */}
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#435843] font-light leading-tight">
            El Bosque <span className="text-italic-serif italic">Peralta Ramos.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#435843]/85 font-light leading-relaxed max-w-2xl">
            Cuatrocientas cincuenta hectáreas de reserva forestal a once kilómetros del centro de Mar del Plata. Pinos paraná, eucaliptos, aromos, robles y araucarias. Apenas entrás, queda atrás el ruido: el canto de los pájaros pasa a ser el sonido principal y el verde, el color que predomina.
          </p>
        </div>

        {/* COMPREHENSIVE LANDSCAPE ENTRANCE IMAGE CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[16/9] max-h-[600px] rounded-[32px] overflow-hidden shadow-lg group"
        >
          {/* Imagen local optimizada con Lazy Loading y Alt descriptivo para SEO */}
          <img
            src="/img/Fotos_bosque/bosquePeralta.webp"
            alt="Entrada principal a la Reserva Forestal Bosque Peralta Ramos, rodeada de pinos y naturaleza"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-105"
          />
          {/* Beautiful text tag overlay on bottom left */}
          <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md text-[#F7F4F0] text-[9px] md:text-[10px] tracking-[0.2em] font-sans font-semibold px-4 py-2 rounded-xl uppercase border border-white/10 shadow-lg">
            RESERVA FORESTAL · ENTRADA PRINCIPAL
          </div>
        </motion.div>

        {/* BOTTOM SECTION - EXPERIENCIAS PARA PERDERSE ADENTRO */}
        <div className="flex flex-col gap-12 mt-8">
          <div>
            <p className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-[#435843]/60 uppercase font-semibold">
              QUÉ SE PUEDE HACER
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#435843] font-light mt-4 leading-tight">
              Experiencias para <span className="text-italic-serif italic">perderse adentro.</span>
            </h2>
          </div>

          {/* Clean 2-column grid meticulously styled to be balanced with only 2 items */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 rounded-[24px] border border-[#435843]/15 overflow-hidden"
          >
            {activities.map((item, index) => (
              <div
                key={item.id}
                className={`p-10 md:p-12 flex flex-col gap-5 bg-white/40 backdrop-blur-sm relative transition-all duration-300 hover:bg-white group
                  ${index === 0 ? "border-b md:border-b-0 md:border-r border-[#435843]/15" : ""}
                `}
              >
                {/* Icon row & id indicator */}
                <div className="flex items-center justify-between w-full">
                  <div className="p-3 bg-[#435843]/10 rounded-xl text-[#435843] group-hover:bg-[#435843]/15 transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-sans text-xs text-[#435843]/30 tracking-wider font-semibold">
                    {item.id}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#435843] group-hover:text-[#2C3C2C] transition-colors leading-tight mt-2">
                  {item.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-[#435843]/85 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}