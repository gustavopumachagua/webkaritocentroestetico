import * as siteEn from "./site.en";
import { imageAssets } from "@/assets/images";
import { cloneMutableValue, syncMutableValue } from "@/utils/mutableData";

export const site = {
  name: "Karito Centro Estetico",
  shortName: "Karito",
  brandMark: "Karito Centro Estetico",
  brandName: "Karito Centro Estetico",
  brandDescriptor: "Centro Estetico",
  tagline: "Belleza consciente, resultados visibles y bienestar en cada cita.",
  footerDescription:
    "Una base profesional para una landing de centro estetico: cercana, elegante y facil de escalar con nuevas paginas, formularios o reservas online.",
};

export const headerNavigation = [
  { label: "Inicio", href: "/", hash: "#beneficios" },
  { label: "Nosotros", href: "/nosotros" },
  {
    label: "Servicios",
    href: "/",
    hash: "#servicios",
    submenu: [
      { label: "Limpiezas Faciales", href: "/limpiezas-faciales" },
      { label: "Tratamientos Faciales", href: "/tratamientos-faciales" },
      { label: "Tratamientos corporales", href: "/tratamientos-corporales" },
    ],
  },
  { label: "Promociones", href: "/", hash: "#promociones" },
  { label: "Preguntas", href: "/", hash: "#preguntas" },
  { label: "Ubicacion", href: "/", hash: "#ubicacion" },
];

export const hero = {
  autoplayMs: 5000,
  slides: [
    {
      id: "masaje-pareja",
      imageSrc: imageAssets.services.hero1,
      primaryCta: { label: "Explorar", href: "#servicios" },
      secondaryCta: {
        label: "Contactar",
        href: "https://api.whatsapp.com/message/EZSTNTZEBGBAK1",
      },
    },
    {
      id: "ritual-sensorial",
      imageSrc: imageAssets.services.hero2,
      primaryCta: { label: "Explorar", href: "#servicios" },
      secondaryCta: {
        label: "Contactar",
        href: "https://api.whatsapp.com/message/EZSTNTZEBGBAK1",
      },
    },
    {
      id: "day-spa",
      imageSrc: imageAssets.services.hero3,
      primaryCta: { label: "Explorar", href: "#servicios" },
      secondaryCta: {
        label: "Contactar",
        href: "https://api.whatsapp.com/message/EZSTNTZEBGBAK1",
      },
    },
  ],
};

export const servicesIntro = {
  eyebrow: "Nuestros tratamientos",
  titleStart: "Tratamientos de",
  titleHighlight: "Medicina Estetica, ",
  titleEnd: "Facial y Corporal",
  description:
    "Tratamientos de medicina estética, facial y corporal diseñados para mejorar la apariencia, rejuvenecer la piel y realzar la belleza natural mediante técnicas seguras y no invasivas.",
  pills: [],
};

export const services = [
  {
    id: "facial-cleanse",
    title: "Limpiezas Faciales",
    description:
      "Rutinas especializadas que oxigenan, purifican y devuelven la luminosidad natural de tu piel.",
    detail:
      "Incluye evaluación previa para personalizar cada tratamiento según tus necesidades.",
    href: "/limpiezas-faciales",
  },
  {
    id: "facial-treatment",
    title: "Tratamientos Faciales",
    description:
      "Protocolos diseñados para mejorar la firmeza, potenciar la hidratación y lograr una piel visiblemente más uniforme.",
    detail:
      "Sesiones personalizadas y adaptadas a las necesidades específicas de tu piel.",
    href: "/tratamientos-faciales",
  },
  {
    id: "body-treatment",
    title: "Tratamientos Corporales",
    description:
      "Experiencias que integran tecnología avanzada, técnicas de moldeado y bienestar integral para potenciar tus resultados.",
    detail: "Planes diseñados según tus objetivos.",
    href: "/tratamientos-corporales",
  },
];

export const promotionsIntro = {
  eyebrow: "Promociones del mes",
  title:
    "Aprovecha descuentos y paquetes exclusivos en tratamientos faciales, corporales y mas.",
  description: "Haz clic y descubre la promo ideal para ti.",
  pills: [],
  primaryCta: {
    label: "Ver promociones",
    href: "/promociones",
  },
};

export const promotions = [
  {
    id: "limpiezas",
    eyebrow: "Promociones",
    title: "Limpieza Facial",
    description:
      "Promoción ideal para renovar la piel, mejorar la limpieza del rostro y devolver frescura y luminosidad con mejor precio.",
  },
  {
    id: "medi-packs",
    eyebrow: "Promociones",
    title: "Botox",
    description:
      "Promoción pensada para suavizar líneas de expresión y mantener un resultado natural con una evaluación personalizada.",
  },
  {
    id: "sueroterapia",
    eyebrow: "Promociones",
    title: "Peptonas",
    description:
      "Promoción enfocada en bioestimulación, hidratación y mejora de la calidad de la piel con enfoque progresivo.",
  },
  {
    id: "corporales",
    eyebrow: "Promociones",
    title: "Ácido hialurónico",
    description:
      "Promoción orientada a definición, hidratación y armonización facial según la zona y el resultado que buscas.",
  },
  {
    id: "faciales",
    eyebrow: "Promociones",
    title: "Limpieza facial profunda",
    description:
      "Promoción diseñada para purificar la piel en profundidad, desobstruir poros y dejar el rostro más limpio y revitalizado.",
  },
  {
    id: "depilacion",
    eyebrow: "Promociones",
    title: "Novuma",
    description:
      "Promoción corporal pensada para trabajar contorno, firmeza y una mejor apariencia de la piel con un plan personalizado.",
  },
];

export const faqIntro = {
  eyebrow: "Antes de tu cita",
  title: "Preguntas frecuentes",
  description:
    "Información clara y fácil de entender para que encuentres rápidamente respuestas sobre atención, precios, citas y resultados antes de reservar.",
};

export const faqs = [
  {
    question: "¿Que tipo de tratamientos ofrecen?",
    answer:
      "Ofrecemos una amplia variedad de tratamientos faciales y corporales,Limpiezas Faciales y promociones especiales, diseñadas para adaptarse a diferentes necesidades estéticas y de bienestar.",
  },
  {
    question: "¿Cuales son los precios de los tratamientos?",
    answer:
      "Los precios varían según el tipo de tratamiento, la duración y si forman parte de alguna promoción vigente. Podemos asesorarte por WhatsApp y recomendarte la opción más adecuada según tus objetivos.",
  },
  {
    question: "¿Necesito agendar una cita?",
    answer:
      "Si, recomendamos agendar con anticipacion para asegurar tu horario ideal y prepararte una atencion personalizada desde tu llegada al centro.",
  },
  {
    question: "¿Que tipo de resultados puedo esperar?",
    answer:
      "Los resultados varían según el tratamiento elegido, las características de tu piel o necesidades corporales y la constancia en el plan recomendado. Nuestro enfoque es lograr resultados visibles, realistas y alineados con una evaluación profesional personalizada.",
  },
  {
    question: "¿Cuántas sesiones necesito para ver resultados?",
    answer:
      "Depende del tratamiento y de tus objetivos. En muchos casos se recomienda un plan de varias sesiones para lograr resultados óptimos y duraderos.",
  },
  {
    question: "¿Qué cuidados debo tener después de un tratamiento?",
    answer:
      "Te brindaremos recomendaciones personalizadas al finalizar cada sesión para potenciar los resultados y cuidar tu piel.",
  },
];

export const whyChooseUs = {
  eyebrow: "Karito Centro Estetico",
  title: "¿Por que elegirnos?",
  lead: "Karito Centro Estetico combina experiencia, atencion cercana y rituales pensados para que cada visita se sienta especial.",
  description:
    "Ofrecemos protocolos personalizados diseñados para resaltar tu belleza única, en ambientes armoniosos que invitan al descanso y la confianza. Brindamos una experiencia premium que cuida no solo el resultado estético, sino también el bienestar integral de cada clienta.",
  description1:
    "Creamos protocolos personalizados que realzan tu belleza única, en ambientes armoniosos que invitan al descanso y la confianza. Nuestra experiencia premium no solo busca resultados estéticos visibles, sino también tu bienestar integral en cada sesión.",
  badges: [],
  checklist: [
    "Especialistas con trato humano y profesional.",
    "Cabinas premium con atmósfera relajante.",
    "Tratamientos personalizados según tus objetivos.",
    "Confianza, seguimiento y una experiencia memorable.",
  ],
};

const mainLocationAddress = "Karito Centro Estetico, Los Olivos, Lima, Perú";
const mainLocationShortAddress = "15301, Los Olivos 15301";
const mainLocationQuery = "Karito Centro Estético";

export const aboutPage = {
  eyebrow: "Nosotros",
  title: "¿Por qué somos tu mejor opción?",
  paragraphs: [
    "Bienvenidos a Karito Centro Estetico, donde el bienestar se transforma en una experiencia única. En un ambiente de calma y cuidado, no solo ofrecemos tratamientos faciales y corporales de alta calidad, sino experiencias pensadas para realzar tu belleza y bienestar integral.",
    "Nuestro enfoque combina estética y armonía, invitándote a disfrutar de un momento de relajación y renovación. Con profesionales capacitados y espacios diseñados para tu comodidad, en Karito Centro Estetico te ayudamos a sentirte y verte mejor. Elige cuidarte, elige verte bien, elige Karito Centro Estetico.",
  ],
  imageSrc: imageAssets.about.nosotros,
  imageAlt: "Experiencia de bienestar en Balance Spa",
  teamSection: {
    title: "Equipo Karito Centro Estetico",
    lead: "Queremos guiarte con nuestro equipo de expertos, con los cuales obtendrás los mejores resultados, con programas diseñados de forma personalizada.",
    supportingLine:
      "La tecnología, el profesionalismo y los avances científicos, son los tres pilares del servicio integral que ponemos a tu alcance.",
    specialties: [
      {
        title: "Tratamientos faciales",
        description:
          "Protocolos enfocados en hidratación, firmeza, bioestimulación y rejuvenecimiento para mejorar la calidad y luminosidad de tu piel.",
      },
      {
        title: "Tratamientos corporales",
        description:
          "Planes orientados a moldeado, drenaje, tonificación y mejora del contorno corporal con evaluación personalizada.",
      },
      {
        title: "Medicina estética",
        description:
          "Procedimientos estéticos avanzados realizados con criterio profesional para potenciar resultados naturales, seguros y armónicos.",
      },
    ],
    closing:
      "Elige el tratamiento que mejor se ajuste a tus necesidades. Nuestro compromiso es contigo y tu salud.",
    imageSrc: imageAssets.about.equipoBalance,
    imageAlt: "Especialista del equipo Balance Spa",
  },
  purposeSection: {
    eyebrow: "Nuestra esencia",
    title: "Misión y Visión",
    experienceBadgeValue: "+5",
    experienceBadgeLabel: "años",
    missionTitle: "Misión",
    mission:
      "Brindar tratamientos estéticos de alta calidad que realcen la belleza natural, mejoren el bienestar y fortalezcan la confianza de cada persona, utilizando tecnología avanzada y atención personalizada.",
    visionTitle: "Visión",
    vision:
      "Ser un centro estético reconocido por su excelencia, innovación y resultados, donde hombres y mujeres encuentren un espacio de cuidado, renovación y confianza para sentirse y verse mejor.",
    promotionsCta: {
      label: "Conoce nuestras promociones",
      href: "/promociones",
    },
    imageSrc: imageAssets.about.misionVision,
    imageAlt: "Experiencia sensorial y de relajación en Balance Spa",
  },
};

export const facialCleansePage = {
  title: "Limpiezas Faciales",
  questionLabel: "¿Qué es?",
  content: [
    "Una <strong>limpieza facial</strong> es un tratamiento estético que purifica la piel en profundidad, eliminando impurezas, células muertas, exceso de grasa y residuos acumulados por la exposición diaria. El resultado es un rostro más limpio, luminoso y con una apariencia saludable.",
    "Realizada de forma regular, no solo mejora la textura y el aspecto de la piel, sino que también ayuda a prevenir problemas como el <strong>acné</strong>, los <strong>puntos negros</strong>, la <strong>piel reseca</strong> y la <strong>aparición de líneas finas</strong>. Además, optimiza la absorción de productos cosméticos, potenciando la eficacia de cremas, sueros y tratamientos hidratantes.",
  ],
  imageSrc: imageAssets.services.queEsLimpiezasFaciales,
  imageAlt: "Tratamiento de limpieza facial profesional",
  imageLabel: "Limpiezas Faciales",
  primaryCta: {
    label: "Agendar Cita",
    href: "https://api.whatsapp.com/message/EZSTNTZEBGBAK1",
  },
  protocolsSection: {
    title: "Limpiezas Faciales",
    description:
      "Cada piel es única y merece un cuidado a su medida. Descubre nuestra selección de protocolos especializados, diseñados para adaptarse a las necesidades específicas de cada tipo de rostro.",
    items: [
      {
        id: "deep-cleanse",
        title: "Limpieza Profunda",
        description:
          "Formulada para purificar la piel en profundidad, desobstruyendo los poros y eliminando eficazmente impurezas, células muertas y el exceso de sebo, dejando el rostro más limpio, equilibrado y renovado.",
        imageAlt: "Limpieza facial profunda",
        href: "/limpieza-facial-profunda",
      },
      {
        id: "hidrafacial",
        title: "Hidrafacial",
        description:
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        imageAlt: "Limpieza facial premium con tecnología LED",
      },
      {
        id: "dermaplaning",
        title: "Dermaplaning",
        description: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        imageAlt: "Tratamiento facial con mascarilla Hydrojelly",
      },
    ],
  },
  relatedServices: [
    {
      id: "peeling",
      title: "Peeling",
    },
    {
      id: "exfoliacion-espalda",
      title: "Exfoliación de espalda",
    },
    {
      id: "depilacion-cera",
      title: "Depilación con cera",
    },
  ],
};

export const facialTreatmentsPage = {
  title: "Tratamientos Faciales",
  imageSrc: imageAssets.services.queEsTratamientosFaciales,
  imageAlt: "Especialista realizando un tratamiento facial en cabina",
  cta: {
    label: "Agenda tu Cita Gratuita",
    href: "https://api.whatsapp.com/message/EZSTNTZEBGBAK1",
  },
  tabs: [
    {
      id: "what-is",
      label: "¿Qué es?",
      paragraphs: [
        "Los <strong>tratamientos faciales</strong> son procedimientos disenados para cuidar, prevenir y rejuvenecer la piel en cada etapa de la vida. A traves de protocolos personalizados, es posible tratar necesidades como el acne, las manchas, la flacidez y los signos de envejecimiento prematuro.",
        "En <strong>Karito Centro Estetico</strong> contamos con un portafolio integral realizado con productos profesionales y protocolos adaptados a cada tipo de piel, siempre con una evaluacion previa para recomendarte la mejor opcion.",
      ],
    },
    {
      id: "benefits",
      label: "Beneficios",
      items: [
        {
          title: "Prevención del envejecimiento:",
          description:
            "Reducen líneas finas, mejoran la firmeza y estimulan colágeno.",
        },
        {
          title: "Control del acné y manchas:",
          description:
            "Disminuyen brotes, regulan grasa y unifican el tono de la piel.",
        },
        {
          title: "Textura uniforme:",
          description:
            "Suavizan la superficie, reduce poros y mejora la elasticidad.",
        },
        {
          title: "Hidratación profunda:",
          description:
            "Con tratamientos la piel recibe un extra de frescura e hidratación.",
        },
        {
          title: "Reafirmación y definición facial:",
          description:
            "Con Tecnologías ayuda a tensar la piel y combatir la flacidez.",
        },
      ],
    },
  ],
  treatmentsSection: {
    title: "Tratamientos Faciales",
    items: [
      {
        id: "botox",
        title: "Botox",
        description:
          "Tratamiento medico que relaja los musculos faciales para suavizar arrugas y lineas de expresion, manteniendo la naturalidad de tu rostro.",
        imageSrc: imageAssets.services.tratamientoToxinaBotulinica,
        imageAlt: "Aplicacion de Botox en el rostro",
        href: "/botox",
      },
      {
        id: "acido-hialuronico",
        title: "Acido Hialuronico",
        description:
          "Relleno facial premium que hidrata en profundidad, devuelve volumen y define areas como labios, ojeras, pomulos o nariz.",
        imageSrc: imageAssets.services.tratamientoAcidoHialuronico,
        imageAlt: "Aplicacion de acido hialuronico en el rostro",
      },
      {
        id: "exosomas",
        title: "Exosomas",
        description:
          "Tratamiento premium que combina ciencia y biotecnologia para hidratar profundamente, regenerar y mantener una piel firme y luminosa.",
        imageSrc: imageAssets.services.tratamientoExosomas,
        imageAlt: "Tratamiento facial con exosomas",
      },
    ],
  },
  relatedServices: [
    {
      id: "dermapen",
      title: "Dermapen",
    },
    {
      id: "peptona",
      title: "Peptona",
    },
    {
      id: "rejuran",
      title: "Rejuran",
    },
    {
      id: "prp-capilar",
      title: "PRP capilar",
    },
  ],
};

export const bodyTreatmentsPage = {
  title: "Tratamientos Corporales",
  imageSrc: imageAssets.services.tratamientosCorporalesDetalle,
  imageAlt: "Tratamiento corporal enfocado en contorno y reducción localizada",
  cta: {
    label: "Agenda tu Consulta Gratuita",
    href: "https://api.whatsapp.com/message/EZSTNTZEBGBAK1",
  },
  tabs: [
    {
      id: "what-is",
      label: "¿Qué es?",
      paragraphs: [
        "Los <strong>tratamientos corporales</strong> son procedimientos médicos y estéticos, con tecnologías avanzadas y protocolos personalizados. Así podemos reducir grasa localizada, tratar celulitis, mejorar la flacidez, atenuar estrías y cicatrices, y lograr un contorno más definido.",
        "En <strong>Karito Centro Estetico</strong> contamos con un portafolio completo de alternativas no invasivas y mínimamente invasivas, realizadas con equipos y productos aprobados por la FDA y bajo la supervisión de médicos.",
      ],
    },
    {
      id: "benefits",
      label: "Beneficios",
      items: [
        {
          title: "Reduce grasa localizada:",
          description:
            "Ayuda a trabajar zonas específicas para mejorar el contorno corporal.",
        },
        {
          title: "Mejora la textura de la piel:",
          description:
            "Favorece una piel más uniforme y con mejor aspecto general.",
        },
        {
          title: "Combate flacidez y celulitis:",
          description:
            "Los protocolos adecuados ayudan a tensar y reafirmar visiblemente.",
        },
        {
          title: "Potencia resultados personalizados:",
          description:
            "Cada tratamiento se adapta al objetivo y necesidad de tu cuerpo.",
        },
      ],
    },
  ],
  treatmentsSection: {
    title: "Tratamientos Corporales",
    items: [
      {
        id: "reductor",
        title: "Reductor",
        description:
          "Radiofrecuencia con microagujas de oro que actúa en las capas profundas de la piel, mejorando flacidez, celulitis y estrías con resultados progresivos.",
        imageSrc: imageAssets.services.corporalMorpheus8,
        imageAlt: "Tratamiento corporal Morpheus 8",
        href: "/reductor",
      },
      {
        id: "hidrolipoclasia",
        title: "Hidrolipoclasia",
        description:
          "Tecnología que utiliza energía electromagnética focalizada para contraer los músculos intensamente, reduciendo grasa y aumentando masa muscular al mismo tiempo.",
        imageSrc: imageAssets.services.corporalEmsculpt,
        imageAlt: "Tratamiento corporal Emsculpt",
      },
      {
        id: "enzimas-polvo",
        title: "Enzimas en polvo",
        description:
          "Radiofrecuencia inteligente con Inteligencia Artificial que elimina grasa localizada, mejora la laxitud de la piel y reduce estrías, logrando un contorno más definido.",
        imageSrc: imageAssets.services.corporalExion,
        imageAlt: "Tratamiento corporal Exion",
      },
    ],
  },
  relatedServices: [
    {
      id: "papada-enzimas",
      title: "Papada con enzimas",
    },
    {
      id: "tonegirl",
      title: "Tonegirl",
    },
    {
      id: "criolipisis",
      title: "Criolipisis",
    },
    {
      id: "drenaje-post-lipo",
      title: "Drenaje post lipo",
    },
  ],
};

export const cavitacionPage = {
  title: "Reductor",
  bannerSrc: imageAssets.services.cavitacionBanner,
  bannerAlt: "Banner del tratamiento Reductor",
  descriptionSection: {
    title: "Reductor",
    paragraphs: [
      "Es un procedimiento no quirúrgico diseñado para <strong>eliminar la grasa localizada</strong> de manera efectiva y sin dolor.",
      "Este tratamiento utiliza <strong>ondas ultrasónicas</strong> de baja frecuencia para descomponer las células grasas, convirtiéndolas en líquido y permitiendo que el cuerpo las elimine de forma natural.",
    ],
  },
  benefitsSection: {
    intro:
      "Este tratamiento forma parte de nuestros Packs de Reducción, diseñados para adaptarse a tus necesidades y ayudarte a lograr los mejores resultados.",
    heading: "Reductor Abdomen",
    subheading: "Beneficios",
    imageSrc: imageAssets.services.beneficioReductor,
    imageAlt: "Profesional aplicando cavitación",
    items: [
      {
        title: "Reducción de Grasa Localizada:",
        description:
          "El Reductor es altamente efectiva para eliminar la grasa obstinada en áreas como el abdomen, los muslos y los glúteos.",
      },
      {
        title: "Resultados Visibles:",
        description:
          "Los resultados del Reductor suelen ser visibles después de unas pocas sesiones, lo que la convierte en una opción atractiva para aquellos que desean resultados rápidos.",
      },
      {
        title: "Procedimiento No Invasivo:",
        description:
          "Reductor no requiere incisiones ni tiempo de recuperación, es una opción ideal para personas con un estilo de vida activo.",
      },
      {
        title: "Mejora de la Apariencia de la Piel:",
        description:
          "Además de reducir la grasa, el reductor también puede mejorar la apariencia general de la piel, dejándola más tersa y firme.",
      },
    ],
  },
  procedureSection: {
    title: "Acerca del Procedimiento",
    imageSrc: imageAssets.services.detalleReductor,
    imageAlt: "Procedimiento de cavitación",
    steps: [
      "Primero se aplicará un gel conductor en el área a tratar para asegurar un contacto adecuado entre la piel y el aplicador ultrasónico.",
      "A continuación, se comenzará a aplicar el dispositivo de Reductor en movimientos circulares sobre el área objetivo. Este dispositivo emite ondas ultrasónicas que penetran en las capas profundas de la piel, dirigidas específicamente a las células grasas.",
      "La duración del tratamiento suele ser de entre 30 y 60 minutos, dependiendo del área tratada y la cantidad de grasa acumulada.",
    ],
  },
};

export const toxinaBotulinicaPage = {
  title: "Botox",
  bannerSrc: imageAssets.services.toxinaBotulinicaBanner,
  bannerAlt: "Banner del tratamiento de Botox",
  overviewSection: {
    headingLead: "Botox",
    headingText: "Todo lo que Necesitas Saber para Rejuvenecer Tu Piel",
    imageSrc: imageAssets.services.toxinaBotulinicaDetalle,
    imageAlt: "Aplicación de Botox en el rostro",
    cta: {
      label: "Agendar Cita de Toxina",
      href: "https://api.whatsapp.com/message/EZSTNTZEBGBAK1",
    },
    tabs: [
      {
        id: "what-is",
        label: "¿Qué es?",
        cardTitle: "¿Qué es la Botox y cómo funciona?",
        paragraphs: [
          "La <strong>Botox</strong> es un tratamiento médico estético no quirúrgico que se aplica en pequeñas dosis para suavizar líneas de expresión y arrugas dinámicas sin perder la naturalidad del rostro.",
          "Su acción consiste en relajar temporalmente ciertos músculos faciales para reducir el movimiento repetitivo que marca la piel. De esta manera, el rostro luce más descansado, fresco y rejuvenecido.",
        ],
      },
      {
        id: "benefits",
        label: "Beneficios",
        benefits: [
          {
            title: "Piel más fresca y luminosa:",
            description: "Elimina células muertas y rejuvenece tu rostro.",
          },
          {
            title: "Prevención de brotes de acné:",
            description:
              "Combate el exceso de grasa y limpia profundamente los poros.",
          },
          {
            title: "Textura mejorada:",
            description: "Suaviza la piel, dejándola más suave y uniforme.",
          },
          {
            title: "Aumento de la hidratación:",
            description:
              "Con tecnologías como el HydraFacial, tu piel recibe un extra de hidratación.",
          },
        ],
      },
    ],
    detailParagraphs: [
      "La <strong>Botox</strong>, mejor conocida como <strong>Botox</strong>, es uno de los tratamientos estéticos más populares y efectivos para rejuvenecer el rostro. Este procedimiento no quirúrgico está diseñado para reducir las líneas de expresión y las arrugas que se forman con el paso del tiempo debido a la contracción constante de los músculos faciales.",
      "El <strong>funcionamiento de Botox</strong> es simple pero altamente efectivo: al inyectarse en las áreas específicas del rostro, la toxina bloquea temporalmente las señales nerviosas que hacen que los músculos se contraigan. Esto permite que los músculos se relajen, suavizando así las arrugas y dando lugar a una piel más lisa y juvenil.",
    ],
  },
  benefitsDetailSection: {
    title: "Beneficios de la Botox para Tu Piel",
    intro:
      "Los beneficios de la Botox van más allá de la reducción de arrugas, proporcionando una serie de mejoras visibles y duraderas para el rostro:",
    imageSrc: imageAssets.services.toxinaBotulinicaBeneficios,
    imageAlt: "Aplicación de Botox para rejuvenecimiento facial",
    items: [
      {
        title: "Reducción de arrugas y líneas de expresión",
        description:
          "El principal beneficio de Botox para arrugas es su capacidad para suavizar las líneas de expresión, especialmente aquellas que aparecen en la frente, alrededor de los ojos (patas de gallo) y entrecejo.",
      },
      {
        title: "Prevención de futuras arrugas",
        description:
          "Al inhibir la contracción muscular repetida, ayuda a prevenir la aparición de nuevas líneas de expresión, manteniendo tu piel suave por más tiempo.",
      },
      {
        title: "Resultados naturales",
        description:
          "A diferencia de lo que muchos creen, Botox no congela las expresiones faciales. Este tratamiento ofrece resultados naturales, ya que relaja los músculos faciales sin alterar la capacidad de sonreír, fruncir el ceño o hacer otras expresiones comunes.",
      },
      {
        title: "Tratamiento rápido y sin cirugía",
        description:
          "La aplicación de Botox es un procedimiento no invasivo y rápido. No requiere tiempo de recuperación, por lo que puedes continuar con tu rutina diaria de inmediato.",
      },
      {
        title: "Resultados duraderos",
        description:
          "Aunque los efectos de la Botox no son permanentes, los resultados pueden durar entre 3 a 6 meses, lo que permite mantener una apariencia juvenil y fresca de forma continua.",
      },
    ],
  },
  procedureSection: {
    title: "ACERCA DEL PROCEDIMIENTO",
    content:
      "La técnica consiste en la infiltración mediante una aguja extrafina de la toxina Botox en el músculo de la zona que se desea tratar. Las zonas de aplicación más frecuentes son: frente, entrecejo y patas de gallo.",
    imageSrc: imageAssets.services.beneficioBotox,
    imageAlt: "Procedimiento de aplicación de Botox",
  },
  resultsSection: {
    usesTitle: "¿PARA QUÉ SIRVE?",
    uses: [
      "Atenúa las arrugas existentes",
      "Previene líneas de expresión",
      "Ayuda al rejuvenecimiento",
    ],

    resultsTitle: "¿CUÁNDO SE VERÁN LOS RESULTADOS?",
    resultsText:
      "Los resultados de la aplicación se evidencian durante los 5 a 7 días posteriores, teniendo su efecto máximo entre los 12 a 15 días.",
    imageSrc: imageAssets.services.toxinaBotulinicaResultados,
    imageAlt: "Aplicación de Botox en la zona del rostro",
  },
  beforeAfterSection: {
    title: "ANTES Y DESPUÉS",
    items: [
      {
        id: "antes",
        imageSrc: imageAssets.services.toxinaBotulinicaAntes,
        imageAlt: "Resultado frontal del tratamiento con Botox",
      },
      {
        id: "despues",
        imageSrc: imageAssets.services.toxinaBotulinicaDespues,
        imageAlt: "Resultado lateral del tratamiento con Botox",
      },
    ],
  },
  faqSection: {
    title: "Preguntas frecuentes",
    items: [
      {
        question: "¿Cuáles son las zonas de aplicación?",
        answer:
          "Las zonas más frecuentes de aplicación son la frente, el entrecejo y las patas de gallo. En algunos casos también puede utilizarse en otras áreas según la evaluación profesional y el objetivo del tratamiento.",
      },
      {
        question: "¿Cuáles son las mejores marcas de Botox?",
        answer:
          "Entre las marcas más reconocidas se encuentran Botox, Dysport y Xeomin. La mejor opción depende de la valoración médica, la zona a tratar y la respuesta individual de cada paciente.",
      },
      {
        question: "¿Cuáles son los cuidados post tratamiento de la Botox?",
        answer:
          "Se recomienda no acostarse durante las primeras horas, evitar masajear la zona tratada, no realizar ejercicio intenso el mismo día y seguir al detalle las indicaciones del especialista para optimizar el resultado.",
      },
      {
        question: "¿Cuánto dura la Botox?",
        answer:
          "La duración suele ser de 3 a 6 meses, dependiendo del metabolismo, la zona tratada, la dosis aplicada y los hábitos de cada persona. Con sesiones de mantenimiento, el efecto puede sostenerse de forma más estable.",
      },
    ],
  },
};

export const deepCleansePage = {
  title: "Limpieza Profunda",
  bannerSrc: imageAssets.services.limpiezaProfundaBanner,
  bannerAlt: "Banner del tratamiento limpieza profunda",
  descriptionSection: {
    title: "LIMPIEZA FACIAL PROFUNDA",
    paragraphs: [
      "La limpieza facial profunda es un tratamiento especializado que <strong>purifica la piel desde el interior, eliminando impurezas, células muertas y el exceso de sebo acumulado en los poros.</strong>",
      "A diferencia de una limpieza facial convencional, que actúa principalmente en la superficie, este procedimiento trabaja en capas más profundas de la piel, ayudando a desobstruir los poros y mejorar visiblemente su textura. El resultado es una piel más limpia, fresca, luminosa y revitalizada.",
    ],
  },
  procedureSection: {
    title: "ACERCA DEL PROCEDIMIENTO",
    content:
      "El tratamiento inicia con una limpieza superficial para retirar residuos e impurezas, seguida de una exfoliación y tonificación que preparan la piel. Posteriormente, se aplica vapor de ozono o microdermoabrasión con punta de diamante, según las necesidades específicas, facilitando la extracción de comedones (puntos negros) de forma segura. A continuación, se emplea alta frecuencia para desinfectar y calmar la piel, complementando con activos y cremas adaptadas a cada tipo de piel. El procedimiento culmina con la aplicación de una mascarilla facial que hidrata y revitaliza, y la fotoprotección, esencial para proteger la piel y potenciar los resultados.",
    imageSrc: imageAssets.services.descripcionFacialProfundo,
    imageAlt: "Procedimiento de limpieza facial profunda",
  },
  benefitsSection: {
    title: "BENEFICIOS",
    items: [
      {
        title: "Piel más limpia y clara",
        description:
          "Al eliminar las impurezas y el exceso de grasa, la limpieza facial profunda ayuda a prevenir la obstrucción de los poros, reduciendo así la aparición de puntos negros y granos.",
      },
      {
        title: "Renovación celular",
        description:
          "Este tratamiento estimula la renovación celular, promoviendo la regeneración de la piel y dejándola más suave y luminosa.",
      },
      {
        title: "Mejora la absorción de productos",
        description:
          "Al limpiar profundamente la piel, se facilita la absorción de los productos de cuidado de la piel, maximizando sus beneficios.",
      },
      {
        title: "Reducción de la apariencia de los poros",
        description:
          "La limpieza facial profunda puede ayudar a reducir el tamaño de los poros, dejando la piel con un aspecto más uniforme y refinado.",
      },
    ],
    frequencyTitle: "¿CADA CUÁNTO TIEMPO SE DEBE HACER UNA LIMPIEZA?",
    frequencyParagraphs: [
      "La frecuencia de la limpieza facial depende de varios factores, como la edad, el tipo de piel y el estado de la misma.",
      "Es recomendable hacerse una limpieza facial mensualmente para eliminar impurezas y células muertas, manteniendo la piel fresca y radiante. Ayuda a prevenir brotes y mejora la absorción de productos de cuidado facial en casa. Además, estimula la circulación, promoviendo un aspecto saludable y rejuvenecido.",
    ],
  },
};

export const locationSection = {
  eyebrow: "Ubicacion",
  title:
    "Un mapa interactivo y adaptable que te ayuda a llegar fácilmente, tan simple como hacer tu reserva.",
  description:
    "Diseño inspirado en Google Maps que muestra claramente el entorno de la sede y permite abrir la ruta fácilmente desde cualquier dispositivo.",
  badge: "Google Maps",
  cardTitle: "Karito Centro Estetico",
  iframeTitle: "Mapa de Karito Centro Estetico",
  liveLabel: "En vivo",
  area: "Los Olivos, Lima",
  address: mainLocationAddress,
  highlights: [],
  directionsHref: `https://www.google.com/maps/search/?api=1&query=${mainLocationQuery}`,
  openMapHref: `https://www.google.com/maps/search/?api=1&query=${mainLocationQuery}`,
  embedUrl: `https://www.google.com/maps?q=${mainLocationQuery}&z=17&hl=es&output=embed`,
  note: "",
};

export const contact = {
  phone: "957062248",
  address: mainLocationAddress,
  schedule: [
    "Lunes a Sabado de 10:00 a.m. a 7:30 p.m.",
    "Domingo de 10:00 a.m. a 5:00 p.m.",
  ],
  primaryCta: {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/message/EZSTNTZEBGBAK1",
  },
  headerCta: {
    label: "Reservar cita",
    href: "https://api.whatsapp.com/message/EZSTNTZEBGBAK1",
  },
  secondaryCta: {
    label: "Instagram",
    href: "https://www.instagram.com/karitocentromedicoestetico/",
  },
};

export const footer = {
  companyName: "Karito Centro Estetico",
  descriptor: "Facial, corporal y bienestar en un mismo espacio.",
  phone: contact.phone,
  whatsapp: "957062248",
  locations: [
    {
      label: "Los Olivos",
      value: mainLocationShortAddress,
    },
    {
      label: "Atencion",
      value: "Reservas, evaluaciones y seguimiento con cita previa.",
    },
    {
      label: "Cobertura",
      value: "Tratamientos faciales, corporales y Limpiezas Faciales.",
    },
  ],
  schedule: contact.schedule,
  links: [
    { label: "Promociones", href: "/promociones" },
    { label: "Tratamientos Faciales", href: "/tratamientos-faciales" },
    { label: "Tratamientos Corporales", href: "/tratamientos-corporales" },
    { label: "Limpiezas Faciales", href: "/limpiezas-faciales" },
  ],
  socialLinks: [
    {
      label: "Instagram",
      href: contact.secondaryCta.href,
    },
    {
      label: "Facebook",
      href: "https://facebook.com/karitocentroestetico",
    },

    {
      label: "TikTok",
      href: "https://tiktok.com/@karitocentroestetico",
    },
  ],
};

const siteDataByLocale = {
  es: cloneMutableValue({
    site,
    headerNavigation,
    hero,
    servicesIntro,
    services,
    promotionsIntro,
    promotions,
    faqIntro,
    faqs,
    whyChooseUs,
    aboutPage,
    facialCleansePage,
    facialTreatmentsPage,
    bodyTreatmentsPage,
    cavitacionPage,
    toxinaBotulinicaPage,
    deepCleansePage,
    locationSection,
    contact,
    footer,
  }),
  en: siteEn,
};

export function setSiteLocale(locale) {
  const nextData = siteDataByLocale[locale] ?? siteDataByLocale.es;

  syncMutableValue(site, nextData.site);
  syncMutableValue(headerNavigation, nextData.headerNavigation);
  syncMutableValue(hero, nextData.hero);
  syncMutableValue(servicesIntro, nextData.servicesIntro);
  syncMutableValue(services, nextData.services);
  syncMutableValue(promotionsIntro, nextData.promotionsIntro);
  syncMutableValue(promotions, nextData.promotions);
  syncMutableValue(faqIntro, nextData.faqIntro);
  syncMutableValue(faqs, nextData.faqs);
  syncMutableValue(whyChooseUs, nextData.whyChooseUs);
  syncMutableValue(aboutPage, nextData.aboutPage);
  syncMutableValue(facialCleansePage, nextData.facialCleansePage);
  syncMutableValue(facialTreatmentsPage, nextData.facialTreatmentsPage);
  syncMutableValue(bodyTreatmentsPage, nextData.bodyTreatmentsPage);
  syncMutableValue(cavitacionPage, nextData.cavitacionPage);
  syncMutableValue(toxinaBotulinicaPage, nextData.toxinaBotulinicaPage);
  syncMutableValue(deepCleansePage, nextData.deepCleansePage);
  syncMutableValue(locationSection, nextData.locationSection);
  syncMutableValue(contact, nextData.contact);
  syncMutableValue(footer, nextData.footer);
}
