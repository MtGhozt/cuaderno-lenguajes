# U3 — Comparaciones

## 1. Scheme vs Haskell

| Aspecto | Scheme | Haskell |
|---|---|---|
| Origen/sintaxis | Heredero de LISP, sintaxis del cálculo lambda: `(f a1 … an)`, notación prefija `(+ a (* b c))`. Fuente: [Transcripción u3-funcional-b, IMG6–IMG7] | Alternativa posterior a Scheme (con CAML); popular. Encabezado con tipos + ecuaciones. Fuente: [Docx Paradigma funcional parte 2] |
| Declaración de función | `(define MCD (lambda (a b) …))`; tipos implícitos, no se declaran. Fuente: [Transcripción u3-funcional-a, IMG3] + [Docx Paradigma funcional parte 2] | `sumaprod :: int -> int -> int -> int` [CÓDIGO DE CLASE, por verificar] + `sumaprod a b c = a+(b*c)`; `->` separa, último es retorno; `=` = retorna. Fuente: [Transcripción u3-funcional-b, IMG13–IMG14] + [Docx Paradigma funcional parte 2] |
| Condicional | `(if (= (remainder a b) 0) b (MCD …))`. Fuente: [Transcripción u3-funcional-a, IMG3] | Guardas `\| … = …` + `otherwise` (≈ else); `==` compara. Fuente: [Docx Paradigma funcional parte 2] |
| Listas | Único compuesto; `quote` para constantes, `car`/`cdr` cabeza/cola. Fuente: [Docx Paradigma funcional parte 2] | Homogéneas (característico de Haskell, no de Scheme); `[]`, `:`, rangos, `String=[Char]`; pattern matching `x:xs`, `_`. Fuente: [Docx Características paradigma funcional] + [Transcripción u3-funcional-a, IMG8–IMG9, IMG12] |
| Tipos numéricos | No se distinguen en el ejemplo de clase. | `Int` 32 bits vs `Integer` precisión indefinida (más lento). Fuente: [Docx Características paradigma funcional] |
| Programa | Definición de funciones + `main` (estructura general). Fuente: [Transcripción u3-funcional-b, IMG5] | `main :: IO()` + `main = print (mcm 5 3)` → `15`. Fuente: [Transcripción u3-funcional-a, IMG7] |
| Legibilidad | Prefija pero "algo ilegible" según clase. Fuente: [Docx Paradigma funcional parte 2] | Encabezado explícito ayuda a leer aridad/tipos. [Explicación pedagógica — elaboración propia] |

## 2. Evaluación ansiosa vs orden-normal vs perezosa

| Aspecto | Ansiosa (eager) | Orden-normal | Perezosa (lazy) |
|---|---|---|---|
| Regla | Evalúa el argumento una vez en la llamada; sustituye el valor. Fuente: [Transcripción u3-funcional-b, IMG26] | Evalúa solo cuando se requiere. Fuente: [Transcripción u3-funcional-b, IMG26] | Evalúa al primer requerimiento y memoriza para reutilizar. Fuente: [Transcripción u3-funcional-b, IMG37] |
| `sqr(m+1)`, m=6 | `7*7=49` (eficiente). Fuente: [Transcripción u3-funcional-b, IMG28] | `(6+1)x(6+1)=49` (doble evaluación). Fuente: [Transcripción u3-funcional-b, IMG29–IMG30] | Igual resultado que orden-normal (con memorización). Fuente: [Transcripción u3-funcional-b, IMG44] |
| `cand((n>0),(t/n>50))`, n=0 | Falla (división por cero). Fuente: [Transcripción u3-funcional-b, IMG33] | Retorna `false` sin evaluar el 2.º. Fuente: [Transcripción u3-funcional-b, IMG33] | Idem orden-normal. Fuente: [Transcripción u3-funcional-b, IMG44] |
| Adopción | Casi universal en imperativos/OO. Fuente: [Transcripción u3-funcional-b, IMG44] | Base teórica (Church-Rosser) pero ineficiente en la práctica. Fuente: [Transcripción u3-funcional-b, IMG37] | Funcionales + algo de Prolog. Fuente: [Transcripción u3-funcional-b, IMG44] + [Notion] |
| Propiedad | — | Church-Rosser: si algo es evaluable, orden-normal lo evalúa consistentemente; mezclas de órdenes dan igual resultado (vale en Haskell, no en C por efectos colaterales). Fuente: [Transcripción u3-funcional-b, IMG35–IMG36] | Con Church-Rosser ≡ orden-normal en resultado. Fuente: [Transcripción u3-funcional-b, IMG44] |

- Estrictez: `sqr` estricta en `n`; `cand` solo en el 1.º. Lazy retrasa no-estrictos. Fuente: [Transcripción u3-funcional-b, IMG34] + [Notion].

## 3. Funcional vs imperativo

| Aspecto | Funcional (clase) | Imperativo (clase) |
|---|---|---|
| Unidad | Función; algoritmo = funciones que se evalúan (finitas veces, recursos finitos). Fuente: [Transcripción u3-funcional-b, IMG15] | Instrucción/asignación; la expresión es componente de la asignación cuyo resultado se almacena. Fuente: [Docx Paradigma funcional parte 2] |
| Variables | Se vuelven constantes; sin asignación típica; memoria dinámica (nodos). Fuente: [Docx Paradigma funcional parte 2] | Espacio en memoria manipulable/punteros (contexto C). Fuente: [Docx Paradigma funcional parte 2] |
| Funciones como argumentos | Normal y permitido (`M(v,f)`, vector+función). Fuente: [Transcripción u3-funcional-b, IMG43] + [Docx Paradigma funcional parte 2] | No permitido directo en C según clase (usar variable intermedia: `y=3+2; x=foo(5,y)`); `foo(5,(3+2))` obliga eager manual. Fuente: [Docx Paradigma funcional parte 2] + [Transcripción u3-funcional-b, IMG22–IMG24] |
| Evaluación | Lazy (lo mejor de ambos mundos vía Church-Rosser). Fuente: [Docx Paradigma funcional parte 2] | Eager obligada manualmente con asignación. Fuente: [Docx Paradigma funcional parte 2] |
| Diseño | Problemas de funciones complicadas (Matemática/Física/Simulación); top-down/bottom-up por dependencia. Fuente: [Transcripción u3-funcional-a, IMG14] | Caso por caso (COBOL/C/Pascal: verbose, inseguros, efectos colaterales, E/S) — contexto, no tema U3. Fuente: [Transcripción u3-funcional-a, IMG1–IMG6] + [Docx Introducción paradigma funcional] |
| Efectos | Sin efectos colaterales → Church-Rosser vale. Fuente: [Transcripción u3-funcional-b, IMG36] | Con efectos (E/S, `getint`, `if ((a=get(f))!=0)`) → sin Church-Rosser. Fuente: [Transcripción u3-funcional-b, IMG36] + [Transcripción u3-funcional-a, IMG5] |
