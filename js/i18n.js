import { uiMessages } from './clipthreat-ui-messages.js';
import { getLanguage, setLanguage, m } from './clipthreat-messages.js';

const normalize = value => value.replace(/\s+/g, ' ').trim();
const byJapanese = new Map(Object.entries(uiMessages).map(([key, pair]) => [pair.ja, key]));
const textBindings = [];
const attributeBindings = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  if (['SCRIPT', 'STYLE'].includes(node.parentElement?.tagName)) continue;
  const key = byJapanese.get(normalize(node.data));
  if (key) textBindings.push({ node, key });
}
for (const element of document.querySelectorAll('[title], [aria-label], [placeholder], [alt]')) {
  for (const name of ['title', 'aria-label', 'placeholder', 'alt']) {
    const key = byJapanese.get(normalize(element.getAttribute(name) || ''));
    if (key) attributeBindings.push({ element, name, key });
  }
}

function renderLanguage() {
  const language = getLanguage();
  document.documentElement.lang = language;
  for (const { node, key } of textBindings) {
    if (node.isConnected) node.data = ' ' + uiMessages[key][language] + ' ';
  }
  for (const { element, name, key } of attributeBindings) element.setAttribute(name, uiMessages[key][language]);
  const toggle = document.getElementById('language-toggle');
  toggle.textContent = m('language.toggle');
  toggle.setAttribute('aria-label', m('language.label'));
  toggle.setAttribute('aria-pressed', String(language === 'en'));
}

renderLanguage();
document.getElementById('language-toggle').addEventListener('click', () => {
  setLanguage(getLanguage() === 'ja' ? 'en' : 'ja');
  renderLanguage();
  // Reset active simulations through their existing cleanup path, cancelling timers and pending reads.
  document.querySelectorAll('.tab-content').forEach(tab => tab.dispatchEvent(new Event('demoleave')));
  document.querySelectorAll('[id$="CelebrationMessage"]').forEach(item => { item.textContent = ''; });
  document.querySelectorAll('input:not([type="checkbox"]):not([type="radio"]), textarea').forEach(item => { item.value = ''; });
  const url = new URL(location.href);
  url.searchParams.set('lang', getLanguage());
  history.replaceState(null, '', url);
});
