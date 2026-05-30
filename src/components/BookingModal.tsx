import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, TreePine, Award, CheckCircle } from "lucide-react";
import { cabanasData } from "../data/mockData";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessBooking: (message: string) => void;
}

export default function BookingModal({ isOpen, onClose, onSuccessBooking }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cabinId: "roble",
    dates: "",
    comments: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.dates) {
      alert("Por favor complete los campos marcados con asterisco (*)");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const chosenCabin = cabanasData.find((c) => c.id === formData.cabinId)?.nombre || "seleccionada";
      onSuccessBooking(
        `¡Excelente elección, ${formData.name}! Tu solicitud de reserva para la Cabaña ${chosenCabin} para las fechas "${formData.dates}" ha sido cargada en el sistema. Nos pondremos en contacto contigo a través de ${formData.email} o llamada telefónica para ultimar los detalles.`
      );
      // Reset state
      setFormData({ name: "", email: "", phone: "", cabinId: "roble", dates: "", comments: "" });
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
        {/* Transparent backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#435843]/60 backdrop-blur-sm"
        />

        {/* Modal Panel box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.4 }}
          className="bg-[#F7F4F0] w-full max-w-xl rounded-[32px] overflow-hidden shadow-2xl relative border border-[#435843]/15 z-10 p-6 md:p-8"
        >
          {/* Close trigger anchor */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full cursor-pointer text-[#435843]/75 hover:bg-[#435843]/10 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col gap-6">
            {/* Header section description */}
            <div className="text-center md:text-left flex items-center gap-3">
              <div className="p-3 bg-[#435843]/10 rounded-full text-[#435843]">
                <TreePine className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#435843] font-light">
                  Comienza tu estadía
                </h3>
                <p className="font-sans text-xs text-[#435843]/70 font-light mt-0.5">
                  Completa tus preferencias de descanso en el bosque de las maravillas.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-sans text-[10px] font-bold tracking-wider text-[#435843] uppercase">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Santiago Díaz"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-[#435843]/20 focus:border-[#435843] rounded-xl text-xs font-sans text-[#435843] outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-sans text-[10px] font-bold tracking-wider text-[#435843] uppercase">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="santiago@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-[#435843]/20 focus:border-[#435843] rounded-xl text-xs font-sans text-[#435843] outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-sans text-[10px] font-bold tracking-wider text-[#435843] uppercase">
                    Teléfono celular *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+54 9 11 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-[#435843]/20 focus:border-[#435843] rounded-xl text-xs font-sans text-[#435843] outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-sans text-[10px] font-bold tracking-wider text-[#435843] uppercase">
                    Cabaña para reservar
                  </label>
                  <select
                    value={formData.cabinId}
                    onChange={(e) => setFormData({ ...formData, cabinId: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-[#435843]/20 focus:border-[#435843] rounded-xl text-xs font-sans text-[#435843] outline-none transition-all"
                  >
                    {cabanasData.map((cabin) => (
                      <option key={cabin.id} value={cabin.id}>
                        {/* Cabaña {cabin.nombre} ({cabin.precio}/noche) */}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-sans text-[10px] font-bold tracking-wider text-[#435843] uppercase flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#435843]/70" />
                    Fechas tentativas *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Del 20/Nov al 27/Nov"
                    value={formData.dates}
                    onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-[#435843]/20 focus:border-[#435843] rounded-xl text-xs font-sans text-[#435843] outline-none transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-sans text-[10px] font-bold tracking-wider text-[#435843] uppercase">
                  Requerimientos / Consultas
                </label>
                <textarea
                  rows={3}
                  placeholder="Ej. viajo con mascota, necesito cuna..."
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-[#435843]/20 focus:border-[#435843] rounded-xl text-xs font-sans text-[#435843] outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer w-full py-4 bg-[#435843] hover:bg-[#2C3C2C] disabled:bg-[#435843]/60 text-[#F7F4F0] rounded-xl text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2 mt-2"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    PROCESANDO ENLACE...
                  </span>
                ) : (
                  <span>CONFIRMAR SOLICITUD DE RESERVA</span>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
