# Semana_3_Clase_2.md

## Temas (lista de titulares de cada sección con 1 línea descriptiva)

- 1. Criterios Formales de Evaluación y Diseño de Lenguajes — El diseño es compromisos (trade-offs), no existe el "lenguaje perfecto".
- 1.1 Legibilidad (Readability) — Facilidad de inspeccionar el código y deducir su comportamiento: simplicidad, ortogonalidad, control claro, tipos expresivos.
- 1.2 Facilidad de Escritura (Writability) — Expresar algoritmos concisa y naturalmente: abstracción y expresividad.
- 1.3 Confiabilidad (Reliability) — Comportarse según especificaciones: chequeo de tipos, manejo de excepciones, restricción de aliasing.
- 1.4 Naturalidad vs. Universalidad — Naturalidad (correspondencia con el dominio, ej. SQL/R/Fortran) frente a universalidad (Turing-completitud).
- 1.5 Ortogonalidad: Definición Formal y Ejemplos — Alta ortogonalidad (Algol 68) frente a baja ortogonalidad (C clásico: arrays, parámetros, asignación).
- 2. Sintaxis y Ambigüedad Formal — Gramáticas libres de contexto (CFG) y BNF.
- 2.1 Gramáticas Libres de Contexto (CFG) y BNF — Definición como 4-tupla G = (V_N, V_T, P, S).
- 2.2 Definición Formal de Ambigüedad — Existe cadena w en L(G) con dos o más árboles/derivaciones más a la izquierda.
- 2.3 El Problema del Dangling Else (el `else` colgante) — Gramática if-then / if-then-else, ejemplo Pascal `if A < 2 then if A > 10 then write('X') else write('Y')`, dos árboles, consecuencia semántica y 3 métodos de resolución.
- 3. El Modelo Concéntrico de las 6 Capas Lingüísticas — Modelo derivado de la lingüística formal, de base física al contexto.
- 3.1 Análisis Detallado de Cada Capa y su Contraparte Informática — Tabla Fonética/Fonología/Morfología/Sintaxis/Semántica/Pragmática con equivalente, herramienta y error típico.
- 4. Material Extra de Refuerzo para el Examen — Matriz de clasificación de errores, ejercicio resuelto y banco de preguntas.
- 4.1 Matriz de Clasificación de Errores por Capa — 5 ejemplos: léxico, sintáctico, semántico estático, semántico dinámico, semántico/pragmático.
- 4.2 Ejercicio Práctico Resuelto: Desambiguación Gramatical — Gramática E → E+E | E*E | id.
- 4.3 Banco de Preguntas de Autoevaluación — 4 pares pregunta-respuesta.

## Conceptos con LaTeX (lista cada fórmula/definición formal: qué dice, en palabras)

- `$T$` — Dice: tipo T; cualquier expresión que produzca un valor de tipo T puede usarse donde se requiera T (alta ortogonalidad Algol 68).
- `$$G = (V_N, V_T, P, S)$$` — Dice: una gramática formal es una 4-tupla de no terminales, terminales, producciones y símbolo inicial.
- `$V_N$` — Dice: conjunto finito de símbolos no terminales (categorías sintácticas).
- `$V_T$` — Dice: conjunto finito de símbolos terminales (tokens o palabras clave).
- `$P$`, `$A \to \alpha$`, `$A \in V_N$`, `$\alpha \in (V_N \cup V_T)^*$` — Dice: conjunto de reglas de producción de la forma A deriva alfa, con A no terminal y alfa cadena de terminales/no terminales.
- `$S \in V_N$` — Dice: S es el símbolo inicial, miembro de los no terminales.
- `$G$ es ambigua si existe $w \in L(G)$ con dos o más árboles/derivaciones leftmost` — Dice: definición formal de ambigüedad.
- Gramática Stmt: `$$\begin{aligned} \text{Stmt} &\to \text{if } \text{Expr} \text{ then } \text{Stmt} \\ &\mid \text{if } \text{Expr} \text{ then } \text{Stmt} \text{ else } \text{Stmt} \\ &\mid \text{asignacion} \mid \text{otro} \end{aligned}$$` — Dice: reglas del condicional con y sin else.
- `$A = 5$`, `$A < 2$`, `$A > 10$` — Dice: valores/condiciones del ejemplo para mostrar la diferencia semántica entre asociar el else al if externo (imprime 'Y') o al interno (no imprime nada).
- Gramática desambiguada: `$$\begin{aligned} \text{Stmt} &\to \text{MatchedStmt} \mid \text{OpenStmt} \\ \text{MatchedStmt} &\to \text{if } \text{Expr} \text{ then } \text{MatchedStmt} \text{ else } \text{MatchedStmt} \mid \text{otro} \\ \text{OpenStmt} &\to \text{if } \text{Expr} \text{ then } \text{Stmt} \\ &\mid \text{if } \text{Expr} \text{ then } \text{MatchedStmt} \text{ else } \text{OpenStmt} \end{aligned}$$` — Dice: división en sentencias cerradas (matched) y abiertas (open).
- `$\mathcal{O}(n^3)$` — Dice: ejemplo de error pragmático: usar algoritmo cúbico para sistema en tiempo real.
- `$\to$` en lista 4.1 — Dice: mapeo de cada ejemplo de código a su capa de error.
- `$$E \to E + E \mid E * E \mid \text{id}$$` — Dice: gramática aritmética clásica del ejercicio.
- `$\text{id} + \text{id} * \text{id}$` — Dice: cadena concreta para demostrar ambigüedad.
- `$$E \Rightarrow E + E \Rightarrow \text{id} + E \Rightarrow \text{id} + E * E \Rightarrow \text{id} + \text{id} * \text{id}$$` (Derivación A) — Dice: derivación más a la izquierda que da prioridad al producto.
- `$$E \Rightarrow E * E \Rightarrow E + E * E \Rightarrow \text{id} + E * E \Rightarrow \text{id} + \text{id} * E \Rightarrow \text{id} + \text{id} * \text{id}$$` (Derivación B) — Dice: derivación más a la izquierda que da prioridad a la suma.
- `$$\begin{aligned} E &\to E + T \mid T \\ T &\to T * F \mid F \\ F &\to \text{id} \mid ( E ) \end{aligned}$$`, con `$E$, $T$, $F$` — Dice: gramática desambiguada con jerarquía (E aditiva, T multiplicativa, F atómica), precedencia del producto y asociatividad izquierda.
- `$\mathcal{O}(1)$` no aparece en este archivo (aparece en S4C1/S4C2); en este archivo solo `$\mathcal{O}(n^3)$` citado arriba.

## Diagramas Mermaid (por cada uno: tipo + qué nodos/relaciones muestra, en palabras)

- Diagrama 1 (sección 1): `graph TD`, subgrafo "Criterios Principales de Evaluación" con 4 nodos: Legibilidad, Facilidad de Escritura, Confiabilidad, Costo. Relaciones: Legibilidad → Confiabilidad, Escritura → Confiabilidad, Confiabilidad → Costo.
- Diagrama 2 (sección 3): `flowchart TD`, subgrafo "Capas Lingüísticas (De la Base Física al Contexto)" con 6 nodos en cadena: 1 Fonética (hardware/bits), 2 Fonología (caracteres/UTF-8/ASCII), 3 Morfología (léxico/tokens), 4 Sintaxis (CFG/AST), 5 Semántica (tipos/ejecución), 6 Pragmática (propósito/contexto). Relaciones lineales L1→L2→L3→L4→L5→L6.

## Banco de preguntas (transcribe ÍNTEGRO cada par pregunta-respuesta del material extra)

1. **¿Qué relación existe entre la ortogonalidad de un lenguaje y su confiabilidad?**
   * *Respuesta:* Una alta ortogonalidad favorece la confiabilidad porque reduce la cantidad de reglas especiales y excepciones sintácticas que el programador debe memorizar, minimizando la aparición de errores no previstos. Sin embargo, un exceso de ortogonalidad mal regulado puede permitir combinaciones extrañas que compliquen la detección estática de errores.

2. **¿Cómo se soluciona formalmente el problema del *Dangling Else* a nivel sintáctico en un compilador moderno sin modificar la gramática?**
   * *Respuesta:* Mediante una regla de desambiguación pragmática en la tabla de análisis sintáctico del parser (resolución de conflictos *shift/reduce* dando preferencia a la acción *shift*), lo que asocia automáticamente el `else` con el `if` más inmediato.

3. **¿Cuál es la función exacta de la capa morfológica en el proceso de compilación?**
   * *Respuesta:* La capa morfológica se materializa en el **analizador léxico (scanner)**, cuya tarea es leer la secuencia lineal de caracteres del código fuente y agruparlos en unidades con significado léxico llamadas **tokens**, descartando comentarios y espacios en blanco.

4. **Explique la diferencia entre Semántica Estática y Semántica Dinámica:**
   * *Respuesta:* La **Semántica Estática** comprende todas las restricciones y significados que pueden validarse durante la compilación sin ejecutar el programa (ej. comprobación de tipos, verificación de que las variables estén declaradas en el ámbito actual). La **Semántica Dinámica** define el significado de las instrucciones durante la ejecución y la forma en que el estado de la memoria y la máquina se transforma en el tiempo.

## Ejercicios resueltos (describe el problema y la solución dada, con el código si lo hay)

- Ejercicio 4.2 Desambiguación Gramatical. Problema: dada `E → E + E | E * E | id`, 1) demostrar ambigüedad para `id + id * id`, 2) reescribir no ambigua con mayor precedencia de * sobre + y asociatividad izquierda. Solución dada: 1) dos derivaciones leftmost (A da prioridad al producto, B da prioridad a la suma) → dos árboles → ambigua. 2) Jerarquía E/T/F: `E → E + T | T`, `T → T * F | F`, `F → id | ( E )`; el producto se resuelve en niveles más profundos (mayor precedencia) y la recursión izquierda fuerza asociatividad izquierda. Sin código de lenguaje, solo derivaciones y gramática.
- Matriz 4.1 (5 mini-ejemplos clasificatorios, sin código ejecutable salvo snippets): `int 9valor = 50;` → léxico/morfológico; `if (a > 0 then x = 1;` → sintáctico por falta de `)`; `int *p = 3.14159;` → semántico estático; `int x = 10 / 0;` → semántico dinámico; Fibonacci sin contemplar negativos y se cuelga → defecto semántico/pragmático.
- Ejemplo Dangling Else (sección 2.3, con código Pascal): problema `if A < 2 then if A > 10 then write('X') else write('Y');` con dos árboles; solución dada: interpretación 1 (else al externo, con A=5 imprime 'Y') vs interpretación 2 oficial (else al interno más cercano, con A=5 no imprime nada); resoluciones: regla ad-hoc, reescritura Matched/Open, cierres explícitos (`begin...end`, `{...}`, `endif`/indentación/`fi`). Código:
```pascal
if A < 2 then if A > 10 then write('X') else write('Y');
```

## Posibles conflictos (afirmaciones que suenen absolutas, cifras, o que contradigan conocimiento estándar; márcalas [REVISAR])

- "No existe el 'lenguaje perfecto'" [REVISAR: afirmación absoluta/filosófica].
- "Una concisión extrema en la escritura suele destruir la legibilidad (ej. APL o regex crípticas)" [REVISAR: generalización absoluta].
- "En C ... no puede retornar un arreglo directamente / arreglos siempre decaen / no se puede asignar arreglo con =" [REVISAR: depende de estándar/extensiones; verificar redacción].
- "La mayoría de los compiladores de Pascal y C implementan la regla del if más cercano" [REVISAR: cuantificador "mayoría" sin fuente].
- Tabla de capas: herramientas `Lex/Flex` para léxico y `Yacc/Bison` con parsers LL vs LR/LALR [REVISAR: LL no es Yacc/Bison típico].
- "`int *p = 3.14159;` incompatibilidad detectada en compilación" [REVISAR: en C es warning convertible, no siempre error].
- "`int x = 10 / 0;` excepción en tiempo de ejecución" [REVISAR: en C es comportamiento indefinido en compilación/ejecución, no excepción uniforme].
- "Fibonacci ... defecto Semántico/Pragmático: violación de precondiciones" [REVISAR: clasificación discutible].
- "Usar C para JSON cuando Python es idóneo" y "O(n³) para tiempo real" como errores pragmáticos [REVISAR: juicios absolutos de idoneidad].

## Cobertura (¿de qué unidad IC-4700 es: U1/U2/U3/U4? ¿cubre las clases vacías S4C2?)

- Unidad estimada: U1 (fundamentos/criterios de diseño, naturalidad/universalidad) y U2 (sintaxis: CFG/BNF, ambigüedad, dangling else; semántica estática/dinámica; capas léxico/sintáctico/semántico).
- No cubre S4C2 (genealogía moderna, Logo/KTurtle, catenaria, Tres Amigas, filtrado ASCII). Es material previo/distinto a S4C2.

---

# Semana_4_Clase_1.md

## Temas (lista de titulares de cada sección con 1 línea descriptiva)

- 1. El Ciclo de Vida del Software y el Diseño de Lenguajes — Fases formales y cómo los lenguajes apoyan/mitigan riesgos en cada fase.
- 1.1 El Costo del Error según la Fase de Detección — Regla de Boehm: el costo crece exponencialmente con la fase.
- 1.2 Influencia del Lenguaje en el Ciclo de Vida — Tipos estáticos ricos (diseño), funciones puras (pruebas), legibilidad/modularidad-Parnas (mantenimiento).
- 2. Taxonomía Exhaustiva de Paradigmas de Programación — Matriz: unidad básica, control, estado, fundamento teórico, lenguajes por 6 paradigmas.
- 3. Genealogía Técnica de los Lenguajes Fundacionales (1950-1980) — Hitos técnicos y aportes estructurales por lenguaje, sin anécdotas.
- 3.1 Fortran (1957 - John Backus, IBM) — Primer alto nivel con compilador optimizador; infijas, arreglos, DO loop.
- 3.2 COBOL (1959 - CODASYL/Hopper) — Registros comerciales; 4 divisiones, registro jerárquico, decimal punto fijo.
- 3.3 LISP (1958 - McCarthy, MIT) — Cómputo funcional/simbólico; homoiconicidad, GC Mark and Sweep, CONS/CAR/CDR.
- 3.4 Algol 60 (IFIP) — Ancestro imperativo estructurado; BNF, bloques léxicos, pila/recursión, paso valor/nombre.
- 3.5 Simula 67 (Dahl y Nygaard) — Nacimiento POO; clases/objetos/heap, herencia, virtuales, corrutinas detach/resume.
- 3.6 Smalltalk (Kay, Ingalls, Goldberg, Xerox PARC) — POO pura y GUI; todo es objeto, paso de mensajes, control como mensajes.
- 3.7 Scheme (1975 - Sussman y Steele, MIT) — LISP minimalista; alcance léxico/closures, TCO, call/cc.
- 3.8 Prolog (1972 - Colmerauer y Kowalski) — Lógica declarativa; Cláusulas de Horn, inferencia, unificación/backtracking.
- 3.9 CLU (1974 - Liskov, MIT) — ADT; genéricos, encapsulamiento, signal/except, yield.
- 3.10 AWK (1977 - Aho, Weinberger, Kernighan) — Texto registros/columnas; Patrón{Acción}, $1..$NF, arreglos asociativos.
- 4. Material Extra de Refuerzo para el Examen — Paso de parámetros/Jensen y banco de preguntas.
- 4.1 Análisis Comparativo de Mecanismos de Paso de Parámetros — Valor vs referencia vs nombre; Dispositivo de Jensen y Sum en Algol 60.
- 4.2 Banco de Preguntas de Autoevaluación — 4 pares pregunta-respuesta.

## Conceptos con LaTeX (lista cada fórmula/definición formal: qué dice, en palabras)

- `$1\times$` — Dice: costo base si el error se detecta en fase 1 (requerimientos).
- `$5\times$ a $10\times$` — Dice: costo si el mismo error se detecta en codificación.
- `$50\times$ y $100\times$` — Dice: costo si se detecta en producción/mantenimiento.
- `$A = B * C + D$` — Dice: ejemplo de expresión aritmética infija compleja introducida por Fortran.
- `$\pi$-calculus` (junto a CSP de Hoare) — Dice: fundamento teórico del paradigma concurrente/paralelo.
- `$\mathcal{O}(1)$` — Dice: costo espacial constante al usar TCO en Scheme (recursión reemplaza bucles).
- `$$\sum_{i=1}^{n} V(i)$$` — Dice: sumatoria matemática general que el Dispositivo de Jensen expresa en Algol 60.
- `$i$`, `$k$`, `A[i]` — Dice: índice y expresión dependiente que se re-evalúa en cada iteración con paso por nombre.
- `$A \leftarrow B_1 \land B_2 \land \dots \land B_n$` — Dice: forma de Cláusula de Horn base de Prolog.
- `$$\text{Código} \equiv \text{Datos}$$` — Dice: homoiconicidad LISP (el código es la misma estructura que manipula).

## Diagramas Mermaid (por cada uno: tipo + qué nodos/relaciones muestra, en palabras)

- Diagrama 1 (sección 1): `flowchart LR` del ciclo de vida con 6 nodos en cadena: 1 Requerimientos/Casos de Uso → 2 Arquitectura/Diseño → 3 Planes de Prueba → 4 Codificación (Lenguaje) → 5 Verificación/Pruebas → 6 Despliegue/Mantenimiento, más arista punteada de retorno 6→1 etiquetada Feedback/Evolución.
- Diagrama 2 (sección 3): `flowchart TD` genealógico 1950-1980. Nodos: Fortran; Flow-Matic(Hopper)→COBOL; IPL→LISP; Algol58→Algol60→(Algol68, Simula67, Pascal, C); LISP→Scheme; Simula67→Smalltalk; Predicados→Prolog; Algol68→CLU; C→AWK. Muestra derivaciones con etiquetas de aporte (matrices, registros, listas/GC, bloques/BNF/recursión, ortogonalidad, clases/herencia, enseñanza, sistemas/punteros, alcance léxico/TCO/closures, POO pura/GUI, hechos/reglas/unificación, ADT/excepciones/iteradores, texto/regex).
- Diagrama 3 (sección 4.1): `flowchart TD` de paso de parámetros. Nodo raíz "Mecanismos" con 3 ramas: Valor (copia, no afecta original), Referencia (dirección, muta externa/aliasing), Nombre Algol 60 (sustitución textual, re-evaluación en ámbito llamador cada vez).

## Banco de preguntas (transcribe ÍNTEGRO cada par pregunta-respuesta del material extra)

1. **¿Qué diferencia conceptual fundamental existe entre la estructura de objetos en Simula 67 y en Smalltalk?**
   * *Respuesta:* En Simula 67 los objetos coexisten con el modelo procedural clásico de Algol y las llamadas a métodos son invocaciones estáticas o indirectas con verificación de tipos. En Smalltalk la orientación a objetos es ontológicamente pura ("todo es un objeto"), no existen tipos primitivos y la ejecución se basa enteramente en el paso dinámico de mensajes a receptores en tiempo de ejecución.

2. **¿Por qué la introducción de las Cláusulas de Horn fue decisiva para el surgimiento práctico de Prolog?**
   * *Respuesta:* Porque la demostración automática de teoremas en la lógica general de primer orden es computacionalmente intratable (indecidible o con complejidad factorial/exponencial inmanejable). Al restringir las fórmulas lógicas a Cláusulas de Horn (a lo sumo un literal positivo), el algoritmo de resolución SLD permite una búsqueda lineal determinista y eficiente mediante unificación y retroceso.

3. **¿Cuál fue la contribución de Gerald Sussman y Guy Steele con Scheme respecto a la memoria y la recursión?**
   * *Respuesta:* Impusieron por especificación de lenguaje que toda llamada recursiva en posición de cola debe ejecutarse con Optimización de Llamada de Cola (TCO), reutilizando el marco de pila del llamador. Esto garantizó que algoritmos iterativos expresados recursivamente se ejecuten con consumo de memoria constante $\mathcal{O}(1)$, demostrando que los bucles imperativos son innecesarios.

4. **¿Cómo influyó el lenguaje CLU de Barbara Liskov en la evolución hacia la programación modular y orientada a objetos moderna?**
   * *Respuesta:* CLU formalizó el concepto de Tipo Abstracto de Datos (ADT), introduciendo el encapsulamiento estricto de la representación interna, los generadores iterativos (`yield`), el manejo formal de excepciones estructuradas y la parametrización de tipos (semilla de las plantillas en C++ y genéricos en Java/C#).

## Ejercicios resueltos (describe el problema y la solución dada, con el código si lo hay)

- Ejercicio 4.1 El Dispositivo de Jensen (Jensen's Device) en Algol 60. Problema: expresar sumatoria general pasando índice y expresión dependiente del índice, aprovechando paso por nombre. Solución dada: procedimiento `Sum(k, lower, upper, expr)` con `value lower, upper`, ciclo `for k := lower step 1 until upper do s := s + expr`; `expr` se evalúa cada ciclo con el nuevo `k`; ejemplo de llamada `Sum(i, 1, 100, A[i])`. Código:
```algol
real procedure Sum(k, lower, upper, expr);
    value lower, upper;
    integer k, lower, upper;
    real expr;
begin
    real s;
    s := 0;
    for k := lower step 1 until upper do
        s := s + expr;  ! 'expr' se evalúa en cada ciclo con el nuevo valor de k !
    Sum := s
end;
```
- Mini-ejemplos COBOL/Smalltalk (secciones 3.2/3.6, ilustrativos, no son ejercicios a resolver): registro jerárquico COBOL con niveles 01/05/10 y PIC; mensajes Smalltalk `3 + 4` y `(x > 0) ifTrue: [ y := 1 ] ifFalse: [ y := -1 ]`. Códigos:
```cobol
01  REGISTRO-EMPLEADO.
    05  ID-NUMERO       PIC 9(6).
    05  NOMBRE-COMPLETO.
        10  PRIMER-NOMBRE PIC X(20).
        10  APELLIDO      PIC X(20).
    05  SALARIO-BASE     PIC 9(7)V99.
```
```smalltalk
3 + 4   "Envía el mensaje '+' con argumento 4 al objeto receptor 3"
```
```smalltalk
(x > 0) ifTrue: [ y := 1 ] ifFalse: [ y := -1 ]
```

## Posibles conflictos (afirmaciones que suenen absolutas, cifras, o que contradigan conocimiento estándar; márcalas [REVISAR])

- Costos Boehm `$1\times$`, `$5\times$-$10\times$`, `$50\times$-$100\times$` [REVISAR: cifras redondas sin fuente; varían por estudio].
- "Haskell, Rust, Ada permiten imposibilitar estados inválidos antes de escribir código ('Make illegal states unrepresentable')" [REVISAR: absoluto].
- "Funciones puras eliminan dependencias de estado oculto y posibilitan pruebas sin mocks complejos" [REVISAR: absoluto].
- "Parnas" y modularidad reducen tiempo de comprensión [REVISAR: atribución genérica].
- Fechas/autores: Fortran 1957 Backus IBM; COBOL 1959 CODASYL/Hopper; LISP 1958 McCarthy MIT; Simula 67 Dahl/Nygaard; Smalltalk 1972-80 Kay; Scheme 1975 Sussman/Steele; Prolog 1972 Colmerauer; CLU 1974 Liskov; AWK 1977 Aho/Weinberger/Kernighan [REVISAR: verificar cada fecha/autor/sigla].
- "column-major order" en Fortran [REVISAR: verificar].
- "Mark and Sweep" como primer GC LISP [REVISAR: verificar algoritmo exacto].
- "`car` = Contents of Address Register, `cdr` = Contents of Decrement Register" [REVISAR: etimología IBM 704 discutida].
- "Lógica general indecidible o factorial/exponencial; Horn permite búsqueda lineal determinista y eficiente" [REVISAR: "lineal determinista" es simplificación fuerte].
- "TCO ... demostrando que los bucles imperativos son innecesarios" [REVISAR: absoluto].
- "CLU semilla de plantillas C++ y genéricos Java/C#" [REVISAR: causalidad directa].

## Cobertura (¿de qué unidad IC-4700 es: U1/U2/U3/U4? ¿cubre las clases vacías S4C2?)

- Unidad estimada: U1 (ciclo de vida, paradigmas, genealogía fundacional 1950-1980) con anticipos de U3 (funcional: LISP/Scheme) y U4 (lógico: Prolog) y scripting (AWK).
- No cubre S4C2 (genealogía moderna 1980-actualidad, Logo/KTurtle, catenaria, Tres Amigas, filtrado ASCII). Es la clase previa a S4C2.

---

# Semana_4_Clase_2.md

## Temas (lista de titulares de cada sección con 1 línea descriptiva)

- 1. Genealogía Técnica de los Lenguajes Modernos (1980-2000s) — Hitos e innovaciones arquitecturales de la era moderna.
- 1.1 Haskell 1.0 (1990 - Comité Haskell) — Funcional puro no estricto, Hindley-Milner, typeclasses, mónadas IO.
- 1.2 Common Lisp y CLOS (1984-1988) — Multimétodos/despacho múltiple y MOP.
- 1.3 Self (Ungar y Smith) — Prototipos, slots, delegación dinámica.
- 1.4 Eiffel (Bertrand Meyer) — Diseño por Contrato (require/ensure/invariant) y CQS.
- 1.5 Python (van Rossum, 1991) — Off-side/sangría significativa, multiparadigma dinámico fuerte.
- 1.6 Java (Gosling, Sun, 1995) — JVM/bytecode WORA, seguridad de memoria, clases/interfaces sin herencia múltiple.
- 1.7 JavaScript (Eich, Netscape, 1995) — Síntesis C/Java + closures Scheme + prototipos Self.
- 2. Logo, Seymour Papert y el Constructivismo Pedagógico — Demostración KTurtle y micromundos.
- 2.1 Fundamentos Pedagógicos de Papert — Micromundos y geometría de la tortuga (egocéntrica/relativa vs cartesiana absoluta).
- 2.2 Demostración Práctica en KTurtle — Primitivas y polígono regular de N lados; ángulo total 360°.
- 3. Los Tres Problemas Representativos de Asignación — Documento de cátedra con 3 clásicos del curso.
- PROBLEMA 1: La Curva Catenaria (Cálculo Científico y Modelado) — Cable entre dos puntos, punto más bajo en (0,0), función de la forma; deducción, solución cosh, aproximación parabólica Galileo/Taylor, puente colgante.
- PROBLEMA 2: Acertijo Lógico de Restricciones (Las Tres Amigas - CSP) — Nombres/apellidos/profesiones con 6 pistas; resolución paso a paso, matriz final y modelado Prolog.
- PROBLEMA 3: Filtrado de Texto Plano ASCII — Líneas donde aparece patrón con número; comparativa C vs AWK/Bash/Python vs Haskell.
- 4. Material Extra de Refuerzo para el Examen — Banco de preguntas.
- 4.1 Banco de Preguntas de Autoevaluación — 3 pares pregunta-respuesta.

## Conceptos con LaTeX (lista cada fórmula/definición formal: qué dice, en palabras)

- `$(x, y)$` — Dice: coordenadas absolutas cartesianas tradicionales (puntos fijos en cuadrícula externa).
- `$\theta$` — Dice: orientación angular actual de la tortuga.
- `$\vec{p}' = \vec{p} + d \begin{pmatrix} \cos\theta \\ \sin\theta \end{pmatrix}$` — Dice: desplazamiento hacia adelante/atrás relativo al vector actual.
- `$\theta' = \theta \pm \Delta\theta$` — Dice: rotación sobre su propio eje.
- `$(0,0)$`, `$(0, a)$` — Dice: punto más bajo de la catenaria alineado al origen, y forma canónica con asíntota en (0,a).
- `$ds = \sqrt{1 + (y')^2} \, dx$`, `$\mu$`, `$T$`, `$T_0$`, `$s$`, `$g$` — Dice: arco infinitesimal, masa por longitud, tensión, tensión horizontal constante, longitud soportada, gravedad para el balance.
- `$$T \cos\theta = T_0 \quad (\text{tensión horizontal constante})$$` — Dice: componente horizontal en equilibrio.
- `$$T \sin\theta = \mu g s \quad (\text{peso soportado hasta el punto})$$` — Dice: componente vertical por peso.
- `$$\tan\theta = \frac{dy}{dx} = \frac{\mu g}{T_0} s$$` — Dice: cociente que liga pendiente con peso/tensión.
- `$$\frac{d^2 y}{dx^2} = \frac{\mu g}{T_0} \frac{ds}{dx} = \frac{1}{a} \sqrt{1 + \left(\frac{dy}{dx}\right)^2}, \quad \text{donde } a = \frac{T_0}{\mu g}$$` — Dice: ecuación diferencial de la catenaria con parámetro a.
- `$y(0) = 0$`, `$y'(0) = 0$` — Dice: condiciones de frontera (punto más bajo horizontal en origen).
- `$$y(x) = a \cosh\left(\frac{x}{a}\right) - a = \frac{a}{2} \left(e^{x/a} + e^{-x/a}\right) - a$$`, y canónica `$y(x) = a \cosh(x/a)$` — Dice: solución analítica exacta.
- `$$\cosh(u) = 1 + \frac{u^2}{2!} + \frac{u^4}{4!} + \dots$$`, `$u = x/a$` — Dice: serie de Taylor de cosh alrededor de 0.
- `$$y(x) = a \left(1 + \frac{x^2}{2a^2} + \mathcal{O}(x^4)\right) - a \approx \frac{x^2}{2a}$$`, `$y \propto x^2$`, `$x \ll a$` — Dice: para deflexiones pequeñas la catenaria es casi parábola.
- `$w(x) = \text{cte}$` — Dice: carga uniforme horizontal en puente colgante (cable portador parabólico).
- `$N = \{ \text{Beatriz}, \text{María}, \text{Alicia} \}$`, `$A = \{ \text{García}, \text{López}, \text{Méndez} \}$`, `$P = \{ \text{Ingeniera}, \text{Actriz}, \text{Maestra} \}$` — Dice: dominios finitos del acertijo.
- `$N \leftrightarrow A$`, `$A \leftrightarrow P$` biyectivas — Dice: relaciones unívocas por pista 6.
- `$\sum \Delta\theta = 360^\circ$` — Dice: teorema del ángulo total de giro interiorizado al dibujar polígono.
- `$\cosh(x/a) \approx 1 + \frac{x^2}{2a^2}$`, `$\frac{x^4}{24a^4} + \dots$`, `$x/a$` — Dice: aproximación y términos superiores que la rompen en cables profundos (banco pregunta 2).

## Diagramas Mermaid (por cada uno: tipo + qué nodos/relaciones muestra, en palabras)

- Diagrama 1 (sección 1): `flowchart TD` genealógico moderno. Nodos: ML/Miranda→Haskell; LISP→CLOS; Smalltalk→Self; Simula67→Eiffel; ABC→Python; C/C++→Java; Self+Scheme+C/C++→JS; Smalltalk+Perl→Ruby; Java+C/C++→C#. Etiquetas de aporte (lazy/typeclasses/mónadas, multimétodos/MOP, prototipos/slots/delegación, DbC, indentación/multiparadigma, JVM/bytecode, prototipos+closures+web, POO/bloques/metaprog, .NET/tipado).
- Diagrama 2 (sección 2): `graph LR` pedagógico. Cadena: Epistemología Genética (Piaget) → Constructivismo (Papert) → 'Objetos para pensar' (Micromundos) → Tortuga Gráfica de Logo → Formalización Algorítmica Cinestésica.
- Diagrama 3 (sección 3, Problema 2): `flowchart TD` de deducción CSP. Subgrafo Dominio Inicial (Nombres/Apellidos/Profesiones) más nodos Pista2 (López=Ingeniera), Pista3 (María=Actriz), Pista4 (Maestra≠Méndez), Pista1 (Beatriz≠García); cadena Ded1→Ded2→Ded3→Ded4→Ded5→Ded6→Ded7 hasta asignaciones finales (María Méndez Actriz; Beatriz López Ingeniera; Alicia García Maestra).
- Figura ASCII Problema 1 (no Mermaid, dibujo texto): dos tensiones T1/T2 arriba, curva colgante simétrica con punto (0,0) al centro.

## Banco de preguntas (transcribe ÍNTEGRO cada par pregunta-respuesta del material extra)

1. **¿Qué diferencia fundamental existe entre el sistema de tipos de Java y las clases de tipos (*typeclasses*) de Haskell?**
   * *Respuesta:* En Java el polimorfismo se basa en subtipado y jerarquías estáticas de herencia (`class Perro extends Animal implements Mascota`). En Haskell no hay clases de objetos ni herencia; las *typeclasses* definen contratos de comportamiento basados en lógica matemática donde cualquier tipo existente puede adherirse a una *typeclass* sin modificar su definición previa (polimorfismo ad-hoc desacoplado).

2. **¿Por qué la aproximación de la curva catenaria mediante una parábola fallaría en predecir la forma de una cadena muy profunda y colgante?**
   * *Respuesta:* Porque la aproximación parabólica $\cosh(x/a) \approx 1 + \frac{x^2}{2a^2}$ solo es válida para valores muy pequeños de $x/a$ (cables muy tensos con poca deflexión vertical). Cuando el cable tiene gran holgura y cuelga profundamente, los términos de orden superior $\frac{x^4}{24a^4} + \dots$ crecen significativamente, haciendo que la parábola discrepe enormemente de la física real.

3. **¿Cómo resolvería un analizador semántico en Prolog el Problema 2 si agregáramos una restricción contradictoria (ej. "Beatriz es Maestra")?**
   * *Respuesta:* El motor de inferencia de Prolog intentaría unificar las variables con los dominios. Al evaluar la conjunción de cláusulas contradictorias, el algoritmo de backtracking agotaría todas las ramas de búsqueda sin encontrar una sustitución que satisfaga todos los predicados simultáneamente, respondiendo formalmente `false` (no satisfacible).

## Ejercicios resueltos (describe el problema y la solución dada, con el código si lo hay)

- PROBLEMA 1 Catenaria. Problema: cable/cuerda/cadena entre dos puntos no necesariamente al mismo nivel, flexible, con carga (peso propio/externa/combinada); tomando punto más bajo en (0,0), ¿qué valores funcionales da la función de la forma? Solución dada: deducción por equilibrio (T cos/T sin, tan, EDO segundo orden con a=T0/μg), solución exacta `y(x)=a cosh(x/a)-a` (canónica `a cosh(x/a)` si punto bajo en (0,a)), aproximación Taylor/Galileo `≈ x²/2a` para x≪a; distinción puente colgante (carga horizontal uniforme → parábola perfecta) vs cable libre (catenaria estricta). Sin código, solo física y series.
- PROBLEMA 2 Tres Amigas. Problema: enunciado exacto de 6 pistas (Beatriz≠García; López=ingeniera; actriz=María; maestra≠Méndez; Alicia llegó tarde; todo diferente) y pregunta nombre/apellido/profesión de cada una. Solución dada: cadena Ded1-Ded7 (María actriz→no López; maestra=no López ni Méndez→García; Méndez=actriz; María Méndez actriz; Beatriz no García/Maestra/Actriz→ingeniera; Beatriz López ingeniera; Alicia García maestra). Matriz final: Beatriz López Ingeniera; María Méndez Actriz; Alicia García Maestra. Código Prolog dado:
```prolog
% Base de conocimiento y reglas en Prolog
resolver(Amigas) :-
    % Definir estructura: amiga(Nombre, Apellido, Profesion)
    Amigas = [
        amiga(beatriz, A1, P1),
        amiga(maria,   A2, P2),
        amiga(alicia,  A3, P3)
    ],
    % Dominio de apellidos
    Apellidos = [garcia, lopez, mendez],
    permutation(Apellidos, [A1, A2, A3]),
    % Dominio de profesiones
    Profesiones = [ingeniera, actriz, maestra],
    permutation(Profesiones, [P1, P2, P3]),
    % Restricción 1: Beatriz no es de apellido García
    A1 \= garcia,
    % Restricción 2: López es ingeniera
    member(amiga(_, lopez, ingeniera), Amigas),
    % Restricción 3: La actriz se llama María
    member(amiga(maria, _, actriz), Amigas),
    % Restricción 4: La maestra no es Méndez
    \+ member(amiga(_, mendez, maestra), Amigas).

% Consulta: ?- resolver(Res).
% Res = [amiga(beatriz, lopez, ingeniera), amiga(maria, mendez, actriz), amiga(alicia, garcia, maestra)].
```
- PROBLEMA 3 Filtrado ASCII. Problema: dado texto raw ASCII y patrón, indicar en qué líneas aparece con su número. Solución comparativa por paradigma (sin un único código canónico): C (fopen/fgets, buffer/4096, strstr, linea_num++); AWK `awk '/patron/ { print NR ": " $0 }' archivo.txt`; Python open/enumerate/`in`; Haskell `filtrarLineas patron contenido = filter ... (zip [1..] (lines contenido))` con lazy en memoria constante. Códigos:
```awk
# Una sola línea en AWK resuelve el problema:
awk '/patron/ { print NR ": " $0 }' archivo.txt
```
```python
with open("texto.txt", "r", encoding="ascii") as f:
    for num, linea in enumerate(f, 1):
        if patron in linea:
            print(f"Línea {num}: {linea.rstrip()}")
```
```haskell
filtrarLineas :: String -> String -> [(Int, String)]
filtrarLineas patron contenido =
    filter (\(_, linea) -> patronEnLinea patron linea) (zip [1..] (lines contenido))
```
- Demo KTurtle (sección 2.2, ilustrativa): polígono regular N lados con repeat/forward/turnright. Código:
```logo
# Dibujo de un polígono regular de N lados en sintaxis KTurtle / Logo
reset
canvassize 400, 400
go 150, 150

$lados = 6
$longitud = 50
$angulo = 360 / $lados

repeat $lados {
    forward $longitud
    turnright $angulo
}
```

## Posibles conflictos (afirmaciones que suenen absolutas, cifras, o que contradigan conocimiento estándar; márcalas [REVISAR])

- Fechas/autores: Haskell 1990 comité; CLOS 1984-1988; Self Ungar/Smith (sin año en texto); Eiffel Meyer (sin año, diagrama dice 1986); Python 1991 van Rossum; Java 1995 Gosling/Sun; JavaScript 1995 Eich/Netscape; Ruby 1995 (diagrama; sin sección); C# 2000 (diagrama; sin sección); ML/Miranda→Haskell; ABC→Python [REVISAR: cada fecha/filiación].
- "Hindley-Milner sin anotaciones redundantes", "monada IO a sin romper pureza", "MOP redefine compilador desde el código", "CQS nunca ambas cosas" [REVISAR: absolutos].
- "Tipado dinámico y fuerte (no conversiones absurdas cadenas+enteros)" [REVISAR: Python sí tiene casos discutibles].
- "Supresión total de aritmética de punteros, GC obligatoria, bounds checking" en Java [REVISAR: "total/obligatoria" absolutos].
- "Pista 5 Alicia llegó tarde" no usada en deducción [REVISAR: pista irrelevante o falta paso].
- "Puente Golden Gate ... parábola perfecta; cable libre estrictamente catenaria" [REVISAR: "perfecta/estrictamente" absolutos].
- "Galileo 1638 creyó erróneamente parábola" [REVISAR: fecha/afirmación histórica].
- "Haskell procesa línea por línea en memoria constante sin cargar todo el archivo" con `[String]`/`String` [REVISAR: lazy IO y String tienen matices de memoria].
- "`patronEnLinea` no definida" en snippet Haskell [REVISAR: código incompleto].
- "En Haskell no hay clases de objetos ni herencia" [REVISAR: simplificación].
- "Backtracking agota ramas y responde false" [REVISAR: en Prolog responde `false`/`no`, depende de motor].

## Cobertura (¿de qué unidad IC-4700 es: U1/U2/U3/U4? ¿cubre las clases vacías S4C2?)

- Unidad estimada: U1 (genealogía moderna 1980-2000s; Logo/constructivismo como contexto), U3 (funcional: Haskell lazy/typeclasses/monadas; filtrado funcional), U4 (lógico: Prolog/CSP Tres Amigas), scripting (Python/AWK/JS).
- Sí cubre S4C2: este archivo ES S4C2 (genealogía moderna + Logo/KTurtle + 3 problemas). Si las carpetas de transcripciones solo tenían u0/u1/u3/u4 sin S4C2 detallado, este extracto aporta la cobertura faltante.
