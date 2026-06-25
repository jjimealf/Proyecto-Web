# Eryndor World Atlas Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an accessible `/mundo` section that presents the original continent of Eryndor through an illustrated interactive map and six shareable region profiles.

**Architecture:** Keep lore as typed static data, render the map and profile as focused presentational components, and let `WorldPage` own URL-backed selection through `useSearchParams`. The generated map remains decorative while HTML controls and content provide all names and information.

**Tech Stack:** React 19, TypeScript 6, React Router 7, native CSS, Vitest, Testing Library, Playwright, built-in image generation.

**Design reference:** `docs/plans/2026-06-25-eryndor-worldbuilding-design.md`

---

## Chunk 1: Domain and interactive page

### Task 1: Define the world domain and lore

**Files:**

- Modify: `src/types/content.ts`
- Create: `src/data/world.ts`
- Create: `src/data/world.test.ts`

- [ ] **Step 1: Write the failing data contract test**

Create `src/data/world.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { defaultWorldRegion, findWorldRegion, worldRegions } from "./world";

describe("world data", () => {
  it("defines six uniquely addressable regions", () => {
    expect(worldRegions).toHaveLength(6);
    expect(new Set(worldRegions.map(({ slug }) => slug)).size).toBe(6);
  });

  it("falls back to Valdoria for an unknown slug", () => {
    expect(defaultWorldRegion.slug).toBe("valdoria");
    expect(findWorldRegion("territorio-inexistente")).toBe(defaultWorldRegion);
  });
});
```

- [ ] **Step 2: Run the test and verify failure**

Run: `npm test -- src/data/world.test.ts`

Expected: FAIL because `src/data/world.ts` does not exist.

- [ ] **Step 3: Add world types**

Append to `src/types/content.ts`:

```ts
export type MapPosition = {
  x: number;
  y: number;
};

export type WorldLandmark = {
  name: string;
  description: string;
};

export type WorldRegion = {
  slug: string;
  name: string;
  epithet: string;
  capital: string;
  peoples: string;
  color: string;
  summary: string;
  identity: string;
  conflict: string;
  mapPosition: MapPosition;
  landmarks: WorldLandmark[];
};
```

- [ ] **Step 4: Create all six regions**

Create `src/data/world.ts` exporting `worldRegions`, `defaultWorldRegion`, and `findWorldRegion`. Use these exact region identities:

```ts
import type { WorldRegion } from "../types/content";

export const worldRegions: WorldRegion[] = [
  {
    slug: "valdoria",
    name: "Valdoria",
    epithet: "El reino de los estandartes rotos",
    capital: "Rocagrís",
    peoples: "Humanos, medianos y linajes fronterizos",
    color: "#c98252",
    summary:
      "Una corona antigua sostiene una red de fortalezas levantadas sobre huesos de dragón.",
    identity:
      "Caballería juramentada, ciudades amuralladas y casas nobles que convierten la memoria en ley.",
    conflict:
      "La reina agoniza sin heredero reconocido mientras tres casas buscan el Trono de Ceniza.",
    mapPosition: { x: 48, y: 48 },
    landmarks: [
      {
        name: "Rocagrís",
        description: "Capital escalonada alrededor del cráter de un dragón.",
      },
      {
        name: "La Calzada de Bronce",
        description: "Ruta militar cuyos mojones todavía arden al anochecer.",
      },
      {
        name: "Fuerte Último",
        description: "Bastión que vigila la frontera corrompida del este.",
      },
    ],
  },
  {
    slug: "sylvaran",
    name: "Sylvaran",
    epithet: "El bosque que recuerda",
    capital: "Lethariel",
    peoples: "Elfos, gnomos y guardianes feéricos",
    color: "#7f9d68",
    summary:
      "Un bosque consciente guarda pactos más antiguos que los reinos mortales.",
    identity:
      "Ciudades vivas, senderos cambiantes y una magia natural que responde a canciones y promesas.",
    conflict:
      "El Corazón Verde despierta de forma violenta y expulsa incluso a sus antiguos custodios.",
    mapPosition: { x: 31, y: 35 },
    landmarks: [
      {
        name: "Lethariel",
        description: "Ciudad suspendida entre las copas de árboles milenarios.",
      },
      {
        name: "El Lago Espejado",
        description: "Sus aguas muestran recuerdos en lugar de reflejos.",
      },
      {
        name: "La Herida Blanca",
        description: "Claro petrificado por una llama dracónica sin calor.",
      },
    ],
  },
  {
    slug: "khar-durak",
    name: "Khar-Dûrak",
    epithet: "Las montañas de la forja eterna",
    capital: "Dûr Karag",
    peoples: "Enanos, gigantes de piedra y clanes del subsuelo",
    color: "#a88f70",
    summary:
      "Fortalezas excavadas en una cordillera donde todavía late fuego primordial.",
    identity:
      "Forjas rúnicas, archivos tallados en roca y juramentos que pasan de una generación a otra.",
    conflict:
      "Algo bajo la Forja Primera imita las voces de los antepasados y exige que abran las puertas.",
    mapPosition: { x: 57, y: 25 },
    landmarks: [
      {
        name: "Dûr Karag",
        description:
          "Capital subterránea construida alrededor de un río de magma.",
      },
      {
        name: "Los Picos Coronados",
        description: "Siete cumbres unidas por puentes imposibles.",
      },
      {
        name: "La Puerta Sin Nombre",
        description: "Umbral sellado que no figura en ningún registro real.",
      },
    ],
  },
  {
    slug: "nhal-zareth",
    name: "Nhal-Zareth",
    epithet: "La cicatriz de las Siete Llamas",
    capital: "Ninguna",
    peoples: "Exiliados, dracónidos y criaturas alteradas",
    color: "#a64d47",
    summary:
      "Una extensión de vidrio negro, tormentas rojas y ruinas que se desplazan durante la noche.",
    identity:
      "Enclaves nómadas sobreviven entre restos de imperios y fenómenos mágicos impredecibles.",
    conflict:
      "Las siete calderas volcánicas vuelven a encenderse siguiendo un patrón que parece una llamada.",
    mapPosition: { x: 72, y: 48 },
    landmarks: [
      {
        name: "La Ciudad Invertida",
        description: "Ruinas que cuelgan bajo una grieta abierta en el cielo.",
      },
      {
        name: "El Mar de Vidrio",
        description:
          "Llanura fundida donde permanecen sombras de antiguos ejércitos.",
      },
      {
        name: "La Séptima Caldera",
        description: "Volcán cuyo interior emite palabras en lengua dracónica.",
      },
    ],
  },
  {
    slug: "aurelia",
    name: "Aurelia",
    epithet: "El imperio sobre las nubes",
    capital: "Solaria",
    peoples: "Humanos, altos elfos y linajes tocados por la magia",
    color: "#d2ad62",
    summary:
      "Un imperio arcano gobierna desde una capital flotante alimentada por un sol cautivo.",
    identity:
      "Academias de magia, caminos celestes y una burocracia que registra cada hechizo autorizado.",
    conflict:
      "El sol cautivo pierde intensidad y el Senado oculta cuánto tiempo puede mantenerse Solaria en el aire.",
    mapPosition: { x: 65, y: 69 },
    landmarks: [
      {
        name: "Solaria",
        description:
          "Capital flotante rodeada por anillos de navegación arcana.",
      },
      {
        name: "La Escalera del Cielo",
        description:
          "Torre incompleta que intenta alcanzar la ciudad desde tierra.",
      },
      {
        name: "Observatorio de Ilyr",
        description: "Archivo astral que registra estrellas desaparecidas.",
      },
    ],
  },
  {
    slug: "marcas-libres",
    name: "Las Marcas Libres",
    epithet: "La costa sin corona",
    capital: "Puerto Bruma",
    peoples: "Comunidades mezcladas de todo Eryndor",
    color: "#4f8c91",
    summary:
      "Puertos independientes convierten comercio, secretos y aventuras en una forma de gobierno.",
    identity:
      "Capitanes electos, gremios rivales y compañías que cartografían aquello que los reinos prefieren ignorar.",
    conflict:
      "Barcos sin tripulación llegan desde el oeste con mapas de un continente que no debería existir.",
    mapPosition: { x: 27, y: 68 },
    landmarks: [
      {
        name: "Puerto Bruma",
        description:
          "Ciudad libre construida sobre puentes, pilotes y barcos encallados.",
      },
      {
        name: "Las Agujas de Sal",
        description: "Islas verticales usadas como faros y fortalezas piratas.",
      },
      {
        name: "El Faro Muerto",
        description: "Una luz submarina señala rutas hacia mares desconocidos.",
      },
    ],
  },
];

export const defaultWorldRegion = worldRegions[0];

export function findWorldRegion(slug: string | null | undefined) {
  return (
    worldRegions.find((region) => region.slug === slug) ?? defaultWorldRegion
  );
}
```

- [ ] **Step 5: Run the data test**

Run: `npm test -- src/data/world.test.ts`

Expected: PASS, 2 tests.

- [ ] **Step 6: Commit the domain layer**

```bash
git add src/types/content.ts src/data/world.ts src/data/world.test.ts
git commit -m "feat: define Eryndor world lore"
```

### Task 2: Build the accessible map component

**Files:**

- Create: `src/components/world/WorldMap.tsx`
- Create: `src/components/world/WorldMap.test.tsx`
- Asset consumed later: `src/assets/eryndor-map.png`

- [ ] **Step 1: Write failing component tests**

Create `src/components/world/WorldMap.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { worldRegions } from "../../data/world";
import { WorldMap } from "./WorldMap";

describe("WorldMap", () => {
  it("exposes all six regions as accessible controls", () => {
    render(
      <WorldMap
        regions={worldRegions}
        selectedSlug="valdoria"
        onSelect={() => undefined}
      />,
    );

    expect(screen.getAllByRole("button", { name: /Explorar/ })).toHaveLength(6);
    expect(
      screen.getByRole("button", { name: "Explorar Valdoria" }),
    ).toHaveAttribute("aria-pressed", "true");
  });

  it("reports the selected region", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(
      <WorldMap
        regions={worldRegions}
        selectedSlug="valdoria"
        onSelect={onSelect}
      />,
    );

    await user.click(screen.getByRole("button", { name: "Explorar Sylvaran" }));

    expect(onSelect).toHaveBeenCalledWith("sylvaran");
  });
});
```

- [ ] **Step 2: Run and verify failure**

Run: `npm test -- src/components/world/WorldMap.test.tsx`

Expected: FAIL because `WorldMap` does not exist.

- [ ] **Step 3: Implement the map**

Create `src/components/world/WorldMap.tsx`:

```tsx
import mapImage from "../../assets/eryndor-map.png";
import type { WorldRegion } from "../../types/content";

type WorldMapProps = {
  regions: WorldRegion[];
  selectedSlug: string;
  onSelect: (slug: string) => void;
};

export function WorldMap({ regions, selectedSlug, onSelect }: WorldMapProps) {
  return (
    <div className="world-map">
      <div className="world-map__canvas">
        <img
          src={mapImage}
          alt=""
          className="world-map__image"
          aria-hidden="true"
        />
        {regions.map((region) => (
          <button
            key={region.slug}
            type="button"
            className="world-map__marker"
            style={
              {
                "--marker-color": region.color,
                left: `${region.mapPosition.x}%`,
                top: `${region.mapPosition.y}%`,
              } as React.CSSProperties
            }
            aria-label={`Explorar ${region.name}`}
            aria-pressed={region.slug === selectedSlug}
            onClick={() => onSelect(region.slug)}
          >
            <span aria-hidden="true" />
            <strong>{region.name}</strong>
          </button>
        ))}
      </div>
      <p className="world-map__hint">
        Selecciona un territorio para abrir su crónica.
      </p>
    </div>
  );
}
```

If TypeScript requires the namespace import, add `import type { CSSProperties } from "react"` and cast to `CSSProperties` instead of `React.CSSProperties`.

- [ ] **Step 4: Add a temporary asset for the test/build**

Use a small valid placeholder PNG only until Task 4 generates the final map. Save it at `src/assets/eryndor-map.png`; do not commit the placeholder separately.

- [ ] **Step 5: Run the component tests**

Run: `npm test -- src/components/world/WorldMap.test.tsx`

Expected: PASS, 2 tests.

- [ ] **Step 6: Commit the component with the final asset deferred**

Do not commit until Task 4 replaces the placeholder. Keep this work staged locally or combine its commit with Task 4.

### Task 3: Build the URL-backed world page

**Files:**

- Create: `src/components/world/WorldRegionPanel.tsx`
- Create: `src/pages/WorldPage.tsx`
- Create: `src/pages/WorldPage.test.tsx`

- [ ] **Step 1: Write failing page tests**

Create `src/pages/WorldPage.test.tsx` with a location probe:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import { describe, expect, it } from "vitest";
import WorldPage from "./WorldPage";

function LocationProbe() {
  return <output data-testid="location">{useLocation().search}</output>;
}

function renderPage(initialEntry = "/mundo") {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>
        <Route
          path="/mundo"
          element={
            <>
              <WorldPage />
              <LocationProbe />
            </>
          }
        />
      </Routes>
    </MemoryRouter>,
  );
}

describe("WorldPage", () => {
  it("uses Valdoria for an unknown region", () => {
    renderPage("/mundo?region=desconocida");

    expect(
      screen.getByRole("heading", { name: "Valdoria" }),
    ).toBeInTheDocument();
  });

  it("updates the profile and URL when a region is selected", async () => {
    const user = userEvent.setup();
    renderPage();

    await user.click(screen.getByRole("button", { name: "Explorar Sylvaran" }));

    expect(
      screen.getByRole("heading", { name: "Sylvaran" }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("location")).toHaveTextContent(
      "?region=sylvaran",
    );
  });
});
```

- [ ] **Step 2: Run and verify failure**

Run: `npm test -- src/pages/WorldPage.test.tsx`

Expected: FAIL because `WorldPage` and `WorldRegionPanel` do not exist.

- [ ] **Step 3: Implement the region panel**

Create `src/components/world/WorldRegionPanel.tsx`. It must:

- Render an `article` with `aria-live="polite"`.
- Expose the region name as an `h2`.
- Render epithet, summary, capital, peoples, identity, conflict, and all three landmarks.
- Set `--region-color` from `region.color`.
- Use a definition list for capital and peoples.

Suggested signature:

```tsx
import type { CSSProperties } from "react";
import type { WorldRegion } from "../../types/content";

export function WorldRegionPanel({ region }: { region: WorldRegion }) {
  return (
    <article
      className="world-region"
      aria-live="polite"
      style={{ "--region-color": region.color } as CSSProperties}
    >
      {/* Complete semantic profile using the fields listed above. */}
    </article>
  );
}
```

- [ ] **Step 4: Implement the page and URL state**

Create `src/pages/WorldPage.tsx`:

```tsx
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

  const selectRegion = (slug: string) => {
    setSearchParams({ region: slug });
  };

  return (
    <div className="world-page">
      <header className="world-hero content-shell">
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
        <div className="section-heading">
          <p className="eyebrow">Cartografía viva</p>
          <h2 id="atlas-title">Abre una región del atlas</h2>
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
```

- [ ] **Step 5: Run page and map tests**

Run: `npm test -- src/pages/WorldPage.test.tsx src/components/world/WorldMap.test.tsx`

Expected: PASS, 4 tests.

- [ ] **Step 6: Commit the page logic after the final map asset exists**

Defer the commit until Task 4 so no placeholder asset enters history.

## Chunk 2: Art direction and application integration

### Task 4: Generate and integrate the original Eryndor map

**Skills:** `@imagegen`, then `@frontend-design`

**Files:**

- Replace/create: `src/assets/eryndor-map.png`
- Modify: `src/styles/index.css`
- Include uncommitted files from Tasks 2-3.

- [ ] **Step 1: Generate the map with the built-in image tool**

Use this production prompt:

```text
Use case: stylized-concept
Asset type: responsive interactive fantasy world map for a dark editorial website
Primary request: create an entirely original top-down map of Eryndor, one large continent divided visually into six distinct territories
Scene/backdrop: aged dark parchment map filling the frame, surrounded by a restrained ocean and a few small coastal islands
Subject: a coherent continent with northwestern enchanted forest, northern mountain range, central-western fertile fortified kingdom, eastern volcanic corrupted wasteland, southeastern luminous arcane territory, and southwestern free coastal ports
Style/medium: hand-inked antique cartography, engraved relief, fine contour hatching, subtle watercolor washes, premium fantasy atlas
Composition/framing: landscape 3:2, full continent visible with generous ocean margin; readable silhouettes at desktop and mobile sizes
Lighting/mood: ancient, solemn, mysterious; a world shaped by dragon wars
Color palette: charcoal, burnt umber, muted moss, tarnished gold, oxidized teal, restrained crimson
Materials/textures: parchment fibers, inked mountains, forests, rivers, coastlines, compass rose, faint dragon-flight routes
Constraints: no labels, no letters, no words, no UI, no flags, no existing franchise geography, no watermark; six regions must have clear visual identities without hard modern borders
Avoid: photorealism, satellite view, bright generic game-map colors, excessive icons, illegible clutter
```

- [ ] **Step 2: Inspect the generated image**

Verify:

- One continent is fully visible.
- Six visual zones align roughly with the `mapPosition` coordinates.
- No accidental text, labels, watermark, or recognizable copyrighted geography.
- Details survive at approximately 390 px wide.

If one criterion fails, regenerate once with only the failed criterion clarified.

- [ ] **Step 3: Copy the final asset into the project**

Save the selected built-in output as `src/assets/eryndor-map.png`. Do not leave the consuming code pointing at `$CODEX_HOME/generated_images`.

- [ ] **Step 4: Implement the atlas visual system**

Append a dedicated `/* World atlas */` section before the existing `/* Favorites */` block in `src/styles/index.css`. Define:

- `.world-page`: overflow containment and atmospheric radial background.
- `.world-hero`: editorial spacing, max-width, and a large balanced heading.
- `.world-explorer`: vertical rhythm.
- `.world-explorer__layout`: two-column grid (`minmax(0, 1.35fr) minmax(19rem, 0.65fr)`).
- `.world-map`: framed parchment container with layered border and shadow.
- `.world-map__canvas`: `position: relative; aspect-ratio: 3 / 2;`.
- `.world-map__image`: full-size `object-fit: cover`, darkened slightly for label contrast.
- `.world-map__marker`: absolute translated buttons using `--marker-color`; minimum 44 px target.
- selected marker: larger ring, brighter label, and restrained pulse.
- `.world-region`: raised dark panel accented by `--region-color`.
- `.world-region__facts`: two-column definition list.
- `.world-region__landmarks`: stacked cards or ruled entries.
- `.world-region-list`: wrapped button fallback, visible at every width.
- `.world-history`: dramatic bordered editorial section.
- `.world-next`: centered closing call to action.

Add responsive rules:

- At `max-width: 54rem`, stack map and profile.
- At `max-width: 39rem`, hide marker text but keep accessible marker buttons; use the region list for readable names.
- Preserve minimum 44 px controls.
- Add no animation outside existing reduced-motion safeguards.

- [ ] **Step 5: Format and run focused tests**

Run:

```bash
npm run format
npm test -- src/components/world/WorldMap.test.tsx src/pages/WorldPage.test.tsx
npm run build
```

Expected: all commands PASS and `dist/` builds with the map asset.

- [ ] **Step 6: Commit the atlas experience**

```bash
git add src/assets/eryndor-map.png src/components/world src/pages/WorldPage.tsx src/pages/WorldPage.test.tsx src/styles/index.css
git commit -m "feat: add interactive Eryndor atlas"
```

### Task 5: Add routing, navigation, and homepage entry points

**Files:**

- Modify: `src/App.tsx:8-49`
- Modify: `src/components/Header.tsx:6-12`
- Modify: `src/components/Header.test.tsx`
- Modify: `src/components/Footer.tsx:11-22`
- Modify: `src/pages/HomePage.tsx:35-110`

- [ ] **Step 1: Extend the failing header test**

Add to `src/components/Header.test.tsx`:

```tsx
it("incluye el atlas del mundo en la navegación principal", () => {
  renderHeader();

  expect(screen.getByRole("link", { name: "Mundo" })).toHaveAttribute(
    "href",
    "/mundo",
  );
});
```

- [ ] **Step 2: Run and verify failure**

Run: `npm test -- src/components/Header.test.tsx`

Expected: FAIL because the Mundo link is absent.

- [ ] **Step 3: Register the lazy route**

In `src/App.tsx`, add:

```tsx
const WorldPage = lazy(() => import("./pages/WorldPage"));
```

Add `<Route path="mundo" element={<WorldPage />} />` immediately after the introduction route.

- [ ] **Step 4: Add navigation and footer links**

In `src/components/Header.tsx`, insert `{ to: "/mundo", label: "Mundo" }` after Inicio so it remains a primary destination.

In `src/components/Footer.tsx`:

- Change the brand copy to describe the site as “Un atlas de worldbuilding y una guía para crear héroes.”
- Add `<Link to="/mundo">Atlas de Eryndor</Link>` as the first footer link.

- [ ] **Step 5: Reframe the homepage as a worldbuilding portal**

In `src/pages/HomePage.tsx`:

- Update metadata to mention Eryndor and original worldbuilding.
- Change the eyebrow to `Atlas de Eryndor · Año 614 de la Ceniza`.
- Change the lead so the site introduces an original world plus tools for creating characters.
- Add a primary `Explorar el mundo` button to `/mundo`; retain `Forja tu leyenda` as secondary.
- Replace the `∞ historias` metric with `6 territorios`.
- Change the home intro heading to `¿Qué historia espera al otro lado del mapa?`.
- Point its text link to `/mundo` with copy `Abrir el atlas`.

Do not replace the existing decorative `AtlasVisual`; it now acts as a teaser for the complete map.

- [ ] **Step 6: Run tests and build**

Run:

```bash
npm test -- src/components/Header.test.tsx src/pages/WorldPage.test.tsx
npm run build
```

Expected: PASS.

- [ ] **Step 7: Commit application integration**

```bash
git add src/App.tsx src/components/Header.tsx src/components/Header.test.tsx src/components/Footer.tsx src/pages/HomePage.tsx
git commit -m "feat: make Eryndor a primary destination"
```

## Chunk 3: Browser coverage and final verification

### Task 6: Cover the atlas journey end to end

**Files:**

- Modify: `tests/e2e/app.spec.ts`

- [ ] **Step 1: Add the E2E journey**

Append:

```ts
test("explora Eryndor y comparte una región mediante la URL", async ({
  page,
}) => {
  await page.goto("/");
  await openMobileNavigation(page);
  await page.getByRole("link", { name: "Mundo", exact: true }).click();

  await expect(page).toHaveURL(/\/mundo$/);
  await expect(
    page.getByRole("heading", {
      name: /Un continente escrito sobre cicatrices de dragón/i,
    }),
  ).toBeVisible();

  await page.getByRole("button", { name: "Explorar Sylvaran" }).click();

  await expect(page).toHaveURL(/region=sylvaran/);
  await expect(page.getByRole("heading", { name: "Sylvaran" })).toBeVisible();

  await page.reload();
  await expect(page.getByRole("heading", { name: "Sylvaran" })).toBeVisible();
});
```

- [ ] **Step 2: Run the E2E test**

Run:

```bash
npx playwright test tests/e2e/app.spec.ts --grep "explora Eryndor"
```

Expected: PASS in desktop Chrome and mobile Chrome.

- [ ] **Step 3: Commit browser coverage**

```bash
git add tests/e2e/app.spec.ts
git commit -m "test: cover Eryndor atlas journey"
```

### Task 7: Run the complete quality gate and review output

**Files:**

- Review only: all files changed in Tasks 1-6
- Preserve: untracked `AGENTS.md` unless the user separately requests its commit

- [ ] **Step 1: Run formatting verification**

Run: `npm run format:check`

Expected: PASS with no unformatted files.

- [ ] **Step 2: Run lint**

Run: `npm run lint`

Expected: PASS with zero warnings.

- [ ] **Step 3: Run all unit and component tests**

Run: `npm test`

Expected: PASS.

- [ ] **Step 4: Run all browser tests**

Run: `npm run test:e2e`

Expected: PASS in both configured Playwright projects.

- [ ] **Step 5: Build production output**

Run: `npm run build`

Expected: PASS and a refreshed `dist/`.

- [ ] **Step 6: Inspect the map at responsive sizes**

Run: `npm run dev -- --host 127.0.0.1`

Check `/mundo` at approximately:

- 1440 × 900: map and profile side by side.
- 768 × 1024: stacked layout with readable markers.
- 390 × 844: touch targets remain usable; region list provides all names.

Also verify keyboard traversal, visible focus, URL updates, direct reload of `?region=...`, and reduced-motion behavior.

- [ ] **Step 7: Review repository state**

Run: `git status --short`

Expected: only intentional changes remain. `AGENTS.md` may still appear untracked from the earlier contributor-guide task; do not include it in atlas commits without explicit scope.
