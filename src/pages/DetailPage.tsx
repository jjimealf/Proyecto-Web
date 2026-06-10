import { Link, useParams } from "react-router-dom";
import { ArticleSections } from "../components/ArticleSections";
import { FavoriteButton } from "../components/FavoriteButton";
import { classes } from "../data/classes";
import { species } from "../data/species";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import type { CatalogEntry } from "../types/content";
import NotFoundPage from "./NotFoundPage";

type DetailPageProps = {
  type: "class" | "species";
};

function getFacts(entry: CatalogEntry) {
  return entry.kind === "class"
    ? [
        ["Función", entry.role],
        ["Característica", entry.ability],
        ["Dado de golpe", entry.hitDie],
      ]
    : [
        ["Tamaño", entry.size],
        ["Velocidad", entry.speed],
        ["Rasgo clave", entry.traits[0]],
      ];
}

export default function DetailPage({ type }: DetailPageProps) {
  const { slug } = useParams();
  const source = type === "class" ? classes : species;
  const entry = source.find((item) => item.slug === slug);

  useDocumentMeta(
    entry?.name ?? "Crónica no encontrada",
    entry?.summary ?? "La crónica solicitada no está disponible.",
  );

  if (!entry) return <NotFoundPage embedded />;

  const backPath = type === "class" ? "/clases" : "/especies";
  const backLabel = type === "class" ? "Volver a clases" : "Volver a especies";

  return (
    <article
      className="detail-page"
      style={{ "--entry-color": entry.color } as React.CSSProperties}
    >
      <header className="detail-hero content-shell">
        <div className="detail-hero__copy">
          <Link className="back-link" to={backPath}>
            <span aria-hidden="true">←</span> {backLabel}
          </Link>
          <p className="eyebrow">{entry.eyebrow}</p>
          <h1>{entry.name}</h1>
          <p className="detail-hero__lead">{entry.description}</p>
          <div className="button-row">
            <FavoriteButton
              kind={entry.kind}
              slug={entry.slug}
              name={entry.name}
            />
            <Link className="button button--ghost button--small" to="/forja">
              Probar en la forja
            </Link>
          </div>
        </div>
        <aside
          className="detail-emblem"
          aria-label={`Resumen de ${entry.name}`}
        >
          <div className="detail-emblem__sigil" aria-hidden="true">
            <span>{entry.icon}</span>
          </div>
          <dl>
            {getFacts(entry).map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </header>

      <section className="highlights-strip" aria-label="Rasgos destacados">
        <div className="content-shell">
          {entry.highlights.map((highlight, index) => (
            <div key={highlight}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{highlight}</strong>
            </div>
          ))}
        </div>
      </section>

      <div className="content-shell">
        <ArticleSections sections={entry.sections} />
      </div>

      <section className="detail-next content-shell">
        <p className="eyebrow">Continúa la expedición</p>
        <h2>Convierte esta idea en una combinación inesperada.</h2>
        <Link className="button" to="/forja">
          Abrir Forja tu leyenda
        </Link>
      </section>
    </article>
  );
}
