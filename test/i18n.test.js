import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dictionaries, resolveLanguage, setLanguage, m } from '../js/clipthreat-messages.js';
import { uiMessages } from '../js/clipthreat-ui-messages.js';

const japanese = /[\u3040-\u30ff\u3400-\u9fff]/u;
test('both dictionaries have identical keys, types and interpolation slots; all English is translated', () => {
  assert.deepEqual(Object.keys(dictionaries.ja).sort(), Object.keys(dictionaries.en).sort());
  for (const [key, ja] of Object.entries(dictionaries.ja)) {
    const en = dictionaries.en[key];
    assert.equal(Array.isArray(en), Array.isArray(ja), key);
    if (Array.isArray(ja)) assert.equal(en.length, ja.length, key);
    assert.doesNotMatch(String(en), japanese, key);
  }
  for (const [key, pair] of Object.entries(uiMessages)) {
    assert.deepEqual(Object.keys(pair).sort(), ['en', 'ja']);
    assert.ok(pair.en.length > 0, key);
    assert.doesNotMatch(pair.en, japanese, key);
  }
});

test('language precedence: URL, saved preference, then browser language', () => {
  assert.equal(resolveLanguage('?lang=en', 'ja', 'ja-JP'), 'en');
  assert.equal(resolveLanguage('?lang=ja', 'en', 'en-US'), 'ja');
  assert.equal(resolveLanguage('?lang=invalid', 'en', 'ja'), 'en');
  assert.equal(resolveLanguage('', 'invalid', 'ja-JP'), 'ja');
  assert.equal(resolveLanguage('', null, 'fr-FR'), 'en');
  assert.equal(resolveLanguage('', null, 'en-US'), 'en');
});

test('message lookup switches language, rejects missing keys and preserves interpolation', () => {
  try {
    setLanguage('en');
    assert.equal(m('paste.detected', [2, '1, 3']), 'Detected: 2. Positions (starting at 1): 1, 3');
    assert.throws(() => m('missing.key'), /Unknown message/);
    assert.throws(() => setLanguage('invalid'), /Unsupported/);
  } finally { setLanguage('ja'); }
});

test('all initial Japanese text and translatable attributes have static dictionary entries', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8').replace(/<!--[\s\S]*?-->/g, '');
  const normalize = text => text.replace(/\s+/g, ' ').trim();
  const entries = new Set(Object.values(uiMessages).map(pair => pair.ja));
  const strings = [...html.matchAll(/>([^<>]+)</g)].map(match => match[1]);
  strings.push(...[...html.matchAll(/(?:aria-label|title|placeholder|alt)="([^"]*)"/g)].map(match => match[1]));
  for (const text of strings.filter(text => japanese.test(text))) assert.ok(entries.has(normalize(text)), text);
});
