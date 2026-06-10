import { beforeEach, describe, expect, it } from "vitest";
import type { FavoriteRecord } from "../types/content";
import { favoriteStorage, forgeStorage } from "./storage";

describe("versioned storage", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("guarda y recupera favoritos", () => {
    const favorites: FavoriteRecord[] = [
      {
        kind: "class",
        slug: "barbaro",
        savedAt: "2026-06-10T10:00:00.000Z",
      },
    ];

    favoriteStorage.write(favorites);

    expect(favoriteStorage.read()).toEqual(favorites);
  });

  it("elimina datos corruptos sin romper la aplicación", () => {
    window.localStorage.setItem("cronicas:favorites:v1", "{sin-json");

    expect(favoriteStorage.read()).toEqual([]);
    expect(window.localStorage.getItem("cronicas:favorites:v1")).toBeNull();
  });

  it("mantiene separados resultados de forja y favoritos", () => {
    forgeStorage.write([
      {
        id: "uno",
        classSlug: "mago",
        speciesSlug: "elfo",
        createdAt: "2026-06-10T10:00:00.000Z",
      },
    ]);

    expect(favoriteStorage.read()).toEqual([]);
    expect(forgeStorage.read()).toHaveLength(1);
  });
});
