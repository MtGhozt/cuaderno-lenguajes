# Unidad 1 — Repaso (resumen esencial + errores frecuentes + autoevaluación)

## Resumen esencial

1. **Algoritmo.** Tareas sobre datos finitos (simples o compuestos), en tiempo y recursos finitos [transcripción u1-fundamentos IMG1]; equivale a proceso efectivo / función computable [cuaderno p2].
2. **Church.** Toda función computable es Turing-computable; las formas de computabilidad son equivalentes [cuaderno p2].
3. **Böhm-Jacopini.** Todo algoritmo se construye con ejecución secuencial, iteración, ejecución condicional y separación modular [transcripción u1-fundamentos IMG2–IMG3].
4. **Siete características.** Universal, implementable, natural, no ambiguo, eficiente, depurable, seguro [transcripción u1-fundamentos IMG9]: universal = Turing-completo (recursión o pilas) [transcripción u1-fundamentos IMG10]; implementable = traducción exacta a la máquina-objeto aunque cambie el procesador [transcripción u1-fundamentos IMG11] (la máquina-objeto puede ser una VM, ej. Java) [docx Características Generales P12]; natural = pensar en los términos del dominio sin perder universalidad [transcripción u1-fundamentos IMG12].
5. **No-ambigüedad.** Ambigüedades formales conocidas vía compiladores: *dangling else* y `r=m*i+s` (orden + conversión); se resuelven con reglas metalingüísticas [transcripción u1-fundamentos IMG13–IMG14] [docx Características Generales P15, P17].
6. **Eficiencia relativizable** (portabilidad-Java, claridad-Prolog, versatilidad-C#) [transcripción u1-fundamentos IMG15]; la VM como intérprete se asume cuando se necesita otra cosa [docx Características Generales P19].
7. **Depurabilidad** = biyección diseño↔implementación↔depuración para localizar rápido cada pieza conceptual [transcripción u1-fundamentos IMG16]; importa porque el software vive décadas y hay que corregirlo, extenderlo y migrarlo ASAP [transcripción u1-fundamentos IMG7].
8. **Seguridad (opcional en el diseño).** Privacidad, disponibilidad, integridad [transcripción u1-fundamentos IMG17] [docx Características Generales P22–P24]; mecanismos ejemplo: excepciones Java, criptografía, Bell-LaPadula/Biba [transcripción u1-fundamentos IMG17]; el ciclo real debe incluir seguridad [docx Características lingüísticas P4].
9. **Sintaxis / semántica / pragmática.** Sintaxis = reglas de buena formación (gramática libre de contexto; el compilador la verifica) [transcripción u1-fundamentos IMG4 de características lingüísticas]; semántica = comportamiento esperado al ejecutar ("en cierta forma… su ejecutable") [transcripción u1-fundamentos IMG5 de características lingüísticas]; pragmática = uso práctico (nombres, comentarios; 4 usos de la asignación) [transcripción u1-fundamentos IMG6–IMG8 de características lingüísticas].
10. **Wirth.** "Algorithms + Data Structures = Programs"; datos simples (hardware: comp-2, IEEE 754; basados en enteros) y compuestos (producto cartesiano, array, listas recursivas, árbol, unión, file) [cuaderno p2].
11. **Paradigmas.** Formas de ver los algoritmos; cada uno da herramientas mentales distintas y exige pensar diferente; conviene el afín al dominio [transcripción u1-fundamentos IMG4, IMG6] [cuaderno p1].

## Errores frecuentes

| Error | Corrección (con Fuente) |
|---|---|
| Creer que "algoritmo" es solo "programa" | Es la entidad abstracta; el lenguaje la representa [cuaderno p2]; el paradigma es la forma de verla [transcripción u1-fundamentos IMG4] |
| Decir que todos los lenguajes sirven igual para todo | Todo se puede hacer en cualquiera, pero lo afín al dominio facilita desarrollar y corregir [transcripción u1-fundamentos IMG6] |
| Confundir máquina-objeto con procesador físico | Puede ser una VM (Java→JVM) [docx Características Generales P12] |
| Resolver `r=m*i+s` "por intuición" | Tiene doble ambigüedad (orden + conversión); exige reglas metalingüísticas [docx Características Generales P15] |
| Atribuir el `else` "al que parece" | Es ambiguo formalmente; requiere regla (p. ej., `if` más cercano) [docx Características Generales P15, P17] |
| Pedir eficiencia absoluta siempre | Es relativizable: portabilidad, claridad, versatilidad [transcripción u1-fundamentos IMG15] |
| Confundir semántica con pragmática | Semántica = qué hace al ejecutar; pragmática = para qué se usa [transcripción u1-fundamentos IMG5–IMG6 de características lingüísticas] |
| Creer que la seguridad es obligatoria en todo lenguaje | Es "decisión opcional de los diseñadores" [transcripción u1-fundamentos IMG17] |

## Autoevaluación (8 preguntas con respuestas)

1. **Dé la definición de algoritmo y sus tres finitudes.** Resp.: conjunto de tareas sobre datos finitos, en tiempo finito con recursos finitos [transcripción u1-fundamentos IMG1].
2. **Enuncie la tesis de Church.** Resp.: toda función computable es Turing-computable; equivalencia de formas de computabilidad [cuaderno p2].
3. **Liste las 4 estructuras de Böhm-Jacopini.** Resp.: secuencial, iteración, condicional, separación modular [transcripción u1-fundamentos IMG2–IMG3].
4. **¿Cómo se comprueba informalmente la universalidad?** Resp.: si permite recursión o definir/manejar pilas [transcripción u1-fundamentos IMG10].
5. **Explique las dos ambigüedades de `r=m*i+s`.** Resp.: orden (suma vs multiplicación) y conversión (`i`→flotante o `m`→entero); reglas metalingüísticas [docx Características Generales P15].
6. **Dé los 4 usos pragmáticos de la asignación.** Resp.: temporal eficiente, comunicar valores, modificar estructuras, acumulador iterativo [transcripción u1-fundamentos IMG8 de características lingüísticas].
7. **Defina depurabilidad.** Resp.: biyección diseño–implementación–depuración para hallar rápido cada pieza conceptual [transcripción u1-fundamentos IMG16].
8. **Nombre las 3 calidades de seguridad y diga si son obligatorias en el lenguaje.** Resp.: privacidad, disponibilidad, integridad [transcripción u1-fundamentos IMG17] [docx Características Generales P22–P24]; incorporarlas es opcional [transcripción u1-fundamentos IMG17].
