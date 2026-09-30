# Unidad 1 — Ejercicios (12)

> Cada ejercicio trae **objetivo**, **dificultad** (Básica / Intermedia / Avanzada) y **solución explicada** con Fuente. Mezcla de formatos según lo pedido.

## E1 — Selección única: definición de algoritmo

**Objetivo.** Verificar la definición formal de algoritmo. **Dificultad.** Básica.

¿Cuál opción reproduce la definición del curso?

a) Un conjunto de tareas sobre datos finitos, procesadas en tiempo finito con recursos finitos.
b) Cualquier programa escrito en un lenguaje Turing-completo.
c) Un conjunto de reglas metalingüísticas para resolver ambigüedades.
d) La suma de algoritmos y estructuras de datos.

**Solución.** **a)**. Es la transcripción literal: "conjunto de tareas… sobre un grupo finito de datos (simples o compuestos)… en un tiempo finito usando recursos finitos." [transcripción u1-fundamentos IMG1]. b) confunde algoritmo con universalidad [transcripción u1-fundamentos IMG10]; c) es el remedio contra ambigüedad [docx Características Generales P15]; d) deforma la cita de Wirth ("Algorithms + Data Structures = Programs") [cuaderno p2].

## E2 — Selección única: estructuras de Böhm-Jacopini

**Objetivo.** Memorizar las cuatro estructuras. **Dificultad.** Básica.

¿Con qué cuatro estructuras puede construirse cualquier algoritmo según Böhm y Jacopini?

a) Recursión, herencia, polimorfismo, encapsulación.
b) Ejecución secuencial, iteración, ejecución condicional, separación modular.
c) Sintaxis, semántica, pragmática, fonología.
d) Privacidad, disponibilidad, integridad, autenticación.

**Solución.** **b)** [transcripción u1-fundamentos IMG2–IMG3]. a) mezcla conceptos de objetos no dados en U1 [POR-VERIFICAR: fuera de fuentes U1]; c) son niveles lingüísticos [transcripción u1-fundamentos IMG18]; d) son las calidades de seguridad [transcripción u1-fundamentos IMG17].

## E3 — V/F con justificación: tesis de Church

**Objetivo.** Comprender la equivalencia de modelos de computabilidad. **Dificultad.** Básica.

"Según la tesis de Church vista en clase, toda función computable es Turing-computable y todas las formas de computabilidad son equivalentes." (V/F + justificación en 2 líneas.)

**Solución.** **Verdadero.** Es el apunte literal [cuaderno p2]: proceso efectivo → función computable / algoritmo → equivalentes, y la tesis enuncia exactamente eso.

## E4 — V/F con justificación: eficiencia de la VM

**Objetivo.** Matizar afirmaciones absolutas ("siempre"). **Dificultad.** Intermedia.

"Usar una máquina virtual como intérprete siempre es ineficiente, por lo que nunca debe usarse." (V/F + justificación.)

**Solución.** **Falso.** La primera mitad está en la fuente [docx Características Generales P19] [POR-VERIFICAR: "siempre" es absoluto], pero la conclusión "nunca debe usarse" la contradice la propia fuente: "en algunos momentos se asume porque se necesitan cosas diferentes" (p. ej., portabilidad de Java) [docx Características Generales P19] [transcripción u1-fundamentos IMG15].

## E5 — Completar: siete características

**Objetivo.** Enumerar las características deseables. **Dificultad.** Básica.

Complete: "Deben ser: ________, ________, naturales, ________, eficientes, ________ y ________."

**Solución.** "Universales, implementables, naturales, no ambiguos, eficientes, depurables y seguros." [transcripción u1-fundamentos IMG9].

## E6 — Completar: tipos de datos de Wirth

**Objetivo.** Clasificar datos simples y compuestos. **Dificultad.** Básica.

Complete con la clasificación del cuaderno: "Datos → Valor: ________ / ________. Simples: dados por el ________ (enteros comp-2, flotantes IEEE 754); basados en enteros (________, caracteres, tipos enumerados, BCD, direcciones). Compuestos: ________ (C1 × … × Cn), array, ________ (tipos recursivos), árbol, unión, file."

**Solución.** "Simples / compuestos. …dados por el hardware… (booleano… ). Compuestos: producto cartesiano…, listas…" [cuaderno p2].

## E7 — Respuesta corta: universalidad

**Objetivo.** Explicar universalidad y su comprobación informal. **Dificultad.** Intermedia.

Defina universalidad en máximo 3 líneas e indique su comprobación informal.

**Solución.** "El lenguaje debe poder implementar cualquier algoritmo que se le ocurra a un programador; es otra forma de decir Turing-completo." [transcripción u1-fundamentos IMG10]. Comprobación informal: permite recursión o al menos definir y manejar pilas (*stacks*) [transcripción u1-fundamentos IMG10].

## E8 — Respuesta corta: implementabilidad con VM

**Objetivo.** Aplicar implementabilidad al caso Java/VM. **Dificultad.** Intermedia.

Explique por qué Java ilustra la implementabilidad aunque no genere código del procesador.

**Solución.** Implementabilidad exige traducir cada instrucción "a un conjunto de instrucciones máquina de la máquina-objeto, de manera exacta… aunque se cambie de procesador" [transcripción u1-fundamentos IMG11]; la máquina-objeto "no necesariamente" es el procesador: "puede ser una máquina virtual… Java se traduce al lenguaje de la máquina virtual de Java" [docx Características Generales P12].

## E9 — Identificar errores: dangling else

**Objetivo.** Detectar la ambigüedad del `else` colgante. **Dificultad.** Intermedia.

Dado el programa Pascal de `examples.md` (A=5; `If A<2 then If A>10 … else A:=A+20`), indique (a) dónde está la ambigüedad y (b) los dos resultados posibles.

**Solución.** (a) "A cuál `if` le pertenece ese `else`" [docx Características Generales P17] [transcripción u1-fundamentos IMG13–IMG14]. (b) Si cuelga del externo: A=25; si cuelga del interno (nunca evaluado porque el primero fue falso): A=5. Cálculos en `examples.md` [Explicación pedagógica — elaboración propia sobre la fuente].

## E10 — Identificar errores: `r = m*i + s`

**Objetivo.** Detectar la doble ambigüedad de orden y conversión. **Dificultad.** Intermedia.

En `r = m*i + s;` (`r,m,s` flotantes, `i` entera), señale las dos ambigüedades y el remedio documentado.

**Solución.** (1) Orden: "hacer primero la suma o la multiplicación"; (2) conversión: "transformar la `i` de entero a flotante o la `m` de flotante a entero" [docx Características Generales P15] [transcripción u1-fundamentos IMG13]. Remedio: "reglas metalingüísticas… que no están en el léxico, sino que son extra" [docx Características Generales P15].

## E11 — Respuesta corta: los 4 usos pragmáticos de la asignación

**Objetivo.** Distinguir pragmática de sintaxis/semántica. **Dificultad.** Intermedia.

Enumere los cuatro usos pragmáticos de la asignación y explique en una línea por qué pertenecen a la pragmática y no a la semántica.

**Solución.** (1) Temporal para eficiencia; (2) comunicar valores (parámetros/mensajes); (3) modificar una estructura; (4) acumulador iterativo [transcripción u1-fundamentos IMG8 de características lingüísticas]. Son pragmática porque describen "cómo los constructos… pueden ser usados para lograr varios objetivos" [transcripción u1-fundamentos IMG6 de características lingüísticas], mientras la semántica describe el comportamiento al ejecutar (evaluar y actualizar memoria) [transcripción u1-fundamentos IMG8 de características lingüísticas].

## E12 — Avanzado: seguridad CIA + Böhm-Jacopini integrados

**Objetivo.** Integrar seguridad y estructuras en un mini-diseño. **Dificultad.** Avanzada.

Proponga (máx. 10 líneas de pseudocódigo) un módulo `registrar_nota` que use las 4 estructuras de Böhm-Jacopini y proteja privacidad, disponibilidad e integridad. Etiquete cada estructura y cada propiedad CIA.

**Solución (modelo).**

```pseudocode
modulo registrar_nota(nota, usuario):        // separación modular [transcripción u1-fundamentos IMG2]
  si no autorizado(usuario): retornar ERROR  // condicional + privacidad [transcripción u1-fundamentos IMG17] [docx Características Generales P22]
  reintentos := 0                            // secuencial: inicialización
  mientras no guardado y reintentos < 3:     // iteración: reintento por disponibilidad [docx Características Generales P23]
    guardado := escribir_con_hash(nota)      // secuencial + integridad (hash) [docx Características Generales P24]
    reintentos := reintentos + 1             // secuencial: actualización
```

Justificación: las 4 estructuras cubren cualquier algoritmo [transcripción u1-fundamentos IMG2–IMG3]; la seguridad en el lenguaje es opcional pero bienvenida (excepciones, criptografía, Bell-LaPadula/Biba) [transcripción u1-fundamentos IMG17] [POR-VERIFICAR: grafía "Bell-La Padulla" del slide]. El docente debe aceptar variantes que etiqueten correctamente las 4 estructuras y las 3 propiedades [Explicación pedagógica — elaboración propia].
