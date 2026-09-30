// Progreso honesto en localStorage: solo registra actividad real del estudiante.
const KEY = 'ic4700-progress-v1';
function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || fresh(); }
  catch { return fresh(); }
}
function fresh() {
  return { quiz: {}, flash: {}, study: {}, exams: [], updatedAt: null };
}
let state = load();
function save() {
  state.updatedAt = new Date().toISOString();
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* sin almacenamiento */ }
}
export const store = {
  get state() { return state; },
  recordQuiz(qid, ok) {
    const r = state.quiz[qid] || { tries: 0, ok: 0 };
    r.tries++; if (ok) r.ok++;
    state.quiz[qid] = r; save();
  },
  recordFlash(fid, known) {
    state.flash[fid] = { known: !!known, at: Date.now() }; save();
  },
  recordStudy(page) { state.study[page] = Date.now(); save(); },
  recordExam(exam) { state.exams.push({ ...exam, at: Date.now() }); save(); },
  reset() { state = fresh(); save(); },
  stats() {
    const q = Object.values(state.quiz);
    const answered = q.length;
    const mastered = q.filter(r => r.ok > 0).length;
    const tries = q.reduce((a, r) => a + r.tries, 0);
    const f = Object.values(state.flash);
    return {
      answered, mastered, tries,
      flashSeen: f.length, flashKnown: f.filter(x => x.known).length,
      studied: Object.keys(state.study).length,
      exams: state.exams.length,
    };
  },
  failedQids() {
    return Object.entries(state.quiz).filter(([, r]) => r.ok === 0).map(([id]) => id);
  },
};
