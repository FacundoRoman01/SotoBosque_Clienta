import { motion, AnimatePresence } from "motion/react";

interface ImageModalProps {
  imageUrl: string | null;
  onClose: () => void;
}

export default function ImageModal({ imageUrl, onClose }: ImageModalProps) {
  return (
    <AnimatePresence>
      {imageUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // Cierra el modal si tocás el fondo oscuro
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
        >
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            src={imageUrl}
            alt="Vista ampliada"
            className="max-h-full max-w-full object-contain rounded-md shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()} // Evita que se cierre si hacés clic en la foto misma
          />
          
          {/* Botón de cerrar */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}