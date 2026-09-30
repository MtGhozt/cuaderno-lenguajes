# Transcripciones U1 — Fundamentos

## Caracteristicas_Generales-IMG1

**Título:** Definición más general de algoritmo

**Transcripción:**

Conjunto de tareas que se llevan a cabo sobre un grupo finito de datos (simples o compuestos), que se procesan en un tiempo finito usando recursos finitos.

Fuente: docs/assets/Caracteristicas_Generales/img1.png [transcrito de imagen, por verificar]

## Caracteristicas_Generales-IMG2

**Título:** Características generales de los algoritmos (Böhm & Jacopini)

**Transcripción:**

- Corrado Böhm y Giusseppe [sic] Jacopini demostraron un teorema sobre computabilidad de Turing que es aplicable a cualquier paradigma de programación.
- Cualquier algoritmo puede construirse con cuatro tipos de estructuras de ejecución:
  - Ejecución secuencial
  - Iteración
  - Ejecución condicional
  - Separación modular

Fuente: docs/assets/Caracteristicas_Generales/img2.png [transcrito de imagen, por verificar]

## Caracteristicas_Generales-IMG3

**Título:** Características generales de los algoritmos (Böhm & Jacopini)

**Transcripción:**

- Corrado Böhm y Giuseppe Jacopini demostraron un teorema sobre computabilidad de Turing que es aplicable a cualquier paradigma de programación.
- Cualquier algoritmo puede construirse con cuatro tipos de estructuras de ejecución:
  - Ejecución secuencial
  - Iteración
  - Ejecución condicional
  - Separación modular

**Diagramas al pie del slide (de izquierda a derecha):**

```
[Secuencial N-S]      [Secuencial flujo]    [Condicional N-S]       [Condicional flujo]        [Iteración N-S]     [Iteración flujo]
+----------------+    ↓                     +-------------------+   ↓                          +-----------------+      ↓
| statement      |    [statement]            | condition         |   <condition>                | condition       |      <condition>
+----------------+    [statement]            +--------+----------+   y/n                        +---------------+    n / y
| statement      |    [statement]            |        |          |   [statement] [statement]    |               |      [statement]
+----------------+    ↓                     |statement statement|   ↓           ↓              | statement     |      ↓
| statement      |                           +-------------------+                             +-----------------+
+----------------+
                                         y = sí / yes, n = no / not [etiquetas en inglés en el original]
                                         textos internos en inglés: statement, condition, y, n
```

Fuente: docs/assets/Caracteristicas_Generales/img3.png [transcrito de imagen, por verificar]

## Caracteristicas_Generales-IMG4

**Título:** ¿Por qué es importante conocer diferentes paradigmas de programación?

**Transcripción:**

- Un paradigma de programación es una cierta forma de ver los algoritmos.
- Si bien un algoritmo es una entidad abstracta, los diferentes problemas que pueden ser resueltos mediante algoritmos pertenecen a una gama extremadamente muy amplia de “ambientes”, y podría ser que expresar el algoritmo en los términos de ese ambiente nos permita crear mejores programas.
- De esa forma, cada paradigma brinda un conjunto diferente de herramientas mentales para expresar los algoritmos.

Fuente: docs/assets/Caracteristicas_Generales/img4.png [transcrito de imagen, por verificar]

## Caracteristicas_Generales-IMG5

**Título:** Principios de diseño

**Transcripción:**

- Los lenguajes de programación de computadoras de propósito general deben satisfacer ciertos requerimientos, algunos de ellos exigidos, y otros opcionales (pero bienvenidos).
- En su diseño debe haber un balance entre
  - el propósito que se persigue
  - la facilidad para el desarrollo de software
  - las características de las arquitecturas de hardware disponibles.

Fuente: docs/assets/Caracteristicas_Generales/img5.png [transcrito de imagen, por verificar]

## Caracteristicas_Generales-IMG6

**Título:** Propósito del lenguaje

**Transcripción:**

- Todos los lenguajes son Turing-completos, es decir, es posible escribir con ellos cualquier algoritmo.
- Sin embargo, los usuarios de los lenguajes también tienen propósitos para los cuáles requieren estos lenguajes: resolver ecuaciones, representar conocimiento lógico, crear ambientes gráficos para animación 3D, procesar datos para contabilidad y finanzas, etc.
- Cualquiera de estas cosas puede hacerse en cualquier lenguaje de programación, pero es más fácil para un ser humano el desarrollar sus programas (y encontrar y corregir errores) si el lenguaje de programación de alguna manera es afín al lenguaje del área para lo que se lo va a usar: cálculo, geometría, finanzas, estadística, lógica, etc.

Fuente: docs/assets/Caracteristicas_Generales/img6.png [transcrito de imagen, por verificar]

## Caracteristicas_Generales-IMG7

**Título:** Facilidad para el desarrollo de software

**Transcripción:**

- En el mundo real, un programa útil suele tener una vida muy larga, en algunos casos de décadas (p. ej. sistema de atención a desempleados de Nueva Jersey).
- Una vez que un programa ha sido creado, es altamente probable que ocurra alguna de las siguientes situaciones:
  - Hay errores que se debe eliminar (bugs)
  - Se solicita agregarle nuevas funcionalidades
  - Se solicita modificar funcionalidades existentes
  - Se solicita modificarlo para migrarlo a otro ambiente
- Y todo hay que hacerlo ASAP (conozcamos a David https://youtu.be/lj724M9dC4M ).
- (Muchos administradores dicen que “no es más que modificar una instrucción”.)

Fuente: docs/assets/Caracteristicas_Generales/img7.png [transcrito de imagen, por verificar]

## Caracteristicas_Generales-IMG8

**Título:** Las características del hardware

**Transcripción:**

- El hardware evoluciona, con mucha frecuencia por presiones del software.
- Características que anteriormente eran inexistentes o solo disponibles en ambientes muy caros, se vuelven comunes (como la computación vectorial o los hilos concurrentes).
- Para poder aprovechar estas ventajas, los lenguajes de programación de alto nivel deberían hacerlas disponibles a los programadores de una manera “intuitiva”.

Fuente: docs/assets/Caracteristicas_Generales/img8.png [transcrito de imagen, por verificar]

## Caracteristicas_Generales-IMG9

**Título:** Características necesarias o deseables en un Lenguaje de Programación

**Transcripción:**

- Deben ser:
  - \*Universales
  - \*Implementables
  - Naturales
  - \* No ambigüos
  - Eficientes
  - Depurables
  - Seguros
- ¿Qué significa todo esto?

Fuente: docs/assets/Caracteristicas_Generales/img9.png [transcrito de imagen, por verificar]

## Caracteristicas_Generales-IMG10

**Título:** Universalidad

**Transcripción:**

- El lenguaje debe ser capaz de poder implementar cualquier algoritmo que se le pueda ocurrir a un programador.
- Esta es otra forma de decir que el lenguaje debe ser Turing-completo.
- La manera informal de comprobar esto es que un lenguaje es universal si permite recursión, o por lo menos, que permite definir y manejar pilas (stacks).

Fuente: docs/assets/Caracteristicas_Generales/img10.png [transcrito de imagen, por verificar]

## Caracteristicas_Generales-IMG11

**Título:** Implementabilidad

**Transcripción:**

- Debe ser posible traducir cualquier instrucción del lenguaje, ya sea simple o compuesta, a un conjunto de instrucciones máquina de la máquina-objeto, de manera exacta.
- Esto es, siempre se ejecutará exactamente lo que el diseñador del lenguaje especifica para esa instrucción (o “tarea”), aunque se cambie de procesador.

Fuente: docs/assets/Caracteristicas_Generales/img11.png [transcrito de imagen, por verificar]

## Caracteristicas_Generales-IMG12

**Título:** Naturalidad

**Transcripción:**

- Los lenguajes de programación se diseñan para que el programador pueda pensar más fácilmente en la solución de problemas de dominios específicos, sin perder la universalidad ya mencionada.
- No es lo mismo programar un sistema de contabilidad que un sistema de control para un radio-telescopio, o una simulación en Mecánica Cuántica.
- Esa es la razón de que se siga diseñando lenguajes de programación.

Fuente: docs/assets/Caracteristicas_Generales/img12.png [transcrito de imagen, por verificar]

## Caracteristicas_Generales-IMG13

**Título:** No ambigüedad

**Transcripción:**

- Parece natural exigir que un lenguaje de programación carezca de las ambigüedades de los lenguajes naturales, pero los lenguajes de programación pueden tener las suyas propias.
- Estas “ambigüedades formales” se han venido conociendo conforme se han creado los compiladores para los lenguajes de programación.
- Ejemplos:
  - “else colgante” (dangling else)
  - Conversión de tipos en expresiones: r = m * i + s; /* r, m, s son variables de punto flotante, i es entera */

```c
r = m * i + s; /* r, m, s son variables de punto flotante, i es entera */
```

Fuente: docs/assets/Caracteristicas_Generales/img13.png [transcrito de imagen, por verificar]

## Caracteristicas_Generales-IMG14

**Título:** [Sin título visible en la imagen]

**Transcripción:**

Code Listing 46: Dangling Else Problem in Pascal

```pascal
1 Program DanglingElse;
2 uses Crt;
3 var A :Integer;
4 Begin
5   A:=5;
6   If A<2 then
7     If A> 10
8       A:=A+10;
9   else
10    A := A+20;
11   Writeln(A);
12 End.
```

Fuente: docs/assets/Caracteristicas_Generales/img14.png [transcrito de imagen, por verificar]

## Caracteristicas_Generales-IMG15

**Título:** Eficiencia

**Transcripción:**

- Aunque el procesador sea “veloz”, si las estructuras creadas por el compilador de su lenguaje son ineficientes, el usuario verá una máquina lenta.
- Es un requisito deseable que el código creado en el lenguaje de programación sea, además, eficiente en su ejecución.
- Pero este requisito se puede “relativizar” cuando se necesitan algunas otras condiciones, como la portabilidad (Java) o la claridad en algunos entornos (Prolog), o la versatilidad (C#).

Fuente: docs/assets/Caracteristicas_Generales/img15.png [transcrito de imagen, por verificar]

## Caracteristicas_Generales-IMG16

**Título:** Depurabilidad

**Transcripción:**

- Los lenguajes deben ayudar a todo el proceso de Ingeniería de Software.
- Eso significa que, sin ser excesivos (COBOL), deben poder establecer una biyección entre los procesos de diseño, implementación y depuración, de tal forma que sea rápido encontrar las secciones de código correspondientes a cada pieza conceptual desarrollada.

Fuente: docs/assets/Caracteristicas_Generales/img16.png [transcrito de imagen, por verificar]

## Caracteristicas_Generales-IMG17

**Título:** Seguridad

**Transcripción:**

- La información manejada por las computadoras debe tener ciertas calidades, desde el punto de vista de la Seguridad Informática:
  - Privacidad
  - Disponibilidad
  - Integridad
- Es una decisión opcional de los diseñadores de los lenguajes el dotarlos de la capacidad inherente de manejar condiciones de seguridad informática dentro del mismo lenguaje.
- Por ejemplo, el manejo de excepciones de Java, la incorporación de métodos criptográficos o el manejo de los modelos Bell-La Padulla [sic] y Biba, como parte del lenguaje.

Fuente: docs/assets/Caracteristicas_Generales/img17.png [transcrito de imagen, por verificar]

## Caracteristicas_Generales-IMG18

**Título:** [Sin título visible en la imagen — diagrama de círculos concéntricos en inglés]

**Transcripción:**

Diagrama de círculos concéntricos, del centro hacia afuera:

```
- Phonetics
  - Speech sounds
- Phonology
  - Phonemes
- Morphology
  - Words
- Syntax
  - Phrases and sentences
- Semantics
  - Literal meaning of phrases and sentences
- Pragmatics
  - Meaning in context of discourse
```

Fuente: docs/assets/Caracteristicas_Generales/img18.png [transcrito de imagen, por verificar]

## Caracteristicas_linguisticas_de_los_lenguajes_de_programacion-IMG1

**Título:** Introducción: ciclo de desarrollo de software

**Transcripción:**

Diagrama de flujo lineal con retorno:

```
[Reqs. & use cases] → [Arch. & design] → [Test plans] → [Code] → [Tests & test results] → [Feedback from field]
                                                                                                |
                                                                                                └─→ [Reqs. & use cases]
```

Fuente: docs/assets/Caracteristicas_linguisticas_de_los_lenguajes_de_programacion/img1.png [transcrito de imagen, por verificar]

## Caracteristicas_linguisticas_de_los_lenguajes_de_programacion-IMG2

**Título:** Introducción: ciclo de desarrollo de software

**Transcripción:**

Ciclo base:

```
[Reqs. & use cases] → [Arch. & design] → [Test plans] → [Code] → [Tests & test results] → [Feedback from field]
                                                                                                |
                                                                                                └─→ [Reqs. & use cases]
```

Anotaciones de seguridad sobre el ciclo (de izquierda a derecha):

```
[Abuse cases] ↘
[Security reqs.] ↘ → [Reqs. & use cases]
[Risk analysis] ↘↙ → [Arch. & design]
[Risk-based security tests] ↘ → [Test plans]
[Code review tools] ↘ → [Code]
[Risk analysis] ↘ → [Tests & test results]
[Penetration testing] ↘↙ → [Tests & test results] / [Feedback from field]
[Security operations] ↘ → [Feedback from field]
```

Textos literales de las etiquetas:

- Abuse cases
- Security reqs.
- Risk analysis
- Risk-based security tests
- Code review tools
- Risk analysis
- Penetration testing
- Security operations
- Reqs. & use cases
- Arch. & design
- Test plans
- Code
- Tests & test results
- Feedback from field

Fuente: docs/assets/Caracteristicas_linguisticas_de_los_lenguajes_de_programacion/img2.png [transcrito de imagen, por verificar]

## Caracteristicas_linguisticas_de_los_lenguajes_de_programacion-IMG3

**Título:** Sintaxis, semántica y pragmática

**Transcripción:**

- Para hablar de los lenguajes de programación, que son lenguajes artificiales, se usan conceptos utilizados en Lingüística, que es la disciplina que estudia los lenguajes naturales. Tres de estos conceptos son sintaxis, semántica y pragmática, donde estos últimos tienen significados muy particulares cuando hablamos de lenguajes de programación.

Fuente: docs/assets/Caracteristicas_linguisticas_de_los_lenguajes_de_programacion/img3.png [transcrito de imagen, por verificar]

## Caracteristicas_linguisticas_de_los_lenguajes_de_programacion-IMG4

**Título:** Sintaxis

**Transcripción:**

- La sintaxis de un lenguaje de programación concierne a las reglas para formar expresiones válidas para ese lenguaje, por ejemplo, para declarar variables, construir estructuras de control de ejecución (if, while, etc.), declarar módulos u otros elementos externos.
- Una de las labores más importantes de los compiladores es verificar que los programas cumplan con las reglas de sintaxis del lenguaje.
- Lo usual es que las reglas sintácticas (llamadas la gramática) se expresan mediante reglas de sustitución libres de contexto.

Fuente: docs/assets/Caracteristicas_linguisticas_de_los_lenguajes_de_programacion/img4.png [transcrito de imagen, por verificar]

## Caracteristicas_linguisticas_de_los_lenguajes_de_programacion-IMG5

**Título:** Semántica

**Transcripción:**

- En un lenguaje natural la semántica se refiere al significado de las expresiones lingüísticas. Esto se aprecia mejor cuando hablamos de otros idiomas; por ejemplo, podemos decir “Wie geht es ihnen?”, y nos preguntamos ¿y eso qué significa?
- En el caso de lenguajes de programación, que son formales, el sentido de “semántica” se refiere más bien a cómo se espera que los programas se comporten una vez que se ejecuten en una computadora.
- Por ejemplo, decir que la semántica de `while <cond. Booleana> [begin ...end]` en lenguaje Pascal es la implementación de ciclos que se ejecuten 0 o más veces.
- En cierta forma es correcto también decir que la semántica de un programa es su ejecutable.

Fuente: docs/assets/Caracteristicas_linguisticas_de_los_lenguajes_de_programacion/img5.png [transcrito de imagen, por verificar]

## Caracteristicas_linguisticas_de_los_lenguajes_de_programacion-IMG6

**Título:** Pragmática

**Transcripción:**

- Nuevamente, en lenguajes naturales la pragmática de un lenguaje se refiere al uso social del lenguaje, que no es inherente a la semántica de las expresiones.
- Por ejemplo, en japonés el número cuatro (4) se puede pronunciar “shi”, pero no en una boda u otros eventos sociales, en ellos se debe decir “yon”.
- En el caso de los lenguajes de programación la pragmática concierne a la manera en que el lenguaje va a ser usado en la práctica.
- La pragmática se refiere a los aspectos prácticos de cómo los constructos y características de un lenguaje de programación pueden ser usados para lograr varios objetivos.

Fuente: docs/assets/Caracteristicas_linguisticas_de_los_lenguajes_de_programacion/img6.png [transcrito de imagen, por verificar]

## Caracteristicas_linguisticas_de_los_lenguajes_de_programacion-IMG7

**Título:** [Sin título visible en la imagen — continuación de Pragmática]

**Transcripción:**

- La pragmática no es obvia, el programador la comunica a otros mediante nombres significativos de variables, módulos, procedimientos, etc.; también mediante comentarios y otros medios de documentación interna.
- Comunicar la pragmática del código es vital para agilizar muchos procesos de ingeniería de software en ambientes complejos de desarrollo.

Fuente: docs/assets/Caracteristicas_linguisticas_de_los_lenguajes_de_programacion/img7.png [transcrito de imagen, por verificar]

## Caracteristicas_linguisticas_de_los_lenguajes_de_programacion-IMG8

**Título:** Un ejemplo sencillo

**Transcripción:**

- Consideremos, por ejemplo, la sintaxis, semántica y pragmática de una instrucción de asignación.
- Como un constructo sintáctico, una instrucción de asignación podría consistir en una variable y una expresión , que a su vez son constructos sintácticos, separados por el token “=” funcionando como operador de asignación.
- Semánticamente, la variable denota un lugar en la memoria principal, mientras que la expresión denota el cálculo de un valor utilizando otros contenidos de memoria. Y por encima de todo, la semántica de la asignación es ejecutar la evaluación de la expresión usando el contenido actual de la memoria, para luego actualizar el valor obtenido en el lugar de la memoria correspondiente a la variable.
- No obstante, lo que suele ser más importante para el programador es la pragmática, es decir, para qué son útiles las instrucciones de asignación. Hay muchas posibilidades:
  - actualizar una variable temporal al valor de una expresión que es usada muchas veces (y de esa manera se mejora la eficiencia al hacer el cálculo una sola vez)
  - Comunicar valores de una parte del programa a otra (paso de parámetros o mensajes).
  - Modificar parte de una estructura de datos
  - Actualizar un valor acumulativo de una variable usada en algún cálculo iterativo.

Fuente: docs/assets/Caracteristicas_linguisticas_de_los_lenguajes_de_programacion/img8.png [transcrito de imagen, por verificar]

## Caracteristicas_linguisticas_de_los_lenguajes_de_programacion-IMG9

**Título:** [Sin título visible en la imagen — línea de tiempo de la historia de los lenguajes de programación, en inglés]

**Transcripción:**

Etiquetas principales legibles (de izquierda a derecha, por líneas):

- Fortran IV, Created for the IBM 7090/94
- Cobol 61
- PL/1, ANSI PL/1
- Algol 68
- Simula, Simula 67
- Logo
- Smalltalk, Smalltalk-80
- Prolog
- Clu
- BCPL, B, C
- Pascal
- Modula, Modular Language
- AWK, NAWK
- C with Classes, C++
- Concurrent C
- ADA, ADA 83
- Objective-C
- Eiffel
- Rex 1.00, Rex 2.00, Restructured Extended Executor
- Code review tools [ILEGIBLE: texto pequeño en recuadros descriptivos parcialmente legible]
- ANSI Cobol 74, ANSI Cobol 85
- Scheme, Scheme 84
- Common Lisp
- Self
- Haskell 1.0, Haskell 1.1
- Object Logo, CLOS, Common Lisp Object System
- NetRexx
- ABC
- Java
- Sather 0.1, Ruby
- Python
- Cmm
- Tcl, Tcl/Tk
- ANSI C (C89)
- Modula 3
- Oberon, Object Pascal
- Fortran 90 ISO/IEC
- Scheme IEEE

[ILEGIBLE: textos descriptivos pequeños dentro de los recuadros de cada lenguaje, parcialmente cortados en los bordes de la imagen]

Fuente: docs/assets/Caracteristicas_linguisticas_de_los_lenguajes_de_programacion/img9.png [transcrito de imagen, por verificar]
