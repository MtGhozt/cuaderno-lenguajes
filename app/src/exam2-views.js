import { LESSONS, PATHS, lessonById, lessonIndex } from './data/exam2/lessons.js';
import { E2_QUIZ } from './data/exam2/quiz.js';
import { E2_GLOSSARY } from './data/exam2/glossary.js';
import { E2_FLASH } from './data/exam2/flashcards.js';
import { CHEATSHEETS } from './data/exam2/cheatsheets.js';
import { store } from './lib/store.js';
import { mountResolution } from './lib/interactives/resolution.js';
import { mountClips } from './lib/interactives/clips.js';
import { mountOo } from './lib/interactives/oo.js';
import { mountComparator } from './lib/interactives/comparator.js';
import { mountUnify } from './lib/interactives/unify.js';

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function inline(s) {
  return esc(s).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}
function md(src) {
  const lines = String(src).split('\n'); let html = '', i = 0, inPre = false, preBuf = [];
  const flushPre = () => { html += '<pre><code>' + esc(preBuf.join('\n')) + '</code></pre>'; preBuf = []; };
  while (i < lines.length) {
    const ln = lines[i];
    if (/^```/.test(ln) && !inPre) { inPre = true; i++; continue; }
    if (/^```/.test(ln) && inPre) { inPre = false; flushPre(); i++; continue; }
    if (inPre) { preBuf.push(ln); i++; continue; }
    if (/^\|.*\|$/.test(ln.trim())) {
      const rows = [];
      while (i < lines.length && /^\|.*\|$/.test(lines[i].trim())) { rows.push(lines[i].trim()); i++; }
      const cells = r => r.slice(1, -1).split('|').map(c => inline(c.trim()));
      html += '<table><thead><tr>' + cells(rows[0]).map(c => '<th>' + c + '</th>').join('') + '</tr></thead><tbody>';
      rows.slice(2).forEach(r => { html += '<tr>' + cells(r).map(c => '<td>' + c + '</td>').join('') + '</tr>'; });
      html += '</tbody></table>'; continue;
    }
    if (/^- /.test(ln)) {
      html += '<ul>';
      while (i < lines.length && /^- /.test(lines[i])) { html += '<li>' + inline(lines[i].slice(2)) + '</li>'; i++; }
      html += '</ul>'; continue;
    }
    if (ln.trim() === '') { i++; continue; }
    html += '<p>' + inline(ln) + '</p>'; i++;
  }
  return html;
}
function shuffledIdx(n) {
  const a = [...Array(n).keys()];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

function mountInteractive(el, kind) {
  if (!el || !kind) return;
  if (kind === 'resolution') return mountResolution(el);
  if (kind === 'clips') return mountClips(el);
  if (kind === 'oo') return mountOo(el);
  if (kind === 'comparator') return mountComparator(el);
  if (kind === 'unify') return mountUnify(el);
}

function renderQ(q) {
  const order = shuffledIdx(q.opts.length);
  let inner;
  if (q.type === 'multi') {
    inner = order.map(i => '<button type="button" class="opt" data-q="' + q.id + '" data-i="' + i + '" data-t="multi">' + esc(q.opts[i]) + '</button>').join('')
      + '<button type="button" class="btn" data-finish="' + q.id + '">Comprobar</button>';
  } else {
    inner = order.map(i => '<button type="button" class="opt" data-q="' + q.id + '" data-i="' + i + '" data-t="' + (q.type || 'single') + '">' + esc(q.opts[i]) + '</button>').join('');
  }
  return '<article id="q-' + q.id + '"><p class="meta">' + esc(q.ref || '') + '</p><h3>' + esc(q.q) + '</h3>'
    + '<div class="opts">' + inner + '</div><div id="fb-' + q.id + '"></div></article>';
}

function wireQuiz(root) {
  if (!root) return;
  const picked = {};
  root.querySelectorAll('button.opt').forEach(btn => {
    btn.onclick = () => {
      const q = E2_QUIZ.find(x => x.id === btn.dataset.q);
      if (!q) return;
      const i = +btn.dataset.i;
      if (q.type === 'multi') {
        picked[q.id] = picked[q.id] || new Set();
        if (picked[q.id].has(i)) { picked[q.id].delete(i); btn.classList.remove('sel'); }
        else { picked[q.id].add(i); btn.classList.add('sel'); }
        return;
      }
      const ok = i === q.answer;
      store.recordQuiz(q.id, ok);
      root.querySelectorAll('button.opt[data-q="' + q.id + '"]').forEach(b => {
        b.disabled = true;
        if (+b.dataset.i === q.answer) b.classList.add('picked-correct');
        if (b === btn && !ok) b.classList.add('picked-wrong');
      });
      const fb = root.querySelector('#fb-' + q.id);
      fb.innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><p>' + (ok ? 'Correcto.' : 'No del todo.') + '</p><p>' + esc(q.why) + '</p></div>';
    };
  });
  root.querySelectorAll('[data-finish]').forEach(btn => {
    btn.onclick = () => {
      const q = E2_QUIZ.find(x => x.id === btn.dataset.finish);
      const set = picked[q.id] || new Set();
      const want = new Set(q.answer);
      const ok = set.size === want.size && [...want].every(x => set.has(x));
      store.recordQuiz(q.id, ok);
      root.querySelectorAll('button.opt[data-q="' + q.id + '"]').forEach(b => {
        b.disabled = true;
        if (want.has(+b.dataset.i)) b.classList.add('picked-correct');
        else if (set.has(+b.dataset.i)) b.classList.add('picked-wrong');
      });
      btn.disabled = true;
      root.querySelector('#fb-' + q.id).innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><p>' + (ok ? 'Correcto.' : 'Revisa la selección.') + '</p><p>' + esc(q.why) + '</p></div>';
    };
  });
}

export function vExam2Home(shell) {
  const done = LESSONS.filter(l => store.state.study['e2-' + l.id]).length;
  const row = l => {
    const seen = !!store.state.study['e2-' + l.id];
    return '<a class="lesson-row" href="#/leccion/' + l.id + '">'
      + '<span class="lesson-num">' + l.num + '</span>'
      + '<span class="lesson-body"><strong>' + esc(l.title) + '</strong>'
      + '<span class="meta">Clase ' + l.clase + (l.interactive ? ' · lab ' + l.interactive : '') + (seen ? ' · vista' : '') + '</span></span></a>';
  };
  shell('#/exam2', '<p class="kicker">II Parcial · Exam 2</p><h1>Paradigma lógico → OO</h1>'
    + '<p class="lede">Hub desde cero: cada lección trae objetivo, explicación, ejemplo trabajado, errores comunes y check. Si la web está bien hecha, no deberías necesitar reabrir el video.</p>'
    + '<p class="meta">Progreso lecciones ' + done + '/' + LESSONS.length + '</p>'
    + '<div class="btnrow">'
    + '<a class="btn primary" href="#/ruta/rapida" style="text-decoration:none">Repaso 20 min</a>'
    + '<a class="btn" href="#/ruta/profunda" style="text-decoration:none">Ruta profunda</a>'
    + '<a class="btn" href="#/labs" style="text-decoration:none">Labs estrella</a>'
    + '<a class="btn" href="#/e2-practica" style="text-decoration:none">Práctica Exam 2</a>'
    + '<a class="btn" href="#/cheats" style="text-decoration:none">Cheat sheets</a>'
    + '</div>'
    + '<h2>Track lógico</h2><div class="lesson-list">' + LESSONS.filter(l => l.track === 'logico').map(row).join('') + '</div>'
    + '<h2>Track OO</h2><div class="lesson-list">' + LESSONS.filter(l => l.track === 'oo').map(row).join('') + '</div>');
}

export function vPath(shell, id) {
  const p = PATHS[id] || PATHS.rapida;
  shell('#/ruta/' + p.id, '<p class="kicker">Ruta de estudio</p><h1>' + esc(p.title) + '</h1>'
    + '<p class="lede">' + esc(p.desc) + '</p><ol>'
    + p.lessons.map(lid => { const l = lessonById(lid); return '<li><a href="#/leccion/' + lid + '">' + l.num + ' · ' + esc(l.title) + '</a></li>'; }).join('')
    + '</ol><div class="btnrow"><a class="btn primary" href="#/leccion/' + p.lessons[0] + '" style="text-decoration:none">Empezar</a></div>');
}

export function vLesson(shell, id) {
  const l = lessonById(id) || LESSONS[0];
  store.recordStudy('e2-' + l.id);
  const idx = lessonIndex(l.id);
  const prev = LESSONS[idx - 1];
  const next = LESSONS[idx + 1];
  const secs = l.sections.map(s => {
    const tag = s.kind === 'mistakes' ? 'Errores comunes' : s.kind === 'example' ? 'Ejemplo' : 'Explicación';
    return '<h2>' + esc(s.h) + '</h2><p class="meta">' + tag + '</p>' + md(s.body);
  }).join('');
  const asr = (l.asr && l.asr.length)
    ? '<h2>Posible ruido ASR</h2><ul>' + l.asr.map(a => '<li><code>' + esc(a.noise) + '</code> → <strong>' + esc(a.likely) + '</strong></li>').join('') + '</ul>'
    : '';
  const qs = E2_QUIZ.filter(q => (l.check || []).includes(q.id));
  shell('#/leccion/' + l.id, '<p class="kicker">' + l.num + ' · Clase ' + l.clase + (l.track === 'oo' ? ' · OO' : ' · Lógico') + '</p>'
    + '<h1>' + esc(l.title) + '</h1>'
    + '<p class="lede"><strong>Objetivo:</strong> ' + esc(l.objective) + '</p>'
    + secs
    + (l.interactive ? '<h2>Interactivo</h2><div id="labmount"></div>' : '')
    + asr
    + '<h2>Check corto</h2><div id="qlist">' + qs.map(renderQ).join('<hr>') + '</div>'
    + '<div class="btnrow">'
    + (prev ? '<a class="btn" href="#/leccion/' + prev.id + '" style="text-decoration:none">← ' + prev.num + '</a>' : '')
    + (next ? '<a class="btn primary" href="#/leccion/' + next.id + '" style="text-decoration:none">' + next.num + ' →</a>' : '<a class="btn primary" href="#/e2-practica" style="text-decoration:none">Práctica</a>')
    + '</div>');
  mountInteractive(document.getElementById('labmount'), l.interactive);
  wireQuiz(document.getElementById('qlist'));
}

export function vLabs(shell) {
  shell('#/labs', '<p class="kicker">Labs estrella</p><h1>Tres interactivos + extras</h1>'
    + '<p class="lede">Resolución (Clases 4–6), CLIPS forward chaining (5–7), mensajes OO (7). También unificación y comparador.</p>'
    + '<div id="lab-res"></div><hr><div id="lab-clips"></div><hr><div id="lab-oo"></div><hr><div id="lab-uni"></div><hr><div id="lab-cmp"></div>');
  mountResolution(document.getElementById('lab-res'));
  mountClips(document.getElementById('lab-clips'));
  mountOo(document.getElementById('lab-oo'));
  mountUnify(document.getElementById('lab-uni'));
  mountComparator(document.getElementById('lab-cmp'));
}

export function vE2Practice(shell) {
  shell('#/e2-practica', '<p class="kicker">Evaluación</p><h1>Práctica Exam 2</h1>'
    + '<p class="lede">' + E2_QUIZ.length + ' preguntas del bloque lógico + OO. Feedback inmediato.</p>'
    + '<div id="qlist">' + E2_QUIZ.map(renderQ).join('<hr>') + '</div>');
  wireQuiz(document.getElementById('qlist'));
}

export function vCheats(shell) {
  shell('#/cheats', '<p class="kicker">Repaso</p><h1>Cheat sheets</h1>'
    + CHEATSHEETS.map(c => '<h2>' + esc(c.title) + '</h2>' + md(c.body)).join(''));
}

export function vE2Glossary(shell) {
  shell('#/e2-glosario', '<p class="kicker">Referencia</p><h1>Glosario Exam 2</h1>'
    + '<div class="searchrow"><input type="search" id="gq" placeholder="Buscar término…"></div>'
    + '<dl class="gloss" id="glist"></dl>');
  const q = document.getElementById('gq');
  const list = document.getElementById('glist');
  const draw = () => {
    const t = (q.value || '').toLowerCase();
    const items = E2_GLOSSARY.filter(g => !t || g.t.toLowerCase().includes(t) || g.d.toLowerCase().includes(t));
    list.innerHTML = items.map(g => '<dt>' + esc(g.t) + ' <span class="pill">' + esc(g.src) + '</span></dt><dd>' + esc(g.d) + '</dd>').join('');
  };
  q.oninput = draw; draw();
}

export function vE2Flash(shell) {
  let deck = [...E2_FLASH].sort(() => Math.random() - 0.5);
  let i = 0, show = false;
  const paint = () => {
    const c = deck[i % deck.length];
    shell('#/e2-flash', '<p class="kicker">Repaso</p><h1>Flashcards Exam 2</h1>'
      + '<div class="flash" id="card"><div id="ctext">' + esc(show ? c.back : c.front) + '</div>'
      + '<small>click para voltear · ' + (i % deck.length + 1) + '/' + deck.length + '</small></div>'
      + '<div class="btnrow"><button type="button" class="btn" id="cknown">La sé</button>'
      + '<button type="button" class="btn" id="cnext">Siguiente</button></div>');
    document.getElementById('card').onclick = () => { show = !show; paint(); };
    document.getElementById('cknown').onclick = () => { store.recordFlash(c.id, true); i++; show = false; paint(); };
    document.getElementById('cnext').onclick = () => { i++; show = false; paint(); };
  };
  paint();
}

export const E2_NAV = [
  ['sep', 'Exam 2'],
  ['#/exam2', 'Curriculum Exam 2'],
  ['#/ruta/rapida', 'Ruta 20 min'],
  ['#/labs', 'Labs estrella'],
  ['#/e2-practica', 'Práctica E2'],
  ['#/e2-flash', 'Flash E2'],
  ['#/e2-glosario', 'Glosario E2'],
  ['#/cheats', 'Cheat sheets'],
];
