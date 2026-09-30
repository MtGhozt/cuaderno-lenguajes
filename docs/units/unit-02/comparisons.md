# Unidad 2 — Comparaciones

## 1. COBOL vs Pascal vs C (según el cuaderno)

Fuente: [cuaderno p3]. Cifras con [POR-VERIFICAR].

| Aspecto | COBOL | Pascal | C |
|---|---|---|---|
| Palabras reservadas | 90 y pico [POR-VERIFICAR cifra] | 14 [POR-VERIFICAR cifra] | 14 [POR-VERIFICAR cifra] |
| Llamadas | Sin *calls*: salto al "párrafo" que lo llamó [sic] | (el apunte no detalla) | (el apunte no detalla) |
| Asignación / comparación | (el apunte no detalla) | Asignación ":" y comparación ":=" [POR-VERIFICAR: parece invertido; lo esperable es asignación `:=` y comparación `=`] | Asignación `=` y comparación `==` |
| Funciones anidadas | (el apunte no detalla) | Sí permite | No permite |
| Archivos (recuperación) | Bien (archivo e índice) | Mal | Mal |

Problemas propios (crítica del curso). Fuente: [docx P2–P16] [images img1–img4, img6] [Notion].

| Lenguaje | Problemas |
|---|---|
| COBOL | Incapaz de estructuras dinámicas [image img2]; *verbose* (demasiadas instrucciones/términos, complejo de aprender) [docx P2] [image img2]; el lenguaje no paraba de crecer y la curva de aprendizaje era cada vez más larga [image img2]; intentar mejorarlo trajo más instrucciones y lo empeoró [docx P4]; proliferación de dialectos [cuaderno p6] |
| C | Inseguro e inestable en situaciones "límite" [image img3]; pila ingenua que permite inyección de código en el *stack frame* [docx P5]; memoria liberada por el programador → errores y fugas [docx P7]; *buffers* de E/S que deben limpiarse, comportamiento inestable [docx P7]; cada E/S da 2 datos (solicitados + estado) que el programador debe gestionar [docx P9]; `if ((a=get(f)) !=0)` mezcla E/S con detección de estado [docx P11] [image img3]; sin booleanos (retornos enteros que confunden dato con error) [docx P11–P12]; operación con archivos grandes ajena al lenguaje [image img3] |
| Pascal | E/S con instrucciones del lenguaje [image img4]; muchas operaciones de E/S [docx P14]; salidas abruptas de ciclos ante situaciones especiales (excepciones) engorrosas [docx P15] [image img4] |

Común a los tres: ninguno permite compartir la notación de las estructuras de datos creadas ni sus funciones [docx P16]; la estructurada era opcional y se programaba descuidadamente [Notion].

## 2. Función vs procedimiento

Fuente: [cuaderno p5].

| | Función | Procedimiento |
|---|---|---|
| Abstrae | Una expresión constante (`<var> ← expresión`) | Un grupo de instrucciones |
| Produce | Un valor | Un efecto (ejecuta pasos) |
| Pregunta guía [Explicación pedagógica — elaboración propia] | "¿qué calcula?" | "¿qué pasos hace?" |

## 3. Coupling vs cohesión (cohesión rotulada "Binding" en el cuaderno)

Fuente: [cuaderno p4]. [POSIBLE CONFUSIÓN: el cuaderno llama "Binding" a lo que por su contenido es cohesión].

| | *Coupling* | Cohesión ("Binding" en el cuaderno) |
|---|---|---|
| Mide | Qué tan enlazados están 2 módulos | Coherencia semántica interna (una sola cosa: solo calcula o solo muestra) |
| Objetivo | Bajo | Alto |

## 4. while vs repeat (do-while)

Fuente: [cuaderno p5–p6].

| | `while <cond>` | `repeat until <cond>` / do-while |
|---|---|---|
| Cuándo se pregunta | Antes ("pregunta y después hace") [Explicación pedagógica — elaboración propia] | Después ("hace y después pregunta") [cuaderno p5] |
| Ejecuciones mínimas | Cero (puede no entrar nunca) [Explicación pedagógica — elaboración propia] | Una (el cuerpo corre al menos una vez) [Explicación pedagógica — elaboración propia] |

## 5. Diagramas de flujo vs diagramas estructurados (Nassi-Shneiderman)

Fuente: [cuaderno p6].

| | Diagramas de flujo | Diagramas estructurados (Nassi-Shneiderman) |
|---|---|---|
| Postura del curso | "No usarlas" [cuaderno p6] | Los que se usan [cuaderno p6] |
| Bloques | (no se estudian) | Secuencial, condicional F/T, switch A/B/C/D, `while <cond>`, `repeat until <cond>` [cuaderno p6] |
| Alternativa textual | — | Pseudocódigo [cuaderno p6] |
