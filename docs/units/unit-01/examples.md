# Unidad 1 — Ejemplos progresivos

> Los ejemplos 1–3 vienen de las fuentes. Los ejemplos 4–5 (Goldbach/Gödel, √x) fueron pedidos en el encargo y se marcan como elaboración pedagógica propia.

## Ejemplo 1 — Dangling else (no-ambigüedad sintáctica)

**Fuente.** Listado Pascal transcripto del slide [transcripción u1-fundamentos IMG14]; la ambigüedad descrita como "a cuál `if` le pertenece ese `else`" [docx Características Generales P17] [transcripción u1-fundamentos IMG13].

```pascal
Program DanglingElse;
uses Crt;
var A : Integer;
Begin
  A := 5;
  If A < 2 then
    If A > 10
      A := A + 10;
  else
    A := A + 20;
  Writeln(A);
End.
```

**Lectura paso a paso** [Explicación pedagógica — elaboración propia].

1. `A` vale 5, así que `A < 2` es falso: el primer `then` no se ejecuta.
2. Pregunta: ¿a qué `if` pertenece el `else`? Lectura A (al externo): al ser falso el primero, se ejecuta `A := A + 20` → `A` = 25. Lectura B (al interno): el `else` cuelga del segundo `if`, que nunca se evalúa porque el primero fue falso → `A` queda en 5.
3. La salida impresa cambia según la lectura (25 vs 5): el programa es formalmente ambiguo [transcripción u1-fundamentos IMG13].

**Remedio documentado.** Reglas metalingüísticas externas al léxico (p. ej., "el `else` pertenece al `if` más cercano") [docx Características Generales P15].

## Ejemplo 2 — `r = m*i + s` (doble ambigüedad: orden y conversión)

**Fuente.** `r = m * i + s;` con `r, m, s` flotantes e `i` entera [transcripción u1-fundamentos IMG13]; doble ambigüedad documentada en el `.docx` [docx Características Generales P15].

```c
r = m * i + s; /* r, m, s son variables de punto flotante, i es entera */
```

**Lectura paso a paso** [Explicación pedagógica — elaboración propia, sobre la base de la fuente].

1. Ambigüedad 1 (orden): ¿`(m*i)+s` o `m*(i+s)`? "Hacer primero la suma o la multiplicación" [docx Características Generales P15]. Con valores, p. ej. `m=2.0, i=3, s=1.0`: la primera lectura da 7.0; la segunda, 8.0.
2. Ambigüedad 2 (conversión): ¿se convierte `i` de entero a flotante, o `m` de flotante a entero? [docx Características Generales P15]. La decisión altera precisión y resultado.
3. Remedio: reglas metalingüísticas (precedencia de operadores, reglas de promoción de tipos) "que no están en el léxico, sino que son extra" [docx Características Generales P15].

## Ejemplo 3 — La asignación en sintaxis, semántica y pragmática

**Fuente.** Ejemplo completo del slide [transcripción u1-fundamentos IMG8 de características lingüísticas].

- **Sintaxis.** "Una instrucción de asignación podría consistir en una variable y una expresión, que a su vez son constructos sintácticos, separados por el token '=' funcionando como operador de asignación." [transcripción u1-fundamentos IMG8 de características lingüísticas].
- **Semántica.** "La variable denota un lugar en la memoria principal, mientras que la expresión denota el cálculo de un valor utilizando otros contenidos de memoria. Y por encima de todo, la semántica de la asignación es ejecutar la evaluación de la expresión usando el contenido actual de la memoria, para luego actualizar el valor obtenido en el lugar de la memoria correspondiente a la variable." [transcripción u1-fundamentos IMG8 de características lingüísticas].
- **Pragmática (4 usos).** "Actualizar una variable temporal al valor de una expresión que es usada muchas veces (y de esa manera se mejora la eficiencia al hacer el cálculo una sola vez); comunicar valores de una parte del programa a otra (paso de parámetros o mensajes); modificar parte de una estructura de datos; actualizar un valor acumulativo de una variable usada en algún cálculo iterativo." [transcripción u1-fundamentos IMG8 de características lingüísticas] [Notion: 4 usos de la asignación].

**Mini-ilustraciones** [Explicación pedagógica — elaboración propia, instanciando los 4 usos de la fuente]:

```pseudocode
t := costo * cantidad      // (1) temporal: se calcula una vez y se reutiliza
enviar(mensaje, t)         // (2) comunica un valor a otra parte del programa
empleado.salario := t      // (3) modifica parte de una estructura (producto cartesiano, cf. cuaderno p2)
total := total + t         // (4) acumulador en un cálculo iterativo
```

## Ejemplo 4 — Límites de lo computable: Goldbach y Gödel [Explicación pedagógica — elaboración propia]

> Pedidos en el encargo como ejemplos progresivos. No provienen de las transcripciones ni del `.docx`; los enunciados se marcan [POR-VERIFICAR] en la formulación exacta usada en clase.

**Idea.** La tesis de Church dice qué es computable [cuaderno p2], pero hay preguntas sobre las que no se sabe (o no se puede) decidir algorítmicamente [Explicación pedagógica — elaboración propia] [POR-VERIFICAR: alcance exacto según clase].

- **Conjetura de Goldbach** [POR-VERIFICAR: enunciado exacto]: todo entero par mayor que 2 sería suma de dos primos. Es fácil *verificar* casos (programa que comprueba pares uno por uno), pero no se conoce algoritmo que *decida* la conjetura en tiempo finito para todos los casos [Explicación pedagógica — elaboración propia] [POR-VERIFICAR].
- **Teoremas de Gödel** [POR-VERIFICAR: enunciado exacto]: en sistemas formales suficientemente expresivos hay verdades no demostrables dentro del sistema. Conexión con el curso: ningún lenguaje, aun siendo Turing-completo [transcripción u1-fundamentos IMG6, IMG10], escapa a que existan límites de decidibilidad [Explicación pedagógica — elaboración propia] [POR-VERIFICAR].

## Ejemplo 5 — Función parcialmente computable: √x y E = {0, 1, 4, 9, …} [Explicación pedagógica — elaboración propia]

> Pedidos en el encargo. Ilustran "proceso efectivo → función computable / algoritmo → equivalentes" [cuaderno p2] sin inventar definiciones del curso.

- **√x como función parcial.** Sobre los reales no negativos tiene valor; sobre los negativos (en reales) no está definida: el "programa" que la calcula solo termina/devuelve valor para parte del dominio [Explicación pedagógica — elaboración propia].
- **E = {0, 1, 4, 9, …} (cuadrados perfectos).** Un programa puede enumerar E indefinidamente (0, 1, 4, 9, …) — es *enumerable*; y dada una entrada `n`, otro programa puede decidir si `n ∈ E` buscando su raíz entera [Explicación pedagógica — elaboración propia]. Esto muestra la diferencia entre *enumerar* un conjunto y *decidir* pertenencia, útil antes de estudiar paradigmas funcional y lógico [cuaderno p1] [Explicación pedagógica — elaboración propia].
