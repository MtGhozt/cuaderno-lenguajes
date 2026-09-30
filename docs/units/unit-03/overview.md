# Unidad 3 — Programación funcional: Scheme y Haskell (IC-4700)

## Ficha

- **Curso:** IC-4700 Lenguajes de Programación.
- **Unidad:** U3 — Paradigma funcional (Scheme y Haskell).
- **Archivos de la unidad:** `overview.md` (este), `concepts.md`, `examples.md`, `comparisons.md`, `exercises.md`, `review.md`.
- **Fuentes usadas:** transcripciones de slides en disco (`u3-funcional-a.md`, `u3-funcional-b.md`), texto extraído de los tres `.docx` del I Parcial, y resumen Notion provisto por el estudiante. [Explicación pedagógica — elaboración propia] para el orden y los resúmenes; cada bloque cita su fuente.

## Objetivos de la unidad

1. Expresar un algoritmo (mcm/MCD) como composición de funciones matemáticas, con ejecución condicional y recursiva. Fuente: [Docx Introducción paradigma funcional].
2. Distinguir la sintaxis y el modelo de Scheme (notación prefija, `define`/`lambda`, listas) del de Haskell (encabezado de tipos, guardas `|`/`otherwise`, pattern matching). Fuente: [Docx Paradigma funcional parte 2] + [Notion].
3. Aplicar funciones sobre listas (incluido orden superior tipo `M(v,f)` / `map`) y explicar primera clase y polimorfismo paramétrico. Fuente: [Transcripción u3-funcional-b, IMG18–IMG19, IMG43] + [Notion].
4. Trazar las tres estrategias de evaluación (ansiosa, orden-normal, perezosa) sobre `sqr` y `cand`, incluyendo estrictez y Church-Rosser. Fuente: [Transcripción u3-funcional-b, IMG25–IMG37, IMG44] + [Notion].

## Mapa de la unidad

| Archivo | Contenido |
|---|---|
| `concepts.md` | Teoría completa separada en Scheme y Haskell, más evaluación. |
| `examples.md` | 4 ejemplos progresivos: mcm mínimo → cond → hailstone → cand/evaluación. |
| `comparisons.md` | Scheme vs Haskell; eager vs lazy; funcional vs imperativo. |
| `exercises.md` | 14 ejercicios con objetivo, dificultad y solución. |
| `review.md` | Resumen, errores frecuentes y 8 preguntas de autoevaluación. |

## Convenciones usadas en toda la unidad

- **Fuente por bloque:** cada sección termina con su fuente entre corchetes.
- **[Explicación pedagógica — elaboración propia]:** marca lo que yo añadí para ordenar/explicar, no viene literal de la fuente.
- **[POR-VERIFICAR]:** marca datos dudosos o ilegibles en la fuente; no se inventó nada.
- **[CÓDIGO DE CLASE, por verificar]:** marca código transcrito de slides/pizarra cuya sintaxis es sospechosa; se conserva tal cual como pidió el estudiante.
- Scheme y Haskell van en **secciones distintas**; no se mezcla sintaxis.

## Prerrequisitos

- Noción de función matemática como relación entre conjuntos y como ente autónomo (propiedad P). Fuente: [Transcripción u3-funcional-a, IMG9–IMG10].
- Idea de algoritmo funcional: conjunto finito de funciones evaluadas un número finito de veces con recursos finitos. Fuente: [Transcripción u3-funcional-b, IMG15].
- Lectura de notación `mcm(n,m) = (n × m) / MCD(n,m)`. Fuente: [Transcripción u3-funcional-b, IMG1–IMG2].

Fuente general de esta ficha: [Explicación pedagógica — elaboración propia] sobre las fuentes listadas arriba.
