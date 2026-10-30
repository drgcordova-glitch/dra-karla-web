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
  },
  {
    slug: "carcinoma-basocelular-frontal-cirugia-conjunta",
    title: "Carcinoma basocelular en la frente: diagnóstico, biopsia y cirugía conjunta con cirugía plástica",
    cardTitle: "Carcinoma basocelular en la frente",
    cardExcerpt: "Diagnóstico, biopsia y cirugía con cirugía plástica",
    subtitle: "Hombre de 84 años",
    excerpt:
      "Hombre de 84 años con una lesión en la frente que no cicatrizaba y sangraba con facilidad. La biopsia confirmó un carcinoma basocelular. Diagnóstico, biopsia y cirugía realizados en conjunto con un cirujano plástico.",
    seoTitle: "Carcinoma Basocelular: Caso Clínico en Machala | Dra. Karla Andrade",
    seoDescription:
      "Caso clínico de carcinoma basocelular en la frente: diagnóstico, biopsia y cirugía realizada por la Dra. Karla Andrade junto a un cirujano plástico en Machala.",
    category: "Cáncer de piel",
    diagnosis: "Carcinoma basocelular, variantes nodular e infiltrante",
    datePublished: "2026-10-21",
    dateModified: "2026-10-21",
    readingMin: 5,
    relatedEspecialidad: "cancer-de-piel-y-dermatoscopia",
    relatedPrompt: "¿Tienes una lesión en la piel que no cicatriza o te preocupa?",
    lead:
      "Un hombre de 84 años consultó por una lesión en la frente que llevaba tiempo sin sanar y sangraba con facilidad ante el roce mínimo. La biopsia confirmó un carcinoma basocelular. Este es el recorrido diagnóstico y el tratamiento, realizado en conjunto con un cirujano plástico para asegurar tanto la eliminación completa del tumor como un buen resultado estético.",
    sections: [
      {
        h: "El caso",
        p: [
          "Paciente masculino de 84 años, con una lesión en la región frontal derecha de evolución prolongada. Llamaba la atención que no cicatrizaba como una herida normal y que sangraba con facilidad ante mínimos roces, dos señales que no deben pasarse por alto en una lesión de la piel, especialmente en piel con años de exposición solar acumulada."
        ]
      },
      {
        h: "Hallazgos clínicos",
        p: [
          "Al examen se observó una lesión ulcerada, de bordes poco definidos, en la frente derecha. Este tipo de aspecto —una 'herida' que no termina de cerrar y sangra con facilidad— es una presentación característica del carcinoma basocelular, el tipo de cáncer de piel más frecuente."
        ]
      },
      {
        h: "La biopsia",
        p: [
          "Se realizó una biopsia diagnóstica de la lesión. El resultado confirmó un carcinoma basocelular, con dos variantes presentes en la misma lesión: nodular e infiltrante. La variante infiltrante tiene un patrón de crecimiento con bordes menos definidos que la nodular, lo que exige una planificación quirúrgica más cuidadosa para asegurar que se retire todo el tejido comprometido."
        ]
      },
      {
        h: "El día de la cirugía",
        p: [
          "La cirugía se realizó en conjunto entre la Dra. Karla Andrade —quien hizo el diagnóstico, la biopsia y participó directamente en la cirugía— y un cirujano plástico. Este trabajo conjunto combina dos objetivos: la extirpación completa del tumor, con el margen de seguridad adecuado, y una reconstrucción cuidadosa de la zona, especialmente delicada por su cercanía con la ceja."
        ],
        img: {
          src: "/casos/cbc-frontal-suturas.jpg",
          alt: "Sutura en la frente tras la extirpación quirúrgica del carcinoma basocelular",
          caption: "Resultado inmediato de la cirugía, el mismo día del procedimiento."
        }
      },
      {
        h: "El resultado, un mes después",
        p: [
          "Al mes de la cirugía, la cicatriz se integró bien en las líneas naturales de la frente, con buena preservación de la zona de la ceja. El seguimiento de este tipo de casos continúa en el tiempo, tanto para vigilar la cicatrización como para los controles dermatológicos periódicos que todo paciente con antecedente de cáncer de piel debe mantener."
        ]
      }
    ],
    beforeAfter: {
      antesLabel: "Antes",
      antesDesc: "Lesión ulcerada en la frente derecha, que no cicatrizaba y sangraba con facilidad.",
      antes: [
        { src: "/casos/cbc-frontal-antes.jpg", alt: "Lesión de carcinoma basocelular en la frente antes de la cirugía" }
      ],
      despuesLabel: "Un mes después de la cirugía",
      despuesDesc: "Cicatriz integrada en las líneas naturales de la frente.",
      despues: [
        { src: "/casos/cbc-frontal-final.jpg", alt: "Resultado de la cicatriz un mes después de la cirugía de carcinoma basocelular" }
      ]
    },
    keyMessages: [
      "El carcinoma basocelular es el cáncer de piel más frecuente. Rara vez pone en riesgo la vida, pero si no se trata puede seguir creciendo e invadir el tejido alrededor.",
      "Una lesión en la piel que no cicatriza en varias semanas, sobre todo si sangra con facilidad, debe evaluarse por un dermatólogo.",
      "La variante infiltrante tiene un patrón de crecimiento menos definido que la nodular, por lo que requiere una planificación quirúrgica más cuidadosa.",
      "El trabajo conjunto entre dermatología y cirugía plástica permite retirar el tumor por completo y, al mismo tiempo, cuidar el resultado estético, algo especialmente importante en zonas visibles como el rostro."
    ],
    consentNote:
      "Caso publicado con el consentimiento informado y expreso del paciente para el uso médico y publicitario de estas imágenes. Las fotografías fueron recortadas para mostrar únicamente la zona de la lesión en la frente, sin rasgos del rostro que permitan identificarlo. Los resultados pueden variar en cada paciente y no sustituyen una consulta médica.",
    cta: {
      title: "¿Tienes una lesión en la piel que no cicatriza o sangra con facilidad?",
      text: "Una evaluación dermatológica a tiempo permite diagnosticar a tiempo y elegir el tratamiento adecuado para cada caso.",
      buttonLabel: "Agendar evaluación de la piel"
    }
  },
  {
    slug: "alopecia-areata-parches-recuperacion-en-dos-meses",
    title: "Alopecia areata: recuperación de parches de calvicie en dos meses de tratamiento",
    cardTitle: "Alopecia areata: parches de calvicie",
    cardExcerpt: "Evolución a los 2 meses de tratamiento",
    subtitle: "Hombre de 28 años",
    excerpt:
      "Hombre de 28 años con varios parches de caída de cabello en la zona posterior del cuero cabelludo. Diagnóstico: alopecia areata. A los dos meses de tratamiento ya se observa crecimiento de cabello nuevo, con el tratamiento todavía en curso.",
    seoTitle: "Alopecia Areata: Caso Clínico en Machala | Dra. Karla Andrade",
    seoDescription:
      "Caso clínico de alopecia areata con parches de calvicie, tratada por la Dra. Karla Andrade en Machala. Evolución a los dos meses de tratamiento.",
    category: "Tricología",
    diagnosis: "Alopecia areata",
    datePublished: "2026-10-23",
    dateModified: "2026-10-23",
    readingMin: 4,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    relatedPrompt: "¿Notas parches de calvicie o caída repentina del cabello?",
    lead:
      "Un hombre de 28 años consultó al notar varios parches redondeados de caída de cabello en la zona posterior del cuero cabelludo. El diagnóstico fue alopecia areata. Este es el tratamiento indicado y la evolución observada a los dos meses.",
    sections: [
      {
        h: "El caso",
        p: [
          "Paciente masculino de 28 años, que consultó por la aparición de varios parches de caída de cabello en la zona posterior del cuero cabelludo, de bordes bien definidos y forma redondeada u ovalada, sin otros síntomas asociados como dolor o picazón."
        ]
      },
      {
        h: "¿Qué es la alopecia areata?",
        p: [
          "Es una enfermedad autoinmune: el sistema inmune ataca por error a los folículos pilosos, lo que detiene temporalmente la producción de cabello en las zonas afectadas. A diferencia de las alopecias cicatriciales, aquí el folículo no se destruye de forma permanente, por lo que generalmente conserva la capacidad de volver a producir cabello."
        ]
      },
      {
        h: "El tratamiento",
        p: [
          "Se indicó un tratamiento específico para alopecia areata, con controles periódicos para evaluar la respuesta y ajustar el manejo según la evolución de cada parche."
        ]
      },
      {
        h: "El resultado, a los dos meses",
        p: [
          "A los dos meses de tratamiento ya se observa crecimiento de cabello nuevo en las zonas que antes estaban sin pelo. El tratamiento continúa en curso: la alopecia areata puede requerir varios meses para una recuperación más completa, y el seguimiento sigue siendo importante incluso después de ver una buena respuesta inicial."
        ]
      }
    ],
    beforeAfter: {
      antesLabel: "Antes",
      antesDesc: "Varios parches de caída de cabello en la zona posterior del cuero cabelludo.",
      antes: [
        { src: "/casos/alopecia-areata-antes.jpg", alt: "Parches de alopecia areata en el cuero cabelludo antes del tratamiento" }
      ],
      despuesLabel: "Dos meses después",
      despuesDesc: "Crecimiento de cabello nuevo visible en las zonas afectadas; tratamiento en curso.",
      despues: [
        { src: "/casos/alopecia-areata-despues.jpg", alt: "Crecimiento de cabello nuevo tras dos meses de tratamiento para alopecia areata" }
      ]
    },
    keyMessages: [
      "La alopecia areata es autoinmune, no cicatricial: por eso el folículo generalmente conserva la capacidad de volver a producir cabello.",
      "El tratamiento temprano suele asociarse a mejores resultados.",
      "Puede reaparecer incluso después de una buena respuesta inicial, por lo que el seguimiento continúa siendo importante.",
      "Cada caso evoluciona de forma distinta: los resultados pueden variar entre pacientes."
    ],
    consentNote:
      "Caso publicado con el consentimiento informado y expreso del paciente para el uso médico y publicitario de estas imágenes. Las fotografías muestran únicamente la zona posterior del cuero cabelludo, sin rasgos del rostro que permitan identificarlo. El tratamiento sigue en curso: los resultados pueden variar en cada paciente y no sustituyen una consulta médica.",
    cta: {
      title: "¿Notas parches de calvicie o caída repentina del cabello?",
      text: "Una evaluación temprana permite confirmar el diagnóstico y empezar el tratamiento adecuado a tiempo.",
      buttonLabel: "Agendar evaluación capilar"
    }
  },
  {
    slug: "alopecia-androgenetica-prp-mesoterapia-tratamiento-oral",
    title: "Alopecia androgenética: mejoría de densidad con PRP, mesoterapia y tratamiento oral",
    cardTitle: "Alopecia androgenética masculina",
    cardExcerpt: "Evolución a los 3 meses y medio de tratamiento",
    subtitle: "Hombre de 24 años",
    excerpt:
      "Hombre de 24 años con alopecia androgenética, tratado con una combinación de plasma rico en plaquetas, mesoterapia capilar y tratamiento oral. Mejoría del grosor, la densidad y reducción de las áreas con menos cabello.",
    seoTitle: "Alopecia Androgenética: Caso Clínico en Machala | Dra. Karla Andrade",
    seoDescription:
      "Caso clínico de alopecia androgenética en un paciente joven, tratado por la Dra. Karla Andrade en Machala con PRP, mesoterapia y tratamiento oral.",
    category: "Tricología",
    diagnosis: "Alopecia androgenética",
    datePublished: "2026-10-23",
    dateModified: "2026-10-23",
    readingMin: 4,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    relatedPrompt: "¿Notas menos densidad o entradas que avanzan?",
    lead:
      "Un hombre de 24 años consultó por una pérdida progresiva de densidad capilar, con afinamiento notorio en la zona de la coronilla. El diagnóstico fue alopecia androgenética. Este es el tratamiento combinado indicado y la evolución observada en poco más de tres meses.",
    sections: [
      {
        h: "El caso",
        p: [
          "Paciente masculino de 24 años, con pérdida progresiva de densidad capilar, más notoria en la zona de la coronilla, compatible con alopecia androgenética: la causa más frecuente de caída de cabello, de origen hormonal y genético."
        ]
      },
      {
        h: "El tratamiento",
        p: [
          "Se indicó un tratamiento combinado: plasma rico en plaquetas (PRP), mesoterapia capilar y tratamiento oral, bajo supervisión médica. Combinar estos enfoques, en lugar de depender de uno solo, suele asociarse a mejores resultados en casos de alopecia androgenética."
        ]
      },
      {
        h: "El resultado",
        p: [
          "En poco más de tres meses de tratamiento se observa mejoría en el grosor y la densidad del cabello, con una reducción visible de las áreas donde antes se notaba más el cuero cabelludo. La alopecia androgenética es una condición progresiva y crónica: sostener el tratamiento en el tiempo es lo que permite mantener y seguir mejorando estos resultados."
        ]
      }
    ],
    beforeAfter: {
      antesLabel: "Antes",
      antesDesc: "Menor densidad capilar, con afinamiento notorio en la zona de la coronilla.",
      antes: [
        { src: "/casos/prp-androgenetica-antes.jpg", alt: "Alopecia androgenética en la coronilla antes del tratamiento" }
      ],
      despuesLabel: "Poco más de 3 meses después",
      despuesDesc: "Mejoría de grosor y densidad capilar, con menos área de cuero cabelludo visible.",
      despues: [
        { src: "/casos/prp-androgenetica-despues.jpg", alt: "Mejoría de la densidad capilar tras el tratamiento combinado para alopecia androgenética" }
      ]
    },
    keyMessages: [
      "La alopecia androgenética es la causa más frecuente de caída de cabello, de origen hormonal y genético.",
      "Combinar PRP, mesoterapia y tratamiento oral suele dar mejores resultados que depender de un solo enfoque.",
      "Es una condición progresiva y crónica: sostener el tratamiento en el tiempo es lo que permite mantener los resultados.",
      "Cada caso evoluciona de forma distinta: los resultados pueden variar entre pacientes."
    ],
    consentNote:
      "Caso publicado con el consentimiento informado y expreso del paciente para el uso médico y publicitario de estas imágenes. Las fotografías muestran únicamente la parte superior del cuero cabelludo, sin rasgos del rostro que permitan identificarlo. Los resultados pueden variar en cada paciente y no sustituyen una consulta médica.",
    cta: {
      title: "¿Notas menos densidad o entradas que avanzan?",
      text: "Una evaluación dermatológica permite confirmar el diagnóstico y diseñar un tratamiento combinado adecuado para cada caso.",
      buttonLabel: "Agendar evaluación capilar"
    }
  },
  {
    slug: "acne-en-adolescente-evolucion-con-tratamiento",
    title: "Acné en un adolescente: evolución con diagnóstico y tratamiento adecuados",
    cardTitle: "Acné en adolescente",
    cardExcerpt: "Evolución del rostro con un diagnóstico y tratamiento adecuados",
    subtitle: "Paciente de 16 años",
    excerpt:
      "Paciente de 16 años con acné facial activo. La evolución del rostro después de un diagnóstico correcto y un tratamiento dermatológico adecuado.",
    seoTitle: "Acné en Adolescentes: Caso Clínico en Machala | Dra. Karla Andrade",
    seoDescription:
      "Caso clínico de acné en un paciente adolescente, con evolución favorable del rostro gracias a un diagnóstico y tratamiento dermatológico adecuados.",
    category: "Dermatología clínica",
    diagnosis: "Acné",
    datePublished: "2026-10-26",
    dateModified: "2026-10-26",
    readingMin: 3,
    relatedEspecialidad: "dermatologia-pediatrica",
    relatedPrompt: "¿Tu hijo o hija tiene acné y no sabes cómo ayudarlo?",
    lead:
      "Paciente de 16 años que consultó por acné activo en el rostro, con lesiones inflamatorias visibles. Este es el antes y el después, una vez que el cuadro se abordó con el diagnóstico y el tratamiento adecuados.",
    sections: [
      {
        h: "El caso",
        p: [
          "Paciente masculino de 16 años, que consultó por acné en el rostro, con lesiones inflamatorias y puntos negros, principalmente en las mejillas."
        ]
      },
      {
        h: "El resultado",
        img: {
          src: "/casos/acne-adolescente-evolucion.jpg",
          alt: "Antes y después del acné en un paciente adolescente tratado por la Dra. Karla Andrade en Machala.",
          caption: "Antes y después. Los resultados pueden variar en cada paciente."
        }
      },
      {
        h: "La evolución",
        p: [
          "Con el diagnóstico correcto y un tratamiento dermatológico adecuado a su tipo de piel y de acné, el rostro mostró una mejoría notoria: menos lesiones inflamatorias y una piel visiblemente más sana y pareja."
        ]
      }
    ],
    keyMessages: [
      "El acné en la adolescencia tiene tratamiento: no hay que esperar a que \"se le pase con la edad\".",
      "Un diagnóstico correcto, adaptado a cada tipo de piel, es la base de un buen resultado.",
      "Cuanto antes se trata el acné, menor es el riesgo de que deje cicatrices o manchas."
    ],
    consentNote:
      "Caso publicado con el consentimiento informado del padre, madre o representante legal del paciente, menor de edad, para el uso médico y publicitario de estas imágenes. Los resultados pueden variar en cada paciente y no sustituyen una consulta médica."
  },
  {
    slug: "pilomatricoma-cirugia-dermatologica",
    title: "El bulto duro que parecía un tumor: cirugía de un pilomatricoma",
    cardTitle: "Pilomatricoma: cirugía dermatológica",
    cardExcerpt: "Extirpación completa de un tumor benigno con aspecto alarmante",
    subtitle: "Mujer de 23 años",
    excerpt:
      "Mujer de 23 años con un bulto duro bajo la piel, de aspecto llamativo. El diagnóstico fue pilomatricoma, un tumor benigno del folículo piloso, extirpado mediante cirugía dermatológica.",
    seoTitle: "Pilomatricoma: Caso Clínico en Machala | Dra. Karla Andrade",
    seoDescription:
      "Caso clínico de pilomatricoma, un tumor benigno de la piel con aspecto llamativo, extirpado mediante cirugía dermatológica por la Dra. Karla Andrade en Machala.",
    category: "Dermatología clínica",
    diagnosis: "Pilomatricoma (tumor benigno del folículo piloso)",
    datePublished: "2026-10-28",
    dateModified: "2026-10-28",
    readingMin: 4,
    relatedEspecialidad: "dermatologia-clinica",
    relatedPrompt: "¿Tienes un bulto bajo la piel que te preocupa?",
    lead:
      "Una paciente de 23 años consultó por un bulto duro bajo la piel, que se notaba al pellizcar la zona. Por su dureza y su crecimiento, generaba preocupación. El diagnóstico fue pilomatricoma, un tumor benigno, y se resolvió con cirugía dermatológica.",
    sections: [
      {
        h: "El caso",
        p: [
          "Paciente femenina de 23 años, que consultó por un nódulo duro y móvil bajo la piel, perceptible sobre todo al pellizcar la zona entre los dedos. No presentaba dolor, pero su consistencia firme y su presencia sostenida en el tiempo motivaron la consulta."
        ]
      },
      {
        h: "¿Qué es un pilomatricoma?",
        p: [
          "Es un tumor benigno que se origina en las células de la matriz del folículo piloso, la estructura de la piel que da origen al pelo. Es una de las lesiones benignas más frecuentes en piel y, antes de la cirugía, suele confundirse con un quiste.",
          "Por su consistencia muy dura al tacto y porque a veces crece de forma visible, puede generar preocupación en el paciente, como si se tratara de algo maligno. Sin embargo, es un tumor benigno: no se trata de cáncer de piel."
        ]
      },
      {
        h: "La cirugía",
        p: [
          "Se realizó la extirpación quirúrgica completa de la lesión mediante cirugía dermatológica, en consultorio. Retirar la totalidad del tumor, con su cápsula, es importante para evitar que vuelva a aparecer en la misma zona."
        ],
        img: {
          src: "/casos/pilomatricoma-extirpacion.jpg",
          alt: "Pilomatricoma antes de la cirugía y la pieza quirúrgica extirpada, caso tratado por la Dra. Karla Andrade en Machala.",
          caption: "Izquierda: la lesión antes de la cirugía. Derecha: la pieza extirpada, con el aspecto irregular y lobulado característico de este tumor."
        }
      },
      {
        h: "El resultado",
        p: [
          "La lesión se retiró por completo. El aspecto irregular, lobulado y de superficie dura que se observa en la pieza quirúrgica es característico del pilomatricoma, aunque a simple vista pueda parecer alarmante."
        ]
      }
    ],
    keyMessages: [
      "El pilomatricoma es un tumor benigno del folículo piloso, no un cáncer de piel, aunque su consistencia dura pueda generar esa preocupación.",
      "Antes de la cirugía suele confundirse con un quiste: el examen dermatológico ayuda a diferenciarlos.",
      "La cirugía, con extirpación completa de la lesión, es el tratamiento indicado y resuelve el cuadro.",
      "Ante cualquier bulto nuevo o que crece bajo la piel, una evaluación dermatológica permite un diagnóstico certero."
    ],
    consentNote:
      "Caso publicado con el consentimiento informado y expreso de la paciente para el uso médico y publicitario de estas imágenes. Los resultados pueden variar en cada paciente y no sustituyen una consulta médica.",
    cta: {
      title: "¿Tienes un bulto bajo la piel que te preocupa?",
      text: "Una evaluación dermatológica permite diferenciarlo de otras lesiones y, si corresponde, planificar su extirpación.",
      buttonLabel: "Agendar evaluación de la piel"
    }
  },
  {
    slug: "alopecia-androgenetica-coronilla-hombre-46-anos",
    title: "Alopecia androgenética en la coronilla: mejoría de densidad en un hombre de 46 años",
    cardTitle: "Alopecia androgenética en la coronilla",
    cardExcerpt: "Evolución a los 3 meses de tratamiento combinado",
    subtitle: "Hombre de 46 años",
    excerpt:
      "Hombre de 46 años con una zona de menor densidad capilar en la coronilla. Tratamiento combinado con PRP, mesoterapia capilar y tratamiento oral, con mejoría visible a los 3 meses.",
    seoTitle: "Alopecia Androgenética en la Coronilla: Caso Clínico | Dra. Karla Andrade",
    seoDescription:
      "Caso clínico de alopecia androgenética en la coronilla de un hombre de 46 años, tratado por la Dra. Karla Andrade en Machala con PRP, mesoterapia y tratamiento oral.",
    category: "Tricología",
    diagnosis: "Alopecia androgenética (patrón de coronilla)",
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    readingMin: 3,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    relatedPrompt: "¿Notas menos densidad o una zona más despejada en la coronilla?",
    lead:
      "Un hombre de 46 años consultó por una zona de menor densidad capilar, bien visible en la coronilla. El diagnóstico fue alopecia androgenética. Este es el tratamiento combinado indicado y la evolución observada a los 3 meses.",
    sections: [
      {
        h: "El caso",
        p: [
          "Paciente masculino de 46 años, con pérdida progresiva de densidad capilar en la zona de la coronilla, donde se notaba una zona más despejada, de piel visible entre el cabello. Un patrón típico de la alopecia androgenética a esta edad."
        ]
      },
      {
        h: "Vista de coronilla",
        compare: {
          antesSrc: "/casos/alopecia-androgenetica-coronilla-antes.jpg",
          antesAlt: "Alopecia androgenética en la coronilla antes del tratamiento, caso de hombre de 46 años",
          antesW: 800,
          antesH: 1003,
          despuesSrc: "/casos/alopecia-androgenetica-coronilla-despues.jpg",
          despuesAlt: "Mejoría de la densidad capilar en la coronilla después de 3 meses de tratamiento",
          despuesW: 800,
          despuesH: 1039
        }
      },
      {
        h: "El tratamiento",
        p: [
          "Se indicó un tratamiento combinado: plasma rico en plaquetas (PRP), mesoterapia capilar y tratamiento oral, bajo supervisión médica."
        ]
      },
      {
        h: "El resultado, a los 3 meses",
        p: [
          "A los 3 meses de tratamiento se observa una mejoría notoria de la densidad capilar en la coronilla, con menos piel visible entre el cabello. La alopecia androgenética es una condición progresiva y crónica: sostener el tratamiento en el tiempo es lo que permite mantener y seguir mejorando estos resultados."
        ]
      }
    ],
    keyMessages: [
      "La alopecia androgenética también afecta a la coronilla, no solo a la línea frontal.",
      "Combinar PRP, mesoterapia y tratamiento oral suele dar mejores resultados que depender de un solo enfoque.",
      "Es una condición progresiva y crónica: sostener el tratamiento en el tiempo es lo que permite mantener los resultados.",
      "Cada caso evoluciona de forma distinta: los resultados pueden variar entre pacientes."
    ],
    consentNote:
      "Caso publicado con el consentimiento informado y expreso del paciente para el uso médico y publicitario de estas imágenes. Las fotografías muestran únicamente la zona de la coronilla, sin rasgos del rostro que permitan identificarlo. Los resultados pueden variar en cada paciente y no sustituyen una consulta médica.",
    cta: {
      title: "¿Notas menos densidad o una zona más despejada en la coronilla?",
      text: "Una evaluación dermatológica permite confirmar el diagnóstico y diseñar un tratamiento combinado adecuado para cada caso.",
      buttonLabel: "Agendar evaluación capilar"
    }
  },
  {
    slug: "caida-de-cabello-en-mujer-linea-media-2-meses",
    title: "Caída de cabello en mujeres: evolución del ensanchamiento de la línea media",
    cardTitle: "Caída de cabello en la línea media",
    cardExcerpt: "Evolución a los 2 meses de tratamiento",
    subtitle: "Mujer de 34 años",
    excerpt:
      "Mujer de 34 años con ensanchamiento de la línea media del cabello, un patrón frecuente de caída en mujeres. Evolución a los 2 meses de un diagnóstico y tratamiento adecuados.",
    seoTitle: "Caída de Cabello en Mujeres: Caso Clínico en Machala | Dra. Karla Andrade",
    seoDescription:
      "Caso clínico de caída de cabello en una paciente mujer, con ensanchamiento de la línea media, tratada por la Dra. Karla Andrade en Machala.",
    category: "Tricología",
    diagnosis: "Alopecia de patrón femenino, con ensanchamiento de la línea media",
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    readingMin: 3,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    relatedPrompt: "¿Notas tu línea media más ancha o el cuero cabelludo más visible?",
    lead:
      "Una mujer de 34 años consultó por un ensanchamiento progresivo de la línea media del cabello, con más cuero cabelludo visible en esa zona. Este es el antes y el después, a los 2 meses de un diagnóstico y tratamiento dermatológico adecuados.",
    sections: [
      {
        h: "El caso",
        p: [
          "Paciente femenina de 34 años, que consultó por un ensanchamiento progresivo de la línea media de su cabello, con mayor visibilidad del cuero cabelludo en esa zona. Un patrón de caída muy frecuente en mujeres y que suele generar preocupación estética."
        ]
      },
      {
        h: "El resultado",
        img: {
          src: "/casos/alopecia-femenina-linea-media-antes.jpg",
          alt: "Ensanchamiento de la línea media del cabello en una paciente mujer, antes del tratamiento",
          caption: "Antes del tratamiento."
        }
      },
      {
        img: {
          src: "/casos/alopecia-femenina-linea-media-despues.jpg",
          alt: "Mejoría de la línea media del cabello en una paciente mujer, después de 2 meses de tratamiento",
          caption: "Después de 2 meses de tratamiento. Los resultados pueden variar en cada paciente."
        }
      },
      {
        h: "La evolución",
        p: [
          "Con el diagnóstico correcto y un tratamiento dermatológico adecuado, a los 2 meses se observa una mejoría visible: la línea media se ve más poblada y con menos cuero cabelludo expuesto."
        ]
      }
    ],
    keyMessages: [
      "La caída de cabello en mujeres también tiene tratamiento, y el ensanchamiento de la línea media es uno de los patrones más frecuentes de consultar.",
      "Un diagnóstico dermatológico permite identificar la causa y elegir el tratamiento adecuado para cada caso.",
      "Cada caso evoluciona de forma distinta: los resultados pueden variar entre pacientes."
    ],
    consentNote:
      "Caso publicado con el consentimiento informado y expreso de la paciente para el uso médico y publicitario de estas imágenes. Las fotografías muestran únicamente la zona superior del cuero cabelludo, sin rasgos del rostro que permitan identificarla. Los resultados pueden variar en cada paciente y no sustituyen una consulta médica.",
    cta: {
      title: "¿Notas tu línea media más ancha o el cuero cabelludo más visible?",
      text: "Una evaluación dermatológica permite identificar la causa de la caída y diseñar un tratamiento adecuado.",
      buttonLabel: "Agendar evaluación capilar"
    }
  },
  {
    slug: "alopecia-androgenetica-entradas-hombre-44-anos",
    title: "Alopecia androgenética en las entradas: mejoría en un hombre de 44 años",
    cardTitle: "Alopecia androgenética en las entradas",
    cardExcerpt: "Evolución con tratamiento dermatológico personalizado",
    subtitle: "Hombre de 44 años",
    excerpt:
      "Hombre de 44 años con entradas marcadas y pérdida de densidad en la zona frontal. Evolución con un diagnóstico y tratamiento dermatológico personalizado.",
    seoTitle: "Alopecia Androgenética en las Entradas: Caso Clínico | Dra. Karla Andrade",
    seoDescription:
      "Caso clínico de alopecia androgenética con entradas marcadas en un hombre de 44 años, tratado por la Dra. Karla Andrade en Machala.",
    category: "Tricología",
    diagnosis: "Alopecia androgenética (patrón de entradas frontales)",
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    readingMin: 3,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    relatedPrompt: "¿Notas tus entradas más marcadas o menos densidad al frente?",
    lead:
      "Un hombre de 44 años consultó por entradas marcadas y menor densidad capilar en la zona frontal. El diagnóstico fue alopecia androgenética. Este es el antes y el después, con un tratamiento dermatológico personalizado.",
    sections: [
      {
        h: "El caso",
        p: [
          "Paciente masculino de 44 años, con entradas marcadas y pérdida progresiva de densidad en la zona frontal del cuero cabelludo, un patrón característico de la alopecia androgenética en el hombre."
        ]
      },
      {
        h: "El resultado",
        img: {
          src: "/casos/alopecia-androgenetica-entradas-antes.jpg",
          alt: "Entradas marcadas por alopecia androgenética en un paciente hombre, antes del tratamiento",
          caption: "Antes del tratamiento."
        }
      },
      {
        img: {
          src: "/casos/alopecia-androgenetica-entradas-despues.jpg",
          alt: "Mejoría de la densidad capilar en la zona frontal después del tratamiento",
          caption: "Después del tratamiento. Los resultados pueden variar en cada paciente."
        }
      },
      {
        h: "La evolución",
        p: [
          "Con el diagnóstico correcto y un tratamiento dermatológico personalizado, se observa una mejoría visible en la densidad de la zona frontal, con un contorno más poblado y menos cuero cabelludo expuesto."
        ]
      }
    ],
    keyMessages: [
      "Las entradas marcadas en el hombre suelen responder bien a un tratamiento dermatológico cuando se indican a tiempo.",
      "Un diagnóstico correcto permite diseñar un tratamiento personalizado para cada tipo y patrón de caída.",
      "Cada caso evoluciona de forma distinta: los resultados pueden variar entre pacientes."
    ],
    consentNote:
      "Caso publicado con el consentimiento informado y expreso del paciente para el uso médico y publicitario de estas imágenes. Las fotografías muestran únicamente la zona frontal del cuero cabelludo, sin rasgos del rostro que permitan identificarlo. Los resultados pueden variar en cada paciente y no sustituyen una consulta médica.",
    cta: {
      title: "¿Notas tus entradas más marcadas o menos densidad al frente?",
      text: "Una evaluación dermatológica permite confirmar el diagnóstico y diseñar un tratamiento personalizado adecuado.",
      buttonLabel: "Agendar evaluación capilar"
    }
  },
  {
    slug: "alopecia-androgenetica-tratamiento-medico-hombre-28-anos",
    title: "Alopecia androgenética: mejoría a los 4 meses sin cirugía, en un hombre de 28 años",
    cardTitle: "Alopecia androgenética sin cirugía",
    cardExcerpt: "Evolución a los 4 meses de tratamiento médico",
    subtitle: "Hombre de 28 años",
    excerpt:
      "Hombre de 28 años con pérdida de densidad en la zona frontal. Mejoría visible a los 4 meses de tratamiento médico dermatológico, sin cirugía ni trasplante.",
    seoTitle: "Alopecia Androgenética sin Cirugía: Caso Clínico | Dra. Karla Andrade",
    seoDescription:
      "Caso clínico de alopecia androgenética en un hombre de 28 años, con mejoría a los 4 meses de tratamiento médico dermatológico, sin cirugía, por la Dra. Karla Andrade en Machala.",
    category: "Tricología",
    diagnosis: "Alopecia androgenética",
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    readingMin: 3,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    relatedPrompt: "¿Notas menos densidad y quieres evitar llegar a una cirugía?",
    lead:
      "Un hombre de 28 años consultó por pérdida de densidad capilar en la zona frontal. El diagnóstico fue alopecia androgenética. A los 4 meses de tratamiento médico dermatológico, sin cirugía ni trasplante, se observa una mejoría visible.",
    sections: [
      {
        h: "El caso",
        p: [
          "Paciente masculino de 28 años, con pérdida progresiva de densidad capilar en la zona frontal, compatible con alopecia androgenética: la causa más frecuente de caída de cabello, de origen hormonal y genético."
        ]
      },
      {
        h: "El resultado",
        img: {
          src: "/casos/alopecia-androgenetica-28-anos-antes.jpg",
          alt: "Alopecia androgenética en la zona frontal en un paciente de 28 años, antes del tratamiento",
          caption: "Antes del tratamiento."
        }
      },
      {
        img: {
          src: "/casos/alopecia-androgenetica-28-anos-despues.jpg",
          alt: "Mejoría de la densidad capilar después de 4 meses de tratamiento médico, sin cirugía",
          caption: "Después de 4 meses de tratamiento médico, sin cirugía ni trasplante. Los resultados pueden variar en cada paciente."
        }
      },
      {
        h: "La evolución",
        p: [
          "Con un tratamiento médico dermatológico, sin necesidad de cirugía ni trasplante capilar, se observa a los 4 meses una mejoría notoria en la densidad de la zona frontal. La alopecia androgenética es una condición progresiva y crónica: sostener el tratamiento en el tiempo es lo que permite mantener y seguir mejorando estos resultados."
        ]
      }
    ],
    keyMessages: [
      "No toda alopecia androgenética necesita cirugía: un tratamiento médico bien indicado puede dar resultados visibles.",
      "Cuanto antes se trata, mejor suele responder el folículo que todavía está activo.",
      "Es una condición progresiva y crónica: sostener el tratamiento en el tiempo es lo que permite mantener los resultados.",
      "Cada caso evoluciona de forma distinta: los resultados pueden variar entre pacientes."
    ],
    consentNote:
      "Caso publicado con el consentimiento informado y expreso del paciente para el uso médico y publicitario de estas imágenes. Las fotografías muestran únicamente la zona frontal del cuero cabelludo, sin rasgos del rostro que permitan identificarlo. Los resultados pueden variar en cada paciente y no sustituyen una consulta médica.",
    cta: {
      title: "¿Notas menos densidad y quieres evitar llegar a una cirugía?",
      text: "Una evaluación dermatológica permite confirmar el diagnóstico y empezar a tiempo un tratamiento médico adecuado.",
      buttonLabel: "Agendar evaluación capilar"
    }
  }
];

export const getCaso = (slug: string) => casos.find((c) => c.slug === slug);
