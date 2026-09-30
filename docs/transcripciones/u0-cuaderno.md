# Transcripción fiel del cuaderno — páginas U1 y U2

> Método: lectura visual directa de `Apuntes Cuaderno.pdf` (6 páginas escaneadas).
> Alcance: p1–p2 (U1 fundamentos) y p3–p6 (U2 imperativo/procedimental,
> incorporado tras revisión del estudiante).

## Cuaderno p1 — 04/08/26. Lenguajes de Programación. Profesor: Jorge Vargas.

Palabras clave: Paradigma · Algoritmos · Procedimientos efectivos.

Notas:

- Anécdota del profe. Por el aniversario de 50 años de la carrera.
- Charlas la próxima semana en vez de clases. Planeo ir al menos a unas. Charla jueves ✓. Clases grabadas.
- ¿Por qué tantos lenguajes? ¿De qué trata el curso? ¿Cuál es su importancia?
  - "Nombre erróneo", o solo un poco cierto, debería llamarse paradigmas de programación.
  - Diferentes formas de entender que algo es computable.
  - Cada aspecto diferente involucra que también debamos pensar diferente.
  - Tareas del mundo real que se pueden replicar mejor en ciertos paradigmas que en otros.
  - Paradigmas: dentro de los mismos se crean lenguajes con las bases de ese paradigma.
  - Características de los 4 paradigmas.
  - Por lo menos 2 lenguajes diferentes por cada paradigma.
  - Se diseña antes de programar.
- Computabilidad.
  - Procedimiento efectivo.
  - Algoritmos.
    - Forma imperativa / procedimental.
    - Funciones.
    - Sentencias CP [sic: probable referencia al cálculo de predicados].
    - Clases — orientación a objetos [el apunte dice "agentes", por verificar].
- Paradigma.
  - Marco de referencia.
  - Ideas, conceptos que permiten enfocar algo de la realidad.

Fuente: `I Parcial/Apuntes Cuaderno.pdf` p1 + `docs/assets/cuaderno-p1.jpg` [transcrito de imagen, por verificar]

## Cuaderno p2 — Semana 1, Clase 2

- Proceso efectivo → Función computable / Algoritmo → Equivalentes.
- Tesis de Church: toda función computable es Turing-computable. Todas las formas de computabilidad son equivalentes.
- Lenguaje de programación = representación de algoritmos. Al crear un lenguaje, se debería comprobar que sea Turing-computable. Normalmente no se hace, basta con ciertas comprobaciones.
- Características que podemos esperar que tenga cualquier lenguaje de programación, sin importar el paradigma → Wirth: "Algorithms + Data Structures = Programs". Todo lenguaje tiene que poder representar algoritmos y datos.
- Datos → Valor: simples / compuestos.
- Simples: dados por el hardware (enteros comp-2, flotantes IEEE 754); basados en enteros (booleano, caracteres, tipos enumerados, BCD, direcciones).
- Compuestos: producto cartesiano → C1 × C2 × C3 × … × Cn (tabla ejemplo: código, descripción, fecha/compra, valor/compra, valor/mercado, tipo de depreciación); array (n dimensiones); listas (tipos recursivos); árbol; unión; file.

Fuente: `I Parcial/Apuntes Cuaderno.pdf` p2 + `docs/assets/cuaderno-p2.jpg` [transcrito de imagen, por verificar]

## Cuaderno p3 — 01/09/26. Paradigma: imperativo / procedimental.

- Algoritmo: conjunto de tareas, finitas, que se llevan a cabo en un tiempo finito, sobre un conjunto finito de datos, usando recursos finitos.
- Tareas = instrucciones. ¿Cómo se llevan a cabo? Ejecución imperativa. En el fondo son órdenes. Se tienen que ejecutar cada una de ellas. [*Interludio de Roma* — comentario de clase, sin contenido técnico]
- Características comunes:
  - Variables son grupos consecutivos de bytes.
  - Declaración de variables explícita.
  - Cobol → 90 y pico palabras reservadas. [POR-VERIFICAR cifra]
  - Pascal → 14 palabras reservadas. [POR-VERIFICAR cifra]
  - C → 14 palabras reservadas. [POR-VERIFICAR cifra]
  - Cobol: no tiene calls, hace un salto al "párrafo" al que lo llamaron. [sic: redacción del apunte]
  - Recuperación de información de archivos: bien (archivo y índice). [Cobol]
  - Pascal: asignación ":" y comparación ":=" — "se define como //". [POSIBLE INVERSIÓN: en Pascal la asignación es `:=` y la comparación `=`]
  - Pascal permite funciones anidadas.
  - Recuperación de información de archivos: mal. [Pascal]
  - C: asignación "=" y comparación "==".
  - No permite funciones anidadas. [C]
  - Recuperación de información de archivos: mal. [C]

Fuente: `I Parcial/Apuntes Cuaderno.pdf` p3 [transcrito de imagen, por verificar]

## Cuaderno p4 — Vida útil, estructurada, acoplamiento y cohesión.

- Ejercicio: "Escriba un prompt que programe mcm en Fortran." [ejercicio de clase con IA]
- Life span → módulo. Locales mueren con su módulo. Globales viven tanto como el programa.
- Programación estructurada: tiene un main — módulo estructural que es la columna, y todos convergen a él. [Diagrama: main como columna con módulos que convergen]
- Variables locales: viven en la pila / registro.
- Variables globales: viven en el data segment. Estáticas.
- Variables dinámicas: viven en el heap. G.C. → Garbage Collector.
- Coupling: qué tan enlazados están 2 módulos. Queremos que tenga un coupling bajo.
- Binding [sic: por el contenido corresponde a **cohesión**, no a binding]: coherencia semántica. Si algo solo hace un cálculo, solo hace eso y ya. Si algo solo muestra algo, solo muestra eso y ya. Buscamos que sea alto.

Fuente: `I Parcial/Apuntes Cuaderno.pdf` p4 [transcrito de imagen, por verificar]

## Cuaderno p5 — Semana 5, Clase 2. Características de los imperativos.

1. Array es casi el único tipo de dato compuesto (a veces se incluye "string"). Pero se incluyen constructores para implementar (a pie) otros tipos. (Perdemos uniformidad.)
   - Ejemplo producto cartesiano: Pascal → Record; C → struct; Cobol → "Nivel 01".
   - En COBOL: `01 Empleado` con `03 Nombre PIC X(50)`, `03 Fecha-Nac` descompuesta en `05 Dia-Nac PIC 9(2)`, `05 Mes-Nac PIC 9(2)`, `05 Anno-Nac PIC 9(2)`. [sic: "Anno"]
2. Estructuras de control se implementan con instrucciones:
   - Ejecución secuencial: `b := m`, `r := n` (una después de la otra).
   - Ejecución condicional: `if <cond> [then] <then part> [else <else-part>]`.
   - case / switch.
   - Ejecución repetitiva: for → `perform` en Cobol; while; repeat / do while ("hace y después pregunta").
   - Recursión simple (A se llama a sí [diagrama]) y mutua (A → B).
   - Módulos — funciones: abstracción de una expresión constante (`<var> ← expresión`); procedimiento: abstracción de un grupo de instrucciones.

Fuente: `I Parcial/Apuntes Cuaderno.pdf` p5 [transcrito de imagen, por verificar]

## Cuaderno p6 — Representación de algoritmos (continuación U2).

3. Separación fuerte entre datos y módulos.
4. [Originalmente] no había forma de compartir código.
5. Existencia de dialectos.
6. Manejo de excepciones. [Diagrama de salto de excepción]
- Representación de algoritmos: pseudocódigo; diagramas de flujo ("No usarlas"); diagramas de Nassi-Shneiderman ("Satanás" — chiste de clase) → diagramas estructurados.
- Módulo: nombre; un módulo no puede exceder una página. [Diagrama de bloque de módulo]
- Ejecución secuencial [diagrama de bloques en secuencia], condicional [diagrama con condición F/T], switch [diagrama multi-rama A/B/C/D], repetitiva: `while <cond>` y `repeat until <cond>` [diagramas].

Fuente: `I Parcial/Apuntes Cuaderno.pdf` p6 [transcrito de imagen, por verificar]
