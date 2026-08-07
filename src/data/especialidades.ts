export interface EspSection { h?: string; p?: string[]; list?: string[]; }
export interface EspFaq { q: string; a: string; }
export interface Especialidad {
  slug: string;
  num: string;
  tier: "nucleo" | "amplitud";
  title: string;
  cardText: string;
  lead: string;
  seoTitle?: string;
  seoDescription?: string;
  sections: EspSection[];
  faqs: EspFaq[];
}

export const especialidades: Especialidad[] = [
  {
    slug: "dermatologia-clinica",
    num: "01",
    tier: "nucleo",
    title: "Dermatología clínica",
    seoTitle: "Dermatóloga en Machala · Dermatología Clínica",
    seoDescription:
      "Consulta con una dermatóloga en Machala, El Oro: diagnóstico y tratamiento de acné, rosácea, dermatitis, psoriasis y otras afecciones de la piel, con base científica.",
    cardText:
      "Diagnóstico y tratamiento de las enfermedades de la piel en adultos: acné, rosácea, dermatitis, psoriasis y más.",
    lead:
      "La consulta dermatológica es el punto de partida para cuidar tu piel con criterio médico. Aquí se estudia, se diagnostica y se trata cada condición con un plan pensado para ti.",
    sections: [
      {
        p: [
          "La dermatología clínica se ocupa de las enfermedades de la piel, el cabello, las uñas y las mucosas. Muchas de estas condiciones son frecuentes y tienen tratamiento, pero requieren un diagnóstico preciso antes de indicar cualquier cosa: no toda mancha, granito o comezón es lo mismo.",
          "En la consulta, la Dra. Andrade escucha tu motivo, examina tu piel —con dermatoscopía cuando hace falta— y te explica en palabras claras qué tienes y qué opciones existen."
        ]
      },
      {
        h: "Motivos de consulta frecuentes",
        list: [
          "Acné y sus secuelas (manchas y cicatrices)",
          "Manchas y melasma",
          "Rosácea y enrojecimiento facial",
          "Dermatitis atópica, de contacto y piel sensible",
          "Psoriasis y otras enfermedades inflamatorias",
          "Verrugas, lunares y lesiones que cambian",
          "Enfermedades de las uñas y del cuero cabelludo"
        ]
      },
      {
        h: "Procedimientos en consultorio",
        p: [
          "Cuando el caso lo amerita, se realizan procedimientos ambulatorios menores como biopsias de piel, extirpación de lesiones benignas, crioterapia o electrocoagulación, con técnica cuidadosa y bajo anestesia local.",
          "Los casos que requieren cirugía mayor o manejo oncológico especializado se coordinan y derivan al servicio correspondiente, acompañando a cada paciente en el proceso."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Cuándo debería ver a un dermatólogo?",
        a: "Cuando una condición de la piel no mejora, reaparece, te incomoda o te preocupa: acné persistente, manchas nuevas, comezón, caída de cabello o un lunar que cambió. No hace falta esperar a que empeore."
      },
      {
        q: "¿Qué llevo a la primera consulta?",
        a: "Una lista de los productos y medicamentos que usas, estudios previos si los tienes, y tus dudas anotadas. Si es por manchas o lunares, evita maquillaje en la zona el día de la cita."
      }
    ]
  },
  {
    slug: "dermatologia-pediatrica",
    num: "02",
    tier: "nucleo",
    title: "Dermatología pediátrica",
    seoTitle: "Dermatología Pediátrica en Machala · Piel de bebés y niños",
    seoDescription:
      "Atención dermatológica pediátrica en Machala, El Oro, desde los primeros días de vida: dermatitis atópica, dermatitis del pañal, manchas de nacimiento y más.",
    cardText:
      "La piel del bebé y del niño necesita una mirada distinta. Atención especializada desde los primeros días de vida.",
    lead:
      "La piel de los niños no es una versión pequeña de la del adulto: reacciona distinto y necesita criterios propios. La Dra. Andrade cuenta con formación específica en dermatología pediátrica.",
    sections: [
      {
        p: [
          "Desde la dermatitis del pañal hasta la dermatitis atópica, los angiomas, los hemangiomas o las manchas de nacimiento, las condiciones de la piel infantil tienen particularidades que conviene evaluar con una mirada entrenada.",
          "El objetivo es doble: tratar bien y acompañar a los padres con indicaciones claras, sin sobre‑tratar ni alarmar de más."
        ]
      },
      {
        h: "Consultas frecuentes en niños",
        list: [
          "Dermatitis atópica y piel seca",
          "Dermatitis del pañal",
          "Manchas de nacimiento, angiomas y hemangiomas",
          "Verrugas y molusco contagioso",
          "Infecciones de la piel frecuentes en la infancia",
          "Acné del adolescente"
        ]
      },
      {
        h: "Formación específica",
        p: [
          "La Dra. Andrade realizó el Curso Anual Superior de Dermatología Pediátrica en el Hospital de Niños Ricardo Gutiérrez y una Diplomatura en Dermatología Quirúrgica Infantil en la Universidad de Buenos Aires (Hospital Elizalde), y es miembro de la sociedad de dermatología pediátrica."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Desde qué edad se puede consultar?",
        a: "Desde los primeros días de vida. Muchas condiciones de la piel del recién nacido son normales y transitorias; una consulta ayuda a diferenciarlas de las que sí requieren tratamiento."
      },
      {
        q: "La dermatitis atópica de mi hijo vuelve siempre, ¿tiene solución?",
        a: "La dermatitis atópica es crónica y tiende a brotes, pero se controla muy bien con un plan de cuidado de la piel y tratamiento de los brotes. La mayoría de los niños mejora mucho con el manejo adecuado."
      }
    ]
  },
  {
    slug: "cancer-de-piel-y-dermatoscopia",
    num: "03",
    tier: "nucleo",
    title: "Cáncer de piel y dermatoscopía",
    seoTitle: "Cáncer de piel y control de lunares en Machala · Dermatoscopía",
    seoDescription:
      "Detección precoz del cáncer de piel y control de lunares con dermatoscopía digital en Machala, El Oro, con la Dra. Karla Andrade, formada en dermatología oncológica.",
    cardText:
      "Control de lunares y detección temprana con dermatoscopía digital. Actuar a tiempo cambia el pronóstico.",
    lead:
      "El cáncer de piel detectado a tiempo es, en la gran mayoría de los casos, altamente tratable. La dermatoscopía permite mirar los lunares con detalle y decidir con criterio.",
    sections: [
      {
        p: [
          "La dermatoscopía es una técnica que amplía y examina los lunares y lesiones de la piel con luz especial, revelando estructuras que no se ven a simple vista. Es la herramienta central para diferenciar lo benigno de lo que merece un control o una biopsia.",
          "En Ecuador, con nuestra exposición solar, el control periódico de la piel es una medida de prevención sencilla y valiosa, sobre todo si tienes muchos lunares, antecedentes familiares o piel clara."
        ]
      },
      {
        h: "Cuándo consultar por un lunar",
        p: ["La regla del ABCDE ayuda a identificar señales de alerta:"],
        list: [
          "Asimetría: una mitad distinta de la otra",
          "Bordes irregulares o mal definidos",
          "Color desigual o varios colores",
          "Diámetro mayor a 6 mm",
          "Evolución: cambios en tamaño, forma o color, o que sangre o pique"
        ]
      },
      {
        h: "Experiencia institucional",
        p: [
          "La Dra. Andrade tiene formación en Dermatología Oncológica y participó en el diseño de un protocolo hospitalario de detección precoz de cáncer de piel. El estudio incluye la evaluación clínica, la dermatoscopía y, cuando corresponde, la biopsia diagnóstica; los casos que requieren cirugía oncológica se coordinan con los servicios especializados."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Cada cuánto debo controlarme los lunares?",
        a: "Depende de tus factores de riesgo. Como referencia general, un control anual es razonable para la mayoría; si tienes muchos lunares o antecedentes, la Dra. Andrade te indicará la frecuencia adecuada."
      },
      {
        q: "¿La dermatoscopía duele?",
        a: "No. Es un examen indoloro: se apoya un dispositivo con luz sobre la piel para observar las lesiones. No requiere ninguna preparación."
      }
    ]
  },
  {
    slug: "tricologia-y-salud-capilar",
    num: "04",
    tier: "nucleo",
    title: "Tricología y salud capilar",
    seoTitle: "Tricóloga en Machala · Caída del cabello y trasplante capilar",
    seoDescription:
      "Estudio y tratamiento de la caída del cabello y las alopecias en Machala, El Oro: tricoscopía, tratamiento médico y trasplante capilar FUE con la Dra. Karla Andrade.",
    cardText:
      "Caída del cabello y alopecias estudiadas a fondo, con tricoscopía y opciones que incluyen el trasplante capilar.",
    lead:
      "La caída del cabello tiene muchas causas, y tratarla bien empieza por identificar la correcta. La tricología es la rama de la dermatología dedicada al cabello y el cuero cabelludo.",
    sections: [
      {
        p: [
          "No toda caída es la misma: la alopecia androgenética, el efluvio telógeno, la alopecia areata o las alopecias cicatriciales se ven parecidas para quien las sufre, pero requieren enfoques distintos. Por eso el estudio con tricoscopía —la dermatoscopía aplicada al cuero cabelludo— es clave.",
          "A partir del diagnóstico se define un plan, que puede incluir tratamientos médicos, procedimientos en consultorio y, en casos seleccionados, el trasplante capilar."
        ]
      },
      {
        h: "Qué se estudia y se trata",
        list: [
          "Caída difusa reciente (efluvio telógeno)",
          "Alopecia androgenética en hombres y mujeres",
          "Alopecia areata",
          "Alopecias cicatriciales y enfermedades del cuero cabelludo",
          "Salud capilar general y prevención"
        ]
      },
      {
        h: "Trasplante capilar",
        p: [
          "En los casos que lo indican, la Dra. Andrade realiza trasplante capilar con técnica FUE. Cuenta con un máster en trasplante capilar y una diplomatura en tricología. La indicación siempre parte de un diagnóstico correcto: el trasplante resuelve algunos tipos de alopecia, pero no todos."
        ]
      }
    ],
    faqs: [
      {
        q: "Se me cae mucho el cabello, ¿es normal?",
        a: "Perder alrededor de 100 cabellos al día es normal. Si notas más caída de lo habitual, zonas menos pobladas o cambios en el cuero cabelludo, vale la pena estudiarlo para encontrar la causa."
      },
      {
        q: "¿Todos los casos necesitan trasplante?",
        a: "No. Muchos tipos de caída responden a tratamiento médico. El trasplante se reserva para casos específicos y siempre después de un diagnóstico preciso."
      }
    ]
  },
  {
    slug: "medicina-estetica",
    num: "05",
    tier: "amplitud",
    title: "Medicina estética con criterio dermatológico",
    cardText:
      "Toxina, rellenos, bioestimuladores y láser, indicados por una dermatóloga y pensados para verse natural.",
    lead:
      "La medicina estética, cuando la indica y realiza una dermatóloga, parte de un principio simple: conocer la piel a fondo antes de intervenirla. El objetivo es realzar, nunca transformar en algo artificial.",
    sections: [
      {
        p: [
          "Una dermatóloga entiende la piel en profundidad: su estructura, su envejecimiento, sus reacciones. Esa base cambia la forma de abordar un procedimiento estético, porque cada indicación nace de un diagnóstico, no de un catálogo.",
          "El enfoque es de resultados naturales y seguros: menos es más, y cada procedimiento se explica con sus alcances y sus límites reales."
        ]
      },
      {
        h: "Procedimientos",
        list: [
          "Toxina botulínica para líneas de expresión",
          "Rellenos con ácido hialurónico",
          "Bioestimuladores de colágeno",
          "Tratamientos con láser",
          "Protocolos para manchas, textura y calidad de la piel"
        ]
      },
      {
        h: "Con criterio médico",
        p: [
          "Antes de cualquier procedimiento estético se evalúa tu piel y tus expectativas. Si hay una condición médica de base —por ejemplo melasma o rosácea— se trata primero. Un buen resultado estético empieza por una piel sana."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Los resultados se ven naturales?",
        a: "Ese es justamente el objetivo. La propuesta es siempre de armonía y naturalidad, ajustada a cada rostro, evitando el exceso."
      },
      {
        q: "¿Es seguro?",
        a: "Todo procedimiento médico tiene indicaciones y precauciones. Realizarlo con una dermatóloga, tras una evaluación de tu piel, es la forma más segura de abordarlo."
      }
    ]
  },
  {
    slug: "medicina-funcional",
    num: "06",
    tier: "amplitud",
    title: "Medicina funcional para piel y cabello",
    cardText:
      "Un abordaje integral de la nutrición, los hábitos y el equilibrio que influyen en tu piel y tu cabello.",
    lead:
      "La piel y el cabello reflejan lo que ocurre en el resto del cuerpo. La medicina funcional aporta una mirada integral que acompaña —nunca reemplaza— al tratamiento dermatológico.",
    sections: [
      {
        p: [
          "Factores como la alimentación, el sueño, el estrés y el equilibrio hormonal influyen en condiciones como el acné, el melasma, la caída del cabello o la piel inflamada. Mirarlos como parte del cuadro puede ayudar a que los tratamientos funcionen mejor y los resultados se sostengan.",
          "Este enfoque se plantea como complemento del abordaje dermatológico convencional y basado en evidencia, con indicaciones prudentes y personalizadas."
        ]
      },
      {
        h: "En qué puede acompañar",
        list: [
          "Hábitos de nutrición orientados a la salud de la piel y el cabello",
          "Manejo de factores de estilo de vida que impactan la piel",
          "Acompañamiento del componente hormonal en cuadros como el acné o el melasma",
          "Enfoque integral en condiciones inflamatorias crónicas"
        ]
      }
    ],
    faqs: [
      {
        q: "¿La medicina funcional reemplaza al tratamiento dermatológico?",
        a: "No. Es un complemento. El tratamiento de una enfermedad de la piel sigue las pautas de la dermatología basada en evidencia; el enfoque funcional suma en los hábitos y factores que influyen en el cuadro."
      }
    ]
  }
];

export const getEspecialidad = (slug: string) =>
  especialidades.find((e) => e.slug === slug);
