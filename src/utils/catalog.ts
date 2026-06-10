import type {
  CatalogEntry,
  CatalogFilters,
  ClassEntry,
  SpeciesEntry,
} from "../types/content";

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase("es");

export function matchesQuery(entry: CatalogEntry, query: string) {
  const normalizedQuery = normalize(query.trim());
  if (!normalizedQuery) return true;

  const haystack = normalize(
    [
      entry.name,
      entry.eyebrow,
      entry.summary,
      entry.description,
      ...entry.keywords,
      ...entry.highlights,
    ].join(" "),
  );

  return normalizedQuery.split(/\s+/).every((term) => haystack.includes(term));
}

export function filterClasses(entries: ClassEntry[], filters: CatalogFilters) {
  return entries.filter(
    (entry) =>
      matchesQuery(entry, filters.query) &&
      (!filters.primary || entry.role === filters.primary) &&
      (!filters.secondary || entry.ability === filters.secondary),
  );
}

export function filterSpecies(
  entries: SpeciesEntry[],
  filters: CatalogFilters,
) {
  return entries.filter(
    (entry) =>
      matchesQuery(entry, filters.query) &&
      (!filters.primary || entry.size === filters.primary) &&
      (!filters.secondary || entry.traits.includes(filters.secondary)),
  );
}
