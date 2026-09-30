# Unidad 4 — Comparaciones

> **Fuentes:** `u4-logico.md` IMG3–IMG7; `.docx` P1–P4; [Notion]. Cada comparación cita su fuente bloque por bloque.

## 1. Imperativo vs. lógico

> **Fuente:** `u4-logico.md` IMG5 (tabla) [transcrito de imagen, por verificar] + `.docx` P2 + [Notion].

| Dimensión | Imperativo / procedimental | Lógico |
|---|---|---|
| Unidad de programa | Instrucciones | Sentencias lógicas / FBF y términos lógicos (p. ej. predicados) |
| Qué hace la máquina | Ejecuta | Demuestra (evaluación veritativa) |
| Datos | Espacios en RAM medidos en bytes | Variables en sentido lógico |
| Estado de la variable | Casilla tipada con valor actual | Existencia previa al tipo; ligadura provisional y revisable (`.docx` P3) |
| Error típico | Estado inconsistente | Premisas insuficientes o contradictorias (no hay «ejecución» que depurar paso a paso) |

- `.docx` P2 lo refuerza: «no tenemos sentencias evaluadas ni instrucciones, son sentencias demostradas».
- [Explicación pedagógica — elaboración propia] Pregunta guía: ante un bug imperativo preguntas «¿qué instrucción falló?»; ante un programa lógico preguntas «¿qué premisa falta o qué conclusión no se sigue?».

## 2. Relaciones vs. funciones

> **Fuente:** `u4-logico.md` IMG3 [transcrito de imagen, por verificar].

- Tesis del slide: las funciones se describen mediante sentencias; por eso CP1 (que describe sentencias) describe funciones parcialmente computables y, por extensión, algoritmos.
- Contraste:
  - Función (visión clásica): mapeo entrada → salida que se evalúa.
  - Relación (visión lógica): predicado que es verdadero para ciertos individuos (dominio, `.docx` P3); «calcular» es demostrar para qué individuos se cumple.
- [Explicación pedagógica — elaboración propia] La catenaria (Problema 1) pide «valores funcionales» — natural como función; las tres amigas (Problema 2) piden satisfacer restricciones — natural como relación. El paradigma lógico brilla en lo segundo.
- [VACÍO: sin fuente] Cómo se declara una relación/función en Prolog concreto (aridad, modos, funtores): ausente en fuentes.

## 3. Variable imperativa vs. variable lógica

> **Fuente:** `.docx` P3 + `u4-logico.md` IMG5 + [Notion] (tabla).

| Dimensión | Variable imperativa | Variable lógica |
|---|---|---|
| Qué es | Espacio en RAM medido en bytes (IMG5) | Marcador cuya pertenencia a un conjunto se determina después de existir (IMG5 + `.docx` P3) |
| Tipo | Amarrado a la declaración | No amarrada: puede ligarse a un valor de un tipo, desligarse, quedar indeterminada y ligarse a otro tipo distinto (`.docx` P3) |
| Tiempo de vida | Reservado/liberado | Ligadura durante la demostración; revisable por backtracking (esto último es elaboración: el backtracking como tal es [VACÍO: sin fuente]) |
| Pregunta que responde | «¿Qué hay en esta casilla?» | «¿Para qué individuos es verdadero este predicado?» (dominio, `.docx` P3) |

## 4. Copi vs. alternativas (modus ponens / cláusulas)

> **Fuente:** `u4-logico.md` IMG6–IMG7 [transcrito de imagen, por verificar] + [Notion].

| Sistema | Reglas/operadores | Juicio de la fuente |
|---|---|---|
| Copi | 9 inferencia + 10 sustitución + 4 cuantificación + 2 negación de cuantificador (+ 4 igualdad opcional) | Completo y conocido (Mat. Discreta) pero «muy poco práctico», NP [POR-VERIFICAR] |
| Modus ponens | 2 operadores, 1 regla (MP) | Alternativa viable; con restricciones, P [POR-VERIFICAR] |
| Cálculo de cláusulas | Sin operadores, 1 regla: resolución con unificación | Alternativa viable; con restricciones, P [POR-VERIFICAR] |

## 5. Lo no comparable (falta de fuente)

- [VACÍO: sin fuente] Comparar sintaxis, semántica operacional (orden, corte, fail), eficiencia o estilo idiomático Prolog frente a imperativo/funcional: las fuentes no dan material.
- [POR-VERIFICAR] «Turing completa no reconoce CP1» (`.docx` P1) frente a «gramática fácilmente reconocible» (IMG4): se citan ambas sin conciliar; pendiente de verificación contra bibliografía.
