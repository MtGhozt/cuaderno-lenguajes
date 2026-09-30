// Stub de imports .css para la prueba de humo en Node.
export async function resolve(specifier, context, next) {
  if (specifier.endsWith('.css')) {
    return { url: 'css-stub:empty.css', shortCircuit: true };
  }
  return next(specifier, context);
}
export async function load(url, context, next) {
  if (url === 'css-stub:empty.css') {
    return { format: 'module', source: 'export default {};', shortCircuit: true };
  }
  return next(url, context);
}
