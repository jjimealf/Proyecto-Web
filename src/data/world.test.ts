import { describe, expect, it } from "vitest";
import { defaultWorldRegion, findWorldRegion, worldRegions } from "./world";

describe("world data", () => {
  it("define seis regiones con direcciones únicas", () => {
    expect(worldRegions).toHaveLength(6);
    expect(new Set(worldRegions.map(({ slug }) => slug)).size).toBe(6);
  });

  it("usa Valdoria cuando la región no existe", () => {
    expect(defaultWorldRegion.slug).toBe("valdoria");
    expect(findWorldRegion("territorio-inexistente")).toBe(defaultWorldRegion);
  });
});
