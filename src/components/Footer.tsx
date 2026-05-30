import { MapPin, Phone, Mail, Instagram, Compass, Trees, CheckCircle, Quote, Star, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
     <footer className="bg-[#2C3C2C] text-[#F7F4F0]/80 py-16 px-6 md:px-12 border-t border-emerald-800/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Columns definitions */}
            <div className="flex flex-col gap-4">
              {/* Logo */}
              <a
                href="#"
                className="flex items-center gap-2 md:gap-3.5 group transition-opacity hover:opacity-90"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <img 
                  src="/img/logo/logo-horizontal_sylvina.svg" 
                  alt="Logo de Cabañas Sylviane" 
                  className="h-10 md:h-12 w-auto transition-all duration-300 brightness-0 invert"
                />
                {/* <span className="font-serif text-lg md:text-2xl tracking-wide font-medium text-white transition-colors duration-300">
                  Cabañas Sylviane
                </span> */}
              </a>
              <p className="font-sans text-xs font-light leading-relaxed text-[#F7F4F0]/70">
                La naturaleza te mima, el bosque te hospeda. Cabañas de lujo sustentables rodeadas de naturaleza virgen.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-sm tracking-widest uppercase font-semibold text-[#F7F4F0] mb-4">Contacto</h4>
              <ul className="flex flex-col gap-3 font-sans text-xs font-light text-[#F7F4F0]/75">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#F7F4F0]/60" />
                  2235 75-5054
                </li>
                {/* <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#F7F4F0]/60" />
                  reservas@sotobosque.com
                </li> */}
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F7F4F0]/60" />
                  Los Tilos s/n, Sierra de los Padres
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-sm tracking-widest uppercase font-semibold text-[#F7F4F0] mb-4">Enlaces Rápidos</h4>
              <ul className="flex flex-col gap-2 font-sans text-xs font-light text-[#F7F4F0]/75">
                <li><a href="#bienvenida" className="hover:text-white transition-colors">Bienvenida</a></li>
                <li><a href="#cabanas" className="hover:text-white transition-colors">Las 4 Cabañas</a></li>
                <li><a href="#momentos" className="hover:text-white transition-colors">Momentos en el Bosque</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Servicios y Comodidades</a></li>
                <li><a href="#como-llegar" className="hover:text-white transition-colors">Cómo Llegar</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-sm tracking-widest uppercase font-semibold text-[#F7F4F0] mb-4">Síguenos</h4>
              <p className="font-sans text-xs font-light text-[#F7F4F0]/70 mb-3 leading-relaxed">Suscríbete a nuestra newsletter para enterarte de novedades y cancelaciones de cortesía.</p>
              <div className="flex gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-[#435843] text-[#F7F4F0] rounded-xl hover:bg-[#F7F4F0] hover:text-[#435843] transition-all"
                  aria-label="Instagram Link"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#F7F4F0]/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-[#F7F4F0]/50">
            <p>Cabañas Sylviane Cabañas © 2026. Todos los derechos reservados.</p>
            <p className="flex items-center gap-1.5 mt-2 sm:mt-0">
              Desarrollado por ASDASDSAD.
            </p>
          </div>

        </div>
      </footer>
  )
}

export default Footer