# Transcripciones U4 — Lógico + Problemas

## Paradigma_logico-IMG1

**Título del slide:** Fundamento teórico del Paradigma Lógico

**Transcripción:**

[Sin contenido textual en el cuerpo del slide; solo se visualizan los iconos de marcador de contenido vacío.]

Fuente: docs/assets/Paradigma_logico/img1.png [transcrito de imagen, por verificar]

## Paradigma_logico-IMG2

**Título del slide:** Fundamento teórico del Paradigma Lógico

**Transcripción:**

- El Cálculo de Predicados de Primer Orden es un lenguaje capaz de describir cualquier sentencia en Matemática.
- [Lo anterior es un elemento fundamental en la demostración del Teorema de Incompletitud de Gödel.]

Fuente: docs/assets/Paradigma_logico/img2.png [transcrito de imagen, por verificar]

## Paradigma_logico-IMG3

**Título del slide:** Fundamento teórico del Paradigma Lógico

**Transcripción:**

- El Cálculo de Predicados de Primer Orden es un lenguaje capaz de describir cualquier sentencia en Matemática.
- [Lo anterior es un elemento fundamental en la demostración del Teorema de Incompletitud de Gödel.]
- Ahora bien, las funciones son descritas mediante sentencias.
- Entonces, cualquier función puede ser descrita mediante el Cálculo de Predicados, en particular, las funciones parcialmente computables.
- En conclusión, si cualquier algoritmo puede ser descrito mediante una función (parcialmente) computable, entonces, cualquier algoritmo puede ser descrito mediante Cálculo de Predicados de Primer Orden.

Fuente: docs/assets/Paradigma_logico/img3.png [transcrito de imagen, por verificar]

## Paradigma_logico-IMG4

**Título del slide:** ¿En qué consiste el paradigma lógico?

**Transcripción:**

- La idea básica es que es verdadero que cualquier algoritmo puede ser descrito usando uno de los lenguajes más poderosos de la Lógica, que es el lenguaje del Cálculo de Predicados de Primer Orden (CP1o).
- En consecuencia, si tenemos un lenguaje que simultáneamente con:
  - Ser equivalente al lenguaje del CP1o (completo respecto al CP1o).
  - Tener una gramática fácilmente reconocible por un compilador.
  - Contar con un algoritmo de ejecución similar a un procedimiento de demostración lógica del CP1o, pero que sea de tiempo polinomial.
- Entonces estamos implementando el Paradigma Lógico.

Fuente: docs/assets/Paradigma_logico/img4.png [transcrito de imagen, por verificar]

## Paradigma_logico-IMG5

**Título del slide:** En consecuencia…

**Transcripción:**

- En este paradigma no hay instrucciones, lo que hay son sentencias lógicas, y términos lógicos (p. ej. predicados).
- Asimismo, el concepto de variable es el impera en lógica, es decir, la pertenencia a un conjunto del valor de una variable es algo posterior a la existencia de esta variable (¿existencialismo en la programación?).

**Tabla:**

|  | Paradigma imperativo/procedimental | Paradigma lógico |
|---|---|---|
| Operaciones | Instrucciones | Sentencias (FBF's) |
| Acción | Ejecución | Evaluación veritativa (demostración) |
| Datos | Espacios, medidos en bytes, en RAM | Equivalen a variables en sentido lógico |

Fuente: docs/assets/Paradigma_logico/img5.png [transcrito de imagen, por verificar]

## Paradigma_logico-IMG6

**Título del slide:** [ILEGIBLE: franja superior de título cortada en la captura, no se lee el título]

**Transcripción:**

- ¿Cómo se demuestra?
- A partir de un conjunto de premisas que se asumen verdaderas, se aplican las reglas de inferencia hasta que se puede llegar a la conclusión.
- Un conjunto muy conocido de reglas de inferencia es el llamado "sistema de Copi".
- Recordamos que este sistema consta de
  - 9 reglas de inferencia
  - 10 reglas de sustitución
  - 4 reglas de cuantificación
  - 2 reglas de negación del cuantificador
  - (opcionalmente) 4 reglas de manejo de la igualdad

Fuente: docs/assets/Paradigma_logico/img6.png [transcrito de imagen, por verificar]

## Paradigma_logico-IMG7

**Título del slide:** [ILEGIBLE: franja superior de título cortada en la captura, no se lee el título]

**Transcripción:**

- Ahora bien, el sistema de Copi (el que los estudiantes conocen en el curso de Matemática Discreta) es muy poco práctico para una computadora.
- En términos computacionales, los algoritmos de demostración usando el sistema de Copi son NP.
- Para resolver este problema su apeló [sic] a sistemas lógicos alternos con menos reglas de inferencia y menos operadores.
- Dos alternativas utilizadas son:
  - Sistemas basados en modus ponens: dos operadores y una sola regla (MP)
  - Cálculo de cláusulas: no tiene operadores (!), y usa sola regla: resolución (con unificación).
- Con restricciones adicionales, los algoritmos de manejo de estos sistemas son de tipo P.

Fuente: docs/assets/Paradigma_logico/img7.png [transcrito de imagen, por verificar]

## Problemas_para_paradigmas-IMG1

**Título del documento:** CASOS PARA ESTUDIO

**Transcripción:**

Instituto tecnológico de Costa Rica

IC4700 Lenguajes de programación

CASOS PARA ESTUDIO

Sabemos que cada uno de los problemas que describimos a continuación pueden ser resueltos por una computadora, programada apropiadamente.

Trataremos de encontrar un algoritmo que lo solucione, y diseñaremos una versión de ese algoritmo en cada uno de los paradigmas de programación que estudiamos en el curso.

PROBLEMA 1

[Figura: fotografía de un puente colgante sobre agua con cielo nublado; superpuesta una curva roja (catenaria) con marcadores circulares rojos sobre ella. Eje horizontal con marcas -200, -100, 0, 100, 200. Eje vertical con marcas -150, -50, 0, 50, 150.]

La curva catenaria: [texto cortado en la captura; continúa en la siguiente imagen]

Fuente: docs/assets/Problemas_para_paradigmas/img1.png [transcrito de imagen, por verificar]

## Problemas_para_paradigmas-IMG2

**Título del documento:** PROBLEMA 1 (continuación)

**Transcripción:**

PROBLEMA 1

[Figura: fotografía de un puente colgante sobre agua con cielo nublado; superpuesta una curva roja (catenaria) con marcadores circulares rojos sobre ella. Eje horizontal con marcas -200, -100, 0, 100, 200. Eje vertical con marcas -150, -50, 0, 50, 150.]

La curva catenaria: Consideremos un cable (o cuerda o una cadena) que cuelga entre dos puntos (véase la figura), no necesariamente al mismo nivel. Asumamos que el cable es flexible, de modo que debido a su carga (que puede ser debida a su propio peso o a fuerzas externas, o una combinación de estas) toma la forma curva que se puede ver.

Fuente: docs/assets/Problemas_para_paradigmas/img2.png [transcrito de imagen, por verificar]

## Problemas_para_paradigmas-IMG3

**Título del documento:** PROBLEMA 1 (continuación)

**Transcripción:**

PROBLEMA 1

[Figura: fotografía de un puente colgante sobre agua con cielo nublado; superpuesta una curva roja (catenaria) con marcadores circulares rojos sobre ella. Eje horizontal con marcas -200, -100, 0, 100, 200. Eje vertical con marcas -150, -50, 0, 50, 150.]

La curva catenaria: Consideremos un cable (o cuerda o una cadena) que cuelga entre dos puntos (véase la figura), no necesariamente al mismo nivel. Asumamos que el cable es flexible, de modo que debido a su carga (que puede ser debida a su propio peso o a fuerzas externas, o una combinación de estas) toma la forma curva que se puede ver. Si tomamos el punto más bajo de la curva como alineado con el 0 de un sistema de coordenadas ¿qué valores funcionales daría la función de la forma del cable?

Fuente: docs/assets/Problemas_para_paradigmas/img3.png [transcrito de imagen, por verificar]

## Problemas_para_paradigmas-IMG4

**Título del documento:** PROBLEMA 1 (cierre) + PROBLEMA 2

**Transcripción:**

[Figura parcial superior: fragmento de la curva roja con marcadores circulares rojos sobre la foto del puente. Eje horizontal con marcas -200, -100, 0, 100, 200.]

forma curva que se puede ver. Si tomamos el punto más bajo de la curva como alineado con el 0 de un sistema de coordenadas ¿qué valores funcionales daría la función de la forma del cable?

PROBLEMA 2

Tres amigas se reúnen a conversar después del trabajo. Se sabe que

1. Beatriz no es de apellido García.
2. López es ingeniera.
3. La actriz se llama María.
4. La maestra no es Méndez.
5. Alicia llegó tarde.
6. Todas tienen nombres, apellidos y profesiones diferentes.

¿Cuál es el nombre, apellido y profesión de cada una?

Fuente: docs/assets/Problemas_para_paradigmas/img4.png [transcrito de imagen, por verificar]

## Problemas_para_paradigmas-IMG5

**Título del documento:** PROBLEMA 3

**Transcripción:**

PROBLEMA 3

Se tiene un texto "raw" (ascii puro), y dada una hilera de caracteres, se necesita saber en cuáles líneas del texto aparece tal hilera, mostrando esas líneas.

Fuente: docs/assets/Problemas_para_paradigmas/img5.png [transcrito de imagen, por verificar]
