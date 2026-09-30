# Semana_6_Clase_1.md

## Temas (lista de titulares de cada sección con 1 línea descriptiva)
- 1. Crítica Rigurosa a los Límites del Paradigma Imperativo: análisis de fallas estructurales del modelo Von Neumann para software a gran escala.
- 1.1 El Caso de COBOL: Rigidez Estructural y Deuda Técnica: monolitismo de 4 divisiones, sin datos dinámicos, verbosidad y legacy bancario.
- 1.2 El Caso del Lenguaje C: Vulnerabilidades de Memoria y Efectos Colaterales: punteros, buffer overflow, heap corruption y pérdida de determinismo.
- 2. Fundamentos Matemáticos del Paradigma Funcional: construcción sobre matemáticas formales y Cálculo Lambda de Alonzo Church (1936).
- 2.1 Definición Conjuntista Formal de Función: función como relación binaria unívoca entre dominio X y codominio Y.
- 2.2 Las Tres Propiedades Esenciales de la Función Pura: determinismo, ausencia de efectos secundarios y transparencia referencial.
- 3. Modelado Matemático de Algoritmos: MCD y mcm: formulación funcional recursiva por casos del Algoritmo de Euclides.
- 3.1 Teorema de la División Entera de Euclides: existencia de únicos q y r tales que n = q·m + r.
- 3.2 Lema Fundamental del Algoritmo de Euclides: igualdad de divisores comunes y de gcd(n,m) = gcd(m,r).
- 3.3 Definición Matemática Funcional Recursiva: función MCD por partes con demostración de terminación por buen orden de N.
- 3.4 Derivación del Mínimo Común Múltiplo (mcm): despeje de mcm a partir de a·b = gcd·lcm.
- 4. Material Extra de Refuerzo para el Examen: traza, complejidad y preguntas de autoevaluación.
- 4.1 Traza Matemática Paso a Paso del Algoritmo de Euclides: cálculo de MCD(252,105) y mcm(252,105).
- 4.2 Complejidad Algorítmica y Teorema de Lamé (1844): cota de pasos y peor caso con Fibonacci.
- 4.3 Banco de Preguntas de Autoevaluación: 3 pares pregunta-respuesta sobre concurrencia, memoización y buffer overflow.

## Conceptos con LaTeX (lista cada fórmula/definición formal: qué dice, en palabras)
- $5\times$ a $10\times$: dice que COBOL multiplica por 5 a 10 veces el volumen de líneas respecto a lenguaje moderno para misma lógica.
- $EBP/RBP$ y $RIP$: dice que el desbordamiento sobrescribe el registro base y la dirección de retorno.
- $a + a = 2a$: dice que en matemáticas se cumple, pero deja de cumplirse en imperativo si la evaluación altera el estado.
- $\lambda$-calculus, 1936: dice que el paradigma funcional se edifica sobre el Cálculo Lambda desarrollado por Alonzo Church en 1936.
- $f \subseteq X \times Y$: dice que una función f es una relación binaria subconjunto del producto cartesiano de X e Y.
- $\forall x \in X, \quad \exists! y \in Y \quad \text{tal que} \quad (x, y) \in f$: dice que para cada x en X existe un único y en Y tal que el par está en f.
- $f(x) = y$: dice la notación equivalente de la correspondencia unívoca.
- $\forall x_1, x_2 \in X : x_1 = x_2 \implies f(x_1) = f(x_2)$: dice que una función pura produce misma salida ante mismos argumentos.
- $P[E] \equiv P[v], \quad \text{donde } v = \text{eval}(E)$: dice que una expresión E puede reemplazarse por su valor v sin alterar el programa.
- $f(2) = 4$, $y = f(2) + f(2) = 4 + 4 = 8$: dice el ejemplo de equivalencia por transparencia referencial.
- $n = q \cdot m + r, \quad \text{con } 0 \le r < m$: dice el Teorema de la División Entera para n,m en Z+ con m>0, con q cociente y r residuo únicos.
- $\gcd(n, m) = \gcd(m, r)$: dice que si n = q·m + r, los divisores comunes son idénticos y los gcd son iguales.
- $$MCD(n, m) = \begin{cases} m & \text{si } (n = q \cdot m + r) \land (r = 0) \\ MCD(m, r) & \text{en caso contrario (donde } r = n \pmod m \text{)} \end{cases}$$: dice la definición funcional recursiva por partes del MCD.
- $0 \le r < m$: dice que en cada llamada recursiva MCD(m,r) el nuevo segundo argumento está acotado.
- $m > r_1 > r_2 > \dots \ge 0$: dice que los residuos forman sucesión estrictamente decreciente de naturales.
- $r_k = 0$: dice que en número finito de pasos se alcanza el caso base por buen orden de N.
- $a \cdot b = \gcd(a, b) \cdot \text{lcm}(a, b)$: dice el Teorema Fundamental de la Aritmética relacionando producto con gcd y lcm.
- $$mcm(a, b) = \frac{|a \cdot b|}{MCD(a, b)}$$: dice el despeje del Mínimo Común Múltiplo.
- $MCD(252, 105) = 21$: dice el resultado de la traza del ejemplo.
- $252 = 2 \cdot 105 + 42$, $105 = 2 \cdot 42 + 21$, $42 = 2 \cdot 21 + 0$: dice los tres pasos de división de la traza.
- $$mcm(252, 105) = \frac{252 \cdot 105}{21} = 252 \cdot 5 = 1260$$: dice el cálculo del mcm del ejemplo.
- $\mathcal{O}(\log(\min(n, m)))$: dice la complejidad asintótica del Algoritmo de Euclides.
- $F_{k+1}$ y $F_k$, $$F_{k+1} = 1 \cdot F_k + F_{k-1}$$: dice que el peor caso ocurre con dos Fibonacci consecutivos con cociente q=1.

## Diagramas Mermaid (por cada uno: tipo + qué nodos/relaciones muestra, en palabras)
- graph TD: nodo Paradigma Imperativo Tradicional ramificado a Límites Estructurales de COBOL y Vulnerabilidades Críticas de C; COBOL a rigidez monolítica, incapacidad dinámica y verbosidad; C a aritmética de punteros, buffer overflow y side effects/estado mutable.
- flowchart TD: nodo Modelo Matemático Funcional ramificado a 4 principios: 1. Función Matemática Pura (f: X ➔ Y), 2. Ausencia de Estado Mutable, 3. Transparencia Referencial, 4. Funciones como Ciudadanos de Primera Clase.
- flowchart TD: nodo MCD(n,m) a Calcular residuo r = n mod m, a decisión ¿r == 0?; rama Sí a Caso Base Retornar m; rama No a Caso Recursivo Evaluar MCD(m,r) con retorno al cálculo de residuo.

## Banco de preguntas (transcribe ÍNTEGRO cada par pregunta-respuesta del material extra)
1. **¿Por qué la ausencia de efectos secundarios (*side effects*) simplifica radicalmente la concurrencia y el paralelismo?**
   * *Respuesta:* Porque las condiciones de carrera (*race conditions*) y los interbloqueos (*deadlocks*) ocurren exclusivamente cuando múltiples hilos intentan leer y mutar simultáneamente la misma región de memoria compartida. Al no existir estados mutables en el paradigma funcional puro, cualquier cantidad de hilos puede evaluar expresiones en paralelo sin necesidad de primitivas de sincronización costosas como *mutexes* o semáforos.

2. **¿Qué relación existe entre la transparencia referencial y la técnica de optimización denominada *Memoización*?**
   * *Respuesta:* La memoización consiste en almacenar en una tabla de consulta los resultados previamente calculados de una función para no recomputarlos en llamadas futuras. Esto es estrictamente válido y seguro únicamente si la función goza de transparencia referencial; de lo contrario, una llamada futura podría requerir un valor distinto debido a cambios en el estado global.

3. **¿Cuál es la causa técnica de que un *Buffer Overflow* permita la ejecución arbitraria de código en C?**
   * *Respuesta:* En la arquitectura x86/ARM estándar, las variables locales y la dirección de retorno de la función residen en el mismo bloque contiguo de la pila (*stack frame*). Al escribir datos que sobrepasen el tamaño del arreglo local sin control de límites, los bytes excedentes sobreescriben la dirección de retorno, permitiendo que al retornar la función (`RET`), el procesador salte a la dirección inyectada por el atacante.

## Ejercicios resueltos (describe el problema y la solución dada, con el código si lo hay)
- Problema: calcular $MCD(252, 105)$ y $mcm(252, 105)$ paso a paso. Solución dada: Paso 1 n=252,m=105, 252=2·105+42 r=42≠0 → MCD(105,42); Paso 2 105=2·42+21 r=21≠0 → MCD(42,21); Paso 3 42=2·21+0 r=0 → retorna m=21. Resultado MCD=21 y mcm=252·105/21=1260. Sin código, solo traza matemática.
- Código ilustrativo de función insegura (no es ejercicio con enunciado, pero dado como ejemplo):
```c
void funcion_insegura(char *entrada) {
    char buffer[16];
    // Si 'entrada' mide más de 16 bytes, se sobrescribe la pila (call stack)
    strcpy(buffer, entrada); 
}
```
Solución/explicación dada: sobrescribe EBP/RBP y RIP permitiendo redirigir a shellcode.
- Código ilustrativo de efecto colateral (no es ejercicio con enunciado, pero dado como ejemplo):
```c
int estado_global = 10;
int f(int x) {
    estado_global += x;  // Efecto colateral: muta un estado externo
    return estado_global * 2;
}
// En una expresión como:
int resultado = f(5) + f(5);
```
Solución/explicación dada: según orden de evaluación del compilador genera resultados inconsistentes; $a+a=2a$ deja de cumplirse.

## Posibles conflictos (afirmaciones que suenen absolutas, cifras, o que contradigan conocimiento estándar; márcalas [REVISAR])
- COBOL clásico carece de soporte nativo para árboles binarios dinámicos, listas enlazadas en heap, grafos [REVISAR].
- Filosofía de parecer inglés multiplica por $5\times$ a $10\times$ líneas respecto a lenguaje moderno [REVISAR].
- Banca mundial procesa billones de dólares diarios sobre COBOL de años 70 y 80; jubilación masiva encareció exponencialmente mantenimiento, riesgo sistémico [REVISAR].
- C no realiza bounds checking en arreglos ni punteros por razones de rendimiento bruto [REVISAR].
- Escritura más allá sobrescribe $EBP/RBP$ y $RIP$ permitiendo redirigir a shellcode [REVISAR].
- Race conditions y deadlocks ocurren exclusivamente cuando múltiples hilos leen y mutan misma memoria compartida [REVISAR].
- Cualquier cantidad de hilos puede evaluar en paralelo sin mutexes o semáforos [REVISAR].
- Transparencia referencial posibilita memoización, vectorización y ejecución paralela masiva libre de locks [REVISAR].
- Teorema de Lamé: nunca supera 5 veces el número de dígitos decimales de m [REVISAR].
- Peor caso ocurre cuando n y m son dos Fibonacci consecutivos con q=1 siempre [REVISAR].

## Cobertura (¿de qué unidad IC-4700 es: U1/U2/U3/U4? ¿cubre clases o temas ausentes en otras fuentes?)
- Unidad: U2 (Paradigma Funcional: fundamentos matemáticos, función pura, MCD/mcm funcional). Roce con U1 (crítica a imperativo: COBOL, C, Von Neumann).
- Cubre: crítica estructurada a COBOL y C con memoria/stack/heap, definición conjuntista, determinismo, transparencia referencial, Euclides con prueba de terminación, fórmula mcm, traza 252/105, Lamé/Fibonacci y banco de 3 preguntas.

# Semana_6_Clase_2.md

## Temas (lista de titulares de cada sección con 1 línea descriptiva)
- 1. Teoría de la Computabilidad y Funciones Primitivas Recursivas: conexión con Gödel y Kleene años 1930.
- 1.1 Las Tres Funciones Iniciales Primitivas: cero, sucesor y proyección sobre N.
- 1.2 Operadores de Construcción: composición, recursión primitiva y condicional pura.
- 2. Arquitectura de un Programa Funcional vs. Imperativo: Von Neumann mutante frente a reducción funcional.
- 3. Sintaxis y Notación Comparativa: Scheme vs. Haskell: S-expresiones prefijas frente a Hindley-Milner y currying.
- 3.1 Scheme: Minimalismo y Expresiones S: operador y args en paréntesis, sin distinción operador/función.
- 3.2 Haskell: Notación Hindley-Milner y Currificación: firmas ::, flechas ->, aplicación parcial.
- 4. Mecanismos y Estrategias de Evaluación: cuándo se evalúan los argumentos.
- 4.1 Evaluación Ansiosa (Call-by-Value): evalúa args antes de entrar al cuerpo; predecible pero desperdicia cómputo no usado.
- 4.2 Evaluación Normal (Call-by-Name): sustitución textual sin evaluar; redundante si aparece k veces.
- 4.3 Evaluación Perezosa (Lazy / Call-by-Need): solo al demandarse, con thunks y memoización; permite infinitos.
- 5. Transformación de Constructos Imperativos a Funcionales: desterrar patrones mentales imperativos.
- 5.1 Eliminación de Bucles → Recursión de Cola: factorial C con for frente a factAux Haskell con acumulador y TCO.
- 5.2 Eliminación de Condicionales → Guardas y Pattern Matching: signo con guardas y describirLista con patrones.
- 6. Material Extra de Refuerzo para el Examen: traza perezosa y banco.
- 6.1 Traza de Evaluación Perezosa con Expresiones Condicionales: constante 5 (loopInfinito 1) ansiosa vs perezosa.
- 6.2 Banco de Preguntas de Autoevaluación: 4 pares sobre proyección, currying, name vs need y TCO.

## Conceptos con LaTeX (lista cada fórmula/definición formal: qué dice, en palabras)
- $\mathbb{N}$: dice que la computación computable parte de funciones sobre los naturales.
- $Z(x) = 0, \quad \forall x \in \mathbb{N}$: dice que la Función Cero mapea cualquier argumento al neutro aditivo.
- $S(x) = x + 1, \quad \forall x \in \mathbb{N}$: dice que la Función Sucesor genera el siguiente natural de Peano.
- $\text{Proy}_k^n(x_1, \dots, x_n) = x_k, \quad 1 \le k \le n$ (también $\pi_k^n$): dice que retorna el k-ésimo componente descartando demás.
- $h(x) = f(g_1(x), g_2(x), \dots, g_m(x))$: dice la forma de Composición.
- $$\begin{aligned} f(0, \vec{y}) &= g(\vec{y}) \\ f(S(x), \vec{y}) &= h(x, f(x, \vec{y}), \vec{y}) \end{aligned}$$: dice el Esquema de Recursión Primitiva con caso base y paso.
- $$\text{Cond}(b, t, e) = \begin{cases} t & \text{si } b = 1 \\ e & \text{si } b = 0 \end{cases}$$: dice que la condición es función pura que mapea booleano a una de dos expresiones.
- $(operador \quad arg_1 \quad arg_2 \dots arg_n)$: dice la forma prefija entre paréntesis de Scheme.
- $f :: A \to B \to C \quad \Longleftrightarrow \quad f :: A \to (B \to C)$: dice que función de n parámetros es cadena de funciones de un argumento.
- $n$ parámetros como cadena de un solo argumento: dice el concepto de Currificación nombrado por Haskell Curry.
- $k$ veces / $k$ distintas: dice que en Call-by-Name si el argumento aparece k veces se evalúa k veces.
- $2^{1000}$ / thunk a valor: dice el ejemplo de nodo Thunk antes y valor después (1071508607...).
- $[1..]$, $[2,4..]$, `take 10 enteros` → $[1..10]$: dice listas infinitas y consumo acotado.
- $\mathcal{O}(n)$ en memoria: dice el costo de pila de recursión ordinaria.
- $\mathcal{O}(1)$ constante: dice el costo espacial con recursión de cola y salto JMP.
- `fact n = n * fact (n - 1)` frente a `factAux (k-1) (k*acc)`: dice la diferencia entre recursión ordinaria pendiente y cola pura.
- `constante a b = a + 10`, `constante 5 (loopInfinito 1)`, `loopInfinito x = loopInfinito (x+1)`, `5+10=15`: dice la traza de evaluación perezosa del extra.

## Diagramas Mermaid (por cada uno: tipo + qué nodos/relaciones muestra, en palabras)
- flowchart TD con dos subgrafos: Funciones Iniciales Primitivas (Cero Z(x)=0, Sucesor S(x)=x+1, Proyección) y Operadores de Construcción (Composición, Recursión Primitiva, Minimización μ); flecha de base a operadores y a Funciones Computables Totales y Parciales (Turing-Completitud).
- flowchart TD con dos subgrafos: Arquitectura Imperativa (Estado M0 → Instrucción 1 → M1 → Instrucción 2 → Mn con efecto) y Arquitectura Funcional Pura (Entrada x → f(x) → intermedio inmutable y → g(y) → salida z=g(f(x))).
- flowchart TD: nodo Estrategias de Evaluación ramificado a 1. Call-by-Value (ansiosa), 2. Call-by-Name (normal), 3. Call-by-Need (perezosa); cada una a su descripción (C/Java/Scheme ansiosa; sustitución textual ineficiente; thunk/grafo Haskell).

## Banco de preguntas (transcribe ÍNTEGRO cada par pregunta-respuesta del material extra)
1. **¿Qué son las funciones de proyección ($\text{Proy}_k^n$) en la teoría de funciones primitivas recursivas y cuál es su utilidad práctica en lenguajes de programación?**
   * *Respuesta:* Son funciones base de la teoría de Kleene que toman una $n$-tupla de argumentos y retornan exclusivamente el $k$-ésimo componente ($\text{Proy}_k^n(x_1, \dots, x_n) = x_k$). En la teoría de lenguajes de programación, modelan la capacidad de una función o procedimiento para seleccionar y acceder a parámetros formales específicos descartando los restantes.

2. **¿Por qué la Currificación (*Currying*) hace que todas las funciones en Haskell sean tratadas formalmente como funciones de un solo parámetro?**
   * *Respuesta:* Porque la sintaxis de tipos $A \to B \to C$ se asocia formalmente como $A \to (B \to C)$. Al recibir el primer argumento de tipo $A$, la función no retorna el resultado final, sino que retorna una **nueva función intermedia** que espera un argumento de tipo $B$ para producir el resultado de tipo $C$.

3. **¿Cuál es la diferencia fundamental entre la evaluación por nombre (*Call-by-Name*) y la evaluación perezosa (*Call-by-Need*)?**
   * *Respuesta:* Ambas postergan la evaluación de los argumentos hasta que su valor sea demandado. Sin embargo, *Call-by-Name* re-evalúa la expresión cada vez que su identificador se utiliza dentro del cuerpo, mientras que *Call-by-Need* memoriza el resultado calculado en un grafo compartido (*thunk*), garantizando que la expresión se evalúe como máximo una sola vez.

4. **¿Qué condición estricta debe cumplir una función recursiva para que el compilador pueda aplicar la Optimización de Llamada de Cola (TCO)?**
   * *Respuesta:* La llamada recursiva debe ser la última operación evaluada en la rama de ejecución. No puede haber ninguna operación matemática, lógica o compositiva pendiente después del retorno de dicha llamada (por ejemplo, en `n * fact(n-1)`, la multiplicación impide la TCO porque se ejecuta después de la llamada recursiva).

## Ejercicios resueltos (describe el problema y la solución dada, con el código si lo hay)
- Problema: definir sumaprod en Scheme y Haskell. Solución dada:
```scheme
; Definición formal de función con parámetros
(define (sumaprod a b c)
  (+ (* a b) c))
```
```haskell
sumaprod :: Int -> Int -> Int -> Int
sumaprod a b c = (a * b) + c
```
- Problema: ilustrar aplicación parcial por currying. Solución dada:
```haskell
duplicar :: Int -> Int
duplicar = (*) 2    -- Aplicación parcial de la función multiplicación
```
- Problema: definir listas infinitas y consumir acotado. Solución dada:
```haskell
enteros = [1..]          -- Lista infinita de los números naturales: 1, 2, 3, ...
pares   = [2, 4..]       -- Lista infinita de números pares
primerosDiez = take 10 enteros  -- Produce [1,2,3,4,5,6,7,8,9,10] y SE DETIENE
```
Explicación dada: solo se calculan elementos que take demanda.
- Problema: transformar factorial iterativo a recursión de cola. Solución dada: bucle C frente a Haskell:
```c
int factorial(int n) {
    int acc = 1;
    for (int i = 1; i <= n; i++) {
        acc = acc * i;
    }
    return acc;
}
```
```haskell
factorial :: Integer -> Integer
factorial n = factAux n 1
  where
    factAux 0 acc = acc
    factAux k acc = factAux (k - 1) (k * acc)  -- Llamada recursiva en posición de cola pura
```
Explicación dada: TCO reutiliza marco con JMP, O(1) como while en ensamblador.
- Problema: signo y describirLista con guardas/pattern matching. Solución dada:
```haskell
signo :: (Num a, Ord a) => a -> String
signo x
  | x > 0     = "Positivo"
  | x < 0     = "Negativo"
  | otherwise = "Cero"
describirLista :: [a] -> String
describirLista []      = "Lista completamente vacía"
describirLista [x]     = "Lista de un único elemento"
describirLista (x:xs)  = "Lista con cabeza y resto"
```
- Problema (6.1): predecir `constante 5 (loopInfinito 1)` donde `constante a b = a + 10` y `loopInfinito x = loopInfinito (x+1)`. Solución dada:
```haskell
constante :: Int -> Int -> Int
constante a b = a + 10
```
Bajo ansiosa se cuelga evaluando loopInfinito; bajo perezosa ignora thunk de b y evalúa 5+10=15 con éxito.

## Posibles conflictos (afirmaciones que suenen absolutas, cifras, o que contradigan conocimiento estándar; márcalas [REVISAR])
- Conecta con fundamentos de Gödel y Kleene en década de 1930 [REVISAR].
- Toda computación sobre N parte exclusivamente de tres funciones elementales [REVISAR].
- Condición se modela como función pura en lugar de bifurcación de flujo en CPU [REVISAR].
- Estándar en C, Java, Scheme para Call-by-Value [REVISAR].
- Sustitución textual se evalúa cada vez; ineficiente si se repite [REVISAR].
- Estándar en Haskell para Call-by-Need [REVISAR].
- Resultado se sobrescribe en mismo nodo (memoización implícita) [REVISAR].
- Programa jamás se congela ni agota RAM porque solo calcula lo demandado por take [REVISAR].
- Ninguna función en Haskell toma más de un argumento [REVISAR].
- Recursión ordinaria obliga a apilar marco por llamada O(n); cola logra O(1) idéntico a while en ensamblador con JMP [REVISAR].
- Bajo ansiosa programa se cuelga y jamás ejecuta constante [REVISAR].
- Bajo perezosa thunk ignorado por completo, termina exitosamente con 15 [REVISAR].

## Cobertura (¿de qué unidad IC-4700 es: U1/U2/U3/U4? ¿cubre clases o temas ausentes en otras fuentes?)
- Unidad: U2 (Paradigma Funcional: computabilidad, Scheme/Haskell, evaluación, recursión de cola).
- Cubre: Kleene (cero/sucesor/proyección, composición/recursión/μ), tabla imperativo vs funcional, Scheme prefijo, currying y aplicación parcial, CBV/CBN/CBNd con thunks, infinitos con take, factorial con TCO, guardas/pattern matching y traza constante/loopInfinito.

# Semana_7_Clase_2.md

## Temas (lista de titulares de cada sección con 1 línea descriptiva)
- 1. Estudio Práctico Comparativo: MCD y mcm en 4 Lenguajes: Euclides en Pascal, C, Scheme y Haskell.
- 1.1 Implementación en Pascal: tipado rígido, begin/end, var y while mutable con :=.
- 1.2 Implementación en C: llaves, % , return y variante por referencia con int*.
- 1.3 Implementación en Scheme: recursión pura, prefijo, define/if, demo en chrispyles.io.
- 1.4 Implementación en Haskell: firmas ::, guardas |, mod infijo e inmutabilidad.
- 1.5 Matriz Comparativa Técnica: paradigma, tipos, memoria, control, evaluación y estado.
- 2. Estructuras de Datos en Haskell: Listas y Cadenas: la lista como estructura primordial.
- 2.1 Definición y Operadores Primitivos: cons :, head, tail, null, ++ con costos.
- 2.2 Generación por Rangos Aritméticos: [1..10], [2,4..20], [10,9..1].
- 2.3 Listas Infinitas y Evaluación Perezosa: [1..], repeat, cycle con take.
- 2.4 Cadenas (String): alias de [Char] con funciones de listas aplicables.
- 3. Conjetura de Collatz (Hailstone) en Haskell: problema no resuelto de 1937 formulado e implementado.
- 3.1 Formulación Matemática: función por casos n/2 si par, 3n+1 si impar, postulado de llegar a 1.
- 3.2 Implementación Modular en Haskell: hailstone y hailstoneSeq recursiva hasta 1.
- 3.3 Traza Completa para n=6: 9 pasos hasta [6,3,10,5,16,8,4,2,1].
- 4. Simulación Computacional y Ciencias Físicas: discretización, energía y precisión numérica con Veritasium.
- 5. Material Extra de Refuerzo para el Examen: orden superior, ejercicio y banco.
- 5.1 Funciones de Orden Superior sobre Listas: map, filter, foldr/foldl con ejemplos.
- 5.2 Ejercicio Práctico: paresHailstone con filter even sobre hailstoneSeq.
- 5.3 Banco de Preguntas de Autoevaluación: 3 pares sobre TCO en Scheme, String=[Char] y backticks.

## Conceptos con LaTeX (lista cada fórmula/definición formal: qué dice, en palabras)
- $MCD$ y $mcm$: dice el problema matemático implementado en 4 lenguajes.
- $48 = 2 \cdot 18 + 12$ (residuo 12): dice el paso 1 de la traza Scheme.
- $18 = 1 \cdot 12 + 6$ (residuo 6): dice el paso 2 de la traza Scheme.
- $12 = 2 \cdot 6 + 0$ (residuo 0): dice el paso 3 con caso base 6.
- $\mathcal{O}(1)$: dice el costo espacial con TCO y el costo de cons : en cabeza.
- $\mathcal{O}(n)$: dice el costo de concatenación ++.
- $$\begin{aligned} \text{mcd } 48 \ 18 &\implies 48 \text{ `mod` } 18 = 12 \neq 0 \implies \text{otherwise} \implies \text{mcd } 18 \ (48 \text{ `mod` } 18) \\ &\implies \text{mcd } 18 \ 12 \\ &\implies 18 \text{ `mod` } 12 = 6 \neq 0 \implies \text{otherwise} \implies \text{mcd } 12 \ (18 \text{ `mod` } 12) \\ &\implies \text{mcd } 12 \ 6 \\ &\implies 12 \text{ `mod` } 6 = 0 \implies \text{Guarda Cumplida!} \implies 6 \end{aligned}$$: dice la reducción funcional Haskell hasta 6.
- $n \in \mathbb{Z}^+$: dice que Collatz parte de entero positivo inicial.
- $$f(n) = \begin{cases} \frac{n}{2} & \text{si } n \equiv 0 \pmod 2 \\ 3n + 1 & \text{si } n \equiv 1 \pmod 2 \end{cases}$$: dice la formulación de Collatz par/impar.
- $n=6$ a $[6,3,10,5,16,8,4,2,1]$, longitud 9 y altura máxima 16: dice la traza y métricas del ejemplo.
- $\Delta t$, $$\frac{d^2 x}{dt^2} = \frac{F}{m}$$: dice que física teórica usa ecuaciones diferenciales continuas.
- $v(t + \Delta t) = v(t) + a(t)\Delta t$: dice la discretización de velocidad.
- $x(t + \Delta t) = x(t) + v(t)\Delta t$: dice la discretización de posición.
- $e < 1$: dice el coeficiente de restitución de pelota rebotando con disipación.
- $n$ en `paresHailstone :: Integer -> [Integer]`: dice la firma del ejercicio de filtrado.

## Diagramas Mermaid (por cada uno: tipo + qué nodos/relaciones muestra, en palabras)
- flowchart TD: nodo Problema MCD(a,b) y mcm(a,b) ramificado a 4 lenguajes (Pascal procedural, C con punteros, Scheme funcional dinámico, Haskell funcional estático); cada uno a su rasgo (while/:=, %/int*, recursión/define/if, ::/currying/guardas).
- flowchart LR con subgrafo: Estructura de Lista [1,2,3] como cadena de Nodos Cons (:) cada uno a Cabeza (1,2,3) y al siguiente nodo, terminando en Lista Vacía [].
- flowchart TD: nodo Número n a decisión ¿Es n par?; rama Sí a n/2, rama No a 3n+1; ambas a Continuar secuencia, a decisión ¿n==1?; Sí a Fin (Ciclo 4-2-1), No de vuelta a ¿Es n par?.

## Banco de preguntas (transcribe ÍNTEGRO cada par pregunta-respuesta del material extra)
1. **¿Por qué la función `(mcd a b)` en Scheme no desborda la pila de llamadas al procesar números que requieren cientos de divisiones recursivas?**
   * *Respuesta:* Porque la llamada recursiva `(mcd b (remainder a b))` se ubica en la posición de cola (*tail position*). Por especificación del estándar IEEE de Scheme, el intérprete está obligado a aplicar la Optimización de Llamada de Cola (TCO), reutilizando el marco de ejecución actual en lugar de asignar memoria en la pila para cada paso.

2. **¿Qué implicación tiene que en Haskell el tipo `String` sea idéntico a `[Char]`?**
   * *Respuesta:* Que no existe una división semántica entre el procesamiento de texto y el procesamiento de listas generales. Todas las funciones de orden superior (`map`, `filter`, `foldr`), constructores (`:`) y operaciones sobre secuencias son inmediatamente aplicables sobre cadenas sin necesidad de funciones especializadas de strings.

3. **¿Cuál es la función del operador infijo con comillas invertidas (\` \`) en Haskell, por ejemplo al escribir ``a `mod` b``?**
   * *Respuesta:* Convierte una función prefija binaria estándar en un operador infijo, permitiendo colocar el nombre de la función entre sus dos argumentos para aproximar la sintaxis al lenguaje matemático ordinario.

## Ejercicios resueltos (describe el problema y la solución dada, con el código si lo hay)
- Problema: implementar MCD y mcm iterativos en Pascal para 48 y 18. Solución dada:
```pascal
program ComparativaEuclidesPascal;
var
    numeroA, numeroB: integer;
    resultadoMCD, resultadoMCM: integer;
function CalcularMCD(a, b: integer): integer;
var
    temp: integer;
begin
    while b <> 0 do
    begin
        temp := b;
        b := a mod b;
        a := temp;
    end;
    CalcularMCD := a;
end;
function CalcularMCM(a, b: integer): integer;
begin
    CalcularMCM := (a * b) div CalcularMCD(a, b);
end;
begin
    numeroA := 48;
    numeroB := 18;
    resultadoMCD := CalcularMCD(numeroA, numeroB);
    resultadoMCM := CalcularMCM(numeroA, numeroB);
    writeln('MCD de ', numeroA, ' y ', numeroB, ' es: ', resultadoMCD);
    writeln('mcm de ', numeroA, ' y ', numeroB, ' es: ', resultadoMCM);
end.
```
Análisis dado: mutable con a,b,temp; retorno asignado al nombre de función.
- Problema: implementar MCD y mcm iterativos en C para 48 y 18 más variante por referencia. Solución dada:
```c
#include <stdio.h>
int mcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
int mcm(int a, int b) {
    return (a * b) / mcd(a, b);
}
void mcd_por_referencia(int a, int b, int *resultado) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    *resultado = a;
}
int main(void) {
    int a = 48, b = 18;
    int res_mcd = mcd(a, b);
    int res_mcm = mcm(a, b);
    printf("--- Paradigma Procedural en C ---\n");
    printf("MCD(%d, %d) = %d\n", a, b, res_mcd);
    printf("mcm(%d, %d) = %d\n", a, b, res_mcm);
    return 0;
}
```
- Problema: implementar MCD y mcm puros en Scheme y trazar (mcd 48 18). Solución dada:
```scheme
(define (mcd a b)
  (if (= (remainder a b) 0)
      b
      (mcd b (remainder a b))))
(define (mcm a b)
  (/ (* a b) (mcd a b)))
; (mcd 48 18) => 6
; (mcm 48 18) => 144
```
Traza dada: (mcd 48 18) resto 12 falso → (mcd 18 12) resto 6 falso → (mcd 12 6) resto 0 verdadero → 6, en tail position con O(1).
- Problema: implementar MCD y mcm puros en Haskell con guardas y trazar mcd 48 18. Solución dada:
```haskell
mcd :: Int -> Int -> Int
mcd a b
  | a `mod` b == 0 = b
  | otherwise      = mcd b (a `mod` b)
mcm :: Int -> Int -> Int
mcm a b = (a * b) `div` (mcd a b)
```
Traza dada: mcd 48 18 → 12≠0 → mcd 18 12 → 6≠0 → mcd 12 6 → 0 guarda cumplida → 6.
- Problema: listas, rangos e infinitas en Haskell. Solución dada:
```haskell
1 : [2, 3, 4]    -- Produce [1, 2, 3, 4]
1 : 2 : 3 : []   -- Forma canónica equivalente a [1, 2, 3]
rango1 = [1..10]        -- [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
rangoPares = [2, 4..20] -- [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
rangoDesc = [10, 9..1]  -- [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
numerosNaturales = [1..]
repetirCinco     = repeat 5
ciclo            = cycle [1,2]
ejemplo = take 5 numerosNaturales  -- [1, 2, 3, 4, 5]
type String = [Char]
reverse "Haskell"     -- "lleksaH"
take 4 "Programacion" -- "Prog"
'A' : "BC"            -- "ABC"
```
- Problema: implementar Collatz y trazar hailstoneSeq 6. Solución dada:
```haskell
hailstone :: Integer -> Integer
hailstone n
  | n `mod` 2 == 0 = n `div` 2
  | otherwise      = 3 * n + 1
hailstoneSeq :: Integer -> [Integer]
hailstoneSeq 1 = [1]
hailstoneSeq n = n : hailstoneSeq (hailstone n)
```
Traza dada: 6→3→10→5→16→8→4→2→1, resultado `[6, 3, 10, 5, 16, 8, 4, 2, 1]`, longitud 9, altura 16.
- Problema (5.2): escribir `paresHailstone :: Integer -> [Integer]` que retorne solo pares de Collatz. Solución dada:
```haskell
paresHailstone :: Integer -> [Integer]
paresHailstone n = filter even (hailstoneSeq n)
-- paresHailstone 6 
-- => filter even [6, 3, 10, 5, 16, 8, 4, 2, 1]
-- => [6, 10, 16, 8, 4, 2]
```
- Problema (5.1): map/filter/fold. Solución dada:
```haskell
map (\x -> x * 2) [1, 2, 3]  -- Produce [2, 4, 6]
filter even [1, 2, 3, 4, 5, 6]  -- Produce [2, 4, 6]
sumatoria xs = foldl (+) 0 xs
longitudHailstone n = length (hailstoneSeq n)
```

## Posibles conflictos (afirmaciones que suenen absolutas, cifras, o que contradigan conocimiento estándar; márcalas [REVISAR])
- C estático débil con conversiones implícitas; Pascal estático fuerte; Scheme dinámico fuerte; Haskell Hindley-Milner [REVISAR].
- Gestión Pascal/C en pila/manual; Scheme/Haskell automática con Garbage Collector [REVISAR].
- Scheme recursión pura con TCO obligatoria; Haskell recursión/guardas/pattern matching [REVISAR].
- Pascal/C/ Scheme ansiosas, Haskell perezosa [REVISAR].
- Pascal/C mutables, Scheme inmutable por defecto aunque existe set!, Haskell estrictamente inmutable [REVISAR].
- Por estándar IEEE de Scheme obligado a TCO [REVISAR].
- `String` idéntico a `[Char]`, sin división semántica texto/listas [REVISAR].
- Cons : en O(1), ++ en O(n) [REVISAR].
- Collatz de 1937 por Lothar Collatz; para cualquier n siempre alcanza 1 [REVISAR: es conjetura no probada].
- Fin como Ciclo 4-2-1 [REVISAR].
- Longitud 9 y altura máxima 16 para n=6 [REVISAR].
- (mcd 48 18)=>6, (mcm 48 18)=>144 [REVISAR: verificar aritmética].
- Discretización v(t+Δt), x(t+Δt) como forma dada [REVISAR].
- Errores de redondeo generan energía artificialmente si integrador no es simpléctico [REVISAR].
- Referencia a experimentos de Veritasium sobre colisiones y rebotes [REVISAR].
- Demo en chrispyles.io/scheme-interpreter [REVISAR].

## Cobertura (¿de qué unidad IC-4700 es: U1/U2/U3/U4? ¿cubre clases o temas ausentes en otras fuentes?)
- Unidad: U2 (Paradigma Funcional aplicado: comparativa Pascal/C/Scheme/Haskell, listas, Collatz). Roce con U1 (procedural Pascal/C).
- Cubre: Euclides en 4 lenguajes con matriz comparativa, listas/cons/head/tail/rangos/infinitas/String=[Char], Collatz con hailstoneSeq y paresHailstone, map/filter/fold y simulación física con discretización.
