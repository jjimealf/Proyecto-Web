import { useFavorites } from "../context/favorites-context";
import type { EntryKind } from "../types/content";

type FavoriteButtonProps = {
  kind: EntryKind;
  slug: string;
  name: string;
  compact?: boolean;
};

export function FavoriteButton({
  kind,
  slug,
  name,
  compact = false,
}: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite({ kind, slug });
  const label = active
    ? `Quitar ${name} de favoritos`
    : `Guardar ${name} en favoritos`;

  return (
    <button
      className={`favorite-button${active ? " is-active" : ""}${compact ? " is-compact" : ""}`}
      type="button"
      aria-pressed={active}
      aria-label={label}
      title={label}
      onClick={() => toggleFavorite({ kind, slug })}
    >
      <span aria-hidden="true">{active ? "◆" : "◇"}</span>
      {compact ? null : <span>{active ? "Guardado" : "Guardar"}</span>}
    </button>
  );
}
