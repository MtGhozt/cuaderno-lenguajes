import './styles.css';
import { UNITS } from './data/content.js';
import { QUIZ } from './data/quiz.js';
import { FLASH } from './data/flashcards.js';
import { GLOSSARY } from './data/glossary.js';
import { PAPERS } from './data/papers.js';
import { store } from './lib/store.js';
import { newEnv, evaluate, traceSqr, traceCand } from './lib/lab.js';
import {
  E2_NAV, vExam2Home, vPath, vLesson, vLabs, vE2Practice, vCheats, vE2Glossary, vE2Flash,
} from './exam2-views.js';


const app = document.getElementById('app');
const labEnv = newEnv();
try { evaluate('(define (mcd a b) (if (= (mod a b) 0) b (mcd b (mod a b))))', labEnv); } catch { /* base */ }

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// Fisher-Yates: orden visual aleatorio para que la letra correcta varíe en cada visita.
// data-i conserva el índice ORIGINAL, así grade()/expectedText() no cambian.
function shuffledIdx(n) {
  const a = [...Array(n).keys()];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function inline(s) {
  return esc(s).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}
function md(src) {
  const lines = src.split('\n'); let html = '', i = 0, inPre = false, preLang = '', preBuf = [];
  const flushPre = () => { html += '<pre><code>' + esc(preBuf.join('\n')) + '</code></pre>'; preBuf = []; };
  while (i < lines.length) {
    const ln = lines[i];
    const fence = ln.match(/^```(\w*)/);
    if (fence && !inPre) { inPre = true; preLang = fence[1]; i++; continue; }
    if (/^```/.test(ln) && inPre) { inPre = false; flushPre(); i++; continue; }
    if (inPre) { preBuf.push(ln); i++; continue; }
    const head = ln.match(/^(#{2,3})\s+(.*)$/);
    if (head) {
      const tag = head[1].length === 2 ? 'h2' : 'h3';
      html += '<' + tag + '>' + inline(head[2]) + '</' + tag + '>'; i++; continue;
    }
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

const NAV = [
  ['#/', 'Inicio'], ['#/programa', 'Programa'],
  ...E2_NAV,
  ['sep', 'I Parcial'],
  ['#/aula/u1', 'U1 · Fundamentos'], ['#/aula/u2', 'U2 · Imperativo'], ['#/aula/u3', 'U3 · Funcional'], ['#/aula/u4', 'U4 · Lógico'], ['#/aula/u5', 'U5 · OO'],
  ['#/lab', 'Laboratorio'],
  ['#/diagramas', 'Diagramas'],
  ['#/papers', 'Papers'],
  ['sep', 'Evaluación'],
  ['#/practica', 'Práctica'], ['#/examen', 'Examen simulado'], ['#/repaso', 'Repaso'], ['#/glosario', 'Glosario'],
];

function themeInit() {
  const t = localStorage.getItem('ic4700-theme') || 'light';
  document.documentElement.dataset.theme = t;
  return t;
}
themeInit();

function shell(active, content) {
  const theme = document.documentElement.dataset.theme || 'light';
  // Conservar scroll del menú lateral: al re-renderizar el aside, el navegador
  // lo resetea a 0 y “te teletransporta” arriba (bug reportado al navegar).
  const prevAside = app.querySelector('.sidebar');
  const asideScroll = prevAside ? prevAside.scrollTop : 0;
  const nav = NAV.map(([href, label]) => href === 'sep'
    ? '<div class="sep" role="presentation">' + label + '</div>'
    : '<a href="' + href + '" class="' + (href === active || active.startsWith(href + '/') ? 'active' : '') + '"'
      + (href === active || active.startsWith(href + '/') ? ' aria-current="page"' : '') + '>' + label + '</a>').join('');
  app.innerHTML = '<a class="skip" href="#main">Saltar al contenido</a><div class="layout">'
    + '<aside class="sidebar" id="sidebar"><p class="brand">Cuaderno de Lenguajes<small>IC-4700 · Exam 2</small></p>'
    + '<button type="button" class="btn theme-btn" id="themebtn" aria-pressed="' + (theme === 'dark' ? 'true' : 'false') + '">'
    + (theme === 'dark' ? 'Tema claro' : 'Tema oscuro') + '</button>'
    + '<nav class="nav" aria-label="Principal">' + nav + '</nav></aside>'
    + '<main class="main" id="main" tabindex="-1">' + content + '</main></div>';
  const aside = document.getElementById('sidebar');
  if (aside) aside.scrollTop = asideScroll;
  const tb = document.getElementById('themebtn');
  if (tb) tb.onclick = () => {
    const next = (document.documentElement.dataset.theme === 'dark') ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('ic4700-theme', next);
    route();
  };
  // Solo el contenido principal vuelve arriba; el aside conserva su posición.
  const main = document.getElementById('main');
  if (main) main.scrollTop = 0;
  // En móvil el layout deja de ser viewport fijo: ahí sí reseteamos window.
  if (window.matchMedia && window.matchMedia('(max-width: 760px)').matches) {
    window.scrollTo(0, 0);
  }
}

/* Evita el salto brusco hacia arriba al responder: si el navegador mueve el
   scroll al deshabilitar el botón con foco, se restaura; y solo se desplaza
   si el feedback quedó fuera de la vista. */
function scrollIfNeeded(el) {
  if (!el || typeof el.getBoundingClientRect !== 'function') return;
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight || 0;
  if (r.top >= 0 && r.bottom <= vh) return; // ya visible: no mover nada
  if (typeof el.scrollIntoView === 'function') el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
function steady(fn) {
  const y = window.scrollY || 0;
  const r = fn();
  if (typeof window.scrollTo === 'function' && Math.abs((window.scrollY || 0) - y) > 2) {
    try { window.scrollTo(0, y); } catch { /* noop */ }
  }
  return r;
}

/* ---------- vistas ---------- */
function vHome() {
  const s = store.stats();
  const studied = Object.keys(store.state.study);
  const last = studied.length ? studied[studied.length - 1].replace('aula-', '') : 'u1';
  const resume = UNITS.some(u => u.id === last) ? last : 'u1';
  const units = UNITS.map(u => {
    const qs = QUIZ.filter(q => q.u === u.id);
    const done = qs.filter(q => store.state.quiz[q.id]).length;
    return '<a class="unitlink" href="#/aula/' + u.id + '"><h3>' + u.num + ' · ' + u.title + '</h3>'
      + '<p>' + u.objectives.length + ' objetivos · ' + qs.length + ' preguntas · respondidas ' + done + '/' + qs.length + '</p>'
      + '<div class="progress-line"><span style="width:' + (qs.length ? Math.round(done / qs.length * 100) : 0) + '%"></span></div></a>';
  }).join('');
  shell('#/', '<p class="kicker">IC-4700 · Lenguajes de Programación</p><h1>Estudia el parcial, no solo léelo</h1>'
    + '<p class="lede">Exam 2: paradigma lógico (Clases 1–6) y OO (Clase 7) con labs interactivos. El I Parcial sigue disponible abajo.</p>'
    + '<div class="btnrow"><a class="btn primary" href="#/exam2" style="text-decoration:none">Abrir Exam 2</a>'
    + '<a class="btn" href="#/ruta/rapida" style="text-decoration:none">Repaso 20 min</a>'
    + '<a class="btn" href="#/aula/' + resume + '" style="text-decoration:none">Continuar I Parcial</a>'
    + '<a class="btn" href="#/practica" style="text-decoration:none">Práctica I Parcial</a></div>'

    + '<h2>Progreso general</h2><p class="meta">Preguntas dominadas ' + s.mastered + ' · respondidas ' + s.answered + ' · intentos ' + s.tries
    + ' · tarjetas vistas ' + s.flashSeen + '/' + FLASH.length + ' · exámenes ' + s.exams + '</p>'
    + '<h2>Unidades</h2><div class="grid2">' + units + '</div>'
    + '<h2>Accesos rápidos</h2><div class="btnrow"><a class="btn" href="#/lab" style="text-decoration:none">Laboratorio</a>'
    + '<a class="btn" href="#/repaso" style="text-decoration:none">Repaso</a><a class="btn" href="#/glosario" style="text-decoration:none">Glosario</a></div>');
}

function vProgram() {
  const rows = [
    ['1. Introducción y conceptos fundamentales', 'Completa', '#/aula/u1'],
    ['2. Programación imperativa (COBOL, Pascal, C)', 'Completa', '#/aula/u2'],
    ['3. Programación funcional (Scheme, Haskell)', 'Completa', '#/aula/u3'],
    ['4. Programación lógica (Prolog)', 'Parcial: corte/fail [VACÍO]; Tres Amigas OK', '#/aula/u4'],
    ['5. Programación orientada a objetos', 'Scaffold Exam 2 (Guía Jorge; faltan clases)', '#/aula/u5'],
    ['6. Elementos avanzados', 'Fuera de alcance inmediato', null],
  ].map(r => '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td><td>' + (r[2] ? '<a href="' + r[2] + '">Estudiar</a>' : '—') + '</td></tr>').join('');
  shell('#/programa', '<p class="kicker">Programa oficial</p><h1>Programa del curso</h1>'
    + '<p class="lede">IC-4700 · 4 créditos · Prof. Jorge A. Vargas · Parcial 1: 24 sep 2026 · Parcial 2: 19 nov 2026. Evaluación: parciales 50%, tareas 10%, proyectos 40%.</p>'

    + '<h2>Cobertura en esta plataforma</h2><table><thead><tr><th>Unidad</th><th>Estado</th><th></th></tr></thead><tbody>' + rows + '</tbody></table>'
    + '<p class="marginal">Las marcas [POR-VERIFICAR] y [VACÍO] del material fuente se conservan en el aula: lo dudoso se señala, no se oculta.</p>');
}

function vStudy(id) {
  const u = UNITS.find(x => x.id === id) || UNITS[0];
  store.recordStudy('aula-' + u.id);
  const secs = u.sections.map((s, i) => '<h2 id="s' + i + '">' + s.h + '</h2>' + md(s.body)).join('');
  const idx = u.sections.map((s, i) => '<li><a href="#/aula/' + u.id + '" data-goto="s' + i + '">' + s.h + '</a></li>').join('');
  const qs = QUIZ.filter(q => q.u === u.id);
  shell('#/aula/' + u.id, '<p class="kicker">' + u.num + '</p><h1>' + u.title + '</h1>'
    + '<h2>Objetivos</h2><ul>' + u.objectives.map(o => '<li>' + o + '</li>').join('') + '</ul>'
    + '<h2>Índice</h2><ul>' + idx + '</ul>' + secs
    + '<div class="btnrow"><a class="btn primary" href="#/practica/' + u.id + '" style="text-decoration:none">Practicar (' + qs.length + ' preguntas)</a>'
    + '<a class="btn" href="#/lab" style="text-decoration:none">Laboratorio</a></div>');
  // Índice interno: desplazamiento suave sin tocar el hash (si cambiara el hash,
  // el router lo interpretaría como ruta desconocida y volvería al inicio).
  document.querySelectorAll('[data-goto]').forEach(a => {
    a.onclick = e => {
      e.preventDefault();
      const t = document.getElementById(a.dataset.goto);
      if (t && typeof t.scrollIntoView === 'function') t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  });
}

/* ---------- laboratorio ---------- */
function vLab() {
  shell('#/lab', '<p class="kicker">Laboratorio</p><h1>Laboratorio</h1>'
    + '<p class="lede">Dos herramientas reales y una honesta: evaluador de notación prefija (ejecuta de verdad un subconjunto estilo Scheme), trazador de estrategias de evaluación y predicción Haskell/Prolog (ejercicio, no ejecución).</p>'
    + '<h2>1 · Evaluador prefijo <span class="pill">ejecuta de verdad</span></h2>'
    + '<p class="meta">Subconjunto: números, <code>+ - * / mod = &lt; &gt; if</code>, <code>define</code> de variables y funciones. <code>mcd</code> viene predefinida. No es Scheme completo.</p>'
    + '<label for="labin">Expresión (pueden ser varias, una por línea)</label>'
    + '<textarea id="labin">(+ 2 (* 3 4))\n(mcd 12 18)\n(define (doble x) (+ x x))\n(doble 21)</textarea>'
    + '<div class="btnrow"><button type="button" class="btn primary" id="labrun">Ejecutar</button><button type="button" class="btn" id="labclear">Limpiar entorno</button></div>'
    + '<pre id="labout" aria-live="polite">…</pre>'
    + '<h2>2 · Trazador eager vs. orden-normal <span class="pill">simulación</span></h2>'
    + '<div class="btnrow"><button type="button" class="btn" id="trsqr">Trazar sqr</button>'
    + '<label style="display:inline">n <input type="text" id="trn" value="0" style="width:4rem;display:inline"></label>'
    + '<label style="display:inline">t <input type="text" id="trt" value="80" style="width:4rem;display:inline"></label>'
    + '<button type="button" class="btn" id="trcand">Trazar cand</button></div>'
    + '<div id="trout"></div>'
    + '<h2>3 · Predicción Haskell / Prolog <span class="pill">ejercicio honesto</span></h2>'
    + '<p>Haskell y Prolog no se ejecutan en el navegador en esta plataforma. En su lugar, predice el resultado y compruébalo:</p>'
    + '<pre><code>-- ¿qué devuelve longitud [3,1,4] con\n-- longitud [] = 0\n-- longitud (_:xs) = 1 + longitud xs ?</code></pre>'
    + '<div class="searchrow"><input type="text" id="pred" placeholder="Tu predicción (número)"><button type="button" class="btn" id="predbtn">Comprobar</button></div>'
    + '<div id="predout"></div>');
  document.getElementById('labrun').onclick = () => {
    const src = document.getElementById('labin').value;
    const out = [];
    src.split('\n').map(l => l.trim()).filter(Boolean).forEach((line, i) => {
      try { evaluate(line, labEnv).forEach(r => out.push('[' + (i + 1) + '] ' + line + '\n  → ' + r)); }
      catch (e) { out.push('[' + (i + 1) + '] ' + line + '\n  ✕ ' + e.message); }
    });
    document.getElementById('labout').textContent = out.join('\n') || '(sin expresiones)';
  };
  document.getElementById('labclear').onclick = () => {
    Object.keys(labEnv.vars).forEach(k => delete labEnv.vars[k]);
    Object.keys(labEnv.funcs).forEach(k => delete labEnv.funcs[k]);
    try { evaluate('(define (mcd a b) (if (= (mod a b) 0) b (mcd b (mod a b))))', labEnv); } catch { /* noop */ }
    document.getElementById('labout').textContent = 'Entorno reiniciado (mcd predefinida).';
  };
  const showTrace = arr => { document.getElementById('trout').innerHTML = arr.map(t => '<p class="marginal">' + esc(t) + '</p>').join(''); };
  document.getElementById('trsqr').onclick = () => showTrace(traceSqr());
  document.getElementById('trcand').onclick = () => {
    const n = Number(document.getElementById('trn').value), t = Number(document.getElementById('trt').value);
    if (!Number.isFinite(n) || !Number.isFinite(t)) { showTrace(['n y t deben ser números.']); return; }
    showTrace(traceCand(n, t));
  };
  document.getElementById('predbtn').onclick = () => {
    const v = document.getElementById('pred').value.trim();
    document.getElementById('predout').innerHTML = '<div class="feedback ' + (v === '3' ? 'ok' : 'no') + '"><p>'
      + (v === '3' ? 'Correcto.' : 'No es ' + esc(v || '—') + '.')
      + ' La lista tiene 3 elementos: cada paso suma 1 y la cola se acorta hasta <code>[]</code>, que vale 0. Total: 3.</p></div>';
  };
}

/* ---------- diagramas (SVG estático offline, desde Guía Jorge) ---------- */
function vDiagrams() {
  const d1 = '<svg class="diag" viewBox="0 0 640 170" role="img" aria-label="Las 4 estructuras de Böhm-Jacopini">'
    + '<text class="t" x="8" y="20">Böhm-Jacopini: 4 estructuras [Guía Jorge]</text>'
    + [[10, 'Secuencial', 'S1 ; S2'], [170, 'Condicional', 'if P then/else'], [330, 'Iteración', 'while P do S'], [490, 'Modular', 'f(x) → y']].map(b =>
      '<g><rect class="b" x="' + b[0] + '" y="35" width="140" height="110" rx="3"/>'
      + '<text class="t" x="' + (b[0] + 70) + '" y="65" text-anchor="middle">' + b[1] + '</text>'
      + '<text class="d" x="' + (b[0] + 70) + '" y="95" text-anchor="middle">' + b[2] + '</text></g>').join('')
    + '<path class="a" d="M150 90 h20 M310 90 h20 M470 90 h20"/></svg>';
  const d2 = '<svg class="diag" viewBox="0 0 640 220" role="img" aria-label="Estrategias de evaluación">'
    + '<text class="t" x="8" y="20">Estrategias de evaluación [Guía Jorge]</text>'
    + '<rect class="b" x="230" y="35" width="180" height="40" rx="3"/><text class="d" x="320" y="60" text-anchor="middle">¿cuándo se evalúa f(x)?</text>'
    + [['Eager (call-by-value)', 'evalúa 1 vez en la llamada', 10], ['Orden-normal (by-name)', 'al requerirse; puede repetirse', 230], ['Perezosa (by-need)', 'al requerirse + memo (thunk)', 450]].map((b, i) =>
      '<g><rect class="b" x="' + b[2] + '" y="120" width="180" height="80" rx="3"/>'
      + '<text class="t" x="' + (b[2] + 90) + '" y="145" text-anchor="middle" font-size="12">' + b[0] + '</text>'
      + '<text class="d" x="' + (b[2] + 90) + '" y="170" text-anchor="middle" font-size="11">' + b[1] + '</text></g>'
      + '<path class="g" d="M320 75 L' + (b[2] + 90) + ' 120"/>').join('') + '</svg>';
  const d3 = '<svg class="diag" viewBox="0 0 640 130" role="img" aria-label="Lista como cadena de cons">'
    + '<text class="t" x="8" y="20">Lista [1,2,3] = 1 : 2 : 3 : [] [Guía Jorge]</text>'
    + [0, 1, 2].map(i => '<g><rect class="b" x="' + (10 + i * 170) + '" y="45" width="120" height="60" rx="3"/>'
      + '<text class="d" x="' + (35 + i * 170) + '" y="80">cons</text><text class="t" x="' + (85 + i * 170) + '" y="80">' + (i + 1) + '</text></g>'
      + (i < 2 ? '<path class="a" d="M' + (130 + i * 170) + ' 75 h40"/>' : '')).join('')
    + '<rect class="b" x="520" y="45" width="110" height="60" rx="3"/><text class="t" x="575" y="80" text-anchor="middle">[]</text>'
    + '<path class="a" d="M470 75 h50"/></svg>';
  const d4 = '<svg class="diag" viewBox="0 0 640 250" role="img" aria-label="Flujo de Collatz">'
    + '<text class="t" x="8" y="20">Collatz: n → 1 (ciclo 4-2-1) [Guía Jorge]</text>'
    + '<rect class="b" x="250" y="35" width="140" height="36" rx="3"/><text class="d" x="320" y="58" text-anchor="middle">nueva n</text>'
    + '<polygon class="b" points="320,85 410,125 320,165 230,125"/><text class="d" x="320" y="129" text-anchor="middle">¿par?</text>'
    + '<rect class="b" x="440" y="107" width="120" height="36" rx="3"/><text class="d" x="500" y="130" text-anchor="middle">n / 2</text>'
    + '<rect class="b" x="80" y="107" width="120" height="36" rx="3"/><text class="d" x="140" y="130" text-anchor="middle">3n + 1</text>'
    + '<polygon class="b" points="320,180 400,210 320,240 240,210"/><text class="d" x="320" y="214" text-anchor="middle">¿n = 1?</text>'
    + '<path class="g" d="M320 71 v14 M410 125 h30 M230 125 h-30 M500 143 v40 h-100 M140 143 v40 h100 M320 165 v15"/>'
    + '<text class="d" x="420" y="120">sí</text><text class="d" x="195" y="120">no</text>'
    + '<text class="d" x="330" y="200">no, repetir</text></svg>';
  shell('#/diagramas', '<p class="kicker">Visual</p><h1>Diagramas</h1>'
    + '<p class="lede">Cuatro diagramas clave convertidos de Mermaid a SVG estático (funcionan offline). Fuente: Guía Jorge, material de compañero.</p>'
    + '<h2>1 · Estructuras universales</h2>' + d1
    + '<h2>2 · Estrategias de evaluación</h2>' + d2
    + '<h2>3 · Listas como cons</h2>' + d3
    + '<h2>4 · Collatz</h2>' + d4);
}

/* ---------- papers del primer examen ---------- */
function vPapers() {
  const cards = PAPERS.map(p =>
    '<a class="unitlink" href="#/papers/' + p.id + '"><h3>' + esc(p.title) + '</h3>'
    + '<p>' + esc(p.meta) + '</p></a>').join('');
  shell('#/papers', '<p class="kicker">Lecturas obligatorias</p><h1>Papers del primer examen</h1>'
    + '<p class="lede">Los 4 papers de la carpeta del primer parcial, cada uno con el mismo formato: idea central y partes, matices, borrador de respuesta en 3 párrafos listo para entregar, y repaso activo. Archivos fuente en <code>I Parcial/Papers del primer examen/</code>.</p>'
    + '<div class="grid2">' + cards + '</div>');
}
function vPaper(id) {
  const p = PAPERS.find(x => x.id === id) || PAPERS[0];
  const idx = PAPERS.map(x => '<li><a href="#/papers/' + x.id + '">' + esc(x.nav) + '</a></li>').join('');
  const repaso = p.repaso.map((r, i) =>
    '<p><strong>' + (i + 1) + '. ' + esc(r.q) + '</strong><br><span class="meta">' + esc(r.a) + '</span></p>').join('');
  shell('#/papers', '<p class="kicker"><a href="#/papers">Papers</a> · ' + esc(p.nav) + '</p><h1>' + esc(p.title) + '</h1>'
    + '<p class="meta">' + esc(p.meta) + '</p>'
    + '<h2>Índice de papers</h2><ul>' + idx + '</ul>'
    + '<h2>Resumen (idea central, partes y matices)</h2>' + md(p.resumen)
    + (p.estudio ? '<h2>Explicación completa paso a paso</h2>' + md(p.estudio) : '')
    + '<h2>Repaso activo</h2>' + repaso
    + '<div class="btnrow"><a class="btn" href="#/papers" style="text-decoration:none">Volver a papers</a></div>');
}

/* ---------- preguntas ---------- */
function renderQ(q, prefix) {
  const prev = store.state.quiz[q.id];
  let inner = '';
  const name = prefix + q.id;
  if (q.type === 'single' || q.type === 'multi') {
    inner = shuffledIdx(q.opts.length).map(i => '<button type="button" class="opt" data-q="' + q.id + '" data-i="' + i + '" data-t="' + q.type + '">' + esc(q.opts[i]) + '</button>').join('');
  } else if (q.type === 'tf') {
    inner = '<div class="btnrow"><button type="button" class="opt" data-q="' + q.id + '" data-i="true" data-t="tf" style="max-width:12rem">Verdadero</button>'
      + '<button type="button" class="opt" data-q="' + q.id + '" data-i="false" data-t="tf" style="max-width:12rem">Falso</button></div>';
  } else {
    inner = '<div class="searchrow"><input type="text" id="in-' + name + '" placeholder="Tu respuesta"><button type="button" class="btn" data-check="' + q.id + '">Comprobar</button></div>';
  }
  return '<article id="q-' + q.id + '"><h3>' + esc(q.q) + '</h3>'
    + '<p class="meta"><span class="pill ' + q.u + '">' + q.u.toUpperCase() + '</span> ' + q.type
    + (prev ? ' · intentos: ' + prev.tries + ', aciertos: ' + prev.ok : '') + '</p>'
    + inner + '<div class="fb" id="fb-' + q.id + '"></div></article>';
}
function norm(s) {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9 ]/g, '').trim().replace(/\s+/g, ' ');
}
function grade(q, given) {
  if (q.type === 'single') return given.length === 1 && Number(given[0]) === q.answer;
  if (q.type === 'multi') {
    const a = [...given].map(Number).sort().join(','), b = [...q.answer].sort().join(',');
    return a === b;
  }
  if (q.type === 'tf') {
    const v = Array.isArray(given) ? given[0] : given;
    return (String(v) === 'true') === q.answer;
  }
  const n = norm(given);
  if (q.accept) return q.accept.some(a => norm(a) === n);
  return n !== '' && n === norm(q.answer);
}
function expectedText(q) {
  if (q.type === 'single') return q.opts[q.answer];
  if (q.type === 'multi') return q.answer.map(i => q.opts[i]).join(' · ');
  if (q.type === 'tf') return q.answer ? 'Verdadero' : 'Falso';
  return q.answer;
}
function feedbackHTML(q, ok) {
  return '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><p><strong>' + (ok ? 'Correcto.' : 'Incorrecto.')
    + '</strong> Respuesta esperada: ' + esc(expectedText(q)) + '.</p><p>' + esc(q.why) + '</p>'
    + '<p class="meta">Ref: ' + esc(q.ref) + '</p></div>';
}
function wireQuiz(root) {
  const picked = {};
  root.querySelectorAll('button.opt[data-q]').forEach(btn => {
    btn.onclick = e => {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      const qid = btn.dataset.q;
      const q = QUIZ.find(x => x.id === qid);
      const box = document.getElementById('q-' + qid);
      if (q.type === 'single' || q.type === 'tf') {
        picked[qid] = [btn.dataset.i];
        steady(() => {
          box.querySelectorAll('button.opt').forEach(b => b.classList.remove('picked-correct', 'picked-wrong'));
          const ok = grade(q, picked[qid]);
          btn.classList.add(ok ? 'picked-correct' : 'picked-wrong');
          if (typeof btn.blur === 'function') btn.blur();
          box.querySelectorAll('button.opt').forEach(b => { b.disabled = true; b.classList.add('dim'); });
          document.getElementById('fb-' + qid).innerHTML = feedbackHTML(q, ok);
          store.recordQuiz(qid, ok);
        });
      } else {
        const set = picked[qid] || new Set();
        const i = Number(btn.dataset.i);
        if (set.has(i)) { set.delete(i); btn.classList.remove('sel'); }
        else { set.add(i); btn.classList.add('sel'); }
        picked[qid] = set;
        if (!box.querySelector('[data-finish="' + qid + '"]')) {
          const f = document.createElement('button');
          f.type = 'button';
          f.className = 'btn'; f.textContent = 'Calificar selección múltiple'; f.dataset.finish = qid;
          f.onclick = ev => {
            if (ev && typeof ev.preventDefault === 'function') ev.preventDefault();
            steady(() => {
              const ok = grade(q, [...(picked[qid] || [])]);
              if (typeof f.blur === 'function') f.blur();
              box.querySelectorAll('button.opt').forEach(b => { b.disabled = true; b.classList.add('dim'); });
              const fb2 = document.getElementById('fb-' + qid);
              fb2.innerHTML = feedbackHTML(q, ok);
              store.recordQuiz(qid, ok); f.remove();
              scrollIfNeeded(fb2);
            });
          };
          box.appendChild(f);
        }
      }
      const fb = document.getElementById('fb-' + qid);
      if (fb && fb.innerHTML) scrollIfNeeded(fb);
    };
  });
  root.querySelectorAll('[data-check]').forEach(btn => {
    btn.onclick = e => {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      const q = QUIZ.find(x => x.id === btn.dataset.check);
      const inputs = root.querySelectorAll('#q-' + q.id + ' input');
      const val = inputs.length ? inputs[0].value : '';
      steady(() => {
        const ok = grade(q, val);
        const fb3 = document.getElementById('fb-' + q.id);
        fb3.innerHTML = feedbackHTML(q, ok);
        store.recordQuiz(q.id, ok);
        if (typeof btn.blur === 'function') btn.blur();
        scrollIfNeeded(fb3);
      });
    };
  });
}

function vPractice(unit) {
  const list = unit ? QUIZ.filter(q => q.u === unit) : QUIZ;
  const title = unit ? UNITS.find(u => u.id === unit).title : 'todas las unidades';
  shell('#/practica', '<p class="kicker">Práctica</p><h1>Práctica · ' + title + '</h1>'
    + '<p class="lede">Responde y recibe explicación inmediata: qué era lo esperado, por qué, y dónde estudiarlo. Nada aquí es decorativo: cada intento queda registrado.</p>'
    + '<div class="btnrow"><a class="btn" href="#/practica" style="text-decoration:none">Todas</a>'
    + UNITS.map(u => '<a class="btn" href="#/practica/' + u.id + '" style="text-decoration:none">' + u.num + '</a>').join('') + '</div>'
    + '<div id="qlist">' + list.map(q => renderQ(q)).join('<hr>') + '</div>');
  wireQuiz(document.getElementById('qlist'));
}

function vExam() {
  shell('#/examen', '<p class="kicker">Evaluación</p><h1>Examen simulado</h1>'
    + '<p class="lede">10 preguntas mezcladas de las unidades cargadas (U1–U5), sin retroalimentación hasta el final. Como un parcial real.</p>'

    + '<div class="btnrow"><button type="button" class="btn primary" id="start">Comenzar (10 preguntas)</button></div><div id="exam"></div>');
  document.getElementById('start').onclick = () => {
    const pool = [...QUIZ].sort(() => Math.random() - 0.5).slice(0, 10);
    const box = document.getElementById('exam');
    box.innerHTML = pool.map(q => renderQ(q, 'ex')).join('<hr>')
      + '<div class="btnrow"><button type="button" class="btn primary" id="finish">Terminar y calificar</button></div><div id="score"></div>';
    box.querySelectorAll('.fb').forEach(f => { f.style.display = 'none'; });
    const answers = {};
    box.querySelectorAll('button.opt[data-q]').forEach(btn => {
      btn.onclick = () => {
        const qid = btn.dataset.q, q = QUIZ.find(x => x.id === qid);
        if (q.type === 'multi') {
          const set = answers[qid] || new Set(); const i = Number(btn.dataset.i);
          if (set.has(i)) { set.delete(i); btn.classList.remove('sel'); }
          else { set.add(i); btn.classList.add('sel'); }
          answers[qid] = set;
        } else {
          answers[qid] = [btn.dataset.i];
          box.querySelectorAll('#q-' + qid + ' button.opt').forEach(b => b.classList.remove('sel'));
          btn.classList.add('sel');
        }
      };
    });
    box.querySelectorAll('[data-check]').forEach(btn => {
      btn.onclick = () => {
        const qid = btn.dataset.check;
        const inp = box.querySelector('#q-' + qid + ' input');
        answers[qid] = inp ? inp.value : '';
        btn.disabled = true; btn.textContent = 'Registrada';
      };
    });
    document.getElementById('finish').onclick = () => {
      let ok = 0;
      pool.forEach(q => {
        const g = answers[q.id];
        const safe = g === undefined ? (q.type === 'multi' ? new Set() : (q.type === 'fill' || q.type === 'short' ? '' : [])) : g;
        const good = grade(q, q.type === 'tf' || q.type === 'single' ? safe : (safe instanceof Set ? [...safe] : safe));
        if (good) ok++;
        store.recordQuiz(q.id, good);
        const fb = box.querySelector('#fb-' + q.id);
        fb.style.display = ''; fb.innerHTML = feedbackHTML(q, good);
        box.querySelectorAll('#q-' + q.id + ' button').forEach(b => { b.disabled = true; });
      });
      const pct = Math.round(ok / pool.length * 100);
      document.getElementById('score').innerHTML = '<div class="feedback ' + (pct >= 70 ? 'ok' : 'no') + '"><p><strong>Nota: ' + ok + '/' + pool.length + ' (' + pct + '%).</strong> '
        + (pct >= 70 ? 'Nivel de aprobación.' : 'Por debajo del 70%: repasa las falladas en la sección Repaso.') + '</p></div>';
      store.recordExam({ total: pool.length, ok });
    };
  };
}

function vReview() {
  const failed = store.failedQids().map(id => QUIZ.find(q => q.id === id)).filter(Boolean);
  const unseen = FLASH.filter(f => !store.state.flash[f.id]);
  const known = FLASH.filter(f => store.state.flash[f.id]?.known);
  shell('#/repaso', '<p class="kicker">Repaso</p><h1>Repaso inteligente</h1>'
    + '<p class="lede">Lo fallado, lo no visto y las tarjetas. El repaso se genera desde tu actividad real.</p>'
    + '<h2>Preguntas falladas (' + failed.length + ')</h2>'
    + (failed.length ? '<div id="qlist">' + failed.map(q => renderQ(q, 'rp')).join('<hr>') + '</div>'
      : '<p class="empty">Sin fallos registrados. Responde la práctica para generar esta lista.</p>')
    + '<h2>Tarjetas de memoria</h2><p class="meta">Vistas ' + (FLASH.length - unseen.length) + '/' + FLASH.length + ' · dominadas ' + known.length + '</p>'
    + '<div class="flash" id="card" role="button" tabindex="0"><div id="ctext">' + (unseen[0] ? esc(unseen[0].front) : 'Tarjetas completadas. Toca para repasar al azar.') + '</div><small id="chint">toca para voltear</small></div>'
    + '<div class="btnrow"><button type="button" class="btn" id="cknown">La sé</button><button type="button" class="btn" id="cunknown">Aún no</button><button type="button" class="btn" id="cnext">Siguiente</button></div>');
  if (failed.length) wireQuiz(document.getElementById('qlist'));
  let deck = unseen.length ? [...unseen] : [...FLASH].sort(() => Math.random() - 0.5);
  let idx = 0, showing = 'front';
  const card = document.getElementById('card'), ctext = document.getElementById('ctext'), chint = document.getElementById('chint');
  const draw = () => {
    if (!deck.length) { ctext.textContent = 'Sin tarjetas.'; return; }
    showing = 'front'; ctext.textContent = deck[idx].front; chint.textContent = 'toca para voltear';
  };
  const flip = () => {
    if (!deck.length) return;
    if (showing === 'front') { showing = 'back'; ctext.textContent = deck[idx].back; chint.textContent = deck[idx].id + ' · ' + deck[idx].u.toUpperCase() + ' · toca para ocultar'; }
    else draw();
  };
  card.onclick = flip;
  card.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } };
  const mark = knownFlag => {
    if (!deck.length) return;
    store.recordFlash(deck[idx].id, knownFlag);
    deck.splice(idx, 1); if (idx >= deck.length) idx = 0; draw();
  };
  document.getElementById('cknown').onclick = () => mark(true);
  document.getElementById('cunknown').onclick = () => mark(false);
  document.getElementById('cnext').onclick = () => { if (deck.length) { idx = (idx + 1) % deck.length; draw(); } };
  draw();
}

function vGlossary() {
  shell('#/glosario', '<p class="kicker">Referencia</p><h1>Glosario</h1>'
    + '<div class="searchrow"><input type="text" id="gq" placeholder="Buscar término…"></div><dl class="gloss" id="glist"></dl>');
  const list = document.getElementById('glist'), q = document.getElementById('gq');
  const draw = () => {
    const t = q.value.trim().toLowerCase();
    const items = GLOSSARY.filter(g => !t || g.t.toLowerCase().includes(t) || g.d.toLowerCase().includes(t));
    list.innerHTML = items.length
      ? items.map(g => '<dt>' + esc(g.t) + ' <span class="pill ' + g.u + '">' + g.u.toUpperCase() + '</span></dt><dd>' + esc(g.d) + '</dd>').join('')
      : '<p class="empty">Sin resultados.</p>';
  };
  q.oninput = draw; draw();
}

/* ---------- router ---------- */
function route() {
  const h = location.hash || '#/';
  const [, path, arg] = h.match(/^#\/([\w-]*)(?:\/([\w-]+))?/) || [];
  if (path === '' ) return vHome();
  if (path === 'programa') return vProgram();
  if (path === 'exam2') return vExam2Home(shell);
  if (path === 'ruta') return vPath(shell, arg || 'rapida');
  if (path === 'leccion') return vLesson(shell, arg || 'l1');
  if (path === 'labs') return vLabs(shell);
  if (path === 'e2-practica') return vE2Practice(shell);
  if (path === 'e2-glosario') return vE2Glossary(shell);
  if (path === 'e2-flash') return vE2Flash(shell);
  if (path === 'cheats') return vCheats(shell);
  if (path === 'aula') return vStudy(arg || 'u1');
  if (path === 'lab') return vLab();
  if (path === 'diagramas') return vDiagrams();
  if (path === 'papers') return arg ? vPaper(arg) : vPapers();
  if (path === 'practica') return vPractice(arg || null);
  if (path === 'examen') return vExam();
  if (path === 'repaso') return vReview();
  if (path === 'glosario') return vGlossary();
  return vHome();
}
window.addEventListener('hashchange', route);
route();
