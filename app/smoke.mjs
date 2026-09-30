// Prueba de humo de la plataforma (artefacto dev; se elimina tras validar).
import { Window } from 'happy-dom';
import { register } from 'node:module';

register('./css-stub.mjs', import.meta.url);
const window = new Window({ url: 'http://localhost/' });
for (const k of ['document', 'location', 'localStorage', 'Event', 'HTMLElement', 'Node', 'history', 'navigator']) {
  try { globalThis[k] = window[k]; } catch { /* solo-lectura en Node, se omite */ }
}
globalThis.window = window;
globalThis.dispatchEvent = window.dispatchEvent.bind(window);
globalThis.scrollTo = () => {};
document.body.innerHTML = '<div id="app"></div>';

const results = [];
const check = (name, cond) => { results.push((cond ? 'OK  ' : 'FAIL') + ' ' + name); };

await import('./src/main.js');
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

check('home h1', /Estudia el parcial/.test($('h1')?.textContent || ''));
check('nav links>=10', $$('.nav a').length >= 10);

location.hash = '#/aula/u3';
dispatchEvent(new Event('hashchange'));
check('aula u3', /funcional/i.test($('h1')?.textContent || ''));

location.hash = '#/aula/u2';
dispatchEvent(new Event('hashchange'));
check('aula u2', /imperativa/i.test($('h1')?.textContent || ''));
check('aula u2 secciones', $$('.main h2').length >= 8);

location.hash = '#/practica/u2';
dispatchEvent(new Event('hashchange'));
check('practica u2 13 preguntas', $$('#qlist article').length === 13);
{
  document.querySelector('#q-q33 button.opt[data-i="1"]').click();
  check('q33 u2 ok', !!$('#fb-q33 .feedback.ok'));
  const tf = $$('#q-q36 button.opt');
  tf[1].click();
  check('q36 u2 tf ok', !!$('#fb-q36 .feedback.ok'));
}

location.hash = '#/practica/u1';
dispatchEvent(new Event('hashchange'));
{
  document.querySelector('#q-q01 button.opt[data-i="1"]').click(); // respuesta correcta (índice original 1)
  check('q01 single ok', !!$('#fb-q01 .feedback.ok'));
  [0, 2, 3, 4].forEach(i => document.querySelector('#q-q02 button.opt[data-i="' + i + '"]').click());
  document.querySelector('#q-q02 [data-finish="q02"]').click();
  check('q02 multi ok', !!$('#fb-q02 .feedback.ok'));
  document.querySelector('#q-q11 input').value = '  FORMA ';
  document.querySelector('#q-q11 [data-check]').click();
  check('q11 fill ok (case/space)', !!$('#fb-q11 .feedback.ok'));
  const tf = $$('#q-q04 button.opt');
  tf[0].click();
  check('q04 tf ok', !!$('#fb-q04 .feedback.ok'));
  // respuesta incorrecta a propósito (q05: correcta es data-i="1", se pulsa la "0")
  document.querySelector('#q-q05 button.opt[data-i="0"]').click();
  check('q05 wrong detectado', !!$('#fb-q05 .feedback.no'));
}

location.hash = '#/lab';
dispatchEvent(new Event('hashchange'));
document.querySelector('#labin').value = '(+ 1 2)\n(mcd 1071 462)';
document.querySelector('#labrun').click();
check('lab evalúa', /→ 3/.test($('#labout').textContent) && /→ 21/.test($('#labout').textContent));
document.querySelector('#trsqr').click();
check('tracer sqr', /49/.test($('#trout').textContent));
document.querySelector('#trn').value = '0';
document.querySelector('#trcand').click();
check('tracer cand div0', /división por cero/.test($('#trout').textContent));
document.querySelector('#pred').value = '3';
document.querySelector('#predbtn').click();
check('predicción', !!$('#predout .feedback.ok'));

location.hash = '#/glosario';
dispatchEvent(new Event('hashchange'));
document.querySelector('#gq').value = 'church';
document.querySelector('#gq').dispatchEvent(new Event('input', { bubbles: true }));
check('glosario filtra', /Church-Rosser|Turing/.test($('#glist').textContent));

location.hash = '#/diagramas';
dispatchEvent(new Event('hashchange'));
check('diagramas 4 svg', $$('.main svg').length === 4);

location.hash = '#/practica';
dispatchEvent(new Event('hashchange'));
check('practica total 55', $$('#qlist article').length === 55);
// la mezcla visual debe variar entre dos visitas (data-i conserva el índice original)
const orderOnce = $$('#qlist article').map(a => { const b = a.querySelector('button.opt'); return b ? b.dataset.i : '-'; }).join(',');
dispatchEvent(new Event('hashchange'));
const orderTwice = $$('#qlist article').map(a => { const b = a.querySelector('button.opt'); return b ? b.dataset.i : '-'; }).join(',');
check('quiz mezcla opciones', orderOnce !== orderTwice);

location.hash = '#/repaso';
dispatchEvent(new Event('hashchange'));
check('repaso card', !!$('#card'));
const before = $('#ctext').textContent;
$('#card').click();
check('flash voltea', $('#ctext').textContent !== before);
$('#cknown').click();
check('flash registra', JSON.parse(localStorage.getItem('ic4700-progress-v1')).flash && true);

location.hash = '#/examen';
dispatchEvent(new Event('hashchange'));
document.querySelector('#start').click();
check('examen 10 preguntas', $$('#exam article').length === 10);
$$('#exam article').forEach(a => {
  const b = a.querySelector('button.opt');
  if (b) b.click();
  const inp = a.querySelector('input');
  if (inp) { inp.value = 'x'; a.querySelector('[data-check]').click(); }
});
document.querySelector('#finish').click();
check('examen califica', /Nota: \d+\/10/.test($('#score').textContent));

const st = JSON.parse(localStorage.getItem('ic4700-progress-v1'));
check('progreso persistido', st && Object.keys(st.quiz).length > 5 && st.exams.length === 1);

console.log(results.join('\n'));
const fails = results.filter(r => r.startsWith('FAIL')).length;
console.log(fails ? `SMOKE: ${fails} FALLOS` : 'SMOKE: TODO OK');
process.exit(fails ? 1 : 0);
