import { Link } from "react-router-dom";
import { CatalogCard } from "../components/CatalogCard";
import { D20Mark } from "../components/D20Mark";
import { classes } from "../data/classes";
import { species } from "../data/species";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

function AtlasVisual() {
  return (
    <div className="atlas-visual" aria-hidden="true">
      <div className="atlas-visual__orbit atlas-visual__orbit--one" />
      <div className="atlas-visual__orbit atlas-visual__orbit--two" />
      <div className="atlas-visual__orbit atlas-visual__orbit--three" />
      <svg viewBox="0 0 520 520">
        <path d="M65 294c49-43 67-113 121-151 48-34 96-12 133-46 37-33 75-44 125-19" />
        <path d="M56 326c80 8 107 72 187 69 72-3 101-65 184-57" />
        <path d="M137 83c23 61-9 103 19 151 25 43 77 54 101 98 23 41 9 76-7 115" />
        <circle cx="186" cy="143" r="7" />
        <circle cx="319" cy="97" r="7" />
        <circle cx="257" cy="332" r="7" />
        <circle cx="427" cy="338" r="7" />
        <circle cx="65" cy="294" r="7" />
      </svg>
      <div className="atlas-visual__die">
        <D20Mark label="20" large />
      </div>
      <span className="atlas-label atlas-label--north">N</span>
      <span className="atlas-label atlas-label--east">E</span>
      <span className="atlas-label atlas-label--south">S</span>
      <span className="atlas-label atlas-label--west">O</span>
    </div>
  );
}

export default function HomePage() {
  useDocumentMeta(
    "Crónicas del Dragón",
    "Explora Eryndor, un mundo fantástico original, y crea héroes para recorrer sus reinos y cicatrices dracónicas.",
  );

  const featuredEntries = [classes[0], species[1], classes[8]].filter(Boolean);

  return (
    <>
      <section className="hero-section">
        <div className="hero-section__copy reveal">
          <p className="eyebrow">Atlas de Eryndor · Año 614 de la Ceniza</p>
          <h1>
            Toda leyenda
            <span>empieza con una elección.</span>
          </h1>
          <p className="hero-section__lead">
            Un mundo original de reinos, magia y cicatrices dracónicas, junto a
            las herramientas para crear a quienes se atrevan a recorrerlo.
          </p>
          <div className="button-row">
            <Link className="button" to="/mundo">
              Explorar el mundo
            </Link>
            <Link className="button button--ghost" to="/forja">
              Forja tu leyenda
            </Link>
          </div>
          <dl className="hero-metrics">
            <div>
              <dt>12</dt>
              <dd>clases</dd>
            </div>
            <div>
              <dt>9</dt>
              <dd>especies</dd>
            </div>
            <div>
              <dt>6</dt>
              <dd>territorios</dd>
            </div>
          </dl>
        </div>
        <AtlasVisual />
      </section>

      <section className="marquee" aria-label="Principios de la guía">
        <div>
          <span>Imagina</span>
          <i aria-hidden="true">✦</i>
          <span>Elige</span>
          <i aria-hidden="true">✦</i>
          <span>Interpreta</span>
          <i aria-hidden="true">✦</i>
          <span>Aventúrate</span>
          <i aria-hidden="true">✦</i>
        </div>
      </section>

      <section className="home-intro content-shell">
        <div className="section-heading">
          <p className="eyebrow">Empieza por una pregunta</p>
          <h2>¿Qué historia espera al otro lado del mapa?</h2>
        </div>
        <div className="home-intro__copy">
          <p>
            La clase explica cómo resuelves el peligro. La especie aporta un
            legado físico y fantástico. Tu historia nace en el espacio entre
            ambas decisiones.
          </p>
          <Link className="text-link" to="/mundo">
            Abrir el atlas <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="featured-section content-shell">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Del archivo</p>
            <h2>Tres puertas de entrada</h2>
          </div>
          <p>
            Explora una selección o abre los catálogos para comparar todas las
            posibilidades.
          </p>
        </div>
        <div className="catalog-grid catalog-grid--featured">
          {featuredEntries.map((entry, index) => (
            <CatalogCard entry={entry} index={index} key={entry.slug} />
          ))}
        </div>
        <div className="split-actions">
          <Link className="archive-link" to="/clases">
            <span>01</span>
            <strong>Explorar clases</strong>
            <i aria-hidden="true">→</i>
          </Link>
          <Link className="archive-link" to="/especies">
            <span>02</span>
            <strong>Explorar especies</strong>
            <i aria-hidden="true">→</i>
          </Link>
        </div>
      </section>

      <section className="forge-callout content-shell">
        <div>
          <p className="eyebrow">Deja que decida el destino</p>
          <h2>Una tirada. Dos legados. Una historia por comenzar.</h2>
          <p>
            Bloquea la elección que te inspire, vuelve a lanzar el dado y guarda
            las combinaciones que merezcan llegar a la mesa.
          </p>
          <Link className="button" to="/forja">
            Lanzar el d20
          </Link>
        </div>
        <D20Mark label="?" large />
      </section>
    </>
  );
}
