export interface Cabin {
  id: string;
  numero: string;
  nombre: string;
  tagline: string;
  huespedes: number;
  m2: number;
  dormitorios: number;
  banos: number;
  precio: string;
  descripcion: string;
  isPopular?: boolean;
  imagen: string;
  galeria: string[];
  detalles: string[];
  distintivo: string[];
  comodidades: string[];
  dormir: string;
}

export const cabanasData: Cabin[] = [
  {
    id: "roble",
    numero: "CABAÑA 01",
    nombre: "Roble",
    tagline: "LA CABAÑA INSIGNIA",
    huespedes: 4,
    m2: 75,
    dormitorios: 2,
    banos: 2,
    precio: "$98.000",
    descripcion: "Roble es la más amplia del complejo. Su living de doble altura abre sobre un ventanal de 4 metros que enmarca la arboleda como un cuadro vivo. La cocina integrada con isla de mármol travertino, el hogar a leña empotrado y la galería techada con deck de quebracho hacen que cualquier momento del día — un café temprano, una cena larga, una siesta de invierno — se sienta especial.",
    isPopular: true,
   imagen: "/img/foto_cabana_1_webP/foto-silvia-cabana-afuera.webp",
    galeria: [
      "/img/foto_cabana_1_webP/foto-silvia-cabana-afuera.webp",
      "/img/foto_cabana_1_webP/foto-silvia-cama.webp",
      "/img/foto_cabana_1_webP/foto-silvia-living.webp",
      "/img/foto_cabana_1_webP/imagen-silvia-1.webp",
      "/img/foto_cabana_1_webP/imagen-silvi-2.webp",
      "/img/foto_cabana_1_webP/imagen-silvia-3.webp",
      "/img/foto_cabana_1_webP/imagen-silvia-4.webp",
      "/img/foto_cabana_1_webP/imagen-silvia-5.webp",
      "/img/foto_cabana_1_webP/imagen-silvia-6.webp",
      "/img/foto_cabana_1_webP/imagen-silvia-7.webp",
      "/img/foto_cabana_1_webP/imagen-silivia-8.webp",
      "/img/foto_cabana_1_webP/imagen-silvia-9.webp",
      "/img/foto_cabana_1_webP/imagen-silvia-10.webp"
    ],
    detalles: ["Hogar a leña", "Galería privada", "Doble altura", "Deck de madera", "Ventilación cruzada", "Cafetera de especialidad"],
    distintivo: [
      "Ventanal panorámico al bosque",
      "Galería con jacuzzi privado",
      "Hogar a leña central"
    ],
    comodidades: [
      "Hogar a leña",
      "Jacuzzi exterior",
      "Estufa a leña + losa radiante",
      "Lavavajillas",
      "Cafetera de espresso",
      "Ropa blanca premium",
      "Parrilla techada",
      "Wi-Fi fibra óptica",
      "Cocina equipada",
      "Smart TV",
      "Sommiers king",
      "Estacionamiento techado"
    ],
    dormir: "1 cama king · 2 camas individuales"
  },
  {
    id: "aromo",
    numero: "CABAÑA 02",
    nombre: "Aromo",
    tagline: "PARA PAREJAS, ÍNTIMA Y CÁLIDA",
    huespedes: 2,
    m2: 48,
    dormitorios: 1,
    banos: 1,
    precio: "$72.000",
    descripcion: "Aromo es pequeña, perfumada y profundamente privada. Diseñada especialmente para parejas que buscan intimidad y calidez, está rodeada por un denso bosquecillo de tilos y retamas silvestres. Cuenta con un deck elevado donde se encuentra el hot tub y ventanales integrales que permiten contemplar los colores del atardecer directamente desde la cama.",
   imagen: "/img/foto_cabaña_2_webP/silvia-cabana-II-1.webp",
    
   galeria: [
      "/img/foto_cabaña_2_webP/silvia-cabana-II-1.webp", 
      "/img/foto_cabaña_2_webP/silvia-cabana-II-2.webp",
      "/img/foto_cabaña_2_webP/silvia-cabana-II-3.webp",
      
      "/img/foto_cabaña_2_webP/silvia-cabana-II-4.webp",
      "/img/foto_cabaña_2_webP/silvia-cabana-II-5.webp",
      "/img/foto_cabaña_2_webP/silvia-cabana-II-6.webp", 
      "/img/foto_cabaña_2_webP/silvia-cabana-II-7.webp",
      "/img/foto_cabaña_2_webP/silvia-cabana-II-8.webp",
      "/img/foto_cabaña_2_webP/silvia-cabana-II-9.webp",
      "/img/foto_cabaña_2_webP/silvia-cabana-II-10.webp",
      "/img/foto_cabaña_2_webP/silvia-cabana-II-11.webp",
      "/img/foto_cabaña_2_webP/silvia-cabana-II-12.webp",
      "/img/foto_cabaña_2_webP/silvia-cabana-II-13.webp",
      "/img/foto_cabaña_2_webP/silvia-cabana-II-14.webp",
      "/img/foto_cabaña_2_webP/silvia-cabana-II-15.webp",
      "/img/foto_cabaña_2_webP/silvia-cabana-II-16.webp",
      "/img/foto_cabaña_2_webP/silvia-cabana-II-17.webp",
      "/img/foto_cabaña_2_webP/silvia-cabana-II-18.webp"
    ],
    detalles: ["Hot tub exterior", "Cama King size", "Perfumada naturalmente", "Ventanales al bosque", "Parrilla privada", "Amenities orgánicos"],
    distintivo: [
      "Hot tub exterior en el deck",
      "Rodeada de tilos fragantes",
      "Aislamiento forestal absoluto"
    ],
    comodidades: [
      "Hot tub privado",
      "Wi-Fi de alta velocidad",
      "Calefacción por radiadores",
      "Amenities orgánicos",
      "Cama King premiun",
      "Plentitud visual",
      "Parrilla privada",
      "Cafetera Nespresso",
      "Caja de seguridad",
      "Ropa de cama egipcia"
    ],
    dormir: "1 cama king de tres metros"
  },
  {
    id: "lenga",
    numero: "CABAÑA 03",
    nombre: "Lenga",
    tagline: "REFUGIO DE ALTURA",
    huespedes: 4,
    m2: 70,
    dormitorios: 2,
    banos: 1,
    precio: "$90.000",
    descripcion: "Lenga se alza sobre pilotes de madera de quebracho, logrando una vista inigualable sobre la copa de los árboles y las sierras lejanas. El sol del atardecer inunda la sala principal, convirtiendo la hora dorada en un ritual silencioso y reparador. Ideal para almas aventureras que no renuncian al confort ejecutivo.",
   // Imagen principal (sin el "public")
    imagen: "/img/foto_cabana_3_webP/silvia-cabana-III-1.webp",
    
    // Galería completa con las 17 fotos
    galeria: [
      "/img/foto_cabana_3_webP/silvia-cabana-III-1.webp",
      "/img/foto_cabana_3_webP/silvia-cabana-III-2.webp",
      "/img/foto_cabana_3_webP/silvia-cabana-III-3.webp",
      "/img/foto_cabana_3_webP/silvia-cabana-III-4.webp",
      "/img/foto_cabana_3_webP/silvia-cabana-III-5.webp",
      "/img/foto_cabana_3_webP/silvia-cabana-III-6.webp",
      "/img/foto_cabana_3_webP/silvia-cabana-III-7.webp",
      "/img/foto_cabana_3_webP/silvia-cabana-III-8.webp",
      "/img/foto_cabana_3_webP/silvia-cabana-III-9.webp",
      "/img/foto_cabana_3_webP/silvia-cabana-III-10.webp",
      "/img/foto_cabana_3_webP/silvia-cabana-III-11.webp",
      "/img/foto_cabana_3_webP/silvia-cabana-III-12.webp",
      "/img/foto_cabana_3_webP/silvia-cabana-III-13.webp",
      "/img/foto_cabana_3_webP/silvia-cabana-III-14.webp",
      "/img/foto_cabana_3_webP/silvia-cabana-III-15.webp",
      "/img/foto_cabana_3_webP/silvia-cabana-III-16.webp",
      "/img/foto_cabana_3_webP/silvia-cabana-III-17.webp"
    ],
    detalles: ["Terraza mirador", "Desayuno seco", "Ducha escocesa", "Cava de vinos seleccionados", "Calefacción central", "Smart TV"],
    distintivo: [
      "Terraza mirador elevada",
      "Ducha escocesa relajante",
      "Cava de vinos propia"
    ],
    comodidades: [
      "Terraza con solárium",
      "Cava climatizada",
      "Losa radiante",
      "Ducha con hidromasaje",
      "Sommiers premium",
      "Hogar a leña moderno",
      "Wi-Fi fibra óptica",
      "Parrilla completa",
      "Ventanales rebatibles",
      "Estacionamiento propio",
      "Desayuno seco artesanal"
    ],
    dormir: "1 cama queen · 2 camas individuales"
  },
  {
    id: "coihue",
    numero: "CABAÑA 04",
    nombre: "Coihue",
    tagline: "SANTUARIO DE CALMA Y SILENCIO",
    huespedes: 6,
    m2: 95,
    dormitorios: 3,
    banos: 2,
    precio: "$120.000",
    descripcion: "Coihue es la expresión máxima de la elegancia alpina integrada. Con capacidad para grupos familiares sofisticados, ofrece una pileta climatizada privada in-out integrada a la galería, ambientes majestuosos revestidos en madera de alerce, una cocina de chef completamente equipada y un hogar a leña colosal.",
    imagen: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1200",
    galeria: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800"
    ],
    detalles: ["Piscina climatizada integrada", "Cocina gourmet", "Asador exterior", "Tres dormitorios suites", "Hogar a leña gigante", "Estacionamiento cubierto"],
    distintivo: [
      "Piscina climatizada in-out",
      "Cocina de nivel gourmet",
      "Gran chimenea de piedra"
    ],
    comodidades: [
      "Piscina climatizada",
      "Cocina semi-industrial",
      "Chimenea gigante",
      "Asador criollo exterior",
      "Tres baños en suite",
      "Calefacción centralizada",
      "Smart TV 65''",
      "Wi-Fi fibra óptica",
      "Sommiers King premium",
      "Sábanas de 400 hilos",
      "Cafetera superautomática"
    ],
    dormir: "2 camas king · 2 camas individuales"
  }
];

export const testimonios = [
  {
    id: 1,
    autor: "Laura & Martín",
    cabana: "Aromo",
    comentario: "Sotobosque superó todas nuestras expectativas. El silencio es absoluto y el aroma a leña con los tilos de fondo te desconecta de la rutina de inmediato. Un lugar del que cuesta volverse."
  },
  {
    id: 2,
    autor: "Familia Rodríguez",
    cabana: "Roble",
    comentario: "Los ventanales de doble altura en la cabaña Roble te hacen sentir que estás durmiendo literalmente al aire libre, pero con el confort y el abrigo del hogar a leña. Excelente servicio y detalles de calidad."
  }
];

export const momentosFotos = [
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=600"
];
