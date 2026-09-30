# Transcripciones U3 — Funcional (parte B)

## funcional-b-IMG1

Título del slide: Mínimo Común múltiplo como una función

Mínimo Común múltiplo como una función:

mcm(n, m) = (n × m) / MCD(n, m)

MCD(n, m) = { si (n = qm + r, y r = 0): m; en caso contrario: MCD(m, r) }

```text
Proy(k, a1, a2, ..., an) = ak
```

Fuente: docs/assets/Paradigma_funcional_parte_2/img1.png [transcrito de imagen, por verificar]

## funcional-b-IMG2

Título del slide: Mínimo Común múltiplo como una función

Mínimo Común múltiplo como una función:

mcm(n, m) = (n × m) / MCD(n, m)

MCD(n, m) = { si (n = qm + r, y r = 0): m; en caso contrario: MCD(m, r) }

```text
Proy(k, a1, a2, ..., an) = ak
Cond(t,a,b) = a si t = true, b otherwise
```

[ILEGIBLE: la línea de Proy está parcialmente cortada en la parte inferior de la imagen]

Fuente: docs/assets/Paradigma_funcional_parte_2/img2.png [transcrito de imagen, por verificar]

## funcional-b-IMG3

Título del slide: Cond (t, a, b) — Versión 1 / Versión 2

MCD(n, m) = { si (n = qm + r, y r = 0): m; en caso contrario: MCD(m, r) }

```text
Cond(t,a,b)
Versión 1:
```

MCD(n, m) = { si (m|n): m; en caso contrario: MCD(m, r) }

```text
Versión 2:
```

MCD(n, m) = { si (n mod m = 0): m; en caso contrario: MCD(m, r) }

Fuente: docs/assets/Paradigma_funcional_parte_2/img3.png [transcrito de imagen, por verificar]

## funcional-b-IMG4

Título del slide: Cond (t, a, b) — Versión 1 / Versión 2

```text
Cond(t,a,b)
Versión 1:
```

MCD(n, m) = { si (m|n): m; en caso contrario: MCD(m, r) }

```text
Versión 2:
```

MCD(n, m) = { si (n mod m = 0): m; en caso contrario: MCD(m, (n mod m)) }

Fuente: docs/assets/Paradigma_funcional_parte_2/img4.png [transcrito de imagen, por verificar]

## funcional-b-IMG5

Título del slide: Versión 2 / ¿Cómo se ven las funciones?

MCD(n, m) = { si (n mod m = 0): m; en caso contrario: MCD(m, (n mod m)) }

```text
¿Cómo se ven las funciones?
Los lenguajes funcionales suelen tener esta estructura:
Definición de funciones
Definición de main
```

Fuente: docs/assets/Paradigma_funcional_parte_2/img5.png [transcrito de imagen, por verificar]

## funcional-b-IMG6

Título del slide: ¿Cómo se ve una función en Scheme?

```text
Definición de funciones
Definición de main
¿Cómo se ve una función en Scheme?
Scheme es un heredero de LISP, que a su vez tiene la sintaxis del cálculo lambda:
```

```scheme
(f a1 a2 ... an)
```

Fuente: docs/assets/Paradigma_funcional_parte_2/img6.png [transcrito de imagen, por verificar]

## funcional-b-IMG7

Título del slide: ¿Cómo se ve una función en Scheme?

```text
Definición de funciones
Definición de main
¿Cómo se ve una función en Scheme?
Scheme es un heredero de LISP, que a su vez tiene la sintaxis del cálculo lambda:
```

```scheme
(f a1 a2 ... an)
a + b * c -> (+ a (* b c))
```

Fuente: docs/assets/Paradigma_funcional_parte_2/img7.png [transcrito de imagen, por verificar]

## funcional-b-IMG8

Título del slide: ¿Cómo se ve una función en Scheme?

```text
Definición de funciones
Definición de main
¿Cómo se ve una función en Scheme?
Scheme es un heredero de LISP, que a su vez tiene la sintaxis del cálculo lambda:
```

```scheme
(f a1 a2 ... an)
a + b * c -> (+ a (* b c))
(+ a b (- c))
```

Fuente: docs/assets/Paradigma_funcional_parte_2/img8.png [transcrito de imagen, por verificar]

## funcional-b-IMG9

Título del slide: ¿Cómo se ve una función en Scheme?

```text
Definición de funciones
Definición de main
¿Cómo se ve una función en Scheme?
Scheme es un heredero de LISP, que a su vez tiene la sintaxis del cálculo lambda:
```

```scheme
(f a1 a2 ... an)
a + b * c -> (+ a (* b c))
(+ a b (- c))
(5 2 3 0 20)
```

Fuente: docs/assets/Paradigma_funcional_parte_2/img9.png [transcrito de imagen, por verificar]

## funcional-b-IMG10

Título del slide: ¿Cómo se ve una función en Scheme?

```text
¿Cómo se ve una función en Scheme?
Scheme es un heredero de LISP, que a su vez tiene la sintaxis del cálculo lambda:
```

```scheme
(f a1 a2 ... an)
a + b * c -> (+ a (* b c))
(+ a b (- c))
(5 2 3 0 20) -> (' 5 2 3 0 20)
(car 5 2 10) -> 5
(cdr 5 2 10) -> (2 10)
```

Fuente: docs/assets/Paradigma_funcional_parte_2/img10.png [transcrito de imagen, por verificar]

## funcional-b-IMG11

Título del slide: ¿Cómo se ve una función en Scheme?

```text
¿Cómo se ve una función en Scheme?
Scheme es un heredero de LISP, que a su vez tiene la sintaxis del cálculo lambda:
```

```scheme
(f a1 a2 ... an)
a + b * c -> (+ a (* b c))
(+ a b (- c))
(5 2 3 0 20) -> (' 5 2 3 0 20)
(car 5 2 10) -> 5
(cdr 5 2 10) -> (2 10) (cdr /kudr/)
(define (f a b c)())
```

[ILEGIBLE: fragmento en edición, se lee "(cdr /kudr/)" con caracteres superpuestos por el cursor]

Fuente: docs/assets/Paradigma_funcional_parte_2/img11.png [transcrito de imagen, por verificar]

## funcional-b-IMG12

Título del slide: ¿Cómo se ve una función en Haskell?

```text
¿Cómo se ve una función en Haskell?
```

Fuente: docs/assets/Paradigma_funcional_parte_2/img12.png [transcrito de imagen, por verificar]

## funcional-b-IMG13

Título del slide: ¿Cómo se ve una función en Haskell?

```text
¿Cómo se ve una función en Haskell?
```

```haskell
sumaprod :: int -> int -> int -> int
```

Fuente: docs/assets/Paradigma_funcional_parte_2/img13.png [transcrito de imagen, por verificar]

## funcional-b-IMG14

Título del slide: ¿Cómo se ve una función en Haskell?

```text
¿Cómo se ve una función en Haskell?
```

```haskell
sumaprod :: int -> int -> int -> int
sumaprod a b c = a +(b*c)
```

Fuente: docs/assets/Paradigma_funcional_parte_2/img14.png [transcrito de imagen, por verificar]

## funcional-b-IMG15

Título del slide: Algoritmos en el paradigma funcional

Un algoritmo es un conjunto de funciones que se evalúan, donde el número de funciones es finito y se evalúan una cantidad finita de veces, usando para ello una cantidad finita de recursos.

Fuente: docs/assets/Paradigma_funcional_parte_2/img15.png [transcrito de imagen, por verificar]

## funcional-b-IMG16

Título del slide: Conceptos fundamentales

.En el paradigma funcional, el modelo de computación es la aplicación de funciones a los argumentos.
.Entonces, sus conceptos fundamentales son
–Expresiones
–Funciones
–Polimorfismo paramétrico
–Abstracción de datos (*)
–Evaluación perezosa [sic] [Lazy evaluation] (*)

Fuente: docs/assets/Paradigma_funcional_parte_2/img16.png [transcrito de imagen, por verificar]

## funcional-b-IMG17

Título del slide: Expresiones

.Son un concepto clave en programación funcional porque su propósito es calcular nuevos valores.
.Las expresiones dependen del tipo de los argumentos involucrados.

Fuente: docs/assets/Paradigma_funcional_parte_2/img17.png [transcrito de imagen, por verificar]

## funcional-b-IMG18

Título del slide: Funciones

.En cierto sentido, las funciones pueden verse como abstracciones sobre expresiones.
.Las funciones, en este paradigma se consideran valores de primera clase. Los entusiastas de este paradigma suelen decir que en programación funcional las funciones son habitantes de primera categoría.
.Las funciones pueden ser argumentos de otras funciones, por ejemplo, una función de orden alto puede tomar una lista y otra función como argumentos, y su "ejecución" consistirá en aplicar la función "argumento" a cada elemento de la lista.

Fuente: docs/assets/Paradigma_funcional_parte_2/img18.png [transcrito de imagen, por verificar]

## funcional-b-IMG19

Título del slide: Polimorfismo paramétrico

.Este término instancia la teoría lógica de funciones, pues se debe permitir que una función no restrinja a priori el tipo de los argumentos a los que se aplica

Fuente: docs/assets/Paradigma_funcional_parte_2/img19.png [transcrito de imagen, por verificar]

## funcional-b-IMG20

Título del slide: Cond (t, a, b) — Versión 1 / Versión 2

```text
Cond(t,a,b)
Versión 1:
```

MCD(n, m) = { si (m|n): m; en caso contrario: MCD(m, r) }

```text
Versión 2:
```

MCD(n, m) = { si (n mod m = 0): m; en caso contrario: MCD(m, (n mod m)) }

```text
¿Cómo se ven las funciones?
Los lenguajes funcionales suelen tener esta estructura:
```

Fuente: docs/assets/Paradigma_funcional_parte_2/img20.png [transcrito de imagen, por verificar]

## funcional-b-IMG21

Título del slide: ¿Cómo se ve una función en Scheme?

```text
¿Cómo se ve una función en Scheme?
Scheme es un heredero de LISP, que a su vez tiene la sintaxis del cálculo lambda:
```

```scheme
(f a1 a2 ... an)
a + b * c -> (+ a (* b c))
(+ a b (- c))
(5 2 3 0 20) -> (' 5 2 3 0 20)
(car 5 2 10) -> 5
(cdr 5 2 10) -> (2 10) (cdr /kudr/)
(define (f a b c)())
```

[ILEGIBLE: fragmento en edición, se lee "(cdr /kudr/)" con caracteres superpuestos por el cursor]

Fuente: docs/assets/Paradigma_funcional_parte_2/img21.png [transcrito de imagen, por verificar]

## funcional-b-IMG22

Título del slide: [ILEGIBLE: sin título visible, fragmento de código C]

```text
int foo (int a,b);
...
x = foo(5,(3+2));
```

Fuente: docs/assets/Paradigma_funcional_parte_2/img22.png [transcrito de imagen, por verificar]

## funcional-b-IMG23

Título del slide: [ILEGIBLE: sin título visible, fragmento de código C]

```text
int foo (int a,b);
...
x = foo(5,(3+2));
y=3+2;
x=foo(5,y);
```

Fuente: docs/assets/Paradigma_funcional_parte_2/img23.png [transcrito de imagen, por verificar]

## funcional-b-IMG24

Título del slide: [ILEGIBLE: sin título visible, fragmento de código C]

```text
int foo (int a,b);
...
x = foo(5,(3+2));
y=3+2;
x=foo(5,y);
```

Fuente: docs/assets/Paradigma_funcional_parte_2/img24.png [transcrito de imagen, por verificar]

## funcional-b-IMG25

Título del slide: Evaluación perezosa [sic]

.Este término se aplica a un mecanismo computacional que parte de la noción de que una expresión cuyo valor no es usado no debe ser evaluada [sic]. Este concepto tiene que ver con el orden en que una expresión es evaluada [sic].
.El problema fundamental aquí es responder a la pregunta:
¿Cómo se debe evaluar [sic] f(n+k)? (donde n y k son variables)
(Hay tres respuestas diferentes)

Fuente: docs/assets/Paradigma_funcional_parte_2/img25.png [transcrito de imagen, por verificar]

## funcional-b-IMG26

Título del slide: Evaluación [sic] ansiosa [sic] vs evaluación [sic]-en-orden-normal vs evaluación [sic] perezosa [sic] (eager vs normal-order vs lazy eval.)

.Evaluación [sic] ansiosa [sic] (eager) significa que evaluamos [sic] el parámetro actual una vez, en el punto de llamada. En efecto, sustituimos el valor del argumento para cada ocurrencia del parámetro formal.
.Evaluación [sic] en orden normal significa que evaluamos [sic] el parámetro actual solamente cuando el argumento es requerido.

Fuente: docs/assets/Paradigma_funcional_parte_2/img26.png [transcrito de imagen, por verificar]

## funcional-b-IMG27

Título del slide: Un ejemplo aclaratorio

.Consideremos la función

```text
sqr n = n * n
```

donde n es el parámetro formal
.Consideremos la llamada a la función:

```text
sqr (m + 1)
```

y supongamos que el valor de m es 6.

Fuente: docs/assets/Paradigma_funcional_parte_2/img27.png [transcrito de imagen, por verificar]

## funcional-b-IMG28

Título del slide: Con evaluación [sic] ansiosa [sic]

.Primero evaluamos [sic] "m+1" obteniendo 7.
.Luego lo enlazamos al parámetro formal n.
.Finalmente evaluamos [sic] n * n obteniendo 7 x 7 = 49

Fuente: docs/assets/Paradigma_funcional_parte_2/img28.png [transcrito de imagen, por verificar]

## funcional-b-IMG29

Título del slide: Con evaluación [sic] en orden normal.

.Primero ligamos el parámetro formal n a la expresión no evaluada [sic] "m+1".
.Reevaluamos [sic] la expresión cada vez que el valor de n es requerido durante la evaluación [sic] de n * n.
.En este caso, evaluamos [sic] (m+1)*(m+1), lo que se traduciría en (6+1)x(6+1)=49.

Fuente: docs/assets/Paradigma_funcional_parte_2/img29.png [transcrito de imagen, por verificar]

## funcional-b-IMG30

Título del slide: (sin título visible en la imagen)

.En el caso de la función sqr, tanto la evaluación [sic] ansiosa [sic] como la de orden-normal brindan el mismo resultado, siendo la evaluación [sic] ansiosa [sic] más eficiente.
.Sin embargo, el comportamiento de algunas funciones depende fuertemente del orden de evaluación [sic].

Fuente: docs/assets/Paradigma_funcional_parte_2/img30.png [transcrito de imagen, por verificar]

## funcional-b-IMG31

Título del slide: Efectos del orden de evaluación [sic]

.Consideremos la función definida como

```text
cand(b1, b2) = if b1 then b2 else False
```

donde b1 y b2 son parámetros formales.
.Consideremos adicionalmente la llamada

```text
cand ((n > 0), (t/n > 50))
```

Fuente: docs/assets/Paradigma_funcional_parte_2/img31.png [transcrito de imagen, por verificar]

## funcional-b-IMG32

Título del slide: cand ((n > 0), (t/n > 50))

.Primero supongamos que el valor de n es 2 y el de t es 80.
.Evaluación [sic] ansiosa [sic]: "n > 0" produce true y "t/n > 50" produce false.
.Evaluación [sic] en orden normal: En efecto, la evaluación [sic] de la expresión da false también.

Fuente: docs/assets/Paradigma_funcional_parte_2/img32.png [transcrito de imagen, por verificar]

## funcional-b-IMG33

Título del slide: cand ((n > 0), (t/n > 50))

.Ahora supongamos que el valor de n es 0 y el valor de t es 80.
.Evaluación [sic] ansiosa [sic]: "n > 0" resulta en false pero "t/n > 50" falla debido a la división entre cero, entonces la función falla.
.Evaluación [sic] en orden normal: al evaluar [sic] la expresión, reevaluando [sic] hasta que sea necesario, la función se evalúa [sic] sin problemas retornando false.

Fuente: docs/assets/Paradigma_funcional_parte_2/img33.png [transcrito de imagen, por verificar]

## funcional-b-IMG34

Título del slide: Una diferencia esencial

.La función sqr siempre usa su argumento. En cambio, cand tiene una bifurcación condicional que hace que, en ocasiones, ignore el segundo argumento, de manera que la función, en ocasiones, podría ser evaluada [sic] aunque su segundo argumento no lo sea.
.Una función se dice estricta sobre uno de sus argumentos si siempre usa ese argumento.
.En este caso, sqr es estricta respecto a n, pero cand solo es estricta respecto al primero de sus argumentos.

Fuente: docs/assets/Paradigma_funcional_parte_2/img34.png [transcrito de imagen, por verificar]

## funcional-b-IMG35

Título del slide: La propiedad de Church-Rosser

Si una expresión puede ser evaluada [sic], entonces puede ser evaluada [sic] consistentemente usando evaluación [sic] en orden normal.
Si una expresión puede ser evaluada [sic] en órdenes diferentes (mezclando evaluación [sic] ansiosa [sic] y en orden normal), entonces todos estos órdenes de evaluación [sic] brindan el mismo resultado.

Fuente: docs/assets/Paradigma_funcional_parte_2/img35.png [transcrito de imagen, por verificar]

## funcional-b-IMG36

Título del slide: (sin título visible en la imagen)

.Esta es una propiedad que algunos lenguajes de programación tienen (como Haskell) y otros no, como C.
.En general, un lenguaje que tiene funciones con efectos colaterales carece de esta propiedad.
.En C, las funciones de entrada exhiben estos efectos colaterales, por ejemplo, getint.

Fuente: docs/assets/Paradigma_funcional_parte_2/img36.png [transcrito de imagen, por verificar]

## funcional-b-IMG37

Título del slide: Evaluación [sic] perezosa [sic]

.En la práctica, la evaluación [sic] en orden normal es demasiado ineficiente para ser usada en los lenguajes de programación, pues un parámetro podría ser evaluado [sic] varias veces para brindar siempre el mismo resultado.
.Pero este desperdicio es evitable.
.Evaluación [sic] perezosa [sic] significa que evaluamos [sic] el parámetro cuando el argumento es requerido por primera vez, luego el valor es almacenado para su uso cuando se lo vuelva a requerir.

Fuente: docs/assets/Paradigma_funcional_parte_2/img37.png [transcrito de imagen, por verificar]

## funcional-b-IMG38

Título del slide: Cond (t, a, b) — Versión 1 / Versión 2

```text
Cond(t,a,b)
Versión 1:
```

MCD(n, m) = { si (m|n): m; en caso contrario: MCD(m, r) }

```text
Versión 2:
```

MCD(n, m) = { si (n mod m = 0): m; en caso contrario: MCD(m, (n mod m)) }

Fuente: docs/assets/Paradigma_funcional_parte_2/img38.png [transcrito de imagen, por verificar]

## funcional-b-IMG39

Título del slide: Las funciones como descripciones de proceso

.Ya sabemos que la composición de funciones, así como las funciones cuyos resultados dependen de otras funciones, pueden ser usadas para describir el procesamiento secuencial, pero ¿qué pasa con ciclos y con los condicionales (if)?

Fuente: docs/assets/Paradigma_funcional_parte_2/img39.png [transcrito de imagen, por verificar]

## funcional-b-IMG40

Título del slide: Definición de función condicional

Sea f una función en el dominio de los naturales con rango en los naturales

f(x) = { 1 si x = 1; f(3x + 1) si x es impar; f(x/2) si x es par }

(Esta función está asociada a la así llamada "conjetura [sic] de Collatz", para los interesados, la entrada correspondiente de la Wikipedia es una introducción apropiada:
https://en.wikipedia.org/w/index.php?title=Collatz_conjecture&oldid=1041409366 )

Fuente: docs/assets/Paradigma_funcional_parte_2/img40.png [transcrito de imagen, por verificar]

## funcional-b-IMG41

Título del slide: Un caso sencillo

f(n) = { si n = 1: 1; si n es par: f(n/2); en otro caso: f(3n + 1) }

Su versión Haskell es:

```haskell
f :: Integer -> Integer
f n
  | n == 1 = 1
  | n `mod` 2 == 0 = f (n `div` 2)
  | otherwise = f (3 * n + 1)
```

Fuente: docs/assets/Paradigma_funcional_parte_2/img41.png [transcrito de imagen, por verificar]

## funcional-b-IMG42

Título del slide: (sin título visible en la imagen)

.Glasgow Haskell Compiler Intefase [sic]

[ILEGIBLE: logotipo de Haskell como imagen, sin texto adicional]

.https://www.haskell.org/ghc/

Fuente: docs/assets/Paradigma_funcional_parte_2/img42.png [transcrito de imagen, por verificar]

## funcional-b-IMG43

Título del slide: Funciones más generales

.Considérese también la siguiente función:
Sea v = (a1, a2, ..., an), definimos la función M como

M(v, f) = (f(a1), f(a2), ..., f(an))

Fuente: docs/assets/Paradigma_funcional_parte_2/img43.png [transcrito de imagen, por verificar]

## funcional-b-IMG44

Título del slide: (sin título visible en la imagen)

.Si un lenguaje de programación posee la propiedad de Church-Rosser, entonces la evaluación [sic] perezosa [sic] siempre brinda los mismos resultados que la evaluación [sic] en orden normal.
.La evaluación [sic] ansiosa [sic] es adoptada casi universalmente en los lenguajes imperativos y orientados a objetos.
.La evaluación [sic] perezosa [sic] es adoptada por los lenguajes funcionales y por algunas implementaciones de Prolog.

Fuente: docs/assets/Paradigma_funcional_parte_2/img44.png [transcrito de imagen, por verificar]
