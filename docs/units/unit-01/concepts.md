# Unidad 1 — Conceptos (definición formal + explicación intuitiva + características)

> Cada sección trae: **Definición formal** (cita fiel), **Explicación intuitiva** y **Características/notas**. Toda afirmación teórica lleva su Fuente. Lo que no viene de fuentes se marca `[Explicación pedagógica — elaboración propia]`.

## 1. Algoritmo y procedimiento efectivo

**Definición formal.** "Conjunto de tareas que se llevan a cabo sobre un grupo finito de datos (simples o compuestos), que se procesan en un tiempo finito usando recursos finitos." [transcripción u1-fundamentos IMG1].

**Explicación intuitiva.** Tres finitudes juntas: datos finitos, tiempo finito, recursos finitos [transcripción u1-fundamentos IMG1]. [Explicación pedagógica — elaboración propia]: una receta que pide "infinitos huevos" o "tiempo infinito" no es un algoritmo, aunque suene a procedimiento.

**Características y notas.**

- Proceso efectivo → función computable / algoritmo → equivalentes [cuaderno p2].
- El curso presenta el algoritmo en varias formas: imperativa/procedimental, funciones, sentencias CP [sic: probable referencia al cálculo de predicados] [POR-VERIFICAR], clases — orientación a objetos [cuaderno p1; el apunte dice "agentes", por verificar] [POR-VERIFICAR].
- Un lenguaje de programación es la representación de algoritmos [cuaderno p2].
- "Se diseña antes de programar." [cuaderno p1].

## 2. Tesis de Church-Turing

**Definición formal.** "Tesis de Church: toda función computable es Turing-computable. Todas las formas de computabilidad son equivalentes." [cuaderno p2].

**Explicación intuitiva.** No importa el modelo que uses para definir "computable" (máquina de Turing, funciones, otros formalismos): todos capturan lo mismo [cuaderno p2]. [Explicación pedagógica — elaboración propia]: es como decir que da igual si mides en metros o en pies; la longitud es la misma, solo cambia la notación.

**Características y notas.**

- "Diferentes formas de entender que algo es computable." [cuaderno p1].
- Al crear un lenguaje, se debería comprobar que sea Turing-computable; "normalmente no se hace, basta con ciertas comprobaciones." [cuaderno p2].
- Esa comprobación informal habitual es la universalidad: recursión o manejo de pilas (ver §4) [transcripción u1-fundamentos IMG10].

## 3. Teorema de Böhm-Jacopini (estructuras de ejecución)

**Definición formal.** "Corrado Böhm y Giuseppe Jacopini demostraron un teorema sobre computabilidad de Turing que es aplicable a cualquier paradigma de programación. Cualquier algoritmo puede construirse con cuatro tipos de estructuras de ejecución: ejecución secuencial, iteración, ejecución condicional, separación modular." [transcripción u1-fundamentos IMG2–IMG3; IMG2 escribe "Giusseppe [sic]" [POR-VERIFICAR]].

**Explicación intuitiva.** Con solo cuatro piezas (hacer una cosa tras otra, repetir, elegir según condición, partir en módulos) se puede armar cualquier algoritmo [transcripción u1-fundamentos IMG2–IMG3] [Notion: cualquier algoritmo = secuencial + iteración + condicional + modular]. [Explicación pedagógica — elaboración propia]: como un juego de bloques con cuatro formas; todo lo construible usa solo esas formas.

**Características y notas.**

- Los slides lo ilustran con diagramas Nassi-Shneiderman y de flujo para lo secuencial, lo condicional y la iteración (textos internos en inglés: *statement, condition, y, n*) [transcripción u1-fundamentos IMG3].
- Vale para cualquier paradigma [transcripción u1-fundamentos IMG2–IMG3].

## 4. Universalidad, implementabilidad y naturalidad

Son tres de las siete características necesarias o deseables de un lenguaje: universales, implementables, naturales, no ambiguos, eficientes, depurables, seguros [transcripción u1-fundamentos IMG9].

### 4.1. Universalidad

**Definición formal.** "El lenguaje debe ser capaz de poder implementar cualquier algoritmo que se le pueda ocurrir a un programador. Esta es otra forma de decir que el lenguaje debe ser Turing-completo." [transcripción u1-fundamentos IMG10].

**Explicación intuitiva.** El lenguaje no debe dejar algoritmos fuera: cualquiera que imagines, lo puedes escribir [transcripción u1-fundamentos IMG10] [Notion: universalidad = Turing completo].

**Características y notas.**

- "La manera informal de comprobar esto es que un lenguaje es universal si permite recursión, o por lo menos, que permite definir y manejar pilas (stacks)." [transcripción u1-fundamentos IMG10] [Notion: universalidad = recursión o pilas].
- "Todos los lenguajes son Turing-completos, es decir, es posible escribir con ellos cualquier algoritmo." [transcripción u1-fundamentos IMG6] [POR-VERIFICAR: "todos" es absoluto y depende del alcance — se refiere a los lenguajes de propósito general del curso].
- Aun así, conviene que el lenguaje sea afín al dominio (cálculo, geometría, finanzas, estadística, lógica, etc.) para que desarrollar y corregir errores sea más fácil (ver §4.3 y §12) [transcripción u1-fundamentos IMG6].

### 4.2. Implementabilidad

**Definición formal.** "Debe ser posible traducir cualquier instrucción del lenguaje, ya sea simple o compuesta, a un conjunto de instrucciones máquina de la máquina-objeto, de manera exacta. Esto es, siempre se ejecutará exactamente lo que el diseñador del lenguaje especifica para esa instrucción (o 'tarea'), aunque se cambie de procesador." [transcripción u1-fundamentos IMG11].

**Explicación intuitiva.** Lo que el diseñador promete para cada instrucción debe cumplirse igual en cualquier procesador [transcripción u1-fundamentos IMG11] [Notion: traducción exacta a máquina-objeto]. [Explicación pedagógica — elaboración propia]: el contrato es "esta instrucción significa esto", y la implementación debe honrarlo en cada máquina.

**Características y notas.**

- "Máquina objeto" no es necesariamente el procesador físico: puede ser una máquina virtual; ejemplo: Java se traduce al lenguaje de la máquina virtual de Java [docx Características Generales P12].

### 4.3. Naturalidad

**Definición formal.** "Los lenguajes de programación se diseñan para que el programador pueda pensar más fácilmente en la solución de problemas de dominios específicos, sin perder la universalidad ya mencionada." [transcripción u1-fundamentos IMG12].

**Explicación intuitiva.** Cada dominio merece pensar en sus propios términos: "no es lo mismo programar un sistema de contabilidad que un sistema de control para un radio-telescopio, o una simulación en Mecánica Cuántica." [transcripción u1-fundamentos IMG12].

**Características y notas.**

- "Esa es la razón de que se siga diseñando lenguajes de programación." [transcripción u1-fundamentos IMG12].
- Los usuarios tienen propósitos concretos (resolver ecuaciones, representar conocimiento lógico, animación 3D, contabilidad y finanzas, etc.); todo puede hacerse en cualquier lenguaje, pero es más fácil si el lenguaje es afín al área [transcripción u1-fundamentos IMG6] [Notion: naturalidad].
- En el diseño debe haber balance entre el propósito, la facilidad de desarrollo y el hardware disponible [transcripción u1-fundamentos IMG5].

## 5. No-ambigüedad

**Definición formal.** "Parece natural exigir que un lenguaje de programación carezca de las ambigüedades de los lenguajes naturales, pero los lenguajes de programación pueden tener las suyas propias. Estas 'ambigüedades formales' se han venido conociendo conforme se han creado los compiladores para los lenguajes de programación." [transcripción u1-fundamentos IMG13].

**Explicación intuitiva.** Aun siendo formales, los lenguajes pueden leerse de dos maneras; el problema aparece al compilar [transcripción u1-fundamentos IMG13]. Los dos ejemplos canónicos del curso son el *else* colgante y la conversión de tipos en `r = m*i + s` [transcripción u1-fundamentos IMG13] [Notion: dangling else, conversión de tipos `r=m*i+s`].

**Características y notas.**

- Ejemplo 1: "`else` colgante" (*dangling else*): "aquí la ambigüedad es a cuál `if` le pertenece ese `else`" [docx Características Generales P17]; ver el listado Pascal en `examples.md` [transcripción u1-fundamentos IMG14].
- Ejemplo 2: `r = m * i + s;` con `r, m, s` flotantes e `i` entera [transcripción u1-fundamentos IMG13]: doble ambigüedad — (a) orden: "hacer primero la suma o la multiplicación"; (b) conversión: "transformar la `i` de entero a flotante o la `m` de flotante a entero" [docx Características Generales P15].
- Remedio documentado: "añadiendo reglas metalingüísticas, es decir reglas que no están en el léxico, sino que son extra." [docx Características Generales P15].

## 6. Eficiencia (relativizable)

**Definición formal.** "Aunque el procesador sea 'veloz', si las estructuras creadas por el compilador de su lenguaje son ineficientes, el usuario verá una máquina lenta. Es un requisito deseable que el código creado en el lenguaje de programación sea, además, eficiente en su ejecución." [transcripción u1-fundamentos IMG15].

**Explicación intuitiva.** La velocidad que percibe el usuario depende también del código que genera el compilador, no solo del procesador [transcripción u1-fundamentos IMG15]. [Explicación pedagógica — elaboración propia]: un auto potente con una caja de cambios mala igual se siente lento.

**Características y notas.**

- "Pero este requisito se puede 'relativizar' cuando se necesitan algunas otras condiciones, como la portabilidad (Java) o la claridad en algunos entornos (Prolog), o la versatilidad (C#)." [transcripción u1-fundamentos IMG15] [Notion: eficiencia relativizable — portabilidad/claridad].
- "Meter una máquina virtual como intérprete siempre es ineficiente pero en algunos momentos se asume porque se necesitan cosas diferentes." [docx Características Generales P19] [POR-VERIFICAR: "siempre" es absoluto].

## 7. Depurabilidad

**Definición formal.** "Los lenguajes deben ayudar a todo el proceso de Ingeniería de Software. Eso significa que, sin ser excesivos (COBOL), deben poder establecer una biyección entre los procesos de diseño, implementación y depuración, de tal forma que sea rápido encontrar las secciones de código correspondientes a cada pieza conceptual desarrollada." [transcripción u1-fundamentos IMG16].

**Explicación intuitiva.** Debe ser rápido ir de la idea de diseño a su código y viceversa para localizar errores [transcripción u1-fundamentos IMG16] [Notion: depurabilidad = biyección diseño↔código]. [Explicación pedagógica — elaboración propia]: "biyección" aquí significa correspondencia uno-a-uno entre pieza conceptual y sección de código.

**Características y notas.**

- Contexto: un programa útil "suele tener una vida muy larga, en algunos casos de décadas (p. ej. sistema de atención a desempleados de Nueva Jersey)" [transcripción u1-fundamentos IMG7] [POR-VERIFICAR: caso y duración]; tras crearlo habrá que eliminar *bugs*, agregar o modificar funcionalidades, o migrarlo de ambiente — "y todo hay que hacerlo ASAP" [transcripción u1-fundamentos IMG7].
- La advertencia "sin ser excesivos (COBOL)" está en la fuente [transcripción u1-fundamentos IMG16].

## 8. Seguridad

**Definición formal.** "La información manejada por las computadoras debe tener ciertas calidades, desde el punto de vista de la Seguridad Informática: privacidad, disponibilidad, integridad. Es una decisión opcional de los diseñadores de los lenguajes el dotarlos de la capacidad inherente de manejar condiciones de seguridad informática dentro del mismo lenguaje." [transcripción u1-fundamentos IMG17].

**Explicación intuitiva.** El lenguaje *puede* (no está obligado a) traer seguridad incorporada [transcripción u1-fundamentos IMG17]. Ejemplos de la fuente: manejo de excepciones de Java, métodos criptográficos, modelos Bell-LaPadula [sic: el slide dice "Bell-La Padulla"] [POR-VERIFICAR] y Biba como parte del lenguaje [transcripción u1-fundamentos IMG17] [Notion: seguridad CIA + Bell-LaPadula/Biba].

**Características y notas.**

- Privacidad: "solo las personas autorizadas pueden ver los datos o su contenido" [docx Características Generales P22] [Notion: CIA].
- Disponibilidad: "el contenido o los datos deben estar siempre disponible para las personas autorizadas" [docx Características Generales P23] [Notion: CIA].
- Integridad: "los datos o el contenido debe de no poder ser modificado, aumentado o reducido, por personas no autorizados." [docx Características Generales P24] [Notion: CIA].
- En el ciclo de desarrollo, "se tiene que pensar obligatoriamente en la seguridad informática" [docx Características lingüísticas P4]; el ciclo con anotaciones de seguridad incluye *abuse cases, security reqs., risk analysis, risk-based security tests, code review tools, penetration testing, security operations* [transcripción u1-fundamentos IMG1–IMG2 de características lingüísticas].

## 9. Sintaxis, semántica y pragmática

**Definición marco.** "Para hablar de los lenguajes de programación, que son lenguajes artificiales, se usan conceptos utilizados en Lingüística, que es la disciplina que estudia los lenguajes naturales. Tres de estos conceptos son sintaxis, semántica y pragmática, donde estos últimos tienen significados muy particulares cuando hablamos de lenguajes de programación." [transcripción u1-fundamentos IMG3 de características lingüísticas].

### 9.1. Sintaxis

**Definición formal.** "La sintaxis de un lenguaje de programación concierne a las reglas para formar expresiones válidas para ese lenguaje, por ejemplo, para declarar variables, construir estructuras de control de ejecución (`if`, `while`, etc.), declarar módulos u otros elementos externos." [transcripción u1-fundamentos IMG4 de características lingüísticas] [Notion: sintaxis = reglas/gramática libre de contexto].

**Características y notas.**

- "Una de las labores más importantes de los compiladores es verificar que los programas cumplan con las reglas de sintaxis del lenguaje." [transcripción u1-fundamentos IMG4 de características lingüísticas].
- "Lo usual es que las reglas sintácticas (llamadas la gramática) se expresan mediante reglas de sustitución libres de contexto." [transcripción u1-fundamentos IMG4 de características lingüísticas].
- Dato complementario del `.docx`: "los lenguajes de programación son de tipo 2 en la jerarquía de Chomsky, es decir, son lenguajes libres de contexto únicamente. El lenguaje ensamblador en cambio es de tipo 3, por tanto, son lenguajes regulares." [docx Características Generales P25] [POR-VERIFICAR: "únicamente" es absoluto].
- Dato complementario: "como el compilador revisa la sintaxis y genera el código ejecutable en lenguaje máquina, podemos decir que el compilador revisa la sintaxis y genera la semántica." [docx Características lingüísticas P9].

### 9.2. Semántica

**Definición formal.** "En el caso de lenguajes de programación, que son formales, el sentido de 'semántica' se refiere más bien a cómo se espera que los programas se comporten una vez que se ejecuten en una computadora." [transcripción u1-fundamentos IMG5 de características lingüísticas] [Notion: semántica = comportamiento al ejecutar, ej. `while` Pascal].

**Características y notas.**

- Ejemplo de la fuente: la semántica de `while <cond. booleana> [begin ... end]` en Pascal "es la implementación de ciclos que se ejecuten 0 o más veces." [transcripción u1-fundamentos IMG5 de características lingüísticas].
- "En cierta forma es correcto también decir que la semántica de un programa es su ejecutable." [transcripción u1-fundamentos IMG5 de características lingüísticas].
- Contraste con lenguaje natural: allí la semántica es el significado de las expresiones (ej. "Wie geht es ihnen?" → ¿y eso qué significa?) [transcripción u1-fundamentos IMG5 de características lingüísticas].

### 9.3. Pragmática

**Definición formal.** "En el caso de los lenguajes de programación la pragmática concierne a la manera en que el lenguaje va a ser usado en la práctica. La pragmática se refiere a los aspectos prácticos de cómo los constructos y características de un lenguaje de programación pueden ser usados para lograr varios objetivos." [transcripción u1-fundamentos IMG6 de características lingüísticas] [Notion: pragmática = uso en la práctica; nombres, comentarios; 4 usos de la asignación].

**Características y notas.**

- "La pragmática no es obvia, el programador la comunica a otros mediante nombres significativos de variables, módulos, procedimientos, etc.; también mediante comentarios y otros medios de documentación interna." [transcripción u1-fundamentos IMG7 de características lingüísticas].
- "Comunicar la pragmática del código es vital para agilizar muchos procesos de ingeniería de software en ambientes complejos de desarrollo." [transcripción u1-fundamentos IMG7 de características lingüísticas].
- Los cuatro usos pragmáticos de la asignación (ver `examples.md`): (1) actualizar una temporal para mejorar eficiencia; (2) comunicar valores entre partes del programa (parámetros o mensajes); (3) modificar parte de una estructura de datos; (4) actualizar un acumulador en un cálculo iterativo [transcripción u1-fundamentos IMG8 de características lingüísticas].
- Nota del `.docx`: la pragmática es intencionalidad — aquello para lo cual realmente se crea el programa o módulo — con intervención humana; "las inteligencias artificiales carecen de intencionalidad… son sistemas formales… que no poseen intencionalidad." [docx Características lingüísticas P11] [POR-VERIFICAR: afirmación filosófica, no técnica del curso].
- Contraste con lenguaje natural: uso social no inherente a la semántica (ej. el 4 en japonés se pronuncia "shi", pero en una boda se dice "yon") [transcripción u1-fundamentos IMG6 de características lingüísticas].
- El diagrama de círculos concéntricos del curso ordena: fonética (sonidos) → fonología (fonemas) → morfología (palabras) → sintaxis (frases y oraciones) → semántica (significado literal) → pragmática (significado en contexto) [transcripción u1-fundamentos IMG18]; y el `.docx` afirma que de un lenguaje formal "puede decirse que tiene fonología, sintaxis, semántica y pragmática" [docx Características lingüísticas P5].

## 10. Valores, datos y tipos (Wirth)

**Definición formal.** "Características que podemos esperar que tenga cualquier lenguaje de programación, sin importar el paradigma → Wirth: 'Algorithms + Data Structures = Programs'. Todo lenguaje tiene que poder representar algoritmos y datos." [cuaderno p2].

**Explicación intuitiva.** Programar exige dos mitades: los pasos (algoritmos) y aquello sobre lo que operan (datos) [cuaderno p2]. [Explicación pedagógica — elaboración propia]: sin datos no hay qué procesar; sin algoritmo no hay cómo procesarlo.

**Características y notas.**

- "Datos → Valor: simples / compuestos." [cuaderno p2].
- Simples: "dados por el hardware (enteros comp-2, flotantes IEEE 754); basados en enteros (booleano, caracteres, tipos enumerados, BCD, direcciones)." [cuaderno p2].
- Compuestos: "producto cartesiano → C1 × C2 × C3 × … × Cn (tabla ejemplo: código, descripción, fecha/compra, valor/compra, valor/mercado, tipo de depreciación); array (n dimensiones); listas (tipos recursivos); árbol; unión; file." [cuaderno p2].
- Esto conecta con la definición de algoritmo: opera "sobre un grupo finito de datos (simples o compuestos)" [transcripción u1-fundamentos IMG1].

## 11. Computabilidad y funciones parcialmente computables

**Definición marco.** "Proceso efectivo → función computable / algoritmo → equivalentes." [cuaderno p2]. La computabilidad se presentó en clase junto con procedimiento efectivo y algoritmos [cuaderno p1].

**Explicación intuitiva.** Algunas funciones tienen respuesta para ciertas entradas pero no para otras (o no se sabe si el cómputo termina): son *parcialmente* computables [Explicación pedagógica — elaboración propia]. Los ejemplos de esta sección (√x y E = {0, 1, 4, 9, …}) fueron pedidos en el encargo y se desarrollan en `examples.md`; no provienen de las transcripciones ni del `.docx` [Explicación pedagógica — elaboración propia].

**Características y notas.**

- La tesis de Church fija el marco: todo lo computable es Turing-computable y las formas de computabilidad son equivalentes [cuaderno p2] (ver §2).
- Los ejemplos clásicos pedidos (conjetura de Goldbach, teoremas de Gödel) ilustran límites de lo computable/decidible y se tratan como ejemplos, no como definiciones del curso [Explicación pedagógica — elaboración propia] [POR-VERIFICAR: enunciados exactos de Goldbach y Gödel según la formulación usada en clase].

## 12. Por qué estudiar paradigmas

**Definición formal.** "Un paradigma de programación es una cierta forma de ver los algoritmos." [transcripción u1-fundamentos IMG4].

**Explicación intuitiva.** El algoritmo es abstracto, pero los problemas viven en "ambientes" muy distintos; expresar el algoritmo en los términos de ese ambiente produce mejores programas [transcripción u1-fundamentos IMG4]. "Cada paradigma brinda un conjunto diferente de herramientas mentales para expresar los algoritmos." [transcripción u1-fundamentos IMG4].

**Características y notas.**

- "Diferentes formas de entender que algo es computable. Cada aspecto diferente involucra que también debamos pensar diferente. Tareas del mundo real que se pueden replicar mejor en ciertos paradigmas que en otros." [cuaderno p1].
- "Paradigmas: dentro de los mismos se crean lenguajes con las bases de ese paradigma. Características de los 4 paradigmas. Por lo menos 2 lenguajes diferentes por cada paradigma." [cuaderno p1] [POR-VERIFICAR: número de paradigmas y de lenguajes según el programa oficial del curso].
- Aunque "cualquiera de estas cosas puede hacerse en cualquier lenguaje de programación, […] es más fácil para un ser humano el desarrollar sus programas (y encontrar y corregir errores) si el lenguaje […] es afín al lenguaje del área para lo que se lo va a usar." [transcripción u1-fundamentos IMG6].
- El hardware también empuja: evoluciona "con mucha frecuencia por presiones del software", y rasgos antes caros (computación vectorial, hilos concurrentes) se vuelven comunes; los lenguajes de alto nivel deberían exponerlos "de una manera 'intuitiva'" [transcripción u1-fundamentos IMG8].
- Nota de método ágil del `.docx`: ante un programa muy grande, "se diseñan pequeños programas que trabajan en conjunto, esto permite poner software más rápido a funcionar y ver su interacción con los usuarios, se le conoce como metodologías ágiles." [docx Características lingüísticas P2].
- "Los lenguajes de programación también evolucionan y cambian." [docx Características lingüísticas P14].
