# Plataforma de estudio — IC-4700 Lenguajes de Programación

Base documental y aplicación web interactiva para el I Parcial.

## Alcance

Unidades cubiertas: **U1 Fundamentos**, **U2 Imperativo (COBOL, Pascal, C)**,
**U3 Funcional (Scheme + Haskell)**, **U4 Lógico (Prolog)**. U5 (OO) y U6
(avanzados) quedan fuera del alcance de esta entrega.

## Estructura

```text
docs/
  README.md                ← este archivo
  course-outline.md        ← programa y objetivos del curso
  source-index.md          ← inventario y jerarquía de fuentes
  glossary.md              ← glosario de términos
  learning-objectives.md   ← objetivos de aprendizaje por unidad
  coverage-matrix.md       ← matriz de cobertura (programa × fuentes)
  units/unit-01/           ← U1: overview, concepts, examples, comparisons, exercises, review
  units/unit-02/           ← U2 imperativo
  units/unit-03/           ← U3 funcional
  units/unit-04/           ← U4 lógico
  transcripciones/         ← transcripciones fieles (u0 cuaderno, u1, u3-a, u3-b, u4)
  assets/                  ← imágenes extraídas de los .docx + cuaderno p1-p2
  references/
    source-map.md          ← mapa tema → ubicación en fuentes
    unresolved-issues.md   ← contradicciones, errores y vacíos
../app/                    ← aplicación web (Vite + pnpm)
```

## Convenciones de fidelidad

- Cada bloque teórico cita su `Fuente:`.
- `[transcrito de imagen, por verificar]` — texto extraído de capturas.
- `[Notion]` — apuntes del estudiante en Notion (resumen provisto, sin acceso directo).
- `[Explicación pedagógica — elaboración propia]` — añadido didáctico, no es del curso.
- `[POR-VERIFICAR]` — dato dudoso o absoluto.
- `[VACÍO: sin fuente]` — tema del programa sin respaldo en el material.
- `[sic]` — errata del material original, conservada.
