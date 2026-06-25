import type { WorldRegion } from "../types/content";

export const worldRegions: WorldRegion[] = [
  {
    slug: "valdoria",
    name: "Valdoria",
    epithet: "El reino de los estandartes rotos",
    capital: "Rocagrís",
    peoples: "Humanos, medianos y linajes fronterizos",
    color: "#c98252",
    summary:
      "Una corona antigua sostiene una red de fortalezas levantadas sobre huesos de dragón.",
    identity:
      "Caballería juramentada, ciudades amuralladas y casas nobles que convierten la memoria en ley.",
    conflict:
      "La reina agoniza sin heredero reconocido mientras tres casas buscan el Trono de Ceniza.",
    mapPosition: { x: 48, y: 48 },
    landmarks: [
      {
        name: "Rocagrís",
        description: "Capital escalonada alrededor del cráter de un dragón.",
      },
      {
        name: "La Calzada de Bronce",
        description: "Ruta militar cuyos mojones todavía arden al anochecer.",
      },
      {
        name: "Fuerte Último",
        description: "Bastión que vigila la frontera corrompida del este.",
      },
    ],
  },
  {
    slug: "sylvaran",
    name: "Sylvaran",
    epithet: "El bosque que recuerda",
    capital: "Lethariel",
    peoples: "Elfos, gnomos y guardianes feéricos",
    color: "#7f9d68",
    summary:
      "Un bosque consciente guarda pactos más antiguos que los reinos mortales.",
    identity:
      "Ciudades vivas, senderos cambiantes y una magia natural que responde a canciones y promesas.",
    conflict:
      "El Corazón Verde despierta de forma violenta y expulsa incluso a sus antiguos custodios.",
    mapPosition: { x: 31, y: 35 },
    landmarks: [
      {
        name: "Lethariel",
        description: "Ciudad suspendida entre las copas de árboles milenarios.",
      },
      {
        name: "El Lago Espejado",
        description: "Sus aguas muestran recuerdos en lugar de reflejos.",
      },
      {
        name: "La Herida Blanca",
        description: "Claro petrificado por una llama dracónica sin calor.",
      },
    ],
  },
  {
    slug: "khar-durak",
    name: "Khar-Dûrak",
    epithet: "Las montañas de la forja eterna",
    capital: "Dûr Karag",
    peoples: "Enanos, gigantes de piedra y clanes del subsuelo",
    color: "#a88f70",
    summary:
      "Fortalezas excavadas en una cordillera donde todavía late fuego primordial.",
    identity:
      "Forjas rúnicas, archivos tallados en roca y juramentos que pasan de una generación a otra.",
    conflict:
      "Algo bajo la Forja Primera imita las voces de los antepasados y exige que abran las puertas.",
    mapPosition: { x: 57, y: 25 },
    landmarks: [
      {
        name: "Dûr Karag",
        description:
          "Capital subterránea construida alrededor de un río de magma.",
      },
      {
        name: "Los Picos Coronados",
        description: "Siete cumbres unidas por puentes imposibles.",
      },
      {
        name: "La Puerta Sin Nombre",
        description: "Umbral sellado que no figura en ningún registro real.",
      },
    ],
  },
  {
    slug: "nhal-zareth",
    name: "Nhal-Zareth",
    epithet: "La cicatriz de las Siete Llamas",
    capital: "Ninguna",
    peoples: "Exiliados, dracónidos y criaturas alteradas",
    color: "#a64d47",
    summary:
      "Una extensión de vidrio negro, tormentas rojas y ruinas que se desplazan durante la noche.",
    identity:
      "Enclaves nómadas sobreviven entre restos de imperios y fenómenos mágicos impredecibles.",
    conflict:
      "Las siete calderas volcánicas vuelven a encenderse siguiendo un patrón que parece una llamada.",
    mapPosition: { x: 72, y: 48 },
    landmarks: [
      {
        name: "La Ciudad Invertida",
        description: "Ruinas que cuelgan bajo una grieta abierta en el cielo.",
      },
      {
        name: "El Mar de Vidrio",
        description:
          "Llanura fundida donde permanecen sombras de antiguos ejércitos.",
      },
      {
        name: "La Séptima Caldera",
        description: "Volcán cuyo interior emite palabras en lengua dracónica.",
      },
    ],
  },
  {
    slug: "aurelia",
    name: "Aurelia",
    epithet: "El imperio sobre las nubes",
    capital: "Solaria",
    peoples: "Humanos, altos elfos y linajes tocados por la magia",
    color: "#d2ad62",
    summary:
      "Un imperio arcano gobierna desde una capital flotante alimentada por un sol cautivo.",
    identity:
      "Academias de magia, caminos celestes y una burocracia que registra cada hechizo autorizado.",
    conflict:
      "El sol cautivo pierde intensidad y el Senado oculta cuánto tiempo puede mantenerse Solaria en el aire.",
    mapPosition: { x: 65, y: 69 },
    landmarks: [
      {
        name: "Solaria",
        description:
          "Capital flotante rodeada por anillos de navegación arcana.",
      },
      {
        name: "La Escalera del Cielo",
        description:
          "Torre incompleta que intenta alcanzar la ciudad desde tierra.",
      },
      {
        name: "Observatorio de Ilyr",
        description: "Archivo astral que registra estrellas desaparecidas.",
      },
    ],
  },
  {
    slug: "marcas-libres",
    name: "Las Marcas Libres",
    epithet: "La costa sin corona",
    capital: "Puerto Bruma",
    peoples: "Comunidades mezcladas de todo Eryndor",
    color: "#4f8c91",
    summary:
      "Puertos independientes convierten comercio, secretos y aventuras en una forma de gobierno.",
    identity:
      "Capitanes electos, gremios rivales y compañías que cartografían aquello que los reinos prefieren ignorar.",
    conflict:
      "Barcos sin tripulación llegan desde el oeste con mapas de un continente que no debería existir.",
    mapPosition: { x: 27, y: 68 },
    landmarks: [
      {
        name: "Puerto Bruma",
        description:
          "Ciudad libre construida sobre puentes, pilotes y barcos encallados.",
      },
      {
        name: "Las Agujas de Sal",
        description: "Islas verticales usadas como faros y fortalezas piratas.",
      },
      {
        name: "El Faro Muerto",
        description: "Una luz submarina señala rutas hacia mares desconocidos.",
      },
    ],
  },
];

export const defaultWorldRegion = worldRegions[0];

export function findWorldRegion(slug: string | null | undefined) {
  return (
    worldRegions.find((region) => region.slug === slug) ?? defaultWorldRegion
  );
}
