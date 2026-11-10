# Clases — apuntes por sesión

Una carpeta por clase vista en el curso. Es la **puerta de entrada** de toda
materia nueva: primero cae aquí tal cual la pasa el estudiante (Notion, fotos,
docx), después se integra a `docs/units/` y a la app.

Estado del intake Exam 2: ver [`../exam-2-intake.md`](../exam-2-intake.md).

## Cómo agregar una clase

1. Copia `_plantilla.md` a `YYYY-MM-DD-tema-corto.md`
   (ej: `2026-10-06-corte-y-fail.md`). Un archivo por clase, no por tema.
2. Pega la materia tal cual (de Notion o transcripción de fotos/docx).
3. Si hay imágenes, guárdalas en `assets/` con el mismo prefijo de fecha
   (ej: `assets/2026-10-06-pizarra-1.jpg`) y referéncialas desde el `.md`.
4. Marca lo dudoso con `[POR-VERIFICAR]` y lo que falte con `[VACÍO: sin fuente]`.
5. Avisa para integrarlo: pasa a `docs/units/unit-XX/` + `coverage-matrix.md`
   y, si es estudiable, a `app/src/data/` (+ `pnpm smoke` y `pnpm build`).

## Reglas

- La materia cruda (`I Parcial/`, `Guía Jorge/`) **nunca se edita**; aquí solo
  se transcribe e interpreta.
- Cada bloque teórico cita su `Fuente:` (ver `docs/README.md`, convenciones
  de fidelidad).
- **I Parcial:** U1–U4. **II Parcial (Exam 2):** completar U4 (corte/fail,
  unificación profunda) + abrir U5 OO. U6 cuando entre.
