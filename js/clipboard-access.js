import { setDisplay } from './ui.js';
import { m } from './clipthreat-messages.js';

// Serialize writes so a reset cannot finish before an earlier pending copy.
let pending = Promise.resolve();
export function writeClipboardText(text) {
  const operation = pending.then(async () => {
    if (!globalThis.navigator?.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(text);
  });
  pending = operation.catch(() => {});
  return operation;
}

export async function clearDemoClipboard(region) {
  region.setAttribute('aria-live', 'polite');
  try {
    await writeClipboardText('');
    const notice = document.createElement('p');
    notice.className = 'cleanup-notice';
    notice.textContent = m('clipboard.cleared');
    region.querySelector('.cleanup-notice')?.remove();
    region.append(notice);
    return true;
  } catch {
    const notice = document.createElement('p');
    notice.className = 'cleanup-notice';
    notice.textContent = m('clipboard.unavailable');
    region.querySelector('.cleanup-notice')?.remove();
    region.append(notice);
    return false;
  }
}

export function createDemoTimers() {
  let generation = 0;
  const timers = new Set();
  return {
    get generation() { return generation; },
    later(callback, delay) {
      const current = generation;
      const timer = setTimeout(() => {
        timers.delete(timer);
        if (current === generation) callback();
      }, delay);
      timers.add(timer);
    },
    cancel() {
      generation++;
      timers.forEach(clearTimeout);
      timers.clear();
    }
  };
}

export function installDemoResets(names, region, before = () => {}) {
  const tab = region.closest('.tab-content');
  region.setAttribute('aria-live', 'polite');
  for (const name of names) {
    const original = window[name];
    window[name] = function(...args) {
      before();
      original(...args);
      tab.querySelectorAll('textarea').forEach(input => { input.value = ''; });
      tab.querySelectorAll('[id$="CelebrationMessage"]').forEach(item => { setDisplay(item, 'none'); });
      tab.querySelectorAll('.selected').forEach(item => item.classList.remove('selected'));
      return clearDemoClipboard(region);
    };
  }
  tab.addEventListener('demoleave', () => { void window[names[names.length - 1]](); });
}
