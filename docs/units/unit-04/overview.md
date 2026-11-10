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

## 2. Qué cubre además Guía Jorge (fuente secundaria)

> **Fuente:** `Guía Jorge/Semana_4_Clase_1.md` (Horn/SLD) + `Guía Jorge/Semana_4_Clase_2.md` (Tres Amigas en Prolog, backtracking → `false`).

- Sintaxis Prolog del acertijo Tres Amigas: estructura `amiga/3`, listas de dominio, `permutation/2`, `\=`, `member/2`, `\+`.
- Noción operativa de unificación por ligadura en restricciones + backtracking al agotar ramas.
- Cláusulas de Horn y resolución SLD (resumen de la guía; marcado como simplificación).

## 3. Qué sigue vacío (honestidad documental)

- [VACÍO: sin fuente] Algoritmo formal de unificación (occur-check, MGU) más allá del ejemplo Tres Amigas.
- [VACÍO: sin fuente] Corte (`!`) y `fail` — no aparecen en slides, Notion, .docx ni Guía Jorge.
- Pendiente de transcripciones Exam 2: ver `docs/exam-2-intake.md`.

## 4. Mapa de archivos de la unidad

| Archivo | Contenido |
|---|---|
| `overview.md` | Esta página: alcance, honestidad, mapa |
| `concepts.md` | Conceptos bloque por bloque, cada uno con su fuente |
| `examples.md` | Ejemplos respaldados por fuentes + tabla comparativa |
| `comparisons.md` | Tres comparaciones: imperativo vs. lógico; relaciones vs. funciones; variable imperativa vs. variable lógica |
| `exercises.md` | 12 ejercicios (objetivo + dificultad + solución donde hay fuente; [VACÍO] donde no) |
| `review.md` | Resumen + errores frecuentes + 8 preguntas de autoevaluación |

## 5. Temas U4 vs. respaldo en fuentes

> **Fuente:** lista de temas del programa, contrastada con slides/.docx/Notion + Guía Jorge.

| Tema pedido | Respaldo |
|---|---|
| Relaciones vs. funciones | Parcial: IMG3 (funciones vía sentencias en CP1). Formalización relacional profunda: pendiente clase. |
| Hechos y consultas | Noción general (Notion/.docx) + ejemplo Prolog Tres Amigas [Guía Jorge S4C2]. |
| CP1 y FBF | IMG2–IMG3 + `.docx` P4. Gramática formal de FBF: [VACÍO]. |
| Dominios, datos compuestos y listas | Noción `.docx` P3 + listas/dominios en Tres Amigas [Guía Jorge S4C2]. |
| Unificación | IMG7 (mención) + ligaduras en Tres Amigas [Guía Jorge]. Algoritmo formal MGU: [VACÍO]. |
| Backtracking y orden | Agotamiento → `false` [Guía Jorge S4C2]. Orden de cláusulas detallado: parcial. |
| Corte (`!`) y `fail` | [VACÍO: sin fuente] total. |

## 6. Advertencias de verificación

> **Fuente:** marcas de las propias transcripciones + criterio del redactor.

- Todo lo venido de `u4-logico.md` arrastra la marca original **[transcrito de imagen, por verificar]**.
- Dos afirmaciones se marcan además [POR-VERIFICAR] en toda la unidad:
  1. «El sistema de Copi es NP / con restricciones los alternos son P» (IMG7).
  2. «Una máquina Turing completa no puede reconocer [el lenguaje de CP1]» (`.docx` P1; el resumen [Notion] lo formula como «gramática reconocible»).
- No se corrigieron ni ampliaron estas afirmaciones: se citan tal cual y se derivan a verificación.
