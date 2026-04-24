import { imageAssets } from "@/assets/images";

export const site = {
  name: "Karito Aesthetic Center",
  shortName: "Karito",
  brandMark: "Karito Aesthetic Center",
  brandName: "Karito Aesthetic Center",
  brandDescriptor: "Aesthetic Center",
  tagline:
    "Conscious beauty, visible results, and wellbeing in every appointment.",
  footerDescription:
    "A professional base for an aesthetic center landing page: warm, elegant, and easy to scale with new pages, forms, or online bookings.",
};

export const headerNavigation = [
  { label: "Home", href: "/", hash: "#beneficios" },
  { label: "About Us", href: "/nosotros" },
  {
    label: "Services",
    href: "/",
    hash: "#servicios",
    submenu: [
      { label: "Facial Cleanses", href: "/limpiezas-faciales" },
      { label: "Facial Treatments", href: "/tratamientos-faciales" },
      { label: "Body Treatments", href: "/tratamientos-corporales" },
    ],
  },
  { label: "Promotions", href: "/", hash: "#promociones" },
  { label: "FAQ", href: "/", hash: "#preguntas" },
  { label: "Location", href: "/", hash: "#ubicacion" },
];

export const hero = {
  autoplayMs: 5000,
  slides: [
    {
      id: "masaje-pareja",
      imageSrc: imageAssets.services.hero1,
      primaryCta: { label: "Explore", href: "#servicios" },
      secondaryCta: {
        label: "Contact",
        href: "https://wa.me/51999999999",
      },
    },
    {
      id: "ritual-sensorial",
      imageSrc: imageAssets.services.hero2,
      primaryCta: { label: "Explore", href: "#servicios" },
      secondaryCta: {
        label: "Contact",
        href: "https://wa.me/51999999999",
      },
    },
    {
      id: "day-spa",
      imageSrc: imageAssets.services.hero3,
      primaryCta: { label: "Explore", href: "#servicios" },
      secondaryCta: { label: "Contact", href: "https://wa.me/51999999999" },
    },
  ],
};

export const servicesIntro = {
  eyebrow: "Our treatments",
  titleStart: "Treatments in",
  titleHighlight: "Aesthetic Medicine, ",
  titleEnd: "for Face and Body",
  description:
    "Aesthetic, facial, and body treatments designed to enhance appearance, rejuvenate the skin, and highlight natural beauty through safe, non-invasive techniques.",
  pills: [],
};

export const services = [
  {
    id: "facial-cleanse",
    title: "Facial Cleanses",
    description:
      "Specialized routines that oxygenate, purify, and restore your skin’s natural radiance.",
    detail:
      "Includes a prior evaluation to personalize each treatment according to your needs.",
    href: "/limpiezas-faciales",
  },
  {
    id: "facial-treatment",
    title: "Facial Treatments",
    description:
      "Protocols designed to improve firmness, boost hydration, and achieve visibly more even-looking skin.",
    detail: "Personalized sessions adapted to your skin’s specific needs.",
    href: "/tratamientos-faciales",
  },
  {
    id: "body-treatment",
    title: "Body Treatments",
    description:
      "Experiences that combine advanced technology, contouring techniques, and holistic wellbeing to enhance your results.",
    detail: "Plans designed according to your goals.",
    href: "/tratamientos-corporales",
  },
];

export const promotionsIntro = {
  eyebrow: "Promotions of the month",
  title:
    "Take advantage of exclusive discounts and packages on facial, body, and more.",
  description: "Click and discover the promo that fits you best.",
  pills: [],
  primaryCta: {
    label: "View promotions",
    href: "/promociones",
  },
};

export const promotions = [
  {
    id: "limpiezas",
    eyebrow: "Promotions",
    title: "Facial Cleanse",
    description:
      "An ideal promotion to refresh the skin, improve facial cleansing, and bring back glow and freshness at a better price.",
  },
  {
    id: "medi-packs",
    eyebrow: "Promotions",
    title: "Botox",
    description:
      "A promotion designed to soften expression lines while maintaining a natural-looking result through a personalized evaluation.",
  },
  {
    id: "sueroterapia",
    eyebrow: "Promotions",
    title: "Peptona",
    description:
      "A promotion focused on biostimulation, hydration, and improving skin quality through a progressive treatment approach.",
  },
  {
    id: "corporales",
    eyebrow: "Promotions",
    title: "Hyaluronic Acid",
    description:
      "A promotion oriented toward definition, hydration, and facial harmony according to the area and result you are looking for.",
  },
  {
    id: "faciales",
    eyebrow: "Promotions",
    title: "Deep Facial Cleanse",
    description:
      "A promotion designed to deeply purify the skin, unclog pores, and leave the face cleaner and more revitalized.",
  },
  {
    id: "depilacion",
    eyebrow: "Promotions",
    title: "Novuma",
    description:
      "A body-focused promotion created to work on contour, firmness, and an overall better skin appearance through a personalized plan.",
  },
];

export const faqIntro = {
  eyebrow: "Before your appointment",
  title: "Frequently asked questions",
  description:
    "Clear and easy-to-understand information to help you quickly find answers about services, pricing, appointments, and results before booking.",
};

export const faqs = [
  {
    question: "What kind of treatments do you offer?",
    answer:
      "We offer a wide variety of facial and body treatments, facial cleanses, and special promotions designed to adapt to different aesthetic and wellbeing needs.",
  },
  {
    question: "What are the treatment prices?",
    answer:
      "Prices vary depending on the type of treatment, duration, and whether it is part of a current promotion. We can guide you through WhatsApp and recommend the best option according to your goals.",
  },
  {
    question: "Do I need to book an appointment?",
    answer:
      "Yes. We recommend booking in advance so we can secure your ideal schedule and prepare a personalized experience from the moment you arrive.",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "Results vary depending on the chosen treatment, the characteristics of your skin or body needs, and consistency with the recommended plan. Our approach is focused on visible and realistic results aligned with a professional evaluation.",
  },
  {
    question: "How many sessions do I need to see results?",
    answer:
      "It depends on the treatment and your goals. In many cases, a multi-session plan is recommended for optimal and longer-lasting results.",
  },
  {
    question: "What care should I follow after a treatment?",
    answer:
      "We provide personalized recommendations at the end of each session to support your results and take care of your skin.",
  },
];

export const whyChooseUs = {
  eyebrow: "Karito Aesthetic Center",
  title: "Why choose us?",
  lead: "Karito Aesthetic Center combines experience, close care, and thoughtfully designed rituals so every visit feels special.",
  description:
    "We offer personalized protocols designed to highlight your unique beauty in harmonious spaces that invite rest and confidence. Our premium experience seeks not only visible aesthetic results, but also the overall wellbeing of every client.",
  description1:
    "We create personalized protocols that enhance your unique beauty in harmonious environments that inspire calm and trust. Our premium experience is designed to deliver visible aesthetic results while also caring for your overall wellbeing in every session.",
  badges: [],
  checklist: [
    "Specialists with a warm and professional approach.",
    "Premium cabins with a relaxing atmosphere.",
    "Treatments personalized according to your goals.",
    "Confidence, follow-up, and a memorable experience.",
  ],
};

const mainLocationAddress = "Karito Aesthetic Center, Los Olivos, Lima, Peru";
const mainLocationShortAddress = "15301, Los Olivos 15301";
const mainLocationQuery = "Karito Centro Estético";

export const aboutPage = {
  eyebrow: "About Us",
  title: "Why are we your best choice?",
  paragraphs: [
    "Welcome to Karito Aesthetic Center, where wellness becomes a unique experience. In a calm and caring environment, we offer high-quality facial and body treatments, along with experiences designed to enhance your beauty and overall well-being.",
    "Our approach blends aesthetics and harmony, inviting you to enjoy moments of relaxation and renewal. With skilled professionals and thoughtfully designed spaces, at Karito Aesthetic Center we help you look and feel your best. Choose self-care, choose confidence, choose Karito Aesthetic Center.",
  ],
  imageSrc: imageAssets.about.nosotros,
  imageAlt: "Wellbeing experience at Karito Aesthetic Center",
  teamSection: {
    title: "Karito Aesthetic Center Team",
    lead: "We want to guide you with our team of experts so you can achieve the best results through programs designed in a personalized way.",
    supportingLine:
      "Technology, professionalism, and scientific advances are the three pillars of the comprehensive service we place within your reach.",
    specialties: [
      {
        title: "Facial treatments",
        description:
          "Protocols focused on hydration, firmness, biostimulation, and rejuvenation to improve your skin's quality and radiance.",
      },
      {
        title: "Body treatments",
        description:
          "Personalized plans focused on contouring, drainage, toning, and overall body silhouette improvement.",
      },
      {
        title: "Aesthetic medicine",
        description:
          "Advanced aesthetic procedures performed with professional care to achieve natural, safe, and harmonious results.",
      },
    ],
    closing:
      "Choose the treatment that best fits your needs. Our commitment is with you and your wellbeing.",
    imageSrc: imageAssets.about.equipoBalance,
    imageAlt: "Karito Aesthetic Center team specialist",
    badgeTitle: "Professional team",
    badgeSub: "With years of experience",
  },
  purposeSection: {
    eyebrow: "Our essence",
    title: "Mission and Vision",
    experienceBadgeValue: "+5",
    experienceBadgeLabel: "years",
    missionTitle: "Mission",
    mission:
      "To provide high-quality aesthetic treatments that enhance natural beauty, improve well-being, and boost each person’s confidence through advanced technology and personalized care.",
    visionTitle: "Vision",
    vision:
      "To be a leading aesthetic center recognized for excellence, innovation, and results, where men and women find a space for care, renewal, and confidence to look and feel their best.",
    promotionsCta: {
      label: "Discover our promotions",
      href: "/promociones",
    },
    imageSrc: imageAssets.about.misionVision,
    imageAlt: "Sensory and wellness experience at Karito Aesthetic Center",
  },
};

export const facialCleansePage = {
  title: "Facial Cleanses",
  questionLabel: "What is it?",
  content: [
    "A <strong>facial cleanse</strong> is an aesthetic treatment that purifies the skin deeply by removing impurities, dead skin cells, excess oil, and residue accumulated through everyday exposure. The result is a cleaner, brighter, and healthier-looking complexion.",
    "When performed regularly, it not only improves texture and appearance, but also helps prevent concerns such as <strong>acne</strong>, <strong>blackheads</strong>, <strong>dry skin</strong>, and the <strong>appearance of fine lines</strong>. It also improves the absorption of skincare products, boosting the effectiveness of creams, serums, and hydrating treatments.",
  ],
  imageSrc: imageAssets.services.queEsLimpiezasFaciales,
  imageAlt: "Professional facial cleansing treatment",
  imageLabel: "Facial Cleanses",
  primaryCta: {
    label: "Book Appointment",
    href: "https://wa.me/51999999999",
  },
  protocolsSection: {
    title: "Facial Cleanses",
    description:
      "Every skin is unique and deserves personalized care. Discover our selection of specialized protocols designed to adapt to the specific needs of every face.",
    items: [
      {
        id: "deep-cleanse",
        title: "Deep Cleanse",
        description:
          "Designed to deeply purify the skin by effectively unclogging pores and removing impurities, dead cells, and excess sebum, leaving the face cleaner, balanced, and renewed.",
        imageAlt: "Deep facial cleansing",
        href: "/limpieza-facial-profunda",
      },
      {
        id: "hidrafacial",
        title: "Hydrafacial",
        description:
          "A cleansing and hydration protocol that combines freshness, comfort, and immediate glow for skin that looks more radiant and rested from the very first session.",
        imageAlt: "Hydrafacial session",
        href: "/hidrafacial",
      },
      {
        id: "dermaplaning",
        title: "Dermaplaning",
        description:
          "Gentle exfoliation that helps refine texture, soften peach fuzz, and leave the skin smoother, more luminous, and better prepared for skincare.",
        imageAlt: "Dermaplaning facial treatment",
        href: "/dermaplaning",
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
      title: "Back Exfoliation",
    },
    {
      id: "depilacion-cera",
      title: "Waxing",
    },
  ],
};

export const facialTreatmentsPage = {
  title: "Facial Treatments",
  imageSrc: imageAssets.services.queEsTratamientosFaciales,
  imageAlt: "Specialist performing a facial treatment in the cabin",
  cta: {
    label: "Book Your Free Appointment",
    href: "https://wa.me/51999999999",
  },
  tabs: [
    {
      id: "what-is",
      label: "What is it?",
      paragraphs: [
        "<strong>Facial treatments</strong> are procedures designed to care for, prevent, and rejuvenate the skin at every stage of life. Through personalized protocols, it is possible to address concerns such as acne, dark spots, laxity, and signs of premature aging.",
        "At <strong>Karito Aesthetic Center</strong>, we offer a complete portfolio performed with professional products and protocols adapted to each skin type, always after a prior assessment to recommend the best option for you.",
      ],
    },
    {
      id: "benefits",
      label: "Benefits",
      items: [
        {
          title: "Aging prevention:",
          description:
            "They reduce fine lines, improve firmness, and stimulate collagen.",
        },
        {
          title: "Acne and dark spot control:",
          description:
            "They help reduce breakouts, regulate oil, and even skin tone.",
        },
        {
          title: "More even texture:",
          description:
            "They smooth the surface, refine pores, and improve elasticity.",
        },
        {
          title: "Deep hydration:",
          description:
            "The skin receives an extra boost of freshness and hydration.",
        },
        {
          title: "Facial firming and definition:",
          description:
            "Technology-based protocols help tighten the skin and address laxity.",
        },
      ],
    },
  ],
  treatmentsSection: {
    title: "Facial Treatments",
    items: [
      {
        id: "botox",
        title: "Botox",
        description:
          "Medical treatment that relaxes facial muscles to soften wrinkles and expression lines while preserving your face’s natural look.",
        imageSrc: imageAssets.services.tratamientoToxinaBotulinica,
        imageAlt: "Botox application on the face",
        href: "/botox",
      },
      {
        id: "acido-hialuronico",
        title: "Hyaluronic Acid",
        description:
          "Premium facial filler that deeply hydrates, restores volume, and defines areas such as lips, under-eyes, cheekbones, or nose.",
        imageSrc: imageAssets.services.tratamientoAcidoHialuronico,
        imageAlt: "Hyaluronic acid facial application",
        href: "/acido-hialuronico",
      },
      {
        id: "exosomas",
        title: "Exosomes",
        description:
          "Premium treatment that combines science and biotechnology to deeply hydrate, regenerate, and maintain firm, luminous skin.",
        imageSrc: imageAssets.services.tratamientoExosomas,
        imageAlt: "Exosome facial treatment",
        href: "/exosomas",
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
      title: "Hair PRP",
    },
  ],
};

export const bodyTreatmentsPage = {
  title: "Body Treatments",
  imageSrc: imageAssets.services.tratamientosCorporalesDetalle,
  imageAlt: "Body treatment focused on contour and localized reduction",
  cta: {
    label: "Book Your Free Consultation",
    href: "https://wa.me/51999999999",
  },
  tabs: [
    {
      id: "what-is",
      label: "What is it?",
      paragraphs: [
        "<strong>Body treatments</strong> are medical and aesthetic procedures performed with advanced technology and personalized protocols. Through them we can work on localized fat, cellulite, laxity, stretch marks, and scars while helping define the contour.",
        "At <strong>Karito Aesthetic Center</strong>, we offer a complete portfolio of non-invasive and minimally invasive alternatives, performed with modern devices and products under professional supervision.",
      ],
    },
    {
      id: "benefits",
      label: "Benefits",
      items: [
        {
          title: "Works on localized fat:",
          description:
            "It helps target specific areas to improve the body contour.",
        },
        {
          title: "Improves skin appearance:",
          description:
            "It supports a more even skin surface and a better overall look.",
        },
        {
          title: "Addresses laxity and cellulite:",
          description:
            "The right protocols help tighten and firm the area visibly.",
        },
        {
          title: "Enhances personalized results:",
          description:
            "Each treatment is adapted to your body’s goals and needs.",
        },
      ],
    },
  ],
  treatmentsSection: {
    title: "Body Treatments",
    items: [
      {
        id: "reductor",
        title: "Slimming Treatment",
        description:
          "Gold microneedle radiofrequency that works in deeper layers of the skin to improve laxity, cellulite, and stretch marks with progressive results.",
        imageSrc: imageAssets.services.corporalMorpheus8,
        imageAlt: "Morpheus 8 body treatment",
        href: "/reductor",
      },
      {
        id: "hidrolipoclasia",
        title: "Hydrolipoclasia",
        description:
          "Body strategy focused on localized reduction that complements contour plans through professional evaluation and follow-up.",
        imageSrc: imageAssets.services.corporalEmsculpt,
        imageAlt: "Hydrolipoclasia body treatment",
        href: "/hidrolipoclasia",
      },
      {
        id: "enzimas-polvo",
        title: "Powder Enzymes",
        description:
          "Localized body application that supports contouring goals and area-specific work within a personalized body plan.",
        imageSrc: imageAssets.services.corporalExion,
        imageAlt: "Powder enzyme body treatment",
        href: "/enzimas-polvo",
      },
    ],
  },
  relatedServices: [
    {
      id: "papada-enzimas",
      title: "Double Chin Enzymes",
    },
    {
      id: "tonegirl",
      title: "Tonegirl",
    },
    {
      id: "novuma",
      title: "Novuma",
    },
    {
      id: "drenaje-post-lipo",
      title: "Post-Lipo Drainage",
    },
  ],
};

export const cavitacionPage = {
  title: "Slimming Treatment",
  bannerSrc: imageAssets.services.cavitacionBanner,
  bannerAlt: "Slimming treatment banner",
  descriptionSection: {
    title: "Slimming Treatment",
    paragraphs: [
      "It is a non-surgical procedure designed to <strong>target localized fat</strong> in an effective and comfortable way.",
      "This treatment uses <strong>low-frequency ultrasound waves</strong> to break down fat cells, turning them into liquid so the body can naturally eliminate them.",
    ],
  },
  benefitsSection: {
    intro:
      "This treatment is part of our body contour packs, designed to adapt to your needs and help you achieve better results.",
    heading: "Abdomen Slimming",
    subheading: "Benefits",
    imageSrc: imageAssets.services.beneficioReductor,
    imageAlt: "Professional performing cavitation",
    items: [
      {
        title: "Localized fat reduction:",
        description:
          "This protocol is often chosen to work on stubborn fat in areas such as the abdomen, thighs, and glutes.",
      },
      {
        title: "Visible progress:",
        description:
          "With the proper plan, body contour changes can become noticeable in a progressive way.",
      },
      {
        title: "Non-invasive procedure:",
        description:
          "It does not require surgery or long downtime, making it easier to fit into an active lifestyle.",
      },
      {
        title: "Better-looking skin:",
        description:
          "Beyond supporting contouring, it can also contribute to a firmer and more even-looking skin surface.",
      },
    ],
  },
  procedureSection: {
    title: "About the Procedure",
    imageSrc: imageAssets.services.detalleReductor,
    imageAlt: "Cavitation procedure",
    steps: [
      "A conductive gel is first applied to the area to ensure proper contact between the skin and the ultrasound applicator.",
      "Next, the device is moved in circular motions across the target area. The emitted waves reach deeper layers of the tissue and focus on fat cells.",
      "The treatment usually lasts between 30 and 60 minutes depending on the area and the amount of accumulated fat.",
    ],
  },
};

export const toxinaBotulinicaPage = {
  title: "Botox",
  bannerSrc: imageAssets.services.toxinaBotulinicaBanner,
  bannerAlt: "Botox treatment banner",
  overviewSection: {
    headingLead: "Botox",
    headingText: "Everything You Need to Know to Refresh Your Skin",
    imageSrc: imageAssets.services.toxinaBotulinicaDetalle,
    imageAlt: "Botox application on the face",
    cta: {
      label: "Book Botox Appointment",
      href: "https://wa.me/51999999999",
    },
    tabs: [
      {
        id: "what-is",
        label: "What is it?",
        cardTitle: "What is Botox and how does it work?",
        paragraphs: [
          "<strong>Botox</strong> is a non-surgical aesthetic medical treatment applied in small doses to soften dynamic lines and expression wrinkles without losing the face’s natural look.",
          "Its action temporarily relaxes specific facial muscles to reduce repetitive movement that marks the skin. As a result, the face looks fresher, more rested, and rejuvenated.",
        ],
      },
      {
        id: "benefits",
        label: "Benefits",
        benefits: [
          {
            title: "Softer expression lines:",
            description:
              "It helps smooth dynamic wrinkles in a natural-looking way.",
          },
          {
            title: "Preventive effect:",
            description:
              "It can support the prevention of deeper expression lines over time.",
          },
          {
            title: "Rested appearance:",
            description:
              "The face may look fresher and more relaxed after treatment.",
          },
          {
            title: "Quick procedure:",
            description:
              "It is usually integrated easily into your routine because it is a fast in-office treatment.",
          },
        ],
      },
    ],
    detailParagraphs: [
      "<strong>Botox</strong> is one of the most popular and effective aesthetic treatments for facial rejuvenation. This non-surgical procedure is designed to reduce expression lines and wrinkles that appear over time because of constant muscle movement.",
      "The way Botox works is simple but highly effective: when applied to specific facial areas, the toxin temporarily blocks the nerve signals that make the muscles contract. This allows the muscles to relax, softening wrinkles and leaving the skin smoother and more youthful-looking.",
    ],
  },
  benefitsDetailSection: {
    title: "Benefits of Botox for Your Skin",
    intro:
      "The benefits of Botox go beyond wrinkle reduction, delivering a series of visible improvements for the face:",
    imageSrc: imageAssets.services.toxinaBotulinicaBeneficios,
    imageAlt: "Botox facial rejuvenation treatment",
    items: [
      {
        title: "Reduction of wrinkles and expression lines",
        description:
          "Its main benefit is the ability to soften lines on areas such as the forehead, crow’s feet, and frown lines.",
      },
      {
        title: "Prevention of future lines",
        description:
          "By reducing repeated muscle contraction, it helps delay the appearance of new expression lines.",
      },
      {
        title: "Natural-looking results",
        description:
          "When properly indicated, it relaxes the muscles without removing your ability to smile or express yourself naturally.",
      },
      {
        title: "Fast treatment with no surgery",
        description:
          "It is a quick, non-invasive treatment that usually does not require downtime.",
      },
      {
        title: "Long-lasting effect",
        description:
          "Although not permanent, results usually last between 3 and 6 months depending on the case.",
      },
    ],
  },
  procedureSection: {
    title: "ABOUT THE PROCEDURE",
    content:
      "The technique consists of infiltrating Botox with a very fine needle into the muscle of the area to be treated. The most frequent areas are the forehead, frown lines, and crow’s feet.",
    imageSrc: imageAssets.services.beneficioBotox,
    imageAlt: "Botox application procedure",
  },
  resultsSection: {
    usesTitle: "WHAT IS IT FOR?",
    uses: [
      "Softens existing wrinkles",
      "Helps prevent expression lines",
      "Supports facial rejuvenation",
    ],
    resultsTitle: "WHEN WILL RESULTS BE VISIBLE?",
    resultsText:
      "Results usually start becoming visible between 5 and 7 days after application, with maximum effect appearing around days 12 to 15.",
    imageSrc: imageAssets.services.toxinaBotulinicaResultados,
    imageAlt: "Botox treatment applied to the face",
  },
  beforeAfterSection: {
    title: "BEFORE AND AFTER",
    items: [
      {
        id: "antes",
        imageSrc: imageAssets.services.toxinaBotulinicaAntes,
        imageAlt: "Front result of the Botox treatment",
      },
      {
        id: "despues",
        imageSrc: imageAssets.services.toxinaBotulinicaDespues,
        imageAlt: "Side result of the Botox treatment",
      },
    ],
  },
  faqSection: {
    title: "Frequently asked questions",
    items: [
      {
        question: "Which areas can be treated?",
        answer:
          "The most common areas are the forehead, frown lines, and crow’s feet. In some cases it may also be used in other areas according to professional evaluation and treatment goals.",
      },
      {
        question: "What are the best Botox brands?",
        answer:
          "Some of the best-known brands include Botox, Dysport, and Xeomin. The best option depends on the medical evaluation, the area to treat, and each person’s individual response.",
      },
      {
        question: "What aftercare should I follow?",
        answer:
          "It is usually recommended not to lie down for the first few hours, avoid massaging the treated area, avoid intense exercise on the same day, and follow the specialist’s instructions carefully.",
      },
      {
        question: "How long does Botox last?",
        answer:
          "Results usually last between 3 and 6 months depending on metabolism, area treated, applied dose, and lifestyle. With maintenance sessions, the effect can remain more stable.",
      },
    ],
  },
};

export const deepCleansePage = {
  title: "Deep Cleanse",
  bannerSrc: imageAssets.services.limpiezaProfundaBanner,
  bannerAlt: "Deep cleanse treatment banner",
  descriptionSection: {
    title: "DEEP FACIAL CLEANSE",
    paragraphs: [
      "A deep facial cleanse is a specialized treatment that <strong>purifies the skin from within by removing impurities, dead cells, and excess sebum accumulated in the pores.</strong>",
      "Unlike a conventional facial cleanse, which works mainly on the surface, this procedure works on deeper layers of the skin, helping to unclog pores and visibly improve texture. The result is cleaner, fresher, brighter, and revitalized skin.",
    ],
  },
  procedureSection: {
    title: "ABOUT THE PROCEDURE",
    content:
      "The treatment begins with a superficial cleanse to remove residue and impurities, followed by exfoliation and toning to prepare the skin. Then ozone steam or diamond-tip microdermabrasion is applied according to each skin’s needs, making blackhead extraction safer and more effective. High frequency is then used to disinfect and calm the skin, followed by active ingredients and creams adapted to each skin type. The procedure ends with a facial mask that hydrates and revitalizes the skin, plus sun protection to support and protect the results.",
    imageSrc: imageAssets.services.descripcionFacialProfundo,
    imageAlt: "Deep facial cleanse procedure",
  },
  benefitsSection: {
    title: "BENEFITS",
    items: [
      {
        title: "Cleaner and clearer skin",
        description:
          "By removing impurities and excess oil, a deep cleanse helps prevent clogged pores, reducing the appearance of blackheads and breakouts.",
      },
      {
        title: "Cell renewal",
        description:
          "This treatment encourages cell renewal, supporting skin regeneration and leaving it softer and more luminous.",
      },
      {
        title: "Better product absorption",
        description:
          "By cleansing the skin deeply, it improves the absorption of home-care products and enhances their benefits.",
      },
      {
        title: "Reduced pore appearance",
        description:
          "A deep facial cleanse can help minimize the look of pores, leaving the skin with a more refined appearance.",
      },
    ],
    frequencyTitle: "HOW OFTEN SHOULD A CLEANSE BE DONE?",
    frequencyParagraphs: [
      "The ideal frequency depends on factors such as age, skin type, and the current condition of the skin.",
      "A monthly facial cleanse is often recommended to remove impurities and dead cells while keeping the skin fresh and radiant. It helps prevent breakouts, improves home-care absorption, and supports a healthier and more refreshed look.",
    ],
  },
};

export const locationSection = {
  eyebrow: "Location",
  title:
    "An interactive and responsive map that helps you find your way easily just as simple as booking your appointment.",
  description:
    "A design inspired by Google Maps that clearly shows the surrounding area and lets you quickly open directions from any device.",
  badge: "Google Maps",
  cardTitle: "Karito Aesthetic Center",
  iframeTitle: "Map of Karito Aesthetic Center",
  liveLabel: "Live",
  area: "Los Olivos, Lima",
  address: mainLocationAddress,
  highlights: [],
  directionsHref: `https://www.google.com/maps/search/?api=1&query=${mainLocationQuery}`,
  openMapHref: `https://www.google.com/maps/search/?api=1&query=${mainLocationQuery}`,
  embedUrl: `https://www.google.com/maps?q=${mainLocationQuery}&z=17&hl=en&output=embed`,
  note: "",
};

export const contact = {
  phone: "957062248",
  email: "info@karitocentroestetico.com",
  address: mainLocationAddress,
  schedule: [
    "Monday to Saturday from 10:00 a.m. to 7:30 p.m.",
    "Sunday from 10:00 a.m. to 5:00 p.m.",
  ],
  primaryCta: {
    label: "WhatsApp",
    href: "https://wa.me/51999999999",
  },
  headerCta: {
    label: "Book appointment",
    href: "https://wa.me/51999999999",
  },
  secondaryCta: {
    label: "Instagram",
    href: "https://instagram.com/karitocentroestetico",
  },
};

export const footer = {
  companyName: "Karito Aesthetic Center",
  descriptor: "Facial, body, and wellbeing in one place.",
  phone: contact.phone,
  whatsapp: "957062248",
  locations: [
    {
      label: "Los Olivos",
      value: mainLocationShortAddress,
    },
    {
      label: "Care",
      value: "Bookings, evaluations, and follow-up by appointment.",
    },
    {
      label: "Coverage",
      value: "Facial treatments, body treatments, and facial cleanses.",
    },
  ],
  schedule: contact.schedule,
  links: [
    { label: "Promotions", href: "/promociones" },
    { label: "Facial Treatments", href: "/tratamientos-faciales" },
    { label: "Body Treatments", href: "/tratamientos-corporales" },
    { label: "Facial Cleanses", href: "/limpiezas-faciales" },
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
