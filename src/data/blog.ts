export interface ArtSection {
  h?: string;
  p?: string[];
  list?: string[];
  img?: { src: string; alt: string; caption?: string };
}
export interface ArtFaq { q: string; a: string }
export interface ArtRef { label: string; url: string }
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  seoTitle?: string;
  seoDescription?: string;
  category: string;
  datePublished: string;
  dateModified: string;
  readingMin: number;
  relatedEspecialidad: string;
  lead: string;
  sections: ArtSection[];
  faqs: ArtFaq[];
  /** Slugs de otros artículos del blog para enlazar como lectura relacionada. */
  relatedArticles?: string[];
  /** Bibliografía real y verificable (PubMed/DOI), mostrada al final del artículo. */
  references?: ArtRef[];
}

// Nombre completo de cada categoría del blog, para que quede claro qué cubre
// (ej. "Tricología" por sí solo no es obvio para todos los lectores).
export const categoryLabel: Record<string, string> = {
  "Tricología": "Tricología · Cuidado del cabello",
  "Aparatología": "Aparatología · Láser y procedimientos"
};

export const articles: Article[] = [
  {
    slug: "acne-por-que-aparece-y-como-se-trata",
    title: "Acné: por qué aparece y cómo se trata de verdad",
    excerpt:
      "El acné no es falta de higiene ni cosa solo de adolescentes. Entender por qué aparece es el primer paso para tratarlo bien y evitar cicatrices.",
    seoTitle: "Tratamiento del Acné en Machala · Causas y Cuidado Real",
    seoDescription:
      "Tratamiento del acné en Machala con la Dra. Karla Andrade: por qué aparece de verdad, qué evitar y cómo se trata bien, sin mitos ni promesas irreales.",
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
  },
  {
    slug: "errores-que-empeoran-la-caida-del-cabello",
    title: "Errores que empeoran la caída del cabello: lo que hacen mal hombres y mujeres",
    excerpt:
      "La causa de fondo de la caída no siempre está en tus manos, pero varios hábitos diarios sí — y suelen ser distintos entre hombres y mujeres. Estos son los más frecuentes, y qué ayuda de verdad desde casa.",
    category: "Tricología",
    datePublished: "2026-08-21",
    dateModified: "2026-08-21",
    readingMin: 6,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    lead:
      "Detrás de 'se me cae el cabello' casi siempre hay una causa médica de fondo, como ya vimos en el artículo anterior. Pero además de esa causa, hay hábitos del día a día que aceleran o empeoran la caída, y suelen ser distintos entre hombres y mujeres. Conocerlos no reemplaza el diagnóstico, pero ayuda a no sumar más daño mientras consultas.",
    sections: [
      {
        h: "Esto no reemplaza el diagnóstico",
        p: [
          "Ningún hábito por sí solo causa una alopecia androgenética o una alopecia areata: esas tienen origen hormonal, genético o inmunológico. Pero sí pueden acelerar la caída, dañar el tallo del cabello o empeorar una condición del cuero cabelludo que ya estaba presente. Por eso esta nota trae hábitos de cuidado, no tratamientos: lo que corrige la causa de fondo lo define una consulta, no un artículo."
        ]
      },
      {
        h: "Errores frecuentes en hombres",
        list: [
          "No lavar el cabello con la frecuencia que su cuero cabelludo necesita: dejar acumular grasa y células muertas favorece la caspa y la dermatitis seborreica, que sí puede empeorar la caída",
          "Usar gorra o casco muchas horas seguidas con el cabello sucio y sin lavarlo después: el problema no es la gorra en sí, sino la humedad y la fricción sostenidas sobre un cuero cabelludo sin higiene",
          "Rasurarse la cabeza o la barba con máquinas mal desinfectadas o compartidas: puede causar foliculitis, una inflamación del folículo que si se repite daña la zona",
          "Ignorar la caspa o la picazón persistente en vez de consultarla: casi siempre tiene solución simple, y dejarla pasar empeora el cuero cabelludo",
          "Fumar: está bien documentado que el tabaco afecta la circulación del cuero cabelludo",
          "Automedicarse con \"vitaminas para el cabello\" o productos anticaída de venta libre sin saber la causa: en el mejor de los casos no hacen nada, y mientras tanto pasa el tiempo sin tratar lo que realmente está ocurriendo"
        ]
      },
      {
        h: "Errores frecuentes en mujeres",
        list: [
          "Peinados muy tirantes y frecuentes: colas altas, trenzas apretadas o extensiones sostenidas por mucho tiempo pueden producir alopecia por tracción, un daño progresivo en la línea de implantación",
          "Uso frecuente de plancha o secador a temperatura alta y muy cerca del cabello, sin protector térmico: no hace que el cabello se caiga de raíz, pero sí lo quiebra y lo hace verse más ralo",
          "Alisados, tintes o decoloraciones muy seguidos, sin espaciarlos: el uso repetido de químicos agresivos debilita el tallo capilar",
          "Cepillar el cabello mojado y con fuerza: mojado es más frágil y se rompe con más facilidad que seco",
          "Restar importancia a la caída porque 'es normal en las mujeres': la alopecia androgenética femenina existe, también se estudia y se trata; posponer la consulta por este mito hace perder tiempo valioso",
          "Dietas muy restrictivas, con poca proteína o hierro y sin supervisión: pueden generar una carencia real que sí afecta el cabello"
        ]
      },
      {
        h: "Errores que comete cualquiera, sin distinción",
        list: [
          "Secarse el cabello frotando fuerte con la toalla en vez de dar toques suaves",
          "Cepillarse con cerdas muy duras o de forma brusca",
          "Exponer el cuero cabelludo al sol sin protección, sobre todo si ya hay zonas con menos densidad",
          "Cambiar de champú constantemente probando lo que se ve en redes sociales, sin darle continuidad a ninguno",
          "Creer que cortarse las puntas seguido hace crecer el cabello más rápido o más fuerte: no tiene ningún efecto sobre la raíz"
        ]
      },
      {
        h: "Qué sí puedes hacer en casa, mientras consultas",
        p: ["Son hábitos de cuidado, no un tratamiento: ayudan a no sumar daño, pero no corrigen la causa de fondo."],
        list: [
          "Lava el cabello con la frecuencia que tu cuero cabelludo pida, con un champú suave; lavarlo a diario no lo debilita",
          "Sécalo con toques suaves, no frotando",
          "Evita los peinados muy tirantes todos los días; altérnalos con el cabello suelto o recogidos flojos",
          "Si usas plancha o secador seguido, hazlo a temperatura moderada y con protector térmico",
          "Espacia los procesos químicos (tinte, alisado) y dale descanso al cabello entre uno y otro",
          "Si fumas, dejarlo también ayuda a tu cuero cabelludo, además de a todo lo demás",
          "Protege del sol las zonas con menos cabello, igual que protegerías cualquier otra parte de la piel"
        ]
      }
    ],
    faqs: [
      {
        q: "Si corrijo estos hábitos, ¿se detiene la caída?",
        a: "Puede ayudar, pero depende de la causa de fondo. Si hay una alopecia androgenética, un efluvio telógeno u otra causa médica, corregir hábitos no la reemplaza: mejora el terreno, pero el tratamiento real depende del diagnóstico."
      },
      {
        q: "¿Lavar el cabello todos los días es un error?",
        a: "No. Es un mito frecuente: lavarlo a diario no debilita el cabello ni lo hace caer más. El error real es el extremo contrario: no lavarlo lo suficiente y dejar que se acumule grasa e irritación en el cuero cabelludo."
      },
      {
        q: "¿Los peinados tirantes realmente dañan el cabello?",
        a: "Sí, si son frecuentes y se mantienen por años: la tracción sostenida puede producir una alopecia progresiva en la línea de implantación, que en etapas avanzadas es más difícil de revertir. Alternar peinados y no tensar tanto el cabello reduce ese riesgo."
      },
      {
        q: "¿Cuándo dejo de intentar arreglarlo en casa y consulto?",
        a: "Si notas más caída de lo habitual durante varias semanas, zonas menos pobladas, o si ya llevas tiempo probando cambios de hábito sin resultado, es momento de una consulta con estudio de tricoscopía."
      }
    ]
  },
  {
    slug: "caida-de-cabello-posparto",
    title: "Caída de cabello después del parto: por qué pasa y cuándo se normaliza",
    excerpt:
      "Notar mucha más caída después de tener un bebé asusta, pero casi siempre tiene una explicación clara y es pasajera. Esto es lo que está pasando y qué señales sí ameritan consulta.",
    category: "Tricología",
    datePublished: "2026-08-21",
    dateModified: "2026-08-21",
    readingMin: 5,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    lead:
      "Notar que el cabello se cae más después de tener un bebé es un motivo de consulta frecuente, y suele dar susto. La buena noticia es que, en la gran mayoría de los casos, tiene una explicación clara y es pasajero.",
    sections: [
      {
        h: "Por qué pasa",
        p: [
          "Durante el embarazo, los niveles altos de estrógeno prolongan la fase de crecimiento del cabello, por eso muchas mujeres lo notan más abundante en esos meses. Al bajar los estrógenos después del parto, una buena parte de esos cabellos entra de golpe a la fase de caída. Esto se llama efluvio telógeno posparto, y es la causa más común de caída notoria en esta etapa.",
          "Suele empezar entre 2 y 4 meses después del parto, y la caída puede notarse por encima de lo habitual durante varios meses."
        ]
      },
      {
        h: "¿Cuándo se normaliza?",
        p: [
          "En la mayoría de los casos se resuelve solo, generalmente antes del año posparto, sin necesidad de tratamiento. El cabello recupera densidad de forma progresiva a medida que los folículos vuelven a su ciclo habitual."
        ]
      },
      {
        h: "Señales de que conviene consultar",
        list: [
          "La caída sigue igual de intensa después del año",
          "Notas zonas puntuales sin cabello, en vez de una caída pareja en toda la cabeza",
          "Hay picazón, dolor o cambios visibles en el cuero cabelludo",
          "Ya tenías una caída de cabello importante antes del embarazo",
          "La caída viene acompañada de otros síntomas, como cansancio extremo o cambios de peso"
        ]
      },
      {
        h: "Qué ayuda mientras se resuelve",
        p: ["Son medidas de cuidado, no un tratamiento del efluvio en sí, que en la mayoría de los casos se resuelve solo:"],
        list: [
          "Ten paciencia: el pico de caída no es permanente, aunque en el momento impresione",
          "Evita peinados muy tirantes mientras el cabello está más débil",
          "Sé suave al desenredar y cepillar, sobre todo con el cabello mojado",
          "Cuida tu alimentación en el posparto, una etapa de mayor demanda de hierro y proteína",
          "Si además de la caída sientes cansancio extremo, coméntalo en tus controles: vale la pena revisar tiroides o hierro"
        ]
      }
    ],
    faqs: [
      {
        q: "¿Es normal que se caiga tanto?",
        a: "Sí, dentro de lo esperado puede notarse una caída bastante mayor a la habitual durante varios meses. Impresiona, pero en la gran mayoría de los casos no deja calvicie ni daño permanente."
      },
      {
        q: "¿La lactancia influye en la caída?",
        a: "La lactancia no es la causa directa; el cambio hormonal después del parto ocurre haya o no lactancia. Sí es una etapa de mayor demanda nutricional, por lo que cuidar la alimentación ayuda."
      },
      {
        q: "¿Debo preocuparme si a los 8 meses todavía se me cae más de lo normal?",
        a: "Es razonable que siga dentro de rango hasta el año. Si después del año persiste igual, o notas una zona puntual sin cabello en vez de una caída general, conviene una consulta para descartar otras causas."
      }
    ]
  },
  {
    slug: "mitos-y-verdades-caida-de-cabello",
    title: "Mitos y verdades sobre la caída del cabello",
    excerpt:
      "Sobre la caída del cabello circulan más mitos que certezas. Separamos lo que tiene base real de lo que es solo creencia popular.",
    category: "Tricología",
    datePublished: "2026-08-21",
    dateModified: "2026-08-21",
    readingMin: 5,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    lead:
      "Sobre la caída del cabello circulan más mitos que certezas, y muchos se repiten tanto que ya suenan a verdad. Aquí separamos lo que tiene base real de lo que es solo creencia popular.",
    sections: [
      {
        h: "Mitos sobre hábitos diarios",
        list: [
          "Mito: lavarse el cabello todos los días lo debilita. Verdad: el cabello que ves caer al lavarte ya estaba en fase de caída; lavarlo no lo empeora",
          "Mito: usar gorra con frecuencia causa calvicie. Verdad: la gorra en sí no produce alopecia; el problema aparece si se usa muchas horas con el cabello sucio, por la humedad y la fricción sostenidas",
          "Mito: cortarse las puntas seguido hace crecer el cabello más fuerte o más rápido. Verdad: cortar las puntas no tiene ningún efecto sobre la raíz ni sobre la velocidad de crecimiento",
          "Mito: cepillarse muchas veces al día fortalece el cabello. Verdad: cepillar de más, sobre todo con fuerza, rompe más cabello del que ayuda"
        ]
      },
      {
        h: "Mitos sobre las causas",
        list: [
          "Mito: la calvicie se hereda solo del lado materno. Verdad: la genética de la alopecia androgenética viene de ambos lados de la familia, no de una sola rama",
          "Mito: el estrés te deja calvo. Verdad: el estrés puede desencadenar un efluvio telógeno, una caída difusa y generalmente pasajera, pero no produce por sí solo una calvicie permanente",
          "Mito: la caída de cabello en mujeres no es 'real' o es solo estética. Verdad: la alopecia androgenética femenina existe, se diagnostica y se trata como cualquier otra condición médica",
          "Mito: si a mis padres no les pasó, a mí no me va a pasar. Verdad: la alopecia androgenética depende de muchos genes a la vez, no de una regla simple de herencia directa"
        ]
      },
      {
        h: "Mitos sobre 'soluciones' rápidas",
        list: [
          "Mito: las vitaminas para el cabello sirven para cualquier tipo de caída. Verdad: ayudan cuando hay una carencia real (de hierro, por ejemplo); tomarlas sin esa carencia no frena una alopecia hormonal o genética",
          "Mito: los champús 'anticaída' resuelven el problema. Verdad: pueden ayudar a la salud del cuero cabelludo, pero no sustituyen un diagnóstico ni tratan la causa de fondo",
          "Mito: si un producto le funcionó a alguien, me va a funcionar a mí. Verdad: como las causas de la caída son distintas entre personas, lo que funciona depende del diagnóstico, no de la experiencia ajena"
        ]
      }
    ],
    faqs: [
      {
        q: "Entonces, ¿nada de lo que hago en casa importa?",
        a: "Sí importa: los buenos hábitos (lavado adecuado, cuidado al peinar, protección del sol y del calor) ayudan a que el cabello esté en mejores condiciones. Lo que no hacen es reemplazar el diagnóstico cuando la causa es hormonal, genética o inmunológica."
      },
      {
        q: "¿Por qué hay tantos mitos sobre este tema?",
        a: "Porque la caída del cabello genera ansiedad y hay mucha oferta de productos que prometen soluciones rápidas. Sin un diagnóstico de por medio, es difícil saber qué aplica a cada caso particular."
      },
      {
        q: "¿Cómo sé cuál de estos mitos aplica a mi caso?",
        a: "No se puede saber por internet. Lo que orienta con certeza es el examen del cuero cabelludo y, cuando hace falta, la tricoscopía."
      }
    ]
  },
  {
    slug: "caida-de-cabello-por-estres",
    title: "Caída de cabello por estrés: cómo saber si es pasajera",
    excerpt:
      "El estrés es una de las causas más frecuentes de consulta por caída de cabello repentina. En la mayoría de los casos se llama efluvio telógeno y tiende a mejorar solo.",
    category: "Tricología",
    datePublished: "2026-08-21",
    dateModified: "2026-08-21",
    readingMin: 5,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    lead:
      "El estrés es una de las causas más frecuentes de consulta por caída de cabello repentina. La buena noticia es que, en la mayoría de los casos, se llama efluvio telógeno y tiende a mejorar solo.",
    sections: [
      {
        h: "Qué es el efluvio telógeno",
        p: [
          "El cabello crece en ciclos: una fase de crecimiento activo que dura años, una de transición y una de descanso, al final de la cual se cae. Normalmente estas fases están escalonadas entre los distintos folículos, por eso perdemos cabello todos los días sin notarlo.",
          "Un evento fuerte —estrés intenso, una infección, una cirugía, una dieta muy estricta, un cambio hormonal brusco— puede hacer que muchos folículos entren a la fase de descanso al mismo tiempo. El resultado se ve unas 6 a 12 semanas después: una caída difusa, más notoria de lo habitual, en todo el cuero cabelludo."
        ]
      },
      {
        h: "Por qué se nota semanas después",
        p: [
          "Este retraso confunde a muchas personas, que buscan la causa en lo que pasó la semana anterior, cuando en realidad el desencadenante suele estar dos o tres meses atrás. Identificar ese evento —un examen exigente, un duelo, una enfermedad, una cirugía— junto con el examen clínico suele confirmar el diagnóstico."
        ]
      },
      {
        h: "Cómo diferenciarlo de una alopecia genética",
        list: [
          "El efluvio telógeno es difuso: se cae de toda la cabeza por igual, no deja entradas ni una zona puntual más rala",
          "Aparece de forma relativamente brusca, no gradual a lo largo de años",
          "Suele tener un desencadenante identificable en los meses previos",
          "Tiende a mejorar solo en unos meses, una vez que pasa la causa"
        ]
      },
      {
        h: "Qué ayuda mientras se resuelve",
        list: [
          "Identificar y, en lo posible, moderar la fuente de estrés sostenido",
          "Dormir y comer de forma regular durante esta etapa, aunque parezca poca cosa",
          "Ser paciente: la mejoría se nota en meses, no en semanas",
          "Evitar sumar agresiones extra al cabello mientras está más débil (calor alto, químicos, tracción)",
          "Consultar si la caída no mejora pasados varios meses, o si en vez de difusa notas una zona puntual"
        ]
      }
    ],
    faqs: [
      {
        q: "¿Cuánto dura un efluvio telógeno?",
        a: "En general, entre 3 y 6 meses desde que empieza la caída notoria, aunque puede variar. Si el desencadenante ya pasó, lo esperable es que mejore de forma progresiva."
      },
      {
        q: "¿Puede quedar calvo por estrés?",
        a: "El efluvio telógeno típico no deja calvicie definitiva: afina el cabello de forma temporal, pero los folículos siguen ahí. Si el estrés es muy prolongado o repetido, vale la pena una evaluación para descartar que se sume otra causa."
      },
      {
        q: "¿Sirve tomar algo para 'cortar' la caída por estrés?",
        a: "Lo que más ayuda es identificar y manejar la fuente de estrés, y darle tiempo al cabello para recuperar su ciclo. Cualquier indicación adicional debe basarse en una evaluación, no en probar productos al azar."
      }
    ]
  },
  {
    slug: "mesoterapia-capilar-que-es",
    title: "Mesoterapia capilar: qué es y para qué sirve",
    excerpt:
      "La mesoterapia capilar es uno de los procedimientos que más se preguntan en consulta, y también uno de los más rodeados de mitos. Esto es lo que es, para qué sirve y qué no debes esperar de ella.",
    category: "Tricología",
    datePublished: "2026-08-21",
    dateModified: "2026-08-21",
    readingMin: 5,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    lead:
      "La mesoterapia capilar es un procedimiento frecuente en consulta de tricología, pero también uno de los que generan más dudas: qué es, para quién sirve y qué resultados son realistas. Aquí lo explicamos en términos generales, sin entrar en fórmulas ni componentes, porque eso siempre se define de forma individual en la consulta.",
    sections: [
      {
        h: "Qué es",
        p: [
          "Es un procedimiento en el que se aplican microinyecciones superficiales en el cuero cabelludo, en la zona donde se busca mejorar la salud del folículo. Se realiza en consultorio, con agujas muy finas, y una sesión suele durar entre 20 y 40 minutos.",
          "Lo que se inyecta no es una fórmula única ni estándar: se define según cada caso después de la evaluación, por eso no tiene sentido hablar de 'la' mesoterapia capilar como si fuera siempre lo mismo para todos."
        ]
      },
      {
        h: "Para qué se usa",
        p: [
          "Se utiliza como parte de un plan más amplio, para acompañar la salud del cuero cabelludo, generalmente junto con el tratamiento de la causa de fondo de la caída, no en su reemplazo:"
        ],
        list: [
          "Como apoyo dentro de un plan de tratamiento, después de identificar la causa de la caída",
          "En cueros cabelludos que se benefician de mejorar su condición general antes o durante otro tratamiento",
          "Como parte del seguimiento en algunos casos de alopecia, según indique la evaluación"
        ]
      },
      {
        h: "Qué NO es",
        list: [
          "No es un tratamiento único ni universal para cualquier tipo de caída",
          "No reemplaza el diagnóstico: sin saber la causa, no se sabe si va a ayudar en ese caso puntual",
          "No es un procedimiento de una sola sesión con resultado inmediato: como todo lo que trabaja sobre el ciclo del cabello, lo que se observa —si se observa— toma varias semanas o meses",
          "No debería aplicarse igual para todos los pacientes: qué se usa y con qué frecuencia se decide caso por caso"
        ]
      },
      {
        h: "Qué esperar de una sesión",
        p: [
          "Antes de indicarla, la evaluación incluye el examen del cuero cabelludo y, cuando corresponde, tricoscopía, para confirmar que tiene sentido en ese caso puntual. El número de sesiones y el intervalo entre ellas se define de forma individual; no hay un esquema único que aplique a todos."
        ]
      },
      {
        h: "Cuidados generales después de una sesión",
        list: [
          "Evita lavar el cabello con agua muy caliente el mismo día",
          "No uses productos irritantes ni exfoliantes sobre el cuero cabelludo en las horas siguientes",
          "Es normal notar el cuero cabelludo algo sensible o con pequeños puntos rojos por uno o dos días",
          "Evita la exposición solar directa sobre la zona tratada en las primeras horas"
        ]
      }
    ],
    faqs: [
      {
        q: "¿La mesoterapia capilar duele?",
        a: "Se siente, porque son inyecciones superficiales, pero la mayoría de los pacientes la tolera bien; si hace falta, se puede usar anestesia tópica."
      },
      {
        q: "¿Cuántas sesiones necesito?",
        a: "No hay un número fijo: depende de la causa de la caída y de la respuesta de cada persona. Eso se define en la consulta, no antes."
      },
      {
        q: "¿Sirve para cualquier tipo de alopecia?",
        a: "No. Su indicación depende del diagnóstico; por eso siempre va después de la evaluación, nunca antes."
      },
      {
        q: "¿Reemplaza el trasplante capilar u otros tratamientos?",
        a: "No, son herramientas distintas para objetivos distintos. Cuál aplica en cada caso lo define el diagnóstico, no una preferencia general."
      }
    ]
  },
  {
    slug: "acne-en-la-adultez",
    title: "Acné en la adultez: por qué aparece después de los 25",
    excerpt:
      "El acné no es solo cosa de adolescentes. Cada vez consultan más adultos, sobre todo mujeres, por un acné que aparece o vuelve después de los 25. Esto es lo que lo distingue.",
    category: "Dermatología clínica",
    datePublished: "2026-08-21",
    dateModified: "2026-08-21",
    readingMin: 5,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Mucha gente llega a consulta sorprendida: '¿otra vez acné, a esta edad?'. El acné del adulto es más frecuente de lo que se piensa, tiene características propias, y no se maneja igual que el de la adolescencia.",
    sections: [
      {
        h: "En qué se diferencia del acné adolescente",
        p: [
          "El acné adulto suele concentrarse en la zona baja del rostro —mandíbula, mentón y cuello—, a diferencia del patrón más extendido de la adolescencia. Tiende a ser más inflamatorio, con lesiones más profundas y dolorosas, y muchas veces sigue un patrón cíclico relacionado con la menstruación en mujeres."
        ]
      },
      {
        h: "Por qué aparece",
        list: [
          "Fluctuaciones hormonales, muy marcadas en mujeres alrededor del ciclo menstrual",
          "Situaciones como el síndrome de ovario poliquístico, que conviene descartar cuando el acné se acompaña de otros signos",
          "Estrés sostenido, que no causa el acné pero sí puede empeorar los brotes",
          "Productos cosméticos o capilares que tapan el poro en la zona de la mandíbula",
          "Predisposición genética, igual que en el acné adolescente"
        ]
      },
      {
        h: "Por qué no conviene restarle importancia",
        p: [
          "El acné adulto tiende a dejar más marcas que el adolescente, en parte porque las lesiones suelen ser más profundas y en parte porque la piel adulta se regenera más lento. Tratarlo a tiempo reduce el riesgo de cicatrices."
        ]
      },
      {
        h: "Lo que no ayuda",
        list: [
          "Tratarlo con los mismos productos que se usaban en la adolescencia: la piel adulta suele ser más sensible y necesita otro enfoque",
          "Ignorarlo pensando que 'ya se me va a pasar solo', como en la adolescencia: en el adulto tiende a ser más persistente",
          "Sumar muchos productos activos a la vez esperando resultados más rápidos: suele irritar más que ayudar"
        ]
      }
    ],
    faqs: [
      {
        q: "¿Por qué me da acné si de adolescente nunca tuve?",
        a: "Puede aparecer por primera vez en la adultez, sobre todo en mujeres, relacionado con cambios hormonales. No haber tenido acné antes no protege de tenerlo después."
      },
      {
        q: "¿Es distinto tratar el acné adulto?",
        a: "El enfoque se ajusta a la piel adulta y al patrón hormonal, por eso conviene una evaluación específica en vez de repetir lo que funcionaba a los 16 años."
      },
      {
        q: "¿Cuándo debería preocuparme más?",
        a: "Si el acné se acompaña de otros cambios (irregularidad menstrual, exceso de vello, aumento de peso brusco), vale la pena comentarlo en la consulta, porque puede orientar a otras causas hormonales que conviene estudiar."
      }
    ]
  },
  {
    slug: "mitos-sobre-el-acne",
    title: "Mitos sobre el acné que hay que dejar de creer",
    excerpt:
      "Del chocolate a exprimir los granos, el acné arrastra más mitos que casi cualquier otra condición de la piel. Separamos lo que tiene base real de lo que es solo creencia popular.",
    category: "Dermatología clínica",
    datePublished: "2026-08-21",
    dateModified: "2026-08-21",
    readingMin: 5,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Pocas condiciones de la piel generan tantos consejos de todo tipo como el acné. Aquí repasamos los mitos más comunes y qué conviene saber en su lugar.",
    sections: [
      {
        h: "Mitos sobre las causas",
        list: [
          "Mito: el acné es por mala higiene. Verdad: no se relaciona con estar sucio; lavarse de más incluso lo empeora, porque irrita la piel",
          "Mito: el chocolate y las frituras causan acné. Verdad: no hay un alimento único responsable; la relación entre dieta y acné es más matizada de lo que se cree",
          "Mito: el acné es solo cosa de adolescentes. Verdad: también aparece o persiste en la adultez, sobre todo en mujeres",
          "Mito: el sol mejora el acné. Verdad: puede disimularlo un tiempo por el bronceado, pero después suele empeorarlo, además de dañar la piel"
        ]
      },
      {
        h: "Mitos sobre cómo tratarlo",
        list: [
          "Mito: exprimir los granos ayuda a que se vayan más rápido. Verdad: es la forma más segura de dejar una mancha o cicatriz",
          "Mito: entre más productos uses, más rápido se va. Verdad: combinar muchos activos a la vez suele irritar la piel y empeorar el cuadro",
          "Mito: si un tratamiento no funciona en unos días, hay que cambiarlo. Verdad: la mayoría de los tratamientos para acné tardan de 6 a 8 semanas en mostrar resultado",
          "Mito: el maquillaje siempre tapa los poros y empeora el acné. Verdad: depende del producto; existen opciones formuladas para no obstruir el poro"
        ]
      },
      {
        h: "Mitos sobre las marcas que deja",
        list: [
          "Mito: las manchas y cicatrices desaparecen solas siempre. Verdad: las manchas suelen mejorar con tiempo y tratamiento; las cicatrices son más difíciles de revertir por completo",
          "Mito: no importa esperar para tratar el acné, las marcas se arreglan después. Verdad: cuanto antes se trata el acné activo, menos marcas suelen quedar"
        ]
      }
    ],
    faqs: [
      {
        q: "¿Entonces la alimentación no influye para nada?",
        a: "En algunas personas ciertos alimentos pueden influir en los brotes, pero no hay un alimento que cause o cure el acné por sí solo. El tratamiento médico es lo que marca la diferencia real."
      },
      {
        q: "¿Por qué persisten tantos mitos sobre el acné?",
        a: "Porque es muy frecuente, empieza en la adolescencia cuando se prueba de todo, y hay mucha información sin respaldo circulando en redes."
      },
      {
        q: "¿Cómo sé qué es verdad para mi caso?",
        a: "Lo que aplica a tu piel lo define una evaluación, no una lista general de mitos y verdades."
      }
    ]
  },
  {
    slug: "cuidado-piel-acneica-en-casa",
    title: "Cómo elegir productos para piel con tendencia acneica sin empeorarla",
    excerpt:
      "Con piel con tendencia al acné, no se trata de usar más productos, sino de elegir mejor y no irritar de más. Estos son los criterios básicos para una rutina que no empeore las cosas.",
    category: "Dermatología clínica",
    datePublished: "2026-08-21",
    dateModified: "2026-08-21",
    readingMin: 5,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Cuando la piel tiene tendencia acneica, es fácil caer en probar de todo. Pero el cuidado diario en casa no reemplaza el tratamiento médico: su función es no sumar irritación mientras ese tratamiento hace su trabajo.",
    sections: [
      {
        h: "La regla de base: menos es más",
        p: [
          "Una piel con acné activo ya está inflamada. Sumar muchos productos, sobre todo exfoliantes fuertes o varios activos a la vez, casi siempre irrita más de lo que ayuda. Una rutina simple y sostenida en el tiempo funciona mejor que una elaborada que cambia cada semana."
        ]
      },
      {
        h: "Qué buscar en un limpiador",
        list: [
          "Que limpie sin dejar la piel tirante ni reseca",
          "Evitar limpiadores muy espumosos o con alcohol en las primeras posiciones de la lista de ingredientes",
          "Lavar la cara dos veces al día es suficiente; lavar más no limpia 'más profundo', solo irrita"
        ]
      },
      {
        h: "Qué buscar en hidratante y protector solar",
        list: [
          "Que estén etiquetados como 'no comedogénicos', formulados para no tapar el poro",
          "Texturas en gel o loción liviana en climas cálidos y húmedos, en vez de cremas muy densas",
          "El protector solar no es opcional: varios tratamientos para el acné hacen la piel más sensible al sol"
        ]
      },
      {
        h: "Errores frecuentes en la rutina casera",
        list: [
          "Exfoliar con gránulos gruesos pensando que 'destapa' los poros: suele microdesgarrar la piel y empeorar la inflamación",
          "Probar un producto nuevo cada semana sin darle tiempo a ninguno",
          "Tocarse la cara y apoyar el celular en la mejilla durante llamadas, que traslada suciedad y fricción a la piel",
          "No cambiar la funda de la almohada con frecuencia"
        ]
      }
    ],
    faqs: [
      {
        q: "¿Cuántas veces debo lavarme la cara al día?",
        a: "Dos veces suele ser suficiente: en la mañana y en la noche. Lavarse más no mejora el acné y puede irritar la piel."
      },
      {
        q: "¿Debo dejar de usar maquillaje si tengo acné?",
        a: "No necesariamente; lo importante es elegir productos no comedogénicos y retirarlos bien al final del día."
      },
      {
        q: "¿La rutina en casa puede reemplazar el tratamiento médico?",
        a: "No. Una buena rutina evita sumar irritación, pero el acné moderado o persistente necesita un tratamiento indicado por un dermatólogo para resolverse de verdad."
      }
    ]
  },
  {
    slug: "autoexamen-de-lunares-en-casa",
    title: "Cómo hacerte un autoexamen de lunares en casa",
    excerpt:
      "Revisar tus propios lunares en casa, de forma regular, es uno de los hábitos más simples y con más impacto real en la detección temprana del cáncer de piel. Así se hace, paso a paso.",
    category: "Cáncer de piel",
    datePublished: "2026-08-21",
    dateModified: "2026-08-21",
    readingMin: 6,
    relatedEspecialidad: "cancer-de-piel-y-dermatoscopia",
    lead:
      "El autoexamen de lunares no reemplaza el control con un dermatólogo, pero es un hábito simple que ayuda a notar cambios a tiempo, entre una consulta y otra.",
    sections: [
      {
        h: "Por qué vale la pena hacerlo",
        p: [
          "Nadie conoce tu piel tan de cerca, en el día a día, como tú mismo. Revisarte con regularidad ayuda a notar un lunar nuevo o un cambio en uno existente antes de la próxima cita, que es exactamente el tipo de señal que conviene consultar pronto."
        ]
      },
      {
        h: "Cómo hacerlo, paso a paso",
        list: [
          "Elige un ambiente con buena luz y, si puedes, un espejo de cuerpo completo y uno de mano para las zonas difíciles",
          "Revisa todo el cuerpo, no solo lo que ves a simple vista: espalda, cuero cabelludo, entre los dedos, plantas de los pies y glúteos son zonas que se olvidan",
          "Pide ayuda a alguien de confianza para revisar la espalda y el cuero cabelludo, o combina el espejo grande con uno de mano",
          "Revisa cada lunar con la regla ABCDE: Asimetría, Bordes irregulares, Color desigual, Diámetro mayor a 6 mm, Evolución o cambios",
          "Toma una foto con fecha de los lunares que te generen dudas, para comparar con el tiempo"
        ]
      },
      {
        h: "Así se ve cada señal de la regla ABCDE",
        p: ["Una guía visual de referencia; ningún lunar real es tan esquemático como estos dibujos, pero ayuda a saber qué buscar."],
        img: {
          src: "/lunares-abcde.svg",
          alt: "Ilustración lineal de cinco lunares que representan las señales ABCDE: asimetría, borde irregular, color desigual, diámetro mayor a 6 mm y evolución en el tiempo",
          caption: "Ilustración de referencia, no diagnóstica."
        }
      },
      {
        h: "Con qué frecuencia conviene hacerlo",
        p: [
          "Una vez al mes es una buena referencia general. Si tienes muchos lunares, antecedentes familiares de cáncer de piel o piel muy clara, tu dermatólogo puede recomendarte revisarte con más frecuencia."
        ]
      },
      {
        h: "Qué no reemplaza el autoexamen",
        list: [
          "No reemplaza el control profesional con dermatoscopía, que permite ver estructuras del lunar que no se detectan a simple vista",
          "No sirve para 'descartar' por tu cuenta un lunar que te preocupa: si algo te llama la atención, la consulta es lo que confirma o descarta, no la autoevaluación",
          "No hay que esperar al control anual si notas un cambio antes: eso amerita adelantar la cita"
        ]
      }
    ],
    faqs: [
      {
        q: "¿Qué hago si encuentro un lunar que cumple algún criterio del ABCDE?",
        a: "No te alarmes de más: muchos lunares cumplen algún criterio sin ser malignos. Lo importante es que lo evalúe un dermatólogo, con dermatoscopía si hace falta."
      },
      {
        q: "¿Los lunares nuevos en la edad adulta son siempre motivo de preocupación?",
        a: "No siempre, pero un lunar realmente nuevo en la adultez, o uno que cambia, es justamente el tipo de hallazgo que conviene que revise un especialista."
      },
      {
        q: "¿Cada cuánto debo ir a un control profesional además del autoexamen?",
        a: "Depende de tus factores de riesgo; como referencia general un control anual es razonable para la mayoría, pero tu dermatólogo te indicará la frecuencia adecuada para tu caso."
      }
    ]
  },
  {
    slug: "mitos-sobre-lunares-y-cancer-de-piel",
    title: "Mitos sobre los lunares y el cáncer de piel",
    excerpt:
      "Sobre los lunares y el cáncer de piel circulan ideas que pueden hacer perder tiempo valioso. Separamos lo que es mito de lo que realmente conviene tener en cuenta.",
    category: "Cáncer de piel",
    datePublished: "2026-08-21",
    dateModified: "2026-08-21",
    readingMin: 5,
    relatedEspecialidad: "cancer-de-piel-y-dermatoscopia",
    lead:
      "Hay pocas áreas de la piel con tantas ideas erróneas dando vueltas como los lunares y el cáncer de piel. Algunas hacen perder tiempo valioso; aquí las repasamos.",
    sections: [
      {
        h: "Mitos sobre quién debe preocuparse",
        list: [
          "Mito: el cáncer de piel solo le da a personas de piel muy clara. Verdad: el riesgo es mayor en piel clara, pero cualquier tipo de piel puede desarrollarlo, y en piel más oscura suele diagnosticarse más tarde porque se sospecha menos",
          "Mito: si nadie en mi familia tuvo cáncer de piel, no me puede pasar a mí. Verdad: los antecedentes familiares aumentan el riesgo, pero la mayoría de los casos no tiene un familiar directo afectado",
          "Mito: solo hay que revisarse los lunares que se ven, no hace falta un control completo. Verdad: puede aparecer en zonas poco visibles, como el cuero cabelludo o entre los dedos de los pies"
        ]
      },
      {
        h: "Mitos sobre cómo se ve un lunar peligroso",
        list: [
          "Mito: si no duele ni pica, no es nada. Verdad: la mayoría de los lunares con cambios sospechosos no duelen; el dolor no es un criterio confiable",
          "Mito: un lunar con pelo es más peligroso. Verdad: que un lunar tenga pelo no indica nada sobre si es benigno o no",
          "Mito: solo hay que fijarse en lunares oscuros. Verdad: algunas lesiones de alerta son rosadas o del color de la piel, no necesariamente oscuras"
        ]
      },
      {
        h: "Mitos sobre la prevención",
        list: [
          "Mito: el protector solar solo hace falta en la playa o la piscina. Verdad: la exposición diaria acumulada, incluso caminando por la calle, contribuye al daño solar",
          "Mito: un día nublado no hace falta protección. Verdad: gran parte de la radiación UV atraviesa las nubes",
          "Mito: si ya tengo bronceado, ya no necesito protector. Verdad: el bronceado es, en sí mismo, una señal de daño en la piel, no una protección suficiente"
        ]
      }
    ],
    faqs: [
      {
        q: "¿Vivir cerca de la línea ecuatorial cambia el riesgo?",
        a: "La radiación UV es más intensa cerca del ecuador durante todo el año, lo que hace que la protección solar constante sea todavía más importante en zonas como Machala."
      },
      {
        q: "¿Tener la piel más oscura significa que no necesito revisarme?",
        a: "No. El riesgo es menor pero no nulo, y cuando aparece, suele detectarse más tarde porque se sospecha menos. Revisarse igual sigue siendo válido."
      },
      {
        q: "¿Un lunar que siempre tuve puede volverse peligroso con el tiempo?",
        a: "Sí puede cambiar. Por eso lo que importa no es solo cómo se ve un lunar una vez, sino si cambia con el tiempo respecto a como era antes."
      }
    ]
  },
  {
    slug: "proteccion-solar-que-realmente-funciona",
    title: "Protección solar: lo que realmente previene el cáncer de piel",
    excerpt:
      "El protector solar es solo una parte de la protección real. Estos son los hábitos, más allá del frasco de protector, que marcan la diferencia en la prevención del cáncer de piel.",
    category: "Cáncer de piel",
    datePublished: "2026-08-21",
    dateModified: "2026-08-21",
    readingMin: 5,
    relatedEspecialidad: "cancer-de-piel-y-dermatoscopia",
    lead:
      "Se habla mucho del protector solar, pero la protección real es un conjunto de hábitos, no un solo producto. Esto es lo que realmente ayuda, más allá de la marca o el número del frasco.",
    sections: [
      {
        h: "El protector solar sí importa, pero se usa mal",
        list: [
          "La mayoría de la gente aplica mucho menos cantidad de la necesaria",
          "Se reaplica poco: después de 2 a 3 horas, o antes si hay sudor o agua de por medio, hace falta repetir",
          "Se olvidan zonas frecuentes: orejas, nuca, empeine de los pies, cuero cabelludo con poco cabello",
          "Se aplica solo en días de playa, cuando la exposición diaria acumulada —caminar, manejar, hacer mandados— también cuenta"
        ]
      },
      {
        h: "Hábitos que protegen más allá del protector",
        list: [
          "Buscar sombra en las horas de sol más fuerte, entre las 10:00 y las 16:00 aproximadamente",
          "Usar ropa que cubra, sombrero de ala ancha y lentes de sol, sobre todo en exposiciones prolongadas",
          "Tener especial cuidado con niños pequeños, cuya piel es más sensible al daño solar",
          "Recordar que el daño solar se acumula con los años: la protección constante hoy es la que marca diferencia a largo plazo"
        ]
      },
      {
        h: "Situaciones que suelen subestimarse",
        list: [
          "Los días nublados: buena parte de la radiación UV atraviesa las nubes",
          "Manejar con frecuencia: la luz solar entra por la ventana del auto y afecta más el lado del cuerpo expuesto al vidrio",
          "Cerca del ecuador, como en Machala, la radiación UV se mantiene alta durante todo el año, no solo en 'temporada de sol'"
        ]
      },
      {
        h: "Por qué esto se conecta con el cáncer de piel",
        p: [
          "La exposición solar acumulada a lo largo de la vida es el principal factor de riesgo modificable para el cáncer de piel. Esto no significa evitar el sol por completo, sino exponerse con protección real y sostenida, no solo cuando 'toca playa'."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Qué factor de protector solar debo usar?",
        a: "Como referencia general, un factor 30 o más, de amplio espectro, aplicado en cantidad suficiente y reaplicado con frecuencia, es más efectivo que un factor muy alto aplicado en poca cantidad."
      },
      {
        q: "¿Necesito protector solar todos los días, aunque no vaya a la playa?",
        a: "Sí, la exposición diaria acumulada también cuenta, sobre todo en una ciudad con radiación UV alta durante todo el año."
      },
      {
        q: "¿La protección solar previene todos los tipos de cáncer de piel?",
        a: "Reduce significativamente el riesgo, pero no lo elimina por completo. Por eso la protección se combina con el control periódico de la piel, no lo reemplaza."
      }
    ]
  },
  {
    slug: "spf-protector-solar-que-significa",
    title: "SPF del protector solar: qué significa el número y cómo elegirlo",
    excerpt:
      "El número del protector solar (30, 50, 50+...) genera muchas dudas: ¿uno más alto siempre es mejor? Esto es lo que realmente significa, qué revisar en la etiqueta y cada cuánto aplicarlo.",
    category: "Cáncer de piel",
    datePublished: "2026-08-21",
    dateModified: "2026-08-21",
    readingMin: 5,
    relatedEspecialidad: "cancer-de-piel-y-dermatoscopia",
    lead:
      "El SPF es el dato que más se mira en la etiqueta de un protector solar, pero también el que más se malinterpreta. Aquí explicamos qué mide realmente ese número, qué más revisar en la etiqueta, y cómo y cada cuánto aplicarlo.",
    sections: [
      {
        h: "Qué significa el número de SPF",
        p: [
          "El SPF (factor de protección solar) mide, de forma aproximada, cuánto tiempo adicional tarda la piel en quemarse usando el protector, comparado con no usar nada. No es una medida exacta de 'porcentaje de protección total', aunque suele explicarse así de forma simplificada.",
          "Como referencia general: un SPF 30 bloquea alrededor del 97% de los rayos UVB, y un SPF 50 alrededor del 98%. La diferencia entre 30 y 50 es más pequeña de lo que el número sugiere; lo que sí cambia mucho la protección real es la cantidad que te apliques y qué tan seguido te la vuelvas a poner."
        ]
      },
      {
        h: "¿Un número más alto es siempre mejor?",
        p: [
          "No de forma proporcional. Pasar de SPF 30 a SPF 50 suma una protección extra modesta. Lo que sí hace una diferencia real es elegir uno de amplio espectro (que cubra tanto UVA como UVB) y aplicarlo en la cantidad y frecuencia correctas, más que perseguir el número más alto de la góndola."
        ]
      },
      {
        h: "Qué más revisar en la etiqueta, además del número",
        list: [
          "'Amplio espectro' o 'UVA/UVB': indica que protege de ambos tipos de radiación, no solo de la que quema (UVB)",
          "'Resistente al agua': significa que mantiene su efecto un tiempo limitado en el agua o con sudor —generalmente 40 u 80 minutos, según indique el envase—, no que dura todo el día",
          "Filtro físico (mineral) o químico: son dos categorías distintas de protección, ambas efectivas; cuál te conviene más depende de tu tipo de piel y tolerancia, algo que puedes conversar en tu consulta si tienes piel sensible o reactiva"
        ]
      },
      {
        h: "Cuánto aplicar, la parte que casi todos hacen mal",
        p: [
          "La mayoría de la gente aplica entre un cuarto y la mitad de la cantidad necesaria para lograr el SPF que indica el envase. Como referencia práctica: para rostro y cuello, una cantidad similar a la punta de dos dedos completos; para todo el cuerpo, el equivalente a una copa de licor, unos 30 ml."
        ]
      },
      {
        h: "Cada cuánto reaplicarlo",
        list: [
          "Cada 2 horas en exposición directa al sol",
          "Inmediatamente después de nadar, sudar mucho o secarte con la toalla, sin importar si dice 'resistente al agua'",
          "Una sola aplicación en la mañana no alcanza para cubrir todo el día si hay exposición sostenida",
          "En el uso diario sin exposición prolongada (oficina, manejar, mandados), una aplicación por la mañana suele ser suficiente, salvo que pases varias horas cerca de una ventana con sol directo"
        ]
      }
    ],
    faqs: [
      {
        q: "¿SPF 100 me protege el doble que SPF 50?",
        a: "No. La diferencia en bloqueo de UVB entre 50 y 100 es de apenas un punto porcentual aproximado. Un número más alto puede dar algo más de margen si aplicas menos cantidad de la ideal, pero no reemplaza la reaplicación."
      },
      {
        q: "¿El protector en polvo o en spray reemplaza al de crema?",
        a: "Pueden servir para reaplicar sobre maquillaje o en el cuerpo, pero es difícil aplicar la cantidad suficiente solo con ellos; lo ideal es usarlos como refuerzo, no como única aplicación del día."
      },
      {
        q: "¿Los protectores con color o los que ya trae el maquillaje son suficientes?",
        a: "Rara vez se aplican en cantidad suficiente para dar la protección que promete la etiqueta. Sirven como protección adicional, no como reemplazo del protector solar dedicado."
      },
      {
        q: "¿Cómo elijo entre filtro físico y químico si tengo piel sensible?",
        a: "Es una buena pregunta para tu consulta: depende de tu tipo de piel y de si tienes antecedentes de irritación o alergias, y tu dermatólogo puede orientarte según tu caso."
      }
    ]
  },
  {
    slug: "manchas-y-melasma-en-la-piel",
    title: "Manchas y melasma: por qué aparecen y qué puedes hacer mientras tanto",
    excerpt:
      "Las manchas en la piel no son todas iguales, y el melasma tiene características propias. Esto es lo que las distingue, qué las empeora y qué hábitos ayudan mientras defines un plan.",
    seoTitle: "Manchas y Melasma en Machala · Causas y Cuidado de la Piel",
    seoDescription:
      "Manchas en la piel y melasma en Machala: por qué aparecen, qué las empeora y qué hábitos ayudan mientras defines un tratamiento con tu dermatóloga.",
    category: "Dermatología clínica",
    datePublished: "2026-08-21",
    dateModified: "2026-08-21",
    readingMin: 5,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Las manchas en la piel son uno de los motivos de consulta más frecuentes en Machala, sobre todo por la exposición solar constante de la zona. No todas las manchas son iguales, y el melasma —una de las más consultadas— tiene características propias que conviene conocer.",
    sections: [
      {
        h: "Qué es el melasma",
        p: [
          "El melasma es un tipo de mancha que aparece sobre todo en el rostro —mejillas, frente, labio superior— con bordes poco definidos y un tono marrón o grisáceo. Es mucho más frecuente en mujeres, y se relaciona con cambios hormonales (embarazo, anticonceptivos) y con la exposición solar."
        ]
      },
      {
        h: "Por qué no es 'una mancha más'",
        p: [
          "El melasma tiende a ser más persistente y más sensible al sol que otras manchas. Una exposición solar breve puede hacer que reaparezca incluso después de mejorar, por eso el manejo va mucho más allá de aplicar una crema despigmentante."
        ]
      },
      {
        h: "Qué lo empeora",
        list: [
          "La exposición solar sin protección constante, incluso breve",
          "El calor directo sobre el rostro (cocinar cerca de una hornilla, saunas)",
          "Cambios hormonales: embarazo, anticonceptivos, terapias hormonales",
          "Procedimientos cosméticos agresivos hechos sin evaluación previa",
          "Productos exfoliantes fuertes usados sin criterio, que irritan y oscurecen más la zona"
        ]
      },
      {
        h: "Qué ayuda mientras defines un plan",
        p: ["Son medidas de cuidado, no un tratamiento del melasma en sí, que se define en consulta:"],
        list: [
          "Protector solar de amplio espectro, reaplicado, todos los días: es la medida más importante de todas",
          "Sombrero o gorra con visera si vas a estar mucho tiempo al sol",
          "Evitar la exfoliación agresiva o los 'remedios' caseros para aclarar la piel",
          "Ser constante: el melasma mejora con meses de cuidado sostenido, no con una sola aplicación"
        ]
      }
    ],
    faqs: [
      {
        q: "¿El melasma se cura para siempre?",
        a: "Se controla muy bien, pero tiende a ser una condición que puede reactivarse con el sol o cambios hormonales. Por eso el cuidado sostenido, sobre todo la protección solar, es tan importante incluso después de mejorar."
      },
      {
        q: "¿Cualquier mancha oscura en la cara es melasma?",
        a: "No. Hay varios tipos de manchas —solares, posinflamatorias, melasma, entre otras— y cada una se maneja distinto. Por eso es importante que un dermatólogo confirme de cuál se trata antes de tratarla."
      },
      {
        q: "¿El embarazo empeora las manchas?",
        a: "Puede desencadenar o empeorar el melasma, conocido popularmente como 'paño del embarazo'. En muchos casos mejora después del parto, pero no siempre desaparece solo, y la protección solar sigue siendo clave durante y después."
      }
    ]
  },
  {
    slug: "dermatitis-atopica-piel-sensible",
    title: "Dermatitis atópica: qué es y cómo cuidar la piel sensible en casa",
    excerpt:
      "La dermatitis atópica es una de las consultas más frecuentes, sobre todo en niños. Esto es lo que la caracteriza, qué desencadena los brotes y qué hábitos ayudan en casa.",
    seoTitle: "Dermatitis Atópica en Machala · Cuidado de la Piel Sensible",
    seoDescription:
      "Dermatitis atópica en Machala: qué es, por qué da brotes y qué hábitos de cuidado en casa ayudan a la piel sensible, en niños y adultos.",
    category: "Dermatología clínica",
    datePublished: "2026-08-21",
    dateModified: "2026-08-21",
    readingMin: 5,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "La dermatitis atópica es una de las condiciones de piel más frecuentes, especialmente en la infancia, aunque también persiste o aparece en adultos. Conocer sus desencadenantes ayuda a espaciar los brotes, aunque el manejo de fondo lo defina siempre tu dermatólogo.",
    sections: [
      {
        h: "Qué es",
        p: [
          "Es una condición crónica de la piel, con base genética e inmunológica, que causa piel seca, picazón y brotes de enrojecimiento e inflamación. Suele aparecer en la infancia, en pliegues como codos y rodillas, y puede continuar o reaparecer en la adultez con otro patrón."
        ]
      },
      {
        h: "Por qué da brotes",
        list: [
          "La piel de una persona con dermatitis atópica tiene una barrera más débil, que pierde agua y deja entrar más fácil a irritantes y alérgenos",
          "El clima seco o los cambios bruscos de temperatura pueden desencadenar brotes",
          "Jabones y detergentes fuertes irritan una barrera ya de por sí sensible",
          "El estrés no la causa, pero es un desencadenante frecuente de brotes",
          "La sudoración excesiva y el roce de telas ásperas o sintéticas"
        ]
      },
      {
        h: "Cuidados en casa que sí ayudan",
        p: ["Son hábitos de cuidado, no un tratamiento de los brotes activos, que necesita indicación médica:"],
        list: [
          "Baños cortos, con agua tibia (no caliente) y jabones suaves, sin fragancia",
          "Hidratar la piel todos los días, sobre todo justo después del baño",
          "Usar ropa de algodón, evitando telas sintéticas o de lana directa sobre la piel",
          "Cortar las uñas cortas, sobre todo en niños, para reducir el daño del rascado",
          "Identificar y anotar qué suele desencadenar los brotes en cada persona: no es igual para todos"
        ]
      },
      {
        h: "Cuándo consultar",
        list: [
          "Si los brotes son frecuentes o no mejoran con el cuidado básico",
          "Si hay signos de infección: más enrojecimiento, calor, secreción o dolor en la zona",
          "Si la picazón interrumpe el sueño, sobre todo en niños pequeños",
          "Para definir un plan de tratamiento de los brotes, que va más allá de la hidratación diaria"
        ]
      }
    ],
    faqs: [
      {
        q: "¿La dermatitis atópica se cura?",
        a: "Es una condición crónica que tiende a mejorar con la edad en muchos niños, pero no siempre desaparece del todo. Se controla muy bien con un plan de cuidado sostenido y tratamiento oportuno de los brotes."
      },
      {
        q: "¿Es contagiosa?",
        a: "No, en absoluto. No se transmite de una persona a otra por contacto."
      },
      {
        q: "¿Qué la diferencia de la piel simplemente seca?",
        a: "La piel seca sin dermatitis no suele picar tanto ni formar placas rojas o brotes recurrentes en zonas típicas como los pliegues. Si hay picazón intensa y brotes que van y vienen, vale la pena una evaluación."
      }
    ]
  },
  {
    slug: "trasplante-capilar-es-la-unica-solucion",
    title: "¿El trasplante capilar es la única solución para la calvicie?",
    excerpt:
      "El trasplante capilar es una herramienta muy útil, pero no la única ni la primera opción para todos. Esto es lo que conviene saber antes de pensar en cirugía.",
    seoTitle: "Trasplante Capilar en Machala: ¿Es Necesario? | Dra. Karla Andrade",
    seoDescription:
      "¿Es el trasplante capilar la única opción para la calvicie? La Dra. Karla Andrade explica cuándo se recomienda y qué tratamientos médicos existen antes.",
    category: "Tricología",
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    readingMin: 7,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    lead:
      "Cuando alguien empieza a notar menos densidad de cabello, el trasplante capilar suele ser lo primero que viene a la mente. Pero no toda persona con alopecia lo necesita, y en muchos casos existen tratamientos médicos que pueden ayudar antes —o en lugar— de pensar en una cirugía. Aquí te explico cuándo sí tiene sentido un trasplante y cuándo conviene explorar otras opciones primero.",
    sections: [
      {
        h: "No toda caída de cabello es igual",
        p: [
          "Antes de hablar de trasplante, hay que aclarar algo importante: 'se me cae el cabello' no describe una sola condición, sino varias, con causas y tratamientos distintos. El trasplante capilar es una solución pensada específicamente para la alopecia androgenética, el tipo de calvicie hormonal y genética más frecuente. No está indicado de la misma forma para un efluvio telógeno (una caída difusa y generalmente pasajera), una alopecia areata (de origen inmunológico) o una alopecia cicatricial, donde el folículo puede dañarse de forma permanente.",
          "Por eso, antes de considerar cualquier procedimiento, lo primero es un diagnóstico claro, idealmente con tricoscopía, el examen que permite ver de cerca el folículo y el patrón de la caída."
        ]
      },
      {
        h: "Alopecia androgenética: la candidata típica al trasplante",
        p: [
          "La alopecia androgenética es un proceso progresivo: los folículos sensibles a la dihidrotestosterona (DHT), una hormona derivada de la testosterona, se van miniaturizando con el tiempo hasta producir cabellos cada vez más finos y cortos, hasta dejar de producir cabello visible. Afecta tanto a hombres (con el patrón clásico de entradas y coronilla) como a mujeres (más frecuentemente con afinamiento difuso en la zona central del cuero cabelludo)."
        ]
      },
      {
        h: "Tratamientos médicos que pueden ayudar antes del trasplante",
        p: ["Antes de llegar a la cirugía, existen varias herramientas médicas que pueden frenar la progresión de la alopecia androgenética o mejorar la densidad existente, según cada caso:"],
        list: [
          "Minoxidil, tópico u oral, que estimula el folículo y puede prolongar su fase de crecimiento",
          "Finasterida y dutasterida, que actúan sobre la vía hormonal de la DHT, siempre bajo indicación y seguimiento médico",
          "Plasma rico en plaquetas (PRP), como apoyo dentro de un plan de tratamiento más amplio",
          "Mesoterapia capilar, en los casos donde la evaluación la considera útil"
        ]
      },
      {
        p: [
          "Ninguno de estos tratamientos 'cura' la alopecia androgenética de forma definitiva: lo que hacen es frenar su avance o mejorar la densidad mientras se mantienen. Por eso la constancia importa tanto como la indicación correcta."
        ]
      },
      {
        h: "Cuándo sí puede recomendarse un trasplante",
        p: [
          "El trasplante capilar tiene sentido cuando la pérdida de densidad ya es significativa, cuando los tratamientos médicos no son suficientes para el objetivo del paciente, o cuando la persona busca restaurar una zona que ya perdió folículos de forma permanente. Consiste en redistribuir folículos de una zona donante —genéticamente menos sensible a la DHT— hacia las zonas con menos densidad."
        ]
      },
      {
        h: "Por qué debe evaluarse la zona donante",
        p: [
          "No toda persona con alopecia androgenética tiene una buena zona donante. En algunos patrones de caída, la miniaturización no se limita a la parte superior de la cabeza, sino que también compromete los laterales y la parte de atrás —la zona que normalmente se usa como donante—. En esos casos, el trasplante pierde parte de su sentido, porque no hay suficiente cabello estable para trasladar. Evaluar la zona donante con detalle, no solo la zona a cubrir, es un paso que no debería saltarse."
        ]
      },
      {
        h: "Por qué importa controlar la progresión, antes y después",
        p: [
          "Un trasplante traslada folículos existentes; no detiene la alopecia en el resto del cuero cabelludo. Si la causa hormonal de fondo sigue activa, el cabello no trasplantado puede seguir afinándose con el tiempo. Por eso, en muchos casos, se recomienda mantener algún tratamiento médico antes y después del procedimiento, para proteger tanto el cabello nativo como el resultado del trasplante."
        ]
      },
      {
        h: "Expectativas realistas",
        p: [
          "El trasplante capilar puede dar resultados muy naturales cuando se indica en el caso correcto y lo realiza un equipo con experiencia, pero tiene límites: depende de la cantidad de folículos disponibles en la zona donante, no da una densidad idéntica a la de antes de la alopecia, y el resultado final tarda varios meses en verse, porque el cabello trasplantado sigue su propio ciclo de crecimiento. Un diagnóstico y una conversación honesta sobre expectativas, antes de operar, son tan importantes como la técnica quirúrgica."
        ]
      }
    ],
    faqs: [
      {
        q: "¿El trasplante capilar es definitivo?",
        a: "Los folículos trasplantados mantienen, en general, su resistencia a la DHT, pero eso no protege al cabello que no fue trasplantado. Por eso muchas personas combinan el trasplante con un tratamiento médico de mantenimiento."
      },
      {
        q: "¿A qué edad conviene hacerse un trasplante?",
        a: "No hay una edad única. Lo que importa es que la alopecia esté lo suficientemente definida como para planificar el resultado, y que se haya evaluado bien la progresión esperable. Operar demasiado joven, con la alopecia todavía evolucionando, puede llevar a resultados que no envejecen bien con el tiempo."
      },
      {
        q: "¿El PRP o la mesoterapia pueden reemplazar al trasplante?",
        a: "No. Son herramientas distintas, con objetivos distintos. El PRP y la mesoterapia buscan mejorar la salud del folículo existente; el trasplante redistribuye folículos. Cuál se indica, y si se combinan, depende del diagnóstico de cada caso."
      },
      {
        q: "¿Cómo sé si soy candidato a un trasplante?",
        a: "Eso lo define una evaluación con tricoscopía, que permite ver el grado de miniaturización en la zona a tratar y en la posible zona donante. No se puede saber por una foto ni por internet."
      }
    ],
    relatedArticles: [
      "minoxidil-para-el-cabello-funciona",
      "prp-capilar-tratamiento-cientifico-o-moda",
      "dutasterida-y-finasterida-son-seguras",
      "tengo-entradas-puedo-recuperar-cabello-sin-trasplante",
      "que-tratamiento-capilar-necesito-segun-mi-alopecia"
    ],
    references: [
      { label: "Kanti V, et al. Evidence-based (S3) guideline for the treatment of androgenetic alopecia in women and in men. J Eur Acad Dermatol Venereol. 2018. PMID 29178529.", url: "https://pubmed.ncbi.nlm.nih.gov/29178529/" },
      { label: "Zhou Z, et al. The efficacy and safety of dutasteride compared with finasteride in treating men with androgenetic alopecia: a systematic review and meta-analysis. Clin Interv Aging. 2019. PMID 30863034.", url: "https://pubmed.ncbi.nlm.nih.gov/30863034/" },
      { label: "Rossi A, et al. Guidelines on the use of finasteride in androgenetic alopecia. 2016. PMID 26924401.", url: "https://pubmed.ncbi.nlm.nih.gov/26924401/" },
      { label: "Trichoscopy of androgenetic alopecia: a systematic review. J Clin Med. 2024. PMID 38610726.", url: "https://pubmed.ncbi.nlm.nih.gov/38610726/" }
    ]
  },
  {
    slug: "minoxidil-para-el-cabello-funciona",
    title: "Minoxidil para el cabello: ¿realmente funciona y qué pasa si lo suspendo?",
    excerpt:
      "El minoxidil es, probablemente, el tratamiento más conocido para la caída del cabello. Esto es lo que hay que saber sobre cómo actúa, cuánto tarda y qué pasa si se suspende.",
    seoTitle: "Minoxidil para el Cabello: ¿Funciona? | Dra. Karla Andrade",
    seoDescription:
      "¿El minoxidil realmente funciona y qué pasa si lo suspendes? La Dra. Karla Andrade explica su mecanismo, el shedding inicial y los cuidados a tener en cuenta.",
    category: "Tricología",
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    readingMin: 7,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    lead:
      "El minoxidil es, probablemente, el tratamiento más conocido —y más usado sin supervisión— para la caída del cabello. Pero alrededor de él circulan muchas dudas: si realmente funciona, cuánto tarda, y sobre todo, qué pasa si se deja de usar. Esto es lo que hay que saber.",
    sections: [
      {
        h: "Qué es el minoxidil",
        p: [
          "El minoxidil es un medicamento que originalmente se usaba para la presión arterial alta. Durante su uso se notó un efecto llamativo: estimulaba el crecimiento de vello y cabello. Hoy se usa específicamente para tratar ciertos tipos de caída de cabello, en formulación tópica (que se aplica sobre el cuero cabelludo) y, más recientemente, en dosis bajas por vía oral."
        ]
      },
      {
        h: "Cómo actúa sobre el folículo",
        p: [
          "No se conoce con total precisión su mecanismo, pero se sabe que prolonga la fase de crecimiento (anágena) del folículo y puede aumentar el flujo sanguíneo en el cuero cabelludo. El resultado, cuando funciona, es que los cabellos miniaturizados —más finos y cortos de lo normal— pasan a crecer más gruesos y por más tiempo."
        ]
      },
      {
        h: "Tópico vs. oral",
        p: [
          "El minoxidil tópico es la forma más conocida y de uso más extendido, aplicada directamente sobre el cuero cabelludo. En los últimos años, el minoxidil oral a dosis bajas —mucho menores a las usadas para la presión arterial— se ha estudiado como alternativa para personas que no toleran bien la forma tópica o buscan otra vía de administración.",
          "Ambas formas tienen respaldo en revisiones científicas, aunque la evidencia del minoxidil oral a dosis bajas, si bien creciente, todavía se basa en estudios más pequeños que los del minoxidil tópico, y los propios autores de esas revisiones señalan que faltan ensayos más grandes para definir con precisión la dosis óptima. La elección entre una u otra forma, y la dosis, es una decisión médica individual, no algo para definir por cuenta propia."
        ]
      },
      {
        h: "En qué tipos de alopecia se usa",
        p: [
          "El minoxidil tiene su indicación más respaldada en la alopecia androgenética, tanto en hombres como en mujeres. También puede usarse como parte del manejo de otras formas de caída, siempre según el criterio del dermatólogo tras la evaluación correspondiente."
        ]
      },
      {
        h: "Cuánto tarda en mostrar resultados",
        p: [
          "Aquí es donde más expectativas se frustran: el minoxidil no da resultados en días ni en un par de semanas. Como actúa sobre el ciclo del folículo, los cambios suelen empezar a notarse recién después de varios meses de uso constante. Abandonar antes de ese plazo, pensando que 'no funciona', es uno de los motivos más comunes por los que alguien no ve resultado."
        ]
      },
      {
        h: "Qué es el shedding inicial",
        p: [
          "Muchas personas, al empezar a usar minoxidil, notan que se les cae más cabello en las primeras semanas. Esto se llama shedding inicial, y es un efecto esperado, no una señal de que el producto esté empeorando la caída: ocurre porque el minoxidil empuja a folículos en fase de descanso a entrar antes a su ciclo de crecimiento, lo que adelanta la caída de esos cabellos para dar paso a unos nuevos. Suele resolverse en unas semanas."
        ]
      },
      {
        h: "Qué ocurre cuando se suspende",
        p: [
          "Este es uno de los puntos más importantes y menos explicados: el efecto del minoxidil depende de que se siga usando. Si se suspende, los folículos que estaban respondiendo al tratamiento vuelven, de forma gradual, a su comportamiento previo, y la caída tiende a reaparecer en los meses siguientes. Esto no es un 'efecto rebote' exagerado ni un daño nuevo: es, sencillamente, que se pierde el estímulo que mantenía el beneficio."
        ]
      },
      {
        h: "Efectos adversos y precauciones",
        list: [
          "Irritación o picazón en el cuero cabelludo con la forma tópica, sobre todo con formulaciones en alcohol",
          "Crecimiento de vello no deseado en zonas cercanas (como la cara), más frecuente con minoxidil oral",
          "Con minoxidil oral, al derivar de un medicamento para la presión arterial, puede haber efectos sobre la frecuencia cardíaca o retención de líquidos en algunas personas, por lo que requiere evaluación médica previa",
          "No se recomienda en el embarazo ni la lactancia sin indicación médica específica"
        ]
      },
      {
        h: "Por qué no debe automedicarse, sobre todo el oral",
        p: [
          "El minoxidil tópico de venta libre genera la falsa impresión de que es un producto sin riesgos que cualquiera puede usar sin supervisión. El oral, al ser un medicamento sistémico, tiene más razones todavía para no indicarse por cuenta propia: la conveniencia de usarlo depende de cada persona, su historia médica y, en ocasiones, de una valoración cardiovascular previa."
        ]
      },
      {
        h: "Constancia y seguimiento",
        p: [
          "El minoxidil es, por diseño, un tratamiento de uso continuo: no es un curso de unas semanas, sino una herramienta que se sostiene en el tiempo mientras siga indicada. El seguimiento médico periódico permite ajustar la formulación, evaluar la respuesta real —más allá de la percepción subjetiva— y decidir si conviene combinarlo con otros tratamientos."
        ]
      }
    ],
    faqs: [
      {
        q: "¿El minoxidil funciona para todo tipo de caída de cabello?",
        a: "No. Su indicación más sólida es la alopecia androgenética. En otras causas de caída, su utilidad depende del diagnóstico, y debe indicarse dentro de un plan más amplio, no como solución única."
      },
      {
        q: "¿Puedo comprar minoxidil oral sin receta?",
        a: "No debería usarse sin indicación médica. Al ser un medicamento oral con efectos sistémicos, requiere evaluación previa para definir si es adecuado para ti, según tu historia de salud."
      },
      {
        q: "Si dejo de usarlo unos meses, ¿pierdo todo lo ganado?",
        a: "El beneficio se relaciona con el uso continuo. Al suspenderlo, el efecto se va perdiendo de forma gradual en los meses siguientes, hasta volver aproximadamente a como estaba antes de empezar."
      },
      {
        q: "¿El shedding inicial significa que me está haciendo daño?",
        a: "No. Es un efecto esperado al iniciar el tratamiento, relacionado con el cambio de ciclo del folículo, y suele resolverse en pocas semanas. Si la caída aumentada se prolonga mucho más, vale la pena consultarlo."
      }
    ],
    relatedArticles: [
      "dutasterida-y-finasterida-son-seguras",
      "trasplante-capilar-es-la-unica-solucion",
      "que-tratamiento-capilar-necesito-segun-mi-alopecia"
    ],
    references: [
      { label: "Gupta AK, et al. Low-dose oral minoxidil as treatment for non-scarring alopecia: a systematic review. Int J Dermatol. 2020. PMID 32516434.", url: "https://pubmed.ncbi.nlm.nih.gov/32516434/" },
      { label: "Randolph M, Tosti A. Oral minoxidil treatment for hair loss: a review of efficacy and safety. J Am Acad Dermatol. 2021. PMID 32622136.", url: "https://pubmed.ncbi.nlm.nih.gov/32622136/" },
      { label: "Kanti V, et al. Evidence-based (S3) guideline for the treatment of androgenetic alopecia in women and in men. J Eur Acad Dermatol Venereol. 2018. PMID 29178529.", url: "https://pubmed.ncbi.nlm.nih.gov/29178529/" }
    ]
  },
  {
    slug: "prp-capilar-tratamiento-cientifico-o-moda",
    title: "PRP capilar: ¿tratamiento científico o una moda?",
    excerpt:
      "El plasma rico en plaquetas es uno de los procedimientos más pedidos en tricología, y también uno de los que más confusión generan. Esto es lo que dice realmente la evidencia.",
    seoTitle: "PRP Capilar en Machala: ¿Funciona de Verdad? | Dra. Karla Andrade",
    seoDescription:
      "¿El PRP capilar es un tratamiento con respaldo científico o una moda? La Dra. Karla Andrade, dermatóloga en Machala, explica qué dice realmente la evidencia.",
    category: "Tricología",
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    readingMin: 7,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    lead:
      "El plasma rico en plaquetas, conocido como PRP, se ha vuelto uno de los procedimientos más pedidos en tricología. Pero también es de los que más confusión generan: ¿tiene respaldo científico real, o es solo una tendencia bien promocionada? La respuesta está en el medio, y merece explicarse con cuidado.",
    sections: [
      {
        h: "Qué es el plasma rico en plaquetas",
        p: [
          "El PRP se obtiene de la propia sangre del paciente. Se extrae una muestra, se procesa en una centrífuga para separar sus componentes, y se concentra la fracción rica en plaquetas, que contiene factores de crecimiento, proteínas que participan en procesos de reparación y regeneración tisular."
        ]
      },
      {
        h: "Cómo se aplica",
        p: [
          "Una vez obtenido, el plasma se inyecta de forma superficial en el cuero cabelludo, en la zona donde se busca estimular el folículo. El procedimiento se realiza en consultorio, bajo condiciones controladas, y una sesión suele durar entre 30 y 60 minutos."
        ]
      },
      {
        h: "Qué mecanismos biológicos se proponen",
        p: [
          "La hipótesis detrás del PRP capilar es que los factores de crecimiento liberados por las plaquetas podrían estimular a los folículos que todavía están activos, favoreciendo su fase de crecimiento y mejorando el entorno del cuero cabelludo. Es una hipótesis biológicamente razonable, pero eso no es lo mismo que una eficacia clínica totalmente establecida: en medicina, muchos mecanismos plausibles no se traducen después en beneficios claros y consistentes para el paciente."
        ]
      },
      {
        h: "Qué dice la evidencia científica",
        p: [
          "Existen varias revisiones sistemáticas y metaanálisis que han evaluado el PRP para alopecia androgenética, tanto en hombres como en mujeres. En conjunto, la tendencia de estos estudios es favorable: reportan mejoría en la densidad capilar comparado con no tratar, en varios de los ensayos analizados.",
          "Pero esa misma evidencia tiene limitaciones importantes que los propios autores de las revisiones señalan: los protocolos de preparación del PRP varían mucho entre estudios —no todos los PRP son iguales—, los tamaños de muestra suelen ser pequeños, varios estudios no fueron doble ciego, y hay heterogeneidad metodológica relevante. Eso hace que la certeza de la evidencia se considere, en general, moderada a baja, no alta."
        ]
      },
      {
        h: "Para qué tipos de alopecia podría ser útil",
        p: [
          "La mayor parte de la evidencia se concentra en la alopecia androgenética, en folículos que todavía conservan actividad, no en zonas completamente sin folículo. Por eso el PRP no tiene el mismo sentido en una alopecia cicatricial avanzada, donde el folículo ya no existe."
        ]
      },
      {
        h: "Por qué no funciona igual en todos los pacientes",
        p: [
          "La respuesta al PRP varía bastante de una persona a otra, en parte porque depende del estado de los folículos al momento de empezar, de la causa de fondo de la caída, y posiblemente de la técnica de preparación del plasma usada. Esta variabilidad es, justamente, uno de los motivos por los que los estudios tienen resultados heterogéneos."
        ]
      },
      {
        h: "Cuántas sesiones podrían necesitarse",
        p: [
          "La mayoría de los protocolos estudiados usan varias sesiones iniciales, espaciadas en el tiempo, seguidas de sesiones de mantenimiento. No existe, sin embargo, un esquema único validado como 'el correcto': el número y la frecuencia de sesiones se define caso por caso, según la respuesta observada."
        ]
      },
      {
        h: "Qué limitaciones tienen los estudios",
        list: [
          "Variabilidad en cómo se prepara y concentra el plasma de un estudio a otro",
          "Tamaños de muestra pequeños en buena parte de los ensayos disponibles",
          "Pocos estudios comparan el PRP directamente contra tratamientos ya establecidos, como el minoxidil",
          "Seguimientos relativamente cortos, que no siempre permiten saber qué pasa a largo plazo"
        ]
      },
      {
        h: "Por qué no sustituye los tratamientos médicos convencionales",
        p: [
          "Con la evidencia actual, el PRP se entiende mejor como un complemento dentro de un plan de tratamiento, no como un reemplazo de tratamientos con décadas de respaldo, como el minoxidil o la finasterida en los casos en que están indicados. Presentarlo como solución única, o como algo milagroso, no refleja lo que muestra la evidencia disponible."
        ]
      },
      {
        h: "Posibles efectos adversos",
        list: [
          "Dolor o molestia en el momento de la inyección",
          "Inflamación o enrojecimiento leve y transitorio en el cuero cabelludo",
          "Riesgo de infección si no se respetan condiciones adecuadas de higiene y preparación",
          "No se recomienda en personas con ciertos trastornos de la sangre o bajo determinados tratamientos, por lo que la evaluación previa es necesaria"
        ]
      }
    ],
    faqs: [
      {
        q: "¿El PRP tiene evidencia científica real?",
        a: "Sí, existen revisiones sistemáticas con resultados en general favorables, pero la certeza de esa evidencia es moderada a baja por la heterogeneidad de los estudios. No es 'solo marketing', pero tampoco es una certeza absoluta."
      },
      {
        q: "¿El PRP sirve para la calvicie total, sin cabello?",
        a: "No. Necesita folículos con cierta actividad para poder estimularlos. En zonas sin folículo —como una alopecia cicatricial avanzada o una calvicie muy extensa— no tiene ese sustrato sobre el cual actuar."
      },
      {
        q: "¿El PRP reemplaza al minoxidil o la finasterida?",
        a: "No debería plantearse así. Se usa generalmente como complemento, dentro de un plan que también puede incluir esos otros tratamientos, según el diagnóstico de cada persona."
      },
      {
        q: "¿Cuántas sesiones de PRP necesito para ver resultado?",
        a: "No hay un número fijo válido para todos. Se define según la respuesta de cada paciente, evaluada en consultas de seguimiento, no de antemano."
      }
    ],
    relatedArticles: [
      "minoxidil-para-el-cabello-funciona",
      "trasplante-capilar-es-la-unica-solucion",
      "que-tratamiento-capilar-necesito-segun-mi-alopecia"
    ],
    references: [
      { label: "Platelet-rich plasma in female androgenic alopecia: a comprehensive systematic review and meta-analysis. 2021.", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8204330/" },
      { label: "Is autologous platelet-rich plasma capable of increasing hair density in patients with androgenic alopecia? A systematic review and meta-analysis of randomized clinical trials. 2024.", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11551241/" },
      { label: "Kanti V, et al. Evidence-based (S3) guideline for the treatment of androgenetic alopecia in women and in men. J Eur Acad Dermatol Venereol. 2018. PMID 29178529.", url: "https://pubmed.ncbi.nlm.nih.gov/29178529/" }
    ]
  },
  {
    slug: "champus-anticaida-funcionan",
    title: "Champús anticaída: ¿funcionan o estás gastando tu dinero?",
    excerpt:
      "Los champús 'anticaída' prometen mucho en el empaque. Esto es lo que un champú puede hacer realmente por tu cabello, y lo que queda fuera de su alcance.",
    seoTitle: "Champús Anticaída: ¿Funcionan de Verdad? | Dra. Karla Andrade",
    seoDescription:
      "¿Los champús anticaída sirven para algo o es dinero perdido? La Dra. Karla Andrade explica qué puede hacer realmente un champú y qué necesita un tratamiento aparte.",
    category: "Tricología",
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    readingMin: 6,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    lead:
      "Los champús 'anticaída' están en casi cualquier farmacia, con promesas llamativas en el empaque. Pero, ¿qué puede hacer realmente un champú por tu cabello, y qué queda fuera de su alcance? Esto es lo que conviene saber antes de gastar en el siguiente frasco.",
    sections: [
      {
        h: "Qué puede hacer realmente un champú",
        p: [
          "Un champú es, ante todo, un producto de limpieza. Su función principal es retirar el exceso de grasa, células muertas y residuos del cuero cabelludo. Algunos champús 'anticaída' incorporan, además, ingredientes activos pensados para mejorar la salud del cuero cabelludo o actuar sobre causas puntuales de caída, pero su tiempo de contacto con la piel —apenas unos minutos, antes de enjuagar— limita cuánto pueden lograr comparado con un tratamiento que permanece aplicado."
        ]
      },
      {
        h: "Salud del cuero cabelludo vs. estimular el crecimiento",
        p: [
          "Esta es la distinción más importante del artículo. Un champú puede ayudar a que el cuero cabelludo esté en mejores condiciones —menos grasa, menos caspa, menos inflamación—, lo cual indirectamente favorece un buen ambiente para el folículo. Pero eso es distinto de estimular activamente el crecimiento o frenar una alopecia hormonal o genética, que es lo que promete buena parte de la publicidad de estos productos."
        ]
      },
      {
        h: "Ingredientes frecuentes: cafeína, biotina, ketoconazol",
        list: [
          "Cafeína: se ha estudiado en laboratorio por un posible efecto estimulante sobre el folículo, pero la evidencia en humanos, con el tiempo de contacto real de un champú, sigue siendo limitada",
          "Biotina: es una vitamina del complejo B; ayuda cuando existe una carencia real de biotina, algo poco frecuente en personas con alimentación variada. Tomarla o aplicarla sin esa carencia no tiene un efecto demostrado sobre una alopecia hormonal o genética",
          "Ketoconazol: es un antifúngico que también se ha estudiado por un posible efecto beneficioso en el cuero cabelludo en alopecia androgenética. Existe algún ensayo controlado con resultados comparables a minoxidil en ciertos parámetros, pero se trata de evidencia todavía limitada, con pocos estudios y muestras pequeñas, no al nivel de los tratamientos médicos de primera línea"
        ]
      },
      {
        h: "Qué ingredientes tienen más evidencia y cuáles dependen del marketing",
        p: [
          "En general, mientras más cerca está un ingrediente de la piel —como en una loción que se deja aplicada— más oportunidad tiene de ejercer un efecto; mientras más breve es el contacto —como en un champú que se enjuaga— menos. Esto no significa que los champús anticaída sean inútiles, sino que hay que entender qué pueden aportar realmente, y diferenciarlo de las frases de marketing en el empaque."
        ]
      },
      {
        h: "Caída desde la raíz vs. rotura del tallo",
        p: [
          "Otra confusión frecuente: no toda 'pérdida de cabello' es caída desde la raíz. Parte de lo que algunas personas interpretan como caída es, en realidad, rotura del tallo capilar, por ejemplo por químicos, calor o cepillado agresivo. Un champú formulado para fortalecer la fibra capilar puede ayudar a reducir la rotura, pero eso es distinto de frenar una caída desde el folículo."
        ]
      },
      {
        h: "Por qué un champú no suele ser suficiente en alopecia androgenética",
        p: [
          "En una alopecia androgenética, la causa de fondo es hormonal y genética, y actúa sobre el folículo mismo, no sobre la superficie del cuero cabelludo. Por eso los tratamientos con evidencia más sólida para este tipo de alopecia —como el minoxidil, aplicado y dejado actuar— trabajan de forma distinta a un champú que se enjuaga en minutos."
        ]
      },
      {
        h: "Cómo elegir un champú según tu cuero cabelludo",
        list: [
          "Cuero cabelludo graso: fórmulas que ayuden a controlar el exceso de sebo, usadas con la frecuencia que tu cuero cabelludo necesite",
          "Cuero cabelludo con caspa o descamación: champús formulados específicamente para ese fin, idealmente indicados si la caspa es persistente",
          "Cuero cabelludo sensible o irritado: fórmulas suaves, sin fragancias fuertes ni varios ingredientes activos a la vez"
        ]
      },
      {
        h: "Cuándo consultar con dermatología",
        p: [
          "Si ya probaste cambiar de champú sin notar diferencia, si la caída sigue un patrón que te preocupa —entradas, coronilla, zonas puntuales—, o si hay signos en el cuero cabelludo como enrojecimiento, picazón intensa o descamación persistente, es momento de una evaluación. Un champú puede sumar al cuidado diario, pero no reemplaza el diagnóstico de la causa de fondo."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Los champús anticaída son una estafa?",
        a: "No necesariamente, pero sus expectativas suelen estar infladas por el marketing. Pueden ayudar a la salud del cuero cabelludo, lo cual es valioso, pero no equivalen a un tratamiento médico contra una alopecia hormonal o genética."
      },
      {
        q: "¿Qué champú anticaída es el mejor?",
        a: "No hay uno universal. Depende de tu tipo de cuero cabelludo y de la causa de tu caída, que es justamente lo que una evaluación dermatológica ayuda a definir."
      },
      {
        q: "¿Puedo combinar un champú anticaída con minoxidil u otros tratamientos?",
        a: "En general sí, son productos con funciones distintas que pueden complementarse, pero conviene confirmarlo en tu consulta, sobre todo si usas varios productos activos a la vez."
      },
      {
        q: "¿Vale la pena gastar en champús caros?",
        a: "El precio no es garantía de efectividad. Lo que importa es que el producto se ajuste a tu tipo de cuero cabelludo, no cuánto cueste el frasco."
      }
    ],
    relatedArticles: ["aceite-de-romero-para-el-cabello", "que-tratamiento-capilar-necesito-segun-mi-alopecia"],
    references: [
      { label: "Piérard-Franchimont C, et al. Ketoconazole shampoo: effect of long-term use in androgenic alopecia. Dermatology. 1998. PMID 9669136.", url: "https://pubmed.ncbi.nlm.nih.gov/9669136/" },
      { label: "Kanti V, et al. Evidence-based (S3) guideline for the treatment of androgenetic alopecia in women and in men. J Eur Acad Dermatol Venereol. 2018. PMID 29178529.", url: "https://pubmed.ncbi.nlm.nih.gov/29178529/" }
    ]
  },
  {
    slug: "aceite-de-romero-para-el-cabello",
    title: "Aceite de romero y lociones naturales: ¿hacen crecer el cabello?",
    excerpt:
      "El aceite de romero se volvió viral como alternativa 'natural' al minoxidil. Esto es lo que realmente muestra la evidencia, y qué riesgos conviene conocer.",
    seoTitle: "Aceite de Romero para el Cabello: ¿Funciona? | Dra. Karla Andrade",
    seoDescription:
      "¿El aceite de romero hace crecer el cabello igual que el minoxidil? La Dra. Karla Andrade analiza con cuidado la evidencia científica detrás de esta tendencia.",
    category: "Tricología",
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    readingMin: 6,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    lead:
      "El aceite de romero se volvió viral como alternativa 'natural' al minoxidil. Junto a él circulan muchas otras lociones caseras: cebolla, aloe vera, agua de arroz. ¿Qué hay de cierto detrás de estas tendencias, y qué riesgos conviene conocer antes de probarlas?",
    sections: [
      {
        h: "Por qué se popularizó el aceite de romero",
        p: [
          "El interés por el aceite de romero despegó, sobre todo, en redes sociales, impulsado por testimonios y comparaciones directas con el minoxidil. Parte de ese interés se apoya en un estudio real, publicado en 2015, que comparó el aceite de romero con minoxidil al 2% en personas con alopecia androgenética durante seis meses."
        ]
      },
      {
        h: "Qué mostró ese estudio, con precisión",
        p: [
          "En ese ensayo, ambos grupos —aceite de romero y minoxidil al 2%— mostraron un aumento del conteo de cabello a los seis meses respecto al inicio, sin una diferencia estadísticamente significativa entre ambos grupos. El grupo de minoxidil presentó más picazón en el cuero cabelludo que el grupo de romero.",
          "Es un hallazgo interesante, pero hay que leerlo con cuidado: el estudio comparó contra minoxidil al 2%, una concentración más baja que la que suele usarse en la práctica actual; fue un solo estudio, con una muestra relativamente pequeña, y no incluyó un grupo placebo. 'No hubo diferencia significativa entre los dos grupos' no es lo mismo que 'el romero es igual de efectivo que el minoxidil': son conclusiones distintas, y la segunda va más allá de lo que el estudio realmente demuestra."
        ]
      },
      {
        h: "Limitaciones de la investigación disponible",
        list: [
          "Un solo ensayo clínico de este tipo, no replicado ampliamente después",
          "Comparación contra una concentración de minoxidil menor a la más usada actualmente",
          "Sin grupo placebo, lo que dificulta saber cuánto del efecto se debe al producto y cuánto a otros factores",
          "Muestra relativamente pequeña para sacar conclusiones definitivas"
        ]
      },
      {
        h: "Por qué no debe extrapolarse como equivalente al minoxidil",
        p: [
          "Un solo estudio, con estas limitaciones, no alcanza para decir que el aceite de romero 'reemplaza' al minoxidil, que cuenta con décadas de uso y una base de evidencia mucho más amplia. Lo correcto es decir que existe un indicio inicial interesante, que necesita confirmarse con más y mejores estudios antes de considerarse una alternativa equivalente."
        ]
      },
      {
        h: "Otras lociones populares: cebolla, aloe vera, agua de arroz",
        p: [
          "Circulan muchas otras recetas caseras para 'hacer crecer el cabello': jugo de cebolla, aloe vera, agua de arroz fermentada, entre otras. La mayoría se sostiene en testimonios personales, no en estudios clínicos bien diseñados sobre personas con alopecia diagnosticada. Algunas tienen cierta base teórica —por ejemplo, se ha propuesto el azufre de la cebolla como posible estimulante—, pero la evidencia clínica real en humanos sigue siendo escasa o de baja calidad."
        ]
      },
      {
        h: "Riesgos: dermatitis de contacto e irritación",
        p: [
          "Aplicar sustancias concentradas o caseras directamente sobre el cuero cabelludo no está exento de riesgo. El jugo de cebolla, el aceite de romero puro sin diluir, o mezclas improvisadas pueden causar dermatitis de contacto, con enrojecimiento, picazón o incluso reacciones más intensas, sobre todo en cueros cabelludos sensibles o ya irritados por otra condición de base."
        ]
      },
      {
        h: "Testimonios en redes vs. evidencia científica",
        p: [
          "Un video o una publicación mostrando un 'antes y después' no reemplaza un estudio clínico. Los testimonios individuales están sujetos a sesgos: la iluminación, el ángulo, la coincidencia con otros cambios —de dieta, de estrés, de estación del año— y, en algunos casos, el interés comercial de quien publica. Esto no significa que todos sean falsos, sino que no permiten sacar conclusiones generales sobre eficacia."
        ]
      },
      {
        h: "Cuándo un remedio natural puede retrasar un diagnóstico oportuno",
        p: [
          "El mayor riesgo de depender solo de remedios caseros no es tanto el remedio en sí, sino el tiempo que pasa mientras se prueba uno tras otro, sin que la causa de fondo se diagnostique ni se trate. En alopecias que responden mejor cuanto antes se tratan, ese tiempo perdido puede tener un costo real."
        ]
      }
    ],
    faqs: [
      {
        q: "¿El aceite de romero es igual de efectivo que el minoxidil?",
        a: "No se puede afirmar eso con la evidencia actual. Existe un estudio pequeño con resultados interesantes, pero con limitaciones metodológicas importantes que impiden considerarlo equivalente."
      },
      {
        q: "¿Puedo usar aceite de romero junto con mi tratamiento médico?",
        a: "En general no debería interferir, pero conviene mencionarlo en tu consulta, sobre todo si tu cuero cabelludo es sensible o ya usas varios productos."
      },
      {
        q: "¿Las lociones caseras tienen algún riesgo?",
        a: "Sí, pueden causar irritación o dermatitis de contacto, sobre todo si se aplican sin diluir o sobre un cuero cabelludo ya sensible."
      },
      {
        q: "¿Vale la pena probar remedios naturales antes de consultar?",
        a: "El mayor riesgo no es tanto el remedio, sino perder tiempo sin diagnosticar la causa real de la caída. Si la caída te preocupa, lo más eficiente es consultar primero."
      }
    ],
    relatedArticles: ["champus-anticaida-funcionan", "que-tratamiento-capilar-necesito-segun-mi-alopecia"],
    references: [
      { label: "Panahi Y, et al. Rosemary oil vs minoxidil 2% for the treatment of androgenetic alopecia: a randomized comparative trial. Skinmed. 2015. PMID 25842469.", url: "https://pubmed.ncbi.nlm.nih.gov/25842469/" }
    ]
  },
  {
    slug: "tengo-entradas-puedo-recuperar-cabello-sin-trasplante",
    title: "Tengo entradas: ¿puedo recuperar el cabello sin trasplante?",
    excerpt:
      "Notar que la línea del cabello retrocede en las sienes preocupa, y suele traer la pregunta directa de si hace falta un trasplante. La respuesta depende de qué tan temprano se actúe.",
    seoTitle: "Tengo Entradas: ¿Necesito Trasplante? | Dra. Karla Andrade",
    seoDescription:
      "¿Las entradas siempre requieren trasplante capilar? La Dra. Karla Andrade, dermatóloga en Machala, explica cuándo el tratamiento médico es suficiente.",
    category: "Tricología",
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    readingMin: 6,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    lead:
      "Notar que la línea del cabello se mueve hacia atrás, sobre todo en las sienes, genera preocupación —y muchas veces la pregunta directa de si hace falta un trasplante. La respuesta depende de qué tan avanzada esté la situación, y de qué tan pronto se actúe.",
    sections: [
      {
        h: "Por qué aparecen las entradas",
        p: [
          "Las entradas —el retroceso de la línea de implantación en las sienes— pueden tener dos orígenes muy distintos, y diferenciarlos es la base de todo lo demás: una línea frontal madura, que es un cambio normal relacionado con la edad, y la alopecia androgenética, que es un proceso progresivo de origen hormonal y genético."
        ]
      },
      {
        h: "Línea frontal madura vs. alopecia androgenética",
        list: [
          "La línea madura es un retroceso leve y simétrico de la línea de implantación, típico con el paso de los años, que se estabiliza y no sigue avanzando de forma significativa",
          "La alopecia androgenética, en cambio, continúa progresando con el tiempo, suele acompañarse de afinamiento del cabello —no solo retroceso de la línea— y, sin tratamiento, tiende a avanzar hacia patrones más extensos"
        ]
      },
      {
        h: "Miniaturización: la señal clave",
        p: [
          "Lo que distingue a la alopecia androgenética no es solo 'menos cabello', sino cabello cada vez más fino, corto y débil en la zona afectada, un proceso llamado miniaturización folicular. Este cambio se puede identificar con tricoscopía incluso antes de que la pérdida sea evidente a simple vista, lo que permite actuar en una etapa más temprana y, en general, más favorable."
        ]
      },
      {
        h: "Por qué importa el diagnóstico temprano",
        p: [
          "Cuanto antes se identifica que las entradas corresponden a una alopecia androgenética activa, antes se puede intervenir sobre folículos que todavía están miniaturizándose, pero que no han dejado de producir cabello por completo. Una vez que un folículo deja de producir cabello de forma definitiva, ningún tratamiento médico puede 'reactivarlo': solo el trasplante puede restaurar densidad en esa zona, trayendo folículos de otra parte."
        ]
      },
      {
        h: "Tratamientos médicos disponibles",
        p: [
          "Según el grado de avance y el diagnóstico, pueden indicarse herramientas como minoxidil, finasterida o dutasterida bajo supervisión médica, PRP como apoyo, o una combinación de estas, siempre definida de forma individual tras la evaluación."
        ]
      },
      {
        h: "Qué resultados pueden esperarse según la evolución",
        p: [
          "En etapas iniciales, con folículos todavía activos, es razonable esperar frenar la progresión y, en algunos casos, mejorar algo la densidad existente. En etapas más avanzadas, donde ya hay zonas sin folículo funcional, el objetivo realista cambia: frenar lo que queda por perder, más que recuperar lo ya perdido. Por eso el mismo diagnóstico puede tener pronósticos distintos según el momento en que se consulta."
        ]
      },
      {
        h: "Cuándo es difícil recuperar densidad",
        p: [
          "Cuando la miniaturización ya avanzó hasta el punto de que el folículo prácticamente no produce cabello visible, los tratamientos médicos tienen menos margen de acción sobre esa zona puntual. Esto no significa que no sirvan —pueden seguir protegiendo el cabello restante—, pero las expectativas sobre esa zona específica deben ajustarse a la realidad biológica."
        ]
      },
      {
        h: "Cuándo considerar el trasplante capilar",
        p: [
          "El trasplante entra en consideración cuando ya hay zonas sin densidad recuperable con tratamiento médico, y existe una zona donante adecuada para redistribuir folículos. No es la primera opción para unas entradas leves o moderadas con folículos todavía activos, pero sí una herramienta válida cuando el caso lo amerita."
        ]
      },
      {
        h: "Importancia de la tricoscopía y la evaluación",
        p: [
          "La única forma confiable de saber en qué etapa está tu caso —y por lo tanto, qué opciones tienen sentido— es con una evaluación dermatológica que incluya tricoscopía. Intentar estimarlo por cuenta propia, comparando con fotos de otras personas, lleva a conclusiones poco precisas."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Las entradas siempre significan que voy a quedar calvo?",
        a: "No necesariamente. Si corresponden a una línea frontal madura, es un cambio normal que se estabiliza. Si corresponden a alopecia androgenética activa, el pronóstico depende de qué tan temprano se diagnostique y trate."
      },
      {
        q: "¿A qué edad son normales las entradas?",
        a: "La línea frontal madura puede aparecer como cambio normal con los años. La alopecia androgenética, en cambio, puede comenzar en distintas edades, y lo que la define no es la edad sino su patrón progresivo."
      },
      {
        q: "¿El minoxidil puede devolver la línea de implantación a como era antes?",
        a: "Depende de qué tan activos estén todavía los folículos en esa zona. En folículos miniaturizados pero funcionales puede mejorar la densidad; en zonas donde el folículo ya no produce cabello, su margen de acción es limitado."
      },
      {
        q: "¿Necesito un trasplante si tengo entradas leves?",
        a: "No siempre. Muchos casos de entradas leves a moderadas, diagnosticados a tiempo, se manejan bien con tratamiento médico. El trasplante se reserva para cuando ya hay pérdida de densidad que el tratamiento médico no puede recuperar."
      }
    ],
    relatedArticles: [
      "trasplante-capilar-es-la-unica-solucion",
      "minoxidil-para-el-cabello-funciona",
      "dutasterida-y-finasterida-son-seguras",
      "que-tratamiento-capilar-necesito-segun-mi-alopecia"
    ],
    references: [
      { label: "Trichoscopy of androgenetic alopecia: a systematic review. J Clin Med. 2024. PMID 38610726.", url: "https://pubmed.ncbi.nlm.nih.gov/38610726/" },
      { label: "Kanti V, et al. Evidence-based (S3) guideline for the treatment of androgenetic alopecia in women and in men. J Eur Acad Dermatol Venereol. 2018. PMID 29178529.", url: "https://pubmed.ncbi.nlm.nih.gov/29178529/" },
      { label: "Gupta AK, et al. Low-dose oral minoxidil as treatment for non-scarring alopecia: a systematic review. Int J Dermatol. 2020. PMID 32516434.", url: "https://pubmed.ncbi.nlm.nih.gov/32516434/" }
    ]
  },
  {
    slug: "dutasterida-y-finasterida-son-seguras",
    title: "Dutasterida y finasterida: ¿son seguras para tratar la alopecia?",
    excerpt:
      "La finasterida y la dutasterida son dos de los tratamientos con más respaldo científico para la alopecia androgenética. Esto es lo que hay que entender sobre su seguridad.",
    seoTitle: "Dutasterida y Finasterida: ¿Son Seguras? | Dra. Karla Andrade",
    seoDescription:
      "¿La finasterida y la dutasterida son seguras para tratar la alopecia? La Dra. Karla Andrade explica cómo actúan, sus riesgos y por qué la decisión es individual.",
    category: "Tricología",
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    readingMin: 7,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    lead:
      "La finasterida y la dutasterida son dos de los tratamientos con más respaldo científico para la alopecia androgenética, pero también los que más preguntas generan sobre seguridad. Esto es lo que hay que entender sobre cómo actúan, qué riesgos existen y por qué la decisión de usarlos debe ser siempre individual.",
    sections: [
      {
        h: "Qué son y cómo funcionan",
        p: [
          "Ambos medicamentos pertenecen a la familia de los inhibidores de la 5-alfa-reductasa, una enzima que convierte la testosterona en dihidrotestosterona (DHT), la hormona principalmente responsable de la miniaturización folicular en la alopecia androgenética. Al reducir los niveles de DHT, estos medicamentos pueden frenar la progresión de la caída y, en algunos casos, mejorar la densidad existente."
        ]
      },
      {
        h: "El papel de la DHT",
        p: [
          "La DHT actúa sobre folículos genéticamente predispuestos, haciendo que con el tiempo produzcan cabellos cada vez más finos y de ciclo de vida más corto, hasta dejar de ser visibles. No todos los folículos del cuero cabelludo son igual de sensibles a la DHT: por eso la alopecia androgenética respeta un patrón —entradas, coronilla— y no afecta, por ejemplo, la zona donante clásica usada en trasplantes."
        ]
      },
      {
        h: "Diferencias entre finasterida y dutasterida",
        p: [
          "La finasterida inhibe de forma selectiva uno de los dos tipos de la enzima 5-alfa-reductasa. La dutasterida inhibe ambos tipos, lo que en teoría —y en algunos estudios comparativos— se traduce en una reducción más completa de la DHT. Algunas revisiones que comparan ambos medicamentos sugieren una eficacia algo mayor con dutasterida, aunque la evidencia comparativa directa todavía es limitada, con pocos ensayos y tamaños de muestra reducidos."
        ]
      },
      {
        h: "Evidencia sobre eficacia en alopecia androgenética",
        p: [
          "Existen guías y revisiones basadas en ensayos clínicos que respaldan el uso de finasterida en alopecia androgenética masculina, con décadas de uso acumulado. La dutasterida cuenta también con estudios de eficacia, y se usa en algunos países para esta indicación, aunque su aprobación regulatoria específica para alopecia varía según el país."
        ]
      },
      {
        h: "Formulaciones orales y tópicas",
        p: [
          "Ambos medicamentos existen en presentación oral, que es la forma más estudiada. También se han desarrollado formulaciones tópicas, pensadas para actuar de forma más local y reducir la exposición del resto del cuerpo al medicamento, pero la evidencia sobre estas formas tópicas es todavía menor que la disponible para las formas orales, y su disponibilidad y aprobación también varían según el país."
        ]
      },
      {
        h: "Posibles efectos adversos",
        p: [
          "El efecto adverso que más se discute es el impacto sobre la función sexual: algunos pacientes reportan disminución de la libido, disfunción eréctil o alteraciones en la eyaculación. Las revisiones disponibles describen estos efectos como poco frecuentes y, en la mayoría de los casos documentados, reversibles al suspender el medicamento, aunque existen reportes de síntomas persistentes incluso después de suspenderlo, un tema que sigue en discusión en la literatura científica y que debe conversarse abiertamente con el médico antes de iniciar el tratamiento. También se han descrito, con menor frecuencia, cambios en el estado de ánimo."
        ]
      },
      {
        h: "Contraindicaciones, embarazo y precauciones",
        p: [
          "Estos medicamentos están formalmente contraindicados en mujeres embarazadas o que puedan quedar embarazadas, porque pueden afectar el desarrollo genital de un feto masculino. Por esta razón, en mujeres en edad fértil que los requieren por otras indicaciones, se extreman las precauciones anticonceptivas. Tampoco deberían manipularse por mujeres embarazadas, ni siquiera en su forma de comprimido partido o triturado."
        ]
      },
      {
        h: "Diferencias regulatorias según el país",
        p: [
          "La finasterida tiene aprobación regulatoria específica para alopecia androgenética masculina en numerosos países. La dutasterida, en cambio, está aprobada para esta indicación en algunos países y no en otros, donde su uso para alopecia se considera fuera de la indicación oficial del medicamento —uso 'off-label'—, aunque esté respaldado por evidencia clínica. Esto varía según la agencia regulatoria de cada país, por lo que conviene que tu médico te explique la situación específica en Ecuador."
        ]
      },
      {
        h: "Por qué no son adecuados para todos los pacientes",
        p: [
          "Ni la finasterida ni la dutasterida se indican de forma automática a cualquier persona con caída de cabello. La decisión depende del tipo de alopecia, del sexo, de la edad, de antecedentes personales y familiares, de planes reproductivos, y de una conversación honesta sobre el balance entre beneficio esperado y riesgo individual. No existe una indicación única válida para todo el mundo, y no se recomienda buscar pautas de uso fuera de una consulta médica."
        ]
      },
      {
        h: "Una decisión individualizada",
        p: [
          "Por todo lo anterior, iniciar —o no— un tratamiento con finasterida o dutasterida debería ser siempre el resultado de una conversación con tu dermatólogo, que valore tu caso particular, te explique con claridad los beneficios esperables y los riesgos documentados, y defina contigo un seguimiento adecuado en el tiempo."
        ]
      }
    ],
    faqs: [
      {
        q: "¿La finasterida o la dutasterida son seguras?",
        a: "Para la mayoría de los pacientes bien seleccionados, sí, dentro de un perfil de seguridad conocido y documentado. Como todo medicamento, tienen posibles efectos adversos, que deben explicarse con claridad antes de empezar el tratamiento."
      },
      {
        q: "¿Los efectos secundarios sexuales son frecuentes?",
        a: "Las revisiones disponibles los describen como poco frecuentes, aunque existen reportes de casos con síntomas prolongados. Es un tema que debe conversarse abiertamente en la consulta, sin minimizarlo ni exagerarlo."
      },
      {
        q: "¿Puedo tomar finasterida o dutasterida sin receta médica?",
        a: "No deberías. Son medicamentos de prescripción, que requieren evaluación previa, y su indicación y seguimiento deben decidirse con tu médico, nunca por cuenta propia."
      },
      {
        q: "¿Las mujeres pueden usar estos medicamentos?",
        a: "Están formalmente contraindicados en el embarazo. Su uso en mujeres fuera del embarazo es un tema que debe evaluarse de forma individual y especializada, con las precauciones anticonceptivas correspondientes cuando aplique."
      },
      {
        q: "¿Cuál es mejor, finasterida o dutasterida?",
        a: "No hay una respuesta única. Algunos estudios sugieren una eficacia algo mayor con dutasterida, pero la evidencia comparativa directa es limitada, y la elección depende de tu caso, tu país y la indicación de tu médico."
      }
    ],
    relatedArticles: [
      "minoxidil-para-el-cabello-funciona",
      "trasplante-capilar-es-la-unica-solucion",
      "que-tratamiento-capilar-necesito-segun-mi-alopecia"
    ],
    references: [
      { label: "Rossi A, et al. Guidelines on the use of finasteride in androgenetic alopecia. 2016. PMID 26924401.", url: "https://pubmed.ncbi.nlm.nih.gov/26924401/" },
      { label: "Zhou Z, et al. The efficacy and safety of dutasteride compared with finasteride in treating men with androgenetic alopecia: a systematic review and meta-analysis. Clin Interv Aging. 2019. PMID 30863034.", url: "https://pubmed.ncbi.nlm.nih.gov/30863034/" },
      { label: "Kanti V, et al. Evidence-based (S3) guideline for the treatment of androgenetic alopecia in women and in men. J Eur Acad Dermatol Venereol. 2018. PMID 29178529.", url: "https://pubmed.ncbi.nlm.nih.gov/29178529/" }
    ]
  },
  {
    slug: "que-tratamiento-capilar-necesito-segun-mi-alopecia",
    title: "¿Qué tratamiento capilar necesito según mi tipo de alopecia?",
    excerpt:
      "No toda caída de cabello tiene la misma causa, ni el mismo tratamiento. Esta guía reúne los tipos más frecuentes de alopecia y qué caminos de tratamiento existen para cada uno.",
    seoTitle: "Tratamiento Capilar Según tu Tipo de Alopecia | Dra. Karla Andrade",
    seoDescription:
      "¿Qué tratamiento capilar necesitas según tu tipo de alopecia? Guía completa de la Dra. Karla Andrade, dermatóloga en Machala, para identificar la causa y tratarla.",
    category: "Tricología",
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    readingMin: 8,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    lead:
      "Una de las preguntas más frecuentes en consulta es, en el fondo, muy simple: '¿qué tratamiento necesito?'. Pero la respuesta no es simple, porque depende de algo que se suele pasar por alto: no toda caída de cabello tiene la misma causa. Esta guía reúne, en un solo lugar, los tipos más frecuentes de alopecia y qué caminos de tratamiento existen para cada uno.",
    sections: [
      {
        h: "Por qué no toda caída de cabello es igual",
        p: [
          "'Se me cae el cabello' es una frase que agrupa condiciones muy distintas entre sí: unas son pasajeras, otras progresivas; unas afectan toda la cabeza por igual, otras solo ciertas zonas; unas tienen tratamiento médico bien establecido, otras requieren primero descartar una causa de fondo. Tratar 'a ciegas', sin saber cuál de estas categorías aplica, es la razón más común por la que alguien prueba varios productos sin resultado."
        ]
      },
      {
        h: "Alopecia androgenética",
        p: [
          "Es la causa más frecuente de caída progresiva, de origen hormonal y genético. En hombres sigue un patrón de entradas y coronilla; en mujeres, más frecuentemente un afinamiento difuso en la zona central del cuero cabelludo. Los tratamientos con más respaldo incluyen minoxidil, finasterida o dutasterida bajo indicación médica, PRP como apoyo, y, en casos seleccionados, el trasplante capilar."
        ]
      },
      {
        h: "Efluvio telógeno",
        p: [
          "Es una caída difusa, que aparece semanas después de un evento como un parto, una enfermedad, una cirugía, una dieta muy estricta o estrés intenso. Suele ser pasajera y resolverse sola en varios meses, una vez identificado y manejado el desencadenante. No suele requerir tratamiento farmacológico específico, más allá de abordar la causa de fondo."
        ]
      },
      {
        h: "Alopecia areata",
        p: [
          "Se presenta como pérdida de cabello en parches, generalmente redondeados, de origen autoinmune: el sistema inmune ataca por error a los folículos. Su manejo es distinto al de la alopecia androgenética, puede incluir tratamientos específicos indicados por dermatología, y el curso varía mucho de una persona a otra, por lo que el seguimiento especializado es clave."
        ]
      },
      {
        h: "Alopecias cicatriciales",
        p: [
          "Son un grupo menos frecuente pero importante de reconocer a tiempo, porque el proceso inflamatorio que las produce puede destruir el folículo de forma permanente, reemplazándolo por tejido cicatricial. Algunas, como la alopecia por tracción —relacionada con peinados muy tirantes y sostenidos en el tiempo—, empiezan siendo reversibles y solo se vuelven cicatriciales si la causa continúa sin corregirse; por eso actuar a tiempo cambia mucho el pronóstico. A diferencia de otras alopecias, aquí el diagnóstico y tratamiento tempranos son determinantes: una vez que el folículo se pierde por cicatrización, ningún tratamiento médico puede recuperarlo en esa zona."
        ]
      },
      {
        h: "Caída asociada a enfermedades o deficiencias nutricionales",
        p: [
          "La caída de cabello también puede ser reflejo de algo que ocurre en el resto del cuerpo: alteraciones de tiroides, deficiencia de hierro, algunas enfermedades autoinmunes o crónicas, y ciertos medicamentos, entre otras causas. En estos casos, tratar el cabello sin identificar ni corregir la causa de fondo no suele dar resultado sostenido."
        ]
      },
      {
        h: "Por qué importa la historia clínica y la tricoscopía",
        p: [
          "El primer paso para encontrar el camino correcto no es un producto, sino una buena historia clínica —cuándo empezó, cómo evolucionó, qué antecedentes hay— combinada con tricoscopía, el examen que permite ver de cerca el folículo y orientar el diagnóstico entre estas distintas categorías."
        ]
      },
      {
        h: "Cuándo pueden necesitarse análisis de laboratorio",
        p: [
          "Cuando la historia clínica o el examen sugieren una causa sistémica —por ejemplo, alteraciones de tiroides o ferropenia—, el dermatólogo puede solicitar análisis de sangre dirigidos para confirmarlo y orientar el tratamiento, en vez de asumir una causa sin evidencia."
        ]
      },
      {
        h: "Tratamientos según el diagnóstico",
        p: [
          "Una vez identificada la causa, el plan de tratamiento se construye a su medida: puede incluir minoxidil, finasterida o dutasterida, PRP, mesoterapia capilar, el manejo de una condición de base, o una combinación de estas herramientas. No existe un protocolo único válido para todos los casos: lo que funciona depende del diagnóstico."
        ]
      },
      {
        h: "Qué opciones existen cuando el folículo todavía es viable",
        p: [
          "Mientras el folículo conserve actividad, aunque esté miniaturizado o debilitado, existen herramientas médicas que pueden ayudar a frenar su deterioro o mejorar su funcionamiento. El objetivo, en estos casos, es proteger lo que todavía está presente, además de buscar mejoría donde sea posible."
        ]
      },
      {
        h: "Por qué la evaluación temprana mejora el pronóstico",
        p: [
          "En casi todas las categorías descritas, el momento en que se consulta influye en las opciones disponibles después. Cuanto antes se identifica la causa —sobre todo en alopecias con potencial progresivo o cicatricial—, más margen de acción médica existe. Postergar la consulta no detiene el proceso: solo reduce las opciones que quedarán disponibles más adelante."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Cómo sé a qué categoría pertenece mi caída de cabello?",
        a: "No se puede determinar con certeza por cuenta propia ni por fotos. Se necesita una evaluación clínica, generalmente con tricoscopía, para diferenciar entre estas categorías."
      },
      {
        q: "¿Puedo tener más de un tipo de alopecia a la vez?",
        a: "Sí, es posible, por ejemplo tener una alopecia androgenética de base y, sobre ella, un episodio de efluvio telógeno desencadenado por estrés. Por eso el diagnóstico completo es tan importante."
      },
      {
        q: "¿Todos los tipos de alopecia tienen tratamiento?",
        a: "La mayoría tiene alguna opción de manejo, aunque los objetivos varían: en algunas se busca revertir la caída, en otras frenar su progresión, y en otras resolver la causa de fondo para que el cabello se recupere solo."
      },
      {
        q: "¿Cuándo debería consultar por primera vez?",
        a: "Apenas notes un cambio sostenido: más caída de lo habitual durante varias semanas, una zona menos poblada, o cualquier cambio visible en el cuero cabelludo. No hace falta esperar a que sea muy evidente."
      },
      {
        q: "¿Los tratamientos caseros pueden reemplazar esta evaluación?",
        a: "No. Pueden sumar al cuidado diario, pero no identifican la causa ni la tratan. El diagnóstico es lo que define qué tratamiento tiene sentido en cada caso."
      }
    ],
    relatedArticles: [
      "trasplante-capilar-es-la-unica-solucion",
      "minoxidil-para-el-cabello-funciona",
      "prp-capilar-tratamiento-cientifico-o-moda",
      "champus-anticaida-funcionan",
      "aceite-de-romero-para-el-cabello",
      "tengo-entradas-puedo-recuperar-cabello-sin-trasplante",
      "dutasterida-y-finasterida-son-seguras"
    ],
    references: [
      { label: "Asghar F, et al. Telogen effluvium: a review of the literature. Cureus. 2020. PMID 32607303.", url: "https://pubmed.ncbi.nlm.nih.gov/32607303/" },
      { label: "Billero V, Miteva M. Traction alopecia: the root of the problem. Clin Cosmet Investig Dermatol. 2018. PMID 29670386.", url: "https://pubmed.ncbi.nlm.nih.gov/29670386/" },
      { label: "Trichoscopy of androgenetic alopecia: a systematic review. J Clin Med. 2024. PMID 38610726.", url: "https://pubmed.ncbi.nlm.nih.gov/38610726/" },
      { label: "Kanti V, et al. Evidence-based (S3) guideline for the treatment of androgenetic alopecia in women and in men. J Eur Acad Dermatol Venereol. 2018. PMID 29178529.", url: "https://pubmed.ncbi.nlm.nih.gov/29178529/" }
    ]
  },
  {
    slug: "es-segura-la-isotretinoina-para-el-acne",
    title: "¿La isotretinoína es segura para tratar el acné?",
    excerpt:
      "La isotretinoína es uno de los tratamientos más efectivos para el acné, y también uno de los que más preguntas genera. Esto es lo que hay que entender sobre su balance entre beneficios y riesgos.",
    seoTitle: "¿Es Segura la Isotretinoína? | Dra. Karla Andrade, Machala",
    seoDescription:
      "¿Es segura la isotretinoína para el acné? La Dra. Karla Andrade, dermatóloga en Machala, explica indicaciones, contraindicaciones y seguimiento médico.",
    category: "Dermatología clínica",
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    readingMin: 7,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "La isotretinoína es uno de los tratamientos más efectivos que existen para el acné, y también uno de los que más preguntas y temores genera. Tiene un perfil de seguridad bien estudiado después de décadas de uso, pero no es un medicamento neutro: requiere indicación médica, evaluación previa y seguimiento. Esto es lo que hay que entender para evaluar su balance real entre beneficios y riesgos.",
    sections: [
      {
        h: "Qué es y cómo actúa",
        p: [
          "La isotretinoína es un derivado oral de la vitamina A, de la familia de los retinoides. A diferencia de otros tratamientos para el acné, que actúan sobre uno o dos factores de la enfermedad, la isotretinoína actúa sobre varios a la vez: reduce de forma marcada la producción de grasa (sebo), normaliza la manera en que se descaman las células dentro del folículo, reduce la inflamación y disminuye la bacteria asociada al acné. Por esta acción múltiple, es el tratamiento con mayor capacidad de lograr una remisión prolongada del acné, algo que la distingue de la mayoría de los demás tratamientos disponibles."
        ]
      },
      {
        h: "Para quién está indicada",
        p: [
          "Las guías de dermatología la recomiendan con fuerza para el acné severo, el acné que deja o amenaza con dejar cicatrices, el que tiene un impacto psicológico significativo, o el que no respondió a los tratamientos tópicos y orales habituales. No es, ni debería ser, la primera opción para un acné leve, que generalmente responde bien a tratamientos más simples."
        ]
      },
      {
        h: "Qué tan efectiva es",
        p: [
          "Es, hasta ahora, el tratamiento con mayor capacidad de producir una remisión prolongada del acné en una proporción importante de pacientes. Eso no significa que sea garantía de cura permanente para todos: una parte de los pacientes puede experimentar recaídas con el tiempo y necesitar un nuevo ciclo de tratamiento, algo que depende de varios factores individuales."
        ]
      },
      {
        h: "Contraindicaciones principales",
        list: [
          "Embarazo, de forma absoluta: es la contraindicación más importante del medicamento, por su alto riesgo de malformaciones fetales",
          "Lactancia",
          "Hipersensibilidad conocida al medicamento",
          "Enfermedad hepática significativa no controlada",
          "Niveles de grasas en sangre (lípidos) muy elevados y no controlados",
          "Uso simultáneo con antibióticos del grupo de las tetraciclinas, por el riesgo de hipertensión intracraneal"
        ]
      },
      {
        h: "Efectos adversos más frecuentes",
        p: [
          "El más común, por lejos, es la sequedad de piel, labios y mucosas, un efecto esperado relacionado con su mecanismo de acción. Existen también otros efectos menos frecuentes, algunos de ellos motivo de seguimiento específico, que desarrollamos con más detalle en un artículo dedicado a este tema."
        ]
      },
      {
        h: "Seguimiento durante el tratamiento",
        p: [
          "El tratamiento se acompaña de controles clínicos periódicos y, según cada caso, de pruebas de laboratorio. En personas que puedan quedar embarazadas, el seguimiento incluye además pruebas de embarazo y la confirmación de un método anticonceptivo eficaz durante todo el tratamiento. La frecuencia exacta de estos controles varía según las recomendaciones regulatorias de cada país y el criterio médico individual."
        ]
      },
      {
        h: "Por qué no debe iniciarse ni manejarse por cuenta propia",
        p: [
          "Precisamente porque es un tratamiento potente, con contraindicaciones claras y necesidad de seguimiento, la isotretinoína no debería iniciarse, ajustarse ni suspenderse por cuenta propia. Tomarla sin evaluación médica, o usar la de otra persona, expone a riesgos que el seguimiento médico está diseñado justamente para prevenir."
        ]
      },
      {
        h: "El balance real entre beneficios y riesgos",
        p: [
          "Con una indicación correcta, una evaluación previa adecuada y un seguimiento responsable, la isotretinoína tiene, para el paciente correcto, un balance favorable entre beneficio y riesgo: puede resolver un acné que afecta profundamente la calidad de vida y prevenir cicatrices permanentes. Ese balance depende, sin embargo, de que el tratamiento se maneje con el cuidado que requiere, no de que se tome a la ligera.",
          "¿Tienes acné persistente o dudas sobre el uso de isotretinoína? Una valoración dermatológica permite determinar qué tratamiento es adecuado y seguro para tu caso."
        ]
      }
    ],
    faqs: [
      {
        q: "¿La isotretinoína es un tratamiento peligroso?",
        a: "No, cuando se indica y se sigue correctamente. Como cualquier medicamento potente, tiene riesgos reales, pero su perfil de seguridad está bien documentado después de décadas de uso bajo supervisión médica."
      },
      {
        q: "¿Cualquier persona con acné puede tomar isotretinoína?",
        a: "No. Se indica según el tipo y la gravedad del acné, y requiere descartar antes las contraindicaciones de cada caso, como el embarazo o ciertas condiciones hepáticas."
      },
      {
        q: "¿Qué tan grave debe ser mi acné para necesitarla?",
        a: "No es solo una cuestión de qué tan intenso se ve: también se considera si hay riesgo de cicatrices, si hay impacto psicológico importante, o si otros tratamientos ya fallaron. Eso lo define la evaluación dermatológica."
      },
      {
        q: "¿Necesito análisis antes de empezar?",
        a: "En general sí, aunque el esquema exacto varía según cada caso. Lo desarrollamos con detalle en nuestro artículo sobre los exámenes antes y durante el tratamiento."
      }
    ],
    relatedArticles: [
      "puedo-quedar-embarazada-tomando-isotretinoina",
      "puedo-tomar-isotretinoina-por-mi-cuenta",
      "que-examenes-necesito-antes-y-durante-isotretinoina",
      "efectos-secundarios-de-la-isotretinoina",
      "la-isotretinoina-causa-depresion-o-ansiedad",
      "la-isotretinoina-es-solo-para-acne-severo"
    ],
    references: [
      { label: "Reynolds RV, et al. Guidelines of care for the management of acne vulgaris. J Am Acad Dermatol. 2024. PMID 38300170.", url: "https://pubmed.ncbi.nlm.nih.gov/38300170/" },
      { label: "European Medicines Agency. Retinoid-containing medicinal products — referral (pregnancy prevention programme), 2018.", url: "https://www.ema.europa.eu/en/medicines/human/referrals/retinoid-containing-medicinal-products" },
      { label: "Lee YH, et al. Laboratory monitoring during isotretinoin therapy for acne: a systematic review and meta-analysis. JAMA Dermatol. 2015.", url: "https://doi.org/10.1001/jamadermatol.2015.3091" }
    ]
  },
  {
    slug: "puedo-quedar-embarazada-tomando-isotretinoina",
    title: "¿Puedo quedar embarazada si estoy tomando isotretinoína?",
    excerpt:
      "El embarazo durante el tratamiento con isotretinoína está absolutamente contraindicado. Esto es lo que hay que entender sobre la prevención del embarazo y qué hacer ante una sospecha.",
    seoTitle: "Isotretinoína y Embarazo: Lo que Debes Saber | Dra. Karla Andrade",
    seoDescription:
      "¿Puedo quedar embarazada tomando isotretinoína? La Dra. Karla Andrade explica por qué está absolutamente contraindicada y cómo se previene durante el tratamiento.",
    category: "Dermatología clínica",
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Esta es, sin exagerar, la pregunta de seguridad más importante sobre la isotretinoína. La respuesta es clara: el embarazo durante el tratamiento está absolutamente contraindicado, por un riesgo alto y bien documentado de malformaciones graves y pérdida del embarazo. Esto es lo que hay que entender, y qué hacer si existe la posibilidad de un embarazo.",
    sections: [
      {
        h: "Por qué está absolutamente contraindicado",
        p: [
          "La isotretinoína es un teratógeno conocido, es decir, una sustancia que puede causar malformaciones graves en un feto en desarrollo si se usa durante el embarazo. La exposición se asocia a un riesgo alto de malformaciones craneofaciales, cardíacas y del sistema nervioso central, además de un riesgo elevado de aborto espontáneo. Por esta razón, no existe una dosis ni un momento del embarazo considerado seguro: el riesgo aplica a todo el tratamiento."
        ]
      },
      {
        h: "Prevención del embarazo durante el tratamiento",
        p: [
          "Por este riesgo, las personas que pueden quedar embarazadas deben usar un método anticonceptivo eficaz durante todo el tratamiento, confirmado y supervisado por el médico. En distintos países existen programas regulatorios específicos de prevención del embarazo asociados a la isotretinoína —como el programa iPLEDGE en Estados Unidos o el programa de prevención de embarazo de la Agencia Europea de Medicamentos—, que establecen pruebas de embarazo antes de empezar, durante el tratamiento y después de finalizarlo, junto con la confirmación del método anticonceptivo."
        ]
      },
      {
        h: "Durante cuánto tiempo debe evitarse el embarazo",
        p: [
          "El embarazo debe evitarse durante todo el tratamiento y durante al menos un mes después de suspender la isotretinoína, el tiempo que se considera necesario para que el medicamento se elimine del organismo. Tu médico te indicará el plazo exacto recomendado según el contexto regulatorio vigente."
        ]
      },
      {
        h: "Qué hacer ante la sospecha de un embarazo",
        list: [
          "Suspender la isotretinoína de inmediato, sin esperar a confirmar el resultado",
          "Contactar a tu médico con urgencia, el mismo día si es posible",
          "No continuar ni reiniciar el tratamiento bajo ninguna circunstancia hasta que se aclare la situación",
          "Acudir a control con un especialista en caso de confirmarse el embarazo, para una evaluación y consejería adecuadas"
        ]
      },
      {
        h: "Por qué este punto no es negociable",
        p: [
          "Entendemos que puede sonar como una advertencia extrema, pero no lo es: el riesgo de malformaciones graves con exposición durante el embarazo está bien documentado desde hace décadas, y es la razón por la que existen protocolos tan estrictos alrededor de este medicamento en todo el mundo. Ningún beneficio sobre el acné justifica tomar el riesgo de un embarazo no protegido durante el tratamiento."
        ]
      },
      {
        h: "Una conversación que debe darse sin incomodidad",
        p: [
          "Hablar con claridad sobre anticoncepción, planes reproductivos y la posibilidad de un embarazo es parte normal de la consulta antes de indicar isotretinoína, no un tema incómodo que evitar. Esa conversación es, de hecho, la que hace que el tratamiento pueda usarse de forma segura."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Qué tan alto es el riesgo si me expongo durante el embarazo?",
        a: "Es un riesgo alto y bien documentado, por eso la contraindicación es absoluta, no relativa. No hay una dosis ni un momento del embarazo considerado seguro."
      },
      {
        q: "¿Puedo tomar isotretinoína si estoy planeando un embarazo próximamente?",
        a: "No mientras lo estés planeando activamente. El tratamiento y el período de espera posterior deben completarse antes de buscar un embarazo."
      },
      {
        q: "¿Qué anticonceptivo debo usar durante el tratamiento?",
        a: "Eso se define junto a tu médico, considerando eficacia y tu situación particular. Lo importante es que sea un método confiable y que lo mantengas durante todo el tratamiento."
      },
      {
        q: "Si sospecho un embarazo, ¿puedo esperar al próximo control para avisar?",
        a: "No. Debes suspender el medicamento de inmediato y contactar a tu médico con urgencia, sin esperar a la próxima cita programada."
      }
    ],
    relatedArticles: [
      "es-segura-la-isotretinoina-para-el-acne",
      "que-examenes-necesito-antes-y-durante-isotretinoina",
      "puedo-tomar-isotretinoina-por-mi-cuenta"
    ],
    references: [
      { label: "European Medicines Agency. Retinoid-containing medicinal products — referral (pregnancy prevention programme), 2018.", url: "https://www.ema.europa.eu/en/medicines/human/referrals/retinoid-containing-medicinal-products" },
      { label: "U.S. Food and Drug Administration. iPLEDGE REMS Program for isotretinoin.", url: "https://www.ipledgeprogram.com" }
    ]
  },
  {
    slug: "puedo-tomar-isotretinoina-por-mi-cuenta",
    title: "¿Puedo tomar isotretinoína por mi cuenta y sin exámenes?",
    excerpt:
      "Conseguir isotretinoína sin receta o usar la de otra persona es más riesgoso de lo que parece. Esto es lo que se pierde al saltarse la evaluación médica y los controles.",
    seoTitle: "Isotretinoína sin Receta: Los Riesgos | Dra. Karla Andrade",
    seoDescription:
      "¿Puedo tomar isotretinoína por mi cuenta? La Dra. Karla Andrade explica los riesgos de automedicarse sin supervisión médica ni exámenes previos.",
    category: "Dermatología clínica",
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Por su buena fama como tratamiento efectivo, algunas personas buscan conseguir isotretinoína sin receta, o usar la que le sobró a un familiar o amigo. Esto es, sin rodeos, una mala idea, y aquí explicamos por qué.",
    sections: [
      {
        h: "Por qué automedicarse es un riesgo real",
        p: [
          "La isotretinoína no es un medicamento de uso libre. Requiere una evaluación previa que confirme que es el tratamiento adecuado para tu tipo de acné, que descarte contraindicaciones, y que establezca una indicación acorde a tu caso particular. Tomarla sin esa evaluación significa, en la práctica, exponerte a sus riesgos sin ninguna de las protecciones que normalmente los acompañan."
        ]
      },
      {
        h: "Usar la dosis de otra persona",
        p: [
          "Cada tratamiento con isotretinoína se ajusta a la persona que lo recibe: su peso, el tipo y la gravedad de su acné, su historia médica y sus antecedentes de laboratorio. Lo que funcionó —o fue seguro— para otra persona no dice nada sobre si es adecuado para ti. Además, compartir o reutilizar un tratamiento prescrito a otra persona puede implicar tomarlo sin confirmar un punto crítico: que no exista un embarazo en curso o en riesgo."
        ]
      },
      {
        h: "Comprarla sin supervisión médica",
        p: [
          "Conseguir isotretinoína fuera de un canal médico formal —por internet, sin receta, o de origen no verificado— suma riesgos adicionales: no hay garantía de que el producto sea auténtico, de que la indicación esté correctamente ajustada a tu caso, ni de que exista alguien evaluando tu respuesta y tus efectos adversos durante el tratamiento. Frente a un efecto adverso serio, además, no hay un médico ya al tanto de tu caso para actuar con rapidez."
        ]
      },
      {
        h: "Qué se pierde al omitir los controles clínicos y de laboratorio",
        p: [
          "El seguimiento médico durante el tratamiento no es un trámite burocrático: permite detectar a tiempo efectos adversos que requieren ajustar o suspender el tratamiento, confirmar que no haya un embarazo en curso en personas que puedan quedar embarazadas, y adaptar el plan según cómo evoluciona cada caso. Omitir estos controles no hace que esos riesgos desaparezcan: solo hace que, si aparecen, nadie los esté vigilando."
        ]
      },
      {
        h: "Por qué la evaluación inicial importa tanto como el seguimiento",
        p: [
          "Antes de iniciar el tratamiento, la evaluación médica confirma que la isotretinoína es la opción correcta para tu caso —y no, por ejemplo, un acné que respondería igual de bien a un tratamiento más simple y con menos implicaciones— y descarta contraindicaciones que, de pasarse por alto, pueden tener consecuencias serias."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Es tan grave tomarla sin supervisión si solo es por un tiempo corto?",
        a: "Sí. El riesgo no depende solo de la duración, sino de contraindicaciones no evaluadas —como un posible embarazo— y de la falta de seguimiento ante efectos adversos, que pueden aparecer en cualquier momento del tratamiento."
      },
      {
        q: "Mi conocido tomó isotretinoína y le fue bien, ¿puedo usar lo que le sobró?",
        a: "No. La indicación y la seguridad de un tratamiento se definen para esa persona en particular, no para quien decida usarlo después."
      },
      {
        q: "¿Por qué no puedo comprarla directamente sin receta?",
        a: "Porque requiere una evaluación médica previa que confirme que es el tratamiento adecuado y que no existan contraindicaciones, como el embarazo o ciertas condiciones de salud."
      },
      {
        q: "Si ya tomé isotretinoína antes con receta, ¿puedo repetir el tratamiento por mi cuenta si el acné vuelve?",
        a: "No. Un nuevo ciclo de tratamiento también requiere evaluación médica, incluso si ya lo usaste antes."
      }
    ],
    relatedArticles: [
      "es-segura-la-isotretinoina-para-el-acne",
      "puedo-quedar-embarazada-tomando-isotretinoina",
      "que-examenes-necesito-antes-y-durante-isotretinoina"
    ],
    references: [
      { label: "Reynolds RV, et al. Guidelines of care for the management of acne vulgaris. J Am Acad Dermatol. 2024. PMID 38300170.", url: "https://pubmed.ncbi.nlm.nih.gov/38300170/" },
      { label: "European Medicines Agency. Retinoid-containing medicinal products — referral (pregnancy prevention programme), 2018.", url: "https://www.ema.europa.eu/en/medicines/human/referrals/retinoid-containing-medicinal-products" }
    ]
  },
  {
    slug: "que-examenes-necesito-antes-y-durante-isotretinoina",
    title: "¿Qué exámenes necesito antes y durante la isotretinoína?",
    excerpt:
      "Antes de empezar un tratamiento con isotretinoína, y durante él, se realizan evaluaciones clínicas y análisis de laboratorio. Esto es lo que suele incluir ese seguimiento.",
    seoTitle: "Exámenes para Isotretinoína en Machala | Dra. Karla Andrade",
    seoDescription:
      "¿Qué exámenes necesitas antes y durante la isotretinoína? La Dra. Karla Andrade, dermatóloga en Machala, explica la evaluación clínica y de laboratorio.",
    category: "Dermatología clínica",
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Antes de empezar un tratamiento con isotretinoína, y durante él, se realizan evaluaciones clínicas y, según el caso, análisis de laboratorio. Esto es lo que suele incluir ese seguimiento, y por qué no es exactamente igual para todos los pacientes.",
    sections: [
      {
        h: "La evaluación clínica, el primer paso",
        p: [
          "Antes de cualquier análisis, la evaluación clínica es lo que define si la isotretinoína es el tratamiento adecuado: el tipo y la gravedad del acné, el historial médico, los medicamentos que ya tomas, y —en personas que puedan quedar embarazadas— la situación reproductiva y anticonceptiva actual."
        ]
      },
      {
        h: "Pruebas de embarazo, cuando corresponden",
        p: [
          "En personas que pueden quedar embarazadas, se realiza una prueba de embarazo antes de iniciar el tratamiento, y se repite de forma periódica durante todo el tratamiento, como parte de los protocolos de prevención del embarazo asociados a este medicamento. Este punto lo desarrollamos con más detalle en nuestro artículo sobre embarazo e isotretinoína."
        ]
      },
      {
        h: "Perfil lipídico",
        p: [
          "La isotretinoína puede elevar los niveles de triglicéridos y colesterol en algunas personas, por lo que se suele evaluar el perfil de lípidos antes de empezar y en algún punto durante el tratamiento. La frecuencia de estos controles ha sido objeto de revisión en los últimos años: varios estudios sugieren que, en pacientes sanos y sin factores de riesgo, los controles muy frecuentes detectan pocas alteraciones relevantes, aunque el esquema final siempre lo define tu médico según tu caso."
        ]
      },
      {
        h: "Pruebas de función hepática",
        p: [
          "De forma similar, se evalúa la función del hígado antes de iniciar el tratamiento y, según el criterio médico, en algún momento posterior, porque el medicamento se metaboliza en el hígado y puede, en algunos casos, alterar sus enzimas."
        ]
      },
      {
        h: "La frecuencia depende del riesgo individual",
        p: [
          "No todos los pacientes necesitan exactamente el mismo esquema de análisis. Factores como antecedentes de alteraciones de lípidos o del hígado, el uso de otros medicamentos, o hallazgos en los primeros controles pueden hacer que tu médico pida análisis con más frecuencia que a otra persona. Las recomendaciones también varían algo según el país y la guía que siga cada médico, por lo que no existe un esquema único válido para todo el mundo."
        ]
      },
      {
        h: "Qué no reemplaza este seguimiento",
        p: [
          "Los análisis de laboratorio acompañan, pero no reemplazan, la evaluación clínica periódica: cómo te sientes, qué síntomas notas, y cualquier cambio físico o emocional durante el tratamiento son información tan relevante como un resultado de laboratorio, y deben comentarse en cada control."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Necesito análisis de sangre todos los meses?",
        a: "No necesariamente. La frecuencia depende de tu caso particular y del criterio de tu médico; la evidencia reciente sugiere que, en muchos pacientes sanos, no hace falta un control mensual de todos los parámetros."
      },
      {
        q: "¿Qué pasa si mis análisis salen alterados?",
        a: "Depende de qué tan alterados estén y de qué parámetro se trate. Puede implicar repetir el análisis, ajustar el tratamiento, o en algunos casos suspenderlo; siempre es tu médico quien decide según el resultado completo."
      },
      {
        q: "¿Los hombres también necesitan pruebas de embarazo?",
        a: "No, las pruebas de embarazo aplican a personas que pueden quedar embarazadas. El resto del seguimiento clínico y de laboratorio aplica, en general, a todos los pacientes."
      },
      {
        q: "¿Puedo saltarme un control de laboratorio si me siento bien?",
        a: "No deberías decidirlo por tu cuenta. Comenta cualquier inquietud con tu médico, que es quien evalúa si ese control en particular es necesario para tu seguimiento."
      }
    ],
    relatedArticles: [
      "es-segura-la-isotretinoina-para-el-acne",
      "puedo-quedar-embarazada-tomando-isotretinoina",
      "puedo-tomar-alcohol-con-isotretinoina"
    ],
    references: [
      { label: "Lee YH, et al. Laboratory monitoring during isotretinoin therapy for acne: a systematic review and meta-analysis. JAMA Dermatol. 2015.", url: "https://doi.org/10.1001/jamadermatol.2015.3091" },
      { label: "European Medicines Agency. Retinoid-containing medicinal products — referral (pregnancy prevention programme), 2018.", url: "https://www.ema.europa.eu/en/medicines/human/referrals/retinoid-containing-medicinal-products" },
      { label: "Reynolds RV, et al. Guidelines of care for the management of acne vulgaris. J Am Acad Dermatol. 2024. PMID 38300170.", url: "https://pubmed.ncbi.nlm.nih.gov/38300170/" }
    ]
  },
  {
    slug: "la-isotretinoina-cura-el-acne-para-siempre",
    title: "¿La isotretinoína cura definitivamente el acné?",
    excerpt:
      "Es común escuchar que la isotretinoína cura el acné para siempre. La realidad es más matizada: esto es lo que realmente se puede esperar, y qué pasa si el acné recae.",
    seoTitle: "¿La Isotretinoína Cura el Acné para Siempre? | Dra. Karla Andrade",
    seoDescription:
      "¿La isotretinoína cura definitivamente el acné? La Dra. Karla Andrade explica resultados reales, recaídas y tratamientos de mantenimiento.",
    category: "Dermatología clínica",
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Es común escuchar que la isotretinoína 'cura' el acné para siempre. La realidad es más matizada: es el tratamiento con mayor capacidad de lograr una remisión prolongada, pero no es una garantía de cura permanente para todos los pacientes. Esto es lo que realmente se puede esperar.",
    sections: [
      {
        h: "Qué tan buenos son los resultados",
        p: [
          "Después de un ciclo completo de tratamiento, una proporción importante de pacientes logra una mejoría marcada y sostenida del acné, en muchos casos sin necesitar tratamiento adicional por años. Es, en ese sentido, el tratamiento con el mayor potencial de modificar el curso de la enfermedad, no solo de controlarla mientras se usa, a diferencia de la mayoría de los tratamientos tópicos u orales disponibles."
        ]
      },
      {
        h: "Por qué no se habla de 'cura garantizada'",
        p: [
          "Pese a esos buenos resultados, una parte de los pacientes experimenta una recaída del acné en los años posteriores al tratamiento, en distintos grados de intensidad. Por eso, en dermatología, se prefiere hablar de remisión prolongada o de alta probabilidad de mejoría duradera, más que de una cura definitiva garantizada para cada persona."
        ]
      },
      {
        h: "Factores asociados a mayor probabilidad de recaída",
        list: [
          "Edad de inicio del acné más temprana",
          "Acné con un componente hormonal importante, por ejemplo en el contexto de ciertas condiciones endocrinas",
          "Sexo femenino, según reportan algunos estudios, aunque la razón exacta no está del todo establecida",
          "Interrumpir el tratamiento antes de completar el ciclo indicado por el médico"
        ]
      },
      {
        h: "El rol de la dosis acumulada total",
        p: [
          "Varios estudios han analizado si una dosis acumulada total más alta a lo largo del tratamiento se asocia con menos recaídas, con resultados que, en conjunto, apuntan en esa dirección, aunque no de forma uniforme en todos los estudios, y sin que exista un umbral único aceptado por todos los especialistas. Esto es parte de lo que tu médico considera al definir la duración de tu tratamiento, y no algo que deba decidirse por cuenta propia."
        ]
      },
      {
        h: "Qué pasa si el acné recae",
        p: [
          "Si el acné reaparece después de un primer ciclo, eso no significa que el tratamiento haya fallado ni que no vaya a funcionar de nuevo: muchos pacientes responden bien a un segundo ciclo, evaluado nuevamente con el mismo cuidado que el primero. En otros casos, un acné residual más leve puede manejarse con tratamientos tópicos de mantenimiento, sin necesidad de repetir la isotretinoína."
        ]
      },
      {
        h: "Expectativas realistas",
        p: [
          "Lo más honesto que se puede decir es esto: la isotretinoína ofrece la mejor probabilidad disponible de una mejoría prolongada del acné, pero no una garantía absoluta para cada caso individual. Esa diferencia importa, porque entender esto desde el inicio ayuda a tener expectativas realistas y a no interpretar una eventual recaída como un fracaso personal o del tratamiento."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Qué porcentaje de pacientes recae después del tratamiento?",
        a: "Varía según los estudios y los factores de cada paciente, por lo que no existe una cifra única aplicable a todos los casos. Lo que sí es consistente es que la mayoría experimenta una mejoría marcada y duradera."
      },
      {
        q: "Si recae, ¿significa que el tratamiento no funcionó?",
        a: "No necesariamente. Muchos pacientes que recaen responden bien a un segundo ciclo, y algunos recaen con una forma más leve de acné, manejable con otros tratamientos."
      },
      {
        q: "¿Puedo acortar el tratamiento si ya veo mejoría?",
        a: "No deberías decidirlo por tu cuenta. Completar el ciclo indicado por tu médico se relaciona con una menor probabilidad de recaída en varios estudios."
      },
      {
        q: "¿Hay alguna forma de saber si yo específicamente voy a recaer?",
        a: "No con certeza. Existen factores asociados a mayor riesgo de recaída, pero no permiten predecir con exactitud qué pasará en un paciente individual."
      }
    ],
    relatedArticles: [
      "es-segura-la-isotretinoina-para-el-acne",
      "la-isotretinoina-es-solo-para-acne-severo",
      "el-acne-deja-cicatrices-se-pueden-eliminar"
    ],
    references: [
      { label: "Layton AM, Knaggs H, Taylor J, Cunliffe WJ. Isotretinoin for acne vulgaris — 10 years later: a safe and successful treatment. Br J Dermatol. 1993.", url: "https://doi.org/10.1111/j.1365-2133.1993.tb11849.x" },
      { label: "Reynolds RV, et al. Guidelines of care for the management of acne vulgaris. J Am Acad Dermatol. 2024. PMID 38300170.", url: "https://pubmed.ncbi.nlm.nih.gov/38300170/" }
    ]
  },
  {
    slug: "la-isotretinoina-causa-depresion-o-ansiedad",
    title: "¿La isotretinoína causa depresión o ansiedad?",
    excerpt:
      "Una de las preguntas más delicadas sobre la isotretinoína, y una de las que más ha evolucionado con la evidencia científica. Esto es lo que realmente muestran los estudios.",
    seoTitle: "Isotretinoína y Depresión: Qué Dice la Evidencia | Dra. Karla Andrade",
    seoDescription:
      "¿La isotretinoína causa depresión o ansiedad? La Dra. Karla Andrade analiza la evidencia científica y explica cuándo consultar durante el tratamiento.",
    category: "Dermatología clínica",
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    readingMin: 7,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Esta es una de las preguntas más delicadas sobre la isotretinoína, y también una de las que más ha evolucionado con la evidencia científica. La respuesta honesta no es un simple sí o no: hay que diferenciar entre asociación y causalidad, y reconocer que todavía existen incertidumbres.",
    sections: [
      {
        h: "De dónde viene esta preocupación",
        p: [
          "La preocupación por un posible vínculo entre isotretinoína y depresión surgió, en parte, de reportes de casos individuales publicados desde los años 80 y 90, en los que pacientes desarrollaron síntomas depresivos durante el tratamiento. Esos reportes, junto con el hecho de que la isotretinoína actúa sobre vías biológicas que también participan en la regulación del estado de ánimo, llevaron a las agencias regulatorias a incluir advertencias específicas sobre este tema en la información del medicamento."
        ]
      },
      {
        h: "Qué dicen los estudios más grandes y recientes",
        p: [
          "Los metaanálisis más robustos publicados en los últimos años, que combinan los resultados de muchos estudios, no han encontrado evidencia de un mayor riesgo de depresión o de conductas suicidas a nivel poblacional en personas que usan isotretinoína, comparadas con quienes no la usan. Algunos de estos análisis incluso reportan una mejoría de los síntomas depresivos después del tratamiento, posiblemente relacionada con la mejoría del acné en sí, que es una condición que puede afectar significativamente el bienestar emocional."
        ]
      },
      {
        h: "Por qué 'sin asociación poblacional' no es lo mismo que 'sin ningún riesgo'",
        p: [
          "Esta es la distinción más importante del artículo. Que los estudios a gran escala no muestren un mayor riesgo en la población general no significa que ningún paciente individual pueda verse afectado. Algunas revisiones plantean que podría existir una asociación en un subgrupo de personas particularmente susceptibles, posiblemente relacionada con antecedentes personales de salud mental, aunque la evidencia sobre este punto específico sigue siendo limitada y no permite identificar con certeza quién pertenece a ese subgrupo de antemano."
        ]
      },
      {
        h: "Por qué de todas formas se vigila durante el tratamiento",
        p: [
          "Precisamente por esta incertidumbre —y porque el acné en sí mismo puede afectar el estado de ánimo, independientemente del tratamiento— es una buena práctica médica preguntar y vigilar activamente el estado emocional antes y durante el uso de isotretinoína, más allá de lo que digan los promedios poblacionales. Esto no es una señal de que el medicamento sea especialmente peligroso en este sentido, sino una precaución razonable ante una posibilidad que no puede descartarse por completo a nivel individual."
        ]
      },
      {
        h: "Qué hacer si notas cambios emocionales durante el tratamiento",
        p: [
          "Si durante el tratamiento notas tristeza persistente, cambios marcados de ánimo, ansiedad significativa, o cualquier pensamiento de hacerte daño, es importante comunicarlo a tu médico de inmediato, sin esperar al próximo control programado. Esto permite evaluar si está relacionado con el tratamiento, con el contexto de vida, o con otra causa, y decidir junto a tu médico los pasos a seguir."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Está comprobado que la isotretinoína causa depresión?",
        a: "No. Los estudios poblacionales más grandes y recientes no muestran un mayor riesgo de depresión a nivel de población. Sigue existiendo, sin embargo, la posibilidad de un efecto en personas particularmente susceptibles, que la evidencia actual no permite predecir con certeza."
      },
      {
        q: "¿Debería evitar la isotretinoína si tengo antecedentes de depresión?",
        a: "No significa que esté prohibida, pero es información que tu médico necesita conocer para decidir junto a ti, y para vigilar más de cerca tu estado emocional durante el tratamiento."
      },
      {
        q: "¿Es cierto que puede mejorar el ánimo en vez de empeorarlo?",
        a: "Algunos estudios reportan una mejoría de los síntomas depresivos tras el tratamiento, posiblemente relacionada con la mejoría del acné. Esto no significa que deba usarse como tratamiento para la depresión, solo que la relación no es unidireccional."
      },
      {
        q: "¿Qué hago si me siento mal anímicamente durante el tratamiento?",
        a: "Coméntalo con tu médico cuanto antes, sin esperar al próximo control. Es parte normal y esperada del seguimiento durante el tratamiento."
      }
    ],
    relatedArticles: ["es-segura-la-isotretinoina-para-el-acne", "efectos-secundarios-de-la-isotretinoina"],
    references: [
      { label: "Huang YC, Cheng YC. Isotretinoin treatment for acne and risk of depression: a systematic review and meta-analysis. J Am Acad Dermatol. 2017. PMID 28291553.", url: "https://pubmed.ncbi.nlm.nih.gov/28291553/" },
      { label: "Li C, et al. Use of isotretinoin and risk of depression in patients with acne: a systematic review and meta-analysis. BMJ Open. 2019. PMID 30670500.", url: "https://pubmed.ncbi.nlm.nih.gov/30670500/" },
      { label: "Tan NKW, et al. Risk of suicide and psychiatric disorders among isotretinoin users: a meta-analysis. JAMA Dermatol. 2023. PMID 38019562.", url: "https://pubmed.ncbi.nlm.nih.gov/38019562/" }
    ]
  },
  {
    slug: "efectos-secundarios-de-la-isotretinoina",
    title: "¿Qué efectos secundarios puede producir la isotretinoína?",
    excerpt:
      "La isotretinoína tiene un perfil de efectos secundarios que conviene conocer de antemano. Esto es lo que puedes esperar, y qué señales ameritan contactar a tu médico sin esperar.",
    seoTitle: "Efectos Secundarios de la Isotretinoína | Dra. Karla Andrade",
    seoDescription:
      "¿Qué efectos secundarios produce la isotretinoína? La Dra. Karla Andrade explica los más frecuentes y las señales de alarma que requieren consulta.",
    category: "Dermatología clínica",
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    readingMin: 7,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "La isotretinoína es un medicamento efectivo, pero con un perfil de efectos secundarios que conviene conocer de antemano, tanto los muy frecuentes como los menos comunes. Esto es lo que puedes esperar, y qué señales ameritan contactar a tu médico sin esperar al próximo control.",
    sections: [
      {
        h: "Los efectos más frecuentes: la sequedad",
        p: [
          "La gran mayoría de los pacientes experimenta algún grado de sequedad de piel, labios y mucosas durante el tratamiento. Es, por lejos, el efecto más común, relacionado directamente con el mecanismo de acción del medicamento sobre las glándulas sebáceas, y suele manejarse con hidratación labial y corporal frecuente, indicada por tu médico."
        ],
        list: [
          "Labios resecos o agrietados (queilitis), casi universal durante el tratamiento",
          "Piel seca, sobre todo en cara y cuerpo",
          "Sequedad de mucosa nasal, que puede favorecer pequeños sangrados ocasionales",
          "Ojos secos o mayor sensibilidad al usar lentes de contacto"
        ]
      },
      {
        h: "Efectos en piel y mucosas, más allá de la sequedad",
        list: [
          "Mayor sensibilidad de la piel a la irritación y al sol",
          "Descamación en zonas como palmas y plantas en algunos casos",
          "Dolor o sensibilidad muscular y articular ocasional"
        ]
      },
      {
        h: "Efectos menos frecuentes, pero que requieren vigilancia",
        p: [
          "Con menor frecuencia, pueden presentarse alteraciones en los análisis de lípidos o de la función hepática —por eso el seguimiento de laboratorio descrito en otro artículo—, dolores de cabeza, cambios relacionados con la visión nocturna, o síntomas digestivos. También se han reportado, con menor frecuencia, efectos sobre el estado de ánimo, un tema que desarrollamos en un artículo específico."
        ]
      },
      {
        h: "Signos de alarma: cuándo contactar al médico de inmediato",
        list: [
          "Dolor de cabeza intenso y persistente, acompañado de visión borrosa o náuseas (podría indicar una complicación poco frecuente pero seria, relacionada con la presión dentro del cráneo)",
          "Dolor abdominal intenso, sobre todo si se acompaña de náuseas o vómitos",
          "Ictericia (coloración amarilla de piel u ojos)",
          "Cambios anímicos marcados, tristeza persistente o pensamientos de hacerte daño",
          "Dolor o debilidad muscular intensa y fuera de lo habitual",
          "Cualquier síntoma que te preocupe de forma significativa, aunque no esté en esta lista"
        ]
      },
      {
        h: "Por qué conocerlos de antemano ayuda, no asusta",
        p: [
          "Saber qué esperar no es una forma de generar miedo, sino de poder reconocer a tiempo lo que es parte esperada del tratamiento —como la sequedad— y diferenciarlo de lo que no lo es, y que amerita una consulta más temprana. Esa distinción es, justamente, uno de los motivos por los que el seguimiento médico regular acompaña a todo el tratamiento.",
          "¿Tienes acné persistente o dudas sobre el uso de isotretinoína? Una valoración dermatológica permite determinar qué tratamiento es adecuado y seguro para tu caso."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Todos los pacientes tienen efectos secundarios?",
        a: "La sequedad de piel y labios es casi universal en algún grado. Los efectos menos frecuentes no aparecen en todos los pacientes, y su intensidad varía de una persona a otra."
      },
      {
        q: "¿La sequedad de labios significa que algo anda mal?",
        a: "No, es un efecto esperado del mecanismo de acción del medicamento. Se maneja con hidratación adecuada, que tu médico puede recomendarte específicamente."
      },
      {
        q: "¿Debo preocuparme por los dolores musculares?",
        a: "Un dolor leve y ocasional es relativamente común. Si es intenso, persistente o inusualmente fuerte, coméntalo con tu médico."
      },
      {
        q: "¿Qué hago si tengo un efecto que no está en esta lista?",
        a: "Coméntalo igual con tu médico. Esta lista cubre los efectos más relevantes, pero no reemplaza una consulta ante cualquier síntoma que te preocupe."
      }
    ],
    relatedArticles: [
      "es-segura-la-isotretinoina-para-el-acne",
      "la-isotretinoina-causa-depresion-o-ansiedad",
      "puedo-tomar-alcohol-con-isotretinoina"
    ],
    references: [
      { label: "Exploring the multifaceted side effects of isotretinoin: a deep dive into case reports and observational studies. PMID 40009222.", url: "https://pubmed.ncbi.nlm.nih.gov/40009222/" },
      { label: "Reynolds RV, et al. Guidelines of care for the management of acne vulgaris. J Am Acad Dermatol. 2024. PMID 38300170.", url: "https://pubmed.ncbi.nlm.nih.gov/38300170/" }
    ]
  },
  {
    slug: "puedo-tomar-alcohol-con-isotretinoina",
    title: "¿Puedo tomar alcohol mientras uso isotretinoína?",
    excerpt:
      "Una de las preguntas más frecuentes entre quienes empiezan isotretinoína. Esto es lo que hay que entender sobre su relación con los lípidos y el hígado, más allá de la prohibición.",
    seoTitle: "Alcohol e Isotretinoína: ¿Es Seguro? | Dra. Karla Andrade",
    seoDescription:
      "¿Puedo tomar alcohol mientras uso isotretinoína? La Dra. Karla Andrade explica su relación con los lípidos y el hígado, y por qué individualizar el consejo.",
    category: "Dermatología clínica",
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Es una de las preguntas más frecuentes entre quienes empiezan un tratamiento con isotretinoína, sobre todo en adultos jóvenes. La respuesta corta es que se recomienda evitarlo o limitarlo mucho, pero vale la pena entender por qué, en lugar de quedarse solo con la prohibición.",
    sections: [
      {
        h: "Por qué se relaciona con los lípidos",
        p: [
          "La isotretinoína puede elevar los niveles de triglicéridos en sangre en algunos pacientes, como parte de su efecto sobre el metabolismo de las grasas. El alcohol, de forma independiente, también puede elevar los triglicéridos, a través de su propio efecto sobre el hígado. Combinar ambos factores plantea, al menos en teoría, un riesgo mayor de elevaciones significativas de triglicéridos que cualquiera de los dos por separado, aunque la evidencia específica sobre la combinación isotretinoína más alcohol en humanos es limitada, y se basa sobre todo en reportes de casos más que en estudios grandes y controlados."
        ]
      },
      {
        h: "Por qué se relaciona con el hígado",
        p: [
          "Algo similar ocurre con el hígado: la isotretinoína se metaboliza allí y, en algunos pacientes, puede alterar sus enzimas. El consumo de alcohol es, por su cuenta, una causa conocida de estrés hepático. Aunque no existe evidencia sólida de un efecto sinérgico claramente demostrado en estudios grandes, la lógica de evitar sumar dos factores que pueden afectar al mismo órgano es razonable desde el punto de vista médico."
        ]
      },
      {
        h: "Qué tan frecuentes son las complicaciones reales",
        p: [
          "Las complicaciones serias relacionadas con triglicéridos muy elevados, como la pancreatitis, son poco frecuentes durante el tratamiento con isotretinoína en general, y existen sobre todo reportes de casos aislados, no una asociación establecida como común. Eso no elimina el motivo de precaución, pero ayuda a poner el riesgo en perspectiva: no se trata de un peligro inminente con cualquier consumo mínimo, sino de un factor que conviene minimizar."
        ]
      },
      {
        h: "Por qué la recomendación se individualiza",
        p: [
          "No es lo mismo un consumo ocasional y moderado que un consumo frecuente o intenso, y tampoco es igual el consejo para alguien con antecedentes de alteraciones de lípidos o del hígado que para alguien sin esos antecedentes. Por eso la recomendación final sobre el alcohol durante tu tratamiento debe conversarse con tu médico, que conoce tu historia clínica y tus resultados de laboratorio, en lugar de aplicar una misma regla a todos los pacientes por igual."
        ]
      },
      {
        h: "Qué es razonable mientras tanto",
        p: [
          "Como principio general, y mientras no tengas una indicación específica de tu médico, lo más prudente es evitar el alcohol, o limitarlo al mínimo, durante el tratamiento con isotretinoína, sobre todo si ya tienes antecedentes de alteraciones de lípidos o del hígado. Esta es una recomendación de precaución razonable, no una afirmación de que cualquier consumo producirá necesariamente un daño."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Una copa ocasional me va a hacer daño?",
        a: "No existe evidencia sólida de que un consumo mínimo y ocasional cause daño grave en la mayoría de los pacientes, pero la recomendación general sigue siendo evitarlo o limitarlo, y conversar tu caso particular con tu médico."
      },
      {
        q: "¿Por qué mi médico me pide análisis si el riesgo es bajo?",
        a: "Porque el seguimiento de laboratorio está diseñado justamente para detectar a tiempo cualquier alteración de lípidos o del hígado, sea por el medicamento, por el alcohol, o por la combinación de ambos."
      },
      {
        q: "¿El alcohol afecta la eficacia del tratamiento sobre el acné?",
        a: "No hay evidencia clara de que afecte directamente la eficacia del tratamiento sobre el acné; la preocupación principal es sobre los lípidos y el hígado, no sobre el resultado estético."
      },
      {
        q: "Tengo antecedentes de triglicéridos altos, ¿debo ser más estricto?",
        a: "Sí, coméntalo con tu médico: en ese contexto, es razonable ser más cuidadoso con el alcohol durante el tratamiento, y es posible que te pida un seguimiento de laboratorio más cercano."
      }
    ],
    relatedArticles: [
      "que-examenes-necesito-antes-y-durante-isotretinoina",
      "efectos-secundarios-de-la-isotretinoina",
      "es-segura-la-isotretinoina-para-el-acne"
    ],
    references: [
      { label: "Lee YH, et al. Laboratory monitoring during isotretinoin therapy for acne: a systematic review and meta-analysis. JAMA Dermatol. 2015.", url: "https://doi.org/10.1001/jamadermatol.2015.3091" },
      { label: "Reynolds RV, et al. Guidelines of care for the management of acne vulgaris. J Am Acad Dermatol. 2024. PMID 38300170.", url: "https://pubmed.ncbi.nlm.nih.gov/38300170/" }
    ]
  },
  {
    slug: "la-isotretinoina-es-solo-para-acne-severo",
    title: "¿La isotretinoína sirve solamente para el acné severo?",
    excerpt:
      "Se suele pensar que la isotretinoína es el último recurso solo para el acné más grave. Esto es lo que realmente consideran las guías dermatológicas al indicarla.",
    seoTitle: "Isotretinoína: ¿Solo para Acné Severo? | Dra. Karla Andrade",
    seoDescription:
      "¿La isotretinoína es solo para el acné severo? La Dra. Karla Andrade, dermatóloga en Machala, explica los criterios reales de indicación.",
    category: "Dermatología clínica",
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Se suele pensar que la isotretinoína es 'el último recurso' reservado únicamente para el acné más grave. Es cierto que el acné severo es su indicación más clara, pero no es la única situación en la que puede recomendarse. Esto es lo que realmente consideran las guías dermatológicas al indicarla.",
    sections: [
      {
        h: "El acné severo, la indicación más clara",
        p: [
          "El acné severo —con muchas lesiones inflamatorias, nódulos o quistes— es, efectivamente, la indicación más reconocida para la isotretinoína, y en estos casos las guías de dermatología la recomiendan con el nivel más alto de evidencia disponible."
        ]
      },
      {
        h: "Acné resistente a otros tratamientos",
        p: [
          "Más allá de la gravedad por sí sola, la isotretinoína también se indica cuando un acné moderado no respondió de forma adecuada a los tratamientos orales y tópicos habituales, después de haberles dado un tiempo razonable para hacer efecto. En estos casos, seguir probando tratamiento tras tratamiento sin resultado puede no ser la mejor estrategia frente a una opción con mayor probabilidad de éxito."
        ]
      },
      {
        h: "Riesgo de cicatrices, aunque el acné no sea extremadamente intenso",
        p: [
          "Otro criterio importante, independiente de qué tan grave se vea el acné en un momento dado, es el riesgo de cicatrices. Un acné que ya está dejando cicatrices, o que por su tipo de lesiones —como los nódulos profundos— tiene alto riesgo de dejarlas, puede justificar indicar isotretinoína de forma más temprana, precisamente para prevenir un daño que después es difícil de revertir por completo."
        ]
      },
      {
        h: "El impacto psicológico, un criterio reconocido",
        p: [
          "Las guías dermatológicas actuales también reconocen el impacto psicológico del acné como un criterio válido para considerar un tratamiento más definitivo, incluso en casos que, solo por el número de lesiones, podrían describirse como moderados. El acné puede afectar significativamente la autoestima, las relaciones sociales y el bienestar emocional, y ese impacto es parte legítima de la decisión clínica, no un argumento menor frente a la gravedad física de las lesiones."
        ]
      },
      {
        h: "Por qué no es, aun así, la primera opción para todos",
        p: [
          "Esto no significa que la isotretinoína deba ofrecerse a cualquier persona con acné desde el principio. Para el acné leve a moderado sin estos factores de riesgo, los tratamientos tópicos y orales más simples siguen siendo la primera línea razonable, reservando la isotretinoína para cuando el balance entre su potencia, sus implicaciones y el beneficio esperado tiene sentido."
        ]
      },
      {
        h: "Quién debe tomar esta decisión",
        p: [
          "Determinar si tu caso particular cumple alguno de estos criterios —gravedad, resistencia a otros tratamientos, riesgo de cicatrices o impacto psicológico— es una decisión clínica que debe tomar tu dermatólogo, después de evaluar tu historia completa, no algo que se pueda definir solo mirando fotos o comparando con el caso de otra persona."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Mi acné tiene que verse muy grave para que me indiquen isotretinoína?",
        a: "No necesariamente. También se considera si hay riesgo de cicatrices, si no respondiste a otros tratamientos, o si el acné te está afectando emocionalmente de forma significativa."
      },
      {
        q: "¿Puedo pedir isotretinoína directamente si ya probé muchos productos?",
        a: "Puedes planteárselo a tu dermatólogo, pero la decisión final depende de una evaluación completa de tu caso, no solo de cuántos productos ya probaste."
      },
      {
        q: "¿El impacto emocional del acné realmente cuenta para esta decisión?",
        a: "Sí, es un criterio reconocido en las guías dermatológicas actuales, junto con la gravedad clínica y el riesgo de cicatrices."
      },
      {
        q: "Si mi acné es moderado, ¿debo insistir en empezar con tratamientos más simples?",
        a: "En general sí, salvo que existan factores de riesgo específicos, como cicatrices ya presentes. Tu dermatólogo es quien puede evaluar si tu caso amerita considerar isotretinoína antes."
      }
    ],
    relatedArticles: [
      "es-segura-la-isotretinoina-para-el-acne",
      "la-isotretinoina-cura-el-acne-para-siempre",
      "el-acne-deja-cicatrices-se-pueden-eliminar",
      "acne-por-que-aparece-y-como-se-trata"
    ],
    references: [
      { label: "Reynolds RV, et al. Guidelines of care for the management of acne vulgaris. J Am Acad Dermatol. 2024. PMID 38300170.", url: "https://pubmed.ncbi.nlm.nih.gov/38300170/" }
    ]
  },
  {
    slug: "acne-despues-de-los-25-o-30-anos",
    title: "¿Por qué sigo teniendo acné después de los 25 o 30 años?",
    excerpt:
      "Muchas personas esperan haber dejado el acné atrás en la adolescencia. Esto es lo que suele explicar su persistencia —o su aparición por primera vez— después de los 25 o 30 años.",
    seoTitle: "Acné Después de los 25 o 30 Años | Dra. Karla Andrade",
    seoDescription:
      "¿Por qué sigues teniendo acné después de los 25 o 30 años? La Dra. Karla Andrade, dermatóloga en Machala, explica las causas hormonales y de cuidado diario.",
    category: "Dermatología clínica",
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Muchas personas esperan haber dejado el acné atrás en la adolescencia, y se sorprenden —o frustran— al seguir lidiando con él a los 25, 30 o más. No estás solo en esto: es más frecuente de lo que se piensa, y suele tener causas algo distintas a las del acné adolescente.",
    sections: [
      {
        h: "No es 'solo' el mismo acné que no se fue",
        p: [
          "Para muchas personas, el acné después de los 25-30 años no es simplemente una continuación sin cambios del acné adolescente: puede tratarse de un acné que efectivamente nunca se resolvió del todo, de un acné que reapareció después de años sin problemas, o de una forma de acné que empieza por primera vez en esta etapa de la vida, cada una con matices distintos a considerar."
        ]
      },
      {
        h: "El peso de las fluctuaciones hormonales",
        p: [
          "Los andrógenos —hormonas presentes en hombres y mujeres— siguen influyendo sobre la glándula sebácea durante toda la vida adulta, no solo en la adolescencia. En mujeres, los cambios hormonales relacionados con el ciclo menstrual, la aproximación a la perimenopausia, el uso o la suspensión de anticonceptivos hormonales, o condiciones como el síndrome de ovario poliquístico pueden mantener activo o reactivar el acné en esta etapa."
        ]
      },
      {
        h: "Por qué conviene descartar causas hormonales de fondo",
        p: [
          "Cuando el acné adulto se acompaña de otras señales —ciclos menstruales irregulares, exceso de vello, cambios de peso difíciles de explicar—, vale la pena que el dermatólogo evalúe la posibilidad de una causa hormonal de fondo, en ocasiones en conjunto con otro especialista, para dirigir el tratamiento de forma más precisa."
        ]
      },
      {
        h: "El estrés sostenido de la vida adulta",
        p: [
          "La década de los 25 a los 35 suele concentrar exigencias laborales, económicas y familiares distintas a las de la adolescencia. El estrés sostenido no causa el acné por sí solo, pero puede influir en su persistencia a través de mecanismos hormonales, y es un factor que muchas veces se subestima al buscar explicaciones."
        ]
      },
      {
        h: "Factores cosméticos que se acumulan con los años",
        p: [
          "Con la adultez suele aumentar el uso de maquillaje, protector solar, productos capilares y tratamientos cosméticos, algunos de los cuales pueden obstruir el poro o irritar la piel sin que se note de inmediato. La rutina de cuidado que funcionaba a los 18 no necesariamente es la adecuada —ni la causa— a los 30."
        ]
      },
      {
        h: "Medicamentos que pueden influir",
        p: [
          "Algunos medicamentos usados por motivos ajenos a la piel —ciertos anticonceptivos, corticoides, o algunos tratamientos para otras condiciones— pueden influir en la aparición o persistencia del acné en la adultez. Revisar contigo toda la medicación que tomas es, por eso, parte habitual de la evaluación."
        ]
      },
      {
        h: "Qué caminos de tratamiento existen",
        p: [
          "El tratamiento del acné adulto se construye según la causa identificada, y puede incluir desde tratamientos tópicos ajustados a una piel adulta, hasta opciones orales —incluyendo, en los casos que lo ameriten, la isotretinoína— o un enfoque hormonal específico cuando corresponde. En nuestro artículo sobre el acné en la adultez profundizamos además en qué lo distingue del acné adolescente y qué hábitos conviene evitar."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Es normal tener acné por primera vez a los 30 años?",
        a: "Sí, puede ocurrir, sobre todo en mujeres y relacionado con cambios hormonales. No haber tenido acné antes no te protege de tenerlo en la adultez."
      },
      {
        q: "¿El acné adulto siempre tiene una causa hormonal?",
        a: "No siempre, pero es una de las causas más frecuentes a considerar, sobre todo si se acompaña de otras señales como irregularidad menstrual."
      },
      {
        q: "¿Debería hacerme análisis hormonales?",
        a: "No todos los casos lo requieren; tu dermatólogo decide si hace falta según tu historia y los síntomas que acompañan al acné."
      },
      {
        q: "¿El acné adulto se trata igual que el adolescente?",
        a: "El enfoque se ajusta a la piel adulta y a la causa identificada, por eso conviene una evaluación específica en lugar de repetir lo que funcionaba años atrás."
      }
    ],
    relatedArticles: [
      "acne-en-la-adultez",
      "productos-que-empeoran-el-acne-sin-saberlo",
      "es-segura-la-isotretinoina-para-el-acne"
    ],
    references: [
      { label: "Adult female acne: clinical and therapeutic particularities (Review). Exp Ther Med. 2022. PMID 35069832.", url: "https://pubmed.ncbi.nlm.nih.gov/35069832/" },
      { label: "Reynolds RV, et al. Guidelines of care for the management of acne vulgaris. J Am Acad Dermatol. 2024. PMID 38300170.", url: "https://pubmed.ncbi.nlm.nih.gov/38300170/" }
    ]
  },
  {
    slug: "el-acne-deja-cicatrices-se-pueden-eliminar",
    title: "¿El acné deja cicatrices permanentes? ¿Se pueden eliminar?",
    excerpt:
      "Las marcas que deja el acné generan mucha confusión: no toda marca es una cicatriz permanente, y no toda cicatriz se trata igual. Esto es lo que las diferencia, y qué opciones existen.",
    seoTitle: "Cicatrices de Acné: ¿Se Pueden Eliminar? | Dra. Karla Andrade",
    seoDescription:
      "¿El acné deja cicatrices permanentes? La Dra. Karla Andrade explica la diferencia con las manchas, y las opciones de tratamiento de cicatrices en Machala.",
    category: "Dermatología clínica",
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Las marcas que deja el acné generan mucha preocupación, y también mucha confusión: no toda marca es una cicatriz permanente, y no toda cicatriz se trata de la misma forma. Esto es lo que realmente las diferencia, y qué opciones existen hoy.",
    sections: [
      {
        h: "Manchas posinflamatorias: no son cicatrices",
        p: [
          "Después de una lesión de acné, es muy frecuente que quede una mancha —rosada, rojiza o más oscura, según el tono de piel— llamada hiperpigmentación o eritema posinflamatorio. Esta mancha no es una cicatriz real: no implica pérdida ni exceso de tejido, y en la gran mayoría de los casos mejora con el tiempo, aunque puede tardar varios meses, y el proceso se beneficia de un tratamiento adecuado y de protección solar constante."
        ]
      },
      {
        h: "Cicatrices verdaderas: qué son",
        p: [
          "Una cicatriz verdadera implica un cambio estructural en la piel, por pérdida de colágeno —las cicatrices atróficas, las más frecuentes en el acné— o, con menos frecuencia, por exceso de tejido cicatricial —cicatrices hipertróficas o queloides—. A diferencia de una mancha, una cicatriz atrófica no desaparece sola con el tiempo."
        ]
      },
      {
        h: "Por qué la prevención es la estrategia más efectiva",
        p: [
          "La forma más efectiva de manejar las cicatrices de acné sigue siendo evitar que se formen: tratar el acné de forma oportuna y adecuada, sobre todo las lesiones más profundas e inflamatorias, que son las que más riesgo tienen de dejar cicatriz. Posponer el tratamiento del acné activo, con la idea de 'arreglar las marcas después', suele significar más cicatrices que tratar, no menos."
        ]
      },
      {
        h: "Opciones cuando la cicatriz ya está formada",
        p: ["Una vez que una cicatriz atrófica ya se formó, existen varias opciones de tratamiento, que se eligen según el tipo y la profundidad de la cicatriz, evaluados por el dermatólogo:"],
        list: [
          "Láser fraccionado (como el CO2 fraccionado), que estimula la remodelación del colágeno",
          "Microneedling, que con un mecanismo distinto también busca estimular la producción de colágeno",
          "Peelings químicos, en cicatrices más superficiales",
          "Rellenos, en algunos tipos de cicatrices puntuales",
          "Combinaciones de estas técnicas, según el caso"
        ]
      },
      {
        h: "Qué dice la evidencia sobre estas opciones",
        p: [
          "Las revisiones científicas disponibles muestran que tanto el láser fraccionado como el microneedling pueden mejorar de forma significativa la apariencia de las cicatrices de acné, con eficacia relativamente comparable entre ambos en varios estudios, aunque el láser fraccionado muestra en algunos análisis una mayor probabilidad de éxito marcado. La elección entre una u otra técnica depende de las características de la cicatriz, el tipo de piel y el criterio del especialista, no de que una sea universalmente mejor que la otra."
        ]
      },
      {
        h: "Expectativas realistas: mejoría, no borrado total",
        p: [
          "Es importante ser honestos sobre esto: estos tratamientos mejoran de forma significativa la apariencia de las cicatrices, pero en la mayoría de los casos no las eliminan por completo. El objetivo realista es una mejoría notoria de la textura y la apariencia de la piel, no un borrado total e indetectable de toda marca previa. Desconfía de cualquier promesa de eliminación completa garantizada."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Las manchas oscuras que me quedan son cicatrices permanentes?",
        a: "En la mayoría de los casos no. Son manchas posinflamatorias que mejoran con el tiempo y tratamiento, a diferencia de una cicatriz estructural verdadera."
      },
      {
        q: "¿Cuál es mejor, láser o microneedling?",
        a: "Ninguno es universalmente superior; la elección depende del tipo de cicatriz, tu tipo de piel y la evaluación de tu dermatólogo."
      },
      {
        q: "¿Puedo eliminar completamente mis cicatrices de acné?",
        a: "Los tratamientos disponibles logran una mejoría significativa, pero generalmente no una eliminación completa. Es importante partir de expectativas realistas."
      },
      {
        q: "¿Vale la pena tratar el acné activo si ya tengo cicatrices?",
        a: "Sí, es el primer paso: tratar el acné activo previene que se formen cicatrices nuevas, independientemente del tratamiento que elijas para las que ya existen."
      }
    ],
    relatedArticles: ["la-isotretinoina-es-solo-para-acne-severo", "la-isotretinoina-cura-el-acne-para-siempre"],
    references: [
      { label: "Efficacy of microneedling and CO2 laser for acne scar remodelling: a comprehensive review.", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10978375/" },
      { label: "Reynolds RV, et al. Guidelines of care for the management of acne vulgaris. J Am Acad Dermatol. 2024. PMID 38300170.", url: "https://pubmed.ncbi.nlm.nih.gov/38300170/" }
    ]
  },
  {
    slug: "productos-que-empeoran-el-acne-sin-saberlo",
    title: "¿Qué productos empeoran el acné sin que te des cuenta?",
    excerpt:
      "A veces el acné no mejora por productos y hábitos de cuidado que, sin darnos cuenta, están sumando al problema. Esto es lo que conviene revisar en tu rutina diaria.",
    seoTitle: "Productos que Empeoran el Acné | Dra. Karla Andrade",
    seoDescription:
      "¿Qué productos empeoran el acné sin que te des cuenta? La Dra. Karla Andrade explica errores comunes de rutina que agravan el acné.",
    category: "Dermatología clínica",
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "A veces el acné no mejora —o incluso empeora— no por falta de tratamiento médico, sino por productos y hábitos de cuidado que, sin darnos cuenta, están sumando al problema. Esto es lo que conviene revisar en tu rutina diaria.",
    sections: [
      {
        h: "Cosméticos comedogénicos: el concepto, con matices",
        p: [
          "Durante años se manejaron listas de ingredientes 'comedogénicos' a evitar, basadas en estudios en animales. Investigación más reciente mostró que un producto terminado no siempre es comedogénico solo porque contenga, en alguna proporción, un ingrediente que lo fue en pruebas aisladas: la fórmula completa importa más que un ingrediente individual fuera de contexto. Aun así, el concepto general sigue siendo útil: ciertos productos muy oclusivos u oleosos pueden obstruir el poro en pieles con tendencia acneica, y conviene elegir productos etiquetados como 'no comedogénicos', idealmente probados en la piel real y no solo en la lista de ingredientes."
        ]
      },
      {
        h: "Productos irritantes: el error de 'combatir' el acné con agresividad",
        p: [
          "Es un error frecuente pensar que, si el acné es un problema inflamatorio, hay que 'atacarlo' con productos fuertes. En la práctica, los limpiadores muy agresivos, los tónicos con alto contenido de alcohol, o varios activos fuertes aplicados a la vez, irritan la barrera de la piel y suelen empeorar la inflamación, no mejorarla."
        ]
      },
      {
        h: "Exfoliación excesiva",
        p: [
          "Exfoliar con gránulos gruesos, cepillos agresivos o con demasiada frecuencia, pensando que así se 'destapan' los poros más rápido, suele producir microdesgarros en la piel que empeoran la inflamación y, en pieles con acné activo, pueden incluso extender la irritación a zonas cercanas."
        ]
      },
      {
        h: "Rutinas muy complicadas, con demasiados pasos",
        p: [
          "Sumar muchos productos activos a la vez —varios ácidos, retinoides, vitamina C y otros ingredientes potentes simultáneamente— sin un orden ni una introducción gradual, es una causa frecuente de irritación que empeora el acné en lugar de mejorarlo. Una rutina simple y consistente suele funcionar mejor que una elaborada que cambia constantemente."
        ]
      },
      {
        h: "Productos capilares y su efecto en la frente y las sienes",
        p: [
          "Acondicionadores, ceras, geles y aceites capilares pueden entrar en contacto con la frente, las sienes y el cuello al aplicarse o al caer durante el día, y contribuir a un tipo de acné localizado en esas zonas que muchas personas no relacionan con sus productos para el cabello."
        ]
      },
      {
        h: "Errores cotidianos que suman",
        list: [
          "Tocarse la cara con frecuencia y apoyar el celular contra la mejilla al hablar",
          "No retirar bien el maquillaje antes de dormir",
          "No cambiar con regularidad la funda de la almohada",
          "Usar protector solar o base muy oclusivos en climas cálidos y húmedos, como el de Machala",
          "Probar un producto nuevo cada pocos días, sin darle tiempo suficiente a ninguno antes de cambiarlo"
        ]
      },
      {
        h: "Cómo construir una rutina que no empeore las cosas",
        p: [
          "La regla general es simplicidad y constancia: un limpiador suave, un hidratante no comedogénico adecuado a tu tipo de piel, protector solar no oclusivo, y los tratamientos específicos que te indique tu dermatólogo, introducidos de a uno y con tiempo para evaluar cómo responde tu piel.",
          "¿Tienes acné persistente o dudas sobre tu rutina de cuidado? Una valoración dermatológica permite determinar qué tratamiento y qué ajustes son adecuados y seguros para tu caso."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Cómo sé si un producto es comedogénico para mí?",
        a: "No hay una lista universal infalible: lo más confiable es observar cómo responde tu piel a un producto nuevo, introducido de forma aislada, y consultar con tu dermatólogo ante dudas."
      },
      {
        q: "¿Exfoliar más seguido ayuda a que el acné se vaya más rápido?",
        a: "No, suele empeorarlo. La exfoliación excesiva irrita la piel y puede agravar la inflamación en un acné activo."
      },
      {
        q: "¿Los productos para el cabello realmente pueden causar acné en la frente?",
        a: "Sí, es una causa reconocida y frecuentemente pasada por alto, sobre todo con productos oleosos o cerosos que entran en contacto con la piel."
      },
      {
        q: "¿Debería dejar de usar maquillaje si tengo acné?",
        a: "No necesariamente; lo importante es elegir productos no comedogénicos, retirarlos bien, y evitar sumarlos a una rutina ya recargada de otros activos."
      }
    ],
    relatedArticles: ["acne-despues-de-los-25-o-30-anos", "cuidado-piel-acneica-en-casa", "mitos-sobre-el-acne"],
    references: [
      { label: "Draelos ZD, DiNardo JC. A re-evaluation of the comedogenicity concept. J Am Acad Dermatol. 2006.", url: "https://doi.org/10.1016/j.jaad.2005.11.1058" },
      { label: "Reynolds RV, et al. Guidelines of care for the management of acne vulgaris. J Am Acad Dermatol. 2024. PMID 38300170.", url: "https://pubmed.ncbi.nlm.nih.gov/38300170/" }
    ]
  },
  {
    slug: "laser-co2-fraccionado-que-es",
    title: "Láser CO2 fraccionado: qué es y para qué sirve",
    excerpt:
      "El láser CO2 fraccionado es uno de los tratamientos más potentes para mejorar la textura de la piel. Esto es lo que hace realmente, y qué esperar de la recuperación.",
    seoTitle: "Láser CO2 Fraccionado en Machala | Dra. Karla Andrade",
    seoDescription:
      "¿Qué es el láser CO2 fraccionado y para qué sirve? La Dra. Karla Andrade, dermatóloga en Machala, explica sus usos, resultados y tiempo de recuperación.",
    category: "Dermatología clínica",
    datePublished: "2026-10-11",
    dateModified: "2026-10-11",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Dentro de los distintos tipos de láser que se usan en dermatología, el CO2 fraccionado es uno de los más potentes para mejorar la textura de la piel. También es, por eso mismo, uno de los que más dudas generan: qué hace exactamente, para qué sirve, y qué implica la recuperación.",
    sections: [
      {
        h: "Qué es",
        p: [
          "Es un láser ablativo, lo que significa que actúa vaporizando columnas microscópicas de piel de forma controlada, dejando entre ellas tejido sano intacto —de ahí el nombre 'fraccionado'—. Esa combinación de daño controlado y tejido respetado es lo que permite al organismo regenerar la piel con una producción renovada de colágeno, sin necesidad de tratar toda la superficie de una vez."
        ]
      },
      {
        h: "Para qué sirve",
        p: [
          "Las revisiones científicas disponibles sobre cicatrices de acné reportan, en conjunto, una mejoría relevante de su apariencia después del tratamiento, aunque el grado varía bastante de un estudio a otro y de un paciente a otro, según el tipo de cicatriz y el protocolo usado."
        ],
        list: [
          "Cicatrices, incluidas las de acné, mejorando su profundidad y textura",
          "Arrugas finas y líneas de expresión",
          "Textura irregular de la piel y poros dilatados",
          "Manchas superficiales asociadas al fotoenvejecimiento",
          "Estrías, en algunos protocolos"
        ]
      },
      {
        h: "Qué esperar de la recuperación",
        p: [
          "Es, de los láseres que se usan en dermatología estética, uno de los que requiere un tiempo de recuperación más largo: enrojecimiento, hinchazón y descamación durante varios días, con cuidados específicos de la piel mientras se regenera. Esta es una diferencia importante frente a otras tecnologías con menos tiempo de inactividad, y una de las razones por las que la indicación y el protocolo deben ajustarse a cada caso."
        ]
      },
      {
        h: "No es para todo el mundo",
        p: [
          "No es un procedimiento sin consideraciones: el riesgo de hiperpigmentación posinflamatoria —manchas que aparecen después del tratamiento— es mayor en pieles más oscuras, y requiere protocolos y cuidados específicos en esos casos. Tampoco está exento de contraindicaciones, como infecciones activas en la piel, ciertos tratamientos recientes con isotretinoína, o cicatrización anómala conocida. Por eso la evaluación previa, antes de cualquier sesión, es un paso que no debería omitirse."
        ]
      },
      {
        h: "Por qué conviene revisar tu caso con un dermatólogo",
        p: [
          "Determinar si el láser CO2 fraccionado es la opción adecuada para tu piel —o si otra tecnología, con menos tiempo de recuperación, se ajusta mejor a tu objetivo— depende de una evaluación de tu tipo de piel, tu condición a tratar y tus expectativas.",
          "¿Te interesa mejorar la textura de tu piel o tus cicatrices? Una valoración dermatológica permite determinar qué tratamiento es adecuado y seguro para tu caso."
        ]
      }
    ],
    faqs: [
      {
        q: "¿El láser CO2 fraccionado duele?",
        a: "El procedimiento se realiza con anestesia tópica o local, según la extensión del área a tratar, por lo que las molestias durante la sesión suelen ser manejables. Los días posteriores pueden sentirse como una quemadura solar."
      },
      {
        q: "¿Cuánto dura la recuperación?",
        a: "El enrojecimiento y la descamación visible suelen durar entre 5 y 10 días, aunque la piel sigue mejorando de forma gradual durante varias semanas más."
      },
      {
        q: "¿Sirve para todas las cicatrices de acné?",
        a: "Depende del tipo y la profundidad de la cicatriz. En algunos casos se combina con otras técnicas, como el microneedling, según lo que indique la evaluación."
      },
      {
        q: "¿Cuántas sesiones necesito?",
        a: "Varía según el objetivo y la condición a tratar; se define en la consulta, no antes."
      }
    ],
    relatedArticles: ["el-acne-deja-cicatrices-se-pueden-eliminar", "picolaser-que-es-para-que-sirve", "ipl-luz-pulsada-intensa-que-es"],
    references: [
      { label: "The use of a fractional laser in acne scar treatment — a systematic review. 2025.", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12194615/" },
      { label: "Fractional laser resurfacing for acne scars: a review. 2013. PMID 24131097.", url: "https://pubmed.ncbi.nlm.nih.gov/24131097/" }
    ]
  },
  {
    slug: "picolaser-que-es-para-que-sirve",
    title: "Picoláser: qué es y para qué sirve en la piel",
    excerpt:
      "El picoláser es una de las tecnologías más recientes para tratar manchas y pigmentación. Esto es lo que lo distingue de otros láseres, y qué puede —y no puede— lograr.",
    seoTitle: "Picoláser en Machala: Manchas y Pigmentación | Dra. Karla Andrade",
    seoDescription:
      "¿Qué es el picoláser y para qué sirve? La Dra. Karla Andrade, dermatóloga en Machala, explica sus usos en manchas, melasma y tatuajes, con evidencia real.",
    category: "Dermatología clínica",
    datePublished: "2026-10-11",
    dateModified: "2026-10-11",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "El picoláser es una de las tecnologías más recientes dentro del arsenal de láseres usados en dermatología, y se ha popularizado como opción para manchas, pigmentación y tatuajes. Esto es lo que realmente lo distingue de otros láseres, y qué puede —y no puede— lograr.",
    sections: [
      {
        h: "Qué lo distingue de otros láseres",
        p: [
          "La diferencia principal está en la duración del pulso: mientras que los láseres tradicionales para pigmentación trabajan en nanosegundos, el picoláser emite pulsos miles de veces más cortos, en picosegundos. Ese pulso ultracorto fragmenta el pigmento de la piel por un efecto principalmente mecánico, en lugar de térmico, lo que en teoría reduce el daño por calor a la piel circundante."
        ]
      },
      {
        h: "Para qué se usa",
        list: [
          "Manchas pigmentarias superficiales, como los léntigos solares",
          "Tatuajes, siendo una de sus indicaciones más estudiadas",
          "Melasma, aunque con protocolos específicos y cuidadosos —es una condición que puede empeorar con un manejo inadecuado",
          "Textura de la piel y cicatrices superficiales, en algunos protocolos",
          "Rejuvenecimiento general de la piel"
        ]
      },
      {
        h: "Qué dice la evidencia sobre tatuajes",
        p: [
          "Es, de sus indicaciones, la más estudiada: las revisiones disponibles reportan una eliminación sustancial del pigmento del tatuaje en la mayoría de los pacientes después de varias sesiones, con mejores resultados documentados en tintas negras y azules que en otros colores. La evidencia de que el picoláser sea claramente superior a los láseres de nanosegundos más tradicionales para esta indicación, sin embargo, todavía es limitada y mixta según los estudios."
        ]
      },
      {
        h: "Por qué el melasma requiere especial cuidado",
        p: [
          "El melasma es una condición compleja, que puede empeorar —no solo no mejorar— si se trata con un láser, una energía o una frecuencia inadecuados para ese caso particular. Por eso, cuando se usa picoláser en melasma, debe ser dentro de un protocolo específico, generalmente combinado con otros tratamientos médicos, y nunca como primera ni única medida sin una evaluación dermatológica completa."
        ]
      },
      {
        h: "Expectativas realistas",
        p: [
          "Como con cualquier tratamiento de pigmentación, los resultados dependen del tipo de mancha, su profundidad y la causa de fondo. No todas las manchas responden igual, y algunas —como ciertas formas de melasma— tienden a recurrir con el tiempo si no se sostiene la protección solar y, cuando corresponde, el tratamiento médico de mantenimiento."
        ]
      }
    ],
    faqs: [
      {
        q: "¿El picoláser elimina cualquier mancha?",
        a: "No todas las manchas responden igual; depende de su tipo, profundidad y causa. Algunas, como ciertas formas de melasma, requieren un enfoque combinado y pueden recurrir si no se mantiene la protección solar."
      },
      {
        q: "¿Es mejor que otros láseres para tatuajes?",
        a: "Tiene buena evidencia para esta indicación, pero no hay consenso claro de que sea siempre superior a los láseres tradicionales; depende del color del tatuaje y de cada caso."
      },
      {
        q: "¿Tiene mucho tiempo de recuperación?",
        a: "En general es menor que con láseres ablativos como el CO2 fraccionado, aunque puede haber enrojecimiento temporal según la indicación tratada."
      },
      {
        q: "¿Puedo tratarme el melasma con picoláser por mi cuenta?",
        a: "No es recomendable. El melasma puede empeorar con un manejo inadecuado; siempre debe evaluarse y tratarse bajo supervisión dermatológica."
      }
    ],
    relatedArticles: ["manchas-y-melasma-en-la-piel", "laser-co2-fraccionado-que-es", "ipl-luz-pulsada-intensa-que-es"],
    references: [
      { label: "Picosecond lasers for tattoo removal: a systematic review. Lasers Med Sci. 2016. PMID 27311768.", url: "https://pubmed.ncbi.nlm.nih.gov/27311768/" },
      { label: "Evolution of the picosecond laser: a review of literature. 2019. PMID 30702447.", url: "https://pubmed.ncbi.nlm.nih.gov/30702447/" }
    ]
  },
  {
    slug: "ipl-luz-pulsada-intensa-que-es",
    title: "IPL (luz pulsada intensa): qué es y para qué sirve",
    excerpt:
      "La IPL es una de las tecnologías más versátiles en dermatología estética, aunque técnicamente no es un láser. Esto es lo que hace, y para qué se usa realmente.",
    seoTitle: "IPL en Machala: Luz Pulsada Intensa | Dra. Karla Andrade",
    seoDescription:
      "¿Qué es la IPL (luz pulsada intensa) y para qué sirve? La Dra. Karla Andrade, dermatóloga en Machala, explica sus usos en manchas, rosácea y fotorrejuvenecimiento.",
    category: "Aparatología",
    datePublished: "2026-10-11",
    dateModified: "2026-10-11",
    readingMin: 6,
    relatedEspecialidad: "medicina-estetica",
    lead:
      "La IPL, o luz pulsada intensa, es una de las tecnologías más utilizadas en dermatología estética, y suele agruparse junto a los láseres aunque, técnicamente, no lo sea. Esto es lo que la distingue, y para qué sirve realmente.",
    sections: [
      {
        h: "Qué es, y en qué se diferencia de un láser",
        p: [
          "Un láser emite luz de una sola longitud de onda, muy específica. La IPL, en cambio, emite un espectro amplio de longitudes de onda a la vez, como una luz blanca intensa filtrada. Esa diferencia le da versatilidad: con un mismo equipo, ajustando filtros y parámetros, se pueden abordar distintos objetivos en la piel, aunque con menor precisión que un láser dirigido a un blanco específico."
        ]
      },
      {
        h: "Para qué se usa",
        list: [
          "Manchas pigmentarias superficiales y léntigos solares",
          "Lesiones vasculares superficiales y rojeces difusas, incluida la rosácea",
          "Fotorrejuvenecimiento general: mejora la textura y el tono parejo de la piel",
          "Depilación, en fototipos de piel claros a intermedios",
          "Como parte de protocolos combinados con otros tratamientos dermatológicos"
        ]
      },
      {
        h: "Por qué se usa tanto en rosácea",
        p: [
          "La rosácea es una de las indicaciones donde la IPL tiene más respaldo: actúa sobre los vasos sanguíneos dilatados que producen el enrojecimiento característico de esta condición. No cura la rosácea de forma definitiva —es una condición crónica que se maneja, no se elimina—, pero puede reducir de forma notable el enrojecimiento visible como parte de un plan de tratamiento más amplio."
        ]
      },
      {
        h: "No es igual de efectiva para todos los fototipos",
        p: [
          "Por su mecanismo, basado en la absorción de luz por el pigmento de la piel o de las lesiones a tratar, la IPL es menos segura y menos predecible en pieles más oscuras, donde el riesgo de quemaduras o cambios de pigmentación es mayor. En estos fototipos, otras tecnologías —o protocolos específicamente ajustados— suelen ser más apropiadas."
        ]
      },
      {
        h: "Qué considerar antes de una sesión",
        p: [
          "El bronceado reciente, ciertos medicamentos fotosensibilizantes y algunas condiciones de la piel pueden contraindicar o posponer una sesión de IPL. Por eso, antes de empezar cualquier protocolo, la evaluación dermatológica confirma que es el momento y la tecnología adecuados para tu piel y tu objetivo."
        ]
      }
    ],
    faqs: [
      {
        q: "¿La IPL es un láser?",
        a: "No técnicamente: emite un espectro amplio de luz, no una sola longitud de onda como un láser. En la práctica clínica suele agruparse en la misma categoría por su uso similar."
      },
      {
        q: "¿Sirve para cualquier tipo de piel?",
        a: "No igual de bien. Es menos segura en pieles más oscuras, donde el riesgo de quemaduras o cambios de pigmentación es mayor; en esos casos se evalúan otras opciones."
      },
      {
        q: "¿La IPL cura la rosácea?",
        a: "No la cura, pero puede reducir de forma notable el enrojecimiento visible, como parte de un plan de manejo más amplio de esta condición crónica."
      },
      {
        q: "¿Puedo broncearme antes de una sesión de IPL?",
        a: "No es recomendable; el bronceado reciente puede contraindicar o posponer el tratamiento. Coméntalo en tu evaluación previa."
      }
    ],
    relatedArticles: ["picolaser-que-es-para-que-sirve", "laser-diodo-que-es-para-que-sirve", "plasma-pen-que-es-que-puede-hacer"],
    references: [
      { label: "Intense Pulsed Light (IPL) Therapy. StatPearls.", url: "https://www.ncbi.nlm.nih.gov/books/NBK580525/" },
      { label: "Intense pulsed light (IPL): a review. 2010. PMID 20166155.", url: "https://pubmed.ncbi.nlm.nih.gov/20166155/" }
    ]
  },
  {
    slug: "plasma-pen-que-es-que-puede-hacer",
    title: "Plasma pen: qué es y qué puede (y no puede) hacer en la piel",
    excerpt:
      "El plasma pen se promociona como alternativa no quirúrgica a la blefaroplastia. Esto es lo que hace realmente, qué dice la evidencia disponible y qué verificar antes de hacértelo.",
    seoTitle: "Plasma Pen en Machala: Qué Esperar | Dra. Karla Andrade",
    seoDescription:
      "¿Qué es el plasma pen y qué puede hacer en la piel? La Dra. Karla Andrade, dermatóloga en Machala, explica sus usos reales, límites y qué verificar antes de hacértelo.",
    category: "Aparatología",
    datePublished: "2026-10-11",
    dateModified: "2026-10-11",
    readingMin: 6,
    relatedEspecialidad: "medicina-estetica",
    lead:
      "El plasma pen se ha popularizado como alternativa no quirúrgica para tensar la piel, sobre todo en párpados. Es una de las tecnologías más recientes en estética, y también una de las que requiere más cautela: esto es lo que hace realmente, y qué conviene saber antes de considerarlo.",
    sections: [
      {
        h: "Qué es",
        p: [
          "A diferencia de un láser, el plasma pen no emite luz: genera un pequeño arco eléctrico entre la punta del dispositivo y la piel, sin llegar a tocarla, que ioniza el aire y produce plasma. Ese plasma sublima —convierte directamente en gas— una capa microscópica de la superficie de la piel, generando pequeños puntos de contracción que, con el tiempo, estimulan la producción de colágeno."
        ]
      },
      {
        h: "Para qué se usa",
        list: [
          "Flacidez leve a moderada del párpado superior, como alternativa no quirúrgica a la blefaroplastia",
          "Líneas finas alrededor de los ojos y la boca",
          "Tensado leve de áreas puntuales del rostro o el cuello",
          "Algunas cicatrices superficiales"
        ]
      },
      {
        h: "Por qué la evidencia es todavía limitada",
        p: [
          "A diferencia del láser CO2 fraccionado o la IPL, que cuentan con décadas de estudios, el plasma pen es una tecnología más reciente, y la evidencia científica de buena calidad —estudios grandes, controlados y con seguimiento a largo plazo— sobre su eficacia todavía es limitada. Esto no significa que no funcione, sino que sus resultados dependen mucho del equipo usado, la técnica y la experiencia de quien lo realiza, más que en tecnologías más estandarizadas."
        ]
      },
      {
        h: "Un punto de seguridad importante: no todos los dispositivos de 'plasma' son iguales",
        p: [
          "Vale la pena aclarar algo que genera confusión: bajo el nombre de 'plasma' circulan distintas tecnologías, con distinto nivel de evidencia y distinta regulación. En 2022, la FDA —la agencia reguladora de medicamentos y dispositivos de Estados Unidos— emitió una advertencia específica sobre el uso de un dispositivo de plasma de uso quirúrgico, aprobado para otros fines, cuando se usaba fuera de su indicación para tensado o resurfacing de la piel, por reportes de quemaduras serias y otras complicaciones. Esto no significa que todo plasma pen sea igual de riesgoso, pero sí ilustra por qué, en esta categoría de tratamientos, importa tanto qué dispositivo específico se usa —que esté validado para ese fin— como quién lo realiza."
        ]
      },
      {
        h: "Qué verificar antes de hacértelo",
        list: [
          "Que el procedimiento lo realice un profesional de la salud con formación específica, no solo un técnico estético",
          "Que el dispositivo utilizado esté validado y aprobado para el uso que se le va a dar",
          "Una evaluación previa de tu piel y tus expectativas, no una indicación genérica para cualquier persona",
          "Expectativas realistas: es un tratamiento de tensado leve a moderado, no un reemplazo de la cirugía en casos de flacidez más avanzada"
        ]
      }
    ],
    faqs: [
      {
        q: "¿El plasma pen reemplaza una blefaroplastia quirúrgica?",
        a: "Puede ser una alternativa en casos de flacidez leve a moderada, pero no sustituye la cirugía cuando la flacidez es más avanzada. Eso lo determina la evaluación de tu caso."
      },
      {
        q: "¿Es un tratamiento con láser?",
        a: "No. No emite luz como un láser; genera un arco de plasma que actúa de forma distinta sobre la piel."
      },
      {
        q: "¿Es seguro?",
        a: "La seguridad depende mucho del dispositivo específico usado y de quién lo realiza. Es importante verificar que el equipo esté validado para ese uso y que lo haga un profesional calificado."
      },
      {
        q: "¿Cuánto dura el resultado?",
        a: "Varía según cada caso; al ser una tecnología relativamente nueva, la evidencia sobre la duración exacta del efecto a largo plazo todavía es limitada."
      }
    ],
    relatedArticles: ["ipl-luz-pulsada-intensa-que-es", "laser-co2-fraccionado-que-es"],
    references: [
      { label: "U.S. Food and Drug Administration. Safety communication: risks of the Renuvion/J-Plasma device for aesthetic skin procedures. 2022.", url: "https://www.fda.gov/media/157448/download" }
    ]
  },
  {
    slug: "laser-diodo-que-es-para-que-sirve",
    title: "Láser diodo: qué es y para qué sirve",
    excerpt:
      "El láser diodo es la tecnología más usada para la depilación láser. Esto es lo que hace, qué tan efectivo es según tu tipo de piel y vello, y qué esperar del proceso completo.",
    seoTitle: "Láser Diodo en Machala: Depilación Láser | Dra. Karla Andrade",
    seoDescription:
      "¿Qué es el láser diodo y para qué sirve? La Dra. Karla Andrade, dermatóloga en Machala, explica cómo funciona la depilación láser y qué resultados esperar.",
    category: "Aparatología",
    datePublished: "2026-10-11",
    dateModified: "2026-10-11",
    readingMin: 6,
    relatedEspecialidad: "medicina-estetica",
    lead:
      "El láser diodo es, hoy en día, una de las tecnologías más usadas para la depilación láser, por su buen perfil de seguridad en distintos tipos de piel. Esto es lo que hace, qué tan efectivo es según tu caso, y qué esperar del proceso completo.",
    sections: [
      {
        h: "Cómo funciona",
        p: [
          "El láser diodo emite una longitud de onda que es absorbida selectivamente por la melanina, el pigmento presente en el folículo piloso. Esa energía se convierte en calor, que daña el folículo y reduce su capacidad de producir vello nuevo. Como el vello crece en ciclos, y el láser solo es efectivo sobre folículos en una fase activa de crecimiento, se necesitan varias sesiones espaciadas en el tiempo para tratar la mayor cantidad posible de folículos."
        ]
      },
      {
        h: "Qué tan efectivo es",
        p: [
          "Las revisiones disponibles muestran una reducción significativa y sostenida del vello después de varias sesiones, comparado con no tratar. La efectividad exacta varía según el contraste entre el color del vello y el de la piel: funciona mejor cuando hay más contraste —vello oscuro sobre piel clara—, aunque los equipos actuales han ampliado su rango de uso seguro a más tipos de piel que las tecnologías más antiguas."
        ]
      },
      {
        h: "Por qué el contraste de color importa",
        p: [
          "El mecanismo del láser depende de que la melanina del folículo absorba la energía de forma selectiva. Por eso, el vello muy claro, rubio o blanco —con poca melanina— responde mucho peor a este tipo de tratamiento, independientemente del tono de piel. Esta es una limitación real de la tecnología, no un problema de técnica o de equipo."
        ]
      },
      {
        h: "Seguridad según el tipo de piel",
        p: [
          "Los estudios que comparan resultados por tipo de piel muestran una eficacia en conjunto similar entre fototipos claros y oscuros, aunque el riesgo de efectos adversos en la piel —como quemaduras o cambios de pigmentación— es mayor en pieles más oscuras, lo que exige ajustar con más cuidado los parámetros del equipo y la experiencia de quien lo realiza en estos casos."
        ]
      },
      {
        h: "Qué esperar del proceso completo",
        p: [
          "No es un tratamiento de una sola sesión: se necesitan, en general, varias sesiones espaciadas en semanas, seguidas en algunos casos de sesiones de mantenimiento ocasionales, porque ningún protocolo actual logra una eliminación completa y permanente de todos los folículos en una sola ronda de tratamiento."
        ]
      }
    ],
    faqs: [
      {
        q: "¿El láser diodo elimina el vello para siempre?",
        a: "Logra una reducción significativa y sostenida, pero no siempre una eliminación completa y permanente en el 100% de los folículos; algunas personas necesitan sesiones de mantenimiento ocasionales."
      },
      {
        q: "¿Funciona en vello rubio o blanco?",
        a: "Mucho menos. El mecanismo depende de la melanina del folículo, por lo que el vello con poco pigmento responde peor, sin importar el tono de piel."
      },
      {
        q: "¿Es seguro en piel oscura?",
        a: "Los equipos actuales son más seguros que las tecnologías antiguas en pieles oscuras, pero el riesgo de efectos adversos sigue siendo mayor, por lo que la experiencia de quien realiza el tratamiento importa especialmente en estos casos."
      },
      {
        q: "¿Cuántas sesiones necesito?",
        a: "Varía según la zona, el tipo de vello y tu respuesta individual; se define en la evaluación, no con un número único para todos."
      }
    ],
    relatedArticles: ["ipl-luz-pulsada-intensa-que-es", "plasma-pen-que-es-que-puede-hacer"],
    references: [
      { label: "Efficacy of laser in hair removal: a network meta-analysis. 2023. PMID 37493187.", url: "https://pubmed.ncbi.nlm.nih.gov/37493187/" },
      { label: "Lasers for reduction of unwanted hair in skin of colour: a systematic review and meta-analysis. 2020. PMID 31587390.", url: "https://pubmed.ncbi.nlm.nih.gov/31587390/" }
    ]
  },
  {
    slug: "cuando-debo-evaluarme-los-lunares",
    title: "¿Cuándo debo hacerme una evaluación de lunares?",
    excerpt:
      "Saber cuándo pedir una cita no debería depender del azar. Esto es lo que indica que un lunar necesita evaluación pronto, y con qué frecuencia conviene un control general.",
    seoTitle: "¿Cuándo Evaluar un Lunar? Machala | Dra. Karla Andrade",
    seoDescription:
      "¿Cuándo debes hacerte una evaluación de lunares? La Dra. Karla Andrade, dermatóloga en Machala, explica las señales de alarma y la frecuencia de control recomendada.",
    category: "Cáncer de piel",
    datePublished: "2026-10-12",
    dateModified: "2026-10-12",
    readingMin: 6,
    relatedEspecialidad: "cancer-de-piel-y-dermatoscopia",
    lead:
      "Muchas personas posponen la evaluación de un lunar porque no saben si realmente amerita una cita, o porque piensan que 'si doliera, ya lo sabrían'. Esto es lo que realmente indica que conviene evaluarse pronto, y con qué frecuencia tiene sentido un control general, aunque no haya nada que te preocupe en particular.",
    sections: [
      {
        h: "La señal más importante: el cambio",
        p: [
          "Por encima de cualquier lista de síntomas, lo que más orienta hacia una evaluación es el cambio: un lunar que era igual durante años y empieza a verse distinto, un lunar nuevo que aparece después de los 30-40 años, o una lesión que no termina de sanar. El cambio, más que la apariencia en un momento puntual, es la señal que con más frecuencia lleva a un diagnóstico temprano."
        ],
        img: {
          src: "/blog/zonas-autoexamen-lunares.jpg",
          alt: "Ilustración de una silueta humana con las zonas clave para revisar lunares: cuero cabelludo, detrás de las orejas, espalda, manos y plantas de los pies",
          caption: "Zonas que conviene revisar en un autoexamen. Ilustración de referencia, no diagnóstica."
        }
      },
      {
        h: "Señales que ameritan una cita pronto, no 'cuando se pueda'",
        list: [
          "Un lunar que cambia de tamaño, forma o color en semanas o pocos meses",
          "Un lunar que sangra, pica o duele sin una causa clara (un golpe, el roce de la ropa)",
          "Una lesión que parece una herida o costra y no cicatriza en varias semanas",
          "Un lunar nuevo, distinto a los demás que tienes, sobre todo después de los 30-40 años",
          "Un lunar que se ve notoriamente distinto a tus otros lunares —el llamado signo del patito feo—, aunque no cumpla ningún otro criterio por separado"
        ]
      },
      {
        h: "La regla ABCDE, como guía, no como diagnóstico",
        p: [
          "La regla ABCDE —asimetría, bordes irregulares, color desigual, diámetro mayor a 6 mm, evolución— sigue siendo una guía útil y ampliamente usada, aunque las revisiones más recientes señalan sus límites: no todos los melanomas cumplen estos criterios, especialmente los más pequeños o en etapas iniciales, y por eso la evolución —el cambio en el tiempo— se considera, cada vez más, el criterio más confiable de los cinco. Puedes repasar la regla completa, con una ilustración de referencia, en nuestro artículo sobre el autoexamen de lunares en casa."
        ]
      },
      {
        h: "Con qué frecuencia conviene un control, aunque no tengas síntomas",
        p: [
          "Más allá de señales puntuales, un control periódico con un dermatólogo tiene sentido incluso sin ningún lunar sospechoso, porque permite detectar cambios sutiles que son difíciles de notar por cuenta propia, y establecer una referencia para comparar en el futuro. La frecuencia ideal depende de tu nivel de riesgo, no es la misma para todas las personas."
        ]
      },
      {
        h: "Quién debería controlarse con más frecuencia",
        p: [
          "Desarrollamos estos factores con más detalle en nuestro artículo sobre factores de riesgo de cáncer de piel."
        ],
        list: [
          "Personas con muchos lunares, o con lunares de aspecto atípico",
          "Antecedentes familiares de melanoma u otros cánceres de piel",
          "Piel clara, que se quema con facilidad y broncea poco",
          "Antecedentes personales de quemaduras solares importantes, sobre todo en la infancia",
          "Exposición solar acumulada por trabajo u otras actividades al aire libre",
          "Un diagnóstico previo de cáncer de piel"
        ]
      },
      {
        h: "No esperes a la 'próxima vez que te acuerdes'",
        p: [
          "El motivo más común por el que una lesión se diagnostica tarde no es la falta de información, sino la postergación: 'lo voy a revisar', 'ya se me pasó la cita', 'seguro no es nada'. Si algo de esta lista te suena familiar sobre algún lunar tuyo, esa es, en sí misma, la señal de que conviene agendar la evaluación ahora, no después."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Un lunar que pica siempre es motivo de preocupación?",
        a: "No siempre, pero si la picazón es nueva, persistente y sin causa clara —no por roce o irritación externa—, conviene que lo evalúe un dermatólogo."
      },
      {
        q: "¿Debo esperar al control anual si noto un cambio antes?",
        a: "No. El control anual es una referencia general; si notas un cambio antes, eso amerita adelantar la cita, no esperar a la fecha programada."
      },
      {
        q: "Tengo muchos lunares desde siempre, ¿eso aumenta mi riesgo?",
        a: "Sí, tener muchos lunares es uno de los factores que justifican un control más frecuente, aunque la mayoría de los lunares nunca se vuelven cáncer de piel."
      },
      {
        q: "¿Puedo saber por una foto si un lunar es peligroso?",
        a: "No con certeza. Una foto puede ayudar a notar un cambio en el tiempo, pero el diagnóstico requiere un examen presencial, idealmente con dermatoscopía."
      }
    ],
    relatedArticles: ["autoexamen-de-lunares-en-casa", "factores-de-riesgo-de-cancer-de-piel", "dermatoscopia-que-es-y-por-que-importa"],
    references: [
      { label: "Early detection of melanoma: reviewing the ABCDEs. J Am Acad Dermatol. 2015. PMID 25698455.", url: "https://pubmed.ncbi.nlm.nih.gov/25698455/" },
      { label: "ABCDE — an evolving concept in the early detection of melanoma. Arch Dermatol. 2005. PMID 16103334.", url: "https://pubmed.ncbi.nlm.nih.gov/16103334/" },
      { label: "Early diagnosis of cutaneous melanoma: revisiting the ABCD criteria. JAMA. 2004. PMID 15585738.", url: "https://pubmed.ncbi.nlm.nih.gov/15585738/" }
    ]
  },
  {
    slug: "tipos-de-cancer-de-piel-melanoma-basocelular-espinocelular",
    title: "Tipos de cáncer de piel: melanoma, carcinoma basocelular y espinocelular",
    excerpt:
      "No todos los cánceres de piel son iguales, ni igual de frecuentes, ni igual de agresivos. Esto es lo que distingue a los tres tipos principales.",
    seoTitle: "Tipos de Cáncer de Piel Machala | Dra. Karla Andrade",
    seoDescription:
      "¿Cuáles son los tipos de cáncer de piel? La Dra. Karla Andrade, dermatóloga en Machala, explica las diferencias entre melanoma, basocelular y espinocelular.",
    category: "Cáncer de piel",
    datePublished: "2026-10-12",
    dateModified: "2026-10-12",
    readingMin: 6,
    relatedEspecialidad: "cancer-de-piel-y-dermatoscopia",
    lead:
      "'Cáncer de piel' no es una sola enfermedad: agrupa varios tipos distintos, con orígenes, comportamientos y pronósticos diferentes. Entender esta diferencia ayuda a entender por qué el manejo —y la urgencia— no es igual en todos los casos.",
    sections: [
      {
        h: "Carcinoma basocelular: el más frecuente",
        p: [
          "Es el tipo de cáncer de piel más común. Se origina en las células basales de la epidermis, crece de forma lenta y rara vez se disemina a otras partes del cuerpo. Eso no significa que deba ignorarse: sin tratamiento, puede crecer e invadir tejidos cercanos, incluyendo cartílago o hueso en casos avanzados, especialmente en el rostro."
        ],
        img: {
          src: "/blog/lupa-revision-piel.jpg",
          alt: "Ilustración de una lupa sobre la silueta de un cuerpo humano de frente y de espaldas, representando la revisión general de la piel",
          caption: "Ilustración de referencia, no diagnóstica."
        }
      },
      {
        h: "Carcinoma espinocelular: el segundo más frecuente",
        p: [
          "Se origina en las células escamosas de la epidermis. Es más frecuente en zonas de exposición solar acumulada —orejas, labio inferior, dorso de las manos— y, a diferencia del basocelular, tiene mayor capacidad de diseminarse si no se trata a tiempo, aunque en la mayoría de los casos detectados temprano el pronóstico es muy favorable."
        ]
      },
      {
        h: "Melanoma: menos frecuente, pero el más agresivo",
        p: [
          "Se origina en los melanocitos, las células que producen el pigmento de la piel. Es mucho menos frecuente que los dos anteriores, pero tiene mayor capacidad de diseminarse a otros órganos si no se detecta a tiempo, lo que lo convierte en el tipo de cáncer de piel donde el diagnóstico precoz marca la mayor diferencia en el pronóstico."
        ]
      },
      {
        h: "Por qué el basocelular y el espinocelular se agrupan aparte",
        p: [
          "En la práctica clínica, el carcinoma basocelular y el espinocelular suelen agruparse bajo el término 'cáncer de piel no melanoma', porque comparten un origen —ambos derivan de los queratinocitos de la epidermis— y un abordaje de manejo en muchos sentidos similar, distinto al del melanoma."
        ]
      },
      {
        h: "Cómo se ve cada uno, en términos generales",
        p: [
          "Esta es una orientación general, no una guía para autodiagnosticarse: muchas lesiones benignas pueden parecerse a estas descripciones, y la única forma de confirmar el tipo de lesión es con evaluación clínica, dermatoscopía y, cuando corresponde, biopsia."
        ],
        list: [
          "Carcinoma basocelular: con frecuencia una lesión perlada o translúcida, a veces con pequeños vasos visibles, que puede sangrar con facilidad ante un roce mínimo y no termina de sanar",
          "Carcinoma espinocelular: suele verse como una placa rojiza, descamativa o costrosa, a veces como una verruga que no cicatriza, en zonas de exposición solar frecuente",
          "Melanoma: con más frecuencia se relaciona con un lunar que cambia —en tamaño, forma, color— o con una lesión nueva con los signos de la regla ABCDE"
        ]
      },
      {
        h: "Por qué el tratamiento varía según el tipo",
        p: [
          "El tipo de cáncer de piel, su tamaño, su localización y su comportamiento determinan el tratamiento: desde procedimientos menores hasta cirugías más complejas, que en algunos casos requieren coordinación con servicios especializados, sobre todo en zonas donde la reconstrucción es más delicada, como el rostro."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Cuál es el cáncer de piel más peligroso?",
        a: "El melanoma, por su mayor capacidad de diseminarse si no se detecta a tiempo, aunque es mucho menos frecuente que el basocelular o el espinocelular."
      },
      {
        q: "¿El carcinoma basocelular es grave?",
        a: "Rara vez se disemina a otros órganos, pero sin tratamiento puede crecer e invadir tejido cercano, por lo que de igual forma requiere diagnóstico y tratamiento oportunos."
      },
      {
        q: "¿Puedo saber qué tipo de cáncer de piel tengo por cómo se ve la lesión?",
        a: "No con certeza. La apariencia orienta, pero el diagnóstico definitivo requiere evaluación clínica y, generalmente, una biopsia."
      },
      {
        q: "¿Todos los cánceres de piel requieren cirugía?",
        a: "La mayoría sí requiere algún procedimiento para retirar la lesión, aunque el tipo de procedimiento varía mucho según el caso, desde técnicas menores hasta cirugías más extensas."
      }
    ],
    relatedArticles: ["factores-de-riesgo-de-cancer-de-piel", "que-pasa-despues-de-una-biopsia-de-piel", "cuando-debo-evaluarme-los-lunares"],
    references: [
      { label: "Mittal A, Mittal V. Comparative analysis of US guidelines for the management of cutaneous squamous cell and basal cell carcinoma. J Skin Cancer. 2024.", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10872771/" }
    ]
  },
  {
    slug: "factores-de-riesgo-de-cancer-de-piel",
    title: "Factores de riesgo de cáncer de piel: quién debe controlarse con más frecuencia",
    excerpt:
      "El riesgo de cáncer de piel no es el mismo para todas las personas. Esto es lo que lo aumenta, y por qué algunos grupos necesitan controles más frecuentes que otros.",
    seoTitle: "Factores de Riesgo de Cáncer de Piel | Dra. Karla Andrade",
    seoDescription:
      "¿Qué aumenta el riesgo de cáncer de piel? La Dra. Karla Andrade, dermatóloga en Machala, explica los factores de riesgo y quién debe controlarse con más frecuencia.",
    category: "Cáncer de piel",
    datePublished: "2026-10-12",
    dateModified: "2026-10-12",
    readingMin: 6,
    relatedEspecialidad: "cancer-de-piel-y-dermatoscopia",
    lead:
      "No todas las personas tienen el mismo riesgo de desarrollar cáncer de piel. Conocer qué lo aumenta ayuda a decidir, junto a tu dermatólogo, con qué frecuencia conviene un control, en lugar de aplicar la misma recomendación genérica a todo el mundo.",
    sections: [
      {
        h: "Factores que no se pueden modificar",
        list: [
          "Piel clara, que se quema con facilidad y broncea poco",
          "Cabello rubio o pelirrojo, y ojos claros",
          "Antecedentes familiares de melanoma u otros cánceres de piel",
          "Muchos lunares, o lunares de aspecto atípico",
          "Antecedentes personales de cáncer de piel previo",
          "Ciertas condiciones genéticas que afectan la reparación del ADN de la piel"
        ],
        img: {
          src: "/blog/proteccion-solar-factores-riesgo.jpg",
          alt: "Ilustración de un sol estilizado junto a un escudo que representa la protección de la piel frente a la radiación solar",
          caption: "Ilustración de referencia, no diagnóstica."
        }
      },
      {
        h: "Factores relacionados con la exposición solar",
        p: [
          "La exposición a la radiación ultravioleta —ya sea del sol o de camas de bronceado artificial— es el principal factor de riesgo modificable. El patrón de exposición importa: el melanoma se ha asociado más con episodios de exposición intensa e intermitente (como quemaduras solares, sobre todo en la infancia y la adolescencia), mientras que el carcinoma basocelular y el espinocelular se relacionan más con la exposición acumulada a lo largo de los años, como ocurre en trabajos al aire libre."
        ]
      },
      {
        h: "Por qué las quemaduras solares en la infancia pesan tanto",
        p: [
          "Las quemaduras solares durante la infancia y la adolescencia tienen un peso particular en el riesgo futuro de melanoma, más que las quemaduras en la adultez. Esto no significa que la exposición solar adulta no importe —sí importa, y mucho, para los otros tipos de cáncer de piel—, pero sí explica por qué la protección solar desde la niñez es una medida de prevención con impacto a largo plazo."
        ]
      },
      {
        h: "Inmunosupresión",
        p: [
          "Las personas con el sistema inmune debilitado —por ciertos medicamentos, trasplantes de órganos, o algunas enfermedades— tienen un riesgo más alto de cáncer de piel, y suelen requerir controles dermatológicos más frecuentes como parte de su seguimiento general."
        ]
      },
      {
        h: "Vivir cerca de la línea ecuatorial, como en Machala",
        p: [
          "La radiación UV es más intensa cerca del ecuador, y se mantiene relativamente alta durante todo el año, no solo en 'temporada de sol'. Esto hace que la protección solar constante —no solo en la playa— sea especialmente relevante para quienes viven en zonas como Machala."
        ]
      },
      {
        h: "Qué significa tener uno o más de estos factores",
        p: [
          "Tener uno o varios factores de riesgo no significa que vayas a desarrollar cáncer de piel, pero sí es información útil para que tu dermatólogo defina la frecuencia de control adecuada para ti, en lugar de una recomendación genérica igual para todos."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Tener la piel oscura me protege del cáncer de piel?",
        a: "Reduce el riesgo, pero no lo elimina. Además, cuando aparece en piel más oscura, suele diagnosticarse más tarde porque se sospecha menos, lo que puede empeorar el pronóstico."
      },
      {
        q: "¿El riesgo se hereda directamente de mis padres?",
        a: "Los antecedentes familiares aumentan el riesgo, pero la mayoría de los casos de cáncer de piel no tiene un familiar directo afectado; influyen varios factores a la vez, no solo la herencia."
      },
      {
        q: "Trabajo bajo el sol, ¿debo controlarme más seguido?",
        a: "Es razonable considerarlo, dado que la exposición solar acumulada es un factor de riesgo reconocido. Coméntalo con tu dermatólogo para definir la frecuencia adecuada."
      },
      {
        q: "¿Las camas de bronceado son igual de riesgosas que el sol?",
        a: "Sí, la radiación UV artificial de las camas de bronceado es un factor de riesgo reconocido para el cáncer de piel, de forma similar a la exposición solar."
      }
    ],
    relatedArticles: ["cuando-debo-evaluarme-los-lunares", "proteccion-solar-que-realmente-funciona", "tipos-de-cancer-de-piel-melanoma-basocelular-espinocelular"],
    references: [
      { label: "Risk factors for skin cancer: a review. 2024.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10931186/" }
    ]
  },
  {
    slug: "que-pasa-despues-de-una-biopsia-de-piel",
    title: "Qué pasa después de una biopsia de piel: del resultado al tratamiento",
    excerpt:
      "Que tu dermatólogo indique una biopsia genera ansiedad, y es comprensible. Esto es lo que realmente implica el proceso, paso a paso, desde el procedimiento hasta el resultado.",
    seoTitle: "Biopsia de Piel en Machala: Qué Esperar | Dra. Karla Andrade",
    seoDescription:
      "¿Qué pasa después de una biopsia de piel? La Dra. Karla Andrade, dermatóloga en Machala, explica el proceso completo, del procedimiento al resultado y tratamiento.",
    category: "Cáncer de piel",
    datePublished: "2026-10-12",
    dateModified: "2026-10-12",
    readingMin: 6,
    relatedEspecialidad: "cancer-de-piel-y-dermatoscopia",
    lead:
      "Escuchar que tu dermatólogo quiere hacerte una biopsia genera ansiedad, y es comprensible: la palabra 'biopsia' suele asociarse de inmediato con cáncer. Pero una biopsia es, ante todo, una herramienta diagnóstica, no un diagnóstico en sí misma. Esto es lo que realmente implica el proceso.",
    sections: [
      {
        h: "Qué es una biopsia de piel",
        p: [
          "Es un procedimiento sencillo, realizado en consultorio, que consiste en retirar una muestra de piel —o la lesión completa, según el caso— para analizarla bajo el microscopio. Se indica cuando la evaluación clínica y la dermatoscopía no son suficientes para determinar con certeza qué es una lesión, o para confirmar un diagnóstico antes de planificar un tratamiento."
        ],
        img: {
          src: "/blog/biopsia-piel-laboratorio.jpg",
          alt: "Ilustración de un maletín médico y un portaobjetos de laboratorio junto a un ícono de microscopio",
          caption: "Ilustración de referencia, no diagnóstica."
        }
      },
      {
        h: "Tipos de biopsia",
        p: ["La elección del tipo de biopsia depende de dónde está la lesión, de qué tan profunda parece, y de qué se sospecha clínicamente; no es una decisión arbitraria."],
        list: [
          "Biopsia por rasurado (shave): retira una capa fina de la lesión, usada en lesiones superficiales",
          "Biopsia por punch: usa un instrumento circular para obtener una muestra cilíndrica más profunda",
          "Biopsia excisional: retira la lesión completa, con un margen de piel sana alrededor"
        ]
      },
      {
        h: "El procedimiento en sí",
        p: [
          "Se realiza con anestesia local, por lo que las molestias durante el procedimiento suelen ser mínimas. Según el tipo de biopsia, puede requerir uno o dos puntos de sutura. Es un procedimiento ambulatorio: no requiere hospitalización ni interrumpe tus actividades de forma prolongada."
        ]
      },
      {
        h: "Cuánto tarda el resultado",
        p: [
          "La muestra se envía a un laboratorio de patología, donde un especialista la analiza bajo el microscopio. El tiempo de espera varía según el laboratorio, pero generalmente toma entre una y dos semanas. Es una espera que genera ansiedad, y es válido sentirla así; preguntar a tu médico el tiempo estimado en tu caso particular ayuda a manejar esa espera con más claridad."
        ]
      },
      {
        h: "Qué significa cada resultado posible",
        p: [
          "La mayoría de las biopsias de piel confirman lesiones benignas, no cáncer. Si el resultado es benigno, en general no se requiere más que el seguimiento habitual. Si confirma una lesión premaligna o maligna, el siguiente paso depende del tipo, el tamaño y la ubicación: puede ser suficiente con el procedimiento ya realizado, puede requerir una segunda intervención para ampliar márgenes, o puede requerir coordinación con servicios especializados para una cirugía más extensa, por ejemplo cuando la reconstrucción del área es compleja."
        ]
      },
      {
        h: "Por qué un diagnóstico de cáncer de piel no es, en la mayoría de los casos, una sentencia grave",
        p: [
          "Vale la pena decirlo con claridad: la gran mayoría de los cánceres de piel, detectados a tiempo, tienen un pronóstico muy favorable con el tratamiento adecuado. Esto no minimiza lo que implica recibir ese diagnóstico, pero sí es información real que ayuda a enfrentarlo desde un lugar menos catastrófico del que muchas personas imaginan."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Una biopsia significa que mi médico ya sospecha cáncer?",
        a: "No necesariamente. Se indica cada vez que la evaluación clínica no es suficiente para confirmar con certeza qué es una lesión, incluso cuando la sospecha de malignidad es baja."
      },
      {
        q: "¿La biopsia duele?",
        a: "Se realiza con anestesia local, por lo que las molestias durante el procedimiento suelen ser mínimas. Puede haber algo de sensibilidad los días posteriores."
      },
      {
        q: "¿Qué pasa si el resultado confirma cáncer de piel?",
        a: "El siguiente paso depende del tipo y la extensión: puede bastar con el procedimiento ya hecho, requerir una segunda intervención, o coordinarse con servicios especializados según la complejidad del caso."
      },
      {
        q: "¿Queda cicatriz después de una biopsia?",
        a: "Puede quedar una marca pequeña, que generalmente se difumina con el tiempo. El tamaño y la visibilidad dependen del tipo de biopsia y la zona tratada."
      }
    ],
    relatedArticles: ["tipos-de-cancer-de-piel-melanoma-basocelular-espinocelular", "dermatoscopia-que-es-y-por-que-importa", "cuando-debo-evaluarme-los-lunares"],
    references: [
      { label: "Shave and punch biopsy for skin lesions. Am Fam Physician. 2011.", url: "https://www.aafp.org/pubs/afp/issues/2011/1101/p995.html" },
      { label: "Mohs micrographic surgery — what the gold standard in dermatologic surgery offers us: a literature review.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5087221" }
    ]
  },
  {
    slug: "dermatoscopia-que-es-y-por-que-importa",
    title: "Dermatoscopía: qué es y por qué cambia el diagnóstico temprano",
    excerpt:
      "La dermatoscopía es la herramienta central para diferenciar un lunar benigno de uno que merece más atención. Esto es lo que hace, y qué dice la evidencia sobre su precisión.",
    seoTitle: "Dermatoscopía en Machala: Qué Es | Dra. Karla Andrade",
    seoDescription:
      "¿Qué es la dermatoscopía y por qué es clave para el diagnóstico temprano? La Dra. Karla Andrade, dermatóloga en Machala, explica cómo funciona y qué dice la evidencia.",
    category: "Cáncer de piel",
    datePublished: "2026-10-12",
    dateModified: "2026-10-12",
    readingMin: 6,
    relatedEspecialidad: "cancer-de-piel-y-dermatoscopia",
    lead:
      "La dermatoscopía es, hoy en día, la herramienta central para evaluar lunares y lesiones de la piel con criterio, más allá de lo que se puede ver a simple vista. Esto es lo que hace exactamente, y qué respaldo tiene esta técnica.",
    sections: [
      {
        h: "Qué es",
        p: [
          "Un dermatoscopio es un dispositivo con luz y aumento que permite examinar las capas superficiales de la piel con un detalle que el ojo desnudo no alcanza a ver. Revela estructuras y patrones de pigmento que ayudan a diferenciar lesiones benignas de aquellas que requieren más atención."
        ],
        img: {
          src: "/blog/dermatoscopia-ilustracion.jpg",
          alt: "Ilustración de un dermatoscopio siendo usado sobre el hombro de una persona, sin mostrar ninguna lesión en la piel",
          caption: "Ilustración de referencia, no diagnóstica."
        }
      },
      {
        h: "Por qué mejora el diagnóstico",
        p: [
          "Las revisiones científicas disponibles muestran que agregar dermatoscopía al examen visual tradicional mejora la precisión diagnóstica para detectar melanoma, comparado con la evaluación a simple vista únicamente. Esa mejoría es mayor cuando el examen se realiza de forma presencial, en consulta, que cuando se evalúa solo a partir de una imagen."
        ]
      },
      {
        h: "No es infalible, y eso también importa decirlo",
        p: [
          "La dermatoscopía mejora la precisión diagnóstica, pero no la garantiza al cien por ciento: sigue siendo, en parte, una evaluación visual que depende de la experiencia de quien la realiza, y algunas estructuras se interpretan con más certeza que otras. Por eso, ante cualquier duda razonable, el siguiente paso sigue siendo la biopsia, no una afirmación definitiva basada solo en la imagen dermatoscópica."
        ]
      },
      {
        h: "Qué patrones ayudan más a sospechar melanoma",
        p: [
          "Las revisiones sobre estructuras dermatoscópicas específicas señalan que ciertos hallazgos, como la pigmentación irregular o el llamado 'velo azul-blanquecino', se asocian con mayor frecuencia a melanoma cuando están presentes, aunque ningún hallazgo aislado es, por sí solo, diagnóstico: el patrón completo de la lesión es lo que orienta la decisión clínica."
        ]
      },
      {
        h: "Por qué no reemplaza el autoexamen, ni al revés",
        p: [
          "El autoexamen en casa y el control dermatoscópico profesional cumplen funciones distintas y complementarias: el autoexamen ayuda a notar cambios entre una consulta y otra; la dermatoscopía permite un análisis detallado que no se puede replicar en casa. Ninguno reemplaza al otro."
        ]
      },
      {
        h: "Es un examen simple, sin preparación",
        p: [
          "No duele ni requiere ninguna preparación previa: se apoya el dispositivo sobre la piel y se observa la lesión con aumento. En muchos casos, el dermatólogo puede fotografiar y archivar las imágenes dermatoscópicas de lunares que ameritan seguimiento, para comparar objetivamente su evolución en controles futuros."
        ]
      }
    ],
    faqs: [
      {
        q: "¿La dermatoscopía reemplaza la biopsia?",
        a: "No. Ayuda a decidir si una lesión necesita biopsia, y puede aumentar la confianza en que una lesión es benigna, pero no reemplaza el análisis bajo el microscopio cuando hay duda razonable."
      },
      {
        q: "¿Es un examen doloroso?",
        a: "No, es completamente indoloro y no requiere ninguna preparación."
      },
      {
        q: "¿Todos los dermatólogos usan dermatoscopía?",
        a: "Es una herramienta estándar en dermatología, aunque la experiencia con su interpretación varía; preguntar si tu evaluación incluye dermatoscopía es razonable si te preocupa un lunar en particular."
      },
      {
        q: "¿Puedo pedir que fotografíen mis lunares para comparar en el futuro?",
        a: "Sí, es una práctica habitual en el seguimiento de lunares que ameritan control, y le facilita a tu dermatólogo evaluar objetivamente si hubo cambios."
      }
    ],
    relatedArticles: ["cuando-debo-evaluarme-los-lunares", "que-pasa-despues-de-una-biopsia-de-piel", "autoexamen-de-lunares-en-casa"],
    references: [
      { label: "Dermoscopic structures for diagnosing melanoma: a meta-analysis. JAMA Dermatol. 2021. PMID 34347005.", url: "https://pubmed.ncbi.nlm.nih.gov/34347005/" },
      { label: "Dellavalle RP, et al. Cochrane review: dermoscopy versus visual inspection for diagnosing skin cancer in adults. 2018.", url: "https://www.cochrane.org/evidence/CD011902_how-accurate-dermoscopy-compared-visual-inspection-skin-diagnosing-skin-cancer-melanoma-adults" }
    ]
  },
  {
    slug: "botox-en-el-masetero-para-que-sirve",
    title: "Botox en el masetero: para qué sirve y qué esperar",
    excerpt:
      "La toxina botulínica en el masetero se usa tanto para afinar el contorno del rostro como para aliviar el bruxismo. Esto es lo que hace, cómo funciona y qué resultados son realistas.",
    seoTitle: "Botox en el Masetero en Machala | Dra. Karla Andrade",
    seoDescription:
      "¿Para qué sirve el Botox en el masetero? La Dra. Karla Andrade, dermatóloga en Machala, explica sus usos estético y terapéutico, y qué resultados esperar.",
    category: "Aparatología",
    datePublished: "2026-10-12",
    dateModified: "2026-10-12",
    readingMin: 6,
    relatedEspecialidad: "medicina-estetica",
    lead:
      "El Botox en el masetero es uno de los procedimientos de medicina estética más pedidos, aunque muchas personas no saben que también tiene un uso terapéutico, más allá de lo cosmético. Esto es lo que hace realmente, para qué sirve, y qué resultados es razonable esperar.",
    sections: [
      {
        h: "Qué es el masetero y por qué se trata",
        p: [
          "El masetero es uno de los principales músculos de la masticación, ubicado a los lados de la mandíbula. Cuando está hipertrofiado —agrandado, por lo general debido a apretar los dientes o rechinarlos de forma crónica— puede dar al rostro un aspecto más cuadrado o ancho en la zona inferior, y en algunos casos asociarse a dolor mandibular o dolor de cabeza."
        ]
      },
      {
        h: "Dos motivos distintos para tratarlo",
        list: [
          "Motivo estético: afinar el contorno del rostro en la zona mandibular, buscando un óvalo facial más definido",
          "Motivo terapéutico: aliviar la tensión y el dolor asociados al bruxismo —apretar o rechinar los dientes—, cuando el masetero está crónicamente sobrecargado"
        ]
      },
      {
        p: [
          "Ambos motivos son válidos y pueden coexistir en la misma persona, pero conviene tenerlos claros porque definen expectativas distintas: quien busca solo alivio del bruxismo no necesariamente busca, ni necesita, un cambio visible en el contorno facial."
        ]
      },
      {
        h: "Cómo actúa",
        p: [
          "La toxina botulínica relaja el músculo al bloquear temporalmente la señal nerviosa que provoca su contracción. Con el masetero, el efecto va más allá del alivio inmediato de la tensión: al usarse menos intensamente durante varios meses, el músculo tiende a atrofiarse parcialmente, lo que reduce su volumen. Por eso el cambio en el contorno del rostro no es inmediato, sino progresivo."
        ]
      },
      {
        h: "Qué tan rápido se ven los resultados",
        p: [
          "Este es uno de los puntos que más confunde a los pacientes: a diferencia de otras zonas donde el efecto estético se nota en días, en el masetero el afinamiento visible del rostro suele tomar entre dos y tres meses, y en algunos casos se consolida mejor después de dos o tres sesiones espaciadas. Esperar un cambio inmediato lleva a expectativas frustradas sobre un procedimiento que, en realidad, sí está funcionando."
        ]
      },
      {
        h: "Duración del efecto",
        p: [
          "El efecto no es permanente: tanto el alivio del bruxismo como el afinamiento del contorno tienden a revertirse gradualmente si no se repite el tratamiento, generalmente cada 6 a 12 meses según la respuesta individual."
        ]
      },
      {
        h: "Quién es candidato",
        p: [
          "No toda persona con un rostro de aspecto cuadrado necesita este procedimiento, ni todo bruxismo requiere toxina botulínica: hay casos donde otras intervenciones —como una férula dental, manejo del estrés, o fisioterapia— son más adecuadas, solas o combinadas. Determinar si el masetero es, realmente, la causa del dolor o del contorno que te preocupa, es parte de la evaluación."
        ]
      },
      {
        h: "Riesgos y qué evitar",
        list: [
          "Asimetría en la sonrisa, si la toxina migra a músculos cercanos",
          "Dificultad para masticar alimentos duros, si la dosis es excesiva para tu caso",
          "Resultado estético distinto al esperado, si la causa de fondo del contorno facial no era el masetero"
        ]
      },
      {
        p: [
          "Estos riesgos son infrecuentes cuando el procedimiento lo realiza un profesional con experiencia y una dosis ajustada a cada paciente, pero existen, y deben explicarse antes del procedimiento, no después."
        ]
      },
      {
        h: "Qué dice la evidencia",
        p: [
          "Las revisiones disponibles describen el procedimiento como generalmente seguro, con efectos adversos poco frecuentes y en su mayoría temporales. Al mismo tiempo, señalan que todavía falta evidencia de ensayos clínicos grandes y bien diseñados sobre su eficacia a largo plazo, tanto para el bruxismo como para el afinamiento estético, por lo que buena parte del respaldo actual viene de la experiencia clínica acumulada más que de estudios controlados extensos."
        ]
      }
    ],
    faqs: [
      {
        q: "¿El Botox en el masetero duele?",
        a: "Es un procedimiento con molestias mínimas, similar a otras aplicaciones de toxina botulínica; no suele requerir anestesia más que, en algunos casos, una crema tópica."
      },
      {
        q: "¿Cuánto tarda en notarse el cambio en el rostro?",
        a: "El afinamiento del contorno es progresivo, no inmediato: suele notarse con claridad entre los dos y tres meses posteriores al tratamiento."
      },
      {
        q: "¿Sirve para cualquier tipo de bruxismo?",
        a: "No necesariamente. Hay distintas causas y grados de bruxismo, y la evaluación determina si la toxina botulínica es la opción más adecuada o si conviene combinarla con otras medidas."
      },
      {
        q: "¿El efecto es permanente?",
        a: "No. Tanto el alivio del bruxismo como el afinamiento del rostro se revierten gradualmente con el tiempo, por lo que suele requerir sesiones de mantenimiento."
      }
    ],
    relatedArticles: ["ipl-luz-pulsada-intensa-que-es", "plasma-pen-que-es-que-puede-hacer"],
    references: [
      { label: "The role of botulinum toxin for masseter muscle hypertrophy: a comprehensive review.", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11860558/" },
      { label: "Adverse effects of treating bruxism and masseter muscle hypertrophy with botulinum toxin injection — a literature review. Quality in Sport. 2024.", url: "https://doaj.org/article/8d9dcbb74a15443b9ee8f77fd6ee6cf5" }
    ]
  },
  {
    slug: "verrugas-en-ninos-cuando-preocuparse",
    title: "Verrugas en niños: cuándo preocuparse y por qué consultar",
    excerpt:
      "Encontrar una verruga en la piel de tu hijo preocupa de inmediato, aunque casi nunca hay algo grave detrás. Esto es lo que son, por qué son tan frecuentes, y qué señales sí ameritan evaluación pronto.",
    seoTitle: "Verrugas en Niños Machala: ¿Cuándo Preocuparse? | Dra. Karla Andrade",
    seoDescription:
      "¿Cuándo preocuparse por una verruga en un niño? La Dra. Karla Andrade, dermatóloga pediátrica en Machala, explica las señales de alarma y el tratamiento.",
    category: "Dermatología clínica",
    datePublished: "2026-10-12",
    dateModified: "2026-10-12",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-pediatrica",
    lead:
      "Encontrar una verruga en la piel de tu hijo genera preocupación inmediata, aunque en la gran mayoría de los casos no hay nada grave detrás. Esto es lo que realmente son, por qué son tan frecuentes en la infancia, y qué señales sí ameritan una evaluación pronto.",
    sections: [
      {
        h: "Qué son y por qué son tan frecuentes en niños",
        p: [
          "Las verrugas son causadas por el virus del papiloma humano (VPH), que infecta las capas superficiales de la piel. Son extremadamente frecuentes en la edad escolar —se estima que afectan entre el 30% y el 70% de los niños en algún momento— y se contagian por contacto directo con la piel o con superficies, favorecidas por pequeñas heridas o por la piel húmeda, como en piscinas o vestidores."
        ]
      },
      {
        h: "La buena noticia: la mayoría desaparece sola",
        p: [
          "Sin ningún tratamiento, una parte importante de las verrugas se resuelve por sí sola con el tiempo: aproximadamente un 30% desaparece en el primer año, y hasta un 60% en dos años, a medida que el sistema inmune del niño las controla. Esto no significa que nunca haya que tratarlas, pero sí explica por qué 'esperar y observar' es, en muchos casos, una estrategia razonable, no una negligencia."
        ]
      },
      {
        h: "Señales que sí ameritan una evaluación pronto",
        list: [
          "La verruga duele, sangra con facilidad, o crece rápidamente en poco tiempo",
          "Cambia de forma o color de manera notoria",
          "No responde a un tratamiento de venta libre después de varias semanas de uso constante",
          "Se multiplica o se extiende rápidamente a otras zonas",
          "El niño tiene una condición que afecta su sistema inmune, lo que puede hacer que las verrugas sean más persistentes o numerosas",
          "Existe duda real sobre si realmente es una verruga, y no otra cosa que se le parece"
        ]
      },
      {
        h: "Por qué puede confundirse con otras lesiones",
        p: [
          "No toda lesión que parece una verruga lo es: el molusco contagioso, por ejemplo, es otra infección viral frecuente en niños, con un aspecto distinto pero que a veces se confunde. Una evaluación profesional, ante la duda, evita tratar algo por lo que no es."
        ]
      },
      {
        h: "Verrugas en el área genital: un caso distinto",
        p: [
          "Las verrugas en el área genital de un niño son poco frecuentes y siempre ameritan una evaluación cuidadosa por un profesional. Aunque pueden tener explicaciones no relacionadas con abuso —como el contacto con verrugas de otras partes del propio cuerpo del niño, o el contagio no sexual por otras vías—, es importante que un médico evalúe cada caso de forma individual, con la seriedad y el cuidado que amerita."
        ]
      },
      {
        h: "Tratamiento: con paciencia, no con prisa",
        p: [
          "Los tratamientos más usados y con mejor respaldo son el ácido salicílico, de aplicación tópica repetida durante varias semanas, y la crioterapia (congelamiento), aplicada en consulta. Ningún tratamiento es efectivo en una sola sesión: ambos requieren constancia, y combinarlos suele dar mejores resultados que usar uno solo. Es importante tener expectativas realistas desde el inicio, sobre todo en niños, para quienes el proceso puede ser incómodo."
        ]
      },
      {
        h: "Qué no hacer en casa",
        p: [
          "Cortar, arrancar o quemar una verruga por cuenta propia no es seguro: puede causar sangrado, infección, o diseminar el virus a otras zonas de la piel del niño. Si vas a intentar un tratamiento de venta libre, hazlo con un producto pensado para ese fin y, ante cualquier duda, consulta antes de intentar algo más agresivo."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Las verrugas de mi hijo son contagiosas para otros niños?",
        a: "Sí, se contagian por contacto directo con la piel o con superficies compartidas, como en piscinas o vestidores. No es necesario aislar al niño, pero evitar compartir toallas o calzado húmedo ayuda a reducir el contagio."
      },
      {
        q: "¿Debo tratar la verruga aunque no moleste?",
        a: "No siempre es necesario de inmediato; muchas desaparecen solas. Si no genera molestia ni cumple ninguna señal de alarma, observarla durante un tiempo es una opción razonable, idealmente comentada con el pediatra o dermatólogo."
      },
      {
        q: "¿Es normal que le salgan varias verrugas a la vez?",
        a: "Es relativamente frecuente, sobre todo en niños con piel atópica o con heridas pequeñas frecuentes. Si se multiplican muy rápido, vale la pena una evaluación."
      },
      {
        q: "¿La crioterapia es dolorosa para un niño?",
        a: "Puede generar molestia breve durante la aplicación. En niños muy pequeños, a veces se prefiere empezar con tratamientos tópicos menos incómodos antes de considerar la crioterapia."
      },
      {
        q: "¿Debo preocuparme si aparece una verruga en el área genital?",
        a: "Amerita siempre una evaluación médica cuidadosa. Existen explicaciones no relacionadas con abuso, pero un profesional debe evaluar cada caso de forma individual."
      }
    ],
    relatedArticles: ["tipos-de-nevos-lunares-seguimiento-especial", "dermatoscopia-que-es-y-por-que-importa"],
    references: [
      { label: "Gerlero P, Hernández-Martín A. Treatment of warts in children: an update. Actas Dermosifiliogr. 2016.", url: "https://actasdermo.org/es-download-pdf-S1578219016301329" },
      { label: "Kwok CS, et al. Topical treatments for cutaneous warts. Cochrane Database Syst Rev. 2012. PMID 22972052.", url: "https://pubmed.ncbi.nlm.nih.gov/22972052/" }
    ]
  },
  {
    slug: "tipos-de-nevos-lunares-seguimiento-especial",
    title: "Tipos de nevos (lunares): ¿cuáles necesitan seguimiento especial?",
    excerpt:
      "No todos los lunares tienen el mismo origen ni el mismo riesgo. Esto es lo que distingue a los distintos tipos de nevos, y por qué algunos requieren un seguimiento más cercano que otros.",
    seoTitle: "Tipos de Nevos y Lunares en Machala | Dra. Karla Andrade",
    seoDescription:
      "¿Qué tipos de nevos existen y cuáles necesitan seguimiento especial? La Dra. Karla Andrade, dermatóloga en Machala, explica los nevos congénitos, atípicos y más.",
    category: "Cáncer de piel",
    datePublished: "2026-10-12",
    dateModified: "2026-10-12",
    readingMin: 7,
    relatedEspecialidad: "cancer-de-piel-y-dermatoscopia",
    lead:
      "No todos los lunares —o nevos, su nombre médico— son iguales ni tienen el mismo origen. Esto es lo que distingue a los distintos tipos, y por qué algunos requieren un seguimiento más cercano que otros.",
    sections: [
      {
        h: "Qué es un nevo",
        p: [
          "Un nevo es una acumulación benigna de melanocitos, las células que producen el pigmento de la piel. Es el término médico para lo que coloquialmente llamamos lunar. La gran mayoría de las personas tiene decenas de nevos, y la inmensa mayoría permanece benigna durante toda la vida."
        ]
      },
      {
        h: "Nevos congénitos vs. adquiridos",
        p: [
          "Los nevos congénitos están presentes desde el nacimiento o aparecen en los primeros meses de vida, y son menos frecuentes que los adquiridos, que aparecen después, principalmente durante la infancia y la adolescencia, y siguen apareciendo —en menor medida— durante la adultez temprana. La mayoría de los lunares que tiene una persona son de tipo adquirido."
        ]
      },
      {
        h: "Por qué el tamaño de un nevo congénito importa",
        p: [
          "Los nevos congénitos se clasifican, sobre todo, según su tamaño: pequeños, medianos, grandes y gigantes. Esta clasificación no es solo descriptiva: se relaciona con el riesgo de melanoma a lo largo de la vida. Las revisiones disponibles muestran que los nevos congénitos medianos, grandes y gigantes conllevan un riesgo de melanoma mayor al de la población general, mientras que el riesgo asociado a los nevos congénitos pequeños sigue sin estar claramente establecido en la evidencia actual."
        ]
      },
      {
        h: "Qué tan alto es ese riesgo",
        p: [
          "El riesgo absoluto de desarrollar melanoma varía mucho según el tamaño: en nevos congénitos grandes o gigantes, algunas revisiones lo estiman entre 1% y 10% a lo largo de la vida, muy por encima del riesgo poblacional general. En nevos medianos y pequeños, el riesgo absoluto estimado es considerablemente menor, aunque sigue siendo más alto que en la población sin estos nevos. Estas cifras son estimaciones de revisiones científicas, no un pronóstico individual: el seguimiento especializado es lo que permite interpretar el riesgo real de cada caso."
        ]
      },
      {
        h: "Nevos atípicos o displásicos",
        p: [
          "Son nevos adquiridos con características distintas a un lunar típico —bordes menos definidos, color variado, tamaño mayor al habitual—, que pueden parecerse, hasta cierto punto, a los signos de alerta de un melanoma. Su manejo genera debate incluso entre especialistas: no existe consenso único sobre cuándo extirparlos y cuándo solo darles seguimiento, y la evidencia disponible es limitada. En la práctica, el seguimiento clínico y fotográfico cercano suele ser la estrategia más aceptada para la mayoría de los casos, reservando la biopsia para los nevos que cambian o generan mayor duda."
        ]
      },
      {
        h: "Otros tipos que conviene conocer",
        list: [
          "Nevo de Spitz: más frecuente en niños y adultos jóvenes, de crecimiento a veces rápido, que puede generar dudas diagnósticas incluso para especialistas con experiencia",
          "Nevo azul: de color azul-grisáceo característico, generalmente benigno, pero que en ocasiones requiere diferenciarlo de otras lesiones pigmentadas",
          "Nevo halo: un lunar rodeado por un área de piel despigmentada, por una reacción inmune local; en general es benigno, aunque amerita evaluación para confirmarlo"
        ]
      },
      {
        h: "Por qué no todos los nevos 'raros' necesitan biopsia inmediata",
        p: [
          "Que un nevo no se vea como el típico lunar redondo y uniforme no significa, automáticamente, que sea peligroso: existen varios tipos de nevos benignos con apariencias particulares, como los mencionados arriba. Lo que determina si un nevo necesita biopsia no es solo su apariencia aislada, sino la evaluación clínica completa, la dermatoscopía, y —sobre todo— si ha cambiado respecto a como era antes."
        ]
      },
      {
        h: "El valor del seguimiento fotográfico",
        p: [
          "Para nevos atípicos o congénitos que ameritan vigilancia, fotografiar y documentar su apariencia permite comparar objetivamente su evolución en controles futuros, en lugar de depender de la memoria o la impresión subjetiva de un control a otro. Es una herramienta simple que aporta mucho valor en el seguimiento a largo plazo."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Todos los nevos congénitos deben extirparse?",
        a: "No. La decisión depende del tamaño, la ubicación y la evaluación individual; muchos se controlan con seguimiento clínico y fotográfico sin necesidad de cirugía."
      },
      {
        q: "¿Un nevo atípico es lo mismo que un melanoma?",
        a: "No. Un nevo atípico es una lesión benigna con ciertas características distintas a un lunar típico; el melanoma es un tipo de cáncer. La diferencia la establece la evaluación médica, no la apariencia por sí sola."
      },
      {
        q: "¿Los nevos que salen de adulto son más peligrosos que los de la infancia?",
        a: "Un nevo nuevo en la adultez, sobre todo después de los 30-40 años, amerita evaluación, porque la mayoría de los nevos adquiridos aparecen antes de esa edad. Eso no significa automáticamente que sea peligroso, pero sí que vale la pena revisarlo."
      },
      {
        q: "¿Con qué frecuencia debo controlar un nevo atípico?",
        a: "Depende del caso particular: tu dermatólogo define la frecuencia según el tipo de nevo, tus antecedentes y los hallazgos del control inicial."
      }
    ],
    relatedArticles: [
      "cuando-debo-evaluarme-los-lunares",
      "autoexamen-de-lunares-en-casa",
      "dermatoscopia-que-es-y-por-que-importa",
      "verrugas-en-ninos-cuando-preocuparse"
    ],
    references: [
      { label: "Scard C, et al. Risk of melanoma in congenital melanocytic nevi of all sizes: a systematic review. J Eur Acad Dermatol Venereol. 2023.", url: "https://doi.org/10.1111/jdv.18581" },
      { label: "Kim CC, et al. Clinical management of atypical (dysplastic) nevi: a consensus statement. JAMA Dermatol. 2015. PMID 25409291.", url: "https://pubmed.ncbi.nlm.nih.gov/25409291/" }
    ]
  },
  {
    slug: "rosacea-que-es-y-como-se-trata",
    title: "Rosácea: qué es y cómo se trata",
    excerpt:
      "La rosácea es una de las condiciones de piel más frecuentes en consulta, y también una de las más confundidas con piel sensible o acné adulto. Esto es lo que realmente es, y qué opciones de tratamiento existen.",
    seoTitle: "Rosácea en Machala: Qué Es y Tratamiento | Dra. Karla Andrade",
    seoDescription:
      "¿Qué es la rosácea y cómo se trata? La Dra. Karla Andrade, dermatóloga en Machala, explica sus causas, desencadenantes y las opciones de tratamiento disponibles.",
    category: "Dermatología clínica",
    datePublished: "2026-10-13",
    dateModified: "2026-10-13",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "La rosácea es una de las condiciones de piel más frecuentes en consulta, y también una de las más mal entendidas: muchas personas la confunden con 'piel sensible' o con acné adulto durante años antes de recibir el diagnóstico correcto. Esto es lo que realmente es, y qué opciones de tratamiento existen.",
    sections: [
      {
        h: "Qué es",
        p: [
          "Es una condición inflamatoria crónica que afecta principalmente el centro del rostro: mejillas, nariz, frente y mentón. Se manifiesta con enrojecimiento persistente, vasos sanguíneos visibles, y en muchos casos lesiones inflamatorias que se parecen al acné, aunque sin los puntos negros característicos de este. En algunos casos también afecta los ojos, con sequedad o irritación."
        ]
      },
      {
        h: "Por qué aparece",
        p: [
          "Su causa exacta no se conoce del todo, pero las revisiones actuales la describen como multifactorial: involucra una respuesta exagerada de los vasos sanguíneos, desregulación del sistema inmune de la piel, un posible rol de microorganismos que viven normalmente en la piel, y predisposición genética. No es causada por mala higiene ni por consumo excesivo de alcohol, aunque el alcohol sí puede ser un desencadenante de los brotes en algunas personas."
        ]
      },
      {
        h: "Distintas formas de presentarse",
        list: [
          "Enrojecimiento persistente y vasos sanguíneos visibles, sin necesariamente lesiones tipo grano",
          "Lesiones inflamatorias tipo acné, con enrojecimiento de fondo",
          "Engrosamiento de la piel, más frecuente en la nariz, en casos menos comunes y más avanzados",
          "Afectación ocular, con sequedad, irritación o sensación de arenilla"
        ]
      },
      {
        h: "Qué la desencadena o empeora",
        p: [
          "Los desencadenantes varían bastante de una persona a otra, pero los más frecuentes incluyen la exposición solar, las comidas picantes o muy calientes, el alcohol, el estrés, el ejercicio intenso y los cambios bruscos de temperatura. Identificar tus propios desencadenantes —llevando un registro simple si hace falta— ayuda a espaciar los brotes."
        ]
      },
      {
        h: "Tratamiento",
        p: [
          "La rosácea no tiene cura definitiva, pero se controla muy bien. Las opciones incluyen tratamientos tópicos (como metronidazol, ácido azelaico o ivermectina), tratamiento oral en casos con más lesiones inflamatorias, y tecnologías como la luz pulsada intensa para mejorar los vasos visibles, que desarrollamos en nuestro artículo sobre IPL. La protección solar diaria es, en todos los casos, un pilar del tratamiento, no un complemento opcional."
        ]
      },
      {
        h: "Por qué el cuidado diario debe ser distinto",
        p: [
          "La piel con rosácea tiende a ser más reactiva: los exfoliantes agresivos, los productos con alcohol o fragancias fuertes, y el agua muy caliente suelen empeorar el enrojecimiento. Una rutina simple, con productos suaves y protector solar constante, es la base sobre la que se construye cualquier tratamiento médico."
        ]
      }
    ],
    faqs: [
      {
        q: "¿La rosácea es lo mismo que el acné?",
        a: "No. Aunque pueden parecerse, la rosácea no tiene los puntos negros característicos del acné y responde a tratamientos distintos. Confundirlas suele llevar a tratamientos que no funcionan."
      },
      {
        q: "¿La rosácea se cura?",
        a: "No tiene cura definitiva, pero se controla muy bien con el tratamiento adecuado, logrando largos períodos sin brotes visibles."
      },
      {
        q: "¿Debo evitar el sol por completo?",
        a: "No es necesario evitarlo por completo, pero la protección solar diaria es esencial, porque el sol es uno de los desencadenantes más frecuentes de los brotes."
      },
      {
        q: "¿Por qué me arde la piel con productos que antes toleraba?",
        a: "La piel con rosácea suele volverse más reactiva con el tiempo. Vale la pena simplificar tu rutina y evitar activos agresivos, y comentarlo con tu dermatólogo."
      }
    ],
    relatedArticles: ["ipl-luz-pulsada-intensa-que-es"],
    references: [
      { label: "Rosacea pathogenesis and management: a practical clinical review.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10821660/" },
      { label: "The latest advances in rosacea treatment: a systematic review. Pharmaceuticals. 2026.", url: "https://doi.org/10.3390/ph19070982" }
    ]
  },
  {
    slug: "dermatitis-seborreica-que-es-y-como-tratarla",
    title: "Dermatitis seborreica: qué es y cómo tratarla",
    excerpt:
      "La dermatitis seborreica es una de las condiciones de piel más comunes, aunque la mayoría la conoce solo por uno de sus síntomas: la caspa. Esto es lo que realmente es, dónde más puede aparecer, y cómo se trata.",
    seoTitle: "Dermatitis Seborreica en Machala | Dra. Karla Andrade",
    seoDescription:
      "¿Qué es la dermatitis seborreica y cómo se trata? La Dra. Karla Andrade, dermatóloga en Machala, explica sus causas y el tratamiento en cara, cuero cabelludo y más.",
    category: "Dermatología clínica",
    datePublished: "2026-10-13",
    dateModified: "2026-10-13",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "La dermatitis seborreica es una de las condiciones de piel más comunes y, a la vez, una de las menos reconocidas por su nombre: la mayoría de las personas la conoce solo por uno de sus síntomas, la caspa. Esto es lo que realmente es, dónde puede aparecer además del cuero cabelludo, y cómo se trata.",
    sections: [
      {
        h: "Qué es",
        p: [
          "Es una condición inflamatoria crónica y recurrente, que afecta sobre todo las zonas de la piel con más glándulas sebáceas: cuero cabelludo, cejas, surcos a los lados de la nariz, y en ocasiones el pecho. Se caracteriza por enrojecimiento y escamas de aspecto grasoso."
        ]
      },
      {
        h: "Por qué aparece",
        p: [
          "Es multifactorial: interviene el exceso de grasa de la piel, una levadura llamada Malassezia que vive normalmente en la piel de todas las personas pero que en algunas desencadena una respuesta inflamatoria mayor, y la susceptibilidad individual de cada persona. No está causada por falta de higiene, y lavarse en exceso no la mejora, sino que puede irritar más la piel."
        ]
      },
      {
        h: "Cómo se ve según la zona",
        list: [
          "Cuero cabelludo: descamación (caspa), a veces con enrojecimiento y picazón",
          "Cara: enrojecimiento con escamas grasosas en cejas, surcos nasales y a los lados de la nariz",
          "Pecho y zona central del cuerpo: placas rojizas con descamación, en casos más extensos",
          "Bebés: la llamada 'costra láctea' en el cuero cabelludo, generalmente benigna y que suele resolverse sola en los primeros meses de vida"
        ]
      },
      {
        h: "Qué la empeora",
        p: [
          "El estrés, el clima frío y seco, y ciertos medicamentos pueden intensificar los brotes. Algunas condiciones neurológicas se asocian con formas más persistentes, aunque la gran mayoría de los casos no tiene ninguna causa de fondo adicional que buscar."
        ]
      },
      {
        h: "Tratamiento",
        p: [
          "Se maneja con antifúngicos tópicos (que actúan sobre la Malassezia) y, en los brotes más intensos, corticoides tópicos de baja potencia por períodos cortos. Para el cuero cabelludo, los champús medicados son la base del tratamiento, un tema que desarrollamos con más detalle en nuestro artículo sobre la caspa. Es importante entender que es una condición crónica: el objetivo del tratamiento es controlarla, no eliminarla para siempre."
        ]
      },
      {
        h: "Cuándo consultar",
        p: [
          "Si no mejora con medidas básicas, si se extiende a zonas nuevas, o si genera mucha irritación o picazón, vale la pena una evaluación dermatológica para ajustar el tratamiento."
        ]
      }
    ],
    faqs: [
      {
        q: "¿La dermatitis seborreica es por mala higiene?",
        a: "No. Es una condición inflamatoria relacionada con la piel y una levadura que vive normalmente en ella, no con la frecuencia de lavado."
      },
      {
        q: "¿Es lo mismo que la caspa?",
        a: "La caspa es, en esencia, dermatitis seborreica limitada al cuero cabelludo y sin tanta inflamación. Ambas comparten el mismo origen."
      },
      {
        q: "¿La costra láctea de mi bebé es lo mismo?",
        a: "Sí, es una forma de dermatitis seborreica infantil, generalmente benigna, que suele resolverse sola en los primeros meses sin necesidad de tratamiento agresivo."
      },
      {
        q: "¿Se cura definitivamente?",
        a: "Es una condición crónica que tiende a tener brotes y períodos de mejoría. Se controla muy bien con tratamiento sostenido, pero no suele 'curarse' de forma permanente."
      }
    ],
    relatedArticles: ["caspa-por-que-aparece-y-como-tratarla"],
    references: [
      { label: "Seborrheic dermatitis and dandruff: a comprehensive review.", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4852869/" },
      { label: "Seborrheic dermatitis revisited: pathophysiology, diagnosis, and emerging therapies — a narrative review.", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12562114/" }
    ]
  },
  {
    slug: "caspa-por-que-aparece-y-como-tratarla",
    title: "Caspa: por qué aparece y cómo tratarla",
    excerpt:
      "La caspa es uno de los problemas de cuero cabelludo más comunes, y también uno de los que más remedios caseros y champús milagrosos genera. Esto es lo que realmente la causa, y qué champús tienen respaldo real.",
    seoTitle: "Caspa: Por Qué Aparece y Cómo Tratarla | Dra. Karla Andrade",
    seoDescription:
      "¿Por qué aparece la caspa y cómo se trata? La Dra. Karla Andrade, dermatóloga en Machala, explica sus causas y qué champús tienen respaldo científico real.",
    category: "Tricología",
    datePublished: "2026-10-13",
    dateModified: "2026-10-13",
    readingMin: 5,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    lead:
      "La caspa es uno de los problemas de cuero cabelludo más comunes, y también uno de los que más remedios caseros y champús milagrosos genera. Esto es lo que realmente la causa, y qué champús y hábitos tienen respaldo real.",
    sections: [
      {
        h: "Qué es",
        p: [
          "La caspa es la descamación visible del cuero cabelludo. En términos médicos, es una forma más leve de dermatitis seborreica, limitada al cuero cabelludo y sin la inflamación o el enrojecimiento más marcado que puede verse en otras zonas, como explicamos en nuestro artículo sobre dermatitis seborreica."
        ]
      },
      {
        h: "Por qué aparece",
        p: [
          "Se relaciona con Malassezia, una levadura que vive normalmente en el cuero cabelludo de todas las personas. En quienes desarrollan caspa, esta levadura desencadena una renovación más rápida de las células de la piel, lo que produce las escamas visibles. También influyen el exceso de grasa y la sensibilidad individual de cada cuero cabelludo."
        ]
      },
      {
        h: "Caspa vs. cuero cabelludo reseco",
        p: [
          "Es un punto que confunde a muchas personas: la caspa típica produce escamas más grandes y de aspecto aceitoso, a veces con el cuero cabelludo algo irritado debajo. El cuero cabelludo simplemente reseco produce escamas más finas y blancas, sin ese componente graso, y suele mejorar solo con buena hidratación, sin necesitar un champú anticaspa."
        ]
      },
      {
        h: "Qué buscar en un champú anticaspa",
        list: [
          "Zinc piritiona o sulfuro de selenio, con efecto antifúngico y antiinflamatorio leve",
          "Ketoconazol, un antifúngico específico más potente, generalmente de uso bajo indicación",
          "Ácido salicílico o alquitrán de hulla, que ayudan a desprender las escamas"
        ]
      },
      {
        p: [
          "Cada ingrediente actúa de forma distinta, y lo importante es dejarlo actuar el tiempo indicado en el producto antes de enjuagar, no solo pasarlo rápido por el cabello."
        ]
      },
      {
        h: "Por qué cambiar de champú cada semana no funciona",
        p: [
          "Ningún champú anticaspa da resultados en una sola lavada. Necesita uso constante, generalmente varias veces por semana durante algunas semanas, para notar una mejoría real. Cambiar de producto antes de darle ese tiempo es una de las razones más comunes por las que alguien siente que 'nada le funciona'."
        ]
      },
      {
        h: "Cuándo consultar",
        p: [
          "Si la caspa no mejora después de varias semanas de uso constante de un champú adecuado, si hay mucho enrojecimiento o picazón intensa, o si las escamas se extienden a la cara o el pecho, vale la pena una evaluación dermatológica."
        ]
      }
    ],
    faqs: [
      {
        q: "¿La caspa es contagiosa?",
        a: "No. No se transmite de una persona a otra; es una respuesta individual de tu cuero cabelludo a una levadura que normalmente vive en la piel de todos."
      },
      {
        q: "¿Lavarme el cabello más seguido ayuda con la caspa?",
        a: "Puede ayudar a retirar el exceso de grasa y escamas, pero no reemplaza un champú con ingrediente activo anticaspa si la causa de fondo sigue presente."
      },
      {
        q: "¿Cuánto tiempo debo usar un champú anticaspa para ver resultado?",
        a: "Generalmente varias semanas de uso constante, siguiendo la frecuencia indicada en el producto. Resultados en una sola aplicación no son realistas."
      },
      {
        q: "¿La caspa causa caída del cabello?",
        a: "La caspa en sí no destruye el folículo, pero el rascado intenso y la inflamación sostenida pueden contribuir a una caída temporal. Tratarla a tiempo ayuda a evitar ese efecto secundario."
      }
    ],
    relatedArticles: ["dermatitis-seborreica-que-es-y-como-tratarla", "champus-anticaida-funcionan"],
    references: [
      { label: "Seborrheic dermatitis and dandruff: a comprehensive review.", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4852869/" }
    ]
  },
  {
    slug: "hongos-en-la-piel-tina-pie-de-atleta",
    title: "Hongos en la piel: tiña y pie de atleta",
    excerpt:
      "Los hongos en la piel son de las consultas dermatológicas más frecuentes, y también de las más automedicadas sin éxito. Esto es lo que realmente son, cómo se contagian, y por qué el tratamiento casero a veces falla.",
    seoTitle: "Hongos en la Piel en Machala: Tiña y Pie de Atleta | Dra. Karla Andrade",
    seoDescription:
      "¿Qué son los hongos en la piel y cómo se tratan? La Dra. Karla Andrade, dermatóloga en Machala, explica la tiña, el pie de atleta y por qué el tratamiento casero falla.",
    category: "Dermatología clínica",
    datePublished: "2026-10-13",
    dateModified: "2026-10-13",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Los hongos en la piel —tiña, pie de atleta— son de las consultas dermatológicas más frecuentes, y también de las más automedicadas sin éxito. Esto es lo que realmente son, cómo se contagian, y por qué muchas veces el tratamiento casero no funciona.",
    sections: [
      {
        h: "Qué son",
        p: [
          "Son infecciones causadas por hongos llamados dermatofitos, que se alimentan de la queratina presente en la piel, el pelo y las uñas. Son extremadamente frecuentes en climas cálidos y húmedos, como el de Machala."
        ]
      },
      {
        h: "Cómo se ve la tiña corporal",
        p: [
          "Típicamente se presenta como una placa redondeada, con un borde más activo y a veces elevado, y un centro más claro —de ahí el nombre popular de 'anillo'—, acompañada de picazón."
        ]
      },
      {
        h: "Pie de atleta (tiña pedis)",
        p: [
          "Se presenta con descamación, picazón y a veces grietas dolorosas entre los dedos de los pies. Está favorecido por la humedad y el calzado cerrado durante muchas horas, por lo que es frecuente en personas que usan zapatos deportivos o de trabajo todo el día."
        ]
      },
      {
        h: "Cómo se contagian",
        list: [
          "Contacto directo piel con piel con una persona o mascota infectada",
          "Superficies húmedas compartidas: duchas, piscinas, vestidores",
          "Objetos compartidos: toallas, calzado"
        ]
      },
      {
        h: "Por qué el tratamiento casero a veces falla",
        p: [
          "El error más común es suspender el antifúngico tópico apenas desaparece el síntoma visible, cuando en realidad debe continuarse por el tiempo completo indicado —generalmente varias semanas— para eliminar el hongo por completo. Los casos extensos, muy inflamados o que no responden al tratamiento tópico suelen necesitar un antifúngico oral."
        ]
      },
      {
        h: "Cómo prevenir el contagio y la reinfección",
        p: [
          "Secar bien la piel después de bañarte, con especial atención entre los dedos de los pies, evitar compartir toallas o calzado, y usar calzado que permita ventilación son medidas simples que reducen tanto el contagio como las recaídas."
        ]
      },
      {
        h: "Cuándo consultar",
        p: [
          "Si no mejora con un tratamiento de venta libre después de dos a cuatro semanas, si se extiende mucho, o si notas signos de infección bacteriana sobreañadida (más dolor, pus, fiebre), es momento de una evaluación dermatológica."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Puedo contagiarme de hongos en la piscina?",
        a: "Sí, las superficies húmedas compartidas son una vía de contagio frecuente, sobre todo para el pie de atleta. Usar sandalias en vestidores y duchas comunes ayuda a prevenirlo."
      },
      {
        q: "¿Cuánto debo usar la crema antifúngica?",
        a: "Generalmente más tiempo del que parece necesario: el tratamiento debe continuarse por varias semanas, incluso después de que el síntoma visible desaparezca, para eliminar el hongo por completo."
      },
      {
        q: "¿Mi mascota puede contagiarme hongos en la piel?",
        a: "Sí, algunas tiñas se transmiten por contacto con animales infectados. Si tu mascota tiene zonas de pelo caído o irritadas, vale la pena que también la revise un veterinario."
      },
      {
        q: "¿Por qué me sigue volviendo el pie de atleta?",
        a: "Suele deberse a que el calzado o las superficies que usas siguen siendo fuente de reinfección, o a que el tratamiento no se completó por el tiempo necesario la vez anterior."
      }
    ],
    relatedArticles: ["hongos-en-las-unas-onicomicosis"],
    references: [
      { label: "Tinea corporis: an updated review. Drugs Context. 2020. PMID 32742295.", url: "https://pubmed.ncbi.nlm.nih.gov/32742295/" },
      { label: "A comprehensive review of tinea corporis, cruris and pedis. Indian Dermatol Online J. 2016.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4804599" }
    ]
  },
  {
    slug: "hongos-en-las-unas-onicomicosis",
    title: "Hongos en las uñas (onicomicosis): por qué es tan difícil de curar",
    excerpt:
      "Los hongos en las uñas tienen fama merecida de ser difíciles de curar. Esto es lo que explica esa dificultad, y qué hace que un tratamiento tenga más probabilidades de funcionar.",
    seoTitle: "Hongos en las Uñas en Machala: Onicomicosis | Dra. Karla Andrade",
    seoDescription:
      "¿Por qué es tan difícil curar los hongos en las uñas? La Dra. Karla Andrade, dermatóloga en Machala, explica la onicomicosis y qué tratamientos funcionan mejor.",
    category: "Dermatología clínica",
    datePublished: "2026-10-13",
    dateModified: "2026-10-13",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Los hongos en las uñas —onicomicosis— tienen fama merecida de ser difíciles de curar. Esto es lo que explica esa dificultad, y qué hace que un tratamiento tenga más probabilidades de funcionar.",
    sections: [
      {
        h: "Qué es",
        p: [
          "Es una infección de la uña, generalmente causada por los mismos hongos dermatofitos que producen la tiña en la piel, aunque en algunos casos intervienen levaduras u otros hongos. Se ve como una uña engrosada, de color amarillento o blanquecino, quebradiza, que en casos avanzados puede despegarse del lecho ungueal."
        ]
      },
      {
        h: "Por qué es tan difícil de tratar",
        list: [
          "La uña es una barrera física densa que dificulta que los medicamentos tópicos penetren en cantidad suficiente",
          "El hongo puede alojarse profundamente bajo la placa ungueal, fuera del alcance de tratamientos superficiales",
          "Una uña nueva y sana crece muy lento —varios meses—, por lo que el tratamiento debe sostenerse todo ese tiempo para notar el resultado, aunque el hongo ya esté controlado"
        ]
      },
      {
        h: "Opciones de tratamiento",
        p: [
          "Los antifúngicos tópicos específicos para uñas pueden ser suficientes en casos leves o muy iniciales. En casos más establecidos, los antifúngicos orales suelen ser más efectivos, aunque requieren seguimiento médico durante el tratamiento. Combinar tratamiento oral y tópico suele dar mejores resultados que usar uno solo, y en los últimos años el láser se usa también como complemento en algunos casos."
        ]
      },
      {
        h: "Por qué recae tanto",
        p: [
          "Una causa frecuente de recaída es la reinfección desde un pie de atleta no tratado, desde el calzado o desde superficies contaminadas. Por eso la prevención —secar bien los pies, no compartir cortaúñas, tratar también cualquier hongo activo en la piel— es parte del tratamiento, no un paso opcional aparte."
        ]
      },
      {
        h: "Expectativas realistas",
        p: [
          "No existe una solución rápida para la onicomicosis. El objetivo realista es una uña visiblemente más sana con el tiempo, a medida que crece la parte nueva libre de hongo, no un cambio de la noche a la mañana. Mantener el tratamiento completo, aunque la mejoría parezca lenta, es lo que marca la diferencia entre curar la infección y que vuelva a aparecer."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Por qué mi uña sigue viéndose mal si ya terminé el tratamiento?",
        a: "Porque la parte ya dañada de la uña no se repara: lo que se ve sano es la uña nueva que va creciendo desde la base. Toma varios meses que la uña completa se reemplace."
      },
      {
        q: "¿El esmalte antifúngico es suficiente?",
        a: "Puede ser suficiente en casos muy leves o iniciales, pero en infecciones más establecidas suele necesitar combinarse con tratamiento oral para ser efectivo."
      },
      {
        q: "¿Por qué me recomendaron análisis de sangre si es solo la uña?",
        a: "Algunos antifúngicos orales requieren control de la función hepática durante el tratamiento, por eso tu médico puede solicitar análisis antes o durante el proceso."
      },
      {
        q: "¿Puedo usar esmalte de uñas normal mientras me trato?",
        a: "Es mejor evitarlo o consultarlo con tu médico, porque puede dificultar la penetración de algunos tratamientos tópicos antifúngicos."
      }
    ],
    relatedArticles: ["hongos-en-la-piel-tina-pie-de-atleta"],
    references: [
      { label: "Onychomycosis: diagnosis and definitive treatment. J Am Acad Dermatol. 2018. PMID 29959962.", url: "https://pubmed.ncbi.nlm.nih.gov/29959962/" }
    ]
  },
  {
    slug: "urticaria-ronchas-en-la-piel-causas",
    title: "Urticaria: por qué salen ronchas que pican y van y vienen",
    excerpt:
      "Despertar con ronchas que pican y desaparecen en horas es una de las experiencias más desconcertantes en dermatología. Esto es lo que es la urticaria, y por qué muchas veces no se encuentra 'la causa'.",
    seoTitle: "Urticaria en Machala: Ronchas en la Piel | Dra. Karla Andrade",
    seoDescription:
      "¿Qué causa la urticaria y las ronchas que pican? La Dra. Karla Andrade, dermatóloga en Machala, explica la diferencia entre urticaria aguda y crónica, y su tratamiento.",
    category: "Dermatología clínica",
    datePublished: "2026-10-13",
    dateModified: "2026-10-13",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Despertar con ronchas que pican, que aparecen y desaparecen en cuestión de horas, es una de las experiencias más desconcertantes en dermatología. Esto es lo que es la urticaria, por qué es tan difícil encontrar 'la causa' en muchos casos, y cómo se maneja.",
    sections: [
      {
        h: "Qué es",
        p: [
          "La urticaria se manifiesta con ronchas —también llamadas habones— rojas, elevadas, que pican intensamente. Lo característico es que cada roncha individual suele durar menos de 24 horas y desaparece sin dejar marca, aunque pueden seguir apareciendo ronchas nuevas en otras zonas de forma continua."
        ]
      },
      {
        h: "Aguda vs. crónica",
        p: [
          "La urticaria aguda dura menos de seis semanas, y en muchos casos se logra identificar un desencadenante claro: un alimento, un medicamento, una infección viral reciente. La urticaria crónica se define como la que persiste más de seis semanas, y en la gran mayoría de estos casos, a pesar de estudios, no se identifica una causa externa específica."
        ]
      },
      {
        h: "Por qué 'no se encuentra la causa' en la mayoría de los casos crónicos",
        p: [
          "La urticaria crónica espontánea —el nombre médico más preciso para la mayoría de estos casos— suele relacionarse con una activación del propio sistema inmune, no con una alergia a algo identificable en el entorno o la dieta. Por eso, ir eliminando alimentos uno por uno en busca de 'el culpable' rara vez resuelve el problema en la urticaria crónica, y puede llevar a restricciones innecesarias."
        ]
      },
      {
        h: "Qué la puede desencadenar o empeorar",
        list: [
          "El calor y el ejercicio",
          "El estrés",
          "La fricción o presión sostenida sobre la piel",
          "Ciertos medicamentos, como los antiinflamatorios"
        ]
      },
      {
        p: [
          "Estos factores pueden empeorar los brotes sin ser, necesariamente, la causa de fondo del problema."
        ]
      },
      {
        h: "Tratamiento escalonado",
        p: [
          "La primera línea de tratamiento son los antihistamínicos de segunda generación, que en casos que no responden pueden indicarse a dosis mayores que las estándar, siempre bajo indicación médica. Si la respuesta sigue siendo insuficiente, existen opciones de manejo más específico, evaluadas caso por caso."
        ]
      },
      {
        h: "Cuándo es una urgencia, no una urticaria simple",
        p: [
          "Si las ronchas se acompañan de hinchazón de labios, lengua o garganta, dificultad para respirar, o sensación de desmayo, no es una urticaria simple: es una posible reacción alérgica grave (angioedema o anafilaxia) y requiere atención médica inmediata, no una consulta de rutina."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Debo eliminar alimentos de mi dieta si tengo urticaria crónica?",
        a: "No es la estrategia recomendada en la mayoría de los casos, porque la urticaria crónica rara vez se relaciona con un alimento específico. Hazlo solo si tu médico lo indica tras una evaluación."
      },
      {
        q: "¿La urticaria es contagiosa?",
        a: "No, en ningún caso. No se transmite de una persona a otra."
      },
      {
        q: "¿Por qué las ronchas cambian de lugar?",
        a: "Es parte del comportamiento típico de la urticaria: una roncha individual dura horas y desaparece, mientras pueden aparecer otras nuevas en distintas zonas del cuerpo."
      },
      {
        q: "¿Cuándo debo ir a emergencias en vez de a una consulta normal?",
        a: "Si hay hinchazón de labios, lengua o garganta, dificultad para respirar, o sensación de desmayo. Esos síntomas requieren atención inmediata."
      }
    ],
    relatedArticles: [],
    references: [
      { label: "Mustafa SS, Sánchez-Borges M. Chronic urticaria: comparisons of US, European, and Asian guidelines. Curr Allergy Asthma Rep. 2018. PMID 29796863.", url: "https://pubmed.ncbi.nlm.nih.gov/29796863/" }
    ]
  },
  {
    slug: "psoriasis-que-es-y-como-se-trata",
    title: "Psoriasis: qué es y cómo se trata",
    excerpt:
      "La psoriasis es una enfermedad crónica de la piel rodeada de mitos, empezando por la idea de que es contagiosa, algo completamente falso. Esto es lo que realmente es, y qué opciones de tratamiento existen hoy.",
    seoTitle: "Psoriasis en Machala: Qué Es y Tratamiento | Dra. Karla Andrade",
    seoDescription:
      "¿Qué es la psoriasis y cómo se trata? La Dra. Karla Andrade, dermatóloga en Machala, explica esta enfermedad crónica, sus desencadenantes y las opciones de tratamiento.",
    category: "Dermatología clínica",
    datePublished: "2026-10-13",
    dateModified: "2026-10-13",
    readingMin: 7,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "La psoriasis es una enfermedad crónica de la piel rodeada de mitos —empezando por la idea de que es contagiosa, algo completamente falso—. Esto es lo que realmente es, por qué va más allá de la piel, y qué opciones de tratamiento existen hoy.",
    sections: [
      {
        h: "Qué es",
        p: [
          "Es una enfermedad inflamatoria crónica, de origen inmunológico, que acelera el recambio de las células de la piel. Esto produce placas engrosadas, rojas, cubiertas de escamas plateadas características, típicamente en codos, rodillas, cuero cabelludo y zona lumbar, aunque puede aparecer en cualquier parte del cuerpo."
        ]
      },
      {
        h: "No es contagiosa",
        p: [
          "Vale la pena decirlo con total claridad: la psoriasis no se transmite de una persona a otra bajo ninguna circunstancia. El estigma social que todavía rodea a esta enfermedad afecta de forma real la calidad de vida de quienes la tienen, y combatirlo empieza por entender este punto básico."
        ]
      },
      {
        h: "Por qué va más allá de la piel",
        p: [
          "La psoriasis se asocia a un mayor riesgo de artritis psoriásica, con dolor e inflamación en las articulaciones, y las guías actuales recomiendan evaluar también otras condiciones asociadas, como factores de riesgo cardiovascular y metabólico. Por eso el manejo integral —no solo tratar las placas visibles— es parte del estándar de cuidado actual."
        ]
      },
      {
        h: "Qué la desencadena o empeora",
        list: [
          "El estrés sostenido",
          "Ciertas infecciones",
          "Algunos medicamentos",
          "El consumo de alcohol y el tabaco",
          "Lesiones o traumatismos en la piel, que pueden generar placas nuevas en esa zona (fenómeno de Koebner)"
        ]
      },
      {
        h: "Opciones de tratamiento, según la gravedad",
        p: [
          "Los casos leves suelen manejarse con tratamientos tópicos. Los casos más extensos pueden requerir fototerapia, y los casos moderados a severos —o con impacto significativo en la calidad de vida— suelen tratarse con medicamentos orales o biológicos, que actúan de forma más dirigida sobre el sistema inmune. La elección depende de la extensión de la enfermedad, su impacto en tu vida diaria, y tu historia de salud general."
        ]
      },
      {
        h: "No tiene cura, pero se controla muy bien",
        p: [
          "Con el tratamiento adecuado, la mayoría de los pacientes logra una piel prácticamente libre de lesiones durante períodos prolongados. El seguimiento con tu dermatólogo permite ajustar el tratamiento a medida que cambia la respuesta de tu enfermedad."
        ]
      }
    ],
    faqs: [
      {
        q: "¿La psoriasis es contagiosa?",
        a: "No, de ninguna manera. No se transmite por contacto con la piel de otra persona."
      },
      {
        q: "¿Por qué me dicen que revise mis articulaciones si tengo psoriasis en la piel?",
        a: "Porque existe un riesgo asociado de artritis psoriásica. Detectarla a tiempo permite tratarla antes de que cause daño articular permanente."
      },
      {
        q: "¿El estrés realmente empeora la psoriasis?",
        a: "Sí, es uno de los desencadenantes más reportados por los pacientes, aunque no es la única causa de los brotes."
      },
      {
        q: "¿Voy a necesitar tratamiento de por vida?",
        a: "Depende de la gravedad y evolución de tu caso. Muchos pacientes logran largos períodos de control, con ajustes del tratamiento según cómo evoluciona la enfermedad."
      }
    ],
    relatedArticles: [],
    references: [
      { label: "Menter A, et al. Joint AAD-NPF guidelines of care for the management and treatment of psoriasis with biologics. J Am Acad Dermatol. 2019. PMID 30772098.", url: "https://pubmed.ncbi.nlm.nih.gov/30772098/" },
      { label: "Elmets CA, et al. Joint AAD-NPF guidelines of care for the management and treatment of psoriasis with topical therapy. J Am Acad Dermatol. 2020. PMID 32738429.", url: "https://pubmed.ncbi.nlm.nih.gov/32738429/" }
    ]
  },
  {
    slug: "vitiligo-que-es-y-tratamientos",
    title: "Vitíligo: qué es y qué tratamientos existen",
    excerpt:
      "El vitíligo genera un impacto emocional desproporcionado a su gravedad médica, precisamente por ser muy visible. Esto es lo que realmente lo causa, y qué opciones de tratamiento existen, con expectativas realistas.",
    seoTitle: "Vitíligo en Machala: Qué Es y Tratamientos | Dra. Karla Andrade",
    seoDescription:
      "¿Qué es el vitíligo y qué tratamientos existen? La Dra. Karla Andrade, dermatóloga en Machala, explica sus causas y las opciones de tratamiento disponibles.",
    category: "Dermatología clínica",
    datePublished: "2026-10-13",
    dateModified: "2026-10-13",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "El vitíligo es una condición que genera un impacto emocional desproporcionado a su gravedad médica, precisamente porque es muy visible. Esto es lo que realmente lo causa, y qué opciones de tratamiento existen, con expectativas realistas.",
    sections: [
      {
        h: "Qué es",
        p: [
          "Es la pérdida de pigmento de la piel en zonas específicas, causada por la destrucción de los melanocitos, las células que producen el pigmento. Es de origen autoinmune: el propio sistema inmune ataca por error a estas células."
        ]
      },
      {
        h: "Por qué el sistema inmune ataca sus propios melanocitos",
        p: [
          "El mecanismo exacto todavía no se conoce con total precisión, pero involucra una combinación de predisposición genética y la activación de células del sistema inmune (linfocitos T) que atacan selectivamente a los melanocitos. Es un área de investigación activa, con avances relevantes en los últimos años."
        ]
      },
      {
        h: "No es contagioso ni es una infección",
        p: [
          "Otro punto importante de aclarar: el vitíligo no se transmite de ninguna forma entre personas, y no está causado por ningún microorganismo."
        ]
      },
      {
        h: "Cómo se presenta",
        p: [
          "Puede estar localizado en unas pocas zonas, o ser generalizado y más extenso. Su curso es impredecible: puede progresar con el tiempo, con períodos de actividad y de estabilidad, que varían mucho de una persona a otra."
        ]
      },
      {
        h: "Opciones de tratamiento",
        p: [
          "Para casos localizados, se usan corticoides tópicos o inhibidores de calcineurina. Para casos más extensos, la fototerapia es una opción establecida. En los últimos años, los inhibidores de JAK —una familia de medicamentos más reciente— han mostrado resultados prometedores en varios estudios, aunque el campo todavía no cuenta con un tratamiento plenamente satisfactorio para todos los casos."
        ]
      },
      {
        h: "Expectativas realistas",
        p: [
          "Cuando ocurre, la repigmentación es gradual y no siempre completa. El objetivo del tratamiento es repigmentar lo que sea posible y frenar la progresión, no necesariamente devolver el color original a toda la piel afectada. Partir de esa expectativa realista ayuda a no vivir el proceso como un fracaso si la repigmentación es parcial."
        ]
      },
      {
        h: "El impacto emocional es real",
        p: [
          "El vitíligo puede afectar significativamente la autoestima y la vida social, precisamente por su visibilidad. Buscar apoyo —profesional o de grupos de personas con la misma condición— es una parte legítima del manejo, no algo secundario al tratamiento médico."
        ]
      }
    ],
    faqs: [
      {
        q: "¿El vitíligo es contagioso?",
        a: "No, de ninguna manera. No se transmite por contacto ni de ninguna otra forma entre personas."
      },
      {
        q: "¿El vitíligo se puede curar por completo?",
        a: "No existe, por ahora, una cura garantizada para todos los casos. Los tratamientos buscan repigmentar lo posible y frenar la progresión, con resultados variables según cada persona."
      },
      {
        q: "¿Es lo mismo que la pitiriasis versicolor?",
        a: "No. Son condiciones distintas: la pitiriasis versicolor es una infección por hongo y responde a antifúngicos; el vitíligo es autoinmune y no. Lo desarrollamos en nuestro artículo sobre manchas blancas en la piel."
      },
      {
        q: "¿El vitíligo progresa siempre?",
        a: "No necesariamente. El curso es muy variable: algunas personas tienen períodos largos de estabilidad, y otras progresan de forma más activa. El seguimiento con tu dermatólogo ayuda a monitorear esa evolución."
      }
    ],
    relatedArticles: ["manchas-blancas-en-la-piel-pitiriasis-versicolor"],
    references: [
      { label: "Vitiligo: pathogenesis and new and emerging treatments. Int J Mol Sci. 2023.", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10743634/" }
    ]
  },
  {
    slug: "manchas-blancas-en-la-piel-pitiriasis-versicolor",
    title: "Manchas blancas en la piel: ¿vitíligo o pitiriasis versicolor?",
    excerpt:
      "Las manchas blancas en la piel generan una confusión muy frecuente: muchos temen que sea vitíligo, cuando en la mayoría de los casos se trata de algo mucho más común. Esto es lo que las diferencia.",
    seoTitle: "Manchas Blancas en la Piel en Machala | Dra. Karla Andrade",
    seoDescription:
      "¿Las manchas blancas en la piel son vitíligo o pitiriasis versicolor? La Dra. Karla Andrade, dermatóloga en Machala, explica cómo diferenciarlas y cómo se tratan.",
    category: "Dermatología clínica",
    datePublished: "2026-10-13",
    dateModified: "2026-10-13",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Las manchas blancas en la piel generan una confusión muy frecuente: mucha gente teme que sea vitíligo, cuando en la gran mayoría de los casos se trata de algo completamente distinto y mucho más común: la pitiriasis versicolor. Esto es lo que las diferencia.",
    sections: [
      {
        h: "Qué es la pitiriasis versicolor",
        p: [
          "Es una infección superficial de la piel causada por Malassezia, una levadura que vive normalmente en la piel de todas las personas, pero que en ciertas condiciones prolifera más de lo habitual y altera la pigmentación de la zona afectada."
        ]
      },
      {
        h: "Por qué se llama 'versicolor'",
        p: [
          "Porque las manchas pueden verse de distinto tono según el contraste con la piel de cada persona: más claras que la piel circundante en quienes tienen la piel bronceada —lo más frecuente—, o más rosadas u oscuras en piel sin broncear."
        ]
      },
      {
        h: "Por qué es tan frecuente en climas como el de Machala",
        p: [
          "Los climas cálidos y húmedos, la sudoración excesiva, la piel grasa y la ropa que no transpira favorecen la proliferación de esta levadura, lo que explica por qué la pitiriasis versicolor es particularmente común en zonas tropicales."
        ]
      },
      {
        h: "Diferencias clave con el vitíligo",
        list: [
          "La pitiriasis versicolor suele tener una descamación fina, apenas visible al raspar suavemente la piel; el vitíligo no descama",
          "La pitiriasis versicolor responde a tratamiento antifúngico; el vitíligo no, porque no es una infección",
          "El vitíligo tiende a tener bordes más netos y bien definidos; la pitiriasis versicolor suele presentarse con manchas más difusas y numerosas",
          "Ante la duda, un examen simple con luz especial, o la evaluación directa de un dermatólogo, permite diferenciarlas con certeza"
        ]
      },
      {
        h: "Tratamiento",
        p: [
          "La mayoría de los casos se trata con antifúngicos tópicos, en champú o crema. Los casos más extensos o recurrentes pueden requerir tratamiento oral. Es importante saber que, aunque el hongo se elimine con éxito, la pigmentación de la piel tarda semanas o meses en normalizarse por completo: eso no significa que el tratamiento haya fallado."
        ]
      },
      {
        h: "Por qué recurre tanto",
        p: [
          "La levadura que la causa es parte normal de la piel, por lo que nunca se 'elimina' para siempre. En personas propensas, puede reaparecer con facilidad, sobre todo en climas cálidos y húmedos o en épocas de más sudoración."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Cómo sé si mis manchas blancas son vitíligo o pitiriasis versicolor?",
        a: "La forma más confiable es una evaluación dermatológica, que puede incluir un examen simple con luz especial para diferenciarlas con certeza."
      },
      {
        q: "¿Por qué mis manchas no desaparecen aunque ya traté el hongo?",
        a: "La pigmentación tarda semanas o meses en normalizarse después de eliminar el hongo. No es una señal de que el tratamiento no funcionó."
      },
      {
        q: "¿La pitiriasis versicolor es contagiosa?",
        a: "Es poco contagiosa en la práctica, porque la levadura que la causa ya vive normalmente en la piel de la mayoría de las personas; lo que varía es la proliferación en condiciones favorables."
      },
      {
        q: "¿Puedo prevenir que vuelva a aparecer?",
        a: "Mantener la piel seca, usar ropa transpirable y, en personas muy propensas, usar ocasionalmente un champú antifúngico como medida preventiva, bajo indicación médica, puede ayudar a espaciar las recurrencias."
      }
    ],
    relatedArticles: ["vitiligo-que-es-y-tratamientos"],
    references: [
      { label: "Gupta AK, Foley KA. Antifungal treatment for pityriasis versicolor. J Fungi. 2015. PMID 29376896.", url: "https://pubmed.ncbi.nlm.nih.gov/29376896/" }
    ]
  },
  {
    slug: "queratosis-actinicas-que-son",
    title: "Queratosis actínicas: qué son y por qué conviene tratarlas",
    excerpt:
      "Las queratosis actínicas son, probablemente, la lesión de piel relacionada con el sol que más se subestima. Esto es lo que son, por qué importa tratarlas, y qué relación tienen con el cáncer de piel.",
    seoTitle: "Queratosis Actínicas en Machala | Dra. Karla Andrade",
    seoDescription:
      "¿Qué son las queratosis actínicas y por qué tratarlas? La Dra. Karla Andrade, dermatóloga en Machala, explica su relación con el cáncer de piel y su tratamiento.",
    category: "Cáncer de piel",
    datePublished: "2026-10-13",
    dateModified: "2026-10-13",
    readingMin: 6,
    relatedEspecialidad: "cancer-de-piel-y-dermatoscopia",
    lead:
      "Las queratosis actínicas son, probablemente, la lesión de piel relacionada con el sol que más se subestima. Esto es lo que son, por qué importa tratarlas, y qué relación tienen con el cáncer de piel.",
    sections: [
      {
        h: "Qué son",
        p: [
          "Son lesiones precancerosas: parches ásperos al tacto, de color rosado o similar al de la piel, con una escama fina, que aparecen en zonas de exposición solar acumulada a lo largo de los años —cara, cuero cabelludo con poco cabello, orejas, dorso de las manos, antebrazos—."
        ]
      },
      {
        h: "Por qué se llaman 'precancerosas'",
        p: [
          "Representan un daño acumulado en las células de la epidermis por años de radiación ultravioleta. Una proporción de estas lesiones, si no se tratan, puede progresar a un carcinoma espinocelular, uno de los tipos de cáncer de piel que desarrollamos en otro artículo. Es importante decirlo con precisión: la mayoría de las queratosis actínicas individuales no progresa a cáncer, pero no existe forma segura de saber de antemano cuál sí lo hará, y esa incertidumbre es justamente la razón por la que se recomienda tratarlas."
        ]
      },
      {
        h: "A veces se sienten antes de verse",
        p: [
          "Es frecuente notarlas primero al tacto —ásperas, como papel de lija— antes de que sean muy visibles a simple vista, sobre todo en el cuero cabelludo con poco cabello, una zona que muchas personas no revisan con regularidad."
        ]
      },
      {
        h: "Factores de riesgo",
        p: [
          "Comparten buena parte de los factores de riesgo del cáncer de piel en general: piel clara, exposición solar acumulada a lo largo de la vida, edad, e inmunosupresión. Los desarrollamos con más detalle en nuestro artículo sobre factores de riesgo de cáncer de piel."
        ]
      },
      {
        h: "Tratamiento",
        p: [
          "Para lesiones puntuales, la crioterapia (congelamiento) es una opción rápida y efectiva. Cuando hay varias lesiones en una misma zona —lo que se conoce como 'cancerización de campo'—, se prefieren tratamientos tópicos que actúan sobre toda el área, o la terapia fotodinámica en algunos casos, en lugar de tratar lesión por lesión."
        ]
      },
      {
        h: "Por qué el seguimiento no termina con el tratamiento",
        p: [
          "Quien tuvo queratosis actínicas conserva el mismo daño solar acumulado de base que las generó, por lo que es esperable que puedan aparecer lesiones nuevas con el tiempo. Esto hace que el control periódico y la protección solar estricta sean parte permanente del cuidado, no algo que termina al tratar las lesiones actuales."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Todas las queratosis actínicas se vuelven cáncer de piel?",
        a: "No, la mayoría no progresa. Pero como no hay forma segura de saber cuáles sí lo harán, se recomienda tratarlas todas."
      },
      {
        q: "¿Duele el tratamiento con crioterapia?",
        a: "Genera una molestia breve, similar a una picadura de frío intenso, que la mayoría de los pacientes tolera bien sin necesidad de anestesia."
      },
      {
        q: "¿Por qué me recetaron una crema en vez de congelar las lesiones?",
        a: "Cuando hay varias lesiones en una misma zona, tratar toda el área con un producto tópico suele ser más efectivo que congelar cada una por separado."
      },
      {
        q: "¿Si ya me trataron, puedo dejar de usar protector solar?",
        a: "No. El daño de base que las generó sigue presente, y la protección solar constante es lo que ayuda a prevenir que aparezcan lesiones nuevas."
      }
    ],
    relatedArticles: ["tipos-de-cancer-de-piel-melanoma-basocelular-espinocelular", "factores-de-riesgo-de-cancer-de-piel"],
    references: [
      { label: "Balcere A, et al. Clinical characteristics of actinic keratosis associated with the risk of progression to invasive squamous cell carcinoma: a systematic review. J Clin Med. 2022.", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9571814/" },
      { label: "From actinic keratosis to cutaneous squamous cell carcinoma: the key pathogenesis and treatments.", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11802505/" }
    ]
  },
  {
    slug: "dermatitis-del-panal-causas-y-cuidado",
    title: "Dermatitis del pañal: causas y cuidado en casa",
    excerpt:
      "La dermatitis del pañal es, probablemente, el motivo de consulta más frecuente en los primeros meses de vida. Esto es lo que realmente la causa, qué hacer en casa, y cuándo conviene una evaluación.",
    seoTitle: "Dermatitis del Pañal en Machala | Dra. Karla Andrade",
    seoDescription:
      "¿Qué causa la dermatitis del pañal y cómo se cuida? La Dra. Karla Andrade, dermatóloga pediátrica en Machala, explica qué hacer en casa y cuándo consultar.",
    category: "Dermatología clínica",
    datePublished: "2026-10-13",
    dateModified: "2026-10-13",
    readingMin: 5,
    relatedEspecialidad: "dermatologia-pediatrica",
    lead:
      "La dermatitis del pañal es, probablemente, el motivo de consulta más frecuente en los primeros meses de vida. Esto es lo que realmente la causa, qué hacer en casa, y cuándo conviene una evaluación.",
    sections: [
      {
        h: "Qué es y por qué aparece",
        p: [
          "Es una irritación de la piel en el área cubierta por el pañal. La causa más común no es infecciosa, sino irritativa: el contacto prolongado con orina y heces, la humedad constante, la fricción del pañal y el cambio del pH de la piel en esa zona generan una barrera cutánea más débil y vulnerable a la irritación."
        ]
      },
      {
        h: "Cuándo interviene un hongo",
        p: [
          "La Candida (un hongo) puede sumarse como causa secundaria, cuando la piel ya lleva un tiempo irritada. Suele reconocerse por un patrón distinto: un enrojecimiento más intenso y uniforme, con pequeñas lesiones satélite alrededor de la zona principal, distinto a la irritación simple."
        ]
      },
      {
        h: "Qué ayuda en casa",
        list: [
          "Cambiar el pañal con frecuencia, sin esperar a que esté muy cargado",
          "Limpiar con suavidad, evitando toallitas con fragancia o alcohol si la piel ya está muy irritada; en esos casos, agua tibia y un paño suave son más adecuados",
          "Dejar la piel al aire libre de pañal ratos cortos cuando sea posible",
          "Aplicar una crema de barrera con óxido de zinc en capa generosa en cada cambio, no solo cuando ya hay irritación"
        ]
      },
      {
        h: "Qué evitar",
        list: [
          "Los talcos: tienen poca evidencia de beneficio y un riesgo real si se inhalan",
          "Frotar con fuerza al limpiar la zona",
          "Pañales demasiado ajustados, que aumentan la fricción y la humedad retenida"
        ]
      },
      {
        h: "Cuándo consultar",
        p: [
          "Si la irritación no mejora en dos o tres días con cuidados básicos, si aparecen ampollas, si la piel sangra, si hay fiebre, o si el patrón sugiere una infección que necesita tratamiento específico, es momento de una evaluación con el pediatra o dermatólogo."
        ]
      }
    ],
    faqs: [
      {
        q: "¿La dermatitis del pañal significa que algo anda mal con la piel de mi bebé?",
        a: "No. Es una de las condiciones más comunes y esperables en los primeros meses de vida, relacionada con el contacto prolongado con humedad, no con un problema de fondo en la piel."
      },
      {
        q: "¿Debo cambiar de marca de pañal si le sale irritación?",
        a: "No siempre es necesario; primero intenta cambiar el pañal con más frecuencia y usar una crema de barrera. Si la irritación persiste, coméntalo en la consulta antes de probar varias marcas distintas."
      },
      {
        q: "¿El talco ayuda a mantener la piel seca?",
        a: "No se recomienda: tiene poca evidencia de beneficio real y existe el riesgo de que el bebé lo inhale, lo cual sí es un riesgo conocido."
      },
      {
        q: "¿Cómo sé si es un hongo y no solo irritación?",
        a: "El patrón suele ser distinto: un enrojecimiento más intenso y con pequeñas lesiones alrededor de la zona principal. Ante la duda, una evaluación confirma el diagnóstico y ajusta el tratamiento."
      }
    ],
    relatedArticles: [],
    references: [
      { label: "Klunk C, et al. An update on diaper dermatitis. Clin Dermatol. 2014. PMID 25017459.", url: "https://pubmed.ncbi.nlm.nih.gov/25017459/" },
      { label: "Ravanfar P, et al. Diaper dermatitis: a review and update. Curr Opin Pediatr. 2012. PMID 22790100.", url: "https://pubmed.ncbi.nlm.nih.gov/22790100/" }
    ]
  },
  {
    slug: "varicela-en-ninos-cuidado-de-la-piel",
    title: "Varicela en niños: cuidado de la piel durante el brote",
    excerpt:
      "La varicela sigue siendo una enfermedad frecuente en la infancia, y el cuidado de la piel durante el brote es una de las principales preocupaciones de los padres. Esto es lo que conviene saber.",
    seoTitle: "Varicela en Niños: Cuidado de la Piel | Dra. Karla Andrade",
    seoDescription:
      "¿Cómo cuidar la piel de un niño con varicela? La Dra. Karla Andrade, dermatóloga pediátrica en Machala, explica la evolución del sarpullido y las señales de alarma.",
    category: "Dermatología clínica",
    datePublished: "2026-10-13",
    dateModified: "2026-10-13",
    readingMin: 5,
    relatedEspecialidad: "dermatologia-pediatrica",
    lead:
      "La varicela sigue siendo una enfermedad frecuente en la infancia, y el cuidado de la piel durante el brote es una de las principales preocupaciones de los padres. Esto es lo que conviene saber.",
    sections: [
      {
        h: "Qué es",
        p: [
          "Es una infección viral causada por el virus varicela-zóster, altamente contagiosa, que produce un sarpullido característico con ampollas pequeñas que evolucionan por etapas en el transcurso de varios días."
        ]
      },
      {
        h: "Cómo evoluciona el sarpullido",
        p: [
          "Pasa por etapas: primero manchas rojas, que se convierten en ampollas pequeñas con líquido claro, que luego se opacan y forman costra. Esto ocurre en oleadas sucesivas, por lo que es normal ver lesiones en distintas etapas al mismo tiempo en un mismo niño."
        ]
      },
      {
        h: "Por qué no hay que rascar",
        p: [
          "Romper las ampollas al rascarlas aumenta el riesgo de infección bacteriana de la piel, que es la complicación cutánea más frecuente de la varicela, y también aumenta el riesgo de que queden cicatrices permanentes."
        ]
      },
      {
        h: "Qué ayuda con la picazón",
        list: [
          "Mantener las uñas del niño cortas",
          "Baños tibios, no calientes",
          "Loción de calamina u otro producto indicado por el pediatra",
          "Ropa suelta y de algodón, que roce lo menos posible la piel"
        ]
      },
      {
        h: "Señales de alarma en la piel",
        p: [
          "Zonas muy rojas, calientes, hinchadas o con pus —que sugieren una infección bacteriana sobreañadida—, fiebre alta persistente, o lesiones muy extensas acompañadas de mal estado general, ameritan una evaluación médica pronto, no esperar a que el brote termine solo."
        ]
      },
      {
        h: "Sobre las cicatrices",
        p: [
          "El riesgo de que quede una cicatriz permanente aumenta mucho si las lesiones se rascan o se infectan. El cuidado adecuado durante el brote —evitar el rascado, mantener la piel limpia— es lo que más influye en evitarlas, más que cualquier producto aplicado después."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Es normal que mi hijo tenga ampollas nuevas varios días después de empezar?",
        a: "Sí, es parte del curso normal de la enfermedad: las lesiones aparecen en oleadas durante varios días antes de que el brote se detenga."
      },
      {
        q: "¿Debo reventar las ampollas para que se sequen más rápido?",
        a: "No, nunca. Romperlas aumenta el riesgo de infección y de cicatrices; es mejor dejar que seque de forma natural."
      },
      {
        q: "¿Cuánto dura el período de contagio?",
        a: "Generalmente es contagiosa desde un poco antes de que aparezca el sarpullido hasta que todas las lesiones han formado costra. Tu pediatra puede darte el plazo exacto según la evolución de tu hijo."
      },
      {
        q: "¿Cuándo debo llevar a mi hijo a emergencias por la varicela?",
        a: "Si hay signos de infección bacteriana en la piel, fiebre alta persistente, dificultad para respirar, o cualquier síntoma que te preocupe más allá del sarpullido típico."
      }
    ],
    relatedArticles: ["molusco-contagioso-en-ninos"],
    references: [
      { label: "Bozzola E, et al. Varicella skin complications in childhood: a case series and a systematic review of the literature. Int J Mol Sci. 2016.", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4881514/" }
    ]
  },
  {
    slug: "molusco-contagioso-en-ninos",
    title: "Molusco contagioso en niños: ¿tratar o esperar?",
    excerpt:
      "El molusco contagioso es una de las infecciones de piel más frecuentes en niños, y también una de las que genera más dudas sobre si tratarla o simplemente esperar. Esto es lo que conviene saber.",
    seoTitle: "Molusco Contagioso en Niños Machala | Dra. Karla Andrade",
    seoDescription:
      "¿Cómo tratar el molusco contagioso en niños? La Dra. Karla Andrade, dermatóloga pediátrica en Machala, explica cuándo observar y cuándo tratar activamente.",
    category: "Dermatología clínica",
    datePublished: "2026-10-13",
    dateModified: "2026-10-13",
    readingMin: 5,
    relatedEspecialidad: "dermatologia-pediatrica",
    lead:
      "El molusco contagioso es una de las infecciones de piel más frecuentes en niños, y también una de las que genera más dudas sobre si tratarla o simplemente esperar. Esto es lo que conviene saber.",
    sections: [
      {
        h: "Qué es",
        p: [
          "Es una infección viral de la piel, causada por un poxvirus, que produce pequeñas pápulas —bultos— con un característico hoyuelo central, generalmente indoloras."
        ]
      },
      {
        h: "Cómo se contagia",
        p: [
          "Por contacto directo piel con piel, o a través de superficies y objetos contaminados, como toallas o juguetes de baño. También puede diseminarse dentro de la propia piel del niño si se rasca las lesiones."
        ]
      },
      {
        h: "Es benigno y, en la mayoría de los casos, se resuelve solo",
        p: [
          "En niños sanos, el molusco contagioso suele desaparecer por sí solo con el tiempo, aunque el proceso puede ser bastante largo: incluso un año o más en algunos casos."
        ]
      },
      {
        h: "Por qué existe debate entre tratar o esperar",
        p: [
          "La evidencia disponible no muestra que ningún tratamiento sea claramente superior a la observación en niños sanos. La decisión de tratar o esperar depende de cuántas lesiones hay, en qué zona están, si generan molestia, y la preferencia de cada familia, más que de una regla única válida para todos los casos."
        ]
      },
      {
        h: "Opciones si se decide tratar",
        p: [
          "El curetaje (raspado) en consulta y la cantaridina (un producto que se aplica en el consultorio) son de las opciones más estudiadas. Cada una tiene sus ventajas y molestias asociadas, que conviene conversar según la edad y tolerancia del niño."
        ]
      },
      {
        h: "Qué hacer mientras tanto",
        p: [
          "Evitar que el niño se rasque, para no diseminar las lesiones a otras zonas de su propia piel, no compartir toallas, y tener paciencia, porque es un proceso que naturalmente lleva tiempo."
        ]
      },
      {
        h: "Cuándo consultar",
        p: [
          "Si las lesiones se inflaman mucho, si aparecen muchas y se extienden rápidamente, o si existe duda real sobre el diagnóstico, vale la pena una evaluación dermatológica."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Es grave que mi hijo tenga molusco contagioso?",
        a: "No. Es una infección benigna que, en niños sanos, suele resolverse sola con el tiempo, aunque el proceso puede tardar meses."
      },
      {
        q: "¿Debo aislar a mi hijo de otros niños?",
        a: "No es necesario aislarlo por completo, pero evitar compartir toallas y fomentar que no se rasque ayuda a reducir el contagio a otros niños y a otras zonas de su propia piel."
      },
      {
        q: "¿El tratamiento duele?",
        a: "Algunas opciones, como el curetaje, pueden generar molestia breve. Existen alternativas menos incómodas; coméntalo con tu dermatólogo según la edad y tolerancia de tu hijo."
      },
      {
        q: "¿Si no lo trato, puede empeorar?",
        a: "Puede extenderse a más zonas de la piel del niño mientras el sistema inmune lo controla, pero no suele representar un riesgo grave de salud en niños sanos."
      }
    ],
    relatedArticles: ["verrugas-en-ninos-cuando-preocuparse", "varicela-en-ninos-cuidado-de-la-piel"],
    references: [
      { label: "van der Wouden JC, et al. Interventions for cutaneous molluscum contagiosum. Cochrane Database Syst Rev. 2017. PMID 28513067.", url: "https://pubmed.ncbi.nlm.nih.gov/28513067/" },
      { label: "Leung AKC, et al. Molluscum contagiosum: an update. Recent Pat Inflamm Allergy Drug Discov. 2017. PMID 28521677.", url: "https://pubmed.ncbi.nlm.nih.gov/28521677/" }
    ]
  },
  {
    slug: "manchas-de-nacimiento-cuando-preocuparse",
    title: "Manchas de nacimiento: cuándo preocuparse",
    excerpt:
      "Encontrar una marca en la piel de tu bebé al nacer, o que aparezca en los primeros meses, es motivo frecuente de consulta. Esto es lo que suelen ser, y qué características ameritan una evaluación más cercana.",
    seoTitle: "Manchas de Nacimiento en Bebés Machala | Dra. Karla Andrade",
    seoDescription:
      "¿Cuándo preocuparse por una mancha de nacimiento? La Dra. Karla Andrade, dermatóloga pediátrica en Machala, explica hemangiomas, manchas café con leche y más.",
    category: "Dermatología clínica",
    datePublished: "2026-10-13",
    dateModified: "2026-10-13",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-pediatrica",
    lead:
      "Encontrar una mancha en la piel de tu bebé al nacer, o que aparezca en los primeros meses, es motivo frecuente de consulta. Esto es lo que suelen ser, y qué características ameritan una evaluación más cercana.",
    sections: [
      {
        h: "Qué tan frecuentes son",
        p: [
          "Muy frecuentes: la mayoría de los bebés tiene alguna marca de nacimiento, y la gran mayoría de estas marcas son completamente benignas y no requieren ningún tratamiento."
        ]
      },
      {
        h: "Manchas café con leche",
        p: [
          "Son manchas planas, de color marrón claro uniforme. Tener una o dos es común y, en general, no amerita preocupación. Tener varias —seis o más— sí es una señal que amerita evaluación, porque puede asociarse a ciertas condiciones genéticas que conviene descartar con un especialista."
        ]
      },
      {
        h: "Hemangiomas infantiles",
        p: [
          "Son acumulaciones de vasos sanguíneos que típicamente no son muy visibles al nacer, pero crecen durante las primeras semanas o meses de vida, antes de empezar a desaparecer gradualmente por cuenta propia en la mayoría de los casos, a lo largo de los primeros años."
        ]
      },
      {
        h: "Cuándo un hemangioma amerita evaluación más urgente",
        list: [
          "Si crece muy rápido en poco tiempo",
          "Si está cerca de los ojos, la vía aérea, u otras zonas funcionalmente delicadas",
          "Si se ulcera, es decir, se abre una herida en su superficie",
          "Si aparecen varios hemangiomas a la vez"
        ]
      },
      {
        h: "Manchas vasculares planas",
        p: [
          "Las manchas salmón —a veces llamadas coloquialmente 'beso de ángel' o 'pico de cigüeña', según la zona— son muy frecuentes y generalmente se desvanecen solas durante los primeros años de vida, sobre todo las ubicadas en los párpados o la nuca."
        ]
      },
      {
        h: "Por qué la evaluación temprana importa en casos con señales de alarma",
        p: [
          "Algunos hemangiomas que requieren tratamiento —como con propranolol, según las guías pediátricas actuales— tienen una ventana de oportunidad en la que el tratamiento es más efectivo. Por eso, ante cualquier señal de alarma, no conviene simplemente 'esperar a ver qué pasa': una evaluación oportuna amplía las opciones disponibles."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Las manchas café con leche son peligrosas?",
        a: "Una o dos, aisladas, generalmente no lo son. Varias manchas café con leche sí ameritan evaluación, porque pueden asociarse a ciertas condiciones genéticas."
      },
      {
        q: "¿Todos los hemangiomas necesitan tratamiento?",
        a: "No, muchos se resuelven solos sin necesidad de tratamiento. El tratamiento se reserva para los que tienen señales de alarma o ubicaciones de riesgo."
      },
      {
        q: "¿La mancha salmón de mi bebé desaparecerá?",
        a: "En la mayoría de los casos sí, de forma gradual durante los primeros años de vida, sobre todo si está en párpados o nuca."
      },
      {
        q: "¿Cuándo debo llevar a mi bebé a un dermatólogo por una marca de nacimiento?",
        a: "Si crece muy rápido, está en una zona delicada como cerca de los ojos, se abre una herida en su superficie, o si tienes cualquier duda que te preocupe."
      }
    ],
    relatedArticles: [],
    references: [
      { label: "Krowchuk DP, et al. Clinical practice guideline for the management of infantile hemangiomas. Pediatrics. 2019.", url: "https://doi.org/10.1542/peds.2018-3475" },
      { label: "Drolet BA, et al. Initiation and use of propranolol for infantile hemangioma. Pediatrics. 2013. PMID 23266923.", url: "https://pubmed.ncbi.nlm.nih.gov/23266923/" }
    ]
  },
  {
    slug: "alopecia-areata-que-es-y-tratamientos",
    title: "Alopecia areata: qué es y qué tratamientos existen",
    excerpt:
      "La alopecia areata es una de las causas de caída de cabello que más angustia genera, por lo repentina e impredecible que puede ser. Esto es lo que la causa, y qué opciones de tratamiento existen hoy.",
    seoTitle: "Alopecia Areata en Machala: Tratamientos | Dra. Karla Andrade",
    seoDescription:
      "¿Qué es la alopecia areata y qué tratamientos existen? La Dra. Karla Andrade, dermatóloga en Machala, explica sus causas y los avances recientes en tratamiento.",
    category: "Tricología",
    datePublished: "2026-10-13",
    dateModified: "2026-10-13",
    readingMin: 7,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    lead:
      "La alopecia areata es una de las causas de caída de cabello que más angustia genera, por lo repentina e impredecible que puede ser. Esto es lo que la causa, y qué opciones de tratamiento existen hoy, incluyendo avances recientes.",
    sections: [
      {
        h: "Qué es",
        p: [
          "Es la pérdida de cabello en parches, generalmente redondeados, de origen autoinmune: el sistema inmune ataca por error a los folículos pilosos, sin destruirlos de forma permanente en la mayoría de los casos."
        ]
      },
      {
        h: "Por qué es tan impredecible",
        p: [
          "Su curso varía muchísimo de una persona a otra: algunos casos se resuelven solos en meses, otros persisten o recurren con el tiempo, y en una minoría puede progresar hacia una pérdida más extensa, incluso de todo el cuero cabelludo o de todo el cuerpo en los casos más severos."
        ]
      },
      {
        h: "No es solo por estrés, aunque puede ser un desencadenante",
        p: [
          "Como en otras condiciones autoinmunes, existe una predisposición genética de base. El estrés puede actuar como gatillo en algunas personas, pero no es 'la causa' en el sentido de que manejarlo sea suficiente para resolver la condición por sí solo."
        ]
      },
      {
        h: "Tratamientos tradicionales",
        p: [
          "Incluyen corticoides —inyectados directamente en el cuero cabelludo, tópicos u orales según el caso— e inmunoterapia tópica en casos más extensos, buscando modular la respuesta inmune local."
        ]
      },
      {
        h: "El avance más reciente: inhibidores de JAK",
        p: [
          "Es una familia de medicamentos que ha mostrado, en varios estudios, tasas de respuesta más altas que las opciones previas, incluyendo mejoría significativa del cuero cabelludo afectado en una proporción relevante de pacientes tratados. No están exentos de posibles efectos adversos, y en general requieren mantenerse en el tiempo, porque la tasa de recaída al suspenderlos es alta."
        ]
      },
      {
        h: "Por qué el tratamiento se decide caso por caso",
        p: [
          "La extensión de la pérdida, el tiempo de evolución, la edad del paciente y la respuesta a tratamientos previos influyen en qué opción tiene más sentido para cada persona. No existe un protocolo único aplicable a todos los casos."
        ]
      },
      {
        h: "El impacto emocional",
        p: [
          "Al igual que el vitíligo, es una condición muy visible que puede afectar de forma significativa la autoestima. El apoyo psicológico, cuando hace falta, es parte legítima del manejo integral, no un aspecto secundario al tratamiento médico de la piel."
        ]
      }
    ],
    faqs: [
      {
        q: "¿La alopecia areata se cura?",
        a: "No hay garantía de cura definitiva, pero muchos casos se resuelven solos o responden bien al tratamiento. El curso es muy variable entre personas."
      },
      {
        q: "¿El cabello vuelve a crecer igual que antes?",
        a: "En muchos casos sí, total o parcialmente, aunque puede recurrir con el tiempo. La evolución depende de cada caso particular."
      },
      {
        q: "¿Los inhibidores de JAK son seguros?",
        a: "Son considerados generalmente seguros bajo supervisión médica, aunque como todo medicamento tienen posibles efectos adversos que deben explicarse antes de iniciar el tratamiento."
      },
      {
        q: "¿Debo dejar de tratarme si el tratamiento no funciona de inmediato?",
        a: "No necesariamente. Varios tratamientos para alopecia areata necesitan semanas o meses para mostrar resultado; esto debe conversarse con tu dermatólogo antes de suspender algo por cuenta propia."
      }
    ],
    relatedArticles: ["que-tratamiento-capilar-necesito-segun-mi-alopecia"],
    references: [
      { label: "The evaluation of JAK inhibitors on effect and safety in alopecia areata: a systematic review and meta-analysis of 2018 patients.", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10272608/" }
    ]
  },
  {
    slug: "hiperhidrosis-tratamiento-con-toxina-botulinica",
    title: "Hiperhidrosis: cómo la toxina botulínica trata la sudoración excesiva",
    excerpt:
      "La hiperhidrosis puede afectar significativamente la vida diaria. Esto es lo que la causa, y cómo la toxina botulínica se volvió una de las opciones de tratamiento más efectivas.",
    seoTitle: "Hiperhidrosis en Machala: Tratamiento con Botox | Dra. Karla Andrade",
    seoDescription:
      "¿Cómo se trata la hiperhidrosis (sudoración excesiva)? La Dra. Karla Andrade, dermatóloga en Machala, explica cómo la toxina botulínica reduce la sudoración.",
    category: "Aparatología",
    datePublished: "2026-10-13",
    dateModified: "2026-10-13",
    readingMin: 6,
    relatedEspecialidad: "medicina-estetica",
    lead:
      "La hiperhidrosis —sudoración excesiva, más allá de lo que el cuerpo necesita para regular su temperatura— puede afectar significativamente la vida diaria. Esto es lo que la causa, y cómo la toxina botulínica se volvió una de las opciones de tratamiento más efectivas.",
    sections: [
      {
        h: "Qué es",
        p: [
          "Es la sudoración excesiva en zonas específicas —axilas, palmas, plantas, a veces cara o cuero cabelludo— más allá de lo necesario para regular la temperatura corporal, que puede presentarse incluso sin calor, ejercicio, ni ansiedad de por medio."
        ]
      },
      {
        h: "Primaria vs. secundaria",
        p: [
          "La forma primaria no tiene una causa médica de fondo identificable, es la más común, y suele comenzar en la infancia o la adolescencia. La forma secundaria es causada por otra condición o por algún medicamento, por lo que la evaluación inicial busca descartar causas de fondo cuando el patrón no es el típico."
        ]
      },
      {
        h: "Por qué afecta tanto la vida diaria",
        p: [
          "Más allá de la incomodidad física, genera un impacto social y emocional significativo: evitar saludar de mano, limitar el tipo de ropa, ansiedad en situaciones sociales. Por eso se considera una condición médica real que amerita tratamiento, no solo una molestia estética."
        ]
      },
      {
        h: "Cómo actúa la toxina botulínica",
        p: [
          "Bloquea la señal nerviosa que activa las glándulas sudoríparas en la zona tratada, reduciendo la sudoración de forma marcada en la mayoría de los pacientes."
        ]
      },
      {
        h: "Qué esperar del tratamiento",
        p: [
          "El efecto no es permanente: dura generalmente varios meses, por lo que requiere sesiones de mantenimiento periódicas. Se considera una alternativa efectiva cuando los antitranspirantes con sales de aluminio en concentración alta no son suficientes para controlar el problema."
        ]
      },
      {
        h: "Otras opciones, según el caso",
        p: [
          "Desde antitranspirantes de mayor concentración, hasta, en casos seleccionados, otros procedimientos más invasivos, reservados para cuando las opciones anteriores no logran un control adecuado."
        ]
      }
    ],
    faqs: [
      {
        q: "¿La toxina botulínica para hiperhidrosis duele?",
        a: "Genera molestias mínimas, similares a otras aplicaciones de toxina botulínica; en zonas sensibles como las palmas puede usarse anestesia tópica previa."
      },
      {
        q: "¿Cuánto dura el efecto?",
        a: "Generalmente varios meses, por lo que se requieren sesiones de mantenimiento periódicas para sostener el resultado."
      },
      {
        q: "¿Sirve para cualquier grado de sudoración excesiva?",
        a: "Es efectiva en la mayoría de los casos de hiperhidrosis primaria, pero la indicación y la zona a tratar deben evaluarse de forma individual."
      },
      {
        q: "¿Debo descartar otras causas antes de tratarla?",
        a: "Si el patrón de sudoración no es el típico de la hiperhidrosis primaria, tu médico puede evaluar si existe una causa secundaria antes de definir el tratamiento."
      }
    ],
    relatedArticles: ["botox-en-el-masetero-para-que-sirve"],
    references: [
      { label: "Botulinum toxin for hyperhidrosis: a review. Am J Clin Dermatol. 2009. PMID 19222249.", url: "https://pubmed.ncbi.nlm.nih.gov/19222249/" }
    ]
  },
  {
    slug: "estrias-tratamientos-que-funcionan",
    title: "Estrías: qué tratamientos realmente funcionan",
    excerpt:
      "Las estrías son una de las preocupaciones de piel más comunes, y también una de las que más productos milagrosos promete resolver. Esto es lo que realmente dice la evidencia sobre qué funciona, y qué no.",
    seoTitle: "Estrías: ¿Qué Tratamientos Funcionan? | Dra. Karla Andrade",
    seoDescription:
      "¿Qué tratamientos funcionan realmente para las estrías? La Dra. Karla Andrade, dermatóloga en Machala, explica qué dice la evidencia científica sobre su tratamiento.",
    category: "Aparatología",
    datePublished: "2026-10-13",
    dateModified: "2026-10-13",
    readingMin: 6,
    relatedEspecialidad: "medicina-estetica",
    lead:
      "Las estrías son una de las preocupaciones de piel más comunes, y también una de las que más productos milagrosos promete resolver. Esto es lo que realmente dice la evidencia sobre qué funciona, y qué no.",
    sections: [
      {
        h: "Qué son",
        p: [
          "Son líneas en la piel que aparecen cuando esta se estira de forma relativamente rápida —durante el crecimiento, el embarazo, o cambios de peso—, superando la capacidad de las fibras de colágeno y elastina de adaptarse a ese cambio. El resultado es una especie de cicatriz interna, visible en la superficie."
        ]
      },
      {
        h: "Por qué cambian de aspecto con el tiempo",
        p: [
          "Inicialmente suelen verse rojizas o moradas —las llamadas estrías 'activas'—, y con el tiempo se aclaran hasta verse blanquecinas o plateadas —estrías 'maduras'—. Esto importa en la práctica, porque el momento en que se tratan influye en la respuesta al tratamiento."
        ]
      },
      {
        h: "Por qué la prevención total no es realista",
        p: [
          "Pese a lo que promete buena parte de la publicidad de cremas 'anti-estrías', no existe evidencia sólida de que los productos tópicos las prevengan de forma confiable cuando el estiramiento de la piel es significativo, como en el embarazo. La predisposición genética también influye mucho, independientemente de los cuidados que se apliquen."
        ]
      },
      {
        h: "Qué tiene algo de evidencia para mejorarlas",
        p: [
          "En la fase inicial roja, ciertos tratamientos como el láser vascular pueden ayudar más que en la fase blanca ya establecida. Para las estrías ya maduras, algunos láseres fraccionados y el microneedling muestran una mejoría parcial de su apariencia en varios estudios, aunque la evidencia en conjunto sigue siendo limitada."
        ]
      },
      {
        h: "Expectativas realistas",
        p: [
          "Ningún tratamiento disponible las elimina por completo. El objetivo realista es una mejoría de su apariencia, no un borrado total, de forma similar a lo que explicamos en nuestro artículo sobre cicatrices de acné."
        ]
      },
      {
        h: "Por qué conviene una evaluación antes de invertir en tratamientos",
        p: [
          "El tipo de estría —activa o madura—, tu tipo de piel, y la zona afectada determinan qué opción tiene sentido, si alguna, para tu caso particular. Invertir en un tratamiento sin esa evaluación previa suele llevar a expectativas y resultados desalineados."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Las cremas para estrías realmente funcionan?",
        a: "La evidencia de que prevengan las estrías de forma confiable es limitada, sobre todo cuando el estiramiento de la piel es significativo, como en el embarazo."
      },
      {
        q: "¿Es mejor tratar las estrías rojas o esperar a que se vuelvan blancas?",
        a: "En general, la fase roja responde mejor a ciertos tratamientos, como el láser vascular, que la fase blanca ya establecida."
      },
      {
        q: "¿El láser elimina las estrías por completo?",
        a: "No. Los tratamientos disponibles mejoran su apariencia, pero no las eliminan por completo. Es importante partir de expectativas realistas."
      },
      {
        q: "¿Las estrías del embarazo se pueden prevenir con cuidados?",
        a: "Los cuidados de la piel ayudan a mantenerla en buenas condiciones, pero no hay evidencia sólida de que prevengan las estrías de forma confiable cuando el estiramiento es significativo."
      }
    ],
    relatedArticles: ["el-acne-deja-cicatrices-se-pueden-eliminar", "laser-co2-fraccionado-que-es"],
    references: [
      { label: "A narrative review of current striae treatments. Healthcare. 2022. PMID 36554088.", url: "https://pubmed.ncbi.nlm.nih.gov/36554088/" },
      { label: "Striae distensae: a comprehensive review and evidence-based evaluation of prophylaxis and treatment. 2013. PMID 24125059.", url: "https://pubmed.ncbi.nlm.nih.gov/24125059/" }
    ]
  },
  {
    slug: "celulitis-piel-de-naranja-tratamientos",
    title: "Celulitis (piel de naranja): por qué aparece y qué tratamientos ayudan",
    excerpt:
      "La celulitis estética es una de las preocupaciones más comunes, y también de las más rodeadas de promesas poco realistas. Esto es lo que realmente la causa, y qué tratamientos tienen algo de respaldo.",
    seoTitle: "Celulitis (Piel de Naranja): Tratamientos | Dra. Karla Andrade",
    seoDescription:
      "¿Por qué aparece la celulitis y qué tratamientos ayudan? La Dra. Karla Andrade, dermatóloga en Machala, explica qué dice la evidencia sobre su causa y tratamiento.",
    category: "Aparatología",
    datePublished: "2026-10-13",
    dateModified: "2026-10-13",
    readingMin: 6,
    relatedEspecialidad: "medicina-estetica",
    lead:
      "La celulitis —la 'piel de naranja' en muslos y glúteos, no la infección bacteriana que comparte el nombre— es una de las preocupaciones estéticas más comunes, y también de las más rodeadas de promesas poco realistas. Esto es lo que realmente la causa, y qué tratamientos tienen algo de respaldo.",
    sections: [
      {
        h: "Aclaremos el nombre primero",
        p: [
          "En medicina estética, 'celulitis' se refiere a la apariencia irregular, tipo piel de naranja, de la piel en ciertas zonas. No tiene relación con la celulitis infecciosa, una infección bacteriana de la piel que es una condición médica completamente distinta y no se trata en este artículo."
        ]
      },
      {
        h: "Por qué aparece",
        p: [
          "Las revisiones más recientes apuntan a que el origen principal está en los tabiques fibrosos que conectan la piel con las capas más profundas: cuando estos tabiques tiran de la piel de forma irregular mientras el tejido graso se expande entre ellos, se genera la apariencia ondulada característica, más que un problema del tejido graso en sí mismo."
        ]
      },
      {
        h: "No es exclusiva del sobrepeso",
        p: [
          "Afecta a personas de todos los tipos de cuerpo, incluidas muchas con un peso dentro de rangos considerados saludables. La predisposición genética y hormonal influye más de lo que suele pensarse."
        ]
      },
      {
        h: "Por qué es tan difícil de tratar de forma duradera",
        p: [
          "Al estar relacionada con una estructura fibrosa fija —los tabiques—, los tratamientos que no abordan directamente esa estructura tienden a dar resultados poco duraderos o inconsistentes entre una persona y otra."
        ]
      },
      {
        h: "Qué opciones tienen más evidencia",
        p: [
          "Los enfoques que actúan directamente sobre los tabiques fibrosos, como la subcisión —un procedimiento que libera mecánicamente esas bandas—, muestran resultados más consistentes en las revisiones recientes que los tratamientos puramente tópicos o superficiales. Las terapias con láser, luz y radiofrecuencia tienen un buen perfil de seguridad, aunque usadas solas, sus resultados suelen ser más modestos."
        ]
      },
      {
        h: "Por qué casi siempre se combina más de un enfoque",
        p: [
          "Dada la variabilidad de resultados de cualquier técnica usada por sí sola, las revisiones sugieren que combinar métodos suele dar mejores resultados que depender de uno solo."
        ]
      }
    ],
    faqs: [
      {
        q: "¿La celulitis solo le da a personas con sobrepeso?",
        a: "No. Afecta a personas de todos los tipos de cuerpo, incluidas muchas con peso saludable; la predisposición genética y hormonal influye mucho."
      },
      {
        q: "¿Las cremas reductoras eliminan la celulitis?",
        a: "No hay evidencia sólida de que los tratamientos tópicos por sí solos la eliminen, porque el origen principal está en una estructura fibrosa más profunda que una crema no alcanza a modificar."
      },
      {
        q: "¿Cuál es el mejor tratamiento para la celulitis?",
        a: "No existe un tratamiento único superior para todos los casos; las revisiones sugieren que combinar métodos suele dar mejores resultados que usar uno solo, según cada caso."
      },
      {
        q: "¿Hacer ejercicio elimina la celulitis?",
        a: "El ejercicio mejora la salud general de la piel y el tono muscular, pero no modifica directamente los tabiques fibrosos que generan la apariencia característica de la celulitis."
      }
    ],
    relatedArticles: ["estrias-tratamientos-que-funcionan"],
    references: [
      { label: "Bass LS, Kaminer MS. Insights into the pathophysiology of cellulite: a review. Dermatol Surg. 2020. PMID 32976174.", url: "https://pubmed.ncbi.nlm.nih.gov/32976174/" }
    ]
  },
  {
    slug: "verrugas-genitales-que-son-y-cuando-consultar",
    title: "Verrugas genitales: qué son, por qué aparecen y cuándo consultar",
    excerpt:
      "Son una de las infecciones de transmisión sexual más comunes y, a la vez, de las que menos se habla abiertamente. Qué son, cómo se tratan y por qué no conviene intentar quitarlas por cuenta propia.",
    seoTitle: "Verrugas Genitales: Qué Son y Cuándo Consultar | Dra. Karla Andrade",
    seoDescription:
      "¿Qué son las verrugas genitales y cómo se tratan? La Dra. Karla Andrade, dermatóloga en Machala, explica causas, opciones de tratamiento y cuándo consultar.",
    category: "Dermatología clínica",
    datePublished: "2026-10-16",
    dateModified: "2026-10-16",
    readingMin: 7,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Las verrugas genitales son una de las infecciones de transmisión sexual más frecuentes, y también de las que generan más incomodidad para consultar. Es un motivo de consulta común, no algo excepcional ni motivo de vergüenza. Esto es lo que realmente son, cómo se tratan y por qué no conviene intentar resolverlas por cuenta propia.",
    sections: [
      {
        h: "¿Qué son y qué las causa?",
        p: [
          "Son pequeñas lesiones elevadas en la piel o mucosas de la zona genital o anal, causadas por ciertos tipos del virus del papiloma humano (VPH), principalmente los tipos 6 y 11.",
          "Es importante esta distinción: los tipos de VPH que causan verrugas genitales son distintos de los tipos de 'alto riesgo' asociados a cáncer de cuello uterino y otros cánceres. Tener verrugas genitales no significa tener mayor riesgo de cáncer por ese motivo."
        ]
      },
      {
        h: "¿Cómo se transmiten?",
        p: [
          "Se transmiten por contacto directo piel con piel durante la actividad sexual, no únicamente por penetración. El preservativo reduce el riesgo de transmisión, pero no lo elimina por completo, porque puede haber zonas de piel infectada que no queda cubierta.",
          "El tiempo entre el contacto y la aparición de las verrugas es muy variable (semanas a meses, a veces más), por lo que no siempre es posible identificar el momento exacto del contagio ni 'culpar' a una pareja reciente."
        ]
      },
      {
        h: "Por qué no conviene usar removedores de verrugas comunes",
        p: [
          "Los productos de venta libre para verrugas de manos o pies (ácido salicílico y similares) no están pensados para la piel genital ni las mucosas, que son mucho más sensibles. Usarlos en esa zona puede causar quemaduras, irritación intensa o lesiones que tardan en sanar.",
          "Además, no toda lesión nueva en la zona genital es una verruga por VPH: puede tratarse de molusco contagioso, quistes, pápulas normales de la piel (como las pápulas perladas del pene) u otras condiciones que requieren un manejo distinto. Un examen permite diferenciarlas antes de iniciar cualquier tratamiento."
        ]
      },
      {
        h: "Opciones de tratamiento",
        list: [
          "Tratamientos de aplicación en el propio domicilio, indicados y recetados por el médico: cremas o soluciones como imiquimod, podofilotoxina o sinecatequinas, usadas según un esquema específico que el médico define para cada caso.",
          "Tratamientos aplicados en el consultorio: crioterapia (congelación), ácido tricloroacético, electrocauterio o remoción quirúrgica, entre otros.",
          "Láser, en casos más extensos o que no respondieron a otras opciones."
        ]
      },
      {
        h: "Qué esperar del tratamiento",
        p: [
          "La elección depende del tamaño, número y ubicación de las verrugas, y de la preferencia del paciente. Las guías clínicas no señalan una única opción como superior para todos los casos: cada una tiene ventajas y desventajas, y suele indicarse más de una sesión o aplicación antes de ver el resultado completo.",
          "Un punto clave que conviene entender desde el inicio: los tratamientos eliminan las verrugas visibles, pero no eliminan el virus del organismo. Por eso es frecuente que reaparezcan después de un tiempo, incluso tras un tratamiento exitoso, y eso no significa que algo se haya hecho mal."
        ]
      },
      {
        h: "Durante el embarazo",
        p: [
          "Si hay verrugas genitales durante el embarazo, el tratamiento debe ser indicado por un médico que considere esa condición: algunas opciones (como podofilotoxina o imiquimod) no se recomiendan en el embarazo, mientras que otras (como la crioterapia) suelen preferirse. Nunca debe iniciarse un tratamiento por cuenta propia en esta situación."
        ]
      },
      {
        h: "La vacuna contra el VPH como prevención",
        p: [
          "La vacunación contra el VPH, cuando se aplica antes de la exposición al virus, reduce de forma importante el riesgo de desarrollar verrugas genitales más adelante; estudios poblacionales muestran una caída marcada en los nuevos casos en personas vacunadas a edades tempranas. Si tienes dudas sobre si corresponde la vacuna para ti o para alguien de tu familia, es una buena pregunta para llevar a la consulta."
        ]
      },
      {
        h: "Cuándo consultar",
        list: [
          "Ante cualquier bulto, protuberancia o cambio nuevo en la piel genital o anal, aunque no duela.",
          "Si no estás seguro de qué es la lesión: un autodiagnóstico por internet no reemplaza un examen.",
          "Si estás embarazada y notas lesiones de este tipo.",
          "Si una lesión sangra, crece rápido o cambia de aspecto de forma notoria."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Las verrugas genitales son cáncer?",
        a: "No. Están causadas por tipos de VPH distintos a los que se asocian con cáncer de cuello uterino y otros cánceres. Son una condición benigna, aunque incómoda y molesta de manejar."
      },
      {
        q: "¿Desaparecen solas sin tratamiento?",
        a: "En algunos casos el propio sistema inmune las resuelve con el tiempo, pero no es algo predecible ni garantizado. Lo recomendable es que un médico evalúe cada caso para decidir si conviene tratarlas."
      },
      {
        q: "¿Puedo seguir teniendo relaciones si tengo verrugas genitales?",
        a: "Es una conversación que conviene tener con tu médico y, en pareja, de forma abierta. El riesgo de transmisión existe mientras las verrugas estén presentes, y el preservativo ayuda a reducirlo sin eliminarlo del todo."
      },
      {
        q: "¿Mi pareja también debe revisarse o tratarse?",
        a: "Es recomendable que la pareja también sea evaluada, aunque no tenga lesiones visibles, ya que el virus puede estar presente sin causar síntomas evidentes."
      },
      {
        q: "¿Por qué volvieron a aparecer después del tratamiento?",
        a: "Porque el tratamiento elimina las verrugas visibles, no el virus en sí. Las recurrencias son frecuentes y no significan que el tratamiento haya fallado ni que haya un nuevo contagio."
      }
    ],
    references: [
      { label: "Lazaro N, et al. British Association for Sexual Health and HIV national guideline for the management of anogenital warts in adults (2024). Int J STD AIDS. PMID 38456387.", url: "https://pubmed.ncbi.nlm.nih.gov/38456387/" },
      { label: "Gobierno de Canadá. Guía de verrugas anogenitales: tratamiento y seguimiento.", url: "https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/anogenital-warts/treatment-follow-up.html" },
      { label: "Network meta-analysis de tratamientos para verrugas anogenitales. PMID 31606873.", url: "https://pubmed.ncbi.nlm.nih.gov/31606873/" },
      { label: "Leval A, et al. Incidence of genital warts in Sweden before and after quadrivalent human papillomavirus vaccine availability. J Infect Dis. 2012. PMID 22815381.", url: "https://pubmed.ncbi.nlm.nih.gov/22815381/" }
    ]
  },
  {
    slug: "mesoterapia-capilar-que-es-y-que-dice-la-evidencia",
    title: "Mesoterapia capilar: qué es y qué dice la evidencia científica",
    excerpt:
      "Es uno de los procedimientos más ofrecidos contra la caída del cabello, pero también uno de los menos entendidos. Qué es realmente, qué dice la evidencia y por qué nunca debería hacerse fuera de un consultorio médico.",
    seoTitle: "Mesoterapia Capilar: Qué Es y Si Funciona | Dra. Karla Andrade",
    seoDescription:
      "¿Funciona la mesoterapia capilar? La Dra. Karla Andrade, dermatóloga en Machala, explica en qué consiste este procedimiento y qué dice la evidencia científica.",
    category: "Tricología",
    datePublished: "2026-10-16",
    dateModified: "2026-10-16",
    readingMin: 6,
    relatedEspecialidad: "tricologia-y-salud-capilar",
    lead:
      "La mesoterapia capilar es uno de los procedimientos más promocionados contra la caída del cabello, y también uno de los que más confusión genera: ¿qué es exactamente, funciona, y es algo que cualquiera puede ofrecer? Esto es lo que hay que saber antes de considerarla.",
    sections: [
      {
        h: "¿Qué es la mesoterapia capilar?",
        p: [
          "Es un procedimiento médico en el que un profesional inyecta, con agujas muy finas, pequeñas cantidades de sustancias activas directamente en la piel del cuero cabelludo. El objetivo es llevar esos componentes cerca del folículo piloso, en lugar de depender de que penetren a través de la piel como ocurre con una loción o crema.",
          "Según el caso, las sustancias utilizadas pueden incluir vitaminas, aminoácidos, minoxidil u otros compuestos, y la combinación exacta es una decisión médica que depende de cada paciente — no existe una fórmula única ni genérica."
        ]
      },
      {
        h: "¿Para qué se usa?",
        p: [
          "Se utiliza principalmente como apoyo en el tratamiento de la alopecia androgenética (la caída de patrón hereditario, tanto en hombres como en mujeres), generalmente combinada con otros tratamientos con más respaldo, como el minoxidil."
        ]
      },
      {
        h: "¿Qué dice la evidencia científica?",
        p: [
          "Una revisión sistemática publicada en 2024 analizó 11 estudios sobre mesoterapia capilar y encontró resultados estadísticamente significativos y alta satisfacción de los pacientes en la mayoría de ellos.",
          "Sin embargo, es importante matizarlo: los propios autores señalan que los estudios disponibles son en general pequeños, de corta duración, y con protocolos muy variables entre sí (distintas sustancias, distintas concentraciones, distinta frecuencia). Eso significa que la evidencia es prometedora pero todavía limitada, no una certeza equivalente a la de tratamientos como el minoxidil o la finasterida/dutasterida, que cuentan con estudios más sólidos y de más largo plazo."
        ]
      },
      {
        h: "Por qué debe hacerla siempre un profesional de la salud",
        p: [
          "Al ser un procedimiento inyectable, conlleva riesgos que no tiene una loción o champú: infecciones si no se usa técnica estéril, reacciones a los componentes, o nódulos e inflamación si las sustancias no son las adecuadas para uso inyectable en piel.",
          "Es importante saber que existe mesoterapia capilar ofrecida en lugares sin supervisión médica (algunos centros de estética o peluquerías). Eso incrementa el riesgo de complicaciones, porque la selección de sustancias, las dosis y la técnica de aplicación son decisiones clínicas que debe tomar un médico, no un procedimiento que deba o pueda hacerse una misma persona en casa ni en un entorno sin formación médica."
        ]
      },
      {
        h: "¿Reemplaza a otros tratamientos?",
        p: [
          "No. La evidencia actual la posiciona como un complemento, no como un sustituto de tratamientos con más respaldo científico como el minoxidil o la finasterida/dutasterida. La decisión de combinarla o no con otros tratamientos, y el número de sesiones, depende de la evaluación de cada caso por un médico."
        ]
      },
      {
        h: "¿Quién no debería hacérsela?",
        list: [
          "Personas embarazadas o en lactancia.",
          "Personas con infecciones activas o heridas en el cuero cabelludo.",
          "Personas con alergia conocida a alguno de los componentes a inyectar.",
          "Personas con trastornos de la coagulación no controlados."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Funciona la mesoterapia capilar?",
        a: "Hay estudios con resultados favorables y buena satisfacción de los pacientes, pero en general son estudios pequeños y de corta duración. La evidencia es prometedora pero todavía más limitada que la de tratamientos como el minoxidil."
      },
      {
        q: "¿Es dolorosa?",
        a: "Puede generar molestia durante las inyecciones, variable según la persona y la zona. Es algo que conviene conversar con el médico que la realice."
      },
      {
        q: "¿Es lo mismo que el PRP capilar?",
        a: "No. El PRP utiliza plasma rico en plaquetas obtenido de la propia sangre del paciente, mientras que la mesoterapia inyecta sustancias externas (vitaminas, minoxidil u otras, según el caso). Son procedimientos distintos, aunque comparten la vía de aplicación inyectable."
      },
      {
        q: "¿Me la puedo aplicar yo misma/o en casa?",
        a: "No. Es un procedimiento médico inyectable que requiere técnica estéril y criterio clínico para elegir qué sustancias usar y en qué paciente. Hacerlo fuera de un entorno médico aumenta el riesgo de infecciones y otras complicaciones."
      },
      {
        q: "¿Cuántas sesiones se necesitan?",
        a: "Varía según cada caso y debe definirlo el médico tratante según la evolución; no hay un número fijo válido para todas las personas."
      }
    ],
    relatedArticles: [
      "que-tratamiento-capilar-necesito-segun-mi-alopecia",
      "prp-capilar-tratamiento-cientifico-o-moda",
      "minoxidil-para-el-cabello-funciona"
    ],
    references: [
      { label: "Aledani EM, et al. Mesotherapy as a Promising Alternative to Minoxidil for Androgenetic Alopecia: A Systematic Review. Cureus. 2024. PMID 38841017.", url: "https://pubmed.ncbi.nlm.nih.gov/38841017/" }
    ]
  },
  {
    slug: "psoriasis-mitos-y-verdades",
    title: "Psoriasis: mitos y verdades que debes conocer",
    excerpt:
      "Pocas enfermedades de la piel están tan rodeadas de ideas equivocadas como la psoriasis, incluyendo una muy frecuente: confundirla con hongos y tratarla como tal. Separamos los mitos de lo que realmente dice la evidencia.",
    seoTitle: "Psoriasis: Mitos y Verdades | Dra. Karla Andrade",
    seoDescription:
      "¿Es contagiosa la psoriasis? ¿Es lo mismo que un hongo en la piel? La Dra. Karla Andrade, dermatóloga en Machala, aclara los mitos más comunes sobre la psoriasis.",
    category: "Dermatología clínica",
    datePublished: "2026-10-16",
    dateModified: "2026-10-16",
    readingMin: 7,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Pocas enfermedades de la piel están tan rodeadas de ideas equivocadas como la psoriasis. Esa confusión no es inofensiva: algunas de estas ideas llevan a las personas a tratarse por su cuenta la condición equivocada, o a cargar con un estigma que no tiene fundamento médico. Repasamos los mitos más comunes.",
    sections: [
      {
        h: "Mito: \"Si tengo manchas con escamas, son hongos\"",
        p: [
          "Este es, en la práctica, uno de los errores más frecuentes y con más consecuencias. Las placas de psoriasis —sobre todo en el cuero cabelludo, las uñas y los pliegues de la piel— pueden parecerse mucho, a simple vista, a una infección por hongos, y mucha gente las trata con antimicóticos de venta libre sin que nadie las haya examinado antes.",
          "La confusión es tan real que, incluso clínicamente, a veces coexisten las dos cosas en la misma persona: un estudio de 2024 con pacientes con psoriasis ungueal (en las uñas) encontró que un 22% de ellos tenía además una infección por hongos confirmada por laboratorio. Es decir, ni siquiera para un ojo entrenado alcanza con mirar: hace falta un examen (a veces con cultivo o dermatoscopía) para diferenciarlas con certeza.",
          "La consecuencia práctica de este mito es tratar con antimicóticos algo que no va a responder a ellos porque no es un hongo, lo que retrasa semanas o meses el diagnóstico correcto. Si tienes placas escamosas que no mejoran con un tratamiento antimicótico, es una señal de que conviene revisar el diagnóstico, no de insistir con el mismo producto."
        ]
      },
      {
        h: "Mito: \"Es contagiosa\"",
        p: [
          "No lo es, bajo ninguna circunstancia. No se transmite por tocar a alguien, compartir ropa, toallas, piscinas ni ningún otro contacto. Es una enfermedad de origen inmunológico, no una infección."
        ]
      },
      {
        h: "Mito: \"Es solo un problema estético de la piel\"",
        p: [
          "Es uno de los mitos más importantes de desmentir, porque tiene consecuencias reales para la salud. La psoriasis es una enfermedad inflamatoria sistémica: aproximadamente 1 de cada 5 personas con psoriasis desarrolla también artritis psoriásica, con dolor e inflamación articular, según el metaanálisis más grande disponible sobre el tema. También se asocia a mayor riesgo cardiovascular y metabólico, por lo que el seguimiento médico no debería limitarse a las placas visibles en la piel."
        ]
      },
      {
        h: "Mito: \"Es por mala higiene\"",
        p: [
          "No guarda relación con la higiene personal. Es una enfermedad con base genética e inmunológica; ninguna rutina de limpieza, por rigurosa que sea, la previene ni la cura."
        ]
      },
      {
        h: "Mito: \"Si nadie en mi familia la tiene, yo no la puedo desarrollar\"",
        p: [
          "Existe un componente genético que aumenta el riesgo, pero no es determinante por sí solo: también influyen factores ambientales y del sistema inmune. Es perfectamente posible desarrollar psoriasis sin antecedentes familiares directos conocidos."
        ]
      },
      {
        h: "Mito: \"Solo les da a personas adultas o mayores\"",
        p: [
          "Puede aparecer a cualquier edad, incluida la infancia y la adolescencia. No es exclusiva de ningún grupo etario."
        ]
      },
      {
        h: "Mito: \"Es psicológica, me la provoco yo con el estrés\"",
        p: [
          "El estrés es un desencadenante reconocido de los brotes, pero no es la causa de la enfermedad ni algo que la persona se 'provoque' a sí misma. Es una enfermedad inmunológica real, no un trastorno psicológico, aunque el estrés y el impacto emocional de vivir con ella sí merecen atención como parte del cuidado integral."
        ]
      },
      {
        h: "Mito: \"Cuando las placas desaparecen, ya no tengo la enfermedad\"",
        p: [
          "La piel puede verse completamente libre de lesiones durante largos períodos, pero la condición de base sigue presente. Por eso es una enfermedad crónica que se controla, más que algo que se 'cura' de una vez y para siempre."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Cómo sé si lo que tengo es psoriasis o un hongo?",
        a: "A simple vista puede ser muy difícil diferenciarlas, incluso para un profesional, especialmente en uñas, cuero cabelludo y pliegues de la piel. Lo correcto es que un médico examine la lesión y, si hace falta, tome una muestra para confirmar o descartar un hongo antes de decidir cómo tratarla."
      },
      {
        q: "¿Por qué mi 'hongo' no mejora con antimicóticos?",
        a: "Si una lesión escamosa no responde a un tratamiento antimicótico adecuado, es una señal de que conviene reevaluar el diagnóstico: puede tratarse de psoriasis u otra condición distinta a una infección por hongos."
      },
      {
        q: "¿La psoriasis se puede confundir con otras condiciones además de hongos?",
        a: "Sí. En el cuero cabelludo suele confundirse con dermatitis seborreica o caspa, y en los pliegues de la piel con otras irritaciones. Por eso el examen médico es importante antes de asumir un diagnóstico."
      },
      {
        q: "¿Tener psoriasis significa que también tendré artritis?",
        a: "No necesariamente, pero el riesgo está aumentado: cerca de 1 de cada 5 personas con psoriasis desarrolla artritis psoriásica. Por eso se recomienda estar atento a dolor o inflamación en las articulaciones y comentarlo con tu médico."
      }
    ],
    relatedArticles: [
      "psoriasis-que-es-y-como-se-trata",
      "hongos-en-la-piel-tina-pie-de-atleta",
      "dermatitis-seborreica-que-es-y-como-tratarla"
    ],
    references: [
      { label: "Abdo HM, et al. Prevalence of onychomycosis among psoriasis patients: a clinico-mycological and dermoscopic comparative cross sectional study. Sci Rep. 2024. DOI 10.1038/s41598-024-71321-6.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11408611/" },
      { label: "Alinaghi F, et al. Prevalence of psoriatic arthritis in patients with psoriasis: a systematic review and meta-analysis. J Am Acad Dermatol. 2019. DOI 10.1016/j.jaad.2018.06.027.", url: "https://doi.org/10.1016/j.jaad.2018.06.027" }
    ]
  },
  {
    slug: "acrocordones-bolitas-de-piel-colgantes-que-son",
    title: "Esas bolitas de piel colgantes en el cuello o las axilas: qué son",
    excerpt:
      "Pequeñas, suaves, del color de la piel, y muy comunes en el cuello, las axilas o los párpados. Qué son los acrocordones, por qué aparecen y por qué no conviene cortarlos en casa.",
    seoTitle: "Bolitas de Piel Colgantes (Acrocordones): Qué Son | Dra. Karla Andrade",
    seoDescription:
      "¿Qué son esas bolitas de piel colgantes en el cuello o las axilas? La Dra. Karla Andrade, dermatóloga en Machala, explica qué son los acrocordones y cuándo consultar.",
    category: "Dermatología clínica",
    datePublished: "2026-10-16",
    dateModified: "2026-10-16",
    readingMin: 5,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Son una de las consultas más frecuentes y menos comentadas: esas pequeñas bolitas de piel colgantes que aparecen en el cuello, las axilas, los párpados o debajo del busto. Tienen nombre médico —acrocordones— y esto es lo que realmente son.",
    sections: [
      {
        h: "¿Qué son?",
        p: [
          "Son pequeños crecimientos benignos de piel, blandos, del mismo color o un poco más oscuros que la piel alrededor, que cuelgan de un pequeño tallo. Aparecen sobre todo en zonas donde hay roce de piel con piel o con ropa: cuello, axilas, párpados, ingles y debajo del busto."
        ]
      },
      {
        h: "¿Por qué aparecen?",
        p: [
          "El roce repetido de la piel es un factor conocido, por eso son más frecuentes en los pliegues del cuerpo. También hay varios estudios que encuentran una asociación entre tener múltiples acrocordones y la resistencia a la insulina o el síndrome metabólico, aunque esto no significa que todas las personas con acrocordones tengan esas condiciones: es una asociación observada, no una regla fija."
        ]
      },
      {
        h: "Por qué no conviene cortarlos en casa",
        p: [
          "Es común la idea de 'amarrarlos con un hilo' o cortarlos con tijeras o cortaúñas en casa. No es recomendable: puede causar sangrado, infección, una cicatriz innecesaria, y además impide confirmar primero que se trata realmente de un acrocordón y no de otro tipo de lesión que requiera una evaluación distinta."
        ]
      },
      {
        h: "¿Son peligrosos?",
        p: [
          "No, son benignos y no se transforman en cáncer de piel. Se retiran únicamente por molestia (si se enganchan con la ropa o joyas) o por preferencia estética, nunca por una urgencia médica."
        ]
      },
      {
        h: "Cuándo consultar",
        list: [
          "Si una de estas lesiones cambia de color, tamaño o forma de manera notoria.",
          "Si sangra sin que se haya enganchado con algo.",
          "Si no estás seguro de que sea realmente un acrocordón y no otra cosa.",
          "Si quieres que te las retiren, para hacerlo de forma segura en el consultorio."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Los acrocordones son peligrosos o pueden convertirse en cáncer?",
        a: "No. Son lesiones benignas y no se transforman en cáncer de piel."
      },
      {
        q: "¿Me los puedo quitar yo mismo/a en casa?",
        a: "No es recomendable. Cortarlos o amarrarlos en casa puede causar sangrado e infección, y no permite confirmar primero el diagnóstico. Lo seguro es que te los retire un profesional."
      },
      {
        q: "¿Tienen relación con la diabetes?",
        a: "Hay estudios que encuentran una asociación entre tener múltiples acrocordones y la resistencia a la insulina, pero no es una regla: muchas personas los tienen sin ninguna alteración metabólica. Si te preocupa, es una buena pregunta para la consulta."
      },
      {
        q: "¿Vuelven a salir después de quitarlos?",
        a: "Pueden aparecer nuevos acrocordones en otras zonas con el tiempo, ya que la tendencia a desarrollarlos no desaparece, aunque el que se retiró no vuelve a crecer en el mismo punto."
      }
    ],
    relatedArticles: ["acantosis-nigricans-manchas-oscuras-en-el-cuello"],
    references: [
      { label: "Akpinar F, Dervis E. Association between acrochordons and the components of metabolic syndrome. Eur J Dermatol. 2012. PMID 22063265.", url: "https://pubmed.ncbi.nlm.nih.gov/22063265/" }
    ]
  },
  {
    slug: "acantosis-nigricans-manchas-oscuras-en-el-cuello",
    title: "Manchas oscuras y aterciopeladas en el cuello: qué pueden significar",
    excerpt:
      "Un oscurecimiento y engrosamiento de la piel en el cuello, las axilas o las ingles no es falta de higiene: tiene nombre médico, acantosis nigricans, y suele ser una señal que vale la pena investigar.",
    seoTitle: "Manchas Oscuras en el Cuello (Acantosis Nigricans) | Dra. Karla Andrade",
    seoDescription:
      "¿Qué significan las manchas oscuras y aterciopeladas en el cuello o las axilas? La Dra. Karla Andrade, dermatóloga en Machala, explica la acantosis nigricans.",
    category: "Dermatología clínica",
    datePublished: "2026-10-16",
    dateModified: "2026-10-16",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Un oscurecimiento aterciopelado de la piel en el cuello, las axilas o las ingles se confunde a menudo con suciedad que 'no sale al lavar'. No lo es. Tiene nombre médico —acantosis nigricans— y en la mayoría de los casos es una señal del cuerpo que vale la pena escuchar.",
    sections: [
      {
        h: "¿Qué es?",
        p: [
          "Es un engrosamiento y oscurecimiento de la piel, de aspecto aterciopelado, que aparece típicamente en los pliegues: la parte posterior y lateral del cuello, las axilas y las ingles. No es suciedad ni falta de higiene, y ningún tallado por más fuerte que sea lo hace desaparecer."
        ]
      },
      {
        h: "La causa más frecuente",
        p: [
          "En la gran mayoría de los casos, refleja resistencia a la insulina, y se asocia a sobrepeso, prediabetes o diabetes tipo 2. Por eso, más que un problema estético, suele funcionar como una señal visible de que conviene revisar el metabolismo."
        ]
      },
      {
        h: "Una forma rara que sí requiere atención especial",
        p: [
          "Existe una forma mucho menos frecuente que puede ser señal de un problema de salud interno distinto, especialmente cuando aparece de forma repentina en una persona adulta sin sobrepeso, se extiende rápido, o compromete zonas poco habituales como las palmas de las manos o el interior de la boca. No es lo más común, pero es la razón por la que esta mancha no debe evaluarse 'a la ligera' ni asumirse siempre como lo mismo."
        ]
      },
      {
        h: "Qué hace el médico",
        p: [
          "La evaluación generalmente incluye revisar el peso, la circunferencia abdominal y, según el caso, solicitar estudios de glucosa e insulina para confirmar si hay resistencia a la insulina de fondo. El abordaje se centra en tratar la causa, no solo la apariencia de la piel."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Se quita exfoliando o con más higiene?",
        a: "No. No es suciedad, por lo que ninguna exfoliación ni jabón la elimina. Requiere identificar y abordar la causa de fondo."
      },
      {
        q: "¿Significa que tengo diabetes?",
        a: "No necesariamente, pero sí es una señal frecuente de resistencia a la insulina, que puede preceder a la diabetes tipo 2. Vale la pena que un médico lo evalúe."
      },
      {
        q: "¿Desaparece si bajo de peso?",
        a: "En los casos asociados a resistencia a la insulina y sobrepeso, suele mejorar de forma gradual al mejorar esos factores, aunque no siempre desaparece por completo."
      },
      {
        q: "¿Cuándo es más urgente consultar?",
        a: "Si aparece de forma repentina en la edad adulta sin sobrepeso asociado, progresa rápido, o afecta zonas como las palmas o la boca, conviene consultar pronto para descartar causas menos frecuentes."
      }
    ],
    relatedArticles: ["acrocordones-bolitas-de-piel-colgantes-que-son"],
    references: [
      { label: "Hughes BR, Brady M, Rawla P. Acanthosis Nigricans. StatPearls. 2023. PMID 28613711.", url: "https://pubmed.ncbi.nlm.nih.gov/28613711/" },
      { label: "Das A, et al. Acanthosis nigricans: A review. J Cosmet Dermatol. 2020. PMID 32516476.", url: "https://pubmed.ncbi.nlm.nih.gov/32516476/" }
    ]
  },
  {
    slug: "raya-oscura-en-la-una-cuando-preocuparse",
    title: "Una raya oscura en la uña: cuándo es normal y cuándo preocuparse",
    excerpt:
      "Una línea o banda oscura a lo largo de la uña casi siempre es benigna, pero en casos poco frecuentes puede ser la señal más temprana de un melanoma. Esto es lo que hay que saber para diferenciarlas.",
    seoTitle: "Raya Oscura en la Uña: Cuándo Preocuparse | Dra. Karla Andrade",
    seoDescription:
      "¿Es normal una raya oscura en la uña? La Dra. Karla Andrade, dermatóloga en Machala, explica cuándo es benigna y cuándo conviene evaluarla con urgencia.",
    category: "Cáncer de piel",
    datePublished: "2026-10-16",
    dateModified: "2026-10-16",
    readingMin: 6,
    relatedEspecialidad: "cancer-de-piel-y-dermatoscopia",
    lead:
      "Una línea o banda oscura a lo largo de la uña —de la cutícula hacia la punta— es un motivo de consulta que genera mucha inquietud, con razón: en la gran mayoría de los casos es benigna, pero en un número pequeño de casos puede ser la señal más temprana de un melanoma en la uña. Esto es lo que ayuda a diferenciarlas.",
    sections: [
      {
        h: "¿Qué es esta banda oscura?",
        p: [
          "Tiene nombre médico: melanoniquia longitudinal. Es una banda de pigmento que recorre la uña de la base hacia la punta. Las causas benignas son, por lejos, las más frecuentes: un lunar en la matriz de la uña (la zona donde la uña se forma), o simplemente más pigmento natural, algo que es especialmente común y normal en personas de piel oscura, donde puede aparecer en varias uñas a la vez sin ningún significado preocupante."
        ]
      },
      {
        h: "Cuándo genera más dudas",
        p: [
          "La causa que preocupa, aunque es poco frecuente, es el melanoma subungueal: un melanoma que se origina en la matriz de la uña. Diferenciarlo de una causa benigna no siempre es posible solo con mirar, por lo que ante cualquier duda la recomendación es que lo evalúe un dermatólogo."
        ]
      },
      {
        h: "Señales que aumentan la sospecha",
        list: [
          "Aparece en un solo dedo, sin antecedente de golpe.",
          "La banda es ancha, o se hace más ancha con el tiempo.",
          "Los bordes o el color dejan de ser uniformes.",
          "El color se extiende más allá de la uña, hacia la piel de alrededor (lo que se conoce como 'signo de Hutchinson').",
          "Cambia de aspecto de forma progresiva en lugar de mantenerse estable."
        ]
      },
      {
        h: "\"Pero yo me golpeé esa uña\"",
        p: [
          "Un golpe puede causar un moretón debajo de la uña (hematoma subungueal), que también se ve oscuro. La diferencia clave es que un moretón se mantiene del mismo tamaño y color mientras la uña va creciendo, y va desapareciendo con el crecimiento de la uña desde la base. Una banda que no cambia de posición a medida que la uña crece, que aparece sin golpe claro, o que persiste más de lo esperable, debe evaluarse."
        ]
      },
      {
        h: "Por qué no conviene 'esperar a ver'",
        p: [
          "El melanoma subungueal suele diagnosticarse tarde precisamente porque se confunde con causas benignas durante meses o años. Cuando hay dudas, el método para confirmar el diagnóstico es una biopsia dirigida a la matriz de la uña, no la sola observación."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Toda raya oscura en la uña es cáncer?",
        a: "No, la gran mayoría son benignas. Pero como no siempre se puede diferenciar solo mirando, cualquier banda nueva o que genere dudas debe ser evaluada por un dermatólogo."
      },
      {
        q: "¿Es normal tener varias uñas con bandas oscuras si tengo piel morena o negra?",
        a: "Sí, es un hallazgo frecuente y generalmente benigno en personas de piel oscura. Aun así, cualquier cambio en una de esas bandas vale la pena comentarlo en la consulta."
      },
      {
        q: "Me golpeé la uña y se puso oscura, ¿puede ser solo un moretón?",
        a: "Es probable, pero la forma de confirmarlo es observar que la mancha se desplace hacia la punta y desaparezca a medida que la uña crece. Si no se mueve con el crecimiento de la uña, o no hay golpe que lo explique, conviene evaluarla."
      },
      {
        q: "¿Cómo confirma el médico si es melanoma o no?",
        a: "Con una evaluación clínica y dermatoscópica, y si hay signos de alarma, con una biopsia de la matriz de la uña, que es el único método que da un diagnóstico certero."
      }
    ],
    relatedArticles: [
      "dermatoscopia-que-es-y-por-que-importa",
      "cuando-debo-evaluarme-los-lunares",
      "tipos-de-cancer-de-piel-melanoma-basocelular-espinocelular"
    ],
    references: [
      { label: "Ko D, Oromendia C, Scher R, Lipner SR. Retrospective single-center study evaluating clinical and dermoscopic features of longitudinal melanonychia. J Am Acad Dermatol. 2019. PMID 30765143.", url: "https://pubmed.ncbi.nlm.nih.gov/30765143/" }
    ]
  },
  {
    slug: "sarna-escabiosis-sintomas-y-cuando-consultar",
    title: "Sarna (escabiosis): síntomas, contagio y cuándo consultar",
    excerpt:
      "Pica mucho, empeora de noche, y todavía carga con un estigma que no tiene fundamento: no es señal de falta de higiene. Esto es lo que hay que saber sobre la sarna.",
    seoTitle: "Sarna (Escabiosis): Síntomas y Contagio | Dra. Karla Andrade",
    seoDescription:
      "¿Qué es la sarna y cómo se contagia? La Dra. Karla Andrade, dermatóloga en Machala, explica los síntomas de la escabiosis y cuándo consultar.",
    category: "Dermatología clínica",
    datePublished: "2026-10-16",
    dateModified: "2026-10-16",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "La sarna (escabiosis) es una de las causas de picazón intensa más frecuentes, y también una de las más rodeadas de vergüenza, por la idea equivocada de que se relaciona con falta de higiene. No es así: cualquier persona, sin importar cuánto se cuide, puede contagiarse.",
    sections: [
      {
        h: "¿Qué es?",
        p: [
          "Es una infestación de la piel causada por un ácaro microscópico (Sarcoptes scabiei), que se instala en las capas superficiales de la piel. No tiene relación con la higiene personal: se transmite por contacto, no por suciedad."
        ]
      },
      {
        h: "Síntomas característicos",
        list: [
          "Picazón intensa, que típicamente empeora durante la noche.",
          "Pequeñas ronchas o lesiones, a veces con líneas finas visibles (los túneles que forma el ácaro bajo la piel).",
          "Ubicación característica: entre los dedos, muñecas, codos, axilas, cintura y genitales.",
          "En bebés y niños pequeños, puede afectar también palmas, plantas y cara."
        ]
      },
      {
        h: "¿Cómo se contagia?",
        p: [
          "Principalmente por contacto piel con piel prolongado, como el que ocurre entre convivientes de una misma casa, en pareja, o entre cuidadores y niños pequeños. El contagio a través de ropa de cama o toallas es posible pero menos frecuente, y generalmente requiere que esos objetos hayan estado en contacto reciente con una persona infestada."
        ]
      },
      {
        h: "Por qué deben tratarse todos los convivientes",
        p: [
          "Una particularidad importante de la sarna es que el médico suele indicar tratar a todos los convivientes cercanos al mismo tiempo, incluso a quienes todavía no tienen síntomas, porque el período entre el contagio y la aparición de la picazón puede ser de varias semanas. Tratar solo a la persona con síntomas visibles suele llevar a que la infestación se mantenga circulando en la casa."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Tener sarna significa que soy una persona sucia?",
        a: "No. No tiene ninguna relación con la higiene personal. Se transmite por contacto cercano y prolongado, y le puede pasar a cualquier persona."
      },
      {
        q: "¿Por qué pica más de noche?",
        a: "Es un patrón característico de esta condición, aunque la causa exacta de por qué empeora por la noche no está del todo establecida; es uno de los datos que más ayuda al médico a sospechar el diagnóstico."
      },
      {
        q: "Si tengo sarna, ¿toda mi familia debe tratarse aunque no tenga síntomas?",
        a: "Generalmente sí, según indique el médico: tratar solo a quien ya tiene síntomas suele resultar en que la infestación siga pasando de una persona a otra dentro de la casa."
      },
      {
        q: "¿Puedo contagiarme solo por usar la cama de alguien con sarna?",
        a: "Es posible, aunque es menos frecuente que el contagio por contacto directo con la piel, y generalmente requiere que la ropa o cama haya sido usada muy recientemente por la persona infestada."
      }
    ],
    relatedArticles: ["urticaria-ronchas-en-la-piel-causas"],
    references: [
      { label: "CDC Yellow Book. Scabies. Centers for Disease Control and Prevention. 2024.", url: "https://wwwnc.cdc.gov/travel/yellowbook/2024/infections-diseases/scabies" }
    ]
  },
  {
    slug: "pitiriasis-rosada-manchas-que-aparecen-de-repente",
    title: "Manchas que aparecen de repente en el tronco: pitiriasis rosada",
    excerpt:
      "Una mancha inicial seguida, días después, de muchas más repartidas por el tronco, sin razón aparente. No es alergia ni hongos: es un cuadro frecuente, benigno y autolimitado llamado pitiriasis rosada.",
    seoTitle: "Pitiriasis Rosada: Manchas Repentinas en el Tronco | Dra. Karla Andrade",
    seoDescription:
      "¿Por qué aparecieron manchas de golpe en el pecho o la espalda? La Dra. Karla Andrade, dermatóloga en Machala, explica la pitiriasis rosada.",
    category: "Dermatología clínica",
    datePublished: "2026-10-16",
    dateModified: "2026-10-16",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Una mancha inicial, más grande, seguida unos días después por muchas manchas más pequeñas repartidas por el pecho, la espalda o el abdomen: es un patrón que genera bastante alarma por lo repentino que parece, pero suele tratarse de un cuadro benigno y conocido, la pitiriasis rosada.",
    sections: [
      {
        h: "¿Qué es?",
        p: [
          "Es una erupción de la piel benigna y autolimitada —es decir, que se resuelve sola con el tiempo—, que se asocia a la reactivación de dos virus comunes de la familia del herpes (VHH-6 y VHH-7), los mismos que casi toda la población ha tenido en algún momento de la vida sin saberlo. No es una alergia, ni un hongo, ni está relacionada con productos nuevos que hayas usado."
        ]
      },
      {
        h: "El patrón característico",
        p: [
          "Suele empezar con una sola mancha más grande, ovalada, llamada 'placa heraldo' o 'mancha madre'. Entre unos días y dos semanas después, aparecen muchas manchas más pequeñas, sobre todo en el tronco, que tienden a distribuirse siguiendo las líneas naturales de la piel, lo que le da un patrón descrito clásicamente como de 'árbol de Navidad' en la espalda."
        ]
      },
      {
        h: "¿Es contagiosa?",
        p: [
          "El riesgo de contagio entre personas es considerado bajo. No hace falta aislarse ni evitar el contacto habitual con la familia."
        ]
      },
      {
        h: "¿Cuánto dura?",
        p: [
          "Es autolimitada: en la mayoría de los casos se resuelve por sí sola en algunas semanas, aunque el tiempo exacto varía de una persona a otra."
        ]
      },
      {
        h: "Un punto importante durante el embarazo",
        p: [
          "Los estudios sobre pitiriasis rosada durante el embarazo muestran resultados variables entre sí, pero varios de ellos reportan una posible asociación con complicaciones del embarazo, sobre todo cuando aparece en etapas tempranas. Por eso, si estás embarazada y notas este patrón de manchas, es importante que lo converses con tu médico (dermatólogo y obstetra) en lugar de asumir que, por ser 'solo piel', no amerita consulta."
        ]
      }
    ],
    faqs: [
      {
        q: "¿La pitiriasis rosada es una alergia?",
        a: "No. Se asocia a la reactivación de virus comunes de la familia del herpes, no a una reacción alérgica a algún producto."
      },
      {
        q: "¿Es contagiosa para mi familia?",
        a: "El riesgo de contagio entre personas se considera bajo, por lo que no es necesario aislarse del resto de la familia."
      },
      {
        q: "¿Cuánto tiempo tardan en desaparecer las manchas?",
        a: "Generalmente se resuelve sola en algunas semanas, aunque el tiempo varía según cada persona."
      },
      {
        q: "Estoy embarazada y me salieron estas manchas, ¿debo preocuparme?",
        a: "Es importante que lo converses con tu médico. Algunos estudios reportan una posible asociación con complicaciones del embarazo, especialmente si aparece en etapas tempranas, por lo que amerita una evaluación y seguimiento, no solo observación."
      }
    ],
    relatedArticles: ["urticaria-ronchas-en-la-piel-causas"],
    references: [
      { label: "Stashower J, et al. Pregnancy complications associated with pityriasis rosea: a multicenter retrospective study. J Am Acad Dermatol. 2021. PMID 33422632.", url: "https://pubmed.ncbi.nlm.nih.gov/33422632/" }
    ]
  },
  {
    slug: "aparatologia-cuando-usarla-y-para-que-sirve",
    title: "Aparatología en dermatología: cuándo usarla y para qué sirve cada tratamiento",
    excerpt:
      "Láser, luz pulsada, radiofrecuencia, toxina botulínica: son herramientas distintas, para objetivos distintos. Esta guía reúne qué hace cada una y cuándo tiene sentido considerarla.",
    seoTitle: "Aparatología: Cuándo Usarla y Para Qué Sirve | Dra. Karla Andrade",
    seoDescription:
      "¿Qué tratamiento de aparatología necesitas? Guía completa de la Dra. Karla Andrade, dermatóloga en Machala, sobre láser, luz pulsada, toxina botulínica y más.",
    category: "Aparatología",
    datePublished: "2026-10-16",
    dateModified: "2026-10-16",
    readingMin: 8,
    relatedEspecialidad: "medicina-estetica",
    lead:
      "'Aparatología' es un término que agrupa tratamientos muy distintos entre sí —láser, luz pulsada, radiofrecuencia, toxina botulínica, entre otros—, cada uno pensado para un objetivo específico. Esta guía reúne, en un solo lugar, qué hace cada herramienta y cuándo tiene sentido considerarla.",
    sections: [
      {
        h: "¿Qué es la aparatología?",
        p: [
          "Es el conjunto de tratamientos que usan equipos (de ahí el nombre) basados en distintos tipos de energía —luz, calor, radiofrecuencia, o sustancias inyectables como la toxina botulínica— para actuar sobre la piel, el cabello o el contorno corporal. No es un tratamiento único: cada equipo tiene un mecanismo distinto, pensado para un objetivo distinto, y ninguno sirve para todo."
        ]
      },
      {
        h: "Por qué importa quién lo realiza",
        p: [
          "No es un detalle menor: un análisis de complicaciones por tratamientos láser encontró que el 82% de los casos reportados ocurrió en lugares sin supervisión médica presencial. Son procedimientos que, aunque parezcan sencillos, requieren criterio médico para elegir el equipo correcto, ajustarlo a cada tipo de piel, y reconocer y manejar una complicación si ocurre."
        ]
      },
      {
        h: "Para manchas, textura y fotoenvejecimiento: láser CO2 fraccionado, picoláser e IPL",
        p: [
          "Son tres herramientas distintas para objetivos que se superponen parcialmente. El láser CO2 fraccionado trabaja renovando la piel en profundidad, útil en cicatrices y textura. El picoláser se usa principalmente para manchas y, en otro contexto, para tatuajes. La IPL (luz pulsada intensa) actúa sobre manchas superficiales, vasos visibles y signos generales de fotoenvejecimiento. Cada uno de estos artículos explica en detalle para qué sirve y qué esperar:"
        ],
        list: [
          "Láser CO2 fraccionado: qué es y para qué sirve",
          "Picoláser: qué es y para qué sirve en la piel",
          "IPL (luz pulsada intensa): qué es y para qué sirve"
        ]
      },
      {
        h: "Para rejuvenecimiento más superficial: plasma pen",
        p: [
          "Es una herramienta distinta a un láser, con sus propios usos y límites, explicados en detalle en su artículo específico."
        ]
      },
      {
        h: "Para depilación: láser diodo",
        p: [
          "Es el tratamiento con más respaldo para la reducción duradera del vello, con sus propias consideraciones según el tipo de piel y vello de cada persona."
        ]
      },
      {
        h: "Toxina botulínica: no es solo para arrugas",
        p: [
          "Más allá del uso estético conocido, la toxina botulínica tiene aplicaciones médicas específicas: en el masetero (el músculo de la mandíbula, útil en casos de bruxismo o para afinar el contorno del rostro) y en el manejo de la hiperhidrosis (sudoración excesiva)."
        ]
      },
      {
        h: "Para estrías y celulitis",
        p: [
          "Son dos de las preocupaciones estéticas más consultadas, y también de las más rodeadas de promesas poco realistas. Ningún tratamiento único es efectivo para todos los casos; la evidencia actual favorece combinar más de un enfoque, como se explica en el detalle de cada tema."
        ]
      },
      {
        h: "Cómo se elige el tratamiento adecuado",
        p: [
          "La elección depende del diagnóstico, el objetivo específico, el tipo de piel y, en algunos casos, de combinar más de una herramienta. Por eso el primer paso nunca es elegir un equipo, sino una evaluación que determine qué problema se está tratando realmente."
        ]
      },
      {
        h: "Lo que la aparatología no reemplaza",
        p: [
          "Ningún tratamiento de aparatología reemplaza el diagnóstico ni el tratamiento médico de una condición de base: no trata el acné activo en lugar de un tratamiento dermatológico, no reemplaza el seguimiento de un lunar sospechoso, y no es un sustituto del cuidado médico cuando hay una enfermedad de la piel de por medio. Su lugar es como complemento, dentro de un plan guiado por un diagnóstico claro."
        ]
      }
    ],
    faqs: [
      {
        q: "¿La aparatología reemplaza el tratamiento médico de una condición de la piel?",
        a: "No. Es un complemento, no un reemplazo. Si hay una condición médica de base (acné activo, una lesión sospechosa, una enfermedad de la piel), esta debe diagnosticarse y tratarse primero."
      },
      {
        q: "¿Cualquier persona puede hacerse cualquiera de estos tratamientos?",
        a: "No necesariamente. El tipo de piel, el objetivo y los antecedentes de cada persona determinan qué tratamiento es apropiado y cuál no. Por eso la evaluación previa es un paso que no conviene saltarse."
      },
      {
        q: "¿Por qué es importante que lo haga un médico y no solo un técnico?",
        a: "Porque elegir el equipo y los parámetros correctos para cada tipo de piel, y reconocer y manejar una complicación si ocurre, requiere criterio médico. Los reportes de complicaciones por tratamientos láser son notablemente más frecuentes en lugares sin supervisión médica presencial."
      },
      {
        q: "¿Cuántas sesiones se necesitan en general?",
        a: "Varía mucho según el tratamiento, el objetivo y cada persona; no hay un número fijo válido para todos los casos. Es algo que se define en la evaluación inicial."
      }
    ],
    relatedArticles: [
      "laser-co2-fraccionado-que-es",
      "picolaser-que-es-para-que-sirve",
      "ipl-luz-pulsada-intensa-que-es",
      "plasma-pen-que-es-que-puede-hacer",
      "laser-diodo-que-es-para-que-sirve",
      "botox-en-el-masetero-para-que-sirve",
      "hiperhidrosis-tratamiento-con-toxina-botulinica",
      "estrias-tratamientos-que-funcionan",
      "celulitis-piel-de-naranja-tratamientos"
    ],
    references: [
      { label: "American Society for Dermatologic Surgery Association (ASDSA). Protecting Patients from Harm: Laser Use. Position Statement.", url: "https://www.asds.net/Portals/0/PDF/asdsa/asdsa-position-statement-laser-use.pdf" }
    ]
  },
  {
    slug: "onicomicosis-en-las-unas-de-las-manos",
    title: "Onicomicosis en las uñas de las manos: en qué se diferencia de la de los pies",
    excerpt:
      "Los hongos en las uñas de las manos son menos frecuentes que en los pies, tienen causas algo distintas, y no toda uña fea de la mano es un hongo. Esto es lo que hay que saber antes de tratarla.",
    seoTitle: "Onicomicosis en las Uñas de las Manos | Dra. Karla Andrade",
    seoDescription:
      "¿Qué causa la onicomicosis en las uñas de las manos y en qué se diferencia de la de los pies? La Dra. Karla Andrade, dermatóloga en Machala, lo explica.",
    category: "Dermatología clínica",
    datePublished: "2026-10-19",
    dateModified: "2026-10-19",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Los hongos en las uñas de las manos son menos frecuentes que en los pies, y eso no es un dato menor: tienen causas que a veces son distintas, y una particularidad importante: no toda uña de la mano que se ve fea o engrosada es en realidad un hongo. Esto es lo que conviene saber antes de empezar cualquier tratamiento.",
    sections: [
      {
        h: "¿Es igual que la onicomicosis de los pies?",
        p: [
          "No del todo. Es menos frecuente que en los pies, y mientras que en los pies suelen predominar los hongos dermatofitos (los mismos de la tiña), en las manos es más frecuente que intervengan levaduras como Candida, sobre todo en mujeres."
        ]
      },
      {
        h: "Factores de riesgo más específicos de las manos",
        list: [
          "Trabajos u oficios con las manos mojadas de forma prolongada y repetida",
          "Traumatismos repetidos en la uña",
          "Diabetes",
          "Psoriasis (que además puede, por sí sola, parecerse mucho a un hongo en la uña)",
          "Edad avanzada"
        ]
      },
      {
        h: "Por qué no toda uña de la mano que se ve mal es un hongo",
        p: [
          "Este es el punto más importante: hay otras condiciones —la psoriasis ungueal es la más frecuente de confundir— que pueden producir un engrosamiento, decoloración o deformidad de la uña muy similar a la de un hongo. Tratar con antimicóticos algo que en realidad es psoriasis, o viceversa, no da resultado y retrasa el diagnóstico correcto.",
          "Por eso, antes de sostener un tratamiento antimicótico por meses, lo recomendable es confirmar el diagnóstico con un examen de laboratorio (cultivo o estudio directo de una muestra de la uña)."
        ]
      },
      {
        h: "El tratamiento",
        p: [
          "El enfoque general es similar al de los pies: antimicóticos tópicos en casos leves o iniciales, y antimicóticos orales (con seguimiento médico) en casos más establecidos. Como las uñas de las manos crecen más rápido que las de los pies, la mejoría suele notarse en menos tiempo, aunque sigue siendo un proceso de varios meses, no de días."
        ]
      },
      {
        h: "Cuándo consultar",
        list: [
          "Si la uña cambia de color, grosor o forma de manera sostenida.",
          "Antes de iniciar un tratamiento antimicótico por tu cuenta, para confirmar que realmente se trata de un hongo.",
          "Si ya usaste un antimicótico de venta libre por semanas sin ninguna mejoría."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Por qué me recomiendan un examen antes de empezar el tratamiento?",
        a: "Porque otras condiciones, sobre todo la psoriasis ungueal, pueden verse muy parecidas a un hongo pero requieren un manejo distinto. Confirmar el diagnóstico evita meses de tratamiento sin resultado."
      },
      {
        q: "¿Por qué me dio esto en las manos si nunca tuve hongos en los pies?",
        a: "Son cuadros que pueden darse de forma independiente. En las manos, las levaduras como Candida son una causa frecuente, distinta de los hongos típicos de los pies, y se relaciona más con el contacto prolongado con agua."
      },
      {
        q: "¿Se cura más rápido que en los pies?",
        a: "Suele notarse mejoría en menos tiempo porque las uñas de las manos crecen más rápido, pero igual requiere varios meses de tratamiento sostenido."
      }
    ],
    relatedArticles: ["hongos-en-las-unas-onicomicosis", "psoriasis-mitos-y-verdades", "raya-oscura-en-la-una-cuando-preocuparse"],
    references: [
      { label: "Ghannoum M, Isham N. Fungal Nail Infections (Onychomycosis): A Never-Ending Story? PLoS Pathog. 2014.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4047123/" }
    ]
  },
  {
    slug: "hiperqueratosis-en-las-manos-causas",
    title: "Piel gruesa y áspera en las manos (hiperqueratosis): por qué aparece",
    excerpt:
      "Piel engrosada, áspera, a veces con grietas, en las palmas o los dedos. No siempre tiene la misma causa, y eso es justo lo que define cómo tratarla.",
    seoTitle: "Hiperqueratosis en las Manos: Causas | Dra. Karla Andrade",
    seoDescription:
      "¿Por qué se engrosa y se agrieta la piel de las manos? La Dra. Karla Andrade, dermatóloga en Machala, explica las causas más frecuentes de la hiperqueratosis en manos.",
    category: "Dermatología clínica",
    datePublished: "2026-10-19",
    dateModified: "2026-10-19",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Piel engrosada, áspera y a veces agrietada en las palmas o los dedos es un motivo de consulta frecuente, sobre todo en personas que trabajan mucho con las manos. Pero 'piel gruesa en las manos' no es un diagnóstico único: puede tener más de una causa, y de eso depende el tratamiento.",
    sections: [
      {
        h: "¿Qué es?",
        p: [
          "Hiperqueratosis es, en términos simples, un engrosamiento de la capa más externa de la piel. En las manos suele aparecer en las palmas o en la base de los dedos, como zonas de piel dura, áspera, a veces con grietas (fisuras) que pueden doler."
        ]
      },
      {
        h: "Causas más frecuentes",
        list: [
          "Fricción y trabajo manual repetido: es la causa más directa y frecuente, por el roce constante de herramientas, objetos o superficies.",
          "Dermatitis de contacto irritativa: por exposición repetida a sustancias que irritan la piel (de ahí que el eccema de manos sea de las enfermedades de piel más comunes relacionadas con el trabajo).",
          "Psoriasis palmar: una forma de psoriasis que afecta específicamente las palmas, y que puede verse muy parecida a otras causas de piel gruesa.",
          "Queratodermia palmar: un grupo de condiciones, algunas hereditarias, que producen un engrosamiento marcado y sostenido de las palmas."
        ]
      },
      {
        h: "Por qué importa diferenciar la causa",
        p: [
          "El manejo no es el mismo si la causa es el roce de un oficio manual, una dermatitis irritativa, una psoriasis o una queratodermia de base. Usar solo cremas humectantes puede no alcanzar si hay una condición de fondo que requiere otro enfoque, y por eso identificar la causa específica es el primer paso antes de insistir con un mismo producto que no está funcionando."
        ]
      },
      {
        h: "Cuándo consultar",
        list: [
          "Si las grietas duelen o sangran.",
          "Si no mejora pese a semanas de cuidado con humectantes.",
          "Si apareció de forma relativamente súbita, no solo por desgaste progresivo del trabajo manual.",
          "Si se acompaña de otras lesiones en la piel, uñas o articulaciones."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Es solo por trabajar mucho con las manos?",
        a: "Puede serlo, pero no siempre. La fricción y el trabajo manual son una causa frecuente, pero una dermatitis, una psoriasis palmar u otra condición de base también pueden producir el mismo aspecto, y requieren un manejo distinto."
      },
      {
        q: "¿Las cremas humectantes son suficientes?",
        a: "Ayudan en muchos casos, pero si no hay mejoría después de varias semanas, es señal de que puede haber una causa de fondo que requiere una evaluación específica."
      },
      {
        q: "¿Puede ser psoriasis aunque no tenga placas en otras partes del cuerpo?",
        a: "Sí. La psoriasis palmar puede presentarse de forma localizada en las manos, sin necesariamente tener lesiones visibles en otras zonas del cuerpo."
      }
    ],
    relatedArticles: ["psoriasis-mitos-y-verdades", "psoriasis-que-es-y-como-se-trata"],
    references: [
      { label: "Rallis E, Liakopoulou A. Hyperkeratotic Plaques on Hands. Am Fam Physician. 2016;93(11):945.", url: "https://www.aafp.org/pubs/afp/issues/2016/0601/p945.html" },
      { label: "DermNet. Hyperkeratotic palmar dermatitis.", url: "https://dermnetnz.org/topics/hyperkeratotic-palmar-dermatitis" }
    ]
  },
  {
    slug: "foliculitis-que-es-causas-comunes",
    title: "Foliculitis: esos granitos irritados alrededor del vello",
    excerpt:
      "Pequeños granitos rojos, a veces con una puntita de pus, alrededor de un pelo. La foliculitis común es de los motivos de consulta más frecuentes, y casi siempre mucho menos complicada de lo que parece.",
    seoTitle: "Foliculitis: Qué Es y Causas Comunes | Dra. Karla Andrade",
    seoDescription:
      "¿Qué es la foliculitis y por qué aparece? La Dra. Karla Andrade, dermatóloga en Machala, explica las causas más comunes de estos granitos irritados.",
    category: "Dermatología clínica",
    datePublished: "2026-10-19",
    dateModified: "2026-10-19",
    readingMin: 5,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Pequeños granitos rojos, a veces con una puntita blanca de pus, agrupados alrededor de pelos, en piernas, axilas, barba o glúteos: es la foliculitis, una de las consultas más comunes en dermatología, y en la gran mayoría de los casos, mucho menos complicada de lo que parece a simple vista.",
    sections: [
      {
        h: "¿Qué es?",
        p: [
          "Es la inflamación de uno o varios folículos pilosos (la estructura de la piel de donde sale cada pelo). En la mayoría de los casos es de origen bacteriano, generalmente por la misma bacteria (Staphylococcus aureus) que vive normalmente en la piel de muchas personas sin causar problemas, hasta que algo irrita o lesiona el folículo y le da oportunidad de infectarlo."
        ]
      },
      {
        h: "Las causas más comunes",
        list: [
          "Rasurado o depilación: el roce de la máquina o la cera irrita el folículo y facilita la infección.",
          "Ropa ajustada o sudoración sostenida, que mantiene la piel húmeda e irritada.",
          "'Foliculitis del jacuzzi': por otra bacteria distinta (Pseudomonas), asociada a piscinas o jacuzzis con un mantenimiento de cloro inadecuado.",
          "Fricción repetida de la piel contra la ropa o entre pliegues del cuerpo."
        ]
      },
      {
        h: "¿Es lo mismo que la foliculitis decalvante?",
        p: [
          "No. Existe un tipo de foliculitis mucho menos frecuente y más complejo —la foliculitis decalvante—, que afecta específicamente el cuero cabelludo, es crónica, y puede dejar cicatriz y pérdida de cabello permanente si no se trata a tiempo. Es un cuadro distinto al que se describe aquí: la foliculitis común, en cambio, suele ser leve, localizada y de resolución más sencilla."
        ]
      },
      {
        h: "Qué suele ayudar",
        p: [
          "En los casos leves, mantener la zona limpia y evitar el factor que la irritó (rasurado repetido, ropa ajustada) suele ser suficiente para que mejore sola en poco tiempo. En casos que no mejoran, se extienden o son más dolorosos, el médico puede indicar un tratamiento dirigido según la causa."
        ]
      },
      {
        h: "Cuándo consultar",
        list: [
          "Si no mejora después de una a dos semanas.",
          "Si se extiende a un área más grande o se vuelve muy dolorosa.",
          "Si aparece fiebre o se forman bultos más grandes y profundos.",
          "Si es un cuadro que se repite una y otra vez en la misma zona."
        ]
      }
    ],
    faqs: [
      {
        q: "¿La foliculitis es contagiosa?",
        a: "La bacteria que más frecuentemente la causa puede transmitirse por contacto cercano, pero el riesgo real de contagio es bajo y depende del caso. No es necesario un aislamiento especial."
      },
      {
        q: "¿Por qué me da siempre después de afeitarme?",
        a: "El roce de la máquina de afeitar irrita el folículo y facilita que se infecte. Cambiar la técnica de rasurado y mantener la piel limpia suele reducir los episodios."
      },
      {
        q: "¿Es lo mismo que el acné?",
        a: "No, aunque pueden parecerse. El acné involucra las glándulas sebáceas y comedones; la foliculitis es una inflamación o infección del folículo piloso en sí, con una causa y manejo distintos."
      },
      {
        q: "¿Puede dejar cicatriz?",
        a: "La foliculitis común, leve y bien resuelta, generalmente no deja cicatriz. El riesgo de cicatriz permanente aplica sobre todo a cuadros crónicos y distintos, como la foliculitis decalvante del cuero cabelludo."
      }
    ],
    relatedArticles: [],
    references: [
      { label: "Winters RD, Mitchell M. Folliculitis. StatPearls. 2023. PMID 31613534.", url: "https://pubmed.ncbi.nlm.nih.gov/31613534/" }
    ]
  },
  {
    slug: "eccema-dishidrotico-ampollas-en-las-manos",
    title: "Ampollas pequeñas y picazón en las manos: eccema dishidrótico",
    excerpt:
      "Ampollas diminutas, muy profundas y muy pruriginosas, en los dedos o las palmas, que aparecen y desaparecen en brotes. No son hongos ni son contagiosas: es un tipo particular de eccema.",
    seoTitle: "Eccema Dishidrótico: Ampollas en las Manos | Dra. Karla Andrade",
    seoDescription:
      "¿Por qué salen ampollas pequeñas y con mucha picazón en las manos? La Dra. Karla Andrade, dermatóloga en Machala, explica el eccema dishidrótico.",
    category: "Dermatología clínica",
    datePublished: "2026-10-19",
    dateModified: "2026-10-19",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Ampollas diminutas, muy profundas bajo la piel y con mucha picazón, en los costados de los dedos o en las palmas, que aparecen en brotes que duran unas semanas y luego ceden: es el eccema dishidrótico (también llamado pompholyx), una de las formas de eccema de manos menos conocidas pero bastante frecuentes.",
    sections: [
      {
        h: "¿Qué es?",
        p: [
          "Es un tipo particular de eccema que afecta las manos (y a veces los pies), con ampollas pequeñas, profundas y muy pruriginosas, típicamente en los bordes de los dedos y las palmas. Se presenta en brotes que suelen durar entre dos y tres semanas, y que pueden repetirse con el tiempo."
        ]
      },
      {
        h: "¿Por qué aparece?",
        p: [
          "La causa exacta no se conoce con certeza; se cree que involucra al sistema inmunológico respondiendo a ciertos desencadenantes. Entre los más mencionados están el estrés, el contacto con metales como el níquel, la sudoración excesiva y el calor. Es más frecuente en personas que ya tienen otras formas de eccema o antecedentes familiares de la condición."
        ]
      },
      {
        h: "Por qué se confunde con un hongo",
        p: [
          "Es un error común, porque ambos afectan las manos y producen picazón. La diferencia está en el tipo de lesión: el eccema dishidrótico forma ampollas pequeñas y profundas que se sienten como granos de tapioca bajo la piel, mientras que una infección por hongos suele dar más bien descamación, enrojecimiento o cambios en la uña, sin ese patrón de ampollas. Confirmarlo con una evaluación evita tratar con antimicóticos algo que no va a responder a ellos."
        ]
      },
      {
        h: "¿Es contagioso?",
        p: [
          "No. No se transmite de una persona a otra bajo ninguna circunstancia."
        ]
      },
      {
        h: "Qué ayuda a manejarlo",
        p: [
          "El manejo médico suele incluir tratamiento tópico indicado por el dermatólogo para controlar la inflamación durante los brotes, cuidado de la piel con humectantes, e identificar y evitar, en lo posible, los desencadenantes propios de cada persona. Cuando hay sospecha de una infección agregada en las ampollas, eso también debe evaluarse y tratarse aparte."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Las ampollas se deben reventar?",
        a: "No es recomendable manipularlas por cuenta propia: hacerlo aumenta el riesgo de infección. Lo adecuado es que el manejo lo indique un médico."
      },
      {
        q: "¿Es lo mismo que un hongo en las manos?",
        a: "No. Aunque ambos pican y afectan las manos, el eccema dishidrótico forma ampollas profundas, mientras que una infección por hongos se manifiesta distinto. Confirmarlo con una evaluación es clave antes de tratar."
      },
      {
        q: "¿Desaparece para siempre después de un brote?",
        a: "Es una condición que tiende a repetirse en brotes a lo largo del tiempo, no algo que se cure de una sola vez. El objetivo del manejo es controlar los brotes y espaciarlos lo más posible."
      },
      {
        q: "¿El estrés es la causa principal?",
        a: "Es uno de los desencadenantes reportados, pero no la única causa ni algo que la persona se provoque a sí misma. La causa de fondo no se conoce con certeza."
      }
    ],
    relatedArticles: ["hiperqueratosis-en-las-manos-causas", "hongos-en-la-piel-tina-pie-de-atleta"],
    references: [
      { label: "Wollina U. Pompholyx: a review of clinical features, differential diagnosis, and management. Am J Clin Dermatol. 2010. PMID 20642293.", url: "https://pubmed.ncbi.nlm.nih.gov/20642293/" }
    ]
  },
  {
    slug: "existe-una-vacuna-para-las-verrugas",
    title: "¿Existe una vacuna para las verrugas?",
    excerpt:
      "Es una pregunta frecuente en consulta, y la respuesta es más interesante de lo que parece: existe un tratamiento real que usa vacunas ya existentes para hacer que el cuerpo combata las verrugas, aunque no es lo que la mayoría imagina.",
    seoTitle: "¿Existe una Vacuna para las Verrugas? | Dra. Karla Andrade",
    seoDescription:
      "¿Hay una vacuna para quitar las verrugas? La Dra. Karla Andrade, dermatóloga en Machala, explica qué es la inmunoterapia para verrugas y cuándo se usa.",
    category: "Dermatología clínica",
    datePublished: "2026-10-19",
    dateModified: "2026-10-19",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-clinica",
    lead:
      "Es una pregunta que surge seguido en consulta: '¿no hay una vacuna para las verrugas?'. La respuesta es más interesante de lo que parece: existe un tratamiento real, con respaldo en estudios clínicos, que usa vacunas que ya existen para otra cosa, aplicadas de una forma distinta a la habitual.",
    sections: [
      {
        h: "No es una vacuna preventiva",
        p: [
          "Lo primero para aclarar: esto no es una vacuna que se aplique para prevenir las verrugas, como una vacuna tradicional. Es un tratamiento para verrugas que ya están presentes, que usa el sistema inmunológico como herramienta, por eso se le llama inmunoterapia."
        ]
      },
      {
        h: "¿Cómo funciona?",
        p: [
          "Consiste en inyectar, directamente en una de las verrugas, una vacuna que ya existe y se usa normalmente para otra cosa —la más estudiada es la vacuna triple viral (sarampión, paperas y rubéola)— o un antígeno (como el de Candida). La idea es provocar, en ese punto, una reacción del sistema inmunológico que termina reconociendo y atacando el virus (VPH) responsable de la verruga.",
          "Un dato llamativo: en algunos casos, no solo mejora la verruga donde se aplicó la inyección, sino también otras verrugas del cuerpo que no fueron inyectadas, porque la respuesta inmunológica que se genera no se queda localizada."
        ]
      },
      {
        h: "¿Qué tan efectiva es?",
        p: [
          "Una revisión que reunió 62 estudios clínicos encontró tasas de respuesta completa (desaparición total de la verruga) de hasta 62-90% en algunos de los esquemas estudiados con la vacuna triple viral, y resultados similares con el antígeno de Candida. Dicho esto, los propios estudios señalan que todavía no hay un consenso sobre cuál esquema es el más efectivo, ni una aprobación formal específica para este uso, por lo que sigue siendo una opción que se indica caso por caso."
        ]
      },
      {
        h: "Por qué puede valer la pena considerarla",
        p: [
          "No es el tratamiento de primera línea para una verruga aislada y simple. Donde más sentido tiene es en casos de verrugas múltiples, muy extendidas, o que no respondieron a tratamientos más habituales (como la crioterapia). En esos casos, en vez de tratar verruga por verruga durante meses, esta opción apunta a generar una respuesta inmune que puede ayudar con varias a la vez, incluidas algunas que no se inyectaron directamente."
        ]
      },
      {
        h: "Es un procedimiento médico, no algo casero",
        p: [
          "Requiere indicación y aplicación por un médico: implica seleccionar el producto adecuado, la técnica de inyección, y vigilar la respuesta (los efectos más frecuentes son reacción en el sitio de la inyección y síntomas leves parecidos a los de un resfriado). No es un procedimiento para hacerse uno mismo ni fuera de un consultorio."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Es la misma vacuna del VPH?",
        a: "No. Es un uso distinto de otras vacunas que ya existen (como la triple viral), aplicadas directamente en la verruga para generar una respuesta inmune local, y no tiene relación con la vacuna del VPH."
      },
      {
        q: "¿Sirve para cualquier tipo de verruga?",
        a: "Se usa sobre todo en casos de verrugas múltiples, extensas o que no respondieron a otros tratamientos, no como primera opción para una verruga simple y aislada."
      },
      {
        q: "¿Por qué mejoran verrugas que no se inyectaron?",
        a: "Porque el objetivo del tratamiento es generar una respuesta inmunológica contra el virus, que no queda limitada al punto exacto de la inyección."
      },
      {
        q: "¿Tiene efectos secundarios?",
        a: "Los más frecuentes son molestia en el sitio de la inyección y síntomas leves parecidos a un resfriado. Debe aplicarse y supervisarse por un médico."
      }
    ],
    relatedArticles: ["verrugas-en-ninos-cuando-preocuparse", "verrugas-genitales-que-son-y-cuando-consultar"],
    references: [
      { label: "Intralesional immunotherapy for the treatment of warts: a systematic review. JID Innovations. 2024.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10990969" },
      { label: "Candida antigen immunotherapy for cutaneous warts: a systematic review and meta-analysis. Acta Derm Venereol. 2024.", url: "https://medicaljournalssweden.se/actadv/article/download/40819/48034" }
    ]
  },
  {
    slug: "manchas-y-marcas-comunes-en-la-piel-del-recien-nacido",
    title: "Manchas y marcas comunes en la piel del recién nacido: guía para padres",
    excerpt:
      "Manchas azuladas, puntitos blancos, granitos que van y vienen: la piel de un recién nacido suele tener marcas que generan alarma sin necesidad. Esto es lo que suelen ser, y qué sí amerita consultar.",
    seoTitle: "Manchas en la Piel del Recién Nacido: Guía | Dra. Karla Andrade",
    seoDescription:
      "¿Qué son esas manchas y marcas en la piel de un recién nacido? La Dra. Karla Andrade, dermatóloga pediátrica en Machala, explica las más comunes y cuándo consultar.",
    category: "Dermatología clínica",
    datePublished: "2026-10-23",
    dateModified: "2026-10-23",
    readingMin: 7,
    relatedEspecialidad: "dermatologia-pediatrica",
    lead:
      "Manchas azuladas, puntitos blancos en la cara, granitos que aparecen y desaparecen solos: la piel de un recién nacido suele traer varias marcas que generan alarma en los primeros días, casi siempre sin necesidad. Esto es lo que suelen ser las más comunes, y qué señales sí ameritan una consulta.",
    sections: [
      {
        h: "Por qué la piel de un recién nacido tiene tantas marcas",
        p: [
          "La piel de un bebé recién nacido todavía se está adaptando a la vida fuera del útero: las glándulas, los vasos sanguíneos y la pigmentación siguen madurando en las primeras semanas. Por eso es tan común que aparezcan marcas que, vistas sin contexto, pueden parecer preocupantes, y que en la gran mayoría de los casos son completamente normales."
        ]
      },
      {
        h: "Mancha mongólica",
        p: [
          "Es una mancha de color azulado o gris, de bordes poco definidos, típicamente en la zona baja de la espalda o los glúteos, presente desde el nacimiento. Es muy frecuente y benigna, y suele irse desvaneciendo durante los primeros años de vida.",
          "Vale la pena mencionarlo con claridad: a veces se confunde con un moretón, lo cual puede generar preguntas incómodas de terceros. Por eso es útil que quede registrada en la historia clínica del bebé desde el primer control. Cuando es muy extensa, oscura o sigue apareciendo en más zonas con el tiempo, sí amerita que el pediatra o dermatólogo la evalúe con más detalle."
        ]
      },
      {
        h: "Milia (puntitos blancos en la cara)",
        p: [
          "Son pequeños puntos blancos o amarillentos, del tamaño de una cabeza de alfiler, que aparecen sobre todo en la nariz, el mentón y las mejillas. Son extremadamente comunes en recién nacidos y se deben a que las glándulas de la piel todavía están madurando. Se resuelven solos en las primeras semanas, sin necesidad de ningún tratamiento, y no deben exprimirse ni manipularse."
        ]
      },
      {
        h: "Eritema tóxico neonatal",
        p: [
          "A pesar de su nombre, que puede sonar alarmante, es una de las erupciones más comunes y benignas en bebés nacidos a término: pequeñas manchas rojas con un punto blanco o amarillento en el centro, que aparecen entre el primer y tercer día de vida. Es característico que 'vayan y vengan': pueden aparecer en una zona, desaparecer, y aparecer en otra distinta en cuestión de horas. Se resuelve sola en una a dos semanas."
        ]
      },
      {
        h: "Acné neonatal",
        p: [
          "Pequeños granitos rojos o con cabeza blanca en las mejillas, la nariz o la frente, que suelen aparecer varias semanas después del nacimiento (a diferencia del eritema tóxico, que aparece en los primeros días). Se resuelve solo, generalmente en unos meses, y no requiere productos especiales ni limpiezas agresivas, que más bien pueden irritar la piel del bebé."
        ]
      },
      {
        h: "Costra láctea",
        p: [
          "Son escamas amarillentas y grasosas en el cuero cabelludo, a veces también en cejas o detrás de las orejas. Es una forma de dermatitis seborreica propia de los primeros meses de vida, no tiene relación con la higiene, y en la mayoría de los casos se resuelve sola hacia los primeros 8 meses. El cuidado suave con un champú para bebés y un cepillado delicado suele ser suficiente; si persiste o se inflama, puede evaluarse un tratamiento específico."
        ]
      },
      {
        h: "¿Y las manchas café con leche, los hemangiomas o los lunares?",
        p: [
          "Esas marcas —más relacionadas con la pigmentación o los vasos sanguíneos, y con sus propias señales de alarma específicas— las desarrollamos en detalle en dos artículos dedicados: uno sobre manchas de nacimiento (café con leche, hemangiomas, manchas salmón) y otro sobre los distintos tipos de nevos o lunares congénitos."
        ]
      },
      {
        h: "Cuándo consultar sin esperar",
        list: [
          "Si el bebé se ve decaído, con fiebre, o la lesión tiene pus, mal olor o se ve claramente infectada.",
          "Si una marca crece muy rápido o cambia mucho de aspecto en poco tiempo.",
          "Si la mancha mongólica es muy extensa, muy oscura, o sigue apareciendo en nuevas zonas.",
          "Siempre que algo te genere duda: no hace falta esperar a que sea muy evidente para preguntar."
        ]
      }
    ],
    faqs: [
      {
        q: "¿La mancha mongólica significa que le pegaron a mi bebé?",
        a: "No. Es una marca de nacimiento benigna que puede parecerse a un moretón, pero no tiene relación con ningún golpe. Por eso es útil que quede registrada en su historia clínica desde el primer control."
      },
      {
        q: "¿Puedo exprimir los puntitos blancos (milia) de la cara de mi bebé?",
        a: "No. Se resuelven solos en las primeras semanas; manipularlos puede irritar la piel o causar una infección."
      },
      {
        q: "¿La costra láctea es por falta de higiene?",
        a: "No, no tiene relación con la higiene. Es una forma de dermatitis seborreica propia de los primeros meses de vida, que en la mayoría de los casos se resuelve sola."
      },
      {
        q: "¿El eritema tóxico neonatal es grave?",
        a: "No, es una de las erupciones más comunes y benignas en bebés nacidos a término, y se resuelve sola en una a dos semanas. Si el bebé se ve decaído o con fiebre, eso sí amerita evaluación para descartar otras causas."
      }
    ],
    relatedArticles: ["manchas-de-nacimiento-cuando-preocuparse", "tipos-de-nevos-lunares-seguimiento-especial", "dermatitis-del-panal-causas-y-cuidado"],
    references: [
      { label: "Dermal Melanocytosis (Mongolian Spot). StatPearls. 2026.", url: "https://www.ncbi.nlm.nih.gov/books/NBK557408/" },
      { label: "O'Connor NR, McLaughlin MR, Ham P. Newborn Skin: Part I. Common Rashes. Am Fam Physician. 2008;77(1):47-52.", url: "https://www.aafp.org/pubs/afp/issues/2008/0101/p47.html" },
      { label: "Victoire A, et al. Interventions for infantile seborrhoeic dermatitis (including cradle cap). Cochrane Database Syst Rev.", url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD011380.pub2/information" }
    ]
  },
  {
    slug: "tina-capitis-en-ninos-hongo-en-el-cuero-cabelludo",
    title: "Tiña capitis en niños: el hongo del cuero cabelludo que causa calvas",
    excerpt:
      "Una zona con menos pelo, escamas y pelos quebrados en la cabeza de un niño no suele ser 'solo caspa'. Es una infección por hongos frecuente en edad escolar, y a diferencia de otros hongos de la piel, no se trata solo con crema.",
    seoTitle: "Tiña Capitis en Niños: Hongo en el Cuero Cabelludo | Dra. Karla Andrade",
    seoDescription:
      "¿Qué es la tiña capitis en niños y por qué causa calvas? La Dra. Karla Andrade, dermatóloga pediátrica en Machala, explica causas, contagio y tratamiento.",
    category: "Dermatología clínica",
    datePublished: "2026-10-23",
    dateModified: "2026-10-23",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-pediatrica",
    lead:
      "Una zona del cuero cabelludo con menos pelo, escamas y pelos que se rompen fácilmente en un niño no suele ser 'solo caspa' ni falta de higiene. Es una infección por hongos, muy frecuente en edad escolar, y tiene una particularidad importante: a diferencia de los hongos en otras partes de la piel, no se trata solo con crema.",
    sections: [
      {
        h: "¿Qué es?",
        p: [
          "Es una infección por hongos del cuero cabelludo, especialmente frecuente en niños en edad escolar. Se presenta como una o varias zonas con menos cabello, escamas, y pelos que se rompen cerca de la raíz, a veces acompañado de enrojecimiento o pequeñas pústulas."
        ]
      },
      {
        h: "Por qué no basta con crema o champú anticaspa",
        p: [
          "A diferencia de los hongos que afectan solo la superficie de la piel, en la tiña capitis el hongo se instala dentro del folículo piloso, donde una crema no logra penetrar lo suficiente. Por eso el tratamiento de elección es un antifúngico oral, indicado y supervisado por el médico; un champú o crema antimicótica sola generalmente no resuelve la infección, aunque puede usarse como complemento para reducir el contagio."
        ]
      },
      {
        h: "¿Cómo se contagia?",
        p: [
          "Por contacto cercano con otra persona infectada, y también al compartir objetos como peines, gorras, almohadas o cepillos. En algunos casos, el contagio viene de una mascota (sobre todo gatos)."
        ]
      },
      {
        h: "¿Debe faltar a la escuela?",
        p: [
          "Una vez iniciado el tratamiento adecuado, la mayoría de las guías no considera necesaria la exclusión escolar de rutina, aunque esto puede variar según las políticas de cada institución. Es una buena pregunta para conversar tanto con el médico tratante como con la escuela."
        ]
      },
      {
        h: "Por qué no conviene 'esperar a ver'",
        p: [
          "Postergar el diagnóstico y tratamiento tiene un costo real: en casos más avanzados o muy inflamados (lo que se conoce como querion), existe riesgo de que la pérdida de cabello en esa zona quede permanente por la cicatriz que deja la inflamación. Cuanto antes se identifica y trata, menor es ese riesgo."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Se contagia de las mascotas?",
        a: "Sí, es posible, sobre todo de gatos. Si el niño tiene tiña capitis y hay mascotas en casa, vale la pena que también sean revisadas por un veterinario."
      },
      {
        q: "¿Basta con un champú o crema antimicótica?",
        a: "Generalmente no. El hongo se instala dentro del folículo piloso, donde una crema no penetra lo suficiente, por lo que el tratamiento de elección es un antifúngico oral indicado por el médico. El champú puede usarse como complemento."
      },
      {
        q: "¿Mi hijo debe faltar a clases mientras se trata?",
        a: "Una vez iniciado el tratamiento, la mayoría de las guías no considera necesaria la exclusión escolar de rutina, aunque conviene confirmarlo con el médico y la política de la escuela."
      },
      {
        q: "¿Puede dejar una calva permanente?",
        a: "Si no se trata a tiempo, sobre todo en casos muy inflamados, existe ese riesgo por la cicatriz que deja la inflamación. El diagnóstico y tratamiento tempranos reducen significativamente esa posibilidad."
      }
    ],
    relatedArticles: ["hongos-en-la-piel-tina-pie-de-atleta", "caspa-por-que-aparece-y-como-tratarla"],
    references: [
      { label: "Chen X, et al. Systemic antifungal therapy for tinea capitis in children. Cochrane Database Syst Rev. 2016. DOI 10.1002/14651858.CD004685.pub3.", url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD004685.pub3/information" }
    ]
  },
  {
    slug: "alergias-y-piel-en-ninos-cuando-sospechar",
    title: "Alergias y piel en niños: cuándo sospechar y qué hacer",
    excerpt:
      "No toda piel irritada en un niño es 'alergia a algo que comió'. Esto es lo que realmente dice la evidencia sobre la relación entre alergias y piel en la infancia, y por qué no conviene eliminar alimentos sin confirmación médica.",
    seoTitle: "Alergias y Piel en Niños: Cuándo Sospechar | Dra. Karla Andrade",
    seoDescription:
      "¿Cuándo una piel irritada en un niño es realmente una alergia? La Dra. Karla Andrade, dermatóloga pediátrica en Machala, explica cuándo sospechar y qué hacer.",
    category: "Dermatología clínica",
    datePublished: "2026-10-23",
    dateModified: "2026-10-23",
    readingMin: 7,
    relatedEspecialidad: "dermatologia-pediatrica",
    lead:
      "'Debe ser alérgico a algo que comió' es una de las frases más comunes cuando la piel de un niño se irrita. A veces es cierto, pero no siempre, y confundir las causas puede llevar a eliminar alimentos de la dieta sin necesidad. Esto es lo que realmente dice la evidencia.",
    sections: [
      {
        h: "Dermatitis atópica y alergia alimentaria: una relación real, pero no automática",
        p: [
          "En niños con dermatitis atópica moderada a severa, la alergia alimentaria es más frecuente que en la población general: estudios reportan que hasta un 30% de estos niños también tiene alergia alimentaria. Pero esto no significa que toda dermatitis atópica sea causada por un alimento: en la mayoría de los casos, la piel reacciona por su propia predisposición, sin que haya un alimento responsable."
        ]
      },
      {
        h: "Por qué no conviene eliminar alimentos por cuenta propia",
        p: [
          "Restringir alimentos de la dieta de un niño sin una confirmación adecuada (como una evaluación alergológica y, si corresponde, una prueba de provocación controlada) puede generar riesgos nutricionales reales, sin necesariamente mejorar la piel si el alimento no era la causa. La decisión de eliminar un alimento debe tomarse junto con el médico, no por prueba y error en casa."
        ]
      },
      {
        h: "La alergia de contacto también existe en niños, y se subestima",
        p: [
          "Las revisiones disponibles muestran que la alergia de contacto es más común de lo que se pensaba en niños con dermatitis atópica, incluso a sustancias presentes en productos pensados para 'piel sensible'. Es decir: un producto etiquetado para pieles sensibles no garantiza que no vaya a producir una reacción alérgica en un niño en particular."
        ]
      },
      {
        h: "¿Y la urticaria?",
        p: [
          "Las ronchas que aparecen de golpe y pican (urticaria) sí pueden deberse a una alergia, pero también a infecciones, medicamentos o causas que nunca llegan a identificarse. No toda urticaria significa alergia alimentaria; el patrón, el tiempo de aparición después de comer, y otros síntomas asociados ayudan a diferenciarlo."
        ]
      },
      {
        h: "Cuándo derivar a alergología",
        list: [
          "Si hay una reacción inmediata y clara después de comer un alimento específico (ronchas, hinchazón, dificultad para respirar).",
          "Si la dermatitis atópica no mejora pese a un tratamiento adecuado y sostenido.",
          "Si hay sospecha fundamentada de un desencadenante específico que se repite."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Toda dermatitis atópica es por alergia a un alimento?",
        a: "No. Es más frecuente en niños con dermatitis atópica moderada a severa, pero en la mayoría de los casos la piel reacciona por su propia predisposición, sin que haya un alimento responsable."
      },
      {
        q: "¿Puedo quitar un alimento de la dieta de mi hijo por mi cuenta para ver si mejora?",
        a: "No es recomendable. Puede generar riesgos nutricionales sin necesariamente resolver el problema de piel. Lo adecuado es confirmar la alergia con una evaluación médica antes de restringir alimentos."
      },
      {
        q: "¿Un producto 'para piel sensible' garantiza que no le dará alergia a mi hijo?",
        a: "No. La alergia de contacto en niños es más común de lo que se piensa, incluso con productos pensados para piel sensible. Cada piel puede reaccionar distinto."
      },
      {
        q: "¿La urticaria siempre significa alergia alimentaria?",
        a: "No necesariamente. Puede deberse a alergias, pero también a infecciones, medicamentos u otras causas. El contexto de cada caso ayuda a diferenciarlo."
      }
    ],
    relatedArticles: ["dermatitis-atopica-piel-sensible", "urticaria-ronchas-en-la-piel-causas"],
    references: [
      { label: "Simonsen AB, et al. Contact allergy in children with atopic dermatitis: a systematic review. Br J Dermatol. 2017;177(2):395-405.", url: "https://onlinelibrary.wiley.com/doi/10.1111/bjd.15628" }
    ]
  },
  {
    slug: "picazon-en-ninos-causas-comunes",
    title: "¿Por qué le pica la piel a mi hijo? Causas comunes",
    excerpt:
      "La picazón es uno de los motivos de consulta más frecuentes en dermatología pediátrica, y a veces no hay nada visible en la piel. Esto es lo que más frecuentemente la explica.",
    seoTitle: "Picazón en Niños: Causas Comunes | Dra. Karla Andrade",
    seoDescription:
      "¿Por qué le pica la piel a tu hijo? La Dra. Karla Andrade, dermatóloga pediátrica en Machala, explica las causas más comunes de la picazón en la infancia.",
    category: "Dermatología clínica",
    datePublished: "2026-10-23",
    dateModified: "2026-10-23",
    readingMin: 6,
    relatedEspecialidad: "dermatologia-pediatrica",
    lead:
      "La picazón es uno de los motivos de consulta más frecuentes en dermatología pediátrica. A veces viene acompañada de un sarpullido evidente, y otras veces la piel se ve prácticamente normal, lo que genera más dudas todavía. Esto es lo que más frecuentemente la explica.",
    sections: [
      {
        h: "La piel, más que una enfermedad interna, suele ser la causa",
        p: [
          "En niños, la picazón casi siempre se origina en la piel misma, más que en una enfermedad de otro órgano. Las causas dermatológicas más frecuentes son la dermatitis atópica y de contacto, la urticaria, el calor (miliaria), infecciones, picaduras o infestaciones como la sarna, y la piel simplemente seca."
        ]
      },
      {
        h: "Piel seca: la causa más común sin nada muy visible",
        p: [
          "La piel seca (xerosis) puede causar picazón notable incluso cuando no hay un sarpullido evidente a simple vista, sobre todo en climas o estaciones que resecan más la piel, o con baños muy frecuentes y prolongados."
        ]
      },
      {
        h: "Dermatitis atópica: la causa más frecuente en la primera infancia",
        p: [
          "Es, según las revisiones disponibles, la causa más común de picazón sostenida, especialmente durante la infancia temprana y la etapa preescolar. Suele acompañarse de piel enrojecida, áspera o con pequeñas lesiones, aunque en fases iniciales puede ser sutil."
        ]
      },
      {
        h: "Otras causas frecuentes",
        list: [
          "Sarna (escabiosis): picazón intensa que suele empeorar de noche",
          "Urticaria: ronchas que aparecen y desaparecen, cambiando de lugar",
          "Picaduras de insecto",
          "Irritación por productos de higiene, detergentes o telas"
        ]
      },
      {
        h: "Por qué rascarse mucho empeora el problema",
        p: [
          "Rascarse alivia la picazón por un momento, pero irrita más la piel, lo que generalmente provoca más picazón después: es un círculo que se retroalimenta. Por eso, identificar y tratar la causa de fondo es más efectivo que depender solo de aliviar el síntoma."
        ]
      },
      {
        h: "Cuándo consultar",
        list: [
          "Si la picazón no deja dormir al niño o interfiere con su día a día.",
          "Si dura varias semanas sin mejorar.",
          "Si se acompaña de piel muy enrojecida, con heridas por rascado o signos de infección.",
          "Si no identificas ninguna causa clara y la picazón persiste."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Es normal que un niño sano sienta picazón de vez en cuando?",
        a: "Episodios aislados y breves pueden ocurrir sin mayor significado, pero la picazón sostenida o que interfiere con el sueño o las actividades diarias amerita evaluación."
      },
      {
        q: "¿La piel seca puede picar aunque no se vea mal?",
        a: "Sí. La piel seca puede causar picazón notable incluso sin un sarpullido evidente a simple vista."
      },
      {
        q: "¿Cuándo la picazón es motivo de consulta urgente?",
        a: "Cuando no deja dormir, dura semanas, o se acompaña de piel muy enrojecida, heridas por rascado o signos de infección."
      },
      {
        q: "¿Rascarse mucho puede dañar la piel?",
        a: "Sí, rascarse de forma repetida irrita más la piel y puede generar heridas o infecciones secundarias, además de empeorar la picazón con el tiempo."
      }
    ],
    relatedArticles: ["dermatitis-atopica-piel-sensible", "sarna-escabiosis-sintomas-y-cuando-consultar", "urticaria-ronchas-en-la-piel-causas"],
    references: [
      { label: "Kang SY, et al. Differential Diagnosis and Treatment of Itching in Children and Adolescents. Biomedicines. 2021;9(8):919. PMID 34440123.", url: "https://pubmed.ncbi.nlm.nih.gov/34440123/" }
    ]
  }
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
