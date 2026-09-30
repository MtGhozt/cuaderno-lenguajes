# Unidad 2 — Ejercicios (12)

> Cada ejercicio trae **Objetivo**, **Dificultad** y **Solución explicada**. Las soluciones solo usan datos de las fuentes.

## Ejercicio 1 — Tabla COBOL / Pascal / C (completar)

**Objetivo.** Reproducir la comparativa del cuaderno. **Dificultad.** Fácil.

Complete con la información de [cuaderno p3]:

1. COBOL: palabras reservadas ____; llamadas ____; archivos ____.
2. Pascal: asignación ____ y comparación ____; anidadas ____; archivos ____.
3. C: asignación ____ y comparación ____; anidadas ____; archivos ____.

**Solución.**

1. 90 y pico [POR-VERIFICAR cifra]; sin *calls*, salto al "párrafo" [sic]; bien (archivo e índice).
2. ":" y ":=" [POR-VERIFICAR: el apunte parece invertirlas; lo esperable es `:=` y `=`]; sí permite; mal.
3. `=` y `==`; no permite; mal.

## Ejercicio 2 — V/F: cifras de palabras reservadas

**Objetivo.** Fijar las cifras con su marca de fidelidad. **Dificultad.** Fácil.

Diga si cada afirmación es verdadera o falsa y justifique: (a) "COBOL tiene 90 y pico palabras reservadas"; (b) "Pascal y C tienen 14 cada uno".

**Solución.** Ambas son verdaderas *según el cuaderno* [cuaderno p3], pero las tres cifras van con [POR-VERIFICAR]: son anotaciones de clase transcritas de imagen, no datos confirmados.

## Ejercicio 3 — V/F: asignación y comparación en Pascal

**Objetivo.** Detectar la posible inversión del apunte. **Dificultad.** Media.

"En Pascal la asignación es `:` y la comparación es `:=`, y además se define como `//`." ¿Verdadero o falso? Justifique.

**Solución.** Falso como regla del lenguaje, verdadero como cita del apunte [cuaderno p3] [POR-VERIFICAR]. El cuaderno anota asignación ":" y comparación ":=" [POSIBLE INVERSIÓN], cuando en Pascal la asignación es `:=` y la comparación `=`. La frase "se define como //" se transcribe tal cual [sic] sin interpretación.

## Ejercicio 4 — Predecir: ejecución secuencial

**Objetivo.** Leer ejecución imperativa como órdenes sucesivas. **Dificultad.** Fácil.

Dado [cuaderno p5]:

```pascal
b := m;
r := n;
```

¿En qué orden se ejecutan y qué significa cada línea? [Explicación pedagógica — elaboración propia]: suponga `m = 5`, `n = 7`; ¿qué valen `b` y `r` al final?

**Solución.** Primero `b := m` y después `r := n`, una después de la otra [cuaderno p5]. Con los valores supuestos, `b = 5` y `r = 7`. La justificación del orden es la ejecución secuencial imperativa [cuaderno p3, p5].

## Ejercicio 5 — Completar: if y case/switch

**Objetivo.** Reproducir la forma general condicional. **Dificultad.** Fácil.

Complete la forma del cuaderno [cuaderno p5]: `if <cond> ____ <then part> ____`. ¿Qué elige el `case/switch` según los diagramas [cuaderno p6]?

**Solución.** `if <cond> [then] <then part> [else <else-part>]` [cuaderno p5]. El `case/switch` elige una rama entre varias (A/B/C/D en el diagrama) [cuaderno p6].

## Ejercicio 6 — while vs repeat: ¿cuál garantiza una ejecución?

**Objetivo.** Distinguir condición al inicio vs al final. **Dificultad.** Media.

Un ciclo debe leer al menos un dato antes de preguntar si continúa. ¿Usa `while <cond>` o `repeat until <cond>`? Justifique con [cuaderno p5].

**Solución.** `repeat until <cond>`, porque "hace y después pregunta" [cuaderno p5]: el cuerpo corre primero y la condición se revisa al final, así hay al menos una ejecución. (El `while` revisa `while <cond>` con diagrama de condición al inicio [cuaderno p6].)

## Ejercicio 7 — for → perform

**Objetivo.** Fijar la correspondencia del repetitivo con contador en COBOL. **Dificultad.** Media.

¿Qué instrucción de COBOL corresponde al `for` y a qué familia de estructuras pertenece? [cuaderno p5].

**Solución.** `perform` en COBOL [cuaderno p5]; pertenece a la ejecución repetitiva, junto con `while` y `repeat/do-while` [cuaderno p5].

## Ejercicio 8 — Recursión simple vs mutua (diagramas)

**Objetivo.** Dibujar y distinguir ambas recursiones. **Dificultad.** Media.

Dibuje (a) recursión simple y (b) recursión mutua según [cuaderno p5] e indique la diferencia.

**Solución.** (a) A se llama a sí: `A → A`. (b) Mutua: `A → B` [cuaderno p5]. Diferencia: en la simple el módulo se invoca a sí mismo; en la mutua dos módulos se invocan entre sí.

## Ejercicio 9 — Función vs procedimiento (clasificar)

**Objetivo.** Aplicar las definiciones de abstracción. **Dificultad.** Media.

Clasifique según [cuaderno p5]: (a) `<var> ← expresión`; (b) un bloque que imprime un reporte paso a paso.

**Solución.** (a) Función: abstracción de una expresión constante (`<var> ← expresión`) [cuaderno p5]. (b) Procedimiento: abstracción de un grupo de instrucciones [cuaderno p5] (imprimir = hacer pasos, coherente además con "si algo solo muestra algo, solo muestra eso" [cuaderno p4]).

## Ejercicio 10 — Identificar la confusión binding/cohesión

**Objetivo.** Corregir el rótulo del cuaderno. **Dificultad.** Media.

El cuaderno define "Binding: coherencia semántica… Buscamos que sea alto" [cuaderno p4]. ¿Es correcto el término? ¿Qué se busca en *coupling*?

**Solución.** El término es incorrecto [POSIBLE CONFUSIÓN: por su contenido — coherencia semántica, hacer una sola cosa — es cohesión, y se busca alta] [cuaderno p4]. Del *coupling* (qué tan enlazados están 2 módulos) se busca que sea bajo [cuaderno p4].

## Ejercicio 11 — Análisis: prompt de Fortran que programa el mcm [ejercicio de análisis, no de código]

**Objetivo.** Analizar el ejercicio de clase con IA sin programarlo. **Dificultad.** Difícil.

En clase se pidió: "Escriba un prompt que programe mcm en Fortran" [cuaderno p4]. Sin escribir código Fortran: (a) ¿a qué paradigma pertenecería ese programa? (b) ¿qué elementos de U2 debería mostrar (estructuras, módulos)?

**Solución.** (a) Al imperativo/procedimental: Fortran es de esa familia y el pedido es un programa de procedimientos efectivos [cuaderno p4; docx P42: lenguajes de Von Neumann]. (b) Debería mostrar ejecución secuencial, condicional (definición a trozos), cíclica/recursiva y modularidad (mcm invocando una operación más sencilla como MCD) — los mismos cuatro elementos que el curso identifica al analizar una definición por composición [Explicación pedagógica — elaboración propia; la descomposición mcm→MCD y sus cuatro lecturas se documentan en el análisis del docx P36–P41]. No se escribe ni se ejecuta código Fortran en este apunte: es ejercicio de análisis.

## Ejercicio 12 — V/F mixto con justificación

**Objetivo.** Repasar diseño modular y representación. **Dificultad.** Difícil.

Justifique cada una con su fuente: (a) "Se busca *coupling* alto y cohesión baja"; (b) "Un módulo puede exceder una página si es necesario"; (c) "Los diagramas de flujo son la representación recomendada"; (d) "COBOL maneja bien archivos con archivo e índice".

**Solución.** (a) Falso: *coupling* bajo y cohesión ("Binding" en el cuaderno) alta [cuaderno p4]. (b) Falso: un módulo no puede exceder una página [cuaderno p6]. (c) Falso: diagramas de flujo ("No usarlas"); se usan pseudocódigo y diagramas estructurados Nassi-Shneiderman [cuaderno p6]. (d) Verdadero: recuperación de archivos bien, archivo e índice, en COBOL [cuaderno p3].
