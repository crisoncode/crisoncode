---
description: Revisa y corrige ortografía y gramática de un post automáticamente
---

Revisa y corrige automáticamente las faltas ortográficas y errores gramaticales de un post en `src/content/blog/`.

**Instrucciones:**

1. **IMPORTANTE**: Si no me proporcionaron el nombre o título del post como argumento, pregúntame cuál post quiero revisar. NO continúes hasta que te lo proporcione.

2. Una vez que tengas el nombre del post:
   - Busca el archivo en `src/content/blog/`
   - Si hay varios posts similares, muéstrame la lista y pregúntame cuál quiero revisar
   - Lee el contenido completo del post

3. Detecta automáticamente si el post está en español o inglés

4. Corrige AUTOMÁTICAMENTE usando la herramienta Edit:
   - **Errores ortográficos**: palabras mal escritas, acentos incorrectos o faltantes
   - **Errores gramaticales**: concordancia, tiempos verbales, puntuación incorrecta
   - NO hagas cambios de estilo, mejoras de contenido o cambios estructurales

5. Muestra en la CLI un resumen conciso con:
   - Idioma detectado
   - Número total de correcciones realizadas
   - Lista breve de las correcciones más importantes (máximo 5-6 ejemplos)
   - Formato: "Corregido: 'texto_incorrecto' → 'texto_correcto'"

6. Si no hay errores, simplemente indica: "✅ No se encontraron errores ortográficos o gramaticales"
