import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, Mail, Instagram, Compass, Trees, CheckCircle, Quote, Star, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WelcomeSection from "../components/WelcomeSection";
import CabinGrid from "../components/CabinGrid";
import CabinDetailsModal from "../components/CabinDetailsModal";
import BookingModal from "../components/BookingModal";
import ServicesSection from "../components/ServicesSection";
import HowToReachSection from "../components/HowToReachSection";
import ForestPeraltaSection from "../components/ForestPeraltaSection";
import BookingCallToAction from "../components/BookingCallToAction";
import { Cabin, testimonios, momentosFotos } from "../data/mockData";
import Footer from "../components/Footer";
import TestimonialsSection from "../components/TestimonialsSection";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function Home() {
  const [selectedCabin, setSelectedCabin] = useState<Cabin | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Triggered when any reservation forms are sent successfully
  const handleSuccessBooking = (message: string) => {
    setSelectedCabin(null);
    setIsBookingOpen(false);
    setToastMessage(message);

    // Auto dismiss after 7 seconds
    setTimeout(() => {
      setToastMessage(null);
    }, 7000);
  };

  return (
    <div className="bg-[#F7F4F0] min-h-screen relative font-sans text-[#435843] selection:bg-[#435843] selection:text-[#F7F4F0]">
      
      {/* Sticky Header */}
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero split section */}
      <Hero onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Welcome Section */}
      <WelcomeSection />

      {/* Cabin Grid (Stagger animations automatically apply when scrolling in) */}
      <CabinGrid onOpenDetails={(cabin) => setSelectedCabin(cabin)} />

      {/* El Bosque Peralta Ramos */}
      <ForestPeraltaSection />

      {/* 03 · MOMENTOS SECTION (To ensure full website logic for Menu links) */}
      <section id="momentos" className="text-[#435843] py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full  blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          
          <div className="max-w-2xl">
            <p className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-[#435843]/70 uppercase font-semibold">
              03 · MOMENTOS
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#435843] font-light mt-4">
              La calma del <span className="text-italic-serif italic">silencio.</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#435843]/80 mt-4 font-light leading-relaxed max-w-xl">
              Imágenes del bosque que rodea a Sotobosque. Un susurro de las hojas de tilo, el crujir de las piñas bajo el calzado y la bruma matinal que abraza los troncos.
            </p>
          </div>

          {/* Grid Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {momentosFotos.map((foto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-[4/3] rounded-2xl md:rounded-[24px] overflow-hidden bg-[#2C3C2C] shadow"
              >
                <img
                  src={foto}
                  alt={`Momento ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-all duration-300" />
              </motion.div>
            ))}
          </div>

         

         

        </div>
        
      </section>

      

      {/* 05 · SERVICIOS Y COMODIDADES */}
      <ServicesSection />

    <TestimonialsSection />
      

      {/* 07 · CÓMO LLEGAR */}
      <HowToReachSection />

      {/* 08 · RESERVÁ TU FECHA */}
      <BookingCallToAction onOpenBooking={() => setIsBookingOpen(true)} />

      {/* FOOTER */}
     <Footer />

      {/* --- NOTIFICATIONS GLASS TOAST FOR BOOKING SUCCESS --- */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-6 right-6 md:left-auto md:right-12 md:max-w-md bg-[#435843] text-[#F7F4F0] p-6 rounded-[24px] shadow-2xl z-200 border border-[#F7F4F0]/20"
          >
            <div className="flex gap-4">
              <CheckCircle className="w-8 h-8 text-emerald-300 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <p className="font-serif text-lg font-medium text-white">Solicitud Recibida</p>
                <p className="font-sans text-xs leading-relaxed text-[#F7F4F0]/90 font-light">{toastMessage}</p>
                <button
                  onClick={() => setToastMessage(null)}
                  className="text-[10px] font-bold tracking-widest uppercase mt-3 place-self-start underline text-emerald-300 hover:text-white"
                >
                  Entendido
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detailed cabin modal info */}
      <CabinDetailsModal
        cabin={selectedCabin}
        onClose={() => setSelectedCabin(null)}
        onSuccessBooking={handleSuccessBooking}
      />

      {/* Sticky General Header CTA button overlay Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        onSuccessBooking={handleSuccessBooking}
      />
      <FloatingWhatsApp />
    </div>
  );
}
