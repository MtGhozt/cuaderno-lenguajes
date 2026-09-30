# Unidad 1 — Introducción y conceptos fundamentales (IC-4700 Lenguajes de Programación)

## Introducción

Esta unidad responde dos preguntas antes de estudiar cualquier paradigma concreto: **¿qué es un algoritmo?** y **¿qué debe cumplir un lenguaje de programación para expresar algoritmos?** [cuaderno p1] [transcripción u1-fundamentos IMG4].

La idea central del curso, según los apuntes de clase, es que su nombre más exacto sería *paradigmas de programación*: cada paradigma es una forma distinta de entender qué es computable y de expresar algoritmos, y cada uno exige pensar diferente [cuaderno p1]. Un paradigma es, además, un marco de referencia: ideas y conceptos que permiten enfocar algo de la realidad [cuaderno p1].

Los lenguajes de propósito general deben equilibrar tres fuerzas en su diseño: el propósito que se persigue, la facilidad para el desarrollo de software y las características del hardware disponible [transcripción u1-fundamentos IMG5]. Esta unidad documenta ese marco con las fuentes del curso.

## Objetivos de aprendizaje

Al terminar la unidad, el estudiante podrá:

1. Definir algoritmo y procedimiento efectivo con sus condiciones de finitud [transcripción u1-fundamentos IMG1] [cuaderno p1–p2].
2. Enunciar la tesis de Church y la equivalencia entre formas de computabilidad [cuaderno p2].
3. Enumerar las cuatro estructuras de Böhm-Jacopini y explicar por qué bastan para cualquier algoritmo [transcripción u1-fundamentos IMG2–IMG3] [Notion].
4. Explicar las siete características deseables de un lenguaje (universal, implementable, natural, no ambiguo, eficiente, depurable, seguro) [transcripción u1-fundamentos IMG9–IMG17] [Notion] [docx].
5. Distinguir sintaxis, semántica y pragmática, con el ejemplo de la asignación [transcripción u1-fundamentos IMG3–IMG8 de características lingüísticas].
6. Clasificar datos en simples y compuestos según Wirth ("Algorithms + Data Structures = Programs") [cuaderno p2].
7. Explicar la noción de función parcialmente computable con ejemplos [Explicación pedagógica — elaboración propia].
8. Justificar por qué conviene conocer varios paradigmas [transcripción u1-fundamentos IMG4–IMG6] [cuaderno p1].

## Mapa de la unidad

| Archivo | Contenido |
|---|---|
| `overview.md` | Este archivo: introducción, objetivos y mapa |
| `concepts.md` | Definición formal + explicación intuitiva + características, tema por tema, con Fuente por bloque |
| `examples.md` | Ejemplos progresivos: dangling else, `r=m*i+s`, asignación, Goldbach/Gödel, √x |
| `comparisons.md` | Sintaxis vs semántica vs pragmática; abstracción vs encapsulación; compilador vs intérprete vs VM |
| `exercises.md` | 12 ejercicios con objetivo, dificultad y solución explicada |
| `review.md` | Resumen esencial, errores frecuentes y autoevaluación (8 preguntas con respuestas) |

## Convenciones usadas en esta documentación

- **Fuente por bloque.** Cada afirmación teórica cita su origen: `[transcripción u1-fundamentos …]`, `[cuaderno p1/p2]`, `[docx …]`, `[Notion]`.
- **`[Explicación pedagógica — elaboración propia]`.** Marca lo que es ayuda didáctica (analogías, pasos intermedios, ejemplos pedidos en el encargo) y no viene literal de las fuentes.
- **`[POR-VERIFICAR]`.** Marca datos dudosos (cifras, fechas, "siempre/nunca", transcripciones con [sic]).
- **No se inventan definiciones.** Si una definición no está en las fuentes, se dice explícitamente y se marca como elaboración propia o por verificar.

## Fuentes de la unidad

1. Transcripción de slides: `docs/transcripciones/u1-fundamentos.md` (imágenes IMG1–IMG18 de Características Generales e IMG1–IMG9 de Características lingüísticas; todas marcadas "transcrito de imagen, por verificar").
2. Cuaderno: `docs/transcripciones/u0-cuaderno.md` (p1 del 04/08/26 y p2 Semana 1 Clase 2; profesor Jorge Vargas).
3. Texto de los `.docx` extraído en memoria con PowerShell (`ZipFile::OpenRead` + `word/document.xml` + regex `<w:t>`), párrafos citados como `Pn`:
   - *Características Generales.docx* (26 párrafos; solo P12, P15, P17, P19, P22–P25 tienen texto; el resto son imágenes vacías).
   - *Características lingüísticas de los lenguajes de programación.docx* (16 párrafos; solo P2, P4, P5, P9, P11, P14 tienen texto).
4. Resumen de Notion provisto en el encargo (sin acceso directo; se cita como `[Notion]`).
