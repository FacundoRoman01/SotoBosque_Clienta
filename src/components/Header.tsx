import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "BIENVENIDA", href: "#bienvenida" },
    { label: "LOS ALOJAMIENTOS", href: "#cabanas" },
    //  { label: "NOSOTROS", href: "#nosotros" },
    { label: "MOMENTOS", href: "#momentos" },
    { label: "UBICACIÓN", href: "#ubicacion" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm border-b border-[#435843]/10 py-3 text-[#435843]"
          : "bg-transparent py-4 md:py-6 text-white" // <-- Ajuste: Menos padding vertical inicial en mobile
      }`}
    >
      {/* Ajuste: padding px-4 en vez de px-6 para ganar más espacio en pantallas chicas */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between">
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
            className={`h-10 md:h-15 w-auto transition-all duration-300 ${
              !isScrolled ? "brightness-0 invert" : ""
            }`} 
          />
          {/* <span className={`font-serif text-lg md:text-2xl tracking-wide font-medium transition-colors duration-300 ${
            !isScrolled ? "text-white" : "text-[#435843]"
          }`}>
            Cabañas Sylviane
          </span> */}
        </a>

        {/* Desktop Navigation Links (Igual) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-11">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-[11px] lg:text-xs tracking-[0.2em] font-sans font-semibold hover:opacity-80 relative py-1 group uppercase transition-opacity"
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 w-full h-[1.5px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                isScrolled ? "bg-[#435843]" : "bg-white"
              }`} />
            </a>
          ))}
        </nav>

        {/* CTA Button Desktop (Igual) */}
         <div className="hidden md:block">
          {/* <button
            onClick={onOpenBooking}
            className={`cursor-pointer px-7 py-2.5 rounded-full font-sans text-xs tracking-[0.18em] font-bold uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm ${
              isScrolled
                ? "bg-[#435843] text-[#FAF8F5] hover:bg-[#2C3C2C]"
                : "bg-[#FAF8F5] text-[#435843] hover:bg-white"
            }`}
          >
            RESERVAR
          </button> */}
        </div> 

       
        <div className="flex md:hidden items-center gap-2"> 
          {/* <button
            onClick={onOpenBooking}
            className={`cursor-pointer px-3 py-1.5 rounded-full font-sans text-[9px] tracking-wider font-semibold uppercase ${
              isScrolled
                ? "bg-[#435843] text-[#FAF8F5]"
                : "bg-[#FAF8F5] text-[#435843]"
            }`}
          >
            RESERVAR
          </button> */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 hover:opacity-85"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay (Igual) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] h-screen bg-[#FAF8F5] border-t border-[#435843]/10 p-8 flex flex-col gap-6 animate-fade-in text-[#435843] z-50">
          <nav className="flex flex-col gap-5">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-sm tracking-widest font-sans font-medium border-b border-[#435843]/10 pb-3"
              >
                {item.label}
              </a>
            ))}
          </nav>
          {/* <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full text-center py-3 bg-[#435843] text-[#FAF8F5] rounded-full text-xs tracking-widest font-medium uppercase mt-2 shadow-sm"
          >
            RESERVAR AHORA
          </button> */}
        </div>
      )}
    </header>
  );
}