# Unidad 5 — Ejemplos (scaffold)

> **Fuente:** Guía Jorge S4C1 / S4C2. No se inventa sintaxis fuera de lo citado.

## E1. Mensaje en Smalltalk

```smalltalk
3 + 4   "Envía el mensaje '+' con argumento 4 al objeto receptor 3"
(x > 0) ifTrue: [ y := 1 ] ifFalse: [ y := -1 ]
```

## E2. Taxonomía OO (fila de la tabla de paradigmas)

| Unidad | Control | Estado |
|---|---|---|
| Objeto | Mensajes / despacho dinámico | Encapsulado mutable |

## E3. Respuesta guía: Simula vs Smalltalk

- Simula: objetos conviven con modelo procedural Algol; llamadas con verificación de tipos.
- Smalltalk: pureza («todo es objeto»); ejecución enteramente por mensajes dinámicos.
