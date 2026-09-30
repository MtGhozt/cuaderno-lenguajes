# Transcripciones U3 — Funcional (parte A)

## Caracteristicas_paradigma_funcional-IMG1

Título del slide: [Sin título visible de diapositiva; documento Word titulado «El cálculo del mínimo común múltiplo procedimental»]

Transcripción literal:

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
    [ILEGIBLE: carácter suelto «I» antes de la asignación, posible artefacto de cursor/selección]
    Calc mcm := (i * j) DIV Calc MCD(i,j)
END;{Calc mcm}
```

Fuente: docs/assets/Caracteristicas_paradigma_funcional/img1.png [transcrito de imagen, por verificar]

## Caracteristicas_paradigma_funcional-IMG2

Título del slide: [Sin título visible; continuación del documento «El cálculo del mínimo común múltiplo procedimental» — Show mcm / main / Versión C]

Transcripción literal:

```text
Writeln("El mínimo común múltiplo es: ",m);
END; {Show mcm}
[ILEGIBLE: líneas tapadas por menú flotante de formato de Word]
BEGIN {main}
    GetIntegers(a,b);
    mcm := Calc mcm(a,b);
    Show mcm(mcm)
END.{main}

2. Versión C
```

```c
#include <stdio.h>

void GetIntegers(int *n, int *m);
int Calc mcm(int i, int j);
int Calc MCD(int n, int m);
void Show mcm(int m);
```

Fuente: docs/assets/Caracteristicas_paradigma_funcional/img2.png [transcrito de imagen, por verificar]

## Caracteristicas_paradigma_funcional-IMG3

Título del slide: Paradigma funcional

Transcripción literal:

1. Scheme

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

Fuente: docs/assets/Caracteristicas_paradigma_funcional/img3.png [transcrito de imagen, por verificar]

## Caracteristicas_paradigma_funcional-IMG4

Título del slide: [No es diapositiva; página web «Scheme Interpreter» demostrando el código Scheme en navegador — se ignora la interfaz del navegador]

Transcripción literal del contenido académico (sesión del intérprete):

```scheme
scm> (define MCD
scm>       (lambda (a b)
scm>           (if (= (remainder a b) 0)
scm>               b
scm>               (MCD b (remainder a b)))))

mcd

scm> (MCD 84 75)

3

scm> (MCD 78 198)

6

scm> (define mcm
scm>           (lambda (m n)
scm>               (/ (* m n) (MCD m n))))
scm>

mcm

scm> (mcm 75 84)

2100

scm> (mcm 198 78)

2574

scm> (= 4 5)

false
```

Fuente: docs/assets/Caracteristicas_paradigma_funcional/img4.png [transcrito de imagen, por verificar]

## Caracteristicas_paradigma_funcional-IMG5

Título del slide: [Documento Word; sección «2. Haskell» — versión con texto seleccionado]

Transcripción literal:

2. Haskell

```haskell
mcd :: Int -> Int -> Int
mcd a b
    | a `mod` b == 0 = b
    | otherwise      = mcd b (a `mod` b)

mcm :: Int -> Int -> Int
mcm m n = (m * n) / mcd n m [sic: con «/» simple según se ve en esta captura]
```

[ILEGIBLE: fragmento parcialmente tapado por menú flotante de formato de Word, sin pérdida aparente de código]

Fuente: docs/assets/Caracteristicas_paradigma_funcional/img5.png [transcrito de imagen, por verificar]

## Caracteristicas_paradigma_funcional-IMG6

Título del slide: [Documento Word; sección «2. Haskell» — versión sin selección]

Transcripción literal:

2. Haskell

```haskell
mcd :: Int -> Int -> Int
mcd a b
    | a `mod` b == 0 = b
    | otherwise      = mcd b (a `mod` b)

mcm :: Int -> Int -> Int
mcm m n = (m * n) `div` mcd n m
```

Fuente: docs/assets/Caracteristicas_paradigma_funcional/img6.png [transcrito de imagen, por verificar]

## Caracteristicas_paradigma_funcional-IMG7

Título del slide: [No es diapositiva; página web «OneCompiler» con programa Haskell — se ignora la interfaz del navegador/IDE]

Transcripción literal del contenido académico:

Archivo: Main.hs

```haskell
main :: IO()
main = print (mcm 5 3)

mcd :: Int -> Int -> Int
mcd a b
  | a `mod` b == 0 = b
  | otherwise      = mcd b (a `mod` b)

mcm :: Int -> Int -> Int
mcm m n = (m * n) `div` mcd n m
```

Salida (Output):

```text
15
```

Fuente: docs/assets/Caracteristicas_paradigma_funcional/img7.png [transcrito de imagen, por verificar]

## Caracteristicas_paradigma_funcional-IMG8

Título del slide: Listas

Transcripción literal:

- Ejemplos de uso de listas:

```haskell
nums, range, range2 :: [Integer]
nums  = [1,2,3,19]
range = [1..100]
range2 = [2,4..100]
```

- Como en otros lenguajes, las hileras son listas de caracteres, de manera que String es solo una abreviatura para [Char].
- Entonces “abcd” y [‘a’, ‘b’, ‘c’, ‘d’] son en realidad el mismo valor.
- Esto significa que las funciones que operan sobre listas de caracteres pueden operar sobre hileras.

Fuente: docs/assets/Caracteristicas_paradigma_funcional/img8.png [transcrito de imagen, por verificar]

## Caracteristicas_paradigma_funcional-IMG9

Título del slide: Construyendo listas

Transcripción literal:

- La lista más simple es la lista vacía: [].
- Se puede construir cualquier otra lista a partir de la lista vacía, con el operador cons (:).
- Por ejemplo:

```haskell
ex18 = 1 : []
ex19 = 3 : (1 : [])
ex20 = 2 : 3 : 4 : []

ex21 = [2,3,4] == 2 : 3 : 4 : []
```

- Es necesario notar que en Haskell se hace una distinción entre listas enlazadas y arrays.

Fuente: docs/assets/Caracteristicas_paradigma_funcional/img9.png [transcrito de imagen, por verificar]

## Caracteristicas_paradigma_funcional-IMG10

Título del slide: Un caso interesante

Transcripción literal:

- Consideremos estas funciones:

```haskell
--Función básica
hailstone :: Integer -> Integer
hailstone n
  | n `mod` 2 == 0 = n `div` 2
  | otherwise      = 3*n + 1

--Generar el número de iteraciones a partir de un entero dado
hailstoneSeq :: Integer -> [Integer]
hailstoneSeq 1 = [1]
hailstoneSeq n = n : hailstoneSeq (hailstone n)
```

- Detenemos la secuencia cuando se llega a 1. La secuencia consiste de n mismo, seguido de las llamadas sucesivas de la función hailstone.

Fuente: docs/assets/Caracteristicas_paradigma_funcional/img10.png [transcrito de imagen, por verificar]

## Caracteristicas_paradigma_funcional-IMG11

Título del slide: [Sin título visible; acercamiento/recorte del slide «Un caso interesante»]

Transcripción literal:

```haskell
--Generar el número de iteraciones a partir de un entero dado
hailstoneSeq :: Integer -> [Integer]
hailstoneSeq 1 = [1]
hailstoneSeq n = n : hailstoneSeq (hailstone n)
```

Fuente: docs/assets/Caracteristicas_paradigma_funcional/img11.png [transcrito de imagen, por verificar]

## Caracteristicas_paradigma_funcional-IMG12

Título del slide: Funciones aplicadas a listas

Transcripción literal:

- Podemos escribir funciones sobre listas usando coincidencia de patrones:

```haskell
-- Calcula de longitud de una lista de enteros. [sic: «Calcula de longitud»]
intListLength :: [Integer] -> Integer
intListLength []     = 0
intListLength (x:xs) = 1 + intListLength xs
```

- Primero se declara que la lista vacía tiene longitud 0. y luego se dice que la longitud de una lista (implícitamente) no vacía es 1 más la longitud de la cola.
- Haskell también posee la variable anónima de Prolog, por lo que la última declaración pudo haberse escrito:

```haskell
intListLength (_:xs) = 1 + intListLength xs
```

Fuente: docs/assets/Caracteristicas_paradigma_funcional/img12.png [transcrito de imagen, por verificar]

## Caracteristicas_paradigma_funcional-IMG13

Título del slide: [Sin título visible en el recorte; continuación de «Funciones aplicadas a listas»]

Transcripción literal:

- Podemos incluso anidar patrones:

```haskell
sumarCadaDos :: [Integer] -> [Integer]
sumarCadaDos []       = []  -- No hace nada en la lista vacía
sumarCadaDos (x:[])   = [x] -- No hace nada a la lista de un solo elemento
sumarCadaDos (x:(y:zs)) = (x + y) : sumarCadaDos zs
```

- Nótese que en la última declaración se pudo haber quitado los paréntesis de la lista.

- Podemos, por supuesto, combinar funciones para obtener nuestros resultados:

```haskell
-- Número de pasos requeridos para llegar a 1
hailstoneLen :: Integer -> Integer
hailstoneLen n = intListLength (hailstoneSeq n) - 1
```

- Es importante destacar que aunque parezca ineficiente generar la secuencia completa primero para luego encontrar su longitud, en realidad lo que ocurre es que cada elemento de la secuencia es generado solo hasta el momento en que se lo ocupa (lazy evaluation!), por lo que, en realidad, la generación de la secuencia y el cálculo de la longitud de la lista están entrelazados
- (Para más información en la conjetura de Collatz: https://youtu.be/094y1Z2wpJg?feature=shared)

Fuente: docs/assets/Caracteristicas_paradigma_funcional/img13.png [transcrito de imagen, por verificar]

## Caracteristicas_paradigma_funcional-IMG14

Título del slide: Diseño de aplicaciones en lenguajes funcionales

Transcripción literal:

- Este paradigma es sumamente práctico para problemas que se definen principalmente mediante funciones complicadas: Matemática, Física, Simulación, Métodos numéricos, etc.
- Por lo tanto, las metodologías de diseño de software en este paradigma más bien enfatizan la relación entre las funciones que se deben definir, en el esquema que vimos anteriormente.
- En cierta forma, la metodología de desarrollo en este paradigma sigue también una orientación top-down/bottom-up, en el sentido que primero se define la dependencia entre funciones, desde la más general hasta las más específicas, y luego se empieza a desarrollar (y verificar) a partir de las funciones primitivas del problema.

Fuente: docs/assets/Caracteristicas_paradigma_funcional/img14.png [transcrito de imagen, por verificar]

## Introduccion_paradigma_funcional-IMG5

Título del slide: [Sin título visible; fragmento de documento Word — «C:»]

Transcripción literal:

- [ILEGIBLE: primer viñeta cortada en el borde superior, se lee «verbose»]
- El lenguaje no paraba de crecer.
- La curva de aprendizaje era cada vez más larga

C:

- Inseguro e inestable en situaciones “límite”.
- Efectos colaterales: en computación la operación de algunos dispositivos de hardware funciona haciendo una solicitud, y esperando un resultado, pero no necesariamente, el resultado esperado ocurre; entonces el dispositivo tiene que informar que ya sea la operación fue exitosa, o que no pudo llevarla a cabo (y por qué).

```c
if ((a=get(f))!=0) ....
```

Fuente: docs/assets/Introduccion_paradigma_funcional/img5.png [transcrito de imagen, por verificar]

## Introduccion_paradigma_funcional-IMG8

Título del slide: Funciones (parcialmente) computables

Transcripción literal:

- Consideremos la función identidad

```text
f(x) = x
```

- Desde el punto de vista teórico, se puede tomar cualquier número real y evaluarla.
- Pero esto no es cierto desde el punto de vista “práctico”, pues los seres humanos contamos con recursos limitados.
- Entonces, aún en el caso de la humilde función identidad, solo se puede calcular exactamente el valor de la función para una cantidad “pequeña” de números.
- Esta noción de función computable fue aplicada por Alonzo Church para resolver el problema, planteado por David Hilbert, de si siempre existía algún procedimiento para demostrar cualquier sentencia matemática verdadera.
- La obra en la que Church expone ampliamente estas ideas es The Calculi of Lambda Conversion.
- Hay que señalar que Church hace un tratamiento de las funciones de una manera más “lexicográfica” de lo que es usual en matemática, que es una forma de manejo de símbolos que es más usual en Lógica.

Fuente: docs/assets/Introduccion_paradigma_funcional/img8.png [transcrito de imagen, por verificar]

## Introduccion_paradigma_funcional-IMG9

Título del slide: Funciones

Transcripción literal:

- En los libros de matemática se acostumbra definir una función como una “ley” que relaciona de cierta forma elementos de un conjunto con elementos de otro.

Diagrama (descripción fiel):

```text
Conjunto X (izquierda, óvalo) contiene de arriba hacia abajo:
  - triángulo rojo
  - rectángulo amarillo horizontal
  - figura verde irregular (tipo «pac-man»/flecha)
  - cuadrado rojo

Conjunto Y (derecha, óvalo) contiene de arriba hacia abajo:
  - círculo rojo
  - círculo azul
  - círculo verde
  - círculo morado
  - círculo amarillo

Flechas:
  - triángulo rojo (X) -> círculo rojo (Y, superior)
  - figura verde (X) -> círculo verde (Y, medio)
  - rectángulo amarillo (X) -> círculo amarillo (Y, inferior) [cruza a las otras]
  - cuadrado rojo (X) -> círculo rojo (Y, superior) [segunda flecha al mismo destino; cruza a las otras]
```

| Origen (X) | Destino (Y) |
|---|---|
| triángulo rojo | círculo rojo (superior) |
| rectángulo amarillo | círculo amarillo (inferior) |
| figura verde | círculo verde (medio) |
| cuadrado rojo | círculo rojo (superior) |

[ILEGIBLE: el cruce exacto de las dos flechas diagonales es difícil de distinguir al 100% en la imagen]

Fuente: docs/assets/Introduccion_paradigma_funcional/img9.png [transcrito de imagen, por verificar]

## Introduccion_paradigma_funcional-IMG10

Título del slide: [Sin título visible en el recorte]

Transcripción literal:

- Esto da pie a que generalmente, en Matemática, se define una función de un conjunto A a un conjunto B como un subconjunto del producto cartesiano A × B

```text
f = {(a,b)|a ∈ A ∧ b ∈ B ∧ Pab}
```

donde “P” es la propiedad que relaciona a a con b.

- Esto está bien en matemática, pero los teóricos en Lógica lo tomaron de otra forma, más bien poniendo énfasis en la función como un ente autónomo, es decir, en la propiedad P.
- Y este es el punto de vista en programación funcional.

Fuente: docs/assets/Introduccion_paradigma_funcional/img10.png [transcrito de imagen, por verificar]

## Introduccion_paradigma_funcional-IMG11

Título del slide: Las funciones como objetos en Matemática

Transcripción literal:

- Las funciones, como objetos en si, sí reciben atención en Matemática.
- El área que se concentra en este estudio es el Análisis Funcional.
- Por ejemplo, en el conjunto de las funciones reales, es posible definir una distancia, y con ello, definir la noción de límite de una sucesión.
- Por ejemplo, considere la función de densidad normal.

Fuente: docs/assets/Introduccion_paradigma_funcional/img11.png [transcrito de imagen, por verificar]

## Introduccion_paradigma_funcional-IMG12

Título del slide: En el cálculo lambda...

Transcripción literal:

- Consideremos nuevamente la función identidad: f(x) = x
- Resulta que con la definición que se tiene en matemática, el ámbito de la función está restringido al conjunto sobre el que se construye.
- Pero, desde cierto punto de vista, esto no tiene sentido, porque la función identidad es la misma, sin importar el conjunto de su dominio.

Fuente: docs/assets/Introduccion_paradigma_funcional/img12.png [transcrito de imagen, por verificar]

## Introduccion_paradigma_funcional-IMG13

Título del slide: Operaciones de funciones

Transcripción literal:

- Operaciones “regulares”: suma, resta, producto
- Operaciones “sucesivas”: composición

```text
K(x) = (h ∘ f ∘ g)x = h(f(g(x)))
```

- Operadores funcionales: derivación e integración (indefinida)
- Recursividad

Fuente: docs/assets/Introduccion_paradigma_funcional/img13.png [transcrito de imagen, por verificar]

## Introduccion_paradigma_funcional-IMG14

Título del slide: Algoritmos en el paradigma funcional

Transcripción literal:

Un algoritmo es un conjunto de funciones que se evalúan, donde el número de funciones es finito y se evalúan una cantidad finita de veces, usando para ello una cantidad finita de recursos.

Fuente: docs/assets/Introduccion_paradigma_funcional/img14.png [transcrito de imagen, por verificar]

## Introduccion_paradigma_funcional-IMG15

Título del slide: [Sin título visible; documento Word «Mínimo Común múltiplo como una función:»]

Transcripción literal:

Mínimo Común múltiplo como una función:

```text
mcm(n,m) = (n × m) / MCD(n,m)
MCD(n,m) = { si (n = qm + r, y r = 0): m
             en caso contrario: MCD(m,r)
```

[ILEGIBLE: el primer símbolo «n» del numerador se ve con un trazo atípico parecido a «η»; se transcribe como «n» por contexto, por verificar]

Fuente: docs/assets/Introduccion_paradigma_funcional/img15.png [transcrito de imagen, por verificar]

## Introduccion_paradigma_funcional-IMG1 — [CONTEXTO IMPERATIVO, no transcrito]

Título: «Problemas de programación imperativa (caso por caso)». Contenido: COBOL: incapaz de trabajar con estructuras dinámicas; "Verbose". [Mismo tema ya cubierto en texto en Notion Semana 6 Clase 1; fuera del alcance U1+U3+U4 como contenido imperativo]

Fuente: docs/assets/Introduccion_paradigma_funcional/img1.png [revisado visualmente, por verificar]

## Introduccion_paradigma_funcional-IMG2 — [CONTEXTO IMPERATIVO, no transcrito]

Título: «Problemas de programación imperativa (caso por caso)». Contenido: COBOL (4 viñetas: estructuras dinámicas, verbose, crecimiento del lenguaje, curva de aprendizaje) + inicio de sección C:. [Mismo tema ya cubierto en texto en Notion Semana 6 Clase 1]

Fuente: docs/assets/Introduccion_paradigma_funcional/img2.png [revisado visualmente, por verificar]

## Introduccion_paradigma_funcional-IMG3 — [CONTEXTO IMPERATIVO, no transcrito]

Título: «Problemas de programación imperativa (caso por caso)». Contenido: COBOL (4 viñetas) + C: «Inseguro e inestable en situaciones "límite"». [Mismo tema ya cubierto en texto en Notion Semana 6 Clase 1]

Fuente: docs/assets/Introduccion_paradigma_funcional/img3.png [revisado visualmente, por verificar]

## Introduccion_paradigma_funcional-IMG4 — [CONTEXTO IMPERATIVO, no transcrito]

Título: «Problemas de programación imperativa (caso por caso)». Contenido: COBOL (4 viñetas) + C: inseguro/inestable, efectos colaterales (operación de dispositivos de hardware: solicitud, espera de resultado, informe de éxito o fracaso). [Mismo tema ya cubierto en texto en Notion Semana 6 Clase 1]

Fuente: docs/assets/Introduccion_paradigma_funcional/img4.png [revisado visualmente, por verificar]

## Introduccion_paradigma_funcional-IMG6 — [CONTEXTO IMPERATIVO, no transcrito]

Contenido (fragmento de documento Word): C: inseguro/inestable en situaciones "límite"; efectos colaterales; `if ((a=get(f)) !=0) ....`; la operación con archivos grandes es ajena al lenguaje. Pascal: E/S con instrucciones del lenguaje; salidas abruptas de ciclos (manejo de excepciones) engorrosas de manejar. [Mismo tema ya cubierto en texto en Notion Semana 6 Clase 1]

Fuente: docs/assets/Introduccion_paradigma_funcional/img6.png [revisado visualmente, por verificar]

## Introduccion_paradigma_funcional-IMG7

Título del slide: [Sin título visible; documento Word, página 2 de 2]

Transcripción literal:

```text
8 = 5 + 3
10 = 7 + 3
12 = 7 + 5
14 = 11 + 3
16 = 13 + 3
65536
Gödel:
Alonzo Church: función parcialmente computable: f(x)=y. f(x) = √x. E={0,1,4,9,16,...}
f(2) = √2
```

[Nota: la lista 8=5+3 … 16=13+3 corresponde a sumas de dos primos —conjetura de Goldbach— usada como ejemplo de sentencias verdaderas no demostrables en el contexto de Gödel; la interpretación es pedagógica, por verificar contra la clase]

Fuente: docs/assets/Introduccion_paradigma_funcional/img7.png [transcrito de imagen, por verificar]
