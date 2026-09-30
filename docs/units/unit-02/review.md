# Unidad 2 — Repaso (resumen + errores frecuentes + autoevaluación)

## Resumen esencial

- **Idea imperativa.** Algoritmo = tareas finitas; tareas = instrucciones; ejecutar es obedecer órdenes, una por una [cuaderno p3]. Familia Von Neumann [docx P42]; ~30 años de procedimental "verdadera" (Pascal, COBOL, C) con estructurada opcional y descuidada [Notion].
- **Variables y vida.** Bloques consecutivos de bytes, declaración explícita [cuaderno p3]. Locales (pila/registro, mueren con su módulo), globales (*data segment*, viven como el programa), dinámicas (*heap*, GC) [cuaderno p4].
- **Diseño.** Main como columna donde todo converge [cuaderno p4]; *coupling* bajo, cohesión ("Binding" en el cuaderno) alta [cuaderno p4] [POSIBLE CONFUSIÓN]; módulo con nombre y de máximo una página [cuaderno p6].
- **Datos.** *Array* casi único (a veces string); el resto se construye a pie: Record (Pascal), struct (C), Nivel 01 (COBOL, ej. `01 Empleado…`) — se pierde uniformidad [cuaderno p5]. COBOL no maneja estructuras dinámicas [image img2].
- **Control.** Secuencial (`b := m`, `r := n`), `if … [then] … [else …]`, case/switch, for→`perform` (COBOL), while, repeat/do-while ("hace y después pregunta") [cuaderno p5–p6]. Recursión simple (A→A) y mutua (A→B) [cuaderno p5].
- **Módulos.** Función = abstracción de expresión (`<var> ← expresión`); procedimiento = abstracción de instrucciones [cuaderno p5]. Separación fuerte datos–módulos, sin reutilización al inicio, dialectos, excepciones con saltos [cuaderno p6].
- **Crítica.** COBOL: *verbose*, crecimiento sin fin, dialectos [docx P2, P4] [image img2] [cuaderno p6]. C: pila ingenua/inyección [docx P5], memoria manual y fugas [docx P7], E/S de 2 datos (pedidos + estado) [docx P9], `if ((a=get(f)) !=0)` mezcla E/S con estado [docx P11] [image img3], sin booleanos y confusión dato/error [docx P11–P12], archivos grandes ajenos [image img3], inestable en límites [image img3]. Pascal: E/S con instrucciones [image img4], muchas operaciones E/S [docx P14], salidas abruptas engorrosas [docx P15] [image img4]. Ninguno comparte estructuras ni funciones [docx P16].
- **Representación.** Pseudocódigo y Nassi-Shneiderman (estructurados); flujo: no usarlos [cuaderno p6].

## Errores frecuentes

1. **Invertir asignación y comparación** (sobre todo en Pascal y C). Fuente: la notación de Pascal en el cuaderno va con [POR-VERIFICAR] por posible inversión (`:`/`:=` vs `:=`/`=`) [cuaderno p3]; C es `=` vs `==` [cuaderno p3].
2. **Llamar "Binding" a la cohesión sin advertir.** El cuaderno lo rotula así, pero es cohesión (alta) [POSIBLE CONFUSIÓN] [cuaderno p4]; no confundir con el objetivo del *coupling* (bajo).
3. **Pedir *coupling* alto.** Se busca bajo; lo alto es la cohesión [cuaderno p4].
4. **Creer que el *array* basta para todo.** Es casi el único nativo; lo demás se construye a pie y se pierde uniformidad [cuaderno p5].
5. **Usar diagramas de flujo.** El curso los proscribe ("No usarlas"); usar estructurados o pseudocódigo [cuaderno p6].
6. **Olvidar que cada E/S en C trae estado.** No es solo el dato: son 2 datos (solicitados + estado) y el programador los gestiona [docx P9]; el ejemplo `if ((a=get(f)) !=0)` es el caso típico [docx P11].
7. **Atribuir archivos "bien" a Pascal o C.** Solo COBOL (archivo e índice); Pascal y C, mal [cuaderno p3].
8. **Dar por firmes las cifras de reservadas** (90 y pico / 14 / 14): siempre con [POR-VERIFICAR] [cuaderno p3].

## Autoevaluación (8 preguntas con respuestas)

1. **¿Qué significa "tareas = instrucciones" y cómo se ejecutan?**
   R: Que el algoritmo es un conjunto de tareas finitas donde cada tarea es una instrucción, y la ejecución imperativa consiste en ejecutar cada una como una orden [cuaderno p3].
2. **Complete: locales viven en ____; globales en ____; dinámicas en ____.**
   R: Pila/registro; *data segment* (estáticas); *heap* (GC) [cuaderno p4]. Locales mueren con su módulo; globales viven como el programa [cuaderno p4].
3. **¿Qué se busca en *coupling* y en cohesión ("Binding" del cuaderno)?**
   R: *Coupling* bajo (módulos poco enlazados); cohesión alta (cada módulo hace una sola cosa) [cuaderno p4] [POSIBLE CONFUSIÓN en el rótulo].
4. **¿Cómo se construye un producto cartesiano en cada lenguaje y qué se pierde?**
   R: Pascal → Record; C → struct; COBOL → Nivel 01 (ej. `01 Empleado…`) [cuaderno p5]. Se pierde uniformidad [cuaderno p5].
5. **Diferencie `while` de `repeat` en una línea cada uno.**
   R: `while <cond>` pregunta antes (diagrama con condición al inicio) [cuaderno p6]; `repeat until <cond>` "hace y después pregunta" [cuaderno p5].
6. **Distinga función de procedimiento con la notación del cuaderno.**
   R: Función: abstracción de expresión (`<var> ← expresión`); procedimiento: abstracción de un grupo de instrucciones [cuaderno p5].
7. **Explique el problema de `if ((a=get(f)) !=0) …`.**
   R: Mezcla en una condición la lectura E/S, la asignación y la detección del estado del dispositivo, complicando la lectura y la verificación de errores [docx P11]; cada E/S entrega dato + estado que C deja en manos del programador [docx P9]; sin booleanos, un retorno puede confundir dato con error [docx P11–P12].
8. **¿Qué representaciones se usan y cuál está prohibida? ¿Qué regla limita el módulo?**
   R: Se usan pseudocódigo y diagramas estructurados Nassi-Shneiderman; flujo, no ("No usarlas") [cuaderno p6]. El módulo lleva nombre y no excede una página [cuaderno p6].

## Nota de fidelidad (no es apunte)

- Chistes de clase omitidos del apunte según el encargo: *Interludio de Roma* [cuaderno p3] y "Satanás" para Nassi-Shneiderman [cuaderno p6]; se listan aquí para constancia.
- El ejercicio "Escriba un prompt que programe mcm en Fortran" [cuaderno p4] se trata como ejercicio de análisis (Ej. 11 de `exercises.md`), no como código.
- Marcas usadas: cifras de reservadas y "Asignación ':' en Pascal" con [POR-VERIFICAR]; "Binding" con [POSIBLE CONFUSIÓN: es cohesión].
