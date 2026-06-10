import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { D20Mark } from "../components/D20Mark";
import { classes } from "../data/classes";
import { species } from "../data/species";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import type { ForgeResult } from "../types/content";
import { createForgeResult, describeAffinity } from "../utils/forge";
import { forgeStorage } from "../utils/storage";

export default function ForgePage() {
  useDocumentMeta(
    "Forja tu leyenda",
    "Genera combinaciones de clase y especie, bloquea tus elecciones favoritas y guarda semillas para nuevos personajes.",
  );

  const [current, setCurrent] = useState<ForgeResult>(() =>
    createForgeResult(classes, species),
  );
  const [classLocked, setClassLocked] = useState(false);
  const [speciesLocked, setSpeciesLocked] = useState(false);
  const [rolling, setRolling] = useState(false);
  const [saved, setSaved] = useState<ForgeResult[]>(() => forgeStorage.read());

  useEffect(() => {
    forgeStorage.write(saved);
  }, [saved]);

  const classEntry = classes.find((entry) => entry.slug === current.classSlug)!;
  const speciesEntry = species.find(
    (entry) => entry.slug === current.speciesSlug,
  )!;
  const affinity = useMemo(
    () => describeAffinity(classEntry, speciesEntry),
    [classEntry, speciesEntry],
  );

  const roll = () => {
    setRolling(true);
    setCurrent((value) =>
      createForgeResult(classes, species, value, {
        classLocked,
        speciesLocked,
      }),
    );
    window.setTimeout(() => setRolling(false), 520);
  };

  const saveCurrent = () => {
    setSaved((items) => {
      const duplicate = items.some(
        (item) =>
          item.classSlug === current.classSlug &&
          item.speciesSlug === current.speciesSlug,
      );
      return duplicate ? items : [current, ...items].slice(0, 8);
    });
  };

  return (
    <div className="forge-page">
      <header className="forge-header content-shell">
        <p className="eyebrow">El azar abre caminos</p>
        <h1>Forja tu leyenda</h1>
        <p>
          Lanza el dado para combinar dos legados. Bloquea la mitad que te
          inspire y sigue buscando hasta que aparezca una historia.
        </p>
      </header>

      <section className="forge-workbench content-shell" aria-live="polite">
        <article
          className={`forge-card${speciesLocked ? " is-locked" : ""}`}
          style={{ "--entry-color": speciesEntry.color } as React.CSSProperties}
        >
          <div className="forge-card__heading">
            <span>Especie</span>
            <button
              type="button"
              aria-pressed={speciesLocked}
              onClick={() => setSpeciesLocked((value) => !value)}
            >
              <span aria-hidden="true">{speciesLocked ? "◆" : "◇"}</span>
              {speciesLocked ? "Bloqueada" : "Bloquear"}
            </button>
          </div>
          <div className="forge-card__sigil" aria-hidden="true">
            {speciesEntry.icon}
          </div>
          <p className="eyebrow">{speciesEntry.eyebrow}</p>
          <h2>{speciesEntry.name}</h2>
          <p>{speciesEntry.summary}</p>
          <Link className="text-link" to={`/especies/${speciesEntry.slug}`}>
            Leer especie <span aria-hidden="true">↗</span>
          </Link>
        </article>

        <div className={`forge-die${rolling ? " is-rolling" : ""}`}>
          <D20Mark label="20" large />
          <button className="button" type="button" onClick={roll}>
            Volver a lanzar
          </button>
        </div>

        <article
          className={`forge-card${classLocked ? " is-locked" : ""}`}
          style={{ "--entry-color": classEntry.color } as React.CSSProperties}
        >
          <div className="forge-card__heading">
            <span>Clase</span>
            <button
              type="button"
              aria-pressed={classLocked}
              onClick={() => setClassLocked((value) => !value)}
            >
              <span aria-hidden="true">{classLocked ? "◆" : "◇"}</span>
              {classLocked ? "Bloqueada" : "Bloquear"}
            </button>
          </div>
          <div className="forge-card__sigil" aria-hidden="true">
            {classEntry.icon}
          </div>
          <p className="eyebrow">{classEntry.eyebrow}</p>
          <h2>{classEntry.name}</h2>
          <p>{classEntry.summary}</p>
          <Link className="text-link" to={`/clases/${classEntry.slug}`}>
            Leer clase <span aria-hidden="true">↗</span>
          </Link>
        </article>
      </section>

      <section className="forge-result content-shell">
        <div>
          <p className="eyebrow">Semilla de personaje</p>
          <h2>
            {speciesEntry.name} · {classEntry.name}
          </h2>
          <p>{affinity}</p>
        </div>
        <button
          className="button button--ghost"
          type="button"
          onClick={saveCurrent}
        >
          Guardar combinación
        </button>
      </section>

      {saved.length ? (
        <section className="saved-forges content-shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Anotaciones del destino</p>
              <h2>Combinaciones guardadas</h2>
            </div>
            <button
              className="quiet-button"
              type="button"
              onClick={() => setSaved([])}
            >
              Borrar todas
            </button>
          </div>
          <div className="saved-forges__grid">
            {saved.map((item) => {
              const savedClass = classes.find(
                (entry) => entry.slug === item.classSlug,
              );
              const savedSpecies = species.find(
                (entry) => entry.slug === item.speciesSlug,
              );
              if (!savedClass || !savedSpecies) return null;
              return (
                <article key={item.id}>
                  <span aria-hidden="true">{savedSpecies.icon}</span>
                  <div>
                    <h3>
                      {savedSpecies.name} · {savedClass.name}
                    </h3>
                    <p>
                      {savedSpecies.highlights[0]} + {savedClass.highlights[0]}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label={`Eliminar ${savedSpecies.name} ${savedClass.name}`}
                    onClick={() =>
                      setSaved((items) =>
                        items.filter((savedItem) => savedItem.id !== item.id),
                      )
                    }
                  >
                    ×
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      ) : null}
    </div>
  );
}
