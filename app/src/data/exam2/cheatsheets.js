export const CHEATSHEETS = [
  {
    id: 'logico',
    title: 'Cheat sheet · Paradigma lógico',
    body: `**Acción:** demostrar FBF (no ejecutar / no evaluar).

**Copi (humano):** muchas reglas; útil en papel; costoso para máquinas.

**Pipeline a cláusulas:** quitar →/↔ → negar hasta átomos → renombrar → Skolem → prenexa → quitar ∀ → FNC → renombrar → separar.

**Skolem:** \`∃x P(x)\`→\`P(c)\`; \`∀y∃x P(x,y)\`→\`P(f(y),y)\`.

**Resolución:** (λ∪K), (¬λ∪M) ⇒ (K∪M).

**Refutación:** Δ∪{¬φ} ⊢ □ ⇒ Δ ⊢ φ. □ = contradicción.

**Resolución plana NO prueba** conjunción ni adición → hace falta refutación.

**Prolog:** cláusulas + refutación + unificación + backward chaining (Horn).

**CLIPS:** FC ≈ modus ponens; agenda; assert/retract; no niega la conclusión.

**ASR:** Eclipse→CLIPS · prologue→Prolog · Copy→Copi · Scholem→Skolem.`,
  },
  {
    id: 'oo',
    title: 'Cheat sheet · Orientación a objetos',
    body: `**Problema:** sistemas imperativos grandes → proceso duplicado; datos≠proceso.

**Respuesta:** objetos (estado+métodos), mensajes, encapsulación. Simula → Smalltalk.

**Mensajes:** mutar · consultar · colaborar.

**Tareas = mensajes** (vs instrucciones / evaluaciones / demostraciones).

**Puro vs híbrido:** Smalltalk/Squeak vs Java/Python/C++.`,
  },
];
