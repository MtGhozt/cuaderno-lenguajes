# Unidad 2 — Ejemplos (progresivos)

> Todos los fragmentos provienen literalmente de las fuentes. Lo que sea ayuda didáctica se marca `[Explicación pedagógica — elaboración propia]`. No se inventa sintaxis.

## Ejemplo 1 — Registro Empleado en COBOL (producto cartesiano a pie)

Fuente: [cuaderno p5].

```cobol
01 Empleado
   03 Nombre    PIC X(50)
   03 Fecha-Nac
      05 Dia-Nac  PIC 9(2)
      05 Mes-Nac  PIC 9(2)
      05 Anno-Nac PIC 9(2)
```

[Explicación pedagógica — elaboración propia]: el registro "Empleado" no existe como tipo nativo; se construye a pie con niveles (01/03/05). En Pascal el constructor equivalente se llama Record y en C struct [cuaderno p5]. Nótese `Anno-Nac` [sic: así está en el apunte]. Este ejemplo muestra por qué "perdemos uniformidad": la misma idea se escribe distinto en cada lenguaje [cuaderno p5].

## Ejemplo 2 — Ejecución secuencial (`b := m`, `r := n`)

Fuente: [cuaderno p5].

```pascal
b := m;
r := n;
```

La segunda instrucción se ejecuta después de la primera, sin más [cuaderno p5]. [Explicación pedagógica — elaboración propia]: es el caso más simple de "tareas = instrucciones": dos órdenes, una tras otra.

## Ejemplo 3 — Ejecución condicional (if) y selección (case/switch)

Fuente: [cuaderno p5] (forma general) + [cuaderno p6] (diagrama condicional F/T y switch A/B/C/D).

```pascal
if <cond> [then] <then part> [else <else-part>]
```

`case / switch` elige una rama entre varias (A/B/C/D en el diagrama) [cuaderno p5–p6]. [Explicación pedagógica — elaboración propia]: el `if` decide entre dos caminos según la condición; el `case/switch` decide entre muchos.

## Ejemplo 4 — Repetición: for→perform, while, repeat/do-while

Fuente: [cuaderno p5–p6].

- `for` → `perform` en COBOL [cuaderno p5].
- `while <cond>` — diagrama repetitivo con la condición al inicio [cuaderno p6].
- `repeat until <cond>` — "hace y después pregunta" [cuaderno p5]; diagrama `repeat until <cond>` [cuaderno p6]. Equivalente citado: do-while [cuaderno p5].

[Explicación pedagógica — elaboración propia]: con `while` la condición se revisa antes de entrar (el cuerpo puede no ejecutarse nunca); con `repeat/do-while` el cuerpo se ejecuta primero y la condición se revisa después (al menos una ejecución garantizada).

## Ejemplo 5 — Función vs procedimiento (abstracciones)

Fuente: [cuaderno p5].

```text
función:      <var> ← expresión        (abstracción de una expresión constante)
procedimiento: abstracción de un grupo de instrucciones
```

[Explicación pedagógica — elaboración propia]: si lo que se resume produce un valor (una expresión), se abstrae como función; si lo que se resume es una secuencia de pasos, se abstrae como procedimiento.

## Ejemplo 6 — Recursión simple y mutua (diagramas)

Fuente: [cuaderno p5].

```text
simple:  A ──se llama──▶ A
mutua:   A ────────────▶ B
```

[Explicación pedagógica — elaboración propia]: en la simple el módulo se invoca a sí mismo; en la mutua, A invoca a B (y el ciclo se completa si B invoca a A).

## Ejemplo 7 — El caso `if ((a=get(f)) !=0) …` (efectos colaterales en C)

Fuente: [docx P9, P11–P12] [image img3].

```c
if ((a = get(f)) != 0) ...
```

En una sola línea se mezclan: lectura del dispositivo (`get(f)`), asignación (`a = …`) y detección del estado (`!= 0`) [docx P11]. Cada operación E/S brinda 2 datos — los solicitados y el estado (archivo no encontrado, EOF, vacío, etc.) — y C asume que el programador maneja ambos [docx P9]. El riesgo: la función llamada esperando datos puede retornar un valor que en realidad señala un error, generando comportamiento inesperado difícil de verificar [docx P12]. [Explicación pedagógica — elaboración propia]: por eso el curso lo presenta como ejemplo de efecto colateral — dispositivos con ciclo solicitud → espera → informe de éxito/fracaso [image img3].
