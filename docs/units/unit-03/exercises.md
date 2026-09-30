# U3 — Ejercicios (14)

> Tipos pedidos: predecir resultado, trazar evaluación, V/F con justificación, completar código, identificar errores. Cada uno trae objetivo, dificultad y solución. Código de clase se conserva; sintaxis sospechosa marcada.

## 1. Predecir resultado — MCD en Scheme [Fácil]

- **Objetivo:** aplicar la definición recursiva de `MCD` en Scheme.
- **Código (de clase):**

```scheme
(define MCD
    (lambda (a b)
        (if (= (remainder a b) 0)
            b
            (MCD b (remainder a b)))))
```

Fuente: [Transcripción u3-funcional-a, IMG3].

- **Pregunta:** predice `(MCD 84 75)` y `(MCD 78 198)` sin ejecutar.
- **Solución:** `3` y `6` respectivamente. Verificado en la sesión de intérprete de clase. Fuente: [Transcripción u3-funcional-a, IMG4].

## 2. Predecir resultado — mcm en Scheme [Fácil]

- **Objetivo:** componer `mcm` sobre `MCD`.
- **Código (de clase):** `(define mcm (lambda (m n) (/ (* m n) (MCD m n))))`. Fuente: [Transcripción u3-funcional-a, IMG3].
- **Pregunta:** predice `(mcm 75 84)` y `(mcm 198 78)`.
- **Solución:** `2100` y `2574`. Fuente: [Transcripción u3-funcional-a, IMG4].

## 3. Predecir resultado — `hailstone`/`hailstoneSeq` [Media]

- **Objetivo:** aplicar guardas y recursión con `:`.
- **Código (de clase):** ver `hailstone`/`hailstoneSeq` en `examples.md`. Fuente: [Transcripción u3-funcional-a, IMG10].
- **Pregunta:** predice `hailstone 5`, `hailstone 16` y los 3 primeros elementos de `hailstoneSeq 5`.
- **Solución:** `hailstone 5 = 3*5+1 = 16` (impar); `hailstone 16 = 8`; `hailstoneSeq 5 = 5 : 16 : 8 : …`. [Explicación pedagógica — elaboración propia] por aplicación directa de las ecuaciones.

## 4. Trazar evaluación — `sqr` ansiosa vs orden-normal [Fácil]

- **Objetivo:** trazar las dos estrategias sobre el mismo ejemplo.
- **Datos:** `sqr n = n*n`, llamada `sqr(m+1)`, `m=6`. Fuente: [Transcripción u3-funcional-b, IMG27].
- **Pregunta:** traza ambas y di el resultado y cuál es más eficiente.
- **Solución:** ansiosa: `m+1→7`, `7*7=49`; orden-normal: `(6+1)x(6+1)=49` con doble evaluación → ansiosa más eficiente aquí. Fuente: [Transcripción u3-funcional-b, IMG28–IMG30].

## 5. Trazar evaluación — `cand` con n=2 y n=0 [Media]

- **Objetivo:** mostrar que el orden cambia el comportamiento ante división por cero.
- **Datos:** `cand(b1,b2) = if b1 then b2 else False`; llamada `cand((n>0),(t/n>50))`. Fuente: [Transcripción u3-funcional-b, IMG31].
- **Pregunta:** traza (a) `n=2,t=80` y (b) `n=0,t=80` en ansiosa y orden-normal.
- **Solución:** (a) ambas dan `false`. Fuente: [Transcripción u3-funcional-b, IMG32]. (b) ansiosa falla (evalúa `t/0`); orden-normal retorna `false` sin evaluar el segundo argumento. Fuente: [Transcripción u3-funcional-b, IMG33].

## 6. V/F — "En Scheme los tipos de argumentos se declaran" [Fácil]

- **Objetivo:** recordar tipos implícitos en Scheme vs encabezado en Haskell.
- **Afirmación:** "En Scheme se declara el tipo de cada argumento, igual que en Haskell."
- **Solución:** **Falso.** En Scheme el tipo viene implícito (no se declara); el encabezado con tipos es de Haskell (`->` separa, último es retorno). Fuente: [Docx Paradigma funcional parte 2].

## 7. V/F — "Lazy ≡ orden-normal siempre" [Media]

- **Objetivo:** precisar Church-Rosser.
- **Afirmación:** "La evaluación perezosa siempre da lo mismo que la orden-normal, en cualquier lenguaje."
- **Solución:** **Falso en general, verdadero bajo Church-Rosser.** Si el lenguaje tiene la propiedad (Haskell) sí coinciden; con efectos colaterales (C, `getint`) no hay garantía. Fuente: [Transcripción u3-funcional-b, IMG35–IMG36, IMG44].

## 8. V/F — "Las listas Haskell pueden mezclar tipos" [Fácil]

- **Objetivo:** homogeneidad de listas.
- **Afirmación:** "En Haskell `[1,'a']` es válido porque las listas aceptan cualquier mezcla."
- **Solución:** **Falso.** Las listas son de un mismo tipo (característico de Haskell, no de Scheme). Fuente: [Docx Características paradigma funcional].

## 9. V/F — "Las variables funcionales son celdas reasignables" [Fácil]

- **Objetivo:** variable como constante.
- **Afirmación:** "En el paradigma funcional la variable es un espacio de memoria que se reasigna como en C."
- **Solución:** **Falso.** Es un espacio del programa que en algún momento toma un valor y se vuelve constante; no hay asignación típica. Fuente: [Docx Paradigma funcional parte 2] + [Docx Características paradigma funcional].

## 10. Completar código — guarda `mcd` en Haskell [Fácil]

- **Objetivo:** escribir la condición con `mod`/`otherwise`.
- **Plantilla:**

```haskell
mcd :: Int -> Int -> Int
mcd a b
    | ___ = b
    | otherwise = mcd b (a `mod` b)
```

- **Solución:** `a `mod` b == 0`. Fuente: [Transcripción u3-funcional-a, IMG6].

## 11. Completar código — caso base con pattern matching [Media]

- **Objetivo:** distinguir cabeza/cola y variable anónima.
- **Plantilla:**

```haskell
intListLength :: [Integer] -> Integer
intListLength []     = 0
intListLength (_:xs) = ___
```

- **Solución:** `1 + intListLength xs`. `_:xs` = cabeza ignorada + cola `xs`. Fuente: [Transcripción u3-funcional-a, IMG12] + [Docx Características paradigma funcional].

## 12. Completar código — `hailstoneSeq` [Media]

- **Objetivo:** recursión con `:` y caso de detención en 1.
- **Plantilla:**

```haskell
hailstoneSeq :: Integer -> [Integer]
hailstoneSeq 1 = [1]
hailstoneSeq n = ___
```

- **Solución:** `n : hailstoneSeq (hailstone n)`. La secuencia es `n` seguido de sucesivas aplicaciones de `hailstone`. Fuente: [Transcripción u3-funcional-a, IMG10].

## 13. Identificar errores — `mcm` con `/` sobre `Int` [Media]

- **Objetivo:** detectar inconsistencia de operador/división entera.
- **Código (de clase, sospechoso):**

```haskell
mcm :: Int -> Int -> Int
mcm m n = (m * n) / mcd n m   -- [CÓDIGO DE CLASE, por verificar]
```

Fuente: [Transcripción u3-funcional-a, IMG5].

- **Pregunta:** ¿qué es sospechoso respecto a la versión canónica de clase?
- **Solución:** la versión sin selección de Word usa `` `div` ``: `mcm m n = (m * n) `div` mcd n m`. Con `Int` lo consistente es división entera `` `div` ``, no `/`. Fuente: [Transcripción u3-funcional-a, IMG6]. [POR-VERIFICAR: confirmar con el docente cuál operador exige en examen].

## 14. Identificar errores — fragmentos Scheme de pizarra [Difícil]

- **Objetivo:** distinguir pseudocódigo de clase de Scheme válido.
- **Código (de clase, sospechoso):**

```scheme
(car 5 2 10) -> 5            ; [CÓDIGO DE CLASE, por verificar]
(cdr 5 2 10) -> (2 10)       ; [CÓDIGO DE CLASE, por verificar]
(define (f a b c)())         ; [CÓDIGO DE CLASE, por verificar]
```

Fuente: [Transcripción u3-funcional-b, IMG10–IMG11].

- **Pregunta:** señala 3 problemas.
- **Solución:**
  1. `car`/`cdr` operan sobre una lista, pero `5 2 10` aparece sin `quote`/lista explícita; según clase la constante sería `(' 5 2 10)` o `(quote …)`. Fuente: [Docx Paradigma funcional parte 2] + [Transcripción u3-funcional-b, IMG10].
  2. `(define (f a b c)())` está incompleto (fragmento en edición, cuerpo vacío). Fuente: [Transcripción u3-funcional-b, IMG11].
  3. `(cdr /kudr/)` es artefacto de cursor, ilegible. [POR-VERIFICAR]. Fuente: [Transcripción u3-funcional-b, IMG11].

**Conteo de ejercicios:** 14. Por tipo: predecir resultado n.º 1–3 (3); trazar evaluación n.º 4–5 (2); V/F con justificación n.º 6–9 (4); completar código n.º 10–12 (3); identificar errores n.º 13–14 (2). Por dificultad: Fácil n.º 1, 2, 4, 6, 8, 9, 10 (7); Media n.º 3, 5, 7, 11, 12, 13 (6); Difícil n.º 14 (1). [Explicación pedagógica — elaboración propia] para el conteo.
