import type { SpeciesEntry } from "../types/content";

const sharedSection = {
  id: "interpretacion",
  title: "Hazlo personal",
  paragraphs: [
    "Los rasgos describen posibilidades, no una personalidad obligatoria. Decide qué costumbres acepta tu personaje, cuáles cuestiona y qué experiencia individual lo distingue de su comunidad.",
  ],
};

export const species: SpeciesEntry[] = [
  {
    kind: "species",
    slug: "draconido",
    name: "Dracónido",
    eyebrow: "Eco de dragones",
    summary:
      "Presencia dracónica y un aliento elemental ligado a su ascendencia.",
    description:
      "Los dracónidos llevan señales visibles de una herencia extraordinaria. Su linaje elemental puede convertirse en orgullo, deber o una historia que todavía intentan comprender.",
    size: "Mediano",
    speed: "30 pies",
    icon: "DR",
    color: "#b95f42",
    traits: ["Aliento", "Resistencia elemental", "Ascendencia dracónica"],
    keywords: ["dragón", "elemental", "aliento", "escamas"],
    highlights: ["Elige un legado elemental", "Ataque de área", "Resistencia"],
    sections: [
      {
        id: "legado",
        title: "Un legado visible",
        paragraphs: [
          "El color, textura y forma de sus rasgos pueden reflejar su ascendencia sin determinar su carácter. El vínculo con los dragones puede ser cultural, familiar o completamente desconocido.",
        ],
      },
      sharedSection,
    ],
  },
  {
    kind: "species",
    slug: "enano",
    name: "Enano",
    eyebrow: "Memoria de piedra",
    summary:
      "Resistencia, visión en la oscuridad y una afinidad profunda con la tierra.",
    description:
      "Los enanos miran el tiempo desde otra escala. Su resistencia y su memoria cultural los convierten en personajes excelentes para historias de legado, artesanía y promesas antiguas.",
    size: "Mediano",
    speed: "30 pies",
    icon: "EN",
    color: "#b47a43",
    traits: [
      "Visión en la oscuridad",
      "Resistencia enana",
      "Afinidad con la piedra",
    ],
    keywords: ["piedra", "forja", "resistencia", "memoria"],
    highlights: [
      "Resistencia al veneno",
      "Conocimiento pétreo",
      "Gran aguante",
    ],
    featured: true,
    sections: [
      {
        id: "memoria",
        title: "La memoria como territorio",
        paragraphs: [
          "Una vida larga permite recordar consecuencias que otros consideran historia. Un enano puede mantener amistades, agravios y proyectos durante generaciones.",
          "Esa perspectiva no exige rigidez. También puede producir curiosidad, humor paciente o el deseo urgente de corregir un error heredado.",
        ],
      },
      {
        id: "comunidad",
        title: "Clan, oficio y elección",
        paragraphs: [
          "La comunidad puede ser una raíz o una tensión. Define qué aprendió tu personaje de ella y qué tuvo que descubrir lejos de casa.",
        ],
        bullets: [
          "Una obra incompleta que debe terminar.",
          "Un nombre familiar que quiere redefinir.",
          "Una deuda antigua que nadie más recuerda.",
        ],
      },
      {
        id: "aventura",
        title: "Por qué abandona la fortaleza",
        paragraphs: [
          "Buscar un material imposible, documentar ruinas, recuperar una técnica perdida o proteger a una nueva familia son motivos que conectan de inmediato al enano con la campaña.",
        ],
      },
      sharedSection,
    ],
  },
  {
    kind: "species",
    slug: "elfo",
    name: "Elfo",
    eyebrow: "Entre vigilia y ensueño",
    summary:
      "Sentidos agudos, herencia feérica y una vida de horizontes largos.",
    description:
      "Los elfos combinan percepción, gracia y una relación singular con el descanso. Su longevidad permite construir personajes marcados por lugares y personas que ya cambiaron.",
    size: "Mediano",
    speed: "30 pies",
    icon: "EL",
    color: "#5f8d72",
    traits: ["Linaje feérico", "Trance", "Sentidos agudos"],
    keywords: ["feérico", "trance", "longevidad", "percepción"],
    highlights: ["Ventaja contra encantamiento", "Trance", "Linajes élficos"],
    sections: [
      {
        id: "tiempo",
        title: "El peso del tiempo",
        paragraphs: [
          "Una vida extensa cambia la relación con la urgencia, la pérdida y el aprendizaje. Decide qué momento reciente logró romper esa perspectiva.",
        ],
      },
      sharedSection,
    ],
  },
  {
    kind: "species",
    slug: "gnomo",
    name: "Gnomo",
    eyebrow: "Curiosidad incansable",
    summary:
      "Ingenio, resistencia mental y legados conectados con magia e invención.",
    description:
      "Los gnomos suelen aproximarse al mundo como un problema fascinante. Su curiosidad puede expresarse mediante mecanismos, ilusiones, historias o una colección muy específica.",
    size: "Pequeño",
    speed: "30 pies",
    icon: "GN",
    color: "#6c8fa4",
    traits: ["Astucia gnómica", "Linaje", "Visión en la oscuridad"],
    keywords: ["ingenio", "ilusión", "invención", "curiosidad"],
    highlights: ["Defensa mental", "Magia de linaje", "Tamaño pequeño"],
    sections: [
      {
        id: "curiosidad",
        title: "Una pregunta detrás de otra",
        paragraphs: [
          "Elige una obsesión concreta. Un personaje que estudia cerraduras imposibles resulta más reconocible que uno simplemente curioso.",
        ],
      },
      sharedSection,
    ],
  },
  {
    kind: "species",
    slug: "goliat",
    name: "Goliat",
    eyebrow: "Paso de gigante",
    summary: "Poder físico y dones sobrenaturales heredados de los gigantes.",
    description:
      "Los goliats llevan en su cuerpo un eco del poder gigante. Sus dones pueden reflejar fuerza, tormenta, piedra, fuego o una relación diferente con el tamaño.",
    size: "Mediano",
    speed: "35 pies",
    icon: "GO",
    color: "#7892a1",
    traits: ["Ascendencia gigante", "Forma grande", "Constitución poderosa"],
    keywords: ["gigante", "montaña", "fuerza", "crecimiento"],
    highlights: ["Mayor velocidad", "Poder de gigante", "Cambio de tamaño"],
    sections: [
      {
        id: "escala",
        title: "Pensar a gran escala",
        paragraphs: [
          "La ascendencia gigante puede ser celebrada, estudiada o discutida. No necesita definir el lugar donde creció el personaje.",
        ],
      },
      sharedSection,
    ],
  },
  {
    kind: "species",
    slug: "mediano",
    name: "Mediano",
    eyebrow: "Valor cotidiano",
    summary: "Suerte, agilidad y una sorprendente resistencia frente al miedo.",
    description:
      "Los medianos demuestran que el heroísmo no depende de la estatura. Su fortuna y valentía funcionan especialmente bien en historias de gente común frente a desafíos enormes.",
    size: "Pequeño",
    speed: "30 pies",
    icon: "ME",
    color: "#9b8d54",
    traits: ["Afortunado", "Valiente", "Agilidad mediana"],
    keywords: ["suerte", "valor", "agilidad", "hogar"],
    highlights: [
      "Repetir resultados críticos",
      "Moverse entre criaturas",
      "Resistir miedo",
    ],
    sections: [
      {
        id: "valor",
        title: "Avanzar aunque tiemblen las manos",
        paragraphs: [
          "El valor mediano no elimina el miedo. Hace más interesante el momento en que el personaje decide continuar a pesar de él.",
        ],
      },
      sharedSection,
    ],
  },
  {
    kind: "species",
    slug: "humano",
    name: "Humano",
    eyebrow: "Ambición adaptable",
    summary: "Versatilidad, iniciativa y una capacidad especial para aprender.",
    description:
      "Los humanos ofrecen una base flexible para cualquier concepto. Su rasgo más interesante no es ser corrientes, sino la velocidad con la que construyen, cambian y persiguen nuevas posibilidades.",
    size: "Pequeño o mediano",
    speed: "30 pies",
    icon: "HU",
    color: "#9d6f58",
    traits: ["Ingenioso", "Hábil", "Versátil"],
    keywords: ["adaptación", "habilidad", "origen", "versatilidad"],
    highlights: ["Recurso heroico", "Competencia adicional", "Dote de origen"],
    sections: [
      {
        id: "impulso",
        title: "El impulso de construir",
        paragraphs: [
          "Una vida más breve puede producir prisa, intensidad o una fuerte atención al legado. Define qué quiere dejar el personaje detrás de sí.",
        ],
      },
      sharedSection,
    ],
  },
  {
    kind: "species",
    slug: "orco",
    name: "Orco",
    eyebrow: "Voluntad que no cede",
    summary: "Potencia, movilidad y la capacidad de mantenerse en pie.",
    description:
      "Los orcos combinan vigor y determinación. Sus personajes pueden explorar tradiciones comunitarias, expectativas ajenas y la forma particular en que entienden la fortaleza.",
    size: "Mediano",
    speed: "30 pies",
    icon: "OR",
    color: "#6f8757",
    traits: [
      "Subidón de adrenalina",
      "Aguante implacable",
      "Visión en la oscuridad",
    ],
    keywords: ["aguante", "velocidad", "voluntad", "fortaleza"],
    highlights: ["Movimiento explosivo", "Evitar caer", "Visión nocturna"],
    sections: [
      {
        id: "fortaleza",
        title: "Más de una forma de ser fuerte",
        paragraphs: [
          "La fortaleza puede ser física, emocional o comunitaria. Elige cuál reconoce tu personaje y cuál todavía necesita aprender.",
        ],
      },
      sharedSection,
    ],
  },
  {
    kind: "species",
    slug: "tiefling",
    name: "Tiefling",
    eyebrow: "Legado de otros planos",
    summary:
      "Resistencia sobrenatural y magia conectada con un legado infernal.",
    description:
      "Los tieflings presentan rasgos que revelan una influencia de los Planos Inferiores. Esa herencia no decide su moral ni su destino, pero sí puede afectar cómo los percibe el mundo.",
    size: "Pequeño o mediano",
    speed: "30 pies",
    icon: "TI",
    color: "#8e4a68",
    traits: [
      "Legado infernal",
      "Resistencia sobrenatural",
      "Visión en la oscuridad",
    ],
    keywords: ["infernal", "magia", "resistencia", "legado"],
    highlights: [
      "Magia de legado",
      "Resistencia elemental",
      "Aspecto variable",
    ],
    sections: [
      {
        id: "miradas",
        title: "Entre herencia y elección",
        paragraphs: [
          "Un tiefling puede abrazar, investigar o ignorar su legado. Lo importante es cómo responde a quienes creen conocerlo antes de escuchar su nombre.",
        ],
      },
      sharedSection,
    ],
  },
];

export const speciesSizes = [
  ...new Set(species.map((entry) => entry.size)),
].sort();
export const speciesTraits = [
  ...new Set(species.flatMap((entry) => entry.traits)),
].sort();
