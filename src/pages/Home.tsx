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
import { Cabin, momentosFotos } from "../data/mockData";
import Footer from "../components/Footer";
import TestimonialsSection from "../components/TestimonialsSection";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Momentos from "../components/Momentos";

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
      
      <Momentos momentosFotos={momentosFotos} />
      

      {/* 05 · SERVICIOS Y COMODIDADES */}
      {/* <ServicesSection /> */}

    <TestimonialsSection />
      

      {/* 07 · CÓMO LLEGAR */}
      <HowToReachSection />

      {/* 08 · RESERVÁ TU FECHA */}
      <BookingCallToAction onOpenBooking={() => setIsBookingOpen(true)} />

      {/* FOOTER */}
     <Footer />

      {/* --- NOTIFICATIONS GLASS TOAST FOR BOOKING SUCCESS --- */}
      {/* <AnimatePresence>
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
      </AnimatePresence> */}

      {/* Detailed cabin modal info */}
      <CabinDetailsModal
        cabin={selectedCabin}
        onClose={() => setSelectedCabin(null)}
        onSuccessBooking={handleSuccessBooking}
      />


      

      {/* Sticky General Header CTA button overlay Modal */}
      {/* <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        onSuccessBooking={handleSuccessBooking}
      /> */}
      <FloatingWhatsApp />
    </div>
  );
}
