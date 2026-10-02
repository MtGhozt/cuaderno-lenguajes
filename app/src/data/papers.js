// Papers del primer examen (fuente: I Parcial/Papers del primer examen/).
// Cada paper: resumen (idea central + partes + matices), estudio (explicación
// completa paso a paso, solo Backus por ahora) y repaso activo.
// Cuerpo en mini-markdown (el mismo renderer md() de main.js).
export const PAPERS = [
  {
    id: 'backus',
    nav: 'Backus 1978',
    title: '¿Puede la programación liberarse del estilo von Neumann?',
    meta: 'John Backus · Communications of the ACM, agosto 1978 · Unidad 3 (funcional)',
    resumen:
`## La idea central
Backus argumenta que los lenguajes convencionales (Fortran, Algol, Pascal, etc.) tienen **defectos de raíz**, heredados de la arquitectura del computador von Neumann. Esos defectos los hacen a la vez "gordos y débiles". Propone como alternativa un **estilo funcional**, y lo justifica de dos maneras: criticando el estilo imperativo y mostrando las ventajas concretas del funcional.
## Parte 1: Por qué el estilo imperativo es defectuoso
**1. El cuello de botella von Neumann.**
- Un computador von Neumann tiene CPU, memoria y un "tubo" que transmite una palabra a la vez entre ellas. Backus lo llama el *cuello de botella von Neumann*.
- Los lenguajes imperativos son versiones de alto nivel de esa máquina: las variables imitan las celdas de memoria, las instrucciones de control imitan los saltos y pruebas, y la asignación (\`:=\`) imita cargar y guardar.
- Así, programar se vuelve planear el tráfico de palabras individuales por el tubo. Es un cuello de botella físico, pero sobre todo **intelectual**: nos obliga a pensar "palabra por palabra" en vez de en unidades conceptuales más grandes.
**2. Dos mundos separados.**
- El mundo de las **expresiones** es ordenado y tiene propiedades algebraicas útiles, aunque los efectos secundarios a menudo las destruyen.
- El mundo de los **enunciados** (asignaciones, \`for\`, \`while\`) es desordenado y casi sin propiedades matemáticas.
- La programación estructurada ordena un poco ese mundo, pero no ataca el problema de fondo.
**3. Semántica acoplada al estado.**
- Como cada detalle de un cálculo modifica el estado, cada característica del lenguaje debe especificarse al detalle en su "marco" (*framework*). Por eso los lenguajes son enormes y rígidos.
- Además, sus "partes cambiables" (procedimientos y funciones de usuario) tienen poco poder expresivo.
**4. Formas de combinación débiles.**
- En los lenguajes imperativos las expresiones solo producen un valor de una palabra, y el resultado global se arma en el mundo de los enunciados.
- Los nombres, subíndices, punteros y parámetros por valor o por nombre añaden complejidad que estorba.
**5. Sin propiedades matemáticas útiles.**
- Los efectos secundarios y el aliasing hacen difícil razonar sobre los programas.
- Las semánticas axiomática y denotacional describen los programas, pero no los simplifican. Lo ideal sería como en el álgebra escolar: resolver ecuaciones aplicando leyes dentro del mismo lenguaje.
**Sobre APL.** Backus lo elogia por no ser "palabra a palabra", pero dice que sigue separando expresiones y enunciados y que su semántica sigue muy ligada al estado.
## Parte 2: La alternativa funcional
**Sistemas FP: no usan variables.** Un programa es una función que transforma objetos en objetos y siempre recibe un solo argumento. Se construyen con formas funcionales: composición, construcción, condición, insert y apply to all.
**El ejemplo clave: producto interno.** Versión imperativa con acumulador, índice y ciclo: repetitiva, con estado invisible, palabra por palabra. Versión funcional \`IP = (/+) o (ax) o Trans\`: Trans empareja, \`ax\` multiplica cada pareja, \`/+\` suma. Opera sobre vectores completos, es jerárquica, estática, general y reutiliza operaciones de mantenimiento generales.
**El álgebra de programas.** Las variables del álgebra son **programas** y sus operaciones son las formas funcionales. Leyes como \`[f,g] o h = [f o h, g o h]\` permiten **transformar programas y resolver ecuaciones** cuyas incógnitas son programas. Las demostraciones usan el propio lenguaje de programación.
**Comparación con el cálculo lambda.** Backus **no adopta el cálculo lambda**: dice que su libertad ilimitada es análoga a las instrucciones de control sin restricciones, y que "con libertad ilimitada viene el caos". FP elige un conjunto pequeño de formas con buenas leyes algebraicas.
**Sistemas FFP y AST.** Los FP no son *sensibles a la historia*. Backus propone los **sistemas de transición de estado aplicativos (AST)**: el estado **cambia solo una vez por cómputo mayor**, no en cada detalle. Sin efectos secundarios durante el cómputo, las aplicaciones independientes pueden evaluarse **en paralelo**.
## Matices importantes
- Backus **no dice que el problema esté resuelto**. Admite limitaciones de FP y que faltan muchos trabajos. Su argumento es sobre el **potencial** del estilo funcional.
- Su concepto de "programación funcional" es el de FP (sin variables, con formas funcionales y álgebra), no exactamente el de los lenguajes funcionales de hoy.`,
    estudio:
`## Cómo estudiar este paper
Te voy a explicar el argumento como si estuviéramos estudiándolo juntos para una clase de Ingeniería en Sistemas. La idea no es que memorices términos complicados, sino que entiendas qué problema está señalando Backus, por qué considera que la programación funcional ofrece una alternativa y cómo sus ejemplos demuestran su argumento.
Hay algo importante desde el principio: Backus no está diciendo simplemente que "la programación funcional es más rápida" o que "la programación imperativa es mala". Su argumento es mucho más profundo: la forma en que pensamos y escribimos los programas está condicionada por la arquitectura de las computadoras tradicionales, y esa dependencia limita nuestra capacidad para construir, comprender, transformar y demostrar la corrección de los programas.
Su propuesta consiste en reemplazar ese estilo de programación por uno basado en funciones que se combinan algebraicamente.
También vamos a distinguir entre lo que Backus efectivamente demuestra en el artículo y lo que propone como una posibilidad para el futuro. Esto importa muchísimo para responder correctamente las preguntas del examen.
## PARTE I. Entender el problema que Backus quiere resolver
### 1. ¿Por qué escribió este artículo?
Backus comienza con una crítica a la evolución de los lenguajes de programación convencionales.
Observa que, con el paso del tiempo, los lenguajes se vuelven cada vez más grandes y complicados. Cada nuevo lenguaje incorpora características de sus predecesores y añade otras nuevas.
Sin embargo, según él, ese crecimiento no representa un aumento proporcional de su capacidad para expresar soluciones.
En otras palabras:
- Los lenguajes tienen más instrucciones.
- Sus manuales son más extensos.
- Sus reglas son más complejas.
- Pero programar no se vuelve necesariamente mucho más sencillo, confiable o matemáticamente comprensible.
Backus describe estos lenguajes como fat and flabby, que podríamos traducir como "obesos y débiles".
¿Por qué débiles si tienen tantas características?
Porque, desde su perspectiva, su estructura fundamental sigue siendo limitada. Agregar nuevas instrucciones a una arquitectura conceptual deficiente no resuelve el problema original.
**La analogía.** Imaginá que tenés una herramienta que te obliga a construir una casa colocando un ladrillo a la vez, y cada vez que querés construir una pared tenés que especificar cómo colocar cada ladrillo.
Podrías agregarle miles de instrucciones nuevas a la herramienta, pero seguirías teniendo que pensar en ladrillos individuales.
Backus quiere que podamos expresar directamente: **Construí una pared con estos ladrillos.** Y después: **Construí una casa combinando estas paredes.**
Es decir, quiere que programemos utilizando unidades conceptuales más grandes, en lugar de describir continuamente operaciones elementales.
Esta es la intuición central que atraviesa todo el artículo.
### 2. ¿Qué es la arquitectura de von Neumann y por qué le importa tanto?
Para entender la crítica, primero hay que entender el modelo de computadora al que Backus se refiere.
Una computadora tradicional de von Neumann tiene tres componentes conceptuales: la **CPU** (procesa instrucciones y realiza operaciones), la **memoria** (almacena datos e instrucciones) y la **transferencia de palabras y direcciones** entre ambas.
Backus llama a esta conexión el von Neumann bottleneck, o cuello de botella de von Neumann.
**¿Por qué es un cuello de botella?** Porque para realizar una operación compleja, el sistema debe efectuar una enorme cantidad de transferencias individuales entre el procesador y la memoria.
Pero Backus no se limita al problema físico de transferencia de datos. Le interesa especialmente su consecuencia intelectual.
Dice que este cuello de botella nos ha acostumbrado a pensar en términos de operaciones individuales sobre palabras, en lugar de pensar en las unidades conceptuales completas del problema.
Por ejemplo, para calcular un producto interno de dos vectores, pensamos en:
- Obtener un elemento del primer vector.
- Obtener el elemento correspondiente del segundo.
- Multiplicarlos.
- Acumular el resultado.
- Incrementar un índice.
- Repetir el procedimiento.
El programador termina describiendo el movimiento y procesamiento de los elementos, en vez de expresar directamente la operación matemática que desea realizar.
Esta es la primera conexión fundamental: la arquitectura de von Neumann favorece un estilo de programación que reproduce sus mecanismos internos.
### 3. ¿Qué son los lenguajes de von Neumann?
Backus sostiene que lenguajes convencionales como Fortran y Algol heredan el estilo de la computadora de von Neumann.
| Computadora de von Neumann | Lenguaje convencional |
| -------------------------- | --------------------- |
| Celdas de memoria | Variables |
| Almacenar un valor | Asignación |
| Instrucciones de salto y prueba | Control de flujo |
| Operaciones sobre palabras | Expresiones y asignaciones individuales |
Por ejemplo: \`x = x + 1;\`
Esta instrucción representa una modificación del estado del programa. La variable \`x\` tiene un valor almacenado. La expresión obtiene ese valor, le suma uno y la asignación actualiza el almacenamiento.
Para Backus, el operador de asignación es el equivalente lingüístico del cuello de botella de von Neumann. ¿Por qué? Porque obliga al programador a organizar la computación como una sucesión de modificaciones de variables.
**El problema del estado.** Imaginá el siguiente programa:
\`\`\`text
int x = 5;
x = x + 2;
x = x * 3;
\`\`\`
El resultado depende de la secuencia de modificaciones: inicialmente \`x = 5\`, después \`x = 7\`, finalmente \`x = 21\`.
El significado de cada instrucción depende del estado que dejaron las anteriores. Esto es lo que Backus denomina una semántica estrechamente acoplada al estado (closely coupled to state).
El programa no se entiende únicamente como una expresión matemática. Hay que considerar cómo evoluciona el almacenamiento. Y esa dependencia se vuelve mucho más complicada cuando existen numerosas variables, procedimientos, referencias, estructuras de control y efectos secundarios.
## PARTE II. Las críticas fundamentales a la programación imperativa
Backus identifica varios defectos estructurales. Estos son los que tenés que comprender para justificar su argumento.
### 4. Primer problema: programación palabra por palabra
El programador termina describiendo operaciones individuales sobre elementos de datos. Veamos el ejemplo más importante del artículo: el producto interno de dos vectores. Matemáticamente: \`IP(a,b)\` es la suma de \`a[i]*b[i]\` para \`i = 1..n\`.
**Versión imperativa** (equivalente a la de Backus):
\`\`\`text
c := 0
for i := 1 step 1 until n do
    c := c + a[i] * b[i]
\`\`\`
¿Qué tiene que hacer el programador?
- Inicializar el acumulador \`c\`.
- Crear y modificar el índice \`i\`.
- Acceder a cada elemento.
- Multiplicarlo por el elemento correspondiente.
- Actualizar el acumulador.
- Controlar la repetición.
El algoritmo es correcto, pero su representación contiene muchos detalles de ejecución. Backus señala que el programa es repetitivo, opera sobre un estado invisible, trabaja palabra por palabra y depende de modificaciones sucesivas.
### 5. Segundo problema: la división entre expresiones y sentencias
Este es uno de los conceptos más importantes del artículo. Backus dice que los lenguajes convencionales separan la programación en dos mundos.
**Mundo 1: expresiones.** Más ordenado matemáticamente, como \`a + b * c\`. Las expresiones producen valores y pueden tener propiedades algebraicas útiles.
**Mundo 2: sentencias.** Más difícil de razonar algebraicamente, como \`x = x + 1;\` o un \`if\` con bloques. Las sentencias controlan modificaciones del estado y el orden de ejecución.
¿Por qué considera problemática esta división? Porque las expresiones pueden combinarse matemáticamente, pero su resultado generalmente es un valor individual. Las sentencias, por otro lado, son las que organizan la computación completa mediante asignaciones, ciclos y condiciones.
Entonces, aunque una expresión sea elegante, eventualmente sus resultados deben incorporarse a una estructura de ejecución basada en modificaciones del estado. Backus considera que esto impide aprovechar plenamente las formas de combinación de funciones.
**¿Y qué pasa con la programación estructurada?** Backus reconoce que introduce cierto orden en el mundo de las sentencias. Sin embargo, considera que no soluciona el problema fundamental, porque sigue dependiendo de asignaciones, variables modificables, repeticiones, subíndices y flujo de control. Es decir, mejora la organización del estilo imperativo, pero no cambia sus fundamentos.
### 6. Tercer problema: los programas son difíciles de comprender sin ejecutarlos mentalmente
Backus contrasta los programas imperativos dinámicos y repetitivos con los programas funcionales estáticos y jerárquicos. ¿Qué quiere decir con esto?
En un programa imperativo, muchas veces necesitamos imaginar la evolución de las variables para comprender el resultado. Por ejemplo:
\`\`\`text
total = 0;
for (int i = 0; i < n; i++) {
    total += valores[i];
}
\`\`\`
Para entenderlo completamente, debemos considerar el valor inicial de \`total\`, la condición del ciclo, los cambios de \`i\` y de \`total\`, y cuándo termina el ciclo. El programa describe una secuencia de acontecimientos.
En cambio, un programa funcional puede expresar la suma como una combinación de operaciones que representan directamente la transformación de una colección. La estructura del programa puede comunicar la operación global sin obligarnos a simular cada iteración.
La diferencia que busca Backus es pasar de describir una ejecución paso a paso a describir una computación mediante relaciones funcionales. Esto no significa que los programas funcionales nunca tengan recursión o que toda evaluación sea sencilla. Su argumento es que una estructura adecuada permite comprender mejor el comportamiento global.
### 7. Cuarto problema: falta de generalidad y reutilización
Volvamos al producto interno. El programa imperativo utiliza los nombres \`a\` y \`b\`, además de depender de \`n\`. Para convertirlo en un procedimiento general, se necesita declarar una función o procedimiento y definir cómo se pasan sus argumentos.
Backus considera que los mecanismos de nombres, parámetros y sustitución de argumentos agregan complejidad. En particular, menciona cuestiones como parámetros por valor (call-by-value), parámetros por nombre (call-by-name), variables con subíndices, punteros y nombres de procedimientos.
Su alternativa es construir funciones generales que no dependan de nombres particulares para sus argumentos. Así, una función puede aplicarse a cualquier par de vectores compatibles. Esto facilita la reutilización y la construcción de operaciones de nivel superior.
### 8. Quinto problema: dificultad para combinar operaciones
Este punto conecta todas las críticas anteriores. Backus sostiene que los lenguajes convencionales no proporcionan mecanismos suficientemente generales para construir programas nuevos a partir de programas existentes. Él llama a estos mecanismos combining forms, o formas de combinación.
Por ejemplo, si ya tenemos una función que multiplica dos números, una que transforma una colección, una que suma elementos y una que transpone una matriz, deberíamos poder combinarlas para construir operaciones más complejas sin tener que empezar desde cero.
Los lenguajes funcionales permiten precisamente este enfoque. La idea es construir programas jerárquicamente: en la base, las operaciones elementales (multiplicación, suma y selección); en el medio, la transformación (emparejar elementos) y la reducción (sumar resultados); arriba, el programa complejo (producto interno).
Este estilo de construcción es una de las principales razones por las que Backus considera que la programación funcional puede ofrecer mayor poder expresivo.
## PARTE III. La alternativa: programación funcional
### 9. ¿Qué propone Backus exactamente?
Backus propone una forma de programación basada en funciones y en mecanismos para combinarlas. En vez de escribir instrucciones que modifican variables, se construyen funciones complejas a partir de funciones más simples.
Su sistema FP (Functional Programming) utiliza objetos, funciones, aplicación de funciones, formas funcionales de combinación y definiciones de funciones.
Una característica fundamental de su sistema FP es que los programas son funciones sin variables, en el sentido específico de que no se utilizan variables de argumentos y sustituciones como mecanismo general para construir funciones. Esto no significa que las funciones no reciban datos. Sí reciben argumentos, pero su comportamiento se expresa mediante combinaciones de otras funciones.
**Ejemplo: composición.** Supongamos que tenemos dos funciones: \`f(x) = x+1\` y \`g(x) = x²\`. Podemos combinarlas mediante composición: \`(f o g)(x) = f(g(x))\`. Primero se aplica \`g\`, después \`f\`. Para \`x = 3\`: \`g(3) = 9\`, \`f(9) = 10\`, por tanto \`(f o g)(3) = 10\`.
La composición permite crear una nueva función sin tener que describir una secuencia de asignaciones. En el sistema FP de Backus, la composición se representa mediante el operador \`o\`.
### 10. Las formas funcionales: el verdadero corazón de su propuesta
Una forma funcional es un mecanismo que permite combinar funciones para construir otra función. No es simplemente una función común: es una operación que recibe funciones como parámetros y produce una nueva función.
| Forma funcional | Función |
| --------------- | ------- |
| Composición | Combina funciones en secuencia. |
| Construcción | Combina resultados en una estructura. |
| Apply to all | Aplica una función a todos los elementos de una secuencia. |
| Insert | Combina los elementos de una secuencia utilizando una operación. |
| Condition | Selecciona una función según una condición. |
**Apply to all.** Representada por la forma aplicada a \`f\` en la notación del artículo. Aplica una función a cada elemento de una secuencia. Si \`f(x) = x²\`, entonces aplicarla a \`<1,2,3>\` da \`<1,4,9>\`. No necesitamos escribir un ciclo explícito para cada elemento.
**Insert.** Aplica una operación sucesivamente a los elementos de una secuencia. Por ejemplo, insertar la suma en \`<1,2,3,4>\` produce \`1+(2+(3+4)) = 10\`. En este caso, Insert utiliza la suma para reducir una secuencia a un resultado.
**Construcción.** Permite combinar los resultados de varias funciones en una estructura. Por ejemplo, \`[f,g]\` aplicada a \`x\` da la pareja \`<f(x), g(x)>\`. Si \`f(x) = x+1\` y \`g(x) = x²\`, entonces \`[f,g]\` aplicada a \`3\` da \`<4,9>\`.
Estas operaciones permiten construir programas complejos mediante piezas reutilizables.
## PARTE IV. El ejemplo más importante del artículo: producto interno
Este ejemplo es probablemente el que más te conviene dominar para el examen, porque Backus lo utiliza directamente para comparar ambos estilos de programación.
### 11. El programa imperativo
Recordemos:
\`\`\`text
c := 0
for i := 1 step 1 until n do
    c := c + a[i] * b[i]
\`\`\`
El programa obtiene el resultado mediante repetición y modificación de variables. Ahora comparemos esto con la representación funcional de Backus.
### 12. El programa funcional
Backus define \`IP = (/+) o (ax) o Trans\`. No te preocupes por memorizar la notación todavía. Lo importante es entender qué hace cada parte. Supongamos los vectores \`a = <1,2,3>\` y \`b = <6,5,4>\`. El resultado esperado es \`1*6 + 2*5 + 3*4 = 28\`.
**Paso 1. Transponer.** La función \`Trans\` reorganiza los vectores para emparejar sus elementos: de \`<<1,2,3>,<6,5,4>>\` se transforma en \`<<1,6>,<2,5>,<3,4>>\`.
**Paso 2. Aplicar multiplicación a todos.** La forma aplicada a la multiplicación opera sobre cada par: se obtiene \`<6,10,12>\`.
**Paso 3. Insertar suma.** La forma de suma totaliza todos los elementos: \`6+10+12 = 28\`. **Resultado: 28.**
### 13. ¿Por qué considera Backus que este programa es superior?
No porque haga una multiplicación matemáticamente diferente. Ambos programas calculan exactamente lo mismo. La diferencia está en cómo se representa la solución.
| Criterio | Imperativo | Funcional de Backus |
| -------- | ---------- | ------------------- |
| Unidad de operación | Elementos individuales | Estructuras completas |
| Repetición | Explícita mediante ciclos | Encapsulada en formas funcionales |
| Variables modificables | Sí | No en el sistema FP |
| Comprensión | Requiere seguir la ejecución | Se puede analizar jerárquicamente |
| Generalidad | Depende de argumentos y declaraciones | Se aplica a cualquier par compatible |
| Construcción | Secuencia de instrucciones | Composición de funciones |
| Reutilización | Procedimientos y estructuras de control | Formas funcionales generales |
Backus destaca siete propiedades del programa funcional:
- Opera sobre sus argumentos, sin estados ocultos durante el cálculo.
- Está construido jerárquicamente a partir de funciones más simples.
- Su estructura es estática y no repetitiva: no requiere simular mentalmente un ciclo para comprender su composición.
- Trabaja con unidades conceptuales completas, no palabra por palabra.
- No incorpora datos específicos y es general.
- No necesita nombrar sus argumentos ni declarar un procedimiento convencional.
- Reutiliza operaciones generales de combinación.
Este ejemplo constituye la demostración ilustrativa central de su crítica al estilo de von Neumann.
## PARTE V. El argumento más profundo: el álgebra de programas
Hasta aquí hemos visto que los programas funcionales pueden ser más claros y generales. Pero Backus considera que hay una ventaja todavía más importante: podemos razonar matemáticamente sobre los programas utilizando el propio lenguaje con el que los escribimos.
### 14. ¿Qué significa un álgebra de programas?
En matemática, un álgebra permite manipular expresiones mediante leyes conocidas. Por ejemplo: \`a*(b+c) = a*b + a*c\`. Podemos transformar una expresión en otra equivalente sin tener que calcular valores específicos.
Backus propone algo semejante para los programas funcionales. En su álgebra, las variables representan funciones, las operaciones son formas funcionales y las leyes establecen equivalencias entre expresiones funcionales.
Por ejemplo, una ley de composición y construcción establece que \`[f,g] o h = [(f o h), (g o h)]\`. ¿Qué significa? Que construir una pareja de resultados después de aplicar \`h\` equivale a aplicar \`h\` primero a la entrada y después evaluar \`f\` y \`g\` sobre ese resultado. La igualdad se sostiene para las funciones y objetos correspondientes del sistema.
**¿Por qué es importante?** Porque podemos transformar un programa en otro equivalente mediante reglas algebraicas. No necesitamos depender exclusivamente de ejecutar ambos programas con muchos ejemplos para tratar de descubrir si son equivalentes. Podemos demostrarlo a partir de las propiedades de las formas funcionales.
### 15. ¿Cómo ayuda esto a demostrar que un programa es correcto?
Imaginá que tenés dos programas que calculan una multiplicación de matrices: uno construido mediante composición de funciones y otro con una definición recursiva. Querés demostrar que ambos realizan la misma operación.
En un enfoque puramente experimental podrías probarlos con varias matrices y comparar sus resultados. Pero eso no demuestra que sean equivalentes para todas las entradas válidas.
Backus presenta una demostración algebraica de equivalencia entre dos programas de multiplicación de matrices. La estrategia consiste en definir las funciones que componen el programa, aplicar leyes del álgebra de programas, transformar las expresiones y demostrar que ambas definiciones producen la misma función dentro del dominio considerado.
Esto es importante porque permite transformar programas sin cambiar su significado.
**Aplicaciones de las transformaciones algebraicas:**
- Corrección: demostrar que una función cumple su especificación.
- Optimización: transformar una función en otra implementación equivalente que pueda ejecutarse más eficientemente.
- Comprensión: desarrollar una representación que explique mejor el comportamiento del programa.
- Terminación: estudiar bajo qué condiciones una función produce un resultado en lugar de no terminar.
Backus desarrolla teoremas de expansión que permiten expresar ciertas funciones recursivas como expansiones condicionales. Estas expansiones describen su comportamiento caso por caso y permiten establecer condiciones de terminación.
No es necesario dominar todas las demostraciones técnicas para entender el argumento principal, pero sí comprender que el álgebra de programas es uno de los pilares de su propuesta.
## PARTE VI. ¿Qué tiene que ver el cálculo lambda de Church?
Backus reconoce explícitamente el enorme poder expresivo del cálculo lambda de Church. Sin embargo, su sistema FP no está basado en utilizar libremente expresiones lambda y reglas generales de sustitución para construir todos los programas. ¿Por qué? Porque considera que esa libertad puede dificultar el establecimiento de un estilo uniforme y de propiedades algebraicas fácilmente aprovechables.
| Cálculo lambda | Sistema FP de Backus |
| -------------- | -------------------- |
| Utiliza abstracciones lambda | Utiliza formas funcionales |
| Construye funciones mediante variables y sustitución | Construye funciones mediante combinación |
| Permite funciones de diversos tipos y aridades | Sus funciones tienen un dominio y rango comunes y reciben un argumento |
| Gran expresividad | Mayor restricción estructural |
| Reglas de sustitución con implicaciones complejas | Reglas de construcción más uniformes |
| Puede resultar difícil expresar ciertas leyes de forma clara | Busca que las leyes algebraicas sean explícitas y manejables |
La idea es que más libertad expresiva no siempre significa mayor facilidad para comprender, demostrar o transformar programas.
Backus compara esta restricción con la programación estructurada: limitar ciertos mecanismos puede favorecer una estructura más regular y propiedades más útiles. Así como la programación estructurada evita el \`goto\`, la programación funcional evita la expresión lambda, la sustitución y los múltiples tipos de funciones.
Esto no significa que el cálculo lambda sea inferior como fundamento matemático. Significa que Backus busca un sistema de programación con un conjunto seleccionado de operaciones que favorezcan el razonamiento algebraico.
## PARTE VII. ¿Y qué pasa con el estado y la memoria?
Una crítica razonable sería: "Está bien, pero una computadora necesita memoria. ¿Cómo hacemos programas que recuerden información?" Backus anticipa esta dificultad.
**La diferencia entre cálculo puro y sistemas con estado.** En un sistema puramente aplicativo, el resultado de una computación se obtiene mediante evaluación de expresiones. Pero un sistema informático práctico también puede necesitar conservar información entre operaciones.
Backus reconoce que, si queremos que un programa afecte el comportamiento de otro programa posterior, necesitamos algún mecanismo de estado. Por eso propone los Applicative State Transition Systems (AST).
Estos sistemas combinan un lenguaje funcional, un estado que conserva información y reglas de transición para producir un nuevo estado. La diferencia es que el estado no se modifica continuamente durante cada operación elemental.
En el esquema propuesto, el programa realiza una computación y produce tanto una salida como un nuevo estado:
- Entrada: el estado actual más la entrada.
- Evaluación funcional: el estado permanece sin cambios durante el cálculo.
- Instalación del nuevo estado: la salida y el nuevo estado quedan disponibles para la siguiente entrada.
Esto permite mantener memoria e interacción con el entorno sin introducir modificaciones de estado en cada pequeño paso de la computación funcional.
**¿Qué ventajas espera obtener?**
- Menor acoplamiento entre programas y estado.
- Reglas de transición más simples.
- Ausencia de efectos secundarios durante la evaluación funcional.
- Posibilidad de evaluar aplicaciones independientes en paralelo.
- Un marco pequeño que puede ampliarse mediante funciones.
- Mayor flexibilidad para definir mecanismos de almacenamiento y nombres.
Importante: los AST son una propuesta conceptual del artículo, no una afirmación de que Backus haya construido y demostrado un sistema práctico que resuelva definitivamente todos estos problemas.
**Diseño de computadores.** Los lenguajes von Neumann han dejado a los diseñadores sin modelos alternativos. Backus menciona máquinas aplicativas que no tienen cuello de botella y pueden evaluar en paralelo, y dice que el estilo aplicativo podría permitir diseños de hardware no limitados por el cuello de botella.
## PARTE VIII. ¿Backus realmente demuestra que la programación funcional es superior?
Esta es una distinción que te puede hacer destacar en el examen. Backus presenta evidencia y argumentos a favor del estilo funcional, especialmente en expresividad, comprensibilidad, generalidad, composición, razonamiento matemático, transformación y demostración de equivalencia, posibilidades de paralelismo, y diseño de lenguajes y arquitecturas alternativas.
Sin embargo, también reconoce dificultades:
- La sustitución del cálculo lambda presenta desafíos para una implementación eficiente.
- Los sistemas aplicativos tienen dificultades para incorporar almacenamiento e historia.
- Los lenguajes funcionales necesitan demostrar su viabilidad práctica.
- La relación entre expresividad y eficiencia requiere investigación adicional.
Backus concluye que existen indicios importantes de que el estilo aplicativo puede llegar a ser más poderoso que el de von Neumann, pero considera necesario desarrollar y evaluar nuevos modelos de computación.
Por eso, no sería correcto decir que el artículo demuestra experimentalmente que todo programa funcional es más rápido o más eficiente que cualquier programa imperativo. Su argumento principal es sobre las ventajas conceptuales, estructurales y matemáticas del estilo funcional.
## Si solo podés recordar una cosa
Quedate con esta idea: Backus considera que la programación imperativa nos obliga a describir cómo se ejecuta una computación mediante modificaciones sucesivas del estado, mientras que la programación funcional permite expresar qué transformación se desea realizar mediante funciones que se combinan algebraicamente.
De ahí se derivan sus principales argumentos: mayor claridad conceptual, generalidad, reutilización, composición y posibilidades de demostrar propiedades de los programas matemáticamente. Esa es la columna vertebral de todo el artículo.`,
    borrador:
`En su artículo *Can Programming Be Liberated from the von Neumann Style?* (1978), John Backus argumenta que la programación funcional ofrece ventajas fundamentales frente a la programación imperativa convencional, porque permite superar limitaciones estructurales heredadas de la arquitectura de von Neumann. Su crítica no se centra únicamente en la sintaxis, sino en la manera en que los lenguajes representan y organizan las computaciones.
En primer lugar, Backus señala que los lenguajes convencionales reproducen el funcionamiento de las computadoras de von Neumann mediante variables que representan celdas de almacenamiento, asignaciones que modifican sus contenidos y estructuras de control que determinan el orden de ejecución. Esta dependencia genera una programación de tipo *word-at-a-time*, en la cual el programador debe describir operaciones individuales y controlar explícitamente su repetición: un cuello de botella tanto computacional como intelectual. Además, critica la división entre expresiones y sentencias: las expresiones poseen propiedades algebraicas útiles, pero las sentencias dependen de modificaciones del estado y dificultan el razonamiento matemático, lo que limita la combinación de operaciones para construir programas complejos.
Como alternativa, propone un estilo funcional basado en la construcción jerárquica de programas mediante funciones y formas funcionales de combinación, que crean operaciones complejas a partir de funciones simples, trabajan con estructuras completas y reutilizan mecanismos generales de transformación. Lo demuestra con el producto interno: frente a la versión imperativa (acumulador, índice y ciclo), la funcional combina transposición, aplicación a todos e inserción de la suma, expresando directamente la estructura matemática de la operación. Esa representación se asocia además con un álgebra de programas cuyas leyes permiten transformar expresiones, demostrar equivalencias y estudiar corrección y terminación con el propio lenguaje, y se completa con los sistemas AST, que incorporan estado con una sola transición por cómputo mayor para permitir memoria y paralelismo sin efectos secundarios.`,
    repaso: [
      { q: '¿Qué es el cuello de botella de von Neumann?', a: 'El tubo CPU-memoria que transmite una palabra a la vez; sobre todo un límite intelectual: nos obliga a pensar palabra por palabra en vez de en unidades conceptuales.' },
      { q: '¿Por qué critica la asignación?', a: 'Es el equivalente lingüístico del cuello de botella: organiza la computación como sucesión de modificaciones de variables, con semántica acoplada al estado.' },
      { q: '¿Qué es una forma funcional?', a: 'Un mecanismo que combina funciones para construir otra función: composición, construcción, condición, insert y apply to all.' },
      { q: '¿Por qué el programa funcional de producto interno es más claro?', a: 'Trabaja con vectores completos, es jerárquico y estático, general, no nombra argumentos y reutiliza operaciones generales.' },
      { q: '¿Qué significa que los programas funcionales sean jerárquicos?', a: 'Se construyen por composición de funciones simples en niveles, y se entienden por su estructura sin simular la ejecución.' },
      { q: '¿Qué es el álgebra de programas?', a: 'Variables que representan programas y operaciones que son formas funcionales; sus leyes transforman programas y demuestran equivalencias con el propio lenguaje.' },
      { q: '¿Qué problema intenta resolver Backus con los sistemas AST?', a: 'Dar memoria e historia al estilo funcional con una sola transición de estado por cómputo mayor, sin efectos secundarios y con paralelismo.' },
      { q: '¿Backus demuestra que los programas funcionales siempre son más rápidos?', a: 'No. Su argumento es sobre ventajas conceptuales, estructurales y matemáticas; reconoce limitaciones y trabajo pendiente.' },
    ],
  },
  {
    id: 'dijkstra',
    nav: 'Dijkstra 1968',
    title: 'Go To Statement Considered Harmful: ¿por qué el goto hace daño?',
    meta: 'Edsger W. Dijkstra · Communications of the ACM, marzo 1968 · Unidad 2 (estructurada)',
    resumen:
`## La idea central
Dijkstra sostiene que la calidad de los programadores es una **función decreciente de la densidad de sentencias goto** en sus programas, y que el goto debería **abolirse de todos los lenguajes de alto nivel**. Su argumento no es estético: el goto destruye la correspondencia entre el programa estático (texto) y el proceso dinámico (ejecución), y sin esa correspondencia no podemos razonar sobre lo que el programa hace.
## Parte 1: El verdadero objeto de la programación es el proceso
**1. El programa termina; el proceso es lo que importa.**
- La actividad del programador acaba cuando construye un programa correcto, pero el verdadero objeto de su actividad es el **proceso** que ese programa controla: ese proceso debe satisfacer la especificación.
- Una vez escrito el programa, la "fabricación" del proceso se delega a la máquina.
**2. Nuestra limitación intelectual.**
- Nuestras capacidades están orientadas a dominar **relaciones estáticas**; visualizar procesos que evolucionan en el tiempo se nos da mal.
- Por eso debemos **acortar al máximo la brecha conceptual** entre el programa estático (extendido en el espacio del texto) y el proceso dinámico (extendido en el tiempo): la correspondencia debe ser lo más trivial posible.
## Parte 2: Coordenadas para describir el progreso del proceso
**1. El índice textual.**
- Si el programa es pura concatenación de asignaciones, basta señalar un punto del texto entre dos acciones sucesivas: el **índice textual**.
- Con condicionales, alternativas y selección por casos, el progreso sigue describiéndose con **un solo índice textual**.
- Con procedimientos hace falta una **secuencia de índices** (uno por nivel de llamada); con repetición (\`while B repeat A\`), un **índice dinámico** que cuenta la repetición actual. En todos los casos, esos índices están **fuera del control del programador**: los genera el programa o la evolución del proceso.
**2. Por qué necesitamos coordenadas independientes.**
- El valor de una variable solo se interpreta **respecto al progreso del proceso**: en el ejemplo de contar personas que entran a un cuarto, entre observar la entrada e incrementar \`n\`, el valor de \`n\` es "personas menos uno".
- El uso desenfrenado del goto hace **terriblemente difícil** encontrar un conjunto significativo de coordenadas: solo queda un contador de acciones desde el inicio (un "reloj normalizado"), único pero **inútil**, porque definir en él los puntos interesantes se vuelve complicadísimo.
**3. El goto es demasiado primitivo.**
- El goto es una invitación a enredar el programa. Las cláusulas estructuradas (condicional, alternativa, repetición) son formas de **bridar** su uso.
- Dijkstra no dice que esas cláusulas sean exhaustivas, pero cualquier cláusula futura debe cumplir el requisito: **mantener un sistema de coordenadas independiente del programador** para describir el proceso de forma manejable.
## Matices importantes
- Dijkstra **cita a Böhm y Jacopini**: parecen haber probado la superfluidad (lógica) del goto, pero advierte que traducir mecánicamente un diagrama con saltos a uno sin saltos **no** lo vuelve más transparente. Eliminar el goto no basta: hay que estructurar de verdad.
- También recuerda la recomendación (atribuida a Hoare) de restringir el goto a "salidas de alarma", y la motivación de Wirth y Hoare para el \`case\`: refleja la estructura dinámica mejor que gotos y switches.
- La carta es de 1968 y funda la **programación estructurada** (Unidad 2): secuencia, condicional e iteración con una sola entrada y salida, sin saltos arbitrarios.`,
    borrador:
`En su carta *Go To Statement Considered Harmful* (1968), Edsger W. Dijkstra argumenta que la sentencia goto debería abolirse de los lenguajes de alto nivel, porque destruye la correspondencia entre el programa estático y el proceso dinámico que ese programa controla. Su punto de partida es que el verdadero objeto de la actividad del programador no es el texto que escribe, sino el proceso que ese texto genera al ejecutarse, y que nuestras capacidades intelectuales están orientadas a dominar relaciones estáticas, no procesos evolutivos; por tanto, debemos acortar al máximo la brecha conceptual entre ambos.
En segundo lugar, muestra que con programas estructurados el progreso del proceso se describe con coordenadas independientes del programador: un índice textual para la secuencia, secuencias de índices para los procedimientos y un índice dinámico para las repeticiones. Esas coordenadas permiten interpretar el valor de cada variable respecto al avance del proceso. En cambio, el uso desenfrenado del goto hace imposible encontrar un sistema de coordenadas significativo: solo queda un contador de acciones desde el inicio, único pero inútil, porque localizar en él los puntos interesantes del cómputo se vuelve extremadamente complicado.
Como alternativa, propone restringir la construcción de programas a cláusulas que briden el goto —condicionales, alternativas, selección por casos y repetición— de modo que la estructura del texto refleje la estructura dinámica del proceso. Concede que esas cláusulas pueden no ser exhaustivas, pero exige que cualquier construcción futura preserve un sistema de coordenadas manejable, y advierte, citando a Böhm y Jacopini, que traducir mecánicamente un diagrama con saltos a uno sin saltos no lo vuelve automáticamente más claro: la estructuración debe ser genuina, no cosmética.`,
    repaso: [
      { q: '¿Cuál es la tesis de Dijkstra en una frase?', a: 'El goto debe abolirse de los lenguajes de alto nivel porque rompe la correspondencia programa-proceso.' },
      { q: '¿Qué es el índice textual?', a: 'El puntero al punto del texto donde va el proceso; con procedimientos y repetición se extiende a secuencias e índices dinámicos.' },
      { q: '¿Por qué necesitamos coordenadas independientes?', a: 'Porque el valor de una variable solo se interpreta respecto al progreso del proceso (ejemplo del cuarto y n).' },
      { q: '¿Qué advierte sobre Böhm-Jacopini?', a: 'Que probar la superfluidad lógica del goto no basta: la traducción mecánica a diagramas sin saltos no los vuelve transparentes.' },
      { q: '¿A qué unidad del curso pertenece?', a: 'Unidad 2: fundamento de la programación estructurada (secuencia, condicional, iteración).' },
    ],
  },
  {
    id: 'bohm',
    nav: 'Böhm-Jacopini 1966',
    title: 'Diagramas de flujo, máquinas de Turing y lenguajes con solo dos reglas de formación',
    meta: 'Corrado Böhm y Giuseppe Jacopini · Communications of the ACM, mayo 1966 · Unidades 1–2',
    resumen:
`## La idea central
Böhm y Jacopini demuestran que **todo diagrama de flujo puede normalizarse** usando poquísimas piezas base: primero tres y luego **solo dos reglas de formación, composición e iteración**. Aplicado a las máquinas de Turing, prueban que toda máquina de Turing equivale a un programa escrito con solo esas dos reglas. Es el fundamento matemático del teorema que el curso resume como: cualquier algoritmo se construye con secuencia, condicional, iteración y separación modular.
## Parte 1: Normalización de diagramas de flujo
**1. No todo diagrama se descompone en piezas finitas dadas.**
- Hay diagramas (la familia de los "lazos con salida en medio") de los que no se puede aislar una parte con una sola entrada y una sola salida: no son **descomponibles** en subdiagramas con las piezas dadas.
- Conclusión fuerte: **no es posible descomponer todos los diagramas en un número finito de diagramas base**, si se exige descomposición exacta del diagrama original.
**2. La salida: equivalencia semántica + bits auxiliares.**
- Si se acepta reemplazar el diagrama por **otro equivalente** (que compute la misma transformación) y se amplía el conjunto con una pila de bits (operaciones T, F, K y predicado sobre el bit superior), entonces **toda** transformación representable por un diagrama se vuelve descomponible en tres piezas base, y luego en **solo dos**: composición e iteración.
- La intuición: los bits extra actúan como interruptores que recuerdan por dónde va el flujo, así los saltos arbitrarios se simulan con estructura.
**3. Todo programa se escribe como fórmula.**
- Con cajas funcionales y predicativas más T, F, K, cualquier diagrama se escribe como una cadena con paréntesis: composición por yuxtaposición e iteración como operador. Los predicados se convierten en operaciones que empujan el resultado del test a la pila.
## Parte 2: Aplicación a las máquinas de Turing
**1. El lenguaje con dos reglas ya es Turing completo.**
- En un trabajo previo, Böhm definió un lenguaje con solo **operaciones atómicas, composición e iteración**, y mostró que con él se puede evaluar **toda función parcial recursiva**: pese a su pobreza, el lenguaje calcula todo lo computable.
- Hay máquinas concretas que ese lenguaje no describe directamente, pero eso no le quita potencia de cómputo.
**2. Toda máquina de Turing equivale a una del sub-lenguaje.**
- Asociando a cada máquina M una máquina M* que trabaja sobre una cinta con casillas en blanco intercaladas (donde se guarda la pila de interruptores), prueban que M* pertenece a la familia generada **solo por composición e iteración** a partir de dos máquinas básicas.
- Moraleja: los saltos arbitrarios (goto) son **lógicamente superfluos**: todo lo computable se expresa con composición + iteración.
## Matices importantes
- El artículo **no** dice que reescribir mecánicamente elimine la complejidad: Dijkstra lo citará dos años después para advertir que la traducción automática a diagramas sin saltos no los vuelve transparentes. La estructuración debe ser de diseño, no cosmética.
- En el curso, el teorema aparece como **Böhm-Jacopini: las cuatro estructuras** (secuencial, condicional, iteración, modular). El artículo original prueba el núcleo (composición + iteración); la forma de "cuatro estructuras" es la versión pedagógica para programadores.
- Es denso y formal (diagramas, cintas, pilas de bits): para el examen basta la idea central, las dos reglas y la consecuencia sobre el goto.`,
    borrador:
`En su artículo *Flow Diagrams, Turing Machines and Languages with Only Two Formation Rules* (1966), Corrado Böhm y Giuseppe Jacopini demuestran que todo diagrama de flujo puede normalizarse hasta expresarse con un repertorio mínimo de piezas base: primero tres y finalmente solo dos reglas de formación, la composición y la iteración. Su punto de partida es que existen diagramas no descomponibles en subdiagramas con una sola entrada y salida, de modo que ningún conjunto finito de piezas basta para la descomposición exacta; la salida consiste en aceptar diagramas equivalentes semánticamente y ampliar el dominio con una pila de bits auxiliares que recuerdan el estado del flujo.
En segundo lugar, aplican ese resultado a la teoría de máquinas de Turing y prueban que a cada máquina puede asociársele otra equivalente que trabaja sobre una cinta con casillas auxiliares y pertenece a la familia generada únicamente por composición e iteración. De ese modo establecen que los saltos arbitrarios son lógicamente superfluos: todo lo computable puede expresarse con solo esas dos reglas, resultado que fundamenta el teorema de las estructuras de la programación estructurada estudiado en el curso.
Como consecuencia, el artículo provee la base matemática de la crítica al goto que Dijkstra popularizará en 1968: si todo programa puede escribirse con secuencia, selección e iteración, nada obliga a usar saltos arbitrarios. Cabe matizar, con el propio Dijkstra, que la eliminación mecánica del goto no garantiza por sí sola programas más claros; la estructuración debe reflejar un diseño genuino y no una mera traducción cosmética de los diagramas originales.`,
    repaso: [
      { q: '¿Cuáles son las dos reglas de formación?', a: 'Composición e iteración: con solo ellas se expresa todo lo computable.' },
      { q: '¿Por qué no basta la descomposición exacta?', a: 'Hay diagramas no descomponibles en piezas finitas dadas; hace falta equivalencia semántica + bits auxiliares.' },
      { q: '¿Qué papel juegan T, F, K?', a: 'Operaciones que apilan y desapilan bits para recordar el estado del flujo durante la normalización.' },
      { q: '¿Qué consecuencia tiene para el goto?', a: 'Los saltos arbitrarios son lógicamente superfluos.' },
      { q: '¿Qué matiz pone Dijkstra?', a: 'La traducción mecánica sin saltos no vuelve automático un programa más transparente.' },
    ],
  },
  {
    id: 'cobol',
    nav: 'COBOL no ha muerto',
    title: 'No, COBOL no es un lenguaje muerto: ¿por qué sigue vivo?',
    meta: 'DataCenter Knowledge, febrero 2021 (divulgación) · Unidad 2 (COBOL)',
    resumen:
`## La idea central
El artículo responde al revuelo de abril de 2020, cuando Nueva Jersey pidió voluntarios con COBOL para su sistema de desempleo colapsado por la pandemia: **COBOL no está muerto ni muriendo**. Sostiene que COBOL mueve la economía global (tarjetas, cajeros, finanzas, gobierno), que se sigue escribiendo código nuevo y que su fama de "lengua de dinosaurios" es un problema de percepción, no de realidad técnica.
## Parte 1: Por qué parece muerto (y por qué no lo está)
**1. El incidente de Nueva Jersey.**
- El sistema de seguro de desempleo, con aplicaciones COBOL de 40 años, se saturó por la avalancha de reclamos del COVID-19. La prensa concluyó que el lenguaje estaba muerto y que casi no quedaban programadores vivos que lo supieran.
- Según Cameron Seay (profesor de COBOL y copresidente del grupo COBOL del Open Mainframe Project), el problema no era falta de programadores sino **geografía y mantenimiento**: faltaba gente con COBOL en Nueva Jersey, y el sistema no se había actualizado al ritmo del hardware.
**2. Los números que desmienten el mito.**
- Seay estima **~mil millones de líneas nuevas de COBOL al año**: hay desarrollo activo, no solo mantenimiento.
- Casi cada compra con tarjeta o transacción de cajero pasa por mainframes con COBOL; el 95% del COBOL corre en mainframes.
- No hay hoy una escasez general de programadores COBOL, pero sí la habrá en 10–15 años **porque casi nadie lo enseña**.
**3. "Simplemente funciona".**
- La famosa tolerancia a fallos de COBOL hizo que el sistema pareciera sano hasta que la escala lo desbordó: "corre en segundo plano y no sabes que hay un problema".
- Son 60 años de refinamiento continuo de hardware y software, con un compilador que se actualiza con cada mainframe nuevo: el código viejo se revisa y extiende, no se abandona.
## Parte 2: Por qué COBOL encaja con su dominio
**1. Legible por diseño.**
- COBOL (1959, negocios y finanzas) es lineal y autodescriptivo: la verbosidad que se le critica es su fortaleza ("te dice lo que hace"), y por eso es **fácil de aprender**.
- En el curso: ejemplo de imperativo de negocios, bueno con archivos e índices, pero incapaz de estructuras dinámicas y "verbose".
**2. El problema es curricular, no técnico.**
- Casi ninguna universidad lo enseña (en Carolina del Norte, 1 de 17 campus) y los jóvenes ni conocen el mainframe. La solución propuesta: cursos gratuitos (Open Mainframe Project, IBM, Master the Mainframe) y devolver COBOL al currículo.
- Aprender COBOL da ventaja laboral: los bancos priorizan esas solicitudes.
## Matices importantes
- Es un **artículo periodístico de 2021**, no un paper académico: su evidencia son entrevistas y estimaciones, no demostraciones. Úsalo como contrapeso empírico, no como teorema.
- No discute que COBOL tenga defectos (los vistos en clase siguen válidos); discute que esté muerto. La lección del curso: los paradigmas viejos sobreviven cuando **dominan su dominio** (archivos, transacciones, negocios) y el costo de reemplazo supera al de mantenimiento.`,
    borrador:
`En el artículo *No, COBOL Is Not a Dead Language* (2021), se argumenta que COBOL sigue siendo un lenguaje vivo y económicamente esencial, contra la percepción generada en abril de 2020 cuando Nueva Jersey pidió voluntarios con COBOL para su colapsado sistema de desempleo. Según el profesor Cameron Seay, el colapso no demostró que el lenguaje estuviera muerto, sino un problema de mantenimiento y de disponibilidad geográfica de programadores: el sistema, con décadas de antigüedad, no se había actualizado al ritmo del hardware y faltaba personal con COBOL en ese estado.
En segundo lugar, el artículo aporta los datos que desmienten el mito: se escriben alrededor de mil millones de líneas nuevas de COBOL al año, casi cada transacción con tarjeta o cajero depende de mainframes con COBOL y su estabilidad legendaria —"simplemente funciona"— explica que estos sistemas corran durante décadas con poco mantenimiento visible. Esa longevidad de sesenta años no es abandono sino refinamiento continuo de hardware, compiladores y aplicaciones.
Como alternativa a jubilarlo, propone devolver COBOL a la enseñanza con cursos gratuitos y práctica en mainframes, pues su diseño lineal y autodescriptivo lo hace fácil de aprender y su dominio sigue contratando. Cabe matizar que se trata de un texto divulgativo basado en entrevistas, no de una demostración formal: no niega los defectos clásicos de COBOL estudiados en el curso, sino que muestra por qué un lenguaje imperativo sobrevive cuando domina su dominio de negocios y el costo de reemplazarlo supera al de mantenerlo.`,
    repaso: [
      { q: '¿Qué incidente origina el artículo?', a: 'Nueva Jersey pide voluntarios COBOL en abril de 2020 por el colapso del desempleo durante la pandemia.' },
      { q: '¿Qué dato desmiente la muerte de COBOL?', a: '~Mil millones de líneas nuevas al año + tarjetas/cajeros corriendo en mainframes COBOL.' },
      { q: '¿Cuál era el problema real según Seay?', a: 'Mantenimiento desactualizado y geografía, no falta global de programadores.' },
      { q: '¿Por qué COBOL es fácil de aprender?', a: 'Lineal y autodescriptivo: su verbosidad le dice al lector lo que hace.' },
      { q: '¿Qué matiz crítico debes recordar?', a: 'Es divulgación con entrevistas, no paper formal; prueba vigencia, no perfección.' },
    ],
  },
];
