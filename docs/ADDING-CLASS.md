# Cómo agregar Clase 8+

1. Copia la carpeta ASR a un espejo opcional bajo `docs/transcripciones/exam2/clase-N/` (o deja la ruta externa y cita `Fuente: Clase N`).
2. Crea `docs/clases/YYYY-MM-DD-tema.md` desde `_plantilla.md` con el resumen didáctico (no pegues el ASR crudo entero).
3. Añade una lección en `app/src/data/exam2/lessons.js` (`id`, `clase`, `objetivo`, `sections`, `check`, `interactive`).
4. Si hay interactivo nuevo: `app/src/lib/interactives/<nombre>.js` + wire en `main.js`.
5. Extiende quiz/flashcards/glosario Exam 2.
6. Actualiza `docs/exam-2-curriculum.md` y `coverage-matrix.md`.
7. `cd app && pnpm smoke && pnpm build`.

Reglas de fidelidad: `Fuente: Clase N` · `[posible ruido ASR: … → …]` · `[VACÍO]` si no salió en clase.
