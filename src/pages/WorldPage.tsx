import { Link, useSearchParams } from "react-router-dom";
import { WorldMap } from "../components/world/WorldMap";
import { WorldRegionPanel } from "../components/world/WorldRegionPanel";
import { findWorldRegion, worldRegions } from "../data/world";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function WorldPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selected = findWorldRegion(searchParams.get("region"));

  useDocumentMeta(
    "El mundo de Eryndor",
    "Explora los reinos, conflictos y lugares del continente original de Las Crónicas del Dragón.",
  );

  const selectRegion = (slug: string) => setSearchParams({ region: slug });

  return (
    <div className="world-page">
      <header className="world-hero content-shell reveal">
        <p className="eyebrow">Atlas de las Siete Llamas</p>
        <h1>Un continente escrito sobre cicatrices de dragón.</h1>
        <p>
          Eryndor prosperó bajo siete guardianes primordiales. Su guerra quebró
          el cielo, alteró la tierra y dejó seis territorios disputándose el
          significado de aquel legado.
        </p>
      </header>

      <section
        className="world-explorer content-shell"
        aria-labelledby="atlas-title"
      >
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Cartografía viva</p>
            <h2 id="atlas-title">Abre una región del atlas</h2>
          </div>
          <p>Las fronteras cambian. Las cicatrices permanecen.</p>
        </div>
        <div className="world-explorer__layout">
          <WorldMap
            regions={worldRegions}
            selectedSlug={selected.slug}
            onSelect={selectRegion}
          />
          <WorldRegionPanel region={selected} />
        </div>
        <div className="world-region-list" aria-label="Regiones de Eryndor">
          {worldRegions.map((region) => (
            <button
              key={region.slug}
              type="button"
              aria-pressed={region.slug === selected.slug}
              onClick={() => selectRegion(region.slug)}
            >
              {region.name}
            </button>
          ))}
        </div>
      </section>

      <section className="world-history content-shell">
        <p className="eyebrow">Año 614 de la Ceniza</p>
        <h2>La Guerra de las Siete Llamas nunca terminó del todo.</h2>
        <p>
          Los relatos oficiales aseguran que los dragones primordiales se
          destruyeron entre sí. Las ruinas, los presagios y las nuevas grietas
          sostienen una versión menos cómoda: algo sobrevivió bajo Eryndor.
        </p>
      </section>

      <section className="world-next content-shell">
        <p className="eyebrow">Tu lugar en el mapa</p>
        <h2>Elige quién cruzará estas fronteras.</h2>
        <div className="button-row">
          <Link className="button" to="/forja">
            Forjar personaje
          </Link>
          <Link className="button button--ghost" to="/clases">
            Explorar clases
          </Link>
        </div>
      </section>
    </div>
  );
}
