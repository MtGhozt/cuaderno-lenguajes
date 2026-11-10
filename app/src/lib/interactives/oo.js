/** Diagrama de objetos + mensajes. Fuente: Clase 7. */

const OBJECTS = {
  cuenta: { label: 'Cuenta', state: { saldo: 100 }, log: [] },
  cajero: { label: 'Cajero', state: { activo: true }, log: [] },
  cliente: { label: 'Cliente', state: { nombre: 'Ana' }, log: [] },
};

const MSGS = [
  { id: 'm1', from: 'cliente', to: 'cajero', name: 'solicitarRetiro(40)', kind: 'colaborar',
    apply: () => { OBJECTS.cajero.log.push('recibe solicitarRetiro(40)'); } },
  { id: 'm2', from: 'cajero', to: 'cuenta', name: 'debitar(40)', kind: 'mutar',
    apply: () => {
      OBJECTS.cuenta.state.saldo -= 40;
      OBJECTS.cuenta.log.push('saldo := ' + OBJECTS.cuenta.state.saldo);
    } },
  { id: 'm3', from: 'cuenta', to: 'cajero', name: 'ok(saldo)', kind: 'consultar',
    apply: () => { OBJECTS.cajero.log.push('ok saldo=' + OBJECTS.cuenta.state.saldo); } },
  { id: 'm4', from: 'cajero', to: 'cliente', name: 'entregarEfectivo(40)', kind: 'colaborar',
    apply: () => { OBJECTS.cliente.log.push('recibe 40'); } },
];

export function mountOo(root) {
  // reset state each mount
  OBJECTS.cuenta.state.saldo = 100;
  Object.values(OBJECTS).forEach(o => { o.log = []; });
  let step = -1;

  const render = () => {
    const cards = Object.entries(OBJECTS).map(([id, o]) =>
      '<div class="oo-card" data-id="' + id + '">'
      + '<h4>' + o.label + '</h4>'
      + '<pre>' + JSON.stringify(o.state, null, 0) + '</pre>'
      + '<p class="meta">' + (o.log.slice(-2).join(' · ') || '—') + '</p></div>').join('');
    const next = MSGS[step + 1];
    root.innerHTML = '<div class="labx" id="oolab">'
      + '<p class="kicker">Lab · Mensajes OO</p>'
      + '<h3>Retiro: objetos colaborando</h3>'
      + '<p class="meta">Click en «Enviar siguiente mensaje». Tipos: mutar / consultar / colaborar. Fuente: Clase 7.</p>'
      + '<div class="oo-grid">' + cards + '</div>'
      + (step >= 0 ? '<p class="oo-msg"><strong>Último:</strong> ' + MSGS[step].from + ' → ' + MSGS[step].to
        + ' · <code>' + MSGS[step].name + '</code> <span class="pill">' + MSGS[step].kind + '</span></p>' : '')
      + '<div class="btnrow">'
      + '<button type="button" class="btn primary" id="oonext"' + (next ? '' : ' disabled') + '>'
      + (next ? 'Enviar: ' + next.name : 'Secuencia completa') + '</button>'
      + '<button type="button" class="btn" id="ooreset">Reiniciar</button>'
      + '</div></div>';
    root.querySelector('#oonext').onclick = () => {
      if (!next) return;
      step++;
      MSGS[step].apply();
      render();
    };
    root.querySelector('#ooreset').onclick = () => {
      OBJECTS.cuenta.state.saldo = 100;
      Object.values(OBJECTS).forEach(o => { o.log = []; });
      step = -1;
      render();
    };
  };
  render();
}
