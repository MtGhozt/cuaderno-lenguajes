# Unidad 5 — Conceptos (OO) · scaffold

> **Fuente primaria de clase:** [VACÍO: pendiente transcripciones Exam 2].
> **Fuente secundaria usada:** `Guía Jorge/Semana_4_Clase_1.md`, `Semana_4_Clase_2.md`.

## C1. Unidad básica: objeto + mensaje

> **Fuente:** Guía Jorge S4C1 (taxonomía + Smalltalk).

- Paradigma OO: abstracción = **objeto** (estado + comportamiento); control = **paso de mensajes** / despacho dinámico.
- Estado: encapsulado mutable, manipulable vía interfaz pública (contraste con imperativo de celdas globales).
- Fundamento teórico citado en la guía: ADT + actores.

## C2. Simula 67 — nacimiento formal de OO

> **Fuente:** Guía Jorge S4C1 §3.5.

- Clases como plantillas; objetos como instancias en el heap.
- Subclases y herencia; métodos virtuales / polimorfismo dinámico.
- Corrutinas (`detach` / `resume`) como precursoras de generadores.
- Origen: simulación de eventos discretos (Dahl & Nygaard).

## C3. Smalltalk — pureza ontológica

> **Fuente:** Guía Jorge S4C1 §3.6.

- «Todo es un objeto» (enteros, bloques, clases).
- Comunicación estricta por mensajes; `3 + 4` = mensaje `+` al receptor `3`.
- Bifurcaciones/ciclos como mensajes a booleanos (`ifTrue:` / `ifFalse:`).

## C4. Self — prototipos

> **Fuente:** Guía Jorge S4C2 §1.3.

- Sin dicotomía clase/instancia: todo objeto es concreto.
- **Slots** nombre-valor (datos o métodos).
- **Delegación** al parent si falta un slot.

## C5. Eiffel — Diseño por Contrato

> **Fuente:** Guía Jorge S4C2 §1.4.

- `require` (precondiciones), `ensure` (poscondiciones), `invariant` (invariantes de clase).
- **CQS:** un método es comando (muta) o consulta (retorna sin mutar), no ambos.

## C6. Java — clases, interfaces, JVM

> **Fuente:** Guía Jorge S4C2 §1.6.

- JVM + bytecode; sin aritmética de punteros; GC.
- Herencia de implementación simple; **interfaces** múltiples (evita diamante).
- Contraste con typeclasses Haskell: subtipado/herencia vs contratos ad-hoc desacoplados.

## C7. CLOS — multimétodos

> **Fuente:** Guía Jorge S4C2 §1.2.

- Despacho múltiple: el método depende de los tipos de **todos** los argumentos, no solo del receptor.
- MOP: redefinir el modelo de objetos desde el propio lenguaje.

## C8. Pendientes de clase [VACÍO]

- Detalle de variables de instancia vs clase; colecciones; bloques en cascada; estudio analítico profundo de Java según el programa 5.4, 5.7, 5.9–5.10.
