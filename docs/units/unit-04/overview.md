# Unidad 4 — Programación lógica (Prolog) · Overview

> **Fuentes de esta página:** `docs/transcripciones/u4-logico.md` (slides Paradigma_logico IMG1–IMG7 + Problemas_para_paradigmas IMG1–IMG5); `.docx` «Paradigma logico.docx» (4 párrafos extraídos en memoria con `System.IO.Compression.ZipFile` + regex `<w:t>`); resumen provisto por el usuario citado como [Notion]. | Alcance: IC-4700 Lenguajes de Programación, Unidad 4.

## 1. Qué cubre esta unidad (según las fuentes)

> **Fuente:** `u4-logico.md` IMG2–IMG7 + [Notion] + `.docx`.

- Fundamento teórico: el Cálculo de Predicados de Primer Orden (CP1/CP1o) como lenguaje capaz de describir sentencias matemáticas y, vía sentencias, cualquier función parcialmente computable y por tanto cualquier algoritmo.
- Definición operativa del paradigma lógico: lenguaje equivalente a CP1 + gramática reconocible por compilador + ejecución entendida como demostración (de tiempo polinomial según los slides).
- Contraste imperativo vs. lógico: instrucciones/ejecución/RAM-bytes frente a sentencias(FBF)/demostración/variables lógicas.
- Mecanismo de demostración: premisas + reglas de inferencia; sistema de Copi (conteo de reglas); su impracticabilidad computacional y las dos alternativas (modus ponens; cálculo de cláusulas con resolución + unificación).
- Noción de variable lógica (existencia previa al tipo) y de dominio (individuos que hacen verdadero un predicado); FBF = fórmulas bien formadas (solo sigla expandida, sin definición formal en las fuentes).
- Tres problemas transversales para comparar paradigmas: catenaria, tres amigas, raw/ascii.

## 2. Qué NO cubren las fuentes (honestidad documental)

> **Fuente:** verificación negativa contra las tres fuentes (lo que sigue no aparece en ninguna).

- [VACÍO: sin fuente] Sintaxis concreta de Prolog (cómo se escribe un hecho, una regla, una consulta en código real).
- [VACÍO: sin fuente] Ejemplos de unificación paso a paso, de backtracking y orden de búsqueda, de dominios/datos compuestos/listas en Prolog.
- [VACÍO: sin fuente] Ejemplos de uso del corte (`!`) y de `fail`.
- Por regla de esta documentación: **todo lo faltante va a `exercises/review` como [VACÍO: sin fuente] o a la lista de verificación; no se inventa sintaxis Prolog.**

## 3. Mapa de archivos de la unidad

| Archivo | Contenido |
|---|---|
| `overview.md` | Esta página: alcance, honestidad, mapa |
| `concepts.md` | Conceptos bloque por bloque, cada uno con su fuente |
| `examples.md` | Ejemplos respaldados por fuentes + tabla comparativa |
| `comparisons.md` | Tres comparaciones: imperativo vs. lógico; relaciones vs. funciones; variable imperativa vs. variable lógica |
| `exercises.md` | 12 ejercicios (objetivo + dificultad + solución donde hay fuente; [VACÍO] donde no) |
| `review.md` | Resumen + errores frecuentes + 8 preguntas de autoevaluación |

## 4. Temas U4 vs. respaldo en fuentes

> **Fuente:** lista de temas pedida por el usuario, contrastada con las tres fuentes.

| Tema pedido | Respaldo |
|---|---|
| Relaciones vs. funciones | Parcial: IMG3 dice que las funciones se describen mediante sentencias en CP1 [transcrito de imagen, por verificar]. [VACÍO: sin fuente] para formalización relacional en Prolog. |
| Hechos y consultas | Solo noción general («sentencias que se demuestran», [Notion] + `.docx` P2). [VACÍO: sin fuente] para sintaxis. |
| CP1 y FBF | Sigla FBF expandida en `.docx` P4; capacidad descriptiva de CP1 en IMG2–IMG3. [VACÍO: sin fuente] para gramática formal de FBF. |
| Dominios, datos compuestos y listas | Solo noción de dominio en `.docx` P3. [VACÍO: sin fuente] para compuestos/listas. |
| Unificación | Solo mención como parte de resolución en IMG7. [VACÍO: sin fuente] para algoritmo paso a paso. |
| Backtracking y orden | [VACÍO: sin fuente] total. |
| Corte (`!`) y `fail` | [VACÍO: sin fuente] total. |

## 5. Advertencias de verificación

> **Fuente:** marcas de las propias transcripciones + criterio del redactor.

- Todo lo venido de `u4-logico.md` arrastra la marca original **[transcrito de imagen, por verificar]**.
- Dos afirmaciones se marcan además [POR-VERIFICAR] en toda la unidad:
  1. «El sistema de Copi es NP / con restricciones los alternos son P» (IMG7).
  2. «Una máquina Turing completa no puede reconocer [el lenguaje de CP1]» (`.docx` P1; el resumen [Notion] lo formula como «gramática reconocible»).
- No se corrigieron ni ampliaron estas afirmaciones: se citan tal cual y se derivan a verificación.
