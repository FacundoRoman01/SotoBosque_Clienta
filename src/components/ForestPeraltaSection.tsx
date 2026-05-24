import React from "react";
import { motion } from "motion/react";
import { Compass, TreePine, Bike, Binoculars, Flame, Trees, ShoppingBag, Store, Map } from "lucide-react";

export default function ForestPeraltaSection() {
  const activities = [
    {
      id: "01",
      icon: <Map className="w-5 h-5 text-[#435843]" />,
      title: "Caminatas y senderismo",
      description: "Recorridos por los senderos de la reserva, aptos para todas las edades. Te entregamos un mapa con los trayectos sugeridos."
    },
    {
      id: "02",
      icon: <TreePine className="w-5 h-5 text-[#435843]" />,
      title: "Baño de bosque",
      description: "Una caminata lenta y consciente entre los árboles. Wellness sin clases ni horarios — sólo vos y el verde."
    },
    {
      id: "03",
      icon: <Bike className="w-5 h-5 text-[#435843]" />,
      title: "Paseos en bicicleta",
      description: "Los senderos del bosque admiten ciclismo. Préstamo de bicicletas disponible — pedímelas al hacer check-in."
    },
    {
      id: "04",
      icon: <Binoculars className="w-5 h-5 text-[#435843]" />,
      title: "Observación de aves",
      description: "La reserva alberga decenas de especies. Te dejamos binoculares y una guía simple para identificarlas."
    },
    {
      id: "05",
      icon: <Flame className="w-5 h-5 text-[#435843]" />,
      title: "Fogón y noche de estrellas",
      description: "Fogata al caer la tarde, cielo limpio de Sierra y todas las estrellas que olvidaste que existían."
    },
    {
      id: "06",
      icon: <Compass className="w-5 h-5 text-[#435843]" />,
      title: "Cabalgatas",
      description: "Recorridos a caballo por los senderos del bosque, coordinados con prestadores locales de confianza."
    },
    {
      id: "07",
      icon: <ShoppingBag className="w-5 h-5 text-[#435843]" />,
      title: "Picnic en el bosque",
      description: "Canasta lista para abrir en cualquier rincón verde del predio. Nuestra propuesta más romántica."
    },
    {
      id: "08",
      icon: <Store className="w-5 h-5 text-[#435843]" />,
      title: "Circuito cultural",
      description: "La Casita de Té, Color Humano y la Plaza de los Artesanos: lo que hay para descubrir caminando."
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
          {/* Unsplash beautiful rich high contrast forest entrance image */}
          <img
            src="/img/bosquePeralta.webp"
            alt="Reserva Forestal Bosque Peralta Ramos"
            className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-105"
          />
          {/* Beautiful text tag overlay on bottom left */}
          <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md text-[#F7F4F0] text-[9px] md:text-[10px] tracking-[0.2em] font-sans font-semibold px-4 py-2 rounded-xl uppercase border border-white/10 shadow-lg">
            RESERVA FORESTAL · ENTRADA PRINCIPAL
          </div>
        </motion.div>

        {/* BOTTOM SECTION - OCHO MANERAS DE PERDERSE ADENTRO */}
        <div className="flex flex-col gap-12 mt-8">
          <div>
            <p className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-[#435843]/60 uppercase font-semibold">
              QUÉ SE PUEDE HACER
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#435843] font-light mt-4 leading-tight">
              Ocho maneras de <span className="text-italic-serif italic">perderse adentro.</span>
            </h2>
          </div>

          {/* Crema colored grid with subtle green borders matches mockup exactly */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-[24px] border border-[#435843]/15 overflow-hidden"
          >
            {activities.map((item, index) => (
              <div
                key={item.id}
                className={`p-8 flex flex-col gap-4 bg-white/40 backdrop-blur-sm relative transition-all duration-300 hover:bg-white group border-b border-[#435843]/15 border-r border-[#435843]/15
                  ${index % 2 === 1 ? "sm:border-r-0 lg:border-r" : ""}
                  ${index >= 6 ? "border-b-0" : ""}
                  ${index === 3 || index === 7 ? "lg:border-r-0" : ""}
                `}
              >
                {/* Icon row & id indicator */}
                <div className="flex items-center justify-between w-full">
                  <div className="p-2 bg-[#435843]/15 rounded-xl text-[#435843]">
                    {item.icon}
                  </div>
                  <span className="font-sans text-xs text-[#435843]/40 tracking-wider font-semibold">
                    {item.id}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-light text-[#435843] group-hover:text-[#2C3C2C] leading-tight mt-2">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#435843]/85 font-light leading-relaxed">
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
