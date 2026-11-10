/** Visual simplificado de unificación. Fuente: Clase 6. */

const STEPS = [
  {
    a: 'cabeza_de(X, caballo)',
    b: 'cabeza_de(Y, animal)',
    sub: '—',
    note: '¿Unifican? Mismo functor/aridad. Falta alinear argumentos (ejemplo didáctico inspirado en «caballos/animales»).',
  },
  {
    a: 'cabeza_de(c, caballo)',
    b: 'cabeza_de(c, animal)',
    sub: 'X↦c, Y↦c',
    note: 'Tras sustituir variables por la misma constante c, el primer argumento coincide; el segundo aún no (caballo ≠ animal) — en la prueba real intervienen otras cláusulas.',
  },
  {
    a: 'P(a)',
    b: 'P(X)',
    sub: 'X↦a',
    note: 'Caso limpio: unificación clásica. Todas las ocurrencias de X se reemplazan por a.',
  },
  {
    a: 'P(a)',
    b: '¬P(a)',
    sub: '(idénticos tras signos)',
    note: 'Literales complementarios listos para resolver → camino a □ en refutación.',
  },
];

export function mountUnify(root) {
  let i = 0;
  const render = () => {
    const s = STEPS[i];
    root.innerHTML = '<div class="labx">'
      + '<p class="kicker">Lab · Unificación</p>'
      + '<h3>Hacer encajar términos</h3>'
      + '<div class="uni-row">'
      + '<div class="uni-box"><span class="meta">A</span><code>' + s.a + '</code></div>'
      + '<div class="uni-arrow">⟷</div>'
      + '<div class="uni-box"><span class="meta">B</span><code>' + s.b + '</code></div>'
      + '</div>'
      + '<p><strong>Sustitución:</strong> <code>' + s.sub + '</code></p>'
      + '<p class="marginal">' + s.note + '</p>'
      + '<div class="btnrow">'
      + '<button type="button" class="btn" id="uniprev"' + (i === 0 ? ' disabled' : '') + '>Anterior</button>'
      + '<button type="button" class="btn primary" id="uninext">' + (i < STEPS.length - 1 ? 'Siguiente' : 'Reiniciar') + '</button>'
      + '</div></div>';
    root.querySelector('#uniprev').onclick = () => { i = Math.max(0, i - 1); render(); };
    root.querySelector('#uninext').onclick = () => { i = i < STEPS.length - 1 ? i + 1 : 0; render(); };
  };
  render();
}
