import { describe, expect, it } from "vitest";
import { classes } from "../data/classes";
import { species } from "../data/species";
import { createForgeResult, describeAffinity, pickRandom } from "./forge";

describe("forge utilities", () => {
  it("elige un elemento usando el generador recibido", () => {
    expect(pickRandom(["a", "b", "c"], () => 0.67)).toBe("c");
  });

  it("mantiene las elecciones bloqueadas", () => {
    const current = {
      id: "anterior",
      classSlug: "mago",
      speciesSlug: "elfo",
      createdAt: "2026-06-10T10:00:00.000Z",
    };

    const result = createForgeResult(
      classes,
      species,
      current,
      { classLocked: true, speciesLocked: true },
      () => 0,
    );

    expect(result.classSlug).toBe("mago");
    expect(result.speciesSlug).toBe("elfo");
  });

  it("genera una explicación legible de la combinación", () => {
    const classEntry = classes.find((entry) => entry.slug === "barbaro")!;
    const speciesEntry = species.find((entry) => entry.slug === "enano")!;

    expect(describeAffinity(classEntry, speciesEntry)).toContain("Enano");
    expect(describeAffinity(classEntry, speciesEntry)).toContain("Bárbaro");
  });
});
