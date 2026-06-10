import type { FavoriteRecord, ForgeResult } from "../types/content";

const FAVORITES_KEY = "cronicas:favorites:v1";
const FORGE_KEY = "cronicas:forge:v1";

type VersionedData<T> = {
  version: 1;
  items: T[];
};

function readVersioned<T>(key: string): T[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return [];
    const value = JSON.parse(raw) as VersionedData<T>;
    return value.version === 1 && Array.isArray(value.items) ? value.items : [];
  } catch {
    window.localStorage.removeItem(key);
    return [];
  }
}

function writeVersioned<T>(key: string, items: T[]) {
  if (typeof window === "undefined") return;
  const payload: VersionedData<T> = { version: 1, items };
  window.localStorage.setItem(key, JSON.stringify(payload));
}

export const favoriteStorage = {
  read: () => readVersioned<FavoriteRecord>(FAVORITES_KEY),
  write: (items: FavoriteRecord[]) => writeVersioned(FAVORITES_KEY, items),
};

export const forgeStorage = {
  read: () => readVersioned<ForgeResult>(FORGE_KEY),
  write: (items: ForgeResult[]) => writeVersioned(FORGE_KEY, items),
};
