export interface ArtSection { h?: string; p?: string[]; list?: string[] }
export interface ArtFaq { q: string; a: string }
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  datePublished: string;
  dateModified: string;
  readingMin: number;
  relatedEspecialidad: string;
  lead: string;
  sections: ArtSection[];
  faqs: ArtFaq[];
}

export const articles: Article[] = [
  {
    slug: "acne-por-que-aparece-y-como-se-trata",
    title: "Acné: por qué aparece y cómo se trata de verdad",
    excerpt:
      "El acné no es falta de higiene ni cosa solo de adolescentes. Entender por qué aparece es el primer paso para tratarlo bien y evitar cicatrices.",
    category: "Dermatología clínica",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    readingMin: 5,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "El acné es uno de los motivos de consulta más frecuentes, y también uno de los que más mitos arrastra. Aquí te explico, en palabras claras, por qué aparece y qué funciona de verdad para tratarlo.",
    sections: [
      {
        h: "El acné no es falta de higiene",
        p: [
          "Empecemos por derribar el mito más común: el acné no aparece por estar sucio ni por no lavarse la cara. De hecho, lavarse de más o frotar fuerte suele empeorarlo, porque irrita la piel y estimula más grasa.",
          "El acné es una condición de la unidad que forma el folículo y la glándula que produce grasa. Intervienen varios factores a la vez: el aumento de grasa (sebo), la obstrucción del poro, una bacteria que vive normalmente en la piel y la inflamación. Cuando se combinan, aparecen los granos, los puntos negros y, en los casos más intensos, los quistes."
        ]
      },
      {
        h: "Por qué aparece",
        p: ["No hay una sola causa. Los factores que más pesan son:"],
        list: [
          "Hormonas: por eso es tan común en la adolescencia, pero también aparece en mujeres adultas, sobre todo alrededor de la menstruación",
          "Predisposición familiar: si tus padres tuvieron acné, es más probable que tú también",
          "Algunos cosméticos o productos grasos que tapan el poro",
          "Ciertos medicamentos y factores hormonales de fondo",
          "El estrés, que no lo causa pero sí puede empeorar los brotes"
        ]
      },
      {
        h: "Lo que NO conviene hacer",
        list: [
          "Reventar o exprimir los granos: es la forma más segura de dejar una mancha o una cicatriz",
          "Lavarse la cara muchas veces al día o con productos muy fuertes",
          "Probar remedios caseros agresivos (limón, pasta de dientes, alcohol): irritan y empeoran",
          "Cambiar de crema cada semana sin darle tiempo a ninguna: los tratamientos del acné tardan semanas en hacer efecto"
        ]
      },
      {
        h: "Cómo se trata de verdad",
        p: [
          "El tratamiento depende del tipo y la intensidad del acné. Los casos leves suelen manejarse con tratamientos que se aplican sobre la piel; los moderados a intensos pueden necesitar tratamiento por vía oral. Lo importante es que la indicación la haga un dermatólogo, porque lo que le sirve a una persona puede no servirle a otra.",
          "Dos ideas clave: la constancia y la paciencia. La mayoría de los tratamientos empiezan a notarse a las 6 u 8 semanas, no en días. Abandonar antes de tiempo es el error más común. Y cuando el acné es intenso o deja marcas, cuanto antes se trate, menos secuelas quedan."
        ]
      },
      {
        h: "Manchas y cicatrices: mejor prevenir",
        p: [
          "Las manchas oscuras que quedan después de un grano suelen mejorar con el tiempo y con tratamiento. Las cicatrices, en cambio, son más difíciles de revertir, aunque existen procedimientos que las mejoran. Por eso la mejor estrategia contra las cicatrices es tratar el acné a tiempo, antes de que las deje."
        ]
      }
    ],
    faqs: [
      {
        q: "¿El chocolate o las frituras causan acné?",
        a: "La relación entre alimentación y acné es más matizada de lo que se cree. No hay un alimento único que lo cause. En algunas personas ciertos alimentos pueden influir, pero prohibir el chocolate no cura el acné. El tratamiento médico es lo que marca la diferencia."
      },
      {
        q: "¿El acné se cura?",
        a: "Se controla muy bien. En muchos casos se resuelve por completo con el tratamiento adecuado, y en otros se mantiene a raya con un plan de cuidado. Lo importante es no resignarse a vivir con él: casi siempre hay algo que se puede hacer."
      },
      {
        q: "¿Cuándo debo consultar a un dermatólogo?",
        a: "Si el acné no mejora con el cuidado básico, si es moderado o intenso, si te está dejando manchas o cicatrices, o si te afecta emocionalmente, vale la pena una consulta. No hay que esperar a que empeore."
      }
    ]
  },
  {
    slug: "por-que-se-me-cae-el-cabello",
    title: "¿Por qué se me cae el cabello? Causas y cuándo preocuparte",
    excerpt:
      "Perder pelo a diario es normal, pero no toda caída es igual. Conocer la causa correcta es lo que permite tratarla bien.",
    category: "Tricología",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    readingMin: 6,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    lead:
      "La caída del cabello preocupa a muchas personas, y con razón. La buena noticia es que casi siempre hay algo que hacer, pero el primer paso no es un producto: es encontrar la causa correcta.",
    sections: [
      {
        h: "¿Cuánto es normal perder?",
        p: [
          "Perder alrededor de 100 cabellos al día es completamente normal. El cabello tiene ciclos: crece, descansa y se cae para dar paso a uno nuevo. Ver pelos en el cepillo o en la ducha no significa, por sí solo, que haya un problema.",
          "La señal de alerta es un cambio: notar bastante más caída de lo habitual, zonas que se ven menos pobladas, la raya que se ensancha o el cuero cabelludo que empieza a asomar."
        ]
      },
      {
        h: "No toda caída es la misma",
        p: [
          "Este es el punto más importante del artículo. Bajo la palabra 'se me cae el cabello' se esconden causas muy distintas, y cada una se trata diferente:"
        ],
        list: [
          "Efluvio telógeno: una caída difusa y pasajera que aparece semanas después de un evento fuerte, como un parto, una enfermedad, una cirugía, una dieta estricta o mucho estrés. Suele recuperarse",
          "Alopecia androgenética: la más común, de causa hormonal y genética. Aparece de forma gradual, en hombres y también en mujeres",
          "Alopecia areata: pérdida en parches redondeados, de origen inmunológico",
          "Alopecias cicatriciales: menos frecuentes pero importantes de detectar a tiempo, porque el folículo puede dañarse de forma permanente"
        ]
      },
      {
        h: "Por qué el diagnóstico es la clave",
        p: [
          "Como las causas son tan distintas, tratar 'a ciegas' con el producto de moda suele ser perder tiempo y dinero. Lo que permite acertar es el estudio con tricoscopía: la dermatoscopía aplicada al cuero cabelludo, que deja ver de cerca el folículo y orienta el diagnóstico.",
          "A partir de ahí se define un plan real, que según el caso puede incluir tratamientos médicos, procedimientos en consultorio y, en situaciones seleccionadas, el trasplante capilar."
        ]
      },
      {
        h: "Mitos frecuentes sobre la caída",
        list: [
          "Usar gorra no produce calvicie",
          "Cortarse el cabello no lo hace crecer más fuerte ni frena la caída",
          "Lavarlo a diario no lo debilita; la caída que ves al lavar ya se iba a caer",
          "No todo se soluciona con vitaminas: sirven cuando hay una carencia real, no como remedio universal"
        ]
      }
    ],
    faqs: [
      {
        q: "Se me cae mucho al bañarme, ¿es grave?",
        a: "No necesariamente. Al lavar el cabello se desprenden los pelos que ya estaban por caer, así que ver varios es normal, sobre todo si no te lavas todos los días. Lo que importa es la tendencia en el tiempo, no un día puntual."
      },
      {
        q: "¿El estrés hace que se caiga el cabello?",
        a: "Sí puede. Un estrés fuerte o sostenido es una causa conocida de efluvio telógeno, esa caída difusa que aparece semanas después. Suele ser reversible, pero conviene descartar otras causas."
      },
      {
        q: "¿El trasplante capilar sirve para todos?",
        a: "No. Es una excelente solución para algunos tipos de alopecia, pero no para todos. Por eso se indica siempre después de un diagnóstico preciso: aplicado en el caso equivocado, no da resultado."
      },
      {
        q: "¿Cuándo debo consultar?",
        a: "Si notas más caída de lo habitual durante varias semanas, zonas menos pobladas, o cambios en el cuero cabelludo, vale la pena estudiarlo. Cuanto antes se identifica la causa, mejores son las opciones."
      }
    ]
  }
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
