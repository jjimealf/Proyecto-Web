import type { ClassEntry, ForgeResult, SpeciesEntry } from "../types/content";

export function pickRandom<T>(items: T[], random = Math.random): T {
  if (!items.length) throw new Error("No se puede elegir de una lista vacía.");
  return items[Math.floor(random() * items.length)]!;
}

export function createForgeResult(
  classEntries: ClassEntry[],
  speciesEntries: SpeciesEntry[],
  current?: ForgeResult,
  locks: { classLocked: boolean; speciesLocked: boolean } = {
    classLocked: false,
    speciesLocked: false,
  },
  random = Math.random,
): ForgeResult {
  const selectedClass =
    locks.classLocked && current
      ? classEntries.find((entry) => entry.slug === current.classSlug)
      : pickRandom(classEntries, random);
  const selectedSpecies =
    locks.speciesLocked && current
      ? speciesEntries.find((entry) => entry.slug === current.speciesSlug)
      : pickRandom(speciesEntries, random);

  if (!selectedClass || !selectedSpecies) {
    throw new Error("La combinación bloqueada ya no está disponible.");
  }

  const createdAt = new Date().toISOString();
  return {
    id: `${createdAt}-${selectedSpecies.slug}-${selectedClass.slug}`,
    classSlug: selectedClass.slug,
    speciesSlug: selectedSpecies.slug,
    createdAt,
  };
}

export function describeAffinity(
  classEntry: ClassEntry,
  speciesEntry: SpeciesEntry,
) {
  const sharedWords = classEntry.keywords.filter((keyword) =>
    speciesEntry.keywords.includes(keyword),
  );

  if (sharedWords.length) {
    return `${speciesEntry.name} y ${classEntry.name} comparten una afinidad por ${sharedWords[0]}. Úsala como punto de partida y decide si el personaje continúa esa tradición o intenta romperla.`;
  }

  return `${speciesEntry.name} aporta ${speciesEntry.highlights[0].toLocaleLowerCase("es")}; ${classEntry.name} añade ${classEntry.highlights[0].toLocaleLowerCase("es")}. El contraste ofrece una historia con decisiones visibles desde la primera escena.`;
}
