# U3 — Ejemplos progresivos

> Orden pedido: mcm mínimo → cond → hailstone → cand/evaluación. Código de slides se conserva tal cual; sintaxis sospechosa marcada.

## Ejemplo 1 (mínimo): mcm/MCD como función

**Nivel:** mínimo — solo la idea matemática, sin lenguaje.

```text
mcm(n,m) = (n × m) / MCD(n,m)
MCD(n,m) = { si (n = qm + r, y r = 0): m; en caso contrario: MCD(m,r) }
```

- Fuente: [Transcripción u3-funcional-b, IMG1–IMG2].
- Qué muestra: `mcm` se define componiendo `MCD` (primero se evalúa MCD), con caso trivial y paso recursivo. Fuente: [Docx Introducción paradigma funcional].
- [Explicación pedagógica — elaboración propia]: trace mental con `m=5,n=3`: `MCD(5,3)→MCD(3,2)→MCD(2,1)→1`; `mcm=(5*3)/1=15`. Coherente con la salida `15` del ejemplo Haskell `print (mcm 5 3)`. Fuente del dato de salida: [Transcripción u3-funcional-a, IMG7].

### El mismo ejemplo en Scheme

```scheme
(define MCD
    (lambda (a b)
        (if (= (remainder a b) 0)
            b
            (MCD b (remainder a b)))))

(define mcm
    (lambda (m n)
        (/ (* m n) (MCD m n))))
```

- Fuente: [Transcripción u3-funcional-a, IMG3]. Verificación en intérprete: `(MCD 84 75)→3`, `(mcm 75 84)→2100`. Fuente: [Transcripción u3-funcional-a, IMG4].

### El mismo ejemplo en Haskell

```haskell
mcd :: Int -> Int -> Int
mcd a b
    | a `mod` b == 0 = b
    | otherwise      = mcd b (a `mod` b)

mcm :: Int -> Int -> Int
mcm m n = (m * n) `div` mcd n m
```

- Fuente: [Transcripción u3-funcional-a, IMG6]. Variante con `/` en IMG5: [CÓDIGO DE CLASE, por verificar]. Programa completo con `main :: IO()` / `main = print (mcm 5 3)` → `15`. Fuente: [Transcripción u3-funcional-a, IMG7].

## Ejemplo 2 (intermedio): `Cond` y las dos versiones de la condición

```text
Cond(t,a,b) = a si t = true, b otherwise
Versión 1: MCD(n,m) = { si (m|n): m; en caso contrario: MCD(m,r) }
Versión 2: MCD(n,m) = { si (n mod m = 0): m; en caso contrario: MCD(m, (n mod m)) }
```

- Fuente: [Transcripción u3-funcional-b, IMG3–IMG4, IMG20, IMG38].
- Lectura de clase: `t` = `(n mod m) = 0` (función booleana), `a` = `m`, `b` = `MCD(m, n mod m)`. Fuente: [Docx Paradigma funcional parte 2].
- [Explicación pedagógica — elaboración propia]: la Versión 2 hace explícito lo que la Versión 1 abrevia con `m|n` ("m divide a n"); ambas expresan el mismo caso base.
- Conexión Haskell: `|` y `otherwise` son el `Cond` del lenguaje (`==` compara, `=` retorna). Fuente: [Docx Paradigma funcional parte 2].

## Ejemplo 3 (intermedio-alto): `hailstone`, `hailstoneSeq` y listas

```haskell
hailstone :: Integer -> Integer
hailstone n
  | n `mod` 2 == 0 = n `div` 2
  | otherwise      = 3*n + 1

hailstoneSeq :: Integer -> [Integer]
hailstoneSeq 1 = [1]
hailstoneSeq n = n : hailstoneSeq (hailstone n)
```

- Fuente: [Transcripción u3-funcional-a, IMG10–IMG11].
- Traza corta [Explicación pedagógica — elaboración propia] (aplicando las ecuaciones tal cual): `hailstoneSeq 5 = 5 : hailstoneSeq 16 = 5:16:8:4:2:1:[]` (cada paso aplica `hailstone`: 5 impar→16, 16→8, 8→4, 4→2, 2→1, caso base `[1]`).
- Combinación con medición:

```haskell
intListLength :: [Integer] -> Integer
intListLength []     = 0
intListLength (x:xs) = 1 + intListLength xs

hailstoneLen :: Integer -> Integer
hailstoneLen n = intListLength (hailstoneSeq n) - 1
```

- Fuente: [Transcripción u3-funcional-a, IMG12–IMG13]. `(_:xs)` con variable anónima equivale cuando `x` no se usa. Fuente: [Transcripción u3-funcional-a, IMG12].
- Punto clave: generar la secuencia y medirla están entrelazados por lazy evaluation (cada elemento se genera solo cuando se usa). Fuente: [Transcripción u3-funcional-a, IMG13].
- Patrones anidados:

```haskell
sumarCadaDos :: [Integer] -> [Integer]
sumarCadaDos []           = []
sumarCadaDos (x:[])       = [x]
sumarCadaDos (x:(y:zs))   = (x + y) : sumarCadaDos zs
```

- Fuente: [Transcripción u3-funcional-a, IMG13].

## Ejemplo 4 (avanzado): `cand` y estrategias de evaluación

```text
sqr n = n * n ; llamada: sqr(m+1), m=6
cand(b1, b2) = if b1 then b2 else False ; llamada: cand((n>0),(t/n>50))
```

- Fuente: [Transcripción u3-funcional-b, IMG27, IMG31] + [Notion].

**Traza `sqr` (ambas dan 49):**

- Ansiosa: `m+1→7`, ligar `n=7`, `7*7=49`. Fuente: [Transcripción u3-funcional-b, IMG28].
- Orden-normal: ligar `n` a `m+1` sin evaluar; evaluar `(m+1)*(m+1)=(6+1)x(6+1)=49` (dos evaluaciones → menos eficiente). Fuente: [Transcripción u3-funcional-b, IMG29–IMG30].

**Traza `cand`:**

- `n=2,t=80`: ambas estrategias dan `false` (`true`/`false` evaluados). Fuente: [Transcripción u3-funcional-b, IMG32].
- `n=0,t=80`: ansiosa falla (evalúa `t/n>50` → división por cero); orden-normal retorna `false` sin evaluar el segundo argumento. Fuente: [Transcripción u3-funcional-b, IMG33].
- Lección: `sqr` es estricta en `n`; `cand` solo en el primero. Lazy = evaluar al primer requerimiento + memorizar; con Church-Rosser ≡ orden-normal; `n mod m` repetido se evalúa una vez. Fuente: [Transcripción u3-funcional-b, IMG34–IMG37, IMG44] + [Docx Paradigma funcional parte 2].

**Orden superior (cierre del ejemplo 4):** `M(v,f) = (f(a1),…,f(an))` con `v=(a1,…,an)`; en código equivale a aplicar una función a cada elemento de un vector. Fuente: [Transcripción u3-funcional-b, IMG43] + [Docx Paradigma funcional parte 2].
