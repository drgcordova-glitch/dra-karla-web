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
  }
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
