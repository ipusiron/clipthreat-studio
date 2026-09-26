import { checkPasteText, buildInspectorUrl } from './shared.js';
import { m } from './clipthreat-messages.js';
import { installDemoResets, createDemoTimers } from './clipboard-access.js';

const input = document.getElementById('pastecheckInput');
const result = document.getElementById('pastecheckResult');
const status = document.getElementById('pastecheckStatus');
const safe = document.getElementById('pastecheckSafe');
const timers = createDemoTimers();

window.runPasteCheck = function() {
  timers.cancel();
  const data = checkPasteText(input.value);
  result.replaceChildren();
  safe.textContent = data.safeText || '';
  status.textContent = m(data.key);
  if (data.key === 'paste.tooLong') return;
  for (const [key, items] of [['paste.invisible', data.invisible], ['paste.bidi', data.bidi], ['paste.mixed', data.mixedCharacters]]) {
    const row = document.createElement('p');
    row.textContent = m(key) + ': ' + (items.length
      ? m('paste.detected', [items.length, items.map(item => item.position).join(', ')]) : m('paste.none'));
    result.append(row);
  }
};

window.readPasteCheck = async function() {
  timers.cancel();
  const generation = timers.generation;
  try {
    const text = await navigator.clipboard.readText();
    if (generation !== timers.generation) return;
    input.value = text;
    window.runPasteCheck();
  } catch {
    if (generation !== timers.generation) return;
    status.textContent = m('paste.denied');
    input.focus();
  }
};

window.resetPasteCheck = function() {
  result.replaceChildren();
  safe.textContent = '';
  status.textContent = m('paste.reset');
};

window.inspectPasteCheck = function() {
  if (checkPasteText(input.value).key === 'paste.tooLong') {
    status.textContent = m('paste.tooLong');
    return;
  }
  window.open(buildInspectorUrl(input.value, 'paste-check'), '_blank', 'noopener,noreferrer');
};

input.addEventListener('input', () => timers.cancel());
installDemoResets(['resetPasteCheck'], status, () => timers.cancel(), { readOnly: true });
