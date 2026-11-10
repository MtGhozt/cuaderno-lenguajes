/** Comparador lado a lado de paradigmas. Fuentes: Clases 1 y 7. */

const ROWS = [
  ['Unidad básica', 'Procedimiento', 'Función', 'Cláusula / predicado', 'Objeto'],
  ['Acción', 'Ejecutar instrucciones', 'Evaluar funciones', 'Demostrar sentencias', 'Enviar mensajes'],
  ['Estado', 'Mutable (RAM)', 'Inmutable (puro)', 'Ligaduras lógicas', 'Encapsulado en el objeto'],
  ['Control', 'sec / if / while', 'composición / recursión', 'BC o FC + unificación', 'despacho de mensajes'],
  ['Ejemplo curso', 'C / Pascal / COBOL', 'Scheme / Haskell', 'Prolog / CLIPS', 'Simula / Smalltalk / Java'],
];

export function mountComparator(root) {
  root.innerHTML = '<div class="labx">'
    + '<p class="kicker">Comparador</p>'
    + '<h3>Imperativo · Funcional · Lógico · OO</h3>'
    + '<div class="cmp-wrap"><table class="cmp">'
    + '<thead><tr><th></th><th>Imperativo</th><th>Funcional</th><th>Lógico</th><th>OO</th></tr></thead>'
    + '<tbody>' + ROWS.map(r => '<tr>' + r.map((c, i) => (i === 0 ? '<th>' : '<td>') + c + (i === 0 ? '</th>' : '</td>')).join('') + '</tr>').join('')
    + '</tbody></table></div>'
    + '<p class="marginal">Misma tarea (p. ej. MCM): imperativo itera; funcional compone; lógico demuestra ∃; OO coordina mensajes entre objetos calculadores.</p>'
    + '</div>';
}
