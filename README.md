# Beluresa Tools — Shopify

Assets de conversión para la tienda **Beluresa Tools** (rizador de pestañas térmico), tienda: `hxhhpb-if.myshopify.com`.

## Contenido

- `docs/fase1-estrategia-conversion.md` — Fase 1: hero banner, 4 USPs y esquema de la homepage.
- `sections/beluresa-resultados-specs.liquid` — Fase 2: sección OS 2.0 "Antes/Después + Especificaciones", totalmente configurable desde el Editor de Temas.

## Cómo instalar la sección

1. En el admin de Shopify: **Tienda online → Temas → Acciones → Editar código** (sobre el tema en vivo o uno de prueba).
2. En la carpeta `Sections`, crea un archivo nuevo llamado `beluresa-resultados-specs.liquid`.
3. Copia y pega el contenido de `sections/beluresa-resultados-specs.liquid` de este repo.
4. Guarda. Ve al **Editor de Temas** (Personalizar) → en la página de inicio, pulsa **Añadir sección** → busca "Beluresa: Resultados y specs".
5. Sube las imágenes de "Antes" y "Después" en cada bloque de comparación, ajusta textos, colores y filas de especificaciones desde el panel lateral — no requiere tocar código.

La sección no depende de ningún otro archivo del tema (CSS y JS van encapsulados en `{% stylesheet %}` / `{% javascript %}` con la clase `beluresa-*`), por lo que es segura de añadir sobre Dawn o cualquier tema OS 2.0 sin romper estilos existentes.
