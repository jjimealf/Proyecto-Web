export type EntryKind = "class" | "species";

export type ArticleSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ClassEntry = {
  kind: "class";
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  role: "Defensa" | "Apoyo" | "Daño" | "Exploración" | "Control";
  ability: "Fuerza" | "Destreza" | "Inteligencia" | "Sabiduría" | "Carisma";
  hitDie: "d6" | "d8" | "d10" | "d12";
  icon: string;
  color: string;
  keywords: string[];
  highlights: string[];
  sections: ArticleSection[];
  featured?: boolean;
};

export type SpeciesEntry = {
  kind: "species";
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  size: "Pequeño" | "Mediano" | "Pequeño o mediano";
  speed: string;
  icon: string;
  color: string;
  traits: string[];
  keywords: string[];
  highlights: string[];
  sections: ArticleSection[];
  featured?: boolean;
};

export type CatalogEntry = ClassEntry | SpeciesEntry;

export type CatalogFilters = {
  query: string;
  primary: string;
  secondary: string;
};

export type FavoriteRecord = {
  kind: EntryKind;
  slug: string;
  savedAt: string;
};

export type ForgeResult = {
  id: string;
  classSlug: string;
  speciesSlug: string;
  createdAt: string;
};

export type MapPosition = {
  x: number;
  y: number;
};

export type WorldLandmark = {
  name: string;
  description: string;
};

export type WorldRegion = {
  slug: string;
  name: string;
  epithet: string;
  capital: string;
  peoples: string;
  color: string;
  summary: string;
  identity: string;
  conflict: string;
  mapPosition: MapPosition;
  landmarks: WorldLandmark[];
};
