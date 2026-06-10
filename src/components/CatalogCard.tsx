import { Link } from "react-router-dom";
import type { CatalogEntry } from "../types/content";
import { FavoriteButton } from "./FavoriteButton";

type CatalogCardProps = {
  entry: CatalogEntry;
  index?: number;
};

export function CatalogCard({ entry, index = 0 }: CatalogCardProps) {
  const path =
    entry.kind === "class"
      ? `/clases/${entry.slug}`
      : `/especies/${entry.slug}`;
  const facts =
    entry.kind === "class"
      ? [entry.role, entry.ability, entry.hitDie]
      : [entry.size, entry.speed, entry.traits[0]];

  return (
    <article
      className="catalog-card reveal"
      style={
        {
          "--entry-color": entry.color,
          "--delay": `${Math.min(index * 45, 360)}ms`,
        } as React.CSSProperties
      }
    >
      <div className="catalog-card__top">
        <span className="entry-sigil" aria-hidden="true">
          {entry.icon}
        </span>
        <FavoriteButton
          kind={entry.kind}
          slug={entry.slug}
          name={entry.name}
          compact
        />
      </div>
      <p className="eyebrow">{entry.eyebrow}</p>
      <h2>
        <Link to={path}>{entry.name}</Link>
      </h2>
      <p>{entry.summary}</p>
      <ul className="fact-list" aria-label={`Datos de ${entry.name}`}>
        {facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
      <Link
        className="text-link"
        to={path}
        aria-label={`Explorar ${entry.name}`}
      >
        Abrir crónica <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
