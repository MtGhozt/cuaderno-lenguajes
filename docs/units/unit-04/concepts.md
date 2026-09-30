# Unidad 4 — Conceptos (programación lógica)

> **Fuentes:** `docs/transcripciones/u4-logico.md` (IMG1–IMG7); `.docx` «Paradigma logico.docx» P1–P4 (extracción en memoria `ZipFile` + `<w:t>`); [Notion] (resumen provisto por el usuario). | Cada bloque indica su fuente. Lo dudoso lleva [POR-VERIFICAR]; lo ausente lleva [VACÍO: sin fuente].

## C1. CP1 describe cualquier sentencia matemática

> **Fuente:** `u4-logico.md` IMG2 [transcrito de imagen, por verificar] + [Notion].

- El Cálculo de Predicados de Primer Orden es un lenguaje capaz de describir cualquier sentencia en Matemática.
- El slide lo vincula como elemento fundamental en la demostración del Teorema de Incompletitud de Gödel.
- [POR-VERIFICAR] Alcance exacto de «cualquier sentencia» y el vínculo con Gödel: así lo dice el slide; no se amplía.

## C2. Las funciones se describen mediante sentencias; luego CP1 describe algoritmos

> **Fuente:** `u4-logico.md` IMG3 [transcrito de imagen, por verificar].

- Cadena del slide: las funciones son descritas mediante sentencias → cualquier función puede describirse en CP1, en particular las parcialmente computables → si cualquier algoritmo puede describirse con una función (parcialmente) computable, entonces cualquier algoritmo puede describirse en CP1.
- [Explicación pedagógica — elaboración propia] La idea didáctica es: el paradigma lógico no «calcula funciones» directamente; describe relaciones/sentencias y la ejecución consiste en demostrar.

## C3. Triple condición del paradigma lógico

> **Fuente:** `u4-logico.md` IMG4 [transcrito de imagen, por verificar] + [Notion].

Un lenguaje implementa el paradigma lógico si simultáneamente:

1. Es equivalente al lenguaje del CP1o (completo respecto al CP1o).
2. Tiene una gramática fácilmente reconocible por un compilador.
3. Cuenta con un algoritmo de ejecución similar a un procedimiento de demostración lógica del CP1o, pero de tiempo polinomial.
- [Notion] lo resume igual: lenguaje equivalente a CP1 + gramática reconocible + ejecución como demostración.
- IMG1 del mismo bloque no aporta contenido (slide vacío según transcripción).

## C4. No hay instrucciones ni evaluación: hay sentencias que se demuestran (FBF)

> **Fuente:** `u4-logico.md` IMG5 [transcrito de imagen, por verificar] + `.docx` P2 + [Notion].

- «En este paradigma no hay instrucciones, lo que hay son sentencias lógicas, y términos lógicos (p. ej. predicados).»
- `.docx` P2: «no tenemos sentencias evaluadas ni instrucciones, son sentencias demostradas.»
- [Notion]: «no hay funciones evaluadas sino sentencias que se demuestran (FBF)».
- `.docx` P4: «FBF significa formulas bien formadas» (sic; solo expande la sigla).
- [VACÍO: sin fuente] Definición formal/gramática de FBF, conectivas, cuantificadores, alcance: ninguna fuente la trae.

## C5. Variable lógica: primero existe, después se determina su conjunto

> **Fuente:** `.docx` P3 + `u4-logico.md` IMG5 + [Notion].

- IMG5: «el concepto de variable es el [que] impera en lógica, es decir, la pertenencia a un conjunto del valor de una variable es algo posterior a la existencia de esta variable».
- `.docx` P3: «primero existe la variable, luego determino qué es, es decir su conjunto de pertenencia. […] la variable no está amarrada a un tipo […] puede tener un valor de un tipo determinado en cierto momento, pero es factible que luego esa variable se desligue de ese valor, quede indeterminada y que luego tome otro valor de un tipo diferente.»
- [Explicación pedagógica — elaboración propia] Contrasta con la variable imperativa (casilla tipada en RAM): aquí la variable es un marcador lógico cuya ligadura es provisional y revisable durante la demostración. Esta frase es una ayuda didáctica; el contenido factual es el citado arriba.

## C6. Dominio: individuos para los que el predicado es verdadero

> **Fuente:** `.docx` P3 (última oración).

- «Son los individuos para los cuales un cierto predicado es verdadero, pero pueden ser de conjuntos muy distintos para los cuales sus individuos cumplen el predicado.»
- [Explicación pedagógica — elaboración propia] Léase «dominio» como el universo de discurso del predicado en cuestión, heterogéneo por naturaleza. No hay más detalle en fuentes.
- [VACÍO: sin fuente] Dominios declarados en Prolog, datos compuestos y listas: ausentes en las tres fuentes.

## C7. Demostrar = partir de premisas y aplicar reglas de inferencia

> **Fuente:** `u4-logico.md` IMG6 [transcrito de imagen, por verificar] + [Notion].

- «¿Cómo se demuestra? A partir de un conjunto de premisas que se asumen verdaderas, se aplican las reglas de inferencia hasta que se puede llegar a la conclusión.»
- Sistema de Copi (el de Matemática Discreta): 9 reglas de inferencia + 10 de sustitución + 4 de cuantificación + 2 de negación del cuantificador + (opcionalmente) 4 de igualdad.
- [Notion] confirma el mismo inventario (9 + 10 + 4 + 2 + 4).

## C8. Copi es poco práctico → modus ponens y cálculo de cláusulas

> **Fuente:** `u4-logico.md` IMG7 [transcrito de imagen, por verificar] + [Notion].

- Copi «es muy poco práctico para una computadora»; «los algoritmos de demostración usando el sistema de Copi son NP» [POR-VERIFICAR].
- Alternativas con menos reglas/operadores:
  - Sistemas basados en modus ponens: dos operadores y una sola regla (MP).
  - Cálculo de cláusulas: sin operadores y una sola regla, resolución (con unificación).
- «Con restricciones adicionales, los algoritmos de manejo de estos sistemas son de tipo P» [POR-VERIFICAR].
- [VACÍO: sin fuente] Algoritmo de unificación paso a paso, forma clausal, resolución aplicada, backtracking, orden de cláusulas, corte (`!`), `fail`.

## C9. Límite de reconocibilidad (afirmación del .docx)

> **Fuente:** `.docx` P1.

- «No se puede usar directamente el mismo lenguaje de calculo de primer orden porque esta demostrado que una maquina Turing completa no lo puede reconocer.» (transcripción literal, con ortografía original).
- [POR-VERIFICAR] El enunciado es dudoso tal cual (una máquina de Turing completa sí reconoce lenguajes formales; lo que la literatura discute es decidibilidad/semidecidibilidad de CP1 y la necesidad de fragmentos restringidos como cláusulas de Horn). Se cita sin corregir; no se usa como premisa de ningún otro bloque.
- [Notion] formula la contraparte positiva: el paradigma exige gramática reconocible + ejecución-demostración.
