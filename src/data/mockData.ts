export interface Cabin {
  id: string;
  numero: string;
  nombre: string;
  tagline: string;
  huespedes: string;
  ambientes: number;
  dormitorios: string;
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
  mapaIframe: string;
}

export const cabanasData: Cabin[] = [
  {
    id: "cabanaUno",
    numero: "CABAÑA 1",
    nombre: "CABAÑA 1",
    tagline: "IDEAL PARA FAMILIAS CON JARDÍN Y QUINCHO",
    huespedes: "5/6", // Ajustado por "5/6 personas"
    ambientes: 3,   //ambientes dos  0 1 planta o dos plantas
    dormitorios: "2",
    banos: 2,
    direccion: "Guaraníes entre Las Margaritas y Yanquetruz", 
    mapaIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3140.5500359925104!2d-57.57092992410217!3d-38.080858971909905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDA0JzUxLjEiUyA1N8KwMzQnMDYuMSJX!5e0!3m2!1ses!2ses!4v1780355874154!5m2!1ses!2ses" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    // precio: "$100.000", 
    descripcion: "Cabaña distribuida en dos plantas con entrada para auto y jardín chico. Ofrece un living comedor acogedor y cocina totalmente equipada. Destaca por su cómodo quincho con parrilla, perfecto para disfrutar de asados en cualquier momento.",
    isPopular: true,
    imagen: "/img/foto_cabana_1_webP/foto_cabanaUno_afuera.webp",
    galeria: [
      "/img/foto_cabana_1_webP/foto_cabanaUno_afuera.webp",
      "/img/foto_cabana_1_webP/imagen-silvi-2.webp",
      "/img/foto_cabana_1_webP/cabanaUno_nuevo.webp",
      "/img/foto_cabana_1_webP/cabanaUno_fotonuevaDos.webp",
      "/img/foto_cabana_1_webP/imagen_silvia_nuevo.webp",
      "/img/foto_cabana_1_webP/imagen-silvia-3.webp",
      "/img/foto_cabana_1_webP/imagen-silvia-4.webp",
      "/img/foto_cabana_1_webP/foto-a.webp",
      "/img/foto_cabana_1_webP/foto-b.webp",
      "/img/foto_cabana_1_webP/foto-c.webp",
      "/img/foto_cabana_1_webP/foto-d.webp",
      "/img/foto_cabana_1_webP/foto-e.webp",
      "/img/foto_cabana_1_webP/foto-f.webp",
      "/img/foto_cabana_1_webP/foto-g.webp",
      "/img/foto_cabana_1_webP/imagen-silvia-5.webp"
      
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
      "Quincho y Parrilla",
      "Hogar",
      "Calefacción",
      "Pequeño jardin"
    ],
    dormir: "Camas: 1 matrimonial; 3 individuales y sofá cama doble."
  },

  {
    id: "cabanaDos",
    numero: "CABAÑA 2",
    nombre: "CABAÑA 2",
    tagline: "COMODIDAD Y DISEÑO PRÁCTICO",
    huespedes: "5/6",
    ambientes: 3,
    dormitorios: "2",
    banos: 1,
    direccion: "Guaraníes entre Las Margaritas y Yanquetruz",
        mapaIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3140.5500359925104!2d-57.57092992410217!3d-38.080858971909905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDA0JzUxLjEiUyA1N8KwMzQnMDYuMSJX!5e0!3m2!1ses!2ses!4v1780355874154!5m2!1ses!2ses" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
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
      "/img/foto_cabaña_2_webP/fotocabana2-a.webp",
      "/img/foto_cabaña_2_webP/fotocabana2-b.webp",
      "/img/foto_cabaña_2_webP/fotocabana2-c.webp",
      "/img/foto_cabaña_2_webP/fotocabana2-d.webp",
      "/img/foto_cabaña_2_webP/fotocabana2-e.webp",
      
    ],
    detalles: [
      "1 planta",
      "Parrilla interior",
      "Acceso directo al baño",
      "Living con sofá cama"
    ],
    distintivo: [
      "Parrilla interior incorporada a la cocina",
      "bañera  isla y baño en suite",
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
    dormir: "Dormitorios principal con cama matrimonial,  bañera  isla y baño en suite.  Dormitorio secundario: 1 cucheta + 1 cama extra extraible (cama nido/abajo) y en el living: 1 sofá-cama doble."
  },

  {
    id: "cabanaTres",
    numero: "CABAÑA 3",
    nombre: "CABAÑA 3",
    tagline: "ENTRETENIMIENTO, RELAX Y GRAN CAPACIDAD",
    huespedes: "7/8",
    ambientes: 6,
    dormitorios: "3 + 1 holl de distribución",
    banos: 2,
    direccion: "Tres Marías y Yanquetruz 100",
    mapaIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3140.5416179168888!2d-57.571286924102026!3d-38.08105497190984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDA0JzUxLjgiUyA1N8KwMzQnMDcuNCJX!5e0!3m2!1ses!2ses!4v1780356153876!5m2!1ses!2ses" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
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
    dormir: "Planta Alta: 1 dormitorio matrimonial. -  1 dormitorio c/2 camas individual.  -   Holl de distribución 2 camas individuales.  - planta baja: 1 dormitorio matrimonial con jacuzzi (bañera) en el dormitorio."
  },
  {
    id: "unidad",
    numero: "UNIDAD",
    nombre: "UNIDAD",
    tagline: "MODERNO CON FOGÓN EXTERIOR",
    huespedes: "4/6", // La dueña indicó "Consultar", dejo 4 por el tipado numérico.
    ambientes: 3,
    dormitorios: "2",
    banos: 2,
    direccion: "Boulevard Nuevo Bosque entre Las Margaritas y Diag  Gertrudis.",
    mapaIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3140.6230483719555!2d-57.566501924102134!3d-38.07915897191023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDA0JzQ1LjAiUyA1N8KwMzMnNTAuMSJX!5e0!3m2!1ses-419!2sar!4v1780356226358!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
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
      "Excelente calefacción por radiadores con caldera",
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
    dormir: "Dormitorio 1 : 1 cama matrimonial, 2 individuales y sofá cama doble en el living  - dormitorio 2 : 2 camas individuales."
  },
  {
    id: "casa",
    numero: "CASA",
    nombre: "CASA",
    tagline: "CONFORT Y ESPACIO AL AIRE LIBRE",
    huespedes: "5",
    ambientes: 3,
    dormitorios: "2",
    banos: 2,
    direccion: "Tupac Amaru entre Calchaquies y Caroyas.",
    mapaIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.3088552493678!2d-57.5650881!3d-38.086474100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584e0b9e4d1ff69%3A0xc0e2d4a6c17d0cdd!2sT%C3%BApac%20Amaru%20%26%20Los%20Calchaquies%2C%20B7600%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1780356291090!5m2!1ses!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
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
      "/img/foto_casa_webp/casa-a.webp",
      "/img/foto_casa_webp/casa-b.webp",
      
    ],
    detalles: [
      "1 planta",
      "Solarium exclusivo",
      "Lavadero propio",
      "Parrilla exterior"
    ],
    distintivo: [
      "Solarium exclusivo con parrilla",
      "Galeria amplia",
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
    dormir: "1 cama matrimonial, 2 camas individuales y sofá cama en el living"
  },
  //nuevo
  {
    id: "duplex-punta-mogotes",
    numero: "DUPLEX",
    nombre: "Duplex Punta Mogotes",
    tagline: "CONFORT Y CERCANÍA A LA PLAYA",
    huespedes: "6",
    ambientes: 4,
    dormitorios: "2",
    banos: 2,
    direccion: "Mediano 3362. A 4 cuadras de la playa, balneario 2.",
mapaIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.612679576103!2d-57.5487663!3d-38.0794004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584e74c388115b1%3A0x287d5b3d2d563035!2sMedrano%203362%2C%20B7603DNL%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1788370096996!5m2!1ses!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>',
    // precio: "$150.000",
    descripcion: "Hermoso dúplex con capacidad para 6 huéspedes, ubicado a solo 4 cuadras de la playa y del balneario 2. Cuenta con amplio living-comedor, patio con parrilla y espacio privado para guardar un vehículo.",
    imagen: "/img/casa_puntamogotes/foto2_puntamogotes.webp",
    galeria: [
      "/img/casa_puntamogotes/foto2_puntamogotes.webp",
      "/img/casa_puntamogotes/foto1_puntamogotes.webp",
      "/img/casa_puntamogotes/foto3_puntamogotes.webp",
      "/img/casa_puntamogotes/foto4_puntamogotes.webp",
      "/img/casa_puntamogotes/foto5_puntamogotes.webp",
      "/img/casa_puntamogotes/foto6_puntamogotes.webp",
      "/img/casa_puntamogotes/foto7_puntamogotes.webp",
      "/img/casa_puntamogotes/foto8_puntamogotes.webp",
    ],
    detalles: [
      "2 plantas",
      "Patio con parrilla",
      "Espacio para vehículo",
      "A 4 cuadras del mar"
    ],
    distintivo: [
      "A 4 cuadras de la playa",
      "Espacio privado para guardar un vehículo",
      "Amplio living-comedor para disfrutar en familia"
    ],
    comodidades: [
      "Wi-Fi",
      "Patio con parrilla",
      "Espacio para guardar un vehículo",
      "A 4 cuadras del Mar"
    ],
    dormir: "Planta baja: dormitorio matrimonial. Planta alta: dos dormitorios con 2 camas individuales."
  },

];


export const momentosFotos = [
  "/img/Fotos_bosque/foto_bosque_1.webp",
  // "/img/Fotos_bosque/foto_bosque_2.webp",
  // "/img/Fotos_bosque/foto_bosque_3.webp",
  // "/img/Fotos_bosque/foto_bosque_4.webp", 
  // "/img/Fotos_bosque/foto_bosque_5.webp",
  "/img/foto-casa-de-te-y-feria/casa-de-te-4.webp",
  // "/img/Fotos_bosque/foto_bosque_7.webp",
  "/img/foto-casa-de-te-y-feria/feria-de-Artesanos.webp",
  // "/img/Fotos_bosque/foto_bosque_9.webp",
  // "/img/Fotos_bosque/foto_bosque_10.webp",
  "/img/Fotos_bosque/foto_bosque_11.webp",
  "/img/Fotos_bosque/foto_bosque_12.webp",
  "/img/foto-casa-de-te-y-feria/casa-de-te-2.webp",
  "/img/Fotos_bosque/foto_bosque_14.webp",

  // ...agrega todas las que necesites
];
