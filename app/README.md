# Cuaderno de Lenguajes · IC-4700 — plataforma de estudio

Plataforma web interactiva para el I Parcial (U1 fundamentos, U2 imperativo,
U3 funcional, U4 lógico). Vanilla JS + Vite, sin backend; el progreso se guarda en
`localStorage` del navegador.

## Requisitos

Node.js 20+ y pnpm.

## Uso (sin servidor)

La app es un solo archivo estático: abre `dist/index.html` con doble clic.
No necesita servidor, red ni instalación. Tu progreso se guarda en el navegador.

## Desarrollo (opcional, solo para modificar la app)

```powershell
pnpm install     # instalar dependencias
pnpm dev         # servidor de desarrollo (http://localhost:5173)
pnpm smoke       # prueba de humo: 25 verificaciones de rutas y flujos
pnpm build       # regenera dist/index.html (archivo único portable)
```

## Arquitectura

```text
index.html
src/
  main.js            # router por hash + todas las vistas
  styles.css         # sistema visual "cuaderno editorial" (offline, sin fuentes externas)
  data/
    content.js       # aula: 3 unidades × secciones (respaldo en docs/units/)
    quiz.js          # 55 preguntas con explicación y referencia
    flashcards.js    # 36 tarjetas
    glossary.js      # 46 términos
  lib/
    store.js         # progreso honesto en localStorage
    lab.js           # evaluador prefijo real + trazador eager/orden-normal
smoke.mjs / css-stub.mjs  # prueba de humo con happy-dom
```

## Funcionalidades

- Inicio con progreso real y continuación de estudio.
- Programa con matriz de cobertura por unidad.
- Aula: objetivos, índice, conceptos, código y tablas.
- Laboratorio: evaluador prefijo estilo Scheme que **ejecuta de verdad**
  (aritmética, `define`, `if`, recursión; `mcd` predefinida), trazador
  eager vs. orden-normal (`sqr`, `cand` parametrizable) y predicción
  Haskell/Prolog declarada como ejercicio (no se simula ejecución real).
- Práctica: 5 formatos (única, múltiple, V/F con justificación, completar,
  corta) con retroalimentación explicativa y referencia. Las opciones se
  mezclan en cada visita: la letra correcta varía, hay que saberse el concepto.
- Examen simulado de 10 preguntas sin feedback hasta el final, con nota.
- Repaso: preguntas falladas reales + tarjetas con "la sé / aún no".
- Glosario con búsqueda.

## Pendientes conocidos

- U4: sintaxis Prolog, unificación paso a paso, backtracking, corte/fail
  ([VACÍO] en `docs/coverage-matrix.md`).
- Verificación visual manual en móvil (responsive implementado, sin captura).
- Notion S4C2/S7C2 vacías (el estudiante las consigue).
- Marcas [POR-VERIFICAR] en `docs/references/unresolved-issues.md`.
