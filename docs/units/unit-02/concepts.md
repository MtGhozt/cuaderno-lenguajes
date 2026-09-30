# Unidad 2 — Conceptos (definición formal + explicación intuitiva + características)

> Cada sección trae: **Definición formal** (cita fiel), **Explicación intuitiva** y **Características/notas**. Toda afirmación teórica lleva su Fuente. Lo añadido como ayuda didáctica se marca `[Explicación pedagógica — elaboración propia]`.

## 1. Idea imperativa: tareas = instrucciones = órdenes

**Definición formal.** "Algoritmo: conjunto de tareas, finitas, que se llevan a cabo en un tiempo finito, sobre un conjunto finito de datos, usando recursos finitos. Tareas = instrucciones. ¿Cómo se llevan a cabo? Ejecución imperativa. En el fondo son órdenes. Se tienen que ejecutar cada una de ellas." [cuaderno p3].

**Explicación intuitiva.** El programa es una lista de órdenes y la máquina las obedece una por una [cuaderno p3]. [Explicación pedagógica — elaboración propia]: como una receta donde cada paso es una orden ("bata", "hornee"); aquí cada paso es una instrucción que la máquina ejecuta.

**Características y notas.**

- Los lenguajes imperativos a veces se conocen como lenguajes de Von Neumann [docx P42].
- La programación procedimental "verdadera" con Pascal, COBOL y C se practicó por ~30 años [Notion].

## 2. Variables: bytes consecutivos y declaración explícita

**Definición formal.** "Variables son grupos consecutivos de bytes. Declaración de variables explícita." [cuaderno p3].

**Explicación intuitiva.** Cada variable ocupa un bloque contiguo de memoria y debe declararse antes de usarse [cuaderno p3]. [Explicación pedagógica — elaboración propia]: el programador reserva el espacio por adelantado y el nombre de la variable es la etiqueta de ese bloque.

**Características y notas.**

- Palabras reservadas según el cuaderno: COBOL → 90 y pico [POR-VERIFICAR cifra] [cuaderno p3]; Pascal → 14 [POR-VERIFICAR cifra] [cuaderno p3]; C → 14 [POR-VERIFICAR cifra] [cuaderno p3].
- COBOL es *verbose*: demasiadas instrucciones y términos, lo que lo hacía complejo de aprender [docx P2] [image img2].

## 3. Comparativa COBOL / Pascal / C (llamadas, operadores, archivos)

**Definición formal.** COBOL "no tiene calls, hace un salto al 'párrafo' al que lo llamaron" [sic: redacción del apunte] [cuaderno p3]. Pascal: "asignación ':' y comparación ':=' — 'se define como //'" [POR-VERIFICAR: el apunte parece invertir la notación; en Pascal la asignación es `:=` y la comparación `=`] [cuaderno p3]. C: "asignación '=' y comparación '=='" [cuaderno p3].

**Explicación intuitiva.** [Explicación pedagógica — elaboración propia]: los tres distinguen "guardar un valor" de "preguntar si dos valores son iguales", pero con símbolos distintos; COBOL ni siquiera organiza el llamado como los otros dos, sino por salto a párrafos.

**Características y notas.**

- Pascal permite funciones anidadas; C no permite funciones anidadas [cuaderno p3].
- Recuperación de información de archivos: COBOL bien (archivo e índice); Pascal mal; C mal [cuaderno p3].
- "Asignación ':' en Pascal" va con [POR-VERIFICAR] en toda esta documentación: el cuaderno la anota así, pero todo indica inversión con `:=`/`=` [cuaderno p3].

## 4. Life span: pila, data segment, heap/GC

**Definición formal.** "Life span → módulo. Locales mueren con su módulo. Globales viven tanto como el programa." [cuaderno p4]. "Variables locales: viven en la pila / registro. Variables globales: viven en el data segment. Estáticas. Variables dinámicas: viven en el heap. G.C. → Garbage Collector." [cuaderno p4].

**Explicación intuitiva.** Cada variable tiene un tiempo de vida ligado a dónde vive: lo local muere al salir del módulo, lo global dura todo el programa, lo dinámico vive en el *heap* hasta que se libera o lo recoge el GC [cuaderno p4]. [Explicación pedagógica — elaboración propia]: como objetos en una oficina — los de tu escritorio desaparecen al irte (pila), los del archivo general quedan (data segment), los de la bodega hay que ir a botarlos o alguien los recoge (heap/GC).

**Características y notas.**

- En C la memoria puede liberarla el programador, lo que induce errores de memoria y fugas [docx P7].
- El manejo de la pila en C es ingenuo: permite inyectar código externo en el *stack frame* y ejecutar un programa malicioso [docx P5].

## 5. Programación estructurada y main-columna

**Definición formal.** "Programación estructurada: tiene un main — módulo estructural que es la columna, y todos convergen a él." [cuaderno p4, con diagrama de main como columna con módulos que convergen].

**Explicación intuitiva.** Hay un módulo principal que sostiene la estructura y todos los demás cuelgan de él [cuaderno p4].

**Características y notas.**

- La estructurada era opcional en la época procedimental y con frecuencia se programaba descuidadamente [Notion].
- Regla de tamaño del curso: un módulo no puede exceder una página [cuaderno p6].

## 6. Coupling bajo vs cohesión alta (ojo: "Binding")

**Definición formal.** "Coupling: qué tan enlazados están 2 módulos. Queremos que tenga un coupling bajo." [cuaderno p4]. "Binding [sic] … coherencia semántica. Si algo solo hace un cálculo, solo hace eso y ya. Si algo solo muestra algo, solo muestra eso y ya. Buscamos que sea alto." [cuaderno p4].

**Explicación intuitiva.** Los módulos deben estar poco amarrados entre sí (*coupling* bajo) y cada uno debe hacer una sola cosa bien (cohesión alta) [cuaderno p4]. [Explicación pedagógica — elaboración propia]: piezas que encajan flojo pero cada una con un único propósito claro.

**Características y notas.**

- [POSIBLE CONFUSIÓN: el cuaderno rotula "Binding" lo que por su contenido — coherencia semántica, hacer una sola cosa — es cohesión, no *binding*] [cuaderno p4].
- En toda esta documentación se usa *cohesión (rotulada "Binding" en el cuaderno)* la primera vez que aparece por archivo.

## 7. Datos compuestos: array casi único + constructores a pie

**Definición formal.** "Array es casi el único tipo de dato compuesto (a veces se incluye 'string'). Pero se incluyen constructores para implementar (a pie) otros tipos. (Perdemos uniformidad.) Ejemplo producto cartesiano: Pascal → Record; C → struct; Cobol → 'Nivel 01'." [cuaderno p5].

**Explicación intuitiva.** El lenguaje solo trae el *array* de fábrica; cualquier otra estructura (como un registro de empleado) hay que armarla a mano con constructores, y cada lenguaje tiene el suyo [cuaderno p5]. [Explicación pedagógica — elaboración propia]: "perdemos uniformidad" significa que la misma idea (un registro) se escribe de tres formas distintas según el lenguaje.

**Características y notas.**

- Ejemplo del cuaderno en COBOL: `01 Empleado` con `03 Nombre PIC X(50)`, `03 Fecha-Nac` descompuesta en `05 Dia-Nac PIC 9(2)`, `05 Mes-Nac PIC 9(2)`, `05 Anno-Nac PIC 9(2)` [sic: "Anno"] [cuaderno p5].
- COBOL es incapaz de manejar estructuras dinámicas [image img2]; además el lenguaje no paraba de crecer y la curva de aprendizaje era cada vez más larga [image img2] [docx P4: intentar mejorarlo trajo más instrucciones y lo empeoró].
- Ninguno de estos lenguajes permite compartir la definición de las estructuras de datos creadas ni las operaciones definidas en ellas [docx P16].

## 8. Estructuras de control con instrucciones

**Definición formal.** "Estructuras de control se implementan con instrucciones: ejecución secuencial (`b := m`, `r := n`, una después de la otra); ejecución condicional (`if <cond> [then] <then part> [else <else-part>]`); case / switch; ejecución repetitiva: for → `perform` en Cobol; while; repeat / do while ('hace y después pregunta')." [cuaderno p5].

**Explicación intuitiva.** Todo el control de flujo (seguir, elegir, repetir) se expresa con instrucciones del lenguaje [cuaderno p5]. [Explicación pedagógica — elaboración propia]: "hace y después pregunta" distingue al repeat: el cuerpo se ejecuta al menos una vez porque la condición se revisa al final.

**Características y notas.**

- Diagramas estructurados para: secuencial, condicional (F/T), switch multi-rama (A/B/C/D), `while <cond>` y `repeat until <cond>` [cuaderno p6].
- C es inseguro e inestable en situaciones "límite" [image img3].
- En Pascal la E/S se hace con instrucciones del lenguaje [image img4]; hay "muchas operaciones de entrada salida" [docx P14].

## 9. Recursión simple y mutua

**Definición formal.** "Recursión simple (A se llama a sí [diagrama]) y mutua (A → B)." [cuaderno p5, con diagramas].

**Explicación intuitiva.** Simple: el módulo se invoca a sí mismo; mutua: dos módulos se invocan entre sí (A llama a B) [cuaderno p5].

## 10. Función vs procedimiento como abstracciones

**Definición formal.** "Módulos — funciones: abstracción de una expresión constante (`<var> ← expresión`); procedimiento: abstracción de un grupo de instrucciones." [cuaderno p5].

**Explicación intuitiva.** La función resume una expresión que produce un valor; el procedimiento resume un bloque de instrucciones que hace algo [cuaderno p5]. [Explicación pedagógica — elaboración propia]: función = "calcula esto"; procedimiento = "haz estos pasos".

## 11. Separación datos–módulos, dialectos, excepciones

**Definición formal.** "Separación fuerte entre datos y módulos. [Originalmente] no había forma de compartir código. Existencia de dialectos. Manejo de excepciones [diagrama de salto de excepción]." [cuaderno p6].

**Explicación intuitiva.** Datos por un lado, módulos por otro, sin reutilización al inicio; con el tiempo cada implementación derivó en su dialecto y los errores se manejaron con saltos de excepción [cuaderno p6].

**Características y notas.**

- COBOL sufrió proliferación de dialectos [cuaderno p6] [image img2: el lenguaje no paraba de crecer].
- En Pascal el manejo de excepciones se hace "saliendo de forma abrupta de un ciclo cuando puede ocurrir una situación especial y específica" [docx P15]; esas salidas abruptas (excepciones) son engorrosas [image img4].
- En C el manejo de E/S es complejo porque a veces queda información en los *buffers* y deben limpiarse: mucho comportamiento inestable [docx P7].
- La operación con archivos grandes es ajena al lenguaje en C [image img3].

## 12. Efectos colaterales en C (dispositivos y `get`)

**Definición formal.** "Cualquier dispositivo E/S debe dar información de *status*… La operación 'tomar un dato del archivo' … se topa con que no se puede completar la acción. C permite verificar todas estas situaciones por ser tan bajo nivel. Así cada E/S brinda 2 datos: los datos solicitados y el estado de la operación." [docx P9]. "Nótese que esta instrucción es muy usual en C, hace la lectura del código más compleja y mezcla operaciones E/S con la detección de la conexión de un dispositivo, en la misma condición, lo que es incorrecto y se presta para problemas de verificación de errores." [docx P11, sobre `if ((a=get(f)) !=0) …`].

**Explicación intuitiva.** En C leer un dato y enterarse de si la lectura funcionó vienen pegados: cada E/S entrega el dato pedido *y* el estado (no encontró el archivo, EOF, vacío, etc.), y el programador debe gestionar ambos [docx P9]. El ejemplo `if ((a=get(f)) !=0) …` mete en una sola línea la lectura, la asignación y el chequeo de estado, lo que complica la lectura y la verificación de errores [docx P11] [image img3: efectos colaterales; solicitud → espera → informe de éxito/fracaso].

**Características y notas.**

- Parte de esta situación provocó que no se tuvieran variables booleanas, para poder retornar valores enteros concretos [docx P11]; así, la función llamada esperando datos puede retornar un valor que en realidad corresponde a un error: comportamiento inesperado que cuesta verificar [docx P12].
- C asume que el programador maneja esas situaciones y además usa esos estados [docx P9].

## 13. Representación de algoritmos y regla del módulo

**Definición formal.** "Representación de algoritmos: pseudocódigo; diagramas de flujo ('No usarlas'); diagramas de Nassi-Shneiderman → diagramas estructurados. Módulo: nombre; un módulo no puede exceder una página [diagrama de bloque de módulo]." [cuaderno p6].

**Explicación intuitiva.** Para representar algoritmos se usa pseudocódigo o diagramas estructurados (Nassi-Shneiderman); los diagramas de flujo están proscritos en el curso ("no usarlos") [cuaderno p6]. Cada módulo lleva nombre y cabe en una página [cuaderno p6].
