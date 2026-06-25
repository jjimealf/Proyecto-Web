# Diseño del atlas de Eryndor

## Objetivo

Convertir **Las Crónicas del Dragón** en una ventana al worldbuilding original del proyecto mediante una sección principal `/mundo`. La experiencia debe presentar un continente propio, ofrecer exploración accesible por regiones y mantener la estética editorial fantástica de la aplicación.

## Mundo y dirección artística

**Eryndor** es un gran continente moldeado por dragones primordiales y dividido tras la Guerra de las Siete Llamas. Combina fantasía medieval clásica, magia monumental y territorios corrompidos.

Sus seis regiones iniciales son:

- **Valdoria:** fortalezas humanas, caballería y disputas dinásticas.
- **Sylvaran:** bosque élfico atravesado por magia viva.
- **Khar-Dûrak:** montañas enanas, forjas y ciudades subterráneas.
- **Nhal-Zareth:** tierras devastadas por la guerra dracónica.
- **Aurelia:** imperio arcano alrededor de una ciudad flotante.
- **Las Marcas Libres:** puertos, comercio y compañías aventureras.

El mapa será una ilustración original de pergamino oscuro con relieve a tinta, fronteras discretas, rosa de los vientos y antiguas rutas dracónicas. Los nombres y controles se renderizarán en HTML, no dentro de la imagen.

## Experiencia e interfaz

La navegación principal incorporará **Mundo**. La página contendrá:

1. Una cabecera editorial que introduce Eryndor.
2. Un mapa ilustrado adaptable con seis zonas interactivas superpuestas.
3. Un panel de región con capital, población dominante, identidad, conflicto y lugares destacados.
4. Una lista alternativa de regiones para móvil y tecnologías de asistencia.
5. Una sección sobre la Guerra de las Siete Llamas.
6. Enlaces hacia los catálogos y la forja de personajes.

La región seleccionada se sincronizará con la URL, por ejemplo `/mundo?region=sylvaran`. Un valor desconocido seleccionará Valdoria como estado seguro.

## Arquitectura

- `src/data/world.ts`: lore estructurado de Eryndor.
- `src/types/content.ts`: contratos de regiones y lugares.
- `src/components/world/`: mapa, controles y ficha de región.
- `src/pages/WorldPage.tsx`: composición y gestión del parámetro de URL.
- `src/styles/index.css`: estilos responsivos y estados interactivos.
- `src/assets/`: mapa cartográfico final.

La imagen será decorativa; todo el contenido esencial seguirá disponible como HTML semántico e indexable.

## Accesibilidad y comportamiento

Cada región será un botón con nombre accesible, foco visible y `aria-pressed`. La selección funcionará con teclado, ratón y táctil. La lista alternativa evitará depender de la precisión espacial del mapa. Las transiciones respetarán `prefers-reduced-motion`.

## Verificación

Vitest y Testing Library cubrirán el listado, la selección, la sincronización de URL y el valor desconocido. Playwright verificará la navegación desde la cabecera y la exploración del mapa en escritorio y móvil. El flujo completo deberá superar formato, lint, pruebas unitarias, E2E y build.
