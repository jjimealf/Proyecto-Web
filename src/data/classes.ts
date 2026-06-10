import type { ClassEntry } from "../types/content";

const commonSections = {
  preparation: {
    id: "primeros-pasos",
    title: "Primeros pasos",
    paragraphs: [
      "Piensa en la fantasía que quieres llevar a la mesa antes de optimizar números. Una motivación clara, un vínculo con el grupo y una forma reconocible de actuar hacen que cualquier clase cobre vida.",
      "La clase define tus herramientas principales, pero no limita tu personalidad. Dos héroes con la misma clase pueden resolver una escena de maneras completamente distintas.",
    ],
  },
};

export const classes: ClassEntry[] = [
  {
    kind: "class",
    slug: "barbaro",
    name: "Bárbaro",
    eyebrow: "Furia primordial",
    summary: "Resistencia extraordinaria y fuerza explosiva en primera línea.",
    description:
      "El bárbaro convierte el instinto en una herramienta de combate. Su presencia es directa, física y difícil de ignorar, pero su historia puede hablar de protección, tradición, libertad o supervivencia.",
    role: "Defensa",
    ability: "Fuerza",
    hitDie: "d12",
    icon: "BA",
    color: "#b84a3a",
    keywords: ["furia", "resistencia", "cuerpo a cuerpo", "supervivencia"],
    highlights: ["Furia", "Defensa sin armadura", "Ataque temerario"],
    featured: true,
    sections: [
      {
        id: "identidad",
        title: "Instinto antes que protocolo",
        paragraphs: [
          "Un bárbaro sobresale cuando el peligro exige actuar sin vacilar. La furia no tiene por qué ser simple ira: puede representar concentración, memoria ancestral o un pacto íntimo con la naturaleza.",
          "En una historia de grupo suele ocupar el espacio más peligroso y abrir oportunidades para sus compañeros.",
        ],
      },
      {
        id: "mesa",
        title: "Cómo se siente en la mesa",
        paragraphs: [
          "Sus turnos son claros y contundentes. La decisión interesante aparece al medir cuándo entrar en furia, qué amenaza contener y cuánto riesgo asumir con ataques agresivos.",
        ],
        bullets: [
          "Ideal para quien disfruta liderando el avance.",
          "Tolera errores gracias a su gran reserva de puntos de golpe.",
          "Brilla cuando el escenario permite correr, saltar, empujar o romper.",
        ],
      },
      {
        id: "historia",
        title: "Preguntas para tu historia",
        paragraphs: [
          "¿Qué protege tu furia? ¿Quién te enseñó a sobrevivir? ¿Qué parte de la vida civilizada te resulta más extraña? Las respuestas convierten una silueta feroz en una persona memorable.",
        ],
      },
      commonSections.preparation,
    ],
  },
  {
    kind: "class",
    slug: "bardo",
    name: "Bardo",
    eyebrow: "La palabra transforma",
    summary:
      "Inspiración, conocimiento y magia adaptable para cualquier escena.",
    description:
      "El bardo entiende que una historia bien contada puede cambiar el rumbo de una batalla. Combina apoyo, habilidades sociales y recursos mágicos con una enorme libertad creativa.",
    role: "Apoyo",
    ability: "Carisma",
    hitDie: "d8",
    icon: "BD",
    color: "#b66b9c",
    keywords: ["inspiración", "música", "habilidades", "magia"],
    highlights: ["Inspiración bárdica", "Pericia", "Secretos mágicos"],
    sections: [
      {
        id: "identidad",
        title: "Crear posibilidades",
        paragraphs: [
          "Un bardo no se limita a interpretar música. Puede ser cronista, diplomático, orador, bailarín o guardián de relatos prohibidos.",
        ],
      },
      commonSections.preparation,
    ],
  },
  {
    kind: "class",
    slug: "brujo",
    name: "Brujo",
    eyebrow: "Poder con condiciones",
    summary: "Magia singular nacida de un acuerdo con una entidad poderosa.",
    description:
      "El brujo obtiene recursos arcanos mediante un pacto. La relación con su patrón añade una pregunta constante: qué fue prometido y quién controla realmente el trato.",
    role: "Daño",
    ability: "Carisma",
    hitDie: "d8",
    icon: "BR",
    color: "#7254a8",
    keywords: ["pacto", "patrón", "invocaciones", "arcano"],
    highlights: ["Magia de pacto", "Invocaciones", "Recursos recuperables"],
    sections: [
      {
        id: "identidad",
        title: "La letra pequeña",
        paragraphs: [
          "El patrón puede ser mentor, amenaza, misterio o presencia distante. Ese vínculo ofrece conflictos narrativos sin obligar al personaje a ser siniestro.",
        ],
      },
      commonSections.preparation,
    ],
  },
  {
    kind: "class",
    slug: "clerigo",
    name: "Clérigo",
    eyebrow: "Convicción hecha milagro",
    summary: "Protección, restauración y poder divino con fuerte identidad.",
    description:
      "El clérigo canaliza una causa sagrada. Puede sostener al grupo, enfrentarse a criaturas sobrenaturales y decidir qué significa servir a algo mayor que uno mismo.",
    role: "Apoyo",
    ability: "Sabiduría",
    hitDie: "d8",
    icon: "CL",
    color: "#d6b85e",
    keywords: ["divino", "curación", "protección", "fe"],
    highlights: ["Canalizar divinidad", "Magia preparada", "Restauración"],
    sections: [
      {
        id: "identidad",
        title: "Fe en movimiento",
        paragraphs: [
          "La fe de un clérigo se demuestra mediante decisiones. Su deidad o filosofía importa menos que la forma en que esa creencia transforma sus actos.",
        ],
      },
      commonSections.preparation,
    ],
  },
  {
    kind: "class",
    slug: "druida",
    name: "Druida",
    eyebrow: "El mundo respira",
    summary: "Control del entorno, transformación y magia del mundo natural.",
    description:
      "El druida escucha ritmos que otros ignoran. Su magia modifica el terreno, convoca fuerzas naturales y permite adoptar nuevas formas para explorar o combatir.",
    role: "Control",
    ability: "Sabiduría",
    hitDie: "d8",
    icon: "DR",
    color: "#5b8d62",
    keywords: ["naturaleza", "formas salvajes", "elementos", "control"],
    highlights: ["Forma salvaje", "Magia natural", "Adaptabilidad"],
    sections: [
      {
        id: "identidad",
        title: "Una escala diferente",
        paragraphs: [
          "Los druidas pueden pensar en estaciones, ecosistemas y generaciones. Esa mirada crea personajes pacientes, radicales o sorprendidos por las costumbres urbanas.",
        ],
      },
      commonSections.preparation,
    ],
  },
  {
    kind: "class",
    slug: "explorador",
    name: "Explorador",
    eyebrow: "Siempre encuentra un camino",
    summary: "Movilidad, rastreo y precisión contra amenazas elegidas.",
    description:
      "El explorador combina disciplina marcial y conexión con territorios indómitos. Resulta excelente para descubrir peligros antes de que alcancen al grupo.",
    role: "Exploración",
    ability: "Destreza",
    hitDie: "d10",
    icon: "EX",
    color: "#66866a",
    keywords: ["rastreo", "naturaleza", "arco", "viaje"],
    highlights: ["Marca del cazador", "Exploración", "Movilidad"],
    sections: [
      {
        id: "identidad",
        title: "Leer el territorio",
        paragraphs: [
          "Una huella, una rama rota o un silencio extraño son frases completas para un explorador. Su especialidad convierte el viaje en parte activa de la aventura.",
        ],
      },
      commonSections.preparation,
    ],
  },
  {
    kind: "class",
    slug: "guerrero",
    name: "Guerrero",
    eyebrow: "La técnica decide",
    summary: "Dominio de armas, resistencia y enorme flexibilidad táctica.",
    description:
      "El guerrero demuestra que la excelencia marcial también es una forma de identidad. Su variedad de estilos permite construir desde un duelista preciso hasta una muralla acorazada.",
    role: "Daño",
    ability: "Fuerza",
    hitDie: "d10",
    icon: "GU",
    color: "#8a7f73",
    keywords: ["armas", "armadura", "táctica", "disciplina"],
    highlights: ["Estilo de combate", "Segundo aliento", "Acción adicional"],
    sections: [
      {
        id: "identidad",
        title: "Maestría visible",
        paragraphs: [
          "Cada cicatriz puede señalar una lección. El origen de su entrenamiento ayuda a distinguir a un veterano, una guarda juramentada o un prodigio autodidacta.",
        ],
      },
      commonSections.preparation,
    ],
  },
  {
    kind: "class",
    slug: "hechicero",
    name: "Hechicero",
    eyebrow: "La magia nace dentro",
    summary: "Poder arcano espontáneo que puede alterar sus propias reglas.",
    description:
      "El hechicero no estudia la magia: convive con ella. Su origen sobrenatural y la capacidad de modificar conjuros crean una experiencia intensa y personal.",
    role: "Daño",
    ability: "Carisma",
    hitDie: "d6",
    icon: "HE",
    color: "#b85845",
    keywords: ["metamagia", "linaje", "arcano", "poder innato"],
    highlights: ["Metamagia", "Puntos de hechicería", "Origen mágico"],
    sections: [
      {
        id: "identidad",
        title: "Una herencia imposible",
        paragraphs: [
          "El poder puede sentirse como don, accidente o responsabilidad. Decidir cuándo apareció y quién lo teme ofrece una base narrativa inmediata.",
        ],
      },
      commonSections.preparation,
    ],
  },
  {
    kind: "class",
    slug: "mago",
    name: "Mago",
    eyebrow: "Todo misterio tiene estructura",
    summary:
      "El repertorio arcano más amplio para quien disfruta preparando soluciones.",
    description:
      "El mago transforma investigación en poder. Su libro de conjuros crece con la aventura y premia la curiosidad, la anticipación y el uso creativo de herramientas especializadas.",
    role: "Control",
    ability: "Inteligencia",
    hitDie: "d6",
    icon: "MA",
    color: "#4c78a8",
    keywords: ["libro", "conjuros", "rituales", "estudio"],
    highlights: ["Libro de conjuros", "Rituales", "Preparación arcana"],
    sections: [
      {
        id: "identidad",
        title: "Conocimiento peligroso",
        paragraphs: [
          "La magia del mago tiene contexto: una escuela, un maestro, una biblioteca perdida o una teoría que nadie más acepta.",
        ],
      },
      commonSections.preparation,
    ],
  },
  {
    kind: "class",
    slug: "monje",
    name: "Monje",
    eyebrow: "Disciplina en movimiento",
    summary: "Velocidad, control corporal y golpes precisos sin equipo pesado.",
    description:
      "El monje convierte entrenamiento y concentración en una presencia móvil. Puede atravesar el campo de batalla, neutralizar amenazas y actuar con economía de medios.",
    role: "Control",
    ability: "Destreza",
    hitDie: "d8",
    icon: "MO",
    color: "#4f9a91",
    keywords: ["artes marciales", "disciplina", "movilidad", "foco"],
    highlights: [
      "Artes marciales",
      "Puntos de foco",
      "Movimiento sin armadura",
    ],
    sections: [
      {
        id: "identidad",
        title: "El cuerpo como lenguaje",
        paragraphs: [
          "Su disciplina puede proceder de un monasterio, una tradición familiar, una compañía itinerante o años de práctica solitaria.",
        ],
      },
      commonSections.preparation,
    ],
  },
  {
    kind: "class",
    slug: "paladin",
    name: "Paladín",
    eyebrow: "Una promesa que pesa",
    summary: "Defensa, liderazgo y poder radiante guiados por un juramento.",
    description:
      "El paladín obtiene fuerza de un compromiso. El conflicto aparece cuando mantener la palabra exige pagar un precio o interpretar principios en situaciones ambiguas.",
    role: "Defensa",
    ability: "Carisma",
    hitDie: "d10",
    icon: "PA",
    color: "#cf9f4b",
    keywords: ["juramento", "aura", "protección", "radiante"],
    highlights: ["Imposición de manos", "Castigo divino", "Aura protectora"],
    sections: [
      {
        id: "identidad",
        title: "La fuerza de una promesa",
        paragraphs: [
          "El juramento funciona mejor cuando es concreto. ¿A quién protege? ¿Qué conducta prohíbe? ¿Qué haría temblar esa convicción?",
        ],
      },
      commonSections.preparation,
    ],
  },
  {
    kind: "class",
    slug: "picaro",
    name: "Pícaro",
    eyebrow: "Un segundo basta",
    summary: "Pericia, sigilo y precisión para resolver problemas con ingenio.",
    description:
      "El pícaro detecta oportunidades. Sobresale en habilidades, explota distracciones y demuestra que conocer una salida puede ser tan valioso como ganar una pelea.",
    role: "Exploración",
    ability: "Destreza",
    hitDie: "d8",
    icon: "PI",
    color: "#72716d",
    keywords: ["sigilo", "pericia", "trampas", "ataque furtivo"],
    highlights: ["Ataque furtivo", "Pericia", "Acción astuta"],
    sections: [
      {
        id: "identidad",
        title: "Profesional de lo improbable",
        paragraphs: [
          "No todos los pícaros son criminales. Investigadores, mensajeros, espías y buscadores de reliquias comparten la misma capacidad de actuar donde otros dudan.",
        ],
      },
      commonSections.preparation,
    ],
  },
];

export const classRoles = [
  ...new Set(classes.map((entry) => entry.role)),
].sort();
export const classAbilities = [
  ...new Set(classes.map((entry) => entry.ability)),
].sort();
