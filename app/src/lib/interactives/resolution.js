/** Lab: resolución paso a paso (refutación simplificada). Fuente pedagógica: Clases 4–6. */

const DEMO = {
  title: 'Refutación: demostrar P a partir de {P∨Q, ¬Q}',
  goal: 'P',
  steps: [
    {
      label: '0 · Premisas + negación del goal',
      clauses: [['P', 'Q'], ['¬Q'], ['¬P']],
      note: 'Δ = {P∨Q, ¬Q}. Para refutar, agregamos ¬P. Buscamos □.',
      highlight: null,
    },
    {
      label: '1 · Resolver (P∨Q) con (¬Q)',
      clauses: [['P'], ['¬P']],
      note: 'Átomo resuelto: Q. Resolvente: {P}. Quedan {P} y {¬P}.',
      highlight: { a: 0, b: 1, lit: 'Q' },
    },
    {
      label: '2 · Resolver {P} con {¬P}',
      clauses: [['□']],
      note: 'Átomo resuelto: P. Resolvente vacío □ ⇒ contradicción ⇒ Δ ⊢ P.',
      highlight: { a: 0, b: 1, lit: 'P' },
    },
  ],
};

function clauseHtml(c, hi) {
  if (c.length === 1 && c[0] === '□') return '<span class="clause empty">□</span>';
  return '<span class="clause">' + c.map(lit => {
    const on = hi && (lit === hi || lit === '¬' + hi || ('¬' + lit) === hi);
    return '<span class="lit' + (on ? ' hot' : '') + '">' + lit + '</span>';
  }).join(' ∨ ') + '</span>';
}

export function mountResolution(root) {
  let i = 0;
  const render = () => {
    const s = DEMO.steps[i];
    const hiLit = s.highlight && s.highlight.lit;
    root.innerHTML = '<div class="labx" id="reslab">'
      + '<p class="kicker">Lab · Resolución</p>'
      + '<h3>' + DEMO.title + '</h3>'
      + '<p class="meta">Goal: <code>' + DEMO.goal + '</code> · paso ' + (i + 1) + '/' + DEMO.steps.length + '</p>'
      + '<div class="res-stage" aria-live="polite">'
      + '<p class="res-label">' + s.label + '</p>'
      + '<div class="clause-row">' + s.clauses.map(c => clauseHtml(c, hiLit)).join('') + '</div>'
      + '<p class="marginal">' + s.note + '</p>'
      + '</div>'
      + '<div class="btnrow">'
      + '<button type="button" class="btn" id="resprev"' + (i === 0 ? ' disabled' : '') + '>Anterior</button>'
      + '<button type="button" class="btn primary" id="resnext">' + (i < DEMO.steps.length - 1 ? 'Siguiente paso' : 'Reiniciar') + '</button>'
      + '</div></div>';
    root.querySelector('#resprev').onclick = () => { i = Math.max(0, i - 1); render(); };
    root.querySelector('#resnext').onclick = () => {
      i = i < DEMO.steps.length - 1 ? i + 1 : 0;
      render();
    };
  };
  render();
}
