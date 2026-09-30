# U3 — Repaso (resumen + errores + autoevaluación)

## 1. Resumen de la unidad (una página)

- **Idea central:** programar = definir y aplicar funciones; el mcm/MCD se expresa como `mcm(n,m)=(n×m)/MCD(n,m)` con MCD recursiva a trozos. Fuente: [Transcripción u3-funcional-b, IMG1–IMG2].
- **Scheme (solo Scheme):** `(f a1…an)`, prefija `(+ a (* b c))`, `define`+`lambda`, árbol de expresión, variables-constantes sin asignación, `quote`/`car`/`cdr`. Fuente: [Transcripción u3-funcional-b, IMG6–IMG11] + [Docx Paradigma funcional parte 2].
- **Haskell (solo Haskell):** encabezado `f :: T1 -> … -> R`, `=` = retorna, guardas `|` + `otherwise`, `Int` vs `Integer`, `main :: IO()`, listas homogéneas `[Char]=String`, `:`/`[]`, pattern matching `x:xs`/`_`, `hailstoneSeq`, `intListLength`, `hailstoneLen` (lazy entrelaza generación y medición). Fuente: [Transcripción u3-funcional-a, IMG6–IMG13] + [Docx Características paradigma funcional].
- **Orden superior y polimorfismo:** funciones de primera clase, `M(v,f)` aplica f a cada elemento; polimorfismo = no restringir tipos a priori. Fuente: [Transcripción u3-funcional-b, IMG18–IMG19, IMG43].
- **Evaluación:** eager (una vez en llamada) vs orden-normal (al requerirse) vs lazy (al primer uso + memoriza); `sqr` (mismo resultado, eager más eficiente) vs `cand` (n=0: eager falla por `/0`, orden-normal da `false`); estrictez; Church-Rosser (Haskell sí, C no); lazy en funcionales/ Prolog parcial, eager en imperativos/OO. Fuente: [Transcripción u3-funcional-b, IMG25–IMG37, IMG44] + [Notion].

## 2. Errores frecuentes (con fuente)

1. Mezclar sintaxis: usar `define`/`car` en Haskell o guardas `|` en Scheme. (Scheme: [Transcripción u3-funcional-a, IMG3]; Haskell: [Transcripción u3-funcional-a, IMG6]).
2. Leer `=` como asignación en Haskell (es "retorna"); comparar con `==`. Fuente: [Docx Paradigma funcional parte 2].
3. Creer que `Int` = `Integer` (32 bits vs precisión indefinida). Fuente: [Docx Características paradigma funcional].
4. Olvidar homogeneidad de listas en Haskell. Fuente: [Docx Características paradigma funcional].
5. Confundir `x:xs` (agrega al inicio; cabeza `x`, cola `xs`) con agregado al final. Fuente: [Docx Características paradigma funcional].
6. Pensar que `hailstoneLen` genera toda la lista antes de medir (ignorar lazy). Fuente: [Transcripción u3-funcional-a, IMG13].
7. Afirmar que orden-normal siempre es más eficiente (en `sqr` evalúa dos veces). Fuente: [Transcripción u3-funcional-b, IMG30].
8. Ignorar que `cand` no es estricta en el 2.º argumento y predecir fallo con n=0 en lazy. Fuente: [Transcripción u3-funcional-b, IMG33–IMG34].
9. Usar `/` en vez de `` `div` `` con `Int` en `mcm`. [CÓDIGO DE CLASE, por verificar]. Fuente: [Transcripción u3-funcional-a, IMG5–IMG6].
10. Tratar la variable funcional como celda reasignable. Fuente: [Docx Paradigma funcional parte 2].

## 3. Autoevaluación (8, con respuestas)

**A1. Convierte `a+b*c` a prefija y explica el árbol.** Respuesta: `(+ a (* b c))`; primero `(* b c)` se reduce y luego se suma. Fuente: [Transcripción u3-funcional-b, IMG7] + [Docx Características paradigma funcional].

**A2. ¿Qué hacen `quote`, `car`, `cdr`?** Respuesta: `quote` cita literal (constante); `car` cabeza; `cdr` cola. Fuente: [Docx Paradigma funcional parte 2].

**A3. Escribe el encabezado `sumaprod` de clase y qué significa `->`.** Respuesta: `sumaprod :: int -> int -> int -> int` [CÓDIGO DE CLASE, por verificar] (`int` minúscula sospechosa); `->` separa argumentos, el último es el retorno. Fuente: [Transcripción u3-funcional-b, IMG13] + [Docx Paradigma funcional parte 2].

**A4. Da `hailstoneSeq` y explica por qué no lleva condicional para el 1.** Respuesta: `hailstoneSeq 1=[1]; hailstoneSeq n = n:hailstoneSeq (hailstone n)`; el caso se pone directo (pattern matching). Fuente: [Transcripción u3-funcional-a, IMG10] + [Docx Características paradigma funcional].

**A5. Traza `cand((n>0),(t/n>50))` con n=0 en eager y orden-normal.** Respuesta: eager falla (división por cero); orden-normal → `false`. Fuente: [Transcripción u3-funcional-b, IMG33].

**A6. Define función estricta y clasifica `sqr` y `cand`.** Respuesta: estricta = siempre usa el argumento; `sqr` estricta en `n`, `cand` solo en el 1.º. Fuente: [Transcripción u3-funcional-b, IMG34].

**A7. Enuncia Church-Rosser y di quién la tiene.** Respuesta: si algo es evaluable, orden-normal lo evalúa consistentemente; mezclas de órdenes dan igual resultado; Haskell sí, C no (efectos colaterales). Fuente: [Transcripción u3-funcional-b, IMG35–IMG36].

**A8. ¿Por qué `M(v,f)` es de orden superior y qué tiene que ver con imperativo?** Respuesta: toma función como argumento y la aplica a cada elemento del vector; en C de clase eso no está permitido directo (hay que usar variable intermedia). Fuente: [Transcripción u3-funcional-b, IMG43] + [Docx Paradigma funcional parte 2].

## 4. Lista [POR-VERIFICAR] de la unidad

- Trazo "η" vs "n" en IMG15; Proy cortada en IMG2; líneas tapadas por menú Word (IMG2/IMG5). Fuente: [Transcripción u3-funcional-a, IMG15] + [Transcripción u3-funcional-b, IMG2] + [Transcripción u3-funcional-a, IMG2, IMG5].
- `(cdr /kudr/)`, `(define (f a b c)())`, `(car/cdr 5 2 10)` sin quote, `(+ a b -c)` vs `(+ a b (- c))`. Fuente: [Transcripción u3-funcional-b, IMG10–IMG11, IMG21].
- `sumaprod :: int…` (minúscula), `mcm` con `/` vs `` `div` ``, `mcd n m` cruzado, `intListLength` con "Calcula de longitud" [sic]. Fuente: [Transcripción u3-funcional-b, IMG13–IMG14] + [Transcripción u3-funcional-a, IMG5–IMG6, IMG12].
- Analogía Smalltalk Number/Amount y jerarquía Int/Float; interpretación Goldbach de la lista de primos. Fuente: [Docx Paradigma funcional parte 2] + [Transcripción u3-funcional-a, IMG7].
