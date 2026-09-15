export interface CaseImg { src: string; alt: string }
export interface CaseSection {
  h?: string;
  p?: string[];
  list?: string[];
  images?: CaseImg[];
  img?: { src: string; alt: string; caption?: string };
}
export interface ClinicalCase {
  slug: string;
  title: string;
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
  }
];

export const getCaso = (slug: string) => casos.find((c) => c.slug === slug);
