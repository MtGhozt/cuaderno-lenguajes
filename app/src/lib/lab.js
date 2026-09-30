// Laboratorio honesto:
// 1) Evaluador real de un subconjunto prefijo estilo Scheme (aritmética + define + if).
//    Ejecuta de verdad ese subconjunto; NO pretende ser Scheme completo.
// 2) Trazador de estrategias de evaluación para sqr/cand (simulación paso a paso).
// Todo corre localmente, sin red y sin código arbitrario fuera del subconjunto.

export function newEnv() { return { vars: {}, funcs: {} }; }

export function tokenize(src) {
  return src.replace(/\(/g, ' ( ').replace(/\)/g, ' ) ').trim().split(/\s+/).filter(Boolean);
}

function toAST(toks) {
  let pos = 0;
  function node() {
    if (pos >= toks.length) throw new Error('Expresión incompleta.');
    const t = toks[pos++];
    if (t === '(') {
      const items = [];
      while (toks[pos] !== ')') {
        if (pos >= toks.length) throw new Error('Falta ")".');
        items.push(node());
      }
      pos++;
      if (!items.length) throw new Error('Paréntesis vacíos.');
      return items;
    }
    if (t === ')') throw new Error('Paréntesis de cierre inesperado.');
    const n = Number(t);
    return t !== '' && !Number.isNaN(n) ? n : t;
  }
  const forms = [];
  while (pos < toks.length) forms.push(node());
  return forms;
}

export function evaluate(src, env) {
  return toAST(tokenize(src)).map(f => evalForm(f, env));
}

function evalForm(f, env) {
  if (typeof f === 'number') return f;
  if (typeof f === 'string') {
    if (f in env.vars) return env.vars[f];
    throw new Error('Símbolo desconocido: ' + f);
  }
  const [head, ...rest] = f;
  if (head === 'define') {
    if (typeof rest[0] === 'object') {
      const [name, ...params] = rest[0];
      if (typeof name !== 'string' || params.some(p => typeof p !== 'string'))
        throw new Error('define de función mal formado.');
      if (rest.length !== 2) throw new Error('define necesita (nombre params) + cuerpo.');
      env.funcs[name] = { params, body: rest[1] };
      return 'definido ' + name;
    }
    if (typeof rest[0] !== 'string' || rest.length !== 2) throw new Error('define mal formado.');
    const v = evalForm(rest[1], env);
    env.vars[rest[0]] = v;
    return v;
  }
  if (head === 'if') {
    if (rest.length !== 3) throw new Error('if necesita (cond sí no).');
    return evalForm(rest[0], env) !== 0 ? evalForm(rest[1], env) : evalForm(rest[2], env);
  }
  const args = rest.map(a => evalForm(a, env)); // eager: argumentos primero
  return apply(head, args, env);
}

function num(a) { if (typeof a !== 'number') throw new Error('Se esperaba un número.'); return a; }

function apply(head, args, env) {
  switch (head) {
    case '+': return args.reduce((a, b) => num(a) + num(b), 0);
    case '*': return args.reduce((a, b) => num(a) * num(b), 1);
    case '-':
      if (!args.length) throw new Error('"-" necesita argumentos.');
      return args.length === 1 ? -num(args[0]) : args.slice(1).reduce((a, b) => num(a) - num(b), num(args[0]));
    case '/':
      if (args.length < 2) throw new Error('"/" necesita 2 argumentos.');
      return args.slice(1).reduce((a, b) => { if (num(b) === 0) throw new Error('División por cero.'); return num(a) / num(b); }, num(args[0]));
    case 'mod':
      if (args.length !== 2) throw new Error('mod necesita 2 argumentos.');
      return num(args[0]) % num(args[1]);
    case '=': return args.length === 2 && num(args[0]) === num(args[1]) ? 1 : 0;
    case '<': return args.length === 2 && num(args[0]) < num(args[1]) ? 1 : 0;
    case '>': return args.length === 2 && num(args[0]) > num(args[1]) ? 1 : 0;
    default: {
      const fn = env.funcs[head];
      if (typeof head !== 'string' || !fn)
        throw new Error('Desconocido: ' + head + '. Disponibles: + - * / mod = < > if, define y tus funciones.');
      if (args.length !== fn.params.length)
        throw new Error(head + ' espera ' + fn.params.length + ' argumentos.');
      const saved = { ...env.vars };
      fn.params.forEach((p, i) => { env.vars[p] = args[i]; });
      const out = evalForm(fn.body, env);
      env.vars = saved;
      return out;
    }
  }
}

/* Trazador de estrategias para sqr y cand — simulación didáctica del material. */
export function traceSqr() {
  return [
    'sqr(n) = n*n, con n = m+1, m = 6.',
    'EAGER: evalúa m+1 → 7 una sola vez; sustituye: 7*7 = 49. (1 evaluación)',
    'ORDEN-NORMAL: liga n a «m+1» sin evaluar; al usar n*n evalúa (6+1)*(6+1) = 49. (2 evaluaciones)',
    'Conclusión: mismo resultado; eager es más eficiente aquí porque sqr usa siempre su argumento (es estricta en n).',
  ];
}
export function traceCand(n, t) {
  const b1 = n > 0;
  return [
    'cand(b1,b2) = si b1 entonces b2, si no False. Llamada: cand((n>0),(t/n>50)) con n=' + n + ', t=' + t + '.',
    'EAGER: evalúa (n>0) → ' + b1 + ' y evalúa (t/n>50)' + (n === 0
      ? ' → ¡división por cero! El programa falla.'
      : ' → ' + (t / n > 50) + '. Resultado: ' + (b1 ? (t / n > 50) : false) + '.'),
    'ORDEN-NORMAL: evalúa primero (n>0) → ' + b1 + '.' + (b1
      ? ' Como es verdadero, ahora sí evalúa el segundo argumento.'
      : ' Como es falso, NUNCA evalúa t/n>50. Resultado: False, sin error.'),
    'Conclusión: cand solo es estricta en su primer argumento; el orden de evaluación cambia el resultado observable.',
  ];
}
