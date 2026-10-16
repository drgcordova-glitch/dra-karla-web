export interface CaseImg { src: string; alt: string }
export interface CaseSection {
  h?: string;
  p?: string[];
  list?: string[];
  images?: CaseImg[];
  img?: { src: string; alt: string; caption?: string };
  /** Comparación antes/después de una sola vista, lado a lado, con zoom al tocar. */
  compare?: {
    antesSrc: string; antesAlt: string; antesW: number; antesH: number;
    despuesSrc: string; despuesAlt: string; despuesW: number; despuesH: number;
  };
}
export interface ClinicalCase {
  slug: string;
  title: string;
  /** Título más corto para la tarjeta del índice de casos; si no se define, usa `title`. */
  cardTitle?: string;
  /** Descripción corta para la tarjeta del índice; si no se define, usa `excerpt`. */
  cardExcerpt?: string;
  /** Subtítulo que aparece bajo el H1, dentro del encabezado del caso. */
  subtitle?: string;
  excerpt: string;
  seoTitle?: string;
  seoDescription?: string;
  category: string;
  diagnosis: string;
  datePublished: string;
  dateModified: string;
  readingMin: number;
  relatedEspecialidad: string;
  /** Pregunta del bloque final que enlaza a la especialidad relacionada; si no se define, usa el texto genérico existente. */
  relatedPrompt?: string;
  lead: string;
  sections: CaseSection[];
  beforeAfter?: {
    antesLabel: string; antesDesc: string; antes: CaseImg[];
    despuesLabel: string; despuesDesc: string; despues: CaseImg[];
  };
  keyMessages: string[];
  consentNote: string;
  /** Texto del botón final del caso; si no se define, no se muestra un botón adicional (queda solo el CTA genérico de cierre de página). */
  ctaLabel?: string;
  /** Bloque de llamado a la acción propio del caso (título + texto + botón de WhatsApp). */
  cta?: { title: string; text: string; buttonLabel: string };
}

export const casos: ClinicalCase[] = [
  {
    slug: "foliculitis-decalvans-cuero-cabelludo",
    title: "Foliculitis Decalvans: el cuero cabelludo que nunca sanó",
    excerpt:
      "Mujer de 50 años con más de 20 años de una alopecia cicatricial activa. El recorrido diagnóstico y el tratamiento que logró estabilizarla.",
    category: "Tricología",
    diagnosis: "Foliculitis Decalvans (alopecia cicatricial primaria neutrofílica)",
    datePublished: "2026-08-03",
    dateModified: "2026-08-03",
    readingMin: 5,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    lead:
      "Una paciente de 50 años llegó a la consulta tras más de 20 años conviviendo con una enfermedad del cuero cabelludo que nunca cedía: pus, costras, mal olor y pérdida de cabello que no volvía a crecer. Este es el recorrido diagnóstico y el tratamiento que logró frenarla.",
    sections: [
      {
        h: "El caso",
        p: [
          "Mujer de 50 años, con hipertensión controlada y menopausia reciente, consultó por un cuadro de más de 20 años de evolución en el cuero cabelludo: pústulas, costras, mal olor, dolor y ardor intensos, con pérdida de cabello en las zonas afectadas.",
          "Había recibido tratamientos antibióticos en episodios previos, sin lograr nunca una remisión completa. Llegaba con la sensación de que \"el cabello ya no vuelve a crecer\"."
        ]
      },
      {
        h: "Hallazgos clínicos y tricoscopía",
        p: ["Al examen convivían signos de enfermedad activa y de daño ya establecido:"],
        list: [
          "Eritema y pústulas alrededor del folículo",
          "Costras melicéricas y exudado con mal olor",
          "Mechones de varios pelos saliendo de un mismo orificio (politriquia o \"tufted hairs\")",
          "Zonas donde el folículo ya se había perdido: alopecia cicatricial"
        ],
        images: [
          { src: "/casos/fd-antes-1.jpg", alt: "Cuero cabelludo con lesiones activas de foliculitis decalvans" },
          { src: "/casos/fd-antes-2.jpg", alt: "Placa con pústulas y costras en el cuero cabelludo" }
        ]
      },
      {
        h: "Estudios",
        list: [
          "Cultivo del cuero cabelludo positivo para Staphylococcus aureus, con un perfil de resistencia que descartaba el esquema antibiótico de primera línea habitual",
          "Marcadores de inflamación (PCR y VSG) elevados",
          "Estudios inmunológicos negativos, útiles para excluir otras causas"
        ]
      },
      {
        h: "Diagnóstico diferencial",
        p: ["Antes de confirmar, se descartaron cuadros que pueden parecerse entre sí:"],
        list: [
          "Liquen plano pilar",
          "Lupus discoide",
          "Alopecia centrífuga cicatricial central",
          "Celulitis disecante del cuero cabelludo",
          "Acné queloideo de la nuca",
          "Tiña del cuero cabelludo",
          "Dermatitis seborreica severa"
        ]
      },
      {
        h: "Diagnóstico",
        p: [
          "El diagnóstico fue Foliculitis Decalvans, una alopecia cicatricial primaria de tipo neutrofílico. Se apoyó en cuatro pilares: clínica compatible, tricoscopía característica, cultivo positivo para S. aureus y exclusión de los diagnósticos diferenciales."
        ]
      },
      {
        h: "El tratamiento",
        p: ["Se diseñó un abordaje multimodal e individualizado, combinando vía oral, tópica e infiltraciones:"],
        list: [
          "Antibiótico sistémico con acción antiinflamatoria, sostenido por varios meses",
          "Corticoide sistémico en pulsos, en un esquema seguro para su hipertensión",
          "Corticoides tópicos e intralesionales para controlar la inflamación y preservar los folículos que aún quedaban",
          "Tratamiento tópico para reducir la colonización bacteriana y la descamación"
        ]
      },
      {
        h: "El resultado, a los 4 meses",
        p: [
          "A los cuatro meses el cuadro cambió por completo: sin pústulas ni costras, con las placas estabilizadas y solo un eritema residual mínimo. La enfermedad quedó sin actividad inflamatoria."
        ]
      }
    ],
    beforeAfter: {
      antesLabel: "Antes · Enero 2026",
      antesDesc: "Pústulas, costras, eritema intenso y alopecia activa.",
      antes: [
        { src: "/casos/fd-antes-1.jpg", alt: "Cuero cabelludo antes del tratamiento, enero 2026" },
        { src: "/casos/fd-antes-2.jpg", alt: "Lesiones activas antes del tratamiento" }
      ],
      despuesLabel: "Después · Junio 2026",
      despuesDesc: "Sin pústulas ni costras; placas estabilizadas y eritema residual mínimo.",
      despues: [
        { src: "/casos/fd-despues-1.jpg", alt: "Cuero cabelludo después del tratamiento, junio 2026" },
        { src: "/casos/fd-despues-2.jpg", alt: "Placas estabilizadas tras el tratamiento" }
      ]
    },
    keyMessages: [
      "El diagnóstico se construye integrando clínica, tricoscopía y cultivo.",
      "La presencia de S. aureus explica por qué estos cuadros son tan resistentes: requieren tratamientos prolongados.",
      "El mejor resultado viene de un abordaje multimodal: sistémico, tópico e infiltraciones.",
      "La cicatriz es irreversible: el diagnóstico precoz es la única forma real de prevenir la pérdida definitiva de cabello."
    ],
    consentNote:
      "Caso publicado con el consentimiento informado de la paciente. Las imágenes muestran únicamente el cuero cabelludo, sin rasgos que permitan identificarla. La información clínica es educativa y no sustituye una consulta médica ni debe usarse para automedicarse."
  },
  {
    slug: "resultado-natural-toxina-botulinica-hombre",
    title: "Resultado natural con toxina botulínica en paciente masculino",
    excerpt:
      "Paciente masculino tratado con toxina botulínica para suavizar las líneas de expresión de la frente, el entrecejo y el contorno de los ojos, con un resultado natural.",
    seoTitle: "Toxina botulínica en hombres | Caso clínico en Machala",
    seoDescription:
      "Caso clínico de tratamiento con toxina botulínica en paciente masculino, con mejoría natural de las líneas de expresión de la frente, el entrecejo y el contorno de los ojos.",
    category: "Medicina estética",
    diagnosis: "Líneas de expresión dinámicas: frente, entrecejo y contorno de los ojos",
    datePublished: "2026-09-15",
    dateModified: "2026-09-15",
    readingMin: 3,
    relatedEspecialidad: "medicina-estetica",
    relatedPrompt: "¿Te interesa un tratamiento estético con criterio médico?",
    lead:
      "Paciente masculino que consultó porque deseaba suavizar las líneas de expresión del entrecejo, la frente y el contorno de los ojos, manteniendo una apariencia masculina y natural.",
    sections: [
      {
        h: "Evolución de las líneas frontales y del entrecejo",
        img: {
          src: "/casos/botox-frontal-entrecejo.jpg",
          alt: "Antes y después de toxina botulínica en paciente masculino tratado por la Dra. Karla Andrade en Machala.",
          caption: "Antes y después del tratamiento con toxina botulínica. Los resultados pueden variar en cada paciente."
        }
      },
      {
        h: "Evolución del contorno de los ojos",
        img: {
          src: "/casos/botox-perioculares.jpg",
          alt: "Antes y después de toxina botulínica en paciente masculino tratado por la Dra. Karla Andrade en Machala.",
          caption: "Antes y después del tratamiento con toxina botulínica. Los resultados pueden variar en cada paciente."
        }
      },
      {
        h: "El tratamiento",
        p: [
          "Se realizó tratamiento personalizado con toxina botulínica, respetando la anatomía y la expresión facial del paciente. En el control se observó una disminución visible de las arrugas dinámicas, sin perder naturalidad ni expresividad."
        ]
      },
      {
        h: "El resultado",
        p: [
          "El paciente se mostró muy satisfecho con el cambio y manifestó sentirse feliz con el resultado obtenido."
        ]
      }
    ],
    keyMessages: [
      "Un resultado natural no cambia tus rasgos: ayuda a que tu rostro luzca más descansado y armónico."
    ],
    consentNote:
      "Caso publicado con el consentimiento informado y expreso del paciente para el uso médico y publicitario de estas imágenes. La información clínica es educativa y no sustituye una consulta médica.",
    ctaLabel: "Agenda tu valoración"
  },
  {
    slug: "recuperacion-densidad-capilar",
    title: "Recuperación de la densidad capilar",
    cardTitle: "Tratamiento integral para caída del cabello",
    cardExcerpt: "Evolución después de 3 meses",
    subtitle: "Evolución clínica después de 3 meses de tratamiento dermatológico personalizado",
    excerpt:
      "Evolución clínica después de 3 meses de tratamiento dermatológico personalizado para la caída del cabello.",
    seoTitle: "Tratamiento para la caída del cabello en Machala | Dra. Karla Andrade",
    seoDescription:
      "Caso clínico de recuperación de la densidad capilar después de 3 meses de tratamiento dermatológico personalizado en Machala.",
    category: "Tricología",
    diagnosis: "Disminución progresiva de la densidad capilar",
    datePublished: "2026-10-06",
    dateModified: "2026-10-06",
    readingMin: 3,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    relatedPrompt: "¿Quieres estudiar la causa de tu caída de cabello?",
    lead:
      "Paciente con disminución progresiva de la densidad capilar. Después de una valoración dermatológica se indicó un tratamiento combinado y personalizado con plasma rico en plaquetas, mesoterapia capilar y tratamiento oral. A los 3 meses se observa una evolución favorable, con mejor cobertura y densidad capilar.",
    sections: [
      {
        h: "Vista de coronilla",
        compare: {
          antesSrc: "/casos/antes-coronilla.jpg",
          antesAlt: "Antes de tratamiento para caída del cabello realizado por la Dra. Karla Andrade",
          antesW: 800,
          antesH: 900,
          despuesSrc: "/casos/despues-coronilla.jpg",
          despuesAlt: "Después de tratamiento para caída del cabello realizado por la Dra. Karla Andrade",
          despuesW: 800,
          despuesH: 900
        }
      },
      {
        h: "Vista de la línea de implantación",
        compare: {
          antesSrc: "/casos/antes-frontal.jpg",
          antesAlt: "Antes de tratamiento para caída del cabello realizado por la Dra. Karla Andrade",
          antesW: 762,
          antesH: 850,
          despuesSrc: "/casos/despues-frontal.jpg",
          despuesAlt: "Después de tratamiento para caída del cabello realizado por la Dra. Karla Andrade",
          despuesW: 730,
          despuesH: 850
        }
      },
      {
        h: "Tratamiento realizado",
        list: [
          "Plasma rico en plaquetas (PRP)",
          "Mesoterapia capilar",
          "Tratamiento oral, bajo supervisión médica"
        ]
      }
    ],
    keyMessages: [],
    consentNote:
      "Caso publicado con el consentimiento informado del paciente para el tratamiento documentado y para el uso de estas imágenes con fines médicos y educativos. Cada paciente responde de manera diferente: los resultados pueden variar y el tratamiento debe indicarse después de una valoración dermatológica.",
    cta: {
      title: "¿Notas caída o pérdida de densidad en tu cabello?",
      text: "Una evaluación dermatológica permite identificar la causa y elegir el tratamiento adecuado para cada paciente.",
      buttonLabel: "Agendar valoración capilar"
    }
  },
  {
    slug: "cicatriz-queloide-por-picadura-de-insecto",
    title: "La cicatriz que no dejaba de crecer: queloide por una picadura de insecto",
    cardTitle: "Queloide por picadura de insecto",
    cardExcerpt: "Tratamiento con infiltraciones, en curso",
    subtitle: "Mujer de 30 años, con más de 5 años de evolución",
    excerpt:
      "Mujer de 30 años con una cicatriz gruesa y elevada en el hombro, de más de 5 años de evolución, formada después de una picadura de insecto. Tratamiento con infiltraciones.",
    seoTitle: "Queloide por Picadura de Insecto: Caso Clínico | Dra. Karla Andrade",
    seoDescription:
      "Caso clínico de un queloide (cicatriz gruesa) en el hombro por una picadura de insecto, tratado con infiltraciones por la Dra. Karla Andrade en Machala.",
    category: "Dermatología clínica",
    diagnosis: "Cicatriz queloide postpicadura de insecto",
    datePublished: "2026-10-16",
    dateModified: "2026-10-16",
    readingMin: 4,
    relatedEspecialidad: "dermatologia-clinica",
    relatedPrompt: "¿Tienes una cicatriz que no deja de crecer o te molesta?",
    lead:
      "Una paciente de 30 años llegó a la consulta con una cicatriz gruesa y elevada en el hombro, que llevaba más de 5 años ahí desde una picadura de insecto. En vez de sanar como una cicatriz normal, la piel de esa zona siguió creciendo sobre sí misma. Este es el tratamiento que se le dio y cómo va evolucionando.",
    sections: [
      {
        h: "El caso",
        p: [
          "Mujer de 30 años, sin otras condiciones de piel relevantes, con una lesión en el hombro que apareció después de una picadura de insecto hace más de 5 años. En vez de quedar como una marca plana, la zona fue creciendo: se volvió dura, elevada, de color entre marrón y violáceo, más grande que la picadura original."
        ]
      },
      {
        h: "¿Qué es lo que tenía, en palabras simples?",
        p: [
          "Se llama queloide: es lo que pasa cuando, al cicatrizar una herida (aunque sea pequeña, como la de un insecto), la piel 'se pasa de la raya' y sigue fabricando tejido de más, incluso después de que la herida original ya sanó. Por eso el bulto sigue ahí, e incluso puede seguir creciendo, años después de que pase lo que lo originó.",
          "No es algo que dependa de falta de cuidado ni de haberse rascado: es la forma en que esa piel, en particular, responde al cicatrizar."
        ]
      },
      {
        h: "El tratamiento",
        p: [
          "Se realizaron infiltraciones: inyecciones aplicadas directamente en la cicatriz, en consultorio, en dos sesiones. El objetivo de esta primera etapa era bajar el grosor y el relieve del queloide, no todavía la mancha de color."
        ]
      },
      {
        h: "El resultado hasta ahora",
        p: [
          "Con las dos sesiones, la lesión se aplanó de forma notoria: el bulto duro y elevado que tenía antes ya no está. Lo que queda ahora es la mancha de color (la hiperpigmentación) que dejó la cicatriz, sin el relieve ni el grosor previos."
        ]
      },
      {
        h: "El siguiente paso",
        p: [
          "Aplanar la cicatriz y aclarar la mancha que deja son dos cosas distintas, y se trabajan en etapas separadas. Ahora que el relieve está controlado, el siguiente paso del tratamiento se enfoca en esa mancha residual."
        ]
      }
    ],
    beforeAfter: {
      antesLabel: "Antes",
      antesDesc: "Cicatriz gruesa, dura y elevada, de más de 5 años de evolución.",
      antes: [
        { src: "/casos/queloide-hombro-antes.jpg", alt: "Queloide en el hombro antes del tratamiento con infiltraciones" }
      ],
      despuesLabel: "Después de 2 sesiones de infiltraciones",
      despuesDesc: "La lesión se aplanó; queda la mancha de color, que es el siguiente paso a tratar.",
      despues: [
        { src: "/casos/queloide-hombro-despues.jpg", alt: "Queloide en el hombro después de 2 sesiones de infiltraciones, ya aplanado" }
      ]
    },
    keyMessages: [
      "Un queloide no desaparece solo con el tiempo: tiende a mantenerse o incluso seguir creciendo si no se trata.",
      "Las infiltraciones son un tratamiento médico aplicado en consultorio, no algo que pueda hacerse en casa.",
      "Aplanar el relieve de la cicatriz y aclarar la mancha que deja son dos etapas distintas del tratamiento.",
      "Cuanto antes se empieza a tratar un queloide, más manejable suele ser."
    ],
    consentNote:
      "Caso publicado con el consentimiento informado y expreso de la paciente para el uso médico y publicitario de estas imágenes. Las fotografías muestran únicamente la zona del hombro, sin rasgos que permitan identificarla. El tratamiento sigue en curso: los resultados pueden variar en cada paciente y no sustituyen una consulta médica."
  }
];

export const getCaso = (slug: string) => casos.find((c) => c.slug === slug);
