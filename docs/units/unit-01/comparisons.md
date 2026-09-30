# Unidad 1 — Comparaciones

## 1. Sintaxis vs semántica vs pragmática

**Fuentes.** Marco general [transcripción u1-fundamentos IMG3 de características lingüísticas]; sintaxis [transcripción u1-fundamentos IMG4 de características lingüísticas]; semántica [transcripción u1-fundamentos IMG5 de características lingüísticas]; pragmática [transcripción u1-fundamentos IMG6–IMG7 de características lingüísticas]; ejemplo de la asignación [transcripción u1-fundamentos IMG8 de características lingüísticas].

| Dimensión | Pregunta que responde | Definición de la fuente | Ejemplo (asignación) |
|---|---|---|---|
| Sintaxis | ¿Está bien formado? | "Reglas para formar expresiones válidas… declarar variables, construir estructuras de control (`if`, `while`, etc.), declarar módulos" [transcripción u1-fundamentos IMG4 de características lingüísticas]; gramática = "reglas de sustitución libres de contexto" | variable + expresión separadas por el token `=` como operador de asignación [transcripción u1-fundamentos IMG8 de características lingüísticas] |
| Semántica | ¿Qué hace al ejecutarse? | "Cómo se espera que los programas se comporten una vez que se ejecuten en una computadora" [transcripción u1-fundamentos IMG5 de características lingüísticas]; "en cierta forma… la semántica de un programa es su ejecutable" | La variable denota memoria, la expresión denota un cálculo; ejecutar = evaluar con la memoria actual y actualizar la variable [transcripción u1-fundamentos IMG8 de características lingüísticas] |
| Pragmática | ¿Para qué se usa en la práctica? | "Aspectos prácticos de cómo los constructos… pueden ser usados para lograr varios objetivos" [transcripción u1-fundamentos IMG6 de características lingüísticas]; se comunica con nombres significativos y comentarios [transcripción u1-fundamentos IMG7 de características lingüísticas] | 4 usos: temporal eficiente, comunicar valores, modificar estructuras, acumulador iterativo [transcripción u1-fundamentos IMG8 de características lingüísticas] |

**Claves para no confundirlas** [Explicación pedagógica — elaboración propia, sobre las fuentes]:

- El compilador verifica la sintaxis; el ejecutable *es* (en cierto sentido) la semántica: "el compilador revisa la sintaxis y genera la semántica" [docx Características lingüísticas P9].
- La pragmática "no es obvia": hay que comunicarla con nombres y documentación interna [transcripción u1-fundamentos IMG7 de características lingüísticas].

## 2. Abstracción vs encapsulación

> **[POR-VERIFICAR]**: esta distinción no está definida en las transcripciones, el cuaderno ni los `.docx` de U1. Se incluye porque fue pedida en el encargo; todo lo siguiente es [Explicación pedagógica — elaboración propia] y debe contrastarse con la formulación de clase.

| | Abstracción | Encapsulación |
|---|---|---|
| Idea [Explicación pedagógica — elaboración propia] | Quedarse con lo esencial y ocultar el detalle | Empaquetar datos + operaciones y controlar el acceso |
| Pregunta [Explicación pedagógica — elaboración propia] | *¿Qué* hace? | *¿Quién* puede tocarlo y *cómo*? |
| Ejemplo [Explicación pedagógica — elaboración propia] | Usar `ordenar(lista)` sin saber el algoritmo interno | El módulo expone `depositar()` pero no el saldo crudo |

**Vínculo con la unidad.** La "separación modular" de Böhm-Jacopini [transcripción u1-fundamentos IMG2–IMG3] y la biyección diseño↔código de la depurabilidad [transcripción u1-fundamentos IMG16] presuponen piezas conceptuales bien delimitadas; la abstracción/encapsulación son las técnicas que lo hacen posible [Explicación pedagógica — elaboración propia] [POR-VERIFICAR: vínculo según clase].

## 3. Compilador vs intérprete vs máquina virtual (VM)

**Fuentes directas.**

- Compilador: "una de las labores más importantes de los compiladores es verificar que los programas cumplan con las reglas de sintaxis" [transcripción u1-fundamentos IMG4 de características lingüísticas]; "el compilador revisa la sintaxis y genera el código ejecutable en lenguaje máquina… revisa la sintaxis y genera la semántica" [docx Características lingüísticas P9].
- VM: "máquina objeto" puede ser una máquina virtual; "Java se traduce al lenguaje de la máquina virtual de Java" [docx Características Generales P12]; la portabilidad (Java) relativiza la eficiencia [transcripción u1-fundamentos IMG15].

| | Compilador | Intérprete [Explicación pedagógica — elaboración propia] [POR-VERIFICAR: el término "intérprete" como tal no aparece definido en las fuentes U1] | Máquina virtual |
|---|---|---|---|
| Qué hace | Verifica sintaxis y genera ejecutable/semántica [docx Características lingüísticas P9] | Ejecuta el programa paso a paso sin generar ejecutable previo [Explicación pedagógica — elaboración propia] | Es la "máquina objeto" destino de la traducción [docx Características Generales P12] |
| Ejemplo de la fuente | Estructuras que crea el compilador determinan la velocidad percibida [transcripción u1-fundamentos IMG15] | — (sin ejemplo en fuentes U1) | Java → lenguaje de la JVM [docx Características Generales P12] |
| Costo documentado | — | — | "Meter una máquina virtual como intérprete siempre es ineficiente pero en algunos momentos se asume porque se necesitan cosas diferentes." [docx Características Generales P19] [POR-VERIFICAR: "siempre"] |

**Lectura conjunta.** Implementabilidad exige traducción exacta a la máquina-objeto "aunque se cambie de procesador" [transcripción u1-fundamentos IMG11]; la VM es una forma de cumplirlo a cambio de eficiencia, trueque que el curso acepta por portabilidad (Java), claridad (Prolog) o versatilidad (C#) [transcripción u1-fundamentos IMG15].
