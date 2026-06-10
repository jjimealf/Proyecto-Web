import { createContext, useContext } from "react";
import type { FavoriteRecord } from "../types/content";

export type FavoritesContextValue = {
  favorites: FavoriteRecord[];
  count: number;
  isFavorite: (record: Pick<FavoriteRecord, "kind" | "slug">) => boolean;
  toggleFavorite: (record: Pick<FavoriteRecord, "kind" | "slug">) => void;
  clearFavorites: () => void;
};

export const FavoritesContext = createContext<FavoritesContextValue | null>(
  null,
);

export function useFavorites() {
  const value = useContext(FavoritesContext);
  if (!value) {
    throw new Error(
      "useFavorites debe utilizarse dentro de FavoritesProvider.",
    );
  }
  return value;
}
