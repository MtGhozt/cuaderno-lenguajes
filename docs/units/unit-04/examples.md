# Unidad 4 — Ejemplos respaldados por las fuentes

> **Fuentes:** `docs/transcripciones/u4-logico.md` (Problemas IMG1–IMG5; Paradigma_logico IMG1–IMG7); `.docx` P1–P4; [Notion]. | Regla: solo ejemplos que las fuentes respaldan. No se inventa sintaxis Prolog: no hay bloques de código Prolog en este archivo.

## E1. Tabla comparativa imperativo vs. lógico (copia fiel del slide)

> **Fuente:** `u4-logico.md` IMG5 [transcrito de imagen, por verificar] + [Notion].

|  | Paradigma imperativo/procedimental | Paradigma lógico |
|---|---|---|
| Operaciones | Instrucciones | Sentencias (FBF's) |
| Acción | Ejecución | Evaluación veritativa (demostración) |
| Datos | Espacios, medidos en bytes, en RAM | Equivalen a variables en sentido lógico |

- [Notion] trae la misma tabla (instrucciones/sentencias, ejecución/demostración, RAM-bytes/variables lógicas).

## E2. Problema transversal 1 — La catenaria (enunciado para comparar paradigmas)

> **Fuente:** `u4-logico.md` Problemas IMG1–IMG4 [transcrito de imagen, por verificar].

- Escena: cable/cuerda/cadena flexible colgando entre dos puntos no necesariamente al mismo nivel; por su carga toma una curva (foto de puente colgante con curva roja superpuesta; ejes −200…200 y −150…150).
- Pregunta: tomando el punto más bajo como 0 del sistema de coordenadas, ¿qué valores funcionales daría la función de la forma del cable?
- Uso en la unidad: es un caso «resoluble por computadora programada apropiadamente» para el que se pide diseñar el algoritmo en cada paradigma (ver `exercises.md` Ej. 1). No hay solución en las fuentes.

## E3. Problema transversal 2 — Tres amigas (caso idealmente lógico)

> **Fuente:** `u4-logico.md` Problemas IMG4 [transcrito de imagen, por verificar].

- Tres amigas con nombre, apellido y profesión, todos diferentes. Pistas:
  1. Beatriz no es de apellido García. 2. López es ingeniera. 3. La actriz se llama María.
  4. La maestra no es Méndez. 5. Alicia llegó tarde. 6. Nombres, apellidos y profesiones diferentes.
- Pregunta: nombre, apellido y profesión de cada una.
- Por qué es paradigmático del enfoque lógico [Explicación pedagógica — elaboración propia]: el problema ya viene como conjunto de premisas/restricciones y una pregunta cuya respuesta se demuestra por descarte; corresponde exactamente al esquema «premisas + reglas → conclusión» de IMG6. El razonamiento completo va en `exercises.md` Ej. 2.

## E4. Problema transversal 3 — Búsqueda en texto raw/ascii

> **Fuente:** `u4-logico.md` Problemas IMG5 [transcrito de imagen, por verificar].

- Dado un texto «raw» (ascii puro) y una hilera, indicar en qué líneas aparece, mostrando esas líneas.
- Uso en la unidad: contraste de paradigmas (imperativo: recorrido de buffer; lógico: relación «la hilera aparece en la línea L»). Sin solución en fuentes (ver `exercises.md` Ej. 3).

## E5. Esquema abstracto de demostración (sin sintaxis, solo estructura)

> **Fuente:** `u4-logico.md` IMG6 + [Notion] (esquema); el contenido proposicional es ilustrativo y genérico.

- Forma general respaldada: Premisas (se asumen verdaderas) → aplicaciones sucesivas de reglas de inferencia → conclusión.
- Ejemplo estructural mínimo (sin código, sin conectivas formales tomadas de fuera): de las premisas «toda ingeniera del grupo es López» y «López es ingeniera» se concluye por instanciación que una individua dada es ingeniera si es López. [Explicación pedagógica — elaboración propia]: ilustra el movimiento premisa→conclusión sin pretender ser una derivación en Copi.
- [VACÍO: sin fuente] Derivación completa etiquetada con reglas de Copi, prueba por resolución, traza de unificación o traza de backtracking: ninguna fuente trae una.

## E6. Matriz final Tres Amigas (asignación)

> **Fuente:** Guía Jorge S4C2.

| Nombre | Apellido | Profesión |
|---|---|---|
| Beatriz | López | Ingeniera |
| María | Méndez | Actriz |
| Alicia | García | Maestra |

## E7. Tres Amigas en Prolog (dominios, unificación, backtracking)

> **Fuente:** Guía Jorge S4C2 (código proyectado / modelado en la guía).

```prolog
resolver(Amigas) :-
    Amigas = [
        amiga(beatriz, A1, P1),
        amiga(maria,   A2, P2),
        amiga(alicia,  A3, P3)
    ],
    Apellidos = [garcia, lopez, mendez],
    permutation(Apellidos, [A1, A2, A3]),
    Profesiones = [ingeniera, actriz, maestra],
    permutation(Profesiones, [P1, P2, P3]),
    A1 \= garcia,
    member(amiga(_, lopez, ingeniera), Amigas),
    member(amiga(maria, _, actriz), Amigas),
    \+ member(amiga(_, mendez, maestra), Amigas).

% ?- resolver(Res).
% Res = [amiga(beatriz, lopez, ingeniera),
%        amiga(maria, mendez, actriz),
%        amiga(alicia, garcia, maestra)].
```

- **Dominios/listas:** `Apellidos` y `Profesiones` como listas; `permutation` asigna valores a variables.
- **Unificación:** `member(amiga(_, lopez, ingeniera), Amigas)` liga la amiga cuyo apellido es López con profesión ingeniera.
- **Backtracking:** con una restricción contradictoria extra (p. ej. «Beatriz es maestra»), se agotan las ramas y el motor responde `false`.

## E8. Lo que NO se ejemplifica aún

- [VACÍO: sin fuente] Corte (`!`) y `fail`.
- [VACÍO: sin fuente] Traza formal MGU / occur-check (más allá del ejemplo anterior).
