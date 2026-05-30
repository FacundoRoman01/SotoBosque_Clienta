export interface Cabin {
  id: string;
  numero: string;
  nombre: string;
  tagline: string;
  huespedes: number;
  ambientes: number;
  dormitorios: number;
  banos: number;
  // precio: string;
  descripcion: string;
  isPopular?: boolean;
  imagen: string;
  galeria: string[];
  detalles: string[];
  distintivo: string[];
  comodidades: string[];
  dormir: string;
  direccion : string;
}

export const cabanasData: Cabin[] = [
  {
    id: "roble",
    numero: "CABAÑA 1",
    nombre: "CABAÑA 1",
    tagline: "IDEAL PARA FAMILIAS CON JARDÍN Y QUINCHO",
    huespedes: 6, // Ajustado por "5/6 personas"
    ambientes: 2,   //ambientes dos  0 1 planta o dos plantas
    dormitorios: 2,
    banos: 2,
    direccion: "Guaraníes entre Las Margaritas y Yanquetruz",
    // precio: "$100.000", 
    descripcion: "Cabaña distribuida en dos plantas con entrada para auto y jardín chico. Ofrece un living comedor acogedor y cocina totalmente equipada. Destaca por su cómodo quincho con parrilla, perfecto para disfrutar de asados en cualquier momento.",
    isPopular: true,
    imagen: "/img/foto_cabana_1_webP/imagen-silvia-1.webp",
    galeria: [
      "/img/foto_cabana_1_webP/imagen-silvia-1.webp",
      "/img/foto_cabana_1_webP/imagen-silvi-2.webp",
      "/img/foto_cabana_1_webP/cabanaUno_nuevo.webp",
      "/img/foto_cabana_1_webP/cabanaUno_fotonuevaDos.webp",
      "/img/foto_cabana_1_webP/imagen_silvia_nuevo.webp",
      "/img/foto_cabana_1_webP/imagen-silvia-3.webp",
      "/img/foto_cabana_1_webP/imagen-silvia-4.webp",
    ],
    detalles: [
      "2 plantas",
      "Entrada para auto",
      "Jardín chico",
      "Quincho cerrado"
    ],
    distintivo: [
      "Bañera en el dormitorio principal",
      "Quincho cerrado con parrilla",
      "Jardín privado y entrada para auto"
    ],
    comodidades: [
      "Alarma",
      "Cocina equipada",
      "Wi-Fi de alta velocidad",
      "Living comedor",
      "Ropa de cama",
      "Quincho y Parrilla"
    ],
    dormir: "Dorm. Principal (Suite): 1 matrimonial + 1 cucheta. Dorm. Secundario: Balconeado a la escalera. Living: Sofá-cama."
  },

  {
    id: "coihue",
    numero: "CABAÑA 2",
    nombre: "CABAÑA 2",
    tagline: "COMODIDAD Y DISEÑO PRÁCTICO",
    huespedes: 6,
    ambientes: 1,
    dormitorios: 2,
    banos: 1,
    direccion: "Guaraníes entre Las Margaritas y Yanquetruz",
    // precio: "$120.000",
    descripcion: "Cabaña práctica y acogedora en una sola planta. Cuenta con un cálido living con sofá cama. Su característica más distintiva es la parrilla incorporada a la cocina, ideal para cocinar y disfrutar en familia sin necesidad de salir al exterior.",
    imagen: "/img/foto-cabana-4/imagen_silvia_cabana4_5_.webp",
    galeria: [
      "/img/foto-cabana-4/imagen_silvia_cabana4_1_.webp",
      "/img/foto-cabana-4/imagen_silvia_cabana4_2_.webp",
      "/img/foto-cabana-4/imagen_silvia_cabana4_3_.webp",
      "/img/foto-cabana-4/imagen_silvia_cabana4_4_.webp",
      "/img/foto-cabana-4/imagen_silvia_cabana4_5_.webp",
      "/img/foto-cabana-4/imagen_silvia_cabana4_6_.webp",
      "/img/foto-cabana-4/imagen_silvia_cabana4_7_.webp",
    ],
    detalles: [
      "1 planta",
      "Parrilla interior",
      "Acceso directo al baño",
      "Living con sofá cama"
    ],
    distintivo: [
      "Parrilla interior incorporada a la cocina",
      "Dormitorio principal con acceso directo al baño",
      "Distribución práctica en una planta"
    ],
    comodidades: [
      "Alarma",
      "Cocina equipada",
      "Wi-Fi de alta velocidad",
      "Parrilla interior",
      "Ropa de cama",
      "Living"
    ],
    dormir: "Dormitorio 1: 1 cama matrimonial (con entrada directa al baño). Dormitorio 2 (cerrado): 1 cucheta + 1 cama extra extraíble (cama nido/abajo). Living: 1 Sofá-cama doble."
  },

  {
    id: "aromo",
    numero: "CABAÑA 3",
    nombre: "CABAÑA 3",
    tagline: "ENTRETENIMIENTO, RELAX Y GRAN CAPACIDAD",
    huespedes: 8,
    ambientes: 2,
    dormitorios: 3,
    banos: 2,
    direccion: "Tres Marías y Yanquetruz 100",
    // precio: "$72.000",
    descripcion: "La propiedad más completa, ideal para entretenimiento y relax. Distribuida en dos plantas, cuenta con cocina separada, amplio living comedor. En el exterior deslumbra con su pileta, solarium con cascada y parrilla. Además, ofrece un sector de juegos con pool y ping pong.",
    imagen: "/img/foto_cabaña_2_webP/silvia-cabana-II-1.webp",
    galeria: [
      "/img/foto_cabaña_2_webP/silvia-cabana-II-1.webp",
      "/img/foto_cabaña_2_webP/silvia-cabana-II-2.webp",
      "/img/foto_cabaña_2_webP/silvia-cabana-II-3.webp",
      "/img/foto_cabaña_2_webP/Cascada.webp",
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
    detalles: [
      "2 plantas",
      "Pileta con cascada",
      "Sector de juegos",
      "Cocina separada"
    ],
    distintivo: [
      "Pileta y solarium exterior con cascada",
      "Sector de juegos (Mesa de Pool y Ping Pong)",
      "Amplio espacio exterior con parrilla"
    ],
    comodidades: [
      "Alarma",
      "Pileta y Solarium",
      "Wi-Fi de alta velocidad",
      "Pool y Ping Pong",
      "Ropa de cama",
      "Parrilla exterior",
      "Cocina separada",
      "Living y Comedor"
    ],
    dormir: "Planta Alta - Dorm. 1: 1 cama matrimonial. Dorm. 2: 2 camas matrimoniales. Estar: 2 camas individuales. Planta Baja - Dorm. 3: Habitación con bañera."
  },
  {
    id: "lenga",
    numero: "UNIDAD",
    nombre: "UNIDAD",
    tagline: "MODERNO CON FOGÓN EXTERIOR",
    huespedes: 4, // La dueña indicó "Consultar", dejo 4 por el tipado numérico.
    ambientes: 1,
    dormitorios: 2,
    banos: 2,
    direccion: "Boulevard Nuevo Bosque entre Las Margaritas y Diag  Gertrudis.",
    // precio: "$90.000",
    descripcion: "Departamento moderno y funcional, equipado con living, comedor y cocina integrados. En el exterior ofrece un cálido fogón, un rincón perfecto para disfrutar del fuego y las noches al aire libre en buena compañía.",
    imagen: "/img/foto_cabana_3_webP/silvia-cabana-III-1.webp",
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
    detalles: [
      "1 planta",
      "Fogón exterior",
      "Suite con baño privado",
      "Ambientes integrados"
    ],
    distintivo: [
      "Fogón exterior para reuniones",
      "Dormitorio principal en suite",
      "Ambientes amplios y bien distribuidos"
    ],
    comodidades: [
      "Alarma",
      "Living y Comedor",
      "Wi-Fi de alta velocidad",
      "Cocina equipada",
      "Ropa de cama",
      "Fogón exterior"
    ],
    dormir: "Dormitorio 1: Suite con baño privado. Dormitorio 2: Estándar. (Contactar para detalle de distribución de camas)."
  },
  {
    id: "coihue",
    numero: "CASA",
    nombre: "CASA",
    tagline: "CONFORT Y ESPACIO AL AIRE LIBRE",
    huespedes: 6,
    ambientes: 1,
    dormitorios: 2,
    banos: 2,
    direccion: "Tupac Amaru entre Calchaquies y Caroyas.",
    // precio: "$120.000",
    descripcion: "Casa funcional y muy cómoda, ideal para alojar hasta 6 personas. Destaca por contar con un práctico lavadero propio y un excelente espacio exterior conformado por un solarium equipado con parrilla, perfecto para disfrutar de los días soleados.",
    imagen: "/img/foto_casa_webp/casa-silvia-1.webp",
    galeria: [
      "/img/foto_casa_webp/casa-silvia-1.webp",
      "/img/foto_casa_webp/casa-silvia-3.webp",
      "/img/foto_casa_webp/casa-silvia-5.webp",
      "/img/foto_casa_webp/casa-silvia-6.webp",
      "/img/foto_casa_webp/casa-silvia-7.webp",
      "/img/foto_casa_webp/casa-silvia-8.webp",
      "/img/foto_casa_webp/casa-silvia-9.webp",
      "/img/foto_casa_webp/casa-silvia-10.webp",
      "/img/foto_casa_webp/casa-silvia-11.webp",
      "/img/foto_casa_webp/casa-silvia-12.webp",
    ],
    detalles: [
      "1 planta",
      "Solarium exclusivo",
      "Lavadero propio",
      "Parrilla exterior"
    ],
    distintivo: [
      "Solarium exclusivo con parrilla",
      "Lavadero propio integrado",
      "2 baños para mayor comodidad"
    ],
    comodidades: [
      "Alarma",
      "Lavadero",
      "Wi-Fi",
      "Parrilla exterior",
      "Ropa de cama",
      "Solarium"
    ],
    dormir: "2 Dormitorios en total. (Plazas adaptables para 5/6 huéspedes)."
  },

];


export const momentosFotos = [
  "/img/Fotos_bosque/foto_bosque_1.webp",
  // "/img/Fotos_bosque/foto_bosque_2.webp",
  // "/img/Fotos_bosque/foto_bosque_3.webp",
  // "/img/Fotos_bosque/foto_bosque_4.webp", 
  // "/img/Fotos_bosque/foto_bosque_5.webp",
  "/img/Fotos_bosque/foto_bosque_6.webp",
  // "/img/Fotos_bosque/foto_bosque_7.webp",
  "/img/Fotos_bosque/foto_bosque_8.webp",
  // "/img/Fotos_bosque/foto_bosque_9.webp",
  // "/img/Fotos_bosque/foto_bosque_10.webp",
  "/img/Fotos_bosque/foto_bosque_11.webp",
  "/img/Fotos_bosque/foto_bosque_12.webp",
  "/img/Fotos_bosque/foto_bosque_13.webp",
  "/img/Fotos_bosque/foto_bosque_14.webp",

  // ...agrega todas las que necesites
];
