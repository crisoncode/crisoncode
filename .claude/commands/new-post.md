---
description: Crea un nuevo post en markdown siguiendo la estructura de Astro
---

Crea un nuevo post en la carpeta `src/content/blog/` siguiendo estas instrucciones:

1. **IMPORTANTE**: Primero pregúntame el título del post. NO continúes hasta que te lo proporcione.

2. Una vez que tenga el título, crea un archivo markdown con:
   - Nombre del archivo: usa el título en formato kebab-case (minúsculas separadas por guiones) con extensión `.md`
   - Ejemplo: "Mi Nuevo Post" → `mi-nuevo-post.md`

3. El archivo debe contener SOLAMENTE la cabecera de Astro (frontmatter) con estos campos:
   ```yaml
   ---
   author: Cristian Estarlich
   pubDatetime: [fecha y hora actual en formato ISO 8601, ejemplo: 2025-12-15T23:00:00Z]
   title: [el título que me proporcioné]
   postSlug: [el nombre del archivo sin la extensión .md]
   featured: false
   draft: true
   tags: []
   description: ""
   ---
   ```

4. NO inventes ningún contenido adicional. El archivo debe terminar después de la cabecera frontmatter.

5. Después de crear el archivo, muéstrame la ruta completa del archivo creado.
