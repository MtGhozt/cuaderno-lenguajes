// Contenido de estudio por unidad (respaldo: docs/units/). Cuerpo en mini-markdown:
// párrafos, `código`, **negrita**, listas "- ", tablas "|", cercas ```lang.
export const UNITS = [
  {
    id: 'u1', num: 'Unidad 1', title: 'Fundamentos y conceptos generales',
    objectives: [
      'Definir algoritmo como procedimiento efectivo.',
      'Enunciar la tesis de Church-Turing.',
      'Aplicar el teorema de Böhm-Jacopini.',
      'Explicar universalidad, implementabilidad y naturalidad.',
      'Distinguir sintaxis, semántica y pragmática.',
      'Clasificar datos simples y compuestos.',
    ],
    sections: [
      { h: 'Algoritmo y procedimiento efectivo', body:
`Un **algoritmo** es un conjunto de tareas finitas que se llevan a cabo sobre un grupo finito de datos, en un tiempo finito y usando recursos finitos.

Un **procedimiento efectivo** es la noción intuitiva detrás: un proceso computable por medios finitos y definidos. De él salen dos ramas equivalentes: la **función computable** y el **algoritmo**.

La **tesis de Church** afirma que toda función computable es **Turing-computable**: todas las formas de computabilidad son equivalentes. Por eso un lenguaje de programación, como representación de algoritmos, debería ser Turing-computable.` },
      { h: 'Böhm-Jacopini: las cuatro estructuras', body:
`Corrado Böhm y Giuseppe Jacopini demostraron un teorema sobre computabilidad de Turing aplicable a **cualquier paradigma**: cualquier algoritmo puede construirse con cuatro tipos de estructuras de ejecución:

- Ejecución secuencial
- Iteración
- Ejecución condicional
- Separación modular` },
      { h: 'Principios de diseño: propósito, desarrollo, hardware', body:
`Todo lenguaje de propósito general es **Turing completo**, pero cada uno tiene un **propósito** (ecuaciones, conocimiento, gráficos 3D, contabilidad): la tarea se facilita si el lenguaje es afín al dominio.

El software vive décadas: habrá bugs, funciones nuevas y migraciones; el diseño debe facilitar ese mantenimiento lo antes posible. Y el hardware evoluciona (vectores, hilos): el lenguaje debe exponer esas ventajas.

Wirth lo resume: **Algorithms + Data Structures = Programs**. Todo lenguaje debe representar algoritmos y datos.` },
      { h: 'Características deseables I: universalidad, implementabilidad, naturalidad', body:
`**Universalidad**: implementar cualquier algoritmo (Turing completo; en la práctica: recursión o pilas).

**Implementabilidad**: cada instrucción, simple o compuesta, se traduce de forma **exacta** a la máquina-objeto, en cualquier procesador.

**Naturalidad**: pensar fácilmente en el dominio sin perder universalidad. Por eso siguen naciendo lenguajes: no es lo mismo contabilidad que control de un radiotelescopio.` },
      { h: 'Características deseables II: no-ambigüedad, eficiencia, depurabilidad, seguridad', body:
`**No-ambigüedad**: sin las ambigüedades del lenguaje natural, pero con ambigüedades formales propias (se resuelven con reglas metalingüísticas):

- **Dangling else**: ¿a qué \`if\` pertenece ese \`else\`?
- **Conversiones**: en \`r = m*i + s\` (reales + entero i), ¿qué se evalúa y convierte primero?

**Eficiencia**: deseable, pero relativizable ante portabilidad o claridad. Una máquina virtual como intérprete cuesta rendimiento y a veces se asume igual. [POR-VERIFICAR: "siempre es ineficiente" es un absoluto]

**Depurabilidad**: debe existir una correspondencia clara diseño ↔ implementación ↔ depuración.

**Seguridad (tríada CIA)**: privacidad, disponibilidad, integridad. Algunos lenguajes la incorporan (excepciones de Java, modelos Bell-LaPadula y Biba).` },
      { h: 'Sintaxis, semántica y pragmática', body:
`**Sintaxis**: reglas para formar expresiones válidas (gramática, usualmente libre de contexto). El compilador la verifica.

**Semántica**: cómo se espera que el programa se comporte al ejecutarse (ej. el \`while\` de Pascal ejecuta 0 o más veces).

**Pragmática**: cómo se usa en la práctica; el programador la comunica con nombres significativos y comentarios. Cuatro usos típicos de la asignación:

\`\`\`text
x := E   -- 1) temporal: calcular una vez y reutilizar
         -- 2) comunicar valores entre partes (parámetros/mensajes)
         -- 3) modificar una estructura de datos
         -- 4) acumular en un cálculo iterativo
\`\`\`` },
      { h: 'Datos: simples y compuestos', body:
`Los datos son **valores**. Simples: dados por el hardware (enteros complemento a 2, flotantes IEEE 754) o basados en enteros (booleano, caracteres, enumerados, BCD, direcciones).

Compuestos: **producto cartesiano** C1 × C2 × … × Cn (ej. registro con código, descripción, fechas y valores), arreglos de n dimensiones, **listas y tipos recursivos**, árboles, uniones y archivos.

| Tipo | Ejemplo |
|---|---|
| Simple por hardware | Entero comp-2, flotante IEEE 754 |
| Simple basado en enteros | Booleano, carácter, enumerado |
| Compuesto | Record/struct, array, lista, árbol, unión, file |` },
      { h: 'Computabilidad parcial y por qué estudiar paradigmas', body:
`Algunas funciones son **parcialmente computables**: f(x) = √x es exacta en E = {0,1,4,9,16,…} y solo aproximada fuera. Ni siquiera la identidad es exactamente computable para todos los reales con recursos finitos.

Cada paradigma da **herramientas mentales** distintas para expresar algoritmos: lo mismo que el salto de ensamblador a alto nivel no añadió potencia pero cambió cómo se piensa. El curso debería llamarse, con más precisión, **paradigmas de programación**: formas de entender qué es computable.` },
      { h: 'Criterios de evaluación: legibilidad, escritura, confiabilidad [Guía Jorge]', body:
`Diseñar es elegir **compromisos (trade-offs)**: no existe el lenguaje perfecto. Tres criterios clásicos:

- **Legibilidad**: deducir el comportamiento inspeccionando el código (simplicidad, ortogonalidad, control claro).
- **Facilidad de escritura (writability)**: expresar algoritmos con naturalidad (abstracción, expresividad).
- **Confiabilidad**: comportarse según lo especificado (chequeo de tipos, excepciones, poco aliasing).

La **ortogonalidad** (pocas reglas especiales, todo combina con todo, ej. Algol 68) favorece la confiabilidad; en C clásico es baja (arreglos, parámetros y asignación con casos especiales).` },
      { h: 'Gramáticas BNF y ambigüedad formal [Guía Jorge]', body:
`Una gramática libre de contexto es la 4-tupla **G = (V_N, V_T, P, S)**: no terminales, terminales, producciones y símbolo inicial. Es **ambigua** si alguna cadena tiene dos o más árboles de derivación.

El dangling else se resuelve formalmente partiendo en sentencias **cerradas (matched)** y **abiertas (open)**:

\`\`\`text
MatchedStmt → if Expr then MatchedStmt else MatchedStmt | otro
OpenStmt    → if Expr then Stmt
             | if Expr then MatchedStmt else OpenStmt
\`\`\`

Y la gramática aritmética \`E → E+E | E*E | id\` se desambigua por niveles: \`E → E+T | T\`, \`T → T*F | F\`, \`F → id | (E)\` (el producto ata más fuerte; recursión izquierda = asociatividad izquierda).` },
      { h: 'Del carácter al token y del chequeo a la ejecución [Guía Jorge]', body:
`Las capas del lenguaje, de lo físico al contexto: fonética (bits), fonología (caracteres/UTF-8), **morfología** (léxico/tokens), sintaxis (AST), semántica (tipos/ejecución), pragmática (propósito).

La morfología vive en el **scanner**: agrupa caracteres en tokens. Los errores se clasifican por capa:

| Ejemplo | Capa |
|---|---|
| \`int 9valor = 50;\` | Léxico |
| \`if (a > 0 then x = 1;\` (falta paréntesis) | Sintáctico |
| \`int *p = 3.14159;\` | Semántico estático [en C suele ser aviso, no error] |
| \`int x = 10 / 0;\` | Semántico dinámico [en C es indefinido, no excepción uniforme] |

**Semántica estática** = lo validable compilando (tipos, ámbitos). **Dinámica** = el significado al ejecutar y cómo se transforma la memoria.` },
    ],
  },
  {
    id: 'u2', num: 'Unidad 2', title: 'Programación imperativa: COBOL, Pascal, C',
    objectives: [
      'Explicar la ejecución imperativa como órdenes.',
      'Comparar COBOL, Pascal y C.',
      'Clasificar variables por tiempo de vida.',
      'Describir la programación estructurada.',
      'Distinguir acoplamiento de cohesión.',
      'Implementar control con instrucciones.',
      'Distinguir función de procedimiento.',
    ],
    sections: [
      { h: 'La idea: tareas como órdenes', body:
`En lo imperativo, **tareas = instrucciones** que se llevan a cabo con **ejecución imperativa**: en el fondo son **órdenes** y se tienen que ejecutar cada una de ellas.

Características comunes: las **variables son grupos consecutivos de bytes** y su **declaración es explícita**. Hay **separación fuerte entre datos y módulos**; originalmente no había forma de compartir código, y con el tiempo aparecieron **dialectos**.` },
      { h: 'COBOL vs Pascal vs C', body:
`| | COBOL | Pascal | C |
|---|---|---|---|
| Reservadas (clase) | 90 y pico [POR-VERIFICAR] | 14 [POR-VERIFICAR] | 14 [POR-VERIFICAR] |
| Llamadas | Sin calls: salto al "párrafo" | — | — |
| Anidadas | — | Funciones anidadas sí | No permite anidadas |
| Asignación / comparación | — | := vs = [nota: el cuaderno invierte los símbolos, por verificar] | = vs == |
| Archivos | Bien (archivo e índice) | Mal | Mal (ajenos al lenguaje) |

Crítica de clase: COBOL incapaz de estructuras dinámicas, "verbose", crecimiento y dialectos, curva larga; C inseguro en situaciones límite (pila ingenua, punteros libres); Pascal con E/S en el lenguaje pero salidas abruptas engorrosas.` },
      { h: 'Tiempo de vida y programación estructurada', body:
`El **life span** va con el módulo: las **locales** mueren con él (viven en **pila/registro**); las **globales** viven como el programa (en el **data segment**, estáticas); las **dinámicas** viven en el **heap** (Garbage Collector).

La **programación estructurada** tiene un **main**: módulo estructural en columna al que todos convergen. Y un módulo **no debe exceder una página**.` },
      { h: 'Acoplamiento y cohesión', body:
`**Coupling**: qué tan enlazados están dos módulos; se busca **bajo**.

**Cohesión**: coherencia semántica interna (si calcula, solo calcula; si muestra, solo muestra); se busca **alta**. [POSIBLE CONFUSIÓN: el cuaderno rotula esto como "Binding"; binding es asociación de nombres, no cohesión]` },
      { h: 'Datos compuestos y control', body:
`El **array** es casi el único compuesto (a veces "string"); el resto se construye a pie y se pierde uniformidad. El **producto cartesiano** es \`record\` (Pascal), \`struct\` (C) o **nivel 01** (COBOL):

\`\`\`cobol
01 Empleado
   03 Nombre   PIC X(50)
   03 Fecha-Nac
      05 Dia-Nac  PIC 9(2)
      05 Mes-Nac  PIC 9(2)
      05 Anno-Nac PIC 9(2)
\`\`\`

Control con instrucciones: secuencia (\`b := m\`, \`r := n\`), \`if\`, \`case/switch\`, \`for\` (→ \`perform\` en COBOL), \`while\` (pregunta antes) y \`repeat/do-while\` (hace y después pregunta). **Recursión simple** (A se llama) y **mutua** (A → B).` },
      { h: 'Módulos y representación', body:
`**Función**: abstracción de una expresión constante (\`<var> ← expresión\`). **Procedimiento**: abstracción de un grupo de instrucciones.

Para representar algoritmos: **pseudocódigo** y **diagramas de Nassi-Shneiderman** (estructurados: secuencia, condición, repetición). Diagramas de flujo: **no usarlos** (clase).` },
      { h: 'Paso de parámetros: valor, referencia y nombre [Guía Jorge]', body:
`- **Valor**: copia; no afecta al original.
- **Referencia**: dirección; muta lo externo (aliasing).
- **Nombre** (Algol 60): sustitución textual; se **reevalúa en cada uso** en el ámbito llamador.

El **Dispositivo de Jensen** (\`Sum(k, lower, upper, expr)\` con \`value lower, upper\`) expresa Σ A[i]: \`expr\` se evalúa cada ciclo con el nuevo k. Potente, costoso y sorprendente.` },
      { h: 'Del goto al while [Guía Jorge]', body:
`Todo salto se reduce a \`while\` + \`if\` con **bandera booleana** (única entrada y salida). El ejercicio resuelto convierte un programa con \`goto 10/40/60\` en:

\`\`\`pascal
continuar := true;
while continuar do
begin
    leer(x);
    if x = -999 then continuar := false
    else if x < 0 then imprimir('Error: numero negativo')
    else begin y := sqrt(x); imprimir(y); end;
end;
imprimir('Fin del programa');
\`\`\`` },
    ],
  },
  {
    id: 'u3', num: 'Unidad 3', title: 'Programación funcional: Scheme y Haskell',
    objectives: [
      'Leer notación prefija y cálculo lambda.',
      'Definir funciones en Scheme.',
      'Definir funciones en Haskell con tipos y pattern matching.',
      'Usar funciones de orden superior sobre listas.',
      'Explicar polimorfismo paramétrico.',
      'Predecir evaluaciones eager vs. orden-normal.',
      'Definir estrictez, Church-Rosser y evaluación perezosa.',
    ],
    sections: [
      { h: 'La idea: todo es función', body:
`Un algoritmo funcional es un **conjunto finito de funciones que se evalúan un número finito de veces con recursos finitos**. Se descompone en funciones más sencillas combinadas con operadores; ejemplo guía del curso: el mínimo común múltiplo como función de MCD.

\`\`\`text
mcm(n,m) = (n × m) / MCD(n,m)
MCD(n,m) = { si (n = qm + r, r = 0): m
             si no: MCD(m, r)
\`\`\`

Aquí ya se ven las 4 estructuras de Böhm-Jacopini: secuencia (primero MCD), módulos (mcm invoca MCD), condicional (definición a trozos) y ciclo (recursión).` },
      { h: 'Cálculo lambda y notación prefija (Scheme)', body:
`Scheme hereda la sintaxis del **cálculo lambda**: toda llamada es una lista cuyo primer elemento es el operador.

\`\`\`scheme
(f a1 a2 ... an)
(+ a (* b c))   ; a + b*c
(+ a b (- c))   ; resta como suma del negativo
\`\`\`

Esto fija la precedencia por construcción, a costa de legibilidad: razón por la que existen más lenguajes funcionales.` },
      { h: 'Scheme: define, lambda, quote, listas', body:
`\`\`\`scheme
(define (mcm a b) (/ (* a b) (mcd a b)))  ; definir función
(lambda (x) (* x x))                      ; función sin nombre
(quote (5 2 3 0 20))                      ; dato literal, no llamada
(car '(5 2 3))   ; → 5 (cabeza)
(cdr '(5 2 3))   ; → (2 3) (cola)
\`\`\`

Las **variables no son celdas de memoria**: son lugares del programa que al evaluarse se vuelven constantes. No hay instrucción de asignación; el único compuesto es la **lista**. El parser del lenguaje resulta muy sencillo.` },
      { h: 'Haskell: tipos, listas y pattern matching', body:
`Haskell declara tipos en el encabezado (el último es el retorno) y usa pattern matching en vez de condicionales:

\`\`\`haskell
hailstoneSeq 1 = [1]   -- caso base directo, sin if
hailstoneSeq n = n : resto

-- listas homogéneas: X:xs (cabeza X, cola xs)
longitud [] = 0
longitud (_:xs) = 1 + longitud xs   -- _ : variable anónima
\`\`\`

\`Int\` es entero de 32 bits; \`Integer\` es precisión arbitraria pero más lento. \`main\` usa \`IO ()\` para interactuar (ej. \`print\`). Para matemática rigurosa, Haskell supera a los imperativos.` },
      { h: 'Primera clase y polimorfismo paramétrico', body:
`Las funciones son **habitantes de primera clase**: se pasan como argumentos (ej. aplicar una función a cada elemento de un vector) y se retornan.

**Polimorfismo paramétrico**: la función no restringe a priori el tipo de sus argumentos. Haskell lo sostiene con clases de tipos (Int y Float como cantidades) y evaluación que respeta los tipos; \`otherwise\` equivale al \`else\`, \`==\` compara y \`=\` define.` },
      { h: 'Estrategias de evaluación', body:
`**Eager**: el argumento se evalúa una vez en la llamada y se sustituye su valor.

**Orden-normal**: se evalúa solo cuando se requiere (puede repetirse). En \`sqr(n) = n*n\` con n=m+1, orden-normal evalúa (m+1) dos veces: mismo resultado, menos eficiente.

**Perezosa (lazy)**: orden-normal + memoización; lo mejor de ambos mundos, válida por **Church-Rosser**.

El ejemplo \`cand(b1,b2) = if b1 then b2 else False\` con \`cand((n>0),(t/n>50))\`, n=0: eager **divide por cero y falla**; orden-normal devuelve \`False\` sin evaluar el segundo argumento.` },
      { h: 'Estrictez y Church-Rosser', body:
`Una función es **estricta** en un argumento si siempre lo usa: \`sqr\` es estricta en n; \`cand\` solo en el primero.

**Church-Rosser**: si una expresión puede evaluarse, el orden-normal la evalúa consistentemente; todos los órdenes dan el mismo resultado. La tienen Haskell (y algo de Prolog); C la pierde por **efectos laterales** (ej. \`getint\`). Por eso lo imperativo/OO usa eager y lo funcional usa lazy.` },
      { h: 'Currificación, TCO y funciones puras [Guía Jorge]', body:
`**Currying**: \`A → B → C\` es \`A → (B → C)\`; dar un argumento devuelve otra función. Así \`duplicar = (*) 2\` (aplicación parcial).

**TCO**: si la llamada recursiva es lo **último** (nada pendiente, como en \`factAux\` con acumulador), el marco se reutiliza: O(1). En \`n * fact(n-1)\` la multiplicación lo impide.

Función **pura**: determinista, sin efectos, transparente (\`f(2)\` siempre 4). Por eso lo puro paraleliza sin locks y admite **memoización** segura.` },
      { h: 'Listas infinitas, Collatz y orden superior [Guía Jorge]', body:
`Con lazy, \`[1..]\` existe y \`take 10 enteros\` solo calcula lo pedido. \`String\` es \`[Char]\`: \`take 4 "Programacion"\` da "Prog".

**Collatz** (conjetura, 1937): par → n/2, impar → 3n+1. Para 6: [6,3,10,5,16,8,4,2,1] (9 pasos, altura 16).

\`\`\`haskell
map (\\x -> x * 2) [1,2,3]      -- [2,4,6]
filter even [1,2,3,4,5,6]       -- [2,4,6]
paresHailstone n = filter even (hailstoneSeq n)
\`\`\`` },
    ],
  },
  {
    id: 'u4', num: 'Unidad 4', title: 'Programación lógica: Prolog',
    objectives: [
      'Distinguir relaciones de funciones.',
      'Explicar hechos, consultas y FBF.',
      'Describir la ejecución como demostración.',
      'Explicar el sistema de Copi y sus alternativas.',
      'Contrastar variable lógica e imperativa.',
    ],
    sections: [
      { h: 'La idea: sentencias que se demuestran', body:
`Cualquier algoritmo puede describirse en **cálculo de predicados de primer orden (CP1)**. Un lenguaje del paradigma lógico debe ser: equivalente a CP1, con gramática reconocible por compilador, y ejecución equivalente a una **demostración lógica**.

Por eso aquí **no hay instrucciones ni funciones evaluadas**: hay **sentencias lógicas (FBF)** y términos (predicados) que se demuestran.

| | Imperativo | Lógico |
|---|---|---|
| Operaciones | Instrucciones | Sentencias (FBF) |
| Acción | Ejecución | Demostración |
| Datos | Bytes en RAM | Variables lógicas |` },
      { h: 'Variables lógicas y FBF', body:
`La **variable lógica** existe antes que su tipo: primero existe, luego se determina su conjunto de pertenencia. Puede ligarse a un valor, desligarse y ligarse a otro de tipo distinto: son los individuos para los que un predicado es verdadero.

**FBF** = fórmulas bien formadas. No hay asignación: una variable se liga **una sola vez** por contexto de unificación. Ese es el cambio mental más difícil viniendo de C.` },
      { h: 'Demostrar: el sistema de Copi', body:
`Demostrar es partir de **premisas verdaderas** y aplicar **reglas de inferencia** hasta la conclusión. El sistema de Copi (visto en Matemática Discreta) tiene:

- 9 reglas de inferencia
- 10 reglas de sustitución
- 4 reglas de cuantificación
- 2 reglas de negación del cuantificador
- (opcional) 4 reglas de igualdad

Pero es **muy poco práctico** para una computadora [POR-VERIFICAR: "los algoritmos con Copi son NP"].` },
      { h: 'Alternativas prácticas', body:
`Dos familias con menos reglas y menos operadores [POR-VERIFICAR: "con restricciones son de tipo P"]:

- **Modus ponens**: dos operadores y una sola regla (MP).
- **Cálculo de cláusulas**: sin operadores y una sola regla, la **resolución con unificación**.

La **unificación** hace encajar dos términos ligando variables: es el corazón del paradigma. El **backtracking** prueba una rama, falla y retrocede a la siguiente. Corte (\`!\`) y \`fail\`: [VACÍO: sin fuente en el material].` },
      { h: 'Cláusulas de Horn y Tres Amigas [Guía Jorge]', body:
`Prolog restringe a **Cláusulas de Horn** (a lo sumo un literal positivo: \`A ← B1 ∧ … ∧ Bn\`); la **resolución SLD** busca eficiente con unificación y retroceso. [Simplificación de la guía.]

El acertijo Tres Amigas (Beatriz/María/Alicia; García/López/Méndez; ingeniera/actriz/maestra) se modela así:

\`\`\`prolog
amiga(beatriz, A1, P1)
Apellidos = [garcia, lopez, mendez]
A1 \\= garcia
member(amiga(_, lopez, ingeniera), Amigas)
member(amiga(maria, _, actriz), Amigas)
\\+ member(amiga(_, mendez, maestra), Amigas)
% Res = Beatriz López ingeniera, María Méndez actriz, Alicia García maestra.
\`\`\`

Con una restricción contradictoria, el backtracking agota ramas y responde **false**.` },
      { h: 'Typeclasses frente a herencia [Guía Jorge]', body:
`Java: polimorfismo por **subtipado y herencia** (class Perro extends Animal). Haskell: sin objetos ni herencia; las **typeclasses** son contratos donde cualquier tipo se adhiere sin modificar su definición (polimorfismo ad-hoc desacoplado).` },
    ],
  },
];
