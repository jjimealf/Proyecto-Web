# Auditoría de modernización

Fecha: 10 de junio de 2026

## Estado inicial

El proyecto era un sitio estático de diez páginas HTML, una hoja CSS y JavaScript global. La dirección visual ya apuntaba a una experiencia de fantasía oscura, pero convivía con contenido y marcado heredados.

Problemas encontrados:

- Sin repositorio Git, manifiesto de dependencias, build ni pruebas.
- Navegación y footer inyectados mediante JavaScript.
- Páginas sin `<main>`, descripciones SEO o encabezado principal.
- Múltiples `<h1>` en artículos y tabla con atributos HTML obsoletos.
- Scripts inline duplicados y eventos `onclick`.
- Contenido literal procedente de manuales y recursos gráficos de autoría incierta.
- Imágenes de hasta 2 MB y aproximadamente 4.3 MB de recursos totales.
- Sin filtros, favoritos, estados vacíos, rutas limpias ni página 404 real.

No se encontraron enlaces internos ni imágenes rotas.

## Decisiones aplicadas

- React y TypeScript sobre Vite para demostrar arquitectura frontend moderna.
- Contenido tipado como fuente única para catálogos, detalles, filtros y generador.
- React Router con carga diferida por página.
- Diseño sin imágenes externas: d20, atlas, emblemas y texturas creados con CSS/SVG.
- Terminología actualizada de “razas” a “especies”, conservando una redirección compatible.
- Resúmenes editoriales propios y atribución CC BY 4.0 del SRD 5.2.1.
- Persistencia local versionada y recuperación automática ante JSON corrupto.

## Resultado

- 12 clases y 9 especies navegables.
- Búsqueda tolerante a tildes y filtros combinables reflejados en la URL.
- Favoritos y combinaciones de Forja persistentes.
- Layout responsive validado en escritorio y móvil.
- Componentes semánticos con foco visible, estados ARIA y movimiento reducido.
- Código dividido por rutas; paquete inicial aproximado de 77 kB comprimidos.
- Suite de 12 pruebas unitarias/componentes y 9 recorridos E2E ejecutados.
- Build de producción reproducible en `dist/`.
- Lighthouse sobre `vite preview`: 100 rendimiento, 100 accesibilidad y 96 buenas prácticas.
- Métricas de escritorio: FCP 0,4 s, LCP 0,4 s, CLS 0 y TBT 0 ms.

## Riesgo residual

- Lighthouse debe repetirse en el despliegue definitivo, porque servidor, compresión y caché pueden modificar sus métricas.
- Un hosting de `BrowserRouter` necesita fallback hacia `index.html`.
- El contenido es una introducción editorial, no un sustituto completo del SRD ni de los libros oficiales.
