import { useEffect, useMemo, useState, type ReactNode } from "react";
import type { FavoriteRecord } from "../types/content";
import { favoriteStorage } from "../utils/storage";
import {
  FavoritesContext,
  type FavoritesContextValue,
} from "./favorites-context";

type FavoritesProviderProps = {
  children: ReactNode;
};

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<FavoriteRecord[]>(() =>
    favoriteStorage.read(),
  );

  useEffect(() => {
    favoriteStorage.write(favorites);
  }, [favorites]);

  const value = useMemo<FavoritesContextValue>(
    () => ({
      favorites,
      count: favorites.length,
      isFavorite: ({ kind, slug }) =>
        favorites.some(
          (favorite) => favorite.kind === kind && favorite.slug === slug,
        ),
      toggleFavorite: ({ kind, slug }) => {
        setFavorites((current) => {
          const exists = current.some(
            (favorite) => favorite.kind === kind && favorite.slug === slug,
          );
          if (exists) {
            return current.filter(
              (favorite) => favorite.kind !== kind || favorite.slug !== slug,
            );
          }
          return [
            ...current,
            { kind, slug, savedAt: new Date().toISOString() },
          ];
        });
      },
      clearFavorites: () => setFavorites([]),
    }),
    [favorites],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
