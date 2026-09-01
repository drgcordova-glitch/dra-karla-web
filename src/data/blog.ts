export interface ArtSection {
  h?: string;
  p?: string[];
  list?: string[];
  img?: { src: string; alt: string; caption?: string };
}
export interface ArtFaq { q: string; a: string }
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
  }
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
