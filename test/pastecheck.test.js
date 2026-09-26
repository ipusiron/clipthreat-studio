import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { checkPasteText, classifyPasteCharacter, PASTE_CHECK_LIMIT, buildInspectorUrl } from '../js/shared.js';

const cases = [
  ['', 0, 0, false],
  ['これはテストです。ClipThreat Studioで確認します123。', 0, 0, false],
  ['Please paste your text here to check it.', 0, 0, false],
  ['https://example.com/path?a=1', 0, 0, false],
  ['了解です😀🙂👍', 0, 0, false],
  ['\u0430pple.com', 0, 0, true],
  ['paypa\u03BF', 0, 0, true],
  ['exe.\u202Ecod.txt', 0, 1, false],
  ['pass\u200Bword', 1, 0, false],
  ['Привет', 0, 0, false]
];
cases.forEach(([text, invisible, bidi, mixed], index) => {
  test(`paste specification row ${index + 1}`, () => {
    const result = checkPasteText(text);
    assert.equal(result.invisible.length, invisible);
    assert.equal(result.bidi.length, bidi);
    assert.equal(result.mixed, mixed);
    assert.equal(result.key, invisible || bidi || mixed ? 'paste.warning' : 'paste.clear');
  });
});

test('every specified control and tag is classified, adjacent characters stay normal', () => {
  for (const cp of [0xAD, 0x180E, 0x200B, 0x200C, 0x200D, 0x2060, 0xFEFF,
    ...Array.from({ length: 128 }, (_, i) => 0xE0000 + i)]) {
    assert.equal(classifyPasteCharacter(String.fromCodePoint(cp)).key, 'invisible');
  }
  for (const cp of [0x200E, 0x200F, 0x202A, 0x202B, 0x202C, 0x202D, 0x202E, 0x2066, 0x2067, 0x2068, 0x2069]) {
    assert.equal(classifyPasteCharacter(String.fromCodePoint(cp)).key, 'bidi');
  }
  for (const cp of [0xAC, 0xAE, 0x180D, 0x180F, 0x200A, 0x2010, 0x2028, 0x2029, 0x202F, 0x205F, 0x2061, 0xE0080]) {
    assert.equal(classifyPasteCharacter(String.fromCodePoint(cp)).key, 'normal');
  }
});

test('code point positions, safe labels, mixed-script positions and maximum length', () => {
  const result = checkPasteText('😀\u200B\u202E\u{E0061}a\u0430');
  assert.deepEqual(result.invisible.map(x => x.position), [2, 4]);
  assert.deepEqual(result.bidi.map(x => x.position), [3]);
  assert.deepEqual(result.mixedCharacters.map(x => x.position), [5, 6]);
  assert.equal(result.safeText, '😀[U+200B ZWSP][U+202E RLO][U+E0061 TAG]a\u0430');
  assert.equal(checkPasteText('😀'.repeat(PASTE_CHECK_LIMIT)).length, PASTE_CHECK_LIMIT);
  assert.deepEqual(checkPasteText('a'.repeat(PASTE_CHECK_LIMIT + 1)), { key: 'paste.tooLong', limit: PASTE_CHECK_LIMIT });
});

test('paste-check integration uses only a fragment', () => {
  const url = new URL(buildInspectorUrl('a\u202Eb', 'paste-check'));
  assert.equal(url.search, '');
  assert.ok(url.hash.startsWith('#text='));
  assert.equal(new URLSearchParams(url.hash.slice(1)).get('attack_type'), 'paste-check');
});

test('paste UI uses safe text, explicit reading and read-only reset installation', () => {
  const source = readFileSync(new URL('../js/pastecheck.js', import.meta.url), 'utf8');
  assert.match(source, /safe.textContent = data.safeText/);
  assert.match(source, /readOnly: true/);
  assert.match(source, /generation !== timers.generation/);
  assert.doesNotMatch(source, /innerHTML|writeText|fetch\(|XMLHttpRequest|sendBeacon/);
});
