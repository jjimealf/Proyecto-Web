import { describe, expect, it } from "vitest";
import { classes } from "../data/classes";
import { species } from "../data/species";
import { filterClasses, filterSpecies, matchesQuery } from "./catalog";

describe("catalog utilities", () => {
  it("encuentra términos sin depender de tildes o mayúsculas", () => {
    const barbarian = classes.find((entry) => entry.slug === "barbaro")!;

    expect(matchesQuery(barbarian, "BARBARO resistencia")).toBe(true);
    expect(matchesQuery(barbarian, "magia preparada")).toBe(false);
  });

  it("filtra clases combinando función y característica", () => {
    const results = filterClasses(classes, {
      query: "",
      primary: "Defensa",
      secondary: "Fuerza",
    });

    expect(results.map((entry) => entry.slug)).toEqual(["barbaro"]);
  });

  it("filtra especies por tamaño y rasgo", () => {
    const results = filterSpecies(species, {
      query: "",
      primary: "Pequeño",
      secondary: "Afortunado",
    });

    expect(results.map((entry) => entry.slug)).toEqual(["mediano"]);
  });
});
