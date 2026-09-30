# Unidad 2 — Programación imperativa / procedimental: COBOL, Pascal, C (IC-4700 Lenguajes de Programación)

## Introducción

Esta unidad estudia el paradigma imperativo / procedimental a través de tres lenguajes representantes: **COBOL, Pascal y C** [cuaderno p3]. La idea central es simple: un algoritmo es un conjunto de tareas finitas y **tareas = instrucciones**; la ejecución imperativa consiste en **ejecutar cada una de esas órdenes** [cuaderno p3].

El paradigma se caracteriza por variables como grupos consecutivos de bytes con declaración explícita, un repertorio de estructuras de control implementadas con instrucciones, y módulos (funciones y procedimientos) como mecanismo de abstracción [cuaderno p3–p5]. Históricamente, la programación procedimental "verdadera" con Pascal, COBOL y C dominó por ~30 años; la programación estructurada existía pero era opcional y con frecuencia se programaba descuidadamente [Notion].

La unidad cierra con la crítica que motiva el paso a otros paradigmas: ninguno de estos lenguajes permite compartir la notación de las estructuras de datos ni sus funciones [docx P16], y cada uno acumula problemas propios (COBOL: verbosidad y crecimiento; C: inseguridad e inestabilidad; Pascal: E/S y salidas abruptas) [docx P2–P16] [images img1–img4, img6].

## Objetivos de aprendizaje

Al terminar la unidad, el estudiante podrá:

1. Definir la ejecución imperativa (tareas = instrucciones = órdenes) y el concepto de variable imperativa [cuaderno p3].
2. Comparar COBOL, Pascal y C en llamadas/párrafos, asignación vs comparación, funciones anidadas y manejo de archivos [cuaderno p3].
3. Explicar el *life span* de variables (pila/registro, *data segment*, *heap*/GC) y la diferencia local/global [cuaderno p4].
4. Describir la programación estructurada (main como columna) y distinguir *coupling* bajo de cohesión alta [cuaderno p4].
5. Explicar por qué el *array* es casi el único compuesto y cómo se construyen los demás a pie (record/struct/nivel 01) [cuaderno p5].
6. Enumerar las estructuras de control (secuencial, if, case/switch, for→perform, while, repeat/do-while) y las dos formas de recursión [cuaderno p5–p6].
7. Distinguir función (abstracción de expresión) de procedimiento (abstracción de instrucciones) [cuaderno p5].
8. Enumerar los problemas de cada lenguaje (COBOL, C, Pascal) según la crítica del curso [docx P2–P16] [images img1–img4, img6] [Notion].

## Mapa de la unidad

| Archivo | Contenido |
|---|---|
| `overview.md` | Este archivo: introducción, objetivos y mapa |
| `concepts.md` | Definición formal + explicación intuitiva + características, tema por tema, con Fuente por bloque |
| `examples.md` | Ejemplos progresivos: 01 Empleado COBOL → secuencial `b:=m`/`r:=n` → if/case → while/repeat → función vs procedimiento |
| `comparisons.md` | COBOL vs Pascal vs C; función vs procedimiento; *coupling* vs cohesión; while vs repeat; flujo vs estructurados |
| `exercises.md` | 12 ejercicios con objetivo, dificultad y solución explicada |
| `review.md` | Resumen esencial, errores frecuentes y autoevaluación (8 preguntas con respuestas) |

## Convenciones usadas en esta documentación

- **Fuente por bloque.** Cada afirmación teórica cita su origen: `[cuaderno p3–p6]`, `[docx Pn]`, `[Notion]`, `[image imgN]`.
- **`[Explicación pedagógica — elaboración propia]`.** Marca lo añadido como ayuda didáctica (analogías, pasos intermedios, conexiones) que no viene literal de las fuentes.
- **`[POR-VERIFICAR]`.** Marca datos dudosos: cifras de palabras reservadas, la notación de asignación en Pascal según el cuaderno, transcripciones con [sic].
- **`[POSIBLE CONFUSIÓN]`**. Marca que el cuaderno rotula "Binding" lo que por su contenido es cohesión [cuaderno p4].
- **No se inventa sintaxis ni cifras.** Solo aparecen los fragmentos de código y números que traen las fuentes.

## Fuentes de la unidad

1. Cuaderno: `docs/transcripciones/u0-cuaderno.md` (p3 del 01/09/26, p4, p5 Semana 5 Clase 2, p6; las 4 páginas del paradigma imperativo; fuente principal).
2. Texto del `.docx` *Introduccion paradigma funcional.docx* extraído en memoria con PowerShell (`System.IO.Compression.ZipFile::OpenRead` + `word/document.xml` + regex `<w:t>`, sin temporales; 42 párrafos, 25 con texto), citado como `Pn`:
    - P2 (verbose), P4 (COBOL: mejorar trajo más instrucciones), P5 (C: pila ingenua e inyección), P7 (C: memoria liberada por el programador, fugas, buffers de E/S), P9 (C: cada E/S da 2 datos — solicitados + estado), P11 (instrucción `if ((a=get(f)) !=0)` mezcla E/S con detección de estado; sin booleanos), P12 (retornos que confunden dato con error), P14–P15 (E/S y salidas abruptas), P16 (ninguno comparte estructuras ni funciones), P42 (imperativos = lenguajes de Von Neumann).
3. Resumen de Notion Semana 6 Clase 1 provisto en el encargo (sin acceso directo; se cita como `[Notion]`).
4. Imágenes `docs/assets/Introduccion_paradigma_funcional/img1.png, img2.png, img3.png, img4.png, img6.png` («Problemas de programación imperativa, caso por caso»), citadas como `[image imgN]` según el contenido provisto en el encargo.
