// Curriculum Exam 2 — reescritura didáctica a partir de Clases 1–7 (ASR).
// Meta: estudiar desde cero SIN reabrir el video. Fuente: Clase N.

export const PATHS = {
  rapida: {
    id: 'rapida',
    title: 'Repaso rápido · 20 min',
    desc: 'L1 → L4 → L5 → L6 → L8 → O2 + checks.',
    lessons: ['l1', 'l4', 'l5', 'l6', 'l8', 'o2'],
  },
  profunda: {
    id: 'profunda',
    title: 'Ruta profunda',
    desc: 'L1–L8 y O1–O3 en orden de clase.',
    lessons: ['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'o1', 'o2', 'o3'],
  },
};

export const LESSONS = [
  {
    id: 'l1', track: 'logico', clase: 1, num: 'L1',
    title: 'Fundamentos del paradigma lógico',
    objective: 'Explicar por qué un algoritmo puede ser una sentencia en CP1 y contrastar demostrar vs ejecutar/evaluar.',
    interactive: 'comparator',
    asr: [
      { noise: 'Eclipse (sistemas de reglas)', likely: 'CLIPS' },
      { noise: 'Copy / Coppe', likely: 'Copi (Irving Copi)' },
      { noise: 'prologue', likely: 'Prolog' },
      { noise: 'Geddel', likely: 'Gödel' },
      { noise: 'Bacchus Naur', likely: 'Backus–Naur (BNF)' },
    ],
    sections: [
      { kind: 'explain', h: 'Qué problema resuelve este paradigma', body:
`**Fuente: Clase 1.** La lógica (Irving Copi) estudia métodos para distinguir argumentos correctos de incorrectos. Un argumento justifica una **sentencia**.

Historia útil (solo lo que importa al examen): de Aristóteles al cálculo de predicados de primer orden (**CP1**). Gödel: hay verdades no demostrables en sistemas ricos — eso no impide usar la lógica para **describir** computación.

**Cadena del curso:** toda función (parcialmente) computable se describe con sentencias → todo algoritmo se describe en CP1 → nace el paradigma lógico.` },
      { kind: 'explain', h: 'Tres paradigmas en una frase', body:
`| Paradigma | Operaciones | Acción |
|---|---|---|
| Imperativo | Instrucciones | Se **ejecutan** |
| Funcional | Funciones | Se **evalúan** |
| Lógico | Sentencias (FBF) | Se **demuestran** |

Un lenguaje lógico debe: (1) ser equivalente a CP1, (2) tener gramática compilable (BNF), (3) “ejecutar” como demostración en tiempo **práctico** (polinomial en el fragmento usado).` },
      { kind: 'explain', h: 'Variable lógica', body:
`Primero **existe** la variable; después se fija su conjunto de pertenencia. Puede ligarse, desligarse y religarse. No es una casilla tipada en RAM.

**Prolog** → IA simbólica / logicista. **CLIPS** → sistemas expertos por reglas. [posible ruido ASR: «Eclipse» → CLIPS]

Falacia ≠ sentencia falsa. La lógica clásica es monotónica; la clase menciona razonamiento no monotónico como límite.` },
      { kind: 'mistakes', h: 'Errores comunes', body:
`- Decir que el programa lógico “ejecuta instrucciones”.
- Confundir Copi (humano) con el motor de Prolog/CLIPS.
- Pensar que CLIPS es el IDE Eclipse.` },
    ],
    check: ['e2q01', 'e2q02', 'e2q03'],
  },
  {
    id: 'l2', track: 'logico', clase: 2, num: 'L2',
    title: 'Simbolización y demostración (Copi)',
    objective: 'Simbolizar oraciones indicativas y reconstruir la prueba ácidos/vinagre con reglas de Copi.',
    interactive: null,
    asr: [
      { noise: 'binario (ejemplo)', likely: 'vinagre' },
      { noise: 'cirugismo', likely: 'silogismo' },
    ],
    sections: [
      { kind: 'explain', h: 'Reglas de simbolización', body:
`**Fuente: Clase 2.** Solo el modo **indicativo** entra bien a CP1. Fija interpretación (constantes, predicados) y el **alcance** de cuantificadores con paréntesis.

Trampa de clase: “ácidos **y** bases” en español, al simbolizar categorías, suele ser **disyunción** \`A(x) ∨ B(x)\`, no conjunción.` },
      { kind: 'example', h: 'Ejercicio: ácidos / bases / vinagre', body:
`Interpretación:
- \`A(x)\` = x es ácido · \`B(x)\` = x es base · \`Q(x)\` = x es compuesto químico · \`V(x)\` = x es vinagre

Premisas:
1. \`∀x ((A(x) ∨ B(x)) → Q(x))\`
2. \`∀x (V(x) → A(x))\`

Conclusión: \`∀x (V(x) → Q(x))\`

**Demostración (esquema de clase):**
1–2. Premisas
3. **EU** de (2): \`V(x) → A(x)\`
4. **UU** de (1): \`(A(x) ∨ B(x)) → Q(x)\`
5. **Argumento hipotético:** asumir \`V(x)\`
6. **MP** con (3) → \`A(x)\`
7. **Adición** → \`A(x) ∨ B(x)\`
8. **MP** con (4) → \`Q(x)\`
9. Descargar hipótesis: \`V(x) → Q(x)\`
10. **GU** → \`∀x (V(x) → Q(x))\`

La “máquina virtual” del paradigma es un **motor de inferencia**, no un evaluador aritmético.` },
      { kind: 'mistakes', h: 'Errores comunes', body:
`- En ejemplificación **existencial**, reusar una variable ya ocupada (hace falta variable fresca).
- Simbolizar “ácidos y bases” como \`A ∧ B\` cuando el sentido es “cualquiera de los dos”.
- Tratar una falacia de IA generativa como prueba formal.` },
    ],
    check: ['e2q04', 'e2q05'],
  },
  {
    id: 'l3', track: 'logico', clase: 3, num: 'L3',
    title: 'Algoritmos como lógica: MCM y MCD',
    objective: 'Codificar MCM/MCD como definiciones en CP1 y ver el cálculo como ∃ constructivo.',
    interactive: null,
    sections: [
      { kind: 'explain', h: 'Interpretación (teoría de modelos)', body:
`**Fuente: Clase 3.** Antes de “programar”, fija el dominio y el significado de los símbolos.

- Dominio: enteros
- \`M(x,y,z)\`: x es MCM de y,z
- \`D(x,y,z)\`: x es MCD de y,z
- \`R(x,y,z)\`: x es residuo de y ÷ z
- \`=\`, \`·\` como funciones habituales

Un cálculo es una **demostración existencial constructiva**: \`∀a∀b ∃x …\` — hallar el testigo.` },
      { kind: 'example', h: 'MCM y Euclides en CP1', body:
`Idea de MCM (testigo del cociente con el MCD):

\`∀a∀b ∃x ∃y ( D(y,a,b) ∧ x = (a·b)/y )\`

MCD euclidiano (dos casos vía residuo; cuida el **alcance** del ∃):
- Si \`R(0,a,b)\` entonces \`D(b,a,b)\` (el MCD es b)
- Si no, \`D(a,b) = D(b, a mod b)\` — mismo algoritmo que en C/funcional, ahora como **sentencias**.` },
      { kind: 'mistakes', h: 'Errores comunes', body:
`- Creer que la máquina “viola” la indecidibilidad: trabaja sobre un conjunto **finito** de premisas dadas.
- Escribir definiciones sin fijar interpretación.` },
    ],
    check: ['e2q06', 'e2q07'],
  },
  {
    id: 'l4', track: 'logico', clase: 3, num: 'L4',
    title: 'Backward vs forward chaining',
    objective: 'Describir BC (Prolog) y FC (CLIPS) como procedimientos, con backtracking.',
    interactive: null,
    secondaryClases: [5],
    sections: [
      { kind: 'explain', h: 'Dos algoritmos de búsqueda', body:
`**Fuente: Clases 3 y 5.**

**Backward chaining (Prolog):** quiero demostrar φ → ¿qué reglas la implican? → subgoals → … hasta hechos. Luego la verdad “sube”.

**Forward chaining (CLIPS):** parto de hechos → disparo reglas cuyo antecedente ya es verdadero → nuevos hechos → repito.

Ambos pueden **retroceder** si una rama muere.` },
      { kind: 'example', h: 'FC + backtracking (geometría, Clase 5)', body:
`Meta: demostrar que la suma de ángulos internos de un triángulo es un ángulo llano.

Premisas típicas: postulado de paralelas; ángulos correspondientes iguales; transversal.

En clase: se avanza “hacia delante” encadenando consecuencias; si se etiquetan mal los puntos (\`A'/B'/C'\`), la rama falla y hay que **backtrack** y reetiquetar. Eso es FC con control de fallo — no magia.` },
      { kind: 'explain', h: 'Horn y límites', body:
`Prolog no demuestra “toda la lógica”: restringe a **cláusulas de Horn** (≤1 literal positivo) + backtracking. Sigue siendo útil/Turing-completo en la práctica del curso, pero no es un oráculo decidible de CP1.` },
      { kind: 'mistakes', h: 'Errores comunes', body:
`- Decir que Prolog y CLIPS hacen lo mismo (uno va del goal atrás; el otro de hechos adelante).
- Confundir agenda CLIPS con la pila de goals de Prolog.` },
    ],
    check: ['e2q08', 'e2q09'],
  },
  {
    id: 'l5', track: 'logico', clase: 4, num: 'L5',
    title: 'Resolución de Robinson y cláusulas',
    objective: 'Aplicar Skolem, el pipeline de 9 pasos y la regla de resolución sobre el ejemplo de los caballos.',
    interactive: 'resolution',
    secondaryClases: [6],
    asr: [
      { noise: 'Scholem / Lohenheim', likely: 'Skolem / Löwenheim–Skolem' },
      { noise: 'Smulian', likely: 'Smullyan' },
    ],
    sections: [
      { kind: 'explain', h: 'Por qué una sola regla', body:
`**Fuente: Clase 4.** Buscar pruebas con ~25 reglas de Copi explota. Robinson: trabaja solo con **cláusulas** (disyunciones sin cuantificadores) y **una** inferencia: resolución.

De \`(λ ∪ K)\` y \`(¬λ ∪ M)\` obtienes el **resolvente** \`(K ∪ M)\`.` },
      { kind: 'explain', h: 'Skolem (alternativa a EE)', body:
`- \`∃x P(x)\` → \`P(c)\` con constante fresca (si no depende de un ∀).
- \`∀y ∃x P(x,y)\` → \`P(f(y), y)\` — **función** de las variables universales del alcance.

Así quitas existenciales sin las trampas de la ejemplificación existencial humana.` },
      { kind: 'example', h: 'Caballos → 9 pasos (qué hacer en cada uno)', body:
`\`C(x)\` caballo · \`A(x)\` animal · \`K(x,y)\` “x es cabeza de y”.

Premisa: \`∀x (C(x) → A(x))\`

Conclusión: \`∀x ( ∃y (C(y) ∧ K(x,y)) → ∃z (A(z) ∧ K(x,z)) )\`

**Pipeline:**
1. Quitar → / ↔ (implicación material)
2. Negaciones hasta átomos (De Morgan, ¬∀, ¬∃)
3. Renombrar variables por cuantificador
4. Eliminar ∃ con Skolem (constantes/funciones)
5. Prenexa (∀ al frente)
6. Eliminar ∀
7. Forma normal conjuntiva
8. Renombrar variables globalmente
9. Separar conjunciones → **una cláusula por línea**

Después: resolución (y en L6, refutación + unificación hasta □).` },
      { kind: 'mistakes', h: 'Errores comunes', body:
`- Olvidar que Skolem depende del alcance de los ∀.
- Resolver literales que no son complementarios.
- Creer que resolución “plana” ya es completa (ver L6).` },
    ],
    check: ['e2q10', 'e2q11', 'e2q12'],
  },
  {
    id: 'l6', track: 'logico', clase: 6, num: 'L6',
    title: 'Refutación, unificación y núcleo de Prolog',
    objective: 'Usar resolución con refutación + unificación y enunciar el stack lógico de Prolog.',
    interactive: 'unify',
    sections: [
      { kind: 'explain', h: 'Qué prueba (y qué no) la resolución plana', body:
`**Fuente: Clase 6.**

| Con resolución “plana” | Resultado |
|---|---|
| MP, MT, silogismo hipotético, dilema constructivo | Sí |
| Conjunción (de \`{P}\` y \`{Q}\` sacar \`{P∧Q}\`) | **No** |
| Adición (de \`P\` sacar \`P∨Q\`) | **No** |

Conclusión: sin refutación, **no es completa**.` },
      { kind: 'explain', h: 'Receta de refutación', body:
`Para probar φ desde Δ:
1. Clausula Δ ∪ {¬φ}
2. Resuelve hasta la **cláusula vacía □**
3. □ = contradicción ⇒ Δ ⊢ φ

Contradicción ≠ falacia (falacia = prueba mal formada; contradicción = siempre falsa).

Ejemplo MP por refutación: de \`{¬P∨Q, P}\` agrega \`¬Q\` y resuelve hasta □.` },
      { kind: 'explain', h: 'Unificación', body:
`Sustitución que hace idénticos dos términos. Debe aplicarse a **todas** las ocurrencias de la variable en la cláusula.

Con unificación + refutación, el ejemplo de los caballos cierra en □.

**Prolog (cierre de Clase 6)** = cláusulas + resolución con refutación + unificación + **backward chaining**.` },
      { kind: 'mistakes', h: 'Errores comunes', body:
`- Confundir □ con “éxito vacío sin premisas”.
- Unificar solo una ocurrencia de la variable.
- Llamar “falacia” a una contradicción formal.` },
    ],
    check: ['e2q13', 'e2q14', 'e2q15'],
  },
  {
    id: 'l7', track: 'logico', clase: 5, num: 'L7',
    title: 'Prolog en la práctica (puente)',
    objective: 'Leer Horn mínimo, entender listas/libres y por qué Prolog no es toda la lógica.',
    interactive: null,
    sections: [
      { kind: 'explain', h: 'Por qué Horn', body:
`**Fuente: Clases 5–6.** Prolog restringe a **cláusulas de Horn** (a lo sumo un literal positivo) para tener un procedimiento de búsqueda tractable (BC + unificación + retroceso), no un demostrador total de CP1.` },
      { kind: 'example', h: 'Hechos, reglas, consulta', body:
`\`\`\`prolog
humano(socrates).
mortal(X) :- humano(X).
% ?- mortal(socrates).  → true
\`\`\`

\`A :- B, C\` es Horn. La consulta es un **goal**; bajo el lente de L6, equivale a buscar □ tras negar el goal.` },
      { kind: 'explain', h: 'Modelo de datos (Clase 5)', body:
`Sin vectores/matrices nativos: estructuras vía **listas** (heterogéneas, anidables). Elementos pueden quedar **libres** hasta unificarse.` },
      { kind: 'mistakes', h: 'Errores comunes', body:
`- Mezclar sintaxis CLIPS (\`defrule\`) con Prolog.
- Interpretar un \`false\` como bug: a menudo faltan hechos/reglas.` },
    ],
    check: ['e2q16', 'e2q17'],
  },
  {
    id: 'l8', track: 'logico', clase: 7, num: 'L8',
    title: 'CLIPS y forward chaining',
    objective: 'Explicar arquitectura de sistema experto y leer un patrón defrule/assert.',
    interactive: 'clips',
    secondaryClases: [5],
    asr: [
      { noise: 'Eclipse', likely: 'CLIPS' },
      { noise: 'Mouse Phonics', likely: 'modus ponens' },
      { noise: 'dev rule / fact / template', likely: 'defrule / deffacts / deftemplate' },
    ],
    sections: [
      { kind: 'explain', h: 'Arquitectura (Clase 5)', body:
`**CLIPS** = *C Language Integrated Production System* (escrito en C; no es un dialecto de C).

Piezas:
- **Base de conocimiento:** reglas IF–THEN (modus ponens)
- **Base de hechos / entorno**
- **Motor:** arma la **agenda** (reglas activables), resuelve conflictos, dispara; nuevos hechos → nueva agenda; suele disparar cada regla **una vez**; si no es determinista → backtracking
- UI / explicación (“apliqué R1, R3…”)

FC **no** exige negar la conclusión como en refutación Prolog.` },
      { kind: 'example', h: 'Taxonomía animal (patrón de Clase 7)', body:
`Formas: \`defrule\`, \`deffacts\`, \`deftemplate\`.

\`\`\`clips
(defrule mammal
  (has-hair ?x)
  =>
  (assert (mammal ?x)))

(defrule carnivore
  (mammal ?x)
  (eats-meat ?x)
  =>
  (assert (carnivore ?x)))
\`\`\`

Flujo típico: entorno vacío → preguntar (\`printout\`/\`read\`) → \`assert\` rasgos → cadena pelo→mamífero→carnívoro→especie → \`printout\`. Varios antecedentes = ∧. También existe \`retract\`.` },
      { kind: 'mistakes', h: 'Errores comunes', body:
`- Pensar que CLIPS “compila C”.
- Olvidar que la agenda solo muestra reglas cuyo antecedente ya es verdadero.` },
    ],
    check: ['e2q18', 'e2q19', 'e2q20'],
  },
  {
    id: 'o1', track: 'oo', clase: 7, num: 'O1',
    title: 'Por qué nació la orientación a objetos',
    objective: 'Enunciar el problema de los grandes sistemas imperativos y el aporte de Simula/Wirth.',
    interactive: null,
    sections: [
      { kind: 'explain', h: 'El dolor imperativo a gran escala', body:
`**Fuente: Clase 7.** En sistemas grandes (era COBOL y afines) el proceso se **duplicaba**: datos “arriba”, proceso “abajo”. Mantener una entidad significaba tocar muchos sitios.

Respuestas previas: Wirth (*algorithms + data structures = programs*), ADTs, bibliotecas de rutinas (Hopper).

**Simula** (ingenieros noruegos): piezas tipo Lego para simulación → **clases/objetos** reutilizables.` },
      { kind: 'mistakes', h: 'Errores comunes', body:
`- Reducir OO a “structs + funciones” sin encapsulación.
- Ignorar el problema de mantenimiento que motivó el paradigma.` },
    ],
    check: ['e2q21', 'e2q22'],
  },
  {
    id: 'o2', track: 'oo', clase: 7, num: 'O2',
    title: 'Objetos, estado, métodos y mensajes',
    objective: 'Modelar un dominio como objetos que se envían mensajes y encapsulan estado.',
    interactive: 'oo',
    asr: [{ noise: 'Molotov (lenguaje)', likely: 'Smalltalk' }],
    sections: [
      { kind: 'explain', h: 'Modelo mental', body:
`**Fuente: Clase 7.** Objeto = **estado** + **métodos**. Métodos ≈ mensajes.

Tres tipos de mensaje:
1. **Mutar** estado
2. **Consultar** estado
3. **Calcular** necesitando otros objetos

Programa OO = definiciones de objetos + **secuencias de mensajes**. Pilares: abstracción y **encapsulación**.` },
      { kind: 'example', h: 'Pila (ejemplo de clase)', body:
`Estado: ¿vacía?, tope, dirección de crecimiento.
Mensajes: \`push\`, \`pop\`, \`top\`, \`isEmpty\` — no tocas la representación interna.
El lab de retiro (Cliente → Cajero → Cuenta) muestra los tres tipos de mensaje en cadena.` },
      { kind: 'explain', h: 'Tareas del algoritmo por paradigma', body:
`| Paradigma | Las tareas son… |
|---|---|
| Imperativo | Instrucciones |
| Funcional | Evaluaciones de funciones |
| Lógico | Demostraciones de sentencias |
| OO | **Envíos de mensajes** |` },
      { kind: 'mistakes', h: 'Errores comunes', body:
`- Tratar un mensaje como “función global”.
- Exponer campos públicos “porque es más fácil”.` },
    ],
    check: ['e2q23', 'e2q24', 'e2q25'],
  },
  {
    id: 'o3', track: 'oo', clase: 7, num: 'O3',
    title: 'Smalltalk puro vs híbridos',
    objective: 'Contrastar OO pura (Smalltalk/Squeak) con Java/Python/C++.',
    interactive: 'comparator',
    sections: [
      { kind: 'explain', h: 'Pureza vs ecosistema', body:
`**Fuente: Clase 7.** Smalltalk/Squeak: **todo** es objeto; hasta el \`if\` es mensaje.

Java/Python/C++: zona gris — hay objetos, pero también instrucciones “sueltas”. Útiles por ecosistema e inercia (librerías, embedding).

La clase advierte: la IA acelera escribir código; no sustituye saber revisar, probar y mantener.` },
      { kind: 'mistakes', h: 'Errores comunes', body:
`- Afirmar que “Python es OO pura”.
- Confundir encapsulación con “poner todo en una clase dios”.` },
    ],
    check: ['e2q26', 'e2q27'],
  },
];

export function lessonById(id) {
  return LESSONS.find(l => l.id === id);
}

export function lessonIndex(id) {
  return LESSONS.findIndex(l => l.id === id);
}
