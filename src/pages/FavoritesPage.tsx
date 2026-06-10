import { CatalogCard } from "../components/CatalogCard";
import { EmptyState } from "../components/EmptyState";
import { useFavorites } from "../context/favorites-context";
import { classes } from "../data/classes";
import { species } from "../data/species";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import type { CatalogEntry } from "../types/content";

export default function FavoritesPage() {
  const { favorites, clearFavorites } = useFavorites();
  useDocumentMeta(
    "Favoritos",
    "Tus clases y especies guardadas para futuras aventuras.",
  );

  const allEntries: CatalogEntry[] = [...classes, ...species];
  const entries = favorites.flatMap((favorite) => {
    const match = allEntries.find(
      (entry) => entry.kind === favorite.kind && entry.slug === favorite.slug,
    );
    return match ? [match] : [];
  });

  return (
    <div className="favorites-page content-shell">
      <header className="page-heading page-heading--with-action">
        <div>
          <p className="eyebrow">Tu archivo personal</p>
          <h1>Favoritos</h1>
          <p>
            Guarda conceptos mientras exploras y vuelve a ellos cuando llegue el
            momento de crear un personaje.
          </p>
        </div>
        {entries.length ? (
          <button
            className="quiet-button"
            type="button"
            onClick={clearFavorites}
          >
            Vaciar archivo
          </button>
        ) : null}
      </header>

      {entries.length ? (
        <section className="catalog-grid" aria-label="Favoritos guardados">
          {entries.map((entry, index) => (
            <CatalogCard
              entry={entry}
              index={index}
              key={`${entry.kind}-${entry.slug}`}
            />
          ))}
        </section>
      ) : (
        <EmptyState
          title="Tu archivo todavía está vacío"
          description="Explora las clases y guarda cualquier idea que quieras recuperar más tarde."
          actionLabel="Explorar clases"
          actionTo="/clases"
        />
      )}
    </div>
  );
}
