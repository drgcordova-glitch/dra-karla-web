export interface CaseImg { src: string; alt: string }
export interface CaseSection { h?: string; p?: string[]; list?: string[]; images?: CaseImg[] }
export interface ClinicalCase {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  diagnosis: string;
  datePublished: string;
  dateModified: string;
  readingMin: number;
  relatedEspecialidad: string;
  lead: string;
  sections: CaseSection[];
  beforeAfter?: {
    antesLabel: string; antesDesc: string; antes: CaseImg[];
    despuesLabel: string; despuesDesc: string; despues: CaseImg[];
  };
  keyMessages: string[];
  consentNote: string;
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
  }
];

export const getCaso = (slug: string) => casos.find((c) => c.slug === slug);
