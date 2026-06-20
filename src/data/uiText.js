import { cloneMutableValue, syncMutableValue } from "@/utils/mutableData";

const uiTextByLocale = {
  es: {
    locale: {
      ariaLabel: "Cambiar idioma",
      spanish: "Español",
      english: "Inglés",
    },
    header: {
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    footer: {
      contact: "Contacto",
      location: "Ubicación",
      hours: "Horarios",
      rightsReserved: "Todos los derechos reservados.",
      city: "Lima, Perú",
    },
    floatingWhatsApp: {
      prompt: "¿Te ayudamos?",
      chatLabel: "Chatea con nosotros",
      ariaLabel: "Abrir WhatsApp de Karito Centro Estético",
    },
    hero: {
      previousSlide: "Slide anterior",
      nextSlide: "Slide siguiente",
      goToSlide: (index) => `Ir al slide ${index}`,
    },
    benefits: {
      stats: [
        { value: "+3K", label: "Clientas felices" },
        { value: "5+", label: "Años de experiencia" },
        { value: "98%", label: "Satisfacción" },
      ],
      imageAlt: "Karito Centro Estético – Por qué elegirnos",
    },
    aboutStory: {
      stats: [
        { value: "5+", label: "Años de experiencia" },
        { value: "2k+", label: "Clientes satisfechos" },
        { value: "10+", label: "Especialistas" },
      ],
      badgeTitle: "Bienestar integral",
      badgeSubtitle: "Cuerpo, mente y espíritu",
      yearsLabel: "años",
    },
    aboutTeam: {
      badgeTitle: "Equipo profesional",
      badgeSubtitle: "Con años de experiencia",
      cta: "Conoce al equipo",
    },
    faq: {
      missingAnswerTitle: "¿No encontraste respuesta?",
      missingAnswerDescription:
        "Escríbenos por WhatsApp y te ayudamos a resolver cualquier duda antes de tu cita.",
      whatsappCta: "Escribir por WhatsApp",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Reserva tu cita, resuelve tus dudas o visítanos en nuestra sede.",
      description:
        "Te dejamos los canales principales de contacto para que puedas agendar, consultar horarios o continuar la conversación por WhatsApp e Instagram.",
      phone: "Teléfono",
      email: "Correo",
      address: "Dirección",
      schedule: "Horario",
    },
    promotionsPage: {
      badge: "Promociones exclusivas",
      scrollHint: "Ver ofertas",
      heroDescription:
        "Descubre nuestras mejores ofertas en tratamientos estéticos diseñados para ti.",
      sectionTitle: "Aprovecha nuestras promociones",
      sectionDescription:
        "Tratamientos con descuentos especiales por tiempo limitado.",
    },
    promotionCard: {
      cta: "Ver promoción",
    },
    promotionModal: {
      serviceBadge: "Servicio",
      serviceCta: "Ver servicio",
      closeModal: "Cerrar modal",
      activePromotion: "Promoción activa",
      close: "Cerrar",
      requestWhatsApp: "Solicitar por WhatsApp",
      suggestedServices: "Servicios sugeridos",
      suggestedServicesTitle: "Elige el tratamiento ideal para esta promo",
      suggestedServicesDescription:
        "Te mostramos las otras opciones que también están en promoción para que compares y elijas la mejor alternativa.",
      detailEyebrow: "Detalle de la promoción",
      detailDescription:
        "Explora los servicios asociados a esta promoción y revisa cuál se ajusta mejor a tu objetivo antes de reservar tu evaluación.",
    },
    serviceCard: {
      viewService: "Ver servicio",
      consult: "Consultar",
      viewPromotion: "Ver promoción",
      viewMore: "Ver más",
      viewProtocol: "Ver protocolo",
    },
    expandButton: {
      more: "Ver más",
      less: "Ver menos",
      moreServices: "Ver más servicios",
      lessServices: "Ver menos servicios",
    },
    relatedServices: {
      eyebrow: "Servicios relacionados",
      title: "También te puede interesar",
    },
    genericService: {
      defaultCategory: "Servicio",
      bookEvaluation: "Agendar evaluación",
      idealIfSeeking: "Ideal si buscas",
      aboutTreatment: "Qué es",
      karitoApproach: "Enfoque Karito Centro Estético",
      benefitsEyebrow: "Beneficios",
      benefitsDescription:
        "Cada servicio se adapta a evaluación previa, por eso los beneficios se orientan a tus necesidades reales y al plan recomendado para tu caso.",
      stepByStep: "Acerca del procedimiento",
      stepLabel: (index) => `Paso ${index + 1}`,
      frequencyEyebrow: "Frecuencia y seguimiento",
      nextStep: "Siguiente paso",
      personalizedEvaluationTitle: "Agenda tu evaluación personalizada",
      personalizedEvaluationDescription:
        "Revisamos tu objetivo, la zona a tratar y el plan más adecuado para definir una recomendación realista, segura y alineada al resultado que buscas.",
      faqEyebrow: "Dudas frecuentes",
      faqDescription:
        "Estas respuestas te orientan antes de tu cita, pero la indicación final siempre se confirma en evaluación.",
      beforeAfterEyebrow: "Evolución esperada",
      beforeAfterDescription:
        "El antes y después real depende de tu evaluación, constancia y respuesta individual. Aquí resumimos los cambios que se buscan acompañar con el tratamiento.",
      reserveWhatsapp: "Reservar por WhatsApp",
      viewMoreServices: "Ver más servicios",
    },
    facialTreatmentsCatalog: {
      viewMore: "Ver más",
    },
    bodyTreatmentsCatalog: {
      viewMore: "Ver más",
      fallbackDescription:
        "Descubre nuestros tratamientos diseñados para resaltar tu belleza y bienestar.",
    },
    specialPages: {
      before: "Antes",
      after: "Después",
      visibleResults: "Resultados visibles tras la aplicación del tratamiento",
      toxinaImageLabel: "Botox",
      cavitacionImageLabel: "Reductor",
      facialImageLabel: "Tratamiento facial",
      bodyImageLabel: "Tratamiento corporal",
      procedureImageLabel: "Procedimiento",
      facialTreatmentsAria: "Información de tratamientos faciales",
      bodyTreatmentsAria: "Información de tratamientos corporales",
      toxinaAria: "Información sobre toxina botulínica",
    },
    promotionsSection: {
      imageAlt: "Promociones estéticas",
    },
  },
  en: {
    locale: {
      ariaLabel: "Change language",
      spanish: "Spanish",
      english: "English",
    },
    header: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    footer: {
      contact: "Contact",
      location: "Location",
      hours: "Hours",
      rightsReserved: "All rights reserved.",
      city: "Lima, Peru",
    },
    floatingWhatsApp: {
      prompt: "Need help?",
      chatLabel: "Chat with us",
      ariaLabel: "Open Karito Aesthetic Center WhatsApp",
    },
    hero: {
      previousSlide: "Previous slide",
      nextSlide: "Next slide",
      goToSlide: (index) => `Go to slide ${index}`,
    },
    benefits: {
      stats: [
        { value: "+3K", label: "Happy clients" },
        { value: "5+", label: "Years of experience" },
        { value: "98%", label: "Satisfaction" },
      ],
      imageAlt: "Karito Aesthetic Center – Why choose us",
    },
    aboutStory: {
      stats: [
        { value: "5+", label: "Years of experience" },
        { value: "2k+", label: "Satisfied clients" },
        { value: "10+", label: "Specialists" },
      ],
      badgeTitle: "Integral wellbeing",
      badgeSubtitle: "Body, mind, and spirit",
      yearsLabel: "years",
    },
    aboutTeam: {
      badgeTitle: "Professional team",
      badgeSubtitle: "With years of experience",
      cta: "Meet the team",
    },
    faq: {
      missingAnswerTitle: "Didn’t find your answer?",
      missingAnswerDescription:
        "Send us a message on WhatsApp and we will help you solve any question before your appointment.",
      whatsappCta: "Message on WhatsApp",
    },
    contact: {
      eyebrow: "Contact",
      title:
        "Book your appointment, solve your questions, or visit us at our location.",
      description:
        "Here are our main contact channels so you can book, ask about schedules, or continue the conversation via WhatsApp and Instagram.",
      phone: "Phone",
      email: "Email",
      address: "Address",
      schedule: "Schedule",
    },
    promotionsPage: {
      badge: "Exclusive promotions",
      scrollHint: "View offers",
      heroDescription:
        "Discover our best offers on aesthetic treatments designed for you.",
      sectionTitle: "Take advantage of our promotions",
      sectionDescription:
        "Treatments with special discounts available for a limited time.",
    },
    promotionCard: {
      cta: "View promotion",
    },
    promotionModal: {
      serviceBadge: "Service",
      serviceCta: "View service",
      closeModal: "Close modal",
      activePromotion: "Active promotion",
      close: "Close",
      requestWhatsApp: "Request via WhatsApp",
      suggestedServices: "Suggested services",
      suggestedServicesTitle: "Choose the ideal treatment for this promo",
      suggestedServicesDescription:
        "We show the other treatments that are also on promotion so you can compare and choose the best option.",
      detailEyebrow: "Promotion details",
      detailDescription:
        "Explore the services connected to this promotion and review which one best fits your goal before booking your evaluation.",
    },
    serviceCard: {
      viewService: "View service",
      consult: "Inquire",
      viewPromotion: "View promotion",
      viewMore: "View more",
      viewProtocol: "View protocol",
    },
    expandButton: {
      more: "View more",
      less: "View less",
      moreServices: "View more services",
      lessServices: "View fewer services",
    },
    relatedServices: {
      eyebrow: "Related services",
      title: "You may also like",
    },
    genericService: {
      defaultCategory: "Service",
      bookEvaluation: "Book evaluation",
      idealIfSeeking: "Ideal if you are looking for",
      aboutTreatment: "What it is",
      karitoApproach: "Karito Aesthetic Center approach",
      benefitsEyebrow: "Benefits",
      benefitsDescription:
        "Each service is adapted after an evaluation, so the benefits are aligned with your real needs and the recommended plan for your case.",
      stepByStep: "About the procedure",
      stepLabel: (index) => `Step ${index + 1}`,
      frequencyEyebrow: "Frequency and follow-up",
      nextStep: "Next step",
      personalizedEvaluationTitle: "Book your personalized evaluation",
      personalizedEvaluationDescription:
        "We review your goal, the area to be treated, and the most suitable plan to define a realistic, safe recommendation aligned with the result you want.",
      faqEyebrow: "Frequently asked questions",
      faqDescription:
        "These answers guide you before your appointment, but the final indication is always confirmed during the evaluation.",
      beforeAfterEyebrow: "Expected evolution",
      beforeAfterDescription:
        "The real before and after depends on your evaluation, consistency, and individual response. Here we summarize the changes the treatment aims to support.",
      reserveWhatsapp: "Book via WhatsApp",
      viewMoreServices: "View more services",
    },
    facialTreatmentsCatalog: {
      viewMore: "View more",
    },
    bodyTreatmentsCatalog: {
      viewMore: "View more",
      fallbackDescription:
        "Discover our treatments designed to enhance your beauty and wellbeing.",
    },
    specialPages: {
      before: "Before",
      after: "After",
      visibleResults: "Visible results after the treatment",
      toxinaImageLabel: "Botulinum toxin",
      cavitacionImageLabel: "Slimming",
      facialImageLabel: "Facial treatment",
      bodyImageLabel: "Body treatment",
      procedureImageLabel: "Procedure",
      facialTreatmentsAria: "Facial treatments information",
      bodyTreatmentsAria: "Body treatments information",
      toxinaAria: "Botulinum toxin information",
    },
    promotionsSection: {
      imageAlt: "Aesthetic promotions",
    },
  },
};

export const uiText = cloneMutableValue(uiTextByLocale.es);

export function setUiLocale(locale) {
  syncMutableValue(uiText, uiTextByLocale[locale] ?? uiTextByLocale.es);
}
