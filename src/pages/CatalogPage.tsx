import { useDeferredValue } from "react";
import { useSearchParams } from "react-router-dom";
import { CatalogCard } from "../components/CatalogCard";
import { CatalogFilters } from "../components/CatalogFilters";
import { EmptyState } from "../components/EmptyState";
import { classAbilities, classes, classRoles } from "../data/classes";
import { species, speciesSizes, speciesTraits } from "../data/species";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { filterClasses, filterSpecies } from "../utils/catalog";

type CatalogPageProps = {
  type: "classes" | "species";
};

export default function CatalogPage({ type }: CatalogPageProps) {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") ?? "";
  const primary = params.get("grupo") ?? "";
  const secondary = params.get("rasgo") ?? "";
  const deferredQuery = useDeferredValue(query);
  const isClasses = type === "classes";

  const entries = isClasses
    ? filterClasses(classes, {
        query: deferredQuery,
        primary,
        secondary,
      })
    : filterSpecies(species, {
        query: deferredQuery,
        primary,
        secondary,
      });

  const title = isClasses ? "Clases" : "Especies";
  const description = isClasses
    ? "Compara las doce clases por función, característica principal y estilo de juego."
    : "Descubre las nueve especies del SRD y los rasgos fantásticos que aportan a un personaje.";

  useDocumentMeta(title, description);

  const updateParam = (key: string, value: string) => {
    setParams((current) => {
      const next = new URLSearchParams(current);
      if (value) next.set(key, value);
      else next.delete(key);
      return next;
    });
  };

  const primaryOptions = (isClasses ? classRoles : speciesSizes).map(
    (value) => ({ value, label: value }),
  );
  const secondaryOptions = (isClasses ? classAbilities : speciesTraits).map(
    (value) => ({ value, label: value }),
  );

  return (
    <>
      <header className="catalog-hero">
        <div className="content-shell">
          <p className="eyebrow">
            Archivo {isClasses ? "de vocaciones" : "de linajes"}
          </p>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="catalog-hero__note" aria-label="Consejo">
            <span aria-hidden="true">✦</span>
            <p>
              {isClasses
                ? "Busca primero una forma de actuar que te resulte divertida. La eficacia llegará después."
                : "Un legado ofrece capacidades, no una personalidad escrita de antemano."}
            </p>
          </div>
        </div>
      </header>

      <div className="catalog-page content-shell">
        <CatalogFilters
          query={query}
          primary={primary}
          secondary={secondary}
          primaryLabel={isClasses ? "Función" : "Tamaño"}
          secondaryLabel={isClasses ? "Característica" : "Rasgo"}
          primaryOptions={primaryOptions}
          secondaryOptions={secondaryOptions}
          resultCount={entries.length}
          onQueryChange={(value) => updateParam("q", value)}
          onPrimaryChange={(value) => updateParam("grupo", value)}
          onSecondaryChange={(value) => updateParam("rasgo", value)}
          onReset={() => setParams({})}
        />

        {entries.length ? (
          <section
            className="catalog-grid"
            aria-label={`Resultados del catálogo de ${title.toLocaleLowerCase("es")}`}
          >
            {entries.map((entry, index) => (
              <CatalogCard entry={entry} index={index} key={entry.slug} />
            ))}
          </section>
        ) : (
          <EmptyState
            title="Ninguna crónica coincide"
            description="Prueba con una palabra más amplia o limpia alguno de los filtros."
          />
        )}
      </div>
    </>
  );
}
