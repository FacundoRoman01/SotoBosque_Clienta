import React from "react";
import { motion } from "motion/react";
import { MapPin, Navigation, Compass, Clock } from "lucide-react";

export default function HowToReachSection() {
  const travelTimes = [
    { title: "MAR DEL PLATA CENTRO", time: "30 min" },
    { title: "PLAYAS DEL SUR", time: "10 min" },
    { title: "AEROPUERTO MDP", time: "40 min" }
  ];

  return (
    <section
      id="ubicacion" 
      className="bg-[#2D3C2D] text-[#F7F4F0] py-20 md:py-28 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 border-t border-[#F7F4F0]/10 relative z-10"
    >
      {/* Subtle background diagonal pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 z-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_20px)]" 
      />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Main Floating Card Container (Matches the "Cabaña 02" design style) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#3A4B3A] border border-[#F7F4F0]/15 rounded-[24px] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
        >
          
          {/* Left Column: Info & Details (Matches the left side of the design) */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-between">
            
            {/* Header Section */}
            <div className="mb-12">
              <p className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-[#F7F4F0]/80 uppercase font-semibold mb-4">
                UBICACIÓN PREMIUM · MAR DEL PLATA
              </p>
              <h2 className="font-serif text-5xl md:text-6xl text-[#CBBF9F] font-light leading-none mb-3">
                Cómo Llegar
              </h2>
              <h3 className="font-sans text-2xl md:text-3xl text-[#F7F4F0] font-semibold mb-6">
                Bosque Peralta Ramos
              </h3>
              <p className="font-sans text-sm md:text-base text-[#F7F4F0]/85 leading-relaxed font-light">
                Escondido detrás de densas filas de árboles centenarios. Un refugio que brinda la sensación de desconexión absoluta, pero te conserva a minutos de las mejores playas de la costa atlántica.
              </p>
            </div>

            {/* Address & Grid Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              
              {/* Address Block */}
              <div className="sm:col-span-2 flex gap-4">
                <MapPin className="w-6 h-6 text-[#CBBF9F] shrink-0 mt-1" />
                <div>
                  <h4 className="font-sans text-xs tracking-[0.18em] text-[#F7F4F0]/60 uppercase font-bold mb-2">
                    DIRECCIÓN EXACTA
                  </h4>
                  <p className="font-serif text-lg md:text-xl text-[#F7F4F0] font-light">
                    Guaraníes entre Margaritas y Yanquetruz 100, Bosque Peralta Ramos, Mar del Plata.
                  </p>
                </div>
              </div>

              {/* Distances List */}
              <div className="sm:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-serif text-3xl text-[#CBBF9F]">06</span>
                  <h4 className="font-serif text-lg tracking-widest text-[#F7F4F0] uppercase">
                    DISTANCIAS CLAVE
                  </h4>
                </div>
                
                <ul className="flex flex-col gap-3 font-sans text-sm text-[#F7F4F0]/80 font-light">
                  {travelTimes.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-[#CBBF9F]/70" />
                      <span className="flex-1">{item.title}</span>
                      <span className="font-semibold text-[#F7F4F0]">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-[#F7F4F0] hover:bg-white text-[#2D3C2D] rounded-full font-sans text-xs tracking-widest font-bold uppercase transition-all hover:scale-105 active:scale-95 shadow-md flex items-center gap-2"
              >
                ABRIR EN MAPS <Navigation className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Map (Replaces the cabin image in the design) */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-auto min-h-[500px] relative">
            <div className="absolute inset-0 bg-black/20 pointer-events-none z-10 hidden lg:block" />
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.5011588843095!2d-57.57159931079634!3d-38.08199697697559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584e0bad1e2d485%3A0x6c92c9b9f4aba516!2sLas%20Margaritas%20%26%20Los%20Guaranies%2C%20B7600%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sus!4v1779642554634!5m2!1ses!2sus" 
              className="absolute inset-0 w-full h-full border-0 filter contrast-[1.05] saturate-[1.2]" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Ubicación Sotobosque"
            />
          </div>

        </motion.div>
      </div>
    </section>
  );
}