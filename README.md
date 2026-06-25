# Crónicas del Dragón

Portfolio frontend editorial e interactivo construido con React y TypeScript. El proyecto transforma un sitio HTML heredado en una ventana al worldbuilding original de **Las Crónicas del Dragón**, con un atlas explorable y herramientas para crear personajes.

![Portada de Crónicas del Dragón](docs/screenshots/inicio-desktop.png)

## Qué demuestra

- Arquitectura por componentes y rutas con carga diferida.
- Datos tipados separados de la presentación.
- Estado del atlas, búsqueda y filtros sincronizados con la URL.
- Favoritos y combinaciones persistentes mediante `localStorage` versionado.
- Diseño responsive desde 320 px, navegación por teclado y movimiento reducido.
- Pruebas unitarias, de componentes, accesibilidad automática y recorridos E2E.
- Worldbuilding y cartografía originales, junto a contenido de reglas apoyado en el SRD 5.2.1.

## Experiencia

La aplicación incluye:

- Inicio editorial que presenta el mundo de Eryndor y sus herramientas de creación.
- **Atlas de Eryndor** en `/mundo`, con un mapa original y seis territorios seleccionables.
- Fichas de región con capital, pueblos, identidad, conflicto y lugares destacados.
- Enlaces compartibles como `/mundo?region=sylvaran`, con recuperación segura ante parámetros desconocidos.
- Introducción al ritmo de una partida de rol.
- Catálogos completos de 12 clases y 9 especies del SRD.
- Fichas individuales con capítulos plegables y navegación interna.
- Favoritos persistentes.
- **Forja tu leyenda**, un generador que combina clase y especie, permite bloquear elecciones y guardar resultados.
- Redirección de `/razas` a la nomenclatura actual `/especies` y página 404.

![Forja tu leyenda](docs/screenshots/forja-desktop.png)

## Stack

- Vite 8
- React 19
- TypeScript
- React Router
- CSS nativo con tokens, `clamp()`, `color-mix()` y diseño responsive
- Vitest, Testing Library y axe-core
- Playwright
- ESLint y Prettier

## Desarrollo

Requiere Node.js 22 o posterior.

```bash
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:4173`.

## Calidad

```bash
npm run format:check
npm run lint
npm test
npm run test:e2e
npm run build
```

El build de producción queda en `dist/`. Al usar `BrowserRouter`, un hosting estático debe redirigir las rutas desconocidas a `index.html`.

## Despliegue en Vercel

El repositorio incluye `vercel.json` para que las rutas de React Router, como `/mundo` o `/clases/barbaro`, funcionen también al abrirlas o recargarlas directamente.

1. Sube los últimos cambios a GitHub:

   ```bash
   git push origin master
   ```

2. Entra en [vercel.com/new](https://vercel.com/new) e inicia sesión con GitHub.
3. Importa el repositorio `jjimealf/Proyecto-Web`.
4. Comprueba la configuración detectada:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Pulsa **Deploy**.

Vercel proporcionará una dirección del tipo `https://proyecto-web.vercel.app`. Cada nuevo `push` a la rama de producción generará automáticamente una nueva versión.

Para usar un dominio propio, abre el proyecto en Vercel y entra en **Settings → Domains**.

## Arquitectura

```text
src/
├── assets/       # Cartografía e imágenes de la aplicación
├── components/   # UI reutilizable, navegación, lectura y atlas
├── context/      # Estado global de favoritos
├── data/         # Catálogos y lore tipados
├── hooks/        # Metadatos por ruta
├── pages/        # Rutas cargadas bajo demanda
├── styles/       # Sistema visual completo
├── test/         # Configuración de pruebas
├── types/        # Contratos públicos del dominio
└── utils/        # Filtros, persistencia y generador
```

El lore de Eryndor se define en `src/data/world.ts`; los componentes interactivos del atlas viven en `src/components/world/`. El sitio anterior se conserva en `legacy/` para documentar la evolución y no participa en el build moderno.

## Accesibilidad

- Enlace para saltar al contenido.
- Orden semántico de encabezados y landmarks.
- Controles con nombre accesible y estados `aria-expanded`/`aria-pressed`.
- Mapa decorativo acompañado por controles y contenido equivalente en HTML.
- Lista alternativa de regiones para pantallas pequeñas y tecnologías de asistencia.
- Foco visible y objetivos táctiles amplios.
- Navegación móvil operable con teclado y cierre mediante `Escape`.
- Soporte de `prefers-reduced-motion`.
- Contraste y jerarquía pensados para WCAG 2.2 AA.

## Contenido y atribución

Eryndor, sus regiones, conflictos, lugares y textos de ambientación son contenido original de este proyecto. Los conceptos de reglas se apoyan en el **System Reference Document 5.2.1**.

This work includes material from the System Reference Document 5.2.1 ("SRD 5.2.1") by Wizards of the Coast LLC, available at [D&D Beyond](https://www.dndbeyond.com/srd). The SRD 5.2.1 is licensed under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

Crónicas del Dragón es un proyecto de portfolio gratuito y no está afiliado, respaldado ni patrocinado por Wizards of the Coast.

El mapa de Eryndor es una ilustración original generada para el proyecto y complementada con controles HTML accesibles. El resto del sistema visual utiliza principalmente CSS y SVG propios. Las imágenes del sitio anterior permanecen aisladas en `legacy/` y no participan en el build.

## Estado

La aplicación está preparada para ejecución local y despliegue estático con fallback de SPA. El workflow de GitHub Actions ejecuta formato, lint, pruebas unitarias, recorridos E2E y build de producción.
