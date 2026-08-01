# Beluresa Beauty — Shopify

Assets de conversión para la tienda **Beluresa Beauty** (accesorios y herramientas de belleza), tienda: `hxhhpb-if.myshopify.com`.

## Contenido

- `docs/fase1-estrategia-conversion.md` — Fase 1: hero banner, 4 USPs y esquema de la homepage (producto: rizador de pestañas térmico).
- `docs/landing-page-home-estrategia.md` — Diseño, copy y SEO completo de la Landing Page / Portada: hero del producto estrella (HairDrop Pro™), parrilla de catálogo con ficha SEO por producto, módulo UGC/prueba social, trust badges y SEO global de la home.
- `sections/beluresa-resultados-specs.liquid` — Fase 2: sección OS 2.0 "Antes/Después + Especificaciones", totalmente configurable desde el Editor de Temas.
- `sections/beluresa-producto-destacado.liquid` — sección OS 2.0 "Producto destacado": galería de imágenes de marca + producto real (selector de variantes, precio dinámico y botón "Añadir al carrito").
- `sections/beluresa-hero-hairdrop.liquid` — sección OS 2.0 "Hero: HairDrop Pro", hero de portada para el producto estrella (H1, subtítulo, 2 CTAs, microcopy de confianza e imagen/render del producto con animación 3D sutil vía CSS).
- `sections/beluresa-catalogo.liquid` — sección OS 2.0 "Catálogo", parrilla de productos (por bloques) donde cada tarjeta es 100% clicable y enlaza directo a su página de producto.

## Estado del borrador de portada

⚠️ *"Beluresa – Landing Page (borrador)"* fue publicado por el merchant y **ahora es el tema en vivo** de la tienda.

Mejora de Hero para móvil (pantalla completa sin scroll: imagen de fondo + nombre de tienda + título + CTA superpuestos, botones ≥44px táctiles) instalada en una nueva copia sin publicar: *"Beluresa – Hero móvil (borrador)"*. Revísala en el Editor de Temas y publícala cuando estés conforme.

> Nota: los nombres de sección en Shopify tienen un límite de 25 caracteres (`"name"` en el `{% schema %}`), por eso en el tema instalado aparecen como "Beluresa: Hero" / "Beluresa: Specs" / "Producto beluresa" en vez de los nombres largos.

## Cómo instalar una sección

1. En el admin de Shopify: **Tienda online → Temas → Acciones → Editar código** (sobre el tema en vivo o uno de prueba).
2. En la carpeta `Sections`, crea un archivo nuevo con el mismo nombre que el del repo (ej. `beluresa-resultados-specs.liquid` o `beluresa-producto-destacado.liquid`).
3. Copia y pega el contenido del archivo correspondiente de este repo.
4. Guarda. Ve al **Editor de Temas** (Personalizar) → en la página de inicio, pulsa **Añadir sección** → busca "Beluresa: Resultados y specs" o "Beluresa: Producto destacado".

### Resultados y specs
Sube las imágenes de "Antes" y "Después" en cada bloque de comparación, ajusta textos, colores y filas de especificaciones desde el panel lateral — no requiere tocar código.

### Producto destacado
1. En el panel de la sección, campo **Producto**, selecciona el "Rizador térmico de pestañas" de tu catálogo (`hxhhpb-if.myshopify.com`).
2. Añade bloques **Imagen de galería** y sube ahí tus fotos de marca (la de uso junto al ojo, el flatlay con el packaging, etc.) — estas imágenes son las que se muestran, independientes de las fotos del producto en el catálogo.
3. Ajusta beneficios, sellos de confianza, valoración y color de acento desde el panel — sin tocar código.

Ambas secciones son autocontenidas (CSS y JS encapsulados en `{% stylesheet %}` / `{% javascript %}` con la clase `beluresa-*`), por lo que son seguras de añadir sobre Dawn o cualquier tema OS 2.0 sin romper estilos existentes.
