# U3 — Conceptos (Programación funcional: Scheme y Haskell)

> Regla de la unidad: Scheme y Haskell en secciones separadas. Cada bloque cita su fuente.

## 1. Fundamento: funciones, cálculo lambda y computabilidad

### 1.1 Función en matemática vs. función en programación funcional

- En matemática se define una función de A a B como subconjunto del producto cartesiano: `f = {(a,b) | a ∈ A ∧ b ∈ B ∧ Pab}`, donde P relaciona a con b. Fuente: [Transcripción u3-funcional-a, IMG10].
- Los lógicos la tomaron de otra forma: énfasis en la función como ente autónomo, es decir, en la propiedad P. Ese es el punto de vista de la programación funcional. Fuente: [Transcripción u3-funcional-a, IMG10].
- [Explicación pedagógica — elaboración propia]: en funcional importa la regla/mapeo (qué calcula), no el par conjunto-origen/conjunto-destino como contenedor.
- La función identidad `f(x) = x` ilustra el punto: en matemática su ámbito queda restringido al conjunto base, pero intuitivamente "la identidad es la misma" sin importar el dominio; el cálculo lambda recoge esa mirada. Fuente: [Transcripción u3-funcional-a, IMG12].
- Church trató las funciones de forma más "lexicográfica"/simbólica (manejo de símbolos usual en Lógica). Fuente: [Transcripción u3-funcional-a, IMG8].

### 1.2 Funciones (parcialmente) computables

- Con recursos limitados, aun la identidad solo se puede calcular exactamente para una cantidad "pequeña" de números. Fuente: [Transcripción u3-funcional-a, IMG8].
- Church aplicó la noción de función computable al problema de Hilbert (¿siempre existe un procedimiento para demostrar cualquier sentencia verdadera?). Obra: *The Calculi of Lambda Conversion*. Fuente: [Transcripción u3-funcional-a, IMG8].
- Gödel: todo sistema axiomático es incompleto (hay sentencias verdaderas no demostrables); la lista `8=5+3 … 16=13+3` del slide corresponde a sumas de dos primos (Goldbach) como ejemplo de ese contexto. [POR-VERIFICAR: la interpretación Goldbach es pedagógica, por verificar contra la clase]. Fuente: [Transcripción u3-funcional-a, IMG7].
- Church y Turing: no existe algoritmo que diga si toda sentencia es verdadera o falsa. Función parcialmente computable `f(x)=y`, ej. `f(x)=√x` con `E={0,1,4,9,16,…}`: valores sin raíz exacta solo se aproximan → computable pero no en su totalidad. Fuente: [Docx Introducción paradigma funcional].

### 1.3 Operaciones con funciones y definición de algoritmo

- Operaciones "regulares": suma, resta, producto. "Sucesivas": composición `K(x) = (h ∘ f ∘ g)(x) = h(f(g(x)))`. Operadores funcionales: derivación e integración indefinida. Recursividad. Fuente: [Transcripción u3-funcional-a, IMG13].
- Definición de clase: un algoritmo es un conjunto de funciones que se evalúan, donde el número de funciones es finito y se evalúan una cantidad finita de veces, usando una cantidad finita de recursos. Fuente: [Transcripción u3-funcional-b, IMG15].
- Conceptos fundamentales del paradigma: modelo = aplicación de funciones a argumentos; conceptos: expresiones, funciones, polimorfismo paramétrico, abstracción de datos (*), evaluación perezosa (*). Fuente: [Transcripción u3-funcional-b, IMG16].
- Expresiones: concepto clave porque su propósito es calcular nuevos valores; dependen del tipo de los argumentos. Fuente: [Transcripción u3-funcional-b, IMG17].

## 2. mcm/MCD como función + Cond y Proyección

### 2.1 mcm/MCD en notación matemática

```text
mcm(n,m) = (n × m) / MCD(n,m)
MCD(n,m) = { si (n = qm + r, y r = 0): m; en caso contrario: MCD(m,r) }
```

- Fuente: [Transcripción u3-funcional-a, IMG15] y [Transcripción u3-funcional-b, IMG1–IMG2]. [POR-VERIFICAR: en IMG15 el primer símbolo del numerador tiene trazo atípico parecido a "η"; se transcribe "n" por contexto].
- Lectura de clase (conceptos de computabilidad visibles en este ejemplo): ejecución secuencial (primero MCD), módulos (`mcm` invoca a MCD), ejecución condicional (MCD definida a trozos) y ejecución cíclica (MCD recursiva con caso trivial + paso recursivo). Fuente: [Docx Introducción paradigma funcional].
- [Explicación pedagógica — elaboración propia]: este es el ejemplo "puente": el mismo problema aparece en Pascal/C (procedimental), en Scheme y en Haskell; sirve para comparar paradigmas.

### 2.2 Proyección y Cond

```text
Proy(k, a1, a2, ..., an) = ak
Cond(t,a,b) = a si t = true, b otherwise
```

- Fuente: [Transcripción u3-funcional-b, IMG1–IMG2]. [POR-VERIFICAR: línea de Proy parcialmente cortada en IMG2].
- `Cond` es como una proyección: si `t` es 1 o 0 sería proyección legítima, pero se necesita que `t` sea booleano. Fuente: [Docx Paradigma funcional parte 2].
- Versiones de la condición de MCD vistas en clase:
  - Versión 1: `MCD(n,m) = { si (m|n): m; en caso contrario: MCD(m,r) }`.
  - Versión 2: `MCD(n,m) = { si (n mod m = 0): m; en caso contrario: MCD(m, (n mod m)) }`.
  - Fuente: [Transcripción u3-funcional-b, IMG3–IMG4].
- Desglose de clase: el `=` es función booleana (da true/false), ese `t` está dado por `n mod m`, el `=` y el `0`; `a` es `m` y `b` es `MCD(m, n mod m)`; nótese que `n mod m` se repite. Fuente: [Docx Paradigma funcional parte 2].
- Estructura típica de un programa funcional: definición de funciones + definición de `main`; `main` llama al resto y recibe el resultado. Fuente: [Transcripción u3-funcional-b, IMG5] + [Docx Paradigma funcional parte 2].

### 2.3 Contraste procedimental (solo contexto, no es el tema)

- Versión Pascal transcrita (procedimental, con `repeat…until`, `mod`, `div`); nótese identificadores con espacio "Calc mcm"/"Calc MCD" tal como se ven en la imagen. [CÓDIGO DE CLASE, por verificar]:

```text
FUNCTION Calc mcm(i,j:integer):integer;
    FUNCTION Calc MCD(n,m:integer):integer;
    VAR
        a,b,r:integer;
    BEGIN {Calc MCD}
        b :=n;
        r := m
        repeat
            a := b;
            b := r;
            r := a mod b;
        until r = 0;
        Calc mcm := b; [sic: asigna a «Calc mcm» dentro de «Calc MCD» según se ve en imagen]
    END; {Calc MCD}
BEGIN {Calc mcm}
    Calc mcm := (i * j) DIV Calc MCD(i,j)
END;{Calc mcm}
```

- Fuente: [Transcripción u3-funcional-a, IMG1–IMG2]. Programa principal con `GetIntegers`/`Show mcm` y cabeceras C (`GetIntegers`, `Calc mcm`, `Calc MCD`, `Show mcm`) parcialmente tapadas por menú de Word. [POR-VERIFICAR: líneas tapadas/ilegibles]. Fuente: [Transcripción u3-funcional-a, IMG2].

---

## 3. Scheme (sección separada — no mezclar con Haskell)

### 3.1 Origen y forma general

- Scheme es heredero de LISP (`list processor`), que tiene la sintaxis del cálculo lambda de Church; LISP nació para IA de alto nivel. Fuente: [Transcripción u3-funcional-b, IMG6] + [Docx Paradigma funcional parte 2].
- Forma general: `(f a1 a2 ... an)` — el primer elemento de la lista es el operador y lo que sigue son sus argumentos; aplica `f` multivariable. Así se mantiene la precedencia. Fuente: [Transcripción u3-funcional-b, IMG6] + [Docx Paradigma funcional parte 2].
- Conversión infija → prefija: `a + b * c → (+ a (* b c))`. Fuente: [Transcripción u3-funcional-b, IMG7] + [Notion].
- Notación prefija `(+ a (* c d))`; el problema es que es algo ilegible, razón por la que hay más lenguajes funcionales aparte de Scheme (CAML, Haskell). Fuente: [Docx Paradigma funcional parte 2].

### 3.2 `define`, `lambda` y árbol de expresión

- Para definir una función se usa `define`; es a su vez una lista donde `define` es el operador: primer argumento = función con sus argumentos, segundo = definición. Fuente: [Docx Paradigma funcional parte 2].
- Ejemplo MCD/mcm de clase (se conserva tal cual):

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

- Fuente: [Transcripción u3-funcional-a, IMG3]. Sesión de intérprete con `(MCD 84 75)→3`, `(MCD 78 198)→6`, `(mcm 75 84)→2100`, `(mcm 198 78)→2574`, `(= 4 5)→false`. Fuente: [Transcripción u3-funcional-a, IMG4].
- `lambda` es la forma de aplicar la función a los parámetros / pasarle parámetros a la función que sigue; `mcm` debe llamarse con 2 parámetros. `lambda` también define funciones sin nombre. Fuente: [Docx Características paradigma funcional].
- Las operaciones se ejecutan como árbol de expresión: primero p. ej. `(* m n)`, el árbol se reduce a un valor para poder hacer `/`. Fuente: [Docx Características paradigma funcional].

### 3.3 Variables como constantes, memoria dinámica, sin asignación

- Variable: parte del lenguaje que en algún momento se convierte en constante; NO es un espacio en memoria para guardar datos. En `(+ a (* b c))`, `(* b c)` tras calcularse desaparece; usa memoria dinámica (nodos que se agregan/eliminan). Al obtener resultado ya no puede cambiar. Fuente: [Docx Paradigma funcional parte 2].
- "No son espacios en memoria manipulables, sino espacios en el programa que en algún momento tendrán un valor específico." Fuente: [Docx Características paradigma funcional].
- No hay instrucción de asignación típica; lo más parecido es usar el resultado de otra función para otro cálculo. Fuente: [Docx Paradigma funcional parte 2].

### 3.4 Listas: `quote`, `car`, `cdr`

- El único tipo compuesto es la lista; no hay array ni vectores. Fuente: [Docx Paradigma funcional parte 2].
- Lista constante con cita: `` (` 5 2 3 0 20) `` o `(quote 5 2 3 0 20)` = "citar literalmente", convierte esos valores en constantes. Fuente: [Docx Paradigma funcional parte 2].
- `car` da la cabeza; `cdr` da el resto/cola sin la cabeza. Fuente: [Docx Paradigma funcional parte 2].
- Fragmentos de pizarra (progresión en slides, sintaxis sospechosa — se conservan):

```scheme
(f a1 a2 ... an)
a + b * c -> (+ a (* b c))
(+ a b (- c))          ; [CÓDIGO DE CLASE, por verificar]: "convertir c a negativo y sumar" según clase
(5 2 3 0 20) -> (' 5 2 3 0 20)
(car 5 2 10) -> 5      ; [CÓDIGO DE CLASE, por verificar]: falta quote/lista explícita
(cdr 5 2 10) -> (2 10) ; [CÓDIGO DE CLASE, por verificar]: idem
(define (f a b c)())   ; [CÓDIGO DE CLASE, por verificar]: fragmento en edición, incompleto
```

- Fuente: [Transcripción u3-funcional-b, IMG8–IMG11, IMG21]. [POR-VERIFICAR: "(cdr /kudr/)" con caracteres superpuestos por cursor; `(+ a b -c)` vs `(+ a b (- c))` ambas leídas en docx].
- Parsing muy sencillo; tipos de argumentos implícitos (en Scheme no se declaran). Fuente: [Docx Paradigma funcional parte 2] + [Notion].

---

## 4. Haskell (sección separada — no mezclar con Scheme)

### 4.1 Encabezado de tipos y definición

- A diferencia de Scheme (tipos implícitos), en Haskell hay encabezado con cantidad de argumentos, sus tipos y el retorno; `->` es separador (como `,`), el último es el retorno. La segunda parte nombra los argumentos y cómo se usan otras funciones. Fuente: [Docx Paradigma funcional parte 2].
- Ejemplo de clase (conservar; `int` minúscula es sospechosa):

```haskell
sumaprod :: int -> int -> int -> int   -- [CÓDIGO DE CLASE, por verificar]: "int" minúscula; en Haskell estándar sería Int
sumaprod a b c = a +(b*c)
```

- Fuente: [Transcripción u3-funcional-b, IMG13–IMG14] + [Notion].
- En este contexto `=` significa "retorna", no asignación; las funciones siempre devuelven algo (y pueden retornar listas naturalmente, más potente que imperativas). Fuente: [Docx Paradigma funcional parte 2].
- `==` es comparación; `|` separa alternativas/guardas; `otherwise` equivale a `else`. Fuente: [Docx Paradigma funcional parte 2].

### 4.2 mcm/MCD en Haskell

```haskell
mcd :: Int -> Int -> Int
mcd a b
    | a `mod` b == 0 = b
    | otherwise      = mcd b (a `mod` b)

mcm :: Int -> Int -> Int
mcm m n = (m * n) `div` mcd n m
```

- Fuente: [Transcripción u3-funcional-a, IMG6]. Variante con `/` simple (`(m * n) / mcd n m`) aparece en IMG5. [CÓDIGO DE CLASE, por verificar]: `/` vs `` `div` `` difieren entre capturas; con `Int` lo consistente es `` `div` ``. Fuente: [Transcripción u3-funcional-a, IMG5].
- Programa con `main` (OneCompiler): `main :: IO()` / `main = print (mcm 5 3)` con salida `15`. Fuente: [Transcripción u3-funcional-a, IMG7].
- Tipos: `Int` = entero 32 bits; `Integer` = precisión indefinida, cualquier tamaño, más lento. `main` con `IO()` permite usar `print`. Para matemática rigurosa, mejor Haskell que imperativos. Fuente: [Docx Características paradigma funcional].
- [POR-VERIFICAR: `mcm m n` usa `mcd n m` (argumentos cruzados); así está en la captura, se conserva].

### 4.3 Listas homogéneas, rangos, `:` y `String`

- Las listas solo pueden ser de un mismo tipo (característico de Haskell, no de Scheme). Fuente: [Docx Características paradigma funcional].

```haskell
nums, range, range2 :: [Integer]
nums  = [1,2,3,19]
range = [1..100]
range2 = [2,4..100]
```

- Fuente: [Transcripción u3-funcional-a, IMG8].
- Strings = listas de caracteres: `String` abrevia `[Char]`; `"abcd"` y `['a','b','c','d']` son el mismo valor; funciones sobre listas de caracteres operan sobre hileras. Fuente: [Transcripción u3-funcional-a, IMG8].
- Lista vacía `[]`; constructor cons `(:)`; `ex18 = 1:[]`, `ex19 = 3:(1:[])`, `ex20 = 2:3:4:[]`, `ex21 = [2,3,4] == 2:3:4:[]`. Distinción listas enlazadas vs arrays. Fuente: [Transcripción u3-funcional-a, IMG9].

### 4.4 Pattern matching: `X:xs`, `_`, guardas, `hailstone`

```haskell
hailstone :: Integer -> Integer
hailstone n
  | n `mod` 2 == 0 = n `div` 2
  | otherwise      = 3*n + 1

hailstoneSeq :: Integer -> [Integer]
hailstoneSeq 1 = [1]
hailstoneSeq n = n : hailstoneSeq (hailstone n)
```

- Fuente: [Transcripción u3-funcional-a, IMG10–IMG11]. Secuencia se detiene en 1: consiste en `n` seguido de sucesivas llamadas a `hailstone`. Fuente: [Transcripción u3-funcional-a, IMG10].
- No se necesita condicional para el caso 1, se pone el caso directamente. Fuente: [Docx Características paradigma funcional].
- Cabeza/cola: `x:xs` = x agregada al inicio de `xs`; cabeza = `x`, cola = `xs`; longitud = 1 + longitud de la cola. Fuente: [Docx Características paradigma funcional].

```haskell
intListLength :: [Integer] -> Integer
intListLength []     = 0
intListLength (x:xs) = 1 + intListLength xs
-- con variable anónima (como la de Prolog):
intListLength (_:xs) = 1 + intListLength xs
```

- Fuente: [Transcripción u3-funcional-a, IMG12]. Patrones anidados y combinación:

```haskell
sumarCadaDos :: [Integer] -> [Integer]
sumarCadaDos []         = []   -- lista vacía
sumarCadaDos (x:[])     = [x]  -- un solo elemento
sumarCadaDos (x:(y:zs)) = (x + y) : sumarCadaDos zs  -- paréntesis de la lista podían quitarse

hailstoneLen :: Integer -> Integer
hailstoneLen n = intListLength (hailstoneSeq n) - 1
```

- Fuente: [Transcripción u3-funcional-a, IMG13]. `hailstoneLen` parece generar toda la secuencia antes de medirla, pero por lazy evaluation cada elemento se genera solo cuando se usa (generación y medición entrelazadas). Fuente: [Transcripción u3-funcional-a, IMG13].
- Función condicional sencilla (Collatz) y su Haskell:

```haskell
f :: Integer -> Integer
f n
  | n == 1 = 1
  | n `mod` 2 == 0 = f (n `div` 2)
  | otherwise = f (3 * n + 1)
```

- Definición matemática: `f(x) = { 1 si x=1; f(3x+1) si impar; f(x/2) si par }`. Fuente: [Transcripción u3-funcional-b, IMG40–IMG41]. Implementación popular: Glasgow Haskell Compiler (GHC), https://www.haskell.org/ghc/. Fuente: [Transcripción u3-funcional-b, IMG42].
- Se permite usar primitivas como `head` y `tail`. Fuente: [Docx Paradigma funcional parte 2].

---

## 5. Funciones de primera clase, orden superior y polimorfismo paramétrico

- Funciones = abstracciones sobre expresiones; son valores de primera clase ("habitantes de primera categoría"). Pueden ser argumentos de otras funciones: una función de orden alto toma lista + función y la aplica a cada elemento. Fuente: [Transcripción u3-funcional-b, IMG18] + [Notion].
- Función general de clase: sea `v = (a1,…,an)`, `M(v,f) = (f(a1),…,f(an))`. Fuente: [Transcripción u3-funcional-b, IMG43].
- En clase: vale usar un vector como primer argumento y una función como segundo; aplica la función a cada elemento (idea de `map`). El segundo elemento [de la llamada] es la invocación de una función: es normal que el argumento sea otra función con sus argumentos. Fuente: [Docx Paradigma funcional parte 2] + [Notion].
- En C esto no está permitido (el compilador lanza error; hay que guardar en variable); en funcional sí se pasan funciones como argumentos. Fuente: [Docx Paradigma funcional parte 2]. Comparar con `int foo(int a,b); x = foo(5,(3+2)); y=3+2; x=foo(5,y);` de los slides (fragmento C sobre evaluación de argumentos). Fuente: [Transcripción u3-funcional-b, IMG22–IMG24].
- Polimorfismo paramétrico: la función no restringe a priori el tipo de los argumentos (teoría lógica de funciones). Fuente: [Transcripción u3-funcional-b, IMG19] + [Notion].
- En Haskell se respeta de dos maneras (nota de clase): jerarquía de tipos (Int/Float como subclases de Number, etc., con funciones que preguntan el tipo) y paso de funciones como parámetros cuyo resultado respeta el polimorfismo. Fuente: [Docx Paradigma funcional parte 2]. [POR-VERIFICAR: la analogía con clases Smalltalk/Number/Amount es nota de clase, verificar redacción].

## 6. Estrategias de evaluación: ansiosa, orden-normal, perezosa

- Pregunta base: ¿cómo evaluar `f(n+k)` (n, k variables)? Tres respuestas. Evaluación perezosa parte de: una expresión cuyo valor no se usa no debe evaluarse; importa el orden. Fuente: [Transcripción u3-funcional-b, IMG25].
- Definiciones:
  - Ansiosa (*eager*): se evalúa el argumento una vez en el punto de llamada; se sustituye el valor por cada ocurrencia del parámetro. Fuente: [Transcripción u3-funcional-b, IMG26].
  - Orden-normal: se evalúa el argumento solo cuando es requerido. Fuente: [Transcripción u3-funcional-b, IMG26].
  - Perezosa (*lazy*): se evalúa cuando es requerido por primera vez, se almacena y se reutiliza. Fuente: [Transcripción u3-funcional-b, IMG37].
- Ejemplo `sqr n = n*n`, llamada `sqr(m+1)` con `m=6`. Fuente: [Transcripción u3-funcional-b, IMG27] + [Notion].
  - Ansiosa: `m+1→7`, ligar `n=7`, `7*7=49`. Fuente: [Transcripción u3-funcional-b, IMG28].
  - Orden-normal: ligar `n` a expresión sin evaluar, sustituir y evaluar `(m+1)*(m+1) = (6+1)x(6+1) = 49` (se evalúa dos veces). Fuente: [Transcripción u3-funcional-b, IMG29].
  - Mismo resultado; ansiosa más eficiente aquí. Pero algunas funciones dependen fuertemente del orden. Fuente: [Transcripción u3-funcional-b, IMG30].
- Ejemplo `cand(b1,b2) = if b1 then b2 else False`, llamada `cand((n>0),(t/n>50))`. Fuente: [Transcripción u3-funcional-b, IMG31] + [Notion].
  - Con `n=2,t=80`: ansiosa (`n>0→true`, `t/n>50→false`) y orden-normal dan `false`. Fuente: [Transcripción u3-funcional-b, IMG32].
  - Con `n=0,t=80`: ansiosa evalúa ambas → división por cero y falla; orden-normal no evalúa el segundo argumento (el primero es `false`) → retorna `false` sin problema. Fuente: [Transcripción u3-funcional-b, IMG33].
- Estrictez: `sqr` siempre usa su argumento (estricta en `n`); `cand` ignora a veces el segundo (solo estricta en el primero). Función estricta = siempre usa ese argumento. Idea lazy: retrasar no-estrictos; solo evaluar estrictos. Fuente: [Transcripción u3-funcional-b, IMG34] + [Docx Paradigma funcional parte 2] + [Notion].
- Church-Rosser: si una expresión puede evaluarse, puede evaluarse consistentemente con orden-normal; si se evalúa en órdenes distintos (mezclando ansiosa y orden-normal), todos dan el mismo resultado. La tienen lenguajes como Haskell; no C (efectos colaterales, p. ej. `getint`). Fuente: [Transcripción u3-funcional-b, IMG35–IMG36] + [Notion].
- Orden-normal es ineficiente (reevalúa); lazy evita el desperdicio guardando el valor. Con Church-Rosser, lazy ≡ orden-normal en resultado. Lazy adoptada por funcionales y algunas implementaciones de Prolog; ansiosa casi universal en imperativos/OO. `n mod m` repetido en MCD solo se evalúa una vez gracias a lazy. Fuente: [Transcripción u3-funcional-b, IMG37, IMG44] + [Docx Paradigma funcional parte 2] + [Notion].
- Diseño de aplicaciones funcionales: útil para Matemática/Física/Simulación/métodos numéricos; metodología top-down/bottom-up (dependencia de la más general a la más específica; desarrollo desde primitivas). Fuente: [Transcripción u3-funcional-a, IMG14].

## 7. Condicionales como proceso (cierre)

- Composición y resultados dependientes describen lo secuencial; ¿ciclos y `if`? Fuente: [Transcripción u3-funcional-b, IMG39].
- Respuesta de clase: condicionales a trozos (`Cond`, guardas, pattern matching) + recursión cubren ciclos y bifurcaciones (ver `hailstoneSeq`, `f` de Collatz, `MCD`). Fuente: [Explicación pedagógica — elaboración propia] sobre [Transcripción u3-funcional-b, IMG39–IMG41].
