import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Check, Calendar, Phone, Mail, ArrowRight, MessageCircle } from "lucide-react";
import { Cabin } from "../data/mockData";

interface CabinDetailsModalProps {
  cabin: Cabin | null;
  onClose: () => void;
  onSuccessBooking: (message: string) => void;
}

export default function CabinDetailsModal({ cabin, onClose, onSuccessBooking }: CabinDetailsModalProps) {
  const [activePhoto, setActivePhoto] = useState(0);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    guests: "2 huéspedes"
  });

  if (!cabin) return null;

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhoto((prev) => (prev === 0 ? cabin.galeria.length - 1 : prev - 1));
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhoto((prev) => (prev === cabin.galeria.length - 1 ? 0 : prev + 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.dates) {
      alert("Por favor complete todos los campos requeridos.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowInquiryForm(false);
      onSuccessBooking(
        `¡Gracias, ${formData.name}! Tu solicitud de reserva para la Cabaña ${cabin.nombre} del ${formData.dates} fue recibida. Te contactaremos vía ${formData.email} en los próximos 15 minutos.`
      );
      // Reset
      setFormData({ name: "", email: "", phone: "", dates: "", guests: "2 huéspedes" });
    }, 1500);
  };

  // Generate WhatsApp customized message
  const whatsappUrl = `https://wa.me/542239876543?text=${encodeURIComponent(
    `Hola Sotobosque! Me interesa consultar disponibilidad para la Cabaña ${cabin.nombre}. ¿Tienen lugar próximamente?`
  )}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
        {/* Backdrop background overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#2C3C2C]/85 backdrop-blur-md"
        />

        {/* Modal Window Panel Box (High contrast Dark Green Theme Match Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="bg-[#1A231A] w-full max-w-4xl rounded-[28px] overflow-hidden shadow-2xl z-10 max-h-[92vh] flex flex-col relative border border-[#F7F4F0]/15 text-[#F7F4F0]"
        >
          {/* Main scrollable body */}
          <div className="overflow-y-auto w-full h-full max-h-[92vh] scrollbar-thin">
            
            {/* 1. TOP HERO CONTAINER (Image Slider) */}
            <div className="relative aspect-[16/10] md:aspect-[16/8] w-full overflow-hidden bg-[#2C3C2C]">
              
              {/* Image banner */}
              <img
                src={cabin.galeria[activePhoto]}
                alt={`${cabin.nombre} - Galería ${activePhoto + 1}`}
                className="w-full h-full object-cover brightness-[0.9]"
              />

              {/* Top Vignette black translucent backdrop gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30 pointer-events-none" />

              {/* Cabin indicator label (Top-Left) */}
              <div className="absolute top-6 left-6 font-sans text-[10px] md:text-xs tracking-[0.25em] text-[#F7F4F0]/90 uppercase font-semibold">
                {cabin.numero}
              </div>

              {/* Close Button "x" in black circle (Top-Right) */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-black/75 hover:bg-black text-white hover:scale-110 active:scale-95 duration-200 cursor-pointer border border-[#F7F4F0]/10"
                aria-label="Cerrar modal"
              >
                <X className="w-4 h-4 md:w-5 h-5" />
              </button>

              {/* Chevron arrows selectors centet-aligned */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/45 hover:bg-black/75 text-white rounded-full flex items-center justify-center transition-all hover:scale-105"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={handleNextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/45 hover:bg-black/75 text-white rounded-full flex items-center justify-center transition-all hover:scale-105"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots index indicators in bottom center */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {cabin.galeria.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhoto(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activePhoto === i ? "w-6 bg-[#F7F4F0]" : "w-1.5 bg-[#F7F4F0]/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* 2. CABIN NAME AND DESCRIPTION DETAILS CONTENT AREA */}
            <div className="p-6 md:p-10 flex flex-col gap-8">
              
              {/* Cabin ID heading layout and Pricing */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#F7F4F0]/10 pb-6">
                <div>
                  <h1 className="font-serif text-4xl md:text-5xl font-light text-white tracking-wide">
                    {cabin.nombre}
                  </h1>
                  <p className="font-sans text-[11px] md:text-xs tracking-[0.25em] text-[#CBBF9F] uppercase font-semibold mt-1.5">
                    {cabin.tagline}
                  </p>
                </div>
                <div className="text-left md:text-right flex flex-col gap-0.5">
                  <span className="font-sans text-[10px] text-[#F7F4F0]/60 tracking-wider uppercase font-semibold">DESDE</span>
                  <span className="font-serif text-2xl md:text-3xl font-light text-[#CBBF9F] italic">
                    {cabin.precio} <span className="text-xs uppercase font-sans tracking-widest text-white/70 font-medium font-normal ml-1">/ noche</span>
                  </span>
                </div>
              </div>

              {/* 3. PERFORMANCE STATS GRID (CAPACIDAD, SUPERFICIE, DORMITORIOS, BAÑOS) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-[#F7F4F0]/15 rounded-xl p-5 bg-[#252F25]/40 text-[#F7F4F0]">
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-[9px] sm:text-[10px] uppercase font-bold text-[#CBBF9F] tracking-widest">Capacidad</span>
                  <span className="font-serif text-lg text-white font-medium italic mt-0.5">{cabin.huespedes} huéspedes</span>
                </div>
                <div className="flex flex-col gap-1 border-l-0 md:border-l border-[#F7F4F0]/15 md:pl-5">
                  <span className="font-sans text-[9px] sm:text-[10px] uppercase font-bold text-[#CBBF9F] tracking-widest">Superficie</span>
                  <span className="font-serif text-lg text-white font-medium italic mt-0.5">{cabin.m2} m²</span>
                </div>
                <div className="flex flex-col gap-1 border-l-0 md:border-l border-[#F7F4F0]/15 md:pl-5">
                  <span className="font-sans text-[9px] sm:text-[10px] uppercase font-bold text-[#CBBF9F] tracking-widest">Dormitorios</span>
                  <span className="font-serif text-lg text-white font-medium italic mt-0.5">{cabin.dormitorios}</span>
                </div>
                <div className="flex flex-col gap-1 border-l-[#F7F4F0]/15 pl-0 md:border-l md:pl-5">
                  <span className="font-sans text-[9px] sm:text-[10px] uppercase font-bold text-[#CBBF9F] tracking-widest">Baños</span>
                  <span className="font-serif text-lg text-white font-medium italic mt-0.5">{cabin.banos}</span>
                </div>
              </div>

              {/* DESCRIPTION TEXT */}
              <p className="font-sans text-xs sm:text-sm md:text-base text-[#F7F4F0]/90 leading-relaxed font-light">
                {cabin.descripcion}
              </p>

              {/* 4. "LO DISTINTIVO" SECTION OF THE SCREENSHOT */}
              <div className="flex flex-col gap-4">
                <p className="font-sans text-[10px] tracking-[0.25em] text-[#CBBF9F] uppercase font-bold">
                  LO DISTINTIVO
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-[#F7F4F0]/15 pt-4">
                  {cabin.distintivo.map((highlight, index) => (
                    <div
                      key={index}
                      className="border-b md:border-b-0 md:border-r border-[#F7F4F0]/15 pb-3 md:pb-0 md:pr-4 last:border-0"
                    >
                      <p className="font-serif text-base sm:text-lg italic text-white/95 font-medium">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. "COMODIDADES" AMENITIES LOG OVERVIEW LIST AND DORMIR BLOCK */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Amenities checklist columns */}
                <div className="md:col-span-8 flex flex-col gap-4">
                  <p className="font-sans text-[10px] tracking-[0.25em] text-[#CBBF9F] uppercase font-bold">
                    COMODIDADES
                  </p>
                  
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3.5 border-t border-[#F7F4F0]/15 pt-4">
                    {cabin.comodidades.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F7F4F0]/90 font-light">
                        <Check className="w-4 h-4 text-[#CBBF9F]" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dormir / Bed Layout columns */}
                <div className="md:col-span-4 flex flex-col gap-4">
                  <p className="font-sans text-[10px] tracking-[0.25em] text-[#CBBF9F] uppercase font-bold">
                    DORMIR
                  </p>
                  <div className="border-t border-[#F7F4F0]/15 pt-4 p-4 rounded-xl bg-[#252F25]/45">
                    <p className="font-serif text-base text-[#CBBF9F] font-medium italic">
                      {cabin.dormir}
                    </p>
                  </div>
                </div>
              </div>

              {/* 6. BOOKING PROMPT ACTION CONTAINER "Stay with us?" */}
              <div className="bg-[#212C21] border border-[#F7F4F0]/20 rounded-2xl p-6 md:p-8 mt-4">
                <div className="flex flex-col gap-1 text-center md:text-left">
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-white italic">
                    ¿Te quedás con {cabin.nombre}?
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-[#F7F4F0]/75 font-light mt-1">
                    Consultá disponibilidad — respondemos en menos de 2 horas.
                  </p>
                </div>

                {/* Double CTA Buttons Row in image 2 */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 justify-center md:justify-start">
                  
                  {/* WhatsApp redirection */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center cursor-pointer px-6 py-3 border border-[#F7F4F0]/30 hover:border-[#F7F4F0] rounded-xl text-xs font-sans tracking-widest font-bold uppercase transition-all duration-300 hover:bg-[#F7F4F0]/10 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-300" />
                    WHATSAPP
                  </a>

                  {/* Consultation form toggler */}
                  <button
                    onClick={() => setShowInquiryForm(!showInquiryForm)}
                    className="w-full sm:w-auto cursor-pointer px-8 py-3.5 bg-[#CBBF9F] hover:bg-[#D1C4A6]/90 text-[#1A231A] rounded-xl text-xs font-sans tracking-widest font-bold uppercase transition-all duration-300 transform active:scale-95 shadow-md flex items-center justify-center gap-2"
                  >
                    CONSULTAR DISPONIBILIDAD
                  </button>
                </div>

                {/* SLIDE-DOWN BOOKING CONSULTATION FORM */}
                <AnimatePresence>
                  {showInquiryForm && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden mt-8 border-t border-[#F7F4F0]/10 pt-6"
                    >
                      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1">
                            <label className="font-sans text-[10px] font-bold tracking-wider text-white uppercase">
                              Nombre Completo *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Ej. Martín Soler"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full px-4 py-2.5 bg-[#1A231A] border border-[#F7F4F0]/20 focus:border-[#CBBF9F] rounded-xl text-xs font-sans text-white outline-none transition-all animate-fade-in"
                            />
                          </div>

                          <div className="flex flex-col gap-1">
                            <label className="font-sans text-[10px] font-bold tracking-wider text-white uppercase">
                              Email de Contacto *
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="Ej. martin@gmail.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-4 py-2.5 bg-[#1A231A] border border-[#F7F4F0]/20 focus:border-[#CBBF9F] rounded-xl text-xs font-sans text-white outline-none transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1">
                            <label className="font-sans text-[10px] font-bold tracking-wider text-white uppercase">
                              Teléfono / WhatsApp *
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="Ej. +54 9 223 1234567"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-4 py-2.5 bg-[#1A231A] border border-[#F7F4F0]/20 focus:border-[#CBBF9F] rounded-xl text-xs font-sans text-white outline-none transition-all"
                            />
                          </div>

                          <div className="flex flex-col gap-1">
                            <label className="font-sans text-[10px] font-bold tracking-wider text-white uppercase">
                              Fechas tentativas *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Ej. Del 15/Ene al 22/Ene"
                              value={formData.dates}
                              onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                              className="w-full px-4 py-2.5 bg-[#1A231A] border border-[#F7F4F0]/20 focus:border-[#CBBF9F] rounded-xl text-xs font-sans text-white outline-none transition-all"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="cursor-pointer w-full py-3.5 bg-[#CBBF9F] hover:bg-white text-[#1A231A] font-bold font-sans text-xs tracking-widest uppercase rounded-xl transition-all duration-300 mt-2 flex items-center justify-center gap-2 shadow"
                        >
                          {isSubmitting ? (
                            <svg className="animate-spin h-5 w-5 text-[#1A231A]" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                          ) : (
                            <span className="flex items-center gap-2">
                              ENVIAR CONSULTA
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          )}
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
