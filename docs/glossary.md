# Glosario

| Término | Definición breve | Unidad |
|---|---|---|
| Algoritmo | Conjunto finito de tareas sobre datos finitos, en tiempo finito, con recursos finitos | U1 |
| Procedimiento efectivo | Proceso computable por medios finitos y definidos | U1 |
| Tesis de Church-Turing | Toda función computable es Turing-computable; las formas de computabilidad son equivalentes | U1 |
| Böhm-Jacopini | Todo algoritmo se construye con ejecución secuencial, iteración, condicional y separación modular | U1 |
| Universalidad | El lenguaje implementa cualquier algoritmo (Turing completo) | U1 |
| Implementabilidad | Cada instrucción se traduce exactamente a la máquina-objeto | U1 |
| Naturalidad | El lenguaje facilita pensar en su dominio sin perder universalidad | U1 |
| Dangling else | Ambigüedad: a qué `if` pertenece un `else` | U1 |
| Sintaxis / Semántica / Pragmática | Forma / comportamiento al ejecutar / uso en la práctica | U1 |
| Binding (asociación) | Asociación nombre → valor/tipo/ubicación y su momento | U1 |
| Wirth | "Algorithms + Data Structures = Programs" | U1 |
| Función parcialmente computable | Definida exactamente solo para parte de su dominio (ej. √x) | U1 |
| Cálculo lambda | Modelo de Church: funciones, aplicación y abstracción | U3 |
| Notación prefija | `(f a1 … an)`, ej. `(+ a (* b c))` | U3 |
| Primera clase | Las funciones son valores: se pasan y retornan | U3 |
| Polimorfismo paramétrico | Una función no restringe a priori el tipo de sus argumentos | U3 |
| Evaluación ansiosa | Se evalúa el argumento una vez en la llamada | U3 |
| Orden-normal | Se evalúa solo cuando se requiere (puede repetirse) | U3 |
| Evaluación perezosa | Orden-normal + memoización del primer cómputo | U3 |
| Estrictez | La función siempre usa ese argumento | U3 |
| Church-Rosser | Si hay resultado, todos los órdenes lo alcanzan (sin efectos laterales) | U3 |
| Pattern matching | Despacho por forma del dato en Haskell | U3 |
| CP1 / FBF | Cálculo de predicados de primer orden / fórmulas bien formadas | U4 |
| Unificación | Hacer encajar dos términos ligando variables | U4 |
| Backtracking | Retroceder y probar otra rama al fallar | U4 |
| Corte (`!`) / `fail` | Poda de búsqueda / fallo explícito en Prolog [VACÍO] | U4 |
| Resolución | Única regla del cálculo de cláusulas (con unificación) | U4 |
| Ejecución imperativa | Las tareas son órdenes que se ejecutan una por una | U2 |
| Life span | Tiempo de vida ligado al módulo: locales (pila), globales (data segment), dinámicas (heap/GC) | U2 |
| Programación estructurada | Un main como módulo columna al que todos convergen | U2 |
| Record / struct / nivel 01 | Producto cartesiano en Pascal / C / COBOL | U2 |
| perform | Repetición `for` en COBOL | U2 |
| Nassi-Shneiderman | Diagramas estructurados (secuencial, condicional, repetición) | U2 |
| Función (imperativa) | Abstracción de una expresión constante (`<var> ← expresión`) | U2 |
| Procedimiento | Abstracción de un grupo de instrucciones | U2 |
| Acoplamiento (coupling) | Qué tan enlazados están dos módulos; se busca bajo [cuaderno] | U1/U2 |
| Cohesión | Coherencia semántica interna de un módulo; se busca alta [cuaderno; el apunte la rotula "Binding", ver unresolved-issues] | U1/U2 |
