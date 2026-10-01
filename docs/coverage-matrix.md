# Matriz de cobertura (programa × fuentes × estado)

Leyenda de estado: ✅ respaldado · ⚠️ parcial · ❌ sin fuente · — fuera de alcance.

## U1 — Introducción y conceptos fundamentales

| Tema programa | Fuentes | Conceptos | Ejemplos | Actividades | Estado |
|---|---|---|---|---|---|
| 1.1 Evolución histórica | transcr. u1 (timeline), [Notion], Apuntes Jorge (timeline Fortran→Perl + Rol CR) | eras, abstracción creciente | timeline completo | quiz q60, flashcards | ✅ |
| 1.2 Principios de diseño | slides, cuaderno p2 (Wirth), [Notion] | universalidad, implementabilidad, naturalidad, no-ambigüedad, eficiencia, depurabilidad, seguridad | dangling else, r=m*i+s | quiz, V/F, completar | ✅ |
| 1.3 Sintaxis, semántica, pragmática | slides, [Notion S4C1] | gramática LC; comportamiento; uso | asignación (4 usos), while Pascal | quiz, identificar | ✅ |
| 1.4–1.10 Fundamentos (valores, tipos, expresiones, binding, abstracción, encapsulación, secuenciadores) | cuaderno p2, [Notion Resumen] | simples/compuestos, scope, binding time | tabla producto cartesiano, IEEE 754 | quiz, relacionar | ⚠️ (binding/alcance: solo base) |

## U2 — Programación imperativa

| Tema programa | Fuentes | Conceptos | Ejemplos | Actividades | Estado |
|---|---|---|---|---|---|
| 2.1 Almacenamiento (punteros, arreglos) | cuaderno p3–p5 | variables=bytes, array casi único compuesto, record/struct/nivel 01 | 01 Empleado COBOL | quiz, completar | ✅ |
| 2.2 Paso de parámetros | Guía Jorge S4C1 (valor/ref/nombre, Jensen) | copia, aliasing, sustitución | Sum/Jensen | quiz | ✅ |
| 2.3–2.4 Portabilidad, preproceso, E/S | cuaderno p3, [Notion S6C1] | archivos bien/mal según lenguaje | E/S Pascal vs C | V/F | ⚠️ |
| 2.5–2.8 Modularidad, generalidad, ocultamiento, independencia | cuaderno p4–p6 | estructurada, coupling/cohesión, módulos ≤ página | main-columna, función vs procedimiento | quiz, tablas | ✅ |
| 2.9 Conceptos fundamentales | cuaderno p5–p6 | control, recursión, representación | if/case/while/repeat, N-S | trazar, predecir | ✅ |

## U3 — Programación funcional

| Tema programa | Fuentes | Conceptos | Ejemplos | Actividades | Estado |
|---|---|---|---|---|---|
| 3.1 Expresiones y aritmética | slides, transcr. u3 | árbol de expresión, prefija | `(+ a (* b c))`, mcm/MCD | predecir resultado | ✅ |
| 3.2 Primera clase | slides, [Notion] | orden superior, map | función sobre vector | completar código | ✅ |
| 3.3 Listas primitivas | slides Haskell | homogéneas, X:xs, haulstone | hailstoneSeq, sumarCadaDos | trazar, predecir | ✅ |
| 3.4 Principios diseño funcional | [Notion], slides | inmutabilidad, sin asignación | car/cdr, variables-constante | V/F | ✅ |
| 3.5 Streams / lazy | slides, [Notion S6C2] | eager, normal, lazy, estrictez, C-R | sqr, cand n=2/n=0 | trazar evaluación | ✅ |
| 3.6 Tipos funcionales | slides Haskell | Int/Integer, IO/main, encabezados | hailstone, Sumaprod [sic] | identificar errores | ⚠️ |
| 3.7 Polimorfismo paramétrico | slides, [Notion] | no restringir tipos | 'a list, Number/Amount [sic] | conceptual | ⚠️ |

## U4 — Programación lógica

| Tema programa | Fuentes | Conceptos | Ejemplos | Actividades | Estado |
|---|---|---|---|---|---|
| 4.1 Relaciones vs funciones | [Notion S8C1], slides | demostración vs evaluación | tabla imperativo/lógico | quiz | ✅ || 4.2 Hechos y consultas | slides, docx (4 párr.) | sentencias, FBF | — | conceptual | ⚠️ |
| 4.3 Cálculo de predicados | slides, [Notion] | CP1, Copi (9+10+4+2), MP, cláusulas | esquema abstracto | quiz, V/F | ✅ teoría |
| 4.4 Dominios, compuestos, listas | programa (título) | — | — | — | ❌ |
| 4.5 Unificación | [Notion] (definición) + Guía Jorge S4C2 (Tres Amigas en Prolog) | encaje por ligadura | amiga/3, member, \= | quiz, código | ⚠️ (un ejemplo real) |
| 4.6 Backtracking y orden | Guía Jorge S4C2 (agotamiento → false) | probar y retroceder | caso contradictorio | quiz | ⚠️ |
| 4.7 Corte y fail | programa (título) | — | — | — | ❌ |

## Problemas transversales

Catenaria (funcional), tres amigas (lógico), raw/ascii (búsqueda en texto):
transcritos en u4-logico.md, clasificados en `units/unit-04/exercises.md`. ✅
