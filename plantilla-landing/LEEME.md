# Plantilla de landing

Un solo archivo (`index.html`), sin instalar nada. Abrilo en el navegador para verlo.

## Para un proyecto nuevo
1. Duplicá esta carpeta y renombrala (ej. `landing-cliente-x`).
2. Abrí `index.html` en un editor y buscá todo lo que diga `[ENTRE CORCHETES]`: son los textos a reemplazar.
3. **Color:** en la línea 2 cambiá `data-theme="naranja"` por `azul`, `verde` o `violeta`. Todo se adapta solo (botones, brillo, fondo de red).
   Para un color propio, agregá una línea en la sección "TEMAS" copiando una existente.
4. **Imagen de portada:** poné tu archivo junto al `index.html` y en la clase `.hero` cambiá `--hero-img:none;` por `--hero-img:url("hero.jpg");`.
5. **Agendado por email:** creá una clave gratis en https://web3forms.com (te llega por email) y pegala en `CONFIG.accessKey` al final del archivo. Ahí también cambiás días, horarios y zona horaria.
6. **Secciones:** cada bloque (`<section>`) es independiente. Copiá, pegá o borrá los que necesites. Las tarjetas (`<article class="card">`) se pueden agregar o quitar libremente.

## Qué incluye
Header fijo, botón flotante, barra de progreso, fondo de red animado, título que entra palabra por palabra, palabras clave con brillo metálico, tarjetas con foco de luz, pasos, antes/después, chips que titilan, formulario de agendado y pie de página. Respeta "reducir movimiento" del sistema.

## Para publicarlo
Subí la carpeta a Netlify (arrastrar y soltar), GitHub Pages o Vercel, y conectá tu dominio.
