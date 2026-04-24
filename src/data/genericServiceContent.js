let currentLocale = "es";

function buildFaq(service, categoryId) {
  const faqByCategory = {
    "facial-cleanse": [
      {
        question: `¿${service.title} se adapta a mi tipo de piel?`,
        answer:
          "Sí. Antes de la sesión se valora el estado de la piel para ajustar intensidad, activos y enfoque del protocolo según lo que tu rostro necesite en ese momento.",
      },
      {
        question: "¿Cada cuánto se recomienda realizarlo?",
        answer:
          "La frecuencia depende de tus objetivos, sensibilidad cutánea y rutina actual. En muchos casos puede integrarse como mantenimiento periódico o dentro de un plan facial más amplio.",
      },
      {
        question: "¿Qué cuidados conviene seguir después?",
        answer:
          "Suele recomendarse hidratación, protección solar y evitar productos irritantes o calor excesivo durante las horas posteriores, siempre según la indicación recibida en cabina.",
      },
    ],
    "facial-treatment": [
      {
        question: `¿${service.title} requiere evaluación previa?`,
        answer:
          "Sí. La evaluación permite revisar antecedentes, objetivos y zona a trabajar para confirmar si el tratamiento es el indicado o si conviene combinarlo con otro protocolo.",
      },
      {
        question: "¿Los resultados se ven en una sola sesión?",
        answer:
          "Depende del servicio y del objetivo. Algunos tratamientos ofrecen cambios tempranos en hidratación o luminosidad, mientras otros funcionan mejor dentro de un plan progresivo.",
      },
      {
        question: "¿Se puede combinar con otros tratamientos faciales?",
        answer:
          "En muchos casos sí, pero la combinación debe definirse de forma profesional para respetar tiempos, recuperación y compatibilidad entre técnicas o activos.",
      },
    ],
    "body-treatment": [
      {
        question: `¿${service.title} se personaliza según la zona?`,
        answer:
          "Sí. Se adapta de acuerdo con la zona a trabajar, el objetivo estético y la respuesta del tejido para que el protocolo tenga una lógica realista y ordenada.",
      },
      {
        question: "¿Se recomienda hacerlo en varias sesiones?",
        answer:
          "Generalmente sí. Muchos tratamientos corporales muestran mejor evolución cuando se organizan en varias citas, con seguimiento y ajustes según el avance.",
      },
      {
        question: "¿Qué hábitos ayudan a sostener el resultado?",
        answer:
          "La constancia, hidratación, movimiento, alimentación equilibrada y seguir las recomendaciones posteriores a cada sesión ayudan a acompañar mejor el proceso.",
      },
    ],
  };

  return faqByCategory[categoryId] ?? [];
}

function buildFaqEn(service, categoryId) {
  const faqByCategory = {
    "facial-cleanse": [
      {
        question: `Is ${service.title} suitable for my skin type?`,
        answer:
          "Yes. Before the session, the skin is assessed so the intensity, active ingredients, and protocol focus can be adjusted to what your skin needs at that moment.",
      },
      {
        question: "How often is it recommended?",
        answer:
          "The frequency depends on your goals, skin sensitivity, and current routine. In many cases it can be included as regular maintenance or within a broader facial plan.",
      },
      {
        question: "What aftercare is usually recommended?",
        answer:
          "Hydration, sunscreen, and avoiding irritating products or excessive heat are usually recommended for the following hours, always according to professional guidance.",
      },
    ],
    "facial-treatment": [
      {
        question: `Does ${service.title} require a prior evaluation?`,
        answer:
          "Yes. The assessment helps review your history, goals, and the area to be treated to confirm whether this is the right option or whether it should be combined with another protocol.",
      },
      {
        question: "Are results visible in one session?",
        answer:
          "It depends on the service and your goal. Some treatments provide early changes in hydration or glow, while others work best as part of a progressive plan.",
      },
      {
        question: "Can it be combined with other facial treatments?",
        answer:
          "In many cases yes, but the combination should be defined professionally to respect timing, recovery, and compatibility between techniques or active ingredients.",
      },
    ],
    "body-treatment": [
      {
        question: `Is ${service.title} customized based on the area?`,
        answer:
          "Yes. It is adapted according to the area to be treated, the aesthetic goal, and tissue response so the protocol follows a realistic and organized plan.",
      },
      {
        question: "Is it usually recommended in several sessions?",
        answer:
          "Usually yes. Many body treatments show better progress when they are organized over several appointments, with follow-up and adjustments based on the response.",
      },
      {
        question: "What habits help support the results?",
        answer:
          "Consistency, hydration, movement, balanced nutrition, and following post-session recommendations all help support the process.",
      },
    ],
  };

  return faqByCategory[categoryId] ?? [];
}

function getCategoryDefaults(service, category) {
  const defaultsByCategory = {
    "facial-cleanse": {
      tags: ["Evaluación previa", "Limpieza profesional", "Plan personalizado"],
      heroNote:
        "Se adapta al estado actual de la piel para trabajar limpieza, frescura y una mejor apariencia general sin perder confort durante la sesión.",
      overviewTitle: `${service.title}: limpieza y renovación pensadas para tu piel`,
      overviewParagraphs: [
        `${service.title} es un protocolo orientado a mejorar limpieza, textura y luminosidad a través de una atención personalizada según lo que tu piel necesite en el momento de la evaluación.`,
        "Puede formar parte de un plan de mantenimiento facial o utilizarse como sesión puntual cuando buscas una piel más fresca, uniforme y preparada para recibir mejor tu rutina cosmética.",
      ],
      focusTitle: "Lo que buscamos con este servicio",
      focusParagraph:
        "La prioridad es trabajar de forma ordenada para retirar impurezas, equilibrar la piel y dejar una sensación de limpieza visible y cómoda.",
      focusItems: [
        "Mejorar la limpieza superficial y el aspecto general del rostro o la zona tratada.",
        "Favorecer una textura más uniforme y una piel visualmente más fresca.",
        "Acompañar rutinas de mantenimiento o preparación previa para otros protocolos.",
      ],
      benefitsTitle: "Beneficios que suele aportar",
      benefits: [
        {
          title: "Piel más fresca",
          description:
            "Ayuda a que la piel se vea más limpia, despejada y con mejor sensación de confort.",
        },
        {
          title: "Mejor textura",
          description:
            "Puede contribuir a una superficie más uniforme y agradable al tacto.",
        },
        {
          title: "Glow natural",
          description:
            "Favorece una apariencia más luminosa cuando se integra correctamente al cuidado facial.",
        },
      ],
      idealTitle: "Ideal si buscas",
      idealItems: [
        "Mantener una rutina de limpieza profesional de forma periódica.",
        "Mejorar la sensación de limpieza, brillo y frescura del rostro.",
        "Preparar la piel antes de otros tratamientos o eventos especiales.",
        "Recibir un protocolo adaptado al estado real de tu piel.",
      ],
      protocolTitle: "Cómo suele desarrollarse la sesión",
      protocolSteps: [
        "Valoración inicial para revisar tipo de piel, sensibilidad y objetivo de la cita.",
        "Limpieza y preparación de la zona con el protocolo más adecuado.",
        "Trabajo principal de renovación, extracción o hidratación según evaluación.",
        "Cierre con productos de calma, protección y recomendaciones posteriores.",
      ],
      sessionTitle: "Frecuencia y recomendaciones",
      sessionParagraphs: [
        "La frecuencia depende del estado de la piel, tus objetivos y si el protocolo se usa como mantenimiento o parte de un plan más amplio.",
        "Después de la sesión se suelen reforzar cuidados como hidratación, fotoprotección y evitar factores irritantes según la indicación profesional.",
      ],
      faqTitle: "Preguntas frecuentes",
    },
    "facial-treatment": {
      tags: ["Valoración previa", "Plan facial", "Enfoque personalizado"],
      heroNote:
        "Cada tratamiento facial se indica de forma personalizada para priorizar seguridad, naturalidad y objetivos realistas según tu evaluación.",
      overviewTitle: `${service.title}: un protocolo facial orientado a resultados progresivos`,
      overviewParagraphs: [
        `${service.title} forma parte de los tratamientos faciales que buscan mejorar calidad de piel, definición o bioestimulación según la técnica y el objetivo indicado para cada caso.`,
        "La recomendación se construye tras una valoración previa, considerando antecedentes, zonas a tratar, tiempos y expectativas para plantear un plan coherente.",
      ],
      focusTitle: "Enfoque de trabajo",
      focusParagraph:
        "Priorizamos una estrategia progresiva que cuide la armonía del rostro, la calidad cutánea y una experiencia bien acompañada de principio a fin.",
      focusItems: [
        "Definir el protocolo más adecuado según necesidad específica.",
        "Trabajar con objetivos claros y seguimiento profesional.",
        "Mantener resultados naturales y alineados a tu evaluación.",
      ],
      benefitsTitle: "Lo que puede aportar este tratamiento",
      benefits: [
        {
          title: "Mejor calidad de piel",
          description:
            "Puede ayudar a que la piel se vea más cuidada, uniforme y saludable según el protocolo indicado.",
        },
        {
          title: "Plan dirigido",
          description:
            "Se orienta a necesidades concretas en lugar de aplicar un abordaje general para todas las personas.",
        },
        {
          title: "Acompañamiento profesional",
          description:
            "Permite ordenar expectativas, frecuencia y combinaciones dentro de un plan facial más completo.",
        },
      ],
      idealTitle: "Ideal si buscas",
      idealItems: [
        "Trabajar una necesidad facial específica con evaluación previa.",
        "Mejorar hidratación, textura, firmeza o definición según el caso.",
        "Construir un plan facial progresivo y personalizado.",
        "Recibir orientación profesional antes de elegir técnica o activos.",
      ],
      protocolTitle: "Cómo suele plantearse el protocolo",
      protocolSteps: [
        "Valoración del objetivo, antecedentes y características de la zona a tratar.",
        "Definición del tratamiento y de la secuencia recomendada para la sesión.",
        "Aplicación del protocolo con monitoreo del confort y respuesta de la piel.",
        "Indicaciones posteriores y planificación de control o sesiones siguientes si corresponde.",
      ],
      sessionTitle: "Sesiones y seguimiento",
      sessionParagraphs: [
        "Algunos tratamientos se trabajan en una sola sesión y otros muestran mejor evolución cuando se organizan en varias citas, según indicación profesional.",
        "El seguimiento posterior permite ajustar frecuencia, combinaciones y cuidados para sostener resultados de manera ordenada.",
      ],
      faqTitle: "Preguntas frecuentes",
    },
    "body-treatment": {
      tags: ["Evaluación corporal", "Protocolo personalizado", "Seguimiento"],
      heroNote:
        "El abordaje corporal se adapta a la zona, al tipo de objetivo y al ritmo recomendado para acompañar mejor el proceso.",
      overviewTitle: `${service.title}: trabajo corporal enfocado en objetivos concretos`,
      overviewParagraphs: [
        `${service.title} se integra dentro de protocolos corporales que buscan modelado, drenaje, definición o mejora del contorno de forma personalizada y progresiva.`,
        "La evaluación previa permite identificar la zona a trabajar, ordenar expectativas y recomendar la frecuencia más adecuada para construir un plan consistente.",
      ],
      focusTitle: "Qué cuidamos en cada sesión",
      focusParagraph:
        "La idea es trabajar con criterio profesional, adaptar la intensidad a tu proceso y acompañar resultados de forma realista.",
      focusItems: [
        "Organizar el protocolo según la zona y el objetivo principal.",
        "Definir una frecuencia coherente para ver evolución sostenida.",
        "Acompañar el proceso con seguimiento y recomendaciones posteriores.",
      ],
      benefitsTitle: "Qué puede sumar al proceso corporal",
      benefits: [
        {
          title: "Objetivo dirigido",
          description:
            "Permite trabajar zonas específicas dentro de un plan corporal más ordenado.",
        },
        {
          title: "Seguimiento progresivo",
          description:
            "Ayuda a medir avances y ajustar el protocolo según la respuesta de cada persona.",
        },
        {
          title: "Mejor acompañamiento",
          description:
            "Se integra mejor cuando se combina con hábitos y recomendaciones posteriores a cada sesión.",
        },
      ],
      idealTitle: "Ideal si buscas",
      idealItems: [
        "Trabajar una zona corporal concreta con un plan personalizado.",
        "Acompañar procesos de drenaje, modelado o definición.",
        "Organizar varias sesiones con seguimiento profesional.",
        "Recibir recomendaciones acordes a tu objetivo y estilo de vida.",
      ],
      protocolTitle: "Cómo suele organizarse la sesión",
      protocolSteps: [
        "Evaluación inicial para revisar zona, objetivo y antecedentes relevantes.",
        "Preparación del tejido y elección del protocolo adecuado para la sesión.",
        "Aplicación del trabajo principal con seguimiento del confort y respuesta.",
        "Cierre con recomendaciones y propuesta de continuidad si corresponde.",
      ],
      sessionTitle: "Frecuencia y apoyo del proceso",
      sessionParagraphs: [
        "Muchos protocolos corporales se benefician de varias sesiones espaciadas de forma estratégica para acompañar mejor la evolución.",
        "La constancia, la hidratación y las indicaciones posteriores suelen ser claves para sostener lo trabajado en cabina.",
      ],
      faqTitle: "Preguntas frecuentes",
    },
  };

  const defaults = defaultsByCategory[category?.id];

  if (defaults) {
    return defaults;
  }

  return {
    tags: ["Evaluación previa", "Atención personalizada"],
    heroNote:
      "La valoración profesional permite definir el mejor camino para trabajar tus objetivos de forma segura y personalizada.",
    overviewTitle: `${service.title}: atención personalizada según tus objetivos`,
    overviewParagraphs: [
      `${service.title} se adapta a tu evaluación para definir el enfoque más adecuado dentro de un plan ordenado y realista.`,
      "La recomendación final depende de la zona, el objetivo y la respuesta esperada del tratamiento según tu caso.",
    ],
    focusTitle: "Nuestro enfoque",
    focusParagraph:
      "Priorizamos evaluación, personalización y seguimiento para acompañar mejor cada objetivo.",
    focusItems: [
      "Definir un protocolo acorde a tu necesidad.",
      "Ordenar frecuencia y expectativas de forma realista.",
      "Acompañar el proceso con recomendaciones posteriores.",
    ],
    benefitsTitle: "Qué puede aportar este servicio",
    benefits: [
      {
        title: "Plan personalizado",
        description:
          "Se orienta al objetivo específico definido durante la evaluación.",
      },
      {
        title: "Seguimiento ordenado",
        description:
          "Permite dar continuidad al proceso según la evolución observada.",
      },
      {
        title: "Acompañamiento profesional",
        description:
          "Ayuda a tomar decisiones con una pauta clara de trabajo.",
      },
    ],
    idealTitle: "Ideal si buscas",
    idealItems: [
      "Atención alineada a tus objetivos.",
      "Un protocolo recomendado según evaluación.",
      "Acompañamiento profesional durante el proceso.",
      "Una estrategia progresiva y personalizada.",
    ],
    protocolTitle: "Cómo suele plantearse la sesión",
    protocolSteps: [
      "Evaluación inicial.",
      "Definición del protocolo.",
      "Aplicación del trabajo principal.",
      "Indicaciones posteriores y seguimiento.",
    ],
    sessionTitle: "Frecuencia y continuidad",
    sessionParagraphs: [
      "La frecuencia se ajusta al objetivo y a la respuesta observada en cada etapa del proceso.",
      "Las recomendaciones posteriores ayudan a sostener y acompañar mejor los resultados.",
    ],
    faqTitle: "Preguntas frecuentes",
  };
}

function getCategoryDefaultsEn(service, category) {
  const defaultsByCategory = {
    "facial-cleanse": {
      tags: ["Prior evaluation", "Professional cleanse", "Personalized plan"],
      heroNote:
        "This protocol adapts to your skin’s current condition to support cleansing, freshness, and an overall healthier appearance while keeping the session comfortable.",
      overviewTitle: `${service.title}: cleansing and renewal tailored to your skin`,
      overviewParagraphs: [
        `${service.title} is designed to improve cleanliness, texture, and glow through personalized care based on what your skin needs during evaluation.`,
        "It can be part of a maintenance facial plan or used as a one-time session when you want fresher, more even-looking skin that is better prepared for your home-care routine.",
      ],
      focusTitle: "What we aim to achieve",
      focusParagraph:
        "The priority is to work in an organized way to remove impurities, balance the skin, and leave a visibly clean and comfortable feeling.",
      focusItems: [
        "Improve surface cleansing and the overall appearance of the face or treated area.",
        "Support a more even texture and a visually fresher-looking skin.",
        "Complement maintenance routines or prepare the skin for other protocols.",
      ],
      benefitsTitle: "Benefits this service may provide",
      benefits: [
        {
          title: "Fresher-looking skin",
          description:
            "It can help the skin look cleaner, clearer, and more comfortable.",
        },
        {
          title: "Better texture",
          description:
            "It may contribute to a more even surface and a nicer touch.",
        },
        {
          title: "Natural glow",
          description:
            "It supports a brighter look when integrated correctly into facial care.",
        },
      ],
      idealTitle: "Ideal if you want to",
      idealItems: [
        "Maintain a professional cleansing routine on a regular basis.",
        "Improve the feeling of cleanliness, glow, and freshness in the face.",
        "Prepare the skin before other treatments or special events.",
        "Receive a protocol adapted to the real condition of your skin.",
      ],
      protocolTitle: "How the session is usually developed",
      protocolSteps: [
        "Initial evaluation to review skin type, sensitivity, and the goal of the appointment.",
        "Cleansing and preparation of the area with the most suitable protocol.",
        "Main renewal, extraction, or hydration stage according to the evaluation.",
        "Finishing care with soothing products, protection, and aftercare recommendations.",
      ],
      sessionTitle: "Frequency and recommendations",
      sessionParagraphs: [
        "The frequency depends on your skin condition, your goals, and whether the protocol is used as maintenance or as part of a broader plan.",
        "After the session, care such as hydration, sun protection, and avoiding irritants is usually reinforced according to professional guidance.",
      ],
      faqTitle: "Frequently asked questions",
    },
    "facial-treatment": {
      tags: ["Prior assessment", "Facial plan", "Customized approach"],
      heroNote:
        "Each facial treatment is indicated in a personalized way to prioritize safety, natural-looking results, and realistic goals according to your evaluation.",
      overviewTitle: `${service.title}: a facial protocol designed for progressive results`,
      overviewParagraphs: [
        `${service.title} is part of facial treatments that aim to improve skin quality, definition, or biostimulation according to the technique and goal recommended for each case.`,
        "The recommendation is built after an initial assessment, considering history, areas to treat, timing, and expectations so the plan remains coherent.",
      ],
      focusTitle: "Our treatment approach",
      focusParagraph:
        "We prioritize a progressive strategy that respects facial harmony, skin quality, and a well-supported experience from start to finish.",
      focusItems: [
        "Define the most suitable protocol according to the specific need.",
        "Work with clear goals and professional follow-up.",
        "Maintain natural results aligned with your evaluation.",
      ],
      benefitsTitle: "What this treatment can contribute",
      benefits: [
        {
          title: "Better skin quality",
          description:
            "It can help the skin look more cared for, even, and healthy depending on the selected protocol.",
        },
        {
          title: "Targeted plan",
          description:
            "It addresses specific needs instead of applying the same general approach to everyone.",
        },
        {
          title: "Professional guidance",
          description:
            "It helps organize expectations, frequency, and combinations within a broader facial plan.",
        },
      ],
      idealTitle: "Ideal if you want to",
      idealItems: [
        "Address a specific facial need with prior evaluation.",
        "Improve hydration, texture, firmness, or definition depending on the case.",
        "Build a progressive and personalized facial plan.",
        "Receive professional guidance before choosing a technique or active ingredients.",
      ],
      protocolTitle: "How the protocol is usually planned",
      protocolSteps: [
        "Assessment of the goal, history, and characteristics of the area to be treated.",
        "Definition of the treatment and the recommended order for the session.",
        "Application of the protocol while monitoring comfort and skin response.",
        "Post-care instructions and planning for follow-up or additional sessions if needed.",
      ],
      sessionTitle: "Sessions and follow-up",
      sessionParagraphs: [
        "Some treatments are performed in a single session, while others show better progress when organized over several appointments, according to professional recommendation.",
        "Follow-up helps adjust frequency, combinations, and care in an organized way.",
      ],
      faqTitle: "Frequently asked questions",
    },
    "body-treatment": {
      tags: ["Body assessment", "Customized protocol", "Follow-up"],
      heroNote:
        "The body approach is adapted to the area, the kind of goal, and the recommended pace to support the process in a more effective way.",
      overviewTitle: `${service.title}: body work focused on clear goals`,
      overviewParagraphs: [
        `${service.title} fits within body protocols that aim for contouring, drainage, definition, or silhouette improvement in a personalized and progressive way.`,
        "The initial assessment helps identify the area to be treated, organize expectations, and recommend the most suitable frequency to build a consistent plan.",
      ],
      focusTitle: "What we monitor in every session",
      focusParagraph:
        "The idea is to work with professional criteria, adapt the intensity to your process, and support results in a realistic way.",
      focusItems: [
        "Organize the protocol according to the area and the main goal.",
        "Define a coherent frequency to observe steady progress.",
        "Support the process with follow-up and post-session recommendations.",
      ],
      benefitsTitle: "How this treatment can support the body process",
      benefits: [
        {
          title: "Targeted goal",
          description:
            "It allows specific areas to be addressed within a more organized body plan.",
        },
        {
          title: "Progressive follow-up",
          description:
            "It helps measure progress and adjust the protocol according to each person’s response.",
        },
        {
          title: "Better support",
          description:
            "It integrates better when combined with habits and recommendations after each session.",
        },
      ],
      idealTitle: "Ideal if you want to",
      idealItems: [
        "Work on a specific body area with a personalized plan.",
        "Support drainage, contouring, or definition processes.",
        "Organize several sessions with professional follow-up.",
        "Receive recommendations aligned with your goal and lifestyle.",
      ],
      protocolTitle: "How the session is usually organized",
      protocolSteps: [
        "Initial assessment to review the area, goal, and relevant history.",
        "Tissue preparation and selection of the right protocol for the session.",
        "Application of the main stage while monitoring comfort and response.",
        "Finishing recommendations and continuity proposal if appropriate.",
      ],
      sessionTitle: "Frequency and process support",
      sessionParagraphs: [
        "Many body protocols benefit from several strategically spaced sessions to support the progress more effectively.",
        "Consistency, hydration, and post-care recommendations are often key to maintaining what is worked on in the cabin.",
      ],
      faqTitle: "Frequently asked questions",
    },
  };

  return (
    defaultsByCategory[category?.id] ?? {
      tags: ["Prior evaluation", "Personalized care"],
      heroNote:
        "Professional assessment helps define the best path to work on your goals in a safe and personalized way.",
      overviewTitle: `${service.title}: personalized care aligned with your goals`,
      overviewParagraphs: [
        `${service.title} adapts to your assessment in order to define the most suitable approach within an organized and realistic plan.`,
        "The final recommendation depends on the area, the goal, and the expected response to the treatment according to your case.",
      ],
      focusTitle: "Our approach",
      focusParagraph:
        "We prioritize assessment, personalization, and follow-up to support each goal more effectively.",
      focusItems: [
        "Define a protocol aligned with your specific need.",
        "Organize frequency and expectations in a realistic way.",
        "Support the process with aftercare recommendations.",
      ],
      benefitsTitle: "What this service can provide",
      benefits: [
        {
          title: "Personalized plan",
          description:
            "It is oriented to the specific goal defined during the assessment.",
        },
        {
          title: "Organized follow-up",
          description:
            "It allows continuity according to the observed progress.",
        },
        {
          title: "Professional guidance",
          description:
            "It helps you make decisions with a clear working path.",
        },
      ],
      idealTitle: "Ideal if you want to",
      idealItems: [
        "Care aligned with your goals.",
        "A protocol recommended according to assessment.",
        "Professional support throughout the process.",
        "A progressive and personalized strategy.",
      ],
      protocolTitle: "How the session is usually planned",
      protocolSteps: [
        "Initial assessment.",
        "Protocol definition.",
        "Application of the main stage.",
        "Post-care instructions and follow-up.",
      ],
      sessionTitle: "Frequency and continuity",
      sessionParagraphs: [
        "Frequency is adjusted according to the goal and the response observed at each stage of the process.",
        "Aftercare recommendations help support and sustain the results more effectively.",
      ],
      faqTitle: "Frequently asked questions",
    }
  );
}

const serviceContentById = {
  hidrafacial: {
    tags: ["Glow inmediato", "Hidratación profunda", "Sin larga recuperación"],
    heroNote:
      "Es una opción muy valorada cuando buscas una piel más fresca, luminosa y con mejor hidratación desde la misma sesión.",
    overviewTitle: "Hidrafacial: limpieza profunda con hidratación y glow visible",
    overviewParagraphs: [
      "Hidrafacial combina limpieza, exfoliación, extracción suave e infusión de activos para dejar la piel con sensación de frescura, limpieza y mejor luminosidad.",
      "Suele indicarse cuando quieres una sesión confortable que ayude a mejorar textura, hidratación y apariencia general sin un tiempo largo de recuperación.",
    ],
    focusParagraph:
      "Buscamos limpiar sin resecar, hidratar de forma visible y dejar la piel más uniforme como parte de un mantenimiento facial o preparación previa a un evento.",
    focusItems: [
      "Retirar residuos y exceso de sebo con una limpieza más cómoda.",
      "Aportar hidratación y sensación de piel descansada.",
      "Favorecer una apariencia más luminosa y uniforme.",
    ],
    benefits: [
      {
        title: "Glow rápido",
        description:
          "Suele dejar la piel con una apariencia más fresca y luminosa tras la sesión.",
      },
      {
        title: "Mayor hidratación",
        description:
          "Ayuda a que la piel se sienta más cómoda y menos tirante.",
      },
      {
        title: "Textura más lisa",
        description:
          "Puede mejorar el acabado general de la piel y su sensación al tacto.",
      },
    ],
    idealItems: [
      "Notas la piel opaca o deshidratada.",
      "Buscas una limpieza facial con sensación de confort.",
      "Quieres preparar la piel antes de un evento especial.",
      "Deseas una sesión de mantenimiento para conservar glow y frescura.",
    ],
    protocolSteps: [
      "Limpieza inicial y valoración del estado de la piel.",
      "Exfoliación y trabajo principal para retirar impurezas de forma controlada.",
      "Infusión de activos hidratantes según la necesidad observada.",
      "Cierre con protección y recomendaciones posteriores.",
    ],
    sessionParagraphs: [
      "Puede utilizarse como mantenimiento periódico o como sesión puntual previa a una fecha importante, según el estado de tu piel.",
      "Después de la sesión suele recomendarse fotoprotección, hidratación y continuidad con una rutina suave.",
    ],
  },
  peeling: {
    tags: ["Renovación cutánea", "Mejora textura", "Plan gradual"],
    heroNote:
      "Se adapta al tipo de piel y al objetivo de renovación para trabajar textura, luminosidad y uniformidad con una pauta profesional.",
    overviewTitle: "Peeling: renovación controlada para una piel más uniforme",
    overviewParagraphs: [
      "El peeling es un protocolo de renovación superficial o progresiva que busca mejorar la textura, el tono y la apariencia general de la piel según la evaluación previa.",
      "No todos los peelings tienen la misma intensidad. Por eso la elección del tipo de protocolo depende del estado de la piel, sensibilidad, rutina actual y objetivo buscado.",
    ],
    focusParagraph:
      "La prioridad es renovar de forma controlada, respetando la tolerancia cutánea y planteando un protocolo acorde al momento de tu piel.",
    focusItems: [
      "Acompañar procesos de textura irregular o falta de luminosidad.",
      "Trabajar un tono más uniforme con indicación profesional.",
      "Integrar la renovación dentro de un plan facial progresivo.",
    ],
    benefits: [
      {
        title: "Textura más uniforme",
        description:
          "Puede ayudar a que la piel se vea más lisa y refinada con el tiempo.",
      },
      {
        title: "Mayor luminosidad",
        description:
          "Favorece una piel con aspecto más renovado y menos apagado.",
      },
      {
        title: "Plan escalonado",
        description:
          "Permite ajustar intensidad y frecuencia según la respuesta cutánea.",
      },
    ],
    idealItems: [
      "Buscas una renovación facial progresiva y personalizada.",
      "Quieres mejorar la apariencia de textura o tono desigual.",
      "Deseas complementar otros tratamientos faciales de forma ordenada.",
      "Necesitas una valoración profesional para elegir intensidad y frecuencia.",
    ],
    protocolSteps: [
      "Evaluación de la piel, tolerancia y antecedentes relevantes.",
      "Preparación de la zona y selección del peeling adecuado.",
      "Aplicación controlada del protocolo con monitoreo profesional.",
      "Neutralización o cierre, más recomendaciones específicas de cuidado.",
    ],
    sessionParagraphs: [
      "La frecuencia depende del tipo de peeling indicado y del objetivo facial. En muchos casos se trabaja en sesiones planificadas y no como intervención aislada.",
      "La fotoprotección y el cuidado posterior son especialmente importantes para acompañar adecuadamente la renovación cutánea.",
    ],
  },
  "exfoliacion-espalda": {
    tags: ["Limpieza corporal", "Espalda más uniforme", "Cuidado de textura"],
    heroNote:
      "Es una alternativa muy útil cuando quieres mejorar la apariencia de la espalda, sobre todo en temporadas de ropa abierta o como parte de tu rutina corporal.",
    overviewTitle: "Exfoliación de espalda: limpieza y renovación para una zona muchas veces olvidada",
    overviewParagraphs: [
      "La exfoliación de espalda trabaja limpieza, renovación superficial y mejora del acabado de la piel en una zona que suele acumular sudor, residuos y textura irregular.",
      "Se adapta según la sensibilidad, el nivel de congestión y el objetivo estético, buscando dejar la espalda más fresca, uniforme y visualmente más prolija.",
    ],
    focusParagraph:
      "Buscamos una espalda con mejor limpieza, textura y aspecto general mediante un protocolo cómodo y adaptado a la necesidad real de la zona.",
    focusItems: [
      "Retirar células muertas y residuos acumulados.",
      "Favorecer una sensación de limpieza corporal más profunda.",
      "Mejorar la apariencia de la piel antes de eventos o temporadas calurosas.",
    ],
    benefits: [
      {
        title: "Piel más suave",
        description:
          "Puede dejar la superficie de la espalda con mejor sensación al tacto.",
      },
      {
        title: "Mejor apariencia",
        description:
          "Ayuda a que la zona se vea más limpia y ordenada visualmente.",
      },
      {
        title: "Cuidado puntual o regular",
        description:
          "Puede realizarse de forma periódica según necesidad y objetivo.",
      },
    ],
    idealItems: [
      "Quieres mejorar la apariencia de la espalda antes de un evento.",
      "Notas textura irregular o acumulación de residuos en la zona.",
      "Buscas sumar limpieza corporal profesional a tu rutina.",
      "Deseas una espalda más fresca y estética en temporada de calor.",
    ],
    protocolSteps: [
      "Evaluación breve de la zona y preparación de la piel.",
      "Limpieza y exfoliación adaptadas al nivel de sensibilidad.",
      "Trabajo principal para renovar la superficie y dejar mejor acabado.",
      "Cierre con productos de confort y recomendaciones posteriores.",
    ],
    sessionParagraphs: [
      "Puede realizarse como sesión puntual o dentro de una rutina corporal periódica cuando buscas mantener mejor la apariencia de la espalda.",
      "Después del protocolo se suelen reforzar medidas como hidratación y evitar irritación excesiva en la zona tratada.",
    ],
  },
  pqage: {
    tags: ["Bioestimulación", "Firmeza", "Luminosidad"],
    heroNote:
      "Suele recomendarse cuando buscas trabajar calidad de piel, luminosidad y firmeza dentro de un plan facial progresivo.",
    overviewTitle: "PQAge: bioestimulación para mejorar calidad de piel sin perder naturalidad",
    overviewParagraphs: [
      "PQAge es un tratamiento orientado a estimular la piel y acompañar objetivos de firmeza, textura y luminosidad dentro de un enfoque facial más integral.",
      "Se valora especialmente cuando se busca un protocolo de rejuvenecimiento progresivo que cuide la armonía del rostro y la calidad cutánea.",
    ],
    focusParagraph:
      "La meta es activar la piel de forma controlada para mejorar su apariencia general, respetando tiempos y necesidades de cada rostro.",
    focusItems: [
      "Favorecer una piel con mejor textura y aspecto más uniforme.",
      "Acompañar objetivos de firmeza y revitalización facial.",
      "Integrar la bioestimulación dentro de un plan ordenado de sesiones.",
    ],
    benefits: [
      {
        title: "Piel más revitalizada",
        description:
          "Puede ayudar a que el rostro se vea más descansado y luminoso.",
      },
      {
        title: "Mejor soporte cutáneo",
        description:
          "Se orienta a acompañar procesos de firmeza y calidad de piel.",
      },
      {
        title: "Enfoque progresivo",
        description:
          "Funciona mejor cuando se indica con criterio y seguimiento.",
      },
    ],
    idealItems: [
      "Buscas mejorar luminosidad y calidad cutánea.",
      "Quieres trabajar firmeza sin cambiar la expresión natural del rostro.",
      "Deseas un protocolo de bioestimulación dentro de un plan facial.",
      "Prefieres una estrategia progresiva y personalizada.",
    ],
    protocolSteps: [
      "Evaluación facial para definir indicación y plan recomendado.",
      "Preparación de la piel y desarrollo del protocolo según técnica indicada.",
      "Seguimiento del confort y respuesta cutánea durante la sesión.",
      "Indicaciones posteriores y propuesta de continuidad si corresponde.",
    ],
    sessionParagraphs: [
      "La cantidad de sesiones y su frecuencia dependen del estado de la piel y del objetivo planteado en la evaluación inicial.",
      "Suele recomendarse seguimiento para medir evolución y decidir si conviene combinarlo con otros protocolos faciales.",
    ],
  },
  dermapen: {
    tags: ["Microneedling", "Textura", "Bioestimulación"],
    heroNote:
      "Es una alternativa muy usada cuando se quiere trabajar textura, poros o marcas dentro de un plan facial con seguimiento profesional.",
    overviewTitle: "Dermapen: microneedling orientado a renovación y estimulación de la piel",
    overviewParagraphs: [
      "Dermapen trabaja mediante microcanales controlados que ayudan a estimular procesos de renovación cutánea y a mejorar la apariencia general de la piel.",
      "Suele indicarse para acompañar objetivos como textura irregular, poros visibles o necesidad de un protocolo de bioestimulación progresivo.",
    ],
    focusParagraph:
      "La idea es trabajar de forma precisa y ordenada para apoyar una piel más uniforme, mejor preparada y con evolución progresiva.",
    focusItems: [
      "Acompañar objetivos de textura y acabado cutáneo.",
      "Integrar activos dentro de un plan de microneedling personalizado.",
      "Construir mejoras progresivas con sesiones pautadas.",
    ],
    benefits: [
      {
        title: "Textura más pareja",
        description:
          "Puede contribuir a una piel con superficie más uniforme con el tiempo.",
      },
      {
        title: "Mejor aspecto de poros",
        description:
          "Ayuda a trabajar visualmente el refinamiento general de la piel.",
      },
      {
        title: "Plan adaptable",
        description:
          "Permite ajustar profundidad, activos y frecuencia según evaluación.",
      },
    ],
    idealItems: [
      "Quieres mejorar textura o poros visibles.",
      "Buscas un protocolo progresivo de bioestimulación facial.",
      "Deseas acompañar el trabajo de marcas o irregularidades cutáneas.",
      "Te interesa una estrategia en varias sesiones con control profesional.",
    ],
    protocolSteps: [
      "Evaluación de la piel y definición del objetivo principal.",
      "Preparación y elección del protocolo de microneedling adecuado.",
      "Aplicación del tratamiento con seguimiento del confort.",
      "Cierre con cuidados posteriores y planificación del siguiente control.",
    ],
    sessionParagraphs: [
      "Dermapen suele organizarse en varias sesiones para acompañar mejor la evolución de textura y calidad de piel.",
      "El cuidado posterior, la fotoprotección y respetar los tiempos entre sesiones forman parte importante del plan.",
    ],
  },
  "prp-capilar": {
    tags: ["Bioestimulación capilar", "Cuero cabelludo", "Plan de seguimiento"],
    heroNote:
      "Se utiliza como apoyo dentro de planes capilares que buscan fortalecer el entorno del folículo y acompañar mejor la salud del cuero cabelludo.",
    overviewTitle: "PRP capilar: enfoque regenerativo para acompañar protocolos de fortalecimiento capilar",
    overviewParagraphs: [
      "PRP capilar utiliza plasma rico en plaquetas dentro de un protocolo orientado a estimular el cuero cabelludo y acompañar estrategias de fortalecimiento capilar.",
      "Su indicación depende de la valoración previa, ya que suele formar parte de un plan organizado según evolución, antecedentes y objetivo del paciente.",
    ],
    focusParagraph:
      "Buscamos acompañar el entorno capilar con una estrategia progresiva, ordenada y alineada a la evaluación profesional previa.",
    focusItems: [
      "Estimular el cuero cabelludo dentro de un plan regenerativo.",
      "Acompañar procesos de fortalecimiento y cuidado del folículo.",
      "Dar continuidad a un protocolo capilar con seguimiento.",
    ],
    benefits: [
      {
        title: "Apoyo del cuero cabelludo",
        description:
          "Se orienta a mejorar el entorno donde se desarrolla el folículo.",
      },
      {
        title: "Plan progresivo",
        description:
          "Suele indicarse en varias sesiones con revisión de evolución.",
      },
      {
        title: "Tratamiento personalizado",
        description:
          "La frecuencia y pauta dependen del caso y de la respuesta observada.",
      },
    ],
    idealItems: [
      "Buscas acompañar un plan de fortalecimiento capilar.",
      "Quieres recibir una valoración profesional del cuero cabelludo.",
      "Te interesa un protocolo regenerativo en sesiones pautadas.",
      "Necesitas seguimiento dentro de un enfoque capilar más amplio.",
    ],
    protocolSteps: [
      "Evaluación capilar para revisar antecedentes y objetivo del plan.",
      "Definición del protocolo y de la secuencia recomendada de sesiones.",
      "Aplicación del tratamiento con control del confort durante la sesión.",
      "Indicaciones posteriores y seguimiento según evolución.",
    ],
    sessionParagraphs: [
      "Suele trabajarse como parte de un plan capilar y no solamente como sesión aislada, ya que la constancia permite acompañar mejor el proceso.",
      "La frecuencia exacta depende de la evaluación y de la evolución observada en controles posteriores.",
    ],
  },
  "plasma-capilar": {
    tags: ["Regeneración capilar", "Seguimiento", "Plan personalizado"],
    heroNote:
      "Puede integrarse dentro de protocolos capilares que buscan acompañar la recuperación y el fortalecimiento del cuero cabelludo.",
    overviewTitle: "Plasma capilar: una alternativa regenerativa dentro del abordaje capilar",
    overviewParagraphs: [
      "Plasma capilar es un protocolo orientado a acompañar la salud del cuero cabelludo y el fortalecimiento del cabello desde una mirada progresiva y personalizada.",
      "La recomendación se define según evaluación, ya que cada caso puede requerir distinta frecuencia, combinación de técnicas y control del avance.",
    ],
    focusParagraph:
      "La meta es apoyar el entorno capilar con un plan ordenado, realista y ajustado a la necesidad observada durante la valoración.",
    focusItems: [
      "Acompañar estrategias de fortalecimiento capilar.",
      "Trabajar con seguimiento profesional y metas progresivas.",
      "Definir continuidad y combinaciones según evaluación.",
    ],
    benefits: [
      {
        title: "Acompañamiento del plan capilar",
        description:
          "Permite dar estructura a un proceso de cuidado y estimulación.",
      },
      {
        title: "Seguimiento cercano",
        description:
          "Facilita evaluar respuesta y ajustar la pauta de sesiones.",
      },
      {
        title: "Enfoque personalizado",
        description:
          "La indicación se adapta al estado del cuero cabelludo y al objetivo buscado.",
      },
    ],
    idealItems: [
      "Quieres trabajar un protocolo capilar con seguimiento.",
      "Buscas una estrategia regenerativa dentro de tu plan de cuidado.",
      "Necesitas evaluación profesional antes de iniciar sesiones.",
      "Deseas acompañar objetivos de fortalecimiento de forma progresiva.",
    ],
    protocolSteps: [
      "Valoración del caso y planificación del tratamiento capilar.",
      "Preparación del área y desarrollo del protocolo indicado.",
      "Aplicación de la sesión con control del confort.",
      "Indicaciones posteriores y seguimiento de evolución.",
    ],
    sessionParagraphs: [
      "El número de sesiones depende del diagnóstico y del objetivo del plan capilar. En muchos casos se recomiendan varias citas distribuidas en el tiempo.",
      "La continuidad del tratamiento y los hábitos de cuidado en casa también forman parte importante del proceso.",
    ],
  },
  hidralips: {
    tags: ["Labios hidratados", "Suavidad", "Mejor definición"],
    heroNote:
      "Es una opción muy buscada cuando deseas labios más hidratados, suaves y con mejor apariencia general sin perder naturalidad.",
    overviewTitle: "Hidralips: hidratación y cuidado para una mejor apariencia de labios",
    overviewParagraphs: [
      "Hidralips es un protocolo orientado a mejorar hidratación, suavidad y confort en la zona labial, ayudando a que los labios luzcan más cuidados y saludables.",
      "Se adapta según el estado de la piel del labio y el objetivo estético, ya sea mantenimiento, recuperación de confort o mejora del acabado general.",
    ],
    focusParagraph:
      "La idea es devolver suavidad, hidratar la zona y mejorar visualmente la calidad del labio dentro de un protocolo cómodo y personalizado.",
    focusItems: [
      "Mejorar la hidratación visible de los labios.",
      "Favorecer una superficie más suave y uniforme.",
      "Acompañar el cuidado labial como mantenimiento estético.",
    ],
    benefits: [
      {
        title: "Más confort",
        description:
          "Ayuda a reducir sensación de resequedad y tirantez en la zona.",
      },
      {
        title: "Mejor acabado",
        description:
          "Puede dejar los labios con apariencia más cuidada y homogénea.",
      },
      {
        title: "Mantenimiento labial",
        description:
          "Se integra bien dentro de rutinas de cuidado y embellecimiento labial.",
      },
    ],
    idealItems: [
      "Notas labios resecos o con acabado irregular.",
      "Quieres una mejora visible sin perder naturalidad.",
      "Buscas mantenimiento estético de la zona labial.",
      "Deseas un protocolo cómodo y orientado al cuidado del labio.",
    ],
    protocolSteps: [
      "Evaluación de la zona y del objetivo principal del tratamiento.",
      "Preparación del labio y selección del protocolo indicado.",
      "Aplicación del trabajo principal según la necesidad observada.",
      "Cierre con indicaciones para cuidar mejor la zona en casa.",
    ],
    sessionParagraphs: [
      "La frecuencia depende del nivel de deshidratación, del objetivo estético y del plan recomendado en consulta.",
      "Los cuidados posteriores suelen enfocarse en protección, hidratación continua y evitar factores que resequen la zona.",
    ],
  },
  peptona: {
    tags: ["Péptidos", "Calidad de piel", "Firmeza"],
    heroNote:
      "Se recomienda cuando buscas revitalizar la piel y trabajar calidad cutánea dentro de un enfoque facial progresivo.",
    overviewTitle: "Peptona: bioestimulación para acompañar hidratación y firmeza",
    overviewParagraphs: [
      "Peptona es un protocolo de bioestimulación con péptidos orientado a mejorar la apariencia general de la piel, su hidratación y su sensación de soporte cutáneo.",
      "Puede integrarse dentro de planes faciales que buscan revitalizar el rostro de manera progresiva y personalizada, según evaluación.",
    ],
    focusParagraph:
      "La intención es reforzar calidad de piel, confort e hidratación visible mediante un abordaje ordenado y acorde a cada necesidad.",
    focusItems: [
      "Acompañar objetivos de hidratación y revitalización.",
      "Favorecer una apariencia de piel más cuidada y uniforme.",
      "Integrar bioestimulación en un plan facial progresivo.",
    ],
    benefits: [
      {
        title: "Piel más confortable",
        description:
          "Puede ayudar a mejorar la sensación de hidratación y bienestar cutáneo.",
      },
      {
        title: "Revitalización",
        description:
          "Se orienta a que la piel luzca más fresca y luminosa.",
      },
      {
        title: "Trabajo progresivo",
        description:
          "Permite ordenar sesiones y seguimiento según evolución.",
      },
    ],
    idealItems: [
      "Buscas mejorar hidratación y calidad de piel.",
      "Quieres un protocolo de revitalización facial progresiva.",
      "Te interesa complementar otros tratamientos de bioestimulación.",
      "Deseas una valoración profesional antes de elegir activos o técnica.",
    ],
    protocolSteps: [
      "Valoración del estado de la piel y definición de objetivo.",
      "Preparación de la zona y elección del protocolo con péptidos.",
      "Aplicación del tratamiento con control del confort.",
      "Indicaciones posteriores y planificación del seguimiento.",
    ],
    sessionParagraphs: [
      "La cantidad de sesiones depende de la calidad de piel inicial y del objetivo del plan facial recomendado.",
      "Suele combinarse mejor con seguimiento, rutina adecuada y control periódico de la respuesta cutánea.",
    ],
  },
  exosomas: {
    tags: ["Regeneración", "Revitalización", "Calidad cutánea"],
    heroNote:
      "Se orienta a planes faciales que buscan apoyar regeneración, luminosidad y una apariencia de piel más saludable.",
    overviewTitle: "Exosomas: un protocolo avanzado para revitalizar la piel",
    overviewParagraphs: [
      "Los exosomas se utilizan dentro de protocolos faciales avanzados orientados a regeneración, luminosidad y mejora de la calidad cutánea.",
      "Su indicación depende de la evaluación, ya que suelen integrarse dentro de un plan más amplio de rejuvenecimiento o recuperación de la piel.",
    ],
    focusParagraph:
      "La prioridad es apoyar una piel más revitalizada, uniforme y luminosa mediante una estrategia personalizada y bien guiada.",
    focusItems: [
      "Acompañar protocolos de recuperación y regeneración cutánea.",
      "Mejorar la apariencia global de la piel con enfoque progresivo.",
      "Integrar tecnología avanzada dentro de un plan facial coherente.",
    ],
    benefits: [
      {
        title: "Más luminosidad",
        description:
          "Puede favorecer una piel con apariencia más descansada y uniforme.",
      },
      {
        title: "Mejor calidad cutánea",
        description:
          "Se orienta a trabajar textura, confort y aspecto general de la piel.",
      },
      {
        title: "Plan de rejuvenecimiento",
        description:
          "Suele combinarse bien con otras estrategias faciales según evaluación.",
      },
    ],
    idealItems: [
      "Buscas revitalización facial con tecnología avanzada.",
      "Quieres acompañar procesos de regeneración cutánea.",
      "Deseas una piel con mejor luminosidad y aspecto general.",
      "Te interesa un protocolo facial personalizado y progresivo.",
    ],
    protocolSteps: [
      "Evaluación profesional para definir indicación y objetivo.",
      "Preparación de la piel y elección del abordaje recomendado.",
      "Aplicación del protocolo con seguimiento del confort.",
      "Indicaciones posteriores y pauta de continuidad si corresponde.",
    ],
    sessionParagraphs: [
      "La frecuencia depende del plan facial elegido y del objetivo de regeneración o revitalización planteado en consulta.",
      "El acompañamiento posterior y la combinación con otros protocolos se define según la respuesta observada en cada control.",
    ],
  },
  "exosomas-v-tech": {
    tags: ["Exosomas", "Revitalización", "Plan facial"],
    heroNote:
      "Esta variante se integra en planes orientados a calidad de piel, recuperación y rejuvenecimiento facial con enfoque personalizado.",
    overviewTitle: "Exosomas V-Tech: una variante enfocada en revitalización cutánea",
    overviewParagraphs: [
      "Exosomas V-Tech es una alternativa dentro de los tratamientos con exosomas, orientada a apoyar regeneración, luminosidad y mejor apariencia global de la piel.",
      "Su uso se define de manera personalizada para integrarlo a planes faciales coherentes con el estado cutáneo y el objetivo principal del tratamiento.",
    ],
    focusParagraph:
      "Buscamos una piel más revitalizada, con mejor calidad visual y un protocolo adaptado a la necesidad real del rostro.",
    focusItems: [
      "Acompañar procesos de regeneración y revitalización cutánea.",
      "Trabajar una piel con mejor textura, confort y luminosidad.",
      "Integrar la tecnología dentro de un plan facial bien indicado.",
    ],
    benefits: [
      {
        title: "Piel más uniforme",
        description:
          "Puede ayudar a que el rostro se vea más equilibrado y descansado.",
      },
      {
        title: "Revitalización visible",
        description:
          "Se orienta a mejorar la apariencia general de la calidad cutánea.",
      },
      {
        title: "Protocolo flexible",
        description:
          "Permite adaptarlo según evaluación y combinarlo si corresponde.",
      },
    ],
    idealItems: [
      "Quieres una alternativa de exosomas dentro de tu plan facial.",
      "Buscas revitalización y mejora de la apariencia de la piel.",
      "Deseas un tratamiento evaluado de forma personalizada.",
      "Te interesa una estrategia progresiva y combinable.",
    ],
    protocolSteps: [
      "Valoración de la piel y del objetivo del protocolo.",
      "Definición de la estrategia con exosomas V-Tech según evaluación.",
      "Aplicación del tratamiento siguiendo la pauta indicada.",
      "Cierre con recomendaciones y seguimiento posterior.",
    ],
    sessionParagraphs: [
      "La pauta de sesiones depende del objetivo, de la condición de la piel y de si se integra con otros protocolos faciales.",
      "El seguimiento posterior ayuda a decidir continuidad, refuerzo o combinación según evolución.",
    ],
  },
  "exosomas-youtheal": {
    tags: ["Exosomas", "Rejuvenecimiento", "Calidad de piel"],
    heroNote:
      "Se recomienda cuando buscas una estrategia de revitalización facial orientada a mejor calidad de piel y apariencia más fresca.",
    overviewTitle: "Exosomas Youtheal: revitalización facial con enfoque progresivo",
    overviewParagraphs: [
      "Exosomas Youtheal es otra alternativa dentro de los protocolos con exosomas, enfocada en acompañar rejuvenecimiento, luminosidad y mejor calidad cutánea.",
      "La indicación se ajusta al estado de la piel y al objetivo estético, buscando integrarlo en un plan facial bien estructurado.",
    ],
    focusParagraph:
      "La idea es apoyar una piel con mejor aspecto general, más luminosa y con un plan de trabajo coherente y personalizado.",
    focusItems: [
      "Acompañar objetivos de rejuvenecimiento y revitalización facial.",
      "Favorecer mejor textura y apariencia global de la piel.",
      "Construir un protocolo progresivo con seguimiento profesional.",
    ],
    benefits: [
      {
        title: "Aspecto más descansado",
        description:
          "Puede ayudar a que la piel se vea más fresca y cuidada.",
      },
      {
        title: "Mejor calidad visual",
        description:
          "Se orienta a trabajar luminosidad, textura y uniformidad general.",
      },
      {
        title: "Seguimiento ordenado",
        description:
          "Permite ajustar el plan de sesiones y combinaciones según respuesta.",
      },
    ],
    idealItems: [
      "Buscas revitalización facial progresiva.",
      "Quieres mejorar la apariencia general de la piel.",
      "Te interesa una variante de exosomas con evaluación previa.",
      "Deseas integrar tecnología avanzada a tu plan facial.",
    ],
    protocolSteps: [
      "Evaluación del caso y definición del objetivo principal.",
      "Selección del protocolo con exosomas Youtheal según necesidad.",
      "Aplicación del tratamiento con supervisión profesional.",
      "Recomendaciones posteriores y pauta de continuidad.",
    ],
    sessionParagraphs: [
      "La frecuencia depende del plan sugerido en consulta y de si el objetivo es revitalización, mantenimiento o combinación con otros protocolos.",
      "El seguimiento sirve para medir evolución y ajustar el tratamiento según la respuesta cutánea.",
    ],
  },
  rejuran: {
    tags: ["Bioestimulación", "Elasticidad", "Calidad cutánea"],
    heroNote:
      "Suele recomendarse cuando buscas mejorar elasticidad, textura y apariencia saludable de la piel dentro de un plan facial progresivo.",
    overviewTitle: "Rejuran: bioestimulación orientada a una piel más elástica y uniforme",
    overviewParagraphs: [
      "Rejuran es un tratamiento facial orientado a mejorar calidad de piel, elasticidad y textura, priorizando una evolución progresiva y personalizada.",
      "Puede formar parte de protocolos que buscan revitalizar el rostro y trabajar una piel con mejor soporte visual sin cambiar la expresión natural.",
    ],
    focusParagraph:
      "La meta es reforzar la calidad cutánea y acompañar una apariencia más uniforme, saludable y descansada.",
    focusItems: [
      "Acompañar objetivos de elasticidad y textura.",
      "Favorecer una piel más uniforme y con mejor calidad visual.",
      "Integrarse a planes faciales de rejuvenecimiento progresivo.",
    ],
    benefits: [
      {
        title: "Mejor elasticidad",
        description:
          "Se orienta a trabajar soporte y sensación de piel más firme.",
      },
      {
        title: "Textura más cuidada",
        description:
          "Puede ayudar a mejorar el acabado general del rostro.",
      },
      {
        title: "Rejuvenecimiento progresivo",
        description:
          "Funciona mejor como parte de un plan facial estructurado.",
      },
    ],
    idealItems: [
      "Buscas trabajar calidad de piel y elasticidad.",
      "Quieres una estrategia facial progresiva de rejuvenecimiento.",
      "Deseas mejorar textura y apariencia saludable del rostro.",
      "Necesitas una valoración para definir pauta y combinaciones.",
    ],
    protocolSteps: [
      "Evaluación inicial para definir indicación y objetivo del plan.",
      "Preparación de la zona y desarrollo del protocolo indicado.",
      "Aplicación del tratamiento con seguimiento del confort.",
      "Indicaciones posteriores y definición de próximos controles.",
    ],
    sessionParagraphs: [
      "El número de sesiones depende del estado inicial de la piel y del objetivo del tratamiento. En muchos casos se recomienda un plan progresivo.",
      "El seguimiento posterior ayuda a decidir continuidad y posibles combinaciones dentro de una estrategia de rejuvenecimiento facial.",
    ],
  },
  mesoterapia: {
    tags: ["Microaplicaciones", "Activos personalizados", "Revitalización"],
    heroNote:
      "La mesoterapia se adapta al objetivo del tratamiento para aportar activos que acompañen hidratación, revitalización o necesidades faciales específicas.",
    overviewTitle: "Mesoterapia: un protocolo personalizado según los activos que tu piel necesita",
    overviewParagraphs: [
      "La mesoterapia trabaja con microaplicaciones de activos seleccionados según el objetivo facial, como hidratación, revitalización o soporte de calidad cutánea.",
      "Su principal ventaja es que permite personalizar el plan de trabajo según la necesidad observada durante la evaluación, en lugar de usar un enfoque general.",
    ],
    focusParagraph:
      "Buscamos aportar activos de forma dirigida para acompañar la necesidad principal del rostro con una pauta personalizada.",
    focusItems: [
      "Definir activos y enfoque según evaluación de la piel.",
      "Acompañar hidratación, revitalización o soporte cutáneo.",
      "Integrar el protocolo dentro de un plan facial coherente.",
    ],
    benefits: [
      {
        title: "Tratamiento a medida",
        description:
          "Permite seleccionar activos en función del objetivo concreto del paciente.",
      },
      {
        title: "Revitalización dirigida",
        description:
          "Ayuda a acompañar necesidades como hidratación o mejora del aspecto general.",
      },
      {
        title: "Combinación estratégica",
        description:
          "Puede formar parte de planes faciales más amplios cuando está bien indicado.",
      },
    ],
    idealItems: [
      "Buscas un protocolo facial con activos personalizados.",
      "Quieres mejorar hidratación o revitalización de la piel.",
      "Deseas complementar otros tratamientos faciales de manera ordenada.",
      "Prefieres una pauta ajustada a tu evaluación y objetivos.",
    ],
    protocolSteps: [
      "Evaluación del objetivo facial y selección de activos adecuados.",
      "Preparación de la piel y definición de la técnica de aplicación.",
      "Desarrollo del protocolo con seguimiento del confort.",
      "Recomendaciones posteriores y planificación de continuidad.",
    ],
    sessionParagraphs: [
      "La frecuencia cambia según los activos seleccionados, la respuesta de la piel y el objetivo del plan facial recomendado.",
      "Suele indicar mejores resultados cuando se integra a una estrategia ordenada y no solo como sesión aislada.",
    ],
  },
  "acido-hialuronico": {
    tags: ["Armonización facial", "Definición", "Volumen localizado"],
    heroNote:
      "Se utiliza cuando buscas aportar volumen, definición o hidratación localizada respetando la armonía general del rostro.",
    overviewTitle: "Ácido hialurónico: definición, soporte e hidratación localizada",
    overviewParagraphs: [
      "El ácido hialurónico se emplea en medicina estética facial para aportar soporte, definición o volumen localizado según la zona y el objetivo indicado tras la evaluación.",
      "Puede utilizarse para trabajar armonización facial en puntos estratégicos, siempre con una recomendación personalizada y expectativas realistas.",
    ],
    focusParagraph:
      "La prioridad es lograr un resultado equilibrado y acorde al rostro, definiendo con claridad qué zona se trabajará y con qué objetivo.",
    focusItems: [
      "Aportar volumen o soporte en zonas específicas.",
      "Mejorar definición y proporción facial según evaluación.",
      "Mantener naturalidad dentro de una armonización bien planteada.",
    ],
    benefits: [
      {
        title: "Definición localizada",
        description:
          "Permite trabajar zonas concretas con un enfoque estructurado.",
      },
      {
        title: "Armonía facial",
        description:
          "Se orienta a mejorar proporciones sin perder identidad del rostro.",
      },
      {
        title: "Plan personalizado",
        description:
          "La indicación depende de la anatomía, la necesidad y el resultado buscado.",
      },
    ],
    idealItems: [
      "Buscas definir o dar soporte a una zona específica.",
      "Quieres armonizar rasgos de forma controlada y natural.",
      "Deseas una evaluación previa antes de decidir la técnica.",
      "Te interesa una recomendación profesional según proporción y objetivo.",
    ],
    protocolSteps: [
      "Valoración facial para revisar proporciones, zonas y objetivo.",
      "Definición del producto, cantidad estimada y estrategia de aplicación.",
      "Aplicación del tratamiento según el plan trazado.",
      "Indicaciones posteriores y control si es necesario.",
    ],
    sessionParagraphs: [
      "Dependiendo de la zona tratada, puede requerirse control posterior para revisar integración del resultado y decidir si se necesita ajuste.",
      "La recomendación final siempre depende de la evaluación facial y de la armonía global del rostro, no solo de un punto aislado.",
    ],
  },
  rinomodelacion: {
    tags: ["Perfil nasal", "Armonización", "Sin cirugía"],
    heroNote:
      "Está orientada a quienes buscan mejorar el perfil nasal de forma sutil, controlada y dentro de una evaluación facial completa.",
    overviewTitle: "Rinomodelación: armonización del perfil nasal sin cirugía",
    overviewParagraphs: [
      "La rinomodelación busca mejorar visualmente el perfil nasal mediante un abordaje no quirúrgico orientado a armonizar puente, proyección o pequeños desbalances según evaluación.",
      "No reemplaza una cirugía ni sirve para todos los casos. Por eso la indicación se define con una valoración detallada de la anatomía y de las expectativas del paciente.",
    ],
    focusParagraph:
      "La meta es lograr una armonización sutil del perfil nasal dentro del equilibrio general del rostro, con criterio profesional y expectativas realistas.",
    focusItems: [
      "Revisar si el caso es apto para un abordaje no quirúrgico.",
      "Buscar una corrección visual sutil y bien proporcionada.",
      "Trabajar el perfil dentro del conjunto del rostro, no de forma aislada.",
    ],
    benefits: [
      {
        title: "Armonización del perfil",
        description:
          "Puede ayudar a equilibrar visualmente ciertas zonas del dorso o la proyección nasal.",
      },
      {
        title: "Enfoque controlado",
        description:
          "La evaluación previa define si es una opción adecuada para tu caso.",
      },
      {
        title: "Resultado planificado",
        description:
          "Se orienta a mantener naturalidad y proporción con el resto del rostro.",
      },
    ],
    idealItems: [
      "Buscas una mejora sutil del perfil nasal.",
      "Quieres valorar una alternativa sin cirugía según tu caso.",
      "Deseas armonizar el rostro con un enfoque proporcional.",
      "Necesitas orientación profesional sobre si eres apta para el procedimiento.",
    ],
    protocolSteps: [
      "Evaluación facial y análisis del perfil nasal desde distintos ángulos.",
      "Definición de objetivo, límites del tratamiento e indicación real.",
      "Aplicación del protocolo cuando el caso es apto para la técnica.",
      "Seguimiento posterior para valorar evolución y resultado.",
    ],
    sessionParagraphs: [
      "La rinomodelación requiere una indicación muy cuidadosa. No todos los perfiles ni todas las expectativas son candidatas para este tipo de tratamiento.",
      "El control posterior es importante para verificar integración y decidir si el resultado ya está completo o si requiere alguna revisión.",
    ],
  },
  hialuronidasa: {
    tags: ["Corrección", "Evaluación previa", "Revisión de resultados"],
    heroNote:
      "Se indica cuando se necesita corregir, modular o revisar resultados previos relacionados con ácido hialurónico, siempre bajo valoración profesional.",
    overviewTitle: "Hialuronidasa: una opción para corregir o modular resultados previos",
    overviewParagraphs: [
      "La hialuronidasa es un procedimiento orientado a corregir o modular tratamientos previos con ácido hialurónico cuando existe una indicación profesional para hacerlo.",
      "Su recomendación requiere una evaluación detallada de la zona, del producto previo y del objetivo, ya que no se aplica de forma general para todos los casos.",
    ],
    focusParagraph:
      "La prioridad es analizar el resultado previo con criterio técnico para decidir si conviene corregir, reducir o replantear el tratamiento.",
    focusItems: [
      "Valorar si realmente se necesita una corrección.",
      "Definir la zona y el alcance de la modulación necesaria.",
      "Planificar el siguiente paso de forma segura y ordenada.",
    ],
    benefits: [
      {
        title: "Revisión profesional",
        description:
          "Permite analizar con criterio técnico un resultado previo que necesita ajuste.",
      },
      {
        title: "Corrección dirigida",
        description:
          "Se orienta a zonas concretas según lo observado en consulta.",
      },
      {
        title: "Planificación del siguiente paso",
        description:
          "Ayuda a decidir si luego conviene esperar, corregir más o replantear el tratamiento.",
      },
    ],
    idealItems: [
      "Sientes que un resultado previo necesita revisión profesional.",
      "Buscas corregir o modular ácido hialurónico ya aplicado.",
      "Necesitas una valoración objetiva antes de intervenir otra vez la zona.",
      "Quieres ordenar el proceso antes de considerar un nuevo relleno.",
    ],
    protocolSteps: [
      "Evaluación del resultado previo, zona y objetivo de corrección.",
      "Definición de si existe indicación para usar hialuronidasa.",
      "Aplicación del protocolo según el plan trazado en consulta.",
      "Seguimiento posterior para revisar evolución y próximos pasos.",
    ],
    sessionParagraphs: [
      "La respuesta y el número de controles dependen de la zona, del volumen previo y de lo que se busque corregir o modular.",
      "En muchos casos se recomienda observar la evolución antes de decidir si conviene una nueva aplicación de relleno o un ajuste adicional.",
    ],
  },
  "rich-pl": {
    tags: ["Regeneración facial", "Revitalización", "Plan progresivo"],
    heroNote:
      "Se integra en protocolos que buscan revitalización, mejor aspecto cutáneo y acompañamiento progresivo de la piel.",
    overviewTitle: "Rich PL: una propuesta regenerativa orientada a revitalización facial",
    overviewParagraphs: [
      "Rich PL es un protocolo de enfoque regenerativo que se utiliza para acompañar revitalización cutánea y mejorar la apariencia general del rostro dentro de un plan facial.",
      "Su uso se define de forma personalizada, valorando si conviene como tratamiento individual o como parte de una estrategia más amplia de rejuvenecimiento.",
    ],
    focusParagraph:
      "Buscamos una piel más fresca, uniforme y con mejor calidad visual a través de un plan bien indicado y con seguimiento.",
    focusItems: [
      "Acompañar revitalización facial de forma progresiva.",
      "Favorecer mejor aspecto de la calidad cutánea.",
      "Integrar el tratamiento a planes de rejuvenecimiento personalizados.",
    ],
    benefits: [
      {
        title: "Piel más revitalizada",
        description:
          "Puede ayudar a que el rostro luzca más descansado y uniforme.",
      },
      {
        title: "Enfoque regenerativo",
        description:
          "Se orienta a acompañar procesos de mejora cutánea con criterio profesional.",
      },
      {
        title: "Plan combinable",
        description:
          "Puede integrarse con otras estrategias según evaluación.",
      },
    ],
    idealItems: [
      "Buscas una opción regenerativa dentro de tu plan facial.",
      "Quieres revitalización y mejor apariencia general de la piel.",
      "Deseas un protocolo evaluado y ajustado a tu caso.",
      "Te interesa una estrategia progresiva con controles posteriores.",
    ],
    protocolSteps: [
      "Valoración del caso y definición del objetivo facial principal.",
      "Planificación del protocolo Rich PL según la evaluación.",
      "Aplicación de la sesión con seguimiento del confort y respuesta.",
      "Indicaciones posteriores y organización de continuidad si corresponde.",
    ],
    sessionParagraphs: [
      "La frecuencia dependerá de la condición de la piel y del objetivo buscado dentro del plan de revitalización.",
      "Los controles ayudan a decidir si conviene continuidad, refuerzo o combinación con otros protocolos faciales.",
    ],
  },
  "drenaje-post-lipo": {
    tags: ["Postoperatorio", "Drenaje", "Recuperación guiada"],
    heroNote:
      "Se orienta a acompañar procesos postoperatorios con una pauta ordenada y respetando siempre la indicación médica correspondiente.",
    overviewTitle: "Drenaje post lipo: acompañamiento corporal durante la recuperación",
    overviewParagraphs: [
      "El drenaje post lipo es un protocolo corporal enfocado en acompañar la recuperación después de una liposucción u otro procedimiento, ayudando al manejo de inflamación y del drenaje tisular.",
      "La recomendación y la frecuencia siempre deben respetar la etapa del proceso y las indicaciones médicas, por lo que el seguimiento profesional es clave.",
    ],
    focusParagraph:
      "La meta es acompañar la recuperación con sesiones oportunas, respetando tiempos, confort y necesidades del tejido en cada etapa.",
    focusItems: [
      "Favorecer drenaje y confort durante el proceso postoperatorio.",
      "Acompañar la evolución de inflamación y adaptación del tejido.",
      "Organizar un plan de sesiones acorde a la etapa de recuperación.",
    ],
    benefits: [
      {
        title: "Acompañamiento postoperatorio",
        description:
          "Ayuda a dar continuidad a una etapa que requiere seguimiento y control.",
      },
      {
        title: "Plan ordenado",
        description:
          "Permite organizar sesiones según la evolución y la indicación médica.",
      },
      {
        title: "Mayor confort",
        description:
          "Se orienta a mejorar la sensación de bienestar dentro del proceso de recuperación.",
      },
    ],
    idealItems: [
      "Te encuentras en etapa postoperatoria y necesitas acompañamiento.",
      "Buscas un plan ordenado de drenaje con seguimiento.",
      "Quieres respetar tiempos y pautas según tu evolución.",
      "Necesitas apoyo corporal complementario al manejo médico.",
    ],
    protocolSteps: [
      "Revisión del momento postoperatorio y de las indicaciones vigentes.",
      "Definición del trabajo adecuado según etapa de recuperación.",
      "Aplicación del drenaje con enfoque de confort y seguimiento del tejido.",
      "Recomendaciones posteriores y coordinación de próximas sesiones.",
    ],
    sessionParagraphs: [
      "La frecuencia se define según la etapa postoperatoria, la evolución observada y la indicación del profesional tratante.",
      "El proceso suele requerir varias sesiones distribuidas de forma estratégica para acompañar correctamente la recuperación.",
    ],
  },
  hidrolipoclasia: {
    tags: ["Reducción localizada", "Plan corporal", "Evaluación profesional"],
    heroNote:
      "Se recomienda cuando buscas trabajar grasa localizada dentro de un plan corporal estructurado y guiado profesionalmente.",
    overviewTitle: "Hidrolipoclasia: una estrategia corporal orientada a reducción localizada",
    overviewParagraphs: [
      "La hidrolipoclasia es un protocolo corporal utilizado para acompañar objetivos de reducción localizada en zonas concretas, siempre bajo evaluación profesional.",
      "No se plantea como una solución aislada para todos los casos, sino como parte de una estrategia corporal que considera zona, expectativas y frecuencia recomendada.",
    ],
    focusParagraph:
      "La idea es trabajar una zona específica dentro de un plan ordenado que combine evaluación, sesiones pautadas y seguimiento de evolución.",
    focusItems: [
      "Dirigir el protocolo a zonas concretas de adiposidad localizada.",
      "Construir una pauta de sesiones realista y personalizada.",
      "Acompañar resultados con control y seguimiento del proceso.",
    ],
    benefits: [
      {
        title: "Trabajo localizado",
        description:
          "Se enfoca en áreas específicas definidas durante la valoración.",
      },
      {
        title: "Plan estructurado",
        description:
          "Permite ordenar sesiones y medir evolución de forma más clara.",
      },
      {
        title: "Acompañamiento profesional",
        description:
          "La pauta se adapta según respuesta y objetivo del tratamiento.",
      },
    ],
    idealItems: [
      "Buscas trabajar grasa localizada en una zona concreta.",
      "Quieres una estrategia corporal organizada en varias sesiones.",
      "Necesitas valoración previa antes de elegir el tratamiento adecuado.",
      "Deseas complementar hábitos y seguimiento con trabajo en cabina.",
    ],
    protocolSteps: [
      "Evaluación corporal y definición de zona y objetivo principal.",
      "Planificación del protocolo y de la frecuencia sugerida.",
      "Aplicación de la sesión según el abordaje indicado.",
      "Indicaciones posteriores y control de evolución.",
    ],
    sessionParagraphs: [
      "La cantidad de sesiones depende de la zona, del objetivo corporal y de la respuesta observada durante el proceso.",
      "Suele funcionar mejor cuando se integra a un plan corporal completo con constancia y recomendaciones complementarias.",
    ],
  },
  "enzimas-polvo": {
    tags: ["Adiposidad localizada", "Modelado", "Plan corporal"],
    heroNote:
      "Se utiliza para acompañar protocolos de modelado corporal cuando se busca trabajar zonas localizadas con una pauta personalizada.",
    overviewTitle: "Enzimas en polvo: apoyo corporal para modelado y trabajo localizado",
    overviewParagraphs: [
      "Las enzimas en polvo se emplean dentro de protocolos corporales orientados a trabajar adiposidad localizada y acompañar objetivos de contorno o modelado.",
      "La indicación requiere valoración profesional para definir si la zona y el objetivo son compatibles con este tipo de abordaje y cómo conviene organizar las sesiones.",
    ],
    focusParagraph:
      "La prioridad es seleccionar correctamente la zona, ordenar la frecuencia y acompañar el proceso con seguimiento profesional.",
    focusItems: [
      "Trabajar áreas localizadas dentro de un plan corporal.",
      "Acompañar objetivos de modelado y contorno de forma progresiva.",
      "Definir continuidad y seguimiento según la respuesta observada.",
    ],
    benefits: [
      {
        title: "Plan dirigido por zonas",
        description:
          "Se orienta a áreas concretas en lugar de un abordaje general.",
      },
      {
        title: "Seguimiento del proceso",
        description:
          "Permite revisar evolución y ajustar sesiones si es necesario.",
      },
      {
        title: "Complemento de plan corporal",
        description:
          "Puede integrarse a una estrategia más completa según evaluación.",
      },
    ],
    idealItems: [
      "Quieres trabajar una zona localizada con seguimiento.",
      "Buscas apoyo en procesos de modelado corporal.",
      "Necesitas una valoración previa para definir si es tu mejor opción.",
      "Deseas un protocolo organizado en varias sesiones.",
    ],
    protocolSteps: [
      "Valoración corporal de la zona a tratar y del objetivo principal.",
      "Definición del plan de sesiones y del protocolo recomendado.",
      "Aplicación del tratamiento con seguimiento del confort.",
      "Indicaciones posteriores y revisión de evolución.",
    ],
    sessionParagraphs: [
      "El número de sesiones depende de la zona, del objetivo y de cómo responde tu cuerpo al tratamiento dentro del plan corporal.",
      "La continuidad y el acompañamiento de hábitos también influyen en el proceso y en cómo se sostienen los cambios.",
    ],
  },
  "papada-enzimas": {
    tags: ["Zona submentoniana", "Perfil facial", "Plan localizado"],
    heroNote:
      "Se enfoca específicamente en la zona submentoniana cuando se busca acompañar un mejor perfil facial mediante un plan localizado.",
    overviewTitle: "Papada con enzimas: trabajo localizado para acompañar el perfil facial",
    overviewParagraphs: [
      "Papada con enzimas es un protocolo orientado a trabajar la zona submentoniana dentro de un enfoque localizado y personalizado según evaluación.",
      "Como se trata de una zona facial específica, la indicación debe ser precisa y considerar anatomía, objetivo y cantidad de sesiones recomendadas.",
    ],
    focusParagraph:
      "Buscamos definir un plan ordenado para trabajar la zona bajo el mentón con expectativas realistas y seguimiento profesional.",
    focusItems: [
      "Valorar si la zona es apta para este tipo de protocolo.",
      "Acompañar objetivos de mejor perfil facial de forma progresiva.",
      "Planificar sesiones y control de evolución según el caso.",
    ],
    benefits: [
      {
        title: "Abordaje localizado",
        description:
          "Se centra en una zona concreta que requiere evaluación específica.",
      },
      {
        title: "Mejor planificación",
        description:
          "Ayuda a organizar la estrategia más adecuada según la anatomía observada.",
      },
      {
        title: "Seguimiento del perfil",
        description:
          "Permite revisar cambios y decidir continuidad de forma ordenada.",
      },
    ],
    idealItems: [
      "Quieres trabajar la zona de papada con un enfoque localizado.",
      "Buscas mejorar el perfil facial de forma progresiva.",
      "Necesitas una valoración profesional antes de iniciar sesiones.",
      "Prefieres una estrategia con seguimiento y control posterior.",
    ],
    protocolSteps: [
      "Evaluación de la zona submentoniana y del objetivo principal.",
      "Definición del protocolo y de la pauta recomendada.",
      "Aplicación del tratamiento con seguimiento del confort.",
      "Indicaciones posteriores y programación de controles.",
    ],
    sessionParagraphs: [
      "La frecuencia y el número de sesiones dependen del volumen, características de la zona y objetivo definido durante la valoración.",
      "Como se trata de una zona visible del rostro, el seguimiento posterior resulta clave para decidir continuidad o ajustes.",
    ],
  },
  tonegirl: {
    tags: ["Tonicidad", "Definición", "Firmeza corporal"],
    heroNote:
      "Se orienta a quienes desean acompañar tonicidad y definición corporal con una estrategia ordenada y personalizada.",
    overviewTitle: "Tonegirl: una propuesta corporal enfocada en tonicidad y definición",
    overviewParagraphs: [
      "Tonegirl es un tratamiento corporal pensado para acompañar objetivos de tonicidad, firmeza y mejor definición en zonas específicas según evaluación.",
      "La indicación se adapta al objetivo principal del plan corporal, a la zona a trabajar y a la pauta de sesiones recomendada para tu caso.",
    ],
    focusParagraph:
      "La meta es reforzar firmeza y definición corporal a través de un protocolo constante y con seguimiento.",
    focusItems: [
      "Trabajar zonas que buscan mayor tonicidad.",
      "Acompañar objetivos de definición corporal con orden y constancia.",
      "Construir una pauta de sesiones personalizada según evolución.",
    ],
    benefits: [
      {
        title: "Tonicidad progresiva",
        description:
          "Se orienta a acompañar una mejor apariencia de firmeza en zonas concretas.",
      },
      {
        title: "Definición corporal",
        description:
          "Puede integrarse a planes que buscan un contorno más trabajado.",
      },
      {
        title: "Plan adaptable",
        description:
          "La frecuencia y continuidad se ajustan al objetivo y respuesta del cuerpo.",
      },
    ],
    idealItems: [
      "Buscas acompañar un objetivo de firmeza o definición corporal.",
      "Quieres trabajar zonas específicas con un plan personalizado.",
      "Deseas una estrategia de varias sesiones con seguimiento.",
      "Necesitas una evaluación previa para ordenar expectativas y pauta.",
    ],
    protocolSteps: [
      "Evaluación corporal y definición de la zona principal a trabajar.",
      "Planificación del protocolo según objetivo de tonicidad o definición.",
      "Aplicación de la sesión con seguimiento profesional.",
      "Indicaciones posteriores y ajuste del plan en controles sucesivos.",
    ],
    sessionParagraphs: [
      "Los resultados suelen acompañarse mejor cuando el protocolo se realiza con constancia y dentro de un plan corporal progresivo.",
      "La continuidad, junto con hábitos y recomendaciones posteriores, ayuda a sostener lo trabajado en cabina.",
    ],
  },
  "musc-forte": {
    tags: ["Tonicidad", "Soporte muscular", "Plan corporal"],
    heroNote:
      "Se recomienda cuando buscas acompañar la apariencia de firmeza y soporte en zonas corporales concretas dentro de un plan personalizado.",
    overviewTitle: "Musc Forte: acompañamiento corporal para zonas que buscan mayor tonicidad",
    overviewParagraphs: [
      "Musc Forte es un protocolo corporal orientado a trabajar tonicidad y soporte visual en zonas que requieren una estrategia de firmeza y definición.",
      "La recomendación depende de la evaluación previa y de si el objetivo principal del plan corporal se relaciona con tonicidad, contorno o mantenimiento.",
    ],
    focusParagraph:
      "Buscamos una pauta de trabajo consistente que acompañe mejor la apariencia de soporte y firmeza en zonas específicas.",
    focusItems: [
      "Trabajar zonas que necesitan una estrategia de tonicidad.",
      "Acompañar objetivos de definición dentro de un plan corporal.",
      "Ajustar sesiones y seguimiento según la evolución observada.",
    ],
    benefits: [
      {
        title: "Trabajo focalizado",
        description:
          "Se adapta a zonas concretas y a un objetivo corporal bien definido.",
      },
      {
        title: "Plan progresivo",
        description:
          "Se apoya mejor en varias sesiones con seguimiento del proceso.",
      },
      {
        title: "Complemento de rutina",
        description:
          "Funciona mejor cuando se integra con hábitos y continuidad.",
      },
    ],
    idealItems: [
      "Buscas mayor tonicidad en una zona corporal concreta.",
      "Quieres complementar un plan de definición o firmeza.",
      "Deseas una estrategia corporal con seguimiento.",
      "Necesitas una recomendación personalizada antes de iniciar sesiones.",
    ],
    protocolSteps: [
      "Evaluación corporal de la zona y del objetivo principal.",
      "Definición del protocolo adecuado para la sesión.",
      "Aplicación del tratamiento con control del confort y respuesta.",
      "Recomendaciones posteriores y pauta de continuidad.",
    ],
    sessionParagraphs: [
      "La frecuencia depende del objetivo, del tipo de zona y de la respuesta corporal. En muchos casos se recomienda una serie de sesiones.",
      "El seguimiento permite ajustar el plan y revisar si conviene mantener, intensificar o combinar el protocolo.",
    ],
  },
  novuma: {
    tags: ["Contorno corporal", "Firmeza", "Tecnología corporal"],
    heroNote:
      "Se integra cuando buscas una propuesta tecnológica para acompañar contorno y firmeza corporal dentro de un plan personalizado.",
    overviewTitle: "Novuma: tecnología corporal orientada a contorno y mejor aspecto de la piel",
    overviewParagraphs: [
      "Novuma es una propuesta corporal enfocada en mejorar el contorno y acompañar objetivos de firmeza o calidad de piel, dependiendo de la zona evaluada.",
      "Su indicación se personaliza según la necesidad principal y se plantea mejor cuando forma parte de una estrategia corporal ordenada y progresiva.",
    ],
    focusParagraph:
      "La idea es trabajar con una pauta tecnológica bien indicada que ayude a acompañar contorno, textura y firmeza de la zona tratada.",
    focusItems: [
      "Valorar si la zona y el objetivo son compatibles con la tecnología.",
      "Acompañar procesos de contorno y firmeza de forma progresiva.",
      "Organizar sesiones y seguimiento según respuesta corporal.",
    ],
    benefits: [
      {
        title: "Plan por objetivos",
        description:
          "Se adapta según si se prioriza contorno, firmeza o calidad de piel.",
      },
      {
        title: "Tecnología con seguimiento",
        description:
          "Permite revisar evolución y decidir continuidad de forma ordenada.",
      },
      {
        title: "Complemento corporal",
        description:
          "Puede integrarse a estrategias más amplias según evaluación.",
      },
    ],
    idealItems: [
      "Buscas acompañar el contorno de una zona corporal.",
      "Quieres trabajar firmeza o aspecto general de la piel.",
      "Te interesa una alternativa tecnológica dentro de tu plan corporal.",
      "Necesitas una evaluación previa para definir indicación y frecuencia.",
    ],
    protocolSteps: [
      "Valoración corporal y definición del objetivo principal.",
      "Selección de la pauta con Novuma según la zona y necesidad.",
      "Aplicación de la sesión con seguimiento profesional.",
      "Indicaciones posteriores y revisión de continuidad.",
    ],
    sessionParagraphs: [
      "La frecuencia de Novuma se ajusta al plan corporal sugerido, a la zona tratada y a la evolución observada en el tiempo.",
      "Suele recomendarse continuidad y control posterior para acompañar mejor el objetivo de contorno o firmeza.",
    ],
  },
};

export function getGenericServiceContent(service, category) {
  if (currentLocale === "en") {
    const defaults = getCategoryDefaultsEn(service, category);

    return {
      ...defaults,
      faq: buildFaqEn(service, category?.id),
    };
  }

  const defaults = getCategoryDefaults(service, category);
  const specific = serviceContentById[service.id] ?? {};

  return {
    ...defaults,
    ...specific,
    faq: specific.faq ?? buildFaq(service, category?.id),
  };
}

export function setGenericServiceContentLocale(locale) {
  currentLocale = locale === "en" ? "en" : "es";
}
