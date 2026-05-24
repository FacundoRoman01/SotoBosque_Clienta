import React from "react";
import { motion } from "motion/react";

export default function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "Bosque privado",
      description: "12 hectáreas propias en Sierra de los Padres, sin vecinos a la vista."
    },
    {
      id: "02",
      title: "30 min al mar",
      description: "Mar del Plata y sus playas a media hora por ruta asfaltada."
    },
    {
      id: "03",
      title: "Wi-Fi fibra óptica",
      description: "200 Mbps en todas las cabañas. Trabajar acá también se puede."
    },
    {
      id: "04",
      title: "Parrilla y fogón",
      description: "Cada cabaña con su parrilla. Fogón comunitario los fines de semana."
    },
    {
      id: "05",
      title: "Estacionamiento privado",
      description: "Tu auto al lado de tu cabaña. Sin compartir, sin caminar."
    },
    {
      id: "06",
      title: "Atención directa",
      description: "Sin intermediarios. Hablás con los dueños por WhatsApp."
    },
    {
      id: "07",
      title: "Pet friendly",
      description: "Tu perro también desconecta. Espacios cercados y sendero canino."
    },
    {
      id: "08",
      title: "Check-in flexible",
      description: "Llegada autónoma con código. Nosotros estamos cuando nos necesitás."
    }
  ];

  return (
    <section
      id="servicios"
      className="bg-[#435843] text-[#F7F4F0] py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-24 border-t border-[#F7F4F0]/10 z-10 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Top Header & Intro text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-6">
            <p className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-[#CBBF9F] uppercase font-semibold">
              04 · SERVICIOS Y COMODIDADES
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F7F4F0] font-light mt-4 leading-tight">
              Todo previsto. <br />
              <span className="text-italic-serif italic">Nada de más.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:max-w-lg">
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#F7F4F0]/80 font-light leading-relaxed">
              Cada cabaña llega lista: ropa blanca premium, cocina equipada, hogar a leña con leños listos, cafetera, todo. Pero también tenés lo que muchos otros no piensan.
            </p>
          </div>
        </div>

        {/* Beautiful high contrast grid layout matching screenshot exactly */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-[24px] border border-[#F7F4F0]/15 overflow-hidden"
        >
          {services.map((item, index) => (
            <div
              key={item.id}
              className={`p-8 flex flex-col gap-4 bg-[#415441]/50 backdrop-blur-sm relative transition-all duration-300 hover:bg-[#3B4C3B] group border-b border-[#F7F4F0]/10 border-r border-[#F7F4F0]/10
                ${index % 2 === 1 ? "sm:border-r-0 lg:border-r" : ""}
                ${index >= 6 ? "border-b-0" : ""}
                ${index === 3 || index === 7 ? "lg:border-r-0" : ""}
              `}
            >
              <span className="font-serif text-lg text-[#CBBF9F] font-light italic">
                {item.id}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-light text-white leading-tight">
                {item.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#F7F4F0]/70 font-light leading-relaxed max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
