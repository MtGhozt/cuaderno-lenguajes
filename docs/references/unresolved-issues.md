# Issues sin resolver (unresolved-issues)

## [CONFLICTO entre fuentes]

1. **Haskell `Sumaprod :: int → …`**: [Notion S6C2] usa `int` minúscula y `→`;
   Haskell real exige `Int` y `->`. Tratar como pseudocódigo de clase.
2. **"Binding: coherencia semántica…"** (cuaderno p4): el contenido corresponde a
   **cohesión**, no a binding. Posible confusión del apunte.
3. **Asignación Pascal**: el cuaderno p3 anota `Asignación ":" y comparación ":="`;
   Pascal usa `:=` para asignación y `=` para comparación. Posible inversión.
4. **Palabras reservadas**: cuaderno p3 dice COBOL "90 y pico", Pascal 14, C 14.
   C89 tiene 32 keywords; Pascal estándar ~35+; COBOL cientos. Cifras por verificar.

## [POR-VERIFICAR] (absolutos y cifras)

5. "Lenguajes de programación son tipo 2 **únicamente**; ensamblador tipo 3".
6. "VM como intérprete **siempre** es ineficiente".
7. "El compilador revisa sintaxis y **genera la semántica**".
8. "Copi es NP; sistemas restringidos son P".
9. "Turing completa no reconoce CP1" (formulación del docx).
10. "Todos los lenguajes son Turing completos" (vale para propósito general).
11. Grafías: "Giusseppe [sic]", "Bell-La Padulla [sic]", "occaml" (programa), "Friedaman".
12. Código de clase con sintaxis sospechosa: `(car 5 2 10)`, `(define (f a b c)())`,
    `sumaprod`, `mcm` con `/` vs `div`, `(+ a b - c)`.
13. "CP10/CP1o" por CP1; "agentes" por clases (cuaderno p1).

## [POR-VERIFICAR] — Guía Jorge (fuente secundaria; detalle en transcripciones/guia-jorge-extract-a/b.md)

21. Absolutos: "sin mutexes", "lineal determinista SLD", "TCO demuestra que los
    bucles son innecesarios", "parábola perfecta / catenaria estricta",
    "el programa jamás se congela".
22. Cifras/fechas: Boehm 1x/5-10x/50-100x, COBOL 5-10x líneas, genealogía
    1950-2000s (cada fecha/autor), Lamé 5×dígitos, Collatz 1937, Galileo 1638.
23. Código: `patronEnLinea` indefinida, String/lazy-IO sin matices, `false` vs
    `no` según motor Prolog, car/cdr = IBM 704 (etimología discutida).
24. Física catenaria (EDO, Taylor, Veritasium) y simulación: fuera del alcance
    de lenguajes; solo se integró el enunciado y el encuadre por paradigma.

## [VACÍO: sin fuente]

14. U4: sintaxis Prolog, unificación paso a paso, backtracking/orden, corte y fail,
    dominios, listas, datos compuestos.
15. U1: definición de binding/alcance más allá de la base de Notion Resumen.
16. Notion Semana 4 Clase 2 y Semana 7 Clase 2: vacías y **no localizadas**
    por el estudiante (se asume sin contenido evaluable). Marcadas [VACÍO].
17. Imágenes marcadas [ILEGIBLE]: timeline historia (u1 IMG25), detalles menores.

## Notas de alcance

18. U2 incorporado (cuaderno p3–p6 + Notion S6C1 + imágenes intro). Paso de
    parámetros (2.2) sigue [VACÍO]. Cuaderno p3–p6 y cuaderno-p3…p6.jpg no se
    copiaron a docs/assets (solo p1–p2); la fuente es el PDF original.
19. Páginas MongoDB de Notion excluidas (Bases de datos II).
20. Programa: horas de consulta contradictorias; vigencia 2018 vs curso 2026;
    objetivo general ajeno ("…naturaleza"); "circuitos digitales" en metodología.
