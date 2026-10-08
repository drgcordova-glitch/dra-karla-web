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
  "Tricología": "Tricología · Cuidado del cabello"
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
  }
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
