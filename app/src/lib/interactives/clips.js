/** Simulador mínimo forward chaining estilo CLIPS. Fuente: Clases 5–7. */

const RULES = [
  { id: 'r-hair', when: ['has-hair'], then: ['mammal'], say: 'tiene pelo → mammal' },
  { id: 'r-milk', when: ['gives-milk'], then: ['mammal'], say: 'da leche → mammal' },
  { id: 'r-meat', when: ['mammal', 'eats-meat'], then: ['carnivore'], say: 'mammal ∧ come carne → carnivore' },
  { id: 'r-cat', when: ['carnivore', 'has-spots'], then: ['cheetah'], say: 'carnivore ∧ manchas → cheetah' },
  { id: 'r-dog', when: ['carnivore', 'barks'], then: ['dog'], say: 'carnivore ∧ ladra → dog' },
];

export function mountClips(root) {
  const state = {
    facts: new Set(['initial']),
    fired: new Set(),
    log: ['Hecho inicial en el entorno. Elige rasgos o deja que la agenda dispare.'],
  };

  const matchAgenda = () => RULES.filter(r =>
    !state.fired.has(r.id) && r.when.every(f => state.facts.has(f)));

  const render = () => {
    const agenda = matchAgenda();
    const facts = [...state.facts].filter(f => f !== 'initial').sort();
    root.innerHTML = '<div class="labx" id="clipslab">'
      + '<p class="kicker">Lab · CLIPS (FC simplificado)</p>'
      + '<h3>Taxonomía animal · agenda → assert</h3>'
      + '<p class="meta">No es CLIPS real: ilustra modus ponens + agenda. [ASR: Eclipse → CLIPS]</p>'
      + '<div class="clips-grid">'
      + '<div><h4>Hechos</h4><ul class="factlist">' + (facts.length ? facts.map(f => '<li><code>' + f + '</code></li>').join('') : '<li class="dim">— vacíos —</li>') + '</ul></div>'
      + '<div><h4>Agenda</h4><ul class="factlist">' + (agenda.length ? agenda.map(r => '<li><code>' + r.id + '</code> · ' + r.say + '</li>').join('') : '<li class="dim">— nada activable —</li>') + '</ul></div>'
      + '</div>'
      + '<div class="btnrow">'
      + '<button type="button" class="btn" data-f="has-hair">+ has-hair</button>'
      + '<button type="button" class="btn" data-f="gives-milk">+ gives-milk</button>'
      + '<button type="button" class="btn" data-f="eats-meat">+ eats-meat</button>'
      + '<button type="button" class="btn" data-f="has-spots">+ has-spots</button>'
      + '<button type="button" class="btn" data-f="barks">+ barks</button>'
      + '</div>'
      + '<div class="btnrow">'
      + '<button type="button" class="btn primary" id="clipsfire"' + (agenda.length ? '' : ' disabled') + '>Disparar 1ª de agenda</button>'
      + '<button type="button" class="btn" id="clipsreset">Reiniciar</button>'
      + '</div>'
      + '<h4>Traza</h4><pre class="clips-log">' + state.log.slice(-12).join('\n') + '</pre>'
      + '</div>';

    root.querySelectorAll('[data-f]').forEach(b => {
      b.onclick = () => {
        const f = b.dataset.f;
        if (state.facts.has(f)) {
          state.log.push('ya estaba: ' + f);
        } else {
          state.facts.add(f);
          state.log.push('assert ' + f);
        }
        render();
      };
    });
    root.querySelector('#clipsfire').onclick = () => {
      const ag = matchAgenda();
      if (!ag.length) return;
      const r = ag[0];
      r.then.forEach(f => state.facts.add(f));
      state.fired.add(r.id);
      state.log.push('FIRE ' + r.id + ' → assert ' + r.then.join(', '));
      render();
    };
    root.querySelector('#clipsreset').onclick = () => {
      state.facts = new Set(['initial']);
      state.fired = new Set();
      state.log = ['Reinicio.'];
      render();
    };
  };
  render();
}
