# Diseño panorámico del atlas de Eryndor

## Objetivo

Corregir la jerarquía de `/mundo` para que el mapa sea el elemento protagonista y aproveche el ancho disponible en escritorio, sin perder la ficha de lore ni la accesibilidad existente.

## Composición aprobada

- Reducir ligeramente el espacio vertical de la cabecera para acercar el atlas al primer viewport.
- Usar un contenedor específico de hasta `92rem`, más ancho que el `content-shell` general.
- Mostrar el mapa a ancho completo, sin panel lateral.
- Colocar el selector de regiones inmediatamente bajo el mapa.
- Mantener la ficha seleccionada siempre visible debajo, en una composición horizontal.
- Distribuir la ficha en tres zonas: introducción y datos, identidad/conflicto y lugares destacados.

## Responsive

En tablet la ficha pasará a dos columnas y los lugares ocuparán una fila completa. En móvil todo se apilará, los marcadores conservarán objetivos táctiles de al menos 44 px y la lista de regiones seguirá ofreciendo nombres legibles. El mapa no exigirá zoom ni desplazamiento horizontal.

## Comportamiento y verificación

La selección, `aria-pressed`, el contenido dinámico y el parámetro `?region=` no cambiarán. Las pruebas existentes deben seguir pasando; se añadirá una comprobación estructural de que mapa, selector y ficha están en ese orden dentro del explorador panorámico.
