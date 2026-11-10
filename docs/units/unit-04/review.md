# Unidad 4 — Review (resumen + errores + autoevaluación)

> **Fuentes:** `u4-logico.md`; `.docx` P1–P4; [Notion]. Marcas [POR-VERIFICAR] y [VACÍO: sin fuente] según reglas de la unidad.

## 1. Resumen en 10 líneas

> **Fuente:** síntesis de `concepts.md` (cada línea remite a su bloque).

1. CP1 describe sentencias matemáticas (IMG2) [transcrito de imagen, por verificar].
2. Las funciones se describen con sentencias ⇒ CP1 describe lo computable y los algoritmos (IMG3).
3. Paradigma lógico = equivalente a CP1 + gramática reconocible + ejecución-demostración polinomial (IMG4).
4. No hay instrucciones ni evaluación: hay FBF (fórmulas bien formadas) que se demuestran (IMG5 + `.docx` P2/P4).
5. La variable lógica existe antes de determinarse su conjunto; no está amarrada a tipo (IMG5 + `.docx` P3).
6. Dominio = individuos que hacen verdadero un predicado (`.docx` P3).
7. Demostrar = premisas + reglas hasta la conclusión; Copi = 9+10+4+2[+4] (IMG6).
8. Copi NP ⇒ alternativas MP y cláusulas/resolución+unificación, P con restricciones (IMG7) [POR-VERIFICAR].
9. Límite `.docx` P1 («Turing completa no reconoce CP1») [POR-VERIFICAR].
10. Problemas transversales: catenaria, tres amigas, raw/ascii (Problemas IMG1–IMG5).
11. Tres Amigas en Prolog: dominios como listas, unificación con `member`/`\=`, backtracking → `false` [Guía Jorge S4C2].
12. Corte (`!`) y `fail`: [VACÍO: sin fuente] — pendiente Exam 2.

## 2. Errores frecuentes

> **Fuente:** cada error se corrige con la fuente indicada.

1. Decir que el programa lógico «ejecuta instrucciones». **Corrección:** demuestra sentencias (IMG5 + `.docx` P2).
2. Tratar la variable lógica como casilla RAM tipada. **Corrección:** existencia previa al tipo, ligadura revisable (`.docx` P3).
3. Ignorar el ejemplo Prolog de Tres Amigas. **Corrección:** hay sintaxis en Guía Jorge S4C2 (`examples.md` E7); no es el manual completo.
4. Citar «Copi es NP / restringidos son P» como hecho. **Corrección:** [POR-VERIFICAR] (IMG7).
5. Citar «Turing completa no reconoce CP1» como hecho. **Corrección:** [POR-VERIFICAR] (`.docx` P1).
6. Confundir FBF con «función bien formada». **Corrección:** fórmulas bien formadas (`.docx` P4); definición formal [VACÍO: sin fuente].
7. Inventar corte/fail. **Corrección:** [VACÍO: sin fuente]; esperar transcripciones Exam 2.
8. Resolver la catenaria como problema «lógico natural». **Corrección:** es funcional; lo lógico natural es tres amigas.

## 3. Autoevaluación (8)

1. **Enuncia la triple condición del paradigma lógico.** *Solución: equivalente a CP1 + gramática reconocible + ejecución-demostración polinomial (IMG4).*
2. **Reproduce la tabla imperativo vs. lógico.** *Solución: instrucciones/sentencias; ejecución/demostración; RAM-bytes/variables lógicas (IMG5).*
3. **Explica la variable lógica en dos frases.** *Solución: existe antes que su conjunto; no amarrada a tipo, puede desligarse y religarse (`.docx` P3).*
4. **Da el inventario del sistema de Copi.** *Solución: 9+10+4+2 [+4 igualdad] (IMG6).*
5. **¿Por qué Copi no y qué alternativas propone el slide?** *Solución: poco práctico/NP [POR-VERIFICAR]; MP (2 ops/1 regla) y cláusulas (resolución+unificación), P con restricciones [POR-VERIFICAR] (IMG7).*
6. **¿Qué es FBF y qué es dominio?** *Solución: fórmulas bien formadas (P4); individuos que hacen verdadero un predicado (P3).*
7. **Clasifica los 3 problemas transversales por paradigma afín y justifica.** *Solución: catenaria→funcional/imperativo; tres amigas→lógico; raw/ascii→imperativo con lectura relacional (Problemas IMG1–IMG5 + elaboración pedagógica marcada).*
8. **¿Qué hace Prolog si Tres Amigas queda insatisfacible?** *Solución: backtracking agota ramas → `false` [Guía Jorge S4C2]. Corte/fail siguen [VACÍO].*

## 4. Estado de verificación pendiente

- [POR-VERIFICAR] «Copi NP / restringidos P» (IMG7) — verificar contra bibliografía de complejidad/prolog (cláusulas de Horn, SLD).
- [POR-VERIFICAR] «Turing completa no reconoce CP1» (`.docx` P1) — verificar (decidibilidad vs. reconocibilidad; semidecidibilidad de CP1).
- [POR-VERIFICAR] Transcripciones de imagen (todas las IMG) — cotejar contra slides originales.
- [VACÍO: sin fuente] Corte (`!`) y `fail`; MGU formal — completar con transcripciones Exam 2 / manual de Prolog.
