# Unidad 4 — Ejercicios (12)

> **Fuentes:** `u4-logico.md`; `.docx` P1–P4; [Notion]. Cada ejercicio cita su fuente. Donde no hay fuente se marca [VACÍO: sin fuente] y no se inventa solución en Prolog.

## Ej. 1 — La catenaria en tres paradigmas [transversal]

- **Fuente:** `u4-logico.md` Problemas IMG1–IMG4 [transcrito de imagen, por verificar].
- **Enunciado:** Dado el cable colgando entre dos puntos (punto más bajo = 0), explicar qué haría cada paradigma: imperativo (iterar/evaluar la función punto a punto), funcional (componer la función forma-del-cable), lógico (relación «el punto (X,Y) pertenece a la curva»).
- **Clasificación:** transversal — incómodo en lógico, natural en imperativo/funcional.
- **Objetivo:** distinguir problemas funcionales de problemas relacionales.
- **Dificultad:** media.
- **Solución (respaldada):** No hay solución numérica en fuentes; se acepta como solución la caracterización anterior + la pregunta del slide («¿qué valores funcionales daría la función?»). El valor concreto de la función es [VACÍO: sin fuente].

## Ej. 2 — Tres amigas: resolver por descarte [transversal]

- **Fuente:** `u4-logico.md` Problemas IMG4 [transcrito de imagen, por verificar].
- **Enunciado:** Con las 6 pistas (Beatriz≠García; López=ingeniera; actriz=María; maestra≠Méndez; Alicia llegó tarde; todo diferente), hallar nombre/apellido/profesión de cada una.
- **Clasificación:** transversal — prototipo lógico (restricciones + demostración).
- **Objetivo:** aplicar el esquema premisas→conclusión (IMG6).
- **Dificultad:** media.
- **Solución (derivación propia a partir de las premisas citadas):** Nombres {Alicia, Beatriz, María}; de (3) María=actriz; de (2) López=ingeniera ⇒ López≠María; ingeniera≠actriz ⇒ ingeniera ∈ {Alicia, Beatriz}; maestra es la tercera. Con (1)(4)(6) se completa por descarte la asignación consistente (apellido López↔ingeniera; García y Méndez repartidos entre actriz y maestra según (1)(4)). Se deja la tabla final como trabajo del estudiante verificable contra las 6 pistas.

## Ej. 3 — Búsqueda en texto raw/ascii [transversal]

- **Fuente:** `u4-logico.md` Problemas IMG5 [transcrito de imagen, por verificar].
- **Enunciado:** Dado texto ascii puro e hilera, reportar líneas donde aparece, mostrándolas. Describir la versión imperativa (recorrido + comparación), la funcional (filtro sobre líneas) y la lógica (relación aparece-en(Hilera, Línea)).
- **Clasificación:** transversal — natural en imperativo; expresable en lógico como relación.
- **Objetivo:** practicar la tabla imperativo vs. lógico (IMG5) sobre un caso concreto.
- **Dificultad:** fácil-media.
- **Solución (respaldada):** especificación por niveles aceptada; el código en cualquier lenguaje es [VACÍO: sin fuente].

## Ej. 4 — CP1 describe algoritmos (cadena IMG3)

- **Fuente:** `u4-logico.md` IMG2–IMG3 + [Notion].
- **Enunciado:** Reconstruir la cadena: sentencias matemáticas → funciones vía sentencias → funciones parcialmente computables → algoritmos.
- **Objetivo:** fijar el fundamento teórico del paradigma.
- **Dificultad:** fácil.
- **Solución:** la cadena literal del slide (ver `concepts.md` C2). Vínculo con Gödel se cita sin ampliar [POR-VERIFICAR].

## Ej. 5 — Triple condición del paradigma lógico

- **Fuente:** `u4-logico.md` IMG4 + [Notion].
- **Enunciado:** Enunciar las 3 condiciones simultáneas y explicar por qué cada una es necesaria (equivalencia CP1 / gramática reconocible / ejecución-demostración polinomial).
- **Objetivo:** memorización operativa de la definición.
- **Dificultad:** fácil.
- **Solución:** las 3 del slide (`concepts.md` C3).

## Ej. 6 — Tabla imperativo vs. lógico

- **Fuente:** `u4-logico.md` IMG5 + `.docx` P2 + [Notion].
- **Enunciado:** Reproducir la tabla (operaciones/acción/datos) y glosar cada celda con una frase.
- **Objetivo:** contraste central de la unidad.
- **Dificultad:** fácil.
- **Solución:** tabla de `examples.md` E1.

## Ej. 7 — Variable lógica

- **Fuente:** `.docx` P3 + `u4-logico.md` IMG5.
- **Enunciado:** Explicar «primero existe, luego se determina su conjunto» y el ciclo ligar→desligar→quedar indeterminada→religar con otro tipo.
- **Objetivo:** fijar la noción de variable no amarrada a tipo.
- **Dificultad:** fácil-media.
- **Solución:** citas literales de `.docx` P3 + IMG5 (`concepts.md` C5).

## Ej. 8 — Sistema de Copi: inventario + mecanismo

- **Fuente:** `u4-logico.md` IMG6 + [Notion].
- **Enunciado:** Listar el conteo (9+10+4+2[+4]) y describir el mecanismo (premisas verdaderas + reglas hasta la conclusión).
- **Objetivo:** base de demostración.
- **Dificultad:** fácil.
- **Solución:** inventario IMG6 (`concepts.md` C7).

## Ej. 9 — Por qué Copi no y qué sí [POR-VERIFICAR]

- **Fuente:** `u4-logico.md` IMG7 + [Notion].
- **Enunciado:** Explicar «Copi NP → alternativas MP (2 operadores/1 regla) y cláusulas (0 operadores/resolución+unificación) → con restricciones P».
- **Objetivo:** entender la motivación de los fragmentos restringidos.
- **Dificultad:** media.
- **Solución:** resumen fiel de IMG7; las etiquetas de complejidad van marcadas [POR-VERIFICAR] y no deben citarse como hecho establecido.

## Ej. 10 — FBF y dominios

- **Fuente:** `.docx` P3–P4.
- **Enunciado:** (a) Expandir FBF. (b) Definir dominio con la frase del .docx. (c) [VACÍO: sin fuente] Dar la gramática formal de FBF y declarar dominios/compuestos/listas en Prolog.
- **Objetivo:** separar lo respaldado de lo faltante.
- **Dificultad:** fácil para (a)(b); (c) no evaluable con estas fuentes.
- **Solución:** (a) «formulas bien formadas». (b) «individuos para los cuales un predicado es verdadero…». (c) [VACÍO: sin fuente] — derivar a bibliografía/manual de Prolog.

## Ej. 11 — Unificación y resolución (noción, sin algoritmo) [VACÍO parcial]

- **Fuente parcial:** `u4-logico.md` IMG7 (menciona «resolución (con unificación)») + [Notion].
- **Enunciado:** Explicar en una frase el papel de la unificación dentro de la resolución; [VACÍO: sin fuente] ejecutar una unificación paso a paso o una refutación por resolución.
- **Objetivo:** ubicar el término sin fingir dominio algorítmico.
- **Dificultad:** media (noción fácil; algoritmo ausente).
- **Solución:** solo la noción («la regla única del cálculo de cláusulas, asistida por unificación»). Todo ejemplo trabajado es [VACÍO: sin fuente].

## Ej. 12 — Inventario de huecos: hechos, consultas, backtracking, orden, corte y fail [VACÍO: sin fuente]

- **Fuente:** ninguna (verificación negativa contra `u4-logico.md`, `.docx` P1–P4 y [Notion]).
- **Enunciado:** Para cada tema —hechos y consultas; backtracking y orden de búsqueda; corte (`!`); `fail`— (1) declarar que las fuentes no traen sintaxis ni ejemplos; (2) formular la pregunta que quedaría pendiente (p. ej. «¿cómo se poda la búsqueda con el corte?»); (3) no responderla inventando código.
- **Objetivo:** blindar honestidad y generar agenda de estudio con el manual de Prolog.
- **Dificultad:** meta (fácil de enunciar, imposible de resolver con estas fuentes).
- **Solución:** [VACÍO: sin fuente] en los cuatro subtemas; llevar a `review.md` → verificación pendiente.
