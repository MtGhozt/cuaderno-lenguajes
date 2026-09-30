# Cuaderno de Lenguajes · IC-4700

Cuaderno de estudio para todo el curso **IC-4700 Lenguajes de Programación**:
apuntes por clase + plataforma web interactiva para practicar.

**Estado:** I Parcial (U1 fundamentos, U2 imperativo, U3 funcional, U4 lógico).
El II Parcial (U5 OO, U6 avanzados) aún no entra.

## Cómo estudiar (lo único que ocupas)

Abre `app/dist/index.html` con **doble clic**. No necesita servidor, red ni
instalación. Funciona offline.

> Nota sobre tu progreso: se guarda en `localStorage` del navegador. Con doble
> clic funciona en Chrome/Edge; en Firefox puede no persistir por políticas de
> `file://`. Si tu progreso no se guarda, usa el modo desarrollo de abajo
> (`pnpm dev` en `http://localhost:5173`), donde el origen es estable y el
> progreso persiste siempre.

La app incluye: aula por unidad, laboratorio (evaluador prefijo + trazador),
práctica con 55 preguntas (las opciones **se mezclan en cada visita**, la letra
correcta varía), examen simulado de 10, repaso de falladas y glosario.

## Cómo agregar materia de una clase

1. Crea `docs/clases/YYYY-MM-DD-tema-corto.md` desde `_plantilla.md` y pega la
   materia tal cual (Notion, fotos, docx). Imágenes a `docs/clases/assets/`.
2. Se integra a `docs/units/unit-XX/` + `coverage-matrix.md` y, si es
   estudiable, a `app/src/data/`.
3. Se verifica con `pnpm smoke` y se regenera con `pnpm build`.

Detalle del flujo en `docs/clases/README.md`. Convenciones de fidelidad
(`Fuente:`, `[POR-VERIFICAR]`, `[VACÍO]`) en `docs/README.md`.

## Estructura

```text
README.md            ← este archivo
docs/
  clases/            ← apuntes por sesión (puerta de entrada de materia nueva)
  units/unit-01…04/  ← teoría integrada por unidad
  coverage-matrix.md ← qué tema está respaldado y con qué fuente
  transcripciones/   ← transcripciones fieles del material base
app/
  dist/index.html    ← archivo portable para estudiar (doble clic)
  src/data/          ← contenido, quiz, flashcards, glosario
I Parcial/           ← materia cruda (no se edita, solo se referencia)
Guía Jorge/          ← material de compañero (fuente secundaria)
```

El programa oficial del curso no se versiona (queda en disco, fuera del repo).

## Desarrollo (solo para modificar la app)

```powershell
cd app
pnpm install     # instalar dependencias
pnpm dev         # servidor de desarrollo (http://localhost:5173)
pnpm smoke       # prueba de humo: 27 verificaciones de rutas y flujos
pnpm build       # regenera dist/index.html (archivo único portable)
```
